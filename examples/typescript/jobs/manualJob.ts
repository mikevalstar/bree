import { parentPort, workerData } from 'node:worker_threads';
import process from 'node:process';

console.log('Hello Manual Job TypeScript!');
console.info('Worker Data: ', workerData);

// signal to parent that the job is done
if (parentPort) parentPort.postMessage('done');
// eslint-disable-next-line unicorn/no-process-exit
else process.exit(0);
