let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let shopingCart = document.getElementById("shoping-cart");
let label = document.getElementById("label");

let calculateTotalItem = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x,y) => x + y, 0);
}

let generateCartItem = ()=>{
    if(cart.length !== 0){
        return (shopingCart.innerHTML = cart.map((x) => {
            let {id, item} = x;
            let search = shopData.find((y) => y.id === id) ||[];
            return `
                <div class="cart-item">
                    <img width="100px" src="${search.img}"/>
                    <div class="details">
                        <div class="title-price-del">
                            <h4 class="title-price">
                                <p class="item-title">${search.title}</p>
                                <p class="item-price">Rs ${search.price}</p>
                            </h4>
                            <i onclick="removeItem(${id})" class="bi bi-trash3-fill"></i>
                        </div>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id="${id}" class="quantity">
                            ${item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                        <h3>Rs ${search.price * item}</h3>
                    </div>

                </div>

            `;
        }).join(""));
    }else{
        shopingCart.innerHTML = ``;
        label.innerHTML = `
            <h2>The cart is empty</h2>
            <a href="index.html">
                <button class="HomeBtn">Back to Home</button>
            </a>
        `;
    }
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
    generateCartItem();
    localStorage.setItem("cartData", JSON.stringify(cart));
}

let decrement = (id) =>{
    selectedItem = id;
    let searchedItem = cart.find((x) => x.id === selectedItem.id);
    if(searchedItem === undefined){
        return;
    }else if(searchedItem.item === 0 ){
        return;
    }else{
        searchedItem.item--;
    }
    update(selectedItem.id);
    cart = cart.filter((x)=> x.item !== 0);
    generateCartItem();
    localStorage.setItem("cartData", JSON.stringify(cart));
}

let update = (id) =>{
    let search = cart.find((x)=> x.id == id);
    document.getElementById(id).innerHTML = search.item;
    calculateTotalItem();
}

let removeItem = (id)=>{
    let selectedItem = id;
    cart = cart.filter((x)=> x.id !== selectedItem.id);
    generateCartItem();
    calculateTotalItem();
    localStorage.setItem("cartData", JSON.stringify(cart));
}

calculateTotalItem();

generateCartItem();
