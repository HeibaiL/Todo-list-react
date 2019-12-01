import React from "react"
export default function Header(){
    let date = new Date;
    let newDate=date.toLocaleString(options);
    const options = {weekday:"long", month:"short", day:"numeric" }
    return (
        <div className="header">
            <div className="date">
                <p>{date.toLocaleDateString("en-us",options)}</p>
            </div>
            <div className="icon">
                <p> Something here</p>
            </div>

        </div>
    )
}