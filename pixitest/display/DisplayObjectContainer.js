'use strict';

var DisplayObject = require('./DisplayObject');

exports.confirmNew = function (obj) {
    DisplayObject.confirmNew(obj);

    expect(obj).to.be.an.instanceof(PIXI.DisplayObjectContainer);
    expect(obj).to.respondTo('addChild');
    expect(obj).to.respondTo('addChildAt');
    expect(obj).to.respondTo('swapChildren');
    expect(obj).to.respondTo('getChildAt');
    expect(obj).to.respondTo('removeChild');
    expect(obj).to.respondTo('updateTransform');

    expect(obj).to.have.deep.property('children.length', 0);
};
