'use strict';
let sessionStorage = {}
let sourceData = {}
/* IMPORTANT NOTE!!!
All of the return values MUST use single quotes too obound them, or mysql will NOT execute the query
*/
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
            let retString = 'SELECT * FROM adm_user WHERE active=' + sessionStorage['filter'] + ' ORDER BY name_first ASC;'
            if( sessionStorage['filter'] === 'ALL' || sessionStorage['filter'] === '' ){
                retString ='SELECT * FROM adm_user ORDER BY name_first ASC;'
            }
            return retString;
        }
    },
    "saveAPIUserData":{
        func:function(){
            let userData = sessionStorage['data']
            console.log("saveAPIUserData: TYPEOF userData: " + typeof userData )
            console.log("saveAPIUserData: " + userData )
            let t1 = userData.replace("[","" );
            let t2 = t1.replace("]","" );
            let t3 = t2.replace("{","(" );
            let t4 = t3.replace("}",")" );
            console.log("saveAPIUserData(FIXED): " + t4 )
            console.log("saveAPIUserData SQL: " 
            + "INSERT IGNORE INTO harvest_temp (harvest_id,name_last,name_first,email,employee_no) VALUES "
            + t4 )
            let query = 'INSERT IGNORE INTO harvest_temp (employee_no,name_last,name_first,email,harvest_id) VALUES '+ t4 +';'

            return query;
        }
    },
    "mergeTempIntoUsers":{
        func:function(){
            return 'INSERT INTO adm_user (name_last,name_first,employee_no,harvest_id,email) \
                SELECT name_last,name_first,employee_no,harvest_id,email FROM harvest_temp;'
        }
    },
    "getHarvestStruct":{
        func:function(){
            return 'DESC harvest_temp;'
        }
    },


}// end of QueryList
