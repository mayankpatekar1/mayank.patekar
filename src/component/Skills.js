import React from "react";
import Progressbar from './Progress_bar'
import skillData from "./skillData";


export default function Skills(){
    return(
        <div>
        <h1>
            skills
        </h1>

        <div className="skill-container">
        {
            skillData.map(data =>{
                return(
                <div key={data.id}>
                <span className="skill-name">{data.skillName}</span>
        <Progressbar bgcolor={data.color} progress={data.progress} height={30} />
        </div>)
            })
        }
        
        
        </div>
         </div>
    );
}