let elements = [];
let xml = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById('search').onclick = search;
    xml.open('GET', '/get', true);
    xml.onload = function (){
        elements = JSON.parse(xml.response);
        showAll();
    }
    xml.send(null);

    document.getElementById('searchText').addEventListener('input', (e) => {
      if(e.currentTarget.value.length === 0)
          showAll();
    });

    document.getElementById('sort').addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    showAll(true);
  } else {
    showAll();
  }
})
});

function addElement(id, animalType, name, description, price){
    let element = document.createElement('div');
    element.className = "element";
    let image = document.createElement('img');
    image.src = 'static/img/'+animalType+'.jpeg';
    let title = document.createElement('h1');
    title.innerText = name;
    let priceElement = document.createElement('h3');
    priceElement.innerText = 'Daily expense '+price+'$';
    let descriptionElement = document.createElement('p');
    descriptionElement.innerText = description;
    let buttons = document.createElement('div');
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'DELETE';
    deleteBtn.onclick = ()=>{deleteElement(id);}
    let editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerText = 'EDIT';
    editBtn.onclick = ()=>{editElement(id);}
    buttons.appendChild(deleteBtn);
    buttons.appendChild(editBtn);
    element.appendChild(image);
    element.appendChild(title);
    element.appendChild(priceElement);
    element.appendChild(descriptionElement);
    element.appendChild(buttons);
    document.getElementById('content').appendChild(element);
    return price;
}

function deleteElement(id){
    xml.open('POST','/delete/'+id);
    xml.send(null);
    document.location.reload();
}

function editElement(id){
    document.location.href = 'http://127.0.0.1:5000/edit/'+id;
}

function clearElements(){
    let content = document.getElementById('content');
    content.innerHTML = '';
}

function setAllPrice(price){
    document.getElementById('price').innerText = price.toString();
}

function showAll(sortPrice=false) {
    clearElements();
    let array = sortElements(elements, sortPrice);
    let price = 0;
    for(let element of array){
        price += addElement(element['id'], element['type'],element['title'], element['description'], element['price']);
    }
    setAllPrice(price);
}



function search(){
    let search = document.getElementById('searchText');
    let price = 0;
    clearElements();
    for(let element of elements){
        if(element['title'].toLowerCase().includes(search.value.toLowerCase()) ||
            element['description'].toLowerCase().includes(search.value.toLowerCase()))
            price += addElement(element['id'], element['type'],element['title'], element['description'], element['price']);
    }
    setAllPrice(price);
}

function sortElements(array, sortPrice=true){
    if(array.length <= 1)
        return array;
    let currentPosition = 0;
    for(let i=1;i<array.length;i++){
        if((array[0]['price'] <= array[i]['price'] && sortPrice===true) || (array[0]['id'] < array[i]['id'] && sortPrice===false)){
            currentPosition++;
            let temp = array[i];
            array[i] = array[currentPosition];
            array[currentPosition] = temp;
        }
    }
    let temp = array[0];
    array[0] = array[currentPosition];
    array[currentPosition] = temp;
    return [...sortElements(array.slice(0,currentPosition), sortPrice),
        array[currentPosition],
        ...sortElements(array.slice(currentPosition+1), sortPrice)]
}