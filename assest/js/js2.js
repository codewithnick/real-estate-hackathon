/* editor.document.designMode = "On";
function transform(option, argument) {
  editor.document.execCommand(option, false, argument);
} */

function search() {
    let textToSearch = document.getElementById("searchbox").value;
    let paragraph = document.getElementById("editor");
    //let paragraph=document.getElementById("editor").contentDocument;
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(`${textToSearch}`, "gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}


function fetch() {
    // let a=document.getElementById("editor").contentWindow.document.body.innerHTML;
    let a = document.getElementById("editor").innerHTML;
    alert(a);

    selection = document.getSelection();
    var ispresent = document.getElementsByClassName('accent');
    if (ispresent.length > 0) {

    } else {
        wrappedselection = '<span class="accent" style="font-size: 22px;">' + selection + '</span>';
        document.execCommand('insertHTML', false, wrappedselection);
        alert(selection);
    }
}
/*   function fetch(){
   var iframe = document.getElementById('editor');
   var data='mysdsd sdsd sd sds d sds';
   iframe.contentWindow.document.open();
   iframe.contentWindow.document.write(data);
   iframe.contentWindow.document.close();
  }  */
function transform(option, argument) {
    let d = document.getElementById("editor").innerHTML;
    // alert(d)
    document.execCommand(option, false, argument);
}

function changeFont(argument) {

}

$(document).ready(function() {
    $("#rng").on("change", function() {
        var v = $(this).val();
        $('.editor.active').css('font-size', v + 'px');
        selection = document.getSelection();
        wrappedselection = '<span class="accent" style="font-size: 22px;">' + selection + '</span>';
        document.execCommand('insertHTML', false, wrappedselection);
    });
    $('.editor').on('focus', function() {
        $('.editor').removeClass('active');
        $(this).addClass('active');
    })
});