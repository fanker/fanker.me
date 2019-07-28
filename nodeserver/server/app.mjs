/**
 * app入口
 */
import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session-minimal';
import MysqlStore from 'koa-mysql-session';
import Router from 'koa-router';

import DBCONFIG from './config/db.mjs';

import routers from './routers/index.mjs';

const app = new Koa();
const router = new Router();

app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// session存储配置
const sessionMysqlConfig = {
  host: DBCONFIG.host,
  user: DBCONFIG.user,
  password: DBCONFIG.password,
  database: DBCONFIG.database,
};

// 配置session中间件
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig),
//   resave: true,
//   rolling: true,
//   cookie: {
//     maxAge: 30 * 60 * 1000,
//   },
// }));

/** session配置 */
const sessionConfig = {
  key: 'USER_SID', // cookie key (默认koa：sess)
  maxAge: 30 * 60 * 1000, // cookie的过期时间,毫秒，默认为1天
  overwrite: true, // 是否覆盖    (默认default true)
  httpOnly: false, // cookie是否只有服务器端可以访问,默认为true
  signed: true, // 签名默认true
  rolling: true, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false, // (boolean) 会话即将到期时,续订会话
};

app.use(session(sessionConfig, app));

// 配置ctx.body解析中间件
app.use(bodyParser());

// 初始化中间路由
router.use('/api', routers.routes(), routers.allowedMethods());
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(3000);
console.log('Server is start at port 3000');
