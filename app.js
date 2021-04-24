
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

