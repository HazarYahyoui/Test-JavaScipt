var addition = document.getElementById('Add');
var FirstName = document.getElementById('nom1');
var SecondName = document.getElementById('nom2');
var Email = document.getElementById('mail');
var Address = document.getElementById('address');
var v=true
function F_add(event){
     event.preventDefault();
    if (FirstName.value=='') {
        FirstName.classList.add('is-invalid');
        FirstName.classList.remove('is-valid');
         v = false ;
    }else {
        FirstName.classList.add('is-valid');
        FirstName.classList.remove('is-invalid');
    }
    if (SecondName.value=='') {
        SecondName.classList.add('is-invalid');
        SecondName.classList.remove('is-valid');
         v = false ;
    }else {
        SecondName.classList.add('is-valid');
        SecondName.classList.remove('is-invalid');
    }
    if (Email.value=='') {
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
         v = false ;
    }else {
        Email.classList.add('is-valid');
        Email.classList.remove('is-invalid');
    }
    if (Address.value=='') {
        Address.classList.add('is-invalid');
        Address.classList.remove('is-valid');
        v = false ;
    }else {
        Address.classList.add('is-valid');
        Address.classList.remove('is-invalid');
    } 
    if (v == true) {
    var employé = JSON.parse(localStorage.getItem('employé')) || [] ;
    var id = Math.random().toString(36).substring(2) ;
    var emp ={
        FirstName : FirstName.value,
        SecondName : SecondName.value,
        Email : Email.value,
        Address : Address.value,
        ID : id
    }
    employé.push(emp);
    localStorage.setItem('employé',JSON.stringify(employé));
    document.location.href = 'CrudEmployé.html';
    }
}
