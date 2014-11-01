App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about'); 
    this.resource('posts', function() {
      this.resource('post', {path: ':post_id'});  
    });
    
    
    this.resource('superheros');
    
});

App.PostController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function() {
            this.set('isEditing', true);
        },
        doneEditing: function() {
            this.set('isEditing', false);
        }
    }
    
});


Ember.Handlebars.helper('format-date', function(date) {
    return moment(date).fromNow();
})

Ember.Handlebars.helper('bold', function(options) {
   return "<b>" + options + "</b>"; 
});


App.Router.map(function() {
  // put your routes here
});

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return posts;
    }
});

App.PostRoute = Ember.Route.extend({
    model: function(params) {
        return posts.findBy('id', params.post_id);
    }
    
});

App.SuperherosRoute = Ember.Route.extend({
    model: function() {
        return superheros;
    }
});

App.Person = Ember.Object.extend({
  // these will be supplied by `create`
  firstName: null,
  lastName: null,

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

var ironMan = App.Person.create({
  firstName: "Tony",
  lastName:  "Stark"
});

var superheros = [];
superheros.push(ironMan);


/*

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
*/


var posts = [{
    id: '1',
    title: "Rails os Imasake",
    author: {name: "d2h"},
    date: new Date ('12-27-2012'),
    excerpt: "Test excerpt",
    body: "testBody"
}, {
   id: '2',
    title: "The parsley letter",
    author: {name: "d2h"},
    date: new Date ('12-24-2012'),
    excerpt: "Test excerpt",
    body: "testBody" 
    
}];