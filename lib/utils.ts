import { readFileSync, writeFileSync } from 'fs';
import * as log from 'great-logs';

// const filename = process.argv[2];
// const match = process.argv[4];


export function findMatch(filename: string, match: string) {
  const content = readFileSync(filename, 'utf8');
  const lines = content.split('\n');
  const nonMatchedLines = [];
  const matchedLinesIndex = [];
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line.indexOf(match) === -1) {
      nonMatchedLines.push(line);
    } else {
      matchedLinesIndex.push(index);
      log.debug('Removed line: %s', line);
    }
  }

  return { nonMatchedLines, matchedLinesIndex };
}

export function writeOutput(filename: string, lines: string[]) {
  writeFileSync(filename, lines.join('\n'), 'utf8');
}
