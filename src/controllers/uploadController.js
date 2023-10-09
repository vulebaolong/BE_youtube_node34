import multer, { diskStorage } from "multer";
export const update = multer({
    storage: diskStorage({
        destination: process.cwd() + "/public/img/",
        filename: (req, file, cb) => {
            const newName = new Date().getTime() + "_" + file.originalname;
            return cb(null, newName);
        },
    }),
});

export const toiUuHinh = (fileName) => {};
