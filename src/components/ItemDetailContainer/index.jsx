import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
const cosita=     {
    id: 2,
    product: 'Termo Stanley Negro',
    categoria: "Termos",
    Precio: 30000,
    img: 'https://http2.mlstatic.com/D_NQ_NP_631197-MLA40974977558_032020-O.webp',
    stock: 50,
    amount: 0,
    capacidad: "1,5 L",
    detalles: "Porque algunas cosas son para toda la vida, este termo Stanley fue pensado para acompañarte a través de los años, ya que durabilidad y estilo son las palabras que definen a la marca.",
};
export const ItemDetailContainer =()=>{

    const[data,setData]= useState({});

    useEffect(()=>{
        const getData =new Promise(resolve => {
            setTimeout(() => {
                resolve(cosita)
            }, 3000);
        });
        getData.then(res=> setData(res));
    },[])
    return(
        <>
            <ItemDetail data={data}></ItemDetail>
        </>
    )
}

export default ItemDetailContainer;