// HEADER TO APPEAR ON SCROLL

function headerOnScroll() {
    const header = document.querySelector('header')
    let scrollValue = window.scrollY
    if (scrollValue < 30) {
        header.classList.remove('header-on-scroll')
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.style.color = '#fff'
        })
        document.querySelector('.brand-name').style.display = 'none'
    } else {
        header.classList.add('header-on-scroll')
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.style.color = '#414f6b'
        })
        document.querySelector('.brand-name').style.display = 'flex'
    }
}

window.addEventListener('scroll', headerOnScroll)

// CAROUSEL 

const slider1 = document.querySelector('#slider1')
const slider2 = document.querySelector('#slider2')
const slider3 = document.querySelector('#slider3')
const sliders = [slider1, slider2, slider3]
const imgSection = document.querySelector('.img-section')

slider1.addEventListener('click', () => {
    imgSection.style.alignItems = 'flex-start'
    sliders.forEach(slider => {
        slider.style.backgroundColor = '#636d81'
    })
    slider1.style.backgroundColor = '#fff'
})

slider2.addEventListener('click', () => {
    imgSection.style.alignItems = 'center'
    sliders.forEach(slider => {
        slider.style.backgroundColor = '#636d81'
    })
    slider2.style.backgroundColor = '#fff'
})

slider3.addEventListener('click', () => {
    imgSection.style.alignItems = 'flex-end'
    sliders.forEach(slider => {
        slider.style.backgroundColor = '#636d81'
    })
    slider3.style.backgroundColor = '#fff'
})

// MOUNTAINS BACKGROUND AND SCHEDULE

const mountain1 = document.querySelector('.mountain1')
const mountain2 = document.querySelector('.mountain2')
const mountainContent = document.querySelector('.mountain-content')

const scheduleH2 = document.querySelector('#schedule-h2')
const date1 = document.querySelector('.date1')
const date2 = document.querySelector('.date2')
const date3 = document.querySelector('.date3')
const date4 = document.querySelector('.date4')
const journey1 = document.querySelector('.journey1')
const journey2 = document.querySelector('.journey2')

mountain1.addEventListener('click', () => {
    mountainContent.style.background = 'url("./img/background-2.png")'
    mountainContent.style.backgroundRepeat = 'no-repeat'
    mountainContent.style.backgroundSize = 'cover'
    mountainContent.style.backgroundPosition = 'center'
    scheduleH2.style.fontWeight = '400'
    date1.textContent = '25 Nov 2016'
    date2.textContent = '28 Nov 2016'
    date3.textContent = '18 Dic 2016'
    date4.textContent = '7 Jan 2017'
    journey1.style.marginBottom = '0.7em'
    journey2.style.marginBottom = '1.5em'
})

mountain2.addEventListener('click', () => {
    mountainContent.style.background = 'url("./img/background-3.png")'
    mountainContent.style.backgroundRepeat = 'no-repeat'
    mountainContent.style.backgroundSize = 'cover'
    mountainContent.style.backgroundPosition = 'center'
    scheduleH2.style.fontWeight = '600'
    date1.textContent = '17 Nov 2016'
    date2.textContent = '13 Dec 2016'
    date3.textContent = '28 Dec 2016'
    date4.textContent = '9 Feb 2017'
    journey1.style.marginBottom = '1.5em'
    journey2.style.marginBottom = '0.7em'
})

// TRANSITION