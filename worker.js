const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

parentPort.addListener('message', message => {
  console.log('msg', message.foo)
  throw new Error('test');
});
