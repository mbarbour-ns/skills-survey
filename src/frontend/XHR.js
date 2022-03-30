let gLogMode = 0
let log = function( pString ){
	if( gLogMode === 1){
		console.log( pString )
	}
}

let XHR = function( iocfg )
{ 
	if( typeof iocfg.log === undefined){
	}else{
		switch( iocfg.log ){
			case "quiet": 	gLogMode = 0;	break;
			case "loud": 	gLogMode =1;	break;
			default:						break;
		}
	} 
	log("@: XHR()")
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open(iocfg.method, iocfg.url, iocfg.syncMode, iocfg.xhrKey, '');
	xmlhttp.onreadystatechange = function()
	{   log("<> XMLHTTPRequest: " + this.readyState + ":" + this.status)
		if( this.readyState == 1){  log("XHR:1," + this.status) }
		if( this.readyState == 2){  log("XHR:2," + this.status) }
		if( this.readyState == 3){  log("XHR:3," + this.status) }
		if (this.readyState == 4 ){ log("XHR:4," + this.status)//alert("XHR:4," + this.status);
			if( this.status == 200) {
				log("Browser-side XHR: " + xmlhttp.responseText );
				if( sessionStorage.getItem('webn8rSessionLabel') !== "NOT AUTHORIZED"){
					iocfg.resultsSetString = xmlhttp.responseText;
					let temp = iocfg.resultsSetString.replace("<resultsXML>","");
					iocfg.resultsSetString = temp;
					temp = iocfg.resultsSetString.replace("</resultsXML>","");
					iocfg.resultsSetString = temp;

					iocfg.callback( iocfg.resultsSetString )
				}
			}
		}
	};
	xmlhttp.send( iocfg.dataPackage );
}// end of XHR()
