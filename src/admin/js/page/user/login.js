$(function() {
    var $login = $('#login'),
        $form = $('#loginForm')
        $un = $('#un'),
        $pwd = $('#pwd')
        $tip = $('#tip');

    $login.on('click', function(event) {
        event.preventDefault();
        var $this = $(this);
        var un = $un.val().trim(),
            pwd = $pwd.val().trim();
        if (un === '' || pwd === '') {
            $tip.text('用户名或密码不能为空').show();
            return;
        }
        $.ajax({
            url: '/keeper/signIn',
            dataType: 'json',
            beforeSend: function(xhr) {
                $this.prop('disabled', true);
                $tip.hide();
                xhr.setRequestHeader('username', un);
                xhr.setRequestHeader('password', pwd);
            }
        }).done(function(data) {
            if (data.state) {
                window.location.href = '/keeper/';
                return;
            }
            $tip.text('用户名或密码错误').show();
            $this.prop('disabled', false);
        }).error(function() {
            $tip.text('网络连接错误').show();
            $this.prop('disabled', false);
        });

    });
});
