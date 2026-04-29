import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default defineNuxtPlugin(nuxtApp => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    return {
        provide: {
            gsap,
            ScrollTrigger,
            SplitText,
        }
    }
});