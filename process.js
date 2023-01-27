const { exec, execFile, spawn, fork } = require('child_process');
const { error } = require('console');
const { stderr, stdout } = require('process');

// exec('node -v', (error, stdout, stderr) => {
//     if (error) {
//         console.log(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

// const someProcess = exec(`"./index.js"`);
// someProcess.kill();

// exec('cat *.js | wc -l', (error, stdout, stderr) => {
//     if (error) return console.error(`exec error: ${stderr}`);

//     console.log(`exec stdout: ${stdout}`)
// });

// execFile('node', ['-v'], (error, stdout, stderr) => {
//     if (error) {
//         console.log(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log('finished', code)
// });

// console.log(process.argv);
if (process.argv[2] === 'child') {
    setTimeout(() => {
        console.log(`Process ${process.argv[2]} started!`);
    }, 1000);
} else {
    console.log(12345);
    const controller = new AbortController();
    const { signal } = controller;

    const child = fork('index.js', ['child'], { signal });

    child.on('error', (err) => {
        console.log(err);
    })
}