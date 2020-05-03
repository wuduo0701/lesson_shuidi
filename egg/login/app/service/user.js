const Service = require('egg').Service;
const crypto = require('crypto');
const uuid = require('uuid');
class UserService extends Service{
    async register(user) {
        const {ctx} = this;
        
        // 密码绝对不成存明文   单项加密 不能破解
        user.password = crypto.createHmac('sha256','cxk1728cn').update(user.password).digest('hex');
        // user.user_id = uuid.v4().replace(/-/g, '');
        const userInfo = await this.ctx.model.User.create(user);
        console.log(user,'service');
        ctx.body = {
           msg:'注册成功',
           userInfo
            // user_id: user.user_id
        }
    }
}

module.exports = UserService