document.getElementById("img_size_icon_1_ag").onclick = function () {
    if (document.getElementById("arthur_img_1").className === "arthur_img_1_s") {
        document.getElementById("arthur_img_1").className = "arthur_img_1_up";
        document.getElementById("img_back_1_ag").className = "img_back_s_1_ag_end";
        document.getElementById("img_size_icon_1_ag").className = "img_size_1_end_ag";
    }else{
        if (document.getElementById("arthur_img_1").className === "arthur_img_1_up") {
        document.getElementById("arthur_img_1").className = "arthur_img_1_s";
        document.getElementById("img_back_1_ag").className = "img_back_s_1_ag";
        document.getElementById("img_size_icon_1_ag").className = "img_size_1_s_ag";
    }
}
    };

document.getElementById("img_size_icon_2_ag").onclick = function () {
    if (document.getElementById("arthur_img_2").className === "arthur_img_2_s") {
        document.getElementById("arthur_img_2").className = "arthur_img_2_up";
        document.getElementById("img_back_2_ag").className = "img_back_s_2_ag_end";
        document.getElementById("img_size_icon_2_ag").className = "img_size_2_end_ag";
    }else{
        if (document.getElementById("arthur_img_2").className === "arthur_img_2_up") {
        document.getElementById("arthur_img_2").className = "arthur_img_2_s";
        document.getElementById("img_back_2_ag").className = "img_back_s_2_ag";
        document.getElementById("img_size_icon_2_ag").className = "img_size_2_s_ag";
    }
}
    };