'use strict';

var DisplayObjectContainer = require('../display/DisplayObjectContainer');

exports.confirmNew = function (obj) {
    DisplayObjectContainer.confirmNew(obj);

    expect(obj).to.be.an.instanceof(PIXI.Strip);
    expect(obj).to.respondTo('setTexture');
    expect(obj).to.respondTo('onTextureUpdate');

    // TODO: Test properties
};
