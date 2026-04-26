import p5 from 'p5';

export default defineNuxtPlugin(nuxtApp => ({
    provide: {
        p5,
    }
}));