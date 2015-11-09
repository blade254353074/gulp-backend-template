<#assign headTitle = "${car.carTitle!'汽车详情'} - 易诚买车">
<#include "/index/public/head.ftl">

<body>
    <#include "/index/public/header.ftl">
    <div id="app" class="container">
        <div class="car-detail new">
            <div class="paper">
                <div class="paper-header clearfix">
                    <h2 class="title">${car.carTitle!""}</h2>
                    <span class="tag">新车</span>
                </div>
                <div class="paper-body">
                    <div class="property row">
                        <div class="col-sm-6">
                            <div id="carImgs" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                <#if car.carpics??>
                                    <#assign index = 0>
                                    <#list car.carpics as item>
                                    <#assign index = index + 1>
                                    <li data-target="#carImgs"
                                        data-slide-to="${index}"
                                        <#if (index == 1)>
                                        class="active"
                                        </#if>>
                                    </li>
                                    </#list>
                                </#if>
                                </ol>
                                <div class="carousel-inner">
                                <#if car.carpics??>
                                    <#assign index = 0>
                                    <#list car.carpics as item>
                                    <#assign index = index + 1>
                                    <div <#if (index == 1)>
                                         class="item active"
                                         <#else>
                                         class="item"
                                         </#if>>
                                        <img src="/assets/index/imgs/3t2.png">
                                        <div class="bg"
                                             style="background-image:url(${item.carPicPath!""});"></div>
                                    </div>
                                    </#list>
                                </#if>
                                </div>
                                <a class="left carousel-control" href="#carImgs" data-slide="prev">
                                    <span class="icon icon-chevron-left"></span>
                                </a>
                                <a class="right carousel-control" href="#carImgs" data-slide="next">
                                    <span class="icon icon-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="car-heading">
                                <p>厂商指导价：<span class="text-red">${car.carGuidPrice!""} 万元</span></p>
                            </div>
                            <div class="car-block">
                                <p>
                                    <span class="prop">品牌：</span><span class="value">${car.series.factory.brand.brandName!""} </span>
                                    <span class="prop">厂商：</span><span class="value">${car.series.factory.factoryName!""} </span>
                                </p>
                                <p>
                                    <span class="prop">车型：</span><span class="value">${car.models.modelsLevel!""} </span>
                                    <span class="prop">座位数：</span><span class="value">${car.carSeat!""} </span>
                                </p>
                                <p>
                                    <span class="prop">颜色：</span><span class="value">${car.carColor!""} </span>
                                </p>
                            </div>
                            <#if car.carvers??>
                                <#list car.carvers as item>
                                <div class="car-block">
                                    <p>
                                        <a href="${item.carVerLink!""}" class="car-model">
                                            <span class="name">${item.carVerInfo!""}</span>
                                            <#assign delta = item.carPriceDiff>
                                            <span class="price
                                                    <#if (delta > 0)>
                                                    rise
                                                    <#else>
                                                    fall
                                                    </#if>">
                                                   ${delta?abs}万
                                            </span>
                                        </a>
                                    </p>
                                </div>
                                </#list>
                            </#if>
                            <div class="car-block">
                                <p>
                                    <span class="prop">排量：</span><span class="value">${car.engine.engineEmissions!""} L</span>
                                    <span class="prop">油耗：</span><span class="value">${car.engine.fuelConsume!""} L</span>
                                </p>
                                <p>
                                    <span class="prop">变速箱：</span><span class="value">${car.gearbox.gearboxType!""} </span>
                                    <span class="prop">保修：</span><span class="value">${car.carGuarantee!""} </span>
                                </p>
                                <p>
                                    <button class="btn btn-success btn-lg btn-block"
                                            id="reserveModal"
                                            data-id="${car.carId}">看车预约</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="description reader">${car.carDescription!""}</div>
                </div>
            </div>
        </div>
    </div>
    <#include "/index/public/footer.ftl">
    <script src="/assets/index/js/public/base-e2b47c2daa.js"></script>
    <script src="/assets/index/js/page/car/detail-5ebed449ff.js"></script>
</body>

</html>
