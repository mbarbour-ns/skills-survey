'use strict';
let sessionStorage = {}
let sourceData = {}

exports.QueryList = {// handlers
    "loadSessionStorage":function( pSessionStorageToLoad ){
        sessionStorage = pSessionStorageToLoad
    },
    "loadSourceData":function( pSourceDataToLoad ){
        sourceData = pSourceDataToLoad
    },
    "select from play":{
        func:function(){
            return "SELECT \
            user, \
            specific_matrix_size, \
            specific_matrix_style, \
            specific_clicks, \
            specific_play_duration, \
            perfect_recall, \
            near_misses, \
            misses FROM play;";
        }
    },
    "insert into play":{
        func:function(){
            return "INSERT INTO play "
                + " (user, session_label, record_datetime, last_datetime, specific_matrix_size, specific_matrix_style, specific_clicks, specific_play_duration, perfect_recall, certainty, near_misses, misses, final_score, score_calculation, json_context)"
                + " VALUES (" 
                + sourceData.user +",'"+temp[0]+"', NOW(), NOW(), "
                + sourceData.matrixSize +",'"
                + sourceData.matrixStyle +"',"
                + sourceData.buttonClicks +","
                + sourceData.playTimeInSeconds +","
                + sourceData.summary.perfectRecallCount +","
                + sourceData.summary.certaintyCount +","
                + sourceData.summary.mehCount +","
                + sourceData.summary.gingkoCount +","
                + sourceData.final_score +",'"
                + sourceData.score_calculation +"','"  // DONT FORGET TO USE THE RIGHT PUNCTION!  INVALIDATES DATA TYPES!
                + JSON.stringify(sourceData) +"' );";
                ;
        }
    },
    "select linker player game history":{
        func:function(){
            return 'SELECT *\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + '\
                    AND specific_matrix_size=' + sessionStorage['size'] + '\
                    AND specific_matrix_style="'+ sessionStorage['style'] + '"\
                ORDER BY final_score DESC\
                ;'
        }
    },



    "select linker player history":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + '\
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },
    "select linker player history for size 14":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(14*14) \
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },
    "select linker player history for size 12":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(12*12) \
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },
    "select linker player history for size 10":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(10*10) \
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },
    "select linker player history for size 8":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(8*8) \
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },
    "select linker player history for size 6":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(6*6) \
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },
    "select linker player history for size 4":{
        func:function(){
            return 'SELECT user, specific_matrix_style, specific_matrix_size, record_datetime, final_score, specific_play_duration, specific_clicks,perfect_recall,certainty,near_misses \
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(4*4) \
                ORDER BY specific_matrix_style, specific_matrix_size, record_datetime, final_score \
                ;'
        }
    },


    "select max linker style scores":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + '\
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },
    "select max linker style scores for size 14":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(14*14) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },
    "select max linker style scores for size 12":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(12*12) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },
    "select max linker style scores for size 10":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(10*10) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },
    "select max linker style scores for size 8":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(8*8) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },
    "select max linker style scores for size 6":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(6*6) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },
    "select max linker style scores for size 4":{
        func:function(){
            return 'SELECT user, specific_matrix_style, MAX(final_score) as max_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(4*4s) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, max_score \
                ;'
        }
    },

    // AND FOR AVERAGES
    "select avg linker style scores":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + '\
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },
    "select avg linker style scores for size 14":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(14*14) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },
    "select avg linker style scores for size 12":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(12*12) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },
    "select avg linker style scores for size 10":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(10*10) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },
    "select avg linker style scores for size 8":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(8*8) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },
    "select avg linker style scores for size 6":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(6*6) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },
    "select avg linker style scores for size 4":{
        func:function(){
            return 'SELECT user, specific_matrix_style, CAST(AVG(final_score) as UNSIGNED) as avg_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(4*4) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, avg_score \
                ;'
        }
    },

    "select full user play history for size 14":{
        func:function(){
            return 'SELECT user, specific_matrix_style, record_datetime, final_score\
                FROM play\
                WHERE user=' + sessionStorage['rid'] + ' AND specific_matrix_size=(14*14) \
                GROUP BY user, specific_matrix_style \
                ORDER BY specific_matrix_style, final_score \
                ;'
        }
    },

    "write linker score to db":{
        func:function(){
            let jsonData = sessionStorage['json']
            let cleaned = jsonData.replace('\\','')
            let incomingData = JSON.parse( cleaned )
            console.log( JSON.stringify( incomingData) )
            for( let p in incomingData ){
                console.log(" p: " + p + " = " + incomingData[ p ])
                if( typeof incomingData[ p ] === 'object' ){
                    console.log("    = " + JSON.stringify( incomingData[ p ] ) )
                }
            }
            let sourceData = incomingData;
            let temp = sourceData.session.split('+');
            
            let queryString = "INSERT INTO play "
                + " (user, session_label, record_datetime, last_datetime, specific_matrix_size, specific_matrix_style, specific_clicks, specific_play_duration, perfect_recall, certainty, near_misses, misses, final_score, score_calculation, json_context)"
                + " VALUES (" 
                + sourceData.user +",'"+temp[0]+"', NOW(), NOW(), "
                + sourceData.matrixSize +",'"
                + sourceData.matrixStyle +"',"
                + sourceData.buttonClicks +","
                + sourceData.playTimeInSeconds +","
                + sourceData.summary.perfectRecallCount +","
                + sourceData.summary.certaintyCount +","
                + sourceData.summary.mehCount +","
                + sourceData.summary.gingkoCount +","
                + sourceData.final_score +",'"
                + sourceData.score_calculation +"','"  // DONT FORGET TO USE THE RIGHT PUNCTION!  INVALIDATES DATA TYPES!
                + JSON.stringify(sourceData) +"' );";
                ;

            console.log("<<<<<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>")
            console.log("TEST RECORD: " +  queryString )
            console.log("<<<<<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>")
            return queryString
        }// end of func
    },
}// end of QueryList
