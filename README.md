# fw_npm_test
一个npm的上传，发布，下载的样例

    设置令牌(记得绕过2FA认证)        
        npm config set //registry.npmjs.org/:_authToken=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
    上传              npm publish


1、注册账号，https://www.npmjs.com/signup
2、开启2FA认证，登录后，右上角图标，点击后选择 Account,Two-Factor Authentication
3、生成token,登录后，右上角图标，点击后选择 Access Tokens,点击 Generate New Token,




npmjs 命令:
    初始化：    npm init -y
    登录:       npm login  --always-auth

    清除令牌：   npm config delete //registry.npmjs.org/:_authToken
    查看配置：   npm config list    

