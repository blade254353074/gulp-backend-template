$(function() {
    $('#reserveList')
        .on('click', '.detail', function(event) {
            event.preventDefault();
            $$.modal.show({
                title: '备注信息',
                content: $(this).data('text'),
                type: 'info'
            })
        })
        .on('click', '.accept', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $.ajax({
                url: '/keeper/reserve/' + id,
                type: 'POST',
                dataType: 'json',
                data: {
                    _method: 'PUT',
                    reserveStatus: 1
                }
            })
            .done(function(data) {
                if (data.state) {
                    window.location.reload();
                }
            });
        })
        .on('click', '.ignore', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $.ajax({
                url: '/keeper/reserve/' + id,
                type: 'POST',
                dataType: 'json',
                data: {
                    _method: 'PUT',
                    reserveStatus: 2
                }
            })
            .done(function(data) {
                if (data.state) {
                    window.location.reload();
                }
            });
        })
        .on('click', '.delete', function(event) {
            event.preventDefault();
            var $this = $(this),
                $tr = $this.closest('tr'),
                id = $tr.data('id');
            $.ajax({
                url: '/keeper/reserve/' + id,
                type: 'DELETE',
                dataType: 'json'
            })
            .done(function(data) {
                if (data.state) {
                    window.location.reload();
                }
            });
        });

});
