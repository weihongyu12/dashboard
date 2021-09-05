const path = require('path');
const fs = require('fs-extra');
const paths = require('../config/paths');
const glob = require('glob-all');

const appElectron = path.join(paths.appPath, 'electron');
const appElectronBuild = path.join(appElectron, 'build');

const androidPublic = path.join(paths.appPath, 'android/app/src/main/assets/public');
const iosPublic = path.join(paths.appPath, 'ios/App/public');

async function createElectronBuildFiles() {
  try {
    console.log(`Clean ${appElectronBuild}`)
    await fs.removeSync(appElectronBuild);

    console.log(`Create ${appElectronBuild}`)
    await fs.ensureDirSync(appElectronBuild);

    console.log(`Copy files ${paths.appBuild} to ${appElectronBuild}`)
    await fs.copySync(paths.appBuild, appElectronBuild, {
      dereference: true,
    });

    console.log(`[Android] remove duplicate resource: ${androidPublic}`)
    const androidResource = glob.sync([
      path.join(androidPublic, '**/*.gz'),
      path.join(androidPublic, '**/*.br'),
    ]);
    androidResource.forEach((file) => fs.remove(file));
    console.log('[Android] remove duplicate resource success!');

    console.log(`[iOS] remove duplicate resource: ${iosPublic}`);
    const iosResource = glob.sync([
      path.join(iosPublic, '**/*.gz'),
      path.join(iosPublic, '**/*.br'),
    ]);
    iosResource.forEach((file) => fs.remove(file));
    console.log('[iOS] remove duplicate resource success!');
  } catch (e) {
    console.error(e.message);
  }
}

createElectronBuildFiles();
