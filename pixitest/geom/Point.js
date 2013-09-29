'use strict';

exports.confirm = function (obj, x, y) {
    expect(obj).to.be.an.instanceof(PIXI.Point);
    expect(obj).to.respondTo('clone');

    expect(obj).to.have.property('x', x);
    expect(obj).to.have.property('y', y);
};
