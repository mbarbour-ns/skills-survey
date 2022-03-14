let readGraphTimeSeriesScoreData = function( pMatrixSize )
{   console.log("\n@: readGraphTimeSeriesScoreData()")
    let cfg = {
        method:"POST",
        url:"/MySQLIO",
        syncMode:true,//xhrKey:sessionStorage.getItem('webn8rSessionInfo'),
        dataPackage:
            "webn8rSessionInfo=" + sessionStorage.getItem('webn8rSessionInfo') +
            "&style=" + baseMatrixStyle +
            "&size=" + matrixSize +
            "&query=select full user play history for size " + pMatrixSize,
        callback:function( obj ){ makeTimeSeriesScoreGraph( obj, pMatrixSize ) }
    };
    console.log( "BEFORE SENDING TO XHRNESTEDJSONHandler, cfg: " + JSON.stringify( cfg ) );
    XHRNESTEDJSONHandler( cfg );
}// end readGraphStyleAverageHistoryFromDataBase2() =============================================
let makeTimeSeriesScoreGraph = function( resultsObject, pMatrixSize )
{
    let results = JSON.parse( resultsObject )
    let cnvId = tag('canvas',g_rulesAndResultsContainerId,'',{id:'myChartCanvas4', width:"2000", height:"500"})
    var ctx4 = document.getElementById( 'myChartCanvas4' ).getContext('2d');
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
            labelNames[ results[ idx ]["specific_matrix_style"] ].avg_score = results[ idx ]["avg_score"]
        }
    }

    let rotatingFillColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ];

    let rotatingBorderColors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
    ];

    let nameList = []
    let countList = []
    let rotatingIdx = 0
    let rotatingMaxIdx = 5
    let barColors = []
    let barBackgrounds = []
    for( let idx in labelNames ){
        //console.log("idx: " + labelNames[ idx ].name )
        if( labelNames[ idx ].name != undefined ){
            nameList.push(labelNames[ idx ].name);  //+= "'"+labelNames[ idx ].name+"',"
            countList.push(labelNames[ idx ].avg_score) //+= "'"+labelNames[ idx ].count+"',"
            barColors.push( rotatingFillColors[ rotatingIdx ] )
            barBackgrounds.push( rotatingBorderColors[ rotatingIdx ] )
            rotatingIdx++
            if( rotatingIdx === rotatingMaxIdx) rotatingIdx = 0
        }
    }
    console.log("NAME.LIST: " + nameList )

    var myChart4 = new Chart(ctx4, {
        type: 'bar',

        // have to dynamically create the labels, datasets, and sequence the backgrounds
        data: {
            labels: nameList,
            datasets: [{
                label: 'Average Score',
                data: countList,
                backgroundColor: barColors,
                borderColor: barBackgrounds,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}// end of makeStylesAverageScoreGraph2