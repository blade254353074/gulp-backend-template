<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">
                <img alt="Brand" src="/assets/index/imgs/logo.png">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="car-collapse">
            <ul class="nav navbar-nav">
                <li>
                    <#if (headerName?? && headerName == "index")>
                        <a href="/" class="active">新车</a>
                    <#else>
                        <a href="/">新车</a>
                    </#if>
                </li>
                <li><a href="http://www.taoche.com/">二手车</a></li>
            </ul>
            <div class="navbar-form navbar-left" role="search">
                <div id="carSearch" class="search"></div>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <#if (headerName?? && headerName == "about")>
                        <a  href="/page?res=/index/us/about" class="active">关于我们</a>
                    <#else>
                        <a href="/page?res=/index/us/about">关于我们</a>
                    </#if>
                </li>
                <li>
                    <#if (headerName?? && headerName == "contact")>
                        <a  href="/page?res=/index/us/contact" class="active">联系我们</a>
                    <#else>
                        <a href="/page?res=/index/us/contact">联系我们</a>
                    </#if>
                </li>
            </ul>
        </div>
    </div>
</nav>
