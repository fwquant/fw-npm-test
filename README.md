# fw_npm_test
一个npm的上传，发布，下载的样例



1、注册账号，https://www.npmjs.com/signup
2、开启2FA认证，登录后，右上角图标，点击后选择 Account,Two-Factor Authentication
3、生成token,登录后，右上角图标，点击后选择 Access Tokens,点击 Generate New Token,




npmjs 命令:
初始化：    npm init -y
设置令牌：   npm config set //registry.npmjs.org/:_authToken=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

    登录:       npm login  --always-auth
    上传：      npm publish



    清除令牌：   npm config delete //registry.npmjs.org/:_authToken
    查看配置：   npm config list    
    fw_test20260311/    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
