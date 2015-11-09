<#assign headTitle = "汽车列表">
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
                        <li><a href="/keeper/car/add">添加汽车</a></li>
                        <li class="active"><a href="/keeper/car/list/1">新车列表</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="app-content">
            <div class="header-content"></div>
            <div id="appContent" class="main-content">
                <div class="center-block" style="padding-top:30px;">
                    <table id="carListTable" class="table table-hover table-bordered table-striped table-condensed">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>标题</th>
                                <th>车型</th>
                                <th>价格</th>
                                <th>发布时间</th>
                                <th width="180px;">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                        <#if carList??>
                            <#assign index=0>
                            <#list carList as car>
                            <#assign index=index+1>
                            <tr data-id="${car.carId}">
                                <th scope="row">${index + (page - 1) * rows}</th>
                                <td><a href="/car/${car.carId}/detail" target="_blank" class="single-line">${car.carTitle}</a></td>
                                <td>${car.models.modelsLevel}</td>
                                <td>${car.carGuidPrice} 万元</td>
                                <td>${car.carTime}</td>
                                <td class="text-center">
                                    <#if (car.carIsOnline == true)>
                                        <button class="down btn btn-sm btn-warning" type="button">下架</button>
                                    <#else>
                                        <button class="up btn btn-sm btn-info" type="button">上架</button>
                                    </#if>
                                    <a href="/keeper/car/${car.carId}" target="_blank" class="edit btn btn-sm btn-primary">编辑</a>
                                    <button class="delete btn btn-sm btn-danger" type="button">删除</button>
                                </td>
                            </tr>
                            </#list>
                        </#if>
                        </tbody>
                    </table>
                    <#assign link = "/keeper/car/list/">
                    <#include "/admin/public/paging.ftl">
                </div>
            </div>
        </div>
    </div>
    <script src="/assets/admin/js/public/base.js"></script>
    <script src="/assets/admin/js/page/car/list.js"></script>
</body>

</html>
