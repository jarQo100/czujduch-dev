module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('User', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            validate: {      
                isEmail: true,
            }       
        },
        password:{
            type: DataTypes.STRING
        }
    });

};