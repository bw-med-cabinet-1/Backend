const router = require('express').Router();

const helper= require('./helper');
const restricted = require('../auth/restricted-middleware');

router.get('/', (req, res) => {
  helper.find('strains')
  .then(rez => res.status(200).json(rez))
  .catch(err => res.status(500).json({status: 500, err}))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  helper.findById(id, 'strains')
  .then(rez => res.status(200).json(rez))
  .catch(err => res.status(500).json({status: 500, err}))
});

router.post('/', (req, res) => {
  helper.add(req.body, 'strains')
  .then(rez => res.status(200).json({message:'strain successfully created', rez}))
  .catch(err => res.status(500).json({status: 500, err}))
});

router.put('/:id', checkRole(), (req, res) => {
  const id = req.params.id
  helper.update(req.body, id, 'strains')
  .then(rez => res.status(200).json({message:'strain successfully updated', rez}))
  .catch(err => res.status(500).json({status: 500, err}))
});

router.delete('/:id', checkRole(), (req, res) => {
  const id = req.params.id
  helper.remove(id, 'strains')
  .then(rez => res.status(200).json({message:'this strain was successfully deleted', rez}))
  .catch(err => res.status(500).json({status: 500, err}))
});

function checkRole() {
  return (req, res, next) => {
    if (req.jwt.role === true) {
      next();
    } else {
      res.status(403).json({ message: 'You are not authorized' });
    }
  };
};

module.exports = router;