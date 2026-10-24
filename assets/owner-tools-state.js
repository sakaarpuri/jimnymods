/* Planning arithmetic only; no vehicle approval, live prices or exchange rates. */
(function(root){
 const number=(v,max=10000000)=>{if(v===''||v===null||v===undefined)return null;const n=Number(v);return Number.isFinite(n)&&n>=0&&n<=max?n:null;};
 function load(input={}){const gvm=number(input.gvm,10000),weighed=number(input.weighed,10000),extra=number(input.extra,5000)??0,roofLimit=number(input.roofLimit,1000),roof=number(input.roof,1000);return {gvm,weighed,extra,total:weighed===null?null:weighed+extra,remaining:gvm===null||weighed===null?null:gvm-weighed-extra,roofRemaining:roofLimit===null||roof===null?null:roofLimit-roof};}
 function quotes(items=[],values={},fitting='',delivery=''){let known=0,unpriced=0;for(const p of items){const n=number(values[p.id]);if(n===null)unpriced++;else known+=n;}const fit=number(fitting),ship=number(delivery);return{parts:known,unpriced,fitting:fit,delivery:ship,total:known+(fit??0)+(ship??0),complete:unpriced===0&&fit!==null&&ship!==null};}
 root.JimnyOwnerTools=Object.freeze({number,load,quotes});
})(globalThis);
