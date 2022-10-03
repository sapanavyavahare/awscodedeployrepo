const { sendSuccessRsp, sendErrorRsp, successObject } = require('api-rsp');
const { UserService } = require('../services');
const userService = new UserService();
class UserController {
    async getUsers(req, res) {
        try {
            console.log('in conn');

            const result = await userService.getUser();
            return sendSuccessRsp(res, result);
        } catch (err) {
            console.error('Error in get user :: ', err);
            return sendErrorRsp(res, {
                code: 'GET_TRAINER_FAILED',
                message: 'Unable to get user failed',
                httpCode: 500,
            });
        }
    }

    async getUserById(req, res) {
        try {
            console.log('in conn getUserById', req.params.id);

            const result = await userService.getUserById(req.params.id);
            return sendSuccessRsp(res, result);
        } catch (err) {
            console.error('Error in get user :: ', err);
            return sendErrorRsp(res, {
                code: 'GET_TRAINER_FAILED',
                message: 'Unable to get user failed',
                httpCode: 500,
            });
        }
    }
    async updateUser(req, res) {
        try {
            console.log('in conn');

            const result = await userService.updateUser(
                req.params.id,
                req.body
            );
            return sendSuccessRsp(res, result);
        } catch (err) {
            console.error('Error in get user :: ', err);
            return sendErrorRsp(res, {
                code: 'GET_TRAINER_FAILED',
                message: 'Unable to get user failed',
                httpCode: 500,
            });
        }
    }
    async getCompanies(req, res) {
        try {
            console.log('in conn get compnies');

            const result = await userService.getCompanies();
            return sendSuccessRsp(res, result);
        } catch (err) {
            console.error('Error in get compines :: ', err);
            return sendErrorRsp(res, {
                code: 'GET_TRAINER_FAILED',
                message: 'Unable to get compines failed',
                httpCode: 500,
            });
        }
    }

    async createUser(req, res) {
        try {
            const result = await userService.createUser(req.body);
            return sendSuccessRsp(res, result);
        } catch (err) {
            res.status(500).send(err.stack);
        }
    }

    async createCompany(req, res) {
        try {
            const result = await userService.createCompany(req.body);
            return sendSuccessRsp(res, result);
        } catch (err) {
            res.status(500).send(err.stack);
        }
    }
    async deleteUser(req, res) {
        try {
            console.log('id in conn ', req.params.id);
            const result = await userService.deleteUser(req.params.id);
            return sendSuccessRsp(res, result);
        } catch (err) {
            console.error('Error in delete user :: ', err);
            return sendErrorRsp(res, {
                code: 'DELETED_USER_FAILED',
                message: 'Unable to delete user failed',
                httpCode: 500,
            });
        }
    }
    async getCompanywithUsers(req, res) {
        try {
            console.log('in getCompanywithUsers');
            const result = await userService.getCompanyUsers();
            return sendSuccessRsp(res, result);
        } catch (err) {
            console.error('Error in delete user :: ', err);
            return sendErrorRsp(res, {
                code: 'DELETED_USER_FAILED',
                message: 'Unable to delete user failed',
                httpCode: 500,
            });
        }
    }
}
module.exports = UserController;
