$(document).ready(function() {
    //trigger function after file has been uploaded   
    triggerSearchBar();
    $("#files").on('change', function() {
        LoadFiles();
    });
});



function opensection(idname, h) {
    document.getElementById(idname).classList.toggle("hide");
    change_color(h);
}

function closeallmenuexcept(idname) {
    if (idname == "edit_menu") {
        document.getElementById("prompt_menu").classList.add("hide")
        document.getElementById("settings_menu").classList.add("hide")
    } else if (idname == "prompt_menu") {
        document.getElementById("edit_menu").classList.add("hide")
        document.getElementById("settings_menu").classList.add("hide")
    } else if (idname == "settings_menu") {
        document.getElementById("edit_menu").classList.add("hide")
        document.getElementById("prompt_menu").classList.add("hide")
    }

}

function openonly(idname, h) {
    closeallmenuexcept(idname);
    document.getElementById(idname).classList.toggle("hide");
    change_color(h);

}

function change_color(b) {
    document.getElementById("file").classList.remove("active");
    document.getElementById("editss").classList.remove("active");
    document.getElementById("promptc").classList.remove("active");
    document.getElementById("settingc").classList.remove("active");
    document.getElementById(b).classList.add("active");
}