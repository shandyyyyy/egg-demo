const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index(){
    this.ctx.body = 'Hello Word!';
  }
}
module.exports = HomeController;