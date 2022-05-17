import { db } from "../../components/lib/db"
export default async function handler(req, res) {
    res.status(200).redirect('/')
    const newUser = await db.insert({username: req.body.username, password: req.body.password, email:req.body.email}).into('users');
}
