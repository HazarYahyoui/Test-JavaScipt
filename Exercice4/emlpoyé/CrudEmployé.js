var employé = JSON.parse(localStorage.getItem('employé')) || [] ;

function affichage(){
let table = ``;
let i=1;
employé.forEach(element => {
    table += `
    <tr>
    <td>${i} </td>
    <td>${element.FirstName}</td>
    <td>${element.SecondName}</td>
    <td>${element.Email}</td>
    <td>${element.Address}</td>
    <td> <button type="button" class="btn btn-danger"  onclick="Delete( ${i-1})">  Delete  </button> </td>
    <td> <button type="button" class="btn btn-success" data-id="${element.ID}"  data-bs-toggle="modal" data-bs-target="#exampleModal"> UpDate  </button> </td>
    </tr>
    `
    i++ ;
});
document.getElementById('post').innerHTML = table ;
}
function Delete(x){
employé.splice(x,1);
localStorage.setItem('employé',JSON.stringify(employé));
affichage();
}  
let id 
function update(y){
var emp = employé.find(element => element.ID == y);
document.getElementById('nom1').value =  emp.FirstName ;
document.getElementById('nom2').value =  emp.SecondName ;
document.getElementById('mail').value =  emp.Email ;
document.getElementById('address').value =  emp.Address ;
id = y
}
function save(){
var emp = employé.find(element => element.ID == id );
emp.FirstName = document.getElementById('nom1').value ;
emp.SecondName = document.getElementById('nom2').value ;
emp.Email = document.getElementById('mail').value ; 
emp.Address = document.getElementById('address').value;
localStorage.setItem('employé',JSON.stringify(employé));
window.location.reload() ;
}