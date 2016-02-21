import {Aurelia} from 'aurelia-framework' 

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    // cast aurelia to any since testPluginName isn't exposed in the .d.ts file yet
    (<any>aurelia).loader.textPluginName = 'text';
    aurelia.start().then(a => a.setRoot('views/app'));
}
