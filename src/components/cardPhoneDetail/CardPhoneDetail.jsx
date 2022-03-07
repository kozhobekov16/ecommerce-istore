import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
function CardPhoneDetail() {
    const {id} = useParams()
    return(
        <div>
            {id}
        </div>
    )
}
export default CardPhoneDetail