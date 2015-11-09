<#assign headTitle = "添加汽车">
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
                        <li><a href="/keeper/fnews/list/1">新闻列表</a></li>
                    </ul>
                </li>
                <li class="menu-list">
                    <a href="javascript:;"><span class="icon icon-phone-alt"></span>预约管理</a>
                    <ul class="sub-menu-list">
                        <li><a href="/keeper/reserve/handle/1">未处理列表</a></li>
                        <li><a href="/keeper/reserve/list/1">已处理列表</a></li>
                    </ul>
                </li>
                <li class="menu-list active">
                    <a href="javascript:;"><span class="icon icon-scale"></span>汽车管理</a>
                    <ul class="sub-menu-list">
                        <li class="active"><a href="/keeper/car/add">添加汽车</a></li>
                        <li><a href="/keeper/car/list/1">新车列表</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="app-content">
            <div class="header-content"></div>
            <div id="appContent" class="main-content">
                <div class="center-block">
                    <fieldset id="carAddField" class="car-field container-fluid">
                        <div class="row">
                            <h4>车系选择</h4>
                            <div id="carSearch" class="search"></div>
                        </div>
                        <div class="row">
                            <div id="carEdit"></div>
                        </div>
                        <div class="row">
                            <h4>新车详情</h4>
                            <script type="text/plain" id="ueditor" style="width:100%;min-height:400px;"></script>
                        </div>
                        <div class="row">
                            <button disabled id="submit" class="btn btn-success btn-lg pull-right" type="button">提交表单</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

    </div>
    <script src="/assets/admin/js/public/base-ca55d71dcb.js"></script>
    <script src="/assets/admin/js/page/editor/umeditor-57850ee613.js"></script>
    <script src="/assets/admin/js/page/car/add-ba7f71f038.js"></script>
</body>

</html>
