<nav class="text-center">
    <div class="pagination">
    <#assign max = page + 4>
    <#if (total > 1)>
        <#if (page <= 1)>
        <li class="disabled">
            <a class="prev" aria-label="上一页">
                <span aria-hidden="true">&laquo; 上一页</span>
            </a>
        </li>
        <#else>
        <li>
            <a href="${link}${page - 1}" class="prev" aria-label="上一页">
                <span aria-hidden="true">&laquo; 上一页</span>
            </a>
        </li>
        </#if>
        <#if (total > 10)>
            <#if (page <= 5)>
                <#assign max = 10 p = 1>
            <#else>
                <#if (max >= total)>
                    <#assign max = total>
                </#if>
                <#assign p = page - 5>
            </#if>
            <#list p..max as index>
                <#if (page == p)>
                    <li class="active">
                        <a href="${link}${index}" class="page-link">
                            ${index} <span class="sr-only">(当前页)</span>
                        </a>
                    </li>
                <#else>
                    <li>
                        <a href="${link}${index}" class="page-link">
                            ${index}
                        </a>
                    </li>
                </#if>
            </#list>
        <#else>
            <#list 1..total as index>
                <#if (page == index)>
                    <li class="active">
                        <a href="${link}${index}" class="page-link">
                            ${index} <span class="sr-only">(当前页)</span>
                        </a>
                    </li>
                <#else>
                    <li>
                        <a href="${link}${index}" class="page-link">
                            ${index}
                        </a>
                    </li>
                </#if>
            </#list>
        </#if>
        <#if (page == total)>
            <li class="disabled">
                <a class="next" aria-label="下一页">
                    <span aria-hidden="true">下一页 &raquo;</span>
                </a>
            </li>
        <#else>
            <li>
                <a href="${link}${page + 1}" class="next" aria-label="下一页">
                    <span aria-hidden="true">下一页 &raquo;</span>
                </a>
            </li>
        </#if>
    </#if>
    </div>
</nav>
