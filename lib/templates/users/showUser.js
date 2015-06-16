Template.umShowUser.helpers(UserManagementTemplates.umShowUserHelpers);
Template.umShowUser.events(_.extend(UserManagementTemplates.umShowUserEvents, {

    //TODO MEP-Developers: Atention! This events for button 'Go back to User List' and 'Edit this User' are temporary. Must delete after.

    'click #goBackTo_showUsers': function () {
        FlowRouter.go("/users");
    },

    'click #editUserActual': function () {

        console.log('>>> Click no Edit User');

        FlowRouter.go("/editUser/:userId", {
            userId: this._id
        });
    }

}));