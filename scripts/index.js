import {Product} from "./Product.js";

const button_add  = document.getElementById("addNote")
const listProducts = document.getElementById("box__listProducts");
const dataListProducts = new Set();

button_add.addEventListener('click',addProduct)
function addProduct(){
    const name_product = document.getElementById("name_products").value;
    const count_products = document.getElementById("count_products").value;
    const last_size_listProducts = dataListProducts.size;
    dataListProducts.add(name_product.trim());
    if(last_size_listProducts !== dataListProducts.size){
        new Product({name_product ,count_products}).insert(listProducts)
    }

}