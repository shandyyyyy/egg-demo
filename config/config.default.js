exports.keys = ' ';

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  },
};

// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
//挂载middleware
exports.middleware = [
  'robot',
  'test'
]
// 配置robot middleware
exports.robot = {
  ua: [
    /Baiduspider/i
  ]
}

//
exports.multipart = {
  mode: 'file'
}

exports.mysql = {
  client: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Hh123456',
    database: 'egg_test'
  }
}