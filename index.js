let player = {};

load();

function gotoNewPage()
{
    window.location.href = "new.html";
}

function load()
{
    player = JSON.parse(localStorage.getItem("player"));
    document.getElementById("cname").innerText = player.cname;
    document.getElementById("pname").innerText = player.pname;
    document.getElementById("spec").innerText = player.spec;
    document.getElementById("race").innerText = player.race;
    document.getElementById("size").innerText = player.size;
    document.getElementById("gender").innerText = player.gender;
    document.getElementById("align").innerText = player.align;
    document.getElementById("god").innerText = player.god;

    document.getElementById("strbase").innerText = player.str;
    document.getElementById("dexbase").innerText = player.dex;
    document.getElementById("conbase").innerText = player.con;
    document.getElementById("intbase").innerText = player.int;
    document.getElementById("wisbase").innerText = player.wis;
    document.getElementById("chabase").innerText = player.cha;

    document.getElementById("strmod").innerText = Math.floor((player.str - 10) / 2.0);
    document.getElementById("dexmod").innerText = Math.floor((player.dex - 10) / 2.0);
    document.getElementById("conmod").innerText = Math.floor((player.con - 10) / 2.0);
    document.getElementById("intmod").innerText = Math.floor((player.int - 10) / 2.0);
    document.getElementById("wismod").innerText = Math.floor((player.wis - 10) / 2.0);
    document.getElementById("chamod").innerText = Math.floor((player.cha - 10) / 2.0);

    //document.getElementById("level").innerText = 1;
}
