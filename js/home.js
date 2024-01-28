








let projects = [
  {
    name: "My Portofolio",
    linkImg :"/img/mypor.png",
    link :"#",
    skils: [
      '/img/icon-frontend/icons8-html-5-480.png',
      '/img/icon-frontend/icons8-sass-avatar-480.png',
      '/img/icon-frontend/nextjs.png']},
  {
    name: "setup",
    linkImg :"/img/setup.png",
    link :"https://myportofolio-three.vercel.app/",
    skils: [
      '/img/icon-frontend/icons8-html-5-480.png',
      '/img/icon-frontend/icons8-sass-avatar-480.png',
      './img/icon-frontend/icons8-javascript-480.png']},
  {
    name: "Product Management System",
    linkImg :"/img/crud.png",
    link :"https://product-management-system-plum.vercel.app/",
    skils: [
      '/img/icon-frontend/icons8-html-5-480.png',
      './img/icon-frontend/icons8-css-480.png',
      '/img/icon-frontend/icons8-javascript-480.png']},
  {
    name: "Workspace",
    linkImg :"/img/worksp.png",
    link :"https://github.com/mohamad-fawzy/Workspace",
    skils: [
      '/img/icon-frontend/icons8-html-5-480.png',
      '/img/icon-frontend/icons8-css-480.png',]},
  {
    name: "iphon 13 pro max",
    linkImg :"/img/phon.png",
    link :"https://mohamad-fawzy.github.io/iphon-13-pro-max/",
    skils: [
      '/img/icon-frontend/icons8-html-5-480.png',
      '/img/icon-frontend/icons8-css-480.png',
      '/img/icon-frontend/icons8-javascript-480.png']},
  {
    name: "Digital Marketing Agency",
    linkImg :"/img/d-m.png",
    link :"https://digital-marketing-agency-pi.vercel.app/",
    skils: [
      '/img/icon-frontend/icons8-html-5-480.png',
      '/img/icon-frontend/icons8-sass-avatar-480.png',
      '/img/icon-frontend/icons8-javascript-480.png']},
]

function pro (){

  let elem = ""
  for (let i = 0 ; i < projects.length ; i++ ){
    elem += `
    <div class="one-pro" >
        <h6>${projects[i].name}</h6>
        <a href=${projects[i].link}><img src=${projects[i].linkImg} alt=""></a>
        <div class="pro-tools" id="proTools" >
          <img src=${projects[i].skils[0]} alt="">
          <img src=${projects[i].skils[1]} alt="">
          <img src=${projects[i].skils[2]} alt="">
          <img src=${projects[i].skils[3]} alt="">
        </div>
    </div>
    `
  }
  // function tool (){
  //   let iconTools=''
  //   for (let a = 0 ; a < projects[a].skils[a].length; a++ ){
  //     iconTools += ` <img src='/img/icon-frontend/icons8-html-5-480.png' alt=""> `
  //   }  
  // }

    document.getElementById('onePro').innerHTML = elem
    document.getElementById('proTools').innerHTML = iconTools
}

pro()
// tool()