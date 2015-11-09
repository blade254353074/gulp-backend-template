/*TMODJS:{"version":"1.0.0"}*/
!function() {
    function template(filename, content) {
        return (/string|function/.test(typeof content) ? compile : renderFile)(filename, content);
    }
    function toString(value, type) {
        return "string" != typeof value && (type = typeof value, "number" === type ? value += "" : value = "function" === type ? toString(value.call(value)) : ""), 
        value;
    }
    function escapeFn(s) {
        return escapeMap[s];
    }
    function escapeHTML(content) {
        return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    }
    function each(data, callback) {
        if (isArray(data)) for (var i = 0, len = data.length; len > i; i++) callback.call(data, data[i], i, data); else for (i in data) callback.call(data, data[i], i);
    }
    function resolve(from, to) {
        var DOUBLE_DOT_RE = /(\/)[^\/]+\1\.\.\1/, dirname = ("./" + from).replace(/[^\/]+$/, ""), filename = dirname + to;
        for (filename = filename.replace(/\/\.\//g, "/"); filename.match(DOUBLE_DOT_RE); ) filename = filename.replace(DOUBLE_DOT_RE, "/");
        return filename;
    }
    function renderFile(filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: "Render Error",
            message: "Template not found"
        });
        return data ? fn(data) : fn;
    }
    function compile(filename, fn) {
        if ("string" == typeof fn) {
            var string = fn;
            fn = function() {
                return new String(string);
            };
        }
        var render = cache[filename] = function(data) {
            try {
                return new fn(data, filename) + "";
            } catch (e) {
                return showDebugInfo(e)();
            }
        };
        return render.prototype = fn.prototype = utils, render.toString = function() {
            return fn + "";
        }, render;
    }
    function showDebugInfo(e) {
        var type = "{Template Error}", message = e.stack || "";
        if (message) message = message.split("\n").slice(0, 2).join("\n"); else for (var name in e) message += "<" + name + ">\n" + e[name] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(type + "\n\n" + message), type;
        };
    }
    var cache = template.cache = {}, String = this.String, escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }, isArray = Array.isArray || function(obj) {
        return "[object Array]" === {}.toString.call(obj);
    }, utils = template.utils = {
        $helpers: {},
        $include: function(filename, data, from) {
            return filename = resolve(from, filename), renderFile(filename, data);
        },
        $string: toString,
        $escape: escapeHTML,
        $each: each
    }, helpers = template.helpers = utils.$helpers;
    template.get = function(filename) {
        return cache[filename.replace(/^\.\//, "")];
    }, template.helper = function(name, helper) {
        helpers[name] = helper;
    }, "function" == typeof define ? define(function() {
        return template;
    }) : "undefined" != typeof exports ? module.exports = template : this.template = template, 
    /*v:58*/
    template("carEdit", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), models = $data.models, $string = ($data.$value, 
        $data.$index, $utils.$string), drivenMode = $data.drivenMode, trans = $data.trans, $out = "";
        return $out += '<div class="col-sm-12"> <div class="row"> <h4>基础信息</h4> <div class="clearfix"> <div class="col-sm-6"> <div class="form-group"> <label for="carTitle" class="text-danger">新车标题</label> <input name="carTitle" id="carTitle" type="text" class="form-control upload-data"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label for="imageUpload" class="text-success">图片上传（限10张）</label> <a class="btn btn-success file-upload"> <span>上传图片</span> <input name="image" id="imageUpload" type="file"> </a> <div id="imageGallery"></div> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="modelsId" class="text-primary">车型</label> <select name="models.modelsId" id="modelsId" class="form-control upload-data"> <option selected value="">未选择</option> ', 
        $each(models, function($value) {
            $out += ' <option value="', $out += $string($value.id), $out += '">', $out += $string($value.name), 
            $out += "</option> ";
        }), $out += ' </select> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="color" class="text-primary">颜色</label> <input name="carColor" id="color" type="text" class="form-control upload-data" placeholder="白色、黑色、红色..."> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="seat" class="text-primary">座位数</label> <input name="carSeat" id="seat" type="number" class="form-control upload-data" placeholder="整数"> </div> </div> <div class="col-sm-6"> <div class="form-group"> <label for="drivenModelId" class="text-primary">驱动方式</label> <select name="drivemode.driveModeId" id="drivenModelId" class="form-control upload-data"> <option selected value="">未选择</option> ', 
        $each(drivenMode, function($value) {
            $out += ' <option value="', $out += $string($value.id), $out += '">', $out += $string($value.name), 
            $out += "</option> ";
        }), $out += ' </select> </div> </div> <div class="col-sm-6"> <div class="form-group"> <label for="transmissionId" class="text-primary">变速箱</label> <select name="gearbox.gearboxId" id="transmissionId" class="form-control upload-data"> <option selected value="">未选择</option> ', 
        $each(trans, function($value) {
            $out += ' <option value="', $out += $string($value.id), $out += '">', $out += $string($value.name), 
            $out += "</option> ";
        }), $out += ' </select> </div> </div> </div> </div> <div class="col-sm-12"> <div class="row"> <h4>发动机信息</h4> <div class="col-sm-4"> <div class="form-group"> <label for="engineModel" class="text-info">发动机型号</label> <input name="engine.engineModel" id="engineModel" type="text" class="form-control upload-data"> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="enviroStandards" class="text-info">环保标准</label> <input name="engine.enviroStandards" id="enviroStandards" type="text" class="form-control upload-data"> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="fuelGrade" class="text-info">燃油标号</label> <input name="engine.fuelGrade" id="fuelGrade" type="text" class="form-control upload-data"> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="engineEmissions" class="text-info">排量</label> <div class="input-group"> <input name="engine.engineEmissions" id="engineEmissions" type="number" class="form-control upload-data" placeholder="整数或小数"> <span class="input-group-addon">L</span> </div> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="enginePower" class="text-info">马力</label> <div class="input-group"> <input name="engine.enginePower" id="enginePower" type="number" class="form-control upload-data" placeholder="整数"> <span class="input-group-addon">匹</span> </div> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="engineCylinderNum" class="text-info">缸数</label> <div class="input-group"> <input name="engine.engineCylinderNum" id="engineCylinderNum" type="number" class="form-control upload-data" placeholder="整数"> <span class="input-group-addon">缸</span> </div> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="fuelConsume" class="text-info">油耗</label> <div class="input-group"> <input name="engine.fuelConsume" id="fuelConsume" type="text" class="form-control upload-data" placeholder="5.4~6.7"> <span class="input-group-addon">L</span> </div> </div> </div> <div class="col-sm-4"> <div class="form-group"> <label for="carGuarantee" class="text-info">保修</label> <div class="input-group"> <input name="carGuarantee" id="carGuarantee" type="text" class="form-control upload-data" placeholder="三年"> </div> </div> </div> <div class="col-sm-12"> <div class="row"> <h4>价格</h4> <div class="col-sm-6"> <div class="form-group"> <label for="guidPrice" class="text-danger">厂商指导价</label> <div class="input-group"> <input name="carGuidPrice" id="guidPrice" type="text" class="form-control upload-data" placeholder="88.08~99.09"> <span class="input-group-addon">万元</span> </div> </div> </div> </div> </div> </div> </div> <div class="col-sm-12"> <div class="row"> <h4>款型 <button id="carVerAdd" style="margin-left:15px" class=\'btn btn-info btn-sm\'> <span class="icon icon-plus"></span> 添加款型 </button> </h4> <table class="table"> <thead> <tr> <th>款型名称</th> <th>款型链接</th> <th>相对差价(万元)</th> <th>操作</th> </tr> </thead> <tbody id="carVerList"> <tr> <td> <input name="carverList[0].carVerInfo" type="text" class="form-control upload-data"> </td> <td> <input name="carverList[0].carVerLink" type="text" class="form-control upload-data" placeholder="http://www.xxx.com"> </td> <td> <input name="carverList[0].carPriceDiff" type="text" class="form-control upload-data" placeholder="-23.0"> </td> <td> <button class="delete btn btn-default btn-sm"><span class="icon icon-remove"></span></button> </td> </tr> </tbody> </table> </div> </div> ', 
        new String($out);
    }), /*v:1*/
    template("search/brand", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), brandList = $data.brandList, brandId = ($data.$value, 
        $data.$index, $data.brandId), $string = $utils.$string, $out = "";
        return $out += '<option selected value="">选择品牌</option> ', $each(brandList, function($value) {
            $out += " ", brandId == $value.id ? ($out += ' <option value="', $out += $string($value.id), 
            $out += '" selected>', $out += $string($value.name), $out += "</option> ") : ($out += ' <option value="', 
            $out += $string($value.id), $out += '">', $out += $string($value.name), $out += "</option> "), 
            $out += " ";
        }), $out += " ", new String($out);
    }), /*v:1*/
    template("search/factory", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), factoryList = $data.factoryList, $string = ($data.$value, 
        $data.$index, $utils.$string), $out = "";
        return $out += '<option selected value="">选择厂商</option> ', $each(factoryList, function($value) {
            $out += ' <option value="', $out += $string($value.factoryId), $out += '">', $out += $string($value.factoryName), 
            $out += "</option> ";
        }), $out += " ", new String($out);
    }), /*v:3*/
    template("search/search", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), brandList = $data.brandList, brandId = ($data.$value, 
        $data.$index, $data.brandId), $string = $utils.$string, factoryList = $data.factoryList, factoryId = $data.factoryId, seriesList = $data.seriesList, seriesId = $data.seriesId, $out = "";
        return $out += '<form action="/carSearch"> <div class="select"> <label for="brandSelect">品牌：</label> <select name="brandId" id="brandSelect" class="form-control"> <option selected value="">选择品牌</option> ', 
        $each(brandList, function($value) {
            $out += " ", brandId == $value.id ? ($out += ' <option value="', $out += $string($value.id), 
            $out += '" selected>', $out += $string($value.name), $out += "</option> ") : ($out += ' <option value="', 
            $out += $string($value.id), $out += '">', $out += $string($value.name), $out += "</option> "), 
            $out += " ";
        }), $out += ' </select> </div> <div class="select"> <label for="factorySelect">厂商：</label> <select name="factoryId" id="factorySelect" class="form-control"> <option selected value="">选择厂商</option> ', 
        $each(factoryList, function($value) {
            $out += " ", factoryId == $value.factoryId ? ($out += ' <option value="', $out += $string($value.factoryId), 
            $out += '" selected>', $out += $string($value.factoryName), $out += "</option> ") : ($out += ' <option value="', 
            $out += $string($value.factoryId), $out += '">', $out += $string($value.factoryName), 
            $out += "</option> "), $out += " ";
        }), $out += ' </select> </div> <div class="select"> <label for="seriesSelect">车系：</label> <select name="series.seriesId" id="seriesSelect" class="form-control upload-data"> <option selected value="">选择车系</option> ', 
        $each(seriesList, function($value) {
            $out += " ", seriesId == $value.id ? ($out += ' <option value="', $out += $string($value.id), 
            $out += '" selected>', $out += $string($value.name), $out += "</option> ") : ($out += ' <option value="', 
            $out += $string($value.id), $out += '">', $out += $string($value.name), $out += "</option> "), 
            $out += " ";
        }), $out += " </select> </div> </form> ", new String($out);
    }), /*v:1*/
    template("search/series", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), seriesList = $data.seriesList, seriesId = ($data.$value, 
        $data.$index, $data.seriesId), $string = $utils.$string, $out = "";
        return $out += '<option selected value="">选择车系</option> ', $each(seriesList, function($value) {
            $out += " ", seriesId == $value.id ? ($out += ' <option value="', $out += $string($value.id), 
            $out += '" selected>', $out += $string($value.name), $out += "</option> ") : ($out += ' <option value="', 
            $out += $string($value.id), $out += '">', $out += $string($value.name), $out += "</option> "), 
            $out += " ";
        }), $out += " ", new String($out);
    }), /*v:4*/
    template("user/index", '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> <meta name="renderer" content="webkit"> <meta http-equiv="Cache-Control" content="no-siteapp"> <title>登录 - 易诚买车后台管理系统</title> <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"> <link rel="stylesheet" href="/assets/admin/css/style.css"> </head> <body> <div id="app"> <div class="container" style="text-align: center;padding-top: 120px;padding-bottom:260px;"> <div class="notes animated fadeInUp"> <div class="form-notes"> <div class="form-header"> <div class="buckle-area"> <div class="buckle-wrapper"> <div class="buckle"> <div class="ring"></div> </div> </div> <div class="buckle-wrapper"> <div class="buckle"> <div class="ring"></div> </div> </div> <div class="buckle-wrapper"> <div class="buckle"> <div class="ring"></div> </div> </div> <div class="buckle-wrapper"> <div class="buckle"> <div class="ring"></div> </div> </div> <div class="buckle-wrapper"> <div class="buckle"> <div class="ring"></div> </div> </div> </div> </div> <div class="form-body"> <form id="loginForm"> <div class="form-group"> <input type="text" name="username" class="form-control input-lg" id="un" placeholder="账号" maxlength="16"> <input type="password" name="password" class="form-control input-lg" id="pwd" placeholder="密码" maxlength="16"> </div> <p id="tip" class="tip-text"></p> <input type="submit" id="login" class="btn btn-warning btn-lg btn-block">登录</input> </form> </div> </div> <div class="form-bottom"></div> </div> </div> </div> <script src="/assets/admin/js/public/base.js"></script> <script src="/assets/admin/js/page/user/login.js"></script> </body> </html> ');
}();