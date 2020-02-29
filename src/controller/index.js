import APPRequest from '../controller/request';

export const AppController = {
	async index(req, res, next) {
		const { data } = await APPRequest.getAccountSettings(process.env.VOOMSWAY_CLIENT_KEY);
		res.render('index', {
			website: (data && data.contactInfo) ? data.contactInfo.website : '',
			host: process.env.HOST,
			facebook_app_id: process.env.FACEBOOK_APP_ID,
			google_api_key: process.env.GOOGLE_API_KEY,
			google_client_id: process.env.GOOGLE_CLIENT_ID,
		});
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
