<#assign headTitle = "登录 - 易诚买车后台管理系统">
<#include "/admin/public/head.ftl">

<body>
    <div id="app">
        <div class="container" style="text-align: center;padding-top: 120px;padding-bottom:260px;">
            <div class="notes animated fadeInUp">
                <div class="form-notes">
                    <div class="form-header">
                        <div class="buckle-area">
                            <div class="buckle-wrapper">
                                <div class="buckle">
                                    <div class="ring"></div>
                                </div>
                            </div>
                            <div class="buckle-wrapper">
                                <div class="buckle">
                                    <div class="ring"></div>
                                </div>
                            </div>
                            <div class="buckle-wrapper">
                                <div class="buckle">
                                    <div class="ring"></div>
                                </div>
                            </div>
                            <div class="buckle-wrapper">
                                <div class="buckle">
                                    <div class="ring"></div>
                                </div>
                            </div>
                            <div class="buckle-wrapper">
                                <div class="buckle">
                                    <div class="ring"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-body">
                        <form id="loginForm">
                            <div class="form-group">
                                <input type="text" name="username" class="form-control input-lg" id="un" placeholder="账号" maxlength="16">
                                <input type="password" name="password" class="form-control input-lg" id="pwd" placeholder="密码" maxlength="16">
                            </div>
                            <p id="tip" class="tip-text"></p>
                            <input type="submit" id="login" class="btn btn-warning btn-lg btn-block" value="登录">
                        </form>
                    </div>
                </div>
                <div class="form-bottom"></div>
            </div>
        </div>
    </div>
    <script src="/assets/admin/js/public/base-ca55d71dcb.js"></script>
    <script src="/assets/admin/js/page/user/login-b8e2593b9a.js"></script>
</body>

</html>
