const express = require("express");
const router = express.Router();
const AnimeController = require("../controller/AnimeController");

const upload = require("../config/upload");

//abrir tela
router.get("/add", AnimeController.abreadd);

//salvar dados
router.post("/add", upload.single("banner"), AnimeController.add);

//listar tudo
router.get("/lst", AnimeController.lst);

//listar com filtro
router.post("/lst", AnimeController.filtro);

//abrir edita
router.get("/edt/:id", AnimeController.abreedt);

//editar dados
router.post("/edt/:id", upload.single("banner"), AnimeController.edt);

//deletar dados
router.get("/del/:id", AnimeController.deleta);

module.exports = router;
