/* eslint-disable no-console */
const execa = require('execa');
const fs = require('fs');
(async () => {
	try {
		// eslint-disable-next-line no-console
		console.log('Building started...');
		await execa('npm', ['run', 'build']);
		// Understand if it's dist or build folder
		const folderName = fs.existsSync('dist') ? 'dist' : 'build';
		await execa('cd', [folderName]);
		await execa('git', ['init']);
		await execa('git', ['add', '-A']); //git add -A
		await execa('git', ['commit', '-m', 'deploy']); //git commit -m 'deploy'
		//git push -f https://github.com/developergovindgupta/vue-demo1.git master:gh-pages
		await execa('git', ['push', '-f', 'https://github.com/developergovindgupta/vue-demo1.git', 'master:gh-pages']);
		await execa('cd', ['..']);
		console.log('Successfully deployed, check your settings');
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log(e.message);
		process.exit(1);
	}
})();
