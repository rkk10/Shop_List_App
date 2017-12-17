const getInput = (i) => String(i);
// test 1 
//  false value


const validateforEmpty = val => val === "" || val === null ? true : false;
if (validateforEmpty('')) {
    console.log('Tets pass: please enter item')
} else {
    console.log("Test Fail")
}



const validateForString = val => isNaN(val) ? true : false;
if ( validateForString('123Hi') ) {
    console.log('Test Pass please enter item name in string format')
} else {
    console.log('Test Faile')
}


const validateForNumber = val => (!Number(val[0])) ? true : false;
if ( !validateForNumber('1Test') ) {
    console.log('Test Pass: first letter of item must be string')
} else {
    console.log('Test Faile')
}

const isCheck = document.getElementById('check')
const deletBtn = document.getElementsByClassName('del')
const delChecked = document.getElementById('delChecked')

// test case for validate that item is checked or not

const validateForChecked = delChecked.addEventListener('click', () => {
    if(isCheck === checked){
        console.log('test pass item will be delete')
        return true
        // code for delete item
    }
    else{
        console.log('test fail')
    }
})

const delItem = document.querySelector('.del')
delItem.addEventListener('click', () => {
    if()
})

//test case for refresh


