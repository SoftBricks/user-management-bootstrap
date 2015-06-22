Template.umEditUser.helpers(UserManagementTemplates.umEditUserHelpers);
Template.umEditUser.events(UserManagementTemplates.umEditUserEvents, {

    //TODO MEP-Developers: Atention! This events for button 'updateUser' and 'removeUser' are temporary. Must delete after.

    'click #updateUser': function () {

        console.log('>>> Click no updateUser do EDIT-USER...');

        //FlowRouter.go("/editUser/:userId", {
        //    userId: this._id
        //});
    },

    'click #removeUser': function () {

        console.log('>>> Click no removeUser do EDIT-USER...');

        //FlowRouter.go("/editUser/:userId", {
        //    userId: this._id
        //});
    }

});