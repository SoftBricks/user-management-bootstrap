Template.umShowUser.helpers(UserManagementTemplates.umShowUserHelpers);
Template.umShowUser.events(_.extend(UserManagementTemplates.umShowUserEvents, {

    //TODO MEP-Developers: Attention! This events for button 'Go back to User List' and 'Edit this User' are temporary. Must delete after.

    'click #goBackTo_showUsers': function () {
        FlowRouter.go("/users");
    },

    'click #editUserActual': function () {
        FlowRouter.go("/editUser/:userId", {
            userId: this._id
        });
    }

}));