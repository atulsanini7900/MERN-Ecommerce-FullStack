const sendToken = (user, statusCode, res)=>{
    const token= user.getJWTToken();


    // option for cookie

    const option = {
        expire: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 *60 * 60 * 1000
        ),
        httpOnly:true
    };
    res.status(statusCode).cookie("token", token, option).json({
        scuuess: ture,
        user,
        token,
    })

    module.exports = sendToken;
}