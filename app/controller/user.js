const Controller = require('egg').Controller;

class UserController extends Controller {
  async find() {
    const {ctx, app} = this;

    const params = ctx.params;
    console.log(params);
    const user = await ctx.service.user.find(params.id);
    // await this.ctx.render('user/user.tpl', {info: user});
    if(!user){
      ctx.body = {
        code: 500,
        msg: '账号不存在',
        data: null
      };
      return
    }else{
      const token = app.jwt.sign({
        id: user.id,
        username: user.name,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // token 有效期为 24 小时
      }, app.config.jwt.secret);
      ctx.body = {
        code: 200,
        msg: '账号存在',
        data: token
      };
    }
  }
  async test() {
    const {ctx, app} = this;
    const token = ctx.request.header.authorization;
    const decode = await app.jwt.verify(token, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '获取成功',
      data: {
        ...decode
      }
    }
  }
}

module.exports = UserController;