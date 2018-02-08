import { IDao } from './DaoInterface';
import { MysqlDao } from './MysqlDao';

const dao: IDao = new MysqlDao();

dao.select('member', {username:'admin',realname:'admin'}).then((rs)=>{
    console.dir(rs);
})

