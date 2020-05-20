/**
 * web上的日志发送库
 */
declare class Tracker {
    constructor(opts?: opts);
    /**
     * 设置用户id
     * @param clientid 自定义的id
     */
    setClientid(clientid: string): void;
    /**
     * 设置平台
     * @param platform 平台类型
     */
    setPlatform(platform: string): void;
    /**
     * 设置版本
     * @param version 版本号
     */
    setVersion(version: string): void;
    /**
     * 发送消息，不带meta会使用get方式发送
     * @param title 标题
     * @param desc 详情
     * @param meta 附加数据，会覆盖全局数据
     */
    msg(title: string, desc: string, meta?: any): void;
}
interface opts {
    /**
     * 发送日志的api地址，不需要设置
     */
    host?: string;
    /**
     * 项目token
     */
    token?: string;
    /**
     * 识别不同的用户
     */
    clientid?: string;
    /**
     * 识别不同的版本
     */
    version?: string;
    /**
     * 全局附加数据
     */
    meta?: any;
    /**
     * adwdw
     */
    platform?: string;
}
export = Tracker;
