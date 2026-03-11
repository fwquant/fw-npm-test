// 引入 Node.js 内置的文件路径模块（处理路径兼容）
const path = require('path');

// 定义基础功能
function sayHello(name = '用户') {
    return `Hello ${name}! 欢迎使用 fw_test20260311 包`;
}

// 动态读取 package.json 内容
function getPackageInfo() {
    try {
        // 拼接 package.json 的绝对路径（兼容不同运行环境）
        const pkgPath = path.resolve(__dirname, 'package.json');
        // 读取并解析 package.json 文件
        const packageJson = require(pkgPath);

        // 提取需要暴露的核心信息（可按需调整）
        return {
            name: packageJson.name,
            version: packageJson.version,
            author: packageJson.author || '未知作者',
            description: packageJson.description || '无描述',
            license: packageJson.license || 'MIT',
            // 可扩展：添加更多 package.json 里的字段
            keywords: packageJson.keywords || []
        };
    } catch (error) {
        // 容错处理：读取失败时返回默认值
        console.warn('读取 package.json 失败：', error.message);
        return {
            name: 'fw_test20260311',
            version: '1.0.2',
            author: 'yanhuang',
            description: '测试 npm 包',
            license: 'MIT'
        };
    }
}

function calculateSum(a, b) {
    return a + b;
}

// 暴露方法
module.exports = {sayHello, getPackageInfo, calculateSum};
