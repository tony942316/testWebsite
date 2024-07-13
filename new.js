let player = {};

function gotoIndexPage()
{
    window.location.href = "index.html";
}

function save()
{
    player.cname = document.getElementById("cname").value;
    player.pname = document.getElementById("pname").value;
    player.spec = document.getElementById("spec").value;
    player.race = document.getElementById("race").value;
    player.size = document.getElementById("size").value;
    player.gender = document.getElementById("gender").value;
    player.align = document.getElementById("align").value;
    player.god = document.getElementById("god").value;
    player.str = document.getElementById("str").value;
    player.dex = document.getElementById("dex").value;
    player.con = document.getElementById("con").value;
    player.int = document.getElementById("int").value;
    player.wis = document.getElementById("wis").value;
    player.cha = document.getElementById("cha").value;
    player.hitdie = document.getElementById("hitdie").value;

    localStorage.setItem("player", JSON.stringify(player));
}
