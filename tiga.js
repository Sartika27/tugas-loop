document.write("<h3> Pertanyaan 3</h3><br>");

let c = 0;

for(c=0;c<=20;c++){
    if(c%2==0){
        document.write(c + "<p> Angka genap" + "</p>");
    }else if(c%2==1){
        document.write(c + "<p> Angka ganjil" + "</p>");
    }
}
