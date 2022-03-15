'use strict';
let thisScript = "getAnyFile.js:"

const exec = require("child_process").exec;
const fs = require('fs');

const tl = require(__dirname + "/tLog.js").tLog;
const stdErrMsg = require( __dirname + '/stdErrMsg.js' ).stdErrMsg;
const cl = console.log;

cl();
tl("LOADING "+thisScript)
cl();


//getANYFile( response, 'text/json', handlesIMG, "xfer" );    
exports.getAnyFile = function( pResponse, pMIMEType, pPathName, pAction )
{ tl(""); tl("@:"+ thisScript +":getANYFile()")

  if( pAction === 'xfer'){//raw data transfer
    tl("  Doing action: " + pAction);
    tl("  data: " + JSON.stringify(pPathName))// NOT A FILE PATH.  ACTUAL DATA
    tl("  MIME-type: " + pMIMEType);
    tl("  pResponse: " + pResponse);
    pResponse.writeHead(200, {'Content-Type': pMIMEType });
    pResponse.write( JSON.stringify( pPathName ) );
    pResponse.end();
    tl(" DONE with getANYFile: "+JSON.stringify(pPathName) )
  }else{
    tl(" Directory of 'this' function is: " + __dirname );
    tl(" This file at: " + pPathName );
  
    if( pPathName.search(' ') !== -1 ){
      tl("----- WARNING ----- WARNING ----- WARNING: Spaces found in pathname!! ")
    }

    if( pAction === ""){
      pAction = "cat " + pPathName;
    }
    tl(" Doing action: " + pAction);
    tl(" MIME-type: " + pMIMEType);
    tl(" pResponse: " + pResponse);

    exec( 
      pAction,
      { timeout: 10000, maxBuffer: 20000*1024 },
      function (error, stdout, stderr) {
        //tl("pre-error message --------------");

        stdErrMsg( error, stderr, pPathName );

        //tl(" >> Transferring file for response")
        let img;
        switch(pMIMEType){
          case 'text/html':
          case 'text/javascript':
          case 'text/css':
          case 'application/javascript':
            break;
          default:
            img = fs.readFileSync( pPathName );
            break;
        }

        pResponse.writeHead(200, {'Content-Type': pMIMEType });

        switch(pMIMEType){
          case 'text/html':
          case 'text/javascript':
          case 'text/css':
          case 'application/javascript':
            pResponse.write( stdout );
            pResponse.end();
            break;
          default:
            pResponse.end(img, 'binary');
            break;
        }
        tl("DONE with getANYFile: "+pPathName)
        tl(" ");
      }
    );
  }// end if pAction !== xfer
}// end of getANYFile() ========================================================
