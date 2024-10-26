const { render } = require('ejs');
module.exports.home = function(req,res){
    return res.render('index')
}
module.exports.digital = function(req,res){
    return res.render('digital')
}
module.exports.video = function(req,res){
    return res.render('video')
}
module.exports.photo = function(req,res){
    return res.render('photo')
}
module.exports.webdev = function(req,res){
    return res.render('webdev')
}
module.exports.contact = function(req,res){
    return res.render('contact')
}