define(["require", "exports"], function (require, exports) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        // cast aurelia to any since testPluginName isn't exposed in the .d.ts file yet
        aurelia.loader.textPluginName = 'text';
        aurelia.start().then(function (a) { return a.setRoot('views/app'); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map