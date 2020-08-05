import {Context} from 'koa'

export function logger(){
    return async (ctx: Context,next:()=>Promise<void>)=>{
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method};url:${ctx.url};status:${ctx.status};time:${ms}ms`);
    };
}