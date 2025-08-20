import { Router } from "express";
import { validateMiddlewares } from "../middlewares/validate.js";
import { DataModel } from "../models/model.js";

const router = Router();

router.get('/get-all',validateMiddlewares, (req, res) => {
    res.status(200).send('success')
})

router.post('/create', validateMiddlewares, async(req, res) => {
    try {
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ msg: 'Invalid request body' });
        }
        
        const newData = new DataModel(data);
        await newData.save();

        return res.status(200).send('add success');
    }
    catch (err) {
        return res.status(500).json({ msg: '', error: err.message })
    }

})
export default router;