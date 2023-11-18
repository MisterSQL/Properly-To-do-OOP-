import Product from "./Product.js";
const form  = document.getElementById("box__form")
const productListHtmlTag = document.getElementById("box__product-list");
const productNameHtmlTag = document.getElementById("form__name-products");
const productCountHtmlTag = document.getElementById("form__count-products");

form.addEventListener('submit', addProduct)
productListHtmlTag.addEventListener('click',actionNote);

function addProduct(event){
    event.preventDefault();
    const productName = productNameHtmlTag.value;
    const productsCount = productCountHtmlTag.value;
    new Product({name: productName ,count: productsCount}).insert(productListHtmlTag)
}

function actionNote(event){
    const element = event.target;
    const id = element.dataset.action;
    if(element.type === "submit"){
        deleteNote(id)
    }else if(element.type === "checkbox"){
        checkIsDone(id,element)
    }
}

function deleteNote(id){
    const note = document.getElementById(id);
    note.remove()
}

function checkIsDone(id,button){
    const note = document.getElementById(id);
    if(button.checked){
        note.classList.add("product-list__note_bg-dark");
    }else{
        note.classList.remove("product-list__note_bg-dark");
    }
}