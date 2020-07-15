
const tabs = document.querySelectorAll('.tab')
const tabby = document.querySelector('.tabby-container')
const tabContents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        const target = tab.dataset.target
        const content = tabby.querySelector("#" + target)

        tabs.forEach(t => t.classList.remove('is-selected'))
        tab.classList.add('is-selected')

        tabContents.forEach(c => c.classList.remove('is-selected'))
        content.classList.add('is-selected')
    })
})