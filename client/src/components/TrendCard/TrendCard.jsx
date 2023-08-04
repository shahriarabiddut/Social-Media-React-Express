import React from 'react';
import { TrendData } from '../../Data/TrendData';
import './TrendCard.css';
;

const TrendCard = props => {
  return (
    <div className="TrendCard">
        <h3>Trending Today</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span><b>#{trend.name} </b></span>
                    <span>({trend.shares}k shares) ⇡</span>
                </div>
            )
        })}
    </div>
  )
}

TrendCard.propTypes = {}

export default TrendCard