'use strict';

// Shortcut expect
if (!global.expect && global.chai)
    global.expect = global.chai.expect;

module.exports = {
    display: {
        DisplayObject: require('./display/DisplayObject'),
        DisplayObjectContainer: require('./display/DisplayObjectContainer'),
        Sprite: require('./display/Sprite')
    },
    events: {
        EventTarget: require('./events/EventTarget')
    },
    extras: {
        Strip: require('./extras/Strip')
    },
    geom: {
        matrix: require('./geom/matrix'),
        Point: require('./geom/Point'),
        Rectangle: require('./geom/Rectangle')
    },
    textures: {
        Texture: require('./textures/Texture')
    }
};
