/* DESIGN DISCUSSION - Why don't I disintegrate this file?
BECAUSE OF SCOPING, I don't know if its worth it to separate this file into the
SQL utilities AND the queryList. 
This process can be identified by 4 components:
- the XHR entry point, with its async process management
- the sessionStorage variables extracted from the postData
- the mysql functionality: get/end connection and sql caller
- the list of queries needed, integrated with the sessionStorage variables
Breaking these apart has limited value, because I end having to re-couple them
with the data.  Example, I can break out the queryList, but I have to pass the
sessionStorage data to it.
*/
"use strict";

//---------------------------------------------------------
// THIS IS COMPUTER SPECIFIC
//const dbInstanceConnectionDetails = require('./linkTo_DBInstanceConnectionDetails.js').DBInstanceConnectionDetails;
//const dbConnectionDetails = require('./dbConnectionDetails.js.js').dbConnectionDetails;
// THIS IS APP/PROJECT SPECIFIC
//---------------------------------------------------------

//---------------------------------------------------------
// THIS IS APP/PROJECT SPECIFIC
const queryList = require('./SkillsSurveyQueryList.js').QueryList;
// THIS IS APP/PROJECT SPECIFIC
//---------------------------------------------------------

let sandboxRequestFile = "MySQLIO.js:"
let cl = console.log;
cl("\nLoading "+sandboxRequestFile+" ... ");
let HTTP_good_status = 200;

const mysql = require('mysql');
const async = require('async');

let rows = {};
let connection;
let resultsSet = {};
let sessionStorage = {}

//--------------------------------------------------------------------------------------------------------------------------------
let fpEndMySQLConnection =function( callback, pParameterObject, response, postData )
{   cl("@: "+sandboxRequestFile+":fpEndMySQLConnection() ... --------->>>>>>>>>>>>>>>>>>>>>>>");

    let resultsXML = '<resultsXML>';
    resultsXML+= JSON.stringify(resultsSet) + '</resultsXML>';

    if( postData !== "" ){
        response.writeHead( HTTP_good_status, {"Content-Type": "application/xml"});
        response.write( resultsXML );
        response.end();
    }

    connection.end(function(err){
        if( err){ 
            cl("THROWING ERROR ON CONNECTION END: " + JSON.stringify( err ) )
            throw err; 
        }else{
            callback( null );
        }
    });
}// end of fpEndMySQLConnection()
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
let fpQueryMySQL = function( callback, pParameterObject, response, postData )
{   cl("@: "+sandboxRequestFile+":fpQueryMySQL() ..." );
    cl(" sessionStorage['query']: " + sessionStorage['query'] + "      <<<<<<<<<<<<<<<<<<<<<<<<<<< !!!!!!!")
    cl(" queryList[ sessionStorage['query'] ].query: " + queryList[ sessionStorage['query'] ].func() )

    let dbq = queryList[ sessionStorage['query'] ].func()
    cl( " DBQ: " + dbq)
    connection.query(dbq, rows, function(err,rows){
        if( err) throw err;
        resultsSet = rows;
        cl(" resultsSet from MySQL: " + JSON.stringify( resultsSet ) )
        callback( null );
    });
}// end of fpQueryMySQL();
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
let fpGetMySQLConnection = function( callback, pParameterObject, response, postData )
{   cl("@: "+sandboxRequestFile+":fpGetMySQLConnection() ..." );
    connection = mysql.createConnection({
        user:       process.env.DBInstanceConnectionDetails_user,
        password:   process.env.DBInstanceConnectionDetails_password,
        database:   process.env.DBInstanceConnectionDetails_database
    });
    callback( null );
}// end of fpGetMySQLConnection()
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
// TOKEN EXTRACTING FROM POSTDATA AND DECODING
let extractAndDecode = function ( postData ) 
{   console.log( "@extractAndDecode(" + postData + ")" )
    let tokenParameters = postData.split('&')// knock'em into parameters
    sessionStorage[ 'trg' ] = '' // initialize this
    sessionStorage[ 'filter' ] = '' // initialize this
    for( let t in tokenParameters ){
        let token = tokenParameters[ t ].split('=');
        sessionStorage[ token[ 0 ] ] = token[ 1 ]
        console.log("  parm "+t+": " + token[0] + " = " + sessionStorage[ token[ 0 ] ] ) 
    }

//    let temp = sessionStorage['webn8rSessionInfo'].split('+')
//    sessionStorage['preference_code'] = temp[1]
//    let temp1 = temp[0].split('O')
//    sessionStorage['rid'] = temp1[1]

//    console.log("webn8rSessionInfo: " + sessionStorage['webn8rSessionInfo'] 
//        + ", rid: " + sessionStorage['rid'] 
//        + ", code: " + sessionStorage['preference_code'] )
}
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
exports.MySQLIO = function( response, postData )
{   cl( "@@@@ MySQLIO:MySQLIO() ... <<<<<<<<<<<<<<<------------------------------" )
    if( typeof response === 'undefined'){       var response = {}       }
    if( typeof postData === 'undefined'){       var postData = ""
        sessionStorage[ 'query' ] = 'SHOW DATABASES;'
    }else{
        extractAndDecode( postData )
    }
    let parameterObject = {}
    queryList.loadSessionStorage( sessionStorage ) 

    async.eachSeries(
        [   fpGetMySQLConnection
            ,fpQueryMySQL
            ,fpEndMySQLConnection
        ],
        function( pFunc, callback ){
            pFunc( callback, parameterObject, response, postData )
        },
        function(){}
    );
}// end of MySQLIO() #################################################
//--------------------------------------------------------------------------------------------------------------------------------

//MySQLIO()// this is for testing from the command line...