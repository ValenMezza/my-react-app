import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../Products/ProductsData";


export const ItemDetailContainer =()=>{

    const[data,setData]= useState({});
    const {detalleId}= useParams();


    useEffect(()=>{
        const getData =new Promise(resolve => {
            setTimeout(() => {
                resolve(ProductsData)
            }, 1000);
        });
        getData.then(res=> setData(res.find(product => product.id === parseInt(detalleId))));
    },[])

    return(
        <>
            <ItemDetail data={data}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;