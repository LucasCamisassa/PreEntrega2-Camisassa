import React from "react";
import { useEffect, useState } from "react";
import data from "../data/cellphone_data.json";
import loader from "../img/loading.png";
import MapProducts from "./MapProducts"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

function ItemListContainer({greetings}) {
    const [cellphone, setCellphone] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const promiseData = new Promise((res, rej) => setTimeout(() => res(data), 3000))
        promiseData
            .then((response) => {
                if(!categoryId){
                    setCellphone(response)     
                } else{
                    const itemsFilter = response.filter(i => i.category === categoryId)
                    setCellphone(itemsFilter)
                }                
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            <div className="item-list-styles container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="saludo-style">{greetings}</h1>
                    </div>
                </div>
            </div>
            
            {loading ? (<img className="imgLoadingClass d-flex m-auto" src={loader} alt="cellphone"/>) : (<MapProducts cellphone={cellphone} loading={loading}/>) }

        </>
    )
}

export default ItemListContainer;
