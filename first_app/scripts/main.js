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
        $(document).ready(function() {
            $('html, body').scrollTop(0);
        });
    };

    Template.main.postRender = function () {
        postRenderScroll();
    };

    Template.about.events({
        'click': navClickHandler
    });

    Template.about.postRender = function () {
        postRenderScroll();
    };

    Template.massage.events({
        'click': navClickHandler
    });

    Template.massage.postRender = function () {
        postRenderScroll();
    };

    Template.classes.events({
        'click': navClickHandler
    });

    Template.classes.postRender = function () {
        postRenderScroll();
    };
}


if (Meteor.isServer) {

}
