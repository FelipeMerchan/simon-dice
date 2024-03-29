const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener al personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    //personaje es la data que nos llega desde resolve(11)
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
    //nos llega el id del reject (13)x
