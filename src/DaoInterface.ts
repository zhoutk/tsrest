export interface IDao {
    execQuery(sql: string, values: any): Promise<any>;
    select(tablename: string, params: object, fields?: Array<string>): Promise<any>;
} 