// test.js - 本地测试文件
const myPackage = require('./index');

try {
    console.log('2 + 3 =', myPackage.add(2, 3)); // 输出5
    console.log('"2" + 3 =', myPackage.add('2', 3)); // 应该抛出错误
} catch (e) {
    console.error('测试失败：', e.message); // 输出"参数必须是数字！"
}