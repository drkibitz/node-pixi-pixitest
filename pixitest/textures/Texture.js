'use strict';

var EventTarget = require('../events/EventTarget');
var Point = require('../geom/Point');
var Rectangle = require('../geom/Rectangle');

exports.confirmNew = function (obj, done) {

    function confirmFrameDone() {
        Rectangle.confirm(obj.frame, 0, 0, obj.baseTexture.width, obj.baseTexture.height);

        expect(obj).to.have.property('width', obj.baseTexture.width);
        expect(obj).to.have.property('height', obj.baseTexture.height);
        done();
    }

    expect(obj).to.be.an.instanceof(PIXI.Texture);
    EventTarget.like(obj);

    expect(obj).to.have.property('baseTexture')
        .and.to.be.an.instanceof(PIXI.BaseTexture);

    expect(obj).to.have.property('scope', obj);

    expect(obj).to.have.property('trim');
    Point.confirm(obj.trim, 0, 0);

    expect(obj).to.have.property('frame');
    if (obj.baseTexture.hasLoaded) {
        confirmFrameDone();
    } else {
        Rectangle.confirm(obj.frame, 0, 0, 1, 1);
        obj.addEventListener('update', confirmFrameDone);
    }
};
