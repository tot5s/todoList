

const apis = {
    clickEvent: {
        addEvent: (no:number) => {
            return ++no;
        },
        subEvent: (no:number) => {
            return --no;
        }
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            apis: apis
        }
    }
})