$(function() {

    $('#carListTable')
        .on('click', '.up', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $this.prop('disabled', true);
            $.ajax({
                url: '/keeper/car/' + id + '/switchLine',
                type: 'POST',
                dataType: 'json',
                data: {
                    _method: 'PUT',
                    carIsOnline: true
                },
            }).done(function(data) {
                if (data.state) {
                    $this.prop('disabled', true)
                        .replaceWith('<button class="down btn btn-sm btn-warning" type="button">下架</button>');
                    return;
                }
                $$.modal.show({
                    title: '提示',
                    content: '下架失败，请重试',
                    after: function() {
                        $this.prop('disabled', false);
                    }
                });
            });
        })
        .on('click', '.down', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $this.prop('disabled', true);
            $.ajax({
                url: '/keeper/car/' + id + '/switchLine',
                type: 'POST',
                dataType: 'json',
                data: {
                    _method: 'PUT',
                    carIsOnline: false
                },
            }).done(function(data) {
                if (data.state) {
                    $this.prop('disabled', true)
                        .replaceWith('<button class="up btn btn-sm btn-info" type="button">上架</button>');
                    return;
                }
                $$.modal.show({
                    title: '提示',
                    content: '上架失败，请重试',
                    after: function() {
                        $this.prop('disabled', false);
                    }
                });
            });
        })
        .on('click', '.delete', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $$.modal.show({
                title: '注意',
                content: '删除此条汽车信息后，该汽车的所有预约也将删除，请确认',
                type: 'confirm',
                confirm: function() {
                    $.ajax({
                        url: '/keeper/car/' + id,
                        type: 'DELETE',
                        dataType: 'json'
                    }).done(function(data) {
                        if (data.state) {
                            window.location.reload();
                        }
                        $$.modal.show({
                            title: '提示',
                            content: '删除失败，请重试'
                        });
                    });
                }
            });
        });
});
