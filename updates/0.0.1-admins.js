/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Admin', 'name.last': 'User', 'email': 'mateomena10@gmail.com', 'password': '123456789', 'isAdmin': true,  roles: ['role_super'] },
	],
	Role: [
		{
			'name': 'Super',
			__ref: 'role_super'
		},
		{
			'name': 'Developer',
			__ref: 'role_developer'
		},
		{
			'name': 'Author',
			__ref: 'role_author'
		}
	],
	Permission: [
		{
			'name': 'Role List Permissions',
			'listName': 'Role',
			'create': ['role_super'],
			'read': ['role_super'],
			'update': ['role_super'],
			'delete': ['role_super'],
			__ref: 'permission_role'
		},
		{
			'name': 'User List Permissions',
			'listName': 'User',
			'create': ['role_super'],
			'read': ['role_super'],
			'update': ['role_super'],
			'delete': ['role_super'],
			__ref: 'permission_user'
		},
		{
			'name': 'Permission List Permissions',
			'listName': 'Permission',
			'create': ['role_super'],
			'read': ['role_super'],
			'update': ['role_super'],
			'delete': ['role_super'],
			__ref: 'permission_permission'
		}
	],
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var async = require('async');
var User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin (admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function (err) {
		if (err) {
			console.error('Error adding admin ' + admin.email + ' to the database:');
			console.error(err);
		} else {
			console.log('Added admin ' + admin.email + ' to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(admins, createAdmin, done);
};

*/
