let shopData = [
    {
        id: "i101",
        title: "Final Fantasy",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "images/FinalFantasy.jpg",
        price: 200,
    },
    {
        id: "i102",
        title: "Mario",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "images/Mario.jpg",
        price: 200,
    },
    {
        id: "i103",
        title: "Legends Of Zelda",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "images/LegendsOfZelda.jpg",
        price: 200,
    },
    {
        id: "i104",
        title: "Street Fighters",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "images/StreetFighters.jpg",
        price: 200,
    },
    {
        id: "i105",
        title: "Gundam",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "images/Gundam.jpg",
        price: 200,
    },
]

const cart = [];
const shop = document.getElementById("shop");

let loadShop = () => {
    return  shop.innerHTML = shopData.map((item) => {
        let {id, title, desc, img, price} = item;
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
                            <div id="${id}" class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join("");
}

loadShop();

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
    console.log(cart);
}

let decrement = (id) =>{
    selectedItem = id;
    let searchedItem = cart.find((x) => x.id === selectedItem.id);
    if(searchedItem.item == 0 ){
        return;
    }else{
        searchedItem.item--;
    }
    console.log(cart);
}