module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        firstname:{
            type: Sequelize.STRING,
            allowNull:false
        },
        lastname:{
            type: Sequelize.STRING,
            allowNull:false
        },
        role:{
            type: Sequelize.STRING,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }
    });
    return User;
};
