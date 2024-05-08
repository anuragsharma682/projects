import { Car } from "../models/car";


const createCar = async(req, res) => {
    try {
        const { brand, model, mileage, price } = req.body;

        if (!brand || !model || !mileage || !price) {
            return res.json({
                message: "All fields are required"
            })
        }

        const car = await Car.create({
            brand,
            model,
            mileage,
            price
        });

        if (!car) {
            res.json({
                message: "Car not created"
            })
        }

        res.json({
            message: "Car created successfully"
        })

    }catch(err) {
        console.log(err);
    }
}

const getCars =  async(req, res) => {
    try {
        // const {model} = req.query;
        // const cars = await Car.find({model})
        const cars = await Car.find()
        res.json(cars)

    } catch (error) {
        console.log(error);
    }
}

const updateCar = async(req, res) => {
    try {
        const {brand, model, mileage, price} = req.body;
        const {id} = req.params;
        const car = await Car.findByIdAndUpdate(id, {
            brand,
            model,
            mileage,
            price
        })

        if (!car) {await
            res.json({
                message: "Car not found"
            })
        }

        res.json({
            message: "Car updated successfully"
        })

    } catch (error) {
        console.log(error);
    }
}

const deleteCar = async(req, res) => {
    try {
        const {id} = req.params;
        const car = await Car.findByIdAndDelete(id);
        if (!car) {
            res.json({
                message: "Car not found"
            })
        }
        res.json({
            message: "Car deleted successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    createCar,
    getCars,
    updateCar,
    deleteCar
}