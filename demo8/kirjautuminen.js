document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut()
{
    if (localStorage.getItem("kirjautunut") === "kylla")
    {
        document.getElementById('tervetuloa-teksti').textContent = "Tervetuloa " + localStorage.getItem("nimi");
        document.getElementById('kirjautumislomake').style.display = "none";
        document.getElementById("kirjaudu_ulos_painike").style.display = "block";
    }
    else
    {
        document.getElementById("kirjaudu_ulos_painike").style.display = "none";
        document.getElementById("tervetuloa-teksti").textContent = "Kirjaudu sisään";
    }
}

function kirjaudu()
{
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function kirjaudu_ulos()
{
    localStorage.clear();
    document.getElementById("kirjaudu_ulos_painike").style.display = "none";
    document.getElementById("kirjautumislomake").style.display = "block";
    document.getElementById("tervetuloa-teksti").textContent = "Kirjaudu sisään";
}