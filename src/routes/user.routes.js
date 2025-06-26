import { Router } from "express";
import { registeruser } from "../controllers/user.controller";
import { upload } from "../middleware/multer.middleware";

const router = Router();

router.route("/register").post(
   upload.fields([
      {name:"avatar",maxCount:1},
      {name:"cover",maxCount:1}
   ]), registeruser
)
router.route("/login").post(registeruser)

export default router;