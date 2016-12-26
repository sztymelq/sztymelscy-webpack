"use strict";
var HeroController = (function () {
    function HeroController($interval) {
        var _this = this;
        var MS_PER_DAY = 1000;
        var weddingDate = new Date(2017, 7, 5, 16, 0, 0, 0);
        var now = new Date();
        var countFrom = (weddingDate - now) / MS_PER_DAY;
        var clock;
        this.maxImages = 5;
        this.imageName = 1;
        this.$postLink = function () {
            clock = new FlipClock($('.countdown-clock'), countFrom, {
                countdown: true,
                clockFace: 'DailyCounter'
            });
            var labels = $('.flip-clock-label');
            labels[0].innerHTML = 'Dni';
            labels[1].innerHTML = 'Godziny';
            labels[2].innerHTML = 'Minuty';
            labels[3].innerHTML = 'Sekundy';
        };
        $interval(function () {
            var currentImage = _this.imageName + 1;
            _this.imageName = currentImage % _this.maxImages;
        }, 3000);
    }
    HeroController.prototype.getCurrentImagePath = function () {
        return "/images/" + this.imageName + ".JPG";
    };
    return HeroController;
}());
HeroController.$inject = ['$interval'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroController;
