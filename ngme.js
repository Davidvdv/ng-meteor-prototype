Colleagues = new Mongo.Collection("colleagues");

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        if (Colleagues.find().count() === 0) {

            // Marley is always there.. ;)
            var colleagues = [
                {
                    name: 'Marley',
                    points: 1
                }
            ];

            // Add colleagues to the collection - 3 way binding
            colleagues.forEach(function(currentVal) {
                Colleagues.insert(currentVal)
            });
        }
    });
}