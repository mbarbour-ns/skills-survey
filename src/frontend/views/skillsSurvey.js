
let readGraphStyleCountsFromDataBase = function()
{   console.log("\n@: readGraphStyleCountsFromDataBase()")
    let cfg = {
        method:"POST",
        url:"/MySQLIO",
        syncMode:true,//xhrKey:sessionStorage.getItem('webn8rSessionInfo'),
        dataPackage:
            "webn8rSessionInfo=" + sessionStorage.getItem('webn8rSessionInfo') + 
            "&style=" + baseMatrixStyle + 
            "&size=" + matrixSize + 
            "&query=select linker player history",
        callback:function( obj ){ makeStylesCountGraph( obj ) }
    };
    console.log( "BEFORE SENDING TO XHRNESTEDJSONHandler, cfg: " + JSON.stringify( cfg ) );
    XHRNESTEDJSONHandler( cfg );
}// end readGraphStyleCountsFromDataBase() =============================================
let makeStylesCountGraph = function( resultsObject )
{
    let results = JSON.parse( resultsObject )
    let cnvId = tag('canvas',g_rulesAndResultsContainerId,'',{id:'myChartCanvas2' , width:"2000", height:"500"})
    var ctx2 = document.getElementById( 'myChartCanvas2' ).getContext('2d');

    // loop through the results and get all of the style names to show as the graph x axis
    let labelNames = {}
    for( let idx in results){
        //console.log("?: " + results[ idx ][ "specific_matrix_style" ] )
        if( results[ idx ][ "specific_matrix_style" ] != undefined 
            || results[ idx ][ "specific_matrix_style" ] != 'undefined' ){
            // create the list of styles without duplicates for number of entries
            labelNames[ results[ idx ]["specific_matrix_style"] ] = {}
            labelNames[ results[ idx ]["specific_matrix_style"] ].name 
                = results[ idx ]["specific_matrix_style"] // create a value for sum of counts for a given style
            labelNames[ results[ idx ]["specific_matrix_style"] ].count = 0
        }
    }
    for( let idx in results){// for every entry for a style, increment the value
        if( results[ idx ]["specific_matrix_style"] != undefined ){
            labelNames[ results[ idx ]["specific_matrix_style"] ].count ++
        }
    }
}