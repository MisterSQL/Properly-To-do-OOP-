import {Product} from "./Product.js";
import {dataListProducts} from "./dataListProducts.js";

const form  = document.getElementById("box__form")
const listProducts = document.getElementById("box__listProducts");
form.addEventListener('submit', addProduct)


function addProduct(e){
    e.preventDefault();
    const name_product = document.getElementById("name_products").value;
    const count_products = document.getElementById("count_products").value;
    const last_size_listProducts = dataListProducts.size;
    dataListProducts.add(name_product.trim());
    if(last_size_listProducts !== dataListProducts.size){
        new Product({name_product ,count_products}).insert(listProducts)
    }
}