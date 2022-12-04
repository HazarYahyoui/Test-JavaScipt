var x = Number(prompt('Entrer la taille du tableau'));
var T = new Array
for (let i = 0; i < x; i++) {
    T[i]=Number(prompt("Entrer la valeur de la case"+ (i+1)));
       
   }
   function Somme(){
    var s=0;
    for (let i = 0; i < x ; i++) {
        if (T[i]>0) {
            s += T[i];   
        }   
    }
    return s ;
}
document.writeln('la somme des entiers positives = ' + Somme());
