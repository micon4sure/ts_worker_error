const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

const worker = new Worker('./worker.js');
worker.postMessage({'foo': 'bar'})