(function () {
    'use strict';

    angular
            .module('mksApp')
            .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    function DashboardController() {
        var vm = this;

        vm.latestQuote = [
            {
                "quote": "Hogy lett ebből sírás?",
                "kidName": "Zsófi",
                "date": "2015-02-11"
            },
            {
                "quote": "Mindjárt is reggel lesz.",
                "kidName": "Ábel",
                "date": "2015-02-13"
            },
            {
                "quote": "Ez egy tetej.",
                "kidName": "Zsófi",
                "date": "2015-02-22"
            }
        ];

    }
})();