# fw_npm_test
一个npm的上传，发布，下载的样例
    修改版本号：      package.json,"version": "1.0.9",  
    登录              npm login 
    上传              npm publish
    




    设置令牌(记得绕过2FA认证)         npm config set //registry.npmjs.org/:_authToken=你的 npm token 值


新手流程
0、安装npm，保证终端：NODE -V  与 NPM -V  都能正常执行看见版本号
1、拉取项目代码到本地：git clone https://github.com/yourusername/fw_npm_test.git
2、注册账号，https://www.npmjs.com/signup
    2.1、开启2FA认证，登录后，右上角图标，点击后选择 Account,Two-Factor Authentication
    2.2、生成token,登录后，右上角图标，点击后选择 Access Tokens,点击 Generate New Token,
3、终端：
    修改版本号：      package.json,"version": "1.0.9",  
    登录              npm login
    上传              npm publish


npmjs 命令:
    初始化：    npm init -y
    登录:       npm login  --always-auth
    上传              npm publish

    清除令牌：   npm config delete //registry.npmjs.org/:_authToken
    查看配置：   npm config list    

    fw_npm_test /       你的 npm token 值

    