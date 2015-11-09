<#assign headTitle = "易诚买车">
<#include "/index/public/head.ftl">

<body>
    <#assign headerName = "index">
    <#include "/index/public/header.ftl">
    <div id="app" class="container">
        <div class="news-area clearfix">
            <#if fnewsList??>
                <#list fnewsList as value>
                <div class="news-box">
                    <img src="/assets/index/imgs/3t2.png">
                    <a class="news-wrapper" href="/fnews/${value.fnewsId}/detail">
                        <div class="news-bg" style="background-image: url(${value.fnewsCover});"></div>
                        <span>${value.fnewsTitle}</span>
                    </a>
                </div>
                </#list>
            </#if>
        </div>
        <ul class="row">
            <#if carList??>
                <#list carList as value>
                <li class="car-list-card col-sm-3">
                    <div class="wrapper">
                        <a href="/car/${value.carId}/detail">
                            <div class="cover"
                                 style="background-image:url(
                                    <#if value.carpics??>
                                        <#list value.carpics as item>
                                            <#if item.carPicSelected>
                                                ${item.carPicPath}
                                                <#break>
                                            </#if>
                                        </#list>
                                    </#if>
                                 );">
                                <img src="/assets/index/imgs/3t2.png">
                            </div>
                            <span class="tag new">新车</span>
                        </a>
                        <div class="content">
                            <a href="/car/${value.carId}/detail">
                                <h4 class="title">${value.series.seriesName} ${value.carTitle}</h4>
                            </a>
                            <div class="meta">
                                <span class="price">￥<em class="text-red">${value.carGuidPrice}</em>万</span>
                                <div class="meta-main">
                                    <p title="${value.models.modelsLevel}">车型：${value.models.modelsLevel}</p>
                                    <p title="${value.gearbox.gearboxType}">变速箱：${value.gearbox.gearboxType}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                </#list>
            </#if>
        </ul>
    </div>
    <#assign link = "/car/list/">
    <#include "/index/public/paging.ftl">
    <#include "/index/public/footer.ftl">
    <script src="/assets/index/js/public/base.js"></script>
</body>

</html>
