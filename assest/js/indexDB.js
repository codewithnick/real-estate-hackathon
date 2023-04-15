/*if (!window.indexedDB) { alert("indexdb is not supported") }
let request = window.indexedDB.open("QuizQuestDataBase", "1");
//error handler
request.onerror = function(e) {
    console.error(e);
}

request.onupgradeneeded = function(e) {
    let db = request.result;
    store = db.createObjectStore("QuestionStorage", { keyPath: "qid" })
        //store =db.createObjectStore("QuestionStorage",{autoIncrement:true})
    index = store.createIndex("questionText", "questionText", { unique: false })
}

request.onsuccess = function(e) {
        db = request.result;
        tx = db.transaction("QuestionStorage", "readwrite");
        store = tx.objectStore("QuestionStorage")
            // index=store.index("questionText")
            //error handler
        db.onerror = function(e) {
                console.error(e);
            }
            //adding
            //store.put({qid:1,questionText:"q1",correactans:true,result:true})
            //retriving
        let q1 = store.get(1)
            //let q2=index.get(1)
        q1.onsuccess = function() {
            console.log(q1.result)
        }

        //console.log(q2.request.questionText)                

        tx.complete = function() {
            db.close()
        }
    } */
    /*
    if(!window.indexedDB){alert("indexdb is not supported")}
    function createDBifnotexists(dbname,version,tablename,indexes){
            let request =window.indexedDB.open(dbname,version);
            //error handler
            request.onerror =function(e){
                console.error(e);
            }
            request.onupgradeneeded=function(e){
                let db =request.result;
                store =db.createObjectStore(tablename,{keyPath:"id",autoIncrement:true})
                //store =db.createObjectStore(tablename,{autoIncrement:true})
                for (let i = 0; i < indexes.length; i++) {
                    const index = indexes[i];
                    //objectStore.createIndex('indexName', 'property', options);
                    store.createIndex( index,index,{unique:false})    
                }            
            }
            request.onsuccess=function(e){
                db=request.result;
                tx=db.transaction(tablename,"readwrite");
                store =tx.objectStore(tablename)
                tx.complete=function(){
                    db.close()
                }
            }
    }

    //printing database contents
    function insertIntoDatabase(dbname,version,tablename,data){
        let request =window.indexedDB.open(dbname,version);
            //error handler
            request.onerror =function(e){
                console.error(e);
            }
            request.onsuccess=function(e){
                db=request.result;
                tx=db.transaction(tablename,"readwrite");
                store =tx.objectStore(tablename);
                //store.put({qid:1,questionText:"q1",correactans:true,result:true});
                store.put(data);
                tx.complete=function(){
                    db.close()
                }
            }
    }
    function printDatabase(dbname,version,tablename){
        let request =window.indexedDB.open(dbname,version);
            //error handler
            request.onerror =function(e){
                console.error(e);
            }
            request.onsuccess=function(e){
                db=request.result;
                tx=db.transaction(tablename,"readwrite");
                store =tx.objectStore(tablename);
                var allRecords = store.getAll();
                allRecords.onsuccess = function() {
                    console.log(allRecords.result);
                };
                tx.complete=function(){
                    db.close()
                }
            }
    }
    function getfromDb(dbname,version,tablename,query){
        let request =window.indexedDB.open(dbname,version);
            //error handler
            request.onerror =function(e){
                console.error(e);
            }
            request.onsuccess=function(e){
                db=request.result;
                tx=db.transaction(tablename,"readwrite");
                store =tx.objectStore(tablename);
                data =store.get(query)
                tx.complete=function(){
                    db.close()
                }
                
            }
    }
    createDBifnotexists("FileStorageDB","1","FileStorage",["filename","filecontent"]);
    var file = new File(["dummy"], {type: "text/plain",});
    //insertIntoDatabase("FileStorageDB","1","FileStorage",{filename:"new.txt",filecontent:file});
    printDatabase("FileStorageDB","1","FileStorage");*/