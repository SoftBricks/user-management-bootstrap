Package.describe({
    name: 'softbricks:user-management-bootstrap',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');

    api.use(['templating', 'session', 'underscore'], 'client');

    api.use('useraccounts:bootstrap', ['client', 'server']);
    api.use('softbricks:user-management', ['client', 'server']);
    api.use('twbs:bootstrap', ['client']);

    api.imply('softbricks:user-management@0.0.1', ['client', 'server']);

    api.addFiles(['lib/templates/users/showUsers.html'], 'client');
    api.addFiles(['lib/templates/users/showUsers.js'], 'client');
    api.addFiles(['lib/stylesheets/userList.css'], 'client');

    api.addFiles(['lib/templates/users/showUser.html'], 'client');
    api.addFiles(['lib/templates/users/showUser.js'], 'client');

    api.addFiles(['lib/templates/users/editUser.html'], 'client');
    api.addFiles(['lib/templates/users/editUser.js'], 'client');

/*
    api.addFiles(['lib/templates/users/createUser.html'], 'client');
    api.addFiles(['lib/templates/users/createUser.js'], 'client');
*/

});