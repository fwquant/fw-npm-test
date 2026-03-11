// 导入内部模块
const {sayHello, getPackageInfo, calculateSum} = require('./scripts.js');
const {calculateSum_check} = require('./test.js');


// 对外暴露核心功能
module.exports = {
    sayHello,
    calculateSum,
    calculateSum_check,
    getPackageInfo // 现在是动态读取的方法
};