'use strict'

// How to create private variables in javascript

function secretInfo() {
    var secret = 'secret value';
    function getSecret() {
        return secret;
    }
    return getSecret();
}

var getPrivate = secretInfo();

console.log(secretInfo());