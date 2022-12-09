import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
// import { ListGroupItem } from "react-bootstrap";
import educationData from "../data.json";

export default function Education(){
    return(
        <div className="education-conatiner">
            <h1 >Education</h1>


            {
                educationData.map(
                    data => {
                        return(
                            <Card className="Card" key={data.id} border="warning" >
                <Card.Header className="card-header">{data.couser}</Card.Header>
                
                <ListGroup className="list-group-flush">
                <ListGroup.Item className="listg-items">{data.institute}</ListGroup.Item>
                <ListGroup.Item className="listg-items">{data.year}</ListGroup.Item>
                <ListGroup.Item className="listg-items">{data.percentage}</ListGroup.Item>
                </ListGroup>
            </Card>
                        )
                    }
                )
            }

        </div>
        
    );

}