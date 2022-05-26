let title = document.getElementById('title');
let price  = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

console.log(title,price,taxes,ads,discount,total,count,category,submit);

function getTotal()
{





if (price.value != '') {
    let result =(+price.value + +taxes.value + +ads.value)
    - +discount.value;
    total.innerHTML =result;
    total.style.background='#040'; 
    
} else {
    total.innerHTML ='';
    total.style.background='#a00d02'; 
    
    
}

}

// create prodect stocker data dans aaray
// on doit utilser array pour stocker les information de chaque objet



let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
} else{
    dataPro=[];
}


//submit le id de creat quant je clique sur create
submit.onclick =function(){


let newPro={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
}




 if (newPro.count >1) {
     for (let i= 0 ; i< newPro.count;i++ ) {
    
    dataPro.push(newPro);
    
}
 } else {
    dataPro.push(newPro);
 }
//save localstorage
localStorage.setItem('product',   JSON.stringify(dataPro)         )
clearData()
showData()
}

// clearinputs
 function clearData(){
 title.value = '';
 price.value = '';
 taxes.value = '';
 ads.value = '';
discount.value = '';
total.innerHTML = '';
count.value = '';
category.value = '';
 }
// read

function showData() {

let table ='';
for (let i= 0; i< dataPro.length; i++) {
    table += `
    <tr>
<td>${i}</td>
<td>${dataPro[i].title}</td>
<td>${dataPro[i].price}</td>
<td>${dataPro[i].taxes}</td>
<td>${dataPro[i].ads }</td>
<td>${dataPro[i].discount}</td>
<td>${dataPro[i].total}</td>
<td>${dataPro[i].category }</td>
<td>Phone</td>
<td><button id="update">Update</button></td>
<td><button onclick="deleteData( ${i}   )" id="delete">Delete</button></td>
  </tr> 
    `
    
}
document.getElementById('tbody').innerHTML=table;
let btnDelete =document.getElementById('deletAll');

if(dataPro.length > 0)
{

btnDelete.innerHTML=
`<button onclick="deleteAll()" >DeleteAll</button>`


}else{
    btnDelete.innerHTML='';
}
    
}
showData();


//delete
function deleteData(i)
{

dataPro.splice(i,1);
localStorage.product = JSON.stringify(dataPro);
showData();
}

// delet all
function deleteAll() {
    localStorage.clear();
    dataPro.splice(0);
    showData();

}

//count





//update
//search
// clean data
