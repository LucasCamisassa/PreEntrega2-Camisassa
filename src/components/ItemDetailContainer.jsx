import React from "react";
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/cellphone_data.json";
import loader from "../img/loading.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetailContainer() {

    const [product, setProduct] = useState()

    const { id } = useParams()

    useEffect(() => {
        const promiseData = new Promise((res, rej) => setTimeout(() => res(data), 3000))
        promiseData
            .then((response) => {
                const item = response.find(i => i.id === Number(id))
                setProduct(item)
            })
    }, [id])

    if(!product) return <img className="imgLoadingClass d-flex m-auto" src={loader} alt="cellphone"/>

    return (
            <Container className="detailContainer">
                <Card style={{ width: '18rem', border: "2px black solid", borderRadius:"10px", boxShadow:"2px 5px 10px black"}}>
                    <Card.Img className="imgCellRed" variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title className="cardTitleStyles">{product.category}{" "}{product.model}</Card.Title>
                        <Card.Text className="detailStyles">{product.detail}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
                
            
                     
    )
}

export default ItemDetailContainer;