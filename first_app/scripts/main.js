if (Meteor.isClient) {

    Template.about.events({
        'click': function() {
            var _this = event.target,
                scrollSelector = $(_this).data('scroll'),
                scrollToDiv = $(scrollSelector);

            $('html, body')
                .animate({
                    scrollTop: scrollToDiv.offset().top - 60
                }, 300);
        }
    });

    Template.massage.events({
        'click': function() {
            var _this = event.target,
                scrollSelector = $(_this).data('scroll'),
                scrollToDiv = $(scrollSelector);

            $('html, body')
                .animate({
                    scrollTop: scrollToDiv.offset().top - 60
                }, 300);
        }
    });
}


if (Meteor.isServer) {

}
