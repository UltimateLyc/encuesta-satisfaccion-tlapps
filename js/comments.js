let reaction
const comments = (opc, num) => { // eslint-disable-line no-unused-vars
  console.log(opc, num)
  reaction = num
  const container = document.getElementById('nav-container')
  if (opc) {
    // console.log(container)
    container.innerHTML = `
                <div class="container-assessment">
                   <!-- <form id="form"> -->
                        <ul class="input-menu">
                            <li class="input-list">
                                <input class="input-text" type="text" id="name" name="name" placeholder="Nombre" required>
                            </li>
                            <li class="input-list">
                                <input class="input-text" type="text" id="company" name="company" placeholder="Compañia" required>
                            </li>
                            <li class="input-list">
                                <textarea name="" id="comment" cols="30" rows="10" placeholder="Comentarios" required></textarea>
                            </li>
                            <li class="input-list">
                                <button class="btn-submit" type="submit" onclick="getData()" >Enviar</button>
                            </li>
                        </ul>
                    <!-- </form> -->
                </div>
            `
  } else {
    container.innerHTML = `
                <div class="container-assessment">
                    <!-- <form id="form"> -->
                        <ul class="input-menu">
                            <li class="input-list">
                                <input class="input-text" type="text" id="name" name="name" placeholder="Nombre" required>
                            </li>
                            <li class="input-list">
                                <input class="input-text" type="text" id="company" name="company" placeholder="Compañia" required>
                            </li>
                            <li class="input-list">
                                <textarea name="" id="comment" cols="30" rows="10" placeholder="Comentarios"></textarea>
                            </li>
                            <li class="input-list">
                                <button class="btn-submit" type="submit" onclick="getData()" >
                                    Enviar
                                </button>
                            </li>
                        </ul>
                    <!-- </form> ->
                </div>
            `
  }
}
// const testCrud = require('./crudTest')

const getData = () => { // eslint-disable-line no-unused-vars
  const user_name = document.getElementById('name').value
  const company = document.getElementById('company').value
  const comment = document.getElementById('comment').value
  const id_reaction = reaction

  console.log(user_name, '****', company, '****', comment, '****', id_reaction)

  // code for /x-www-form-urlencoded;charset=UTF-8
  /* const details = {
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
  }) */
}
