import { skills, redes, projetos_in_cards, BASE_PATH } from './bases.js'

const tags = document.querySelector('.tags')
const middleIndex = Math.ceil(skills.length / 2)
// dividir o array de skills em duas partes
const leftSkills = skills.slice(0, middleIndex)
const rightSkills = skills.slice(middleIndex)

/** Funções Dos Botões */
const btnVerProjetos = document.getElementById('btn-ver-projetos')
btnVerProjetos.href = '#projetos'

const btnsCurriculo = document.querySelectorAll('.donwload')
btnsCurriculo.forEach(btn => {
    btn.href = `${BASE_PATH}/assets/CV.pdf`
    btn.download = 'curriculo_fernando_guedes.pdf'
})

function createSkillsItems(skill) {
    const item = document.createElement('div')
    item.classList.add('skills-progress-item')

    const header = document.createElement('div')
    header.classList.add('skills-progress-header')

    const tecnology = document.createElement('span')
    tecnology.classList.add('tecnology')
    tecnology.textContent = skill.skill

    const percentage = document.createElement('span')
    percentage.classList.add('percentage')
    percentage.textContent = skill.percentage

    header.appendChild(tecnology)
    header.appendChild(percentage)

    const bar = document.createElement('div')
    bar.classList.add('bar-progress')

    const fill = document.createElement('div')
    fill.classList.add('bar-fill')
    fill.style.width = skill.percentage

    bar.appendChild(fill)

    item.appendChild(header)
    item.appendChild(bar)

    return item
}

const leftColumn = document.querySelector('.skills-column.left')
const rightColumn = document.querySelector('.skills-column.right')

leftSkills.forEach((skill) => {
    leftColumn.appendChild(createSkillsItems(skill))
})

rightSkills.forEach((skill) => {
    rightColumn.appendChild(createSkillsItems(skill))
})

/** Criar badges */
function createTags(skill) {
    const tag = document.createElement('div')
    tag.classList.add('tag')

    tag.textContent = skill.skill

    return tag
}

skills.forEach((skill) => {
    tags.appendChild(createTags(skill))
})



/** Criação dos Cards de Redes Sociais */
const middleRedesIndex = Math.ceil(redes.length / 2)
const redesTop = redes.slice(0, middleRedesIndex)
const redesBottom = redes.slice(middleRedesIndex)

const topRedes = document.querySelector('.top')
const bottomRedes = document.querySelector('.bottom')

function buscarIcones(icon) {

    let rede_icon = document.createElement('img')
    rede_icon.src = icon
    rede_icon.alt = `Icone da ${icon.split('/').pop().split('.')[0]}`
    rede_icon.width = 24
    rede_icon.height = 24

    rede_icon.classList.add('icon-svg')

    return rede_icon
}

function configuracaoLink(link) {
    let link_array = link.split('/')
    if (link_array[link_array.length - 1].includes('@')) {
        return `/ ${link_array[0].split('@')[0]} `
    } else {
        return `/ ${link_array[link_array.length - 1]} `
    }
}

function resolveHref(rede) {
    if (rede.tipo === 'email') return `mailto:${rede.link} `
    return rede.link
}

function createCard(rede) {
    let card = document.createElement('div')
    card.classList.add('card-redes') //div mais externa

    let icon_container = document.createElement('div')
    icon_container.classList.add('icon-container')

    // elemento que será convertido em SVG pelo Lucide
    let rede_icon = buscarIcones(rede.icon)

    icon_container.appendChild(rede_icon)

    let card_redes_texts = document.createElement('div')
    card_redes_texts.classList.add('card-redes-texts')

    let card_header = document.createElement('span')
    card_header.classList.add('card-redes-header')
    card_header.textContent = rede.nome

    let link_rede = document.createElement('a')
    link_rede.classList.add('link-rede')
    link_rede.href = resolveHref(rede)
    link_rede.target = '_blank'
    link_rede.rel = 'noopener noreferrer'

    link_rede.textContent = configuracaoLink(rede.link)

    card_redes_texts.appendChild(card_header)
    card_redes_texts.appendChild(link_rede)

    // Anexa elementos ao card
    card.appendChild(icon_container)
    card.appendChild(card_redes_texts)

    let external_icon = document.createElement('img')
    external_icon.src = `${BASE_PATH}/assets/images/external-icon.svg`
    external_icon.alt = "Ícone de link externo"
    external_icon.width = 16
    external_icon.height = 16
    external_icon.classList.add('external-icon')
    card.appendChild(external_icon)

    return card
}

