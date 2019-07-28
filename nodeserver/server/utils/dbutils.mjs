import mysql from 'mysql';

import DBCONFIG from '../config/db.mjs';

const pool = mysql.createPool(DBCONFIG);

/**
 * 执行mysql
 * @param {string} sql [待执行的sql语句]
 * @param {*} values   [待传入的值]
 */
const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(`sql conn err: ${err}`);
      resolve(null);
    } else {
      connection.query(sql, values, (error, rows) => {
        if (error) {
          console.log(`sql query err: ${error}`);
          reject(error);
        } else {
          resolve(rows);
        }
        connection.release();
      });
    }
  });
});

/**
 * 根据id查询数据
 * ?? 代表数据库、表、列名
 * ? 代表变量
 * @param {string} table  [表名]
 * @param {number} id     [id]
 */
const findDataById = (table, id) => {
  const sql = 'SELECT * FROM ?? WHERE id = ?';
  return query(sql, [table, id]);
};

/**
 * 数据插入
 * @param {string} table  [表名]
 * @param {*} values      [待插入的值]
 */
const insertData = (table, values) => {
  const sql = 'INSERT INTO ?? SET ?';
  return query(sql, [table, values]);
};

/**
 * 数据删除
 * @param {string} table [表名]
 * @param {number} id    [数据id]
 */
const deleteDataById = (table, id) => {
  const sql = 'DELETE FROM ?? WHERE id = ?';
  return query(sql, [table, id]);
};

/**
 * 数据修改
 * @param {string} table  [表名]
 * @param {string} values [待修改的值]
 * @param {number} id     [数据id]
 */
const updateData = (table, values, id) => {
  const sql = 'UPDATE ?? SET ? WHERE id = ?';
  return query(sql, [table, values, id]);
};

/**
 * 数据查询
 * @param {string} table [表名]
 * @param {string} keys  [待查询的字段]
 */
const selectData = (table, keys) => {
  const sql = 'SELECT ?? FROM ??';
  return query(sql, [keys, table]);
};

/**
 * 分页查询
 * @param {string} table [表名]
 * @param {array}  keys  [要查询的字段]
 * @param {string} start [数据开始节点]
 * @param {string} end   [数据结束节点]
 */
const findDataByPage = (table, keys, start, end) => {
  const sql = 'SELECT ?? FROM ?? LIMIT ?, ?';
  return query(sql, [keys, table, start, end]);
};

/**
 * 计数
 * @param {string} table [表名]
 */
const count = (table) => {
  const sql = 'SELECT COUNT(*) AS total_count FROM ??';
  return query(sql, [table]);
};

export {
  query,
  findDataById,
  insertData,
  deleteDataById,
  updateData,
  selectData,
  findDataByPage,
  count,
};
