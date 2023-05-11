'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                firstName: 'Luu',
                lastName: 'Van Hoang',
                email: 'hoangdev.hl@gmail.com',
                password: 'mothaibabon5',
                gender: 1,
                address: 'Hai Phong',
                roleId: 'R1',
                phoneNumber: 1055472015,
                positionId: 'professor',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4F1W6p4Y_rZvcKOSdD34lbKl5nTJUZbi1A&usqp=CAU',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Users', null, {});
    },
};
