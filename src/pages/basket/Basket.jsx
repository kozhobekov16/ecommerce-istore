import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {removeInCard} from "../../redux/actions";
import styles from './Basket.module.scss'
import {BasketEmpty} from "../../components";

function Basket() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.addToCard)
    return (
        <div className={styles.basket}>
            {state.length ===  0 ? <BasketEmpty/> : state.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>
                            {item.name}
                        </h2>
                        <button onClick={() => dispatch(removeInCard(item))}>Remove</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Basket