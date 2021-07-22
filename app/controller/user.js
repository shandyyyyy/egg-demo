const Controller = require('egg').Controller;

class UserController extends Controller {
  async find() {
    const ctx = this.ctx;
    const user = await ctx.service.user.find(1);
    await this.ctx.render('user/user.tpl', {info: user});
  }
}

module.exports = UserController;