const { successObject } = require('api-rsp');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const moment = require('moment');

const db = require('../models');
const User = db.User;
const Company = db.Company;

class UserService {
    async getUser() {
        const result = await User.findAll({ include: 'company' });
        console.log('result ', result);
        return successObject({ result: result });
    }
    async getCompanies() {
        const result = await Company.findAll();
        return successObject({ result: result });
    }

    async updateUser(id, data) {
        const result = await User.update(
            {
                email: data.email,
            },
            {
                where: {
                    id: id,
                },
            }
        );
        return successObject({ result: result });
    }
    async createUser(data) {
        const result = await User.create({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            companyId: parseInt(data.companyId),
            createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm'),
            updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm'),
        });
        return successObject({ user: result });
    }
    async createCompany(data) {
        const result = await Company.create(
            {
                name: data.name,
                companyCode: data.companyCode,
                createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm'),
                updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm'),
            },
            {
                include: 'employes',
            }
        );
        return successObject({ Company: result });
    }
    async deleteUser(id) {
        const result = await User.destroy({
            where: {
                id: id,
            },
        });
        return successObject({ result: result });
    }
    async getUserById(id) {
        const result = await User.findByPk(id, { include: 'company' });
        return successObject({ result: result });
    }
    async getCompanyUsers() {
        const result = await Company.findAll({
            include: [
                {
                    model: User,
                    as: 'employes',
                    attributes: ['firstName', 'lastName'],
                },
            ],
        });
        console.log('result ', result);
        return successObject({ result: result });
    }
}
module.exports = UserService;
