const apiGetters = require('./all-apis');

/*create APIs for all models and attach them to server*/
module.exports = (dbConnection, server) => {
	const apis = {};

	apiGetters.forEach(apiGetter => {
		const api = apiGetter(dbConnection);

		Object.keys(api).forEach(method => {
			const routesByMethod = apis[method] || (apis[method] = {});
			const apiRoutes = api[method];

			Object.keys(apiRoutes).forEach(route => {
				if (routesByMethod[route]) {
					throw `API route "${route}" already exists!`;
				} else {
					routesByMethod[route] = apiRoutes[route];
					server[method](route, apiRoutes[route]);
				}
			});
		});
	});
};