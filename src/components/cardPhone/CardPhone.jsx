import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from './CardPhone.module.scss'

function CardPhone({datas}) {
    const {image, name, price, color} = datas
    return(
        <div className={styles.main}>
            <Card className={styles.cards}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{price}</ListGroupItem>
                    <ListGroupItem>{color}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <NavLink to={`/cardPhone/${name}`}>Подробнее</NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardPhone