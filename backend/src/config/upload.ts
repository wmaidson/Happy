import { request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, File, cb) => {
            const fileName = `${Date.now()}-${File.originalname}`;

            cb(null, fileName);
        }
    })

};