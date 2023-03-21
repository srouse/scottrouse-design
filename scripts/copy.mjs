import copy from 'recursive-copy';

try {
  const source = './node_modules/scu-components';
  const dist = './dist/scu-components';
  const results = await copy(
    source, dist
  );
  console.info('Copied ' + results.length + ' files');
} catch (error) {
	console.error('Copy failed: ' + error);
}

try {
  const results = await copy(
    './assets',
    './dist/assets',
    {overwrite: true},
  );
  console.info('Copied ' + results.length + ' files');
} catch (error) {
	console.error('Copy Error: ' + error);
}