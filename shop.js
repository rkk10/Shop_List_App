const item = document.getElementById('item')
const span = document.getElementById('spn')
const listItem = document.getElementById('listItem')
const todoList = document.getElementById('todoList')
const refresh = document.getElementById('refresh')

const validateforEmpty = val => val === "" || val === null ? true : false;
const validateForString = val => isNaN(val) ? true : false;
const validateForNumber = val => (!Number(val[0])) ? true : false;


const SHOPE_LIST = []

const add_item = value => {
    let shop_obj = {
        id: SHOPE_LIST.length + 1,
        iscomplete: false,
        task: value
    }
    SHOPE_LIST.push(shop_obj)
    return shop_obj;
}

const validateForm = val => {

    if (validateforEmpty(val)) {
        alert('please enter item')
        return
    }

    if (!validateForString(val)) {
        alert('please enter item name in string format')
        return
    }

    if (!validateForNumber(val)) {
        alert('first letter of item must be string')
        return
    }
    return true
}

const addTodo = _ => {
    const itemValue = item.value.trim()

    if (!validateForm(itemValue)) {
        alert('validation failed')
        item.value = ''
        return
    }

    let shopObject = add_item(item.value)

    let li = document.createElement('li')
    li.innerHTML = `
        <div>
            <input class="checkItem" id="check" data-shop-id="${shopObject.id}" onclick="updateItem(this)" type="checkbox" value="" name="check" />
            <span class="shopItem">${shopObject.task}</span>
        </div>
        <div class="del" data-shop-id="${shopObject.id}" onclick="deleteTask(this)" >&#9932</div>
    `;

    todoList.insertBefore(li, null)
    item.value = ''
}

const updateItem = el => {
    let id = el.dataset.shopId
    SHOPE_LIST[id - 1].iscomplete = el.checked
}

const getIndexByID = (id) => SHOPE_LIST.findIndex(i => i.id == id)

const deleteTask = el => {
    let ID = el.dataset.shopId
    let index = getIndexByID(ID)
    SHOPE_LIST.splice(index, 1)
    todoList.removeChild(el.parentNode)
}

item.addEventListener('keypress', event => {
    event.keyCode === 13 ? addTodo(event.target.value) : null
})
refresh.addEventListener('click', () => {
    window.location.reload()
})

function deleteItem() {
    //  removeitem from the web page
    var del = document.getElementsByClassName('del')
    del.addEventListener('click', () => {
        console.log('click')
        todoList.removeChild(listItem)
    })

}

// var del = document.querySelector('.del')
// del.addEventListener('click', () => {alert('clicked')})