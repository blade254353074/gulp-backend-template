<#assign headTitle = "${fnews.fnewsTitle} - 易诚买车">
<#include "/index/public/head.ftl">

<body>
    <#assign headerName = "about">
    <#include "/index/public/header.ftl">
    <div id="app" class="container">
        <div class="news-detail reader" data-id="${fnews.fnewsId}">
            <div class="news-header">
                <h3 class="title">${fnews.fnewsTitle}</h3>
                <div class="meta">
                    <a href="javascript:;">${fnews.fnewsAuthor!"易诚买车"}</a>
                    <span>•</span>
                    <span title="${fnews.fnewsTime}">${fnews.fnewsTime}</span>
                </div>
                <div class="cover">
                    <img src="${fnews.fnewsCover}">
                </div>
            </div>
            <div class="content">${fnews.fnewsContent}</div>
        </div>
    </div>
    <#include "/index/public/footer.ftl">
    <script src="/assets/index/js/public/base-e2b47c2daa.js"></script>
</body>

</html>
