$(function() {
    var selectData = {
        models: [{
            id: '0001',
            name: '货车'
        }, {
            id: '0002',
            name: '皮卡'
        }, {
            id: '0003',
            name: '面包车'
        }, {
            id: '0004',
            name: '房车'
        }, {
            id: '0005',
            name: '小型车'
        }, {
            id: '0006',
            name: '微型车'
        }, {
            id: '0007',
            name: '紧凑型车'
        }, {
            id: '0008',
            name: '中等型车'
        }, {
            id: '0009',
            name: '高级型车'
        }, {
            id: '0010',
            name: '豪华型车'
        }, {
            id: '0011',
            name: '三厢型车'
        }, {
            id: '0012',
            name: 'CDV'
        }, {
            id: '0013',
            name: 'MPV'
        }, {
            id: '0014',
            name: 'SUV'
        }],
        trans: [{
            id: '0001',
            name: '手动'
        }, {
            id: '0002',
            name: '半自动（AMT）'
        }, {
            id: '0003',
            name: '自动（AT）'
        }, {
            id: '0004',
            name: '手自一体'
        }, {
            id: '0005',
            name: '无极变速（CVT）'
        }, {
            id: '0006',
            name: '双离合（DSG）'
        }, {
            id: '0007',
            name: '其他'
        }],
        drivenMode: [{
            id: '0001',
            name: '前置前驱（FF）'
        }, {
            id: '0002',
            name: '前置后驱（FR）'
        }, {
            id: '0003',
            name: '前置四驱'
        }, {
            id: '0004',
            name: '中置后驱（MR）'
        }, {
            id: '0005',
            name: '中置四驱'
        }, {
            id: '0006',
            name: '后置后驱（RR）'
        }, {
            id: '0007',
            name: '后置四驱'
        }]
    };
    var modelsOption = '',
        drivenModelOption = '',
        transmissionOption = '';
    for (var i = 0; i < selectData.models.length; i++) {
        modelsOption += '<option value="' + selectData.models[i].id + '">' + selectData.models[i].name + '</option>';
    }
    for (var i = 0; i < selectData.drivenMode.length; i++) {
        drivenModelOption += '<option value="' + selectData.drivenMode[i].id + '">' + selectData.drivenMode[i].name + '</option>';
    }
    for (var i = 0; i < selectData.trans.length; i++) {
        transmissionOption += '<option value="' + selectData.trans[i].id + '">' + selectData.trans[i].name + '</option>';
    }
    $('#modelsId').append(modelsOption);
    $('#drivenModelId').append(drivenModelOption);
    $('#transmissionId').append(transmissionOption);

    var $seriesSelect = $('#seriesSelect'),
        $submit = $('#submit');

    $seriesSelect.on('change', function() {
        $submit.prop('disabled', !this.value);
    });
    var $imageGallery = $('#imageGallery'),
        $imageUpload = $('#imageUpload'),
        $uploadWrapper = $imageUpload.parent('a'),
        imgNum = $imageGallery.children('img').length;
    $imageUpload.ajaxfileupload({
        action: '/image/upload',
        onStart: function() {
            $imageUpload.prop('diaabled', true);
            $uploadWrapper.addClass('sending disabled');
        },
        onComplete: function(data) {
            if (imgNum < 9) {
                $imageUpload.prop('disabled', false);
                $uploadWrapper.removeClass('disabled');
            }
            $uploadWrapper.removeClass('sending');
            if (!data.state) {
                return;
            }
            $imageGallery.append('<img src="' + data.url + '" class="img-thumbnail upload-data-img">');
            imgNum++;
        }
    });

    var $carVerList = $('#carVerList');
    var index = $carVerList.children('tr').length;
    $('#carVerAdd').on('click', function(event) {
        event.preventDefault();
        html = '<tr><td><input name="carverList[' + index + '].carVerInfo" type="text" class="form-control upload-data"></td><td><input name="carverList[' + index + '].carVerLink" type="text" class="form-control upload-data" placeholder="http://www.xxx.com"></td><td><input name="carverList[' + index + '].carPriceDiff" type="text" class="form-control upload-data" placeholder="-23.0"></td><td><button class="delete btn btn-default btn-sm"><span class="icon icon-remove"></span></button></td></tr>';
        index++;
        $carVerList.append(html);
    });
    $carVerList.on('click', '.delete', function(event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });

    var um = UM.getEditor('ueditor');

    function getContent() {
        return um.getContent();
    }
    $submit.on('click', function(event) {
        event.preventDefault();
        var $this = $(this),
            dataBool = true,
            dataObj = {};
        var id = $this.data('id');

        $('.upload-data').each(function(idx, elem) {
            var $elem = $(elem),
                text = $elem.val().trim();
            if (text == '') {
                dataBool = false;
                return;
            }
            dataObj[$elem.attr('name')] = text;
        });
        $('.upload-data-img').each(function(idx, elem) {
            var $elem = $(elem),
                imgUrl = $elem.attr('src').trim();
            if (imgUrl == '') {
                dataBool = false;
                return;
            }
            if (dataObj['images']) {
                dataObj['images'] += ';' + imgUrl;
            } else {
                dataObj['images'] = imgUrl;
            }
        });
        if ($('.upload-data-img').length === 0) {
            dataBool = false;
        }
        var editorText = getContent();
        if (editorText) {
            dataObj['carDescription'] = editorText;
        } else {
            dataBool = false;
        }
        if (!dataBool) {
            alert('信息未填写完整');
            return;
        }
        dataObj['_method'] = 'PUT';
        console.log(dataObj);
        $this.prop('disabled', true).text('正在提交').addClass('sending');
        $.ajax({
            url: '/keeper/car/' + id,
            type: 'POST',
            dataType: 'json',
            data: dataObj,
        }).fail(function() {
            alert('提交失败, 请重试');
            $this.prop('disabled', false).text('提交新闻').removeClass('sending');
            console.log("error");
        }).done(function(data) {
            if (data.state) {
                $this.text('提交成功').removeClass('sending');
                $$.modal.show({
                    title: '提示',
                    content: '提交成功，点击确定跳转到列表页面',
                    type: 'info',
                    confirm: function() {
                        window.location.href = '/keeper/car/list/1';
                    }
                });
            } else {
                $$.modal.show({
                    title: '提示',
                    content: '提交失败，请重试',
                    type: 'info'
                });
                $this.text('提交表单').removeClass('sending').prop('disabled', false);
            }
        });
    });

});
