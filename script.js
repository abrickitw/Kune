let xmlhttp = new XMLHttpRequest();
//used to interact with servers. You can retrieve data from a URL without having to do a full page refresh.
// This enables a Web page to update just part of a page without disrupting what the user is doing.
xmlhttp.open("GET", "tablica_HRK.xml", false);
xmlhttp.send("");
let xmlDoc = xmlhttp.responseXML;


function hideTabs() {
    var tableDiv = document.getElementById("myDiv");
    tableDiv.style.display = "none";
    document.getElementById("demo").innerHTML = "";
}



function toggleTable() {
    let tableDiv = document.getElementById("myDiv");
    if (tableDiv.style.display == "none") {
        let table = "<table class='my-table'><tr><th>Naziv</th><th>Format</th><th>Masa</th><th>Boja</th><th>Lice</th><th>Nalicje</th><th>Zastita</th><th>Vrijednost</th></tr><br></br>";
        var x = xmlDoc.getElementsByTagName("apoen");
        for (var i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("naziv")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("format")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("masa")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("boja")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("motiv_lice")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("motiv_nalicje")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("zastita")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("vrijednost_euro")[0].childNodes[0].nodeValue + "</td></tr>" +
                "<br></br>";
        }
        tableDiv.style.display = "block";
        document.getElementById("demo").innerHTML = table;

    } else {
        hideTabs();
    }
}


function myFunction2(xml) {
    let tableDiv = document.getElementById("myDiv");
    if (tableDiv.style.display == "none") {
        let table = "<table class='my-table'><tr><th>Naziv</th><th>Lice</th><th>Nalice</th><th>Opsi</th></tr>";
        for (var i = 0; i < xmlDoc.getElementsByTagName("apoen").length; i++) {
            var apoen = xmlDoc.getElementsByTagName("apoen")[i];
            table += "<tr><td>" +
                apoen.getElementsByTagName("naziv")[0].childNodes[0].nodeValue + "</td><td>" +
                apoen.getElementsByTagName("motiv_lice")[0].childNodes[0].nodeValue + "</td><td>" +
                apoen.getElementsByTagName("motiv_nalicje")[0].childNodes[0].nodeValue + "</td><td>" +
                apoen.getElementsByTagName("opis")[0].childNodes[0].nodeValue + "</td></tr>";
        }

        tableDiv.style.display = "block";
        document.getElementById("demo").innerHTML = table;
    } else {
        hideTabs();
    }
}




function filterOsoba(xml) {
    let input = document.getElementById("inputField").value.toLowerCase();
    let ispis = document.getElementById("ispisVr");

    if (input !== "" && " ") {
        var apoens = xmlDoc.getElementsByTagName("apoen");
        let output = "";
        var matchedElements = [];

        for (let i = 0; i < apoens.length; i++) {
            var apoen = apoens[i];
            var link1 = ('data:image/jpeg;base64,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');
            if (apoen.getElementsByTagName("motiv_lice")[0].childNodes[0].nodeValue.toLowerCase().includes(input)) {
                output += "<br/>" + apoen.getElementsByTagName("motiv_lice")[0].childNodes[0].nodeValue + "<br/> " +
                    apoen.getElementsByTagName("opis")[0].childNodes[0].nodeValue + "<br/> " +
                    apoen.getElementsByTagName("naziv")[0].childNodes[0].nodeValue + "<br/> ";
                    document.getElementById("pozadina").style.backgroundImage = "url(" + link1 + ")";
                    
                matchedElements.push(apoen);
            }
        }
        ispis.innerHTML = output;
        if (matchedElements.length == 1) {

            var link = matchedElements[0].getElementsByTagName("slika")[0].childNodes[0].nodeValue;
            document.getElementById("pozadina").style.backgroundImage = "url(" + link + ")";
            var prazni = document.getElementById("nestajuciTekst");
            prazni.innerHTML = " ";
        }
    }

}

function calculator() {

    document.getElementById("convertBtn").addEventListener("click", function () {
        let euroInput = document.getElementById("euroInput").value;
        let kunaOutput = euroInput * 7.5;
        document.getElementById("kunaOutput").innerHTML = kunaOutput.toFixed(2);
    });

}