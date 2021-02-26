'use strict'
const container = document.querySelector('.container');
const $popUp=document.querySelector('.popup');
const $basketDiv0 = document.querySelector('.wrapper0');
const $basketDiv1 = document.querySelector('.wrapper1');
const $basketDiv2 = document.querySelector('.wrapper2');
$basketDiv1.style.display = 'none';
$basketDiv2.style.display = 'none';
container.style.display = 'flex';
container.style.justifyContent = 'space-around';

let product = [
    { name: "icecream", discrp: "Шоколадное мороженное", cost: 145 },
    { name: "toy", discrp: "мягкая игрушка", cost: 832 },
    { name: "pen", discrp: "Синяя ручка", cost: 342 }
];
let basket = [

];

let popUpMenu=[$basketDiv0,$basketDiv1,$basketDiv2];
let currentN=0;


function renderingProduct(arg) {
    let productItem = document.createElement('div');
    productItem.className = "card";
    productItem.style.cssText = 'width:100px; height:200px ;display:flex ;border:2px solid black;flex-direction:column;align-items:center';
    container.appendChild(productItem);
    let productName = document.createElement('p');
    let productCost = document.createElement('p');
    productCost.className = "cost" + arg;
    let buyButton = document.createElement('button');
    buyButton.style.cssText = 'width:80px;height:20px; text-transform:uppercase';
    buyButton.innerHTML = "buy";
    buyButton.className = "buyAcces" + arg;
    buyButton.id=arg;
    productItem.appendChild(productName);
    productItem.appendChild(productCost);
    productItem.appendChild(buyButton);
    productCost.innerHTML = product[arg].cost;
    productName.innerHTML = product[arg].name;
}

for (let j = 0; j < product.length; j++) {
    window.onload = renderingProduct(j);
}


function renderingBasket() {
    $basketDiv0.innerHTML = '';
    for (let n = 0; n < basket.length; n++) {
        const html = `<div id="item-${n}" class="basket-item">
        <p class="basket-item_name">${basket[n].name}</p>
        <p class="basket-item_cost">${basket[n].cost}</p>
    </div>`;
        $basketDiv0.insertAdjacentHTML('afterbegin', html);
    }
}
renderingBasket();



function countBasketPrice() {
    // $basketDiv.innerHTML = '';
    let summ = 0;
    var txt = document.createElement("p");
    if (basket.length == 0) {
        txt.textContent = "";
        txt.innerHTML = "Корзина пуста";
        $basketDiv0.appendChild(txt);
    } else {
        for (var i = 0; i < basket.length; i++) {
            summ = summ + basket[i].cost;
        }
        txt.textContent = "";
        txt.innerHTML = "В корзине " + i + " предметов на сумму " + summ + " рублей.";
        $basketDiv0.appendChild(txt);
    }

}
countBasketPrice();

// const $buyButton0 = document.querySelector(".buyAcces0");
// $buyButton0.addEventListener('click', costToBasket0);
// const $buyButton1 = document.querySelector(".buyAcces1");
// $buyButton1.addEventListener('click', costToBasket1);
// const $buyButton2 = document.querySelector(".buyAcces2");
// $buyButton2.addEventListener('click', costToBasket2);
const $removeButton = document.querySelector('.deletBasket');
$removeButton.addEventListener('click', removeBasket);
const $cost0 = document.querySelector('.cost0').textContent;
const $cost1 = document.querySelector('.cost1').textContent;
const $cost2 = document.querySelector('.cost2').textContent;
const $basketBtn=document.querySelector('.basket');
$basketBtn.addEventListener('click',popUpBasket);
const $basketBtnRight=document.querySelector('.btnright');
const $basketBtnLeft=document.querySelector('.btnleft');

$basketBtnRight.addEventListener('click',function(){
    popUpRight(currentN);
    currentN=(currentN+1>=popUpMenu.length)?0:currentN+1;
    console.log(currentN);
})

$basketBtnLeft.addEventListener('click',function(){
    popUpLeft(currentN);
    currentN=(currentN-1<0)?popUpMenu.length-1:currentN-1;
    console.log(currentN);
})

function popUpRight(arg){
    popUpMenu[arg].style.display='none';
    popUpMenu[arg+1].style.display='block';
}

function popUpLeft(arg){
    popUpMenu[arg].style.display='none';
    popUpMenu[arg-1].style.display='block';
}


function popUpBasket(){
$popUp.style.display=($popUp.style.display=='block')?'none':'block';
}


container.addEventListener('click',function(e){
    if(e.target.tagName==='BUTTON'){
        const index=Number(e.target.id);
        switch(index){
            case 0:
                basket.push(product[0]);
                renderingBasket();
                countBasketPrice();
                console.log(basket);
            break;
            case 1:
                basket.push(product[1]);
                renderingBasket();
                countBasketPrice();
                console.log(basket);
                break;
            case 2:
                basket.push(product[2]);
                renderingBasket();
                countBasketPrice();
                console.log(basket);
                break;  
        }
    }
})


// function costToBasket0() {
//     basket.push(product[0]);
//     renderingBasket();
//     countBasketPrice();
//     console.log(basket);

// }

// function costToBasket1() {
//     basket.push(product[1]);
//     renderingBasket();
//     countBasketPrice();
//     console.log(basket);

// }

// function costToBasket2() {
//     basket.push(product[2]);
//     renderingBasket();
//     countBasketPrice();
//     console.log(basket);
// }

function removeBasket() {
    basket = [];
    renderingBasket();
    countBasketPrice();
    console.log(basket);
}