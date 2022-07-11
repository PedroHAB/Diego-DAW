const anime = require("../model/Anime");

function abreadd(req, res) {
  res.render("Anime/add.ejs");
}
function add(req, res) {
  var Anime = new anime();
  Anime.titulo = req.body.nome;
  Anime.descricao = req.body.Descricao;
  Anime.dataDeLancamento = req.body.DataL;
  Anime.dataDeEncerrmento = req.body.DataF;
  Anime.numEP = req.body.NumeroEp;
  Anime.banner = req.file.filename;
  Anime.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/Anime/lst");
    }
  });
}
function lst(req, res) {
  anime.find({}).then(function (anime) {
    console.log(anime);
    res.render("Anime/lst.ejs", { Anime: anime });
  });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  anime.find({ nome: new RegExp(pesquisa, "i") }).then(function (anime) {
    res.render("Anime/lst.ejs", { Anime: anime });
  });
}
function abreedt(req, res) {
  anime.findById(req.params.id).then(function (anime) {
    res.render("Anime/edt.ejs", { Anime: anime });
  });
}
function edt(req, res) {
  anime.findByIdAndUpdate(
    req.params.id,
    {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      dataDeLancamento: req.body.dataDeLancamento,
      dataDeEncerrmento: req.body.dataDeEncerrmento,
      numEP: req.body.numEP,
      banner: req.file.filename,
    },
    function (err, result) {
      if (err) {
        res.send("Aconteceu o seguinte erro: " + err);
      } else {
        res.redirect("/Anime/lst");
      }
    }
  );
}
function deleta(req, res) {
  anime.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/Anime/lst");
  });
}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
