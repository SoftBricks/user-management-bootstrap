Template.umAddUser.helpers(UserManagementTemplates.umAddUserHelpers);
//Template.umAddUser.events(UserManagementTemplates.umAddUserEvents);

Template.umAddUser.events(_.extend(UserManagementTemplates.umAddUserEvents, {

    //TODO MEP-Developers: Attention! This events for button 'Go back to User List' and 'Edit this User' are temporary. Must delete after.
    'click #goBackTo_showUsers': function () {

        FlowRouter.go("/users");
    }

}));

Template.umAddUser.onCreated(UserManagementTemplates.umAddUserRendered);

AutoForm.hooks({
    createUserForm: {
        onSuccess: function (formType, result) {
            Meteor.call('enrollAccount', result);
            FlowRouter.go("/users");
        }
    }
});
