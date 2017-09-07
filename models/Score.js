module.exports = function(sequelize, DataTypes) {

  var Score = sequelize.define("Score", {
	    
      points: {
	      type: DataTypes.INTEGER,
        min: -1000000,
        defaultValue: 0,
        len: [1,10]

	    },
	}
);


 Score.associate = function(models) {
  
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });	

    
	};	  
  return Score;
};

