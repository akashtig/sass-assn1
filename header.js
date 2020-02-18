document.querySelector('header').innerHTML=`<div class="logo">News Site Logo</div>
<div class="search-box">Search</div>
<nav>
    <ul>
        <li><a href='index.html'>Home</a></li>
        <li><a href='details.html'>Details</a></li>
        <li><a href='about.html'>About</a></li>
    </ul>

</nav>
<div class="hamburger">
    <img class="hamburger-logo" src="assets/menu.png" alt="menu">
 </div>
 <div class="hamburger-close">
     <img class="hamburger-close-logo" src="assets/cancel.png" alt="menu">
     <div class="list"></div>
  </div>`

const body = document.querySelector('.hamburger-close')
const showMenu = document.querySelector('.hamburger-logo')
const closeMenu = document.querySelector('.hamburger-close-logo')
showMenu.addEventListener('click',function(){
body.className='hamburger-close hamburger-open'
document.querySelector('.list').innerHTML= `<ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="details.html">Details</a></li>
                                        <li><a href="about.html">About</a></li>
                                       
                                      </ul>`
})

closeMenu.addEventListener('click',function(){
body.className='hamburger-close'
// body.className='hamburger-close'
})
