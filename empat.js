let klik = confirm("Yakin mau ulang?");
let jumlahKlik = 0;

while(klik){
    jumlahKlik++;
    klik = confirm("Yakin mau ulang?");
}

if(klik==false){
alert("Anda telah melakukan pengulangan sebanyak " + jumlahKlik + " kali");
}



