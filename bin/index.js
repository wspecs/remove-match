#!/usr/bin/env node

const lib = require('../dist/index');
const program = require('commander');
const fs = require('fs');

const VERSION = JSON.parse(fs.readFileSync('package.json')).version;

program
  .version(VERSION)
  .option('-f, --filepath <filepath>', 'Path for the file to read.')
  .option('-m, --match <match>', 'String to match')
  .option('-o, --output [destination]', 'Path to output the new files without match')
  .option('-d --debug [debug]', 'To show debug log.')
  // Parse the args for the program
  program.parse(process.argv);

let result;

if (program.filepath && program.match) {
  result = lib.findMatch(program.filepath, program.match);
}

if (result !== undefined) {
  if (program.output) {
    const outputPath = typeof program.output === 'string' ? program.output : 'output.txt';
    fs.writeFileSync(outputPath, result.nonMatchedLines.join('\n'), 'utf8');
  } else if (program.debug) {
    console.log(result.nonMatchedLines.join('\n'));
  } else {
    console.log(result);
  }
}
