import copy from 'recursive-copy';
import fs from 'fs';

try {
  const source = './node_modules/scu-components';
  const dist = './dist/scu-components';
  if (!fs.existsSync(dist)) {
    const results = await copy(
      source, dist
    );
    console.info('Copied ' + results.length + ' files');
  }else{
    console.info('found dist folder, nothing done');
  }
} catch (error) {
	console.error('Copy failed: ' + error);
}