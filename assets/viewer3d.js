var ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Of=0,ou=1,kf=2;var io=1,Bf=2,ps=3,ni=0,ln=1,Vt=2,Yt=0,kr=1,so=2,lu=3,cu=4,Yl=5;var ii=100,zf=101,Gf=102,Hf=103,Vf=104,Us=200,Wf=201,qf=202,Xf=203,hu=204,uu=205,ro=206,jf=207,ao=208,Yf=209,Kf=210,Jf=211,Zf=212,$f=213,Qf=214,Ml=0,Sl=1,wl=2,br=3,Tl=4,El=5,Al=6,Rl=7,Kl=0,ep=1,tp=2,gi=0,oo=1,lo=2,co=3,Os=4,ho=5,uo=6,fo=7,qh="attached",np="detached",po=300,ms=301,ks=302,Br=303,Jl=304,mo=306,en=1e3,In=1001,xr=1002,Ft=1003,Zl=1004;var Bs=1005;var Dt=1006,zr=1007;var Ln=1008,du=1008,En=1009,fu=1010,pu=1011,Gr=1012,$l=1013,bi=1014,qn=1015,Bt=1016,Ql=1017,ec=1018,gs=1020,mu=35902,gu=35899,bu=1021,xu=1022,nn=1023,Mi=1026,Ai=1027,tc=1028,nc=1029,bs=1030,ic=1031;var sc=1033,go=33776,bo=33777,xo=33778,_o=33779,rc=35840,ac=35841,oc=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37488,fc=37489,yo=37490,pc=37491,mc=37808,gc=37809,bc=37810,xc=37811,_c=37812,yc=37813,vc=37814,Mc=37815,Sc=37816,wc=37817,Tc=37818,Ec=37819,Ac=37820,Rc=37821,Cc=36492,Pc=36494,Ic=36495,Dc=36283,Lc=36284,vo=36285,Nc=36286;var Rs=2300,Cs=2301,_l=2302,Xh=2303,jh=2400,Yh=2401,Kh=2402,ip=2500;var _u=0,Mo=1,Hr=2,sp=3200;var Vr=0,rp=1,xi="",bt="srgb",sn="srgb-linear",Ma="linear",yt="srgb";var yl=7680;var ap=519,op=512,lp=513,cp=514,Fc=515,hp=516,up=517,Uc=518,dp=519,yu=35044;var vu="300 es",di=2e3,_r=2001;function b0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function x0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fp(){let i=yr("canvas");return i.style.display="block",i}var Vd={},vr=null;function Sa(...i){let e="THREE."+i.shift();vr?vr("log",e,...i):console.log(e,...i)}function pp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=pp(i);let e="THREE."+i.shift();if(vr)vr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=pp(i);let e="THREE."+i.shift();if(vr)vr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function As(...i){let e=i.join(" ");e in Vd||(Vd[e]=!0,Ke(...i))}function mp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gp={[Ml]:Sl,[wl]:Al,[Tl]:Rl,[br]:El,[Sl]:Ml,[Al]:wl,[Rl]:Tl,[El]:br},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,xa=Math.PI/180,Ps=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function _0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function y0(i,e,t){return i!==e?(t-i)/(e-i):0}function _a(i,e,t){return(1-t)*i+t*e}function v0(i,e,t,n){return _a(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(Mu(i,e*2)-e)}function S0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function w0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function T0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function E0(i,e){return i+Math.random()*(e-i)}function A0(i){return i*(.5-Math.random())}function R0(i){i!==void 0&&(Wd=i);let e=Wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(i){return i*xa}function P0(i){return i*Ps}function I0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function D0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function N0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kt={DEG2RAD:xa,RAD2DEG:Ps,generateUUID:Zn,clamp:dt,euclideanModulo:Mu,mapLinear:_0,inverseLerp:y0,lerp:_a,damp:v0,pingpong:M0,smoothstep:S0,smootherstep:w0,randInt:T0,randFloat:E0,randFloatSpread:A0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:I0,ceilPowerOfTwo:D0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:N0,normalize:Et,denormalize:ui},oe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),S=Math.sin(_);p=Math.sin(p*_)/S,o=Math.sin(o*_)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bh=new L,qd=new gn,lt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],S=s[4],b=s[7],x=s[2],y=s[5],w=s[8];return r[0]=a*v+o*_+l*x,r[3]=a*m+o*S+l*y,r[6]=a*p+o*b+l*w,r[1]=c*v+h*_+u*x,r[4]=c*m+h*S+u*y,r[7]=c*p+h*b+u*w,r[2]=d*v+f*_+g*x,r[5]=d*m+f*S+g*y,r[8]=d*p+f*b+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(e,t)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xh=new lt,Xd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){let i={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sn]:{primaries:e,whitePoint:n,transfer:Ma,toXYZ:Xd,fromXYZ:jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Xd,fromXYZ:jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var ft=F0();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=yr("canvas")),$s.width=e.width,$s.height=e.height;let s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},U0=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_h(s[a].image)):r.push(_h(s[a]))}else r=_h(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var O0=0,yh=new L,rn=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Dt,a=Ln,o=nn,l=En,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Zn(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=po;rn.DEFAULT_ANISOTROPY=1;var Mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,b=(f+1)/2,x=(p+1)/2,y=(h+d)/4,w=(u+v)/4,M=(g+m)/4;return S>b&&S>x?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=y/n,r=w/n):b>x?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=y/s,r=M/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=w/r,s=M/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends Pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wa=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Le=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),a=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,B0)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ns.crossVectors(n,Gn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ns.crossVectors(n,Gn)),ns.normalize(),Vo.crossVectors(Gn,ns),s[0]=ns.x,s[4]=Vo.x,s[8]=Gn.x,s[1]=ns.y,s[5]=Vo.y,s[9]=Gn.y,s[2]=ns.z,s[6]=Vo.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],S=n[7],b=n[11],x=n[15],y=s[0],w=s[4],M=s[8],T=s[12],E=s[1],P=s[5],I=s[9],N=s[13],D=s[2],z=s[6],V=s[10],Z=s[14],ue=s[3],$=s[7],re=s[11],le=s[15];return r[0]=a*y+o*E+l*D+c*ue,r[4]=a*w+o*P+l*z+c*$,r[8]=a*M+o*I+l*V+c*re,r[12]=a*T+o*N+l*Z+c*le,r[1]=h*y+u*E+d*D+f*ue,r[5]=h*w+u*P+d*z+f*$,r[9]=h*M+u*I+d*V+f*re,r[13]=h*T+u*N+d*Z+f*le,r[2]=g*y+v*E+m*D+p*ue,r[6]=g*w+v*P+m*z+p*$,r[10]=g*M+v*I+m*V+p*re,r[14]=g*T+v*N+m*Z+p*le,r[3]=_*y+S*E+b*D+x*ue,r[7]=_*w+S*P+b*z+x*$,r[11]=_*M+S*I+b*V+x*re,r[15]=_*T+S*N+b*Z+x*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],_=l*f-c*d,S=o*f-c*u,b=o*d-l*u,x=a*f-c*h,y=a*d-l*h,w=a*u-o*h;return t*(v*_-m*S+p*b)-n*(g*_-m*x+p*y)+s*(g*S-v*x+p*w)-r*(g*b-v*y+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=t*o-n*a,S=t*l-s*a,b=t*c-r*a,x=n*l-s*o,y=n*c-r*o,w=s*c-r*l,M=h*v-u*g,T=h*m-d*g,E=h*p-f*g,P=u*m-d*v,I=u*p-f*v,N=d*p-f*m,D=_*N-S*I+b*P+x*E-y*T+w*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return e[0]=(o*N-l*I+c*P)*z,e[1]=(s*I-n*N-r*P)*z,e[2]=(v*w-m*y+p*x)*z,e[3]=(d*y-u*w-f*x)*z,e[4]=(l*E-a*N-c*T)*z,e[5]=(t*N-s*E+r*T)*z,e[6]=(m*b-g*w-p*S)*z,e[7]=(h*w-d*b+f*S)*z,e[8]=(a*I-o*E+c*M)*z,e[9]=(n*E-t*I-r*M)*z,e[10]=(g*y-v*b+p*_)*z,e[11]=(u*b-h*y-f*_)*z,e[12]=(o*T-a*P-l*M)*z,e[13]=(t*P-n*T+s*M)*z,e[14]=(v*S-g*x-m*_)*z,e[15]=(h*x-u*S+d*_)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,_=l*c,S=l*h,b=l*u,x=n.x,y=n.y,w=n.z;return s[0]=(1-(v+p))*x,s[1]=(f+b)*x,s[2]=(g-S)*x,s[3]=0,s[4]=(f-b)*y,s[5]=(1-(d+p))*y,s[6]=(m+_)*y,s[7]=0,s[8]=(g+S)*w,s[9]=(m-_)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,u=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=di,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===di)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===_r)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=di,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===di)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===_r)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qs=new L,li=new Le,k0=new L(0,0,0),B0=new L(1,1,1),ns=new L,Vo=new L,Gn=new L,Yd=new Le,Kd=new gn,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z0=0,Jd=new L,er=new gn,Ui=new Le,Wo=new L,aa=new L,G0=new L,H0=new gn,Zd=new L(1,0,0),$d=new L(0,1,0),Qd=new L(0,0,1),ef={type:"added"},V0={type:"removed"},tr={type:"childadded",child:null},vh={type:"childremoved",child:null},St=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Sn,n=new gn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new lt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(aa,Wo,this.up):Ui.lookAt(Wo,aa,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Ui),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),tr.child=e,this.dispatchEvent(tr),tr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V0),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new L(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Mh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Mu(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mh(a,r,e+1/3),this.g=Mh(a,r,e),this.b=Mh(a,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ft.workingToColorSpace(Mn.copy(this),e),Math.round(dt(Mn.r*255,0,255))*65536+Math.round(dt(Mn.g*255,0,255))*256+Math.round(dt(Mn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=bt){ft.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(qo);let n=_a(is.h,qo.h,t),s=_a(is.s,qo.s,t),r=_a(is.l,qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new He;He.NAMES=bp;var Si=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new L,Oi=new L,Sh=new L,ki=new L,nr=new L,ir=new L,tf=new L,wh=new L,Th=new L,Eh=new L,Ah=new Mt,Rh=new Mt,Ch=new Mt,Hi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Oi.subVectors(n,t),Sh.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Oi),l=ci.dot(Sh),c=Oi.dot(Oi),h=Oi.dot(Sh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,n),Ch.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Rh,r.y),a.addScaledVector(Ch,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Oi.subVectors(e,t),ci.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ci.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;nr.subVectors(s,n),ir.subVectors(r,n),wh.subVectors(e,n);let l=nr.dot(wh),c=ir.dot(wh);if(l<=0&&c<=0)return t.copy(n);Th.subVectors(e,s);let h=nr.dot(Th),u=ir.dot(Th);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(nr,a);Eh.subVectors(e,r);let f=nr.dot(Eh),g=ir.dot(Eh);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ir,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return tf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(tf,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),jo.subVectors(this.max,oa),sr.subVectors(e.a,oa),rr.subVectors(e.b,oa),ar.subVectors(e.c,oa),ss.subVectors(rr,sr),rs.subVectors(ar,rr),Ss.subVectors(sr,ar);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ss.z,Ss.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ss.z,0,-Ss.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ss.y,Ss.x,0];return!Ph(t,sr,rr,ar,jo)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,sr,rr,ar,jo))?!1:(Yo.crossVectors(ss,rs),t=[Yo.x,Yo.y,Yo.z],Ph(t,sr,rr,ar,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new L,new L,new L,new L,new L,new L,new L,new L],hi=new L,Xo=new Xt,sr=new L,rr=new L,ar=new L,ss=new L,rs=new L,Ss=new L,oa=new L,jo=new L,Yo=new L,ws=new L;function Ph(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ws.fromArray(i,r);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vi=q0();function q0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function X0(i){Math.abs(i)>65504&&Ke("DataUtils.toHalfFloat(): Value out of range."),i=dt(i,-65504,65504),Vi.floatView[0]=i;let e=Vi.uint32View[0],t=e>>23&511;return Vi.baseTable[t]+((e&8388607)>>Vi.shiftTable[t])}function j0(i){let e=i>>10;return Vi.uint32View[0]=Vi.mantissaTable[Vi.offsetTable[e]+(i&1023)]+Vi.exponentTable[e],Vi.floatView[0]}var Ta=class{static toHalfFloat(e){return X0(e)}static fromHalfFloat(e){return j0(e)}},$t=new L,Ko=new oe,Y0=0,Qt=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ea=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Aa=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},K0=new Xt,la=new L,Ih=new L,On=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):K0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Ih)),this.expandByPoint(la.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},J0=0,Kn=new Le,Dh=new St,or=new L,Hn=new Xt,ca=new Xt,mn=new L,ct=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?Aa:Ea)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Hn.min,ca.min),Hn.expandByPoint(mn),mn.addVectors(Hn.max,ca.max),Hn.expandByPoint(mn)):(Hn.expandByPoint(ca.min),Hn.expandByPoint(ca.max))}Hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),mn.add(or)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new L,l[M]=new L;let c=new L,h=new L,u=new L,d=new oe,f=new oe,g=new oe,v=new L,m=new L;function p(M,T,E){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[M].add(v),o[T].add(v),o[E].add(v),l[M].add(m),l[T].add(m),l[E].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,T=_.length;M<T;++M){let E=_[M],P=E.start,I=E.count;for(let N=P,D=P+I;N<D;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let S=new L,b=new L,x=new L,y=new L;function w(M){x.fromBufferAttribute(s,M),y.copy(x);let T=o[M];S.copy(T),S.sub(x.multiplyScalar(x.dot(T))).normalize(),b.crossVectors(y,T);let P=b.dot(l[M])<0?-1:1;a.setXYZW(M,S.x,S.y,S.z,P)}for(let M=0,T=_.length;M<T;++M){let E=_[M],P=E.start,I=E.count;for(let N=P,D=P+I;N<D;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Qt(d,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Is=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yu,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new L,ls=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lh=new L,Z0=new L,$0=new lt,Pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Lh.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Lh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$0.getNormalMatrix(e),s=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Q0=0,bn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=kr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=uu,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tr=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lr,ha=new L,cr=new L,hr=new L,ur=new oe,ua=new oe,xp=new Le,Jo=new L,da=new L,Zo=new L,nf=new oe,Nh=new oe,sf=new oe,Ra=class extends St{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Is(t,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new ls(n,3,0,!1)),lr.setAttribute("uv",new ls(n,2,3,!1))}this.geometry=lr,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),xp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$o(Jo.set(-.5,-.5,0),hr,a,cr,s,r),$o(da.set(.5,-.5,0),hr,a,cr,s,r),$o(Zo.set(.5,.5,0),hr,a,cr,s,r),nf.set(0,0),Nh.set(1,0),sf.set(1,1);let o=e.ray.intersectTriangle(Jo,da,Zo,!1,ha);if(o===null&&($o(da.set(-.5,.5,0),hr,a,cr,s,r),Nh.set(0,1),o=e.ray.intersectTriangle(Jo,Zo,da,!1,ha),o===null))return;let l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:Hi.getInterpolation(ha,Jo,da,Zo,nf,Nh,sf,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $o(i,e,t,n,s,r){ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ua.x=r*ur.x-s*ur.y,ua.y=s*ur.x+r*ur.y):ua.copy(ur),i.copy(e),i.x+=ua.x,i.y+=ua.y,i.applyMatrix4(xp)}var zi=new L,Fh=new L,Qo=new L,el=new L,wi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fh.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),el.copy(this.origin).sub(Fh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qo),o=el.dot(this.direction),l=-el.dot(Qo),c=el.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fh).addScaledVector(Qo,d),f}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,_=n.y-a.y,S=n.z-a.z,b=Math.abs(l),x=Math.abs(c),y=Math.abs(h),w,M,T,E,P,I,N,D,z,V,Z,ue;if(b>=x&&b>=y?(T=l,I=u,z=g,ue=p,l>=0?(w=c,M=h,E=d,P=f,N=v,D=m,V=_,Z=S):(w=h,M=c,E=f,P=d,N=m,D=v,V=S,Z=_)):x>=y?(T=c,I=d,z=v,ue=_,c>=0?(w=h,M=l,E=f,P=u,N=m,D=g,V=S,Z=p):(w=l,M=h,E=u,P=f,N=g,D=m,V=p,Z=S)):(T=h,I=f,z=m,ue=S,h>=0?(w=l,M=c,E=u,P=d,N=g,D=v,V=p,Z=_):(w=c,M=l,E=d,P=u,N=v,D=g,V=_,Z=p)),T===0)return null;let $=w/T,re=M/T,le=1/T,Ne=E-$*I,Re=P-re*I,rt=N-$*z,We=D-re*z,tt=V-$*ue,se=Z-re*ue,k=tt*We-se*rt,te=Ne*se-Re*tt,ze=rt*Re-We*Ne;if(s){if(k<0||te<0||ze<0)return null}else if((k<0||te<0||ze<0)&&(k>0||te>0||ze>0))return null;let pe=k+te+ze;if(pe===0)return null;let Je=le*(k*I+te*z+ze*ue);return(pe>0?Je<0:Je>0)?null:this.at(Je/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rf=new Le,Ts=new wi,tl=new On,af=new L,nl=new L,il=new L,sl=new L,Uh=new L,rl=new L,of=new L,al=new L,Ee=class extends St{constructor(e=new ct,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uh.fromBufferAttribute(u,e),a?rl.addScaledVector(Uh,h):rl.addScaledVector(Uh.sub(t),h))}t.add(rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(tl.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(tl,af)===null||Ts.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(rf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,x=S;b<x;b+=3){let y=o.getX(b),w=o.getX(b+1),M=o.getX(b+2);s=ol(this,p,e,n,c,h,u,y,w,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);s=ol(this,a,e,n,c,h,u,_,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,x=S;b<x;b+=3){let y=b,w=b+1,M=b+2;s=ol(this,p,e,n,c,h,u,y,w,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,S=m+1,b=m+2;s=ol(this,a,e,n,c,h,u,_,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function eg(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;al.copy(o),al.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:i}}function ol(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,nl),i.getVertexPosition(l,il),i.getVertexPosition(c,sl);let h=eg(i,e,t,n,nl,il,sl,of);if(h){let u=new L;Hi.getBarycoord(of,nl,il,sl,u),s&&(h.uv=Hi.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Hi.getNormal(nl,il,sl,d.normal),h.face=d,h.barycoord=u}return h}var fa=new Mt,lf=new Mt,cf=new Mt,tg=new Mt,hf=new Le,ll=new L,Oh=new On,uf=new Le,kh=new wi,Ca=class extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qh,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingBox.expandByPoint(ll)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingSphere.expandByPoint(ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oh.copy(this.boundingSphere),Oh.applyMatrix4(s),e.ray.intersectsSphere(Oh)!==!1&&(uf.copy(s).invert(),kh.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===np?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;lf.fromBufferAttribute(s.attributes.skinIndex,e),cf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(...t,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=cf.getComponent(r);if(a!==0){let o=lf.getComponent(r);hf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tg.copy(fa).applyMatrix4(hf),a)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}},Er=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},wn=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ft,h=Ft,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},df=new Le,ng=new Le,Pa=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ng;df.multiplyMatrices(o,t[r]),df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wn(t,e,e,nn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ke("Skeleton: No bone found with UUID:",r),a=new Er),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},qi=class extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dr=new Le,ff=new Le,cl=[],pf=new Xt,ig=new Le,pa=new Ee,ma=new On,Xi=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),pf.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),ma.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),ff.multiplyMatrices(n,dr),pa.matrixWorld=ff,pa.raycast(e,cl);for(let a=0,o=cl.length;a<o;a++){let l=cl[a];l.instanceId=r,l.object=this,t.push(l)}cl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wn(new Float32Array(s*this.count),s,this.count,tc,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new On,sg=new oe(.5,.5),hl=new L,Ar=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],S=r[13],b=r[14],x=r[15];if(s[0].setComponents(c-a,f-h,p-g,x-_).normalize(),s[1].setComponents(c+a,f+h,p+g,x+_).normalize(),s[2].setComponents(c+o,f+u,p+v,x+S).normalize(),s[3].setComponents(c-o,f-u,p-v,x-S).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,x-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,x-b).normalize(),t===di)s[5].setComponents(c+l,f+d,p+m,x+b).normalize();else if(t===_r)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);let t=sg.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hl.x=s.normal.x>0?e.max.x:e.min.x,hl.y=s.normal.y>0?e.max.y:e.min.y,hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rr=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dl=new L,Ll=new L,mf=new Le,ga=new wi,ul=new On,Bh=new L,gf=new L,Ds=class extends St{constructor(e=new ct,t=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Dl.fromBufferAttribute(t,s-1),Ll.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Dl.distanceTo(Ll);e.setAttribute("lineDistance",new Ge(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;mf.copy(s).invert(),ga.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),_=h.getX(v+1),S=dl(this,e,ga,l,p,_,v);S&&t.push(S)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=dl(this,e,ga,l,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=dl(this,e,ga,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=dl(this,e,ga,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Dl.fromBufferAttribute(o,s),Ll.fromBufferAttribute(o,r),t.distanceSqToSegment(Dl,Ll,Bh,gf)>n)return;Bh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Bh);if(!(c<e.near||c>e.far))return{distance:c,point:gf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var bf=new L,xf=new L,Ia=class extends Ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),xf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(xf);e.setAttribute("lineDistance",new Ge(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Cr=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_f=new Le,Jh=new wi,fl=new On,pl=new L,La=class extends St{constructor(e=new ct,t=new Cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;_f.copy(s).invert(),Jh.copy(e.ray).applyMatrix4(_f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);pl.fromBufferAttribute(u,m),yf(pl,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)pl.fromBufferAttribute(u,g),yf(pl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yf(i,e,t,n,s,r,a){let o=Jh.distanceSqToPoint(i);if(o<t){let l=new L;Jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Na=class extends rn{constructor(e=[],t=ms,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_n=class extends rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends rn{constructor(e,t,n=bi,s,r,a,o=Ft,l=Ft,c,h=Mi,u=1){if(h!==Mi&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nl=class extends Ti{constructor(e,t=bi,n=ms,s,r,a=Ft,o=Ft,l,c=Mi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(v,m,p,_,S,b,x,y,w,M,T){let E=b/w,P=x/M,I=b/2,N=x/2,D=y/2,z=w+1,V=M+1,Z=0,ue=0,$=new L;for(let re=0;re<V;re++){let le=re*P-N;for(let Ne=0;Ne<z;Ne++){let Re=Ne*E-I;$[v]=Re*_,$[m]=le*S,$[p]=D,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=y>0?1:-1,h.push($.x,$.y,$.z),u.push(Ne/w),u.push(1-re/M),Z+=1}}for(let re=0;re<M;re++)for(let le=0;le<w;le++){let Ne=d+le+z*re,Re=d+le+z*(re+1),rt=d+(le+1)+z*(re+1),We=d+(le+1)+z*re;l.push(Ne,Re,We),l.push(Re,rt,We),ue+=6}o.addGroup(f,ue,T),f+=ue,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Pr=class i extends ct{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,v=s+1,m=new L,p=new L;for(let _=0;_<=g;_++){let S=0,b=0,x=0,y=0;if(_<=n){let T=_/n,E=T*Math.PI/2;b=-h-e*Math.cos(E),x=e*Math.sin(E),y=-e*Math.cos(E),S=T*u}else if(_<=n+r){let T=(_-n)/r;b=-h+T*t,x=e,y=0,S=u+T*d}else{let T=(_-n-r)/n,E=T*Math.PI/2;b=h+e*Math.sin(E),x=e*Math.cos(E),y=e*Math.sin(E),S=u+d+T*u}let w=Math.max(0,Math.min(1,S/f)),M=0;_===0?M=.5/s:_===g&&(M=-.5/s);for(let T=0;T<=s;T++){let E=T/s,P=E*Math.PI*2,I=Math.sin(P),N=Math.cos(P);p.x=-x*N,p.y=b,p.z=x*I,o.push(p.x,p.y,p.z),m.set(-x*N,y,x*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+M,w)}if(_>0){let T=(_-1)*v;for(let E=0;E<s;E++){let P=T+E,I=T+E+1,N=_*v+E,D=_*v+E+1;a.push(P,I,N),a.push(I,D,N)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ua=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function _(){let b=new L,x=new L,y=0,w=(t-e)/n;for(let M=0;M<=r;M++){let T=[],E=M/r,P=E*(t-e)+e;for(let I=0;I<=s;I++){let N=I/s,D=N*l+o,z=Math.sin(D),V=Math.cos(D);x.x=P*z,x.y=-E*n+m,x.z=P*V,u.push(x.x,x.y,x.z),b.set(z,w,V).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-E),T.push(g++)}v.push(T)}for(let M=0;M<s;M++)for(let T=0;T<r;T++){let E=v[T][M],P=v[T+1][M],I=v[T+1][M+1],N=v[T][M+1];(e>0||T!==0)&&(h.push(E,P,N),y+=3),(t>0||T!==r-1)&&(h.push(P,I,N),y+=3)}c.addGroup(p,y,0),p+=y}function S(b){let x=g,y=new oe,w=new L,M=0,T=b===!0?e:t,E=b===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let D=I/s*l+o,z=Math.cos(D),V=Math.sin(D);w.x=T*V,w.y=m*E,w.z=T*z,u.push(w.x,w.y,w.z),d.push(0,E,0),y.x=z*.5+.5,y.y=V*.5*E+.5,f.push(y.x,y.y),g++}for(let I=0;I<s;I++){let N=x+I,D=P+I;b===!0?h.push(D,D+1,N):h.push(D+1,D,N),M+=3}c.addGroup(p,M,b===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new Le;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(dt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ir=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fl=class extends Ir{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Su(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vf=new L,Mf=new L,zh=new Su,Gh=new Su,Hh=new Su,pi=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Mf.subVectors(s[0],s[1]).add(s[0]),c=Mf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),zh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Gh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Hh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Gh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(zh.calc(l),Gh.calc(l),Hh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rg(i,e){let t=1-i;return t*t*e}function ag(i,e){return 2*(1-i)*i*e}function og(i,e){return i*i*e}function ya(i,e,t,n){return rg(i,e)+ag(i,t)+og(i,n)}function lg(i,e){let t=1-i;return t*t*t*e}function cg(i,e){let t=1-i;return 3*t*t*i*e}function hg(i,e){return 3*(1-i)*i*i*e}function ug(i,e){return i*i*i*e}function va(i,e,t,n,s){return lg(i,e)+cg(i,t)+hg(i,n)+ug(i,s)}var Oa=class extends Vn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(e,s.x,r.x,a.x,o.x),va(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ul=class extends Vn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(e,s.x,r.x,a.x,o.x),va(e,s.y,r.y,a.y,o.y),va(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends Vn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$n=class extends Vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Vn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Vn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y),ya(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Sf(o,l.x,c.x,h.x,u.x),Sf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Ol=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:pi,CubicBezierCurve:Oa,CubicBezierCurve3:Ul,EllipseCurve:Ir,LineCurve:ka,LineCurve3:$n,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:za,SplineCurve:Ga}),Qn=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}},tn=class extends Qn{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ka(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ba(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Oa(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ir(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kt=class extends tn{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new tn().fromJSON(s))}return this}};function dg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_p(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=bg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ha(r,a,t,o,l,c,0),a}function _p(i,e,t,n,s){let r;if(s===Rg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=wf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=wf(a/n|0,i[a],i[a+1],r);return r&&Dr(r,r.next)&&(Wa(r),r=r.next),r}function Ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Dr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Mg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?pg(i,n,s,r):fg(i)){e.push(l.i,i.i,c.i),Wa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mg(Ls(i),e),Ha(i,e,t,n,s,r,2)):a===2&&gg(i,e,t,n,s,r):Ha(Ls(i),e,t,n,s,r,1);break}}}function fg(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ba(s,o,r,l,a,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=Zh(f,g,e,t,n),_=Zh(v,m,e,t,n),S=i.prevZ,b=i.nextZ;for(;S&&S.z>=p&&b&&b.z<=_;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ba(o,h,l,u,c,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ba(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ba(o,h,l,u,c,d,S.x,S.y)&&Ut(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ba(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function mg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Dr(n,s)&&vp(n,t,t.next,s)&&Va(n,s)&&Va(s,n)&&(e.push(n.i,t.i,s.i),Wa(t),Wa(t.next),t=i=s),t=t.next}while(t!==i);return Ls(t)}function gg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tg(a,o)){let l=Mp(a,o);a=Ls(a,a.next),l=Ls(l,l.next),Ha(a,e,t,n,s,r,0),Ha(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function bg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=_p(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wg(c))}s.sort(xg);for(let r=0;r<s.length;r++)t=_g(s[r],t);return t}function xg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _g(i,e){let t=yg(i,e);if(!t)return e;let n=Mp(t,i);return Ls(n,n.next),Ls(t,t.next)}function yg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Dr(i,t))return t;do{if(Dr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&yp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Va(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&vg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function vg(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function Mg(i,e,t,n){let s=i;do s.z===0&&(s.z=Zh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sg(s)}function Sg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Zh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ba(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&yp(i,e,t,n,s,r,a,o)}function Tg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Eg(i,e)&&(Va(i,e)&&Va(e,i)&&Ag(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Dr(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Dr(i,e){return i.x===e.x&&i.y===e.y}function vp(i,e,t,n){let s=gl(Ut(i,e,t)),r=gl(Ut(i,e,n)),a=gl(Ut(t,n,i)),o=gl(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&ml(i,t,e)||r===0&&ml(i,n,e)||a===0&&ml(t,i,n)||o===0&&ml(t,e,n))}function ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gl(i){return i>0?1:i<0?-1:0}function Eg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function Ag(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mp(i,e){let t=$h(i.i,i.x,i.y),n=$h(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wf(i,e,t,n){let s=$h(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $h(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Qh=class{static triangulate(e,t,n=2){return dg(e,t,n)}},Jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Tf(e),Ef(n,e);let a=e.length;t.forEach(Tf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ef(n,t[l]);let o=Qh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Tf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ef(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Tn=class i extends ct{constructor(e=new kt([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Cg,S,b=!1,x,y,w,M;if(p){S=p.getSpacedPoints(h),b=!0,d=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;x=p.computeFrenetFrames(h,ae),y=new L,w=new L,M=new L}d||(m=0,f=0,g=0,v=0);let T=o.extractPoints(c),E=T.shape,P=T.holes;if(!Jn.isClockWise(E)){E=E.reverse();for(let ae=0,ge=P.length;ae<ge;ae++){let xe=P[ae];Jn.isClockWise(xe)&&(P[ae]=xe.reverse())}}function N(ae){let xe=10000000000000001e-36,_e=ae[0];for(let Me=1;Me<=ae.length;Me++){let je=Me%ae.length,De=ae[je],$e=De.x-_e.x,Oe=De.y-_e.y,G=$e*$e+Oe*Oe,ut=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(_e.x),Math.abs(_e.y)),it=xe*ut*ut;if(G<=it){ae.splice(je,1),Me--;continue}_e=De}}N(E),P.forEach(N);let D=P.length,z=E;for(let ae=0;ae<D;ae++){let ge=P[ae];E=E.concat(ge)}function V(ae,ge,xe){return ge||nt("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ge,xe)}let Z=E.length;function ue(ae,ge,xe){let _e,Me,je,De=ae.x-ge.x,$e=ae.y-ge.y,Oe=xe.x-ae.x,G=xe.y-ae.y,ut=De*De+$e*$e,it=De*G-$e*Oe;if(Math.abs(it)>Number.EPSILON){let F=Math.sqrt(ut),A=Math.sqrt(Oe*Oe+G*G),j=ge.x-$e/F,K=ge.y+De/F,ne=xe.x-G/A,be=xe.y+Oe/A,ve=((ne-j)*G-(be-K)*Oe)/(De*G-$e*Oe);_e=j+De*ve-ae.x,Me=K+$e*ve-ae.y;let ce=_e*_e+Me*Me;if(ce<=2)return new oe(_e,Me);je=Math.sqrt(ce/2)}else{let F=!1;De>Number.EPSILON?Oe>Number.EPSILON&&(F=!0):De<-Number.EPSILON?Oe<-Number.EPSILON&&(F=!0):Math.sign($e)===Math.sign(G)&&(F=!0),F?(_e=-$e,Me=De,je=Math.sqrt(ut)):(_e=De,Me=$e,je=Math.sqrt(ut/2))}return new oe(_e/je,Me/je)}let $=[];for(let ae=0,ge=z.length,xe=ge-1,_e=ae+1;ae<ge;ae++,xe++,_e++)xe===ge&&(xe=0),_e===ge&&(_e=0),$[ae]=ue(z[ae],z[xe],z[_e]);let re=[],le,Ne=$.concat();for(let ae=0,ge=D;ae<ge;ae++){let xe=P[ae];le=[];for(let _e=0,Me=xe.length,je=Me-1,De=_e+1;_e<Me;_e++,je++,De++)je===Me&&(je=0),De===Me&&(De=0),le[_e]=ue(xe[_e],xe[je],xe[De]);re.push(le),Ne=Ne.concat(le)}let Re;if(m===0)Re=Jn.triangulateShape(z,P);else{let ae=[],ge=[];for(let xe=0;xe<m;xe++){let _e=xe/m,Me=f*Math.cos(_e*Math.PI/2),je=g*Math.sin(_e*Math.PI/2)+v;for(let De=0,$e=z.length;De<$e;De++){let Oe=V(z[De],$[De],je);te(Oe.x,Oe.y,-Me),_e===0&&ae.push(Oe)}for(let De=0,$e=D;De<$e;De++){let Oe=P[De];le=re[De];let G=[];for(let ut=0,it=Oe.length;ut<it;ut++){let F=V(Oe[ut],le[ut],je);te(F.x,F.y,-Me),_e===0&&G.push(F)}_e===0&&ge.push(G)}}Re=Jn.triangulateShape(ae,ge)}let rt=Re.length,We=g+v;for(let ae=0;ae<Z;ae++){let ge=d?V(E[ae],Ne[ae],We):E[ae];b?(w.copy(x.normals[0]).multiplyScalar(ge.x),y.copy(x.binormals[0]).multiplyScalar(ge.y),M.copy(S[0]).add(w).add(y),te(M.x,M.y,M.z)):te(ge.x,ge.y,0)}for(let ae=1;ae<=h;ae++)for(let ge=0;ge<Z;ge++){let xe=d?V(E[ge],Ne[ge],We):E[ge];b?(w.copy(x.normals[ae]).multiplyScalar(xe.x),y.copy(x.binormals[ae]).multiplyScalar(xe.y),M.copy(S[ae]).add(w).add(y),te(M.x,M.y,M.z)):te(xe.x,xe.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){let ge=ae/m,xe=f*Math.cos(ge*Math.PI/2),_e=g*Math.sin(ge*Math.PI/2)+v;for(let Me=0,je=z.length;Me<je;Me++){let De=V(z[Me],$[Me],_e);te(De.x,De.y,u+xe)}for(let Me=0,je=P.length;Me<je;Me++){let De=P[Me];le=re[Me];for(let $e=0,Oe=De.length;$e<Oe;$e++){let G=V(De[$e],le[$e],_e);b?te(G.x,G.y+S[h-1].y,S[h-1].x+xe):te(G.x,G.y,u+xe)}}}tt(),se();function tt(){let ae=s.length/3;if(d){let ge=0,xe=Z*ge;for(let _e=0;_e<rt;_e++){let Me=Re[_e];ze(Me[2]+xe,Me[1]+xe,Me[0]+xe)}ge=h+m*2,xe=Z*ge;for(let _e=0;_e<rt;_e++){let Me=Re[_e];ze(Me[0]+xe,Me[1]+xe,Me[2]+xe)}}else{for(let ge=0;ge<rt;ge++){let xe=Re[ge];ze(xe[2],xe[1],xe[0])}for(let ge=0;ge<rt;ge++){let xe=Re[ge];ze(xe[0]+Z*h,xe[1]+Z*h,xe[2]+Z*h)}}n.addGroup(ae,s.length/3-ae,0)}function se(){let ae=s.length/3,ge=0;k(z,ge),ge+=z.length;for(let xe=0,_e=P.length;xe<_e;xe++){let Me=P[xe];k(Me,ge),ge+=Me.length}n.addGroup(ae,s.length/3-ae,1)}function k(ae,ge){let xe=ae.length;for(;--xe>=0;){let _e=xe,Me=xe-1;Me<0&&(Me=ae.length-1);for(let je=0,De=h+m*2;je<De;je++){let $e=Z*je,Oe=Z*(je+1),G=ge+_e+$e,ut=ge+Me+$e,it=ge+Me+Oe,F=ge+_e+Oe;pe(G,ut,it,F)}}}function te(ae,ge,xe){l.push(ae),l.push(ge),l.push(xe)}function ze(ae,ge,xe){Je(ae),Je(ge),Je(xe);let _e=s.length/3,Me=_.generateTopUV(n,s,_e-3,_e-2,_e-1);mt(Me[0]),mt(Me[1]),mt(Me[2])}function pe(ae,ge,xe,_e){Je(ae),Je(ge),Je(_e),Je(ge),Je(xe),Je(_e);let Me=s.length/3,je=_.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);mt(je[0]),mt(je[1]),mt(je[3]),mt(je[1]),mt(je[2]),mt(je[3])}function Je(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function mt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ol[s.type]().fromJSON(s)),new i(n,e.options)}},Cg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(d,1-g),new oe(v,1-p)]:[new oe(o,1-l),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};function Pg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var mi=class i extends ct{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=dt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new oe,f=new L,g=new L,v=new L,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){let S=n+_*h*s,b=Math.sin(S),x=Math.cos(S);for(let y=0;y<=e.length-1;y++){u.x=e[y].x*b,u.y=e[y].y,u.z=e[y].x*x,a.push(u.x,u.y,u.z),d.x=_/t,d.y=y/(e.length-1),o.push(d.x,d.y);let w=l[3*y+0]*b,M=l[3*y+1],T=l[3*y+0]*x;c.push(w,M,T)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let b=S+_*e.length,x=b,y=b+e.length,w=b+e.length+1,M=b+1;r.push(x,y,M),r.push(w,M,y)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var on=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let S=0;S<c;S++){let b=S*u-r;g.push(b,-_,0),v.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let S=_+c*p,b=_+c*(p+1),x=_+1+c*(p+1),y=_+1+c*p;f.push(S,b,y),f.push(b,x,y)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Lr=class i extends ct{constructor(e=new kt([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];Jn.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=Jn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],S=_[0]+u,b=_[1]+u,x=_[2]+u;n.push(S,b,x),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ig(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Ig(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Dn=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],S=p/n,b=a+S*o,x=e*Math.cos(b),y=Math.sqrt(e*e-x*x),w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let M=0;M<=t;M++){let T=M/t,E=s+T*r;u.x=-y*Math.cos(E),u.y=x,u.z=y*Math.sin(E),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+w,1-S),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let S=h[p][_+1],b=h[p][_],x=h[p+1][_],y=h[p+1][_+1];(p!==0||a>0)&&f.push(S,b,y),(p!==n-1||l<Math.PI)&&f.push(b,x,y)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,S=(s+1)*(v-1)+m,b=(s+1)*v+m;l.push(p,_,b),l.push(_,S,b)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Wn=class i extends ct{constructor(e=new za(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new oe,h=new L,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function v(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),_(),p()}function m(S){h=e.getPointAt(S/t,h);let b=a.normals[S],x=a.binormals[S];for(let y=0;y<=s;y++){let w=y/s*Math.PI*2,M=Math.sin(w),T=-Math.cos(w);l.x=T*b.x+M*x.x,l.y=T*b.y+M*x.y,l.z=T*b.z+M*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=t;S++)for(let b=1;b<=s;b++){let x=(s+1)*(S-1)+(b-1),y=(s+1)*S+(b-1),w=(s+1)*S+b,M=(s+1)*(S-1)+b;g.push(x,y,M),g.push(y,w,M)}}function _(){for(let S=0;S<=t;S++)for(let b=0;b<=s;b++)c.x=S/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ol[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var qa=class extends bn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new He(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Af(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Af(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Af(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var si={clone:zs,merge:An},Lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lg,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nr=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ze=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends Ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xa=class extends bn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ja=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fr=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Fg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Ug(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yh:r=e,o=2*t-n;break;case Kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:a=e,l=2*n-t;break;case Kh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let x=0;x!==o;++x)r[x]=p*a[h+x]+_*a[c+x]+S*a[l+x]+b*a[u+x];return r}},zl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Gl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hl=class extends Ei{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,_=u[p],S=u[p+1],b=e*d+g*2,x=h[b],y=h[b+1],w=kg(n,t,_,x,s);r[g]=Sp(w,v,S,y,m)}return r}};function Sp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Og(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function kg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Og(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),vl(e.settings)&&(n.settings={inTangents:os(e.settings.inTangents,Array),outTangents:os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break;case Xh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return _l;case this.InterpolantFactoryMethodBezier:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;vl(this.settings)&&(Cf(this.settings.inTangents,e),Cf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){nt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&x0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Cs;var ji=class extends kn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Rs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="color";var Yi=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Yi.prototype.ValueTypeName="number";var Vl=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ki=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends kn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Rs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};cs.prototype.ValueTypeName="vector";var Ka=class{constructor(e="",t=-1,n=[],s=ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(zg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Fg(l);l=Rf(l,1,h),c=Rf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Bg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return Ya;case"quaternion":return Ki;case"bool":case"boolean":return ji;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bg(i.type);if(i.times===void 0){let n=[],s=[];Ug(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),vl(i.settings)&&(t.settings={inTangents:os(i.settings.inTangents,Float32Array),outTangents:os(i.settings.outTangents,Float32Array)}),t}var vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wp=new Wl,ei=class{constructor(e){this.manager=e!==void 0?e:wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},eu=class extends Error{constructor(e,t){super(e),this.response=t}},hs=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:S,value:b})=>{if(S)p.close();else{v+=b.byteLength;let x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let y=0,w=h.length;y<w;y++){let M=h[y];M.onProgress&&M.onProgress(x)}p.enqueue(b),_()}},S=>{p.error(S)})}}});return new Response(m)}else throw new eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{vi.add(`file:${e}`,c);let h=Gi[e];delete Gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=new WeakMap,ql=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=fr.get(a);u===void 0&&(u=[],fr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=yr("img");function l(){h(),t&&t(this);let u=fr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}fr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),vi.remove(`image:${e}`);let d=fr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ja=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new rn,a=new ql(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ns=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Za=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vh=new Le,If=new L,Df=new L,Ur=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Df),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bl=new L,xl=new gn,yi=new L,$a=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bl,xl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,xl,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bl,xl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,xl,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new L,Lf=new oe,Nf=new oe,qt=class extends $a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Lf,Nf),t.subVectors(Nf,Lf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tu=class extends Ur{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},us=class extends Ns{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nu=class extends Ur{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Zi=class extends Ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ti=class extends $a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},iu=class extends Ur{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new iu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $i=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wh=new WeakMap,Qa=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Wh.has(a)===!0?(s&&s(Wh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wh.set(l,c),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pr=-90,mr=1,Xl=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new qt(pr,mr,e,t);r.layers=this.layers,this.add(r);let a=new qt(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new qt(pr,mr,e,t);o.layers=this.layers,this.add(o);let l=new qt(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new qt(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jl=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Gg(){this._document.hidden===!1&&this.reset()}var Tu="\\[\\]\\.:\\/",Hg=new RegExp("["+Tu+"]","g"),Eu="[^"+Tu+"]",Vg="[^"+Tu.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",Eu),qg=/(WCOD+)?/.source.replace("WCOD",Vg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),Yg=new RegExp("^"+Wg+qg+Xg+jg+"$"),Kg=["material","materials","bones","map"],su=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hg,"")}static parseTrackName(e){let t=Yg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Kg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=su;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q1=new Float32Array(1);var Ff=new Le,to=class{constructor(e,t,n=0,s=1/0){this.ray=new wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(e,t=!0,n=[]){return ru(e,this,n,t),n.sort(Uf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,n,t);return n.sort(Uf),n}};function Uf(i,e){return i.distance-e.distance}function ru(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ru(r[a],e,t,!0)}}var Or=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var au=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var no=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Au(i,e,t,n){let s=Jg(n);switch(t){case bu:return i*e;case tc:return i*e/s.components*s.byteLength;case nc:return i*e/s.components*s.byteLength;case bs:return i*e*2/s.components*s.byteLength;case ic:return i*e*2/s.components*s.byteLength;case xu:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case sc:return i*e*4/s.components*s.byteLength;case go:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(e,8)/4;case rc:case oc:return Math.max(i,8)*Math.max(e,8)/2;case cc:case hc:case dc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case yo:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jg(i){switch(i){case En:case fu:return{byteLength:1,components:1};case Gr:case pu:case Bt:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case bi:case $l:case qn:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $g(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ub=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,db=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$b=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Qg,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:sb,aomap_fragment:rb,aomap_pars_fragment:ab,batching_pars_vertex:ob,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:hb,bsdfs:ub,iridescence_fragment:db,bumpmap_pars_fragment:fb,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:bb,color_fragment:xb,color_pars_fragment:_b,color_pars_vertex:yb,color_vertex:vb,common:Mb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Eb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:Pb,envmap_fragment:Ib,envmap_common_pars_fragment:Db,envmap_pars_fragment:Lb,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:qb,envmap_vertex:Fb,fog_vertex:Ub,fog_pars_vertex:Ob,fog_fragment:kb,fog_pars_fragment:Bb,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Wb,lights_toon_fragment:Xb,lights_toon_pars_fragment:jb,lights_phong_fragment:Yb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Jb,lights_physical_pars_fragment:Zb,lights_fragment_begin:$b,lights_fragment_maps:Qb,lights_fragment_end:ex,lightprobes_pars_fragment:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ax,map_pars_fragment:ox,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:bx,normal_fragment_maps:xx,normal_pars_fragment:_x,normal_pars_vertex:yx,normal_vertex:vx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Ex,opaque_fragment:Ax,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Px,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Ux,shadowmap_vertex:Ox,shadowmask_pars_fragment:kx,skinbase_vertex:Bx,skinning_pars_vertex:zx,skinning_vertex:Gx,skinnormal_vertex:Hx,specularmap_fragment:Vx,specularmap_pars_fragment:Wx,tonemapping_fragment:qx,tonemapping_pars_fragment:Xx,transmission_fragment:jx,transmission_pars_fragment:Yx,uv_pars_fragment:Kx,uv_pars_vertex:Jx,uv_vertex:Zx,worldpos_vertex:$x,background_vert:Qx,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:a_,distance_vert:o_,distance_frag:l_,equirect_vert:c_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:d_,meshbasic_vert:f_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:b_,meshmatcap_frag:x_,meshnormal_vert:__,meshnormal_frag:y_,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:w_,meshtoon_vert:T_,meshtoon_frag:E_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:P_,sprite_vert:I_,sprite_frag:D_},Fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ci={basic:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new He(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:An([Fe.common,Fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:An([Fe.lights,Fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ci.physical={uniforms:An([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Oc={r:0,b:0,g:0},L_=new Le,jp=new lt;jp.set(-1,0,0,0,1,0,0,0,1);function N_(i,e,t,n,s,r){let a=new He(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let b=_.backgroundBlurriness>0;S=e.get(S,b)}return S}function g(_){let S=!1,b=f(_);b===null?m(a,o):b&&b.isColor&&(m(b,1),S=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,S){let b=f(S);b&&(b.isCubeTexture||b.mapping===mo)?(c===void 0&&(c=new Ee(new an(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:zs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jp),c.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ee(new on(2,2),new Nt({name:"BackgroundMaterial",uniforms:zs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(Oc,wu(i)),t.buffers.color.setClear(Oc.r,Oc.g,Oc.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:v,dispose:p}}function F_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,I,N,D,z){let V=!1,Z=u(P,D,N,I);r!==Z&&(r=Z,c(r.object)),V=f(P,D,N,z),V&&g(P,D,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(P,I,N,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,N,D){let z=D.wireframe===!0,V=n[I.id];V===void 0&&(V={},n[I.id]=V);let Z=P.isInstancedMesh===!0?P.id:0,ue=V[Z];ue===void 0&&(ue={},V[Z]=ue);let $=ue[N.id];$===void 0&&($={},ue[N.id]=$);let re=$[z];return re===void 0&&(re=d(l()),$[z]=re),re}function d(P){let I=[],N=[],D=[];for(let z=0;z<t;z++)I[z]=0,N[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,I,N,D){let z=r.attributes,V=I.attributes,Z=0,ue=N.getAttributes();for(let $ in ue)if(ue[$].location>=0){let le=z[$],Ne=V[$];if(Ne===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Ne=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Ne=P.instanceColor)),le===void 0||le.attribute!==Ne||Ne&&le.data!==Ne.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function g(P,I,N,D){let z={},V=I.attributes,Z=0,ue=N.getAttributes();for(let $ in ue)if(ue[$].location>=0){let le=V[$];le===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));let Ne={};Ne.attribute=le,le&&le.data&&(Ne.data=le.data),z[$]=Ne,Z++}r.attributes=z,r.attributesNum=Z,r.index=D}function v(){let P=r.newAttributes;for(let I=0,N=P.length;I<N;I++)P[I]=0}function m(P){p(P,0)}function p(P,I){let N=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;N[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),z[P]!==I&&(i.vertexAttribDivisor(P,I),z[P]=I)}function _(){let P=r.newAttributes,I=r.enabledAttributes;for(let N=0,D=I.length;N<D;N++)I[N]!==P[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function S(P,I,N,D,z,V,Z){Z===!0?i.vertexAttribIPointer(P,I,N,z,V):i.vertexAttribPointer(P,I,N,D,z,V)}function b(P,I,N,D){v();let z=D.attributes,V=N.getAttributes(),Z=I.defaultAttributeValues;for(let ue in V){let $=V[ue];if($.location>=0){let re=z[ue];if(re===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),re!==void 0){let le=re.normalized,Ne=re.itemSize,Re=e.get(re);if(Re===void 0)continue;let rt=Re.buffer,We=Re.type,tt=Re.bytesPerElement,se=We===i.INT||We===i.UNSIGNED_INT||re.gpuType===$l;if(re.isInterleavedBufferAttribute){let k=re.data,te=k.stride,ze=re.offset;if(k.isInstancedInterleavedBuffer){for(let pe=0;pe<$.locationSize;pe++)p($.location+pe,k.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pe=0;pe<$.locationSize;pe++)m($.location+pe);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let pe=0;pe<$.locationSize;pe++)S($.location+pe,Ne/$.locationSize,We,le,te*tt,(ze+Ne/$.locationSize*pe)*tt,se)}else{if(re.isInstancedBufferAttribute){for(let k=0;k<$.locationSize;k++)p($.location+k,re.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let k=0;k<$.locationSize;k++)m($.location+k);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let k=0;k<$.locationSize;k++)S($.location+k,Ne/$.locationSize,We,le,Ne*tt,Ne/$.locationSize*k*tt,se)}}else if(Z!==void 0){let le=Z[ue];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv($.location,le);break;case 3:i.vertexAttrib3fv($.location,le);break;case 4:i.vertexAttrib4fv($.location,le);break;default:i.vertexAttrib1fv($.location,le)}}}}_()}function x(){T();for(let P in n){let I=n[P];for(let N in I){let D=I[N];for(let z in D){let V=D[z];for(let Z in V)h(V[Z].object),delete V[Z];delete D[z]}}delete n[P]}}function y(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let N in I){let D=I[N];for(let z in D){let V=D[z];for(let Z in V)h(V[Z].object),delete V[Z];delete D[z]}}delete n[P.id]}function w(P){for(let I in n){let N=n[I];for(let D in N){let z=N[D];if(z[P.id]===void 0)continue;let V=z[P.id];for(let Z in V)h(V[Z].object),delete V[Z];delete z[P.id]}}}function M(P){for(let I in n){let N=n[I],D=P.isInstancedMesh===!0?P.id:0,z=N[D];if(z!==void 0){for(let V in z){let Z=z[V];for(let ue in Z)h(Z[ue].object),delete Z[ue];delete z[V]}delete N[D],Object.keys(N).length===0&&delete n[I]}}}function T(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function U_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function O_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==nn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let M=w===Bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==En&&w!==qn&&!M&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:b,maxSamples:x,samples:y}}function k_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,S=_*4,b=p.clippingState||null;l.value=b,b=h(g,d,S,f);for(let x=0;x!==S;++x)b[x]=t[x];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=f;S!==v;++S,b+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var qr=4,B_=6,z_=20,G_=256,So=new ti,Tp=new He,Ru=null,Cu=0,Pu=0,Iu=!1,H_=new L,Gs=new L,Hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=H_}=r;Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Cu,Pu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Bt,format:nn,colorSpace:sn,depthBuffer:!1},s=Ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=V_(r)),this._blurMaterial=q_(r,e,t),this._ggxMaterial=W_(r,e,t)}return s}_compileMaterial(e){let t=new Ee(new ct,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Tp),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new an,new It({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(Tp),p=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let x=this._cubeSize;Wr(s,b*x,S>2?x:0,x,x),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ms||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-qr?n-g+qr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Wr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,So),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Wr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,So)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-qr?s-this._lodMax+qr:0),d=4*(this._cubeSize-h);Wr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,So)}};function V_(i){let e=[],t=[],n=i,s=i-qr+1+B_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,S=p>2?0:-1,b=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];g.set(b,f*d*p);for(let x=0;x<d;x++){let y=h[x*2]*2-1,w=h[x*2+1]*2-1;p===0?Gs.set(1,w,y):p===1?Gs.set(-y,1,-w):p===2?Gs.set(-y,w,1):p===3?Gs.set(-1,w,-y):p===4?Gs.set(-y,-1,w):Gs.set(y,w,-1),Gs.toArray(v,(p*d+x)*f)}}let m=new ct;m.setAttribute("position",new Qt(g,f)),m.setAttribute("outputDirection",new Qt(v,f)),t.push(new Ee(m,null)),n>qr&&n--}return{lodMeshes:t,sizeLods:e}}function Ep(i,e,t){let n=new Lt(i,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W_(i,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function q_(i,e,t){return new Nt({name:"SphericalGaussianBlur",defines:{SAMPLES:z_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Ap(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Rp(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Na(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Yt});r.uniforms.tEquirect.value=t;let a=new Ee(s,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Dt),new Xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function X_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Br||f===Jl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Bc(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Br||f===Jl,v=f===ms||f===ks;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Hs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Hs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Br?d.mapping=ms:f===Jl&&(d.mapping=ks),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function j_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function Y_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let S=0,b=_.length;S<b;S+=3){let x=_[S+0],y=_[S+1],w=_[S+2];d.push(x,y,y,w,w,x)}}else{let _=g.array;v=g.version;for(let S=0,b=_.length/3-1;S<b;S+=3){let x=S+0,y=S+1,w=S+2;d.push(x,y,y,w,w,x)}}let m=new(g.count>=65535?Aa:Ea)(d,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function K_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function J_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let b=o.attributes.position.count*S,x=1;b>e.maxTextureSize&&(x=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let y=new Float32Array(b*x*4*u),w=new wa(y,b,x,u);w.type=qn,w.needsUpdate=!0;let M=S*4;for(let E=0;E<u;E++){let P=m[E],I=p[E],N=_[E],D=b*x*4*E;for(let z=0;z<P.count;z++){let V=z*M;f===!0&&(s.fromBufferAttribute(P,z),y[D+V+0]=s.x,y[D+V+1]=s.y,y[D+V+2]=s.z,y[D+V+3]=0),g===!0&&(s.fromBufferAttribute(I,z),y[D+V+4]=s.x,y[D+V+5]=s.y,y[D+V+6]=s.z,y[D+V+7]=0),v===!0&&(s.fromBufferAttribute(N,z),y[D+V+8]=s.x,y[D+V+9]=s.y,y[D+V+10]=s.z,y[D+V+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new oe(b,x)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Q_={[oo]:"LINEAR_TONE_MAPPING",[lo]:"REINHARD_TONE_MAPPING",[co]:"CINEON_TONE_MAPPING",[Os]:"ACES_FILMIC_TONE_MAPPING",[uo]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[ho]:"CUSTOM_TONE_MAPPING"};function ey(i,e,t,n,s,r){let a=new Lt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ct;c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let h=new Nr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ee(c,h),d=new ti(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,_=[],S=!1;this.setSize=function(b,x){a.setSize(b,x),o!==null&&o.setSize(b,x),l!==null&&l.setSize(b,x);for(let y=0;y<_.length;y++){let w=_[y];w.setSize&&w.setSize(b,x)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;let x=a.width,y=a.height;_.length>0&&o===null&&(o=new Lt(x,y,{type:Bt,depthBuffer:!1,stencilBuffer:!1}),l=new Lt(x,y,{type:Bt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let M=_[w];M.setSize&&M.setSize(x,y)}},this.begin=function(b,x){if(v||b.toneMapping===gi&&_.length===0)return!1;if(p=x,x!==null){let y=x.width,w=x.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return S===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return S},this.end=function(b,x){b.toneMapping=m,v=!0;let y=a,w=o;for(let M=0;M<_.length;M++){let T=_[M];T.enabled!==!1&&(T.render(b,w,y,x),T.needsSwap!==!1&&(y=w,w=w===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},ft.getTransfer(f)===yt&&(h.defines.SRGB_TRANSFER="");let M=Q_[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(p),b.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yp=new rn,Nu=new Ti(1,1),Kp=new wa,Jp=new Il,Zp=new Na,Cp=[],Pp=[],Ip=new Float32Array(16),Dp=new Float32Array(9),Lp=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cp[s];if(r===void 0&&(r=new Float32Array(s),Cp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=Pp[e];t===void 0&&(t=new Int32Array(e),Pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),hn(t,n)}}function ay(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Dp.set(n),i.uniformMatrix3fv(this.addr,!1,Dp),hn(t,n)}}function oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Ip.set(n),i.uniformMatrix4fv(this.addr,!1,Ip),hn(t,n)}}function ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nu.compareFunction=t.isReversedDepthBuffer()?Uc:Fc,r=Nu):r=Yp,t.setTexture2D(e||r,s)}function by(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jp,s)}function xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zp,s)}function _y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kp,s)}function yy(i){switch(i){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return ay;case 35676:return oy;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}function vy(i,e){i.uniform1fv(this.addr,e)}function My(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Sy(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function wy(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ty(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ey(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ay(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ry(i,e){i.uniform1iv(this.addr,e)}function Cy(i,e){i.uniform2iv(this.addr,e)}function Py(i,e){i.uniform3iv(this.addr,e)}function Iy(i,e){i.uniform4iv(this.addr,e)}function Dy(i,e){i.uniform1uiv(this.addr,e)}function Ly(i,e){i.uniform2uiv(this.addr,e)}function Ny(i,e){i.uniform3uiv(this.addr,e)}function Fy(i,e){i.uniform4uiv(this.addr,e)}function Uy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nu:a=Yp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Oy(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jp,r[a])}function ky(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zp,r[a])}function By(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kp,r[a])}function zy(i){switch(i){case 5126:return vy;case 35664:return My;case 35665:return Sy;case 35666:return wy;case 35674:return Ty;case 35675:return Ey;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Ly;case 36295:return Ny;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return By}}var Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yy(t.type)}},Uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zy(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Du=/(\w+)(\])?(\[|\.)?/g;function Np(i,e){i.seq.push(e),i.map[e.id]=e}function Gy(i,e,t){let n=i.name,s=n.length;for(Du.lastIndex=0;;){let r=Du.exec(n),a=Du.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Np(t,c===void 0?new Fu(o,i,e):new Uu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ou(o),Np(t,u)),t=u}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Gy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Fp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hy=37297,Vy=0;function Wy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Up=new lt;function qy(i){ft._getMatrix(Up,ft.workingColorSpace,i);let e=`mat3( ${Up.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Ma:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Op(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wy(i.getShaderSource(e),o)}else return r}function Xy(i,e){let t=qy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jy={[oo]:"Linear",[lo]:"Reinhard",[co]:"Cineon",[Os]:"ACESFilmic",[uo]:"AgX",[fo]:"Neutral",[ho]:"Custom"};function Yy(i,e){let t=jy[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new L;function Ky(){ft.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Zy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $y(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function kp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(i){return i.replace(Qy,tv)}var ev=new Map;function tv(i,e){let t=pt[e];if(t===void 0){let n=ev.get(e);if(n!==void 0)t=pt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ku(t)}var nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(i){return i.replace(nv,iv)}function iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var sv={[io]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function rv(i){return sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var av={[ms]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE_UV"};function ov(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":av[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lv={[ks]:"ENVMAP_MODE_REFRACTION"};function cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hv={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[ep]:"ENVMAP_BLENDING_MIX",[tp]:"ENVMAP_BLENDING_ADD"};function uv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hv[i.combine]||"ENVMAP_BLENDING_NONE"}function dv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rv(t),c=ov(t),h=cv(t),u=uv(t),d=dv(t),f=Jy(t),g=Zy(r),v=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`)):(m=[Gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[Gp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?pt.tonemapping_pars_fragment:"",t.toneMapping!==gi?Yy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Xy("linearToOutputTexel",t.outputColorSpace),Ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=ku(a),a=kp(a,t),a=Bp(a,t),o=ku(o),o=kp(o,t),o=Bp(o,t),a=zp(a),o=zp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+m+a,b=_+p+o,x=Fp(s,s.VERTEX_SHADER,S),y=Fp(s,s.FRAGMENT_SHADER,b);s.attachShader(v,x),s.attachShader(v,y),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(x)||"",D=s.getShaderInfoLog(y)||"",z=I.trim(),V=N.trim(),Z=D.trim(),ue=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,x,y);else{let re=Op(s,x,"vertex"),le=Op(s,y,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+re+`
`+le)}else z!==""?Ke("WebGLProgram: Program Info Log:",z):(V===""||Z==="")&&($=!1);$&&(P.diagnostics={runnable:ue,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(x),s.deleteShader(y),M=new Xr(s,v),T=$y(s,v)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,Hy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=y,this}var pv=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zu(e),t.set(e,n)),n}},zu=class{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}};function mv(i){return i===bs||i===yo||i===vo}function gv(i,e,t,n,s,r){let a=new Sr,o=new Bu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,T,E,P,I,N){let D=P.fog,z=I.geometry,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ue=e.get(M.envMap||V,Z),$=ue&&ue.mapping===mo?ue.image.height:null,re=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&Ke("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ne=le!==void 0?le.length:0,Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let rt,We,tt,se;if(re){let wt=Ci[re];rt=wt.vertexShader,We=wt.fragmentShader}else{rt=M.vertexShader,We=M.fragmentShader;let wt=o.getVertexShaderStage(M),xt=o.getFragmentShaderStage(M);o.update(M,wt,xt),tt=wt.id,se=xt.id}let k=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),ze=I.isInstancedMesh===!0,pe=I.isBatchedMesh===!0,Je=!!M.map,mt=!!M.matcap,ae=!!ue,ge=!!M.aoMap,xe=!!M.lightMap,_e=!!M.bumpMap&&M.wireframe===!1,Me=!!M.normalMap,je=!!M.displacementMap,De=!!M.emissiveMap,$e=!!M.metalnessMap,Oe=!!M.roughnessMap,G=M.anisotropy>0,ut=M.clearcoat>0,it=M.dispersion>0,F=M.retroreflectivity>0,A=M.iridescence>0,j=M.sheen>0,K=M.transmission>0,ne=G&&!!M.anisotropyMap,be=ut&&!!M.clearcoatMap,ve=ut&&!!M.clearcoatNormalMap,ce=ut&&!!M.clearcoatRoughnessMap,de=A&&!!M.iridescenceMap,Pe=A&&!!M.iridescenceThicknessMap,Ve=j&&!!M.sheenColorMap,Se=j&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Be=!!M.specularColorMap,qe=!!M.specularIntensityMap,et=K&&!!M.transmissionMap,q=K&&!!M.thicknessMap,Ce=!!M.gradientMap,fe=!!M.alphaMap,Ie=M.alphaTest>0,we=!!M.alphaHash,Q=!!M.extensions,Ue=gi;M.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let ke={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:We,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pe,batchingColor:pe&&I._colorsTexture!==null,instancing:ze,instancingColor:ze&&I.instanceColor!==null,instancingMorph:ze&&I.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:mt,envMap:ae,envMapMode:ae&&ue.mapping,envMapCubeUVHeight:$,aoMap:ge,lightMap:xe,bumpMap:_e,normalMap:Me,displacementMap:je,emissiveMap:De,normalMapObjectSpace:Me&&M.normalMapType===rp,normalMapTangentSpace:Me&&M.normalMapType===Vr,packedNormalMap:Me&&M.normalMapType===Vr&&mv(M.normalMap.format),metalnessMap:$e,roughnessMap:Oe,anisotropy:G,anisotropyMap:ne,clearcoat:ut,clearcoatMap:be,clearcoatNormalMap:ve,clearcoatRoughnessMap:ce,dispersion:it,retroreflection:F,iridescence:A,iridescenceMap:de,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ve,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:Be,specularIntensityMap:qe,transmission:K,transmissionMap:et,thicknessMap:q,gradientMap:Ce,opaque:M.transparent===!1&&M.blending===kr&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ie,alphaHash:we,combine:M.combine,mapUv:Je&&g(M.map.channel),aoMapUv:ge&&g(M.aoMap.channel),lightMapUv:xe&&g(M.lightMap.channel),bumpMapUv:_e&&g(M.bumpMap.channel),normalMapUv:Me&&g(M.normalMap.channel),displacementMapUv:je&&g(M.displacementMap.channel),emissiveMapUv:De&&g(M.emissiveMap.channel),metalnessMapUv:$e&&g(M.metalnessMap.channel),roughnessMapUv:Oe&&g(M.roughnessMap.channel),anisotropyMapUv:ne&&g(M.anisotropyMap.channel),clearcoatMapUv:be&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(M.sheenRoughnessMap.channel),specularMapUv:Ae&&g(M.specularMap.channel),specularColorMapUv:Be&&g(M.specularColorMap.channel),specularIntensityMapUv:qe&&g(M.specularIntensityMap.channel),transmissionMapUv:et&&g(M.transmissionMap.channel),thicknessMapUv:q&&g(M.thicknessMap.channel),alphaMapUv:fe&&g(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||G),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Je||fe),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&Me===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:te,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&ft.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vt,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Q&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&M.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)T.push(E),T.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(p(T,M),_(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function p(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){let T=f[M.type],E;if(T){let P=Ci[T];E=si.clone(P.uniforms)}else E=M.uniforms;return E}function b(M,T){let E=h.get(T);return E!==void 0?++E.usedTimes:(E=new fv(i,T,M,s),c.push(E),h.set(T,E)),E}function x(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function y(M){o.remove(M)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:x,releaseShaderCache:y,programs:c,dispose:w}}function bv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function l(d,f,g,v,m,p,_){_.reversedDepth===!0&&(m=-m);let S=o(d,f,g,v,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(d,f,g,v,m,p){let _=o(d,f,g,v,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||xv),n.length>1&&n.sort(f||Hp),s.length>1&&s.sort(f||Hp)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function _v(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vp,i.set(n,[a])):s>=r.length?(a=new Vp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function vv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Mv=0;function Sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wv(i){let e=new yv,t=vv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Le,a=new Le;function o(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,S=0,b=0,x=0,y=0,w=0,M=0,T=0,E=0;c.sort(Sv);for(let I=0,N=c.length;I<N;I++){let D=c[I],z=D.color,V=D.intensity,Z=D.distance,ue=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===bs?ue=D.shadow.map.texture:ue=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*V,u+=z.g*V,d+=z.b*V;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],V);E++}else if(D.isSunLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let re=D.shadow,le=t.get(D);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[g]=le,n.sunShadowMap[g]=ue;let Ne=re.getViewportCount();for(let Re=0;Re<Ne;Re++)n.sunShadowMatrix[v+Re]=re.getMatrix(Re),n.sunShadowCascade[v+Re]=re._cascadeData[Re];v+=Ne,g++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let re=D.shadow,le=t.get(D);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.directionalShadow[m]=le,n.directionalShadowMap[m]=ue,n.directionalShadowMatrix[m]=D.shadow.matrix,x++}n.directional[m]=$,m++}else if(D.isSpotLight){let $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(z).multiplyScalar(V),$.distance=Z,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[_]=$;let re=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,re.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=re.matrix,D.castShadow){let le=t.get(D);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.spotShadow[_]=le,n.spotShadowMap[_]=ue,w++}_++}else if(D.isRectAreaLight){let $=e.get(D);$.color.copy(z).multiplyScalar(V),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=$,S++}else if(D.isPointLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let re=D.shadow,le=t.get(D);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,le.shadowCameraNear=re.camera.near,le.shadowCameraFar=re.camera.far,n.pointShadow[p]=le,n.pointShadowMap[p]=ue,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=$,p++}else if(D.isHemisphereLight){let $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(V),$.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[b]=$,b++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==S||P.hemiLength!==b||P.numSunShadows!==g||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==w||P.numSpotMaps!==M||P.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=S,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=S,P.hemiLength=b,P.numSunShadows=g,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=w,P.numSpotMaps=M,P.numLightProbes=E,n.version=Mv++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let b=c[_];if(b.isSunLight){let x=n.sun[u];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(b.isSpotLight){let x=n.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let x=n.rectArea[v];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let x=n.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Wp(i){let e=new wv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wp(i),e.set(s,[o])):r>=a.length?(o=new Wp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Cv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qp=new Le,wo=new L,Lu=new L;function Pv(i,e,t){let n=new Ar,s=new oe,r=new oe,a=new Mt,o=new Fr,l=new kl,c={},h=t.maxTextureSize,u={[ni]:ln,[ln]:ni,[Vt]:Vt},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Ev,fragmentShader:Av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(y,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Bf&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=io);let T=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Yt),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=p!==this.type;N&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=y.length;D<z;D++){let V=y[D],Z=V.shadow;if(Z===void 0){Ke("WebGLShadowMap:",V,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ue=Z.getFrameExtents();s.multiply(ue),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,Z.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||N===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ps){if(V.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Lt(s.x,s.y,{format:bs,type:Bt,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),Z.map.texture.name=V.name+".shadowMap",Z.map.depthTexture=new Ti(s.x,s.y,qn),Z.map.depthTexture.name=V.name+".shadowMapDepth",Z.map.depthTexture.format=Mi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ft,Z.map.depthTexture.magFilter=Ft}else V.isPointLight?(Z.map=new Bc(s.x),Z.map.depthTexture=new Nl(s.x,bi)):(Z.map=new Lt(s.x,s.y),Z.map.depthTexture=new Ti(s.x,s.y,bi)),Z.map.depthTexture.name=V.name+".shadowMap",Z.map.depthTexture.format=Mi,this.type===io?(Z.map.depthTexture.compareFunction=$?Uc:Fc,Z.map.depthTexture.minFilter=Dt,Z.map.depthTexture.magFilter=Dt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ft,Z.map.depthTexture.magFilter=Ft);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let re=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();V.isPointLight!==!0&&Z.updateMatrices(V,M);for(let le=0;le<re;le++){let Ne=Z.getCamera(le);if(V.isPointLight){let Re=Z.camera,rt=Z.matrix,We=V.distance||Re.far;We!==Re.far&&(Re.far=We,Re.updateProjectionMatrix()),wo.setFromMatrixPosition(V.matrixWorld),Re.position.copy(wo),Lu.copy(Re.position),Lu.add(Rv[le]),Re.up.copy(Cv[le]),Re.lookAt(Lu),Re.updateMatrixWorld(),rt.makeTranslation(-wo.x,-wo.y,-wo.z),qp.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(qp,Re.coordinateSystem,Re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,le),i.clear();else{le===0&&(i.setRenderTarget(Z.map),i.clear());let Re=Z.getViewport(le);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),I.viewport(a)}n=Z.getFrustum(le),b(w,M,Ne,V,this.type)}Z.isPointLightShadow!==!0&&this.type===ps&&_(Z,M),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,P)};function _(y,w){let M=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new Lt(s.x,s.y,{format:bs,type:Bt}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,M,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,M,f,v,null)}function S(y,w,M,T){let E=null,P=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)E=P;else if(E=M.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=E.uuid,N=w.uuid,D=c[I];D===void 0&&(D={},c[I]=D);let z=D[N];z===void 0&&(z=E.clone(),D[N]=z,w.addEventListener("dispose",x)),E=z}if(E.visible=w.visible,E.wireframe=w.wireframe,T===ps?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=i.properties.get(E);I.light=M}return E}function b(y,w,M,T,E){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===ps)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let N=e.update(y),D=y.material;if(Array.isArray(D)){let z=N.groups;for(let V=0,Z=z.length;V<Z;V++){let ue=z[V],$=D[ue.materialIndex];if($&&$.visible){let re=S(y,$,T,E);y.onBeforeShadow(i,y,w,M,N,re,ue),i.renderBufferDirect(M,null,N,re,y,ue),y.onAfterShadow(i,y,w,M,N,re,ue)}}}else if(D.visible){let z=S(y,D,T,E);y.onBeforeShadow(i,y,w,M,N,z,null),i.renderBufferDirect(M,null,N,z,y,null),y.onAfterShadow(i,y,w,M,N,z,null)}}let I=y.children;for(let N=0,D=I.length;N<D;N++)b(I[N],w,M,T,E)}function x(y){y.target.removeEventListener("dispose",x);for(let M in c){let T=c[M],E=y.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function Iv(i,e){function t(){let q=!1,Ce=new Mt,fe=null,Ie=new Mt(0,0,0,0);return{setMask:function(we){fe!==we&&!q&&(i.colorMask(we,we,we,we),fe=we)},setLocked:function(we){q=we},setClear:function(we,Q,Ue,ke,wt){wt===!0&&(we*=ke,Q*=ke,Ue*=ke),Ce.set(we,Q,Ue,ke),Ie.equals(Ce)===!1&&(i.clearColor(we,Q,Ue,ke),Ie.copy(Ce))},reset:function(){q=!1,fe=null,Ie.set(-1,0,0,0)}}}function n(){let q=!1,Ce=!1,fe=null,Ie=null,we=null;return{setReversed:function(Q){if(Ce!==Q){let Ue=e.get("EXT_clip_control");Q?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ce=Q;let ke=we;we=null,this.setClear(ke)}},getReversed:function(){return Ce},setTest:function(Q){Q?k(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(Q){fe!==Q&&!q&&(i.depthMask(Q),fe=Q)},setFunc:function(Q){if(Ce&&(Q=gp[Q]),Ie!==Q){switch(Q){case Ml:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Q}},setLocked:function(Q){q=Q},setClear:function(Q){we!==Q&&(we=Q,Ce&&(Q=1-Q),i.clearDepth(Q))},reset:function(){q=!1,fe=null,Ie=null,we=null,Ce=!1}}}function s(){let q=!1,Ce=null,fe=null,Ie=null,we=null,Q=null,Ue=null,ke=null,wt=null;return{setTest:function(xt){q||(xt?k(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!q&&(i.stencilMask(xt),Ce=xt)},setFunc:function(xt,Un,fn){(fe!==xt||Ie!==Un||we!==fn)&&(i.stencilFunc(xt,Un,fn),fe=xt,Ie=Un,we=fn)},setOp:function(xt,Un,fn){(Q!==xt||Ue!==Un||ke!==fn)&&(i.stencilOp(xt,Un,fn),Q=xt,Ue=Un,ke=fn)},setLocked:function(xt){q=xt},setClear:function(xt){wt!==xt&&(i.clearStencil(xt),wt=xt)},reset:function(){q=!1,Ce=null,fe=null,Ie=null,we=null,Q=null,Ue=null,ke=null,wt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,S=null,b=null,x=null,y=null,w=null,M=new He(0,0,0),T=0,E=!1,P=null,I=null,N=null,D=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ue=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=ue>=1):$.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=ue>=2);let re=null,le={},Ne=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),rt=new Mt().fromArray(Ne),We=new Mt().fromArray(Re);function tt(q,Ce,fe,Ie){let we=new Uint8Array(4),Q=i.createTexture();i.bindTexture(q,Q),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<fe;Ue++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Ce+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Q}let se={};se[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(i.DEPTH_TEST),a.setFunc(br),_e(!1),Me(ou),k(i.CULL_FACE),ge(Yt);function k(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function te(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function ze(q,Ce){return d[q]!==Ce?(i.bindFramebuffer(q,Ce),d[q]=Ce,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ce),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function pe(q,Ce){let fe=g,Ie=!1;if(q){fe=f.get(Ce),fe===void 0&&(fe=[],f.set(Ce,fe));let we=q.textures;if(fe.length!==we.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ue=we.length;Q<Ue;Q++)fe[Q]=i.COLOR_ATTACHMENT0+Q;fe.length=we.length,Ie=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(fe)}function Je(q){return v!==q?(i.useProgram(q),v=q,!0):!1}let mt={[ii]:i.FUNC_ADD,[zf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};mt[Hf]=i.MIN,mt[Vf]=i.MAX;let ae={[Us]:i.ZERO,[Wf]:i.ONE,[qf]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[ao]:i.DST_COLOR,[ro]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[uu]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[Zf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[Qf]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(q,Ce,fe,Ie,we,Q,Ue,ke,wt,xt){if(q===Yt){m===!0&&(te(i.BLEND),m=!1);return}if(m===!1&&(k(i.BLEND),m=!0),q!==Yl){if(q!==p||xt!==E){if((_!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),_=ii,x=ii),xt)switch(q){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",q);break}else switch(q){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lu:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",q);break}S=null,b=null,y=null,w=null,M.set(0,0,0),T=0,p=q,E=xt}return}we=we||Ce,Q=Q||fe,Ue=Ue||Ie,(Ce!==_||we!==x)&&(i.blendEquationSeparate(mt[Ce],mt[we]),_=Ce,x=we),(fe!==S||Ie!==b||Q!==y||Ue!==w)&&(i.blendFuncSeparate(ae[fe],ae[Ie],ae[Q],ae[Ue]),S=fe,b=Ie,y=Q,w=Ue),(ke.equals(M)===!1||wt!==T)&&(i.blendColor(ke.r,ke.g,ke.b,wt),M.copy(ke),T=wt),p=q,E=!1}function xe(q,Ce){q.side===Vt?te(i.CULL_FACE):k(i.CULL_FACE);let fe=q.side===ln;Ce&&(fe=!fe),_e(fe),q.blending===kr&&q.transparent===!1?ge(Yt):ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ie=q.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),De(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(q){P!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),P=q)}function Me(q){q!==Of?(k(i.CULL_FACE),q!==I&&(q===ou?i.cullFace(i.BACK):q===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),I=q}function je(q){q!==N&&(Z&&i.lineWidth(q),N=q)}function De(q,Ce,fe){q?(k(i.POLYGON_OFFSET_FILL),(D!==Ce||z!==fe)&&(D=Ce,z=fe,a.getReversed()&&(Ce=-Ce),i.polygonOffset(Ce,fe))):te(i.POLYGON_OFFSET_FILL)}function $e(q){q?k(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function Oe(q){q===void 0&&(q=i.TEXTURE0+V-1),re!==q&&(i.activeTexture(q),re=q)}function G(q,Ce,fe){fe===void 0&&(re===null?fe=i.TEXTURE0+V-1:fe=re);let Ie=le[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[fe]=Ie),(Ie.type!==q||Ie.texture!==Ce)&&(re!==fe&&(i.activeTexture(fe),re=fe),i.bindTexture(q,Ce||se[q]),Ie.type=q,Ie.texture=Ce)}function ut(){let q=le[re];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(q){nt("WebGLState:",q)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(q){nt("WebGLState:",q)}}function A(){try{i.texSubImage2D(...arguments)}catch(q){nt("WebGLState:",q)}}function j(){try{i.texSubImage3D(...arguments)}catch(q){nt("WebGLState:",q)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(q){nt("WebGLState:",q)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(q){nt("WebGLState:",q)}}function be(){try{i.texStorage2D(...arguments)}catch(q){nt("WebGLState:",q)}}function ve(){try{i.texStorage3D(...arguments)}catch(q){nt("WebGLState:",q)}}function ce(){try{i.texImage2D(...arguments)}catch(q){nt("WebGLState:",q)}}function de(){try{i.texImage3D(...arguments)}catch(q){nt("WebGLState:",q)}}function Pe(q){return u[q]!==void 0?u[q]:i.getParameter(q)}function Ve(q,Ce){u[q]!==Ce&&(i.pixelStorei(q,Ce),u[q]=Ce)}function Se(q){rt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),rt.copy(q))}function Ae(q){We.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),We.copy(q))}function Be(q,Ce){let fe=c.get(Ce);fe===void 0&&(fe=new WeakMap,c.set(Ce,fe));let Ie=fe.get(q);Ie===void 0&&(Ie=i.getUniformBlockIndex(Ce,q.name),fe.set(q,Ie))}function qe(q,Ce){let Ie=c.get(Ce).get(q);l.get(Ce)!==Ie&&(i.uniformBlockBinding(Ce,Ie,q.__bindingPointIndex),l.set(Ce,Ie))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},re=null,le={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,_=null,S=null,b=null,x=null,y=null,w=null,M=new He(0,0,0),T=0,E=!1,P=null,I=null,N=null,D=null,z=null,rt.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:k,disable:te,bindFramebuffer:ze,drawBuffers:pe,useProgram:Je,setBlending:ge,setMaterial:xe,setFlipSided:_e,setCullFace:Me,setLineWidth:je,setPolygonOffset:De,setScissorTest:$e,activeTexture:Oe,bindTexture:G,unbindTexture:ut,compressedTexImage2D:it,compressedTexImage3D:F,texImage2D:ce,texImage3D:de,pixelStorei:Ve,getParameter:Pe,updateUBOMapping:Be,uniformBlockBinding:qe,texStorage2D:be,texStorage3D:ve,texSubImage2D:A,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:ne,scissor:Se,viewport:Ae,reset:et}}function Dv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,A){return g?new OffscreenCanvas(F,A):yr("canvas")}function m(F,A,j){let K=1,ne=it(F);if((ne.width>j||ne.height>j)&&(K=j/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let be=Math.floor(K*ne.width),ve=Math.floor(K*ne.height);d===void 0&&(d=v(be,ve));let ce=A?v(be,ve):d;return ce.width=be,ce.height=ve,ce.getContext("2d").drawImage(F,0,0,be,ve),Ke("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+be+"x"+ve+")."),ce}else return"data"in F&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),F;return F}function p(F){return F.generateMipmaps}function _(F){i.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(F,A,j,K,ne,be=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ve;K&&(ve=e.get("EXT_texture_norm16"),ve||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=A;if(A===i.RED&&(j===i.FLOAT&&(ce=i.R32F),j===i.HALF_FLOAT&&(ce=i.R16F),j===i.UNSIGNED_BYTE&&(ce=i.R8),j===i.UNSIGNED_SHORT&&ve&&(ce=ve.R16_EXT),j===i.SHORT&&ve&&(ce=ve.R16_SNORM_EXT)),A===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.R8UI),j===i.UNSIGNED_SHORT&&(ce=i.R16UI),j===i.UNSIGNED_INT&&(ce=i.R32UI),j===i.BYTE&&(ce=i.R8I),j===i.SHORT&&(ce=i.R16I),j===i.INT&&(ce=i.R32I)),A===i.RG&&(j===i.FLOAT&&(ce=i.RG32F),j===i.HALF_FLOAT&&(ce=i.RG16F),j===i.UNSIGNED_BYTE&&(ce=i.RG8),j===i.UNSIGNED_SHORT&&ve&&(ce=ve.RG16_EXT),j===i.SHORT&&ve&&(ce=ve.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RG8UI),j===i.UNSIGNED_SHORT&&(ce=i.RG16UI),j===i.UNSIGNED_INT&&(ce=i.RG32UI),j===i.BYTE&&(ce=i.RG8I),j===i.SHORT&&(ce=i.RG16I),j===i.INT&&(ce=i.RG32I)),A===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),j===i.UNSIGNED_INT&&(ce=i.RGB32UI),j===i.BYTE&&(ce=i.RGB8I),j===i.SHORT&&(ce=i.RGB16I),j===i.INT&&(ce=i.RGB32I)),A===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),j===i.UNSIGNED_INT&&(ce=i.RGBA32UI),j===i.BYTE&&(ce=i.RGBA8I),j===i.SHORT&&(ce=i.RGBA16I),j===i.INT&&(ce=i.RGBA32I)),A===i.RGB&&(j===i.UNSIGNED_SHORT&&ve&&(ce=ve.RGB16_EXT),j===i.SHORT&&ve&&(ce=ve.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),A===i.RGBA){let de=be?Ma:ft.getTransfer(ne);j===i.FLOAT&&(ce=i.RGBA32F),j===i.HALF_FLOAT&&(ce=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ce=de===yt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&ve&&(ce=ve.RGBA16_EXT),j===i.SHORT&&ve&&(ce=ve.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(F,A){let j;return F?A===null||A===bi||A===gs?j=i.DEPTH24_STENCIL8:A===qn?j=i.DEPTH32F_STENCIL8:A===Gr&&(j=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===bi||A===gs?j=i.DEPTH_COMPONENT24:A===qn?j=i.DEPTH_COMPONENT32F:A===Gr&&(j=i.DEPTH_COMPONENT16),j}function y(F,A){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ft&&F.minFilter!==Dt?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function w(F){let A=F.target;A.removeEventListener("dispose",w),T(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function M(F){let A=F.target;A.removeEventListener("dispose",M),P(A)}function T(F){let A=n.get(F);if(A.__webglInit===void 0)return;let j=F.source,K=f.get(j);if(K){let ne=K[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(F),Object.keys(K).length===0&&f.delete(j)}n.remove(F)}function E(F){let A=n.get(F);i.deleteTexture(A.__webglTexture);let j=F.source,K=f.get(j);delete K[A.__cacheKey],a.memory.textures--}function P(F){let A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(A.__webglFramebuffer[K]))for(let ne=0;ne<A.__webglFramebuffer[K].length;ne++)i.deleteFramebuffer(A.__webglFramebuffer[K][ne]);else i.deleteFramebuffer(A.__webglFramebuffer[K]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[K])}else{if(Array.isArray(A.__webglFramebuffer))for(let K=0;K<A.__webglFramebuffer.length;K++)i.deleteFramebuffer(A.__webglFramebuffer[K]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let K=0;K<A.__webglColorRenderbuffer.length;K++)A.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[K]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=F.textures;for(let K=0,ne=j.length;K<ne;K++){let be=n.get(j[K]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(j[K])}n.remove(F)}let I=0;function N(){I=0}function D(){return I}function z(F){I=F}function V(){let F=I;return F>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,F}function Z(F){let A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ue(F,A){let j=n.get(F);if(F.isVideoTexture&&G(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&j.__version!==F.version){let K=F.image;if(K===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,F,A);return}}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+A)}function $(F,A){let j=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){te(j,F,A);return}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+A)}function re(F,A){let j=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){te(j,F,A);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+A)}function le(F,A){let j=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&j.__version!==F.version){ze(j,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+A)}let Ne={[en]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},Re={[Ft]:i.NEAREST,[Zl]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},rt={[op]:i.NEVER,[dp]:i.ALWAYS,[lp]:i.LESS,[Fc]:i.LEQUAL,[cp]:i.EQUAL,[Uc]:i.GEQUAL,[hp]:i.GREATER,[up]:i.NOTEQUAL};function We(F,A){if(A.type===qn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dt||A.magFilter===zr||A.magFilter===Bs||A.magFilter===Ln||A.minFilter===Dt||A.minFilter===zr||A.minFilter===Bs||A.minFilter===Ln)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Ne[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Ne[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Ne[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Re[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Re[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,rt[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ft||A.minFilter!==Bs&&A.minFilter!==Ln||A.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function tt(F,A){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",w));let K=A.source,ne=f.get(K);ne===void 0&&(ne={},f.set(K,ne));let be=Z(A);if(be!==F.__cacheKey){ne[be]===void 0&&(ne[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[be].usedTimes++;let ve=ne[F.__cacheKey];ve!==void 0&&(ne[F.__cacheKey].usedTimes--,ve.usedTimes===0&&E(A)),F.__cacheKey=be,F.__webglTexture=ne[be].texture}return j}function se(F,A,j){return Math.floor(Math.floor(F/j)/A)}function k(F,A,j,K){let be=F.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,j,K,A.data);else{be.sort((Ve,Se)=>Ve.start-Se.start);let ve=0;for(let Ve=1;Ve<be.length;Ve++){let Se=be[ve],Ae=be[Ve],Be=Se.start+Se.count,qe=se(Ae.start,A.width,4),et=se(Se.start,A.width,4);Ae.start<=Be+1&&qe===et&&se(Ae.start+Ae.count-1,A.width,4)===qe?Se.count=Math.max(Se.count,Ae.start+Ae.count-Se.start):(++ve,be[ve]=Ae)}be.length=ve+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ve=0,Se=be.length;Ve<Se;Ve++){let Ae=be[Ve],Be=Math.floor(Ae.start/4),qe=Math.ceil(Ae.count/4),et=Be%A.width,q=Math.floor(Be/A.width),Ce=qe,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,et,q,Ce,fe,j,K,A.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function te(F,A,j){let K=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(K=i.TEXTURE_3D);let ne=tt(F,A),be=A.source;t.bindTexture(K,F.__webglTexture,i.TEXTURE0+j);let ve=n.get(be);if(be.version!==ve.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let fe=ft.getPrimaries(ft.workingColorSpace),Ie=A.colorSpace===xi?null:ft.getPrimaries(A.colorSpace),we=A.colorSpace===xi||fe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let de=m(A.image,!1,s.maxTextureSize);de=ut(A,de);let Pe=r.convert(A.format,A.colorSpace),Ve=r.convert(A.type),Se=b(A.internalFormat,Pe,Ve,A.normalized,A.colorSpace,A.isVideoTexture);We(K,A);let Ae,Be=A.mipmaps,qe=A.isVideoTexture!==!0,et=ve.__version===void 0||ne===!0,q=be.dataReady,Ce=y(A,de);if(A.isDepthTexture)Se=x(A.format===Ai,A.type),et&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Se,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Se,de.width,de.height,0,Pe,Ve,null));else if(A.isDataTexture)if(Be.length>0){qe&&et&&t.texStorage2D(i.TEXTURE_2D,Ce,Se,Be[0].width,Be[0].height);for(let fe=0,Ie=Be.length;fe<Ie;fe++)Ae=Be[fe],qe?q&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,Pe,Ve,Ae.data):t.texImage2D(i.TEXTURE_2D,fe,Se,Ae.width,Ae.height,0,Pe,Ve,Ae.data);A.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,Ce,Se,de.width,de.height),q&&k(A,de,Pe,Ve)):t.texImage2D(i.TEXTURE_2D,0,Se,de.width,de.height,0,Pe,Ve,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){qe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Se,Be[0].width,Be[0].height,de.depth);for(let fe=0,Ie=Be.length;fe<Ie;fe++)if(Ae=Be[fe],A.format!==nn)if(Pe!==null)if(qe){if(q)if(A.layerUpdates.size>0){let we=Au(Ae.width,Ae.height,A.format,A.type);for(let Q of A.layerUpdates){let Ue=Ae.data.subarray(Q*we/Ae.data.BYTES_PER_ELEMENT,(Q+1)*we/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Q,Ae.width,Ae.height,1,Pe,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ae.width,Ae.height,de.depth,Pe,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Se,Ae.width,Ae.height,de.depth,0,Ae.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ae.width,Ae.height,de.depth,Pe,Ve,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Se,Ae.width,Ae.height,de.depth,0,Pe,Ve,Ae.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{qe&&et&&t.texStorage2D(i.TEXTURE_2D,Ce,Se,Be[0].width,Be[0].height);for(let fe=0,Ie=Be.length;fe<Ie;fe++)Ae=Be[fe],A.format!==nn?Pe!==null?qe?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Se,Ae.width,Ae.height,0,Ae.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?q&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,Pe,Ve,Ae.data):t.texImage2D(i.TEXTURE_2D,fe,Se,Ae.width,Ae.height,0,Pe,Ve,Ae.data)}else if(A.isDataArrayTexture)if(qe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Se,de.width,de.height,de.depth),q)if(A.layerUpdates.size>0){let fe=Au(de.width,de.height,A.format,A.type);for(let Ie of A.layerUpdates){let we=de.data.subarray(Ie*fe/de.data.BYTES_PER_ELEMENT,(Ie+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,de.width,de.height,1,Pe,Ve,we)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,Ve,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,de.width,de.height,de.depth,0,Pe,Ve,de.data);else if(A.isData3DTexture)qe?(et&&t.texStorage3D(i.TEXTURE_3D,Ce,Se,de.width,de.height,de.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,Ve,de.data)):t.texImage3D(i.TEXTURE_3D,0,Se,de.width,de.height,de.depth,0,Pe,Ve,de.data);else if(A.isFramebufferTexture){if(et)if(qe)t.texStorage2D(i.TEXTURE_2D,Ce,Se,de.width,de.height);else{let fe=de.width,Ie=de.height;for(let we=0;we<Ce;we++)t.texImage2D(i.TEXTURE_2D,we,Se,fe,Ie,0,Pe,Ve,null),fe>>=1,Ie>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),de.parentNode!==fe){fe.appendChild(de),u.add(A),fe.onpaint=Ie=>{let we=Ie.changedElements;for(let Q of u)we.includes(Q.image)&&(Q.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let we=i.RGBA,Q=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,Q,Ue,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(qe&&et){let fe=it(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Se,fe.width,fe.height)}for(let fe=0,Ie=Be.length;fe<Ie;fe++)Ae=Be[fe],qe?q&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Pe,Ve,Ae):t.texImage2D(i.TEXTURE_2D,fe,Se,Pe,Ve,Ae);A.generateMipmaps=!1}else if(qe){if(et){let fe=it(de);t.texStorage2D(i.TEXTURE_2D,Ce,Se,fe.width,fe.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Ve,de)}else t.texImage2D(i.TEXTURE_2D,0,Se,Pe,Ve,de);p(A)&&_(K),ve.__version=be.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ze(F,A,j){if(A.image.length!==6)return;let K=tt(F,A),ne=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+j);let be=n.get(ne);if(ne.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+j);let ve=ft.getPrimaries(ft.workingColorSpace),ce=A.colorSpace===xi?null:ft.getPrimaries(A.colorSpace),de=A.colorSpace===xi||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let Q=0;Q<6;Q++)!Pe&&!Ve?Se[Q]=m(A.image[Q],!0,s.maxCubemapSize):Se[Q]=Ve?A.image[Q].image:A.image[Q],Se[Q]=ut(A,Se[Q]);let Ae=Se[0],Be=r.convert(A.format,A.colorSpace),qe=r.convert(A.type),et=b(A.internalFormat,Be,qe,A.normalized,A.colorSpace),q=A.isVideoTexture!==!0,Ce=be.__version===void 0||K===!0,fe=ne.dataReady,Ie=y(A,Ae);We(i.TEXTURE_CUBE_MAP,A);let we;if(Pe){q&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,et,Ae.width,Ae.height);for(let Q=0;Q<6;Q++){we=Se[Q].mipmaps;for(let Ue=0;Ue<we.length;Ue++){let ke=we[Ue];A.format!==nn?Be!==null?q?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,0,0,ke.width,ke.height,Be,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,et,ke.width,ke.height,0,ke.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,0,0,ke.width,ke.height,Be,qe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,et,ke.width,ke.height,0,Be,qe,ke.data)}}}else{if(we=A.mipmaps,q&&Ce){we.length>0&&Ie++;let Q=it(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,et,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ve){q?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Se[Q].width,Se[Q].height,Be,qe,Se[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Se[Q].width,Se[Q].height,0,Be,qe,Se[Q].data);for(let Ue=0;Ue<we.length;Ue++){let wt=we[Ue].image[Q].image;q?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,0,0,wt.width,wt.height,Be,qe,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,et,wt.width,wt.height,0,Be,qe,wt.data)}}else{q?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Be,qe,Se[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Be,qe,Se[Q]);for(let Ue=0;Ue<we.length;Ue++){let ke=we[Ue];q?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,0,0,Be,qe,ke.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,et,Be,qe,ke.image[Q])}}}p(A)&&_(i.TEXTURE_CUBE_MAP),be.__version=ne.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function pe(F,A,j,K,ne,be){let ve=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),de=b(j.internalFormat,ve,ce,j.normalized,j.colorSpace),Pe=n.get(A),Ve=n.get(j);if(Ve.__renderTarget=A,!Pe.__hasExternalTextures){let Se=Math.max(1,A.width>>be),Ae=Math.max(1,A.height>>be);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,be,de,Se,Ae,A.depth,0,ve,ce,null):t.texImage2D(ne,be,de,Se,Ae,0,ve,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Oe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ne,Ve.__webglTexture,0,$e(A)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ne,Ve.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(F,A,j){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){let K=A.depthTexture,ne=K&&K.isDepthTexture?K.type:null,be=x(A.stencilBuffer,ne),ve=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(A),be,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(A),be,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,be,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,F)}else{let K=A.textures;for(let ne=0;ne<K.length;ne++){let be=K[ne],ve=r.convert(be.format,be.colorSpace),ce=r.convert(be.type),de=b(be.internalFormat,ve,ce,be.normalized,be.colorSpace);Oe(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(A),de,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(A),de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(F,A,j){let K=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(A.depthTexture);if(ne.__renderTarget=A,(!ne.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),We(i.TEXTURE_CUBE_MAP,A.depthTexture);let Pe=r.convert(A.depthTexture.format),Ve=r.convert(A.depthTexture.type),Se;A.depthTexture.format===Mi?Se=i.DEPTH_COMPONENT24:A.depthTexture.format===Ai&&(Se=i.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,A.width,A.height,0,Pe,Ve,null)}}else ue(A.depthTexture,0);let be=ne.__webglTexture,ve=$e(A),ce=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,de=A.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Mi)Oe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,be,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,be,0);else if(A.depthTexture.format===Ai)Oe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,be,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(F){let A=n.get(F),j=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){let K=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),K){let ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=K}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let K=0;K<6;K++)mt(A.__webglFramebuffer[K],F,K);else{let K=F.texture.mipmaps;K&&K.length>0?mt(A.__webglFramebuffer[0],F,0):mt(A.__webglFramebuffer,F,0)}else if(j){A.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[K]),A.__webglDepthbuffer[K]===void 0)A.__webglDepthbuffer[K]=i.createRenderbuffer(),Je(A.__webglDepthbuffer[K],F,!1);else{let ne=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=A.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,be)}}else{let K=F.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Je(A.__webglDepthbuffer,F,!1);else{let ne=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(F,A,j){let K=n.get(F);A!==void 0&&pe(K.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ae(F)}function xe(F){let A=F.texture,j=n.get(F),K=n.get(A);F.addEventListener("dispose",M);let ne=F.textures,be=F.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=A.version,a.memory.textures++),be){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let de=0;de<A.mipmaps.length;de++)j.__webglFramebuffer[ce][de]=i.createFramebuffer()}else j.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)j.__webglFramebuffer[ce]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ce=0,de=ne.length;ce<de;ce++){let Pe=n.get(ne[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Oe(F)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){let de=ne[ce];j.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);let Pe=r.convert(de.format,de.colorSpace),Ve=r.convert(de.type),Se=b(de.internalFormat,Pe,Ve,de.normalized,de.colorSpace,F.isXRRenderTarget===!0),Ae=$e(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Se,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(j.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),We(i.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)pe(j.__webglFramebuffer[ce][de],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else pe(j.__webglFramebuffer[ce],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,de=ne.length;ce<de;ce++){let Pe=ne[ce],Ve=n.get(Pe),Se=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Se=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ve.__webglTexture),We(Se,Pe),pe(j.__webglFramebuffer,F,Pe,i.COLOR_ATTACHMENT0+ce,Se,0),p(Pe)&&_(Se)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ce=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),We(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)pe(j.__webglFramebuffer[de],F,A,i.COLOR_ATTACHMENT0,ce,de);else pe(j.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,ce,0);p(A)&&_(ce),t.unbindTexture()}F.depthBuffer&&ae(F)}function _e(F){let A=F.textures;for(let j=0,K=A.length;j<K;j++){let ne=A[j];if(p(ne)){let be=S(F),ve=n.get(ne).__webglTexture;t.bindTexture(be,ve),_(be),t.unbindTexture()}}}let Me=[],je=[];function De(F){if(F.samples>0){if(Oe(F)===!1){let A=F.textures,j=F.width,K=F.height,ne=i.COLOR_BUFFER_BIT,be=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(F),ce=A.length>1;if(ce)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let de=F.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);let Ve=n.get(A[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,j,K,0,0,j,K,ne,i.NEAREST),l===!0&&(Me.length=0,je.length=0,Me.push(i.COLOR_ATTACHMENT0+Pe),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Me.push(be),je.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);let Ve=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function $e(F){return Math.min(s.maxSamples,F.samples)}function Oe(F){let A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function G(F){let A=a.render.frame;h.get(F)!==A&&(h.set(F,A),F.update())}function ut(F,A){let j=F.colorSpace,K=F.format,ne=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||j!==sn&&j!==xi&&(ft.getTransfer(j)===yt?(K!==nn||ne!==En)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",j)),A}function it(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ue,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=le,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lv(i,e){function t(n,s=xi){let r,a=ft.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fu)return i.BYTE;if(n===pu)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===$l)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Bt)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===xu)return i.RGB;if(n===nn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===go||n===bo||n===xo||n===_o)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===ac||n===oc||n===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===yo||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return r.COMPRESSED_R11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===bc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Pc||n===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Lc||n===vo||n===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:Nv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Gu,p={},_=t.getContextAttributes(),S=null,b=null,x=[],y=[],w=new oe,M=null,T=null,E=new qt;E.viewport=new Mt;let P=new qt;P.viewport=new Mt;let I=[E,P],N=new jl,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let k=x[se];return k===void 0&&(k=new wr,x[se]=k),k.getTargetRaySpace()},this.getControllerGrip=function(se){let k=x[se];return k===void 0&&(k=new wr,x[se]=k),k.getGripSpace()},this.getHand=function(se){let k=x[se];return k===void 0&&(k=new wr,x[se]=k),k.getHandSpace()};function V(se){let k=y.indexOf(se.inputSource);if(k===-1)return;let te=x[k];te!==void 0&&(te.update(se.inputSource,se.frame,c||a),te.dispatchEvent({type:se.type,data:se.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ue);for(let se=0;se<x.length;se++){let k=y[se];k!==null&&(y[se]=null,x[se].disconnect(k))}D=null,z=null,m.reset();for(let se in p)delete p[se];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(w.width,w.height,!1),T!==null){let se=T.camera;se.fov=T.fov,se.zoom=T.zoom,se.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ue),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ze=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?Ai:Mi,ze=_.stencil?gs:bi);let Je={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Lt(d.textureWidth,d.textureHeight,{format:nn,type:En,depthTexture:new Ti(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Lt(f.framebufferWidth,f.framebufferHeight,{format:nn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(se){for(let k=0;k<se.removed.length;k++){let te=se.removed[k],ze=y.indexOf(te);ze>=0&&(y[ze]=null,x[ze].disconnect(te))}for(let k=0;k<se.added.length;k++){let te=se.added[k],ze=y.indexOf(te);if(ze===-1){for(let Je=0;Je<x.length;Je++)if(Je>=y.length){y.push(te),ze=Je;break}else if(y[Je]===null){y[Je]=te,ze=Je;break}if(ze===-1)break}let pe=x[ze];pe&&pe.connect(te)}}let $=new L,re=new L;function le(se,k,te){$.setFromMatrixPosition(k.matrixWorld),re.setFromMatrixPosition(te.matrixWorld);let ze=$.distanceTo(re),pe=k.projectionMatrix.elements,Je=te.projectionMatrix.elements,mt=pe[14]/(pe[10]-1),ae=pe[14]/(pe[10]+1),ge=(pe[9]+1)/pe[5],xe=(pe[9]-1)/pe[5],_e=(pe[8]-1)/pe[0],Me=(Je[8]+1)/Je[0],je=mt*_e,De=mt*Me,$e=ze/(-_e+Me),Oe=$e*-_e;if(k.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Oe),se.translateZ($e),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),pe[10]===-1)se.projectionMatrix.copy(k.projectionMatrix),se.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let G=mt+$e,ut=ae+$e,it=je-Oe,F=De+(ze-Oe),A=ge*ae/ut*G,j=xe*ae/ut*G;se.projectionMatrix.makePerspective(it,F,A,j,G,ut),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Ne(se,k){k===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(k.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let k=se.near,te=se.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(te=m.depthFar)),N.near=P.near=E.near=k,N.far=P.far=E.far=te,(D!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,z=N.far),N.layers.mask=se.layers.mask|6,E.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let ze=se.parent,pe=N.cameras;Ne(N,ze);for(let Je=0;Je<pe.length;Je++)Ne(pe[Je],ze);pe.length===2?le(N,E,P):N.projectionMatrix.copy(E.projectionMatrix),T===null&&se.isPerspectiveCamera&&(T={camera:se,fov:se.fov,zoom:se.zoom}),Re(se,N,ze)};function Re(se,k,te){te===null?se.matrix.copy(k.matrixWorld):(se.matrix.copy(te.matrixWorld),se.matrix.invert(),se.matrix.multiply(k.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(k.projectionMatrix),se.projectionMatrixInverse.copy(k.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ps*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(se){return p[se]};let rt=null;function We(se,k){if(h=k.getViewerPose(c||a),g=k,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;te.length!==N.cameras.length&&(N.cameras.length=0,ze=!0);for(let ae=0;ae<te.length;ae++){let ge=te[ae],xe=null;if(f!==null)xe=f.getViewport(ge);else{let Me=u.getViewSubImage(d,ge);xe=Me.viewport,ae===0&&(e.setRenderTargetTextures(b,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(b))}let _e=I[ae];_e===void 0&&(_e=new qt,_e.layers.enable(ae),_e.viewport=new Mt,I[ae]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(xe.x,xe.y,xe.width,xe.height),ae===0&&(N.matrix.copy(_e.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ze===!0&&N.cameras.push(_e)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ae=u.getDepthInformation(te[0]);ae&&ae.isValid&&ae.texture&&m.init(ae,s.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ae=0;ae<te.length;ae++){let ge=te[ae].camera;if(ge){let xe=p[ge];xe||(xe=new Fa,p[ge]=xe);let _e=u.getCameraImage(ge);xe.sourceTexture=_e}}}}for(let te=0;te<x.length;te++){let ze=y[te],pe=x[te];ze!==null&&pe!==void 0&&pe.update(ze,k,c||a)}rt&&rt(se,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let tt=new Xp;tt.setAnimationLoop(We),this.setAnimationLoop=function(se){rt=se},this.dispose=function(){}}},Uv=new Le,$p=new lt;$p.set(-1,0,0,0,1,0,0,0,1);function Ov(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,S,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),S=_.envMap,b=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($p),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=s[b.id];y===void 0&&(m(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",_));let w=x.program;n.updateUBOMapping(b,w);let M=e.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function h(b){let x=u();b.__bindingPointIndex=x;let y=i.createBuffer(),w=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=s[b.id],y=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,T=y.length;M<T;M++){let E=y[M];if(Array.isArray(E))for(let P=0,I=E.length;P<I;P++)f(E[P],M,P,w);else f(E,M,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,x,y,w){if(v(b,x,y,w)===!0){let M=b.__offset,T=b.value;if(Array.isArray(T)){let E=0;for(let P=0;P<T.length;P++){let I=T[P],N=p(I);g(I,b.__data,E),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(E+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function g(b,x,y){typeof b=="number"||typeof b=="boolean"?x[0]=b:b.isMatrix3?(x[0]=b.elements[0],x[1]=b.elements[1],x[2]=b.elements[2],x[3]=0,x[4]=b.elements[3],x[5]=b.elements[4],x[6]=b.elements[5],x[7]=0,x[8]=b.elements[6],x[9]=b.elements[7],x[10]=b.elements[8],x[11]=0):ArrayBuffer.isView(b)?x.set(new b.constructor(b.buffer,b.byteOffset,x.length)):b.toArray(x,y)}function v(b,x,y,w){let M=b.value,T=x+"_"+y;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:ArrayBuffer.isView(M)?w[T]=M.slice():w[T]=M.clone(),!0;{let E=w[T];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return w[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function m(b){let x=b.uniforms,y=0,w=16;for(let T=0,E=x.length;T<E;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let I=0,N=P.length;I<N;I++){let D=P[I],z=Array.isArray(D.value)?D.value:[D.value];for(let V=0,Z=z.length;V<Z;V++){let ue=z[V],$=p(ue),re=y%w,le=re%$.boundary,Ne=re+le;y+=le,Ne!==0&&w-Ne<$.storage&&(y+=w-Ne),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=$.storage}}}let M=y%w;return M>0&&(y+=w-M),b.__size=y,b.__cache={},this}function p(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(x.boundary=16,x.storage=b.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",b),x}function _(b){let x=b.target;x.removeEventListener("dispose",_);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function S(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var Bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function zv(){return Ri===null&&(Ri=new wn(Bv,16,16,bs,Bt),Ri.name="DFG_LUT",Ri.minFilter=Dt,Ri.magFilter=Dt,Ri.wrapS=In,Ri.wrapT=In,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var zc=class{constructor(e={}){let{canvas:t=fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([sc,ic,nc]),p=new Set([En,bi,Gr,gs,Ql,ec]),_=new Uint32Array(4),S=new Int32Array(4),b=new L,x=null,y=null,w=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,I=null,N=null,D=null,z=null;this._outputColorSpace=bt;let V=0,Z=0,ue=null,$=-1,re=null,le=new Mt,Ne=new Mt,Re=null,rt=new He(0),We=0,tt=t.width,se=t.height,k=1,te=null,ze=null,pe=new Mt(0,0,tt,se),Je=new Mt(0,0,tt,se),mt=!1,ae=new Ar,ge=!1,xe=!1,_e=new Le,Me=new L,je=new Mt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Oe(){return ue===null?k:1}let G=n;function ut(C,W){return t.getContext(C,W)}let it,F,A,j,K,ne,be,ve,ce,de,Pe,Ve,Se,Ae,Be,qe,et,q,Ce,fe,Ie,we,Q;try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),G===null){let W="webgl2";if(G=ut(W,C),G===null)throw ut(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(C){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),nt("WebGLRenderer: "+C.message),C}function Ue(){it=new j_(G),it.init(),Ie=new Lv(G,it),F=new O_(G,it,e,Ie),A=new Iv(G,it),F.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),N=G.createFramebuffer(),D=G.createFramebuffer(),z=G.createFramebuffer(),j=new J_(G),K=new bv,ne=new Dv(G,it,A,K,F,Ie,j),be=new X_(E),ve=new $g(G),we=new F_(G,ve),ce=new Y_(G,ve,j,we),de=new $_(G,ce,ve,we,j),q=new Z_(G,F,ne),Be=new k_(K),Pe=new gv(E,be,it,F,we,Be),Ve=new Ov(E,K),Se=new _v,Ae=new Tv(it),et=new N_(E,be,A,de,g,l),qe=new Pv(E,de,F),Q=new kv(G,j,F,A),Ce=new U_(G,it,j),fe=new K_(G,it,j),j.programs=Pe.programs,E.capabilities=F,E.extensions=it,E.properties=K,E.renderLists=Se,E.shadowMap=qe,E.state=A,E.info=j}v!==En&&(T=new ey(v,t.width,t.height,o,s,r));let ke=new Hu(E,G);this.xr=ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(tt,se,!1))},this.getSize=function(C){return C.set(tt,se)},this.setSize=function(C,W,ie=!0){if(ke.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=C,se=W,t.width=Math.floor(C*k),t.height=Math.floor(W*k),ie===!0&&(t.style.width=C+"px",t.style.height=W+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(tt*k,se*k).floor()},this.setDrawingBufferSize=function(C,W,ie){tt=C,se=W,k=ie,t.width=Math.floor(C*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(v===En){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(le)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,W,ie,J){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,W,ie,J),A.viewport(le.copy(pe).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(Je)},this.setScissor=function(C,W,ie,J){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,W,ie,J),A.scissor(Ne.copy(Je).multiplyScalar(k).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(C){A.setScissorTest(mt=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){ze=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ie=!0){let J=0;if(C){let R=!1;if(ue!==null){let U=ue.texture.format;R=m.has(U)}if(R){let U=ue.texture.type,O=p.has(U),H=et.getClearColor(),X=et.getClearAlpha(),Y=H.r,B=H.g,he=H.b;O?(_[0]=Y,_[1]=B,_[2]=he,_[3]=X,G.clearBufferuiv(G.COLOR,0,_)):(S[0]=Y,S[1]=B,S[2]=he,S[3]=X,G.clearBufferiv(G.COLOR,0,S))}else J|=G.COLOR_BUFFER_BIT}W&&(J|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),et.dispose(),Se.dispose(),Ae.dispose(),K.dispose(),be.dispose(),de.dispose(),we.dispose(),Q.dispose(),Pe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ia),ke.removeEventListener("sessionend",zo),Ni.stop()};function wt(C){C.preventDefault(),Sa("WebGLRenderer: Context Lost."),P=!0}function xt(){Sa("WebGLRenderer: Context Restored."),P=!1;let C=j.autoReset,W=qe.enabled,ie=qe.autoUpdate,J=qe.needsUpdate,R=qe.type;Ue(),j.autoReset=C,qe.enabled=W,qe.autoUpdate=ie,qe.needsUpdate=J,qe.type=R}function Un(C){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fn(C){let W=C.target;W.removeEventListener("dispose",fn),Bo(W)}function Bo(C){ph(C),K.remove(C)}function ph(C){let W=K.get(C).programs;W!==void 0&&(W.forEach(function(ie){Pe.releaseProgram(ie)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ie,J,R,U){W===null&&(W=De);let O=R.isMesh&&R.matrixWorld.determinantAffine()<0,H=Ho(C,W,ie,J,R);A.setMaterial(J,O);let X=ie.index,Y=1;if(J.wireframe===!0){if(X=ce.getWireframeAttribute(ie),X===void 0)return;Y=2}let B=ie.drawRange,he=ie.attributes.position,ee=B.start*Y,me=(B.start+B.count)*Y;U!==null&&(ee=Math.max(ee,U.start*Y),me=Math.min(me,(U.start+U.count)*Y)),X!==null?(ee=Math.max(ee,0),me=Math.min(me,X.count)):he!=null&&(ee=Math.max(ee,0),me=Math.min(me,he.count));let Te=me-ee;if(Te<0||Te===1/0)return;we.setup(R,J,H,ie,X);let Xe,at=Ce;if(X!==null&&(Xe=ve.get(X),at=fe,at.setIndex(Xe)),R.isMesh)J.wireframe===!0?(A.setLineWidth(J.wireframeLinewidth*Oe()),at.setMode(G.LINES)):at.setMode(G.TRIANGLES);else if(R.isLine){let ot=J.linewidth;ot===void 0&&(ot=1),A.setLineWidth(ot*Oe()),R.isLineSegments?at.setMode(G.LINES):R.isLineLoop?at.setMode(G.LINE_LOOP):at.setMode(G.LINE_STRIP)}else R.isPoints?at.setMode(G.POINTS):R.isSprite&&at.setMode(G.TRIANGLES);if(R.isBatchedMesh)if(it.get("WEBGL_multi_draw"))at.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let ot=R._multiDrawStarts,ye=R._multiDrawCounts,Tt=R._multiDrawCount,st=X?ve.get(X).bytesPerElement:1,_t=K.get(J).currentProgram.getUniforms();for(let pn=0;pn<Tt;pn++)_t.setValue(G,"_gl_DrawID",pn),at.render(ot[pn]/st,ye[pn])}else if(R.isInstancedMesh)at.renderInstances(ee,Te,R.count);else if(ie.isInstancedBufferGeometry){let ot=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ye=Math.min(ie.instanceCount,ot);at.renderInstances(ee,Te,ye)}else at.render(ee,Te)};function ta(C,W,ie,J){I!==null&&C.isNodeMaterial&&I.setObject(J,C),ge===!0&&Be.setState(C,ie,!1),C.transparent===!0&&C.side===Vt&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,Yn(C,W,J),C.side=ni,C.needsUpdate=!0,Yn(C,W,J),C.side=Vt):Yn(C,W,J)}this.compile=function(C,W,ie=null){ie===null&&(ie=C),I!==null&&I.renderStart(C,W,ie),y=Ae.get(ie),y.init(W),M.push(y),ie.traverseVisible(function(R){R.isLight&&R.layers.test(W.layers)&&(y.pushLight(R),R.castShadow&&y.pushShadow(R))}),C!==ie&&C.traverseVisible(function(R){R.isLight&&R.layers.test(W.layers)&&(y.pushLight(R),R.castShadow&&y.pushShadow(R))}),y.setupLights(),I!==null&&I.updateLights(y.state.lightsArray),xe=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,xe),ge===!0&&Be.setGlobalState(this.clippingPlanes,W),I!==null&&qe.render(y.state.shadowsArray,ie,W);let J=new Set;return C.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let U=R.material;if(U)if(Array.isArray(U))for(let O=0;O<U.length;O++){let H=U[O];ta(H,ie,W,R),J.add(H)}else ta(U,ie,W,R),J.add(U)}),y=M.pop(),I!==null&&I.renderEnd(),J},this.compileAsync=function(C,W,ie=null){let J=this.compile(C,W,ie);return new Promise(R=>{function U(){if(J.forEach(function(O){let X=K.get(O).currentProgram;(X===void 0||X.isReady())&&J.delete(O)}),J.size===0){R(C);return}setTimeout(U,10)}it.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let na=null;function zd(C){na&&na(C)}function ia(){Ni.stop()}function zo(){Ni.start()}let Ni=new Xp;Ni.setAnimationLoop(zd),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){na=C,ke.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},ke.addEventListener("sessionstart",ia),ke.addEventListener("sessionend",zo),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,W);let ie=ke.enabled===!0&&ke.isPresenting===!0,J=T!==null&&(ue===null||ie)&&T.begin(E,ue);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,W,ue),y=Ae.get(C,M.length),y.init(W),y.state.textureUnits=ne.getTextureUnits(),M.push(y),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ae.setFromProjectionMatrix(_e,di,W.reversedDepth),xe=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,xe),x=Se.get(C,w.length),x.init(),w.push(x),ke.enabled===!0&&ke.isPresenting===!0){let O=E.xr.getDepthSensingMesh();O!==null&&sa(O,W,-1/0,E.sortObjects)}sa(C,W,0,E.sortObjects),x.finish(),I!==null&&I.updateLights(y.state.lightsArray),E.sortObjects===!0&&x.sort(te,ze),$e=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,$e&&et.addToRenderList(x,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Be.beginShadows();let R=y.state.shadowsArray;if(qe.render(R,C,W),ge===!0&&Be.endShadows(),(J&&T.hasRenderPass())===!1){let O=x.opaque,H=x.transmissive;if(y.setupLights(),W.isArrayCamera){let X=W.cameras;if(H.length>0)for(let Y=0,B=X.length;Y<B;Y++){let he=X[Y];Go(O,H,C,he)}$e&&et.render(C);for(let Y=0,B=X.length;Y<B;Y++){let he=X[Y];zn(x,C,he,he.viewport)}}else H.length>0&&Go(O,H,C,W),$e&&et.render(C),zn(x,C,W)}ue!==null&&Z===0&&(ne.updateMultisampleRenderTarget(ue),ne.updateRenderTargetMipmap(ue)),J&&T.end(E),C.isScene===!0&&C.onAfterRender(E,C,W),we.resetDefaultState(),$=-1,re=null,M.pop(),M.length>0?(y=M[M.length-1],ne.setTextureUnits(y.state.textureUnits),ge===!0&&Be.setGlobalState(E.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?x=w[w.length-1]:x=null,I!==null&&I.renderEnd()};function sa(C,W,ie,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)y.pushLightProbeGrid(C);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ae)){J&&je.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_e);let O=de.update(C),H=C.material;H.visible&&x.push(C,O,H,ie,je.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ae))){let O=de.update(C),H=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),je.copy(C.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),je.copy(O.boundingSphere.center)),je.applyMatrix4(C.matrixWorld).applyMatrix4(_e)),Array.isArray(H)){let X=O.groups;for(let Y=0,B=X.length;Y<B;Y++){let he=X[Y],ee=H[he.materialIndex];ee&&ee.visible&&x.push(C,O,ee,ie,je.z,he,W)}}else H.visible&&x.push(C,O,H,ie,je.z,null,W)}}let U=C.children;for(let O=0,H=U.length;O<H;O++)sa(U[O],W,ie,J)}function zn(C,W,ie,J){let{opaque:R,transmissive:U,transparent:O}=C;y.setupLightsView(ie),ge===!0&&Be.setGlobalState(E.clippingPlanes,ie),J&&A.viewport(le.copy(J)),R.length>0&&Qi(R,W,ie),U.length>0&&Qi(U,W,ie),O.length>0&&Qi(O,W,ie),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Go(C,W,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[J.id]===void 0){let ee=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[J.id]=new Lt(1,1,{generateMipmaps:!0,type:ee?Bt:En,minFilter:Ln,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let U=y.state.transmissionRenderTarget[J.id],O=J.viewport||le;U.setSize(O.z*E.transmissionResolutionScale,O.w*E.transmissionResolutionScale);let H=E.getRenderTarget(),X=E.getActiveCubeFace(),Y=E.getActiveMipmapLevel();E.setRenderTarget(U),E.getClearColor(rt),We=E.getClearAlpha(),We<1&&E.setClearColor(16777215,.5),E.clear(),$e&&et.render(ie);let B=E.toneMapping;E.toneMapping=gi;let he=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),ge===!0&&Be.setGlobalState(E.clippingPlanes,J),Qi(C,ie,J),ne.updateMultisampleRenderTarget(U),ne.updateRenderTargetMipmap(U),it.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let me=0,Te=W.length;me<Te;me++){let Xe=W[me],{object:at,geometry:ot,material:ye,group:Tt}=Xe;if(ye.side===Vt&&at.layers.test(J.layers)){let st=ye.side;ye.side=ln,ye.needsUpdate=!0,Js(at,ie,J,ot,ye,Tt),ye.side=st,ye.needsUpdate=!0,ee=!0}}ee===!0&&(ne.updateMultisampleRenderTarget(U),ne.updateRenderTargetMipmap(U))}E.setRenderTarget(H,X,Y),E.setClearColor(rt,We),he!==void 0&&(J.viewport=he),E.toneMapping=B}function Qi(C,W,ie){let J=W.isScene===!0?W.overrideMaterial:null;for(let R=0,U=C.length;R<U;R++){let O=C[R],{object:H,geometry:X,group:Y}=O,B=O.material;B.allowOverride===!0&&J!==null&&(B=J),H.layers.test(ie.layers)&&Js(H,W,ie,X,B,Y)}}function Js(C,W,ie,J,R,U){I!==null&&R.isNodeMaterial&&I.setObject(C,R),C.onBeforeRender(E,W,ie,J,R,U),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),R.onBeforeRender(E,W,ie,J,C,U),R.transparent===!0&&R.side===Vt&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,E.renderBufferDirect(ie,W,J,R,C,U),R.side=ni,R.needsUpdate=!0,E.renderBufferDirect(ie,W,J,R,C,U),R.side=Vt):E.renderBufferDirect(ie,W,J,R,C,U),C.onAfterRender(E,W,ie,J,R,U)}function Yn(C,W,ie){W.isScene!==!0&&(W=De);let J=K.get(C),R=y.state.lights,U=y.state.shadowsArray,O=R.state.version,H=Pe.getParameters(C,R.state,U,W,ie,y.state.lightProbeGridArray),X=Pe.getProgramCacheKey(H),Y=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;let B=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=be.get(C.envMap||J.environment,B),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Y===void 0&&(C.addEventListener("dispose",fn),Y=new Map,J.programs=Y);let he=Y.get(X);if(he!==void 0){if(J.currentProgram===he&&J.lightsStateVersion===O)return oi(C,H),he}else H.uniforms=Pe.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,ie,H),C.onBeforeCompile(H,E),he=Pe.acquireProgram(H,X),Y.set(X,he),J.uniforms=H.uniforms;let ee=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ee.clippingPlanes=Be.uniform),oi(C,H),J.needsLights=gh(C),J.lightsStateVersion=O,J.needsLights&&(ee.ambientLightColor.value=R.state.ambient,ee.lightProbe.value=R.state.probe,ee.sunLights.value=R.state.sun,ee.sunLightShadows.value=R.state.sunShadow,ee.directionalLights.value=R.state.directional,ee.directionalLightShadows.value=R.state.directionalShadow,ee.spotLights.value=R.state.spot,ee.spotLightShadows.value=R.state.spotShadow,ee.rectAreaLights.value=R.state.rectArea,ee.ltc_1.value=R.state.rectAreaLTC1,ee.ltc_2.value=R.state.rectAreaLTC2,ee.pointLights.value=R.state.point,ee.pointLightShadows.value=R.state.pointShadow,ee.hemisphereLights.value=R.state.hemi,ee.sunShadowMatrix.value=R.state.sunShadowMatrix,ee.sunShadowCascade.value=R.state.sunShadowCascade,ee.directionalShadowMatrix.value=R.state.directionalShadowMatrix,ee.spotLightMatrix.value=R.state.spotLightMatrix,ee.spotLightMap.value=R.state.spotLightMap,ee.pointShadowMatrix.value=R.state.pointShadowMatrix),J.lightProbeGrid=y.state.lightProbeGridArray.length>0,J.currentProgram=he,J.uniformsList=null,he}function _i(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Xr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function oi(C,W){let ie=K.get(C);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function Gd(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let ie=0,J=C.length;ie<J;ie++){let R=C[ie];if(R.texture!==null&&R.boundingBox.containsPoint(b))return R}return null}function Ho(C,W,ie,J,R){W.isScene!==!0&&(W=De),ne.resetTextureUnits();let U=W.fog,O=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,H=ue===null?E.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ft.workingColorSpace,X=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Y=be.get(J.envMap||O,X),B=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,he=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ee=!!ie.morphAttributes.position,me=!!ie.morphAttributes.normal,Te=!!ie.morphAttributes.color,Xe=gi;J.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Xe=E.toneMapping);let at=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ot=at!==void 0?at.length:0,ye=K.get(J),Tt=y.state.lights;if(ge===!0&&(xe===!0||C!==re)){let Pt=C===re&&J.id===$;Be.setState(J,C,Pt)}let st=!1;J.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Tt.state.version||ye.outputColorSpace!==H||R.isBatchedMesh&&ye.batching===!1||!R.isBatchedMesh&&ye.batching===!0||R.isBatchedMesh&&ye.batchingColor===!0&&R._colorsTexture===null||R.isBatchedMesh&&ye.batchingColor===!1&&R._colorsTexture!==null||R.isInstancedMesh&&ye.instancing===!1||!R.isInstancedMesh&&ye.instancing===!0||R.isSkinnedMesh&&ye.skinning===!1||!R.isSkinnedMesh&&ye.skinning===!0||R.isInstancedMesh&&ye.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&ye.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&ye.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&ye.instancingMorph===!1&&R.morphTexture!==null||ye.envMap!==Y||J.fog===!0&&ye.fog!==U||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Be.numPlanes||ye.numIntersection!==Be.numIntersection)||ye.vertexAlphas!==B||ye.vertexTangents!==he||ye.morphTargets!==ee||ye.morphNormals!==me||ye.morphColors!==Te||ye.toneMapping!==Xe||ye.morphTargetsCount!==ot||!!ye.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,ye.__version=J.version);let _t=ye.currentProgram;st===!0&&(_t=Yn(J,W,R),I&&J.isNodeMaterial&&I.onUpdateProgram(J,_t,ye));let pn=!1,Gt=!1,Fi=!1,Rt=_t.getUniforms(),Wt=ye.uniforms;if(A.useProgram(_t.program)&&(pn=!0,Gt=!0,Fi=!0),J.id!==$&&($=J.id,Gt=!0),ye.needsLights){let Pt=Gd(y.state.lightProbeGridArray,R);ye.lightProbeGrid!==Pt&&(ye.lightProbeGrid=Pt,Gt=!0)}if(pn||re!==C){A.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(G,"projectionMatrix",C.projectionMatrix),Rt.setValue(G,"viewMatrix",C.matrixWorldInverse);let ts=Rt.map.cameraPosition;ts!==void 0&&ts.setValue(G,Me.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,Gt=!0,Fi=!0)}if(ye.needsLights&&(Tt.state.sunShadowMap.length>0&&Rt.setValue(G,"sunShadowMap",Tt.state.sunShadowMap,ne),Tt.state.directionalShadowMap.length>0&&Rt.setValue(G,"directionalShadowMap",Tt.state.directionalShadowMap,ne),Tt.state.spotShadowMap.length>0&&Rt.setValue(G,"spotShadowMap",Tt.state.spotShadowMap,ne),Tt.state.pointShadowMap.length>0&&Rt.setValue(G,"pointShadowMap",Tt.state.pointShadowMap,ne)),R.isSkinnedMesh){Rt.setOptional(G,R,"bindMatrix"),Rt.setOptional(G,R,"bindMatrixInverse");let Pt=R.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Pt.boneTexture,ne))}R.isBatchedMesh&&(Rt.setOptional(G,R,"batchingTexture"),Rt.setValue(G,"batchingTexture",R._matricesTexture,ne),Rt.setOptional(G,R,"batchingIdTexture"),Rt.setValue(G,"batchingIdTexture",R._indirectTexture,ne),Rt.setOptional(G,R,"batchingColorTexture"),R._colorsTexture!==null&&Rt.setValue(G,"batchingColorTexture",R._colorsTexture,ne));let es=ie.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&q.update(R,ie,_t),(Gt||ye.receiveShadow!==R.receiveShadow)&&(ye.receiveShadow=R.receiveShadow,Rt.setValue(G,"receiveShadow",R.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(Wt.envMapIntensity.value=W.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=zv()),Gt){if(Rt.setValue(G,"toneMappingExposure",E.toneMappingExposure),ye.needsLights&&mh(Wt,Fi),U&&J.fog===!0&&Ve.refreshFogUniforms(Wt,U),Ve.refreshMaterialUniforms(Wt,J,k,se,y.state.transmissionRenderTarget[C.id]),ye.needsLights&&ye.lightProbeGrid){let Pt=ye.lightProbeGrid;Wt.probesSH.value=Pt.texture,Wt.probesMin.value.copy(Pt.boundingBox.min),Wt.probesMax.value.copy(Pt.boundingBox.max),Wt.probesResolution.value.copy(Pt.resolution)}Xr.upload(G,_i(ye),Wt,ne)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Xr.upload(G,_i(ye),Wt,ne),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Rt.setValue(G,"center",R.center),Rt.setValue(G,"modelViewMatrix",R.modelViewMatrix),Rt.setValue(G,"normalMatrix",R.normalMatrix),Rt.setValue(G,"modelMatrix",R.matrixWorld),J.uniformsGroups!==void 0){let Pt=J.uniformsGroups;for(let ts=0,Zs=Pt.length;ts<Zs;ts++){let Hd=Pt[ts];Q.update(Hd,_t),Q.bind(Hd,_t)}}return _t}function mh(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function gh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(C,W,ie){let J=K.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(C.texture).__webglTexture=W,K.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let ie=K.get(C);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ie=0){ue=C,V=W,Z=ie;let J=null,R=!1,U=!1;if(C){let H=K.get(C);if(H.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(G.FRAMEBUFFER,H.__webglFramebuffer),le.copy(C.viewport),Ne.copy(C.scissor),Re=C.scissorTest,A.viewport(le),A.scissor(Ne),A.setScissorTest(Re),$=-1;return}else if(H.__webglFramebuffer===void 0)ne.setupRenderTarget(C);else if(H.__hasExternalTextures)ne.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let B=C.depthTexture;if(H.__boundDepthTexture!==B){if(B!==null&&K.has(B)&&(C.width!==B.image.width||C.height!==B.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(C)}}let X=C.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(U=!0);let Y=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Y[W])?J=Y[W][ie]:J=Y[W],R=!0):C.samples>0&&ne.useMultisampledRTT(C)===!1?J=K.get(C).__webglMultisampledFramebuffer:Array.isArray(Y)?J=Y[ie]:J=Y,le.copy(C.viewport),Ne.copy(C.scissor),Re=C.scissorTest}else le.copy(pe).multiplyScalar(k).floor(),Ne.copy(Je).multiplyScalar(k).floor(),Re=mt;if(ie!==0&&(J=N),A.bindFramebuffer(G.FRAMEBUFFER,J)&&A.drawBuffers(C,J),A.viewport(le),A.scissor(Ne),A.setScissorTest(Re),R){let H=K.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,H.__webglTexture,ie)}else if(U){let H=W;for(let X=0;X<C.textures.length;X++){let Y=K.get(C.textures[X]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+X,Y.__webglTexture,ie,H)}}else if(C!==null&&ie!==0){let H=K.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,H.__webglTexture,ie)}$=-1};function ra(C){let W=K.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=F.textureFormatReadable(C.format),W.__typeReadable=F.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,ie,J,R,U,O,H=0){if(!(C&&C.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&O!==void 0&&(X=X[O]),X){A.bindFramebuffer(G.FRAMEBUFFER,X);try{let Y=C.textures[H],B=Y.format,he=Y.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+H);let ee=ra(Y);if(ee.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&ie>=0&&ie<=C.height-R&&G.readPixels(W,ie,J,R,Ie.convert(B),Ie.convert(he),U)}finally{let Y=ue!==null?K.get(ue).__webglFramebuffer:null;A.bindFramebuffer(G.FRAMEBUFFER,Y)}}},this.readRenderTargetPixelsAsync=async function(C,W,ie,J,R,U,O,H=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let X=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&O!==void 0&&(X=X[O]),X)if(W>=0&&W<=C.width-J&&ie>=0&&ie<=C.height-R){A.bindFramebuffer(G.FRAMEBUFFER,X);let Y=C.textures[H],B=Y.format,he=Y.type;C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+H);let ee=ra(Y);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,me),G.bufferData(G.PIXEL_PACK_BUFFER,U.byteLength,G.STREAM_READ),G.readPixels(W,ie,J,R,Ie.convert(B),Ie.convert(he),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Te=ue!==null?K.get(ue).__webglFramebuffer:null;A.bindFramebuffer(G.FRAMEBUFFER,Te);let Xe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await mp(G,Xe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,me),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,U),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(me),G.deleteSync(Xe),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ie=0){let J=Math.pow(2,-ie),R=Math.floor(C.image.width*J),U=Math.floor(C.image.height*J),O=W!==null?W.x:0,H=W!==null?W.y:0;ne.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ie,0,0,O,H,R,U),A.unbindTexture()},this.copyTextureToTexture=function(C,W,ie=null,J=null,R=0,U=0){let O,H,X,Y,B,he,ee,me,Te,Xe=C.isCompressedTexture?C.mipmaps[U]:C.image;if(ie!==null)O=ie.max.x-ie.min.x,H=ie.max.y-ie.min.y,X=ie.isBox3?ie.max.z-ie.min.z:1,Y=ie.min.x,B=ie.min.y,he=ie.isBox3?ie.min.z:0;else{let Wt=Math.pow(2,-R);O=Math.floor(Xe.width*Wt),H=Math.floor(Xe.height*Wt),C.isDataArrayTexture?X=Xe.depth:C.isData3DTexture?X=Math.floor(Xe.depth*Wt):X=1,Y=0,B=0,he=0}J!==null?(ee=J.x,me=J.y,Te=J.z):(ee=0,me=0,Te=0);let at=Ie.convert(W.format),ot=Ie.convert(W.type),ye;W.isData3DTexture?(ne.setTexture3D(W,0),ye=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ne.setTexture2DArray(W,0),ye=G.TEXTURE_2D_ARRAY):(ne.setTexture2D(W,0),ye=G.TEXTURE_2D),A.activeTexture(G.TEXTURE0),A.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);let Tt=A.getParameter(G.UNPACK_ROW_LENGTH),st=A.getParameter(G.UNPACK_IMAGE_HEIGHT),_t=A.getParameter(G.UNPACK_SKIP_PIXELS),pn=A.getParameter(G.UNPACK_SKIP_ROWS),Gt=A.getParameter(G.UNPACK_SKIP_IMAGES);A.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),A.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),A.pixelStorei(G.UNPACK_SKIP_PIXELS,Y),A.pixelStorei(G.UNPACK_SKIP_ROWS,B),A.pixelStorei(G.UNPACK_SKIP_IMAGES,he);let Fi=C.isDataArrayTexture||C.isData3DTexture,Rt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let Wt=K.get(C),es=K.get(W),Pt=K.get(Wt.__renderTarget),ts=K.get(es.__renderTarget);A.bindFramebuffer(G.READ_FRAMEBUFFER,Pt.__webglFramebuffer),A.bindFramebuffer(G.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Zs=0;Zs<X;Zs++)Fi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(C).__webglTexture,R,he+Zs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(W).__webglTexture,U,Te+Zs)),G.blitFramebuffer(Y,B,O,H,ee,me,O,H,G.DEPTH_BUFFER_BIT,G.NEAREST);A.bindFramebuffer(G.READ_FRAMEBUFFER,null),A.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(R!==0||C.isRenderTargetTexture||K.has(C)){let Wt=K.get(C),es=K.get(W);A.bindFramebuffer(G.READ_FRAMEBUFFER,D),A.bindFramebuffer(G.DRAW_FRAMEBUFFER,z);for(let Pt=0;Pt<X;Pt++)Fi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.__webglTexture,R,he+Pt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Wt.__webglTexture,R),Rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,es.__webglTexture,U,Te+Pt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,es.__webglTexture,U),R!==0?G.blitFramebuffer(Y,B,O,H,ee,me,O,H,G.COLOR_BUFFER_BIT,G.NEAREST):Rt?G.copyTexSubImage3D(ye,U,ee,me,Te+Pt,Y,B,O,H):G.copyTexSubImage2D(ye,U,ee,me,Y,B,O,H);A.bindFramebuffer(G.READ_FRAMEBUFFER,null),A.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(ye,U,ee,me,Te,O,H,X,at,ot,Xe.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(ye,U,ee,me,Te,O,H,X,at,Xe.data):G.texSubImage3D(ye,U,ee,me,Te,O,H,X,at,ot,Xe):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,U,ee,me,O,H,at,ot,Xe.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,U,ee,me,Xe.width,Xe.height,at,Xe.data):G.texSubImage2D(G.TEXTURE_2D,U,ee,me,O,H,at,ot,Xe);A.pixelStorei(G.UNPACK_ROW_LENGTH,Tt),A.pixelStorei(G.UNPACK_IMAGE_HEIGHT,st),A.pixelStorei(G.UNPACK_SKIP_PIXELS,_t),A.pixelStorei(G.UNPACK_SKIP_ROWS,pn),A.pixelStorei(G.UNPACK_SKIP_IMAGES,Gt),U===0&&W.generateMipmaps&&G.generateMipmap(ye),A.unbindTexture()},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&ne.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ne.setTextureCube(C,0):C.isData3DTexture?ne.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ne.setTexture2DArray(C,0):ne.setTexture2D(C,0),A.unbindTexture()},this.resetState=function(){V=0,Z=0,ue=null,A.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Eo=new L;function ri(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Eo.copy(e),Eo[n]=0,Eo.normalize();let c=.5*a/(a+o),h=1-Eo.angleTo(i)/l;return Math.sign(Eo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var zt=class i extends an{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,v=new L,m=.5/a;for(let p=0,_=0;p<u.length;p+=3,_+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[_+0]=ri(v,c,"z","y",r,n),f[_+1]=1-ri(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[_+0]=1-ri(v,c,"z","y",r,n),f[_+1]=1-ri(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[_+0]=1-ri(v,c,"x","z",r,e),f[_+1]=ri(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[_+0]=1-ri(v,c,"x","z",r,e),f[_+1]=1-ri(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[_+0]=1-ri(v,c,"x","y",r,e),f[_+1]=1-ri(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[_+0]=ri(v,c,"x","y",r,e),f[_+1]=1-ri(v,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Gv=Object.freeze({width:1.345,length:1.964,height:.05,legs:8});function Qp(i,e=new Le){let t=[],n=new L;i.updateWorldMatrix(!0,!0);let s=-1/0;i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry.attributes.position,l=new Le().multiplyMatrices(e,a.matrixWorld);for(let c=0;c<o.count;c++)n.fromBufferAttribute(o,c).applyMatrix4(l),s=Math.max(s,n.z)}),i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Le().multiplyMatrices(e,a.matrixWorld);for(let u=0;u<(c?.count||l.count);u+=3){let d=[];for(let f=0;f<3;f++)n.fromBufferAttribute(l,c?c.getX(u+f):u+f).applyMatrix4(h),d.push(n.clone());if(d.every(f=>f.z>s-.014&&Math.abs(f.x)<.09))for(let f of d)t.push(f.x,f.y,f.z)}});let r=new ct;return r.setAttribute("position",new Ge(t,3)),r.computeVertexNormals(),r}function Pi(i,e,t,n,s=.002){let r=new Ee(new zt(...e,2,Math.min(s,...e.map(a=>a/3))),n);return r.position.set(...t),r.castShadow=r.receiveShadow=!0,i.add(r),r}function em(i,e=!1){let t=new Ye;t.name=e?"Slimline II tall reference":"Slimline II reference";let{width:n,length:s}=Gv,r=e?1.88:1.83,a=-.62;for(let l of[-n/2+.016,n/2-.016])Pi(t,[.032,.05,s],[l,r,a],i.darkmetal),Pi(t,[.006,.003,s-.04],[l,r+.026,a],i.trim,5e-4);for(let l of[-1,1])Pi(t,[n-.032,.05,.032],[0,r,a+l*(s/2-.016)],i.darkmetal);for(let l=0;l<10;l++){let c=a-s/2+.1+l*(s-.2)/9;Pi(t,[n-.064,.024,.09],[0,r-.006,c],i.darkmetal),Pi(t,[n-.08,.003,.006],[0,r+.007,c],i.trim,5e-4)}for(let l of[-1,1])for(let c of[-1.47,-.87,-.27,.27]){let h=r-.025-1.695,u=Pi(t,[.026,h,.1],[l*.675,1.695+h/2,c],i.darkmetal);u.name="Gutter mounting leg",u.rotation.z=l*.29,Pi(t,[.09,.018,.115],[l*.712,1.69,c],i.rubber),Pi(t,[.018,.052,.103],[l*.751,1.672,c],i.darkmetal);for(let d of[-.015,.015]){let f=new Ee(new Ot(.006,.006,.02,6),i.metal);f.rotation.z=Math.PI/2,f.position.set(l*.765,1.691+d,c),t.add(f)}}let o=Pi(t,[n-.08,.092,.009],[0,r-.075,a+s/2-.015],i.darkmetal);return o.rotation.x=-.48,t}function tm(i){let e=new Ye;e.name="Contoured four-door rain visors";let t=[[[.35,1.641],[-.316,1.641],[-.316,1.598],[.326,1.598],[.458,1.362],[.492,1.382]],[[-.435,1.641],[-1.184,1.641],[-1.184,1.595],[-.435,1.595]]];for(let n of[-1,1])for(let s of t){let r=[],a=[],o=s.length;for(let u of[0,.004])for(let[d,f]of s)r.push(n*(.746-(f-1.14)*.105+.018+u),f,d);let l=s.map(([u,d])=>new oe(u,d));for(let[u,d,f]of Jn.triangulateShape(l,[]))a.push(u,d,f,f+o,d+o,u+o);for(let u=0;u<o;u++){let d=(u+1)%o;a.push(u,d,d+o,u,d+o,u+o)}let c=new ct;c.setAttribute("position",new Ge(r,3)),c.setIndex(a),c.computeVertexNormals();let h=new Ee(c,i);h.castShadow=!1,e.add(h)}return e}function nm(i,e){let t=new Ye;t.name="Moulded spare-wheel centre cover",t.position.z=.1;let n=[[0,.035],[.18,.035],[.215,.031],[.232,.02],[.239,.008],[.239,-.017],[.23,-.022]],s=new Ee(new mi(n.toReversed().map(a=>new oe(...a)),96),i.trim);s.name="Spare cover shell",s.rotation.x=-Math.PI/2,s.position.set(0,.995,-2.045),s.castShadow=!0,t.add(s);let r=Pi(t,[.36,.02,.005],[0,.922,-2.083],i.darkmetal,.002);if(r.rotation.z=-.04,e?.attributes.position.count){let a=e.clone();a.computeBoundingBox();let o=a.boundingBox.getCenter(new L);a.translate(-o.x,-o.y,-o.z),a.scale(.63,.63,.63),a.rotateY(Math.PI),a.translate(0,1.075,-2.086);let l=new Ee(a,i.chrome);l.name="Spare cover Suzuki emblem",t.add(l)}return t}function Vc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ct,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=im(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let g=im(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function im(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Qt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let v=h.getComponent(d,g);o.setComponent(d+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function sm(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,S=o.length;_<S;_++){let b=o[_],x=i.attributes[b];l[b]=new x.constructor(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);let y=i.morphAttributes[b];y&&(c[b]||(c[b]=[]),y.forEach((w,M)=>{let T=new w.array.constructor(w.count*w.itemSize);c[b][M]=new w.constructor(T,w.itemSize,w.normalized)}))}let f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=f*v;for(let _=0;_<r;_++){let S=n?n.getX(_):_,b="";for(let x=0,y=o.length;x<y;x++){let w=o[x],M=i.getAttribute(w),T=M.itemSize;for(let E=0;E<T;E++)b+=`${Math.trunc(M[u[E]](S)*v+m)},`}if(b in t)h.push(t[b]);else{for(let x=0,y=o.length;x<y;x++){let w=o[x],M=i.getAttribute(w),T=i.morphAttributes[w],E=M.itemSize,P=l[w],I=c[w];for(let N=0;N<E;N++){let D=u[N],z=d[N];if(P[z](a,M[D](S)),T)for(let V=0,Z=T.length;V<Z;V++)I[V][z](a,T[V][D](S))}}t[b]=a,h.push(a),a++}}let p=i.clone();for(let _ in i.attributes){let S=l[_];if(p.setAttribute(_,new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)),_ in c)for(let b=0;b<c[_].length;b++){let x=c[_][b];p.morphAttributes[_][b]=new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)}}return p.setIndex(h),p}function Vu(i,e){if(e===_u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Hr||e===Mo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Hr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var rm="https://www.skinny-jim.com/shop/p/",am="https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html",Hv=Object.freeze({skinnyjim_backbone:{sourceURL:rm+"backbone-rear-door-cargo-mount",bodyStyles:["3door","5door"],width:.315,height:.585,doorClearance:.112},skinnyjim_jerry_tray:{sourceURL:rm+"jerry-can-gas-cargo-carrier",bodyStyles:["3door","5door"],internalWidth:.37,internalDepth:.205,upstand:.075,requires:["skinnyjim_backbone"]},suzuki_nomade_flatrack:{sourceURL:am,bodyStyles:["5door"],width:1.43,length:1.509,height:.177},suzuki_nomade_steelwheel:{sourceURL:am,bodyStyles:["5door"],diameter:.381,beadWidth:.1397,offset:null}});function Vs(i,e,t,n,s=[0,0,0]){let r=new Ee(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function Rn(i,e,t,n,s,r=.002){return Vs(i,new zt(...e,2,Math.min(r,...e.map(a=>a/3))),n,s,t)}function Yr(i,e,t,n,s=.006){let r=new tn,a=i-t/2,o=e-n/2;return s=Math.min(s,t/2,n/2),r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function Wc(i,e,t,n,s=[0,0,0],r=.004){return Vs(i,new Tn(e,{depth:r,bevelEnabled:!0,bevelSize:7e-4,bevelThickness:7e-4,bevelSegments:1,curveSegments:6}),t,n,s)}function Ao(i,e,t,n,s){let r=Vs(i,new Ot(.0055,.0055,.006,6),s,"Stainless mounting bolt",[e,t,n]);return r.rotation.x=Math.PI/2,r}function qu(i,e){return i.name=e,i.userData.cataloguePart={...Hv[e],id:e,previewKind:"representative",disclosure:"Locally authored from public product photos and dimensions; not exact CAD or certified fitment."},i}function om(i){let e=qu(new Ye,"skinnyjim_backbone");e.position.z=.078;let t=[[-.1575,-.2925],[.095,-.2925],[.1575,-.2475],[.1,-.17],[.08,-.07],[.08,.07],[.105,.18],[.1575,.215],[.035,.2925],[-.1575,.2925]],n=new kt(t.map(a=>new oe(...a)));for(let a of[-.19,-.04,.12,.22])n.holes.push(Yr(-.045,a,.031,a===-.04?.072:.031));for(let a of[-.24,.15])for(let o of[-.115,-.077,-.039]){let l=new tn;l.absarc(o,a,.0035,0,Math.PI*2,!1),n.holes.push(l)}let s=Wc(e,n,i.darkmetal,"Backbone perforated main plate",[-.5275,1.035,-1.928]);s.userData.publishedDimensions={width:.315,height:.585},Rn(e,[.004,.585,.018],[-.687,1.035,-1.918],i.darkmetal,"Backbone folded hinge edge");for(let a of[.76,1.24])Rn(e,[.055,.045,.112],[-.665,a,-1.868],i.darkmetal,"Door hinge standoff"),Ao(e,-.665,a,-1.935,i.metal);let r=new kt([[-.41,-.15],[-.08,-.15],[-.08,.15],[-.41,.15]].map(a=>new oe(...a)));for(let a of[-.085,0,.085])r.holes.push(Yr(-.27,a,.027,.033));Wc(e,r,i.darkmetal,"Spare mount attachment bridge",[0,1.005,-1.841]),Rn(e,[.04,.3,.086],[-.4,1.005,-1.882],i.darkmetal,"Bridge folded offset");for(let a of[.9,1.11])Ao(e,-.12,a,-1.848,i.metal);for(let a of[.8,1.28])Ao(e,-.49,a,-1.935,i.metal);return e}function lm(i){let e=qu(new Ye,"skinnyjim_jerry_tray"),t=.37,n=.205,s=.075,r=Rn(e,[t,.004,n],[0,0,0],i.darkmetal,"Jerry tray floor"),a=Rn(e,[t-.014,.003,n-.014],[0,.0035,0],i.rubber,"Neoprene tray pad");for(let o of[-1,1]){let l=new kt(Yr(0,s/2,t,s,.012).getPoints(8));for(let u of[-.135,0,.135])l.holes.push(Yr(u,.039,u===0?.09:.035,.024));Wc(e,l,i.darkmetal,"Slotted tray upstand",[0,.002,o*(n/2+.002)]);let c=new kt(Yr(0,s/2,n,s,.012).getPoints(8));c.holes.push(Yr(0,.04,.072,.025));let h=Wc(e,c,i.darkmetal,"Slotted tray end",[o*(t/2+.002),.002,0]);h.rotation.y=Math.PI/2}for(let o of[-.12,.12])Rn(e,[.025,.0025,n-.01],[o,.006,0],i.canvas,"Webbing strap"),Rn(e,[.034,.009,.029],[o,.011,-.032],i.trim,"Cam buckle"),Rn(e,[.019,.003,.015],[o,.016,-.032],i.metal,"Buckle lever");for(let o of[-.1,.1])Rn(e,[.035,.066,.004],[o,.036,n/2+.009],i.darkmetal,"Tray mounting flange"),Ao(e,o,.049,n/2+.014,i.metal);return e.position.set(-.52,.843,-1.961),r.userData.internalFootprint=[t,n],a.userData.notIncluded="Fuel container",e}function cm(i){let e=qu(new Ye,"suzuki_nomade_flatrack"),t=1.43,n=1.509,s=1.8,r=-.52;for(let a of[-t/2+.019,t/2-.019])Rn(e,[.038,.035,n],[a,s,r],i.darkmetal,"OEM rack perimeter",.008);for(let a of[-1,1])Rn(e,[t-.038,.035,.038],[0,s,r+a*(n/2-.019)],i.darkmetal,"OEM rack perimeter",.008);for(let a=0;a<5;a++){let o=r-n/2+.16+a*(n-.32)/4;Rn(e,[t-.075,.024,.12],[0,s-.004,o],i.darkmetal,"OEM rack slat");for(let l of[-.037,0,.037])Rn(e,[t-.086,.002,.005],[0,s+.009,o+l],i.trim,"Slat anti-slip channel",5e-4)}for(let a of[-1,1])for(let o of[r-n/2+.1,r,r+n/2-.1]){let l=Rn(e,[.028,.142,.084],[a*.681,s-.088,o],i.darkmetal,"OEM gutter mounting leg");l.rotation.z=a*.22,Rn(e,[.065,.013,.09],[a*.714,s-.153,o],i.rubber,"Gutter pad"),Rn(e,[.012,.046,.08],[a*.752,s-.136,o],i.darkmetal,"Gutter clamp");let c=Ao(e,0,0,0,i.metal);c.rotation.set(0,0,Math.PI/2),c.position.set(a*.763,s-.136,o)}return e}function Vv(i){let e=new Ye;e.name="Nomade pressed steel wheel";let t=new kt;t.absarc(0,0,.179,0,Math.PI*2,!1);let n=new tn;n.absarc(0,0,.042,0,Math.PI*2,!1),t.holes.push(n);for(let b=0;b<10;b++){let x=b*Math.PI/5,y=new tn;y.absellipse(Math.cos(x)*.127,Math.sin(x)*.127,.024,.027,x,x+Math.PI*2,!1),t.holes.push(y)}for(let b=0;b<5;b++){let x=b*Math.PI*2/5,y=new tn;y.absarc(Math.cos(x)*.06985,Math.sin(x)*.06985,.008,0,Math.PI*2,!1),t.holes.push(y)}let s=new Tn(t,{depth:.003,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:12}),r=[],a=[],o=[],l=s.attributes.position,c=s.attributes.normal,h=s.attributes.uv,u=(b,x)=>b.map((y,w)=>(y+x[w])/2),d=(b,x,y,w=0)=>{let M=(T,E)=>Math.hypot(T[0]-E[0],T[1]-E[1],T[2]-E[2]);if(w<4&&Math.max(M(b,x),M(x,y),M(y,b))>.028){let T=u(b,x),E=u(x,y),P=u(y,b);d(b,T,P,w+1),d(T,x,E,w+1),d(P,E,y,w+1),d(T,E,P,w+1);return}for(let T of[b,x,y])r.push(...T.slice(0,3)),a.push(...T.slice(3,6)),o.push(...T.slice(6))};for(let b=0;b<l.count;b+=3)d(...[0,1,2].map(x=>[l.getX(b+x),l.getY(b+x),l.getZ(b+x),c.getX(b+x),c.getY(b+x),c.getZ(b+x),h.getX(b+x),h.getY(b+x)]));let f=new ct;f.setAttribute("position",new Ge(r,3)),f.setAttribute("normal",new Ge(a,3)),f.setAttribute("uv",new Ge(o,2));let g=sm(f,1e-6);s.dispose(),f.dispose();let v=g.attributes.position,m=g.attributes.normal;for(let b=0;b<v.count;b++){let x=v.getX(b),y=v.getY(b),w=Math.hypot(x,y),M=Math.min(1,Math.max(0,(w-.067)/.112));v.setZ(b,v.getZ(b)-.023*Math.sin(M*Math.PI)**2);let T=w>.067&&w<.179?-.023*Math.PI/.112*Math.sin(2*Math.PI*M):0,E=m.getX(b)-T*x/(w||1)*m.getZ(b),P=m.getY(b)-T*y/(w||1)*m.getZ(b),I=m.getZ(b),N=Math.hypot(E,P,I)||1;m.setXYZ(b,E/N,P/N,I/N)}Vs(e,g,i,"Ten-hole pressed steel disc");let p=[[.177,-.014],[.181,-.007],[.187,.005],[.1905,.007],[.1905,.002],[.187,-.003],[.18,-.015],[.173,-.045],[.169,-.083],[.181,-.132],[.1905,-.133]],_=Vs(e,new mi(p.map(b=>new oe(...b)),96),i,"Rolled steel lip and barrel");_.rotation.x=Math.PI/2;for(let b=0;b<5;b++){let x=b*Math.PI*2/5,y=Vs(e,new Ot(.0068,.0068,.01,6),i,"Steel wheel lug",[Math.cos(x)*.06985,Math.sin(x)*.06985,.006]);y.rotation.x=Math.PI/2}let S=Vs(e,new Ot(.035,.035,.029,48),i,"Exposed centre hub",[0,0,-.004]);return S.rotation.x=Math.PI/2,e}var Wu=new WeakMap;function Xu(i,e=!1){if(!i?.traverse)return 0;let t=Wu.get(i);if(!e){if(!t)return 0;for(let[s,r]of t.hidden)s.visible=r;for(let s of t.added)s.removeFromParent(),s.traverse(r=>r.geometry?.dispose());return t.material.dispose(),Wu.delete(i),t.added.length}if(t)return t.added.length;t={hidden:[],added:[],material:new Ze({name:"CatalogueSteelWheel",color:"#303438",roughness:.58,metalness:.3})};let n=[];i.traverse(s=>{(["StockWheels","AllTerrainWheels"].includes(s.name)||!s.name&&s.children.some(r=>r.isMesh&&r.material?.name==="TyreRubber"))&&n.push(s)});for(let s of n){let r=!!s.name;s.updateWorldMatrix(!0,!0);let a=new Xt,o=new Map,l=new L,c=s.matrixWorld.clone().invert();if(s.traverse(d=>{if(!d.isMesh||(["MachinedAlloy","WheelGunmetal"].includes(d.material?.name)&&(t.hidden.push([d,d.visible]),d.visible=!1),d.material?.name!=="TyreRubber"))return;let f=d.geometry.attributes.position,g=c.clone().multiply(d.matrixWorld);for(let v=0;v<f.count;v++)if(l.fromBufferAttribute(f,v).applyMatrix4(g),a.expandByPoint(l),r){let m=`${Math.sign(l.x)},${Math.sign(l.z)}`;o.has(m)||o.set(m,new Xt),o.get(m).expandByPoint(l)}}),a.isEmpty())continue;let h=a.getCenter(new L),u=r?[...o.values()].map(d=>{let f=d.getCenter(new L);return{side:Math.sign(f.x),x:f.x,y:f.y,z:f.z}}):[{side:Math.sign(s.parent?.position.x||1),x:h.x,y:h.y,z:h.z}];for(let d of u){let f=Vv(t.material);f.position.set(d.x+d.side*.086,d.y,d.z),f.rotation.y=d.side*Math.PI/2,s.add(f),t.added.push(f)}}return t.added.length?(Wu.set(i,t),t.added.length):(t.material.dispose(),0)}function hm(i){return Xu(i,!1)}var Wv=Object.freeze(["canvas","tweed","houndstooth","leather"]),Ws=i=>Wv.includes(i)?i:"canvas";function qs(i){return i.traverse(e=>{if(!e.isMesh||!e.material?.userData.ownsTextures)return;let t=e.geometry.attributes.position,n=e.geometry.attributes.normal,s=e.geometry.attributes.uv;if(!(!s||!n)){for(let r=0;r<t.count;r++){let a=Math.abs(n.getX(r)),o=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r));s.setXY(r,a>o&&a>l?t.getZ(r):t.getX(r),o>a&&o>l?t.getZ(r):t.getY(r))}s.needsUpdate=!0}}),i}function qv(i="canvas"){i=Ws(i);let e=256,t=new Uint8Array(e*e*4),n=new Uint8Array(e*e*4),s=741;for(let a=0;a<e;a++)for(let o=0;o<e;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=s/4294967296-.5,c=Math.sin(o*Math.PI/2),h=Math.cos(a*Math.PI/2),u=Math.floor(o/8),d=Math.floor(a/8),f=222+l*16+c*8+h*6,g=238,v=128+c*19+h*16+l*22;if(i==="houndstooth"&&(f=(((u+d)%4<2?u%8<4:d%8<4)?64:238)+c*7+h*5+l*12),i==="tweed"&&(f=174+((u+d)%3===0?37:0)+c*16+h*14+l*28),i==="leather"){let p=l>.44?-36:0;f=231+l*9+p*.25,v=141+l*40+p,g=157+l*28}let m=(a*e+o)*4;for(let p=0;p<3;p++)t[m+p]=Kt.clamp(f,0,255),n[m+p]=Kt.clamp(p===1?g:v,0,255);t[m+3]=n[m+3]=255}function r(a,o){let l=new wn(a,e,e);return l.colorSpace=o,l.wrapS=l.wrapT=en,l.repeat.set(i==="leather"?10:i==="houndstooth"?5:14,i==="leather"?10:i==="houndstooth"?5:14),l.generateMipmaps=!0,l.minFilter=Ln,l.anisotropy=4,l.needsUpdate=!0,l}return{map:r(t,bt),bump:r(n,xi)}}function Xn(i="canvas",e="#a38b69"){i=Ws(i);let t=qv(i),n=new Ht({name:"UpgradeFabric_"+i,color:e,map:t.map,bumpMap:t.bump,bumpScale:i==="leather"?18e-5:45e-5,roughnessMap:t.bump,roughness:i==="leather"?.85:1,metalness:0,sheen:i==="leather"?0:.25,sheenRoughness:.85,sheenColor:"#aaa69c",clearcoat:i==="leather"?.08:0,envMapIntensity:.25});return n.userData.ownsTextures=!0,n.addEventListener("dispose",()=>{t.map.dispose(),t.bump.dispose()}),n}var Xv=Object.freeze({mod_reardoor_molle:{sourceURL:"https://www.mod.equipment/products/molly",bodyStyles:["3door","5door"],panelWidth:.3,panelHeight:.2675,cutout:.025,requires:"Screws into rear-door plastic trim; check vehicle-specific installation."},mod_halfmolly_5door:{sourceURL:"https://www.mod.equipment/products/half-molly-set-jimny-4-xl",bodyStyles:["5door"],panelWidth:.235,panelHeight:.2,requires:"Existing lower M6 points plus upper screws into plastic window trim."},exploresetups_drawer_5door:{sourceURL:"https://exploresetups.com/products/jimny-xl-5-door-drawer-system",bodyStyles:["5door"],width:1.11,depth:.46,height:.25,requires:"Matching Jimny XL false floor, sold separately; no sleeping platform shown."}});function xs(i,e,t,n,s=[0,0,0]){let r=new Ee(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function xn(i,e,t,n,s,r,a,o,l,c=.002){return xs(i,new zt(e,t,n,2,Math.min(c,e/3,t/3,n/3)),o,l,[s,r,a])}function ju(i,e,t,n,s=.003){let r=new tn,a=i-t/2,o=e-n/2;return r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function um(i,e,t,n){let s=new kt(ju(0,0,i,e,.008).getPoints(8));for(let r=0;r<t;r++)for(let a=0;a<n;a++)s.holes.push(ju((r-(t-1)/2)*.038,(a-(n-1)/2)*.037,.025,.025));return new Tn(s,{depth:.002,bevelEnabled:!0,bevelSize:45e-5,bevelThickness:45e-5,bevelSegments:1,curveSegments:3})}function dm(i,e,t,n,s){let r=xs(i,new Ot(.0045,.0045,.003,6),s,"Panel screw",[e,t,n]);return r.rotation.x=Math.PI/2,r}function Yu(i){let e=new Ye;return e.name=i,e.userData.cataloguePart={id:i,...Xv[i],previewKind:"representative",disclosure:"Original photo/dimension-guided approximation, not manufacturer CAD or certified fitment."},e}function qc(i,e="5door"){let t=Yu("mod_reardoor_molle"),n=-1.669+(e==="3door"?.17:0);for(let s of[-.172,.172]){let r=xs(t,um(.3,.2675,7,6),i.darkmetal,"Rear-door perforated panel",[s,.955,n+.012]);r.userData.publishedSize=[.3,.2675];for(let a of[-.1375,.1375])for(let o of[-.114,.114])xn(t,.014,.014,.012,s+a,.955+o,n+.005,i.rubber,"Rear-door panel spacer"),dm(t,s+a,.955+o,n+.017,i.metal)}return t}function Xc(i){let e=Yu("mod_halfmolly_5door");for(let t of[-1,1]){let n=new Ye;n.position.set(t*.651,1.24,-1.36),n.rotation.y=t*Math.PI/2,e.add(n);let s=xs(n,um(.235,.2,5,4),i.darkmetal,"Rear-window pocket panel");s.userData.publishedSize=[.235,.2],xn(n,.235,.003,.042,0,-.098,.02,i.darkmetal,"Folded pocket base");for(let r of[-.112,.112]){xn(n,.012,.2,.042,r,0,.02,i.darkmetal,"Pocket side return"),dm(n,r,.085,.006,i.metal);let a=xs(n,new jt(.009,.002,6,18),i.metal,"Lower M6 lashing eye",[r,-.087,.012]);a.rotation.x=.3}}return e}function jc(i,{open:e=!1}={}){let t=Yu("exploresetups_drawer_5door"),n=Xn("tweed","#373b3d");n.name="DrawerCharcoalCarpet",n.roughness=1,n.metalness=0,n.envMapIntensity=.15;let s=-1.445,r=.699,a=r+.25;xn(t,1.11,.018,.46,0,r-.013,s,i.trim,"Required false-floor mounting surface");let o=xn(t,.83,.015,.46,0,a-.0075,s,n,"Carpeted drawer top");o.userData.disposableMaterial=!0;for(let l of[-.4075,0,.4075])xn(t,.015,.235,.46,l,r+.1175,s,n,"Drawer carcass partition");xn(t,.83,.015,.46,0,r+.0075,s,n,"Drawer carcass base"),xn(t,.83,.235,.015,0,r+.1175,s+.2225,n,"Drawer rear carcass");for(let l of[-.2075,.2075]){xn(t,.389,.214,.016,l,r+.122,s-.228-(e?.3:0),n,"Flush drawer front");let c=new Ye;c.name="DrawerLatchAssembly",c.position.z=e?-.3:0,t.add(c),xn(c,.071,.052,.004,l,r+.12,s-.239,i.metal,"Recessed stainless latch surround",.006),xn(c,.054,.036,.005,l,r+.12,s-.242,i.trim,"Latch recess",.004),xn(c,.035,.011,.006,l,r+.12,s-.247,i.metal,"Folding latch pull",.003);let h=xs(c,new Ot(.005,.005,.003,16),i.metal,"Drawer key cylinder",[l+.022,r+.12,s-.245]);if(h.rotation.x=Math.PI/2,e){xn(t,.37,.012,.43,l,r+.025,s-.3,n,"Open drawer tray");for(let u of[-.182,.182])xn(t,.012,.18,.43,l+u,r+.115,s-.3,n,"Open drawer side"),xn(t,.008,.024,.35,l+u,r+.08,s-.24,i.metal,"Telescopic drawer slide");xn(t,.37,.18,.012,l,r+.115,s-.09,n,"Open drawer rear")}}for(let l of[-1,1]){let c=new kt(ju(l*.485,0,.14,.46,.012).getPoints(6)),h=new tn;h.absarc(l*.485,-.09,.008,0,Math.PI*2),c.holes.push(h);let u=xs(t,new Tn(c,{depth:.015,bevelEnabled:!1}),n,"Removable carpeted wing",[0,a-.015,s]);u.rotation.x=-Math.PI/2,xn(t,.14,.235,.015,l*.485,r+.1175,s-.2225,n,"Side wing fixed face");for(let d of[s-.17,s+.17]){let f=xs(t,new jt(.014,.003,8,24),i.metal,"Cargo tie-down ring",[l*.36,a+.008,d]);f.rotation.x=Math.PI/2}}return xn(t,.828,.018,.012,0,a-.006,s-.231,i.metal,"Aluminium protective front edge"),t.userData.publishedEnvelope=[1.11,.25,.46],qs(t)}var jv=Object.freeze({body:"5door",rearDeckWidth:1.11,rearDeckLength:1.165,extensionLength:.685,bedLength:1.83,bedWidth:.65,bedThickness:.075});function Jt(i,e,t,n,s,r,a,o,l,c=.005){let h=new Ee(new zt(t,n,s,2,Math.min(c,t/3,n/3,s/3)),l);return h.name=e,h.position.set(r,a,o),h.castShadow=h.receiveShadow=!0,i.add(h),h}function Kr(i,e){return i.userData.ownedMaterials??=[],i.userData.ownedMaterials.push(e),e}function fm(i,e,t,n=.0012){let s=new Qn,r=e.map(o=>new L(...o));for(let o=1;o<r.length;o++)s.add(new $n(r[o-1],r[o]));let a=new Ee(new Wn(s,e.length*4,n,5,!1),t);return a.name="Stitched piping",i.add(a),a}function pm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new Ye;s.name="UpholsteredDoorInserts";let r=Kr(s,Xn(Ws(t),n)),a=Kr(s,new Ze({color:"#d5c6aa",roughness:.9}));for(let o of[-1,1])for(let[l,c]of e==="3door"?[[0,1.04]]:[[.1,.74],[-.84,.6]]){let h=o*.676,u=Jt(s,"Padded door insert",.012,.185,c,h,.875,l,r,.012);Jt(s,"Upholstered upper door strip",.012,.028,c,h,1.088,l,r,.006),Jt(s,"Wrapped door armrest",.077,.047,.15,o*.66,1.005,l-.06,r,.013);let d=u.geometry.attributes.uv,f=u.geometry.attributes.position;for(let S=0;S<d.count;S++)d.setXY(S,f.getZ(S),f.getY(S));d.needsUpdate=!0;let g=o*.668,v=.796,m=.954,p=l-c/2+.018,_=l+c/2-.018;fm(s,[[g,v,p],[g,m,p],[g,m,_],[g,v,_],[g,v,p]],a,.0012);for(let S=p+.02;S<_-.01;S+=.011)Jt(s,"Door top stitch",8e-4,.0012,.0045,o*.6675,m-.006,S,a,3e-4)}return qs(s)}function mm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new Ye;s.name="RearSeatUpholstery";let r=Kr(s,Xn(t,n)),a=e==="3door"?.17:0;for(let o of[-.29,.29]){let l=Jt(s,"Rear seat patterned back insert",.45,.285,.008,o,1.035,-.995+a,r,.003),c=Jt(s,"Rear seat patterned cushion insert",.45,.008,.29,o,.879,-.83+a,r,.003);for(let h of[l,c]){let u=h.geometry.attributes.position,d=h.geometry.attributes.uv;for(let f=0;f<u.count;f++)d.setXY(f,u.getX(f),h===l?u.getY(f):u.getZ(f));d.needsUpdate=!0}}return s}function gm(i,{camp:e=!1,drawers:t=!1}={}){let n=new Ye;n.name="TouringInterior",n.userData.layout=jv;let s=Kr(n,Xn("tweed","#45484a")),r=Kr(n,Xn("canvas","#466278")),a=Kr(n,new Ze({color:"#b9c1b3",roughness:1}));n.add(jc(i,{open:t}),Xc(i),qc(i));for(let l of[-.279,.279]){let c=Jt(n,"Split carpeted rear platform",.552,.015,.705,l,.9415,-.8625,s,.004);c.userData.publishedDimensions=[.555,.705,.015];for(let h of[-1.12,-.61])Jt(n,"Bolted platform support",.025,.235,.03,l,.817,h,i.darkmetal,.003);Jt(n,"Platform aluminium edge",.545,.018,.009,l,.942,-.5075,i.metal,.002)}for(let l of[-.29,.29])Jt(n,"Folded rear seat back",.56,.09,.41,l,.87,-.87,i.seat,.025);let o=Jt(n,"Strapped touring storage case",.37,.22,.42,-.3,1.067,-.86,i.trim,.024);Jt(n,"Storage case lid",.38,.024,.43,-.3,1.185,-.86,i.darkmetal,.008);for(let l of[-.43,-.17])Jt(n,"Case restraint webbing",.022,.003,.46,l,1.2,-.86,i.seat,.001),Jt(n,"Case restraint side",.022,.24,.003,l,1.075,-1.083,i.seat,.001),Jt(n,"Case buckle",.032,.026,.008,l,1.12,-1.089,i.metal,.002);if(e){Jt(n,"Custom passenger bed extension",.68,.018,.685,.279,.94,-.1675,s,.005);for(let c of[-.03,.58])Jt(n,"Extension support leg",.022,.245,.022,c,.808,.13,i.metal,.003),Jt(n,"Support rubber foot",.045,.012,.05,c,.68,.13,i.rubber,.004);Jt(n,"Single sleeping mat 183 x 65 x 7.5 cm",.65,.075,1.83,.28,.9865,-.745,r,.029),fm(n,[[-.04,.976,-1.63],[.6,.976,-1.63],[.6,.976,.14],[-.04,.976,.14],[-.04,.976,-1.63]],a,.0018),Jt(n,"Soft camp pillow",.4,.075,.25,.28,1.055,.005,r,.035);let l=new Ee(new Ot(.014,.014,.005,24),i.trim);l.name="Sleeping mat valve",l.position.set(.56,.99,-1.65),l.rotation.x=Math.PI/2,n.add(l)}else{let l=new Ee(new Pr(.095,.48,6,24),r);l.name="Packed sleeping mat",l.rotation.z=Math.PI/2,l.position.set(.18,1.06,-1.4),l.castShadow=l.receiveShadow=!0,n.add(l),Jt(n,"Stowed passenger bed extension",.68,.018,.685,.279,.966,-.855,s,.005);for(let c of[-.04,.4]){let h=new Ee(new jt(.097,.009,5,32),i.seat);h.name="Packed mattress strap",h.rotation.y=Math.PI/2,h.position.set(c,1.06,-1.4),n.add(h)}}return qs(n)}(function(i){let e="#171b1d",t={body:"Body paint",roof:"Roof",trim:"Exterior trim & badges",wheels:"Wheels & spare rim",grille:"Grille & logo",bumpers:"Factory bumpers",cabin:"Cabin hard trim"};function n(r={}){let a={};if(r?.partFinishes&&typeof r.partFinishes=="object"&&!Array.isArray(r.partFinishes))for(let[l,c]of Object.entries(r.partFinishes).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&["matte","gloss"].includes(c)&&(a[l]=c);let o={};if(r?.partColours&&typeof r.partColours=="object"&&!Array.isArray(r.partColours))for(let[l,c]of Object.entries(r.partColours).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&/^#[0-9a-f]{6}$/i.test(c)&&(o[l]=c.toLowerCase());return{allBlack:r?.allBlack===!0,partFinishes:a,partColours:o}}function s(r){return r==="tires"||r==="suzuki_nomade_steelwheel"?"wheels":/^autostylenn_.*grille$/.test(r)?"grille":r}i.JimnySurfaceStyles=Object.freeze({BLACK:e,BASE:Object.freeze(t),clean:n,target:s})})(globalThis);function bm(i,e="5door"){i.updateWorldMatrix(!0,!0);let t=i.matrixWorld.clone().invert(),n=e==="3door"?-.17:0,s=[{id:"right",x:-.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"left",x:.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"centre",x:0,y:1.522,z:.536+n,w:.18,h:.055}].map(a=>({...a,vertices:[]})),r=[new L,new L,new L];return i.traverse(a=>{if(!a.isMesh||a.material?.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Le().multiplyMatrices(t,a.matrixWorld);for(let u=0;u<(c?.count??l.count);u+=3){for(let d=0;d<3;d++)r[d].fromBufferAttribute(l,c?c.getX(u+d):u+d).applyMatrix4(h);for(let d of s)if(r.every(f=>Math.abs(f.x-d.x)<d.w/2+.001&&Math.abs(f.y-d.y)<d.h/2+.001&&Math.abs(f.z-d.z)<.0035)){for(let f of r)d.vertices.push(f.x,f.y,f.z-6e-4);break}}}),s.filter(a=>a.vertices.length).map(a=>{let o=new ct;o.setAttribute("position",new Ge(a.vertices,3));let l=[];for(let u=0;u<a.vertices.length;u+=3)l.push((a.vertices[u]-a.x)/a.w+.5,(a.vertices[u+1]-a.y)/a.h+.5);o.setAttribute("uv",new Ge(l,2)),o.computeVertexNormals();let{vertices:c,...h}=a;return{...h,geometry:o}})}var{BLACK:Yv,clean:Kv}=globalThis.JimnySurfaceStyles,Jv=new Set(["OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille"]),Zv=/Glass|Lens|Lamp|Emitter|Reflector|Indicator|RearLamp|Instrument|LCD|Display|Needle|Mirror/i,$v=/Fabric|SeatInsert|SeatCover|Carpet|Woven|Upholstery/i;function Yc(i,e={}){for(let[t,n]of Object.entries(i))n?.userData&&(n.userData.surfaceKind=t);for(let t of Object.values(e))t.userData.surfaceKind="optic"}function Ku(i){if(i.userData.grilleBadge)return"grille";for(let e=i;e;e=e.parent){if(e.userData.finishTarget)return e.userData.finishTarget;if(Jv.has(e.name))return"grille";if(["StockWheels","AllTerrainWheels","SpareWheel"].includes(e.name))return"wheels";if(e.name==="RoofShell")return"roof";if(e.name==="StockBumper")return"bumpers";if(e.name==="StockHeadlamps")return"headlamps";if(e.name==="Cabin")return"cabin";if(e.name==="BodyShell")return i.material?.userData.vehiclePaint||i.material?.name==="BodyPaint"?"body":"trim"}return null}function xm(i,e){for(let t of bm(i,e)){let n=new Ze({name:"MirrorGlass",color:"#c4cccf",metalness:1,roughness:.12,side:Vt}),s=new Ee(t.geometry,n);s.name="ProtectedMirror-"+t.id,s.userData.disposableMaterial=!0,i.add(s),(i.getObjectByName(t.id==="centre"?"Cabin":"BodyShell")||i).attach(s)}}function Ju(i){let e=i.userData.surfaceKind||"",t=$v.test(i.name)||["seat","canvas","upholstery"].includes(e)||i.userData.ownsTextures,n=Zv.test(i.name)||["glass","lens","smoked","reflector","white","red","orange","ambient","optic","rubber"].includes(e)||/TyreRubber|IntakeShadow|Brake/.test(i.name)||i.emissiveIntensity>0&&i.emissive?.getHex()>0||i.isMeshBasicMaterial||!t&&i.map;return{fabric:t,protectedSurface:n}}function _m(){let i=new Map,e=new Set,t={materials:0,targets:[]};function n(){for(let[r,a]of i)r.material=a;i.clear();for(let r of e)r.dispose();e.clear(),t={materials:0,targets:[]}}function s(r,a={}){n();let o=Kv(a),l=new Map,c=new Set;for(let h of r)h?.traverse(u=>{if(!u.isMesh||Array.isArray(u.material))return;let d=u.material,f=Ku(u),g=o.partFinishes[f],{fabric:v,protectedSurface:m}=Ju(d),p=f==="wheels"&&d.name==="CatalogueSteelWheel",_=!v&&(f!=="wheels"||p)?o.partColours[f]:null;if(!f||m||d.name==="BrightChrome"&&["headlamps","bumpers"].includes(f)||!o.allBlack&&!_&&(!g||v))return;let S=o.allBlack&&(f!=="wheels"||p)&&!(v&&a.cabin&&a.cabin!=="black")&&!d.userData.explicitSurfaceColour&&!d.userData.vehiclePaint&&!["BodyPaint","RoofPaint"].includes(d.name),b=v?null:g;if(!S&&!b&&!_)return;let x=d.uuid+":"+f+":"+S+":"+b+":"+_,y=l.get(x);y||(y=d.clone(),y.userData={...y.userData,surfaceStyle:{target:f,black:S,finish:b}},S&&(y.color.set(Yv),y.vertexColors=!1,y.metalness=Math.min(y.metalness||0,.12)),_&&(y.color.set(_),y.vertexColors=!1),b&&(y.roughness=b==="matte"?.85:.14,y.roughnessMap=null,"clearcoat"in y&&(y.clearcoat=b==="matte"?.02:.95,y.clearcoatRoughness=b==="matte"?.7:.09)),y.needsUpdate=!0,l.set(x,y),e.add(y)),i.set(u,d),u.material=y,c.add(f)});return t={materials:e.size,targets:[...c]},t}return{apply:s,clear:n,snapshot:()=>({...t,targets:[...t.targets]})}}(function(i){"use strict";let e=["3door","5door"],t="2026-10-23",n={exea_cupholder:{name:"EXEA drink & phone holder \xB7 passenger side",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"interior",size:null,fitment:"SelectPlus F9NG / 9Z0BB-77R20, sold individually. Specify driver or passenger fitting position; this representative preview uses the passenger side. Maker specifies bottles up to 600 ml. Verify your chassis, airbag clearance and grip-cover installation order.",note:"Hollow cradle, bottle retaining fingers, phone slot and bolt-on mounting arm. Bottle and phone are not included; original inferred-scale geometry."},exea_phone_mount:{name:"EXEA EE-213 dedicated phone holder",category:"Interior",region:"Japan",countryCode:"JP",seller:"EXEA",url:"https://www.seikosangyo.co.jp/exea/english/sp/special1.html",bodyStyles:["3door"],camera:"interior",size:null,fitment:"Maker lists EE-213 in its Jimny range. This preview is restricted to the three-door pending five-door mounting confirmation. Confirm handset dimensions, mounting revision and local driving laws; keep instruments, sightlines and airbag deployment clear.",note:"Adjustable clamp jaws, padded cradle, ball joint and compact dash mounting base. No phone or charging electronics implied."},armoro_console_organizer:{name:"ARMORO canvas console organiser \xB7 AT only",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/jimny-center-console-organizer",bodyStyles:e,camera:"console",size:null,transmission:"AT",fitment:"Maker specifies automatic-transmission Jimny models from 2018, RHD or LHD. NOT a manual-transmission fitment claim. Confirm exact body/trim, full transfer-lever travel, seat travel and handbrake clearance before fitting; inferred-scale preview is not a clearance test.",note:"Two open canvas main pockets, side mesh sleeves, binding and straps; no bulky box across the transfer lever."},exea_utility_bars:{name:"EXEA utility side bars \xB7 pair",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:[.045,.045,.61],fitment:"F9NP / 9Z0BB-77R70. Replaces rear assist grips with bolted side bars. Published limit is 1.5 kg PER SIDE, not a combined roof-net load rating. Suzuki says Nomade installation appearance differs. Confirm fasteners, trim, airbags and attachment instructions.",note:"610 mm rails with offset mounting feet, end caps and visible screws. Separate mounting kit required for the roof net."},exea_roof_net:{name:"EXEA overhead soft-storage net",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:null,requires:["exea_utility_bars"],fitment:"F9NQ / 9Z0BB-77R80 requires the separately sold compatible utility side bars. Use only light, soft items, retain headroom and visibility, and follow the maker load limit and incompatible-accessory list. Never place hard, heavy or slippery items overhead.",note:"Open woven mesh with sag, bound perimeter, adjustable corner straps and buckles. It is not a cargo barrier or occupant restraint."},exea_switch_extensions:{name:"EXEA window-switch extensions \xB7 black",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"console",size:null,fitment:"F9NL / 9Z0BB-77R10 supplied for four switches with double-sided adhesive. Preview shows the two front central window rockers, not an additional electric-window conversion. Check switch shape, clearance and reliable release after installation.",note:"Small sculpted raised paddles with tactile ridges and visible switch-direction marks; no electrical modifications."},maruti_at_mats:{name:"Maruti all-weather floor mats \xB7 AT",category:"Interior",region:"India",countryCode:"IN",seller:"Maruti Suzuki Genuine Accessories",url:"https://www.marutisuzuki.com/genuine-accessories/jimny-accessories",bodyStyles:["5door"],camera:"footwell",size:null,transmission:"AT",incompatible:["mats"],fitment:"India five-door AT reference 75901M80TK0. MT uses a different reference, 75901M80TH0; do not substitute. Original representative tray geometry is not a pedal-clearance or anti-slip certification. Confirm clips and secure mats; never stack them.",note:"Front footwell trays with raised edges, drainage channels, heel pad and retaining clips. Model is not a scan of the genuine set."},armoro_seat_organizer:{name:"ARMORO seat-back organiser",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/universal-car-seat-organizer",bodyStyles:e,camera:"seatbacks",size:null,fitment:"Universal canvas organiser. Confirm straps fit your seat and remain clear of airbags, seat tracks, belts and rear passengers. Preview shows one front-seat back; not exact ARMORO CAD.",note:"Bottle pockets, a large pocket and tissue storage address the small-item storage repeatedly discussed by Jimny owners."},jimsa_door_pockets:{name:"JimSA front door-grip pockets \xB7 pair",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-door-grip-storage-pockets-jimny-year-2018",bodyStyles:e,camera:"doors",size:null,fitment:"Seller lists Gen 4 three-door and five-door FRONT doors only. Uses existing door-card screws; verify door handle, window-control and emergency-exit access.",note:"Textured plastic pockets with padded base. Representative hollow pockets; dimensions inferred from product photos."},jimsa_dash_tray:{name:"JimSA instrument-top storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-dashboard-storage-tray-jimny-year-2018",bodyStyles:e,camera:"interior",existingId:"market_jimsa_7123723878571",size:null,fitment:"Seller lists both bodies. Adhesive tray above the instrument binnacle. Keep objects low and secured; do not obstruct instruments, windscreen view, vents or airbags.",note:"Anti-slip-lined shallow tray. Original inferred-scale model, not a safe loose-object restraint."},jimsa_console_tray:{name:"JimSA centre-console storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-centre-console-storage-tray-jimny-year-2018",bodyStyles:e,camera:"console",existingId:"market_jimsa_7123719946411",size:null,fitment:"Seller offers DIFFERENT MT and AT versions for both bodies. Choose your transmission. Preview is a shallow small-item tray and is not a measured clearance check for levers or handbrake.",note:"Keeps small items organised without installing a large armrest. No promise that one insert fits both transmissions."},jimsa_cargo_pouch_5door:{name:"JimSA rear luggage storage pouch \xB7 XL",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/rear-luggage-storage-pouch-5-door-jimny-year-2023",bodyStyles:["5door"],camera:"storage",size:null,fitment:"Seller explicitly lists five-door GL/GLX. Confirm mounting hardware and maximum load. Keep visibility and seatbelts clear; do not treat the fabric cover as a crash barrier.",note:"Soft cargo-area pouch/cover for smaller items. Representative zip pocket and securing tabs, inferred dimensions."},jimsa_tiedowns:{name:"JimSA rear luggage attachment rings",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-rear-luggage-area-attachment-rings-jimny-year-2018",bodyStyles:["3door"],camera:"storage",size:null,fitment:"Current seller page lists THREE-door only. Pair mounts in existing holes below rear windows. No published crash/load rating; use appropriate rated restraints and vehicle guidance.",note:"A light, useful preparation item before adding large storage systems. Preview dimensions inferred; not recovery points."},fr_wolfpack:{name:"Front Runner Wolf Pack Pro storage box",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-za/product/wolf-pack-pro",bodyStyles:e,camera:"storage",size:[.51,.23,.4],dimensionSource:"https://monsterfishing.co.nz/collections/dometic/products/dometic-wolf-pack-pro",fitment:"Universal removable storage box, not a Jimny-specific mount. Preview shows strapped cargo placement; source suitable vehicle-rated anchorage separately. Upright-seat cargo fit varies by body.",note:"Published box envelope 510 \xD7 400 \xD7 230 mm, 3.65 kg empty. Original model with lid, latches and restraint straps; not manufacturer CAD."},fr_jerry_holder:{name:"Front Runner single external jerry-can holder",category:"Roof & carrying",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-us/product/single-jerry-can-holder",bodyStyles:["5door"],camera:"roof",size:[.165,.37,.513],requires:["fr_slimline2"],incompatible:["rtt","boards"],fitment:"JCHO013 is for a Front Runner slatted rack and 20 L NATO/Wedco cans; NOT Scepter. Preview adds a compatible rack. Confirm actual rack kit, dynamic roof load, mounting instructions and local fuel-transport rules.",note:"Holder is separate from can. Published 513 \xD7 165 \xD7 370 mm and 2.4 kg. Fuel stays outside the cabin; loaded roof weight and handling matter."},fr_fuelcan20:{name:"Front Runner 20 L steel fuel can \xB7 external",category:"Camping & storage",region:"United Kingdom",countryCode:"GB",seller:"Tuff-Trek",url:"https://tuff-trek.com/products/jcfu001-20l-jerry-can-matte-black-steel-finish",bodyStyles:["5door"],camera:"roof",size:[.165,.35,.46],requires:["fr_slimline2","fr_jerry_holder"],incompatible:["fr_watercan20","rtt","boards"],fitment:"JCFU001 fuel-only can with compatible holder and rack. NEVER store fuel in the passenger cabin. Confirm local container approval/transport law, filled weight, roof-load limits and safe refuelling. Not suitable for drinking water.",note:"Published 350 \xD7 165 \xD7 460 mm overall, 3.82 kg empty. Can is shown externally in a restrained carrier, not loose or bolted directly to the door."},fr_watercan20:{name:"Front Runner 20 L water can with tap",category:"Camping & storage",region:"United States",countryCode:"US",seller:"Off Road Tents",url:"https://offroadtents.com/products/front-runner-plastic-water-jerry-can-with-tap",bodyStyles:e,camera:"storage",size:[.36,.475,.18],incompatible:["fr_fuelcan20","fr_wolfpack","jimsa_cargo_pouch_5door","drawer","exploresetups_drawer_5door","touring"],fitment:"Food-grade BPA-free water container; WATER ONLY, never substitute for a fuel can. Preview is low cargo placement with straps, not a certified restraint. 20 L of water adds about 20 kg before container weight.",note:"Published 360 \xD7 180 \xD7 475 mm, 2.38 kg empty. External fuel-holder compatibility is NOT assumed; water model uses separate cargo placement."},arb_airkit:{name:"ARB CKMP12 portable compressor kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/air-systems",bodyStyles:e,camera:"storage",size:[.44,.208,.238],dimensionSource:"https://store.arbusa.com/content/CKMP12_Operation%20Guide.pdf",fitment:"Universal 12 V portable kit, not an installed onboard compressor. Secure when travelling; use outdoors with correct battery connection and manufacturer instructions. Never connect this load to an ordinary cabin accessory socket.",note:"Published case envelope 440 \xD7 238 \xD7 208 mm. Preview is the closed carry case; no implied under-seat installation, wiring or automatic inflation simulation."},arb_repairkit:{name:"ARB Speedy Seal II tyre repair kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/product/10000011-speedy-seal-series-ii-repair-kit",bodyStyles:e,camera:"storage",size:null,fitment:"Universal tubeless-tyre emergency kit. Not for sidewall damage or every puncture. Follow tyre maker instructions and obtain professional inspection/repair; carry an inflated serviceable spare and correct tools.",note:"Closed high-visibility carry-case preview with latches and handle. Inferred scale, not exact product CAD or a guarantee a damaged tyre is repairable."},kap_fire:{name:"KAP passenger-seat extinguisher bracket",category:"Interior",region:"Australia",countryCode:"AU",seller:"OZ Jimny / KAP",url:"https://ozjimny.com/products/kap-industires-fire-extinguisher-bracket",bodyStyles:e,camera:"footwell",existingId:"market_4454478184585",size:null,fitment:"Seller lists both bodies; maker page specifies JB74. Confirm the exact XL/body version with seller. Bracket only unless extinguisher option bought. May restrict seat travel; retain pedal/seat/airbag clearance and correct metal cage.",note:"Original passenger-side bracket plus optional representative 1 kg extinguisher. No certification claimed for our model or installation; use professional fitting and extinguisher maintenance."}};for(let[s,r]of Object.entries(n))Object.assign(r,{id:s,visual:s,checked:t,stockAtCheck:"unknown",previewKind:"reference-guided",disclosure:"Original representative geometry, not manufacturer CAD, verified stock or certified fitment."});i.JimnyPracticalParts=Object.freeze(n)})(globalThis);var ym=globalThis.JimnyPracticalParts;function Xs(i,e,t,n,s=0,r=0,a=0){let o=new Ee(e,t);return o.name=n,o.position.set(s,r,a),o.castShadow=o.receiveShadow=!0,i.add(o),o}function Qe(i,e,t,n,s,r,a,o,l,c=.003){return Xs(i,new zt(e,t,n,2,Math.min(c,e/4,t/4,n/4)),o,l,s,r,a)}function un(i,e,t,n,s){let r=e.map(o=>new L(...o)),a=new Qn;for(let o=1;o<r.length;o++)a.add(new $n(r[o-1],r[o]));return Xs(i,new Wn(a,e.length*3,t,6,!1),n,s)}function Fn(i,e,t,n,s,r,a,o,l="y"){let c=Xs(i,new Ot(e,e,t,24),a,o,n,s,r);return l==="x"&&(c.rotation.z=Math.PI/2),l==="z"&&(c.rotation.x=Math.PI/2),c}function _s(i,e){return(i.userData.ownedMaterials??=[]).push(e),e}function Qv(i,e,t,n,s,r){let a=new on(.23,.115,10,6),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l)/.23+.5,h=o.getY(l)/.115+.5;o.setXYZ(l,e+s*(.004*Math.sin(c*Math.PI)*Math.sin(h*Math.PI)+.0015*Math.sin(c*19)*h),t+(h-.5)*.115-.004*Math.sin(c*Math.PI)*h,n+(c-.5)*.23)}return a.computeVertexNormals(),Xs(i,a,r,"Soft canvas pocket front")}function Zu(i,e,t,n,s,r,a){return Xs(i,new jt(e,.0025,6,20),r,a,t,n,s)}function Jr(i,e,t,n,s,r,a,o,l){Qe(i,e,.005,t,s,r,a,o.trim,l+" base"),Qe(i,e-.012,.002,t-.012,s,r+.0035,a,o.rubber,l+" anti-slip liner");for(let c of[-1,1])Qe(i,.005,n,t,s+c*(e/2-.0025),r+n/2,a,o.trim,l+" side lip"),Qe(i,e,n,.005,s,r+n/2,a+c*(t/2-.0025),o.trim,l+" end lip")}function Kc(i,e,t,n,s,r,a,o){for(let l of[-s*.3,s*.3]){Qe(i,.02,.004,a+.018,e+l,t+r/2+.004,n,o.seat,"Restraint webbing");for(let c of[-1,1])Qe(i,.02,r+.01,.003,e+l,t,n+c*(a/2+.008),o.seat,"Restraint vertical webbing"),Qe(i,.03,.025,.008,e+l,t+.025,n+c*(a/2+.011),o.metal,"Restraint cam buckle")}}function $u(i,e,t,n,s,r,a,o,{colour:l=null,name:c="Carry case"}={}){let h=l?_s(i,new Ze({name:"CarryCaseShell",color:l,roughness:.65})):o.trim;Qe(i,s,r,a,e,t,n,h,c,.012),Qe(i,s+.004,.018,a+.004,e,t+r/2-.014,n,o.darkmetal,c+" lid perimeter",.004);for(let u of[-1,1])Qe(i,.033,.035,.012,e+u*s*.34,t+r*.28,n-a/2-.006,o.darkmetal,c+" latch");un(i,[[e-.055,t+r/2,n],[e-.05,t+r/2+.025,n],[e+.05,t+r/2+.025,n],[e+.055,t+r/2,n]],.008,o.trim,c+" handle")}function e1(i,e,{body:t="5door",cargoTop:n=.7,cargoLeft:s=!1}={}){let r=ym[i];if(!r||!r.bodyStyles.includes(t))return null;let a=new Ye;a.name=i,a.userData.finishTarget=i,a.userData.cataloguePart={...r};let o=t==="3door"?.17:0,l=-1.445+o;if(i==="exea_cupholder"){let u=.25-o;Qe(a,.075,.018,.035,.57,1.165+.065,u+.07,e.trim,"Cupholder dash bracket"),Qe(a,.018,.085,.035,.57,1.165+.025,u+.07,e.trim,"Cupholder offset arm"),Fn(a,.047,.006,.57,1.165-.045,u,e.trim,"Cup cradle floor");let d=Xs(a,new jt(.049,.006,8,40),e.trim,"Open bottle retaining ring",.57,1.165+.01,u);d.rotation.x=Math.PI/2;for(let f of[0,2.1,4.2])Qe(a,.012,.058,.012,.57+Math.cos(f)*.042,1.165-.017,u+Math.sin(f)*.042,e.trim,"Bottle retaining finger");Jr(a,.085,.022,.026,.57,1.165-.015,u-.064,e,"Phone slot");for(let f of[-1,1])Fn(a,.003,.005,.57+f*.025,1.165+.076,u+.07,e.metal,"Holder fixing screw")}else if(i==="exea_phone_mount"){Jr(a,.075,.035,.008,-.18,1.275,.44-o,e,"Phone mount foot"),un(a,[[-.18,1.28,.44-o],[-.18,1.34,.37-o]],.008,e.darkmetal,"Phone ball-joint arm"),Xs(a,new Dn(.014,12,8),e.trim,"Adjustable ball joint",-.18,1.34,.37-o),Qe(a,.061,.101,.012,-.18,1.36,.345-o,e.trim,"Phone cradle back",.007);for(let c of[-1,1])Qe(a,.009,.035,.026,-.18+c*.034,1.36,.333-o,e.trim,"Adjustable clamp jaw"),Qe(a,.003,.025,.02,-.18+c*.029,1.36,.333-o,e.rubber,"Soft jaw pad");Qe(a,.05,.009,.03,-.18,1.306,.335-o,e.trim,"Phone support foot")}else if(i==="armoro_console_organizer"){let c=_s(a,Xn("canvas","#535747")),h=_s(a,new Ze({name:"WovenStitch",color:"#989a7e",roughness:1}));c.side=Vt;for(let u of[-1,1]){let d=u*.104,f=.21-o;Qe(a,.009,.13,.23,d,.846,f,c,"Console pocket backing"),Qe(a,.058,.005,.23,d+u*.023,.785,f,c,"Console pocket floor"),Qv(a,d+u*.049,.843,f,u,c);for(let g of[-.112,.112])Qe(a,.05,.12,.006,d+u*.022,.846,f+g,c,"Canvas pocket gusset");un(a,[[d+u*.05,.905,f-.115],[d+u*.05,.9,f],[d+u*.05,.905,f+.115]],.002,h,"Bound pocket opening");for(let g=0;g<9;g++)un(a,[[d+u*.054,.797,f-.09+g*.022],[d+u*.054,.866,f-.09+g*.022]],.0013,e.seat,"Mesh sleeve vertical");for(let g=0;g<5;g++)un(a,[[d+u*.055,.801+g*.014,f-.09],[d+u*.055,.801+g*.014,f+.09]],.0013,e.seat,"Mesh sleeve horizontal")}}else if(i==="exea_utility_bars")for(let c of[-1,1]){let h=c*.566,u=-.78+o;un(a,[[h,1.59,u-.305],[h,1.59,u+.305]],.009,e.darkmetal,"Utility bar rail");for(let d of[-.285,.285])Qe(a,.035,.024,.035,h+c*.022,1.615,u+d,e.trim,"Offset rail foot"),Fn(a,.004,.006,h+c*.022,1.63,u+d,e.metal,"Bar mounting screw")}else if(i==="exea_roof_net"){let c=-.78+o,h=.99,u=.51,d=1.575,f=(g,v)=>d-.04*(1-(g/(h/2))**2)*(1-(v/(u/2))**2);for(let g=0;g<=20;g++){let v=-h/2+g*h/20,m=[];for(let p=0;p<=8;p++){let _=-u/2+p*u/8;m.push([v,f(v,_),c+_])}un(a,m,.0017,e.seat,"Overhead net warp")}for(let g=0;g<=11;g++){let v=-u/2+g*u/11,m=[];for(let p=0;p<=10;p++){let _=-h/2+p*h/10;m.push([_,f(_,v),c+v])}un(a,m,.0017,e.seat,"Overhead net weft")}un(a,[[-h/2,d,c-u/2],[h/2,d,c-u/2],[h/2,d,c+u/2],[-h/2,d,c+u/2],[-h/2,d,c-u/2]],.006,e.seat,"Bound net perimeter");for(let g of[-1,1])for(let v of[-u/2,u/2])un(a,[[g*h/2,d,c+v],[g*.566,1.59,c+v]],.004,e.seat,"Adjustable corner strap"),Qe(a,.022,.01,.018,g*.53,1.583,c+v,e.trim,"Net strap buckle")}else if(i==="exea_switch_extensions")for(let c of[-.095,.095]){let h=.282-o;Qe(a,.029,.032,.019,c,.965,h,e.trim,"Raised window rocker",.004);for(let u of[-.008,0,.008])Qe(a,.02,.0015,.002,c,.965+u,h-.01,e.darkmetal,"Tactile switch ridge")}else if(i==="maruti_at_mats")for(let c of[-1,1]){let h=c*.365,u=.47;Jr(a,.42,.36,.022,h,.696,u,e,"All-weather footwell tray");for(let d=0;d<8;d++)Qe(a,.36,.003,.007,h,.703,u-.14+d*.038,e.rubber,"Drainage channel");Qe(a,.15,.007,.12,h,.707,u-.06,e.rubber,"Heel wear pad",.009);for(let d of[-.15,.15])Fn(a,.01,.004,h+d,.704,u-.15,e.trim,"Mat retaining clip")}else if(i==="armoro_seat_organizer"){let c=_s(a,Xn("canvas","#70705b")),h=_s(a,new Ze({name:"WovenStitch",color:"#ada98e",roughness:1})),u=.365,d=-.225-o,f=Qe(a,.365,.4,.012,u,1.09,d,c,"Canvas seat-back organiser",.01);f.rotation.x=-.12;for(let g of[-.14,.14])Qe(a,.025,.19,.008,u+g,1.35,d+.008,e.seat,"Headrest securing strap"),Qe(a,.035,.025,.012,u+g,1.37,d-.003,e.trim,"Strap buckle");for(let g of[-.122,.122]){Qe(a,.102,.006,.065,u+g,.973,d-.038,c,"Bottle pocket floor"),Qe(a,.102,.16,.006,u+g,1.05,d-.071,c,"Bottle pocket front");for(let v of[-1,1])Qe(a,.006,.16,.065,u+g+v*.048,1.05,d-.038,c,"Bottle pocket gusset");un(a,[[u+g-.05,1.13,d-.006],[u+g-.05,1.13,d-.074],[u+g+.05,1.13,d-.074],[u+g+.05,1.13,d-.006]],.0022,h,"Bound open pocket lip")}Qe(a,.125,.13,.05,u,1.04,d-.05,c,"Central utility pouch"),Qe(a,.12,.025,.006,u,1.108,d-.08,c,"Pouch flap"),Qe(a,.3,.06,.045,u,.935,d-.035,c,"Tissue holder"),Qe(a,.12,.008,.002,u,.944,d-.06,e.trim,"Tissue slot");for(let g of[-.175,.175])un(a,[[u+g,.9,d-.01],[u+g,1.27,d-.01]],.0011,h,"Canvas side seam")}else if(i==="jimsa_door_pockets")for(let c of[-1,1]){let h=c*.641,u=t==="3door"?-.12:.06;Jr(a,.082,.245,.052,h,.951,u,e,"Door grip pocket"),Qe(a,.01,.08,.014,c*.68,.99,u-.095,e.darkmetal,"Door screw attachment"),Fn(a,.004,.004,c*.672,1.02,u-.095,e.metal,"Door attachment screw","x")}else if(i==="jimsa_dash_tray")Jr(a,.355,.145,.02,-.365,1.299,.415-o,e,"Instrument tray");else if(i==="jimsa_console_tray")Jr(a,.135,.12,.023,0,.835,-.15-o,e,"Console insert"),Qe(a,.004,.018,.105,-.025,.847,-.15-o,e.trim,"Console tray divider");else if(i==="jimsa_cargo_pouch_5door"){let c=_s(a,Xn("canvas","#3c4140")),h=_s(a,new Ze({name:"WovenStitch",color:"#797c74",roughness:1}));Qe(a,1.1,.012,.37,0,1.075,-1.43,c,"Soft cargo cover",.006),Qe(a,.79,.065,.235,0,1.112,-1.46,c,"Cargo zipped pouch",.018),un(a,[[-.365,1.147,-1.55],[.365,1.147,-1.55],[.365,1.147,-1.37],[-.365,1.147,-1.37]],.0018,h,"Cargo pocket zip"),Qe(a,.015,.004,.025,.35,1.15,-1.52,e.metal,"Zip slider");for(let u of[-.57,.57])for(let d of[-1.6,-1.26])Qe(a,.045,.004,.03,u,1.075,d,e.seat,"Cargo securing tab"),Zu(a,.009,u,1.075,d,e.metal,"Cargo attachment eye")}else if(i==="jimsa_tiedowns")for(let c of[-1,1]){let h=Zu(a,.014,c*.647,1.16,-1.21,e.metal,"Luggage attachment ring");h.rotation.y=Math.PI/2,Fn(a,.005,.018,c*.666,1.16,-1.21,e.metal,"Attachment threaded stem","x")}else if(i==="fr_wolfpack"){let c=n+.115;$u(a,-.2,c,l,.51,.23,.4,e,{name:"Wolf Pack representative box"});for(let h of[-1,1])for(let u of[l-.18,l+.18])Qe(a,.025,.155,.013,-.2+h*.23,c,u,e.darkmetal,"Moulded box stiffener");for(let h of[l-.09,l+.09])Qe(a,.44,.006,.018,-.2,c+.119,h,e.trim,"Nesting lid rib");Kc(a,-.2,c,l,.51,.23,.4,e)}else if(i==="fr_jerry_holder"){Qe(a,.165,.005,.513,.35,1.865,-.45,e.darkmetal,"Jerry carrier base");for(let d of[-1,1])Qe(a,.005,.055,.513,.35+d*.08,1.865+.027,-.45,e.darkmetal,"Carrier folded side");un(a,[[.35-.085,1.865,-.45+.22],[.35-.085,1.865+.37,-.45+.22],[.35+.085,1.865+.37,-.45+.22],[.35+.085,1.865,-.45+.22]],.007,e.darkmetal,"Jerry carrier hold-down strap"),Qe(a,.028,.028,.018,.35+.093,1.865+.326,-.45+.22,e.metal,"Stainless safety catch");for(let d of[-.45-.2,-.45+.2])for(let f of[-1,1])Fn(a,.005,.008,.35+f*.059,1.865+.007,d,e.metal,"Carrier mounting bolt")}else if(i==="fr_fuelcan20"){let c=new Ye;a.add(c),c.position.set(.37,2.047,-.68),c.rotation.set(Math.PI/2,Math.PI/2,0),Qe(c,.35,.405,.165,0,.2025,-.02,e.darkmetal,"Fuel can steel shell",.018),Qe(c,.354,.004,.169,0,.05,-.02,e.darkmetal,"Fuel can base seam",.002);for(let h of[-1,1])un(c,[[-.125,.09,h*.08-.02],[.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal"),un(c,[[.125,.09,h*.08-.02],[-.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal");for(let h of[-.071,-.02,.031])un(c,[[-.05,.398,h],[-.03,.45,h],[.11,.45,h],[.13,.398,h]],.01,e.darkmetal,"Triple carry handle");Fn(c,.034,.022,-.115,.419,-.02,e.trim,"Fuel bayonet cap"),un(c,[[-.15,.43,-.02],[-.15,.441,.005],[-.12,.441,.005]],.002,e.metal,"Cap locking pin")}else if(i==="fr_watercan20"){let h=n+.2375,u=l+.08,d=_s(a,new Ze({name:"WaterContainerPlastic",color:"#b9c0b3",roughness:.61}));Qe(a,.36,.415,.18,.29,h-.03,u,d,"Water-only HDPE tank",.022);for(let f of[-.14,.14])Qe(a,.012,.27,.012,.29+f,h-.02,u-.095,d,"Water tank reinforcing rib");un(a,[[.29-.07,h+.17,u],[.29-.055,h+.22,u],[.29+.075,h+.22,u],[.29+.09,h+.17,u]],.014,d,"Water can carry handle"),Fn(a,.039,.026,.29-.105,h+.19,u,e.trim,"Water fill cap"),Fn(a,.017,.03,.29,h-.15,u-.105,e.trim,"Water tap body","z"),Qe(a,.048,.01,.014,.29,h-.127,u-.115,e.trim,"Water tap lever"),Fn(a,.009,.025,.29,h-.18,u-.115,e.trim,"Water spout"),Kc(a,.29,h-.03,u,.36,.415,.18,e)}else if(i==="arb_airkit"){let c=s?-.27:.28,h=n+.104,u=l+.04;$u(a,c,h,u,.44,.208,.238,e,{name:"Portable compressor case"}),Kc(a,c,h,u,.44,.208,.238,e)}else if(i==="arb_repairkit"){let c=s?-.18:.37,h=n+.035,u=l-.13;$u(a,c,h,u,.245,.07,.135,e,{colour:"#b48135",name:"Tyre repair tool case"}),Kc(a,c,h,u,.245,.07,.135,e)}else if(i==="kap_fire"){let u=.37-o;Qe(a,.33,.004,.065,.365,.758-.035,u,e.darkmetal,"Passenger seat-rail bracket");for(let d of[-.145,.145])Fn(a,.008,.009,.365+d,.758-.03,u,e.metal,"Seat-rail bracket fixing");Fn(a,.042,.225,.365,.758+.007,u,e.red,"Optional 1 kg extinguisher","x");for(let d of[-.065,.065]){let f=Zu(a,.044,.365+d,.765,u,e.metal,"Metal retaining cage");f.rotation.y=Math.PI/2}Fn(a,.013,.035,.365-.13,.758+.007,u,e.metal,"Extinguisher valve","x"),Qe(a,.045,.01,.024,.365-.125,.758+.035,u,e.trim,"Release handle"),Fn(a,.011,.006,.365-.124,.758+.015,u-.021,e.white,"Pressure indicator","z")}return qs(a)}function vm({parts:i,body:e,mats:t,rig:n,show:s}){let r=i.has("touring")?.96:i.has("exploresetups_drawer_5door")?.955:i.has("drawer")?.922:.7,a=e==="5door"&&i.has("fr_slimline2");for(let[o,l]of Object.entries(ym)){if(!l.bodyStyles.includes(e)||l.requires?.some(h=>!i.has(h))||l.incompatible?.some(h=>i.has(h))||["fr_jerry_holder","fr_fuelcan20"].includes(o)&&(!a||i.has("rtt")||i.has("boards"))||o==="fr_fuelcan20"&&(!i.has("fr_jerry_holder")||i.has("fr_watercan20"))||o==="jimsa_cargo_pouch_5door"&&["touring","shelf","mod_halfmolly_5door","molle","fr_watercan20"].some(h=>i.has(h))||o==="fr_watercan20"&&["touring","drawer","exploresetups_drawer_5door","fr_wolfpack"].some(h=>i.has(h)))continue;let c=o==="arb_repairkit"&&i.has("arb_airkit")?r+.208:r;s([o],()=>{let h=e1(o,t,{body:e,cargoTop:c,cargoLeft:i.has("fr_watercan20")});h&&n.add(h)})}}var Ro=Object.freeze({"5door":1.295,"3door":1.125}),Ii=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Sm([i,e,t],{frontAxleZ:n=Ro["5door"],rigid:s=!1,lateral:r=!0}={}){let a=t-n,o=s?1:Ii(.255,.455,a),l=Ii(-.445,.455,a),c=.055*Ii(.3,.445,e)+.06*Ii(.445,.86,e),h=.115*Ii(1,1.15,e),u=-(o*c+(1-o)*l*h),d=0;if(r&&i){let f=Math.abs(i),g=Ii(.405,.44,f),v=.1*f*(1-g)+.055*g*(1-Ii(.68,.8,f)),m=Ii(.78,.84,e)*(1-Ii(1.12,1.17,e)),p=s?1:Ii(.38,.5,a);d=-Math.sign(i)*v*m*p}return[i+d,e+u,t]}function ed(i,e="5door"){let[t,n]=Sm([i*.55,.977,Ro[e]+.6],{frontAxleZ:Ro[e],rigid:!0});return{x:t,y:n}}var Qu=new Le,Mm=new Le,Di=new L;function wm(i,e,t={}){e.updateWorldMatrix(!0,!1),i.updateWorldMatrix(!0,!0);let n=new Le().copy(e.matrixWorld).invert();i.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||!s.geometry?.attributes.position)return;Qu.multiplyMatrices(n,s.matrixWorld),Mm.copy(Qu).invert();let r=s.geometry.attributes.position,a=new Float32Array(r.count*3),o=!1;for(let l=0;l<r.count;l++){Di.fromBufferAttribute(r,l).applyMatrix4(Qu);let[c,h,u]=Sm([Di.x,Di.y,Di.z],t);Math.abs(c-Di.x)+Math.abs(h-Di.y)>1e-7&&(o=!0),Di.set(c,h,u).applyMatrix4(Mm),a[l*3]=Di.x,a[l*3+1]=Di.y,a[l*3+2]=Di.z}o&&(s.geometry=s.geometry.clone(),s.geometry.attributes.position.array.set(a),s.geometry.attributes.position.needsUpdate=!0,s.geometry.computeBoundingBox(),s.geometry.computeBoundingSphere())})}function Tm({accessoryRig:i,mats:e,detailed:t,modelBody:n,colour:s,effectiveDesign:r,lampEmitters:a,buildGrille:o=()=>{},addDecals:l=()=>{},arch:c=null}){Yc(e,a);let h=(S,b,x,y=0,w=0,M=0)=>{let T=new Ee(S,b);return T.position.set(y,w,M),T.castShadow=!0,T.receiveShadow=!0,x.add(T),T},u=(S,b,x,y,w,M,T,E=e.trim)=>h(Math.min(b,x,y)>.065?new zt(b,x,y,2,Math.min(b,x,y)*.14):new an(b,x,y),E,S,w,M,T),d=(S,b,x,y,w,M,T,E=e.trim,P="y",I=24)=>{let N=h(new Ot(b,x,y,I),E,S,w,M,T);return P==="x"&&(N.rotation.z=Math.PI/2),P==="z"&&(N.rotation.x=Math.PI/2),N},f=(S,b,x=.025,y=e.darkmetal)=>h(new Wn(new pi(b.map(w=>new L(...w)),!1,"centripetal",.1),Math.max(12,b.length*3),x,8,!1),y,S),g=(S,b,x=.01,y=e.trim)=>{let w=b.map(T=>new L(...T)),M=new Qn;for(let T=1;T<w.length;T++)M.add(new $n(w[T-1],w[T]));return h(new Wn(M,b.length*2,x,6,!1),y,S)};function v(S){for(;S.children.length;){let b=S.children[0];b.traverse(x=>{x.geometry?.dispose(),x.isInstancedMesh&&x.dispose(),x.userData.ownedMaterials?.forEach(y=>y.dispose()),x.userData.disposableMaterial&&(x.material.userData.ownsTextures||x.material.map?.dispose(),x.material.dispose())}),S.remove(b)}}c||(c=(S,b,x)=>{let y=b<0?-1:1,T=[[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]]].map(D=>new pi(D.map(([z,V])=>new L(0,V,z)))),E=[],P=[],I=64;for(let[D,z]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let V=0;V<=I;V++){let Z=T[0].getPoint(V/I).lerp(T[1].getPoint(V/I),D);E.push(y*z,Z.y,x+Z.z)}for(let D=0;D<5;D++)for(let z=0;z<I;z++){let V=D*(I+1)+z;P.push(V,V+1,V+I+2,V,V+I+2,V+I+1)}if(y<0)for(let D=0;D<P.length;D+=3)[P[D+1],P[D+2]]=[P[D+2],P[D+1]];let N=new ct;N.setAttribute("position",new Ge(E,3)),N.setIndex(P),N.computeVertexNormals(),h(N,e.trim,S)});function m(S,b=!1){let x=new Ye;S.add(x);let y=.61,w=-1.62;[-.72,.72].forEach(T=>u(x,.035,.055,2.25,T,1.82,-.5,e.darkmetal)),[y,w].forEach(T=>u(x,1.46,.055,.035,0,1.82,T,e.darkmetal));for(let T=-1.56;T<.62;T+=.14)u(x,1.43,.022,.072,0,1.825,T,e.trim);[-.68,.68].forEach(T=>[-1.38,.38].forEach(E=>{u(x,.055,.095,.11,T,1.755,E,e.darkmetal),u(x,.1,.02,.15,T,1.715,E,e.rubber),d(x,.012,.012,.06,T,1.77,E,e.metal,"x",8)}));let M=u(x,1.38,.13,.018,0,1.77,.64,e.trim);if(M.rotation.x=-.5,b){[-.72,.72].forEach(T=>g(x,[[T,1.83,y],[T,1.96,y-.12],[T,1.96,w+.06],[T,1.83,w]],.018));for(let T of[-1.55,.49])u(x,1.44,.025,.025,0,1.955,T,e.darkmetal)}else for(let T of[-.72,.72])for(let E of[-1.5,-.8,-.1,.5])u(x,.018,.014,.045,T,1.86,E,e.metal)}function p(S,b){v(i);let x=[];if(t&&S.has("headunit")){let P;{let N=document.createElement("canvas");N.width=384,N.height=224;let D=N.getContext("2d");D.fillStyle="#162a31",D.fillRect(0,0,384,224),D.fillStyle="#dce8d5",D.font="18px sans-serif",D.fillText("12:30",18,28),D.fillText("HOME",292,28);for(let[V,Z]of["Music","Phone","Maps"].entries())D.fillStyle=["#305d68","#42694b","#615f47"][V],D.fillRect(16+V*122,55,108,128),D.fillStyle="#eef3df",D.font="20px sans-serif",D.fillText(Z,26+V*122,145),D.beginPath(),D.arc(70+V*122,96,16,0,Math.PI*2),D.strokeStyle="#dbe6d9",D.lineWidth=3,D.stroke();let z=new _n(N);z.colorSpace=bt,P=new It({map:z})}let I=h(new on(.232,.137),P,i,0,1.224,.312);I.rotation.y=Math.PI,I.userData.disposableMaterial=!0,n==="3door"&&(I.position.z-=.17)}let y=Ro[n==="3door"?"3door":"5door"],w=(E,P)=>{let I=E.filter(N=>S.has(N));if(I.length){let N=new Set(i.children);P();for(let D of i.children)N.has(D)||(D.userData.finishTarget=I[0],wm(D,i,{frontAxleZ:y,lateral:I[0]==="headlamps"}));x.push(...I)}};o(i,b.grille||"oem"),l(i,b.decal||"none"),b.finish==="raptor"&&[-1,1].forEach(E=>u(i,.018,.16,n==="3door"?1.43:1.77,E*(t?.751:.777),.65,-.08,e.textured));let M=["rack","msga_roofbasket","prad_roofrack","fr_slimline2","fr_slimline2_tall",...n==="3door"?[]:["suzuki_nomade_flatrack"]].some(E=>S.has(E));if(!M&&["rtt","awning","boards"].some(E=>S.has(E)))for(let E of[-1.2,.25]){u(i,1.5,.045,.07,0,1.79,E,e.darkmetal);for(let P of[-1,1])u(i,.06,.1,.1,P*.7,1.73,E,e.trim),u(i,.09,.018,.13,P*.7,1.69,E,e.rubber)}if(n!=="3door"&&S.has("suzuki_nomade_flatrack")?w(["suzuki_nomade_flatrack"],()=>i.add(cm(e))):S.has("fr_slimline2")||S.has("fr_slimline2_tall")?w(["fr_slimline2","fr_slimline2_tall"],()=>i.add(em(e,S.has("fr_slimline2_tall")))):w(["rack","msga_roofbasket","prad_roofrack"],()=>m(i,S.has("msga_roofbasket"))),S.has("skinnyjim_backbone")||S.has("skinnyjim_jerry_tray")){let E=om(e);E.userData.finishTarget="skinnyjim_backbone",n==="3door"&&(E.position.z+=.17),i.add(E),x.push("skinnyjim_backbone"),w(["skinnyjim_jerry_tray"],()=>{let P=lm(e);n==="3door"&&(P.position.z+=.17),i.add(P)})}w(["snorkel","bimbra_snorkel"],()=>{let E=i.children.length;f(i,[[-.79,1.04,1.24],[-.84,1.08,.82],[-.84,1.25,.66],[-.79,1.67,.59]],.041,e.trim);let P=u(i,.13,.095,.16,-.79,1.705,.62,e.trim);P.rotation.x=.15;for(let I=-.832;I<-.74;I+=.025)u(i,.008,.058,.008,I,1.71,.706,e.darkmetal);if(u(i,.018,.045,.07,-.78,1.5,.61,e.darkmetal),n==="3door")for(let I of i.children.slice(E))I.position.z-=.17}),w(["bull","autostylenn_bumper_v1"],()=>{u(i,1.38,.23,.025,0,.73,1.79,e.trim);let E=S.has("bull"),P=E?[[-.85,.76],[-.72,.72],[.72,.72],[.85,.76],[.82,.57],[.47,.48],[-.47,.48],[-.82,.57]]:[[-.85,.72],[-.76,.76],[-.63,.7],[.63,.7],[.76,.76],[.85,.72],[.8,.57],[.56,.5],[-.56,.5],[-.8,.57]],I=new kt(P.map(([N,D])=>new oe(N,D)));if(E){let N=new tn;N.absellipse(0,.594,.185,.031,0,Math.PI*2,!1),I.holes.push(N)}for(let N of[-1,1]){let D=new tn;D.absellipse(N*.61,.637,E?.049:.044,.044,0,Math.PI*2,!1),I.holes.push(D)}h(new Tn(I,{depth:.19,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:2}),e.darkmetal,i,0,0,1.86);for(let N of[-.61,.61])d(i,.038,.038,.008,N,.637,1.98,e.reflector,"z"),d(i,.034,.034,.009,N,.637,1.989,e.lens,"z");if(E){f(i,[[-.79,.72,1.99],[-.79,.96,1.99],[-.72,1.075,1.99],[-.6,1.083,1.99],[.6,1.083,1.99],[.72,1.075,1.99],[.79,.96,1.99],[.79,.72,1.99]],.026);for(let N of[-.43,.43]){f(i,[[N,.69,2.07],[N,.79,2.04],[N,1.083,1.99]],.018),u(i,.035,.17,.12,N,.66,2.04,e.darkmetal);let D=h(new jt(.041,.01,8,24,Math.PI*1.65),e.accent,i,N,.52,2.08);D.rotation.z=.55,d(i,.013,.013,.09,N,.55,2.08,e.accent,"x")}for(let N of[-.74,.74]){u(i,.12,.043,.018,N,.65,2.058,e.trim);for(let D=-2;D<=2;D++)d(i,.01,.01,.01,N+D*.021,.65,2.071,e.reflector,"z",12)}}else{let N=new kt([[-.37,.72],[-.33,.91],[.33,.91],[.37,.72]].map(([D,z])=>new oe(D,z)));for(let D of[-.24,-.08,.08,.24]){let z=new tn;z.absellipse(D,.81,.046,.021,0,Math.PI*2,!1),N.holes.push(z)}h(new Tn(N,{depth:.008,bevelEnabled:!1}),e.darkmetal,i,0,0,1.86),u(i,1.26,.026,.2,0,.701,1.96,e.darkmetal)}for(let N of[-.77,-.42,0,.42,.77])d(i,.005,.005,.01,N,.574,2.061,e.metal,"z",8)}),w(["winch"],()=>{u(i,.45,.12,.19,0,.72,2.13,e.trim),d(i,.055,.055,.27,0,.74,2.21,e.metal,"x"),u(i,.07,.09,.03,0,.69,2.25,e.accent)}),w(["sliders"],()=>[-1,1].forEach(E=>{f(i,[[E*.91,.45,-.95],[E*.97,.45,-.85],[E*.97,.45,.85],[E*.91,.45,.95]],.035),u(i,.18,.035,1.8,E*.86,.46,0,e.darkmetal)})),w(["flares"],()=>[-1,1].forEach(E=>[-1.295,1.295].forEach(P=>c(i,E===1?.82:-.97,P,!0)))),w(["ladder"],()=>{let E=i.children.length;[-.65,-.35].forEach(P=>{f(i,[[P,.6,-1.99],[P,1.66,-1.99],[P,1.75,-1.8],[P,1.73,-1.66]],.02),u(i,.065,.02,.1,P,1.72,-1.68,e.rubber),u(i,.065,.04,.16,P,.64,-1.91,e.trim)});for(let P=.68;P<1.7;P+=.19)u(i,.32,.025,.035,-.5,P,-1.99,e.darkmetal);for(let P of i.children.slice(E))P.position.z+=.078}),w(["led","lamp_bar20"],()=>{let E=M?1.91:1.77,P=S.has("lamp_bar20")?.51:1.02;u(i,P,.065,.085,0,E,.68,e.trim);for(let I=-P/2+.035;I<=P/2-.03;I+=.06)d(i,.023,.023,.008,I,E,.726,e.reflector,"z",16),d(i,.009,.009,.01,I,E,.734,a.bar,"z",12);for(let I of[-P*.46,P*.46])u(i,.014,.065,.06,I,E-.05,.68,e.darkmetal);for(let I=.65;I<.7;I+=.012)u(i,P-.03,.075,.004,0,E,I,e.darkmetal)}),w(["pods","lamp_cube"],()=>[-1,1].forEach(E=>_(E*.78,1.22,.92,S.has("pods")?.062:.043,"combo",S.has("pods")))),w(["lamp_round_spot","lamp_round_flood"],()=>[-1,1].forEach(E=>_(E*.28,.87,2.08,.089,S.has("lamp_round_flood")?"flood":"spot",!0))),w(["lamp_fog","lamp_dual"],()=>[-1,1].forEach(E=>_(E*.62,.62,2.01,.043,S.has("lamp_dual")?"dual":"fog"))),w(["lamp_compact_bar"],()=>{u(i,.23,.073,.105,0,.76,2.07,e.trim);for(let E of[-.081,-.027,.027,.081])d(i,.023,.023,.012,E,.76,2.13,e.reflector,"z"),d(i,.009,.009,.015,E,.76,2.14,a.driving,"z");u(i,.06,.05,.055,0,.7,2.07,e.darkmetal)}),w(["lamp_work"],()=>[-1,1].forEach(E=>{_(E*.58,1.79,-1.77,.026,"work",!1,!0),u(i,.055,.065,.065,E*.58,1.725,-1.75,e.darkmetal)})),w(["rtt"],()=>{let E=M?1.95:1.91;u(i,1.34,.18,2.1,0,E,-.42,e.canvas),u(i,1.39,.055,2.13,0,E+.105,-.42,e.trim),u(i,1.35,.028,2.1,0,E-.1,-.42,e.darkmetal);for(let P of[-1,1])for(let I of[-1.1,.3])u(i,.018,.1,.045,P*.68,E,I,e.trim)}),w(["awning"],()=>{let E=M?1.92:1.78;d(i,.061,.061,2.25,.82,E,-.5,e.canvas,"z");for(let P of[-1.35,.35])u(i,.11,.03,.055,.78,E-.05,P,e.darkmetal)}),w(["boards"],()=>{let E=S.has("rtt")?M?2.1:2.06:M?1.88:1.83;[-.32,.32].forEach(P=>{u(i,.24,.035,1,P,E,-.4,e.accent);for(let I of[-.75,-.05])u(i,.11,.035,.04,P,E-.03,I,e.trim),d(i,.012,.012,.04,P,E+.025,I,e.metal,"y",8);for(let I=-.8;I<0;I+=.1)for(let N of[-.075,0,.075])d(i,.012,.014,.022,P+N,E+.027,I,e.accent,"y",6)})}),w(["mudflaps"],()=>[-1,1].forEach(E=>[-1.295,1.295].forEach(P=>{let I=new kt;I.moveTo(-.145,.51),I.lineTo(.145,.51),I.lineTo(.126,.19),I.quadraticCurveTo(.12,.175,.105,.175),I.lineTo(-.105,.175),I.quadraticCurveTo(-.12,.175,-.126,.19),I.closePath();let N=new Tn(I,{depth:.007,bevelEnabled:!1,curveSegments:4}),D=N.attributes.position;for(let V=0;V<D.count;V++)D.setZ(V,D.getZ(V)-Math.max(0,.51-D.getY(V))*.11);N.computeVertexNormals();let z=h(N,e.rubber,i,E*.75,0,P-.405);z.name="Mudflap rubber",u(i,.25,.025,.012,E*.75,.5,P-.402,e.darkmetal);for(let V of[-.095,.095])d(i,.007,.007,.012,E*.75+V,.499,P-.392,e.metal,"z",8)}))),w(["sparecover"],()=>i.add(nm(e,t?.sBadgeGeometry))),w(["bonnetguard"],()=>{let E=[];for(let N=0;N<=24;N++){let D=-.69+N*1.38/24;E.push(new L(D,1.17-.03*(Math.abs(D)/.69)**4,1.78-.035*(Math.abs(D)/.69)**4))}let P=new pi(E),I=new kt;I.moveTo(-.008,-.027),I.lineTo(.008,-.027),I.quadraticCurveTo(.016,.025,.01,.048),I.lineTo(-.003,.048),I.quadraticCurveTo(.003,.015,-.008,-.027),h(new Tn(I,{steps:48,bevelEnabled:!1,extrudePath:P}),e.trim,i,0,0,0)}),w(["spoiler"],()=>{let E=i.children.length,P=u(i,1.4,.045,.22,0,1.744,-1.76,e.trim);P.rotation.x=.08;for(let I of[-.6,.6])u(i,.12,.065,.14,I,1.7,-1.72,e.trim);for(let I of i.children.slice(E))I.position.z+=.078}),w(["visors"],()=>i.add(tm(e.smoked))),w(["hingecovers"],()=>[-1,1].forEach(E=>[.63,-.32].forEach(P=>[.72,1.04].forEach(I=>u(i,.035,.065,.1,E*(t?.78:.807),I,P,e.metal))))),w(["cladding"],()=>[-1,1].forEach(E=>u(i,.035,.15,1.77,E*(t?.759:.787),.65,-.08,e.textured))),w(["skid"],()=>u(i,1.22,.045,1.22,0,.38,.85,e.metal)),w(["headlamps"],()=>(t?[-.55,.55]:[-.6,.6]).forEach(E=>{let P=i.children.length,I=t?.977:.95,N=1.889;d(i,.117,.117,.05,E,I,N-.035,e.trim,"z",64),h(new jt(.11,.005,12,64),e.chrome,i,E,I,N),h(new jt(.099,.005,12,64),e.white,i,E,I,N+.008);for(let z of[-.045,.036]){d(i,z>0?.043:.03,z>0?.043:.03,.014,E,I+z,N+.005,e.reflector,"z",40);let V=h(new Dn(z>0?.035:.023,32,20),e.lens,i,E,I+z,N+.016);V.scale.z=.38}for(let z of[-1,1])for(let V of[-.025,0,.025])u(i,.022,.012,.008,E+z*.069,I+V,N+.012,e.reflector);let D=new Ye;D.position.set(E,I,0),i.add(D);for(let z of i.children.slice(P,-1))z.position.x-=E,z.position.y-=I,D.add(z);D.scale.set(.9,.9,1)})),w(["dashcam"],()=>{u(i,.1,.055,.055,-.25,1.55,.62,e.trim),d(i,.017,.017,.012,-.25,1.55,.654,e.lens,"z"),u(i,.03,.04,.018,-.25,1.594,.62,e.trim)}),w(["headunit"],()=>{u(i,.26,.165,.028,0,1.225,.334,e.trim),u(i,.232,.137,.004,0,1.225,.318,e.glass);for(let E of[-.1,.1])d(i,.008,.008,.007,E,1.152,.315,e.chrome,"z")}),w(["doortrim"],()=>i.add(pm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()})));let T=n!=="3door"&&S.has("touring");T&&w(["touring"],()=>i.add(gm(e,{camp:b.touringMode==="camp"&&!b.drivingPreview,drawers:!!b.touringDrawers&&!b.drivingPreview}))),T||w(["mod_reardoor_molle"],()=>i.add(qc(e,n))),n!=="3door"&&(T||w(["mod_halfmolly_5door"],()=>i.add(Xc(e))),T||w(["exploresetups_drawer_5door"],()=>i.add(jc(e)))),!T&&!S.has("mod_halfmolly_5door")&&w(["molle"],()=>[-1,1].forEach(E=>{u(i,.012,.3,.42,E*.71,1.4,-1.37,e.trim);for(let P=-1.52;P<-1.2;P+=.08)for(let I=1.3;I<1.53;I+=.08)u(i,.015,.025,.045,E*.722,I,P,e.metal)})),!T&&!S.has("exploresetups_drawer_5door")&&w(["drawer"],()=>{let E=t?.8:.98;u(i,1.2,.22,.58,0,E,-1.34,e.darkmetal);for(let P of[-.3,.3])u(i,.565,.17,.018,P,E,-1.638,e.trim),u(i,.12,.032,.025,P,E+.035,-1.655,e.metal);u(i,1.19,.012,.57,0,E+.116,-1.34,e.seat)}),T||w(["shelf"],()=>{u(i,1.3,.025,.58,0,1.18,-1.3,e.trim);for(let E of[-.6,.6])u(i,.025,.08,.56,E,1.21,-1.3,e.trim)}),w(["armrest"],()=>{u(i,.2,.14,.35,0,.98,-.2,e.seat),t&&u(i,.13,.12,.22,0,.88,-.2,e.trim)}),w(["mats"],()=>[-.36,.36].forEach(E=>{let P=t?.685:.71;u(i,.36,.018,.48,E,P,.42,e.trim);for(let I=.22;I<.64;I+=.04)u(i,.31,.006,.012,E,P+.011,I,e.darkmetal)})),w(["seats"],()=>{T||i.add(mm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()}))}),w(["steering"],()=>{h(new jt(.123,.016,12,64),e.upholstery,i,-.38,1.16,.26);for(let E of[-1,1])u(i,.065,.025,.032,-.38+E*.075,1.16,.25,e.upholstery)}),w(["ambient"],()=>{u(i,1.22,.004,.008,0,1.13,.355,e.ambient);for(let E of[-.37,.37])u(i,.28,.004,.008,E,.82,.41,e.ambient)}),vm({parts:S,body:n,mats:e,rig:i,show:w}),x.push(...["tires","lift","autostylenn_big_suzuki_grille","autostylenn_cursive_grille","autostylenn_s_grille"].filter(E=>S.has(E)));for(let E of i.children)!E.userData.finishTarget&&!E.userData.grilleBadge&&(E.userData.finishTarget="hardware");return x}function _(S,b,x,y,w,M=!1,T=!1){let E=new Ye;E.position.set(S,b,x),T&&(E.rotation.y=Math.PI),i.add(E),M?d(E,y,y*.96,.072,0,0,0,e.trim,"z",48):u(E,y*2,y*2,.075,0,0,0,e.trim);for(let P=-.03;P<.025;P+=.012)u(E,y*1.7,y*1.8,.004,0,0,P,e.darkmetal);for(let P of[-1,1])u(E,.009,y*.85,.04,P*(y+.007),-y*.6,-.005,e.darkmetal),d(E,.007,.007,.012,P*(y+.013),0,0,e.chrome,"x",8);u(E,y*2+.025,.008,.045,0,-y*1.04,0,e.darkmetal);for(let P of[-1,1])for(let I of[-1,1]){d(E,y*.36,y*.28,.012,P*y*.4,I*y*.4,.042,e.reflector,"z",24);let N=h(new Dn(y*.24,16,10),a[w],E,P*y*.4,I*y*.4,.052);N.scale.z=.23}if(M){let P=h(new jt(y*.91,.004,8,48),e.darkmetal,E,0,0,.047);d(E,y*.87,y*.87,.003,0,0,.059,e.lens,"z",48)}else u(E,y*1.78,y*1.78,.003,0,0,.06,e.lens)}return p}var t1={CabinDashboard:{color:"#34393c",roughness:.83,scale:38,strength:24e-5,type:"grain"},WovenCabinFabric:{color:"#353b40",roughness:.96,scale:17,strength:45e-5,type:"weave"},CabinSeatInsert:{color:"#535c62",roughness:.98,scale:20,strength:5e-4,type:"weave"},CabinCarpet:{color:"#252a2e",roughness:1,scale:24,strength:7e-4,type:"grain"},BrightChrome:{color:"#b1b8bd",roughness:.31,metalness:.78,scale:45,strength:6e-5,type:"grain"},WindowGlass:{color:"#10171b",roughness:.23,metalness:.12,scale:45,strength:0,type:"grain",opaque:!0}};function n1(i,e){let n=new Uint8Array(65536),s=617;for(let a=0;a<128;a++)for(let o=0;o<128;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=i==="weave"?(((o>>2)+(a>>2))%2?21:-21)+Math.sin(o*Math.PI/2)*12+Math.cos(a*Math.PI/2)*7:0,c=Math.max(0,Math.min(255,128+l+(s/4294967296-.5)*42)),h=(a*128+o)*4;n[h]=n[h+1]=n[h+2]=c,n[h+3]=255}let r=new wn(n,128,128,nn);return r.wrapS=r.wrapT=en,r.repeat.set(e,e),r.magFilter=Dt,r.minFilter=Ln,r.generateMipmaps=!0,r.needsUpdate=!0,r}function Em(i){let e=new Map,t=new Map;return i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=t1[n.material.name];if(!s)return;let r=t.get(n.material);if(!r){r=n.material.clone(),r.color.set(s.color),r.roughness=s.roughness,r.metalness=s.metalness||0,s.opaque&&(r.transparent=!1,r.opacity=1,r.depthWrite=!0);let a=s.type+s.scale,o=e.get(a);o||(o=n1(s.type,s.scale),e.set(a,o)),r.bumpMap=o,r.bumpScale=s.strength,s.type==="weave"&&(r.map=o),r.envMapIntensity=.45,r.needsUpdate=!0,t.set(n.material,r),r.addEventListener("dispose",()=>o.dispose())}n.material=r,n.userData.disposableMaterial=!0}),{dispose(){for(let n of e.values())n.dispose();for(let n of t.values())n.dispose()},count:t.size}}var Am=new WeakMap,i1=new Set(["GrilleAnthracite","MouldedPlastic","GlossBlackGrille","WheelGunmetal","BrightChrome","GrilleLettering"]),s1=i=>typeof i=="string"&&(i==="body"||/^#[0-9a-f]{6}$/i.test(i))?i:"original";function js(i,e){let t=new ct;for(let[n,s]of Object.entries(i.attributes)){let r=[];for(let a of e)for(let o=0;o<s.itemSize;o++)r.push(s.getComponent(a,o));t.setAttribute(n,new Ge(r,s.itemSize))}return t}function r1(i,e){if(i.name!=="OEMGrille"||i.userData.badgeSeparated)return;i.userData.badgeSeparated=!0,i.updateWorldMatrix(!0,!0);let t=[];i.traverse(n=>{n.isMesh&&n.material.name==="BrightChrome"&&t.push(n)});for(let n of t){let s=n.geometry,r=s.attributes.position,a=s.index,o=[],l=[],c=new L,h=new Le().copy(i.matrixWorld).invert().multiply(n.matrixWorld),u=e==="3door"?-.17:0;for(let f=0;f<(a?.count||r.count);f+=3){let g=[0,1,2].map(m=>a?a.getX(f+m):f+m);(g.every(m=>(c.fromBufferAttribute(r,m).applyMatrix4(h),Math.abs(c.x)<.09&&c.z>1.898+u))?l:o).push(...g)}if(!l.length)continue;let d=new Ee(js(s,l),n.material);d.name="FactoryGrilleEmblem",d.userData.grilleBadge=!0,d.position.copy(n.position),d.quaternion.copy(n.quaternion),d.scale.copy(n.scale),d.castShadow=n.castShadow,d.receiveShadow=n.receiveShadow,n.parent.add(d),n.geometry=js(s,o),s.dispose()}}function td(i,e={},t="#d9b744",n="5door"){i&&(r1(i,n),i.traverse(s=>{if(!s.isMesh||!i1.has(s.material?.name)&&!s.userData.grilleBadge)return;let r=Am.get(s);if(!r){let l=s.material;s.material=l.clone(),s.userData.disposableMaterial=!0,r={original:l.clone(),badge:!!s.userData.grilleBadge||l.name==="GrilleLettering"},Am.set(s,r),s.material.addEventListener("dispose",()=>r.original.dispose())}let a=s.material;a.copy(r.original);let o=s1(e[r.badge?"badgeColour":"grilleColour"]);a.userData.explicitSurfaceColour=Object.hasOwn(e,r.badge?"badgeColour":"grilleColour"),o!=="original"?(a.color.set(o==="body"?t:o),a.vertexColors=!1,a.metalness=.12,a.roughness=.34):e.finish==="blackout"&&["BrightChrome","GrilleLettering"].includes(r.original.name)&&(a.color.set("#151b1e"),a.vertexColors=!1,a.metalness=.05,a.roughness=.78),a.needsUpdate=!0}))}var nd=new WeakMap;function a1(i,e="5door"){if(!i||nd.has(i))return nd.get(i);i.updateWorldMatrix(!0,!0);let t=i.parent?.matrixWorld.clone().invert()||new Le,n=new Ye;n.name="ConfigurableSeating",n.applyMatrix4(i.matrix.clone().invert()),i.add(n);let s={groups:{},materials:[],fabricKey:"",body:e},r=[];i.traverse(h=>{h.isMesh&&!h.userData.cabinUpgrade&&["WovenCabinFabric","CabinSeatInsert","BrightChrome"].includes(h.material?.name)&&r.push(h)});let a=e==="3door"?-.17:0,o=new L;for(let h of r){let u=h.geometry,d=u.attributes.position,f=u.index,g=t.clone().multiply(h.matrixWorld),v={keep:[],rear:[],passengerBack:[],passengerHead:[],front:[]};for(let m=0;m<(f?.count||d.count);m+=3){let p=[0,1,2].map(y=>f?f.getX(m+y):m+y),_=0,S=0,b=0;for(let y of p)o.fromBufferAttribute(d,y).applyMatrix4(g),_+=o.x/3,S+=o.y/3,b+=o.z/3;let x="keep";h.material.name==="BrightChrome"?_>.22&&_<.53&&S>1.2&&S<1.3&&Math.abs(b-(-.18+a))<.035&&(x="passengerHead"):S>.73&&S<1.46&&b<(e==="3door"?-.44:-.55)?x="rear":Math.abs(_)<.64&&Math.abs(_)>.1&&S>.74&&S<1.44&&b>-.32+a&&b<.42+a&&(x=_>0&&S>1.263?"passengerHead":_>0&&S>.88&&b<-.012+a?"passengerBack":"front"),v[x].push(...p)}h.geometry=js(u,v.keep);for(let m of["rear","passengerBack","passengerHead","front"])if(v[m].length){let p=s.groups[m];p||(p=new Ye,p.name="Seating_"+m,n.add(p),s.groups[m]=p);let _=js(u,v[m]);if(_.applyMatrix4(g),g.determinant()<0){let b=[];for(let x=0;x<_.attributes.position.count;x+=3)b.push(x,x+2,x+1);_.setIndex(b)}let S=new Ee(_,h.material.clone());S.name=h.material.name==="CabinSeatInsert"?"SeatWovenCentre":h.material.name==="BrightChrome"?"PassengerHeadrestPost":"SeatOuterBolster",S.userData.cabinUpgrade=!0,S.userData.seatInsert=h.material.name==="CabinSeatInsert",S.userData.disposableMaterial=!0,S.userData.originalMaterial=h.material,S.castShadow=S.receiveShadow=!0,p.add(S),h.material.name!=="BrightChrome"&&s.materials.push(S)}u.dispose()}let l=s.groups.passengerBack;if(l){let h=new L(.37,.84,-.11+a);l.position.copy(h),l.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}let c=s.groups.rear;if(c){let h=new L(0,.82,e==="3door"?-.88:-1.055);c.position.copy(h),c.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}return nd.set(i,s),s}function Rm(i,{body:e="5door",seats:t=!1,fabric:n="canvas",colour:s="#a38b69",touring:r=!1,camp:a=!1}={}){let o=a1(i,e);if(!o)return;let l=[t,Ws(n),s].join(":");if(o.fabricKey!==l){for(let c of o.materials){let h=c.material;c.material=t?Xn(c.userData.seatInsert?n:n==="leather"?"leather":"canvas",c.userData.seatInsert||["canvas","leather"].includes(n)?s:"#303536"):c.userData.originalMaterial.clone(),c.material.name=c.userData.seatInsert?"CabinSeatInsert":"SeatCoverBolster",c.material.vertexColors=!!c.geometry.attributes.color,h.dispose()}o.fabricKey=l}return o.groups.rear&&(o.groups.rear.visible=!r),o.groups.passengerBack&&(o.groups.passengerBack.rotation.x=r&&a?-Math.PI/2:0),o.groups.passengerHead&&(o.groups.passengerHead.visible=!(r&&a)),i.userData.interiorLayout={touring:!!r,camp:!!(r&&a),fabric:Ws(n),seats:!!t},o}var Jc=Object.freeze({P:.35,R:.31,N:.27,D:.23,2:.19,L:.15}),Zc=Object.freeze({"2H":.13,"4H":.085,"4L":.025});function id(i,e){return(-40+Math.min(1,Math.max(0,i/e))*260)*Math.PI/180}function o1(i){return{wheel:-(i.steer||0)*14,gearZ:Jc[i.gear]??Jc.N,rangeZ:Zc[i.range]??Zc["2H"],parking:i.parking?-.52:0,hdc:i.hdcActive?"ACTIVE":i.hdc?"READY":"OFF",tachometer:id(i.rpm||0,7e3),speedometer:id(Math.abs(i.speed||0)*3.6,180)}}function Cm(i,e,t){let n=t==="3door"?-.17:0,s=new Ye;return s.name="AnimatedSteeringWheel",s.position.set(-.38,1.16,.26+n),e.add(s),i.updateWorldMatrix(!0,!0),i.traverse(r=>{if(!r.isMesh)return;let a=r.geometry,o=a.index?a.toNonIndexed():a.clone(),l=new ct;for(let[f,g]of Object.entries(o.attributes)){let v=[];for(let m=0;m<g.count;m++)for(let p=0;p<g.itemSize;p++)v.push(g.getComponent(m,p));l.setAttribute(f,new Ge(v,g.itemSize))}o.dispose(),l.applyMatrix4(r.matrixWorld);let c=l.attributes.position,h=[],u=[];for(let f=0;f<c.count;f+=3){let g=(c.getX(f)+c.getX(f+1)+c.getX(f+2))/3,v=(c.getY(f)+c.getY(f+1)+c.getY(f+2))/3,m=(c.getZ(f)+c.getZ(f+1)+c.getZ(f+2))/3-n,p=Math.hypot(g+.38,v-1.16)<.182&&m>.218&&m<.282,_=v>.865&&v<1.055&&(Math.abs(g)<.032&&Math.abs(m-.26)<.045||Math.abs(g+.07)<.032&&Math.abs(m-.15)<.045),S=r.material.name==="RearLampRed"&&v>1.18&&v<1.27&&m>.29&&m<.32;(p?u:_||S?[]:h).push(f,f+1,f+2)}function d(f){let g=new ct;for(let[v,m]of Object.entries(l.attributes)){let p=[];for(let _ of f)for(let S=0;S<m.itemSize;S++)p.push(m.getComponent(_,S));g.setAttribute(v,new Ge(p,m.itemSize))}return g}if(u.length){if(r.matrixWorld.determinant()<0)for(let v=0;v<u.length;v+=3)[u[v+1],u[v+2]]=[u[v+2],u[v+1]];let f=d(u);f.translate(.38,-1.16,-.26-n);let g=new Ee(f,r.material);g.castShadow=!0,s.add(g)}r.geometry=d(h).applyMatrix4(r.matrixWorld.clone().invert()),a.dispose(),l.dispose()}),s.rotation.x=.27,s}function Pm(i,e,t){let n=new Ye;n.name="LiveCabinControls",n.position.z=t==="3door"?-.17:0,i.add(n);let s=new Ze({color:"#222a2b",roughness:.62}),r=new Ze({color:"#7b8383",roughness:.28,metalness:.7});function a(x,y,w,M,T,E,P=s){let I=new Ee(new zt(x,y,w,2,.008),P);return I.position.set(M,T,E),I.castShadow=!0,n.add(I),I}function o(x,y,w,M){let T=new Ye;T.position.set(x,y,w),n.add(T);let E=new Ee(new Ot(.006,.008,M,20),r);E.position.y=M/2,T.add(E);let P=new Ee(new zt(.051,.043,.051,5,.015),s);return P.position.y=M,P.rotation.x=.12,T.add(P),T}let l=new Ze({color:"#0a1012",roughness:.94});a(.14,.012,.29,.015,.863,.25),a(.018,.002,.235,.028,.871,.25,l),a(.07,.012,.18,-.095,.865,.085),a(.012,.002,.14,-.095,.873,.085,l);let c=o(.028,.874,Jc.N,.105),h=o(-.095,.874,Zc["2H"],.073),u=[-.3,-.46].map(x=>{let y=new Ye;y.position.set(x,1.223,.304),n.add(y);let w=new Ee(new an(.044,.0025,.0015),new It({color:"#e87856"}));return w.position.x=.021,y.add(w),y}),d=new Ye;d.position.set(.105,.8,-.075),n.add(d);let f=new Ee(new zt(.027,.032,.16,2,.008),s);f.position.z=.065,d.add(f);let g=[];function v(x,y,w,M,T,E,P=!1){let I=document.createElement("canvas");I.width=512,I.height=256;let N=I.getContext("2d");N.fillStyle="#20292a",N.fillRect(0,0,512,256),N.fillStyle="#f1eee0",N.textAlign="center",N.textBaseline="middle",N.font=`600 ${x.length>1?160:210}px sans-serif`,N.fillText(x,256,128,480);let D=new _n(I);D.colorSpace=bt,D.anisotropy=4,g.push(D);let z=new Ee(new on(y,w),new It({map:D}));return z.position.set(M,T,E),z.rotation.set(P?-Math.PI/2:0,P?0:Math.PI,P?Math.PI:0),n.add(z),{canvas:I,ctx:N,texture:D}}for(let[x,y]of Object.entries(Jc))v(x,.014,.012,-.017,.873,y,!0);for(let[x,y]of Object.entries(Zc))v(x,.024,.012,-.127,.875,y,!0);function m(x,y,w,M,T,E){let P=document.createElement("canvas");P.width=1024,P.height=576;let I=P.getContext("2d");E(I,1024,576);let N=new _n(P);N.colorSpace=bt,N.anisotropy=8,g.push(N);let D=new It({map:N,toneMapped:!1}),z=new Ee(new on(x,y),D);z.position.set(w,M,T),z.rotation.y=Math.PI,n.add(z)}m(.198,.1115,0,1.232,.34,(x,y,w)=>{x.fillStyle="#0c1115",x.fillRect(0,0,y,w),x.fillStyle="#d7dcd9",x.font="24px sans-serif",x.fillText("FM  \u2022  09:41",34,43),x.textAlign="right",x.fillText("CONNECTED",y-34,43),x.textAlign="left",[["Audio","FM  91.1","#a86e36"],["Phone","Connect device","#447268"],["Navigation","Explore a new route","#405d75"],["Settings","Vehicle & display","#6c6252"]].forEach(([T,E,P],I)=>{let N=26+I%2*498,D=78+Math.floor(I/2)*235;x.strokeStyle=P,x.lineWidth=3,x.strokeRect(N,D,474,211),x.fillStyle=P,x.fillRect(N,D,8,211),x.fillStyle="#d9ddd9",x.font="34px sans-serif",x.fillText(T,N+28,D+64),x.fillStyle="#a5b0b1",x.font="25px sans-serif",x.fillText(E,N+28,D+117),x.beginPath(),x.arc(N+420,D+163,16,0,Math.PI*2),x.stroke()})});for(let[x,y]of[[-.083,"AUTO"],[0,"22.0"],[.083,"A/C"]])m(.031,.024,x,1.039,.275,(w,M,T)=>{w.fillStyle="#101315",w.fillRect(0,0,M,T),w.fillStyle="#bd7551",w.textAlign="center",w.textBaseline="middle",w.font=`500 ${y==="22.0"?235:180}px sans-serif`,w.fillText(y,M/2,T/2,M*.85)});for(let[x,y]of[[-.095,"12V"],[-.047,"USB"],[0,"\u2198"],[.047,"ESP"],[.095,"OFF"]])m(.021,.013,x,.965,.299,(w,M,T)=>{w.fillStyle="#171c1e",w.fillRect(0,0,M,T),w.fillStyle="#aeb6b3",w.font="190px sans-serif",w.textAlign="center",w.textBaseline="middle",w.fillText(y,M/2,T/2,M*.88)});let p=v("",.044,.047,-.38,1.216,.299),_=new Ee(new Dn(.0035,8,6),new It({color:"#dc6041"}));_.position.set(-.48,1.255,.305),n.add(_);let S=[[-.4,.073],[-.26,.045]].map(([x,y])=>{let w=new Ye;w.name=x<-.3?"BrakePedal":"AcceleratorPedal",w.position.set(x,.8,.64),n.add(w);let M=new Ee(new zt(y,.09,.018,2,.004),s);M.position.set(0,-.052,-.018),w.add(M);for(let T=0;T<4;T++){let E=new Ee(new an(y*.82,.003,.003),r);E.position.set(0,-.08+T*.018,-.029),w.add(E)}return w});for(let[x,y,w]of[[-.3,7,"x1000"],[-.46,180,"km/h"]]){let M=document.createElement("canvas");M.width=M.height=512;let T=M.getContext("2d");T.fillStyle="#151a1c",T.beginPath(),T.arc(256,256,256,0,Math.PI*2),T.fill();let E=y===7?7:9,P=(D,z)=>{let V=id(D,1);return[256-Math.cos(V)*z,256-Math.sin(V)*z]};for(let D=0;D<=E*5;D++){let z=D%5===0,V=D/(E*5),Z=P(V,z?207:219),ue=P(V,235);T.strokeStyle=y===7&&V>5.8/7?"#b85c39":"#c8c4b8",T.lineWidth=z?4:2,T.beginPath(),T.moveTo(...Z),T.lineTo(...ue),T.stroke(),z&&(T.fillStyle="#cda37c",T.font="500 31px sans-serif",T.textAlign="center",T.textBaseline="middle",T.fillText(String(Math.round(V*y)),...P(V,170)))}T.fillStyle="#a7aca7",T.font="20px sans-serif",T.textAlign="center",T.fillText(w,256,356);let I=new _n(M);I.colorSpace=bt,I.anisotropy=4,g.push(I);let N=new Ee(new Ua(.053,64),new It({map:I}));N.position.set(x,1.223,.306),N.rotation.y=Math.PI,n.add(N)}let b="";return{setVisible(x){n.visible=!!x},update(x){let y=o1(x);e.rotation.z=y.wheel,c.position.z=y.gearZ,h.position.z=y.rangeZ,d.rotation.x=y.parking,_.visible=!!x.parking,u[0].rotation.z=y.tachometer,u[1].rotation.z=y.speedometer,S[0].rotation.x=-(x.braking||x.brakeInput||0)*.24,S[1].rotation.x=-(x.throttle||0)*.22;let w=`${x.gear} ${x.range}`,M=`${((x.distance||0)/1e3).toFixed(1)} km`;if(w+M!==b){b=w+M;let{ctx:T,texture:E}=p;T.fillStyle="#a6b4a2",T.fillRect(0,0,512,256),T.fillStyle="#27312b",T.font="600 78px monospace",T.fillText(w,256,87,480),T.font="52px monospace",T.fillText(M,256,180,480),E.needsUpdate=!0}return y},dispose(){n.removeFromParent();let x=new Set,y=new Set;n.traverse(w=>{w.geometry&&x.add(w.geometry),w.material&&y.add(w.material)}),x.forEach(w=>w.dispose()),y.forEach(w=>w.dispose()),g.forEach(w=>w.dispose())},snapshot(){return{steeringWheel:e.rotation.z,gearZ:c.position.z,rangeZ:h.position.z,parking:d.rotation.x,brakePedal:S[0].rotation.x,acceleratorPedal:S[1].rotation.x}}}}var sd=Object.freeze([{id:"oem",name:"Factory finish",colour:null},{id:"graphite",name:"Satin graphite",colour:"#454b50"},{id:"bronze",name:"Satin bronze",colour:"#987345"},{id:"silver",name:"Machined silver",colour:"#b5b9bc"},{id:"black",name:"Black",colour:"#171b1d"}].map(i=>Object.freeze({...i,description:"Representative cosmetic wheel finish, not a specific product or fitment claim."}))),rd=new WeakMap,Im=new Set(["StockWheels","AllTerrainWheels","SpareWheel"]);function l1(i,e){for(let t=i;t;t=t.parent){if(Im.has(t.name))return t;if(/Cabin|Grille|BodyShell|Bumper/.test(t.name))return null;if(t===e)break}return!i.name&&!i.parent?.name?i.parent:null}function c1(i,e){let t=i.geometry,n=i.material,s=t.attributes.position;if(!s)return null;i.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!0,!1);let r=new Le().copy(e.matrixWorld).invert().multiply(i.matrixWorld),a=[],o=new L,l=1/0,c=-1/0,h=1/0,u=-1/0,d=1/0,f=-1/0;for(let re=0;re<s.count;re++)o.fromBufferAttribute(s,re).applyMatrix4(r),a.push(o.clone()),l=Math.min(l,o.x),c=Math.max(c,o.x),h=Math.min(h,o.y),u=Math.max(u,o.y),d=Math.min(d,o.z),f=Math.max(f,o.z);let g=Im.has(e.name),v=e.name==="SpareWheel",m=1/0,p=-1/0,_=1/0,S=-1/0,b=1/0,x=-1/0;if(g){let re=e.matrixWorld.clone().invert();e.traverse(le=>{let Ne=le.geometry?.attributes.position;if(!Ne)return;le.updateWorldMatrix(!0,!1);let Re=re.clone().multiply(le.matrixWorld);for(let rt=0;rt<Ne.count;rt++)o.fromBufferAttribute(Ne,rt).applyMatrix4(Re),m=Math.min(m,o.y),p=Math.max(p,o.y),_=Math.min(_,o.z),S=Math.max(S,o.z),b=Math.min(b,o.x),x=Math.max(x,o.x)})}let y=g&&!v,w=g?(m+p)/2:0,M=g?(_+S)/2:0,T=g?(b+x)/2:0,E=y?(S-_-p+m)/2:0,P=new Uint8Array(s.count),I=new Float32Array(s.count*3),N=t.attributes.color,D=Math.sign(e.parent?.position.x||1);for(let re=0;re<a.length;re++){let le=a[re],Ne=y?M+(le.z>=M?E:-E):M,Re=Math.hypot(le.y-w,le.z-Ne),We=(y?Math.sign(le.x):D)>0?c-le.x:le.x-l;P[re]=+(Re>.165||Re>.082&&We<.055);for(let tt=0;tt<3;tt++)I[re*3+tt]=n.color[["r","g","b"][tt]]*(n.vertexColors&&N?N.getComponent(re,tt):1)}if(!P.some(Boolean))return null;let z=t.clone(),V=n.clone();z.setAttribute("color",new Ge(I,3));let Z=z.attributes.color.array;V.color.set("#ffffff"),V.vertexColors=!0,V.userData.wheelFinishOriginal={name:n.name,color:n.color.getHexString(),vertexColors:n.vertexColors};let ue={originalGeometry:t,originalMaterial:n,geometry:z,material:V,mask:P,base:I,colours:Z,restoring:!1,released:!1},$=()=>{ue.restoring||ue.released||(ue.released=!0,t.dispose(),n.dispose())};return z.addEventListener("dispose",$),V.addEventListener("dispose",$),i.geometry=z,i.material=V,rd.set(i,ue),ue}function h1(i,e){e.restoring=!0,i.geometry=e.originalGeometry,i.material=e.originalMaterial,e.geometry.dispose(),e.material.dispose(),rd.delete(i)}function Dm(i,e){let t=0;return i?.traverse&&(i.updateWorldMatrix?.(!0,!0),i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=rd.get(n);if(e.id==="oem"){s&&(h1(n,s),t++);return}if(!s){if(!["MachinedAlloy","WheelGunmetal"].includes(n.material?.name))return;let a=l1(n,i);if(!a||(s=c1(n,a),!s))return}let r=new He(e.colour);for(let a=0;a<s.mask.length;a++)for(let o=0;o<3;o++)s.colours[a*3+o]=s.mask[a]?r[["r","g","b"][o]]:s.base[a*3+o];s.geometry.attributes.color.needsUpdate=!0,s.material.userData.wheelFinish=e.id,t++})),t}function Lm(i,e="oem"){return Dm(i,sd.find(t=>t.id===e)||sd[0])}function Nm(i,e){return Dm(i,/^#[0-9a-f]{6}$/i.test(e||"")?{id:"custom",colour:e}:sd[0])}function Fm(i,e,t="5door"){if(!i||!e?.attributes.position.count||i.userData.steeringBadgeFitted)return null;i.userData.steeringBadgeFitted=!0,i.updateWorldMatrix(!0,!0);let n=t==="3door"?-.17:0,s=[];i.traverse(h=>{h.isMesh&&h.material.name==="BrightChrome"&&s.push(h)});for(let h of s){let u=h.geometry,d=u.attributes.position,f=u.index,g=[],v=new L,m=new Le().copy(i.parent?.matrixWorld||new Le).invert().multiply(h.matrixWorld);for(let p=0;p<(f?.count||d.count);p+=3){let _=[0,1,2].map(b=>f?f.getX(p+b):p+b);_.every(b=>(v.fromBufferAttribute(d,b).applyMatrix4(m),Math.abs(v.x+.38)<.04&&Math.abs(v.y-1.16)<.04&&v.z>.218+n&&v.z<.232+n))||g.push(..._)}g.length<(f?.count||d.count)&&(h.geometry=js(u,g),u.dispose())}let r=e.clone();r.computeBoundingBox();let a=r.boundingBox.getCenter(new L),o=r.boundingBox.max.x-r.boundingBox.min.x;r.translate(-a.x,-a.y,-a.z),r.scale(.044/o,.044/o,.044/o),r.rotateY(Math.PI),r.translate(-.38,1.16,.222+n);let l=new Ze({name:"SteeringEmblem",color:"#c7cbcc",metalness:.65,roughness:.27}),c=new Ee(r,l);return c.name="SteeringSuzukiEmblem",c.userData.disposableMaterial=!0,c.castShadow=!1,c.applyMatrix4(i.matrix.clone().invert()),i.add(c),c}var Um=new Set(["interior","passenger","doors","driver-door","passenger-door","seats","seatbacks","storage","console","footwell","headliner"]),Om=new Set(["cabin","cutaway","cargo","doors-cutaway","headliner-cutaway","touring"]);function km(i,e="5door"){let t=e==="3door"?-.17:0,n={interior:{eye:[-.38,1.48,-.08],yaw:0,pitch:-.45},passenger:{eye:[.38,1.48,-.08],yaw:0,pitch:-.38},doors:{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"driver-door":{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"passenger-door":{eye:[-.24,1.4,.2],yaw:Math.PI/2,pitch:-.3},seats:{eye:[.04,1.43,.14],yaw:Math.PI,pitch:-.48},seatbacks:{eye:[.02,1.43,-.64],yaw:0,pitch:-.6},storage:{eye:[.01,1.41,-.38],yaw:Math.PI,pitch:-.43},console:{eye:[.02,1.37,-.15],yaw:0,pitch:-.94},footwell:{eye:[-.39,1.13,.16],yaw:0,pitch:-.93},headliner:{eye:[.02,1.25,-.4],yaw:Math.PI,pitch:.72}},s=n[i]||n.interior;return{...s,eye:[s.eye[0],s.eye[1],s.eye[2]+t]}}var Zr=class extends ct{constructor(e=new Ee,t=new L,n=new Sn,s=new L(1,1,1)){super();let r=[],a=[],o=[],l=new L,c=new lt().getNormalMatrix(e.matrixWorld),h=new Le;h.makeRotationFromEuler(n),h.setPosition(t);let u=new Le;u.copy(h).invert(),d(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2)),a.length>0&&this.setAttribute("normal",new Ge(a,3));function d(){let m=[],p=new L,_=new L,S=e.geometry,b=S.attributes.position,x=S.attributes.normal;if(S.index!==null){let y=S.index;for(let w=0;w<y.count;w++)p.fromBufferAttribute(b,y.getX(w)),x?(_.fromBufferAttribute(x,y.getX(w)),f(m,p,_)):f(m,p)}else{if(b===void 0)return;for(let y=0;y<b.count;y++)p.fromBufferAttribute(b,y),x?(_.fromBufferAttribute(x,y),f(m,p,_)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let y=0;y<m.length;y++){let w=m[y];o.push(.5+w.position.x/s.x,.5+w.position.y/s.y),w.position.applyMatrix4(h),r.push(w.position.x,w.position.y,w.position.z),w.normal!==null&&a.push(w.normal.x,w.normal.y,w.normal.z)}}function f(m,p,_=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(u),_?(_.applyNormalMatrix(c),m.push(new Co(p.clone(),_.clone()))):m.push(new Co(p.clone()))}function g(m,p){let _=[],S=.5*Math.abs(s.dot(p));for(let b=0;b<m.length;b+=3){let x=0,y,w,M,T,E=m[b+0].position.dot(p)-S,P=m[b+1].position.dot(p)-S,I=m[b+2].position.dot(p)-S,N=E>0,D=P>0,z=I>0;switch(x=(N?1:0)+(D?1:0)+(z?1:0),x){case 0:{_.push(m[b]),_.push(m[b+1]),_.push(m[b+2]);break}case 1:{if(N&&(y=m[b+1],w=m[b+2],M=v(m[b],y,p,S),T=v(m[b],w,p,S)),D){y=m[b],w=m[b+2],M=v(m[b+1],y,p,S),T=v(m[b+1],w,p,S),_.push(M),_.push(w.clone()),_.push(y.clone()),_.push(w.clone()),_.push(M.clone()),_.push(T);break}z&&(y=m[b],w=m[b+1],M=v(m[b+2],y,p,S),T=v(m[b+2],w,p,S)),_.push(y.clone()),_.push(w.clone()),_.push(M),_.push(T),_.push(M.clone()),_.push(w.clone());break}case 2:{N||(y=m[b].clone(),w=v(y,m[b+1],p,S),M=v(y,m[b+2],p,S),_.push(y),_.push(w),_.push(M)),D||(y=m[b+1].clone(),w=v(y,m[b+2],p,S),M=v(y,m[b],p,S),_.push(y),_.push(w),_.push(M)),z||(y=m[b+2].clone(),w=v(y,m[b],p,S),M=v(y,m[b+1],p,S),_.push(y),_.push(w),_.push(M));break}case 3:break}}return _}function v(m,p,_,S){let b=m.position.dot(_)-S,x=p.position.dot(_)-S,y=b/(b-x),w=new L(m.position.x+y*(p.position.x-m.position.x),m.position.y+y*(p.position.y-m.position.y),m.position.z+y*(p.position.z-m.position.z)),M=null;return m.normal!==null&&p.normal!==null&&(M=new L(m.normal.x+y*(p.normal.x-m.normal.x),m.normal.y+y*(p.normal.y-m.normal.y),m.normal.z+y*(p.normal.z-m.normal.z))),new Co(w,M)}}},Co=class{constructor(e,t=null){this.position=e,this.normal=t}clone(){let e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}};function Bm(i){let e=new Map,t=new Map,n=i.clone();return zm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)zm(i.children[n],e.children[n],t)}var $c=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Qc(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Qc(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Td(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=$i.extractUrlBase(e);a=$i.resolveURL(c,this.path)}else a=$i.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qm){try{a[gt.KHR_BINARY_GLTF]=new Ed(e)}catch(u){s&&s(u);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ld(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case gt.KHR_MATERIALS_UNLIT:a[u]=new hd;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ad(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[u]=new Rd;break;case gt.KHR_MESH_QUANTIZATION:a[u]=new Cd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function u1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cd=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new He(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zi(h),c.distance=u;break;case"spot":c=new us(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},hd=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let s=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},dd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},pd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],sn),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},_d=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],sn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bt)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Sd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},wd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Qc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Td=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let v=new Le,m=new L,p=new gn,_=new L(1,1,1),S=new Xi(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,v.compose(m,p,_));let b=null;for(let x in l)if(x==="_COLOR_0"){let y=l[x];S.instanceColor=new qi(y.array,y.itemSize,y.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(b===null){let w=S.geometry;b=new ct,b.name=w.name;for(let M in w.attributes)b.setAttribute(M,w.attributes[M]);for(let M in w.morphAttributes)b.morphAttributes[M]=w.morphAttributes[M];w.index!==null&&b.setIndex(w.index),b.morphTargetsRelative=w.morphTargetsRelative;for(let M of w.groups)b.addGroup(M.start,M.count,M.materialIndex);w.boundingBox!==null&&(b.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(b.boundingSphere=w.boundingSphere.clone()),b.drawRange.start=w.drawRange.start,b.drawRange.count=w.drawRange.count,b.userData=Object.assign({},w.userData),S.geometry=b}let y=l[x];b.setAttribute(x,new qi(y.array,y.itemSize,y.normalized))}St.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},qm="glTF",Po=12,Gm={JSON:1313821514,BIN:5130562},Ed=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Po,r=new DataView(e,Po),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Gm.JSON){let c=new Uint8Array(e,Po+a,o);this.content=n.decode(c)}else if(l===Gm.BIN){let c=Po+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ad=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Id[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Id[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=$r[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,sn,d)})})}},Rd=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Cd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},eh=class extends Ei{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,_=1-m,S=p-d+u;for(let b=0;b!==o;b++){let x=a[v+b+o],y=a[v+b+l]*h,w=a[g+b+o],M=a[g+b]*h;r[b]=_*x+S*y+m*w+p*M}return r}},d1=new gn,Pd=class extends eh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return d1.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hm={9728:Ft,9729:Dt,9984:Zl,9985:zr,9986:Bs,9987:Ln},Vm={33071:In,33648:xr,10497:en},ad={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f1={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},od={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function p1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function Ys(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Li(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function m1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function g1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b1(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ld(t.attributes):e=i.indices+":"+ld(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ld(i.targets[n]);return e}function ld(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Dd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _1=new Le,Ld=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new u1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ja(this.options.manager):this.textureLoader=new Qa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ys(r,o,s),Li(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load($i.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ad[s.type],o=$r[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Qt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=ad[s.type],c=$r[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(_);S||(v=new c(o,p*f,s.count*f/h),S=new Is(v,f/h),t.cache.add(_,S)),m=new ls(S,l,d%f/h,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new Qt(v,l,g);if(s.sparse!==void 0){let p=ad.SCALAR,_=$r[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,x=new _(a[1],S,s.sparse.count*p),y=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,M=x.length;w<M;w++){let T=x[w];if(m.setX(T,y[w*l]),l>=2&&m.setY(T,y[w*l+1]),l>=3&&m.setZ(T,y[w*l+2]),l>=4&&m.setW(T,y[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hm[d.magFilter]||Dt,h.minFilter=Hm[d.minFilter]||Ln,h.wrapS=Vm[d.wrapS]||en,h.wrapT=Vm[d.wrapT]||en,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Dt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let m=new rn(v);m.needsUpdate=!0,d(m)}),t.load($i.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Li(u,a),u.userData.mimeType=a.mimeType||x1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Cr,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Rr,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ze}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let u=s[gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let h=r.alphaMode||od.OPAQUE;if(h===od.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===od.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==It&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==It&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==It){let u=r.emissiveFactor;o.emissive=new He().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==It&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Li(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ys(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=b1(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Wm(new ct,c,t),c.mode===ai.TRIANGLE_STRIP?d=d.then(f=>Vu(f,Mo)):c.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>Vu(f,Hr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?p1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,_=c[f];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");S&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&b?new Ca(v,_):new Ee(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ai.LINES)p=new Ia(v,_);else if(m.mode===ai.LINE_STRIP)p=new Ds(v,_);else if(m.mode===ai.LINE_LOOP)p=new Da(v,_);else if(m.mode===ai.POINTS)p=new La(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&g1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Li(p,r),m.extensions&&Ys(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ys(s,u[0],r),u[0];let d=new Ye;r.extensions&&Ys(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Kt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Li(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Le;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pa(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let S=0,b=d.length;S<b;S++){let x=d[S],y=f[S],w=g[S],M=v[S],T=m[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let E=n._createAnimationTracks(x,y,w,M,T);if(E)for(let P=0;P<E.length;P++)p.push(E[P])}let _=new Ka(r,void 0,p);return Li(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Er:c.length>1?h=new Ye:c.length===1?h=c[0]:h=new St,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Li(h,r),r.extensions&&Ys(n,h,r),r.matrix!==void 0){let u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ye;n.name&&(r.name=s.createUniqueName(n.name)),Li(r,n),n.extensions&&Ys(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Bm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ys[r.path]===ys.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ys[r.path]){case ys.weights:h=Yi;break;case ys.rotation:h=Ki;break;case ys.translation:case ys.scale:h=cs;break;default:n.itemSize===1?h=Yi:h=cs;break}let u=s.interpolation!==void 0?f1[s.interpolation]:Cs,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let v=new h(l[f]+"."+ys[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ki?Pd:eh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function y1(i,e,t){let n=e.attributes,s=new Xt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=Dd($r[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=Dd($r[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new On;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Wm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Id[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ft.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Li(i,e),y1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?m1(i,e.targets,t):i})}var Xm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),S=0;S<p.length;++S){var b=p.charCodeAt(S);_[S]=b>96?b-97:b>64?b-39:b+4}for(var x=0,S=0;S<p.length;++S)_[x++]=_[S]<60?n[_[S]]:(_[S]-60)*64+_[++S];return _.buffer.slice(0,x)}function l(p,_,S,b,x,y,w){var M=p.exports.sbrk,T=b+3&-4,E=M(T*x),P=M(y.length),I=new Uint8Array(p.exports.memory.buffer);I.set(y,P);var N=_(E,b,x,P,y.length);if(N==0&&w&&w(E,T,x),S.set(I.subarray(E,E+b*x)),M(E-M(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(S){var b=S.data;_.pending-=b.count,_.requests[b.id][b.action](b.value),delete _.requests[b.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),S=new Blob([_],{type:"text/javascript"}),b=URL.createObjectURL(S),x=u.length;x<p;++x)u[x]=f(b);for(var x=p;x<u.length;++x)u[x].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function v(p,_,S,b,x){for(var y=u[0],w=1;w<u.length;++w)u[w].pending<y.pending&&(y=u[w]);return new Promise(function(M,T){var E=new Uint8Array(S),P=++d;y.pending+=p,y.requests[P]={resolve:M,reject:T},y.object.postMessage({id:P,count:p,size:_,source:E,mode:b,filter:x},[E.buffer])})}function m(p){var _=p.data;self.ready.then(function(S){if(!_.id)return self.close();try{var b=new Uint8Array(_.count*_.size);l(S,S.exports[_.mode],b,_.count,_.size,_.source,S.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,S,b,x){l(r,r.exports.meshopt_decodeVertexBuffer,p,_,S,b,r.exports[c[x]])},decodeIndexBuffer:function(p,_,S,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,_,S,b)},decodeIndexSequence:function(p,_,S,b){l(r,r.exports.meshopt_decodeIndexSequence,p,_,S,b)},decodeGltfBuffer:function(p,_,S,b,x,y){l(r,r.exports[h[x]],p,_,S,b,r.exports[c[y]])},decodeGltfBufferAsync:function(p,_,S,b,x){return u.length>0?v(p,_,S,h[b],c[x]):a.then(function(){var y=new Uint8Array(p*_);return l(r,r.exports[h[b]],y,p,_,S,r.exports[c[x]]),y})}}})();function jm(i,e,t,n){let s=new Ye;if(s.name="PlayerNameDecals",!i)return s;let r=document.createElement("canvas");r.width=1024,r.height=192;let a=r.getContext("2d");a.textAlign="center",a.textBaseline="middle",a.font="700 100px sans-serif",a.lineJoin="round",a.strokeStyle="#182622",a.lineWidth=9,a.strokeText(i,512,96,960),a.fillStyle="#fffdf2",a.fillText(i,512,96,960);let o=new _n(r);o.colorSpace=bt;let l=new Ze({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,roughness:.65});n.updateMatrixWorld(!0),l.userData.disposableMaterial=!0;for(let c of[-1,1])for(let h of t){let u=n.localToWorld(new L(c*.748,.99,e==="3door"?-.07:.13)),d=new Sn(0,c*Math.PI/2,0),f=new Zr(h,u,d,new L(.69,.13,.13));if(f.applyMatrix4(n.matrixWorld.clone().invert()),f.attributes.position.count){let g=new Ee(f,l);g.renderOrder=5,s.add(g)}else f.dispose()}return s}function Ym(i){return Array.from(String(i||"").normalize("NFC").replace(/[^\p{L}\p{M}\p{N} ._'’-]/gu,"").trim()).slice(0,20).join("")}function v1(i,e=[]){for(let t=i.object;t;t=t.parent)if(!t.visible)return!1;return!e.some(t=>t.distanceToPoint(i.point)<0)}function M1(i){let e=i.object,t=Array.isArray(e.material)?e.material[i.face?.materialIndex||0]:e.material;if(!t||t.opacity<.2)return null;let n=Ku(e);if(!n)return null;let{fabric:s,protectedSurface:r}=Ju(t),a=/TyreRubber|Tread|Sidewall/i.test(t.name)||t.userData.surfaceKind==="rubber"&&n==="wheels",o=n==="grille"&&t.name==="IntakeShadow";return{target:n,material:t.name,colour:o||!s&&!r,finish:o||!s&&!r,fabric:s,tyre:a,point:i.point.toArray()}}function S1(i=7){let e=null,t=new Set;return{down(n){if(t.add(n.pointerId),t.size>1){e=null;return}e=n.button===0?{id:n.pointerId,x:n.clientX,y:n.clientY,time:n.timeStamp,moved:!1}:null},move(n){e?.id===n.pointerId&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(e.moved=!0)},cancel(n){t.delete(n.pointerId),e=null},up(n){t.delete(n.pointerId);let s=e?.id===n.pointerId&&!e.moved&&n.timeStamp-e.time<700&&Math.hypot(n.clientX-e.x,n.clientY-e.y)<=i;return e=null,!!s}}}function Km({canvas:i,camera:e,root:t,planes:n=()=>[],enabled:s=()=>!0,onPick:r}){let a=S1(),o=new to,l=new oe;i.addEventListener("pointerdown",c=>a.down(c)),i.addEventListener("pointermove",c=>a.move(c)),i.addEventListener("pointercancel",c=>a.cancel(c)),i.addEventListener("pointerup",c=>{if(!a.up(c)||!s())return;let h=i.getBoundingClientRect();l.set((c.clientX-h.left)/h.width*2-1,-(c.clientY-h.top)/h.height*2+1),t.updateMatrixWorld(!0),e.updateMatrixWorld(!0),o.setFromCamera(l,e);for(let u of o.intersectObject(t,!0)){if(!v1(u,n()))continue;let d=M1(u);if(!((Array.isArray(u.object.material)?u.object.material[u.face?.materialIndex||0]:u.object.material)?.opacity<.2)){d&&r(d);break}}})}var w1=Object.freeze(["highway","allterrain","mudterrain"]);function Jm(i={},e=new Set){return w1.includes(i.tyreType)?i.tyreType:e.has("tires")?"allterrain":"highway"}function T1(i=.368,e=.235){let t=e/2,n=i-.016,s=[[.193,-t*.72],[.235,-t*.93],[i*.83,-t],[n*.97,-t*.96],[n,-t*.77],[n,t*.77],[n*.97,t*.96],[i*.83,t],[.235,t*.93],[.193,t*.72]],r=new mi(s.map(([c,h])=>new oe(c,h)),96);r.rotateZ(-Math.PI/2);let a=[r.toNonIndexed()];r.dispose();for(let c=0;c<32;c++)for(let h of[-1,1]){let u=(c+(h>0?.5:0))*Math.PI*2/32;for(let[d,f,g,v]of[[h*e*.32,e*.36,.047,h*.38],[h*e*.105,e*.3,.058,-h*.48]]){let m=new zt(f,.019,g,1,.003);m.rotateY(v),m.translate(d,i-.0095,0),m.rotateX(u),a.push(m.index?m.toNonIndexed():m),m.index&&m.dispose()}}let o=Vc(a);a.forEach(c=>c.dispose());let l=o.attributes.position;for(let c=0;c<l.count;c++){let h=l.getY(c),u=l.getZ(c),d=Math.hypot(h,u);d>i&&(l.setY(c,h*i/d),l.setZ(c,u*i/d))}return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o.userData.tyreType="mudterrain",o}var Io=new WeakMap,E1=new Set(["StockWheels","AllTerrainWheels"]);function A1(i,e){for(let t=i.parent;t;t=t.parent){if(E1.has(t.name))return t;if(t===e)break}return i.parent}function R1(i){let e=Io.get(i);e&&(e.originals.forEach(t=>t.visible=e.visibility.get(t)),i.remove(e.group),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),Io.delete(i))}function C1(i){let e=[];i?.traverse(t=>{Io.has(t)&&e.push(t)}),e.forEach(R1)}function Zm(i,e="highway"){if(!i?.traverse)return 0;if(e!=="mudterrain")return C1(i),0;let t=new Map;i.updateWorldMatrix(!0,!0),i.traverse(s=>{if(s.isMesh&&s.material?.name==="TyreRubber"){let r=A1(s,i);if(Io.has(r))return;t.has(r)||t.set(r,[]),t.get(r).push(s)}});let n=0;for(let[s,r]of t){let a=[],o=new L,l=new Xt;for(let v of r){let m=new Le().copy(s.matrixWorld).invert().multiply(v.matrixWorld),p=v.geometry.attributes.position;for(let _=0;_<p.count;_++)o.fromBufferAttribute(p,_).applyMatrix4(m),a.push(o.clone()),l.expandByPoint(o)}let c=l.getSize(new L),h=c.z>c.y*2,u=l.getCenter(new L),d=new Map;for(let v of a){let m=h?`${v.x>u.x?1:-1},${v.z>u.z?1:-1}`:"single";d.has(m)||d.set(m,new Xt),d.get(m).expandByPoint(v)}let f=new Ye;f.name="MudTerrainTyres";for(let v of d.values()){let m=v.getSize(new L),p=v.getCenter(new L),_=r[0].material.clone();_.name="MudTerrainRubber",_.vertexColors=!1,_.roughness=.97,_.metalness=0;let S=new Ee(T1(m.y/2,m.x),_);S.position.copy(p),S.castShadow=!0,S.receiveShadow=!0,f.add(S),n++}let g=new Map(r.map(v=>[v,v.visible]));r.forEach(v=>v.visible=!1),s.add(f),Io.set(s,{group:f,originals:r,visibility:g})}return n}var $m={type:"change"},Fd={type:"start"},e0={type:"end"},th=new wi,Qm=new Pn,P1=Math.cos(70*Kt.DEG2RAD),dn=new L,Bn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nd=1e-6,nh=class extends no{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new gn,this._lastTargetPosition=new L,this._quat=new gn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Or,this._sphericalDelta=new Or,this._scale=1,this._panOffset=new L,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new L,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D1.bind(this),this._onPointerDown=I1.bind(this),this._onPointerUp=L1.bind(this),this._onContextMenu=z1.bind(this),this._onMouseWheel=U1.bind(this),this._onKeyDown=O1.bind(this),this._onTouchStart=k1.bind(this),this._onTouchMove=B1.bind(this),this._onMouseDown=N1.bind(this),this._onMouseMove=F1.bind(this),this._interceptControlDown=G1.bind(this),this._interceptControlUp=H1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($m),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=dn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(th.origin.copy(this.object.position),th.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(th.direction))<P1?this.object.lookAt(this.target):(Qm.setFromNormalAndCoplanarPoint(this.object.up,this.target),th.intersectPlane(Qm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nd||this._lastTargetPosition.distanceToSquared(this.target)>Nd?(this.dispatchEvent($m),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;dn.copy(s).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function I1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function D1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function L1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e0),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function N1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=At.DOLLY;break;case ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}break;case ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Fd)}function F1(i){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function U1(i){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(i.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(e0))}function O1(i){this.enabled!==!1&&this._handleKeyDown(i)}function k1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=At.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=At.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Fd)}function B1(i){switch(this._trackPointer(i),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=At.NONE}}function z1(i){this.enabled!==!1&&i.preventDefault()}function G1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ih=class extends Si{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new an;e.deleteAttribute("uv");let t=new Ze({side:ln}),n=new Ze,s=new Zi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ee(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xi(e,n,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ee(e,Qr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ee(e,Qr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ee(e,Qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ee(e,Qr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ee(e,Qr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ee(e,Qr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qr(i){return new ja({color:0,emissive:16777215,emissiveIntensity:i})}var sh=class extends Ee{constructor(e,t,n,s=128){if(t<=0||n<=0||s<=0)throw new Error("THREE.GroundedSkybox: height, radius, and resolution must be positive.");let r=new Dn(n,2*s,s);r.scale(1,1,-1);let a=r.getAttribute("position"),o=new L;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){let c=-t*3/2,h=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(h),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(r,new It({map:e,depthWrite:!1}))}};var t0=new Float64Array(1024);for(let i=0;i<1024;i++)t0[i]=Math.pow(i*.003717127+.0521327014,2.4);var rh=class extends ei{constructor(e){super(e),this.type=Bt}setDataType(e){return this.type=e,this}parse(e,t){let n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},s=new TextDecoder,r=new Uint8Array(e),a=[],o=0;for(;o<r.length-1;){if(r[o]!==255){o++;continue}let h=r[o+1];if(h===216){a.push({sectionType:h,section:r.subarray(o,o+2),sectionOffset:o+2}),o+=2;continue}if(h===224||h===225||h===226){let u=r[o+2]<<8|r[o+3],d=o+2+u;a.push({sectionType:h,section:r.subarray(o,d),sectionOffset:o+2}),o=d;continue}if(h>=192&&h<=254&&h!==217&&(h<208||h>215)){let u=r[o+2]<<8|r[o+3];o+=2+u;continue}o+=2}let l,c;for(let h=0;h<a.length;h++){let{sectionType:u,section:d,sectionOffset:f}=a[h];if(u!==224){if(u===225)this._parseXMPMetadata(s.decode(new Uint8Array(d)),n);else if(u===226){let g=new DataView(d.buffer,d.byteOffset+2,d.byteLength-2),v="urn:iso:std:iso:ts:21496:-1\0";if(d.byteLength>=v.length+2){let p=!0;for(let _=0;_<v.length;_++)if(d[2+_]!==v.charCodeAt(_)){p=!1;break}if(p){let _=d.subarray(2+v.length);this._parseISOMetadata(_,n);continue}}if(g.getUint32(2,!1)===1297106432){let p=g.getUint32(6)===1229531648,_=60,S=g.getUint32(_,p),b=g.getUint32(_+4,p),x=g.getUint32(_+16,p),y=g.getUint32(_+20,p)+f+6;l=new Uint8Array(e,b,S),c=new Uint8Array(e,y,x)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(n,l,c,(h,u,d)=>{t({width:u,height:d,data:h,format:nn,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}_parseISOMetadata(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=4,r=n.getUint8(s);s+=1;let a=(r&4)!==0,o=(r&8)!==0,l,c,h,u,d,f,g;if(o){let v=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(m/v);let p=n.getUint32(s,!1);s+=4,g=Math.log2(p/v);let _=n.getInt32(s,!1);s+=4,l=_/v;let S=n.getInt32(s,!1);s+=4,c=S/v;let b=n.getUint32(s,!1);s+=4,h=b/v;let x=n.getInt32(s,!1);s+=4,u=x/v*255,d=n.getInt32(s,!1)/v*255}else{let v=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(v/m);let p=n.getUint32(s,!1);s+=4;let _=n.getUint32(s,!1);s+=4,g=Math.log2(p/_);let S=n.getInt32(s,!1);s+=4;let b=n.getUint32(s,!1);s+=4,l=S/b;let x=n.getInt32(s,!1);s+=4;let y=n.getUint32(s,!1);s+=4,c=x/y;let w=n.getUint32(s,!1);s+=4;let M=n.getUint32(s,!1);s+=4,h=w/M;let T=n.getInt32(s,!1);s+=4;let E=n.getUint32(s,!1);s+=4,u=T/E*255;let P=n.getInt32(s,!1);s+=4;let I=n.getUint32(s,!1);d=P/I*255}t.version="1.0",t.baseRenditionIsHDR=a,t.gainMapMin=l,t.gainMapMax=c,t.gamma=h,t.offsetSDR=u,t.offsetHDR=d,t.hdrCapacityMin=f,t.hdrCapacityMax=g}load(e,t,n,s){let r=new wn(this.type===Bt?new Uint16Array:new Float32Array,0,0,nn,this.type,po,In,In,Dt,du,1,sn);r.generateMipmaps=!0,r.flipY=!0;let a=new hs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{try{this.parse(o,l=>{r.image={data:l.data,width:l.width,height:l.height},r.needsUpdate=!0,t&&t(r,l)})}catch(l){s&&s(l),console.error(l)}},n,s),r}_parseXMPMetadata(e,t){let s=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[r]=s.getElementsByTagName("Container:Directory");if(!r){let[a]=s.getElementsByTagName("rdf:Description");t.version=a.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=a.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(a.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(a.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(a.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(a.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(a.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(a.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(a.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e<10.31475?e*303527e-9:e<1024?t0[e|0]:Math.pow(e*.003717127+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,s,r){let a=o=>createImageBitmap(new Blob([o],{type:"image/jpeg"}));Promise.all([a(t),a(n)]).then(([o,l])=>{let c=o.width,h=o.height,u=c/h,d=l.width/l.height;if(u!==d){r("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let f=document.createElement("canvas"),g=f.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});f.width=c,f.height=h,g.drawImage(l,0,0,l.width,l.height,0,0,c,h);let v=g.getImageData(0,0,c,h,{colorSpace:"srgb"});g.drawImage(o,0,0);let m=g.getImageData(0,0,c,h,{colorSpace:"srgb"}),p=1.8**(e.hdrCapacityMax*.5),_=(Math.log2(p)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),S=Math.min(Math.max(_,0),1),b=m.data,x=v.data,y=b.length,w=e.gainMapMin,M=e.gainMapMax,T=e.offsetSDR,E=e.offsetHDR,P=1/e.gamma,I=e.gamma===1,N=this.type===Bt,D=Ta.toHalfFloat,z=this._srgbToLinear,V=N?new Uint16Array(y).fill(15360):new Float32Array(y).fill(1);for(let Z=0;Z<y;Z+=4)for(let ue=0;ue<3;ue++){let $=Z+ue,re=b[$],le=x[$]*.00392156862745098,Ne=I?le:Math.pow(le,P),Re=w+(M-w)*Ne,rt=(re+T)*(Re*S===0?1:Math.pow(2,Re*S))-E,We=Math.min(Math.max(z(rt),0),65504);V[$]=N?D(We):We}s(V,c,h)}).catch(o=>{r(o)})}};async function V1(i){let e=new Uint8Array(await i.arrayBuffer());if(e[0]!==31||e[1]!==139)return e.buffer;let t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).arrayBuffer()}async function n0(i){let e=new $c().setMeshoptDecoder(Xm);if(typeof DecompressionStream=="function")try{let t=await fetch(i.replace(".glb?",".glb.gz?"));if(t.ok)return await e.parseAsync(await V1(t),"")}catch{}return e.loadAsync(i)}var ah=Object.freeze({spot:{label:"Focused driving spot",colour:"#f0f5ff",angle:.12,reach:40,intensity:190,aim:22},flood:{label:"Wide driving flood",colour:"#f0f5ff",angle:.48,reach:26,intensity:85,aim:10},fog:{label:"Low, wide yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},dual:{label:"Switchable white / yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},bar:{label:"Wide light-bar spread",colour:"#eff6ff",angle:.48,reach:36,intensity:140,aim:14},driving:{label:"Compact driving beam",colour:"#f7f4e9",angle:.24,reach:36,intensity:150,aim:18},combo:{label:"Pod driving / spread mix",colour:"#f2f5ff",angle:.38,reach:28,intensity:100,aim:12},work:{label:"Rear work flood",colour:"#fff0d4",angle:.8,reach:14,intensity:35,aim:-6}});function i0(i,e=[]){let t=new Map((Array.isArray(e)?e:[]).filter(n=>n&&typeof n.id=="string").map(n=>[n.id,n]));return[...new Set((Array.isArray(i)?i:[]).filter(n=>typeof n=="string").flatMap(n=>t.has(n)?t.get(n).visual?[t.get(n).visual]:[]:[n]))]}function s0(i){let e=new Set(i),t=[];return e.has("lamp_round_spot")&&t.push("spot"),e.has("lamp_round_flood")&&t.push("flood"),e.has("lamp_fog")&&t.push("fog"),e.has("lamp_dual")&&t.push("dual"),(e.has("led")||e.has("lamp_bar20"))&&t.push("bar"),e.has("lamp_compact_bar")&&t.push("driving"),(e.has("pods")||e.has("lamp_cube"))&&t.push("combo"),e.has("lamp_work")&&t.push("work"),t}var vs=Object.freeze({studio:{label:"Garage",description:"Photographed workshop \xB7 Poly Haven HDRI",file:"autoshop-01",rotation:0,height:1.6,radius:22,exposure:.88,shadow:.5,key:[-.3,.94,.19],reflectionBand:{elevation:[-9,-4],radiance:1.8}},mountains:{label:"Mountains",description:"Photographed mountain valley \xB7 Poly Haven HDRI",file:"kiara-5-noon",rotation:0,height:1.7,radius:70,exposure:1.1,shadow:.78,sunScale:.3,sun:{direction:[.466,.779,.419],irradiance:[15.54,15.59,16.72]}},urban:{label:"Urban",description:"Photographed city square \xB7 Poly Haven HDRI",file:"palermo-square",rotation:0,height:1.7,radius:45,exposure:.95,shadow:.5,key:[0,1,0]},desert:{label:"Desert",description:"Photographed sand quarry \xB7 Poly Haven HDRI",file:"quarry-02",rotation:0,height:1.7,radius:70,exposure:1.1,shadow:.74,sunScale:.3,sun:{direction:[.55,.734,.4],irradiance:[9.55,7.99,5.21]}}});function Do(i){return Object.hasOwn(vs,i)?i:"studio"}function r0(i,e="4k"){return`assets/environments/${vs[Do(i)].file}-${e}.jpg`}function a0(i,{loading:e=!1,failed:t=!1,night:n=!1}={}){return e?`Loading ${vs[Do(i)].label.toLowerCase()} scenery\u2026`:t?"Scenery could not load. A plain backdrop is shown; choose a scene to retry.":n?"Night uses a neutral test ground. Scenery returns in daylight.":vs[Do(i)].description}var W1=Object.freeze({BrightChrome:{metalness:1,roughness:.07},GrilleLettering:{metalness:.9,roughness:.18},MachinedAlloy:{metalness:.9,roughness:.3},WheelGunmetal:{metalness:.8,roughness:.38},WheelBarrelDark:{metalness:.55,roughness:.55},BrakeSteel:{metalness:.9,roughness:.42},CaliperMetal:{metalness:.6,roughness:.45},MouldedPlastic:{metalness:0,roughness:.62},GrilleAnthracite:{metalness:.2,roughness:.4},GlossBlackGrille:{metalness:0,roughness:.12,clearcoat:1,clearcoatRoughness:.04},TyreRubber:{metalness:0,roughness:.9}}),o0=Object.freeze({gloss:{roughness:.32,clearcoat:1,clearcoatRoughness:.035},satin:{roughness:.46,clearcoat:.35,clearcoatRoughness:.3},matte:{roughness:.72,clearcoat:0,clearcoatRoughness:.6}});function l0(i){return o0[i]||o0.gloss}function c0(i){let e=W1[i?.name];if(!e)return!1;for(let[t,n]of Object.entries(e))t in i&&(i[t]=n);return i.envMapIntensity=1,!0}var h0={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`};var u0={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function d0(i,{width:e=3.1,depth:t=5.4,height:n=.62,resolution:s=512,blur:r=2.6,darkness:a=1.25,opacity:o=.9}={}){let l=new Lt(s,s),c=new Lt(s,s);l.texture.generateMipmaps=c.texture.generateMipmaps=!1;let h=new It({map:l.texture,transparent:!0,depthWrite:!1,opacity:o}),u=new Ee(new on(e,t).rotateX(Math.PI/2),h);u.name="ContactShadow",u.scale.y=-1,u.position.y=.0015,u.renderOrder=1;let d=new ti(-e/2,e/2,t/2,-t/2,0,n);d.rotation.x=Math.PI/2;let f=new Fr({depthTest:!1,depthWrite:!1});f.userData.darkness={value:a},f.onBeforeCompile=b=>{b.uniforms.darkness=f.userData.darkness,b.fragmentShader=`uniform float darkness;
${b.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}`};let g=new Ee(new on(e,t).rotateX(Math.PI/2)),v=new Nt(h0),m=new Nt(u0);v.depthTest=m.depthTest=!1;function p(b){g.visible=!0,g.material=v,v.uniforms.tDiffuse.value=l.texture,v.uniforms.h.value=b/256,i.setRenderTarget(c),i.render(g,d),g.material=m,m.uniforms.tDiffuse.value=c.texture,m.uniforms.v.value=b/256,i.setRenderTarget(l),i.render(g,d),g.visible=!1}function _(b){u.getWorldPosition(d.position),d.position.y=0,d.updateMatrixWorld();let x={target:i.getRenderTarget(),clear:i.getClearAlpha(),shadow:i.shadowMap.autoUpdate},y=new Si;y.overrideMaterial=f,y.matrixWorldAutoUpdate=!1,b.updateMatrixWorld(!0),y.children.push(b),i.setClearAlpha(0),i.shadowMap.autoUpdate=!1,i.setRenderTarget(l),i.clear(),i.render(y,d),y.children.length=0,p(r),p(r*.4),i.setRenderTarget(x.target),i.setClearAlpha(x.clear),i.shadowMap.autoUpdate=x.shadow}function S(){l.dispose(),c.dispose(),h.dispose(),u.geometry.dispose(),g.geometry.dispose(),v.dispose(),m.dispose(),f.dispose()}return{plane:u,update:_,dispose:S,material:h}}var Ud=Object.freeze({high:Object.freeze({id:"high",hdri:"4k",ambientOcclusion:!0,shadowMapSize:2048,shadowBlurSamples:16,contactResolution:512,maxPixelRatio:1.7}),low:Object.freeze({id:"low",hdri:"2k",ambientOcclusion:!1,shadowMapSize:1024,shadowBlurSamples:8,contactResolution:256,maxPixelRatio:1.5})});function q1({override:i,width:e=1440,coarsePointer:t=!1,deviceMemory:n,cores:s}={}){if(i==="low"||i==="high")return Ud[i];let r=n!==void 0&&n<=4||s!==void 0&&s<=4;return e<900||t||r?Ud.low:Ud.high}function f0(){let i=null;try{i=new URLSearchParams(location.search).get("quality")}catch{}return q1({override:i,width:Math.min(screen.width||innerWidth,innerWidth),coarsePointer:matchMedia("(pointer:coarse)").matches,deviceMemory:navigator.deviceMemory,cores:navigator.hardwareConcurrency})}var ea={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X1=new ti(-1,1,1,-1,0,1),Od=class extends ct{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},j1=new Od,Ms=class{constructor(e){this._mesh=new Ee(j1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oh=class extends jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ms(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Lo=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},lh=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ch=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oh(ea),this.copyPass.material.blending=Yt,this.timer=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(a instanceof Lo?n=!0:a instanceof lh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hh=class extends jn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new He}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var No={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Fo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},uh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function p0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Y1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new wn(s,e,e);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}function Y1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Uo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:kd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function kd(i,e,t){let n=K1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function K1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var dh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let _=g-m+h,S=v-p+h,b=g-1+2*h,x=v-1+2*h,y=l&255,w=c&255,M=this.perm[y+this.perm[w]]%12,T=this.perm[y+m+this.perm[w+p]]%12,E=this.perm[y+1+this.perm[w+1]]%12,P=.5-g*g-v*v;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[M],g,v));let I=.5-_*_-S*S;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[T],_,S));let N=.5-b*b-x*x;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[E],b,x)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=e-v,S=t-m,b=n-p,x,y,w,M,T,E;_>=S?S>=b?(x=1,y=0,w=0,M=1,T=1,E=0):_>=b?(x=1,y=0,w=0,M=1,T=0,E=1):(x=0,y=0,w=1,M=1,T=0,E=1):S<b?(x=0,y=0,w=1,M=0,T=1,E=1):_<b?(x=0,y=1,w=0,M=0,T=1,E=1):(x=0,y=1,w=0,M=1,T=1,E=0);let P=_-x+f,I=S-y+f,N=b-w+f,D=_-M+2*f,z=S-T+2*f,V=b-E+2*f,Z=_-1+3*f,ue=S-1+3*f,$=b-1+3*f,re=h&255,le=u&255,Ne=d&255,Re=this.perm[re+this.perm[le+this.perm[Ne]]]%12,rt=this.perm[re+x+this.perm[le+y+this.perm[Ne+w]]]%12,We=this.perm[re+M+this.perm[le+T+this.perm[Ne+E]]]%12,tt=this.perm[re+1+this.perm[le+1+this.perm[Ne+1]]]%12,se=.6-_*_-S*S-b*b;se<0?s=0:(se*=se,s=se*se*this._dot3(this.grad3[Re],_,S,b));let k=.6-P*P-I*I-N*N;k<0?r=0:(k*=k,r=k*k*this._dot3(this.grad3[rt],P,I,N));let te=.6-D*D-z*z-V*V;te<0?a=0:(te*=te,a=te*te*this._dot3(this.grad3[We],D,z,V));let ze=.6-Z*Z-ue*ue-$*$;return ze<0?o=0:(ze*=ze,o=ze*ze*this._dot3(this.grad3[tt],Z,ue,$)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),S=Math.floor(s+v),b=(m+p+_+S)*c,x=m-b,y=p-b,w=_-b,M=S-b,T=e-x,E=t-y,P=n-w,I=s-M,N=T>E?32:0,D=T>P?16:0,z=E>P?8:0,V=T>I?4:0,Z=E>I?2:0,ue=P>I?1:0,$=N+D+z+V+Z+ue,re=a[$][0]>=3?1:0,le=a[$][1]>=3?1:0,Ne=a[$][2]>=3?1:0,Re=a[$][3]>=3?1:0,rt=a[$][0]>=2?1:0,We=a[$][1]>=2?1:0,tt=a[$][2]>=2?1:0,se=a[$][3]>=2?1:0,k=a[$][0]>=1?1:0,te=a[$][1]>=1?1:0,ze=a[$][2]>=1?1:0,pe=a[$][3]>=1?1:0,Je=T-re+c,mt=E-le+c,ae=P-Ne+c,ge=I-Re+c,xe=T-rt+2*c,_e=E-We+2*c,Me=P-tt+2*c,je=I-se+2*c,De=T-k+3*c,$e=E-te+3*c,Oe=P-ze+3*c,G=I-pe+3*c,ut=T-1+4*c,it=E-1+4*c,F=P-1+4*c,A=I-1+4*c,j=m&255,K=p&255,ne=_&255,be=S&255,ve=o[j+o[K+o[ne+o[be]]]]%32,ce=o[j+re+o[K+le+o[ne+Ne+o[be+Re]]]]%32,de=o[j+rt+o[K+We+o[ne+tt+o[be+se]]]]%32,Pe=o[j+k+o[K+te+o[ne+ze+o[be+pe]]]]%32,Ve=o[j+1+o[K+1+o[ne+1+o[be+1]]]]%32,Se=.6-T*T-E*E-P*P-I*I;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(r[ve],T,E,P,I));let Ae=.6-Je*Je-mt*mt-ae*ae-ge*ge;Ae<0?u=0:(Ae*=Ae,u=Ae*Ae*this._dot4(r[ce],Je,mt,ae,ge));let Be=.6-xe*xe-_e*_e-Me*Me-je*je;Be<0?d=0:(Be*=Be,d=Be*Be*this._dot4(r[de],xe,_e,Me,je));let qe=.6-De*De-$e*$e-Oe*Oe-G*G;qe<0?f=0:(qe*=qe,f=qe*qe*this._dot4(r[Pe],De,$e,Oe,G));let et=.6-ut*ut-it*it-F*F-A*A;return et<0?g=0:(et*=et,g=et*et*this._dot4(r[Ve],ut,it,F,A)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Oo=class i extends jn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=p0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Lt(this.width,this.height,{type:Bt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Nt({defines:Object.assign({},No.defines),uniforms:si.clone(No.uniforms),vertexShader:No.vertexShader,fragmentShader:No.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xa,this.normalMaterial.blending=Yt,this.pdMaterial=new Nt({defines:Object.assign({},Uo.defines),uniforms:si.clone(Uo.uniforms),vertexShader:Uo.vertexShader,fragmentShader:Uo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Nt({defines:Object.assign({},Fo.defines),uniforms:si.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Nt({uniforms:si.clone(ea.uniforms),vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ao,blendDst:Us,blendEquation:ii,blendSrcAlpha:ro,blendDstAlpha:Us,blendEquationAlpha:ii}),this.blendMaterial=new Nt({uniforms:si.clone(uh.uniforms),vertexShader:uh.vertexShader,fragmentShader:uh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yl,blendSrc:ao,blendDst:Us,blendEquation:ii,blendSrcAlpha:ro,blendDstAlpha:Us,blendEquationAlpha:ii}),this._fsQuad=new Ms(null),this._originalClearColor=new He,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ti,this.depthTexture.format=Ai,this.depthTexture.type=gs,this.normalRenderTarget=new Lt(this.width,this.height,{minFilter:Ft,magFilter:Ft,type:Bt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=kd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new dh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new wn(s,e,e,nn,En);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}};Oo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fh=class extends jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=si.clone(ko.uniforms),this.material=new Nr({name:ko.name,uniforms:this.uniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader}),this._fsQuad=new Ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===co?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ks=new Map,J1=Object.freeze(["heritage","safari","mountain","geo","topo","pinstripe","rally","checker","compass","pixel","contour","sunset"]),Z1=new Set(J1);function $1(i,e,t){let n=new He(e),s=n.r*.2126+n.g*.7152+n.b*.0722<.18,r=/^#[0-9a-f]{6}$/i.test(t||"")?t:null,a=i+":"+s+":"+r;if(Ks.has(a))return Ks.get(a);let o=document.createElement("canvas");o.width=2048,o.height=512;let l=o.getContext("2d"),c=r||(s?"#d8d1bb":"#26332f");if(i==="heritage"||i==="safari")(r?[r,r,r]:i==="heritage"?["#bd542b","#df994c","#f0d29a"]:["#c8b786","#766b50","#394634"]).forEach((f,g)=>{l.fillStyle=f,l.fillRect(0,100+g*45,2048,38)});else if(i==="mountain")l.fillStyle=c,l.beginPath(),l.moveTo(0,430),[[0,350],[250,190],[420,300],[700,60],[950,280],[1190,140],[1490,330],[1720,210],[2048,350],[2048,430]].forEach(([d,f])=>l.lineTo(d,f)),l.closePath(),l.fill(),l.fillStyle=s?"#26332f":"#d8d1bb",l.beginPath(),l.moveTo(700,60),l.lineTo(628,174),l.lineTo(700,145),l.lineTo(758,182),l.closePath(),l.fill();else if(i==="geo"){l.fillStyle=c;for(let d=0;d<5;d++){let f=80+d*180;l.beginPath(),l.moveTo(f,420),l.lineTo(f+210,80),l.lineTo(f+315,80),l.lineTo(f+105,420),l.closePath(),l.fill()}l.fillRect(1050,350,998,70)}else if(i==="pinstripe"||i==="rally"){if(l.fillStyle=c,l.fillRect(0,i==="rally"?180:230,2048,i==="rally"?100:12),l.fillRect(0,i==="rally"?295:260,2048,8),i==="rally"){l.beginPath(),l.arc(1260,245,165,0,Math.PI*2),l.fill();let d=new He(c);l.fillStyle=d.r*.2126+d.g*.7152+d.b*.0722<.18?"#e7e7dc":"#242a29",l.font="italic 900 238px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("19",1255,257)}}else if(i==="checker"){l.fillStyle=c;for(let d=0;d<3;d++)for(let f=0;f<32;f++)(f+d)%2===0&&l.fillRect(f*64,180+d*64,64,64)}else if(i==="compass"){l.strokeStyle=c,l.lineWidth=8,l.beginPath(),l.arc(650,256,165,0,Math.PI*2),l.stroke(),l.fillStyle=c;for(let d=0;d<8;d++){let f=d*Math.PI/4;l.beginPath(),l.moveTo(650+Math.cos(f)*180,256+Math.sin(f)*180),l.lineTo(650+Math.cos(f+.24)*55,256+Math.sin(f+.24)*55),l.lineTo(650,256),l.closePath(),l.fill()}l.fillRect(900,250,1148,10)}else if(i==="pixel"){l.fillStyle=c;for(let d=0;d<7;d++)for(let f=0;f<36;f++)(f*17+d*13)%11<4&&l.fillRect(f*57,70+d*55,55,53)}else if(i==="sunset")(r?[c,c,c,c]:["#b44b38","#d6793d","#e4ac55","#ead0a0"]).forEach((f,g)=>{l.fillStyle=f,l.beginPath(),l.moveTo(0,150+g*45),l.lineTo(1150,150+g*45),l.lineTo(1500,60+g*45),l.lineTo(2048,60+g*45),l.lineTo(2048,91+g*45),l.lineTo(1500,91+g*45),l.lineTo(1150,181+g*45),l.lineTo(0,181+g*45),l.fill()});else if(i==="contour"){l.strokeStyle=c,l.lineWidth=9;for(let d=0;d<3;d++)l.beginPath(),l.moveTo(0,350+d*30),l.lineTo(430,350+d*30),l.lineTo(670,130+d*30),l.lineTo(870,310+d*30),l.lineTo(1150,70+d*30),l.lineTo(1550,350+d*30),l.lineTo(2048,350+d*30),l.stroke()}else{l.strokeStyle=c,l.lineWidth=4;for(let d=-3;d<15;d++){l.beginPath();for(let f=0;f<=2048;f+=8){let g=80+d*29+Math.sin(f/180+d*.28)*46+Math.sin(f/78+d*.13)*12;f?l.lineTo(f,g):l.moveTo(f,g)}l.stroke()}}let h=new _n(o);h.colorSpace=bt;let u=new Ze({name:"Vinyl "+i,map:h,transparent:!0,alphaTest:.04,depthWrite:!1,roughness:.48,metalness:0,polygonOffset:!0,polygonOffsetFactor:-4});if(Ks.size>=32){let d=Ks.keys().next().value,f=Ks.get(d);f.map.dispose(),f.dispose(),Ks.delete(d)}return Ks.set(a,u),u}function m0(i,e,t,n,s){if(!Z1.has(t))return 0;e.updateWorldMatrix(!0,!1);let r=e.matrixWorld.clone().invert(),a=$1(t,n,s),o=0;for(let l of[-1,1])for(let c of i){c.updateWorldMatrix(!0,!1);let h=e.localToWorld(new L(l*.748,.91,-.27)),u=new Zr(c,h,new Sn(0,l*Math.PI/2,0),new L(2.95,.62,.1));if(!u.attributes.position.count){u.dispose();continue}u.applyMatrix4(r);let d=new Ee(u,a);d.name="Body vinyl "+t,d.renderOrder=2,e.add(d),o++}return o}var vt=document.getElementById("viewer3d"),yn=document.getElementById("viewerStatus"),g0=8.1,Bd="Interactive Jimny modification preview. Click a part to edit; drag to orbit, scroll or pinch to zoom.",ht;try{ht=new zc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"})}catch{vt.classList.add("unavailable"),yn.textContent="3D is unavailable in this browser. Your parts list and estimates still work."}if(ht){let u=function(R,U,O=ht.getPixelRatio()){ht.setPixelRatio(O),ht.setSize(R,U,!1),l.setPixelRatio(O),l.setSize(R,U)},d=function(){I&&(P.update(N),I=!1),t.ambientOcclusion?l.render():ht.render(i,e)},_=function(){return v.has(f)},S=function(){let R=_();e.near=R?.018:.1,e.updateProjectionMatrix(),g.enableZoom=!R,g.enableRotate=!R,g.enablePan=!1,g.minDistance=["doors-cutaway","touring"].includes(f)?1.2:2,g.maxDistance=g0,g.minPolarAngle=.15,g.maxPolarAngle=f==="underside"?Math.PI*.75:Math.PI*.49,T()},b=function(){e.position.copy(p.eye),g.target.copy(e.position).add(new L(Math.sin(p.yaw)*Math.cos(p.pitch),Math.sin(p.pitch),Math.cos(p.yaw)*Math.cos(p.pitch))),e.lookAt(g.target),De=!0},x=function(){_()||g.update()},y=function(){return{eye:p.eye.clone(),yaw:p.yaw,pitch:p.pitch}},w=function(R){p.eye.copy(R.eye),p.yaw=R.yaw,p.pitch=R.pitch},M=function(){let R=km(f,ae);p.eye.set(...R.eye),p.yaw=R.yaw,p.pitch=R.pitch,b()},T=function(){let R=window.matchMedia("(max-width:899px)").matches&&!vt.parentElement.classList.contains("expanded");g.enabled=!R&&!_(),ht.domElement.style.touchAction=R?"pan-y":"none",vt.dataset.touchMode=R?"scroll":_()?"look-around":"orbit",ht.domElement.setAttribute("aria-label",(_()?"Enclosed 3D Jimny cabin. Drag to look around, Shift-drag to move within the cabin, scroll to zoom.":Bd)+(R?" Expand the preview for touch rotation.":"")),yn.textContent.startsWith("Live 3D")&&(yn.textContent=R?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate")},_e=function(R){let U=document.createElement("canvas");U.width=U.height=256;let O=U.getContext("2d");O.fillStyle="#888",O.fillRect(0,0,256,256);let H=73;for(let Y=0;Y<12e3;Y++){H=H*16807%2147483647;let B=H%256;H=H*16807%2147483647;let he=H%256;O.fillStyle=`rgba(${R==="paint"?"220,220,220":"40,40,40"},${R==="paint"?.12:.15})`,O.fillRect(B,he,1,1)}if(R==="tyre"){O.strokeStyle="#252525",O.lineWidth=3;for(let Y=-256;Y<512;Y+=24)O.beginPath(),O.moveTo(Y,0),O.lineTo(Y+40,90),O.lineTo(Y+22,168),O.lineTo(Y+62,256),O.stroke()}let X=new _n(U);return X.wrapS=X.wrapT=en,X.repeat.set(R==="paint"?8:12,R==="paint"?8:1),X.anisotropy=Math.min(4,ht.capabilities.getMaxAnisotropy()),X},Pe=function(){document.querySelectorAll("[data-scenery-select]").forEach(R=>{R.value=ne}),document.querySelectorAll("[data-scenery-status]").forEach(R=>{R.textContent=a0(ne,{loading:be,failed:ve,night:Oe})}),vt.dataset.scenery=ne,vt.dataset.sceneryLoading=String(be)},Se=function(){let R=de.get(ne),U=!!R&&!be&&!ve&&!Oe,O=vs[ne];for(let[H,X]of de)X.skybox&&(X.skybox.visible=U&&H===ne);if(i.environment=U?R.environment.texture:r.texture,i.environmentRotation.set(0,U?O.rotation:0,0),ht.toneMappingExposure=U?O.exposure:.95,i.background.set(Oe?"#10191f":"#20272b"),E.material=Oe?Ne:le,Re.visible=!1,le.opacity=U?O.shadow:.19,a.groundColor.set("#747572"),a.intensity=Oe?.12:U?0:1.35,U&&O.sun?Ve.fromArray(O.sun.direction):U?Ve.fromArray(O.key):Ve.set(3,7,5).normalize(),Ve.applyAxisAngle(St.DEFAULT_UP,U?O.rotation:0),o.position.copy(Ve).multiplyScalar(9),U&&O.sun){let[H,X,Y]=O.sun.irradiance,B=Math.max(H,X,Y);o.color.setRGB(H/B,X/B,Y/B,sn),o.intensity=B*O.sunScale}else o.color.set("#fffdf8"),o.intensity=Oe?.06:U?1e-4:2.2;o.shadow.radius=U&&O.sun?5:16,o.shadow.normalBias=.004,o.shadow.bias=-15e-5,i.environmentIntensity=Oe?.12:U?1:.7,Pe(),De=!0},xt=function(R){for(;R.children.length;){let U=R.children[0];U.traverse(O=>{O.geometry?.dispose(),O.isInstancedMesh&&O.dispose(),O.userData.disposableMaterial&&(O.material.map?.dispose(),O.material.dispose())}),R.remove(U)}},Un=function(R,U,O,H,X,Y,B,he=0,ee="#e9e9df",me="#222827",Te=!1){let Xe=document.createElement("canvas");Xe.width=512,Xe.height=128;let at=Xe.getContext("2d");at.fillStyle=me,at.fillRect(0,0,512,128),at.fillStyle=ee,at.font=`${Te?"italic ":""}700 ${U.length>8?"52":"72"}px Arial`,at.textAlign="center",at.textBaseline="middle",at.fillText(U,256,68,490);let ot=new _n(Xe);ot.colorSpace=bt;let ye=new Ze({map:ot,roughness:.6,transparent:!1}),Tt=we(new on(O,H),ye,R,X,Y,B);return Tt.rotation.y=he,Tt.userData.disposableMaterial=!0,Tt},fn=function(R,U,O,H=k.paint,X=[],Y=0){let B=new kt(U.map(([me,Te])=>new oe(-me,Te)));X.forEach(me=>B.holes.push(new tn(me.map(([Te,Xe])=>new oe(-Te,Xe)))));let he=new Lr(B,24),ee=he.attributes.position;for(let me=0;me<ee.count;me++){let Te=-ee.getX(me),Xe=ee.getY(me);ee.setXYZ(me,O*(.768-Math.max(0,Xe-1.14)*.115+Y),Xe,Te)}if(he.computeVertexNormals(),O<0){let me=he.index;for(let Te=0;Te<me.count;Te+=3){let Xe=me.getX(Te);me.setX(Te,me.getX(Te+2)),me.setX(Te+2,Xe)}he.computeVertexNormals()}return we(he,H,R)},Bo=function(R,U,O,H=!1){if(pe&&H){let me=U<0?-1:1,Te=[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],Xe=[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]],at=[],ot=[],ye=64,Tt=[Te,Xe].map(_t=>new pi(_t.map(([pn,Gt])=>new L(0,Gt,pn))));for(let[_t,pn]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let Gt=0;Gt<=ye;Gt++){let Fi=Tt[0].getPoint(Gt/ye).lerp(Tt[1].getPoint(Gt/ye),_t);at.push(me*pn,Fi.y,O+Fi.z)}for(let _t=0;_t<5;_t++)for(let pn=0;pn<ye;pn++){let Gt=_t*(ye+1)+pn;ot.push(Gt,Gt+1,Gt+ye+2,Gt,Gt+ye+2,Gt+ye+1)}if(me<0)for(let _t=0;_t<ot.length;_t+=3)[ot[_t+1],ot[_t+2]]=[ot[_t+2],ot[_t+1]];let st=new ct;st.setAttribute("position",new Ge(at,3)),st.setIndex(ot),st.computeVertexNormals(),we(st,k.trim,R);return}let X=U<0?-1:1,Y=.385,B=H?.462:.432,he=[];for(let me=0;me<=32;me++){let Te=Math.PI*me/32;he.push([O-Math.cos(Te)*B,.335+Math.sin(Te)*B])}for(let me=32;me>=0;me--){let Te=Math.PI*me/32;he.push([O-Math.cos(Te)*Y,.335+Math.sin(Te)*Y])}fn(R,he,X,k.trim,[],H?.137:.075);let ee=[];for(let me=0;me<=32;me++){let Te=me*Math.PI/32;ee.push([X*(H?.91:.843),.335+Math.sin(Te)*B,O-Math.cos(Te)*B])}ke(R,ee,.014,k.trim);for(let me of[-1,1])Q(R,H?.15:.09,.18,.055,X*(H?.84:.8),.42,O+me*.404,k.trim)},ph=function(){if(pe)return;let R=[[-1.78,.54],[-1.78,1.13],[.69,1.15],[1.79,1.1],[1.84,.88],[1.84,.52],[1.69,.52]];for(let B=0;B<=30;B++){let he=B*Math.PI/30;R.push([1.295+Math.cos(he)*.392,.335+Math.sin(he)*.392])}R.push([.903,.535],[-.903,.535]);for(let B=0;B<=30;B++){let he=B*Math.PI/30;R.push([-1.295+Math.cos(he)*.392,.335+Math.sin(he)*.392])}R.push([-1.687,.54]),Q(te,1.43,.075,2.3,0,1.125,-.53,k.paint);let U=Q(te,1.48,.075,1.11,0,1.13,1.235,k.paint);U.rotation.x=.026,Q(te,1.46,.035,.15,0,1.163,.635,k.paint),Q(te,1.46,.085,2.43,0,1.665,-.505,k.roof);for(let B of[-.746,.746])ke(te,[[B,1.647,.7],[B,1.684,.53],[B,1.684,-1.63],[B,1.65,-1.75]],.012,k.roof);for(let B of[-.48,-.24,0,.24,.48])Q(te,.018,.009,1.93,B,1.709,-.55,k.roof);Q(te,1.48,.53,.045,0,1.355,-1.75,k.paint),Q(te,1.3,.375,.015,0,1.412,-1.778,k.trim),Q(te,1.25,.33,.017,0,1.422,-1.79,k.glass),ke(te,[[.52,1.28,-1.805],[.11,1.29,-1.805]],.009,k.trim),[-1,1].forEach(B=>{fn(te,R,B);let he=[[[.57,1.2],[.51,1.59],[-.24,1.59],[-.24,1.2]],[[-.34,1.2],[-.34,1.59],[-1.06,1.59],[-1.06,1.2]],[[-1.15,1.2],[-1.15,1.59],[-1.65,1.59],[-1.65,1.2]]];fn(te,[[.69,1.12],[.59,1.65],[-1.74,1.65],[-1.76,1.12]],B,k.paint,he),he.forEach(ee=>{fn(te,ee,B,k.glass,[],-.008);let me=ee.concat([ee[0]]).map(([Te,Xe])=>[B*(.768-Math.max(0,Xe-1.14)*.115+.002),Xe,Te]);wt(te,me,.011,k.trim)});for(let ee of[.665,-.285,-1.105])ke(te,[[B*.772,.56,ee],[B*.773,1.15,ee],[B*.716,1.63,ee-.035]],.0035,k.trim);ke(te,[[B*.773,.58,.67],[B*.773,.57,-1.07]],.003,k.trim),ke(te,[[B*.774,1.104,.64],[B*.774,1.104,-1.72]],.005,k.paint),[-.13,-.93].forEach(ee=>{Q(te,.025,.045,.16,B*.785,1.085,ee,k.trim),Q(te,.028,.017,.115,B*.799,1.092,ee,k.darkmetal)}),[.63,-.32].forEach(ee=>[.72,1.04].forEach(me=>{Q(te,.025,.048,.065,B*.785,me,ee,k.paint),Ue(te,.009,.009,.065,B*.806,me,ee,k.darkmetal,"y",8)})),ke(te,[[B*.77,1.22,.54],[B*.89,1.24,.55]],.018,k.trim),Q(te,.17,.15,.24,B*.91,1.285,.56,k.trim),Q(te,.012,.105,.18,B*.999,1.29,.54,k.glass),Q(te,.05,.065,1.83,B*.78,.55,-.08,k.trim),[-1.295,1.295].forEach(ee=>Bo(te,B===1?.8:-.875,ee));for(let ee of[-1.295,1.295]){let me=[];for(let Te=0;Te<=24;Te++){let Xe=Math.PI*Te/24;me.push([ee-Math.cos(Xe)*.395,.335+Math.sin(Xe)*.395])}for(let Te=24;Te>=0;Te--){let Xe=Math.PI*Te/24;me.push([ee-Math.cos(Xe)*.333,.335+Math.sin(Xe)*.333])}fn(te,me,B,k.rubber,[],-.06)}Q(te,.055,.035,.12,B*.791,1.035,1.07,k.orange),B===-1&&(fn(te,[[-1.48,1.01],[-1.48,1.12],[-1.66,1.12],[-1.66,1.01]],B,k.trim,[],.003),fn(te,[[-1.49,1.02],[-1.49,1.11],[-1.65,1.11],[-1.65,1.02]],B,k.paint,[],.004))});let O=Q(te,1.395,.465,.026,0,1.397,.644,k.trim);O.rotation.x=-.17;let H=Q(te,1.315,.393,.028,0,1.405,.661,k.glass);H.rotation.x=-.17,[-.726,.726].forEach(B=>{let he=Q(te,.06,.515,.06,B,1.392,.634,k.paint);he.rotation.x=-.17});for(let B of[-.43,.21])ke(te,[[B,1.2,.703],[B+.08,1.24,.704]],.007,k.trim),ke(te,[[B-.14,1.245,.705],[B+.22,1.26,.704]],.009,k.trim);Q(te,1.5,.23,.1,0,.975,1.811,k.paint),Q(te,1.62,.19,.22,0,.645,1.825,k.trim),Q(te,1.62,.17,.18,0,.64,-1.795,k.trim),Q(te,1.57,.08,.085,0,.775,1.83,k.trim),[-.602,.602].forEach(B=>{Ue(te,.153,.153,.035,B,.976,1.868,k.trim,"z",48),Ue(te,.128,.12,.027,B,.976,1.889,k.chrome,"z",48);let he=we(new Dn(.116,32,16,0,Math.PI*2,0,Math.PI/2),k.reflector,te,B,.976,1.895);he.rotation.x=Math.PI/2,he.scale.y=.3,Ue(te,.032,.032,.018,B,.976,1.908,k.white,"z"),Ue(te,.118,.118,.012,B,.976,1.927,k.lens,"z",48);for(let ee=-3;ee<=3;ee++)ke(te,[[B+ee*.025,.89,1.934],[B+ee*.025,1.06,1.934]],.0015,k.lens);Q(te,.128,.049,.025,B,1.146,1.813,k.trim),Q(te,.11,.032,.029,B,1.146,1.83,k.orange),Ue(te,.065,.065,.014,B,.64,1.945,k.trim,"z"),Ue(te,.045,.045,.018,B,.64,1.956,k.lens,"z"),Q(te,.23,.12,.025,B,.65,-1.901,k.red),Q(te,.08,.057,.028,B+.052,.652,-1.918,k.lens)}),Q(te,.46,.11,.018,0,.65,1.949,k.trim);for(let B=-.28;B<=.28;B+=.055)Q(te,.032,.055,.015,B,.766,1.884,k.trim);Q(te,1.13,.075,2.94,0,.43,-.1,k.darkmetal),[-1.295,1.295].forEach(B=>Ue(te,.055,.055,1.65,0,.35,B,k.darkmetal,"x"));for(let B of[-1.295,1.295])Ue(te,.105,.11,.15,0,.35,B,k.darkmetal,"z");Un(te,"Jimny",.19,.055,-.49,1.075,-1.783,Math.PI,"#c8cfcb","#36443c",!0);let X=new Ye;X.position.set(.12,1,-1.94),X.rotation.y=Math.PI/2,ta(X,0,0,0,.335,!1),te.add(X),[-.38,.38].forEach(B=>{Q(te,.46,.12,.48,B,.85,.33,k.seat);let he=Q(te,.46,.48,.12,B,1.08,.09,k.seat);he.rotation.x=-.1,Q(te,.25,.14,.12,B,1.37,.08,k.seat)}),Q(te,1.25,.12,.46,0,.85,-.7,k.seat),Q(te,1.25,.4,.1,0,1.05,-.98,k.seat),Q(te,1.36,.12,.26,0,1.12,.5,k.trim),Ue(te,.075,.075,.012,.39,1.19,.355,k.trim,"z"),Ue(te,.065,.065,.014,.24,1.19,.355,k.trim,"z");let Y=we(new jt(.127,.014,8,32),k.trim,te,.38,1.16,.3);Y.rotation.x=-.32},ta=function(R,U,O,H,X=.335,Y=!1){let B=U<0?-1:1,he=Y?.115:.098,ee=.191,me=U+B*(he+.003),Te=[[ee,-he*.92],[X*.82,-he],[X*.93,-he*.88],[X*.99,-he*.63],[X,-he*.32],[X,he*.32],[X*.99,he*.63],[X*.93,he*.88],[X*.82,he],[ee,he*.92]].map(([ot,ye])=>new oe(ot,ye)),Xe=we(new mi(Te,64),k.rubber,R,U,O,H);Xe.rotation.z=Math.PI/2;for(let ot of[-1,1]){let ye=we(new jt(X*.81,.002,4,64),k.trim,R,U+ot*he,O,H);ye.rotation.y=Math.PI/2}if(Y){let ot=new Xi(new an(.062,.009,.036),k.rubber,180),ye=new St;for(let Tt=0;Tt<60;Tt++)for(let st=0;st<3;st++){let _t=(Tt+(st===1?.4:0))/60*Math.PI*2;ye.position.set(U+(st-1)*.071,O+Math.cos(_t)*(X-.002),H+Math.sin(_t)*(X-.002)),ye.rotation.set(_t,0,(st-1)*.18),ye.updateMatrix(),ot.setMatrixAt(Tt*3+st,ye.matrix)}ot.castShadow=!0,R.add(ot)}Ue(R,ee,ee,.15,U,O,H,k.darkmetal,"x",48),Ue(R,.157,.157,.012,U+B*.076,O,H,k.brake,"x",48);let at=we(new jt(ee-.005,.009,8,48),Y?k.darkmetal:k.chrome,R,me,O,H);at.rotation.y=Math.PI/2;for(let ot=0;ot<5;ot++){let ye=ot*Math.PI*2/5;for(let Tt of[-1,1]){let st=ye+Tt*.105,_t=Q(R,.018,.11,.022,me,O+Math.cos(st)*.119,H+Math.sin(st)*.119,Y?k.darkmetal:k.metal);_t.rotation.x=st}Ue(R,.009,.009,.016,me+B*.014,O+Math.cos(ye)*.044,H+Math.sin(ye)*.044,k.chrome,"x",6)}Ue(R,.056,.056,.027,me,O,H,Y?k.darkmetal:k.metal,"x",32),Ue(R,.025,.025,.031,me,O,H,k.trim,"x",24)},na=function(R){xt(z);let U=R.has("tires")?.368:pe?.3465:.335;if(pe)return pe.stockWheels.visible=!R.has("tires"),pe.atWheels.visible=R.has("tires"),U;let O=R.has("tires")?.765:.715;for(let H of[-O,O])for(let X of[-1.295,1.295])ta(z,H,U,X,U,R.has("tires"));return U},zd=function(R,U=!1){let O=new Ye;R.add(O);let H=.61,X=-1.62;[-.72,.72].forEach(B=>Q(O,.035,.055,2.25,B,1.82,-.5,k.darkmetal)),[H,X].forEach(B=>Q(O,1.46,.055,.035,0,1.82,B,k.darkmetal));for(let B=-1.56;B<.62;B+=.14)Q(O,1.43,.022,.072,0,1.825,B,k.trim);[-.68,.68].forEach(B=>[-1.38,.38].forEach(he=>{Q(O,.055,.095,.11,B,1.755,he,k.darkmetal),Q(O,.1,.02,.15,B,1.715,he,k.rubber),Ue(O,.012,.012,.06,B,1.77,he,k.metal,"x",8)}));let Y=Q(O,1.38,.13,.018,0,1.77,.64,k.trim);if(Y.rotation.x=-.5,U){[-.72,.72].forEach(B=>wt(O,[[B,1.83,H],[B,1.96,H-.12],[B,1.96,X+.06],[B,1.83,X]],.018));for(let B of[-1.55,.49])Q(O,1.44,.025,.025,0,1.955,B,k.darkmetal)}else for(let B of[-.72,.72])for(let he of[-1.5,-.8,-.1,.5])Q(O,.018,.014,.045,B,1.86,he,k.metal)},ia=function(R,U,O,H,X=.115){let Y=[[[.48,.44],[.14,.64],[-.48,.2],[-.16,-.03],[.19,.23],[.34,.14],[.48,.25]],[[.16,.03],[-.19,-.23],[-.34,-.14],[-.48,-.25],[-.48,-.44],[-.14,-.64],[.48,-.2]]];for(let B of Y){let he=new kt(B.map(([ee,me])=>new oe(ee*X,me*X)));we(new Tn(he,{depth:.008,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.001,bevelThickness:.001}),k.chrome,R,U,O,H)}},zo=function(R,U){if(pe){if(Object.entries(pe.grilles).forEach(([O,H])=>H.visible=O===(U==="smesh"?"mesh":U)),U==="smesh"&&pe.sBadgeGeometry){let O=we(pe.sBadgeGeometry.clone(),k.chrome,R);O.userData.grilleBadge=!0,td(O,A,ut,ae)}return}if(Q(R,1.49,.286,.038,0,.977,1.855,k.trim),U==="mesh"||U==="delete"||U==="rhino"){for(let O=.866;O<1.09;O+=.028)Q(R,.88,.009,.012,0,O,1.882,k.darkmetal);for(let O=-.43;O<.45;O+=.035)Q(R,.008,.22,.012,O,.977,1.885,k.darkmetal);U==="rhino"&&ia(R,0,.98,1.907,.13)}else if(U==="oem"||U==="chrome"){for(let O of[-.35,-.175,0,.175,.35]){Q(R,.11,.2,.018,O,.977,1.88,k.darkmetal),Q(R,.075,.162,.021,O,.977,1.893,k.trim);for(let H of[-1,1])Q(R,.008,.18,.015,O+H*.048,.977,1.901,U==="chrome"?k.chrome:k.darkmetal)}ia(R,0,.98,1.92,.125)}else{for(let O=.89;O<1.08;O+=.047)Q(R,.88,.014,.012,0,O,1.887,k.darkmetal);Un(R,U==="script"?"Suzuki":"SUZUKI",.68,.12,0,.98,1.908,0,"#e2e5dd","#252e2d",U==="script")}},Ni=function(R,U){if(m.has(f)||U==="none")return;if(pe){m0(pe.paintMeshes,R,U,ut,A.decalColour);return}let O=pe?.756:.773;[-1,1].forEach(H=>{if(U==="heritage"||U==="safari")(U==="heritage"?["#b24d25","#d58d43","#e6c58f"]:["#d7c18f","#655e47","#3d4836"]).forEach((Y,B)=>{let he=new Ze({color:Y,roughness:.7}),ee=Q(R,.006,.045,2.7,H*O,.87+B*.052,-.36,he);ee.userData.disposableMaterial=!0});else if(U==="geo"||U==="mountain"){let X=new kt;X.moveTo(-1.45,0),X.lineTo(-.85,.2),X.lineTo(-.45,.06),X.lineTo(.05,.24),X.lineTo(.65,0),X.closePath();let Y=we(new Lr(X),k.darkmetal,R,H*(O+.001),.67,-.25);Y.rotation.y=H*Math.PI/2;for(let B=-1.4;B<.4;B+=.19){let he=Q(R,.007,.05,.11,H*(O+.003),.77,B,k.trim);he.rotation.x=-.45}}else if(U==="topo")for(let X=0;X<6;X++){let Y=[];for(let B=-1.52;B<.8;B+=.13)Y.push([H*(O+.002),.72+X*.035+Math.sin(B*4+X)*.017,B]);ke(R,Y,.003,k.darkmetal)}})},sa=function(R,U){F=Tm({accessoryRig:V,mats:k,detailed:pe,modelBody:ae,colour:ut,effectiveDesign:A,lampEmitters:Be,buildGrille:zo,addDecals:Ni,arch:Bo})(R,U),pe&&U.nameDecal&&V.add(jm(Ym(U.nameDecal),ae,pe.paintMeshes,D))},zn=function(R=it){I=!0,se.clear(),vt.dataset.cameraMode=_()?"inside":m.has(f)?"cutaway":"exterior",vt.dataset.cameraView=f,it={...it,...R},R.colour&&(ut=R.colour);for(let[ee,me]of[["viewStock",G],["viewBuild",!G]]){let Te=document.getElementById(ee);Te?.classList.toggle("active",me),Te?.setAttribute("aria-pressed",String(me))}let U=i0(G?[]:it.parts||[],window.JIMNY_MARKET_PRODUCTS||[]),O=new Set(["tires","snorkel","skinnyjim_backbone","skinnyjim_jerry_tray","mod_reardoor_molle","seats","doortrim"]);for(let ee of window.JIMNY_MARKET_PRODUCTS||[])ee.visual&&ee.bodyStyles?.includes("3door")&&O.add(ee.visual);let H=new Set(ae==="3door"?U.filter(ee=>O.has(ee)):U),X=G?{finish:"oem",decal:"none",grille:"oem"}:{...it.design};X.tyreType=G?"highway":Jm(X,H),X.tyreType==="highway"?H.delete("tires"):H.add("tires"),pe&&(pe.headlamps.visible=!H.has("headlamps"),pe.bumper.visible=!["bull","autostylenn_bumper_v1"].some(ee=>H.has(ee)),Object.values(pe.grilles).forEach(ee=>td(ee,X,ut,ae))),G||(H.has("autostylenn_big_suzuki_grille")?X.grille="block":H.has("autostylenn_cursive_grille")?X.grille="script":H.has("autostylenn_s_grille")&&(X.grille="smesh")),A={...X},k.upholstery.color.set({tan:"#a38b69",saddle:"#854d31",olive:"#59624d",stone:"#b3b1a5",black:"#303332"}[X.cabin]||"#a38b69");let Y=l0(X.finish);We.color.set(ut),We.roughness=Y.roughness,We.metalness=["#727973","#8a9099"].includes(ut.toLowerCase())?.35:["#364b72","#5a6fd6","#8d1c25"].includes(ut.toLowerCase())?.1:0,We.clearcoat=Y.clearcoat,We.clearcoatRoughness=Y.clearcoatRoughness,We.bumpScale=X.finish==="matte"?55e-5:8e-5,tt.copy(We),X.finish==="twotone"&&tt.color.set(/^#[0-9a-f]{6}$/i.test(X.roofColour||"")?X.roofColour:"#141b22"),[We,tt].forEach(ee=>{let me=m.has(f);ee.transparent!==me&&(ee.needsUpdate=!0),ee.transparent=me,ee.opacity=me?.12:1,ee.depthWrite=!me}),k.glass.opacity=m.has(f)||_()?.12:.6,k.glass.envMapIntensity=_()?.12:1,ht.clippingPlanes=m.has(f)?[new Pn(new L(0,-1,0),f==="headliner-cutaway"?1.631:1.48)]:[];for(let ee of["BodyShell","RoofShell","SpareWheel"]){let me=ze.getObjectByName(ee);me&&(me.visible=!["cargo","doors-cutaway","headliner-cutaway","touring"].includes(f))}je.position.set(0,1.48,f==="cargo"?-1.28:-.15),f==="footwell"&&je.position.set(.39,1.08,.25-(ae==="3door"?.17:0)),Je?.setVisible(_()||m.has(f)),je.intensity=_()?.85:["cargo","doors-cutaway","touring"].includes(f)?.95:m.has(f)?.35:0,xt(te),ph();let B=na(H);if(D.position.y=(H.has("lift")?.055:0)+(B-(pe?.3465:.335)),pe)for(let ee of[pe.stockWheels,pe.atWheels,ze.getObjectByName("SpareWheel")])X.partColours?.wheels?Nm(ee,X.partColours.wheels):Lm(ee,X.wheelFinish),Xu(ee,ae==="5door"&&H.has("suzuki_nomade_steelwheel")),Zm(ee,X.tyreType);if(Rm(ze.getObjectByName("Cabin"),{body:ae,seats:H.has("seats"),fabric:X.seatFabric,colour:"#"+k.upholstery.color.getHexString(),touring:H.has("touring"),camp:X.touringMode==="camp"}),sa(H,X),Go(),m.has(f)){let ee=new Set(["doortrim","seats","touring","armrest","mats","steering","ambient","molle","drawer","shelf","mod_reardoor_molle","mod_halfmolly_5door","exploresetups_drawer_5door","armoro_seat_organizer","jimsa_door_pockets","jimsa_dash_tray","jimsa_console_tray","jimsa_cargo_pouch_5door","jimsa_tiedowns","fr_wolfpack","fr_watercan20","arb_airkit","arb_repairkit","kap_fire"]);for(let[me,Te]of Object.entries(globalThis.JimnyPracticalParts||{}))Te.category==="Interior"&&ee.add(me);V.traverse(me=>{let Te=me.userData.finishTarget;Te&&!ee.has(Te)&&(me.visible=!1)})}Yc(k,Be),se.apply([N],X),j=s0(H),Qi(),De=!0,pe&&ae==="5door"&&H.has("suzuki_nomade_steelwheel")&&F.push("suzuki_nomade_steelwheel");let he=F.length;yn.textContent=mt?"Simplified preview \xB7 detailed model unavailable":pe?G?"Stock preview":he?`${he} fitted \xB7 click a part to edit`:vt.dataset.touchMode==="scroll"?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate":"Loading detailed Jimny\u2026",_()&&(yn.textContent="Click an accessory \xB7 drag to look around"),ht.domElement.setAttribute("aria-label",(_()?"Rotatable enclosed Jimny cabin. Drag to look around, Shift-drag to move, scroll to zoom.":Bd)+` ${he} visible modifications.`),vt.dataset.parts=F.join(","),vt.dataset.finish=X.finish||"oem",vt.dataset.grille=X.grille||"oem",vt.dataset.decal=X.decal||"none",T()},Go=function(){V.updateWorldMatrix(!0,!0);let R=V.matrixWorld.clone().invert(),U=new Map;V.traverse(O=>{if(!O.isMesh||O.userData.disposableMaterial||Array.isArray(O.material))return;let H="";for(let Y=O;Y&&Y!==V;Y=Y.parent)if(Y.userData.finishTarget){H=Y.userData.finishTarget;break}let X=H+":"+O.material.uuid+":"+O.castShadow+":"+O.receiveShadow+":"+Object.keys(O.geometry.attributes).sort().join(",");U.has(X)||U.set(X,{material:O.material,objects:[],target:H}),U.get(X).objects.push(O)});for(let{material:O,objects:H,target:X}of U.values()){if(H.length<2)continue;let Y=H.map(ee=>{let me=ee.geometry.index?ee.geometry.toNonIndexed():ee.geometry.clone();return me.applyMatrix4(new Le().multiplyMatrices(R,ee.matrixWorld)),me}),B=Vc(Y,!1);if(Y.forEach(ee=>ee.dispose()),!B)continue;H.forEach(ee=>{ee.geometry.dispose(),ee.removeFromParent()});let he=we(B,O,V);he.userData.finishTarget=X,he.castShadow=H[0].castShadow,he.receiveShadow=H[0].receiveShadow}},Qi=function(){qe.visible=Oe&&ue.headlights,Z.forEach(U=>{U.intensity=0}),k.white.emissiveIntensity=Oe&&ue.headlights?2.8:0,k.ambient.emissiveIntensity=Oe?2:.35,Object.values(Be).forEach(U=>U.emissiveIntensity=0),re.forEach(U=>U.intensity=0),j.forEach((U,O)=>{let H=ah[U],X=re[O];if(!X)return;let Y=U==="dual"&&!ue.dualAmber?"#f1f6ff":H.colour,B=U==="bar"?1.85:U==="work"?1.79:["fog","dual"].includes(U)?.62:U==="combo"?1.22:.87;X.intensity=0,Be[U].color.set(Y),Be[U].emissive.set(Y),Be[U].emissiveIntensity=Oe&&ue.auxiliary?3:0}),document.querySelectorAll("[data-light-toggle]").forEach(U=>{let O=ue[U.dataset.lightToggle];U.setAttribute("aria-pressed",String(O)),U.classList.toggle("active",O)});let R=document.getElementById("lightSelectionStatus");R&&(R.textContent=j.length?j.map(U=>ah[U].label).join(" \xB7 "):"Factory headlamps only. Add a lamp below to compare."),Oe&&(yn.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),De=!0},Js=function(R){Oe=!!R,vt.parentElement.classList.toggle("lighting-night",Oe),document.getElementById("viewNight").classList.toggle("active",Oe),document.getElementById("viewNight").setAttribute("aria-pressed",String(Oe)),Se(),Qi(),Oe||(f==="beam"?_i("orbit"):yn.textContent=G?"Stock preview":F.length?`${F.length} representative parts in 3D`:"Click a part \xB7 drag to rotate"),De=!0},Yn=function(){if(_())return b(),g.target.clone();let R=new Xt,U=[];if(N.updateMatrixWorld(!0),N.traverse(Te=>{if(Te.isMesh){for(let Xe=Te;Xe&&Xe!==N;Xe=Xe.parent)if(!Xe.visible)return;R.expandByObject(Te,!0),U.push(Te)}}),R.isEmpty())return g.target.clone();let O=R.getCenter(new L),H=e.position.clone().sub(g.target).normalize(),X=new L().crossVectors(e.up,H).normalize(),Y=new L().crossVectors(H,X),B=Math.tan(Kt.degToRad(e.fov/2)),he=B*e.aspect,ee=0,me=new L;for(let Te of U){let Xe=Te.geometry.attributes.position;for(let at=0;at<Xe.count;at++){me.fromBufferAttribute(Xe,at).applyMatrix4(Te.matrixWorld).sub(O);let ot=me.dot(H);ee=Math.max(ee,Math.abs(me.dot(X))/he+ot,Math.abs(me.dot(Y))/B+ot)}}return e.position.copy(O).addScaledVector(H,Math.max(g.minDistance,ee*1.06)),e.lookAt(O),O},_i=function(R){R==="beam"&&(R="orbit"),f=R,vt.dataset.cameraMode=_()?"inside":m.has(R)?"cutaway":"exterior",vt.dataset.cameraView=R,S(),oi(e.aspect);let U={front:[0,1.25,6.7],side:[6.6,1.3,0],rear:[-4,1.62,-5.5],orbit:[4.25,1.62,5.35],roof:[3.9,4.2,-4.5],cabin:[3.9,3.4,-3.3],cargo:[0,2.8,-5.5],underside:[3.8,-1.5,4.5],beam:[8,9,-6],"reference-front":[.7,1.45,8],"reference-rear":[-.7,1.45,-8],"reference-side":[-8,1.3,0]};e.position.set(...U[R]||U.orbit),g.target.set(0,.9,0),x(),zn(),_()?M():(g.target.copy(Yn()),x()),R==="cargo"&&(e.position.set(1.65,2.25,-3.4),g.target.set(0,1.01,ae==="3door"?-1.23:-1.4),x()),R==="touring"&&(e.position.set(2.55,3.15,-3.1),g.target.set(0,.93,-.6),x(),yn.textContent="Touring interior \xB7 cutaway inspection"),R==="doors-cutaway"&&(e.position.set(-2.3,2.5,-1.5),g.target.set(0,.91,ae==="3door"?-.17:-.32),x(),yn.textContent="Door cutaway \xB7 optional inspection"),R==="headliner-cutaway"&&(e.position.set(2.3,2.6,-2.8),g.target.set(0,1.46,ae==="3door"?-.64:-.81),x(),yn.textContent="Roof removed \xB7 overhead storage inspection"),(R==="cabin"||R==="cutaway")&&(yn.textContent="Cabin cutaway \xB7 optional inspection, not the normal interior view"),R==="cargo"&&(yn.textContent="Cargo cutaway \xB7 body and spare hidden for inspection, not an open-door simulation"),_()&&(yn.textContent="Click an accessory \xB7 drag to look around"),Oe&&(yn.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),document.querySelectorAll("[data-camera]").forEach(O=>O.classList.toggle("active",O.dataset.camera===R)),De=!0},oi=function(R){e.aspect=R;let U=_()?68:ne==="studio"?28:42;e.fov=Kt.radToDeg(2*Math.atan(Math.tan(Kt.degToRad(U/2))*Math.max(1,1.25/R))),_()&&(e.fov=Math.min(92,e.fov)),e.updateProjectionMatrix()},Ho=function(R){p.drag?.id===R.pointerId&&(p.drag=null)},mh=function(){let R=ht.getSize(new oe),U=ht.getPixelRatio(),O=e.aspect,H=e.fov,X=e.position.clone(),Y=e.quaternion.clone();u(1600,1200,1),oi(4/3),Yn(),d();let B=ht.domElement.toDataURL("image/png");return u(R.x,R.y,U),e.position.copy(X),e.quaternion.copy(Y),oi(O),e.fov=H,e.updateProjectionMatrix(),d(),B},gh=function(R){K||(K={payload:structuredClone(it),stock:G,night:Oe,view:f,position:e.position.clone(),target:g.target.clone(),fov:e.fov,inside:y()}),G=!1,Js(!1),zn(R),_i("orbit")},ra=function(){if(!K)return;let R=K;K=null,G=R.stock,zn(R.payload),_i(R.view),Js(R.night),w(R.inside),e.position.copy(R.position),g.target.copy(R.target),e.fov=R.fov,e.updateProjectionMatrix(),x(),De=!0},C=function(R,U="orbit"){let O={payload:structuredClone(it),stock:G,night:Oe,scenery:ne,view:f,position:e.position.clone(),target:g.target.clone(),fov:e.fov,inside:y(),size:ht.getSize(new oe),ratio:ht.getPixelRatio(),near:e.near,far:e.far,bodyVisible:D.visible};try{if(G=!1,Oe=!1,ne="studio",Se(),zn(R),_i(U==="seat-detail"?"cabin":U==="grille-detail"?"front":U),u(1600,1200,1),oi(4/3),g.target.copy(Yn()),x(),U==="wheel-detail"){let Y=ae==="3door"?1.125:1.295;ht.toneMappingExposure=1.3,D.visible=!1,e.position.set(2.4,.6,Y+1.3),e.lookAt(.705,.36,Y),e.near=.1,e.far=2.7,e.updateProjectionMatrix()}if(U==="grille-detail"){let Y=ae==="3door"?1.79:1.96;e.position.set(.32,1.05,Y+3.15),e.lookAt(0,.93,Y-.1)}if(U==="seat-detail"&&(e.position.set(1.35,1.9,1),e.lookAt(.26,1.01,-.1)),U==="touring"&&(e.position.set(2.55,3.15,-3.1),e.lookAt(0,.94,-.6)),U==="doors"&&(_i("doors-cutaway"),e.position.set(-2.3,2.5,-1.5),e.lookAt(0,.91,-.32)),R.detail){let Y=R.parts?.[0],B=window.JIMNY_MARKET_PRODUCTS?.find(Te=>Te.id===Y),he=B?.visual||Y,ee={exea_cupholder:[[.12,1.35,-.09],[.57,1.17,.25]],exea_phone_mount:[[.02,1.43,-.11],[-.18,1.36,.345]],armoro_console_organizer:[[.02,1.3,-.11],[0,.84,.22]],exea_switch_extensions:[[.015,1.15,.01],[0,.965,.282]],maruti_at_mats:[[.39,1.13,.16],[.4,.698,.49]],skinnyjim_backbone:[[-1.85,1.38,-3.4],[-.49,1.04,-1.88]],skinnyjim_jerry_tray:[[-1.7,1.3,-3.4],[-.5,.91,-1.98]],suzuki_nomade_flatrack:[[2.5,3,-3.1],[0,1.82,-.52]],mod_reardoor_molle:[[0,1.78,-.9],[0,.96,-1.73]],mod_halfmolly_5door:[[1.7,1.85,-2.5],[0,1.23,-1.36]],exploresetups_drawer_5door:[[1.55,2.1,-3.05],[0,.83,-1.43]],rack:[[2.8,3.4,-3.4],[0,1.85,-.3]],msga_roofbasket:[[2.8,3.4,-3.4],[0,1.85,-.3]],prad_roofrack:[[2.8,3.4,-3.4],[0,1.85,-.3]],bull:[[1.65,1.38,4.65],[0,.8,1.9]],autostylenn_bumper_v1:[[1.65,1.32,4.65],[0,.7,1.9]],winch:[[1.4,1.15,4.1],[0,.64,1.97]],snorkel:[[-2.6,1.8,2.05],[-.76,1.36,.8]],led:[[1.4,2.6,3.8],[0,1.95,.55]],pods:[[1.65,1.65,4.2],[0,1.03,1.98]],headlamps:[[.35,1.09,4.85],[0,.91,1.91]],sparecover:[[-1.65,1.5,-4.3],[0,1.08,-1.98]],ladder:[[-2.4,2,-4.5],[-.5,1.2,-1.94]],spoiler:[[-2,2.5,-4],[0,1.65,-1.68]],seats:[[2.45,2.65,1.45],[0,.96,-.18]],molle:[[2.65,2.28,-1.45],[0,.93,-.3]],armrest:[[1.6,2,-1.35],[0,.85,-.18]],lift:[[2.7,.75,2.9],[.45,.52,1.18]],mudflaps:[[2.7,.8,-2.8],[.65,.38,-1.25]],flares:[[3,1.15,2.8],[.7,.79,1.1]]},me=ee[he];me&&ae==="3door"&&["exea_cupholder","exea_phone_mount","armoro_console_organizer","exea_switch_extensions"].includes(he)&&(me=me.map(Te=>[Te[0],Te[1],Te[2]-.17])),B?.lightProfile&&(me=B.lightProfile==="work"?[[1.8,2.7,-4],[0,1.9,-1.45]]:B.lightProfile==="bar"?ee.led:B.lightProfile==="headlamps"?ee.headlamps:ee.pods),me&&(e.position.set(...me[0]),e.lookAt(...me[1]))}d();let H=document.createElement("canvas");H.width=800,H.height=600;let X=H.getContext("2d");return X.imageSmoothingQuality="high",X.drawImage(ht.domElement,0,0,800,600),H.toDataURL("image/webp",.9)}finally{D.visible=O.bodyVisible,e.near=O.near,e.far=O.far,e.updateProjectionMatrix(),G=O.stock,Oe=O.night,ne=O.scenery,f=O.view,S(),zn(O.payload),Se(),w(O.inside),u(O.size.x,O.size.y,O.ratio),oi(O.size.x/O.size.y),e.fov=O.fov,e.updateProjectionMatrix(),e.position.copy(O.position),g.target.copy(O.target),x(),d(),De=!0,document.querySelectorAll("[data-camera]").forEach(H=>H.classList.toggle("active",H.dataset.camera===O.view))}},i=new Si;i.background=new He("#efefed");let e=new qt(28,1,.1,250);e.position.set(4.25,1.62,5.35);let t=f0();vt.dataset.quality=t.id,ht.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio)),ht.shadowMap.enabled=!0,ht.shadowMap.type=ps,ht.toneMapping=Os,ht.toneMappingExposure=.95,ht.domElement.setAttribute("aria-label",Bd),ht.domElement.setAttribute("role","img"),ht.domElement.tabIndex=0,vt.appendChild(ht.domElement);let n=new Hs(ht),s=new ih,r=n.fromScene(s,.04);i.environment=r.texture,i.environmentIntensity=.7,s.dispose(),n.dispose();let a=new Za("#f6f8fa","#747572",1.35);i.add(a);let o=new Fs("#fffdf8",2.2);o.position.set(3,7,5),o.castShadow=!0,o.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),o.shadow.radius=12,o.shadow.blurSamples=t.shadowBlurSamples,Object.assign(o.shadow.camera,{left:-2.8,right:2.8,top:2.8,bottom:-2.8,near:.1,far:20}),o.shadow.bias=-15e-5,o.shadow.normalBias=.004,i.add(o);let l=new ch(ht,new Lt(1,1,{type:Bt,samples:4}));l.addPass(new hh(i,e));let c=new Oo(i,e,1,1);c.blendIntensity=.9,c.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,distanceFallOff:1,scale:1.6,samples:16}),c.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});let h=c.render.bind(c);c.render=(...R)=>{let U=[...de.values()].map(O=>O.skybox).filter(O=>O?.visible);U.forEach(O=>{O.visible=!1}),h(...R),U.forEach(O=>{O.visible=!0})},l.addPass(c),l.addPass(new fh);let f="orbit",g=new nh(e,ht.domElement);g.target.set(0,.9,0),g.enableDamping=!0,g.dampingFactor=.09,g.enablePan=!1,g.minDistance=3.3,g.maxDistance=g0,g.maxPolarAngle=Math.PI*.49,g.minPolarAngle=.15;let v=Um,m=Om,p={yaw:0,pitch:-.18,eye:new L,drag:null};new MutationObserver(T).observe(vt.parentElement,{attributes:!0,attributeFilter:["class"]}),window.matchMedia("(max-width:899px)").addEventListener("change",T),T();let E=new Ee(new on(200,200),new qa({color:"#303536",opacity:.19}));E.rotation.x=-Math.PI/2,E.position.y=-.003,E.receiveShadow=!0,i.add(E);let P=d0(ht,{resolution:t.contactResolution});i.add(P.plane);let I=!0,N=new Ye;i.add(N);let D=new Ye;N.add(D);let z=new Ye;N.add(z);let V=new Ye;D.add(V);let Z=[-1,1].map(R=>{let{x:U,y:O}=ed(R),H=new us("#fff2cd",0,35,.3,.7,1.3);return H.position.set(U,O,1.96),H.target.position.set(U,.05,13),D.add(H,H.target),H}),ue={headlights:!0,auxiliary:!0,dualAmber:!0},$=new Ye;D.add($);let re=Array.from({length:8},()=>{let R=new us("#fff",0,35,.3,.72,1.3);return $.add(R,R.target),R}),le=E.material,Ne=new Ze({color:"#303431",roughness:.96}),Re=new Ye;i.add(Re),Re.visible=!1;let rt=new Ee(new on(5.4,45),new Ze({color:"#424747",roughness:.94}));rt.rotation.x=-Math.PI/2,rt.position.set(0,.002,16),Re.add(rt);for(let R=3;R<36;R+=3)for(let U of[-2.5,2.5]){let O=new Ee(new an(.035,.32,.05),new Ze({color:"#e6e3cd",roughness:.5}));O.position.set(U,.16,R),Re.add(O)}let We=new Ht({color:"#d9b744",roughness:.32,metalness:.025,clearcoat:1,clearcoatRoughness:.035}),tt=We.clone();We.userData.vehiclePaint=!0,tt.userData.vehiclePaint=!0;let se=_m(),k={paint:We,roof:tt,trim:new Ze({color:"#232a2a",roughness:.7}),rubber:new Ze({color:"#1b2020",roughness:.98}),glass:new Ze({color:"#213c45",roughness:.12,metalness:.55,transparent:!0,opacity:.91}),metal:new Ze({color:"#adb4b0",metalness:.8,roughness:.3}),darkmetal:new Ze({color:"#39403b",metalness:.6,roughness:.5}),white:new Ze({color:"#fff7de",emissive:"#fff3c4",emissiveIntensity:.25,roughness:.2}),red:new Ze({color:"#b72d27",emissive:"#951d19",emissiveIntensity:.2}),orange:new Ze({color:"#d88132",roughness:.5}),seat:new Ze({color:"#343a36",roughness:.94}),accent:new Ze({color:"#cb593a",roughness:.7}),canvas:new Ze({color:"#a39a79",roughness:1})},te=new Ye;D.add(te);let ze=new Ye;D.add(ze);let pe=null,Je=null,mt=!1,ae="5door",ge=!1,xe=0,Me=_e("paint");We.bumpMap=Me,We.bumpScale=35e-5,k.rubber.name="TyreRubber",k.rubber.bumpMap=Me,k.rubber.bumpScale=2e-4,k.rubber.color.set("#171919"),k.rubber.roughness=.9,k.glass=new Ht({color:"#101b1d",roughness:.02,metalness:0,ior:1.52,specularIntensity:1,transparent:!0,opacity:.6,depthWrite:!1,side:Vt}),k.lens=new Ht({color:"#e0e7e7",metalness:.05,roughness:.08,clearcoat:1,transparent:!0,opacity:.4,depthWrite:!1}),k.chrome=new Ze({color:"#e8eeed",metalness:1,roughness:.17}),k.reflector=new Ze({color:"#d4d9d7",metalness:1,roughness:.24}),k.brake=new Ze({color:"#737976",metalness:.85,roughness:.46}),k.textured=new Ze({color:"#30362f",roughness:.96,bumpMap:Me,bumpScale:.008}),k.upholstery=new Ze({color:"#a38b69",roughness:.86,bumpMap:Me,bumpScale:6e-4}),k.darkmetal.color.set("#25292b"),k.darkmetal.metalness=.4,k.darkmetal.roughness=.55,k.ambient=new Ze({color:"#386588",emissive:"#2f90d0",emissiveIntensity:.35,roughness:.5}),k.smoked=new Ht({color:"#11191b",roughness:.18,clearcoat:.7,transparent:!0,opacity:.85,depthWrite:!1,side:Vt});let je=new Zi("#f2f3ee",0,2.3,2);je.position.set(0,1.48,-.15),D.add(je);let De=!0,$e=!0,Oe=!1,G=!1,ut="#d9b744",it={parts:[],design:{finish:"oem",decal:"none",grille:"oem"},colour:"#d9b744"},F=[],A={finish:"oem",decal:"none",grille:"oem"},j=[],K=null,ne="studio",be=!1,ve=!1,ce=0,de=new Map,Ve=new L;new MutationObserver(Se).observe(document.documentElement,{attributes:!0,attributeFilter:["data-ui-theme"]});async function Ae(R){let U=Do(R),O=++ce;ne=U,ve=!1,be=!de.has(U),Se();try{if(be){let Y=await new rh().setDataType(Bt).loadAsync(r0(U,t.hdri));if(Y.mapping=Br,Y.needsUpdate=!0,O!==ce){Y.dispose();return}let B=new Hs(ht),he=vs[U].reflectionBand,ee;if(he){let me=new Si;me.background=Y;let Te=20,[Xe,at]=he.elevation.map(ye=>Te*Math.tan(Kt.degToRad(ye))),ot=new Ee(new Ot(Te,Te,at-Xe,96,1,!0),new It({color:new He().setScalar(he.radiance),side:ln}));ot.position.y=(Xe+at)/2,me.add(ot),ee=B.fromScene(me,0,.1,60),ot.geometry.dispose(),ot.material.dispose()}else ee=B.fromEquirectangular(Y);B.dispose(),de.set(U,{texture:Y,environment:ee})}if(O!==ce)return;let H=vs[U],X=de.get(U);if(!X.skybox){let Y=new sh(X.texture,H.height,H.radius,96);Y.position.y=H.height-.004,Y.material.envMapRotation.set(0,H.rotation,0),Y.renderOrder=-1,i.add(Y),X.skybox=Y}be=!1;try{localStorage.setItem("thatsuvmod-scenery",U)}catch{}}catch{if(O!==ce)return;be=!1,ve=!0}Se(),oi(e.aspect),g.target.copy(Yn()),x()}document.querySelectorAll("[data-scenery-select]").forEach(R=>R.addEventListener("change",()=>Ae(R.value)));let Be=Object.fromEntries(Object.entries(ah).map(([R,U])=>[R,new Ze({color:U.colour,emissive:U.colour,emissiveIntensity:0,roughness:.12,metalness:.1})])),qe=new Ye;D.add(qe);let et=document.createElement("canvas");et.width=et.height=64;let q=et.getContext("2d"),Ce=q.createRadialGradient(32,32,0,32,32,32);Ce.addColorStop(0,"rgba(255,251,222,1)"),Ce.addColorStop(.18,"rgba(255,251,222,.6)"),Ce.addColorStop(1,"rgba(255,251,222,0)"),q.fillStyle=Ce,q.fillRect(0,0,64,64);let fe=new _n(et);fe.colorSpace=bt;let Ie=new Tr({map:fe,transparent:!0,opacity:.65,depthWrite:!1,blending:so});for(let R of[-1,1]){let{x:U,y:O}=ed(R),H=new Ra(Ie);H.position.set(U,O,1.94),H.scale.set(.19,.19,1),qe.add(H)}qe.visible=!1;let we=(R,U,O,H=0,X=0,Y=0)=>{let B=new Ee(R,U);return B.position.set(H,X,Y),B.castShadow=!0,B.receiveShadow=!0,O.add(B),B},Q=(R,U,O,H,X,Y,B,he=k.trim)=>we(Math.min(U,O,H)>.065?new zt(U,O,H,2,Math.min(U,O,H)*.14):new an(U,O,H),he,R,X,Y,B),Ue=(R,U,O,H,X,Y,B,he=k.trim,ee="y",me=24)=>{let Te=we(new Ot(U,O,H,me),he,R,X,Y,B);return ee==="x"&&(Te.rotation.z=Math.PI/2),ee==="z"&&(Te.rotation.x=Math.PI/2),Te},ke=(R,U,O=.025,H=k.darkmetal)=>we(new Wn(new pi(U.map(X=>new L(...X)),!1,"centripetal",.1),Math.max(12,U.length*3),O,8,!1),H,R),wt=(R,U,O=.01,H=k.trim)=>{let X=U.map(B=>new L(...B)),Y=new Qn;for(let B=1;B<X.length;B++)Y.add(new $n(X[B-1],X[B]));return we(new Wn(Y,U.length*2,O,6,!1),H,R)};document.addEventListener("click",R=>{let U=R.target.closest("[data-light-toggle]");U&&(ue[U.dataset.lightToggle]=!ue[U.dataset.lightToggle],Qi())}),new ResizeObserver(()=>{let{width:R,height:U}=vt.getBoundingClientRect();!R||!U||(u(R,U),oi(R/U),g.target.copy(Yn()),x(),De=!0)}).observe(vt),new IntersectionObserver(R=>{$e=R[0].isIntersecting,$e&&(De=!0)},{rootMargin:"100px"}).observe(vt),g.addEventListener("change",()=>{De=!0}),ht.domElement.addEventListener("pointerdown",R=>{!_()||vt.dataset.touchMode==="scroll"||(p.drag={id:R.pointerId,x:R.clientX,y:R.clientY,pan:R.shiftKey||R.button===2},ht.domElement.setPointerCapture(R.pointerId),R.preventDefault())}),ht.domElement.addEventListener("pointermove",R=>{let U=p.drag;if(!_()||!U||U.id!==R.pointerId)return;let O=R.clientX-U.x,H=R.clientY-U.y;if(U.x=R.clientX,U.y=R.clientY,U.pan){let X=ae==="3door"?-.17:0;p.eye.x=Kt.clamp(p.eye.x-O*.0012,-.52,.52),p.eye.z=Kt.clamp(p.eye.z+H*.0012,-.78+X,.16+X)}else p.yaw-=O*.004,p.pitch=Kt.clamp(p.pitch+H*.003,-1.15,.8);b(),R.preventDefault()}),Km({canvas:ht.domElement,camera:e,root:N,planes:()=>ht.clippingPlanes,enabled:()=>!!pe&&!ge&&!K&&!G,onPick:R=>window.dispatchEvent(new CustomEvent("jimny-part-pick",{detail:R}))}),ht.domElement.addEventListener("pointerup",Ho),ht.domElement.addEventListener("pointercancel",Ho),ht.domElement.addEventListener("contextmenu",R=>{_()&&R.preventDefault()}),ht.domElement.addEventListener("wheel",R=>{!_()||vt.dataset.touchMode==="scroll"||(R.preventDefault(),e.fov=Kt.clamp(e.fov+R.deltaY*.025,38,94),e.updateProjectionMatrix(),De=!0)},{passive:!1}),ht.domElement.addEventListener("keydown",R=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)){if(R.preventDefault(),_()){p.yaw+=R.key==="ArrowLeft"?.12:R.key==="ArrowRight"?-.12:0,p.pitch=Kt.clamp(p.pitch+(R.key==="ArrowUp"?.08:R.key==="ArrowDown"?-.08:0),-1.15,.8),b();return}let U=R.key==="ArrowLeft"?.16:R.key==="ArrowRight"?-.16:0,O=e.position.clone().sub(g.target);U?O.applyAxisAngle(new L(0,1,0),U):O.multiplyScalar(R.key==="ArrowUp"?.92:1.08),e.position.copy(g.target).add(O),x(),De=!0}}),ht.domElement.addEventListener("webglcontextlost",()=>{yn.textContent="3D paused. Reload to restore the preview. Your build is saved."}),window.addEventListener("jimny-build-change",R=>{G=!1,zn(R.detail)}),window.addEventListener("jimny-preview-mode",R=>{G=R.detail==="stock",zn()}),window.addEventListener("jimny-preview-night",R=>Js(R.detail)),window.addEventListener("jimny-preview-colour",R=>zn({colour:R.detail})),document.addEventListener("click",R=>{let U=R.target.closest("[data-camera]");U&&_i(U.dataset.camera)}),document.querySelectorAll("[data-viewer-zoom]").forEach(R=>R.addEventListener("click",()=>{let U=R.dataset.viewerZoom;if(_()){U==="fit"?(oi(e.aspect),M()):(e.fov=Kt.clamp(e.fov*(U==="in"?.85:1.17),38,94),e.updateProjectionMatrix()),De=!0;return}if(U==="fit")g.target.copy(Yn());else{let O=e.position.clone().sub(g.target),H=Kt.clamp(O.length()*(U==="in"?.8:1.25),g.minDistance,g.maxDistance);e.position.copy(g.target).add(O.setLength(H))}x(),De=!0})),window.jimny3D={ready:!0,snapshot:mh,getState:()=>({modelVersion:pe?"blender-lwb-3":"procedural-fallback",detailedReady:!!pe,assetError:mt,studioEnvironmentReady:de.has("studio")||ve,assemblies:pe?{grilles:Object.entries(pe.grilles).filter(([,R])=>R.visible).map(([R])=>R),wheels:pe.atWheels.visible?"all-terrain":"stock",stockBumper:pe.bumper.visible}:null,parts:[...F],colour:ut,stock:G,night:Oe,lighting:{...ue,profiles:[...j],activeBeams:[...Z,...re].filter(R=>R.intensity>0).length},view:f,design:{...A},touchMode:vt.dataset.touchMode,renderCalls:ht.info.render.calls,triangles:ht.info.render.triangles,meshCount:N.children.reduce((R,U)=>{let O=0;return U.traverse(H=>{H.isMesh&&O++}),R+O},0)}),view:_i};let W=window.jimny3D.getState;Object.assign(window.jimny3D,{beginPreview:gh,endPreview:ra,renderPreset:C}),window.jimny3D.getState=()=>({...W(),quality:t.id,body:ae,modelLoading:ge,surfaceStyles:se.snapshot(),modelVersion:pe?ae==="3door"?"blender-swb-5":"blender-lwb-10":"procedural-fallback",previewing:!!K,scenery:ne,sceneryLoading:be,sceneryFailed:ve,sceneryVisible:!!de.get(ne)?.skybox?.visible,camera:{position:e.position.toArray(),target:g.target.toArray(),fov:e.fov,mode:_()?"enclosed-look-around":m.has(f)?"cutaway":"exterior-orbit",rotate:!0,pan:_(),zoom:!0}}),zn(window.getJimnyBuildState?.()||it);let ie="studio";try{ie=localStorage.getItem("thatsuvmod-scenery")}catch{}Ae(ie),vt.classList.add("ready");async function J(R="5door"){let U=++xe;ge=!0,mt=!1,vt.setAttribute("aria-busy","true"),N.visible=!1,yn.textContent=`Loading ${R==="3door"?"three":"five"}-door Jimny\u2026`;let O=R==="3door"?"assets/models/jimny-swb-blender.glb?v=13c350be7d49":"assets/models/jimny-lwb-blender.glb?v=b6432c83b9c0";try{let H=await n0(O);if(U!==xe){H.scene.traverse(B=>{B.geometry?.dispose(),B.material&&B.material.dispose()});return}let X=["BodyShell","RoofShell","OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille","StockBumper","StockHeadlamps","StockWheels","AllTerrainWheels","Cabin","SpareWheel"],Y=Object.fromEntries(X.map(B=>[B,H.scene.getObjectByName(B)]));if(X.some(B=>!Y[B]))throw new Error("Incomplete Jimny model");if(se.clear(),pe){N.remove(pe.stockWheels,pe.atWheels);for(let B of[pe.stockWheels,pe.atWheels])hm(B),B.traverse(he=>he.geometry?.dispose());pe.sBadgeGeometry?.dispose()}Je?.dispose(),Je=null,xt(ze),pe=null,ae=R,H.scene.traverse(B=>{if(!B.isMesh)return;B.castShadow=!0,B.receiveShadow=!0;let he=B.material;c0(he),he.name==="IntakeShadow"&&(B.castShadow=!1),he.name==="BodyPaint"?(We.vertexColors=!1,B.material=We):he.name==="RoofPaint"?(tt.vertexColors=!1,B.material=tt):he.name==="WindowGlass"?(B.material=k.glass,B.castShadow=!1):he.name==="TyreRubber"?(k.rubber.vertexColors=!!B.geometry.attributes.color,k.rubber.name="TyreRubber",B.material=k.rubber):he.name==="LampEmitter"?B.material=k.white:he.transparent&&(he.depthWrite=!1,he.side=ni,B.castShadow=!1),["BrightChrome","MachinedAlloy","GrilleLettering","OpticalGlass"].includes(he.name)&&(he.vertexColors=!1)}),Em(Y.Cabin);for(let B of X)(["StockWheels","AllTerrainWheels"].includes(B)?N:ze).add(Y[B]);pe={grilles:{oem:Y.OEMGrille,block:Y.BlockGrille,rhino:Y.RhinoGrille,script:Y.ScriptGrille,chrome:Y.GlossGrille,delete:Y.DeleteGrille,classic:Y.ClassicGrille,mesh:Y.MeshGrille},bumper:Y.StockBumper,stockWheels:Y.StockWheels,atWheels:Y.AllTerrainWheels},pe.headlamps=Y.StockHeadlamps,pe.sBadgeGeometry=Qp(Y.OEMGrille,ze.matrixWorld.clone().invert()),Fm(Y.Cabin,pe.sBadgeGeometry,R),Je=Pm(ze,Cm(Y.Cabin,ze,R),R),Je.update({gear:"P",range:"2H",parking:!0,rpm:0,speed:0}),xm(ze,R),pe.paintMeshes=[],Y.BodyShell.traverse(B=>{B.isMesh&&B.material===We&&pe.paintMeshes.push(B)}),Object.values(pe.grilles).forEach(B=>B.traverse(he=>{he.isMesh&&["BrightChrome","GrilleLettering"].includes(he.material.name)&&(he.userData.brightGrilleMaterial=he.material)})),vt.dataset.model="blender",vt.dataset.body=R,N.visible=!0,ge=!1,vt.setAttribute("aria-busy","false"),Z.forEach(B=>B.position.z=R==="3door"?1.79:1.96),zn(),_()?M():(g.target.copy(Yn()),x()),window.dispatchEvent(new CustomEvent("jimny-model-ready",{detail:{body:R}}))}catch{if(U!==xe)return;ge=!1,mt=!0,vt.setAttribute("aria-busy","false"),N.visible=!1,De=!0,yn.textContent="This model could not load. Switch model or reload to retry; your build is saved."}}window.jimny3D.setBody=J,window.addEventListener("jimny-model-change",R=>{ra(),J(R.detail)}),J(window.getJimnyBuildState?.().body||"5door"),ht.setAnimationLoop(()=>{!$e||document.hidden||(x(),De&&(d(),De=!1,vt.dataset.rendered="true"))})}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
