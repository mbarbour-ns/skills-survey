var idCnt = 1;// BODY ID SHOULD BE SET to = 1

let tag = function( tag, parentId, textNode, attributes )
{
	idCnt++;
	let el = document.createElement( tag )
	el.id = '"' + idCnt + '"';
	let tn = document.createTextNode( textNode )
	el.append( tn )
	document.getElementById( parentId ).appendChild( el )
	for( let a in attributes ){
		el.setAttribute( a, attributes[a])
	}
	return el.id
}
