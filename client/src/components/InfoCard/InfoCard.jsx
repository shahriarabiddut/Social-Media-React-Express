import { UilPen } from "@iconscout/react-unicons";
import React, { useState } from 'react';
import ProfileModal from "../ProfileModal/ProfileModal";
import "./InfoCard.css";

const InfoCard = () => {
    const [modalOpened,setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                <UilPen width='1.2rem' onClick={()=>setModalOpened(true)} />
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
        </div>
        <div className="info">
            <span><b>Status</b> </span>
            <span>Single</span>
        </div>
        <div className="info">
            <span><b>Lives in</b> </span>
            <span>Jashore</span>
        </div>
        <div className="info">
            <span><b>Works at</b> </span>
            <span>Freelancer</span>
        </div>
        <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard