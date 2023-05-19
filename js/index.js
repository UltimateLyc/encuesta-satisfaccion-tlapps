let reaction

const evaluation = () => {
  const dom = `
        <h2 class="title">
                    ¿Califique su experiencia?
                </h2>
                <div  class="container-assessment">
                    <ul class="menu-assessment">
                        <li class="list-assessment">
                            <button class="btn-assessment" onclick="comments(true,1)">
                                <img class="face-assessment" src="./assets/images/faces/very-bad-face.png" alt="Muy mal servicio">
                            </button>
                        </li>
        
                        <li class="list-assessment">
                            <button class="btn-assessment" onclick="comments(true,2)">
                                <img class="face-assessment" src="./assets/images/faces/bad-face.png" alt="Mal servicio">
                            </button>
                        </li>
                            
                        <li class="list-assessment">
                            <button class="btn-assessment" onclick="comments(true,3)">
                                <img class="face-assessment" src="./assets/images/faces/normal-face.png" alt="Sevicio normal">
                            </button>
                        </li>
                        
                        <li class="list-assessment">
                            <button class="btn-assessment" onclick="comments(false,4)">
                                <img class="face-assessment" src="./assets/images/faces/good-face.png" alt="Buen servicio">
                            </button>
                        </li>
                        
                        <li class="list-assessment">
                            <button class="btn-assessment" onclick="comments(false,5)">
                                <img class="face-assessment" src="./assets/images/faces/very-good-face.png" alt="Muy buen servicio">
                            </button>
                        </li>
                        
                    </ul>
                    
                </div>
        `

  return dom
}

const negativeEvaluation = (opc) => {
  let required = ''
  let bool = false

  if (opc) {
    required = 'required'
    bool = true
  }

  const dom = `
    <div class="container-assessment">
       <form action="" id="form">
            <ul class="input-menu">
                <li class="input-list">
                    <input class="input-text" type="text" id="name" name="name" placeholder="Nombre" required>
                </li>
                <li class="input-list">
                    <input class="input-text" type="text" id="company" name="company" placeholder="Compañia" required>
                </li>
                <li class="input-list">
                    <textarea name="" id="comment" cols="30" rows="10" placeholder="Comentarios" ${required}></textarea>
                </li>
                <li class="input-list">
                    <button class="btn-submit" type="submit" onclick="getData(${bool})"> Enviar </button>
                </li>
            </ul>
        </form>
    </div>
`
  return dom
}

const main = () => {
  const container = document.getElementById('nav-container')
  container.innerHTML = evaluation()
}

main()

const comments = (opc, num) => { // eslint-disable-line no-unused-vars
  console.log(opc, num)
  reaction = num
  const container = document.getElementById('nav-container')
  container.innerHTML = negativeEvaluation(opc)
}

const getData = (bool) => { // eslint-disable-line no-unused-vars
  const user_name = document.getElementById('name').value
  const company = document.getElementById('company').value
  const comment = document.getElementById('comment').value
  const id_reaction = reaction

  console.log(user_name, '****', company, '****', comment, '****', id_reaction)

  // code for /x-www-form-urlencoded;charset=UTF-8
  const details = {
    user_name,
    company,
    comment,
    id_reaction
  }

  let formBody = []
  for (const property in details) {
    const encodedKey = encodeURIComponent(property)
    const encodedValue = encodeURIComponent(details[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  formBody = formBody.join('&')

  fetch('https://plain-jumpsuit-crow.cyclic.app/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
  })

  if (bool && user_name && company && comment) {
    main()
  } else if (!bool && user_name && company) {
    main()
  }
}
