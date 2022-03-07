import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function CardPhone({datas}) {
    const {image, name, price, color, id} = datas
    return(
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{price}</ListGroupItem>
                    <ListGroupItem>{color}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <NavLink to={`${name}`}>Подробнее</NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardPhone