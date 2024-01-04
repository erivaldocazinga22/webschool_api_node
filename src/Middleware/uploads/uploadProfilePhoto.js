const multer = require("multer");

const upload = multer({ 
    storage: multer.diskStorage({
        destination: (_request, _file, callback) => {
            callback(null, "./public/uploads/profiles");
        },
        filename: (_request, file, callback) => {
            const newFileName = (`Imagem da Webschool de ${Date.now().toLocaleString()}`);
            if (file.mimetype === "image/png") {
                callback(null, newFileName + ".png");
            }

            if (file.mimetype === "image/jpg") {
                callback(null, newFileName + ".jpg");
            }

            if (file.mimetype === "image/jpeg") {
                callback(null, newFileName + ".jpeg");
            }

        },
    }),
    fileFilter: (_request, file, callback) => {
        const extensionFiles = ["image/png", "image/jpg", "image/jpeg"].find(extension => extension === file.mimetype);

        if (extensionFiles) {
            return callback(null, true);
        }

        return callback(null, false);
    }
});

module.exports = upload;