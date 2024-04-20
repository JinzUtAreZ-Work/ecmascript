Go to C:\HIMS\hims_app\dist\win-unpacked\resources\app.asar

Code below is used to unpack the app.asar file and obfuscate the code.

var fs = require('fs');
var path = require('path');
var recursive = require('recursive-readdir');
var rimraf = require('rimraf');
var asar = require('asar');
var javaScriptObfuscator = require('javascript-obfuscator');
const log = require("ololog").configure({});

function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return hrs + ':' + mins + ':' + secs + '.' + ms;
  }

// Set your time duration, resources folder, and ignore folders
const startTime = new Date().getTime();
const resourcesFolder = 'C:\\HIMS\\hims_app\\dist\\win-unpacked\\resources';
const toIgnore = ["node_modules", "app"];

log.dim("-----------------------------------");
log.lightGray('\n\nasar package javascript obfuscator\n\n');
log.lightGray('Unpacking archive');

asar.extractAll(resourcesFolder + '\\app.asar', resourcesFolder + '\\src');

// Enter the directories to be ignored
recursive(resourcesFolder + '\\src', toIgnore, function (err, files) {
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            let contents = fs.readFileSync(file, 'utf8');
            log.dim("----------------------------------------");
            log.lightGray('Protecting ' + file);

            const obfuscatedCode = javaScriptObfuscator.obfuscate(contents, {
                // /// BASIC ///
                // compact: true,
                // controlFlowFlattening: false,
                // /// BASIC ///


                // /// LOW ///
                // compact: true,
                // controlFlowFlattening: false,
                // deadCodeInjection: false,
                // debugProtection: false,
                // debugProtectionInterval: false,
                // disableConsoleOutput: true,
                // identifierNamesGenerator: 'hexadecimal',
                // log: false,
                // numbersToExpressions: false,
                // renameGlobals: false,
                // selfDefending: true,
                // simplify: true,
                // splitStrings: false,
                // stringArray: true,
                // stringArrayCallsTransform: false,
                // stringArrayEncoding: [],
                // stringArrayIndexShift: true,
                // stringArrayRotate: true,
                // stringArrayShuffle: true,
                // stringArrayWrappersCount: 1,
                // stringArrayWrappersChainedCalls: true,
                // stringArrayWrappersParametersMaxCount: 2,
                // stringArrayWrappersType: 'variable',
                // stringArrayThreshold: 0.75,
                // unicodeEscapeSequence: false
                // /// LOW ///


                // /// Medium ///
                // compact: true,
                // controlFlowFlattening: true,
                // controlFlowFlatteningThreshold: 0.75,
                // deadCodeInjection: true,
                // deadCodeInjectionThreshold: 0.4,
                // debugProtection: false,
                // debugProtectionInterval: false,
                // disableConsoleOutput: true,
                // identifierNamesGenerator: 'hexadecimal',
                // log: false,
                // numbersToExpressions: true,
                // renameGlobals: false,
                // selfDefending: true,
                // simplify: true,
                // splitStrings: true,
                // splitStringsChunkLength: 10,
                // stringArray: true,
                // stringArrayCallsTransform: true,
                // stringArrayCallsTransformThreshold: 0.75,
                // stringArrayEncoding: ['base64'],
                // stringArrayIndexShift: true,
                // stringArrayRotate: true,
                // stringArrayShuffle: true,
                // stringArrayWrappersCount: 2,
                // stringArrayWrappersChainedCalls: true,
                // stringArrayWrappersParametersMaxCount: 4,
                // stringArrayWrappersType: 'function',
                // stringArrayThreshold: 0.75,
                // transformObjectKeys: true,
                // unicodeEscapeSequence: false

                // /// Medium ///
            });

            fs.writeFileSync(file, obfuscatedCode.getObfuscatedCode());
        }
    });
    
    log.dim("----------------------------------------");
    log.lightRed('Deleting app.asar');

    fs.unlinkSync(resourcesFolder + '\\app.asar');
    log.dim("----------------------------------------");
    log.lightGray('Packing asar archive');
    
    asar.createPackage(resourcesFolder + '\\src', resourcesFolder + '\\app.asar', (callback) => {
    }).then(()=> {
            if (err) {
                throw err;
              }
            
            log.lightGray('Created new secure asar archive');
            log.dim("-----------------------------------");
            log.lightRed('Deleting src directory');
            console.log('Reminders --- uncomment the code below to see the contents of the src file')
          
            //// delete src file ///
            rimraf(resourcesFolder + '\\src', function () {
                 if (err) {
                       throw err;
               }
               log.dim("--------------- Done! Have fun. --------------------");
           });
           //// delete src file ///
    })

    const endTime = new Date().getTime();
    const durationTime = endTime-startTime
    console.log('Time elapsed in securing files', msToTime(durationTime))
});

