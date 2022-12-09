import React from "react";
import Card from "react-bootstrap/Card";
import classicyou from "../images/classicyou.png"

export default function Projects(){
    return(
        <>
        <h1>Projects</h1>
        <div className="Project-conatiner">
        <Card className="project-card" >
            <Card.Img className="project-img" variant="top" src={classicyou} />
            <Card.Body className="project-body">
                <Card.Title className="project-title">
                Classic You - Ecommerece Website With Loyalty Points - IN PROGRESS
                </Card.Title>
                <Card.Text className="project-text">
                In this project we are going to implement the ecommerece site
                 where people can buy products and also get loyalty points on some
                 products , they will get the points in there classic you account only when
                 product is delivered, after that he can actually use that point to redeem on particular
                 product or he can tranfer the points to the Classic You User who have account name. 
                </Card.Text>

            </Card.Body>
        </Card>

        </div>
        </>
    );

}