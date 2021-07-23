// const assert = require('assert');
// const mock = require('egg-mock');
const { app, mock, assert } = require('egg-mock/bootstrap')

describe('test/controller/home.test.js', ()=>{
  // let app;
  // before(()=>{
  //   app = mock.app();
  //   return app.ready();
  // })
  it('should get a ctx', ()=>{
    const ctx = app.mockContext();
      assert(ctx.method === 'GET');
      assert(ctx.url === '/');
  });


  // 使用返回 Promise 的方式
  it('should success', () => {
    return app.httpRequest()
      .get('/')
      .expect(200);
  });

  // 使用 callback 的方式
  it('should success', done => {
    app.httpRequest()
      .get('/')
      .expect(200, ()=>{
        console.log('done');
        done();
      });
  });

  // 使用 async
  it('should success', async () => {
    await app.httpRequest()
      .get('/')
      .expect(200);
  });
});

describe('GET /', () => {
  it('should status 200 and get the body', () => {
    // 对 app 发起 `GET /` 请求
    return app.httpRequest()
      .get('/')
      .expect(200) // 期望返回 status 200
      .expect('Hello '); // 期望 body 是 Hello Word!
  });

  it('should send multi requests', async () => {
    // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
    await app.httpRequest()
      .get('/')
      .expect(200) // 期望返回 status 200
      .expect('Hello Word!'); // 期望 body 是 Hello Word!

    // 再请求一次
    const result = await app.httpRequest()
      .get('/')
      .expect(200)
      .expect('Hello Word!');

    // 也可以这样验证
    assert(result.status === 200);
  });
});