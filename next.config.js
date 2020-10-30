module.exports = {
	distDir: 'build',
	trailingSlash: true,
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:slug',
				destination: 'https://example.com/blog/:slug', // Matched parameters can be used in the destination
			},
		];
	},
	async redirects() {
		return [
			{
				source: '/about',
				destination: '/',
				permanent: true,
			},
		];
	},
};
