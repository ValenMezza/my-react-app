import ItemList from "../ItemList";
import { ProductsData } from "../Products/ProductsData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductsData);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData (res.filter(product=>product.categoria === categoriaId)))
        }else{
        getData.then(res => setData(res));
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