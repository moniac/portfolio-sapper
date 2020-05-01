const tailwindcss = require('tailwindcss');

// only needed if you want to purge
const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.svelte', './src/**/*.html'],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const cssnano = require('cssnano')({
	preset: [
		'default',
		{
			discardComments: {
				removeAll: true,
			},
		},
	],
});

module.exports = {
	plugins: [
		tailwindcss('./tailwind.js'),

		// only needed if you want to purge
		...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
	],
};
