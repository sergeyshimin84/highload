const express = require('express');
const os = require('os');
const cluster = require('cluster');

const app = express();
const host = '127.0.0.1';
const port = '3000';

app.get('/', (req, res) => {
    res.send('Hello from node.js!');
});

if (cluster.isMaster) {
    console.log('Master');
    const cpus = os.cpus().length;

    for (let i = 0; i < cpus; i++) {
        const worker = cluster.fork();

        worker.send({ message: 'some' });
    }
} else {
    app.listen(port, host, () => {
        console.log(`Worker ${cluster.worker.id} started...`)
    });
}