import { Octokit } from "https://esm.sh/@octokit/core";

export const skills = [
    { skill: "python", percentage: '85%' },
    { skill: "javascript", percentage: '85%' },
    { skill: "nodejs", percentage: '30%' },
    { skill: "data science", percentage: '15%' },
    { skill: "scrum", percentage: '50%' },
    { skill: "html/css", percentage: '75%' },
]

export const redes = [
    { nome: "linkedin", link: "https://www.linkedin.com/in/fernandoguedesdev", icon: "linkedin" },
    { nome: "instagram", link: "https://www.instagram.com/devguedes", icon: "instagram" },
    { nome: "github", link: "https://github.com/guedesindev", icon: "github" },
    { nome: "email", link: "guedesindev@gmail.com", icon: "mail", tipo: "email" },
]


const octokit = new Octokit();

const response = await octokit.request('GET /users/{username}/repos', {
    username: 'guedesindev',
    sort: 'updated',
    per_page: 100,
});


const projetos_relevantes = ['tic-tac-toe', 'Desistalador-inteligente-Python', 'ai_tutor_forge', 'treinador']
let projetos = {};
const projetos_in_cards = []

Object(response.data).forEach(project => {
    if (projetos_relevantes.includes(project.name)) {
        projetos["name"] = project.name;
        projetos["description"] = project.description;
        projetos["html_url"] = project.html_url;
        projetos["stars"] = project.stargazers_count;
        projetos["image"] = "../assets/images/project-" + project.name + ".png";
        projetos_in_cards.push(projetos);
        projetos = {}
    }
})


export { projetos_in_cards }




