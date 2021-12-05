import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '988d4450caa54562ae46660470686c0d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
