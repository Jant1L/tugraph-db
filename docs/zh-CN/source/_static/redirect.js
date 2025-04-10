window.onload = function() {
    // 创建提示信息的容器
    var messageDiv = document.createElement('div');
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '0';
    messageDiv.style.left = '0';
    messageDiv.style.width = '100%';
    messageDiv.style.height = '100%';
    messageDiv.style.display = 'flex';
    messageDiv.style.justifyContent = 'center';
    messageDiv.style.alignItems = 'center';
    messageDiv.style.backgroundColor = '#add8e6';
    messageDiv.style.zIndex = '9999';
    messageDiv.innerText = 'TuGraph相关技术文档已转移至TuGraph官网，该链接后续将不再维护，将自动为您跳转至TuGraph官网文档页...';

    // 添加提示信息到页面
    document.body.appendChild(messageDiv);

    // 设置2秒后执行跳转
    setTimeout(function() {
        window.location.replace('https://tugraph.tech/docs/tugraph-db/zh/4.5.2/guide');
    }, 2000); // 2000毫秒 -> 2秒
};