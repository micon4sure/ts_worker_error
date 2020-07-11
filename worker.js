const { Worker, parentPort } = require('worker_threads');

parentPort.addListener('message', message => {
  console.log('msg', message)
  const worker = new Worker('./subworker.js');
  worker.postMessage('from: worker; to: subworker')
});