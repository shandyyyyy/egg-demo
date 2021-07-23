const Controller = require('egg').Controller;

class UserController extends Controller {
  async find() {
    const ctx = this.ctx;

    const query = ctx.query;
    const user = await ctx.service.user.find(query.id);
    await this.ctx.render('user/user.tpl', {info: user});
  }
}

module.exports = UserController;