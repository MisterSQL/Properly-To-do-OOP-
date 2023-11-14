import {dataListProducts} from "./dataListProducts.js";
export class Product {
    constructor(product) {
        this.name = product.name_product;
        this.count = product.count_products;
    }
    insert(parent){
        parent.append(this.createNote())
    }

    createNote(){
        const note = document.createElement("div");
        note.classList.add("note")
        note.setAttribute("data-value", this.name);
        const name_product = this.createElementHtmlName();
        const count_product = this.createElementHtmlCount();
        const container_buttons= this.createElementHtmlContainerButtons();
        note.append(count_product, name_product,container_buttons)
        return note
    }

    createElementHtmlName(){
        const name = document.createElement("span");
        name.classList.add("styleTextName");
        name.innerText = this.name;
        return name;
    }
    createElementHtmlCount(){
        const count = document.createElement("div");
        count.classList.add('style_count_products');
        count.innerText = this.count;
        return count
    }

    createElementHtmlContainerButtons(){
        const container_buttons = document.createElement("div");
        container_buttons.classList.add("containerButtons");
        const button_is_done = this.createElementInputIsDone();
        const button_delete = this.createElementButtonDelete()
        container_buttons.append(button_is_done,button_delete);
        container_buttons.onclick = this.clickAction.bind(this);
        return container_buttons
    }

    createElementButtonDelete(){
        const button_delete = document.createElement("button");
        button_delete.classList.add("buttonsDelete");
        button_delete.setAttribute("data-action","deleteNote");
        button_delete.innerText = "X";
        return button_delete
    }

    createElementInputIsDone(){
        const button_done  = document.createElement("input");
        button_done.type = "checkbox";
        button_done.classList.add("buttonDone");
        button_done.setAttribute("data-action","checkIsDone");
        return button_done
    }
    checkIsDone(button){
        const note = document.querySelector('.note[data-value="' + this.name + '"]')
        if(button.checked){
            note.classList.add("bg-dark");
        }
        else {
            note.classList.remove("bg-dark");
        }
    }
    deleteNote(button){
        const note = document.querySelector('.note[data-value="' + this.name + '"]');
        dataListProducts.delete(this.name);
        note.remove();
    }
    clickAction(element){
        const button = element.target;
        const action_name = button.dataset.action;
        if(action_name !== undefined){
            this[action_name](button)
        }
    }
}
