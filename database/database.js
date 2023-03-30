const Sequelize = require('sequelize');


const connection = new Sequelize(
                                    'bd_libri_api',
                                    'root',
                                    '',
                                    {
                                        host: 'localhost',
                                        port:'3307',
                                        dialect:'mysql',
                                        timezone: '-03:00'
                                    }
);

module.exports = connection;