

Router.route('/', function () {
    this.render('main');
});

Router.route('/about', function () {
    this.render('about');
});

Router.route('/massage', function() {
    this.render('massage');
});

Router.route('/classes', function() {
    this.render('classes');
});