var melee = 0;
var range = 0;
var courtyard = 0;
var front = 0;
var flank = 0;

console.log("deez nutz")

function calculate()
{
    var waves = parseInt(document.getElementById("waves").value)

    melee = parseInt(document.getElementById("melee").value) + parseInt(document.getElementById("bakery").value) + parseInt(document.getElementById("marketplace").value);
    range = parseInt(document.getElementById("range").value) + parseInt(document.getElementById("stonemason").value) + parseInt(document.getElementById("siege").value);
    courtyard = parseInt(document.getElementById("courtyard").value) + parseInt(document.getElementById("keep").value) + parseInt(document.getElementById("defense").value) + parseInt(document.getElementById("hol").value) + parseInt(document.getElementById("encampment").value) + parseInt(document.getElementById("barracks").value);
    front = parseInt(document.getElementById("front").value) + parseInt(document.getElementById("hospital").value) + parseInt(document.getElementById("sawmill").value);
    flank = parseInt(document.getElementById("flank").value) + parseInt(document.getElementById("storehouse").value) + parseInt(document.getElementById("drillground").value) + parseInt(document.getElementById("estate").value) + parseInt(document.getElementById("barracks").value);

    if (parseInt(document.getElementById("barracks").selectedIndex) < 5)
        courtyard -= document.getElementById("barracks").value
    else
        flank -= document.getElementById("barracks").value

    var hitsize = ((192 * (1 + (front / 100))) + ((64 * (1 + (flank / 100))) * 2)) * waves;

    document.getElementById("commander_stats").innerText
        = melee
        + "/"
        + range
        + "-"
        + courtyard
        + "-"
        + front
        + "-"
        + flank
        + " (" + hitsize + ")";
}
