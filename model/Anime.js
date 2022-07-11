const conexao = require("../config/database");

const AnimeSchema = conexao.Schema({
  titulo: {
    type: "String",
  },
  descricao: {
    type: "String",
  },
  dataDeLancamento: {
    type: "Date",
  },
  dataDeEncerrmento: {
    type: "Date",
  },
  numEP: {
    type: "Number",
  },
  banner: {
    type: "String",
  },
});

module.exports = conexao.model("Anime", AnimeSchema);
