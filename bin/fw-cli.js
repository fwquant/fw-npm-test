#!/usr/bin/env node
// fw-cli.js 完整修改后
// ES 模块导入
import { getPackageInfo } from '../index.js';

console.log("test-20260311 1904-111111111");

// 异步函数需用自执行函数包裹（避免顶层 await 兼容问题）
(async () => {
    const pkgInfo = await getPackageInfo(); // getPackageInfo 已改为异步，需 await
    console.log(pkgInfo);
})();