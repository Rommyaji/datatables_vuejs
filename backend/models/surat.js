const { Model, DataTypes } = require("sequelize")
const sequelize = require('../configdb')
class Surat extends Model { }

Surat.init({
    No: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    },
    Tanggal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NoSurat: {
        type: DataTypes.STRING,
        unique: true
    },
    Surat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IsiSurat: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Surat',
    hooks: {
        async beforeValidate(surat) {
            const lastSurat = await Surat.findOne({
                order: [['No', 'DESC']],
            });

            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; 

            const romanNumerals = [
                null,
                'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
            ];

            const romanMonth = romanNumerals[month];

            surat.No = lastSurat ? lastSurat.No + 1 : 1;

            surat.NoSurat = `${surat.No}/DIR/PKU/${romanMonth}/${year}`;
        },
    },
})


module.exports = Surat