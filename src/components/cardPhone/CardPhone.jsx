import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

function CardPhone({datas}) {
    console.log(datas)
    return(
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={datas.image}/>
                <Card.Body>
                    <Card.Title>{datas.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{datas.price}</ListGroupItem>
                    <ListGroupItem>{datas.color}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={datas.id}>Подробнее</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardPhone