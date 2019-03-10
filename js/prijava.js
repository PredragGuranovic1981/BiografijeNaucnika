var greska = document.getElementById('greska');
var naucnik = {};
var naucnici = [];
var dohvaceni = false;

function prov_imena(){
    var ime = document.getElementById('name').value;
    var rg = new RegExp('[A-Za-z]$');
    if(rg.test(ime) == false){
        greska.innerHTML = "Pogresno uneto ime!";
        return false;
    }else {
        return true;
    }
}

function prov_prezimena(){
    var prezime = document.getElementById('lastName').value;
    var rg2 = new RegExp('[A-Za-z]$');
    if(rg2.test(prezime) == false){
        greska.innerHTML = "Pogresno uneto prezime!";
        return false;
    }else {
        return true;
    }
}

function prov_grada(){
    var grad = document.getElementById('city').value;
    var rg3 = new RegExp('[A-Za-z]$');
    if(rg3.test(grad) == false){
        greska.innerHTML = "Pogresno uneto ime grada!";
        return false;
    }else {
        return true;
    }
}

function prov_rad(){
    var rad = document.getElementById('paper').value;
    var rg4 = new RegExp('[A-Za-z0-9]$');
    if(rg4.test(rad) == false){
        greska.innerHTML = "Pogresno uneto ime naucnog rada!";
        return false;
    }else {
        return true;
    }
}

function prov_naucniRad(){
    var naucni = document.querySelectorAll("input[name='rad']");
    for(i in naucni){
        if(naucni[i].checked)
        return true;
    }
    greska.innerHTML = "Nije odabrano da li je naucni rad doktorski!";
    return false;
}

function prov_opis(){
    var opis = document.getElementById('opis').value;
    if(opis == ""){
        greska.innerHTML = "Niste dali kratak opis rada!";
        return false;
    }else {
        return true;
    }
}

function dohvati(){
    var za_dohvatanje = localStorage.getItem("naucnici");
    var p = JSON.parse(za_dohvatanje);
    console.log(p);
    return p;
}
function smesti_naucnika(naucnik){
    dohvaceni = false;
    var p = dohvati();
    if(p != null){
        p.push(naucnik);
        za_smestanje = JSON.stringify(p);
    }else{
        naucnici.push(naucnik);
        za_smestanje = JSON.stringify(naucnici);
    }
    localStorage.setItem("naucnici", za_smestanje);
    return;
}

function provera(){
    if (prov_imena() && prov_prezimena() && prov_grada() && prov_rad() && prov_naucniRad() && prov_opis()){
        console.log(naucnik);
        smesti_naucnika(naucnik);
        return true;
    }
    return false;
}
    