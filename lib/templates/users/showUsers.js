Template.umShowUsers.helpers(UserManagementTemplates.umShowUsersHelpers);
Template.umShowUsers.events(_.extend(UserManagementTemplates.umShowUsersEvents, {
    'click .list-group-item': function () {
        FlowRouter.go("/users/:userId", {
            userId: this._id
        });
    }
}));