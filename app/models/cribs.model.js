module.exports = (sequelize, Sequelize) => {
    const Cribs = sequelize.define("cribs", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },

    });
  
    return Cribs;
  };