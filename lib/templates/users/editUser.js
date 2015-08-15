Template.umEditUser.helpers(UserManagementTemplates.umEditUserHelpers);
Template.umEditUser.events(_.extend(UserManagementTemplates.umEditUserEvents, {

    //TODO MEP-Developers: Attention! This events for button 'updateUser' and 'removeUser' are temporary. Must delete after.

    'click #goBackTo_showUser': function (e) {
        FlowRouter.go("/showUser/:userId/", {
            userId: this._id
        });
    }

}));

Template.umEditUser.onCreated(function() {
  UM.prototype.umShowUserOnCreated.call(this);
});
