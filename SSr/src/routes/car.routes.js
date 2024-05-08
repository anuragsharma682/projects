import { Router } from "express";
import { createCar, getCars } from "../controllers/car.js";


const router = Router();


router.route('/createCar').post(createCar)
router.route('/getCars').get(getCars)
router.route('/updateCar/:id').post(updateCar)
router.route('/deleteCar/:id').post(deleteCar)

export default router;


