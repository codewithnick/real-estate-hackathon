function getTimestamp() {
    const pad = (n, s = 2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();

    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

async function readFile(fileData) {
    //console.log(fileData.type)

    if (fileData.type == "text/plain") {
        let textFromFileLoaded = await fileData.text()
            //console.log(textFromFileLoaded);
        return textFromFileLoaded
    } else {
        alert("the following filetype is not supported !!! sorry")
        return false;
    }

}

function download_file(fileid) {
    //console.log("downloading " + fileid)
    var a = document.createElement("a");
    myfile = getFileFromId(fileid);
    //console.log(myfile," is file from id")
    file = new File([myfile["content"]], myfile["name"], { type: "text/plain", lastModified: myfile["lastmodified"] })
    a.href = URL.createObjectURL(file);
    a.download = "Edited " + myfile["name"] + " " + new Date().getTime() + " .txt";
    //a.target = "_blank"
    a.click();
}


async function LoadFiles() {
    const files = document.getElementById("files").files;
    //localStorage.clear()
    let items = localStorage.getItem("fileStorage");
    if (items == null) {
        items = []
    } else {
        items = JSON.parse(items)
    }
    ////console.log(items)
    var count = 1;
    map={"�":""}
    const mapReplace = (str, map) => {
        const matchStr = Object.keys(map).join('|');
        if (!matchStr) return str;
        const regexp = new RegExp(matchStr, 'g');
        return str.replace(regexp, match => map[match]);
      };
    for (let i = 0; i < files.length; i++) {
        let myfile = files.item(i);
        //reading file
        filetext = await readFile(myfile);
        ////console.log(myfile);
        //if file is read then
        if (filetext) {
            filename = myfile.name.split(".")[0];
            filetext=mapReplace(filetext,map)
            let id=Math.floor(Date.now() * Math.random());
            var data = { "created_id": id, "name": filename, "content": filetext, "editable": true, "lastmodified": getTimestamp() }
                //checking if file already exists
            if (checkifValueExists(filename)) { alert(filename + " already loaded"); } else { items.push(data); }
        }

        //create new file
        //var file = new File([filetext], {type: "text/plain",});
        //save file
        //download(file)
    }

    localStorage.setItem("fileStorage", JSON.stringify(items))
    refreshFiles();
    //window.location.reload();
}

//refresh files in sidebar
function refreshFiles(searchquery = null) {
    let importedfiles = document.getElementById("importedfiles")
    importedfiles.innerHTML = '';
    if (localStorage["fileStorage"] == null) {
        //console.log("nothing present")
        files = []
    } else {
        files = JSON.parse(localStorage["fileStorage"])
    }

    for (var i = 0; i < files.length; i++) {
        const element = files[i];
        const nodeelement = document.createElement("div");
        nodeelement.id = element["created_id"];
        let filename = element["name"];
        ////console.log(element)
        var htmlcode = `<div class="fcontainer"    onclick="openForEdit(${element["created_id"]})">
        <div class="nicons">
            <div class="sname" contenteditable=true spellcheck="false" 
            onKeyPress="editFilename(${element["created_id"]})" 
            onKeyUp="editFilename(${element["created_id"]})" 
             id="${'filename_'+element["created_id"]}"> ${element["name"]} </div>
            <div>
                <span class="iconss">
                    <a onclick="removeElement(${element["created_id"]})" class="sname"><i class="fa-solid fa-trash-can"></i></a>
                    <a onclick="download_file(${element["created_id"]})" class="sname"><i class="fa-solid fa-cloud-arrow-down"></i></a>
                    <!-- </div>  -->
                </span>
            </div>
        </div>
        <div class="datte">${element["lastmodified"]}</div>
        <div class="fdesk">
        ${element["content"]}
        </div>
    </div>`
            //if filname  exists and searchquery is specified append
        if (searchquery) {
            if (filename.includes(searchquery)) {
                nodeelement.innerHTML = htmlcode
                importedfiles.appendChild(nodeelement)
            }
        } else {
            nodeelement.innerHTML = htmlcode
            importedfiles.appendChild(nodeelement)
        }

    }
}

//returns true if value exists, false if doesnt exist
function checkifValueExists(value) {
    if (localStorage["fileStorage"] == null) { return false } else { files = JSON.parse(localStorage["fileStorage"]) }
    for (var i = 0; i < files.length; i++) {
        const element = files[i]["name"];
        if (element == value) { return true; }
    }
    return false
}

//returns value if value exists, false if doesnt exist
function getFileFromName(filename) {
    if (localStorage["fileStorage"] == null) { return false } else { files = JSON.parse(localStorage["fileStorage"]) }
    for (var i = 0; i < files.length; i++) {
        const element = files[i]["name"];
        if (element == filename) { return files[i]; }
    }
    return false
}


//returns value if value exists, false if doesnt exist
function getFileFromId(fileid) {
    if (localStorage["fileStorage"] == null) { return false } else { files = JSON.parse(localStorage["fileStorage"]) }
    for (var i = 0; i < files.length; i++) {
        const element = files[i]["created_id"];
        if (element == fileid) { return files[i]; }
    }
    return false
}

function openForEdit(fileid) {
    ////console.log("editing ", fileid)
    file = getFileFromId(fileid);
    var editor = document.getElementById("editor")
    mydiv=document.createElement("div");
    editor.classList.remove("hide")
    mydiv.innerHTML=file["content"];
    editor.innerHTML='';
    if (file['content']){
        editor.appendChild(mydiv);
    }
    
}

//stores edited filename in localstorage
function editFilename(fileid) {
    //console.log(fileid)
    editedelement = document.getElementById('filename_' + fileid);
    editedvalue = editedelement.textContent;

    //if filename exists or editedvalue is null
    if (!editedvalue) { return false }
    if (getFileFromName(editedvalue)) { return false }

    //console.log("filename_"+fileid)
    //console.log(editedvalue)
    //setting locaal storage
    files = JSON.parse(localStorage["fileStorage"])
    let index = null
    for (var i = 0; i < files.length; i++) {
        const element = files[i];
        if (element["created_id"] == fileid) { index = i }
    }
    if (index != null) {
        //replace new filename
        files[index]["name"] = editedvalue;
    }
    //console.log(files[index])
    //save into local storage finally
    localStorage["fileStorage"] = JSON.stringify(files);
}

//remove element from dom
function removeElement(fileid) {
    elemid = fileid;
    if (confirm("Are you sure you want to delete this file")) {
        document.getElementById(elemid).remove();
        document.getElementById("editor").value = '';
        files = JSON.parse(localStorage["fileStorage"]);
        //searching and removing file
        for (var i = 0; i < files.length; i++) {
            const element = files[i]["created_id"];
            if (element == fileid) { files.splice(i, 1); break; }
        }
        //save into local storage finally
        localStorage["fileStorage"] = JSON.stringify(files);
    }
}

function download_all_files() {
    if (localStorage["fileStorage"] == null) { return false } else { files = JSON.parse(localStorage["fileStorage"]) }
    for (var i = 0; i < files.length; i++) {
        const id = files[i]["created_id"];
        download_file(id);
    }
    return false
}

function triggerSearchBar() {
    var edValue = document.getElementById("myInput");
    var s = edValue.value;
    if (s) { refreshFiles(s); } else { refreshFiles(); }
}