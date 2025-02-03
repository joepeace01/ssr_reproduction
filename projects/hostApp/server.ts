import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    remotesOrManifestUrl: './dist/host-app/browser/assets/federation.manifest.json',
    relBundlePath: './dist/host-app/browser/',
  });

  await import('./bootstrap-server');

})();
