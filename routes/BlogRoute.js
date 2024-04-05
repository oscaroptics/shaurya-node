const router = require("express").Router();
const blogRoute = require("../controllers/blogController");

router.post("/Blog", blogRoute.createBlog);
router.get("/Blogs", blogRoute.getAllBlog);


module.exports = router