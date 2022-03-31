'use strict';
exports.stdErrMsg = function( err, stderr, funcName )
{
  let cl=console.log;
  if( err || stderr ){
    cl("\n\n________________________________________________________________" +
        "\nFrom directory: " + __dirname +
        "\n" + funcName +
        "\nERROR ERROR ERROR ERROR ERROR ERROR ERROR: " + err + "/" + stderr +
        "________________________________________________________________\n\n"
    );
  }
}
