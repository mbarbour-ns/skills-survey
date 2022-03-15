"use strict";

/* ************************************************************************************************************
WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
    THIS CONFIGURES THE SERVER
    THIS CONFIGURES THE GALLERY, READING A FILE FOLDER AND CREATING HANDLERS FOR EACH FILE IN THE FOLDER
WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
************************************************************************************************************ */

const async = require('async');
const getANYFile = require( __dirname + '/backend/getAnyFile.js' ).getAnyFile;
const LogThis = require( __dirname + '/backend/LogThis.js' );

let cl = console.log;
let lt = new LogThis( 1, true );

//===========================================================================================================================
let configServer = function( port )
{   let authorized = false;
    console.log("\nsiteService Running!\n")
    let server =        require( __dirname + '/backend/webServer.js');
    let router =        require( __dirname + "/backend/webRouter.js");
//    let dbLinkerWrite = require( __dirname + "/backend/dbRequestHandlers/Linker/dbWriteLinkerResults.js");
//    let dbLinkerRead =  require( __dirname + "/backend/dbRequestHandlers/Linker/dbReadLinkerResults.js");
    let dbIO  = require( __dirname + "/backend/MySQLIO.js");

    let listOfHandles = [
        { title:'HOST_IP_ADDRESS', mime:'text/javascript', filepath:'../HOST_IP_ADDRESS.js'},
        { title:'favicon.ico', mime:'text/x-ico', filepath:'frontend/favicon.ico' },
        { title:'tagJS', mime:'text/javascript', filepath:"/froontend/tag.js" },
//        { title:'webn8rClientLib_js_DecodeTokenJS', mime:'text/javascript', filepath:"_lib/webn8rClientLib_js/DecodeToken.js"},

        { title:'SurveyStyles', mime:'text/css', filepath: "frontend/views/survey.css" },
        { title:'', mime:'text/html', filepath: "frontend/views/survey.html" },
    ]

    let theExports = []
    for( let h in listOfHandles )
    {
        lt.p("RequestHandlers.js handler: " +  JSON.stringify(listOfHandles[ h ]) )
        theExports[ listOfHandles[ h ].title ] = function( pResponse, pPostData ){
            lt.p("Request handler (requestHandlers.js)'" + JSON.stringify(listOfHandles[ h ]) + "' was called.");
            let file = __dirname + "/" + listOfHandles [ h ].filepath ;
            getANYFile( pResponse, listOfHandles [ h ].mime, file, "cat " + file );
        }
    } 

//    let loginDbWork = require( __dirname + "/dbRequestHandlers/loginDBWork");
    let handle = {};
    for( let h in theExports ){
        handle[ "/" + h ] = theExports[ h ];
//        console.log("listOfHandles: for " + h  )
    }

    handle['/dbWriteLinkerResultsTable'] = dbLinkerWrite.dbWriteLinkerResultsTable;
    handle['/dbReadLinkerResultsTable'] = dbLinkerRead.dbReadLinkerResultsTable;
    handle['/MySQLIO'] = dbLinkerReadIO.MySQLIO;
    handle['/imageUpload'] = imageUpload.imageUpload;

    for( let h in handlersCreatedFromFileFolders ){
      handle[ h ] = handlersCreatedFromFileFolders[ h ]
    }
    server.start( port, router.route, handle );
}
//===========================================================================================================================


cl("Using " + process.argv.length + " arguments");
let port = 8999;// default attempt

for( let argvi in process.argv){
    cl( "arg[" + argvi + "] : " + process.argv[ argvi ]);
    if ( process.argv[ argvi ] === "port" ) {
        port = Number( process.argv[ Number( argvi ) + 1 ] );
        cl( "The port value = " + port );
    }
}

configServer(port)
