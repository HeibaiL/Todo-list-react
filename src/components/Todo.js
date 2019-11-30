import React from "react";


export default function (props){
    return (
        <div className="todo">
            <p>
                {props.todo}
            </p>
            <p>
                two icons <i className="far fa-circle circle"></i>
                          {/* <i class="fas fa-check-circle"></i> */}
            </p>
        </div>
    )

}