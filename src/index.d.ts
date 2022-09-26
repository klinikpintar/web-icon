declare module '*.svg' {
    import Vue, {VueConstructor} from 'vue';
    const content: VueConstructor<Vue>;
    export default content;
}

export interface Icons {
    [key:string]: VueConstructor
}
