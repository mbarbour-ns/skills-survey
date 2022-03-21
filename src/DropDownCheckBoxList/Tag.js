var idCnt = 1;// BODY ID SHOULD BE SET TO 1 in HTML *********** WARNING WARNING WARNING ***********

let p = function( pString, pLogLevel ){
    if( typeof pLogLevel === "boolean" ){
        if( pLogLevel === true ){
            console.log( pString )
        }
    }
}

const xmlns = "http://www.w3.org/2000/svg"
if( typeof app === 'undefined')
{
    var app = {}
}
if( typeof idCnt === 'undefined ')
{
    var idCnt = 1;// BODY ID SHOULD BE SET TO 1 in HTML *********** WARNING WARNING WARNING ***********
}
let tag = function( pTag, parentId, textNode, attributes)
{
    idCnt++;
    //p.setLevel(0)
    p("domLib.pTag() Making a " + pTag + " for parentId: " + parentId + ", text='" + textNode + "'" + " (idCnt=" + idCnt + ")")
    let el = document.createElement( pTag )
    el.id = '"' + idCnt + '"';
    p("\nMaking a " + pTag + "(" + el.id +") for parentId: " + parentId + ", text='" + textNode + "'" + " (idCnt=" + idCnt + ")")
    let tn = document.createTextNode( textNode )
    el.appendChild( tn )
    document.getElementById( parentId ).appendChild( el )

    for( let a in attributes )
    {
        p("..setting " + a + " to " + attributes[a])
        el.setAttribute( a, attributes[a])
    }
    p("Made a " + pTag + "(" + el.id +") for parentId: " + parentId + ", text='" + textNode + "'" + " (idCnt=" + idCnt + ")")
    //reflect( el, el, 1)
    return el.id;
}

let tagNS = function( pTag, parentId, textNode, attributes){
    idCnt++;
    p.setLevel(0)
    p("domLib.pTag() Making a " + pTag + " for parentId: " + parentId + ", text='" + textNode + "'" + " (idCnt=" + idCnt + ")")
    let el = document.createElementNS( xmlns, pTag )
    el.id = '"' + idCnt + '"';
    p("\nMaking a " + pTag + "(" + el.id +") for parentId: " + parentId + ", text='" + textNode + "'" + " (idCnt=" + idCnt + ")")
    let tn = document.createTextNode( textNode )
    el.appendChild( tn )
    document.getElementById( parentId ).appendChild( el )

    for( let a in attributes ){
        p("..setting " + a + " to " + attributes[a])
        el.setAttribute( a, attributes[a])
    }
    p("Made a " + pTag + "(" + el.id +") for parentId: " + parentId + ", text='" + textNode + "'" + " (idCnt=" + idCnt + ")")
    //reflect( el, el, 1)
    return el.id;
}