document.getElementById("text_cub_1").onclick = function () {
    if (document.getElementById("text_cub_1").className === "text_1_anm") {
        document.getElementById("text_cub_1").className = "text_1_anm_end";
        document.getElementById("RP_start").className = "RP_anm_end";
        document.getElementById("background").className = "off_back";
        document.getElementById("text_joe_2").className = "text_joe_2_end";
        document.getElementById("clue_1").className = "game_clue_1_y";
        document.getElementById("proops").className = "props_show_on";
        document.getElementById('main_theme_e1').play();
    }
};
document.getElementById("text_joe_2").onclick = function () {
    if (document.getElementById("text_joe_2").className === "text_joe_2_end") {
        document.getElementById("text_joe_2").className = "text_joe_2_up";
        document.getElementById("JOE_start").style.backgroundImage = "url(../../media/IMG/charecter/joe_set_3.png)";
        document.getElementById("RP_start").className = "RP_set_3";
        document.getElementById("text_rp_3").className = "text_rp_3_mid";
    }
};
document.getElementById("text_rp_3").onclick = function () {
    if (document.getElementById("text_rp_3").className === "text_rp_3_mid") {
        document.getElementById("text_rp_3").className = "text_rp_3_end";
        document.getElementById("text_joe_4").className = "text_joe_4_mid";
        document.getElementById("JOE_start").style.backgroundImage = "url(../../media/IMG/charecter/joe_set_4.png)";
        document.getElementById("RP_start").style.backgroundImage = "url(../../media/IMG/charecter/rp_set_4.png)";
    }
};
document.getElementById("text_joe_4").onclick = function () {
    if (document.getElementById("text_joe_4").className === "text_joe_4_mid") {
        document.getElementById("text_joe_4").className = "text_joe_4_end";
        document.getElementById("text_rp_e2").className = "text_rp_e2_up";
    }
};

document.getElementById("text_rp_e2").onclick = function () {
    if (document.getElementById("text_rp_e2").className === "text_rp_e2_up") {
        document.getElementById("text_rp_e2").className = "text_rp_e2_end";
        document.getElementById("arthur_g").className = "arthur_anm_end";
    }
};

document.getElementById("exit_icon").onclick = function () {
    if (document.getElementById("arthur_g").className === "arthur_anm_end") {
        document.getElementById("arthur_g").className = "arthur_anm";
        document.getElementById("clue_2").className = "game_clue_2_y";
    }
};

document.getElementById("clue_2").onclick = function () {
    if (document.getElementById("clue_2").className === "game_clue_2_y") {
        document.getElementById("arthur_g").className = "arthur_anm_end";
    }
};