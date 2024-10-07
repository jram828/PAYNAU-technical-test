import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Person = sequelize.define(
    "Person",
    {
      Nombres: { type: DataTypes.STRING, allowNull: false },
      Apellidos: { type: DataTypes.STRING, allowNull: false },
      Identificacion: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Direccion: { type: DataTypes.STRING, allowNull: false },
      Telefono: { type: DataTypes.BIGINT, allowNull: false },
      Edad: { type: DataTypes.INTEGER, allowNull: false },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
  return Person;
};
