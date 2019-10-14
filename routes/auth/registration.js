exports.get = function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/profile');
    }

    res.render('auth/registration', { expressFlash: req.flash('message')});
};