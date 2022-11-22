import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { ProductsData } from "../Products/ProductsData";
import { useState, useEffect } from "react";
import "./ItemListContainer.css"

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductsData);
            }, 1000);
        });
        getData.then(res => setData(res));
    }, []);
    return (
        <>
            <h1>Hola</h1>
            <ItemCount initial={0} stock={10}></ItemCount>
            <div className="cards-container">
                <ItemList data={data}></ItemList>
            </div>
        </>
    )
}
export default ItemListContainer;