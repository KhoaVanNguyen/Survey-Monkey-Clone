module.exports = (req,res,next) => {
    if(!req.user){
        res.status(403).send('You are forbidden to access this url')
    }
    next()
}