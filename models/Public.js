var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Public Model
 * =============
 */

var Public = new keystone.List('Public', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Public.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	"Main image": { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },

});



Public.register();
