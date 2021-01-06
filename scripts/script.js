/* Maps*/
var ayutthaya;
var blackforest;
var blizzardworld;
var busan;
var castillo;
var chateau;
var dorado;
var antarctica;
var eichenwalde;
var hanamura;
var havana;
var hollywood;
var horizon;
var ilios;
var junkertown;
var kingsrow;
var lijiang;
var nepal;
var necropolis;
var numbani;
var oasis;
var paris;
var petra;
var rialto;
var route;
var anubis;
var volskaya;
var gibraltar;
var maps;
var control;
var assault;
var escort;
var flag;
var hybrid;
var elimination;
var deathmatch;
var teamdeathmatch;

/* Heroes */
var ana;
var ashe;
var baptiste;
var brigitte;
var dva;
var doomfist;
var genji;
var hanzo;
var junkrat;
var lucio;
var mccree;
var mei;
var mercy;
var moira;
var orisa;
var pharah;
var reaper;
var reinhardt;
var sigma;
var soldier;
var sombra;
var symmetra;
var torbjorn;
var tracer;
var widowmaker;
var winston;
var wreckingball;
var zarya;
var zenyatta;

var heroes;
var damage;
var tank;
var support;

/* Haalt alle hero variablen op */
function getHeroes() {
    /* De hero variabelen worden gevult door document.getElementById */
    ana = document.getElementById("ana");
    ashe = document.getElementById("ashe"); 
    baptiste = document.getElementById("baptiste");
    brigitte = document.getElementById("brigitte");   
    dva = document.getElementById("dva");
    doomfist = document.getElementById("doomfist");
    genji = document.getElementById("genji");
    hanzo = document.getElementById("hanzo");
    junkrat = document.getElementById("junkrat");
    lucio = document.getElementById("lucio");
    mccree = document.getElementById("mccree");
    mei = document.getElementById("mei");
    mercy = document.getElementById("mercy");
    moira = document.getElementById("moira");
    orisa = document.getElementById("orisa");
    pharah = document.getElementById("pharah");
    reaper = document.getElementById("reaper");
    reinhardt = document.getElementById("reinhardt");
    sigma = document.getElementById("sigma");
    soldier = document.getElementById("soldier");
    sombra = document.getElementById("sombra");
    symmetra = document.getElementById("symmetra");
    torbjorn = document.getElementById("torbjorn");
    tracer = document.getElementById("tracer");
    widowmaker = document.getElementById("widowmaker");
    winston = document.getElementById("winston");
    wreckingball = document.getElementById("wreckingball");
    zarya = document.getElementById("zarya");
    zenyatta = document.getElementById("zenyatta");
    
    /* Hero variablen komen in de heroes array */
    heroes = [ana,ashe,baptiste,brigitte,dva,doomfist,
            genji,hanzo,junkrat,lucio,mccree,mei,mercy,
            moira,orisa,pharah,reaper,reinhardt,sigma,
            soldier,sombra,symmetra,torbjorn,tracer,
            widowmaker,winston,wreckingball,zarya,zenyatta];


    damage = [ashe,doomfist,genji,hanzo,junkrat,mccree,mei,
            pharah,reaper,soldier,sombra,symmetra,torbjorn,
            tracer,widowmaker];
    
    tank = [dva,orisa,reinhardt,sigma,winston,wreckingball,zarya];

    support = [ana,baptiste,brigitte,lucio,mercy,
        moira,zenyatta];

}

/* Bron onzichtbaar/zichtbaar maken van elementen: 
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
*/

/* Maakt alle heroes zichtbaar */
function showAllHeroes() {
    getHeroes();
    var i;
    for (i = 0; i < heroes.length; i++) {
        heroes[i].style.display = "block";
    }
}

/* Maakt alle heroes onzichtbaar */
function hideAllHeroes() {
    getHeroes();
    var i;
    for (i = 0; i < heroes.length; i++) {
        heroes[i].style.display = "none";
    }
}

/* Maakt alle damage heroes zichtbaar */
function showDamage() {
    hideAllHeroes();
    getHeroes();
    var i;
    for (i = 0; i < damage.length; i++) {
        damage[i].style.display = "block";
    }
}

/* Maakt alle tank heroes zichtbaar */
function showTanks() {
    hideAllHeroes();
    getHeroes();
    var i;
    for (i = 0; i < tank.length; i++) {
        tank[i].style.display = "block";
    }
}

