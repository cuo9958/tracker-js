# tracker-js

js 发送消息

## 使用

```javascript
const Tracker = require("./index");

const cfg = {
    token: "test",
    clientid: "1",
    version: package.version,
    meta: {},
    platform: "",
};

const log = new Tracker(cfg);

log.setClientid("123");

log.msg("新测试标题", "测试内容无关", {});
log.msg("新测试标题2", "测试内容无关22");
```
