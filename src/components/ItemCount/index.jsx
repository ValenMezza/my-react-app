import './itemCount.css';
import React from "react";

import { useState, useEffect } from "react";
const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button className='css-button-sliding-to-bottom--red' disabled={count <= 1} onClick={decrease}>
			<i class="bi bi-dash-lg"></i>
			</button>
			<span className='number'>{count}</span>
			<button className='css-button-sliding-to-bottom--green' disabled={count >= stock} onClick={increase}>
			<i class="bi bi-plus-lg"></i>
			</button>
			<div>
				<button className='css-button-arrow--grey' disabled={stock <= 0} onClick={() => onAdd(count)}>
				<i class="bi bi-cart-plus"></i>
				</button>
			</div>
		</div>
	);
};

export default ItemCount;