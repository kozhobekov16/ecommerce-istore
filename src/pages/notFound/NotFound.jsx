import React from "react";
import notFoundImg from '../../assets/img/404.svg'
function NotFound() {
    return(
        <div style={{ textAlign: 'center', paddingTop: '2rem'}}>
            <h3>Такой страницы не существует</h3>
            <img src={notFoundImg} alt="notf" style={{width: '50%'}}/>
        </div>
    )
}
export default NotFound