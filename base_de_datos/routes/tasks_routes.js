const express = require ('express');
let TaskController = require('../controllers/tasks');

let router = express.Router();

router.route('/tasks').get(TaskController.index).post(TaskController.create);

router.get('/tasks/new',TaskController.new);
//identificadores unicos para url : autoincrementales = 1,2,3 , 19813jskajheriueiw83212
//sluck = cadenas de string?

router.get('/tasks/:id/edit',TaskController.edit);

router.route('/tasks/:id')
.get(TaskController.show)
.put(TaskController.update)
.delete(TaskController.destroy);
//wildcard = comodin ... lo q venga con tasks/1 o tasks/2 y asi se dirigira aca



module.exports = router;