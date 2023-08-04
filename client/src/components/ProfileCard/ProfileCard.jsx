import React from 'react';
import Cover from '../../img/cover.jpg';
import ProfileImage from '../../img/profileImg.jpg';
import './ProfileCard.css';

const ProfileCard = () => {
    const ProfilePage = true;
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={ProfileImage} alt="" />
        </div>
        <div className="ProfileName">
            <span> Shahriar Ahmed Biddut</span>
            <span> Junior Developer </span>
        </div>

        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>6965</span>
                    <span>Followings</span>
                </div>
                <div className="vl"> </div>
                <div className="follow">
                    <span>6778</span>
                    <span>Followers</span>
                </div>
                {ProfilePage && (
                    <>
                    <div className="vl"> </div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr/>
        </div>
        {ProfilePage? "":<span>My Profile</span>}
    </div>
  )
}

export default ProfileCard