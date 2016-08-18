import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Route to main page

Router.route('/', function () {
	this.render('welcome');
});

// Route to test item pages

Router.route('/test/:slug', function () {
	this.layout('TestItemLayout');
	this.render( this.params.slug );
});

Template.welcome.helpers({
	testitems: function() {

		console.log(Template);

		return "AAA";
	}
});

