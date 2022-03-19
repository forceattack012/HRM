module.exports = (sequelize, DataTypes) => {
    sequelize.define('user', {
        countryCode: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        countryName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}