var uri = require('url'),
      util = require('util'),
      decoder = require('string_decoder'),
      http = require('http'),
      https = require('https'),
      passport = require('passport-strategy');


(function(){
  "use strict";

  function dn(dn_hash){
    console.log(dn_hash);
  };


  module.exports = function(dh_hash){
    return new dn(dn_hash);
  };

})();
