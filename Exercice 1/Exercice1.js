var x = Number (prompt('Entrer la taille du tableau '));
var T = new Array ;

for (let i = 0; i < x; i++) {
    T[i]=Number(prompt("Entrer la valeur de la case"+ (i+1)));    
   }
console.log(T);
let y = [];

for (let i = 0; i < x; i++) { 
    var z = Math.min(...T)
    if (z>0){
      ind = T.indexOf(z)
      var T1 = T.splice(ind , 1)
      y.push(z)
      if(y.length === 2){ break }
    } else if (z<0){
        ind = T.indexOf(z)
        var T1 = T.splice(ind , 1)  
    } 
  }

 function Somme (){
    var Som = 0 ;
    for (let i = 0; i< y.length ; i++) {
      Som += y[i]  ;
    }
    return Som ;
}
document.writeln('la somme de deux entiers min positifs = ' + Somme());   
