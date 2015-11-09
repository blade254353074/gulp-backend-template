<#assign headTitle = "新闻列表">
<#include "/admin/public/head.ftl">

<body>
    <div id="app">
        <div class="navigator">
            <div class="logo">
                <a href="/"><span>[</span>易诚用车<span>]</span></a>
            </div>
            <ul id="menu" class="menu">
                <li class="menu-list active">
                    <a href="javascript:;"><span class="icon icon-list-alt"></span>新闻管理</a>
                    <ul class="sub-menu-list">
                        <li><a href="/keeper/fnews/add">添加新闻</a></li>
                        <li class="active"><a href="/keeper/fnews/list/1">新闻列表</a></li>
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
                <div class="center-block" style="padding-top:30px;">
                    <table id="table" class="table table-hover table-bordered table-striped table-condensed">
                        <thead>
                            <tr>
                                <th style="width:40px;">#</th>
                                <th>标题</th>
                                <th style="width:60px;">作者</th>
                                <th>发布日期</th>
                                <th style="width:65px;">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                        <#if fnewsList??>
                            <#assign index=0>
                            <#list fnewsList as value>
                                <#assign index=index+1>
                                <tr data-id="${value.fnewsId}">
                                    <th scope="row" class="text-center">${index + (page - 1) * rows}</th>
                                    <td><a href="/fnews/${value.fnewsId}/detail" target="_blank">${value.fnewsTitle}</a></td>
                                    <td class="text-center">${value.author!"--"}</td>
                                    <td>${value.fnewsTime}</td>
                                    <td class="text-center">
                                        <button class="delete btn btn-sm btn-danger" type="button">删除</button>
                                    </td>
                                </tr>
                            </#list>
                        </#if>
                        </tbody>
                    </table>
                    <#assign link = "/keeper/fnews/list/">
                    <#include "/admin/public/paging.ftl">
                </div>
            </div>
        </div>
    </div>
    <script src="/assets/admin/js/public/base.js"></script>
    <script>
    $(function() {
        $('#table').on('click', '.delete', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $$.modal.show({
                title: '警告',
                content: '即将删除此条新闻，请确认',
                type: 'warning',
                confirm: function() {
                    $.ajax({
                        url: '/keeper/fnews/' + id,
                        type: 'DELETE',
                        dataType: 'json'
                    })
                    .done(function(data) {
                        if (data.state) {
                            window.location.reload();
                        }
                    });
                }
            });
        });
    });
    </script>
</body>

</html>
