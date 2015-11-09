<#assign headTitle = "已处理预约">
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
                <li class="menu-list active">
                    <a href="javascript:;"><span class="icon icon-phone-alt"></span>预约管理</a>
                    <ul class="sub-menu-list">
                        <li><a href="/keeper/reserve/handle/1">未处理列表</a></li>
                        <li class="active"><a href="/keeper/reserve/list/1">已处理列表</a></li>
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
                <div class="center-block-lg" style="padding-top:30px;">
                    <table id="reserveList" class="table table-hover table-bordered table-striped table-condensed">
                        <thead>
                            <tr>
                                <th style="width:40px;">ID</th>
                                <th style="width: 50px;">状态</th>
                                <th style="width:175px;">链接</th>
                                <th style="width:100px;">时间</th>
                                <th style="width:60px;">姓名</th>
                                <th style="width:100px;">手机</th>
                                <th style="width:40px;">备注</th>
                                <th style="width:55px;">结果</th>
                                <th style="width:60px;">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                        <#if reserveList??>
                        <#assign index=0>
                        <#list reserveList as item>
                            <#assign index=index+1>
                            <tr data-id="${item.reserveId}">
                                <th scope="row" class="text-center">${index + (page - 1) * rows}</th>
                                <#if (item.reserveEnabled == true)>
                                    <td>展示中</td>
                                <#else>
                                    <td>已下架</td>
                                </#if>
                                <td><a href="/car/${item.car.carId}/detail" target="_blank" class="single-line text-info">${item.car.carTitle}</a></td>
                                <td>${item.reserveTime}</td>
                                <td>${item.reserveName}</td>
                                <td class="text-center">${item.reservePhone}</td>
                                <td><a href="javascript:;" class="detail text-info" data-text="${item.reserveRemark}">查看</a></td>
                                <#if (item.reserveStatus == 1)>
                                    <td>已接受</td>
                                <#elseif (item.reserveStatus == 2)>
                                    <td>已忽略</td>
                                </#if>
                                <td class="text-center">
                                    <button class="delete btn btn-danger btn-sm" type="button">删除</button>
                                </td>
                            </tr>
                        </#list>
                        </#if>
                        </tbody>
                    </table>
                    <#assign link = "/keeper/reserve/list/">
                    <#include "/admin/public/paging.ftl">
                </div>
            </div>
        </div>

    </div>
    <script src="/assets/admin/js/public/base-ca55d71dcb.js"></script>
    <script src="/assets/admin/js/page/reserve/index-44566e6e4a.js"></script>
</body>

</html>
