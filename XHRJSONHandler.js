'use strict';

export.XHRJSONHandler =
function( pCfgIO )
{
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open(pCfgIO.method, pCfgIO.url, pCfgIO.syncMode, pCfgIO.xhrKey, '');
  xmlhttp.onreadystatechange = function()
  {  cl("<> XMLHTTPRequest: " + this.readyState + ":" + this.status)
    if( this.readyState == 1){
      alert("XHR:1," + this.status)
    }
    if( this.readyState == 2){
      alert("XHR:2," + this.status)
    }
    if( this.readyState == 3){
      alert("XHR:3," + this.status)
    }
    if (this.readyState == 4 ){
      //alert("XHR:4," + this.status);
      if( this.status == 200) {
        cl("Browser-side XHR: " + xmlhttp.responseText );
        if( sessionStorage.getItem('webn8rSessionLabel') !== "NOT AUTHORIZED"){
          pCfgIO.resultsSetString = xmlhttp.responseText;
          let temp = pCfgIO.resultsSetString.replace("<resultsXML>","");
          pCfgIO.resultsSetString = temp;
          temp = pCfgIO.resultsSetString.replace("</resultsXML>","");
          pCfgIO.resultsSetString = temp;
          temp = pCfgIO.resultsSetString.replace("<sessionLabel>","");
          pCfgIO.resultsSetString = temp;
          temp = pCfgIO.resultsSetString.replace("</sessionLabel>","");
          pCfgIO.resultsSetString = temp;
          temp = pCfgIO.resultsSetString.replace('\\','');
          pCfgIO.resultsSetString = temp;
          cl("XHRJSON RESULTS:", pCfgIO.resultsSetString );
          if( pCfgIO.resultsSetString === ""){

          }else{
            pCfgIO.resultsSet = JSON.parse( pCfgIO.resultsSetString );
            //userGameData = pCfgIO.resultsSet;
            cl( "JSON: ", JSON.stringify( pCfgIO.resultsSet ) );
            /*for( let zz in pCfgIO.resultsSet ){
              cl( "zz:",zz, " is ", pCfgIO.resultsSet[zz]);
              for( let z in pCfgIO.resultsSet[zz]){
                cl( "z:", pCfgIO.resultsSet[zz][z] );
                document.writeln("<br>" + pCfgIO.resultsSet[zz][z] )
              }
            }*/
          }
        }
      }
    }
  };
  xmlhttp.send( pCfgIO.dataPackage );
}// end of XHRJSONHandler()
