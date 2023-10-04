const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const argv = yargs
    .option('startDir', {
        alias: 's',
        description: 'Starting directory',
        default: './',
        type: 'string'
    })
    .option('exclude', {
        alias: 'e',
        description: 'Exclude directories or files matching patterns (comma-separated)',
        type: 'string'
    })
    .help()
    .alias('help', 'h')
    .argv;

const userExclusions = argv.exclude ? argv.exclude.split(',') : [];
const defaultExclusions = ['node_modules', 'build', '.cache'];

function shouldExclude(item) {
    return [...userExclusions, ...defaultExclusions].some(exclusion => item.includes(exclusion));
}

function listDirectory(dir, indent = '') {
    if (shouldExclude(dir)) return '';

    let output = `${indent}${path.basename(dir)}\n`;

    if (fs.statSync(dir).isDirectory()) {
        const children = fs.readdirSync(dir);
        for (let child of children) {
            output += listDirectory(path.join(dir, child), indent + '  ');
        }
    }

    return output;
}

const structure = listDirectory(argv.startDir);
fs.writeFileSync('directoryListing.txt', structure);

console.log(`Directory structure written to directoryListing.txt`);
