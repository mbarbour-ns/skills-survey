'use strict';
const cl = console.log;
//==============================================================================
exports.tLog =
function( clstring )
{
  let stamp = new Date();
  if( typeof clstring === 'undefined'){// THIS WORKS!!! undefined is a typeof
    cl( stamp )
  }else{
    cl( stamp, clstring);
  }
}// end of tLog() ==============================================================
