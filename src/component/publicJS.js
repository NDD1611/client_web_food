
export function handleClickBuy(item){
    addCart(item)
    alert(`Bạn đã đặt bánh ${item.name} \n Vui lòng vào giỏ hàng để tùy chỉnh số lượng`)
}

export function addCart (sp) {
    let data =[];
    if ( typeof localStorage["dataCart"] === "undefined") {
        sp = {
            ...sp,
            quantity: 1
        }
        data.push(sp);
        localStorage.setItem("dataCart", JSON.stringify(data))
    } else {
        let dataFromLocal = localStorage.getItem("dataCart")
        let data = JSON.parse(dataFromLocal) 
        let kt = 0
        data.map((item)=>{
            if(sp.id === item.id){
                item.quantity = item.quantity + 1
                kt = 1
            }
        })
        if(kt == 0){
            sp = {
                ...sp,
                quantity: 1
            }
            data.push(sp)
        }
        localStorage.setItem("dataCart", JSON.stringify(data))
    }
}
export function handleMouseEnter(id) {
    let bg = document.querySelector(`#${id} .bg`);
    let img = document.querySelector(`#${id} img`);
    bg.style.animation = "shopbg ease 0.5s forwards";
    img.style.animation = "shop-img ease 0.5s forwards";
}
export function handleMouseLeave (id) {
    let bg = document.querySelector(`#${id} .bg`);
     let img = document.querySelector(`#${id} img`);
     bg.style.animation = "shopbg-a ease 0.5s forwards";
     img.style.animation = "shop-img-a ease 0.5s forwards";
 }