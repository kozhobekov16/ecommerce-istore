import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import styles from './MacbookDetail.module.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../redux/actions'
const MacbookDetail = () => {
    const dispatch = useDispatch()
    const [macbook, setMacbook] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => setMacbook(data.macbooks))
    }, [])
    
    const addToBasket = (elem) => {
        dispatch(addToCard(elem))
    }

    const { name } = useParams()
    return (
        <div className={styles.macbookDetail}>
            {macbook.filter(mac => mac.name === name).map(elem => (
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
                    <div>
                    </div>
                    <Card>
                        <Card.Body>
                            <Card.Title><h2>
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
                            <Button variant="primary" onClick={() => addToBasket(elem)}>Добавить в карзину</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default MacbookDetail