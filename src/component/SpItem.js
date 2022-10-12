

import { handleClickBuy, addCart, handleMouseEnter, handleMouseLeave } from "./publicJS.js"

function SpItem({ item }) {//component
    return (
        <li
            key={`${item.masp}`}
            id={item.masp}
            onMouseLeave={() => { handleMouseLeave(item.masp) }}
            onMouseEnter={() => { handleMouseEnter(item.masp) }}
        >
            <div className="sp-main">
                <div>
                    <div className="img">
                        <img src={item.img} alt="" />
                        <div className="bg"></div>
                    </div>
                </div>
                <div className="content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="content-bt">
                        <h2>{item.price}$</h2>
                        <div className="cart-icon buy-js" onClick={() => { handleClickBuy(item) }}>
                            <i className="fas fa-shopping-basket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SpItem;