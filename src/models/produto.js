let nextId = 1

const model = (body, id = nextId++) => {
    if (
        body.nome != undefined &&
        !isNaN(body.quantidade) &&
        body.nome != "" &&
        body.quantidade != ""
    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado_id: body.mercado_id,
            fornecedor_id: body.fornecedor_id
        }
    }
}

module.exports = model