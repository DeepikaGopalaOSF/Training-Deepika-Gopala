'use strict';

/**
 *  User Adress and pAYMENT FORM
 * @module controllers/UserAddrPayment
 * 
 */

var ISML = require('dw/template/ISML');
var guard = require('app_storefront_controllers/cartridge/scripts/guard');


function start(){
    
        ISML.renderTemplate('useraddrpayment/useraddrpaymentform.isml');
}
exports.Start = guard.ensure(['get'], start);