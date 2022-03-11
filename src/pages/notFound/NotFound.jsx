import React from "react";
import notFoundImg from '../../assets/img/404.svg'
function NotFound() {
    return(
        <div style={{ textAlign: 'center'}}>
            <img src={notFoundImg} alt="notf" style={{width: '50%', marginTop: '2rem'}}/>
        </div>
    )
}
export default NotFound