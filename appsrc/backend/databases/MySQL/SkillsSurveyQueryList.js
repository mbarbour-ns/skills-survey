'use strict';
let sessionStorage = {}
let sourceData = {}
/* IMPORTANT NOTES!!!
#1. All of the return values MUST use single quotes to bound them, or mysql will NOT execute the query

#2. This line works through the CLI, fails through xfer because needs \\ instead of just one \
//FAIL 'INSERT INTO survey_control (adm_user_rid, surveyDate, j ) VALUES (279, NOW(), "{\"subject1\":{\"item1\":\"123\", \"item2\":\"123\", \"item3\":\"123\"}}");'
//PASS 'INSERT INTO survey_control (adm_user_rid, surveyDate, j ) VALUES (279, NOW(), "{\\"subject1\\":{\\"item1\\":\\"123\\", \\"item2\\":\\"123\\", \\"item3\\":\\"123\\"}}");'

*/
let cl = console.log

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
            let retString =""
            if( sessionStorage['trg'] !== '' ){// GET ONE USERs DATA
                let names = sessionStorage['trg'].split(' ');                                
                retString = //'SELECT rid FROM adm_user WHERE name_first="'+names[0]+'" AND name_last="'+names[1]+'";'
                    'SELECT  au.rid, sc.surveyDate, sc.j \
                    FROM adm_user au \
                    LEFT JOIN survey_control sc ON sc.adm_user_rid=au.rid \
                    WHERE name_first="'+names[0]+'" AND name_last="'+names[1]+'";'
            }else{

                switch( sessionStorage['filter'] ){
                    case 'ALL':
                    case '':
                        retString ='SELECT * FROM adm_user ORDER BY name_first ASC;'
                        break;
                    default:
                        retString = 'SELECT * FROM adm_user WHERE active=' + sessionStorage['filter'] + ' ORDER BY name_first ASC;'
                        break;
                }

            }
            return retString;
        }
    },
    "saveUserData":{
        func:function(){
            // This line works through the CLI, fails through xfer because needs \\ instead of just one \
            //INSERT INTO survey_control (adm_user_rid, surveyDate, j ) VALUES (279, NOW(), "{\"subject1\":{\"item1\":\"123\", \"item2\":\"123\", \"item3\":\"123\"}}");
            let retString = 'INSERT INTO survey_control (adm_user_rid, surveyDate, j ) VALUES (279, NOW(), "{\\"subject1\\":{\\"item1\\":\\"123\\", \\"item2\\":\\"123\\", \\"item3\\":\\"123\\"}}");'
            //PASS let retString = 'INSERT INTO survey_control (adm_user_rid, surveyDate, j ) VALUES (279, NOW(), "{}");'
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
