
import { parentPort } from 'worker_threads'

parentPort.addListener('message', message => {
  console.log('msg', message)
  throw new Error('TEST');
});