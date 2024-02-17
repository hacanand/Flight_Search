- mvc architecture help in separating the concerns of the application. It helps in separating the business logic from the user interface and the data storage. This makes the application more maintainable and scalable.
- mvc architecture is a design pattern that separates the application into three main components: Model, View, and Controller. The Model is responsible for managing the data and business logic. The View is responsible for displaying the data to the user. The Controller is responsible for handling user input and updating the Model and View accordingly.
- table name should be plural and the model name should be singular. For example, if you have a table called users, the model should be called User.

## db commands
- npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer  

- npx sequelize db:seed:all