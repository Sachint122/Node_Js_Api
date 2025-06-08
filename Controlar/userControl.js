import { User } from "../Models/user.js";
export const UserRagister =async (req, res) => {
    const { UserId, email, phone, password } = req.body;
    const findOldUser = await User.findOne({
        $or: [
            { UserId },
            { email },
            { phone }
        ]
    })
    if (findOldUser) return res.status(500).json({ error: "User is Already exits in data base please fill new data" });

    const newUser = await User.create({
        UserId,
        email,
        phone,
        password,
    })
    res.status(200).json({ massage: "New User Ragister successfully", newUser });
}
export const userLogin=async (req, res) => {
    const { UserId, password } = req.body
    const findUserForLogin = await User.findOne({ UserId });
    if (findUserForLogin) {
        if (findUserForLogin.password == password) {
            res.status(200).json({ massage: `Welcome back ${findUserForLogin.UserId} `, findUserForLogin });
        } else {
            res.json({ massage: "Password is incorect" });
        }
    } else {
        res.status(400).json({ massage: "User is not found please fill corecct UserId" })
    }
}