'use strict';

module.exports = class LogThis {
    constructor( pLevel, pStampedTrueFalse ){
        this.logLevel = 0;
        if( pLevel !== null ){
            this.logLevel = pLevel;
        }
//        this.now = new Date();
        if( typeof pStampedTrueFalse !== 'undefined'){
            this.stampedTrueFalse = pStampedTrueFalse;
        }
    }

    p(pStuffToPrint){
        if( this.logLevel > 0 ){
            this.now = new Date();
            let term = [];
            term['year'] = parseInt(this.now.getFullYear())
            term['month'] = (parseInt(this.now.getMonth())+1).toString()
            term['day'] = parseInt(this.now.getDate()).toString()
            term['hour'] = this.now.getHours().toString()
            term['minute'] = this.now.getMinutes().toString()
            term['second'] = this.now.getSeconds().toString()

            let dateTimeString = ""
            // 0 pad everything
            for( let t in term ){
                if(  term[t].length === 1){
                    term[ t ] = "0" + term[ t ]
                }
                dateTimeString += term[ t ]
                if( t === 'day'){
                    dateTimeString += ":"
                }
            }
            
            if( typeof this.stampedTrueFalse !== 'undefined'){
                if( this.stampedTrueFalse === true ){
                    console.log( dateTimeString + " - " + pStuffToPrint)
                }
            }else{
                console.log( pStuffToPrint)
            }
        }
    }

    setLevel(pValue){
        this.logLevel = parseInt( pValue )
    }
}
