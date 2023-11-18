 export default class Product {
    MINCOUNT = 1;

    constructor(product) {
        this.name = this.defaultName(product.name);
        this.count = this.defaultCount(product.count);
        this.id = Date.now();
    }

    defaultName(name){
        return name.trim() !== "" ? name : "-";
    }

    defaultCount(count){
        return count > this.MINCOUNT ? count : this.MINCOUNT;
    }

    insert(parent){
        parent.append(this.createNote())
    }

    createNote(){
        const note = document.createElement("div");
        const productName = this.createElementHtmlName();
        const productCount = this.createElementHtmlCount();
        const containerButtons= this.createElementHtmlContainerButtons();
        note.classList.add("product-list__note");
        note.append(productCount, productName, containerButtons);
        note.setAttribute("id",`${this.id}`)
        return note
    }

    createElementHtmlName(){
        const name = document.createElement("span");
        name.classList.add("note__product-name");
        name.innerText = this.name;
        return name;
    }
    createElementHtmlCount(){
        const count = document.createElement("div");
        count.classList.add('note__count-products');
        count.innerText = this.count;
        return count
    }

    createElementHtmlContainerButtons(){
        const containerActions = document.createElement("div");
        const doneIsButton = this.createElementInputIsDone();
        const deleteButton = this.createElementButtonDelete();
        containerActions.classList.add("note__actions");
        containerActions.append(doneIsButton,deleteButton);
        this.insertIdForButtons(containerActions)
        return containerActions
    }

     insertIdForButtons(buttonsContainer){
        for(let i = 0;i<buttonsContainer.children.length;i++){
            const children = buttonsContainer.children[i];
            children.setAttribute("data-action",`${this.id}`);
        }
     }
    createElementButtonDelete(){
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("actions__delete");
        deleteButton.type = "submit";
        deleteButton.innerText = "X";
        return deleteButton
    }

    createElementInputIsDone(){
        const doneIsButton  = document.createElement("input");
        doneIsButton.type = "checkbox";
        doneIsButton.classList.add("actions__change_checkbox");
        return doneIsButton
    }
}

