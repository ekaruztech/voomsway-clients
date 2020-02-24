import APPRequest from '../controller/request';

export const AppController = {
	index(req, res, next) {
		return res.render('index', { title: 'ATL Transport' });
	},
	contact(req, res, next) {
		res.render('contact', { title: 'ATL Transport' });
	},
	about(req, res, next) {
		return res.render('about', { title: 'ATL Transport' });
	},
	terms(req, res, next) {
		return res.render('terms', { title: 'ATL Transport' });
	},
	receipt(req, res, next) {
		return res.render('receipt', { title: 'ATL Transport' });
	},
	async entry(req, res, next) {
		const { data } = await APPRequest.getAccount(process.env.VOOMSWAY_CLIENT_KEY);
		console.log('data :::: ', data);
		res.render('trips', {
			host: process.env.HOST,
			facebook_app_id: process.env.FACEBOOK_APP_ID,
			google_api_key: process.env.GOOGLE_API_KEY,
			google_client_id: process.env.GOOGLE_CLIENT_ID,
		});
	},
	async terminals(req, res, next) {
		const page = req.query.page || 1;
		const { _meta, data } = await APPRequest.getTerminals({ page });
		if (data) {
			res.render('terminals', { title: 'ATL Transport', terminals: data, pagination: _meta.pagination });
		} else {
			res.render('terminals', { title: 'ATL Transport', terminals: [], pagination: null });
		}
	}
};
