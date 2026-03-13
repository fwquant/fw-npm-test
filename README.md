# fw_npm_test
NPM 包上传、发布、下载完整操作样例

## 前置准备
### 环境检查
确保本地已安装 Node.js 和 npm，终端执行以下命令能正常显示版本号：
```bash
node -v   # 查看 Node.js 版本
npm -v    # 查看 npm 版本
```

### 账号准备
1. 注册 npm 账号：访问 [npm 注册页面](https://www.npmjs.com/signup) 完成账号注册
2. 开启 2FA 认证（可选但推荐）：
    - 登录后点击右上角头像 → 选择 `Account` → 找到 `Two-Factor Authentication` 开启
3. 生成访问令牌（Token）：
    - 登录后点击右上角头像 → 选择 `Access Tokens` → 点击 `Generate New Token` 生成令牌（记得保存，生成后仅显示一次）

## 核心操作流程
### 1. 拉取项目代码（新手专用）
```bash
git clone https://github.com/yourusername/fw_npm_test.git
cd fw_npm_test  # 进入项目目录
```

### 2. 初始化项目（可选，若项目无 package.json 时用）
```bash
npm init -y  # 快速生成默认的 package.json
```

### 3. 修改版本号
编辑项目根目录的 `package.json` 文件，修改 `version` 字段：
```json
{
  "name": "fw_npm_test",
  "version": "1.0.9",  // 按需修改版本号，如 1.0.10、1.1.0 等
  "description": "npm 发布测试样例",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### 4. 登录 npm（两种方式）
#### 方式 1：交互式登录（推荐新手）
```bash
npm login --always-auth  # --always-auth 确保后续请求携带认证信息
```
执行后按提示输入：用户名 → 密码 → 邮箱（若开启 2FA，需输入验证码）

#### 方式 2：令牌登录（绕过 2FA 认证，适合自动化/CI）
```bash
npm config set //registry.npmjs.org/:_authToken=你的 npm token 值
```

### 5. 发布包到 npm
```bash
npm publish
```

## 常用辅助命令
```bash
# 清除已配置的 npm 令牌
npm config delete //registry.npmjs.org/:_authToken

# 查看 npm 所有配置（验证令牌是否生效）
npm config list
```

## 下载使用已发布的包
```bash
npm install fw_npm_test --save
```

### 总结
1. 核心流程：环境检查 → 账号/令牌准备 → 改版本号 → 登录 → 发布
2. 登录方式：交互式登录（新手）、令牌登录（绕过 2FA/自动化）
3. 关键命令：`npm login`（登录）、`npm publish`（发布）、`npm config set`（配置令牌）