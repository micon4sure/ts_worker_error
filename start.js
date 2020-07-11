const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');
worker.postMessage('from: start; to: worker')