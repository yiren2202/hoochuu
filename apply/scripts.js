// 获取复选框和文本输入框的引用
const otherCheckbox = document.getElementById('other');
const otherTextInput = document.getElementById('other-text');

// 监听复选框的状态变化事件
otherCheckbox.addEventListener('change', function() {
    // 如果复选框被选中，则显示输入框；否则隐藏输入框
    if (otherCheckbox.checked) {
        otherTextInput.style.display = 'inline-block';
    } else {
        otherTextInput.style.display = 'none';
    }
});

document.getElementById('city').addEventListener('change', function() {
    var country = this.value;
    var citySelect = document.getElementById('county');

    // Clear existing options
    citySelect.innerHTML = '';

    // Populate new options based on the selected country
    if (country === '臺北市') {
        addOption(citySelect, '松山區', '松山區');
        addOption(citySelect, '信義區', '信義區');
        addOption(citySelect, '大安區', '大安區');
        addOption(citySelect, '中山區', '中山區');
        addOption(citySelect, '中正區', '中正區');
        addOption(citySelect, '大同區', '大同區');
        addOption(citySelect, '萬華區', '萬華區');
        addOption(citySelect, '文山區', '文山區');
        addOption(citySelect, '南港區', '南港區');
        addOption(citySelect, '內湖區', '內湖區');
        addOption(citySelect, '士林區', '士林區');
        addOption(citySelect, '北投區', '北投區');
    } else if (country === '新北市') {
        addOption(citySelect, '三重區', '三重區');
        addOption(citySelect, '新莊區', '新莊區');
    }
});

// Function to add options to a select element
function addOption(selectElement, text, value) {
    var option = document.createElement('option');
    option.textContent = text;
    option.value = value;
    selectElement.appendChild(option);
}

document.getElementById('data').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单数据
    var formData = new FormData(event.target);
    var formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });

    // 将数据转换为 JSON 格式
    var jsonData = JSON.stringify(formObject);
    console.log(jsonData);
    // // 创建一个 Blob 对象
    // var blob = new Blob([jsonData], { type: 'application/json' });

    // // 创建一个 a 标签，并设置下载属性
    // var link = document.createElement('a');
    // link.href = URL.createObjectURL(blob);
    // link.download = 'form_data.json';

    // // 触发点击事件，下载 JSON 文件
    // link.click();

    // Send a POST request
    axios({
        method: 'post',
        url: '/users',
        baseURL: 'https://www.hoochuupaper.com/app/api/event/catchad/hoochuu202402/',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
        },
        data: jsonData
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});