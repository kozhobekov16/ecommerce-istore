import React from "react";
import notFoundImg from '../../assets/img/404-error-template-10.png'
function NotFound() {
    return(
        <div>
            <img src={notFoundImg} alt="notf" style={{width: '100%'}}/>
        </div>
    )
}
export default NotFound