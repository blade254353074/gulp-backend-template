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
    /*v:4*/
    template("car/detail", '<fieldset> <form id="reserveForm" action="detail_submit"> <div class="form-horizontal"> <div class="form-group"> <label for="name" class="col-sm-2 control-label">姓名：</label> <div class="col-sm-9"> <input name="reserveName" type="text" class="form-control data-upload" id="name" placeholder="请填写姓名"> </div> </div> <div class="form-group"> <label for="phone" class="col-sm-2 control-label">手机：</label> <div class="col-sm-6"> <input name="reservePhone" type="tel" class="form-control data-upload" id="phone" placeholder="请输入手机号码" maxlength="11"> </div> <div class="col-sm-4"> <button id="getCaptcha" class="btn btn-primary">获取校验码</button> </div> </div> <div class="form-group"> <label for="captcha" class="col-sm-2 control-label">校验码：</label> <div class="col-sm-9"> <input name="captcha" type="text" class="form-control data-upload" id="captcha" placeholder="请填写校验码" maxlength="6"> </div> </div> <div class="form-group"> <label for="remark" class="col-sm-2 control-label">备注：</label> <div class="col-sm-9"> <textarea name="reserveRemark" type="text" class="form-control data-upload" id="remark" placeholder="请输入备注信息(选填)" maxlength="500"></textarea> </div> </div> <p id="tip" class="tips help-block text-red"></p> </div> </form> </fieldset> '), 
    /*v:4*/
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
    }), /*v:5*/
    template("search/factory", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), factoryList = $data.factoryList, $string = ($data.$value, 
        $data.$index, $utils.$string), $out = "";
        return $out += '<option selected value="">选择厂商</option> ', $each(factoryList, function($value) {
            $out += ' <option value="', $out += $string($value.factoryId), $out += '">', $out += $string($value.factoryName), 
            $out += "</option> ";
        }), $out += " ", new String($out);
    }), /*v:15*/
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
        }), $out += ' </select> </div> <div class="select"> <label for="seriesSelect">车系：</label> <select name="seriesId" id="seriesSelect" class="form-control"> <option selected value="">选择车系</option> ', 
        $each(seriesList, function($value) {
            $out += " ", seriesId == $value.id ? ($out += ' <option value="', $out += $string($value.id), 
            $out += '" selected>', $out += $string($value.name), $out += "</option> ") : ($out += ' <option value="', 
            $out += $string($value.id), $out += '">', $out += $string($value.name), $out += "</option> "), 
            $out += " ";
        }), $out += ' </select> </div> <input id="searchSubmit" type="submit" value="搜索" class="btn btn-primary"> </form> ', 
        new String($out);
    }), /*v:4*/
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
    });
}();