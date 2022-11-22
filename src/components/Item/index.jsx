import "../Item/item.css"

export const Item = ({ info }) => {
    return (
        <>
            <div className="card">
                <div className="card-item">
                    <a href=".">
                        <img src={info.img} alt="" />
                        <h4>{info.product}</h4>
                        <button>${info.Precio}</button>
                    </a>

                </div>
            </div>


        </>
    )
}
export default Item;