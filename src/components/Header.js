import React from "react";

export default function Header(props){
    let date = new Date();
    const options = {weekday:"long", month:"short", day:"numeric" };

    return (
        <div className="header">
            <div className="date">
                <p>{date.toLocaleDateString("en-us",options)}</p>
            </div>
            <div className="refresh">
                <a  onClick={props.refresh}><i className="fas fa-sync-alt icon"></i></a>
            </div>

        </div>
    )
}