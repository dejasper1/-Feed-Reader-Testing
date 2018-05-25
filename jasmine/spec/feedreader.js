/* feedreader.js */
$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url defined', function () {
            allFeeds.forEach((element) => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);

            });
        });

        it('name defined', function () {
            allFeeds.forEach((element) => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);

            });
        });
    });

    describe('The menu', function () {
        it('menu hidden by default', function () {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

        it('menu changes visibility on element click', function () {
            //mouse click method -- https://www.w3schools.com/jsref/met_html_click.asp
            document.querySelector(".menu-icon-link").click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            document.querySelector(".menu-icon-link").click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);

        });
    });

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done)
        });

        it('loadfeed > 0 entries', function () {
            expect(document.querySelector('.feed')).toBeDefined();
        });
    });

    describe('New Feed Selection', function () {
        let initFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                initFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, done);
            });
        });
        it('feed comparison', function () {
            expect(document.querySelector('.feed')).not.toBe(initFeed)
        });
    });
}());