
import { useState, useEffect } from "react"

import SpItem from "../../component/SpItem";
import { getListItemShop } from '../../service/getDataService';
import './Shop.scss'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"

function handleClickCategories(type, filter, callback) {
    const valueCategories = ["All", "Burgers", "Drinks", "Pasta", "Pizza"]
    const divElement = document.querySelector(`#shop .container .filter .filter-container .product-categories .${filter}`)
    const divChildElement = document.querySelector(`#shop .container .filter .filter-container .product-categories .${filter} > div`)
    divElement.style = "background-color: transparent; opacity: 0.5; color: #000"
    divChildElement.style = "border-width: 0 0 2px 0;"
    let indexPreFilter = -1
    valueCategories.map((value, index) => {
        if (filter === value) {
            indexPreFilter = index - 1
        }
    })
    if (indexPreFilter >= 0) {
        const preFilterElement = document.querySelector(`#shop .container .filter .filter-container .product-categories .${valueCategories[indexPreFilter]} > div`)
        preFilterElement.style = "border-width: 0 0 2px 0;"
    }
    callback(type)
}

function Shop() {//component
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const valueCategories = ["All", "Burgers", "Drinks", "Pasta", "Pizza"]
    const [filter, setFilter] = useState("All")
    const [page, setPage] = useState(1) // page de luu so page hien tai cua
    const [dataDB, setDataDB] = useState([{}]); // dataDB la du lieu lay ve tu API

    useEffect(() => {
        async function getAllData() {
            let data = await getListItemShop();
            setDataDB(data)
        }
        getAllData();
    }, [])

    // tinh ra tong so luong san pham cua filter khi roi vao cac truong ALL, Burgers, Drinks, Pasta, Pizza
    let dataFilter = [];
    if (filter === "All") {
        dataDB.map((sp) => {
            dataFilter.push(sp)
        })
    } else if (filter === "Burgers") {
        dataDB.map((sp) => {
            if (sp.type === "Burgers") {
                dataFilter.push(sp)
            }
        })
    } else if (filter === "Drinks") {
        dataDB.map((sp) => {
            if (sp.type === "Drinks") {
                dataFilter.push(sp)
            }
        })
    } else if (filter === "Pasta") {
        dataDB.map((sp) => {
            if (sp.type === "Pasta") {
                dataFilter.push(sp)
            }
        })
    } else if (filter === "Pizza") {
        dataDB.map((sp) => {
            if (sp.type === "Pizza") {
                dataFilter.push(sp)
            }
        })
    }

    //tinh ra so loung trang pre 1 2 3... next
    let data = []; // de luu du lieu dua vao filter va page
    const pageArray = []; // hien thi danh sach page <previous 1 2 3 4... next>
    let numPage = Math.ceil(dataFilter.length / 12) //numPage tong so trang dua vao dataDB
    for (let i = 0; i < numPage; i++) {
        pageArray.push(i + 1);
    }
    for (let i = ((page - 1) * 12); i < (page * 12); i++) {
        if (i >= 0 && i < dataFilter.length) {
            data.push(dataFilter[i])
        }
    }

    useEffect(() => {
        const pageElement = document.querySelector(`#shop .product .nav_page .page_${page}`)
        if (pageElement) {
            pageElement.style = "background-color: var(--main-color); opacity: 1;"
        }

        // an hien nut previous va next
        if (page === 1) {
            const previousElement = document.querySelector("#shop .product .nav_page .previous")
            previousElement.style.display = "none"
        } else {
            const previousElement = document.querySelector("#shop .product .nav_page .previous")
            previousElement.style.display = "block"
        }
        if (page === numPage) {
            const previousElement = document.querySelector("#shop .product .nav_page .next")
            previousElement.style.display = "none"
        } else {
            const previousElement = document.querySelector("#shop .product .nav_page .next")
            previousElement.style.display = "block"
        }

        //hien thi so luong cac loai san pham ben Categories
        let countAllProduct = 0
        let countBurger = 0
        let countDrink = 0
        let countPasta = 0
        let countPizza = 0
        dataDB.map((sp) => {
            countAllProduct++
            if (sp.type === "Burgers") {
                countBurger++
            } else if (sp.type === "Drinks") {
                countDrink++
            } else if (sp.type === "Pasta") {
                countPasta++
            } else if (sp.type === "Pizza") {
                countPizza++
            }
        })
        const countAllProductElement = document.querySelector("#shop .container .filter .filter-container .product-categories .count-all-product")
        if (countAllProductElement) {
            countAllProductElement.innerText = `(${countAllProduct})`
        }

        const countBurgerElement = document.querySelector("#shop .container .filter .filter-container .product-categories .count-burgers")
        if (countBurgerElement) {
            countBurgerElement.innerText = `(${countBurger})`
        }

        const countDrinkElement = document.querySelector("#shop .container .filter .filter-container .product-categories .count-drinks")
        if (countDrinkElement) {
            countDrinkElement.innerText = `(${countDrink})`
        }

        const countPastaElement = document.querySelector("#shop .container .filter .filter-container .product-categories .count-pasta")
        if (countPastaElement) {
            countPastaElement.innerText = `(${countPasta})`
        }

        const countPizzaElement = document.querySelector("#shop .container .filter .filter-container .product-categories .count-pizza")
        if (countPizzaElement) {
            countPizzaElement.innerText = `(${countPizza})`
        }

        //if(filter === "All"){
        const divElement = document.querySelector(`#shop .container .filter .filter-container .product-categories .${filter}`)
        if (divElement) {
            divElement.style = "background-color: var(--main-color); opacity: 1 !important; color: #000 !important; border: 1px solid var(--main-color) !important;"
        }

        const divChildElement = document.querySelector(`#shop .container .filter .filter-container .product-categories .${filter} > div`)
        if (divChildElement) {
            divChildElement.style = "border: none;"
        }

        let indexPreFilter = -1
        valueCategories.map((value, index) => {
            if (filter === value) {
                indexPreFilter = index - 1
            }
        })
        if (indexPreFilter >= 0) {
            const preFilterElement = document.querySelector(`#shop .container .filter .filter-container .product-categories .${valueCategories[indexPreFilter]} > div`)
            if (preFilterElement) {
                preFilterElement.style = "border: none;"
            }
        }
        //}
        // if (dataDB.length != 1) {
        //     console.log(" co du lieuj", dataDB)
        //     axios.post("/data", dataDB)
        // }
    })

    useEffect(() => {
        if (page > 1) {
            setPage(1)
        }
    }, [filter])

    return (
        <>
            <Header />
            <main id="shop">
                <div className="head">
                    <div className="head-content">
                        <h1>Shop</h1>
                        <p>
                            Home
                            <i className="fas fa-angle-right"></i>
                            Shop
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="product">
                        <ul>
                            {data.map((item) => {
                                return (
                                    <SpItem
                                        item={item}
                                    />)
                            })}
                        </ul>
                        <div className="nav_page">
                            <div className="previous" onClick={() => {
                                const pageElement = document.querySelector(`#shop .product .nav_page .page_${page}`)
                                pageElement.style = "background-color: #fff; opacity: 0.5;"
                                setPage((pre => pre - 1))
                            }}>
                                <i className="fa-solid fa-angle-left"></i>
                                Previous
                            </div>
                            {
                                pageArray.map((number, index) => {
                                    return (
                                        <div key={`${index}`} id={number} className={`page_${number}`} onClick={(e) => {
                                            const pageElement = document.querySelector(`#shop .product .nav_page .page_${page}`)
                                            pageElement.style.backgroundColor = "#fff"
                                            setPage(Number(e.target.id))
                                        }}>{number}</div>
                                    )
                                })
                            }
                            <div className="next" onClick={() => {
                                const pageElement = document.querySelector(`#shop .product .nav_page .page_${page}`)
                                pageElement.style = "background-color: #fff; opacity: 0.5;"
                                setPage((pre => pre + 1))
                            }}>
                                Next
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filter-container">
                            <div className="categories">Categories</div>
                            <div className="product-categories">
                                <div className="All" onClick={() => {
                                    handleClickCategories("All", filter, setFilter);
                                }}>
                                    <div>
                                        <i className="fa-solid fa-shop"></i>
                                        <span>
                                            All-Product
                                        </span>
                                        <span className="count-all count-all-product">(10)</span>
                                    </div>
                                </div>
                                <div className="Burgers" onClick={() => {
                                    handleClickCategories("Burgers", filter, setFilter);
                                }}>
                                    <div>
                                        <i className="fa-solid fa-burger"></i>
                                        <span>
                                            Burgers
                                        </span>
                                        <span className="count-all count-burgers">(10)</span>
                                    </div>
                                </div>
                                <div className="Drinks" onClick={() => {
                                    handleClickCategories("Drinks", filter, setFilter);
                                }}>
                                    <div>
                                        <i className="fa-solid fa-martini-glass"></i>
                                        <span>
                                            Drinks
                                        </span>
                                        <span className="count-all count-drinks">(10)</span>
                                    </div>
                                </div>
                                <div className="Pasta" onClick={() => {
                                    handleClickCategories("Pasta", filter, setFilter);
                                }}>
                                    <div>
                                        <i className="fa-solid fa-cheese"></i>
                                        <span>
                                            Pasta
                                        </span>
                                        <span className="count-all count-pasta">(10)</span>
                                    </div>
                                </div>
                                <div className="Pizza" onClick={() => {
                                    handleClickCategories("Pizza", filter, setFilter);
                                }}>
                                    <div className="no-border">
                                        <i className="fa-solid fa-pizza-slice"></i>
                                        <span>
                                            Pizza
                                        </span>
                                        <span className="count-all count-pizza">(10)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Shop;
