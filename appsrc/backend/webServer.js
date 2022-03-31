'use strict';
let cl1 = console.log;
let http = require("http");
let url = require("url");

exports.start = function( pPort, pRoute, pRequestHandler ){
    var onRequest = function( pRequest, pResponse ) {
        let postData = "";
        let pathname = url.parse( pRequest.url ).pathname;
        cl1( "\n\n\n----------------------------------------------------------------------------------------------------------------------------\nwebServer.js:onRequest() Port["
            + pPort
            + "] Serving pRequest["
            + JSON.stringify(pRequest.headers)
            + "] for pathname["
            + pathname
            + "], pResponse["
            + JSON.stringify(pResponse.outputSize)
            + "]... " );

        pRequest.setEncoding("utf8");
        pRequest.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Server received POST data chunk '"+ postDataChunk + "'.");
        });
        pRequest.addListener("end", function() {
            console.log("Server is routing to: " + pathname + ", postdata= " + JSON.stringify(postData))
            pRoute(pRequestHandler, pathname, pResponse, postData );
        });
    }

    http.createServer( onRequest ).listen( pPort );
    cl1("\n==========================================================================================================================================================================================================")
    cl1("Server has started listening on " + pPort + " ...            Server has started listening on " + pPort + " ...            Server has started listening on " + pPort + " ...            Server has started listening on " + pPort);
    cl1("==========================================================================================================================================================================================================\n\n\n\n\n\n")
}
