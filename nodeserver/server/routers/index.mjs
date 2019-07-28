/**
 * 整合所有子路由
 */
import Router from 'koa-router';

import user from './user.mjs';
import tag from './tag.mjs';
import article from './article.mjs';

const router = new Router();
router.use('/user', user.routes(), user.allowedMethods());
router.use('/tag', tag.routes(), tag.allowedMethods());
router.use('/article', article.routes(), article.allowedMethods());

export default router;
