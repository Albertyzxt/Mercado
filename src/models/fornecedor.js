const fornecedor_controller = require("../controllers/fornecedor.js")

let nextId = 1;

const model = (body, id = nextId++) => {
  if (
    fornecedor_controller.show(body.fornecedor_id) &&
    body.nome != undefined &&
    body.nome != ""
) {
    return {
      id,
      nome: body.nome,
      fornecedor_id: body.fornecedor_id
    };
  }
};

module.exports = model;