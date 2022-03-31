'use strict';

let decodeToken = function(){
// take what on the search line

    console.log("decodeToken() ... ")
    let searchInfo = window.location.search;
    console.log("  search info: " + searchInfo )
    console.log("  window.sessionStorage.getItem('webn8rSessionInfo'): " + window.sessionStorage.getItem('webn8rSessionInfo') )

    if( (searchInfo === undefined || searchInfo === '' || searchInfo === null) &&
        window.sessionStorage.getItem('webn8rSessionInfo') === undefined ){
        console.log("No ssearchInfo and no essionInfo!");
        return 'sign in';
    }else{
        let sessionInfo = ""

        if( (searchInfo !== undefined && searchInfo !== '' && searchInfo !== null) ){
            let temp = searchInfo.split('?')
            sessionInfo = temp[1]
            window.sessionStorage.setItem('webn8rSessionInfo', sessionInfo)
        }else{
            sessionInfo = window.sessionStorage.getItem('webn8rSessionInfo')
        }
        console.log("sessionInfo: " + sessionInfo);

        let preferenceCode = sessionInfo.split('+')
        console.log("preferenceCode: " + preferenceCode[1] )

        let rid = preferenceCode[0].split('O')// capital 'o'; obscure on purpose
        console.log("rid: " + rid[1] )

        window.sessionStorage.setItem('webn8rSessionInfo', sessionInfo);
        window.sessionStorage.setItem('webn8rSession', rid[0]);
        window.sessionStorage.setItem('rid', rid[1]);
        window.sessionStorage.setItem('preference_code', preferenceCode[1]);

        console.log("webn8rSession: " + window.sessionStorage.getItem('webn8rSession') 
            + ", rid: " + window.sessionStorage.getItem('rid') 
            + ", code: " + window.sessionStorage.getItem('preference_code') )
    }
}