const { parentPort } = require('worker_threads');

parentPort.addListener('message', message => {
    console.log('msg', message)
    throw new Error('TEST')
});  