redesTop.forEach((rede) => {
    topRedes.appendChild(createCard(rede))
})

redesBottom.forEach((rede) => {
    bottomRedes.appendChild(createCard(rede))
})



/** FOOTER */

let footerContainer = document.querySelector('.links-container-footer');
redes.forEach((rede) => {
    let link_rede = document.createElement('a')
    link_rede.href = resolveHref(rede)
    link_rede.target = '_blank'
    link_rede.rel = 'noopener noreferrer'
    if (rede.tipo != 'email') {
        let img = document.createElement('img')
        img.src = rede.icon
        img.alt = rede.nome
        img.width = 24
        img.height = 24
        img.classList.add('icon-footer')
        link_rede.appendChild(img)
        if (img) {
            link_rede.appendChild(img)
        }
        else { link_rede.textContent = configuracaoLink(rede.icon) }
    }

    footerContainer.appendChild(link_rede)
})

/* Adicionar ícone de café no texto do rodapé */
let coffeeIcon = buscarIcones(`${BASE_PATH}/assets/images/coffee.svg`)
coffeeIcon.classList.add('coffee-icon')
let footerText = document.querySelector('.section-content')
footerText.style.textAlign = 'baseline'
footerText.appendChild(coffeeIcon)


/** Criar cards de projetos relevantes */
const CardProjectContentContainer = document.querySelector(".card-project-content-container");
const cardProjetctHeader = document.querySelector(".card-projetct-header")
const projectTitle = document.querySelector(".card-project-title");
const projectStars = document.querySelector("#qtd-stars");
const projectDescription = document.querySelector(".card-project-content");
const projectLink = document.querySelector(".github");


function createProjectCard(project) {
    const card = document.createElement('div')
    card.classList.add('card')

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')

    const image = document.createElement('img')
    image.setAttribute('src', project.image)

    const contentContainer = document.createElement('div')
    contentContainer.classList.add('card-project-content-container')

    const header = document.createElement('div')
    header.classList.add('card-projetct-header')

    const h3 = document.createElement('h3')
    h3.textContent = project.name
    header.appendChild(h3)

    const availiable = document.createElement('span')
    availiable.textContent = `⭐${project.stars} `
    header.appendChild(availiable)

    const description = document.createElement('p')
    description.classList.add('card-project-content')
    description.textContent = project.description

    const badgesContent = document.createElement('div')
    badgesContent.classList.add('tags')
    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    const buttonCard = document.createElement('button')
    buttonCard.classList.add('github')
    buttonCard.href = project.html_url
    buttonCard.target = '_blank'
    buttonCard.rel = 'noopener noreferrer'

    const githubIcon = document.createElement('img')
    githubIcon.classList.add('icon-svg')
    githubIcon.src = `${BASE_PATH}/assets/images/github.svg`
    githubIcon.alt = "Ícone do Github"
    githubIcon.width = 24
    githubIcon.height = 24

    const label = document.createElement('span')
    label.textContent = 'ver no github'

    const externalIcon = document.createElement('img')
    externalIcon.src = `${BASE_PATH}/assets/images/external-icon.svg`
    externalIcon.alt = "Ícone de link externo"
    externalIcon.width = 16
    externalIcon.height = 16
    externalIcon.classList.add('external')

    buttonCard.appendChild(githubIcon)
    buttonCard.appendChild(label)
    buttonCard.appendChild(externalIcon)

    cardFooter.appendChild(buttonCard)


    imageContainer.appendChild(image)

    contentContainer.appendChild(header)
    contentContainer.appendChild(description)
    contentContainer.appendChild(badgesContent)

    card.appendChild(imageContainer)
    card.appendChild(contentContainer)
    card.appendChild(cardFooter)
    return card;
}

const projectCards = document.querySelector(".project-cards")
projetos_in_cards.forEach(project => {
    const card = createProjectCard(project)
    projectCards.appendChild(card)
})


// lucide.createIcons()