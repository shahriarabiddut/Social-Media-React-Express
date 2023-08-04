import mongoose from 'mongoose';
import PostModel from '../Models/postModel.js';
import UserModel from '../Models/userModel.js';

//Create New Post
export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body);
    try {
        await newPost.save();
        res.status(200).json({message :"Post Created!"});
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

//Get A Post
export const getPost = async(req,res)=>{
    const id = req.params.id;
    try {
        const post = await PostModel.findById(id);
        if(post){
            res.status(200).json(post);
        }else{
            res.status(404).json({message :"No Post Found!"});
        }
    } catch (error) {
        // res.status(500).json({message :error.message});
        res.status(404).json({message :"No Post Found!"});

    }
}

//Update Post
export const updatePost = async(req,res)=>{
    const id = req.params.id;
    const {userId} = req.body;
    try {
        const post = await PostModel.findById(id);
        if(post.userId === userId){
            await post.updateOne({$set : req.body})
            res.status(200).json({message :"Post Updated!"});
        }else{
            res.status(403).json({message :"Action Forbidden!"})
        }
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

// Delete A Post 
export const deletePost = async (req,res) => {
    const id = req.params.id;
    const {userId} =req.body;
    const post = await PostModel.findById(id);
    if(post.userId === userId ){
        try{
            await post.deleteOne();
            res.status(200).json({message :"Post Deleted! Successfully!"});
        }catch(error){
            res.status(500).json({message :error.message})
    
        }
    }else{
        res.status(403).json({message :"Access Denied!"});
    }
    
}

//Like and Dislike a Post
export const likePost = async (req,res)=>{
    const id = req.params.id;
    const {userId} = req.body;
    try {
        const post = await PostModel.findById(id);
        if(!post.likes.includes(userId)){
            await post.updateOne({$push : {likes : userId}});
            res.status(200).json({message :"Post Liked!"});
        }else{
            await post.updateOne({$pull : {likes : userId}});
            res.status(200).json({message :"Post Disliked!"});
        }
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

//Get Timeline Posts
export const getTimelinePosts = async (req,res)=>{
    const userId = req.params.id;
    try {
        const currentUserPost = await PostModel.find({userId : userId});
        const followingPosts = await UserModel.aggregate([
            {
                $match:{
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },{
                $lookup:{
                    from : "posts",
                    localField : "following",
                    foreignField : "userId",
                    as : "followingPosts"
                }
            },{
                $project :{
                    followingPosts : 1,
                    _id:0
                }
            }
        ]);
        res.status(200).json(currentUserPost.concat(...followingPosts[0].followingPosts).sort((a,b)=>{
            return b.createdAt - a.createdAt;
        }));
        
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}