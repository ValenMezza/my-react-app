import ItemList from "../ItemList";
// import { ProductsData } from "../Products/ProductsData";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');

        if (categoriaId) {
            const queryFilter = query(queryCollection,
                where('categoria', '==', categoriaId),
            )
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));

        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));
        }
    }, [categoriaId]);
    return (
        <>
            <div className="cards-container">
                <ItemList data={data}></ItemList>
            </div>
        </>
    )
}
export default ItemListContainer;