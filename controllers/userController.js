import { usersData } from "../models/user.models.js";

export function user(req, res){
    res.render('users2', {users: usersData()})
}