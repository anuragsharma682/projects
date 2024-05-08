import app from "./app.js";
import { dbConnect } from "./db/dbConnect.js";

dbConnect()
    .then(() => {
        app.listen(5100, () => {
            console.log('Server is listening to port 5100');
        })
    })
    .catch((err) => {
        console.log(err);
    })