const { Router } = require('express')
const {getUserByID, createUser, updateUser, getUsers , delateUser} = require('../controllers/user')
//const { validatorUser } = require('../validators/user')


const router = Router()


router.get('/', getUsers)
router.get(
    '/:id',
 //  [ checkRol('admin', 'user'),validatorGetProducts],
   getUserByID
)
router.post(
    '/',
   // [authMiddleware, checkRol('admin'), validatorCreateProducts],
    createUser
)





router.put(
    '/:id',
  //  [authMiddleware, checkRol('admin'), validatorGetProducts, validatorCreateProducts],
    updateUser
)
router.delete( 
    '/:id',
  //  [authMiddleware,  checkRol('admin'),  validatorGetProducts],
    delateUser
)

module.exports = router