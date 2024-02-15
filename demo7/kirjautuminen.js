document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut()
{
    let kirjautunut = 'kylla';
    if (kirjautunut === 'kylla')
    {
        document.getElementById('tervetuloa-teksti').textContent += localStorage.getItem("nimi");
    }
}

function kirjaudu()
{
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}