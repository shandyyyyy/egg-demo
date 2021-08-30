const fs = require('fs');
const moment = require('moment');
const mkdirp = require('mkdirp');
const path = require('path');

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async page(){
    const { ctx } = this;
    await ctx.render('upload/upload.tpl');
  }
  async upload(){
    const { ctx } = this;

    let file = ctx.request.files[0];

    let uploadDir = '';

    try {
      let f = fs.readFileSync(file.filepath);
      let day = moment(new Date()).format('YYYYMMDD');
      console.log(this.config);
      let dir = path.join(this.config.userConfig.uploadDir, day);
      let date = Date.now();
      await mkdirp(dir);

      uploadDir = path.join(dir, date + path.extname(file.filename));
      console.log(uploadDir);
      fs.writeFileSync(uploadDir, f);
    } catch (error) {
      
    } finally{
      ctx.cleanupRequestFiles();
    }
    ctx.body = {
      code: '200',
      msg: 'upload succeed',
      data: uploadDir.replace(/app/g, '')
    }
  }

}

module.exports = UploadController;