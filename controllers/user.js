module.exports.Signin = async (req , res)=>{
    res.send('Signin Page');
}

module.exports.SignUser = async(req , res)=>{
    res.json({msg : 'This is where the sigin logic is hold'})
}

module.exports.Login = async (req ,res)=>{
    res.send('Login Page')
}

module.exports.LoginUser = async(req , res)=>{
    res.json({msg : 'This is where the Login logic is hold'})

}