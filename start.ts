
import { Worker } from 'worker_threads'

const worker = new Worker("./workerAdapter.js", { workerData: { file: __dirname + '/worker.ts' } });
worker.postMessage({'foo': 'bar'})