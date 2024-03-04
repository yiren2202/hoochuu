// window.onload = () => {
    // Lottie Animation
    let cutebag__img_path = "../img/lottiefile/plastic_240302-2.json";
    let cutebag__img_index = 1;
    let cutebag__img_start = 1;
    let cutebag__img_end = 279;
    let lottieA = document.getElementById("lottieA");
    let animationA;

    animationA = lottie.loadAnimation({
        container: lottieA, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: cutebag__img_path // the path to the animation json
      });
      animationA.addEventListener('data_ready', () => {
        console.log('form animation data has loaded');
        animationA.goToAndStop(228, true);
        animationA.playSegments([228,267], true);
      });
      
// }
let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
let popupback = document.getElementById("popupback");
let popup2back = document.getElementById("popup2back");
popupback.addEventListener("click", function() {
    popup.style.display = "none";
});
popup2back.addEventListener("click", function() {
    popup2.style.display = "none";
});
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
    } else if (country === '南投縣') {
        addOption(citySelect, '南投市', '南投市');
        addOption(citySelect, '埔里鎮', '埔里鎮');
        addOption(citySelect, '草屯鎮', '草屯鎮');
        addOption(citySelect, '竹山鎮', '竹山鎮');
        addOption(citySelect, '集集鎮', '集集鎮');
        addOption(citySelect, '名間鄉', '名間鄉');
        addOption(citySelect, '鹿谷鄉', '鹿谷鄉');
        addOption(citySelect, '中寮鄉', '中寮鄉');
        addOption(citySelect, '魚池鄉', '魚池鄉');
        addOption(citySelect, '國姓鄉', '國姓鄉');
        addOption(citySelect, '水里鄉', '水里鄉');
        addOption(citySelect, '信義鄉', '信義鄉');
        addOption(citySelect, '仁愛鄉', '仁愛鄉');
    } else if (country === '雲林縣') {
        addOption(citySelect, '斗六市', '斗六市');
        addOption(citySelect, '斗南鎮', '斗南鎮');
        addOption(citySelect, '虎尾鎮', '虎尾鎮');
        addOption(citySelect, '西螺鎮', '西螺鎮');
        addOption(citySelect, '土庫鎮', '土庫鎮');
        addOption(citySelect, '北港鎮', '北港鎮');
        addOption(citySelect, '古坑鄉', '古坑鄉');
        addOption(citySelect, '大埤鄉', '大埤鄉');
        addOption(citySelect, '莿桐鄉', '莿桐鄉');
        addOption(citySelect, '林內鄉', '林內鄉');
        addOption(citySelect, '二崙鄉', '二崙鄉');
        addOption(citySelect, '崙背鄉', '崙背鄉');
        addOption(citySelect, '麥寮鄉', '麥寮鄉');
        addOption(citySelect, '東勢鄉', '東勢鄉');
        addOption(citySelect, '褒忠鄉', '褒忠鄉');
        addOption(citySelect, '臺西鄉', '臺西鄉');
        addOption(citySelect, '元長鄉', '元長鄉');
        addOption(citySelect, '四湖鄉', '四湖鄉');
        addOption(citySelect, '口湖鄉', '口湖鄉');
        addOption(citySelect, '水林鄉', '水林鄉');
    } else if (country === '嘉義縣') {
        addOption(citySelect, '太保市', '太保市');
        addOption(citySelect, '朴子市', '朴子市');
        addOption(citySelect, '布袋鎮', '布袋鎮');
        addOption(citySelect, '大林鎮', '大林鎮');
        addOption(citySelect, '民雄鄉', '民雄鄉');
        addOption(citySelect, '溪口鄉', '溪口鄉');
        addOption(citySelect, '新港鄉', '新港鄉');
        addOption(citySelect, '六腳鄉', '六腳鄉');
        addOption(citySelect, '東石鄉', '東石鄉');
        addOption(citySelect, '義竹鄉', '義竹鄉');
        addOption(citySelect, '鹿草鄉', '鹿草鄉');
        addOption(citySelect, '水上鄉', '水上鄉');
        addOption(citySelect, '中埔鄉', '中埔鄉');
        addOption(citySelect, '竹崎鄉', '竹崎鄉');
        addOption(citySelect, '梅山鄉', '梅山鄉');
        addOption(citySelect, '番路鄉', '番路鄉');
        addOption(citySelect, '大埔鄉', '大埔鄉');
        addOption(citySelect, '阿里山鄉', '阿里山鄉');
    } else if (country === '屏東縣') {
        addOption(citySelect, '屏東市', '屏東市');
        addOption(citySelect, '潮州鎮', '潮州鎮');
        addOption(citySelect, '東港鎮', '東港鎮');
        addOption(citySelect, '恆春鎮', '恆春鎮');
        addOption(citySelect, '萬丹鄉', '萬丹鄉');
        addOption(citySelect, '長治鄉', '長治鄉');
        addOption(citySelect, '麟洛鄉', '麟洛鄉');
        addOption(citySelect, '九如鄉', '九如鄉');
        addOption(citySelect, '里港鄉', '里港鄉');
        addOption(citySelect, '鹽埔鄉', '鹽埔鄉');
        addOption(citySelect, '高樹鄉', '高樹鄉');
        addOption(citySelect, '萬巒鄉', '萬巒鄉');
        addOption(citySelect, '內埔鄉', '內埔鄉');
        addOption(citySelect, '竹田鄉', '竹田鄉');
        addOption(citySelect, '新埤鄉', '新埤鄉');
        addOption(citySelect, '枋寮鄉', '枋寮鄉');
        addOption(citySelect, '新園鄉', '新園鄉');
        addOption(citySelect, '崁頂鄉', '崁頂鄉');
        addOption(citySelect, '林邊鄉', '林邊鄉');
        addOption(citySelect, '南州鄉', '南州鄉');
        addOption(citySelect, '佳冬鄉', '佳冬鄉');
        addOption(citySelect, '琉球鄉', '琉球鄉');
        addOption(citySelect, '車城鄉', '車城鄉');
        addOption(citySelect, '滿洲鄉', '滿洲鄉');
        addOption(citySelect, '枋山鄉', '枋山鄉');
        addOption(citySelect, '三地門鄉', '三地門鄉');
        addOption(citySelect, '霧臺鄉', '霧臺鄉');
        addOption(citySelect, '瑪家鄉', '瑪家鄉');
        addOption(citySelect, '泰武鄉', '泰武鄉');
        addOption(citySelect, '來義鄉', '來義鄉');
        addOption(citySelect, '春日鄉', '春日鄉');
        addOption(citySelect, '獅子鄉', '獅子鄉');
        addOption(citySelect, '牡丹鄉', '牡丹鄉');
    } else if (country === '臺東縣') {
        addOption(citySelect, '臺東市', '臺東市');
        addOption(citySelect, '成功鎮', '成功鎮');
        addOption(citySelect, '關山鎮', '關山鎮');
        addOption(citySelect, '卑南鎮', '卑南鎮');
        addOption(citySelect, '鹿野鄉', '鹿野鄉');
        addOption(citySelect, '池上鄉', '池上鄉');
        addOption(citySelect, '東河鄉', '東河鄉');
        addOption(citySelect, '長濱鄉', '長濱鄉');
        addOption(citySelect, '太麻里鄉', '太麻里鄉');
        addOption(citySelect, '大武鄉', '大武鄉');
        addOption(citySelect, '綠島鄉', '綠島鄉');
        addOption(citySelect, '海端鄉', '海端鄉');
        addOption(citySelect, '延平鄉', '延平鄉');
        addOption(citySelect, '金峰鄉', '金峰鄉');
        addOption(citySelect, '達仁鄉', '達仁鄉');
        addOption(citySelect, '蘭嶼鄉', '蘭嶼鄉');
    } else if (country === '花蓮縣') {
        addOption(citySelect, '花蓮市', '花蓮市');
        addOption(citySelect, '鳳林鎮', '鳳林鎮');
        addOption(citySelect, '玉里鎮', '玉里鎮');
        addOption(citySelect, '新城鄉', '新城鄉');
        addOption(citySelect, '吉安鄉', '吉安鄉');
        addOption(citySelect, '壽豐鄉', '壽豐鄉');
        addOption(citySelect, '光復鄉', '光復鄉');
        addOption(citySelect, '豐濱鄉', '豐濱鄉');
        addOption(citySelect, '瑞穗鄉', '瑞穗鄉');
        addOption(citySelect, '富里鄉', '富里鄉');
        addOption(citySelect, '秀林鄉', '秀林鄉');
        addOption(citySelect, '萬榮鄉', '萬榮鄉');
        addOption(citySelect, '卓溪鄉', '卓溪鄉');
    } else if (country === '澎湖縣') {
        addOption(citySelect, '馬公市', '馬公市');
        addOption(citySelect, '湖西鄉', '湖西鄉');
        addOption(citySelect, '白紗鄉', '白紗鄉');
        addOption(citySelect, '西嶼鄉', '西嶼鄉');
        addOption(citySelect, '望安鄉', '望安鄉');
        addOption(citySelect, '七美鄉', '七美鄉');
    } else if (country === '基隆市') {
        addOption(citySelect, '中正區', '中正區');
        addOption(citySelect, '七堵區', '七堵區');
        addOption(citySelect, '暖暖區', '暖暖區');
        addOption(citySelect, '仁愛區', '仁愛區');
        addOption(citySelect, '中山區', '中山區');
        addOption(citySelect, '安樂區', '安樂區');
        addOption(citySelect, '信義區', '信義區');
    } else if (country === '新竹市') {
        addOption(citySelect, '東區', '東區');
        addOption(citySelect, '北區', '北區');
        addOption(citySelect, '香山區', '香山區');
    } else if (country === '嘉義市') {
        addOption(citySelect, '東區', '東區');
        addOption(citySelect, '西區', '西區');
    } else if (country === '連江縣') {
        addOption(citySelect, '南竿鄉', '南竿鄉');
        addOption(citySelect, '北竿鄉', '北竿鄉');
        addOption(citySelect, '莒光鄉', '莒光鄉');
        addOption(citySelect, '東引鄉', '東引鄉');
    } else if (country === '金門縣') {
        addOption(citySelect, '金城鎮', '金城鎮');
        addOption(citySelect, '金湖鎮', '金湖鎮');
        addOption(citySelect, '金沙鎮', '金沙鎮');
        addOption(citySelect, '金寧鄉', '金寧鄉');
        addOption(citySelect, '烈嶼鄉', '烈嶼鄉');
        addOption(citySelect, '烏坵鄉', '烏坵鄉');


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
        popup2.style.display = 'block';
    })
    .catch(function (error) {
        console.log(error);
        popup.style.display = 'block';
    });
});