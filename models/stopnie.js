module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('Stopien', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
        },
        work: {
            type: DataTypes.STRING
        },
        dateBegin:{
            type: DataTypes.DATE,
            unique: true,   
        },
        commandBegin:{
            type: DataTypes.STRING
        },
        dateEnd:{
            type: DataTypes.DATE
        },
        commandEnd:{
            type: DataTypes.STRING
        },
        guide:{
            type: DataTypes.STRING
        },
        whoGive:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        commandBegin:{
            type: DataTypes.STRING
        },
        userId:{
            type: DataTypes.STRING
        },
        id:{
            type: DataTypes.STRING
        }
    });

};
