'use strict';
let sessionStorage = {}
let sourceData = {}

exports.QueryList = {// handlers
    "show all databases":{
        func:function(){
            return 'SHOW DATABASES;';
        }
    },    
    "show database tables":{
        func:function(){
            return 'SELECT TABLE_NAME FROM `INFORMATION_SCHEMA`.`TABLES` WHERE TABLE_SCHEMA="' + sessionStorage["database"] + '";';
        }
    },    

    "selectTable":{
        func:function(){
            return 'SELECT * FROM '+ sessionStorage['database']+'.'+sessionStorage['table']+';';
        }
    },
    "descTable":{
        func:function(){
            return 'DESC '
                + sessionStorage['database']+'.'
                + sessionStorage['table']+';';
        }
    },
    "loadSessionStorage":function( pSessionStorageToLoad ){
        sessionStorage = pSessionStorageToLoad
    },
    "loadSourceData":function( pSourceDataToLoad ){
        sourceData = pSourceDataToLoad
    },
    "getUserStruct":{
        func:function(){
            return 'DESC adm_user;'
        }
    },
    "getUserData":{
        func:function(){
            return 'SELECT * from adm_user;'
        }
    },
    "putUserData":{
        func:function(){
            return 'INSERT INTO harvest_temp;'
        }
    },

    "getHarvestStruct":{
        func:function(){
            return 'DESC harvest_temp;'
        }
    },


}// end of QueryList
