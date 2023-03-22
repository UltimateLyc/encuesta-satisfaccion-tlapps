const container = document.getElementById('nav-container')

container.innerHTML = `
<h2 class="title">
    ¿Califique su experiencia?
</h2>
<div  class="container-assessment">
    <ul class="menu-assessment">
        <li class="list-assessment">
            <button class="btn-assessment" onclick=comments(true)>
                <img class="face-assessment" src="./assets/images/faces/very-bad-face.png" alt="Muy mal servicio">
            </button>
        </li>

        <li class="list-assessment">
            <button class="btn-assessment" onclick=comments(true)>
                <img class="face-assessment" src="./assets/images/faces/bad-face.png" alt="Mal servicio">
            </button>
        </li>
            
        <li class="list-assessment">
            <button class="btn-assessment" onclick=comments(true)>
                <img class="face-assessment" src="./assets/images/faces/normal-face.png" alt="Sevicio normal">
            </button>
        </li>
        
        <li class="list-assessment">
            <button class="btn-assessment" onclick=comments(false)>
                <img class="face-assessment" src="./assets/images/faces/good-face.png" alt="Buen servicio">
            </button>
        </li>
        
        <li class="list-assessment">
            <button class="btn-assessment" onclick=comments(false)>
                <img class="face-assessment" src="./assets/images/faces/very-good-face.png" alt="Muy buen servicio">
            </button>
        </li>
        
    </ul>
</div>
`