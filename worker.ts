
import { parentPort } from 'worker_threads'

parentPort.addListener('message', message => {
  console.log('msg', message.foo)
  throw new Error('test');
});
