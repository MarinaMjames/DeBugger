module.exports = function(sequelize, DataTypes) {
	
	var User = sequelize.define('User', {
		
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}

	});
	User.associate = function(models) {
		User.hasMany(models.Score, {
			onDelete: 'cascade'
		});
	}
	return User;
	
}