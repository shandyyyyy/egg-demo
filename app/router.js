module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user', controller.user.find);
  router.get('/upload', controller.upload.page); // upload page
  router.post('/upload', controller.upload.upload); //upload api
  router.get('/user/test', _jwt, controller.user.test); // verify token

}