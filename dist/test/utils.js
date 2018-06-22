"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
exports.TEST_FILEPATH = './test/data.txt';
exports.MATCH = 'Line 1';
describe('word parser', function () {
    beforeEach(function () {
        // Set up before running tests.
    });
    it('finds duplicate', function () {
        var result = lib.findMatch(exports.TEST_FILEPATH, exports.MATCH);
        chai_1.expect(result.matchedLinesIndex.length).to.equal(2);
    });
    it('finds duplicate', function () {
        var result = lib.findMatch(exports.TEST_FILEPATH, exports.MATCH);
        for (var _i = 0, _a = result.nonMatchedLines; _i < _a.length; _i++) {
            var line = _a[_i];
            chai_1.expect(line.indexOf(exports.MATCH)).to.equal(-1);
        }
    });
});
