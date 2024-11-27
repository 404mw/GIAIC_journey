let fname :any = document.getElementById('fname');
let desig :any = document.getElementById('desig');
let desc :any = document.getElementById('desc');
let mail :any = document.getElementById('mail');
let phone :any = document.getElementById('phone');
let web :any = document.getElementById('web');
let locat :any = document.getElementById('location');
let pic :any = document.getElementById('pic');

let edutitle1 :any = document.getElementById('edutitle1');
let uni1 :any = document.getElementById('uni1');
let edutitle2 :any = document.getElementById('edutitle2');
let uni2 :any = document.getElementById('uni2');
let edutitle3 :any = document.getElementById('edutitle3');
let uni3 :any = document.getElementById('uni3');

// let lang1 :any = document.getElementById('lang1');
// let prof1 :any = document.getElementById('prof1');
// let lang2 :any = document.getElementById('lang2');
// let prof2 :any = document.getElementById('prof2');
// let lang3 :any = document.getElementById('lang3');
// let prof3 :any = document.getElementById('prof3');

let skl1 :any = document.getElementById('skl1');
let skl2 :any = document.getElementById('skl2');
let skl3 :any = document.getElementById('skl3');
let skl4 :any = document.getElementById('skl4');
let skl5 :any = document.getElementById('skl5');
let skl6 :any = document.getElementById('skl6');
let skl7 :any = document.getElementById('skl7');
let skl8 :any = document.getElementById('skl8');
let skl9 :any = document.getElementById('skl9');
let skl10 :any = document.getElementById('skl10');

let int1 :any = document.getElementById('int1');
let int2 :any = document.getElementById('int2');
let int3 :any = document.getElementById('int3');
let int4 :any = document.getElementById('int4');
let int5 :any = document.getElementById('int5');
let int6 :any = document.getElementById('int6');

let curwork :any = document.getElementById('curwork');
let curlocat :any = document.getElementById('curlocat');
let durwork :any = document.getElementById('durwork');
let curworkm1 :any = document.getElementById('curworkm1');
let curworkm2 :any = document.getElementById('curworkm2');
let curworkm3 :any = document.getElementById('curworkm3');
let curworkm4 :any = document.getElementById('curworkm4');
let curworkm5 :any = document.getElementById('curworkm5');
let pastwork :any = document.getElementById('pastwork');
let pastlocat :any = document.getElementById('pastlocat');
let durpast :any = document.getElementById('durpast');
let pastworkm1 :any = document.getElementById('pastworkm1');
let pastworkm2 :any = document.getElementById('pastworkm2');
let pastworkm3 :any = document.getElementById('pastworkm3');
let pastworkm4 :any = document.getElementById('pastworkm4');
let pastworkm5 :any = document.getElementById('pastworkm5');

let ccone :any = document.getElementById('ccone');
let cconeref :any = document.getElementById('cconeref');
let cctwo :any = document.getElementById('cctwo');
let cctworef :any = document.getElementById('cctworef');
let ccthree :any = document.getElementById('ccthree');
let ccthreeref :any = document.getElementById('ccthreeref');
let ccfour :any = document.getElementById('ccfour');
let ccfourref :any = document.getElementById('ccfouref');

let submitbtn :any = document.getElementById('submitbtn');
let form :any = document.getElementById('resform');



form?.addEventListener('submit',(s) => {
    s.preventDefault();

    localStorage.setItem('fname', fname.value)    
    localStorage.setItem('desig', desig.value)    
    localStorage.setItem('desc', desc.value)    
    localStorage.setItem('mail', mail.value)    
    localStorage.setItem('phone', phone.value)    
    localStorage.setItem('web', web.value)    
    localStorage.setItem('locat', locat.value)    

    localStorage.setItem('edutitle1', edutitle1.value)    
    localStorage.setItem('uni1', uni1.value)    
    localStorage.setItem('edutitle2', edutitle2.value)    
    localStorage.setItem('uni2', uni2.value)    
    localStorage.setItem('edutitle3', edutitle3.value)    
    localStorage.setItem('uni3', uni3.value)

    // localStorage.setItem('lang1', lang1.value)    
    // localStorage.setItem('prof1', prof1.value)
    // localStorage.setItem('lang2', lang2.value)    
    // localStorage.setItem('prof2', prof2.value)    
    // localStorage.setItem('lang3', lang3.value)    
    // localStorage.setItem('prof3', prof3.value)

    localStorage.setItem('skl1', skl1.value)
    localStorage.setItem('skl2', skl2.value)
    localStorage.setItem('skl3', skl3.value)
    localStorage.setItem('skl4', skl4.value)
    localStorage.setItem('skl5', skl5.value)
    localStorage.setItem('skl6', skl6.value)
    localStorage.setItem('skl7', skl7.value)
    localStorage.setItem('skl8', skl8.value)
    localStorage.setItem('skl9', skl9.value)
    localStorage.setItem('skl10', skl10.value)

    localStorage.setItem('int1', int1.value)
    localStorage.setItem('int2', int2.value)
    localStorage.setItem('int3', int3.value)
    localStorage.setItem('int4', int4.value)
    localStorage.setItem('int5', int5.value)
    localStorage.setItem('int6', int6.value)

    localStorage.setItem('curwork', curwork.value)
    localStorage.setItem('curlocat', curlocat.value)
    localStorage.setItem('durwork', durwork.value)
    localStorage.setItem('curworkm1', curworkm1.value)
    localStorage.setItem('curworkm2', curworkm2.value)
    localStorage.setItem('curworkm3', curworkm3.value)
    localStorage.setItem('curworkm4', curworkm4.value)
    localStorage.setItem('curworkm5', curworkm5.value)

    localStorage.setItem('pastwork', pastwork.value)
    localStorage.setItem('pastlocat', pastlocat.value)
    localStorage.setItem('durpast', durpast.value)
    localStorage.setItem('pastworkm1', pastworkm1.value)
    localStorage.setItem('pastworkm2', pastworkm2.value)
    localStorage.setItem('pastworkm3', pastworkm3.value)
    localStorage.setItem('pastworkm4', pastworkm4.value)
    localStorage.setItem('pastworkm5', pastworkm5.value)

    localStorage.setItem('ccone', ccone.value)
    localStorage.setItem('cconeref', cconeref.value)
    localStorage.setItem('cctwo', cctwo.value)
    localStorage.setItem('cctworef', cctworef.value)
    localStorage.setItem('ccthree', ccthree.value)
    localStorage.setItem('ccthreeref', ccthreeref.value)
    localStorage.setItem('ccfour', ccfour.value)
    localStorage.setItem('ccfourref', ccfourref.value)

    if(pic.files){
        let reader = new FileReader()
        reader.addEventListener('load', () => {
            let pfp:any = reader.result
            localStorage.setItem('pfp', pfp)
        })
        reader.readAsDataURL(pic.files[0])
    }

    
    window.location.href = "../resume/resume.html"
})