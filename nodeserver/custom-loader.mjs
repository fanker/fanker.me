import url from 'url';
import path from 'path';
import process from 'process';

// 获取所有Node原生模块名称
const builtins = new Set(
  Object.keys(process.binding('natives')).filter(str => /^(?!(?:internal|node|v8)\/)/.test(str)),
);

// 配置import/export兼容的文件后缀名
const JS_EXTENSIONS = new Set(['.js', '.mjs']);

// flag执行的resolve规则
export function resolve(specifier, parentModuleURL /* , defaultResolve */) {
  // 判断是否为Node原生模块
  if (builtins.has(specifier)) {
    return {
      url: specifier,
      format: 'builtin',
    };
  }

  // 判断是否为*.js, *.mjs文件
  // 如果不是则，抛出错误
  if (/^\.{0,2}[/]/.test(specifier) !== true && !specifier.startsWith('file:')) {
    // For node_modules support:
    // return defaultResolve(specifier, parentModuleURL);
    throw new Error(
      `imports must begin with '/', './', or '../'; '${specifier}' does not`,
    );
  }
  const resolved = new url.URL(specifier, parentModuleURL);
  const ext = path.extname(resolved.pathname);
  if (!JS_EXTENSIONS.has(ext)) {
    throw new Error(
      `Cannot load file with non-JavaScript file extension ${ext}.`,
    );
  }

  // 如果是*.js, *.mjs文件，封装成ES6 Modules格式
  return {
    url: resolved.href,
    format: 'esm',
  };
}
