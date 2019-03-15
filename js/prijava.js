var greska = document.getElementById('greska');
var greska2 = document.getElementById('greska2');
var naucnik = {};
var naucnici = [];
var dohvaceni = false;
document.getElementById('prikazi').addEventListener("click", izlistaj);

function izlistaj(){
    if(!dohvaceni){
        var p = dohvati();
        if(p == null){
            greska.innerHTML = "Nema podataka";
        }else{
            for(i=0; i < p.length; i++){
                kreiraj_tabelu(p[i],'tabela');
            }
        }
    }
    var lista = document.getElementById('lista');
    lista.className = "shown";
    dohvaceni = true;
    return;
}

function kreiraj_tabelu(osoba, t){
    var tabela = document.getElementById(t);
    var red = document.createElement('tr');
    tabela.appendChild(red);
    for(svojstvo in osoba){
        var kol = document.createElement("td");
        kol.innerHTML = osoba[svojstvo];
        red.appendChild(kol);
    }
    return;
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


function prov_imena(){
    var ime = document.getElementById('name').value;
    var rg = new RegExp('[A-Za-z]$');
    if(rg.test(ime) == false){
        greska.innerHTML = "Pogresno uneto ime!";
        return false;
    }else {
        naucnik.ime = ime;
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
        naucnik.prezime = prezime;
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
        naucnik.grad = grad;
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
        naucnik.rad = rad;
        return true;
    }
}

function prov_naucniRad(){
    var naucni = document.querySelectorAll("input[name='rad']");
    for(i in naucni){
        if(naucni[i].checked){
        naucnik.naucni = naucni[i].value;
        return true;
        }
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
        naucnik.opis = opis;
        return true;
    }
}

function provera(){
    if (prov_imena() && prov_prezimena() && prov_grada() && prov_rad() && prov_naucniRad() && prov_opis()){
        console.log(naucnik);
        smesti_naucnika(naucnik);
        return true;
    }
    return false;
}
    