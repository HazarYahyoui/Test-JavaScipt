var ch = prompt('Entrer une chaine') ;
var x ='';
for (let i = 0; i < ch.length; i++) {
    if (ch[i] === " "){
     x = ch[i+1];
    }
    
}
   var ch1 = ch[0].toUpperCase();
   var ch2 = x.toUpperCase() ;
document.writeln(ch1+'.'+ch2);