const current:any = document.getElementById('current');
const past:any = document.getElementById('past');

let fname :any = localStorage.getItem('fname')

window.addEventListener('load', () => {

//      Getting all values from Local Storage

    let desig :any = localStorage.getItem('desig')    
    let desc :any = localStorage.getItem('desc')    
    let mail :any = localStorage.getItem('mail')    
    let phone :any = localStorage.getItem('phone')    
    let web :any = localStorage.getItem('web')    
    let locat :any = localStorage.getItem('locat')    
    let pfp :any = localStorage.getItem('pfp')

    let edutitle1 :any = localStorage.getItem('edutitle1')    
    let uni1 :any = localStorage.getItem('uni1')    
    let edutitle2 :any = localStorage.getItem('edutitle2')    
    let uni2 :any = localStorage.getItem('uni2')    
    let edutitle3 :any = localStorage.getItem('edutitle3')    
    let uni3 :any = localStorage.getItem('uni3')

    // let lang1 :any = localStorage.getItem('lang1')    
    // let prof1 :any = localStorage.getItem('prof1')
    // let lang2 :any = localStorage.getItem('lang2')    
    // let prof2 :any = localStorage.getItem('prof2')    
    // let lang3 :any = localStorage.getItem('lang3')  
    // let prof3 :any = localStorage.getItem('prof3')

    let skl1 :any = localStorage.getItem('skl1')
    let skl2 :any = localStorage.getItem('skl2')
    let skl3 :any = localStorage.getItem('skl3')
    let skl4 :any = localStorage.getItem('skl4')
    let skl5 :any = localStorage.getItem('skl5')
    let skl6 :any = localStorage.getItem('skl6')
    let skl7 :any = localStorage.getItem('skl7')
    let skl8 :any = localStorage.getItem('skl8')
    let skl9 :any = localStorage.getItem('skl9')
    let skl10 :any = localStorage.getItem('skl10')

    let int1 :any = localStorage.getItem('int1')
    let int2 :any = localStorage.getItem('int2')
    let int3 :any = localStorage.getItem('int3')
    let int4 :any = localStorage.getItem('int4')
    let int5 :any = localStorage.getItem('int5')
    let int6 :any = localStorage.getItem('int6')

    let curwork :any = localStorage.getItem('curwork')
    let curlocat :any = localStorage.getItem('curlocat')
    let durwork :any = localStorage.getItem('durwork')
    let curworkm1 :any = localStorage.getItem('curworkm1')
    let curworkm2 :any = localStorage.getItem('curworkm2')
    let curworkm3 :any = localStorage.getItem('curworkm3')
    let curworkm4 :any = localStorage.getItem('curworkm4')
    let curworkm5 :any = localStorage.getItem('curworkm5')

    let pastwork :any = localStorage.getItem('pastwork')
    let pastlocat :any = localStorage.getItem('pastlocat')
    let durpast :any = localStorage.getItem('durpast')
    let pastworkm1 :any = localStorage.getItem('pastworkm1')
    let pastworkm2 :any = localStorage.getItem('pastworkm2')
    let pastworkm3 :any = localStorage.getItem('pastworkm3')
    let pastworkm4 :any = localStorage.getItem('pastworkm4')
    let pastworkm5 :any = localStorage.getItem('pastworkm5')

    let ccone :any = localStorage.getItem('ccone')
    let cconeref :any = localStorage.getItem('cconeref')
    let cctwo :any = localStorage.getItem('cctwo')
    let cctworef :any = localStorage.getItem('cctworef')
    let ccthree :any = localStorage.getItem('ccthree')
    let ccthreeref :any = localStorage.getItem('ccthreeref')
    let ccfour :any = localStorage.getItem('ccfour')
    let ccfourref :any = localStorage.getItem('ccfourref')



//      Replacing resume content with new values

//      ------------ info section ---------------
    let newname:any = document.getElementById('newname')
        newname.textContent = fname

    let newdesig:any = document.getElementById('newdesig')
        newdesig.textContent = desig

    let newdesc:any = document.getElementById('newdesc')
        newdesc.textContent = desc

    let newmain:any = document.getElementById('newmain')
        newmain.textContent = mail

    let newphone:any = document.getElementById('newphone')
        newphone.textContent = phone

    let newweb:any = document.getElementById('newweb')
        newweb.textContent = web

    let newlocat:any = document.getElementById('newlocat')
        newlocat.textContent = locat

    // let newname:any = document.getElementById('upload')
    //     newname.textContent = upload


//      ------------ Education section ---------------
    let newedut1:any = document.getElementById('newedut1')
    if (edutitle1) {
        newedut1.textContent = edutitle1;
    } else {
        newedut1.style.display = 'none';}

    let newuni1:any = document.getElementById('newuni1')
    if (uni1) {
        newuni1.textContent = uni1;
    } else {
        newuni1.style.display = 'none';}

    let newedut2:any = document.getElementById('newedut2')
    if (edutitle2) {
        newedut2.textContent = edutitle2;
    } else {
        newedut2.style.display = 'none';
    }

    let newuni2:any = document.getElementById('newuni2')
    if (uni2) {
        newuni2.textContent = uni2;
    } else {
        newuni2.style.display = 'none';}

    let newedut3:any = document.getElementById('newedut3')
    if (edutitle3) {
        newedut3.textContent = edutitle3;
    } else {
        newedut3.style.display = 'none';}

    let newuni3:any = document.getElementById('newuni3')
    if (uni3) {
        newuni3.textContent = uni3;
    } else {
        newuni3.style.display = 'none';}

//      ------------ Language section ---------------
    // let newlang1:any = document.getElementById('newlang1')
    //     newlang1.textContent = lang1
     
    // let newprof1:any = document.getElementById('newprof1')
    //     newprof1.textContent = prof1
     
    // let newlang2:any = document.getElementById('newlang2')
    //     newlang2.textContent = lang2
       
    // let newprof2:any = document.getElementById('newprof2')
    //     newprof2.textContent = prof2
       
    // let newlang3:any = document.getElementById('newlang3')
    //     newlang3.textContent = lang3
       
    // let newprof3:any = document.getElementById('newprof3')
    //     newprof3.textContent = prof3


//      ------------ Skills section ---------------
    let newskl1:any = document.getElementById('newskl1')
        if (skl1) {
        newskl1.textContent = skl1;
    } else {
        newskl1.style.display = 'none';}

    let newskl2:any = document.getElementById('newskl2')
        if (skl2) {
        newskl2.textContent = skl2;
    } else {
        newskl2.style.display = 'none';}

    let newskl3:any = document.getElementById('newskl3')
        if (skl3) {
        newskl3.textContent = skl3;
    } else {
        newskl3.style.display = 'none';}

    let newskl4:any = document.getElementById('newskl4')
    if (skl4) {
        newskl4.textContent = skl4;
    } else {
        newskl4.style.display = 'none';}

    let newskl5:any = document.getElementById('newskl5')
    if (skl5) {
        newskl5.textContent = skl5;
    } else {
        newskl5.style.display = 'none';}

    let newskl6:any = document.getElementById('newskl6')
        if (skl6) {
        newskl6.textContent = skl6;
    } else {
        newskl6.style.display = 'none';}

    let newskl7:any = document.getElementById('newskl7')
        if (skl7) {
        newskl7.textContent = skl7;
    } else {
        newskl7.style.display = 'none';}

    let newskl8:any = document.getElementById('newskl8')
        if (skl8) {
        newskl8.textContent = skl8;
    } else {
        newskl8.style.display = 'none';}

    let newskl9:any = document.getElementById('newskl9')
        if (skl9) {
        newskl9.textContent = skl9;
    } else {
        newskl9.style.display = 'none';}

    let newskl10:any = document.getElementById('newskl10')
        if (skl10) {
        newskl10.textContent = skl10;
    } else {
        newskl10.style.display = 'none';}

//      ------------ Interests section ---------------
    let newint1:any = document.getElementById('newint1')
    if (int1) {
        newint1.textContent = int1;
    } else {
        newint1.style.display = 'none';}

    let newint2:any = document.getElementById('newint2')
    if (int2) {
        newint2.textContent = int2;
    } else {
        newint2.style.display = 'none';}

    let newint3:any = document.getElementById('newint3')
    if (int3) {
        newint3.textContent = int3;
    } else {
        newint3.style.display = 'none';}

    let newint4:any = document.getElementById('newint4')
    if (int4) {
        newint4.textContent = int4;
    } else {
        newint4.style.display = 'none';}

    let newint5:any = document.getElementById('newint5')
    if (int5) {
        newint5.textContent = int5;
    } else {
        newint5.style.display = 'none';}

    let newint6:any = document.getElementById('newint6')
    if (int6) {
        newint6.textContent = int6;
    } else {
        newint6.style.display = 'none';}


//      -------- Work Experience section -----------
    let newcurwork:any = document.getElementById('newcurwork')
    if (curwork) {
        newcurwork.textContent = curwork;
    } else {
        newcurwork.style.display = 'none';}

    let newcurlocat:any = document.getElementById('newcurlocat')
        if (curlocat) {
        newcurlocat.textContent = curlocat;
    } else {
        newcurlocat.style.display = 'none';}

    let newdurwork:any = document.getElementById('newdurwork')
    if (durwork) {
        newdurwork.textContent = durwork;
    } else {
        newdurwork.style.display = 'none';}

    let newcurworkm1:any = document.getElementById('newcurworkm1')
    if (curworkm1) {
        newcurworkm1.textContent = curworkm1;
    } else {
        newcurworkm1.style.display = 'none';}

    let newcurworkm2:any = document.getElementById('newcurworkm2')
    if (curworkm2) {
        newcurworkm2.textContent = curworkm2;
    } else {
        newcurworkm2.style.display = 'none';}

    let newcurworkm3:any = document.getElementById('newcurworkm3')
    if (curworkm3) {
        newcurworkm3.textContent = curworkm3;
    } else {
        newcurworkm3.style.display = 'none';}

    let newcurworkm4:any = document.getElementById('newcurworkm4')
    if (curworkm4) {
        newcurworkm4.textContent = curworkm4;
    } else {
        newcurworkm4.style.display = 'none';}

    let newcurworkm5:any = document.getElementById('newcurworkm5')
    if (curworkm5) {
        newcurworkm5.textContent = curworkm5;
    } else {
        newcurworkm5.style.display = 'none';}


    let newpastwork:any = document.getElementById('newpastwork')
    if (pastwork) {
        newpastwork.textContent = pastwork;
    } else {
        newpastwork.style.display = 'none';
        past.style.display = 'none'
        past.style.overflow = 'none'}

    let newpastlocat:any = document.getElementById('newpastlocat')
    if (pastlocat) {
        newpastlocat.textContent = pastlocat;
    } else {
        newpastlocat.style.display = 'none';}

    let newdurpast:any = document.getElementById('newdurpast')
    if (durpast) {
        newdurpast.textContent = durpast;
    } else {
        newdurpast.style.display = 'none';}

    let newpastworkm1:any = document.getElementById('newpastworkm1')
    if (pastworkm1) {
        newpastworkm1.textContent = pastworkm1;
    } else {
        newpastworkm1.style.display = 'none';}

    let newpastworkm2:any = document.getElementById('newpastworkm2')
    if (pastworkm2) {
        newpastworkm2.textContent = pastworkm2;
    } else {
        newpastworkm2.style.display = 'none';}

    let newpastworkm3:any = document.getElementById('newpastworkm3')
    if (pastworkm3) {
        newpastworkm3.textContent = pastworkm3;
    } else {
        newpastworkm3.style.display = 'none';}

    let newpastworkm4:any = document.getElementById('newpastworkm4')
    if (pastworkm4) {
        newpastworkm4.textContent = pastworkm4;
    } else {
        newpastworkm4.style.display = 'none';}

    let newpastworkm5:any = document.getElementById('newpastworkm5')
    if (pastworkm5) {
        newpastworkm5.textContent = pastworkm5;
    } else {
        newpastworkm5.style.display = 'none';}


//      -------- Contribution section -----------
    let newccone:any = document.getElementById('newccone')
    if (ccone) {
        newccone.textContent = ccone;
    } else {
        newccone.style.display = 'none';}

    let newcconeref:any = document.getElementById('newcconeref')
    if (cconeref) {
        newcconeref.textContent = cconeref;
    } else {
        newcconeref.style.display = 'none';}

    let newcctwo:any = document.getElementById('newcctwo')
    if (cctwo) {
        newcctwo.textContent = cctwo;
    } else {
        newcctwo.style.display = 'none';}

    let newcctworef:any = document.getElementById('newcctworef')
    if (cctworef) {
        newcctworef.textContent = cctworef;
    } else {
        newcctworef.style.display = 'none';}

    let newccthree:any = document.getElementById('newccthree')
    if (ccthree) {
        newccthree.textContent = ccthree;
    } else {
        newccthree.style.display = 'none';}

    let newccthreeref:any = document.getElementById('newccthreeref')
    if (ccthreeref) {
        newccthreeref.textContent = ccthreeref;
    } else {
        newccthreeref.style.display = 'none';}

    let newccfour:any = document.getElementById('newccfour')
    if (ccfour) {
        newccfour.textContent = ccfour;
    } else {
        newccfour.style.display = 'none';}

    let newccfourref:any = document.getElementById('newccfourref')
    if (ccfourref) {
        newccfourref.textContent = ccfourref;
    } else {
        newccfourref.style.display = 'none';}

    let newpfp:any = document.getElementById('newpfp')
    newpfp.src = pfp
    
})






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
// let langs = document.getElementById('languages')
// let langs_btn = document.getElementById('languages_btn')

// langs_btn?.addEventListener('click', () =>{
//     langs!.classList.toggle('tschide')
// })


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


let edit_btn = document.getElementById('edit_btn')
edit_btn?.addEventListener('click', () => {
    window.history.back()
})


let share_btn = document.getElementById('share_btn')
let anc = document.getElementById('anc')
let uName;
if(fname){
    uName = fname.toLowerCase().replace(/\s+/g, '_')
} else{ uName = 'user'}

let baseURL = 'https://mw404resumebuilder.vercel.app/'
let uniqueURL = `${baseURL}?/${uName}`

share_btn?.addEventListener('click', () => {
    // anc?.setAttribute('href', uniqueURL)
    navigator.clipboard.writeText(uniqueURL).then(() => {
        alert('Link copied to clipboard')
    })
})