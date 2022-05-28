let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

const divZaSelect = document.querySelector('#zaSelect')
const select = document.createElement('select')
select.name = 'dino'
select.id = 'dino'

const option = document.createElement('option')
option.value = ''
option.innerText = ''
select.appendChild(option)

dinos.forEach(dino => {
    const option = document.createElement('option')
    option.value = dino.name
    option.innerText = dino.name
    select.appendChild(option)
})
divZaSelect.appendChild(select)

const body = document.body

const inputKupac = document.querySelector('#kupac')
const selectDino = document.querySelector('#dino')
const textNapomena = document.querySelector('#napomena')
const submitNaruci = document.querySelector('#naruci')
let porudzbine = []

submitNaruci.addEventListener('click', (e) => {
    e.preventDefault() 

    let kupac = inputKupac.value
    let napomena = textNapomena.value
    let izabraniDino = selectDino.value
    let cena

    dinos.forEach(dino => {
        if (izabraniDino === dino.name) {
            cena = dino.cena
        }
    })

    const divIspis = document.createElement('div')
    divIspis.classList.add('ispis')

    const pKupac = document.createElement('p')
    const pNapomena = document.createElement('p')
    const pDino = document.createElement('p')
    const pCena = document.createElement('p')
    const buttonObrisi = document.createElement('button')
    const linija = document.createElement('hr')
    linija.id = 'linijaUDivu'

    if (kupac != '' && izabraniDino != '') {

        let ime = kupac.split(' ')[0]
        let prezime = kupac.split(' ')[1]

        if (kupac.length >= 4 && ime[0].toUpperCase() === ime[0] && prezime[0].toUpperCase() === prezime[0]){

            const divOsnova = document.querySelector('#divOsnova')
            divOsnova.classList.remove('hidden')
            divOsnova.classList.add('vidljiv')

            pKupac.innerHTML = `<span class="zeleno">Купац: </span> ${kupac}`
            if (napomena != '') {
                pNapomena.innerHTML = `<span class="zeleno">Напомена: </span> ${napomena}`
            } else {
                pNapomena.innerHTML = `<span class="zeleno">Напомена: </span> /`
            }
            pDino.innerHTML = `<span class="zeleno">Диносаурус: </span> ${izabraniDino}`
            pCena.innerHTML = `<span class="zeleno">Цена: </span> ${cena}`
            buttonObrisi.textContent = 'Обриши'

            let porudzbina = {
                Kupac: kupac,
                Napomena: napomena,
                Dinosaurus: izabraniDino,
                Cena: cena
            }
            porudzbine.push(porudzbina)
            divIspis.append(pKupac, pNapomena, pDino, pCena, buttonObrisi, linija)
            body.appendChild(divIspis)

            buttonObrisi.addEventListener('click', (e) => {
                e.preventDefault()
                divIspis.classList.add('hidden')
                porudzbine.splice(porudzbine.indexOf(porudzbina), 1)
                divIspis.textContent = ''
                divOsnova.textContent = ''
            })

            setTimeout( () => {
                inputKupac.value = ''
                textNapomena.value = ''
                selectDino.value = ''
            }, 2000)
        } else {
            alert('Поље купац мора да садржи име и презиме, написане почетним великим словом!')
        }
    } else {
        alert('Поља купац и диносаурус су обавезна!')
    }
})

const buttonIspis = document.querySelector('#dugme')
buttonIspis.addEventListener('click', (e) => {
    
    if (porudzbine.length == 0) {
        console.log('Nema porudžbina.')
    } else {
        porudzbine.forEach(porudzbina => {
            console.log(porudzbina)
        })
    }
})