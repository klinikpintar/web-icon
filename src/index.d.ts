declare module '*.svg' {
    import Vue, {VueConstructor} from 'vue';
    const content: VueConstructor<Vue>;
    export default content;
}

export interface Icon { name: string, group: string, icon: VueConstructor }
export interface Icons {
    [key:string]: Icon
}
