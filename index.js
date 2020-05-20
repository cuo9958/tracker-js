const tracker_defs = {
    host: "http://log.bxiaob.top/api_track/log",
    token: "test",
    clientid: "1",
    version: "0.0.0",
    meta: {},
    platform: "",
};

class Tracker {
    constructor(opts) {
        this.cfg = Object.assign(this.cfg, tracker_defs, opts);
    }
    cfg = {};
    //设置用户id
    setClientid(clientid) {
        this.cfg.clientid = clientid;
    }
    //设置平台
    setPlatform(platform) {
        this.cfg.platform = platform;
    }
    //设置版本号
    setVersion(version) {
        this.cfg.version = version;
    }
    //发送消息
    msg(title, desc, meta) {
        if (meta) {
            this.__post(title, desc, meta || this.cfg.meta);
        } else {
            this.__get(title, desc);
        }
    }
    __post(title, desc, meta) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", this.cfg.host.replace("http://", "https://"));
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        const params =
            "title=" +
            encodeURIComponent(title) +
            "&desc=" +
            encodeURIComponent(desc) +
            "&token=" +
            this.cfg.token +
            "&clientid=" +
            this.cfg.clientid +
            "&platform=" +
            this.cfg.platform +
            "&version=" +
            this.cfg.version +
            "&meta=" +
            JSON.stringify(meta);
        xhr.send(params);
    }
    __get(title, desc, meta) {
        const params =
            "title=" + title + "&desc=" + desc + "&token=" + this.cfg.token + "&clientid=" + this.cfg.clientid + "&platform=" + this.cfg.platform + "&version=" + this.cfg.version;
        const img = new Image();
        img.src = this.cfg.host + "?" + params;
    }
}
module.exports = Tracker;
