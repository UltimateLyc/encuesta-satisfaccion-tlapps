const comments = (opinion) => { // eslint-disable-line no-unused-vars
  const container = document.getElementById('nav-container')

  if (opinion) {
    console.log(container)
    container.innerHTML = `
              <div class="container-assessment">
                  <form action="" method="post">
                      <ul class="input-menu">
                          <li class="input-list">
                              <input class="input-text" type="text" id="name" name="name" placeholder="Nombre" required>
                          </li>
                          <li class="input-list">
                              <input class="input-text" type="text" id="company" name="company" placeholder="Compañia" required>
                          </li>
                          <li class="input-list">
                              <textarea name="" id="" cols="30" rows="10" placeholder="Comentarios" required></textarea>
                          </li>
                          <li class="input-list">
                              <button class="btn-submit" type="submit" onclick="" >Enviar</button>
                          </li>
                      </ul>
                  </form>
              </div>
          `
  } else {
    container.innerHTML = `
              <div class="container-assessment">
                  <form action="" method="post">
                      <ul class="input-menu">
                          <li class="input-list">
                              <input class="input-text" type="text" id="name" name="name" placeholder="Nombre" required>
                          </li>
                          <li class="input-list">
                              <input class="input-text" type="text" id="company" name="company" placeholder="Compañia" required>
                          </li>
                          <li class="input-list">
                              <textarea name="" id="" cols="30" rows="10" placeholder="Comentarios"></textarea>
                          </li>
                          <li class="input-list">
                              <button class="btn-submit" type="submit" onclick="" >
                                  Enviar
                              </button>
                          </li>
                      </ul>
                  </form>
              </div>
          `
  }
}
