import './itemCount.css'
import { useState, useEffect } from "react";

export const ItemCount =({initial, stock})=>{

    const [count, setCount] = useState(parseInt(initial));
    const addItem =()=>{
        setCount (count +1);
    }

    const deleteItem =()=>{
        setCount(count -1);
    }

    const itemInCart=()=>{
        console.log('Hay '+ count+ ' items en el carrito')
    }

    useEffect(()=>{
        setCount(parseInt(initial))
    }, [initial])
    return(
        <>
            <div className='counter'>
                <button disabled={count <= 0} onClick={deleteItem}>-</button>
                <span>{count}</span>
                <button disabled={count >=stock} onClick={addItem}>+</button>
                <div>
                    <button disabled={count<=0} onClick={itemInCart}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}
export default ItemCount;