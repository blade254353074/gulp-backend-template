<#assign headTitle = "添加新闻">
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
                        <li class="active"><a href="/keeper/fnews/add">添加新闻</a></li>
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
                <div class="center-block">
                    <fieldset>
                        <div class="form-group">
                            <label for="title">新闻标题</label>
                            <input name="fnewsTitle" id="title" type="text" class="form-control upload-data" placeholder="新闻标题">
                        </div>
                        <div class="form-group">
                            <label for="author">新闻作者</label>
                            <input name="fnewsAuthor" id="author" type="text" class="form-control upload-data" placeholder="作者" value="易诚买车">
                        </div>
                        <div class="form-group">
                            <label for="cover">上传封面</label>
                            <a class="btn btn-success file-upload">
                                <span>上传图片</span>
                                <input name="image" id="imageUpload" type="file">
                            </a>
                            <div id="imageGallery"></div>
                        </div>
                        <div class="form-group">
                            <label for="umeditor">新闻内容</label>
                            <script type="text/plain" id="ueditor" style="width: 100%;"></script>
                        </div>
                        <button id="newsSubmit" class="btn btn-primary" type="button">提交新闻</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
    <script src="/assets/admin/js/public/base-ca55d71dcb.js"></script>
    <script src="/assets/admin/js/page/editor/umeditor-57850ee613.js"></script>
    <script src="/assets/admin/js/page/news/add-b4b0e914fe.js"></script>
</body>

</html>
