

import { useEffect, useState } from 'react'
// import './cartshop.css'
import './CartShop.scss'


function setValueObj(data) {
    for (let item of data) {
        if (typeof localStorage[item.id] != "undefined") {
            item.order = true;
            item.quantity = Number(localStorage.getItem(item.id));
            item.subTotal = item.quantity * item.price;
        }
    }
}
function subTotal(sp) {
    const id = sp.id;
    var sl = document.querySelector(`#${id} .quantity input`).value;
    var totalPrice = sl * sp.price;
    const subTotal = document.querySelector(`#${id} .subtotal`);
    subTotal.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalPrice);
}
function calTotal(data) {
    const elementTotal = document.querySelector("#total span");
    var total = 0;
    for (let sp of data) {
        total += sp.quantity * sp.price
    }
    elementTotal.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(total);
}

function handleChange(e, sp, data) {
    data.map((item) => {
        if (item.id === sp.id) {
            item.quantity = e.target.value;
        }
    })
    subTotal(sp);
    calTotal(data);
    localStorage.setItem("dataCart", JSON.stringify(data))
}
function handleDelItem(id, data) {
    const item = document.getElementById(id);

    const table = document.querySelector('#table tbody')
    table.removeChild(item)

    let vitri
    data.map((sp, index) => {
        if (sp.id == id) {
            vitri = index
        }
    })
    for (let i = vitri; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    data.length--;
    localStorage.setItem("dataCart", JSON.stringify(data))
    calTotal(data)
}
function CartItem({ sp, data }) { //component
    return (
        <tr key={`${sp.id}`} id={sp.id}>
            <td className="image">
                <img src={sp.img} alt="" />
            </td>
            <td className="name">{sp.name}</td>
            <td className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(sp.price)}</td>
            <td className="quantity">
                <input type="number" min="1" defaultValue={sp.quantity} onChange={(e) => { handleChange(e, sp, data) }} />
            </td>
            <td className="subtotal">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(sp.quantity * sp.price)}</td>
            <td className="x-btn-js">
                <i className="far fa-times-circle" onClick={() => { handleDelItem(sp.id, data) }}></i>
            </td>
        </tr>
    )
}
function Cartshop() {   //component
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [data, setData] = useState([{}]);
    useEffect(() => {
        let dataFromLocal = JSON.parse(localStorage.getItem("dataCart"))
        setData(dataFromLocal)
    }, [])
    useEffect(() => {
        if (data != null) {
            data.map((sp) => {
                calTotal(data)
            })
        }
    })
    return (
        <main id="cart">
            <div className="head">
                <h1>Cart</h1>
                <p>
                    Home
                    <i className="fas fa-angle-right"></i>
                    Cart
                </p>
            </div>

            <table id={'table'}>
                <thead>
                    <tr>
                        <td className="image"></td>
                        <td className="name">Product</td>
                        <td className="price">Price</td>
                        <td className="quantity">Quantity</td>
                        <td className="subtotal">Subtotal</td>
                        <td className="x-btn-js"></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(sp => <CartItem
                            sp={sp}
                            data={data}
                        />
                        )
                    }
                </tbody>
            </table>
            <div id="total">
                <h1>Total:
                    <span id="add-text" style={{ padding: 20 }}>
                    </span>
                </h1>
            </div>
        </main>
    )
}
export default Cartshop;