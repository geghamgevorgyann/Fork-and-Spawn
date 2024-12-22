const { fork, spawn } = require('child_process');

// Fork example
const worker = fork('./worker.js');

worker.on('message', (msg) => {
    if (msg.result) {
        console.log(`Fibonacci result from worker: ${msg.result}`);
    } else if (msg.error) {
        console.error(`Error from worker: ${msg.error}`);
    }
});

worker.send({ task: 'fibonacci', number: 10 }); // Calculate Fibonacci of 10

// Spawn example
const nodeProcess = spawn('node', ['./calculate.js', '5']);

nodeProcess.stdout.on('data', (data) => {
    console.log(`Factorial result from calculate.js: ${data.toString().trim()}`);
});

nodeProcess.stderr.on('data', (data) => {
    console.error(`Error from calculate.js: ${data.toString()}`);
});

nodeProcess.on('close', (code) => {
    console.log(`calculate.js process exited with code ${code}`);
});
