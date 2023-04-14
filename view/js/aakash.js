$(document).ready(function() {
    //trigger function after file has been uploaded   
    triggerSearchBar();
    $("#files").on('change', function() {
        LoadFiles();
    });
});

/* function w3_open() {
    a=document.getElementById("mySidebar").style.width = "25%";
    if (a.style.width=="25%")
    {
        a.style.width="0px";
    }
    else{
        a.style.width="25%"
    }
} */

function w3_close() {
    document.getElementById("editor1").classList.remove("sidemargin");
    document.getElementById("mySidebar").style.width = 0;
}

// function filess() {
//     a = document.getElementById("mySidebar");
//     if (a.style.width == 0) {
//         w3_open();
//     } else {
//         w3_close();
//     }
// }

function edValueKeyPress() {
    var edValue = document.getElementById("myInput");
    var s = edValue.value;
    console.log(s);
}

function hidesearch() {
    b = document.getElementById("formsearch");
    if (b.style.display == "none") {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
}
/* for inserting tab on editor */
$('#editor1').on('keydown .editor1', function(e) {
    if (e.keyCode == 9) {
        document.execCommand("InsertHTML", false, "&#09;");
        console.log('key');
        e.preventDefault();
    }
});


function setting() {
    var b = "settings";
    openatonce(b);
}

function prompt() {
    b = document.getElementById("edit");
    b.style.display = "none";
    var b = "prompts";
    openatonce(b);

}

// window.onscroll = function() {
//     myFunction()
// };

/*    var header = document.getElementById("myHeaderr");

   var sticky = header.offsetTop; */

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");

//     } else {
//         header.classList.remove("sticky");

//     }
// }
function w3_open() {
    a = document.getElementById("mySidebar");
    if (a.style.width == "25%") {
        a.style.width = "0";
    } else {
        a.style.width = "25%";
    }
    var b = "tofbtn";
    // openatonce(b);
}

function openatonce(b) {
    document.getElementById("tofbtn").classList.remove("activee");
    document.getElementById("editss").classList.remove("activee");
    document.getElementById("prompts").classList.remove("activee");
    document.getElementById("settings").classList.remove("activee");
    document.getElementById(b).classList.add("activee");
}

function openonly(b, c) {
    document.getElementById("edit").classList.add("hide");
    document.getElementById("prompt").classList.add("hide");
    //document.getElementById("settings").classList.add("hide");
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("editor1").classList.remove("sidemargin");
    document.getElementById("editor1").classList.add("hide");

    x = document.getElementById(b)
    x.classList.remove("hide");
    openatonce(c);
    if (b == "mySidebar") {
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("editor1").classList.add("sidemargin");

    }
    if (c == "settings" || b == "prompts") {
        document.getElementById("editor1").classList.add("hide");
    }
    if (c == "editss") {
        document.getElementById("editor1").classList.remove("hide");
    }


}