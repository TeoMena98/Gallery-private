var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'public';

	// Load the galleries by sortOrder
	view.query('publics', keystone.list('Public').model.find().sort('sortOrder'));

	// Render the view
	view.render('public');

};
