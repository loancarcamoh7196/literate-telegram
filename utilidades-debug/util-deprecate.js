const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log("Hello Pluton");
}, 'plute is deprecated. It is not a planet anymore');

helloPluto();
