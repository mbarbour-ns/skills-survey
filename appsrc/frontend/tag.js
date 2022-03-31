var idCnt = 1;// BODY ID SHOULD BE SET to = 1

let tag = function( pTag, pParentId, pTextNode, pAttributes )
{
	idCnt++;
	let el = document.createElement( pTag )
	el.id = '"' + idCnt + '"';
	let tn = document.createTextNode( pTextNode )
	el.append( tn )
	document.getElementById( pParentId ).appendChild( el )
	for( let a in pAttributes ){
		el.setAttribute( a, pAttributes[a])
	}
	return el.id
}
