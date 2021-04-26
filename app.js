const $listContent = document.getElementById('content');
const $moreBtn = document.querySelector('.btn');
let jsonFile = './recent.json'
let count = 10;
let arr = [];

getFile(jsonFile);

//tab menu
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        while ($listContent.hasChildNodes()) {
            $listContent.removeChild($listContent.firstChild);
        }
        count = 10;
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
    jsonFile = './' +  event.currentTarget.getAttribute("id") + '.json';
    getFile(jsonFile);
}

// json 파일 불러오기
function getFile(fileName) {
    const data = new XMLHttpRequest();
    data.open('GET', fileName);
    data.send();
    data.onload = function () {
        let item = JSON.parse(data.responseText);
        for (key in item) {

            const $id = item[key].id;
            if (arr.includes($id)) {
                continue;
            }
            arr.push($id);

            const $img = document.createElement('img');
            $img.setAttribute("id", "img");
            $img.height = 200;
            $img.width = 200;
            $img.src = item[key].img;

            const $title = document.createElement('div');
            $title.setAttribute("id", "title");
            $title.innerText = item[key].title;

            const $url = document.createElement('a');
            $url.setAttribute("id", "url");
            $url.href = item[key].url;

            const $cp = document.createElement('div');
            $cp.setAttribute("id", "cp");
            $cp.innerText = item[key].cp;

            const $container = document.createElement('div');
            $container.setAttribute("id","item");

            $url.appendChild($img);
            $url.appendChild($title);
            $url.appendChild($cp);

            $container.appendChild($url);

            $listContent.appendChild($container);

            if ($listContent.childElementCount === count) {
                break;
            }
        }
    }
}

// 더보기버튼 (10개씩 불러오기)
$moreBtn.addEventListener('click', function (){
    count += 10;
    getFile(jsonFile);
})


