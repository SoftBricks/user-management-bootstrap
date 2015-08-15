Template.umShowUsers.helpers(UserManagementTemplates.umShowUsersHelpers);
Template.umShowUsers.events(_.extend(UserManagementTemplates.umShowUsersEvents, {
    'click .list-group-item': function () {
        FlowRouter.go("/showUser/:userId", {
            userId: this._id
        });
    },

    //TODO MEP-Developers: Attention! This events for button 'updateUser' and 'removeUser' are temporary. Must delete after.

    'click #goTo_addUser': function () {
        FlowRouter.go("/addUser");
    }

}));

Template.umShowUsers.onCreated(function() {
  UM.prototype.umShowUsersOnCreated.call(this);
});
