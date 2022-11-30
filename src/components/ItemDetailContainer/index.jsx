import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { ProductsData } from "../Products/ProductsData";
import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";


export const ItemDetailContainer =()=>{

    const[data,setData]= useState({});
    const {detalleId}= useParams();

    useEffect(()=>{
        const querydb= getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
            .then(res=> setData({id: res.id, ...res.data()}));
    },[detalleId])

    // useEffect(()=>{
    //     const getData =new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(ProductsData)
    //         }, 1000);
    //     });
    //     getData.then(res=> setData(res.find(product => product.id === parseInt(detalleId))));
    // },[detalleId])

    return(
        <>
            <ItemDetail data={data}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;