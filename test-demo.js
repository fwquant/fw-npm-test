// 导入当前包的入口模块（模拟本地调用）
const fwTest = require('./index.js');

// 调用包内方法
try {
    // 1. 调用 scripts.js 中的 sayHello 方法
    const helloMsg = fwTest.sayHello('yanhuang');
    console.log('【sayHello 调用结果】', helloMsg);

    // 2. 调用 test.js 中的 calculateSum 方法
    const sumResult = fwTest.calculateSum(10, 20);
    console.log('【calculateSum 调用结果】', 10 + ' + ' + 20 + ' = ' + sumResult);

    // 3. 调用 index.js 中定义的 getPackageInfo 方法
    const pkgInfo = fwTest.getPackageInfo();
    console.log('【包信息】', pkgInfo);

} catch (error) {
    console.error('调用出错：', error.message);
}