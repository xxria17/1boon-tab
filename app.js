const $listContent = document.getElementById('content');
let jsonFile = './recent.json'

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


function getFile(fileName) {
    const data = new XMLHttpRequest();
    data.open('GET', fileName);
    data.send();
    data.onload = function () {
        let item = JSON.parse(data.responseText);
        for (key in item) {
            const $img = document.createElement('img');
            $img.setAttribute("id", "img");
            $img.height = 200;
            $img.width = 200;
            $img.src = item[key].img;

            const $title = document.createElement('div');
            $title.setAttribute("id", "title");
            $title.innerText = item[key].title;

            const $cp = document.createElement('div');
            $cp.setAttribute("id", "cp");
            $cp.innerText = item[key].cp;

            const $container = document.createElement('div');
            $container.setAttribute("id","item");
            $container.appendChild($img);
            $container.appendChild($title);
            $container.appendChild($cp);


            $listContent.appendChild($container);
        }
    }
}