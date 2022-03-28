"use strict";

/* ************************************************************************************************************
WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
    THIS CONFIGURES THE SERVER
    THIS CONFIGURES THE GALLERY, READING A FILE FOLDER AND CREATING HANDLERS FOR EACH FILE IN THE FOLDER
WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
************************************************************************************************************ */

//const async = require('async');
const getANYFile = require( __dirname + '/backend/getAnyFile.js' ).getAnyFile;
const LogThis = require( __dirname + '/backend/LogThis.js' );

let cl = console.log;
let lt = new LogThis( 1, true );

//===========================================================================================================================
let configServer = function( port )
{   let authorized = false;
    console.log("\nsiteService Running!\n")
    let server =    require( __dirname + '/backend/webServer.js');
    let router =    require( __dirname + "/backend/webRouter.js");

    let listOfHandles = [
        { title:'HOST_IP_ADDRESS', mime:'text/javascript', filepath:'../HOST_IP_ADDRESS.js'},
        { title:'favicon.ico', mime:'text/x-ico', filepath:'frontend/favicon.ico' },
        { title:'tagJS', mime:'text/javascript', filepath:"frontend/tag.js" },
//        { title:'webn8rClientLib_js_DecodeTokenJS', mime:'text/javascript', filepath:"_lib/webn8rClientLib_js/DecodeToken.js"},

        { title:'surveyCSS', mime:'text/css', filepath: "frontend/views/survey.css" },
        { title:'surveyHTML', mime:'text/html', filepath: "frontend/views/survey.html" },
        { title:'', mime:'text/html', filepath: "frontend/views/survey.html" },
        { title:'tagJS', mime:'text/javascript', filepath: "frontend/tag.js" },
        { title:'logoPNG', mime:'img/png', filepath: "static/logo.png" },
		{ title:'databaseListsJS', mime:'text/javascript',  filepath:"frontend/views/databaseLists.js" },
		{ title:'DropDownCheckBoxListJS', mime:'text/javascript',  filepath:"frontend/views/DropDownCheckBoxList.js" },
		{ title:'makeAWSServicesTableJS', mime:'text/javascript',  filepath:"frontend/views/makeAWSServicesTable.js" },
		{ title:'makeAWSCertificationsTableJS', mime:'text/javascript',  filepath:"frontend/views/makeAWSCertificationsTable.js" },
		{ title:'makeDevLangTableJS', mime:'text/javascript',  filepath:"frontend/views/makeDevLangTable.js" },
		{ title:'makeDevToolTableJS', mime:'text/javascript',  filepath:"frontend/views/makeDevToolTable.js" },
		{ title:'makeDevOpsTableJS', mime:'text/javascript',  filepath:"frontend/views/makeDevOpsTable.js" },
		{ title:'makeDevSecOpsTableJS', mime:'text/javascript',  filepath:"frontend/views/makeDevSecOpsTable.js" },
		{ title:'makeDataOpsTableJS', mime:'text/javascript',  filepath:"frontend/views/makeDataOpsTable.js" },
		{ title:'makeMLOpsTableJS', mime:'text/javascript',  filepath:"frontend/views/makeMLOpsTable.js" },
		{ title:'makeConsultingTableJS', mime:'text/javascript',  filepath:"frontend/views/makeConsultingTable.js" },
		{ title:'makeRolesTableJS', mime:'text/javascript',  filepath:"frontend/views/makeRolesTable.js" },
		{ title:'makeDevOpsImplementationMatrixJS', mime:'text/javascript',  filepath:"frontend/views/makeDevOpsImplementationMatrix.js" },
		{ title:'makeDevOpsAutoIntegrationTableJS', mime:'text/javascript',  filepath:"frontend/views/makeDevOpsAutoIntegrationTable.js" },


		{ title:'reportsHTML', mime:'text/html',  filepath:"frontend/views/reports.html" },

		{ title:'healthCheckHTML', mime:'text/html',  filepath:"frontend/views/healthCheck.html" },

		{ title:'userCRUDHTML', mime:'text/html',  filepath:"frontend/views/userCRUD.html" },

		{ title:'dbAdminHTML', mime:'text/html',  filepath:"frontend/views/dbAdmin.html" },
		{ title:'DecodeTokenJS', mime:'text/javascript',  filepath:"frontend/views/DecodeToken.js" },
		{ title:'DecodeTokenJS', mime:'text/javascript',  filepath:"frontend/views/DecodeToken.js" },

        { title:'certManagerHTML', mime:'text/html',  filepath:"frontend/views/certManager.html" },

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
    }

//    let dbIO  =     require( __dirname + "/backend/databases/MySQL/MySQLIO.js");
//    handle['/MySQLIO'] = dbIO.MySQLIO;

    let dbRequestHandlers = {}
    dbRequestHandlers['MySQLIO'] = require( __dirname + "/backend/databases/MySQL/MySQLIO.js");
    cl("Now for dbRequestHandlers ... ")
    // got to load all of the files, and then consume their exports into the handle array
    for( let db in dbRequestHandlers ){
        for( let db2 in dbRequestHandlers[ db ]){
            cl("Finding " + db + " " )
            handle['/' + db ] = dbRequestHandlers[ db ][ db2 ];
        }
    }// end of running through the request handlers

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
