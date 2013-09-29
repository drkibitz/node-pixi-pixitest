'use strict';

var DisplayObjectContainer = require('./DisplayObjectContainer');
var Point = require('../geom/Point');
var Texture = require('../textures/Texture');

exports.confirmNew = function (obj, done) {
    DisplayObjectContainer.confirmNew(obj);

    expect(obj).to.be.an.instanceof(PIXI.Sprite);
    expect(obj).to.respondTo('setTexture');
    expect(obj).to.respondTo('onTextureUpdate');

    expect(obj).to.have.property('hitArea', null);
    expect(obj).to.have.property('interactive', false);
    expect(obj).to.have.property('renderable', true);
    expect(obj).to.have.property('stage', null);

    expect(obj).to.have.property('anchor');
    Point.confirm(obj.anchor, 0, 0);

    expect(obj).to.have.property('blendMode', PIXI.blendModes.NORMAL);
    expect(obj).to.have.property('width', 1); // TODO: is 1 expected
    expect(obj).to.have.property('height', 1); // TODO: is 1 expected

    // FIXME: Just make this a boolean that is always there
    expect(!!obj.updateFrame).to.equal(obj.texture.baseTexture.hasLoaded);

    expect(obj).to.have.property('texture');
    Texture.confirmNew(obj.texture, done);
};
