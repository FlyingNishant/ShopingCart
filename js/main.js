let cart = JSON.parse(localStorage.getItem("cartData")) || [];
const shop = document.getElementById("shop");

let loadShop = () => {
    return  shop.innerHTML = shopData.map((item) => {
        let {id, title, desc, img, price} = item;
        let search = cart.find((x)=> x.id === id);
        return `
            <div id={item-${id}} class="itme-card">
                <img src="${img}" width="220">
                <div class="details">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>${price} Rs</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id="${id}" class="quantity">
                            ${search !== undefined ? search.item : 0}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join("");
}

let increment = (id) =>{
    selectedItem = id;
    let searchedItem = cart.find((x) => x.id === selectedItem.id);
    if(searchedItem === undefined){
        cart.push({
            id: selectedItem.id,
            item:1, 
        })
    }else{
        searchedItem.item++;
    }
    update(selectedItem.id);
    localStorage.setItem("cartData", JSON.stringify(cart));
}

let decrement = (id) =>{
    selectedItem = id;
    let searchedItem = cart.find((x) => x.id === selectedItem.id);
    if(searchedItem === undefined){
        return;
    }
    else if(searchedItem.item === 0 ){
        return;
    }else{
        searchedItem.item--;
    }
    update(selectedItem.id);
    cart = cart.filter((x)=> x.item !== 0);
    localStorage.setItem("cartData", JSON.stringify(cart));
}

let update = (id) =>{
    let search = cart.find((x)=> x.id == id);
    document.getElementById(id).innerHTML = search.item;
    calculateTotalItem();
}

let calculateTotalItem = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x,y) => x + y, 0);
}

loadShop();

calculateTotalItem();
