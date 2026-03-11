// 定义计算工具函数
function calculateSum_check(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('参数必须为数字');
    }
    return a + b;
}

// 暴露方法
module.exports = {  calculateSum_check };