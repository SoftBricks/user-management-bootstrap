/* NAO ESTA PRONTO -> MUDEI DE CRIAR PARA EDITAR */

Template.umAddUser.helpers(UserManagementTemplates.umAddUserHelpers);
Template.umAddUser.events(UserManagementTemplates.umAddUserEvents);
Template.umAddUser.onCreated(UserManagementTemplates.umAddUserRendered);

AutoForm.hooks({
    createUserForm: {
        onSuccess: function(formType, result) {
            GlobalUI.closeDialog();
            Materialize.toast(__('userInsertedSuccessfully'), 4000)
        },
        onError: function(formType, error) {
        }
    }
});