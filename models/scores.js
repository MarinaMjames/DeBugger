module.exports = function(sequelize, DataTypes) {
  var score = sequelize.define("score", {
	    
      points: {
	      type: DataTypes.INTEGER,
        min: -1000000,
        defaultValue: 0,
        len: [1,10]

	    },
	}
);


 score.associate = function(models) {
  
    score.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });	

    
	};	  
  return score;
};