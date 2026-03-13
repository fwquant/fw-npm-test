// 导入包内的方法
import { sayHello, calculateSum, getPackageInfo } from 'fw_npm_test';

// 1. 使用同步方法
console.log(sayHello('张三')); // 输出：Hello 张三! 欢迎使用 fw_test20260311 包
console.log(calculateSum(10, 20)); // 输出：30

// 2. 使用异步方法（需包裹异步函数）
(async () => {
    const pkgInfo = await getPackageInfo();
    console.log('包信息：', pkgInfo);
})();