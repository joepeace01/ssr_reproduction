import { initNodeFederation } from '@softarc/native-federation-node';

(async () => {

  await initNodeFederation({
    relBundlePath: './dist/remote-app/browser/'
  });

  await import('./bootstrap-server');

})();
