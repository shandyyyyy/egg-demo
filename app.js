module.exports = app => {
  app.once('server', server => {
    // server start
  });

  app.on('error', (err, ctx)=>{
    // catch error 
  });
  app.on('request', ctx => {
    // log receive request
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
}