import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Benzersiz isim
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
