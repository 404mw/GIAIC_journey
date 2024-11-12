

//      Skills at left side
let skills = document.getElementById('skills')
let skills_btn = document.getElementById('skills_btn')

skills_btn?.addEventListener('click', () =>{
    skills!.classList.toggle('tschide')
})


//      Education at left side
let edu = document.getElementById('education')
let edu_btn = document.getElementById('education_btn')

edu_btn?.addEventListener('click', () =>{
    edu!.classList.toggle('tschide')
})


//      Languages at left side
let langs = document.getElementById('languages')
let langs_btn = document.getElementById('languages_btn')

langs_btn?.addEventListener('click', () =>{
    langs!.classList.toggle('tschide')
})


//      Interests at left side
let intes = document.getElementById('interests')
let intes_btn = document.getElementById('interests_btn')

intes_btn?.addEventListener('click', () =>{
    intes!.classList.toggle('tschide')
})


//      Work Experience at right side
let workxp = document.getElementById('workxp')
let workxp_btn = document.getElementById('workxp_btn')

workxp_btn?.addEventListener('click', () =>{
    workxp!.classList.toggle('tschide')
})


//      Conference at right side
let conf = document.getElementById('conf')
let conf_btn = document.getElementById('conf_btn')

conf_btn?.addEventListener('click', () =>{
    conf!.classList.toggle('tschide')
})


let print_btn = document.getElementById('print_btn')
print_btn?.addEventListener('click', () => {
    window.print()
})