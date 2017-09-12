module.exports = function(sequelize, DataTypes) {

  var score = sequelize.define("score", {
	    
      points: {
	      type: DataTypes.INTEGER,
        min: 0,
        defaultValue: 0,
        len: [1,10]

	    },
	}

);


 // score.associate = function(models) {
  
 //    score.belongsTo(models.User, {
 //      foreignKey: {
 //        allowNull: false
 //      }
 //    });	

    
	// };	 

  return score;
  
};

