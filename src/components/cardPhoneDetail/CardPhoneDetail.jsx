import React, {useEffect, useState} from "react";
import {useParams, NavLink} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import styles from './CardPhoneDetail.module.scss'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import {useDispatch} from "react-redux";
import {addToCard, removeInCard} from "../../redux/actions";

function CardPhoneDetail() {
    const [data, setData] = useState([])
    const [activeButton, setActiveButton] = useState('Добавить в корзину')
    useEffect(() => {
        fetch('http://localhost:3000/iphones.json')
            .then(resp => resp.json())
            .then(data => setData(data.Iphones))
        return (() => {
            return
        })
    })
    const {id} = useParams()
    const dispatch = useDispatch()

    const handleClick = (elem) => {
        if (activeButton === 'Добавить в корзину') {
            dispatch(addToCard(elem))
            setActiveButton('Удалить с корзины')
        } else {
            dispatch(removeInCard(elem))
            setActiveButton('Добавить в корзину')
        }
    }

    return (
        <div className={styles.main}>
            {data.filter(item => item.name === id).map(elem => {
                return (
                    <div className={styles.aboutPhone} key={elem.id}>
                        <div className={styles.phone}>
                            <img src={elem.image} alt={elem.name}/>
                            <div>
                                <NavLink to='/'
                                         className={styles.iconBack}>
                                    <FaLongArrowAltLeft></FaLongArrowAltLeft>
                                </NavLink>
                            </div>
                        </div>
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>
                                    {elem.name}
                                </h2>
                                </Card.Title>
                                <Card.Title> Цена: {elem.price}</Card.Title>
                                <Card.Text>
                                    Доступные цветы: {elem.color}
                                </Card.Text>
                                <Card.Text>
                                    Дисплей: {elem.display}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleClick(elem)}>{activeButton}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default CardPhoneDetail