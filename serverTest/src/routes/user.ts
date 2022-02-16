import { Router } from "express";

export const router = Router();
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user";

router.get('/users', getUsers);
router.get('/', function (req, res) {
    res.json({mensaje:'hello world'});
});
router.get("/users/:id", getUser);
router.post('/users', createUser)
router.put("/users/:id", updateUser);
//router.delete("/users/:id", deleteUser);
router.delete("/users", deleteUser);