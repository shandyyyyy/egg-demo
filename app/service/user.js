const Service = require('egg').Service;

class UserService extends Service {
  async find(id =1){
    const { ctx, app } = this.ctx;
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', { id });
    return {
      name: user.name,
      sex: user.sex,
      id: user.id
    };
  }
}

module.exports = UserService;