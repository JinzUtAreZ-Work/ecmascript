Go to C:\HIMS\hims_app\dist\win-unpacked\resources\app.asar

Code below is used to unpack the app.asar file and obfuscate the code.

var fs = require('fs');
var path = require('path');
var recursive = require('recursive-readdir');
var rimraf = require('rimraf');
var asar = require('asar');
var javaScriptObfuscator = require('javascript-obfuscator');
const log = require("ololog").configure({});

// Set your resources folder
var resourcesFolder = 'C:\\HIMS\\hims_app\\dist\\win-unpacked\\resources';

//console.log('\n\nasar package javascript obfuscator\n\n');
// console.log('Unpacking archive');


log.dim("-----------------------------------");
log.lightGray('\n\nasar package javascript obfuscator\n\n');
log.lightGray('Unpacking archive');

asar.extractAll(resourcesFolder + '\\app.asar', resourcesFolder + '\\src');

//console.log('Deleting app.asar');

log.dim("-----------------------------------");
log.lightRed('Deleting app.asar');

fs.unlinkSync(resourcesFolder + '\\app.asar');

// Enter the directories to be ignored
recursive(resourcesFolder + '\\src', ['node_modules', 'app'], function (err, files) {
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            let contents = fs.readFileSync(file, 'utf8');

            //console.log('Protecting ' + file);
            log.dim("-----------------------------------");
            log.lightGray('Protecting ' + file);

            // Change the settings here  -  https://github.com/javascript-obfuscator/javascript-obfuscator
            const obfuscatedCode = javaScriptObfuscator.obfuscate(contents, {
                compact: true,
                controlFlowFlattening: false,
            });

            fs.writeFileSync(file, obfuscatedCode.getObfuscatedCode());

            // let ret = javaScriptObfuscator.obfuscate(contents, {
            //     compact: true
            //     , controlFlowFlattening: false
            //     , controlFlowFlatteningThreshold: 0.75
            //     , deadCodeInjection: false
            //     , deadCodeInjectionThreshold: 0.4
            //     , debugProtection: false
            //     , debugProtectionInterval: false
            //     , disableConsoleOutput: false
            //     , domainLock: []
            //     , identifierNamesGenerator: 'hexadecimal'
            //     , identifiersPrefix: ''
            //     , inputFileName: ''
            //     , log: false
            //     , renameGlobals: false
            //     , reservedNames: []
            //     , reservedStrings: []
            //     , rotateStringArray: true
            //     , seed: 0
            //     , selfDefending: false
            //     , sourceMap: false
            //     , sourceMapBaseUrl: ''
            //     , sourceMapFileName: ''
            //     , sourceMapMode: 'separate'
            //     , stringArray: true
            //     , stringArrayEncoding: ['base64']
            //     , stringArrayThreshold: 0.75
            //     , target: 'node'
            //     , transformObjectKeys: false
            //     , unicodeEscapeSequence: false
            // });
            //fs.writeFileSync(file, ret);
        }
    });
    //console.log('Packing asar archive');
    log.dim("-----------------------------------");
    log.lightGray('Packing asar archive');

    asar.createPackage(resourcesFolder + '\\src', resourcesFolder + '\\app.asar', (callback) => {
        // console.log('Created secure asar archive');
        // console.log('Deleting src directory');
        log.dim("-----------------------------------");
        log.lightRed('Created secure asar archive');
        log.lightRed('Deleting src directory');

        rimraf(resourcesFolder + '\\src', function () {
            //console.log('Done! Have fun.');
            log.dim("--------------- Done! Have fun. --------------------");
        });
    });
});
