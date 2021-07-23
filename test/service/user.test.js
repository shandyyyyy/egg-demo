
const { app, assert, mock} = require('egg-mock/bootstrap');

describe('find()', ()=>{
  it('should get exist user', async()=>{
    const ctx =  app.mockContext();
    const user = await ctx.service.user.find(1);
    assert(user);
    assert(user.id == 1);
  })
})