// index.js - 包的入口文件
/**
 * 简单的求和函数
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 两个数的和
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('参数必须是数字！');
    }
    return a + b;
}

function helloworld(name) {
    result = "hello " + name;
    return result;
}

// 导出函数，让使用者可以调用
module.exports = {add, helloworld};


function main() {
    console.log("add()=>[" + add(2, 3) + "]"); // 输出5
    console.log("helloworld=>[" + helloworld(2, 3) + "]"); // 输出5
}

main();