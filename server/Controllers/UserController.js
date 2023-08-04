import bcrypt from 'bcrypt';
import UserModel from '../Models/userModel.js';

// Get A User From Database
export const getUser = async (req,res) => {
    const id = req.params.id;
    
    try{
        const user = await UserModel.findById(id);
        if(user){
            const {password, ...otherDetails} = user._doc;
            res.status(200).json(otherDetails);
        }else{
            res.status(404).json({message :"No User Found!"});
        }
    }catch(error){
        // res.status(500).json({message :error.message})
        res.status(404).json({message :"No User Found!"});

    }
}

// Update A User 
export const updateUser = async (req,res) => {
    const id = req.params.id;
    const {currentUserId,currentUserAdminStatus,password} =req.body;
    if(id === currentUserId || currentUserAdminStatus){
        try{
            if(password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt);
            }
            const user = await UserModel.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json(user);
        }catch(error){
            res.status(500).json({message :error.message})
    
        }
    }else{
        res.status(403).json({message :"Access Denied!"});
    }
    
}
// Delete A User 
export const deleteUser = async (req,res) => {
    const id = req.params.id;
    const {currentUserId,currentUserAdminStatus} =req.body;
    if(id === currentUserId || currentUserAdminStatus){
        try{
            const user = await UserModel.findByIdAndDelete(id);
            res.status(200).json({message :"User Deleted! Successfully!"});
        }catch(error){
            res.status(500).json({message :error.message})
    
        }
    }else{
        res.status(403).json({message :"Access Denied!"});
    }
    
}

// Follow A User
export const followUser = async (req,res)=>{
    const id = req.params.id;
    const {currentUserId} =req.body;
    if(id === currentUserId){
        res.status(403).json({message :"Access Denied!"});
    }else{
        try{
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);
            if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push : {followers:currentUserId}});
                await followingUser.updateOne({$push : {following:id}});
                res.status(200).json({message :"User Followed!"});
            }else{
                res.status(403).json({message :"User allready followed by you!"});
            }
        }catch(error){
            res.status(500).json({message :error.message})
    
        }
    }
}

// Follow A User
export const unfollowUser = async (req,res)=>{
    const id = req.params.id;
    const {currentUserId} =req.body;
    if(id === currentUserId){
        res.status(403).json({message :"Access Denied!"});
    }else{
        try{
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);
            if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull : {followers:currentUserId}});
                await followingUser.updateOne({$pull : {following:id}});
                res.status(200).json({message :"User Unfollowed!"});
            }else{
                res.status(403).json({message :"User not followed by you!"});
            }
        }catch(error){
            res.status(500).json({message :error.message})
    
        }
    }
}