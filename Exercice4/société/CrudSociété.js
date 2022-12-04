var Société = JSON.parse(localStorage.getItem('Société')) || [] ;

function affichage(){
let table = ``;
let i=1;
Société.forEach(element => {
    table += `
    <tr>
    <td>${i} </td>
    <td>${element.Name}</td>
    <td>${element.Address}</td>
    <td>${element.Email}</td>
    <td>${element.Employees}</td> 
    <td> <button type="button" class="btn btn-danger"  onclick="Delete( ${i-1})">  Delete  </button> </td>
    <td> <button type="button" class="btn btn-success" data-id="${element.ID}"  data-bs-toggle="modal" data-bs-target="#exampleModal"> UpDate  </button> </td>
    </tr>
    `
    i++ ;
});
document.getElementById('post').innerHTML = table ;
}
function Delete(x){
Société.splice(x,1);
localStorage.setItem('Société',JSON.stringify(Société));
affichage();
}  
let id 
function update(y){
var Socié = Société.find(element => element.ID == y);
document.getElementById('nom').value =  Socié.Name ;
document.getElementById('address').value =  Socié.Address ;
document.getElementById('mail').value =  Socié.Email ;
document.getElementById('employees').value =  Socié.Employees ;
id = y
}
function save(){
var Socié = Société.find(element => element.ID == id );
Socié.Name = document.getElementById('nom').value ;
Socié.Address = document.getElementById('address').value;
Socié.Email = document.getElementById('mail').value ; 
Socié.Employees = document.getElementById('employees').value ;
localStorage.setItem('Société',JSON.stringify(Société));
window.location.reload() ;
}