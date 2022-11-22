import "./ItemDetail.css"
export const ItemDetail = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="detail">
                    <img className="detail-image" src={data.img} alt="" />
                    <div className="content">
                        <h1>{data.product}</h1>
                        <div className="content-price">
                            <h3>Precio: </h3>
                            <p>${data.Precio}</p>
                        </div>
                        <div className="content-detail">
                            <h4>Detalles:</h4>
                            <p>{data.detalles}</p>
                            <h4>Características:</h4>
                            <p>{data.capacidad}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail; 