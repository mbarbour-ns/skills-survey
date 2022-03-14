'use strict';
let cl2 = console.log;

function route( pRoute, pPathname, pResponse, pPostData ){
    let p = pPathname.replace("%20"," ");
    pPathname = p;
    
    console.log("\nRouting a request for " + pPathname);
    //cl2("");
    //cl2("@:router.js:route()")
    //cl2(" pRoute:" + pRoute)
    //cl2(" pRoute:" + JSON.stringify(pRoute) );
    cl2(" pPathname:"+pPathname)
    cl2(" pPostData:"+pPostData)
//    cl2(" pResponse:"+pResponse)

    let parameterString = "";
    let url="";

    if( pPathname.search('&') > -1 ){
        cl2("Search says: " + pPathname.search('&') )
        url = pPathname.slice( 0, pPathname.search('&') )
        parameterString = pPathname.slice( pPathname.search('&')+1, pPathname.length )
        cl2(" url:"+url)
        cl2(" parameterString:"+parameterString)
        pPathname = url
        pPostData = parameterString
        cl2(" pPathname:"+pPathname)
        cl2(" pPostData:"+pPostData)
    }

    if (typeof pRoute[ pPathname ] === 'function') {
        pRoute[ pPathname ]( pResponse, pPostData, pPathname, parameterString );
    }else{

        console.log(" ")
        console.log("****************************************");
        console.log("No request handler found for " + pPathname);
        console.log("****************************************");
        console.log(" ")
        pResponse.writeHead(404, {"Content-Type": "text/plain"});
        pResponse.write("404 Not found");
        pResponse.end();
    }
}
exports.route = route;