/* Maakt alle support heroes zichtbaar */
function showSupports() {
    hideAllHeroes();
    getHeroes();
    var i;
    for (i = 0; i < support.length; i++) {
        support[i].style.display = "block";
    }
}

/* Haalt alle map variablen op */
function getMaps() {
    /* De map variabelen worden gevult door document.getElementById */
    ayutthaya = document.getElementById("ayutthaya");
    blackforest = document.getElementById("black-forest");
    blizzardworld = document.getElementById("blizzard-world");
    busan = document.getElementById("busan");
    castillo = document.getElementById("castillo");
    chateau = document.getElementById("chateau-guillard");
    dorado = document.getElementById("dorado");
    antarctica = document.getElementById("ecopoint-antarctica");
    eichenwalde = document.getElementById("eichenwalde");
    hanamura = document.getElementById("hanamura");
    havana = document.getElementById("havana");
    hollywood = document.getElementById("hollywood");
    horizon = document.getElementById("horizon-lunar-colony");
    ilios = document.getElementById("ilios");
    junkertown = document.getElementById("junkertown");
    kingsrow = document.getElementById("kings-row");
    lijiang = document.getElementById("lijiang-tower");
    nepal = document.getElementById("nepal");
    necropolis = document.getElementById("necropolis");
    numbani = document.getElementById("numbani");
    oasis = document.getElementById("nepal");
    paris = document.getElementById("paris");
    petra = document.getElementById("petra");
    rialto = document.getElementById("rialto");
    route = document.getElementById("route-66");
    anubis = document.getElementById("temple-of-anubis");
    volskaya = document.getElementById("volskaya-industries");
    gibraltar = document.getElementById("watchpoint-gibraltar");

    /* Map variablen komen in de maps array */
    maps = [ayutthaya, blackforest, blizzardworld, busan, castillo,
        chateau, dorado, antarctica, eichenwalde, hanamura,
        havana, hollywood, horizon, ilios, junkertown, kingsrow,
        lijiang, nepal, necropolis, numbani, oasis, paris, petra,
        rialto, route, anubis, volskaya, gibraltar];
    
    control = [busan, ilios, lijiang, nepal, oasis];
    assault = [hanamura, horizon, paris, anubis, volskaya];
    escort = [dorado, havana, junkertown, rialto, gibraltar];
    flag = [ayutthaya, ilios, lijiang, nepal, oasis];
    hybrid = [blizzardworld, eichenwalde, hollywood, kingsrow, numbani];
    elimination = [blackforest, castillo, antarctica, necropolis];
    deathmatch = [chateau, dorado, eichenwalde, hollywood, kingsrow, petra];
    teamdeathmatch = [blackforest, castillo, chateau, dorado, antarctica, 
        eichenwalde, hollywood,kingsrow, necropolis, petra];
}

/* Maakt alle maps zichtbaar */
function showAllMaps() {
    getMaps();
    var i;
    for (i = 0; i < maps.length; i++) {
        maps[i].style.display = "block";
    }
}

/* Maakt alle heroes onzichtbaar */
function hideAllMaps() {
    getMaps();
    var i;
    for (i = 0; i < maps.length; i++) {
        maps[i].style.display = "none";
    }
}

/* Maakt alle Control maps zichtbaar */
function showControl() {
    hideAllMaps();

    for (i = 0; i < control.length; i++) {
        control[i].style.display = "block";
    }
}

/* Maakt alle Control maps zichtbaar */
function showAssault() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < assault.length; i++) {
        assault[i].style.display = "block";
    }
}

/* Maakt alle Escort maps zichtbaar */
function showEscort() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < escort.length; i++) {
        escort[i].style.display = "block";
    }
}

/* Maakt alle Capture The Flag maps zichtbaar */
function showFlag() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < flag.length; i++) {
        flag[i].style.display = "block";
    }
}

/* Maakt alle Hybrid maps zichtbaar */
function showHybrid() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < hybrid.length; i++) {
        hybrid[i].style.display = "block";
    }
}

/* Maakt alle Elimination maps zichtbaar */
function showElimination() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < elimination.length; i++) {
        elimination[i].style.display = "block";
    }
}

/* Maakt alle Deathmatch maps zichtbaar */
function showDeathmatch() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < deathmatch.length; i++) {
        deathmatch[i].style.display = "block";
    }
}

/* Maakt alle Team Deathmatch maps zichtbaar */
function showTeamDeathmatch() {
    getMaps();
    hideAllMaps();

    for (i = 0; i < teamdeathmatch.length; i++) {
        teamdeathmatch[i].style.display = "block";
    }
}

