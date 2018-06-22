"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var log = require("great-logs");
// const filename = process.argv[2];
// const match = process.argv[4];
function findMatch(filename, match) {
    var content = fs_1.readFileSync(filename, 'utf8');
    var lines = content.split('\n');
    var nonMatchedLines = [];
    var matchedLinesIndex = [];
    for (var index = 0; index < lines.length; index++) {
        var line = lines[index];
        if (line.indexOf(match) === -1) {
            nonMatchedLines.push(line);
        }
        else {
            matchedLinesIndex.push(index);
            log.debug('Removed line: %s', line);
        }
    }
    return { nonMatchedLines: nonMatchedLines, matchedLinesIndex: matchedLinesIndex };
}
exports.findMatch = findMatch;
function writeOutput(filename, lines) {
    fs_1.writeFileSync(filename, lines.join('\n'), 'utf8');
}
exports.writeOutput = writeOutput;
