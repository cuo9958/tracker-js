(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.cfg = Object.assign({}, tracker_defs, opts);
        }
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
            }
            else {
                this.__get(title, desc);
            }
        }
        __post(title, desc, meta) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", this.cfg.host);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.send(JSON.stringify({ title, desc, meta, token: this.cfg.token, clientid: this.cfg.clientid, platform: this.cfg.platform, version: this.cfg.version }));
        }
        __get(title, desc) {
            const params = "title=" + title + "&desc=" + desc + "&token=" + this.cfg.token + "&clientid=" + this.cfg.clientid + "&platform=" + this.cfg.platform + "&version=" + this.cfg.version;
            const img = new Image();
            img.src = this.cfg.host + "?" + params;
        }
    }
    exports.default = Tracker;
});