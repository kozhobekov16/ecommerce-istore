import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeInCard } from "../../redux/actions";
import styles from './Basket.module.scss'
import { BasketEmpty } from "../../components";
import { FaTimes } from 'react-icons/fa'

function Basket() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.addToCard)
    return (
        <div className={styles.basket}>
            {state.length === 0 ? <BasketEmpty /> : <div>
                <div className={styles.title}>
                    <h1>Корзина</h1>
                    <p>Товары в вашей корзине</p>
                </div>
                {state.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className={styles.productName}>
                                <div className={styles.product}>
                                    <h3>Продукт:</h3>
                                    <p>
                                        {item.name}
                                    </p>
                                    <div className={styles.detail}>
                                        <img src={item.image}
                                            alt="imgProduct" />
                                        <div>
                                            <div className={styles.price}>
                                                <h4>Цена:</h4>
                                                <p>{item.price}</p>
                                            </div>
                                            <p>
                                                {item.display}
                                            </p>
                                            <p>
                                                {item.color}
                                            </p>
                                            <p>
                                                {item.proceccor}
                                            </p>
                                            <p>
                                                {item.om}
                                            </p>

                                        </div>


                                    </div>

                                </div>
                                <FaTimes
                                    onClick={() => dispatch(removeInCard(item))}
                                    className={styles.remove}
                                    title="Удалить из корзины"
                                >
                                    Remove
                                </FaTimes>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

export default Basket