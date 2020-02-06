import APPRequest from '../controller/request';

export const AppController = {
	index(req, res, next) {
		return res.render('index', { title: 'Efex Transport' });
	},
	async contact(req, res, next) {
		const { data: { location, contact_info } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
		if (location || contact_info) {
			res.render('contact', { title: 'Efex Transport', location, contact_info });
		} else {
			res.render('contact', { title: 'Efex Transport' });
		}
	},
	about(req, res, next) {
		return res.render('about', { title: 'Efex Transport' });
	},
	terms(req, res, next) {
		return res.render('terms', { title: 'Efex Transport' });
	},
	receipt(req, res, next) {
		return res.render('receipt', { title: 'Efex Transport' });
	},
	async entry(req, res, next) {
		const { data } = await APPRequest.getAccount(process.env.VOOMSWAY_CLIENT_KEY);
		console.log('data :::: ', data);
		res.render('trips', {
			title: 'Efex Transport',
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
			res.render('terminals', { title: 'Efex Transport', terminals: data, pagination: _meta.pagination });
		} else {
			res.render('terminals', { title: 'Efex Transport', terminals: [], pagination: null });
		}
	}
};