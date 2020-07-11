import { Worker, parentPort } from 'worker_threads'

parentPort.addListener('message', message => {
  console.log('msg', message)

  const worker = new Worker("./workerAdapter.js", { workerData: { file: __dirname + '/subworker.ts' } } as any);
  worker.postMessage('from: worker; to: subworker')
});