const navlogo = document.querySelector('#navbar_logo');

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#homepage')
    const aboutMenu = document.querySelector('#aboutpage')
    const workoutsMenu = document.querySelector('#workoutspage')
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 400)
    {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400)
    {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        workoutsMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 2000)
    {
        workoutsMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }   

    if((elem) && window.innerWidth < 960 && scrollPos < 600 || elem)
    {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)