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
                            <div class="col-sm-12">
                                <div class="row">
                                    <h4>基础信息</h4>
                                    <div class="clearfix">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="carTitle" class="text-danger">新车标题</label>
                                                <input value="${car.carTitle!""}" name="carTitle" id="carTitle" type="text" class="form-control upload-data">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="imageUpload" class="text-success">图片上传（限10张）</label>
                                            <a class="btn btn-success file-upload">
                                                <span>上传图片</span>
                                                <input name="image" id="imageUpload" type="file">
                                            </a>
                                            <div id="imageGallery">
                                            <#if car.carpics??>
                                                <#list car.carpics as item>
                                                    <img src="${item.carPicPath}" class="img-thumbnail upload-data-img">
                                                </#list>
                                            </#if>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="modelsId" class="text-primary">车型</label>
                                            <select name="models.modelsId" id="modelsId" class="form-control upload-data">
                                                <#if car.models??>
                                                <option selected value="${car.models.modelsId!""}">${car.models.modelsLevel!""}</option>
                                                <#else>
                                                <option selected value="">选择车型</option>
                                                </#if>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="color" class="text-primary">颜色</label>
                                            <input value="${car.carColor!""}" name="carColor" id="color" type="text" class="form-control upload-data" placeholder="白色、黑色、红色...">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="seat" class="text-primary">座位数</label>
                                            <input value="${car.carSeat!""}" name="carSeat" id="seat" type="number" class="form-control upload-data" placeholder="整数">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="drivenModelId" class="text-primary">驱动方式</label>
                                            <select name="drivemode.driveModeId" id="drivenModelId" class="form-control upload-data">
                                                <#if car.drivemode??>
                                                <option selected value="${car.drivemode.driveModeId!""}">${car.drivemode.driveType!""}</option>
                                                <#else>
                                                <option selected value="">选择驱动方式</option>
                                                </#if>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="transmissionId" class="text-primary">变速箱</label>
                                            <select name="gearbox.gearboxId" id="transmissionId" class="form-control upload-data">
                                                <#if car.gearbox??>
                                                <option selected value="${car.gearbox.gearboxId!""}">${car.gearbox.gearboxType!""}</option>
                                                <#else>
                                                <option selected value="">选择变速箱</option>
                                                </#if>
                                            </select>
                                        </div>
                                    </div>
                                    <h4>发动机信息</h4>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="engineModel" class="text-info">发动机型号</label>
                                            <input value="${car.engine.engineModel!""}" name="engine.engineModel" id="engineModel" type="text" class="form-control upload-data">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="enviroStandards" class="text-info">环保标准</label>
                                            <input value="${car.engine.enviroStandards!""}" name="engine.enviroStandards" id="enviroStandards" type="text" class="form-control upload-data">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="fuelGrade" class="text-info">燃油标号</label>
                                            <input value="${car.engine.fuelGrade!""}" name="engine.fuelGrade" id="fuelGrade" type="text" class="form-control upload-data">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="engineEmissions" class="text-info">排量</label>
                                            <div class="input-group">
                                                <input value="${car.engine.engineEmissions!""}" name="engine.engineEmissions" id="engineEmissions" type="number" class="form-control upload-data" placeholder="整数或小数">
                                                <span class="input-group-addon">L</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="enginePower" class="text-info">马力</label>
                                            <div class="input-group">
                                                <input value="${car.engine.enginePower!""}" name="engine.enginePower" id="enginePower" type="number" class="form-control upload-data" placeholder="整数">
                                                <span class="input-group-addon">匹</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="engineCylinderNum" class="text-info">缸数</label>
                                            <div class="input-group">
                                                <input value="${car.engine.engineCylinderNum!""}" name="engine.engineCylinderNum" id="engineCylinderNum" type="number" class="form-control upload-data" placeholder="整数">
                                                <span class="input-group-addon">缸</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="fuelConsume" class="text-info">油耗</label>
                                            <div class="input-group">
                                                <input value="${car.engine.fuelConsume!""}" name="engine.fuelConsume" id="fuelConsume" type="text" class="form-control upload-data" placeholder="5.4~6.7">
                                                <span class="input-group-addon">L</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="carGuarantee" class="text-info">保修</label>
                                            <div class="input-group">
                                                <input value="${car.carGuarantee!""}" name="carGuarantee" id="carGuarantee" type="text" class="form-control upload-data" placeholder="三年">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <h4>价格</h4>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="guidPrice" class="text-danger">厂商指导价</label>
                                                    <div class="input-group">
                                                        <input value="${car.carGuidPrice!""}" name="carGuidPrice" id="guidPrice" type="text" class="form-control upload-data" placeholder="88.08~99.09">
                                                        <span class="input-group-addon">万元</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="row">
                                    <h4>款型
                                        <button id="carVerAdd"
                                                style="margin-left:15px"
                                                class='btn btn-info btn-sm'>
                                                <span class="icon icon-plus"></span> 添加款型
                                        </button>
                                    </h4>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>款型名称</th>
                                                <th>款型链接</th>
                                                <th>相对差价(万元)</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody id="carVerList">
                                        <#if car.carvers??>
                                            <#assign carverIndex=0>
                                            <#list car.carvers as item>
                                            <tr>
                                                <input value="${item.carVerId!""}" type="hidden" name="carverList[${carverIndex}].carVerId" class="upload-data">
                                                <td><input value="${item.carVerInfo!""}" name="carverList[${carverIndex}].carVerInfo" type="text" class="form-control upload-data"></td>
                                                <td><input value="${item.carVerLink!""}" name="carverList[${carverIndex}].carVerLink" type="text" class="form-control upload-data" placeholder="http://www.xxx.com"></td>
                                                <td><input value="${item.carPriceDiff!""}" name="carverList[${carverIndex}].carPriceDiff" type="text" class="form-control upload-data" placeholder="-23.0"></td>
                                                <td><button class="delete btn btn-default btn-sm"><span class="icon icon-remove"></span></button></td>
                                            </tr>
                                            <#assign carverIndex=carverIndex+1>
                                            </#list>
                                        </#if>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <h4>新车详情</h4>
                            <script type="text/plain" id="ueditor" style="width:100%;min-height:400px;">
                                ${car.carDescription!""}
                            </script>
                        </div>
                        <div class="row">
                            <input value="${car.engine.engineId}" name="engine.engineId" type="hidden" class="upload-data">
                            <input value="${car.carId}" name="carId" type="hidden" class="upload-data">
                            <button data-id="${car.carId}" id="submit" class="btn btn-success btn-lg pull-right" type="button">提交表单</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
    <script src="/assets/admin/js/public/base-ca55d71dcb.js"></script>
    <script src="/assets/admin/js/page/editor/umeditor-57850ee613.js"></script>
    <script src="/assets/admin/js/page/car/edit-1c3f702984.js"></script>
</body>

</html>
