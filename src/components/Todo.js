import React from "react";

let todos=[];
export default function (getTodo){
    return (
        <div className="todo">
            <i className="far fa-circle icon"></i>
            <p>
                {}
            </p>
            <p>
                <i className="fas fa-times icon"></i>
                          {/* <i class="fas fa-check-circle"></i> */}
            </p>
        </div>
    )

}