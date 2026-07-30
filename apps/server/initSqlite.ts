import Database from 'better-sqlite3';
import * as fs from 'fs';
import * as path from 'path';

interface InitOptions {
  dbPath: string;
  sqlPath: string;
  transactional?: boolean; // 是否使用事务
}

function initializeDatabase(options: InitOptions): void {
  const { dbPath, sqlPath, transactional = true } = options;

  // 检查 SQL 文件是否存在
  if (!fs.existsSync(sqlPath)) {
    throw new Error(`SQL 文件不存在: ${sqlPath}`);
  }

  // 打开数据库
  const db = new Database(dbPath);

  try {
    // 读取 SQL 文件
    const initSql = fs.readFileSync(sqlPath, 'utf-8');

    // 可选：使用事务包裹（推荐）
    if (transactional) {
      db.exec(initSql);
      // db.transaction(() => {
      //   db.exec(initSql);
      // })();
    } else {
      db.exec(initSql);
    }

    console.log('数据库初始化成功');
  } catch (error) {
    console.error('数据库初始化失败:', error);
    throw error;
  } finally {
    db.close();
  }
}

// 使用
initializeDatabase({
  dbPath: './mydb.sqlite',
  sqlPath: './init-sqlite.sql',
  transactional: true,
});