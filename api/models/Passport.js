// api/models/Passport.js

var _ = require('lodash');
var _super = require('sails-auth/api/models/Passport');

_.merge(exports, _super);
_.merge(exports, {

  attributes: {
    password: {
      required: true
    }
  }

});
