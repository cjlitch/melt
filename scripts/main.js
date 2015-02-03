if (Meteor.isClient) {

    var navClickHandler = function(event) {
        var _this = event.target,
            scrollSelector = $(_this).data('scroll'),
            scrollToDiv = $(scrollSelector);

        $('html, body')
            .animate({
                scrollTop: scrollToDiv.offset().top - 60
            }, 300);
    };

    var postRenderScroll = function() {
        $('html, body').scrollTop(0);
    };

    Template.main.rendered = function () {
        postRenderScroll();
    };

    Template.about.events({
        'click .js-anchor-link': navClickHandler
    });

    Template.about.rendered = function () {
        postRenderScroll();
    };

    Template.massage.events({
        'click .js-anchor-link': navClickHandler
    });

    Template.massage.rendered = function () {
        postRenderScroll();
    };

    Template.classes.events({
        'click .js-anchor-link': navClickHandler
    });

    Template.classes.rendered = function () {
        postRenderScroll();
    };
}


if (Meteor.isServer) {

}
