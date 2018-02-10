import { IDao } from './DaoInterface';
import { MysqlDao } from './MysqlDao';
var logger = require('./globalConst').logger;

const dao: IDao = new MysqlDao();

dao.select('member', {username:'admin',realname:'admin'}).then((rs)=>{
    logger.debug(rs);
})

