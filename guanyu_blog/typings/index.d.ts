interface markedType {
    parse:(content:string,options?:object,callback?:(err:any, html:any)=>any) => any
    Renderer:any
    setOptions:(e:object) => any
}
declare module "marked-change-little" {
    const marked:markedType
    export {marked}
}