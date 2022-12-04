var addition = document.getElementById('Add');
var Name = document.getElementById('nom');
var Address = document.getElementById('address');
var Email = document.getElementById('mail');
var Employees = document.getElementById('employees');
var v=true
function F_add(event){
     event.preventDefault();
    if (Name.value=='') {
        Name.classList.add('is-invalid');
        Name.classList.remove('is-valid');
         v = false ;
    }else {
        Name.classList.add('is-valid');
        Name.classList.remove('is-invalid');
    }
    if (Address.value=='') {
        Address.classList.add('is-invalid');
        Address.classList.remove('is-valid');
        v = false ;
    }else {
        Address.classList.add('is-valid');
        Address.classList.remove('is-invalid');
    }
    if (Email.value=='') {
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
         v = false ;
    }else {
        Email.classList.add('is-valid');
        Email.classList.remove('is-invalid');
    }
    if (Employees.value=='') {
        Employees.classList.add('is-invalid');
        Employees.classList.remove('is-valid');
         v = false ;
    }else {
        Employees.classList.add('is-valid');
        Employees.classList.remove('is-invalid');
    }
    if (v == true) {
    var Société = JSON.parse(localStorage.getItem('Société')) || [] ;
    var id = Math.random().toString(36).substring(2) ;
    var Socié ={
        Name : Name.value,
        Address : Address.value,
        Email : Email.value,
        Employees : Employees.value,
        ID : id
    }
    Société.push(Socié);
    localStorage.setItem('Société',JSON.stringify(Société));
    document.location.href = 'CrudSociété.html';
    }
}
