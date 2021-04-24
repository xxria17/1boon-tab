const $list = document.getElementById('list');
const $moreBtn = document.querySelector('.btn');
const files = ['./popular.json', './view.json', './recent.json'];
var jsonFile = './popular.json';
// tab menu 선택

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        console.log(target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        target.classList.add('active')
        tab.classList.add('active')
    })
})

// json 파일 읽어오기
var data = new XMLHttpRequest();
data.open('GET', jsonFile);
data.send();
data.onload = function () {
    var popular = JSON.parse(data.responseText);
    for (key in popular) {

        loadData(popular, key);

        if ($list.childElementCount % 10 == 0) {
            break;
        }
    }

    console.log($list.childElementCount);
}

// 리스트의 각 아이템에 값 할당
function loadData(popular, key) {
    const $img = document.createElement('img');
    $img.setAttribute("id","img");
    $img.src = popular[key].img;

    const $title = document.createElement('div');
    $title.setAttribute("id","title");
    $title.innerText = popular[key].title;

    const $url = document.createElement('a');
    $url.setAttribute("href",popular[key].url);
    // $url.innerText = popular[key].url;

    const $cp = document.createElement('div');
    $cp.setAttribute("id","cp");
    $cp.innerText = popular[key].cp;

    const $whole = document.createElement('div');
    $whole.setAttribute("id","item");

    $whole.append($img);
    $whole.append($title);
    // $whole.append($url);
    $whole.append($cp);

    $list.append($whole);
}