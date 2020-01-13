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
		const { data: { social_auth_keys } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
		res.render('trips', {
			title: 'Efex Transport',
			host: process.env.HOST,
			social_auth_keys
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