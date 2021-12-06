import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '988d4450caa54562ae46660470686c0d', 
        });
    }
}

export default AppLoader;
