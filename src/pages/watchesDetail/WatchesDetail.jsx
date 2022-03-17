import React, { useState, useEffect } from 'react'
import styles from './WatchesDetail.module.scss'
import { useParams, NavLink } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCard, removeInCard } from '../../redux/actions'

const WatchesDetail = () => {
    const [watch, setWatch] = useState([])
    const [buttonActive, setButtonActive] = useState('Добавить в карзину')
    useEffect(() => {
        const datas = async () => {
            const fetchData = await fetch('http://localhost:3000/data.json')
            const resp = await fetchData.json()
            setWatch(resp.watches)
        }
        datas()
    })
    const dispatch = useDispatch()
    const { name } = useParams()
    const addToBasket = (elem) => {
        if (buttonActive === 'Добавить в карзину') {
            setButtonActive('Удалить с корзины')
            dispatch(addToCard(elem))
        } else {
            dispatch(removeInCard(elem))
            setButtonActive('Добавить в карзину')
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.watchesDetail}>
                {watch.filter(mac => mac.name === name).map(elem => (
                    <div className={styles.aboutPhone} key={elem.id}>
                        <div className={styles.phone}>
                            <img src={elem.image} alt={elem.name} />
                            <div>
                                <NavLink to='/catalog'
                                    className={styles.iconBack}>
                                    <FaLongArrowAltLeft></FaLongArrowAltLeft>
                                </NavLink>
                            </div>
                        </div>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h2>
                                        {elem.name}
                                    </h2>
                                </Card.Title>
                                <Card.Title> Цена: {elem.price}</Card.Title>
                                <Card.Text>
                                    Процессор: {elem.proceccor}
                                </Card.Text>
                                <Card.Text>
                                    {elem.ssd}
                                </Card.Text>
                                <Card.Text>
                                    {elem.om}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => addToBasket(elem)}
                                >{buttonActive}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default WatchesDetail