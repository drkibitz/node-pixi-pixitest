'use strict';

exports.like = function (obj) {
    expect(obj).to.respondTo('addEventListener');
    expect(obj).to.respondTo('dispatchEvent');
    expect(obj).to.respondTo('removeEventListener');
};
