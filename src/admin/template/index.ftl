<#assign headTitle = "易诚买车后台管理系统">
<#include "/admin/public/head.ftl">

<body>
    <div id="app">
        <div class="navigator">
            <div class="logo">
                <a href="/"><span>[</span>易诚用车<span>]</span></a>
            </div>
            <ul id="menu" class="menu">
                <li class="menu-list">
                    <a href="javascript:;"><span class="icon icon-list-alt"></span>新闻管理</a>
                    <ul class="sub-menu-list">
                        <li><a href="/keeper/fnews/add">添加新闻</a></li>
                        <li><a href="/keeper/fnews/list/1">已发布的</a></li>
                    </ul>
                </li>
                <li class="menu-list">
                    <a href="javascript:;"><span class="icon icon-phone-alt"></span>预约管理</a>
                    <ul class="sub-menu-list">
                        <li><a href="/keeper/reserve/handle/1">未处理列表</a></li>
                        <li><a href="/keeper/reserve/list/1">已处理列表</a></li>
                    </ul>
                </li>
                <li class="menu-list">
                    <a href="javascript:;"><span class="icon icon-scale"></span>汽车管理</a>
                    <ul class="sub-menu-list">
                        <li><a href="/keeper/car/add">添加汽车</a></li>
                        <li><a href="/keeper/car/list/1">新车列表</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="app-content">
            <div class="header-content"></div>
            <div id="appContent" class="main-content">
            </div>
        </div>

    </div>
    <script src="/assets/admin/js/public/base.js"></script>
</body>

</html>
