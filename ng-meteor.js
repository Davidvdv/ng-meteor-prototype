Colleagues = new Mongo.Collection("colleagues");

if (Meteor.isClient) {
    Template.coll.helpers({
        colleagues: function() {
            return Colleagues.find();
        }
    });

    Template.coll.events({
        'click button': function () {
            var increment = this.points + 1;
            Colleagues.update(this._id, {$set: {points: increment}});
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