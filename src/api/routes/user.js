const { isAuth } = require("../../middlewares/auth");
const { registro, login, updateUser } = require("../controllers/user");
const userRouter = require("express").Router();

userRouter.post("/login", login);
userRouter.post("/", registro);
userRouter.put("/:id", isAuth, updateUser);

module.exports = userRouter;