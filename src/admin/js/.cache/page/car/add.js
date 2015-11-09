$(function() {

    var $seriesSelect = $('#seriesSelect'),
        $submit = $('#submit');

    $seriesSelect.on('change', function() {
        $submit.prop('disabled', !this.value);
    });
    var $imageGallery = $('#imageGallery'),
        $imageUpload = $('#imageUpload'),
        $uploadWrapper = $imageUpload.parent('a'),
        imgNum = 0;
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
    var index = 1;
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
        console.log(dataObj);
        $this.prop('disabled', true).text('正在提交').addClass('sending');
        $.ajax({
            url: '/keeper/car/add',
            type: 'post',
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
