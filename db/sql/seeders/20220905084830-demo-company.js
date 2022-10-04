'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Companies', [
            {
                name: 'HappiestMinds',
                companyCode: 'HM',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'TCS',
                companyCode: 'TCS',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Microsoft',
                companyCode: 'Microsoft',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Honeywell',
                companyCode: 'Honeywell',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Snider',
                companyCode: 'Snider',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('companies', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
