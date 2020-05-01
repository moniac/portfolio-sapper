const tailwindcss = require('tailwindcss');

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
		...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
	],
};
