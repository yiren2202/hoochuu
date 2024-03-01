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
        addOption(citySelect, '板橋區', '板橋區');
        addOption(citySelect, '三重區', '三重區');
        addOption(citySelect, '中和區', '中和區');
        addOption(citySelect, '永和區', '永和區');
        addOption(citySelect, '新莊區', '新莊區');
        addOption(citySelect, '新店區', '新店區');
        addOption(citySelect, '土城區', '土城區');
        addOption(citySelect, '蘆洲區', '蘆洲區');
        addOption(citySelect, '汐止區', '汐止區');
        addOption(citySelect, '樹林區', '樹林區');
        addOption(citySelect, '淡水區', '淡水區');
        addOption(citySelect, '鶯歌區', '鶯歌區');
        addOption(citySelect, '三峽區', '三峽區');
        addOption(citySelect, '瑞芳區', '瑞芳區');
        addOption(citySelect, '五股區', '五股區');
        addOption(citySelect, '泰山區', '泰山區');
        addOption(citySelect, '林口區', '林口區');
        addOption(citySelect, '深坑區', '深坑區');
        addOption(citySelect, '石碇區', '石碇區');
        addOption(citySelect, '坪林區', '坪林區');
        addOption(citySelect, '三芝區', '三芝區');
        addOption(citySelect, '石門區', '石門區');
        addOption(citySelect, '八里區', '八里區');
        addOption(citySelect, '平溪區', '平溪區');
        addOption(citySelect, '雙溪區', '雙溪區');
        addOption(citySelect, '貢寮區', '貢寮區');
        addOption(citySelect, '金山區', '金山區');
        addOption(citySelect, '萬里區', '萬里區');
        addOption(citySelect, '烏來區', '烏來區');
    } else if (country === '臺中市') {
        addOption(citySelect, '中區', '中區');
        addOption(citySelect, '東區', '東區');
        addOption(citySelect, '南區', '南區');
        addOption(citySelect, '西區', '西區');
        addOption(citySelect, '北區', '北區');
        addOption(citySelect, '西屯區', '西屯區');
        addOption(citySelect, '南屯區', '南屯區');
        addOption(citySelect, '北屯區', '北屯區');
        addOption(citySelect, '豐原區', '豐原區');
        addOption(citySelect, '東勢區', '東勢區');
        addOption(citySelect, '大甲區', '大甲區');
        addOption(citySelect, '清水區', '清水區');
        addOption(citySelect, '沙鹿區', '沙鹿區');
        addOption(citySelect, '梧棲區', '梧棲區');
        addOption(citySelect, '后里區', '后里區');
        addOption(citySelect, '神岡區', '神岡區');
        addOption(citySelect, '潭子區', '潭子區');
        addOption(citySelect, '大雅區', '大雅區');
        addOption(citySelect, '新社區', '新社區');
        addOption(citySelect, '石岡區', '石岡區');
        addOption(citySelect, '外埔區', '外埔區');
        addOption(citySelect, '大安區', '大安區');
        addOption(citySelect, '烏日區', '烏日區');
        addOption(citySelect, '大肚區', '大肚區');
        addOption(citySelect, '龍井區', '龍井區');
        addOption(citySelect, '霧峰區', '霧峰區');
        addOption(citySelect, '太平區', '太平區');
        addOption(citySelect, '大里區', '大里區');
        addOption(citySelect, '和平區', '和平區');
    } else if (country === '臺南市') {
        addOption(citySelect, '新營區', '新營區');
        addOption(citySelect, '鹽水區', '鹽水區');
        addOption(citySelect, '白河區', '白河區');
        addOption(citySelect, '柳營區', '柳營區');
        addOption(citySelect, '後壁區', '後壁區');
        addOption(citySelect, '東山區', '東山區');
        addOption(citySelect, '麻豆區', '麻豆區');
        addOption(citySelect, '下營區', '下營區');
        addOption(citySelect, '六甲區', '六甲區');
        addOption(citySelect, '官田區', '官田區');
        addOption(citySelect, '大內區', '大內區');
        addOption(citySelect, '佳里區', '佳里區');
        addOption(citySelect, '學甲區', '學甲區');
        addOption(citySelect, '西港區', '西港區');
        addOption(citySelect, '七股區', '七股區');
        addOption(citySelect, '將軍區', '將軍區');
        addOption(citySelect, '北門區', '北門區');
        addOption(citySelect, '新化區', '新化區');
        addOption(citySelect, '善化區', '善化區');
        addOption(citySelect, '新市區', '新市區');
        addOption(citySelect, '安定區', '安定區');
        addOption(citySelect, '山勢區', '山勢區');
        addOption(citySelect, '玉井區', '玉井區');
        addOption(citySelect, '楠西區', '楠西區');
        addOption(citySelect, '南化區', '南化區');
        addOption(citySelect, '左鎮區', '左鎮區');
        addOption(citySelect, '仁德區', '仁德區');
        addOption(citySelect, '歸仁區', '歸仁區');
        addOption(citySelect, '關廟區', '關廟區');
        addOption(citySelect, '龍崎區', '龍崎區');
        addOption(citySelect, '永康區', '永康區');
        addOption(citySelect, '東區', '東區');
        addOption(citySelect, '南區', '南區');
        addOption(citySelect, '北區', '北區');
        addOption(citySelect, '安南區', '安南區');
        addOption(citySelect, '安平區', '安平區');
        addOption(citySelect, '中西區', '中西區');
    } else if (country === '高雄市') {
        addOption(citySelect, '鹽埕區', '鹽埕區');
        addOption(citySelect, '鼓山區', '鼓山區');
        addOption(citySelect, '左營區', '左營區');
        addOption(citySelect, '楠梓區', '楠梓區');
        addOption(citySelect, '三民區', '三民區');
        addOption(citySelect, '新興區', '新興區');
        addOption(citySelect, '前金區', '前金區');
        addOption(citySelect, '苓雅區', '苓雅區');
        addOption(citySelect, '前鎮區', '前鎮區');
        addOption(citySelect, '旗津區', '旗津區');
        addOption(citySelect, '小港區', '小港區');
        addOption(citySelect, '鳳山區', '鳳山區');
        addOption(citySelect, '林園區', '林園區');
        addOption(citySelect, '大寮區', '大寮區');
        addOption(citySelect, '大樹區', '大樹區');
        addOption(citySelect, '大社區', '大社區');
        addOption(citySelect, '仁武區', '仁武區');
        addOption(citySelect, '鳥松區', '鳥松區');
        addOption(citySelect, '岡山區', '岡山區');
        addOption(citySelect, '橋頭區', '橋頭區');
        addOption(citySelect, '燕巢區', '燕巢區');
        addOption(citySelect, '田寮區', '田寮區');
        addOption(citySelect, '阿蓮區', '阿蓮區');
        addOption(citySelect, '路竹區', '路竹區');
        addOption(citySelect, '湖內區', '湖內區');
        addOption(citySelect, '茄萣區', '茄萣區');
        addOption(citySelect, '永安區', '永安區');
        addOption(citySelect, '彌陀區', '彌陀區');
        addOption(citySelect, '梓官區', '梓官區');
        addOption(citySelect, '旗山區', '旗山區');
        addOption(citySelect, '美濃區', '美濃區');
        addOption(citySelect, '六龜區', '六龜區');
        addOption(citySelect, '甲仙區', '甲仙區');
        addOption(citySelect, '杉林區', '杉林區');
        addOption(citySelect, '內門區', '內門區');
        addOption(citySelect, '茂林區', '茂林區');
        addOption(citySelect, '桃源區', '桃源區');
        addOption(citySelect, '那瑪夏區', '那瑪夏區');
    } else if (country === '宜蘭縣') {
        addOption(citySelect, '宜蘭市', '宜蘭市');
        addOption(citySelect, '羅東鎮', '羅東鎮');
        addOption(citySelect, '斯奧鎮', '斯奧鎮');
        addOption(citySelect, '頭城鎮', '頭城鎮');
        addOption(citySelect, '礁溪鄉', '礁溪鄉');
        addOption(citySelect, '壯圍鄉', '壯圍鄉');
        addOption(citySelect, '員山鄉', '員山鄉');
        addOption(citySelect, '冬山鄉', '冬山鄉');
        addOption(citySelect, '五結鄉', '五結鄉');
        addOption(citySelect, '三星鄉', '三星鄉');
        addOption(citySelect, '大同鄉', '大同鄉');
        addOption(citySelect, '南澳鄉', '南澳鄉');
    } else if (country === '桃園縣') {
        addOption(citySelect, '桃園市', '桃園市');
        addOption(citySelect, '中壢市', '中壢市');
        addOption(citySelect, '大溪鎮', '大溪鎮');
        addOption(citySelect, '楊梅鎮', '楊梅鎮');
        addOption(citySelect, '蘆竹鄉', '蘆竹鄉');
        addOption(citySelect, '大園鄉', '大園鄉');
        addOption(citySelect, '龜山鄉', '龜山鄉');
        addOption(citySelect, '八德市', '八德市');
        addOption(citySelect, '龍潭鄉', '龍潭鄉');
        addOption(citySelect, '平鎮市', '平鎮市');
        addOption(citySelect, '新屋鄉', '新屋鄉');
        addOption(citySelect, '觀音鄉', '觀音鄉');
        addOption(citySelect, '復興鄉', '復興鄉');
    } else if (country === '新竹縣') {
        addOption(citySelect, '竹北市', '竹北市');
        addOption(citySelect, '竹東鎮', '竹東鎮');
        addOption(citySelect, '新埔鎮', '新埔鎮');
        addOption(citySelect, '湖口鄉', '湖口鄉');
        addOption(citySelect, '新豐鄉', '新豐鄉');
        addOption(citySelect, '芎林鄉', '芎林鄉');
        addOption(citySelect, '橫山鄉', '橫山鄉');
        addOption(citySelect, '北埔鄉', '北埔鄉');
        addOption(citySelect, '寶山鄉', '寶山鄉');
        addOption(citySelect, '關西鎮', '關西鎮');
        addOption(citySelect, '峨嵋鄉', '峨嵋鄉');
        addOption(citySelect, '尖石鄉', '尖石鄉');
        addOption(citySelect, '五峰鄉', '五峰鄉');
    } else if (country === '苗栗縣') {
        addOption(citySelect, '苗栗市', '苗栗市');
        addOption(citySelect, '苑裡鎮', '苑裡鎮');
        addOption(citySelect, '通霄鎮', '通霄鎮');
        addOption(citySelect, '竹南鎮', '竹南鎮');
        addOption(citySelect, '頭份鎮', '頭份鎮');
        addOption(citySelect, '後龍鎮', '後龍鎮');
        addOption(citySelect, '卓蘭鎮', '卓蘭鎮');
        addOption(citySelect, '大湖鄉', '大湖鄉');
        addOption(citySelect, '公館鄉', '公館鄉');
        addOption(citySelect, '銅鑼鄉', '銅鑼鄉');
        addOption(citySelect, '南庄鄉', '南庄鄉');
        addOption(citySelect, '頭屋鄉', '頭屋鄉');
        addOption(citySelect, '三義鄉', '三義鄉');
        addOption(citySelect, '西湖鄉', '西湖鄉');
        addOption(citySelect, '造橋鄉', '造橋鄉');
        addOption(citySelect, '三灣鄉', '三灣鄉');
        addOption(citySelect, '獅潭鄉', '獅潭鄉');
        addOption(citySelect, '泰安鄉', '泰安鄉');
    } else if (country === '彰化縣') {
        addOption(citySelect, '彰化市', '彰化市');
        addOption(citySelect, '鹿港鎮', '鹿港鎮');
        addOption(citySelect, '和美鎮', '和美鎮');
        addOption(citySelect, '線西鄉', '線西鄉');
        addOption(citySelect, '伸港鄉', '伸港鄉');
        addOption(citySelect, '福興鄉', '福興鄉');
        addOption(citySelect, '秀水鄉', '秀水鄉');
        addOption(citySelect, '花壇鄉', '花壇鄉');
        addOption(citySelect, '芬園鄉', '芬園鄉');
        addOption(citySelect, '員林鎮', '員林鎮');
        addOption(citySelect, '溪湖鎮', '溪湖鎮');
        addOption(citySelect, '田中鎮', '田中鎮');
        addOption(citySelect, '大村鄉', '大村鄉');
        addOption(citySelect, '埔鹽鄉', '埔鹽鄉');
        addOption(citySelect, '埔心鄉', '埔心鄉');
        addOption(citySelect, '永靖鄉', '永靖鄉');
        addOption(citySelect, '社頭鄉', '社頭鄉');
        addOption(citySelect, '二水鄉', '二水鄉');
        addOption(citySelect, '北斗鎮', '北斗鎮');
        addOption(citySelect, '二林鎮', '二林鎮');
        addOption(citySelect, '田尾鄉', '田尾鄉');
        addOption(citySelect, '埤頭鄉', '埤頭鄉');
        addOption(citySelect, '芳苑鄉', '芳苑鄉');
        addOption(citySelect, '大城鄉', '大城鄉');
        addOption(citySelect, '竹塘鄉', '竹塘鄉');
        addOption(citySelect, '溪州鄉', '溪州鄉');
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