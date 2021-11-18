const express = require('express');
const roomRouter  = express.Router();
const roomController = require('../controllers/roomController');


roomRouter.get('/create-room', roomController.createRoom);

module.exports = roomRouter;
