const { userSchema } = require('../schemas/userValidator')
const User = require('../models/user')


module.exports.Signin = async (req, res) => {
    res.send('Signin Page');
}

module.exports.SignUser = async (req, res) => {
    const { username, email, password } = req.body
    const data = {
        username,
        email,
        password
    }

    //checking the input type of the given data
    let checking = userSchema.safeParse(data)
    if (!checking.success) {
        return res.status(400).json({ msg: 'Bad Parameters' })
    }
    await User.create({
        username,
        email,
        password
    });
    return res.status(200).redirect("/")

}

module.exports.Login = async (req, res) => {
    res.send('Login Page')
}

module.exports.LoginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordandGenerateToken(email, password);
        return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.json({ error: "Incorrect Email or Password" });
    }
}