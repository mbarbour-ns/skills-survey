const gData = require( './temptbl.js' )
let cl = console.log
let stopAt = 100
let i = 0

let gSubject = ""
let gItem = ""
let level = ""
let method = ""
let acquiredby = ""
let gDepthMeter = 0
let gSpacer = ''

let setDepth = function( pDeep ){
    gSpacer=''
    for( let i=0; i< pDeep; i++) gSpacer+='  '
}

let recurseTheResultsDBtoLoadUI = function( pDataObj, pName ){
    cl( gSpacer +pName )
    setDepth( ++gDepthMeter )
    let isSurveySubject = false
    let isSurveyItem = false

    for( let idx in pDataObj ){
        if( i < stopAt ){ i++ } else { break; }
        cl( gSpacer + ">  " + idx )
        if( typeof pDataObj[ idx ] === 'object' ){
            // down we go
            recurseTheResultsDBtoLoadUI( pDataObj[ idx ], idx )
        }else{
            if( idx === 'depth' ){
                switch( pDataObj[ idx ] ){
                    case 'subject':
                        isSurveySubject = true
                        break;
                    case 'item':
                        isSurveyItem = true
                        break;
                    default:
                        break;
                }
            }
            cl(gSpacer+gSubject+":"+gItem+" = " +idx+" "+ pDataObj[ idx ] )
        }
    }

    setDepth( --gDepthMeter )
}


recurseTheResultsDBtoLoadUI( gData[ 'parseResultsSet' ][ '0' ][ 'j' ][ 'surveyResults' ],"START" )
