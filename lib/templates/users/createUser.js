Template.umAddUser.helpers(UserManagementTemplates.umAddUserHelpers);
//Template.umAddUser.events(UserManagementTemplates.umAddUserEvents);

Template.umAddUser.events(UserManagementTemplates.umAddUserEvents, {

    //TODO MEP-Developers: Attention! This events for button 'Go back to User List' and 'Edit this User' are temporary. Must delete after.

    /* CSI-Notes: No momento nao funciona!!!!! */
    'click #goBackTo_showUsers': function () {

        console.log("Estou aqui no goBackTo_showUsers do CREATE USER!!!");

        FlowRouter.go("/users");
    }

});

Template.umAddUser.onCreated(UserManagementTemplates.umAddUserRendered);

AutoForm.hooks({
    createUserForm: {
        onSuccess: function (formType, result) {

            console.log(formType);
            console.log(result);

            FlowRouter.go("/users");

            //TODO: CSI-Notes: Über die zwei linien unter mit Philipp Sporrer sprechen.!!!
            //GlobalUI.closeDialog();
            //Materialize.toast(__('userInsertedSuccessfully'), 4000)
        },
        onError: function (formType, error) {
        }
    }
});