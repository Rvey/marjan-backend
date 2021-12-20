module.exports = (app) => {
    const AdminController = require('../api/controllers/CentreAdminController');

    // get all users
    app.get('/users', AdminController.AdminsLists);

    // // Retrieve all todos
    // app.get('/todos', todos.findAll);

    // // Retrieve a single todo by id
    // app.get('/todos/:id', todos.findOne);

    // // Update a Todo with id
    // app.put('/todos/:id', todos.update);

    // // Delete a Todo by id
    // app.delete('/todos/:id', todos.delete);
}