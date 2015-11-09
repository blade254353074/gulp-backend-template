$(function() {
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
            $uploadWrapper.removeClass('sending disabled');
            if (!data.state) {
                return;
            }
            $imageGallery.html('<img src="' + data.url + '" class="img-thumbnail upload-data-img">');
        }
    });

    var um = UM.getEditor('ueditor');

    function getContent() {
        return um.getContent();
    }
    $('#newsSubmit').on('click', function(event) {
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
            if (dataObj['fnewsCover']) {
                dataObj['fnewsCover'] += ';' + imgUrl;
            } else {
                dataObj['fnewsCover'] = imgUrl;
            }
        });
        if ($('.upload-data-img').length === 0) {
            dataBool = false;
        }
        var editorText = getContent();
        if (editorText) {
            dataObj['fnewsContent'] = editorText;
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
            url: '/keeper/fnews/add',
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
                console.log("success");
                //window.location.reload();
            } else {
                alert('提交失败');
                $this.text('提交表单').removeClass('sending').prop('disabled', false);
            }
        });
    });

});
