import { UilSetting } from '@iconscout/react-unicons';
import React, { useState } from 'react';
import Comment from '../../img/comment.png';
import Home from '../../img/home.png';
import Notification from '../../img/noti.png';
import ShareModal from '../ShareModal/ShareModal';
import TrendCard from '../TrendCard/TrendCard';
import './RightSide.css';

const RightSide = () => {
  const [modalOpened,setModalOpened] = useState(false);
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>
        <button className="button r-button" onClick={()=>setModalOpened(true)}>
            Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide