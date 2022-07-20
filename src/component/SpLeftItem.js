
//import "../css/SpLeftItem.css"
import { handleClickBuy, addCart, handleMouseEnter, handleMouseLeave } from "./publicJS.js"

function SpLeftItem({ item }) {
    return (
        <li key={item.id} id={item.id}>
            <div>
                <div>
                    <div className="image">
                        <div>
                            <img src={item.img} />
                        </div>
                    </div>
                    <div className="content">
                        <h1>{item.name}</h1>
                        <p>{item.type}</p>
                        <h2>{item.price}$</h2>
                        <div className="cart-icon buy-js" onClick={() => { handleClickBuy(item) }}>
                            <i className="fas fa-shopping-basket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default SpLeftItem;