import {IDao} from './DaoInterface';
import { createPool, createConnection } from 'mysql';
const config = require('./configs.json').db_config;

var options = {
    'host': config.db_host,
    'port': config.db_port,
    'database': config.db_name,
    'user': config.db_user,
    'password': config.db_passwd,
    'charset': config.db_charset,
    'connectionLimit': config.db_conn_limit,
    'connectTimeout' : 30000,
    'supportBigNumbers': true,
    'bigNumberStrings': true
}

let pool = createPool(options);

export class MysqlDao implements IDao {
    select(tablename: string, params: object, fields?: Array<string>): Promise<any>{
        return this.execQuery(`select * from ${tablename} where username = ? and realname = ?`, [params.username, params.realname]);
    }
    execQuery(sql:string, values:any):Promise<any>{
        return new Promise(function(fulfill, reject) {

            pool.getConnection(function(err, connection) {
                if (err) {
                    reject({code:204,err:err.message})
                    console.log(err.message)
                } else {
                    connection.query(sql, values, function(err, result) {
                        connection.release();
                        let v = values ? ' _Values_ :' + JSON.stringify(values) : ''
                        if (err) {
                            reject({code:204,err:err.message});
                            console.log(err.message + ' Sql is : ' + sql + v);
                        } else {
                            fulfill(sql.toLocaleUpperCase().startsWith('SELECT') ? result : Object.assign({code:200},result));
                            console.log( ' _Sql_ : ' + sql + v);
                        }
                    });
                }
            });
    
        });
    }
}