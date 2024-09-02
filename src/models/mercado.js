const mercado_controller = require("../controllers/mercado.js")

let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    mercado_controller.show(body.mercado_id) &&
    body.nome != undefined &&
    body.nome != ""
  ) {
    return {
      id,
      nome: body.nome,
      endereco: body.endereco,
      mercado_id: body.mercado_id
    };
  }
};

module.exports = model