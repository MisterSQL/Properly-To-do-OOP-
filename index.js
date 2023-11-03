class Product{
    constructor(containerNotes, name,numberProducts) {

        // note
        this.note = document.createElement("div")
        this.note.classList.add("note")

        // count Products
        this.count = document.createElement("div")
        this.count.innerText = numberProducts;
        this.count.classList.add("countProducts");

        // name Product
        this.nameProduct = document.createElement("span");
        this.nameProduct.classList.add("nameProducts")
        this.nameProduct.innerText = name

        // button done
        this.buttonDone = document.createElement("input")
        this.buttonDone.type = "checkbox"
        this.buttonDone.classList.add("buttonDone")
        this.buttonDone.addEventListener('click',()=>{
                if(this.buttonDone.checked){
                    this.note.classList.add("bg-dark");
                }
                else {
                    this.note.classList.remove("bg-dark");
                }
        })

        // button delete
        this.buttonDelete = document.createElement("button");
        this.buttonDelete.classList.add("buttonsDelete")
        this.buttonDelete.innerText = "X";
        this.buttonDelete.addEventListener('click',()=>{
            this.note.remove()
        })

        // Container for Buttons
        this.containerButtons = document.createElement("div");
        this.containerButtons.classList.add("containerButtons");

        // Add buttons in container
        this.containerButtons.append(this.buttonDone, this.buttonDelete)

        // Add information about note
        this.note.append(this.count,this.nameProduct,this.containerButtons);

        // Add note in List
        containerNotes.append(this.note)
    }

}

const containerNotes = document.getElementById("listProducts");

function addProduct(){
    const nameProduct = document.getElementById("name-products")
    const countProducts = document.getElementById("count-products");
    new Product(containerNotes,nameProduct.value,countProducts.value)
}


