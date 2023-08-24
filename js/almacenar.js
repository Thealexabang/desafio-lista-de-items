let items = [];
const item = document.getElementById('item');
const lista = document.getElementById('contenedor');

function loadList(array){
    array.forEach(element => {
        lista.innerHTML += `<li class='border radius-3 container'>${element}</li>`;
    });
}

document.getElementById('agregar').addEventListener("click", function(){
    if (item.value!=""){
        items.push(item.value);
        item.value='';
    }
    else{
        alert("El campo está vacío");
    }
    localStorage.setItem('items', items);
    lista.innerHTML = '';
    loadList(items);
});

document.getElementById('limpiar').addEventListener("click", function(){
    lista.innerHTML = '';
    localStorage.removeItem('items');
    items = [];
});

loadList(localStorage.getItem('items').split(','));