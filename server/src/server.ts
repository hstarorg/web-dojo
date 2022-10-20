import cluster from 'node:cluster';
import { cpus } from 'node:os';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  require('./index');
}
