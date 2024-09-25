let add = document.getElementById("addToDo")
let input = document.getElementById("inputfield")
let toDoContainer = document.getElementById("toDoContainer")

add.addEventListener('click', addItem);
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addItem()
    }
})

function addItem() {

    const itemValue = input.value;
    if(itemValue.match(/^\s*$/)){
        alert("Please enter an item")
    }else{
    const item = document.createElement('div')
    item.classList.add('item')

    const item_content = document.createElement('div')
    item_content.classList.add('content')
    item.appendChild(item_content)

    const item_input = document.createElement('input')
    item_input.classList.add('text')
    item_input.type = "text"
    item_input.value = itemValue
    item_input.setAttribute('readonly', 'readonly')
    item_input.addEventListener('dblclick', function(){
        item_input.style.textDecoration = 'line-through'
    })
    item_content.appendChild(item_input)

    const item_action = document.createElement('div')
    item_action.classList.add('action')
    
    const edit_item = document.createElement('button')
    edit_item.classList.add('edit', 'btn', 'btn-success')
    edit_item.type='button'
    edit_item.innerHTML = 'Edit'

    const delete_item = document.createElement('button')
    delete_item.classList.add('delete', 'btn', 'btn-danger', 'fa', 'fa-trash')
    delete_item.type='button'
    

    item_action.appendChild(edit_item)
    item_action.appendChild(delete_item)

    item.appendChild(item_action)

    toDoContainer.appendChild(item)

    input.value = ""

    edit_item.addEventListener('click', function(){
        if(edit_item.innerText.toLowerCase() == "edit"){
            item_input.removeAttribute('readonly')
            item_input.focus()
            edit_item.innerText = "Save"
        }else{
            item_input.setAttribute('readonly', 'readonly')
            edit_item.innerText = "Edit"
        }

        
    })

    delete_item.addEventListener('click', function(){
        toDoContainer.removeChild(item)
    })


}
}

