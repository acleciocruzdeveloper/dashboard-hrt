const nav = document.getElementsByTagName('nav')
const topoNav = nav.offsetTop

window.onscroll = fixarMenuNoTopo()
fixarMenuNoTopo()

function fixarMenuNoTopo() {
  if (window.pageYOffset >= topoNav) {
    nav.classList.add('FixoNoTopo')
  } else {
    nav.classList.remove('FixoNoTopo')
  }
}

var data = new Date()
console.log(data)
