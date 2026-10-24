var cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,au=1,Df=2;var Ja=1,Lf=2,us=3,ti=0,xn=1,Ht=2,jt=0,Ur=1,Za=2,ou=3,lu=4,Xl=5;var ni=100,Nf=101,Ff=102,Uf=103,Of=104,Ds=200,kf=201,Bf=202,zf=203,cu=204,hu=205,$a=206,Gf=207,Qa=208,Hf=209,Vf=210,Wf=211,qf=212,Xf=213,jf=214,vl=0,yl=1,Ml=2,mr=3,Sl=4,wl=5,Tl=6,El=7,jl=0,Yf=1,Kf=2,gi=0,eo=1,to=2,no=3,Ls=4,io=5,so=6,ro=7,Wh="attached",Jf="detached",ao=300,ds=301,Ns=302,Or=303,Yl=304,oo=306,Qt=1e3,Pn=1001,gr=1002,Nt=1003,Kl=1004;var Fs=1005;var Pt=1006,kr=1007;var Dn=1008,uu=1008,Tn=1009,du=1010,fu=1011,Br=1012,Jl=1013,bi=1014,Wn=1015,kt=1016,Zl=1017,$l=1018,fs=1020,pu=35902,mu=35899,gu=1021,bu=1022,tn=1023,Mi=1026,Ei=1027,Ql=1028,ec=1029,ps=1030,tc=1031;var nc=1033,lo=33776,co=33777,ho=33778,uo=33779,ic=35840,sc=35841,rc=35842,ac=35843,oc=36196,lc=37492,cc=37496,hc=37488,uc=37489,fo=37490,dc=37491,fc=37808,pc=37809,mc=37810,gc=37811,bc=37812,xc=37813,_c=37814,vc=37815,yc=37816,Mc=37817,Sc=37818,wc=37819,Tc=37820,Ec=37821,Ac=36492,Rc=36494,Cc=36495,Pc=36283,Ic=36284,po=36285,Dc=36286;var ws=2300,Ts=2301,bl=2302,qh=2303,Xh=2400,jh=2401,Yh=2402,Zf=2500;var xu=0,mo=1,zr=2,$f=3200;var Gr=0,Qf=1,xi="",bt="srgb",rn="srgb-linear",ma="linear",_t="srgb";var xl=7680;var ep=519,tp=512,np=513,ip=514,Lc=515,sp=516,rp=517,Nc=518,ap=519,_u=35044;var vu="300 es",di=2e3,br=2001;function o0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function l0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){let i=xr("canvas");return i.style.display="block",i}var Od={},_r=null;function ga(...i){let e="THREE."+i.shift();_r?_r("log",e,...i):console.log(e,...i)}function lp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=lp(i);let e="THREE."+i.shift();if(_r)_r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=lp(i);let e="THREE."+i.shift();if(_r)_r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ss(...i){let e=i.join(" ");e in Od||(Od[e]=!0,Ye(...i))}function cp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hp={[vl]:yl,[Ml]:Tl,[Sl]:El,[mr]:wl,[yl]:vl,[Tl]:Ml,[El]:Sl,[wl]:mr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,ua=Math.PI/180,Es=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function yu(i,e){return(i%e+e)%e}function c0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function h0(i,e,t){return i!==e?(t-i)/(e-i):0}function da(i,e,t){return(1-t)*i+t*e}function u0(i,e,t,n){return da(i,e,1-Math.exp(-t*n))}function d0(i,e=1){return e-Math.abs(yu(i,e*2)-e)}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function m0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function g0(i,e){return i+Math.random()*(e-i)}function b0(i){return i*(.5-Math.random())}function x0(i){i!==void 0&&(kd=i);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(i){return i*ua}function v0(i){return i*Es}function y0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function M0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function S0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nn={DEG2RAD:ua,RAD2DEG:Es,generateUUID:Jn,clamp:ut,euclideanModulo:yu,mapLinear:c0,inverseLerp:h0,lerp:da,damp:u0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:b0,seededRandom:x0,degToRad:_0,radToDeg:v0,isPowerOfTwo:y0,ceilPowerOfTwo:M0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:w0,normalize:Tt,denormalize:ui},se=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gh=new L,Bd=new pn,ot=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],w=s[4],b=s[7],v=s[2],x=s[5],E=s[8];return r[0]=a*y+o*M+l*v,r[3]=a*m+o*w+l*x,r[6]=a*p+o*b+l*E,r[1]=c*y+h*M+u*v,r[4]=c*m+h*w+u*x,r[7]=c*p+h*b+u*E,r[2]=d*y+f*M+g*v,r[5]=d*m+f*w+g*x,r[8]=d*p+f*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bh=new ot,zd=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){let i={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rn]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:zd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:zd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var ft=T0();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=xr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xh(s[a].image)):r.push(xh(s[a]))}else r=xh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var A0=0,_h=new L,an=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Pt,a=Dn,o=tn,l=Tn,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Jn(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qt:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qt:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ao;an.DEFAULT_ANISOTROPY=1;var Mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,v=(p+1)/2,x=(h+d)/4,E=(u+y)/4,S=(g+m)/4;return w>b&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=x/n,r=E/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=x/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=E/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new an(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ba=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ue=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Qi.crossVectors(n,zn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Qi.crossVectors(n,zn)),Qi.normalize(),Go.crossVectors(zn,Qi),s[0]=Qi.x,s[4]=Go.x,s[8]=zn.x,s[1]=Qi.y,s[5]=Go.y,s[9]=zn.y,s[2]=Qi.z,s[6]=Go.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],w=n[7],b=n[11],v=n[15],x=s[0],E=s[4],S=s[8],_=s[12],R=s[1],C=s[5],D=s[9],N=s[13],U=s[2],z=s[6],Y=s[10],Z=s[14],he=s[3],$=s[7],ne=s[11],re=s[15];return r[0]=a*x+o*R+l*U+c*he,r[4]=a*E+o*C+l*z+c*$,r[8]=a*S+o*D+l*Y+c*ne,r[12]=a*_+o*N+l*Z+c*re,r[1]=h*x+u*R+d*U+f*he,r[5]=h*E+u*C+d*z+f*$,r[9]=h*S+u*D+d*Y+f*ne,r[13]=h*_+u*N+d*Z+f*re,r[2]=g*x+y*R+m*U+p*he,r[6]=g*E+y*C+m*z+p*$,r[10]=g*S+y*D+m*Y+p*ne,r[14]=g*_+y*N+m*Z+p*re,r[3]=M*x+w*R+b*U+v*he,r[7]=M*E+w*C+b*z+v*$,r[11]=M*S+w*D+b*Y+v*ne,r[15]=M*_+w*N+b*Z+v*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*d,w=o*f-c*u,b=o*d-l*u,v=a*f-c*h,x=a*d-l*h,E=a*u-o*h;return t*(y*M-m*w+p*b)-n*(g*M-m*v+p*x)+s*(g*w-y*v+p*E)-r*(g*b-y*x+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,w=t*l-s*a,b=t*c-r*a,v=n*l-s*o,x=n*c-r*o,E=s*c-r*l,S=h*y-u*g,_=h*m-d*g,R=h*p-f*g,C=u*m-d*y,D=u*p-f*y,N=d*p-f*m,U=M*N-w*D+b*C+v*R-x*_+E*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/U;return e[0]=(o*N-l*D+c*C)*z,e[1]=(s*D-n*N-r*C)*z,e[2]=(y*E-m*x+p*v)*z,e[3]=(d*x-u*E-f*v)*z,e[4]=(l*R-a*N-c*_)*z,e[5]=(t*N-s*R+r*_)*z,e[6]=(m*b-g*E-p*w)*z,e[7]=(h*E-d*b+f*w)*z,e[8]=(a*D-o*R+c*S)*z,e[9]=(n*R-t*D-r*S)*z,e[10]=(g*x-y*b+p*M)*z,e[11]=(u*b-h*x-f*M)*z,e[12]=(o*_-a*C-l*S)*z,e[13]=(t*C-n*_+s*S)*z,e[14]=(y*w-g*v-m*M)*z,e[15]=(h*v-u*w+d*M)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,M=l*c,w=l*h,b=l*u,v=n.x,x=n.y,E=n.z;return s[0]=(1-(y+p))*v,s[1]=(f+b)*v,s[2]=(g-w)*v,s[3]=0,s[4]=(f-b)*x,s[5]=(1-(d+p))*x,s[6]=(m+M)*x,s[7]=0,s[8]=(g+w)*E,s[9]=(m-M)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,u=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=di,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===di)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=di,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===di)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new L,li=new Ue,R0=new L(0,0,0),C0=new L(1,1,1),Qi=new L,Go=new L,zn=new L,Hd=new Ue,Vd=new pn,Mn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},P0=0,Wd=new L,$s=new pn,Di=new Ue,Ho=new L,Qr=new L,I0=new L,D0=new pn,qd=new L(1,0,0),Xd=new L(0,1,0),jd=new L(0,0,1),Yd={type:"added"},L0={type:"removed"},Qs={type:"childadded",child:null},vh={type:"childremoved",child:null},St=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Mn,n=new pn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ot}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Qr,Ho,this.up):Di.lookAt(Ho,Qr,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Di),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new L(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},N0={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=yu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yh(a,r,e+1/3),this.g=yh(a,r,e),this.b=yh(a,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ft.workingToColorSpace(yn.copy(this),e),Math.round(ut(yn.r*255,0,255))*65536+Math.round(ut(yn.g*255,0,255))*256+Math.round(ut(yn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=bt){ft.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Vo);let n=da(es.h,Vo.h,t),s=da(es.s,Vo.s,t),r=da(es.l,Vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new He;He.NAMES=up;var Gi=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new L,Li=new L,Mh=new L,Ni=new L,er=new L,tr=new L,Kd=new L,Sh=new L,wh=new L,Th=new L,Eh=new Mt,Ah=new Mt,Rh=new Mt,ki=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Li.subVectors(n,t),Mh.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Li),l=ci.dot(Mh),c=Li.dot(Li),h=Li.dot(Mh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Eh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Eh.fromBufferAttribute(e,t),Ah.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eh,r.x),a.addScaledVector(Ah,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Li.subVectors(e,t),ci.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ci.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;er.subVectors(s,n),tr.subVectors(r,n),Sh.subVectors(e,n);let l=er.dot(Sh),c=tr.dot(Sh);if(l<=0&&c<=0)return t.copy(n);wh.subVectors(e,s);let h=er.dot(wh),u=tr.dot(wh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(er,a);Th.subVectors(e,r);let f=er.dot(Th),g=tr.dot(Th);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(tr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Kd,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),qo.subVectors(this.max,ea),nr.subVectors(e.a,ea),ir.subVectors(e.b,ea),sr.subVectors(e.c,ea),ts.subVectors(ir,nr),ns.subVectors(sr,ir),_s.subVectors(nr,sr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-_s.z,_s.y,ts.z,0,-ts.x,ns.z,0,-ns.x,_s.z,0,-_s.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-_s.y,_s.x,0];return!Ch(t,nr,ir,sr,qo)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,nr,ir,sr,qo))?!1:(Xo.crossVectors(ts,ns),t=[Xo.x,Xo.y,Xo.z],Ch(t,nr,ir,sr,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new L,new L,new L,new L,new L,new L,new L,new L],hi=new L,Wo=new qt,nr=new L,ir=new L,sr=new L,ts=new L,ns=new L,_s=new L,ea=new L,qo=new L,Xo=new L,vs=new L;function Ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vs.fromArray(i,r);let o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bi=F0();function F0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function U0(i){Math.abs(i)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),i=ut(i,-65504,65504),Bi.floatView[0]=i;let e=Bi.uint32View[0],t=e>>23&511;return Bi.baseTable[t]+((e&8388607)>>Bi.shiftTable[t])}function O0(i){let e=i>>10;return Bi.uint32View[0]=Bi.mantissaTable[Bi.offsetTable[e]+(i&1023)]+Bi.exponentTable[e],Bi.floatView[0]}var xa=class{static toHalfFloat(e){return U0(e)}static fromHalfFloat(e){return O0(e)}},Zt=new L,jo=new se,k0=0,$t=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var _a=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var va=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Oe=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},B0=new qt,ta=new L,Ph=new L,Un=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Ph)),this.expandByPoint(ta.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},z0=0,Yn=new Ue,Ih=new St,rr=new L,Gn=new qt,na=new qt,fn=new L,lt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o0(e)?va:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Gn.min,na.min),Gn.expandByPoint(fn),fn.addVectors(Gn.max,na.max),Gn.expandByPoint(fn)):(Gn.expandByPoint(na.min),Gn.expandByPoint(na.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),fn.add(rr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new L,l[S]=new L;let c=new L,h=new L,u=new L,d=new se,f=new se,g=new se,y=new L,m=new L;function p(S,_,R){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[S].add(y),o[_].add(y),o[R].add(y),l[S].add(m),l[_].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let S=0,_=M.length;S<_;++S){let R=M[S],C=R.start,D=R.count;for(let N=C,U=C+D;N<U;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let w=new L,b=new L,v=new L,x=new L;function E(S){v.fromBufferAttribute(s,S),x.copy(v);let _=o[S];w.copy(_),w.sub(v.multiplyScalar(v.dot(_))).normalize(),b.crossVectors(x,_);let C=b.dot(l[S])<0?-1:1;a.setXYZW(S,w.x,w.y,w.z,C)}for(let S=0,_=M.length;S<_;++S){let R=M[S],C=R.start,D=R.count;for(let N=C,U=C+D;N<U;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new $t(d,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Rn=new L,rs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dh=new L,G0=new L,H0=new ot,Cn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dh.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||H0.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},V0=0,mn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Ur,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=hu,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,ia=new L,or=new L,lr=new L,cr=new se,sa=new se,dp=new Ue,Yo=new L,ra=new L,Ko=new L,Jd=new se,Lh=new se,Zd=new se,ya=class extends St{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new As(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new rs(n,3,0,!1)),ar.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jo(Yo.set(-.5,-.5,0),lr,a,or,s,r),Jo(ra.set(.5,-.5,0),lr,a,or,s,r),Jo(Ko.set(.5,.5,0),lr,a,or,s,r),Jd.set(0,0),Lh.set(1,0),Zd.set(1,1);let o=e.ray.intersectTriangle(Yo,ra,Ko,!1,ia);if(o===null&&(Jo(ra.set(-.5,.5,0),lr,a,or,s,r),Lh.set(0,1),o=e.ray.intersectTriangle(Yo,Ko,ra,!1,ia),o===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:ki.getInterpolation(ia,Yo,ra,Ko,Jd,Lh,Zd,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,s,r){cr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(sa.x=r*cr.x-s*cr.y,sa.y=s*cr.x+r*cr.y):sa.copy(cr),i.copy(e),i.x+=sa.x,i.y+=sa.y,i.applyMatrix4(dp)}var Ui=new L,Nh=new L,Zo=new L,$o=new L,Si=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nh.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),$o.copy(this.origin).sub(Nh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Zo),o=$o.dot(this.direction),l=-$o.dot(Zo),c=$o.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nh).addScaledVector(Zo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,b=Math.abs(l),v=Math.abs(c),x=Math.abs(h),E,S,_,R,C,D,N,U,z,Y,Z,he;if(b>=v&&b>=x?(_=l,D=u,z=g,he=p,l>=0?(E=c,S=h,R=d,C=f,N=y,U=m,Y=M,Z=w):(E=h,S=c,R=f,C=d,N=m,U=y,Y=w,Z=M)):v>=x?(_=c,D=d,z=y,he=M,c>=0?(E=h,S=l,R=f,C=u,N=m,U=g,Y=w,Z=p):(E=l,S=h,R=u,C=f,N=g,U=m,Y=p,Z=w)):(_=h,D=f,z=m,he=w,h>=0?(E=l,S=c,R=u,C=d,N=g,U=y,Y=p,Z=M):(E=c,S=l,R=d,C=u,N=y,U=g,Y=M,Z=p)),_===0)return null;let $=E/_,ne=S/_,re=1/_,Pe=R-$*D,Re=C-ne*D,je=N-$*z,Ze=U-ne*z,rt=Y-$*he,O=Z-ne*he,q=rt*Ze-O*je,_e=Pe*O-Re*rt,pe=je*Re-Ze*Pe;if(s){if(q<0||_e<0||pe<0)return null}else if((q<0||_e<0||pe<0)&&(q>0||_e>0||pe>0))return null;let De=q+_e+pe;if(De===0)return null;let Je=re*(q*D+_e*z+pe*he);return(De>0?Je<0:Je>0)?null:this.at(Je/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$d=new Ue,ys=new Si,Qo=new Un,Qd=new L,el=new L,tl=new L,nl=new L,Fh=new L,il=new L,ef=new L,sl=new L,Te=class extends St{constructor(e=new lt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Fh.fromBufferAttribute(u,e),a?il.addScaledVector(Fh,h):il.addScaledVector(Fh.sub(t),h))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Qo.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Qo,Qd)===null||ys.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&($d.copy(r).invert(),ys.copy(e.ray).applyMatrix4($d),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,v=w;b<v;b+=3){let x=o.getX(b),E=o.getX(b+1),S=o.getX(b+2);s=rl(this,p,e,n,c,h,u,x,E,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=rl(this,a,e,n,c,h,u,M,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,v=w;b<v;b+=3){let x=b,E=b+1,S=b+2;s=rl(this,p,e,n,c,h,u,x,E,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,w=m+1,b=m+2;s=rl(this,a,e,n,c,h,u,M,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function W0(i,e,t,n,s,r,a,o){let l;if(e.side===xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;sl.copy(o),sl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:i}}function rl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,el),i.getVertexPosition(l,tl),i.getVertexPosition(c,nl);let h=W0(i,e,t,n,el,tl,nl,ef);if(h){let u=new L;ki.getBarycoord(ef,el,tl,nl,u),s&&(h.uv=ki.getInterpolatedAttribute(s,o,l,c,u,new se)),r&&(h.uv1=ki.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=ki.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};ki.getNormal(el,tl,nl,d.normal),h.face=d,h.barycoord=u}return h}var aa=new Mt,tf=new Mt,nf=new Mt,q0=new Mt,sf=new Ue,al=new L,Uh=new Un,rf=new Ue,Oh=new Si,Ma=class extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(s),e.ray.intersectsSphere(Uh)!==!1&&(rf.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(rf),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;tf.fromBufferAttribute(s.attributes.skinIndex,e),nf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(aa.copy(t),t.set(0,0,0,0)):(aa.set(...t,1),t.set(0,0,0)),aa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=nf.getComponent(r);if(a!==0){let o=tf.getComponent(r);sf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(q0.copy(aa).applyMatrix4(sf),a)}}return t.isVector4&&(t.w=aa.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sn=class extends an{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,h=Nt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},af=new Ue,X0=new Ue,Sa=class i{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:X0;af.multiplyMatrices(o,t[r]),af.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Sn(t,e,e,tn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ye("Skeleton: No bone found with UUID:",r),a=new wr),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Hi=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Ue,of=new Ue,ol=[],lf=new qt,j0=new Ue,oa=new Te,la=new Un,Vi=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,j0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),lf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),la.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(la)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(n),e.ray.intersectsSphere(la)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),of.multiplyMatrices(n,hr),oa.matrixWorld=of,oa.raycast(e,ol);for(let a=0,o=ol.length;a<o;a++){let l=ol[a];l.instanceId=r,l.object=this,t.push(l)}ol.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(s*this.count),s,this.count,Ql,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new Un,Y0=new se(.5,.5),ll=new L,Tr=class{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,f-h,p-g,v-M).normalize(),s[1].setComponents(c+a,f+h,p+g,v+M).normalize(),s[2].setComponents(c+o,f+u,p+y,v+w).normalize(),s[3].setComponents(c-o,f-u,p-y,v-w).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,v-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,v-b).normalize(),t===di)s[5].setComponents(c+l,f+d,p+m,v+b).normalize();else if(t===br)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=Y0.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pl=new L,Il=new L,cf=new Ue,ca=new Si,cl=new Un,kh=new L,hf=new L,Rs=class extends St{constructor(e=new lt,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pl.fromBufferAttribute(t,s-1),Il.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pl.distanceTo(Il);e.setAttribute("lineDistance",new Oe(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;cf.copy(s).invert(),ca.copy(e.ray).applyMatrix4(cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),w=hl(this,e,ca,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=hl(this,e,ca,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=hl(this,e,ca,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=hl(this,e,ca,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Pl.fromBufferAttribute(o,s),Il.fromBufferAttribute(o,r),t.distanceSqToSegment(Pl,Il,kh,hf)>n)return;kh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(kh);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var uf=new L,df=new L,wa=class extends Rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uf.fromBufferAttribute(t,s),df.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uf.distanceTo(df);e.setAttribute("lineDistance",new Oe(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends Rs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ar=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ff=new Ue,Kh=new Si,ul=new Un,dl=new L,Ea=class extends St{constructor(e=new lt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;ff.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);dl.fromBufferAttribute(u,m),pf(dl,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)dl.fromBufferAttribute(u,g),pf(dl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pf(i,e,t,n,s,r,a){let o=Kh.distanceSqToPoint(i);if(o<t){let l=new L;Kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Aa=class extends an{constructor(e=[],t=ds,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bn=class extends an{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends an{constructor(e,t,n=bi,s,r,a,o=Nt,l=Nt,c,h=Mi,u=1){if(h!==Mi&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dl=class extends wi{constructor(e,t=bi,n=ds,s,r,a=Nt,o=Nt,l,c=Mi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function g(y,m,p,M,w,b,v,x,E,S,_){let R=b/E,C=v/S,D=b/2,N=v/2,U=x/2,z=E+1,Y=S+1,Z=0,he=0,$=new L;for(let ne=0;ne<Y;ne++){let re=ne*C-N;for(let Pe=0;Pe<z;Pe++){let Re=Pe*R-D;$[y]=Re*M,$[m]=re*w,$[p]=U,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[p]=x>0?1:-1,h.push($.x,$.y,$.z),u.push(Pe/E),u.push(1-ne/S),Z+=1}}for(let ne=0;ne<S;ne++)for(let re=0;re<E;re++){let Pe=d+re+z*ne,Re=d+re+z*(ne+1),je=d+(re+1)+z*(ne+1),Ze=d+(re+1)+z*ne;l.push(Pe,Re,Ze),l.push(Re,je,Ze),he+=6}o.addGroup(f,he,_),f+=he,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Rr=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,y=s+1,m=new L,p=new L;for(let M=0;M<=g;M++){let w=0,b=0,v=0,x=0;if(M<=n){let _=M/n,R=_*Math.PI/2;b=-h-e*Math.cos(R),v=e*Math.sin(R),x=-e*Math.cos(R),w=_*u}else if(M<=n+r){let _=(M-n)/r;b=-h+_*t,v=e,x=0,w=u+_*d}else{let _=(M-n-r)/n,R=_*Math.PI/2;b=h+e*Math.sin(R),v=e*Math.cos(R),x=e*Math.sin(R),w=u+d+_*u}let E=Math.max(0,Math.min(1,w/f)),S=0;M===0?S=.5/s:M===g&&(S=-.5/s);for(let _=0;_<=s;_++){let R=_/s,C=R*Math.PI*2,D=Math.sin(C),N=Math.cos(C);p.x=-v*N,p.y=b,p.z=v*D,o.push(p.x,p.y,p.z),m.set(-v*N,x,v*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,E)}if(M>0){let _=(M-1)*y;for(let R=0;R<s;R++){let C=_+R,D=_+R+1,N=M*y+R,U=M*y+R+1;a.push(C,D,N),a.push(D,U,N)}}}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ca=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function M(){let b=new L,v=new L,x=0,E=(t-e)/n;for(let S=0;S<=r;S++){let _=[],R=S/r,C=R*(t-e)+e;for(let D=0;D<=s;D++){let N=D/s,U=N*l+o,z=Math.sin(U),Y=Math.cos(U);v.x=C*z,v.y=-R*n+m,v.z=C*Y,u.push(v.x,v.y,v.z),b.set(z,E,Y).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-R),_.push(g++)}y.push(_)}for(let S=0;S<s;S++)for(let _=0;_<r;_++){let R=y[_][S],C=y[_+1][S],D=y[_+1][S+1],N=y[_][S+1];(e>0||_!==0)&&(h.push(R,C,N),x+=3),(t>0||_!==r-1)&&(h.push(C,D,N),x+=3)}c.addGroup(p,x,0),p+=x}function w(b){let v=g,x=new se,E=new L,S=0,_=b===!0?e:t,R=b===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let C=g;for(let D=0;D<=s;D++){let U=D/s*l+o,z=Math.cos(U),Y=Math.sin(U);E.x=_*Y,E.y=m*R,E.z=_*z,u.push(E.x,E.y,E.z),d.push(0,R,0),x.x=z*.5+.5,x.y=Y*.5*R+.5,f.push(x.x,x.y),g++}for(let D=0;D<s;D++){let N=v+D,U=C+D;b===!0?h.push(U,U+1,N):h.push(U+1,U,N),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new Ue;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ll=class extends Cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Mu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var mf=new L,gf=new L,Bh=new Mu,zh=new Mu,Gh=new Mu,pi=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gf.subVectors(s[0],s[1]).add(s[0]),c=gf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),zh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Gh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Bh.calc(l),zh.calc(l),Gh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function K0(i,e){let t=1-i;return t*t*e}function J0(i,e){return 2*(1-i)*i*e}function Z0(i,e){return i*i*e}function fa(i,e,t,n){return K0(i,e)+J0(i,t)+Z0(i,n)}function $0(i,e){let t=1-i;return t*t*t*e}function Q0(i,e){let t=1-i;return 3*t*t*i*e}function eg(i,e){return 3*(1-i)*i*i*e}function tg(i,e){return i*i*i*e}function pa(i,e,t,n,s){return $0(i,e)+Q0(i,t)+eg(i,n)+tg(i,s)}var Pa=class extends Hn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,s.x,r.x,a.x,o.x),pa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Hn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,s.x,r.x,a.x,o.x),pa(e,s.y,r.y,a.y,o.y),pa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends Hn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zn=class extends Hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends Hn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y),fa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(bf(o,l.x,c.x,h.x,u.x),bf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:pi,CubicBezierCurve:Pa,CubicBezierCurve3:Nl,EllipseCurve:Cr,LineCurve:Ia,LineCurve3:Zn,QuadraticBezierCurve:Da,QuadraticBezierCurve3:La,SplineCurve:Na}),$n=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fl[s.type]().fromJSON(s))}return this}},en=class extends $n{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ia(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Da(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Pa(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ot=class extends en{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new en().fromJSON(s))}return this}};function ng(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=fp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=og(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Fa(r,a,t,o,l,c,0),a}function fp(i,e,t,n,s){let r;if(s===xg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=xf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=xf(a/n|0,i[a],i[a+1],r);return r&&Pr(r,r.next)&&(Oa(r),r=r.next),r}function Cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Pr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sg(i,n,s,r):ig(i)){e.push(l.i,i.i,c.i),Oa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rg(Cs(i),e),Fa(i,e,t,n,s,r,2)):a===2&&ag(i,e,t,n,s,r):Fa(Cs(i),e,t,n,s,r,1);break}}}function ig(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ha(s,o,r,l,a,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),p=Jh(f,g,e,t,n),M=Jh(y,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=p&&b&&b.z<=M;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ha(o,h,l,u,c,d,w.x,w.y)&&Ut(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ha(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ha(o,h,l,u,c,d,w.x,w.y)&&Ut(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ha(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function rg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Pr(n,s)&&mp(n,t,t.next,s)&&Ua(n,s)&&Ua(s,n)&&(e.push(n.i,t.i,s.i),Oa(t),Oa(t.next),t=i=s),t=t.next}while(t!==i);return Cs(t)}function ag(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mg(a,o)){let l=gp(a,o);a=Cs(a,a.next),l=Cs(l,l.next),Fa(a,e,t,n,s,r,0),Fa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function og(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=fp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pg(c))}s.sort(lg);for(let r=0;r<s.length;r++)t=cg(s[r],t);return t}function lg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cg(i,e){let t=hg(i,e);if(!t)return e;let n=gp(t,i);return Cs(n,n.next),Cs(t,t.next)}function hg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Pr(i,t))return t;do{if(Pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ua(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ug(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ug(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function dg(i,e,t,n){let s=i;do s.z===0&&(s.z=Jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fg(s)}function fg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ha(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&pp(i,e,t,n,s,r,a,o)}function mg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gg(i,e)&&(Ua(i,e)&&Ua(e,i)&&bg(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Pr(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Pr(i,e){return i.x===e.x&&i.y===e.y}function mp(i,e,t,n){let s=pl(Ut(i,e,t)),r=pl(Ut(i,e,n)),a=pl(Ut(t,n,i)),o=pl(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&fl(i,t,e)||r===0&&fl(i,n,e)||a===0&&fl(t,i,n)||o===0&&fl(t,e,n))}function fl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pl(i){return i>0?1:i<0?-1:0}function gg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ua(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function bg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gp(i,e){let t=Zh(i.i,i.x,i.y),n=Zh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xf(i,e,t,n){let s=Zh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var $h=class{static triangulate(e,t,n=2){return ng(e,t,n)}},Kn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];_f(e),vf(n,e);let a=e.length;t.forEach(_f);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,vf(n,t[l]);let o=$h.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _f(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wn=class i extends lt{constructor(e=new Ot([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Oe(s,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:_g,w,b=!1,v,x,E,S;if(p){w=p.getSpacedPoints(h),b=!0,d=!1;let ce=p.isCatmullRomCurve3?p.closed:!1;v=p.computeFrenetFrames(h,ce),x=new L,E=new L,S=new L}d||(m=0,f=0,g=0,y=0);let _=o.extractPoints(c),R=_.shape,C=_.holes;if(!Kn.isClockWise(R)){R=R.reverse();for(let ce=0,me=C.length;ce<me;ce++){let xe=C[ce];Kn.isClockWise(xe)&&(C[ce]=xe.reverse())}}function N(ce){let xe=10000000000000001e-36,be=ce[0];for(let Me=1;Me<=ce.length;Me++){let Fe=Me%ce.length,We=ce[Fe],Le=We.x-be.x,ze=We.y-be.y,G=Le*Le+ze*ze,ht=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(be.x),Math.abs(be.y)),at=xe*ht*ht;if(G<=at){ce.splice(Fe,1),Me--;continue}be=We}}N(R),C.forEach(N);let U=C.length,z=R;for(let ce=0;ce<U;ce++){let me=C[ce];R=R.concat(me)}function Y(ce,me,xe){return me||st("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(me,xe)}let Z=R.length;function he(ce,me,xe){let be,Me,Fe,We=ce.x-me.x,Le=ce.y-me.y,ze=xe.x-ce.x,G=xe.y-ce.y,ht=We*We+Le*Le,at=We*G-Le*ze;if(Math.abs(at)>Number.EPSILON){let F=Math.sqrt(ht),T=Math.sqrt(ze*ze+G*G),j=me.x-Le/F,K=me.y+We/F,te=xe.x-G/T,ge=xe.y+ze/T,we=((te-j)*G-(ge-K)*ze)/(We*G-Le*ze);be=j+We*we-ce.x,Me=K+Le*we-ce.y;let ie=be*be+Me*Me;if(ie<=2)return new se(be,Me);Fe=Math.sqrt(ie/2)}else{let F=!1;We>Number.EPSILON?ze>Number.EPSILON&&(F=!0):We<-Number.EPSILON?ze<-Number.EPSILON&&(F=!0):Math.sign(Le)===Math.sign(G)&&(F=!0),F?(be=-Le,Me=We,Fe=Math.sqrt(ht)):(be=We,Me=Le,Fe=Math.sqrt(ht/2))}return new se(be/Fe,Me/Fe)}let $=[];for(let ce=0,me=z.length,xe=me-1,be=ce+1;ce<me;ce++,xe++,be++)xe===me&&(xe=0),be===me&&(be=0),$[ce]=he(z[ce],z[xe],z[be]);let ne=[],re,Pe=$.concat();for(let ce=0,me=U;ce<me;ce++){let xe=C[ce];re=[];for(let be=0,Me=xe.length,Fe=Me-1,We=be+1;be<Me;be++,Fe++,We++)Fe===Me&&(Fe=0),We===Me&&(We=0),re[be]=he(xe[be],xe[Fe],xe[We]);ne.push(re),Pe=Pe.concat(re)}let Re;if(m===0)Re=Kn.triangulateShape(z,C);else{let ce=[],me=[];for(let xe=0;xe<m;xe++){let be=xe/m,Me=f*Math.cos(be*Math.PI/2),Fe=g*Math.sin(be*Math.PI/2)+y;for(let We=0,Le=z.length;We<Le;We++){let ze=Y(z[We],$[We],Fe);_e(ze.x,ze.y,-Me),be===0&&ce.push(ze)}for(let We=0,Le=U;We<Le;We++){let ze=C[We];re=ne[We];let G=[];for(let ht=0,at=ze.length;ht<at;ht++){let F=Y(ze[ht],re[ht],Fe);_e(F.x,F.y,-Me),be===0&&G.push(F)}be===0&&me.push(G)}}Re=Kn.triangulateShape(ce,me)}let je=Re.length,Ze=g+y;for(let ce=0;ce<Z;ce++){let me=d?Y(R[ce],Pe[ce],Ze):R[ce];b?(E.copy(v.normals[0]).multiplyScalar(me.x),x.copy(v.binormals[0]).multiplyScalar(me.y),S.copy(w[0]).add(E).add(x),_e(S.x,S.y,S.z)):_e(me.x,me.y,0)}for(let ce=1;ce<=h;ce++)for(let me=0;me<Z;me++){let xe=d?Y(R[me],Pe[me],Ze):R[me];b?(E.copy(v.normals[ce]).multiplyScalar(xe.x),x.copy(v.binormals[ce]).multiplyScalar(xe.y),S.copy(w[ce]).add(E).add(x),_e(S.x,S.y,S.z)):_e(xe.x,xe.y,u/h*ce)}for(let ce=m-1;ce>=0;ce--){let me=ce/m,xe=f*Math.cos(me*Math.PI/2),be=g*Math.sin(me*Math.PI/2)+y;for(let Me=0,Fe=z.length;Me<Fe;Me++){let We=Y(z[Me],$[Me],be);_e(We.x,We.y,u+xe)}for(let Me=0,Fe=C.length;Me<Fe;Me++){let We=C[Me];re=ne[Me];for(let Le=0,ze=We.length;Le<ze;Le++){let G=Y(We[Le],re[Le],be);b?_e(G.x,G.y+w[h-1].y,w[h-1].x+xe):_e(G.x,G.y,u+xe)}}}rt(),O();function rt(){let ce=s.length/3;if(d){let me=0,xe=Z*me;for(let be=0;be<je;be++){let Me=Re[be];pe(Me[2]+xe,Me[1]+xe,Me[0]+xe)}me=h+m*2,xe=Z*me;for(let be=0;be<je;be++){let Me=Re[be];pe(Me[0]+xe,Me[1]+xe,Me[2]+xe)}}else{for(let me=0;me<je;me++){let xe=Re[me];pe(xe[2],xe[1],xe[0])}for(let me=0;me<je;me++){let xe=Re[me];pe(xe[0]+Z*h,xe[1]+Z*h,xe[2]+Z*h)}}n.addGroup(ce,s.length/3-ce,0)}function O(){let ce=s.length/3,me=0;q(z,me),me+=z.length;for(let xe=0,be=C.length;xe<be;xe++){let Me=C[xe];q(Me,me),me+=Me.length}n.addGroup(ce,s.length/3-ce,1)}function q(ce,me){let xe=ce.length;for(;--xe>=0;){let be=xe,Me=xe-1;Me<0&&(Me=ce.length-1);for(let Fe=0,We=h+m*2;Fe<We;Fe++){let Le=Z*Fe,ze=Z*(Fe+1),G=me+be+Le,ht=me+Me+Le,at=me+Me+ze,F=me+be+ze;De(G,ht,at,F)}}}function _e(ce,me,xe){l.push(ce),l.push(me),l.push(xe)}function pe(ce,me,xe){Je(ce),Je(me),Je(xe);let be=s.length/3,Me=M.generateTopUV(n,s,be-3,be-2,be-1);$e(Me[0]),$e(Me[1]),$e(Me[2])}function De(ce,me,xe,be){Je(ce),Je(me),Je(be),Je(me),Je(xe),Je(be);let Me=s.length/3,Fe=M.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);$e(Fe[0]),$e(Fe[1]),$e(Fe[3]),$e(Fe[1]),$e(Fe[2]),$e(Fe[3])}function Je(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function $e(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fl[s.type]().fromJSON(s)),new i(n,e.options)}},_g={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-g),new se(y,1-p)]:[new se(o,1-l),new se(h,1-u),new se(f,1-g),new se(m,1-p)]}};function vg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var mi=class i extends lt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new se,f=new L,g=new L,y=new L,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=t;M++){let w=n+M*h*s,b=Math.sin(w),v=Math.cos(w);for(let x=0;x<=e.length-1;x++){u.x=e[x].x*b,u.y=e[x].y,u.z=e[x].x*v,a.push(u.x,u.y,u.z),d.x=M/t,d.y=x/(e.length-1),o.push(d.x,d.y);let E=l[3*x+0]*b,S=l[3*x+1],_=l[3*x+0]*v;c.push(E,S,_)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let b=w+M*e.length,v=b,x=b+e.length,E=b+e.length+1,S=b+1;r.push(v,x,S),r.push(E,S,x)}this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ln=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let w=0;w<c;w++){let b=w*u-r;g.push(b,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let w=M+c*p,b=M+c*(p+1),v=M+1+c*(p+1),x=M+1+c*p;f.push(w,b,x),f.push(b,v,x)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ir=class i extends lt{constructor(e=new Ot([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(r,3)),this.setAttribute("uv",new Oe(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Kn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Kn.isClockWise(M)===!0&&(g[m]=M.reverse())}let y=Kn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=y.length;m<p;m++){let M=y[m],w=M[0]+u,b=M[1]+u,v=M[2]+u;n.push(w,b,v),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return yg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function yg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var In=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,b=a+w*o,v=e*Math.cos(b),x=Math.sqrt(e*e-v*v),E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){let _=S/t,R=s+_*r;u.x=-x*Math.cos(R),u.y=v,u.z=x*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(_+E,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let w=h[p][M+1],b=h[p][M],v=h[p+1][M],x=h[p+1][M+1];(p!==0||a>0)&&f.push(w,b,x),(p!==n-1||l<Math.PI)&&f.push(b,v,x)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xt=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,b=(s+1)*y+m;l.push(p,M,b),l.push(M,w,b)}this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Vn=class i extends lt{constructor(e=new La(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new se,h=new L,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(d,3)),this.setAttribute("uv",new Oe(f,2));function y(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),p()}function m(w){h=e.getPointAt(w/t,h);let b=a.normals[w],v=a.binormals[w];for(let x=0;x<=s;x++){let E=x/s*Math.PI*2,S=Math.sin(E),_=-Math.cos(E);l.x=_*b.x+S*v.x,l.y=_*b.y+S*v.y,l.z=_*b.z+S*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let v=(s+1)*(w-1)+(b-1),x=(s+1)*w+(b-1),E=(s+1)*w+b,S=(s+1)*(w-1)+b;g.push(v,x,S),g.push(x,E,S)}}function M(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ka=class extends mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new He(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(yf(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=Us(i[t]);for(let s in n)e[s]=n[s]}return e}function yf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Su(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var ii={clone:Us,merge:En},Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends Dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gt=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ba=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},za=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=jl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lr=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ul=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _l(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Tg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Eg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ol=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:r=e,o=2*t-n;break;case Yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=e,l=2*n-t;break;case Yh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+M*a[c+v]+w*a[l+v]+b*a[u+v];return r}},kl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zl=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],w=u[p+1],b=e*d+g*2,v=h[b],x=h[b+1],E=Rg(n,t,M,v,s);r[g]=bp(E,y,w,x,m)}return r}};function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ag(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ag(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),_l(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case qh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;_l(this.settings)&&(Sf(this.settings.inTangents,e),Sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){st("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&l0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,_l(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ts;var Wi=class extends On{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ws;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Ga.prototype.ValueTypeName="color";var qi=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};qi.prototype.ValueTypeName="number";var Gl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xi=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}};Xi.prototype.ValueTypeName="quaternion";Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends On{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=ws;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};as.prototype.ValueTypeName="vector";var Ha=class{constructor(e="",t=-1,n=[],s=Zf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Tg(l);l=Mf(l,1,h),c=Mf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Cg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Ga;case"quaternion":return Xi;case"bool":case"boolean":return Wi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Pg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cg(i.type);if(i.times===void 0){let n=[],s=[];Eg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),_l(i.settings)&&(t.settings={inTangents:ss(i.settings.inTangents,Float32Array),outTangents:ss(i.settings.outTangents,Float32Array)}),t}var yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Hl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new Hl,Qn=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},Qh=class extends Error{constructor(e,t){super(e),this.response=t}},os=class extends Qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=yi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:s});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:w,value:b})=>{if(w)p.close();else{y+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let x=0,E=h.length;x<E;x++){let S=h[x];S.onProgress&&S.onProgress(v)}p.enqueue(b),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Qh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{yi.add(`file:${e}`,c);let h=Oi[e];delete Oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,Vl=class extends Qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ur.get(a);u===void 0&&(u=[],ur.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=xr("img");function l(){h(),t&&t(this);let u=ur.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),yi.remove(`image:${e}`);let d=ur.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Va=class extends Qn{constructor(e){super(e)}load(e,t,n,s){let r=new an,a=new Vl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ps=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hh=new Ue,Tf=new L,Ef=new L,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=new L,gl=new pn,vi=new L,qa=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new L,Af=new se,Rf=new se,Wt=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Af,Rf),t.subVectors(Rf,Af)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eu=class extends Nr{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Es*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ls=class extends Ps{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tu=class extends Nr{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},Yi=class extends Ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ei=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nu=class extends Nr{constructor(){super(new ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Vh=new WeakMap,Xa=class extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Vh.has(a)===!0?(s&&s(Vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return yi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Vh.set(l,c),yi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=-90,fr=1,Wl=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new Wt(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new Wt(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new Wt(dr,fr,e,t);o.layers=this.layers,this.add(o);let l=new Wt(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Wt(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ql=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ja=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ig.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ig(){this._document.hidden===!1&&this.reset()}var wu="\\[\\]\\.:\\/",Dg=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",Lg="[^"+wu.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Fg=/(WCOD+)?/.source.replace("WCOD",Lg),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),kg=new RegExp("^"+Ng+Fg+Ug+Og+"$"),Bg=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(e){let t=kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=iu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H1=new Float32Array(1);var Cf=new Ue,Ya=class{constructor(e,t,n=0,s=1/0){this.ray=new Si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(e,t=!0,n=[]){return su(e,this,n,t),n.sort(Pf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)su(e[s],this,n,t);return n.sort(Pf),n}};function Pf(i,e){return i.distance-e.distance}function su(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)su(r[a],e,t,!0)}}var Fr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ru=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Ka=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Eu(i,e,t,n){let s=zg(n);switch(t){case gu:return i*e;case Ql:return i*e/s.components*s.byteLength;case ec:return i*e/s.components*s.byteLength;case ps:return i*e*2/s.components*s.byteLength;case tc:return i*e*2/s.components*s.byteLength;case bu:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case nc:return i*e*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case lc:case hc:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:case fo:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case Tn:case du:return{byteLength:1,components:1};case Br:case fu:case kt:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case bi:case Jl:case Wn:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
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
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,db=`#define PI 3.141592653589793
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
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pb=`#ifdef USE_GRADIENTMAP
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
}`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zb=`PhysicalMaterial material;
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
#endif`,Gb=`uniform sampler2D dfgLUT;
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
}`,Hb=`
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qb=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,$x=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,l_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,h_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,f_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,b_=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:qg,alphamap_pars_fragment:Xg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:Jg,batching_pars_vertex:Zg,batching_vertex:$g,begin_vertex:Qg,beginnormal_vertex:eb,bsdfs:tb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:sb,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:ab,clipping_planes_vertex:ob,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:hb,color_vertex:ub,common:db,cube_uv_reflection_fragment:fb,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:bb,emissivemap_pars_fragment:xb,colorspace_fragment:_b,colorspace_pars_fragment:vb,envmap_fragment:yb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:Sb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Fb,envmap_vertex:Tb,fog_vertex:Eb,fog_pars_vertex:Ab,fog_fragment:Rb,fog_pars_fragment:Cb,gradientmap_pars_fragment:Pb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Lb,lights_pars_begin:Nb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Ob,lights_phong_fragment:kb,lights_phong_pars_fragment:Bb,lights_physical_fragment:zb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Hb,lights_fragment_maps:Vb,lights_fragment_end:Wb,lightprobes_pars_fragment:qb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Yb,logdepthbuf_vertex:Kb,map_fragment:Jb,map_pars_fragment:Zb,map_particle_fragment:$b,map_particle_pars_fragment:Qb,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ax,normal_fragment_begin:ox,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:bx,packing:xx,premultiplied_alpha_fragment:_x,project_vertex:vx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Dx,specularmap_fragment:Lx,specularmap_pars_fragment:Nx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ux,transmission_fragment:Ox,transmission_pars_fragment:kx,uv_pars_fragment:Bx,uv_pars_vertex:zx,uv_vertex:Gx,worldpos_vertex:Hx,background_vert:Vx,background_frag:Wx,backgroundCube_vert:qx,backgroundCube_frag:Xx,cube_vert:jx,cube_frag:Yx,depth_vert:Kx,depth_frag:Jx,distance_vert:Zx,distance_frag:$x,equirect_vert:Qx,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:b_,points_frag:x_,shadow_vert:__,shadow_frag:v_,sprite_vert:y_,sprite_frag:M_},Ne={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ri={basic:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:En([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:En([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new He(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:En([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:En([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:En([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:En([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:En([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:En([Ne.lights,Ne.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ri.physical={uniforms:En([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Fc={r:0,b:0,g:0},S_=new Ue,Gp=new ot;Gp.set(-1,0,0,0,1,0,0,0,1);function w_(i,e,t,n,s,r){let a=new He(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let b=M.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(M){let w=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,w){let b=f(w);b&&(b.isCubeTexture||b.mapping===oo)?(c===void 0&&(c=new Te(new on(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Us(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gp),c.material.toneMapped=ft.getTransfer(b.colorSpace)!==_t,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Te(new ln(2,2),new Dt({name:"BackgroundMaterial",uniforms:Us(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ft.getTransfer(b.colorSpace)!==_t,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Fc,Su(i)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function T_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,D,N,U,z){let Y=!1,Z=u(C,U,N,D);r!==Z&&(r=Z,c(r.object)),Y=f(C,U,N,z),Y&&g(C,U,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(C,D,N,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,N,U){let z=U.wireframe===!0,Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);let Z=C.isInstancedMesh===!0?C.id:0,he=Y[Z];he===void 0&&(he={},Y[Z]=he);let $=he[N.id];$===void 0&&($={},he[N.id]=$);let ne=$[z];return ne===void 0&&(ne=d(l()),$[z]=ne),ne}function d(C){let D=[],N=[],U=[];for(let z=0;z<t;z++)D[z]=0,N[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:U,object:C,attributes:{},index:null}}function f(C,D,N,U){let z=r.attributes,Y=D.attributes,Z=0,he=N.getAttributes();for(let $ in he)if(he[$].location>=0){let re=z[$],Pe=Y[$];if(Pe===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Pe=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Pe=C.instanceColor)),re===void 0||re.attribute!==Pe||Pe&&re.data!==Pe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==U}function g(C,D,N,U){let z={},Y=D.attributes,Z=0,he=N.getAttributes();for(let $ in he)if(he[$].location>=0){let re=Y[$];re===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));let Pe={};Pe.attribute=re,re&&re.data&&(Pe.data=re.data),z[$]=Pe,Z++}r.attributes=z,r.attributesNum=Z,r.index=U}function y(){let C=r.newAttributes;for(let D=0,N=C.length;D<N;D++)C[D]=0}function m(C){p(C,0)}function p(C,D){let N=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;N[C]=1,U[C]===0&&(i.enableVertexAttribArray(C),U[C]=1),z[C]!==D&&(i.vertexAttribDivisor(C,D),z[C]=D)}function M(){let C=r.newAttributes,D=r.enabledAttributes;for(let N=0,U=D.length;N<U;N++)D[N]!==C[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function w(C,D,N,U,z,Y,Z){Z===!0?i.vertexAttribIPointer(C,D,N,z,Y):i.vertexAttribPointer(C,D,N,U,z,Y)}function b(C,D,N,U){y();let z=U.attributes,Y=N.getAttributes(),Z=D.defaultAttributeValues;for(let he in Y){let $=Y[he];if($.location>=0){let ne=z[he];if(ne===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ne!==void 0){let re=ne.normalized,Pe=ne.itemSize,Re=e.get(ne);if(Re===void 0)continue;let je=Re.buffer,Ze=Re.type,rt=Re.bytesPerElement,O=Ze===i.INT||Ze===i.UNSIGNED_INT||ne.gpuType===Jl;if(ne.isInterleavedBufferAttribute){let q=ne.data,_e=q.stride,pe=ne.offset;if(q.isInstancedInterleavedBuffer){for(let De=0;De<$.locationSize;De++)p($.location+De,q.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let De=0;De<$.locationSize;De++)m($.location+De);i.bindBuffer(i.ARRAY_BUFFER,je);for(let De=0;De<$.locationSize;De++)w($.location+De,Pe/$.locationSize,Ze,re,_e*rt,(pe+Pe/$.locationSize*De)*rt,O)}else{if(ne.isInstancedBufferAttribute){for(let q=0;q<$.locationSize;q++)p($.location+q,ne.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let q=0;q<$.locationSize;q++)m($.location+q);i.bindBuffer(i.ARRAY_BUFFER,je);for(let q=0;q<$.locationSize;q++)w($.location+q,Pe/$.locationSize,Ze,re,Pe*rt,Pe/$.locationSize*q*rt,O)}}else if(Z!==void 0){let re=Z[he];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv($.location,re);break;case 3:i.vertexAttrib3fv($.location,re);break;case 4:i.vertexAttrib4fv($.location,re);break;default:i.vertexAttrib1fv($.location,re)}}}}M()}function v(){_();for(let C in n){let D=n[C];for(let N in D){let U=D[N];for(let z in U){let Y=U[z];for(let Z in Y)h(Y[Z].object),delete Y[Z];delete U[z]}}delete n[C]}}function x(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let N in D){let U=D[N];for(let z in U){let Y=U[z];for(let Z in Y)h(Y[Z].object),delete Y[Z];delete U[z]}}delete n[C.id]}function E(C){for(let D in n){let N=n[D];for(let U in N){let z=N[U];if(z[C.id]===void 0)continue;let Y=z[C.id];for(let Z in Y)h(Y[Z].object),delete Y[Z];delete z[C.id]}}}function S(C){for(let D in n){let N=n[D],U=C.isInstancedMesh===!0?C.id:0,z=N[U];if(z!==void 0){for(let Y in z){let Z=z[Y];for(let he in Z)h(Z[he].object),delete Z[he];delete z[Y]}delete N[U],Object.keys(N).length===0&&delete n[D]}}}function _(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:_,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:x,releaseStatesOfObject:S,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function E_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function A_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let S=E===kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Tn&&E!==Wn&&!S&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:v,samples:x}}function R_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Cn,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,b=p.clippingState||null;l.value=b,b=h(g,d,w,f);for(let v=0;v!==w;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==y;++w,b+=4)a.copy(u[w]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Vr=4,C_=6,P_=20,I_=256,go=new ei,_p=new He,Au=null,Ru=0,Cu=0,Pu=!1,D_=new L,Os=new L,ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=D_}=r;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:kt,format:tn,colorSpace:rn,depthBuffer:!1},s=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L_(r)),this._blurMaterial=F_(r,e,t),this._ggxMaterial=N_(r,e,t)}return s}_compileMaterial(e){let t=new Te(new lt,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,s,r){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_p),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new on,new Ft({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(_p),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Hr(s,b*v,w>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ds||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Vr?n-g+Vr:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Hr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,go),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Hr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,go)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Vr?s-this._lodMax+Vr:0),d=4*(this._cubeSize-h);Hr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,go)}};function L_(i){let e=[],t=[],n=i,s=i-Vr+1+C_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,w=p>2?0:-1,b=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(b,f*d*p);for(let v=0;v<d;v++){let x=h[v*2]*2-1,E=h[v*2+1]*2-1;p===0?Os.set(1,E,x):p===1?Os.set(-x,1,-E):p===2?Os.set(-x,E,1):p===3?Os.set(-1,E,-x):p===4?Os.set(-x,-1,E):Os.set(x,E,-1),Os.toArray(y,(p*d+v)*f)}}let m=new lt;m.setAttribute("position",new $t(g,f)),m.setAttribute("outputDirection",new $t(y,f)),t.push(new Te(m,null)),n>Vr&&n--}return{lodMeshes:t,sizeLods:e}}function vp(i,e,t){let n=new It(i,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function N_(i,e,t){return new Dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function F_(i,e,t){return new Dt({name:"SphericalGaussianBlur",defines:{SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function yp(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Mp(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Oc=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:jt});r.uniforms.tEquirect.value=t;let a=new Te(s,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Pt),new Wl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function U_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Or||f===Yl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Oc(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Or||f===Yl,y=f===ds||f===Ns;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new ks(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new ks(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Or?d.mapping=ds:f===Yl&&(d.mapping=Ns),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function O_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ss("WebGLRenderer: "+n+" extension not supported."),s}}}function k_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let w=0,b=M.length;w<b;w+=3){let v=M[w+0],x=M[w+1],E=M[w+2];d.push(v,x,x,E,E,v)}}else{let M=g.array;y=g.version;for(let w=0,b=M.length/3-1;w<b;w+=3){let v=w+0,x=w+1,E=w+2;d.push(v,x,x,E,E,v)}}let m=new(g.count>=65535?va:_a)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function B_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function z_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function G_(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let b=o.attributes.position.count*w,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let x=new Float32Array(b*v*4*u),E=new ba(x,b,v,u);E.type=Wn,E.needsUpdate=!0;let S=w*4;for(let R=0;R<u;R++){let C=m[R],D=p[R],N=M[R],U=b*v*4*R;for(let z=0;z<C.count;z++){let Y=z*S;f===!0&&(s.fromBufferAttribute(C,z),x[U+Y+0]=s.x,x[U+Y+1]=s.y,x[U+Y+2]=s.z,x[U+Y+3]=0),g===!0&&(s.fromBufferAttribute(D,z),x[U+Y+4]=s.x,x[U+Y+5]=s.y,x[U+Y+6]=s.z,x[U+Y+7]=0),y===!0&&(s.fromBufferAttribute(N,z),x[U+Y+8]=s.x,x[U+Y+9]=s.y,x[U+Y+10]=s.z,x[U+Y+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new se(b,v)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var V_={[eo]:"LINEAR_TONE_MAPPING",[to]:"REINHARD_TONE_MAPPING",[no]:"CINEON_TONE_MAPPING",[Ls]:"ACES_FILMIC_TONE_MAPPING",[so]:"AGX_TONE_MAPPING",[ro]:"NEUTRAL_TONE_MAPPING",[io]:"CUSTOM_TONE_MAPPING"};function W_(i,e,t,n,s,r){let a=new It(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new lt;c.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Te(c,h),d=new ei(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(b,v){a.setSize(b,v),o!==null&&o.setSize(b,v),l!==null&&l.setSize(b,v);for(let x=0;x<M.length;x++){let E=M[x];E.setSize&&E.setSize(b,v)}},this.setEffects=function(b){M=b,w=M.length>0&&M[0].isRenderPass===!0;let v=a.width,x=a.height;M.length>0&&o===null&&(o=new It(v,x,{type:kt,depthBuffer:!1,stencilBuffer:!1}),l=new It(v,x,{type:kt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let S=M[E];S.setSize&&S.setSize(v,x)}},this.begin=function(b,v){if(y||b.toneMapping===gi&&M.length===0)return!1;if(p=v,v!==null){let x=v.width,E=v.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return w===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return w},this.end=function(b,v){b.toneMapping=m,y=!0;let x=a,E=o;for(let S=0;S<M.length;S++){let _=M[S];_.enabled!==!1&&(_.render(b,E,x,v),_.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},ft.getTransfer(f)===_t&&(h.defines.SRGB_TRANSFER="");let S=V_[g];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(p),b.render(u,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Hp=new an,Lu=new wi(1,1),Vp=new ba,Wp=new Cl,qp=new Aa,Sp=[],wp=[],Tp=new Float32Array(16),Ep=new Float32Array(9),Ap=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zc(i,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function K_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Ap.set(n),i.uniformMatrix2fv(this.addr,!1,Ap),hn(t,n)}}function J_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Ep.set(n),i.uniformMatrix3fv(this.addr,!1,Ep),hn(t,n)}}function Z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Tp.set(n),i.uniformMatrix4fv(this.addr,!1,Tp),hn(t,n)}}function $_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lu.compareFunction=t.isReversedDepthBuffer()?Nc:Lc,r=Lu):r=Hp,t.setTexture2D(e||r,s)}function ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wp,s)}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qp,s)}function cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vp,s)}function hv(i){switch(i){case 5126:return q_;case 35664:return X_;case 35665:return j_;case 35666:return Y_;case 35674:return K_;case 35675:return J_;case 35676:return Z_;case 5124:case 35670:return $_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(i,e){i.uniform1fv(this.addr,e)}function dv(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function fv(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function pv(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function mv(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gv(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bv(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function vv(i,e){i.uniform3iv(this.addr,e)}function yv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function Sv(i,e){i.uniform2uiv(this.addr,e)}function wv(i,e){i.uniform3uiv(this.addr,e)}function Tv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lu:a=Hp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Av(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wp,r[a])}function Rv(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qp,r[a])}function Cv(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vp,r[a])}function Pv(i){switch(i){case 5126:return uv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return bv;case 5124:case 35670:return xv;case 35667:case 35671:return _v;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return wv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}var Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hv(t.type)}},Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}},Uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function Rp(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){let n=i.name,s=n.length;for(Iu.lastIndex=0;;){let r=Iu.exec(n),a=Iu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rp(t,c===void 0?new Nu(o,i,e):new Fu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Uu(o),Rp(t,u)),t=u}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Iv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Cp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Dv=37297,Lv=0;function Nv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pp=new ot;function Fv(i){ft._getMatrix(Pp,ft.workingColorSpace,i);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case ma:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ip(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nv(i.getShaderSource(e),o)}else return r}function Uv(i,e){let t=Fv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ov={[eo]:"Linear",[to]:"Reinhard",[no]:"Cineon",[Ls]:"ACESFilmic",[so]:"AgX",[ro]:"Neutral",[io]:"Custom"};function kv(i,e){let t=Ov[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new L;function Bv(){ft.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Gv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xo(i){return i!==""}function Dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(i){return i.replace(Vv,qv)}var Wv=new Map;function qv(i,e){let t=mt[e];if(t===void 0){let n=Wv.get(e);if(n!==void 0)t=mt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ou(t)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(i){return i.replace(Xv,jv)}function jv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Yv={[Ja]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function Kv(i){return Yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[ds]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function Zv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $v={[Ns]:"ENVMAP_MODE_REFRACTION"};function Qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$v[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ey={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Yf]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ey[i.combine]||"ENVMAP_BLENDING_NONE"}function ny(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Kv(t),c=Zv(t),h=Qv(t),u=ty(t),d=ny(t),f=zv(t),g=Gv(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(m=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?mt.tonemapping_pars_fragment:"",t.toneMapping!==gi?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),a=Ou(a),a=Dp(a,t),a=Lp(a,t),o=Ou(o),o=Dp(o,t),o=Lp(o,t),a=Np(a),o=Np(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+a,b=M+p+o,v=Cp(s,s.VERTEX_SHADER,w),x=Cp(s,s.FRAGMENT_SHADER,b);s.attachShader(y,v),s.attachShader(y,x),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(v)||"",U=s.getShaderInfoLog(x)||"",z=D.trim(),Y=N.trim(),Z=U.trim(),he=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,x);else{let ne=Ip(s,v,"vertex"),re=Ip(s,x,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ne+`
`+re)}else z!==""?Ye("WebGLProgram: Program Info Log:",z):(Y===""||Z==="")&&($=!1);$&&(C.diagnostics={runnable:he,programLog:z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(v),s.deleteShader(x),S=new Wr(s,y),_=Hv(s,y)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,Dv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=x,this}var sy=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}};function ry(i){return i===ps||i===fo||i===po}function ay(i,e,t,n,s,r){let a=new yr,o=new ku,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,_,R,C,D,N){let U=C.fog,z=D.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,Z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,he=e.get(S.envMap||Y,Z),$=he&&he.mapping===oo?he.image.height:null,ne=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let re=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=re!==void 0?re.length:0,Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let je,Ze,rt,O;if(ne){let yt=Ri[ne];je=yt.vertexShader,Ze=yt.fragmentShader}else{je=S.vertexShader,Ze=S.fragmentShader;let yt=o.getVertexShaderStage(S),xt=o.getFragmentShaderStage(S);o.update(S,yt,xt),rt=yt.id,O=xt.id}let q=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),pe=D.isInstancedMesh===!0,De=D.isBatchedMesh===!0,Je=!!S.map,$e=!!S.matcap,ce=!!he,me=!!S.aoMap,xe=!!S.lightMap,be=!!S.bumpMap&&S.wireframe===!1,Me=!!S.normalMap,Fe=!!S.displacementMap,We=!!S.emissiveMap,Le=!!S.metalnessMap,ze=!!S.roughnessMap,G=S.anisotropy>0,ht=S.clearcoat>0,at=S.dispersion>0,F=S.retroreflectivity>0,T=S.iridescence>0,j=S.sheen>0,K=S.transmission>0,te=G&&!!S.anisotropyMap,ge=ht&&!!S.clearcoatMap,we=ht&&!!S.clearcoatNormalMap,ie=ht&&!!S.clearcoatRoughnessMap,fe=T&&!!S.iridescenceMap,Ee=T&&!!S.iridescenceThicknessMap,Ge=j&&!!S.sheenColorMap,Ae=j&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ke=!!S.specularColorMap,qe=!!S.specularIntensityMap,it=K&&!!S.transmissionMap,W=K&&!!S.thicknessMap,Ie=!!S.gradientMap,de=!!S.alphaMap,ve=S.alphaTest>0,le=!!S.alphaHash,ue=!!S.extensions,Be=gi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Be=i.toneMapping);let Ve={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:Ze,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:O,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:De,batchingColor:De&&D._colorsTexture!==null,instancing:pe,instancingColor:pe&&D.instanceColor!==null,instancingMorph:pe&&D.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:$e,envMap:ce,envMapMode:ce&&he.mapping,envMapCubeUVHeight:$,aoMap:me,lightMap:xe,bumpMap:be,normalMap:Me,displacementMap:Fe,emissiveMap:We,normalMapObjectSpace:Me&&S.normalMapType===Qf,normalMapTangentSpace:Me&&S.normalMapType===Gr,packedNormalMap:Me&&S.normalMapType===Gr&&ry(S.normalMap.format),metalnessMap:Le,roughnessMap:ze,anisotropy:G,anisotropyMap:te,clearcoat:ht,clearcoatMap:ge,clearcoatNormalMap:we,clearcoatRoughnessMap:ie,dispersion:at,retroreflection:F,iridescence:T,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:j,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:Se,specularColorMap:ke,specularIntensityMap:qe,transmission:K,transmissionMap:it,thicknessMap:W,gradientMap:Ie,opaque:S.transparent===!1&&S.blending===Ur&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:ve,alphaHash:le,combine:S.combine,mapUv:Je&&g(S.map.channel),aoMapUv:me&&g(S.aoMap.channel),lightMapUv:xe&&g(S.lightMap.channel),bumpMapUv:be&&g(S.bumpMap.channel),normalMapUv:Me&&g(S.normalMap.channel),displacementMapUv:Fe&&g(S.displacementMap.channel),emissiveMapUv:We&&g(S.emissiveMap.channel),metalnessMapUv:Le&&g(S.metalnessMap.channel),roughnessMapUv:ze&&g(S.roughnessMap.channel),anisotropyMapUv:te&&g(S.anisotropyMap.channel),clearcoatMapUv:ge&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(S.sheenRoughnessMap.channel),specularMapUv:Se&&g(S.specularMap.channel),specularColorMapUv:ke&&g(S.specularColorMap.channel),specularIntensityMapUv:qe&&g(S.specularIntensityMap.channel),transmissionMapUv:it&&g(S.transmissionMap.channel),thicknessMapUv:W&&g(S.thicknessMap.channel),alphaMapUv:de&&g(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||G),vertexNormals:!!z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Je||de),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||z.attributes.normal===void 0&&Me===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Re,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:We&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)_.push(R),_.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(p(_,S),M(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function p(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numSunLights),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numSunLightShadows),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function M(S,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function w(S){let _=f[S.type],R;if(_){let C=Ri[_];R=ii.clone(C.uniforms)}else R=S.uniforms;return R}function b(S,_){let R=h.get(_);return R!==void 0?++R.usedTimes:(R=new iy(i,_,S,s),c.push(R),h.set(_,R)),R}function v(S){if(--S.usedTimes===0){let _=c.indexOf(S);c[_]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function x(S){o.remove(S)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:v,releaseShaderCache:x,programs:c,dispose:E}}function oy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Op(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let w=o(d,f,g,y,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(d,f,g,y,m,p){let M=o(d,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||ly),n.length>1&&n.sort(f||Up),s.length>1&&s.sort(f||Up)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Op,i.set(n,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dy=0;function fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function py(i){let e=new hy,t=uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ue,a=new Ue;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,w=0,b=0,v=0,x=0,E=0,S=0,_=0,R=0;c.sort(fy);for(let D=0,N=c.length;D<N;D++){let U=c[D],z=U.color,Y=U.intensity,Z=U.distance,he=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ps?he=U.shadow.map.texture:he=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*Y,u+=z.g*Y,d+=z.b*Y;else if(U.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(U.sh.coefficients[$],Y);R++}else if(U.isSunLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,re=t.get(U);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=he;let Pe=ne.getViewportCount();for(let Re=0;Re<Pe;Re++)n.sunShadowMatrix[y+Re]=ne.getMatrix(Re),n.sunShadowCascade[y+Re]=ne._cascadeData[Re];y+=Pe,g++}n.sun[f]=$,f++}else if(U.isDirectionalLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ne=U.shadow,re=t.get(U);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=he,n.directionalShadowMatrix[m]=U.shadow.matrix,v++}n.directional[m]=$,m++}else if(U.isSpotLight){let $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(z).multiplyScalar(Y),$.distance=Z,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,n.spot[M]=$;let ne=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,ne.updateMatrices(U),U.castShadow&&_++),n.spotLightMatrix[M]=ne.matrix,U.castShadow){let re=t.get(U);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.spotShadow[M]=re,n.spotShadowMap[M]=he,E++}M++}else if(U.isRectAreaLight){let $=e.get(U);$.color.copy(z).multiplyScalar(Y),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=$,w++}else if(U.isPointLight){let $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){let ne=U.shadow,re=t.get(U);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=he,n.pointShadowMatrix[p]=U.shadow.matrix,x++}n.point[p]=$,p++}else if(U.isHemisphereLight){let $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(Y),$.groundColor.copy(U.groundColor).multiplyScalar(Y),n.hemi[b]=$,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==w||C.hemiLength!==b||C.numSunShadows!==g||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==S||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+S-_,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=M,C.rectAreaLength=w,C.hemiLength=b,C.numSunShadows=g,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=S,C.numLightProbes=R,n.version=dy++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let b=c[M];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function kp(i){let e=new py(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function my(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kp(i),e.set(s,[o])):r>=a.length?(o=new kp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
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
}`,xy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],_y=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Bp=new Ue,bo=new L,Du=new L;function vy(i,e,t){let n=new Tr,s=new se,r=new se,a=new Mt,o=new Lr,l=new Ul,c={},h=t.maxTextureSize,u={[ti]:xn,[xn]:ti,[Ht]:Ht},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:gy,fragmentShader:by}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let p=this.type;this.render=function(x,E,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Lf&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ja);let _=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(jt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&E.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=x.length;U<z;U++){let Y=x[U],Z=Y.shadow;if(Z===void 0){Ye("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let he=Z.getFrameExtents();s.multiply(he),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,Z.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||N===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===us){if(Y.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new It(s.x,s.y,{format:ps,type:kt,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new wi(s.x,s.y,Wn),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=Mi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Nt,Z.map.depthTexture.magFilter=Nt}else Y.isPointLight?(Z.map=new Oc(s.x),Z.map.depthTexture=new Dl(s.x,bi)):(Z.map=new It(s.x,s.y),Z.map.depthTexture=new wi(s.x,s.y,bi)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=Mi,this.type===Ja?(Z.map.depthTexture.compareFunction=$?Nc:Lc,Z.map.depthTexture.minFilter=Pt,Z.map.depthTexture.magFilter=Pt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Nt,Z.map.depthTexture.magFilter=Nt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let ne=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Y.isPointLight!==!0&&Z.updateMatrices(Y,S);for(let re=0;re<ne;re++){let Pe=Z.getCamera(re);if(Y.isPointLight){let Re=Z.camera,je=Z.matrix,Ze=Y.distance||Re.far;Ze!==Re.far&&(Re.far=Ze,Re.updateProjectionMatrix()),bo.setFromMatrixPosition(Y.matrixWorld),Re.position.copy(bo),Du.copy(Re.position),Du.add(xy[re]),Re.up.copy(_y[re]),Re.lookAt(Du),Re.updateMatrixWorld(),je.makeTranslation(-bo.x,-bo.y,-bo.z),Bp.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Bp,Re.coordinateSystem,Re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,re),i.clear();else{re===0&&(i.setRenderTarget(Z.map),i.clear());let Re=Z.getViewport(re);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),D.viewport(a)}n=Z.getFrustum(re),b(E,S,Pe,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===us&&M(Z,S),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,R,C)};function M(x,E){let S=e.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new It(s.x,s.y,{format:ps,type:kt}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(E,null,S,d,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(E,null,S,f,y,null)}function w(x,E,S,_){let R=null,C=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(C!==void 0)R=C;else if(R=S.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=R.uuid,N=E.uuid,U=c[D];U===void 0&&(U={},c[D]=U);let z=U[N];z===void 0&&(z=R.clone(),U[N]=z,E.addEventListener("dispose",v)),R=z}if(R.visible=E.visible,R.wireframe=E.wireframe,_===us?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=S}return R}function b(x,E,S,_,R){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&R===us)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);let N=e.update(x),U=x.material;if(Array.isArray(U)){let z=N.groups;for(let Y=0,Z=z.length;Y<Z;Y++){let he=z[Y],$=U[he.materialIndex];if($&&$.visible){let ne=w(x,$,_,R);x.onBeforeShadow(i,x,E,S,N,ne,he),i.renderBufferDirect(S,null,N,ne,x,he),x.onAfterShadow(i,x,E,S,N,ne,he)}}}else if(U.visible){let z=w(x,U,_,R);x.onBeforeShadow(i,x,E,S,N,z,null),i.renderBufferDirect(S,null,N,z,x,null),x.onAfterShadow(i,x,E,S,N,z,null)}}let D=x.children;for(let N=0,U=D.length;N<U;N++)b(D[N],E,S,_,R)}function v(x){x.target.removeEventListener("dispose",v);for(let S in c){let _=c[S],R=x.target.uuid;R in _&&(_[R].dispose(),delete _[R])}}}function yy(i,e){function t(){let W=!1,Ie=new Mt,de=null,ve=new Mt(0,0,0,0);return{setMask:function(le){de!==le&&!W&&(i.colorMask(le,le,le,le),de=le)},setLocked:function(le){W=le},setClear:function(le,ue,Be,Ve,yt){yt===!0&&(le*=Ve,ue*=Ve,Be*=Ve),Ie.set(le,ue,Be,Ve),ve.equals(Ie)===!1&&(i.clearColor(le,ue,Be,Ve),ve.copy(Ie))},reset:function(){W=!1,de=null,ve.set(-1,0,0,0)}}}function n(){let W=!1,Ie=!1,de=null,ve=null,le=null;return{setReversed:function(ue){if(Ie!==ue){let Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ie=ue;let Ve=le;le=null,this.setClear(Ve)}},getReversed:function(){return Ie},setTest:function(ue){ue?q(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ue){de!==ue&&!W&&(i.depthMask(ue),de=ue)},setFunc:function(ue){if(Ie&&(ue=hp[ue]),ve!==ue){switch(ue){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ue}},setLocked:function(ue){W=ue},setClear:function(ue){le!==ue&&(le=ue,Ie&&(ue=1-ue),i.clearDepth(ue))},reset:function(){W=!1,de=null,ve=null,le=null,Ie=!1}}}function s(){let W=!1,Ie=null,de=null,ve=null,le=null,ue=null,Be=null,Ve=null,yt=null;return{setTest:function(xt){W||(xt?q(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(xt){Ie!==xt&&!W&&(i.stencilMask(xt),Ie=xt)},setFunc:function(xt,sn,Bn){(de!==xt||ve!==sn||le!==Bn)&&(i.stencilFunc(xt,sn,Bn),de=xt,ve=sn,le=Bn)},setOp:function(xt,sn,Bn){(ue!==xt||Be!==sn||Ve!==Bn)&&(i.stencilOp(xt,sn,Bn),ue=xt,Be=sn,Ve=Bn)},setLocked:function(xt){W=xt},setClear:function(xt){yt!==xt&&(i.clearStencil(xt),yt=xt)},reset:function(){W=!1,Ie=null,de=null,ve=null,le=null,ue=null,Be=null,Ve=null,yt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,b=null,v=null,x=null,E=null,S=new He(0,0,0),_=0,R=!1,C=null,D=null,N=null,U=null,z=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,he=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=he>=1):$.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=he>=2);let ne=null,re={},Pe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),je=new Mt().fromArray(Pe),Ze=new Mt().fromArray(Re);function rt(W,Ie,de,ve){let le=new Uint8Array(4),ue=i.createTexture();i.bindTexture(W,ue),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<de;Be++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(Ie+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ue}let O={};O[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(mr),be(!1),Me(au),q(i.CULL_FACE),me(jt);function q(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function _e(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function pe(W,Ie){return d[W]!==Ie?(i.bindFramebuffer(W,Ie),d[W]=Ie,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ie),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function De(W,Ie){let de=g,ve=!1;if(W){de=f.get(Ie),de===void 0&&(de=[],f.set(Ie,de));let le=W.textures;if(de.length!==le.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Be=le.length;ue<Be;ue++)de[ue]=i.COLOR_ATTACHMENT0+ue;de.length=le.length,ve=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,ve=!0);ve&&i.drawBuffers(de)}function Je(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let $e={[ni]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Ff]:i.FUNC_REVERSE_SUBTRACT};$e[Uf]=i.MIN,$e[Of]=i.MAX;let ce={[Ds]:i.ZERO,[kf]:i.ONE,[Bf]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[Qa]:i.DST_COLOR,[$a]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[hu]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function me(W,Ie,de,ve,le,ue,Be,Ve,yt,xt){if(W===jt){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),W!==Xl){if(W!==p||xt!==R){if((M!==ni||v!==ni)&&(i.blendEquation(i.FUNC_ADD),M=ni,v=ni),xt)switch(W){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",W);break}w=null,b=null,x=null,E=null,S.set(0,0,0),_=0,p=W,R=xt}return}le=le||Ie,ue=ue||de,Be=Be||ve,(Ie!==M||le!==v)&&(i.blendEquationSeparate($e[Ie],$e[le]),M=Ie,v=le),(de!==w||ve!==b||ue!==x||Be!==E)&&(i.blendFuncSeparate(ce[de],ce[ve],ce[ue],ce[Be]),w=de,b=ve,x=ue,E=Be),(Ve.equals(S)===!1||yt!==_)&&(i.blendColor(Ve.r,Ve.g,Ve.b,yt),S.copy(Ve),_=yt),p=W,R=!1}function xe(W,Ie){W.side===Ht?_e(i.CULL_FACE):q(i.CULL_FACE);let de=W.side===xn;Ie&&(de=!de),be(de),W.blending===Ur&&W.transparent===!1?me(jt):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let ve=W.stencilWrite;o.setTest(ve),ve&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function Me(W){W!==If?(q(i.CULL_FACE),W!==D&&(W===au?i.cullFace(i.BACK):W===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=W}function Fe(W){W!==N&&(Z&&i.lineWidth(W),N=W)}function We(W,Ie,de){W?(q(i.POLYGON_OFFSET_FILL),(U!==Ie||z!==de)&&(U=Ie,z=de,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,de))):_e(i.POLYGON_OFFSET_FILL)}function Le(W){W?q(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ze(W){W===void 0&&(W=i.TEXTURE0+Y-1),ne!==W&&(i.activeTexture(W),ne=W)}function G(W,Ie,de){de===void 0&&(ne===null?de=i.TEXTURE0+Y-1:de=ne);let ve=re[de];ve===void 0&&(ve={type:void 0,texture:void 0},re[de]=ve),(ve.type!==W||ve.texture!==Ie)&&(ne!==de&&(i.activeTexture(de),ne=de),i.bindTexture(W,Ie||O[W]),ve.type=W,ve.texture=Ie)}function ht(){let W=re[ne];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function j(){try{i.texSubImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function ge(){try{i.texStorage2D(...arguments)}catch(W){st("WebGLState:",W)}}function we(){try{i.texStorage3D(...arguments)}catch(W){st("WebGLState:",W)}}function ie(){try{i.texImage2D(...arguments)}catch(W){st("WebGLState:",W)}}function fe(){try{i.texImage3D(...arguments)}catch(W){st("WebGLState:",W)}}function Ee(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function Ge(W,Ie){u[W]!==Ie&&(i.pixelStorei(W,Ie),u[W]=Ie)}function Ae(W){je.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),je.copy(W))}function Se(W){Ze.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ze.copy(W))}function ke(W,Ie){let de=c.get(Ie);de===void 0&&(de=new WeakMap,c.set(Ie,de));let ve=de.get(W);ve===void 0&&(ve=i.getUniformBlockIndex(Ie,W.name),de.set(W,ve))}function qe(W,Ie){let ve=c.get(Ie).get(W);l.get(Ie)!==ve&&(i.uniformBlockBinding(Ie,ve,W.__bindingPointIndex),l.set(Ie,ve))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,re={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,b=null,v=null,x=null,E=null,S=new He(0,0,0),_=0,R=!1,C=null,D=null,N=null,U=null,z=null,je.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:_e,bindFramebuffer:pe,drawBuffers:De,useProgram:Je,setBlending:me,setMaterial:xe,setFlipSided:be,setCullFace:Me,setLineWidth:Fe,setPolygonOffset:We,setScissorTest:Le,activeTexture:ze,bindTexture:G,unbindTexture:ht,compressedTexImage2D:at,compressedTexImage3D:F,texImage2D:ie,texImage3D:fe,pixelStorei:Ge,getParameter:Ee,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:ge,texStorage3D:we,texSubImage2D:T,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:Ae,viewport:Se,reset:it}}function My(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,T){return g?new OffscreenCanvas(F,T):xr("canvas")}function m(F,T,j){let K=1,te=at(F);if((te.width>j||te.height>j)&&(K=j/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let ge=Math.floor(K*te.width),we=Math.floor(K*te.height);d===void 0&&(d=y(ge,we));let ie=T?y(ge,we):d;return ie.width=ge,ie.height=we,ie.getContext("2d").drawImage(F,0,0,ge,we),Ye("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ge+"x"+we+")."),ie}else return"data"in F&&Ye("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),F;return F}function p(F){return F.generateMipmaps}function M(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(F,T,j,K,te,ge=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let we;K&&(we=e.get("EXT_texture_norm16"),we||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=T;if(T===i.RED&&(j===i.FLOAT&&(ie=i.R32F),j===i.HALF_FLOAT&&(ie=i.R16F),j===i.UNSIGNED_BYTE&&(ie=i.R8),j===i.UNSIGNED_SHORT&&we&&(ie=we.R16_EXT),j===i.SHORT&&we&&(ie=we.R16_SNORM_EXT)),T===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ie=i.R8UI),j===i.UNSIGNED_SHORT&&(ie=i.R16UI),j===i.UNSIGNED_INT&&(ie=i.R32UI),j===i.BYTE&&(ie=i.R8I),j===i.SHORT&&(ie=i.R16I),j===i.INT&&(ie=i.R32I)),T===i.RG&&(j===i.FLOAT&&(ie=i.RG32F),j===i.HALF_FLOAT&&(ie=i.RG16F),j===i.UNSIGNED_BYTE&&(ie=i.RG8),j===i.UNSIGNED_SHORT&&we&&(ie=we.RG16_EXT),j===i.SHORT&&we&&(ie=we.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ie=i.RG8UI),j===i.UNSIGNED_SHORT&&(ie=i.RG16UI),j===i.UNSIGNED_INT&&(ie=i.RG32UI),j===i.BYTE&&(ie=i.RG8I),j===i.SHORT&&(ie=i.RG16I),j===i.INT&&(ie=i.RG32I)),T===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),j===i.UNSIGNED_INT&&(ie=i.RGB32UI),j===i.BYTE&&(ie=i.RGB8I),j===i.SHORT&&(ie=i.RGB16I),j===i.INT&&(ie=i.RGB32I)),T===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),j===i.UNSIGNED_INT&&(ie=i.RGBA32UI),j===i.BYTE&&(ie=i.RGBA8I),j===i.SHORT&&(ie=i.RGBA16I),j===i.INT&&(ie=i.RGBA32I)),T===i.RGB&&(j===i.UNSIGNED_SHORT&&we&&(ie=we.RGB16_EXT),j===i.SHORT&&we&&(ie=we.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),T===i.RGBA){let fe=ge?ma:ft.getTransfer(te);j===i.FLOAT&&(ie=i.RGBA32F),j===i.HALF_FLOAT&&(ie=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ie=fe===_t?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&we&&(ie=we.RGBA16_EXT),j===i.SHORT&&we&&(ie=we.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(F,T){let j;return F?T===null||T===bi||T===fs?j=i.DEPTH24_STENCIL8:T===Wn?j=i.DEPTH32F_STENCIL8:T===Br&&(j=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bi||T===fs?j=i.DEPTH_COMPONENT24:T===Wn?j=i.DEPTH_COMPONENT32F:T===Br&&(j=i.DEPTH_COMPONENT16),j}function x(F,T){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Nt&&F.minFilter!==Pt?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function E(F){let T=F.target;T.removeEventListener("dispose",E),_(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function S(F){let T=F.target;T.removeEventListener("dispose",S),C(T)}function _(F){let T=n.get(F);if(T.__webglInit===void 0)return;let j=F.source,K=f.get(j);if(K){let te=K[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(F),Object.keys(K).length===0&&f.delete(j)}n.remove(F)}function R(F){let T=n.get(F);i.deleteTexture(T.__webglTexture);let j=F.source,K=f.get(j);delete K[T.__cacheKey],a.memory.textures--}function C(F){let T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let te=0;te<T.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(T.__webglFramebuffer[K][te]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=F.textures;for(let K=0,te=j.length;K<te;K++){let ge=n.get(j[K]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(j[K])}n.remove(F)}let D=0;function N(){D=0}function U(){return D}function z(F){D=F}function Y(){let F=D;return F>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,F}function Z(F){let T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function he(F,T){let j=n.get(F);if(F.isVideoTexture&&G(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&j.__version!==F.version){let K=F.image;if(K===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(j,F,T);return}}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+T)}function $(F,T){let j=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){_e(j,F,T);return}else F.isExternalTexture&&(j.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+T)}function ne(F,T){let j=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){_e(j,F,T);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+T)}function re(F,T){let j=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&j.__version!==F.version){pe(j,F,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+T)}let Pe={[Qt]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},Re={[Nt]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},je={[tp]:i.NEVER,[ap]:i.ALWAYS,[np]:i.LESS,[Lc]:i.LEQUAL,[ip]:i.EQUAL,[Nc]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function Ze(F,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pt||T.magFilter===kr||T.magFilter===Fs||T.magFilter===Dn||T.minFilter===Pt||T.minFilter===kr||T.minFilter===Fs||T.minFilter===Dn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Pe[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Pe[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Pe[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Re[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Re[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,je[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==Fs&&T.minFilter!==Dn||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function rt(F,T){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",E));let K=T.source,te=f.get(K);te===void 0&&(te={},f.set(K,te));let ge=Z(T);if(ge!==F.__cacheKey){te[ge]===void 0&&(te[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),te[ge].usedTimes++;let we=te[F.__cacheKey];we!==void 0&&(te[F.__cacheKey].usedTimes--,we.usedTimes===0&&R(T)),F.__cacheKey=ge,F.__webglTexture=te[ge].texture}return j}function O(F,T,j){return Math.floor(Math.floor(F/j)/T)}function q(F,T,j,K){let ge=F.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,j,K,T.data);else{ge.sort((Ge,Ae)=>Ge.start-Ae.start);let we=0;for(let Ge=1;Ge<ge.length;Ge++){let Ae=ge[we],Se=ge[Ge],ke=Ae.start+Ae.count,qe=O(Se.start,T.width,4),it=O(Ae.start,T.width,4);Se.start<=ke+1&&qe===it&&O(Se.start+Se.count-1,T.width,4)===qe?Ae.count=Math.max(Ae.count,Se.start+Se.count-Ae.start):(++we,ge[we]=Se)}ge.length=we+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ge=0,Ae=ge.length;Ge<Ae;Ge++){let Se=ge[Ge],ke=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),it=ke%T.width,W=Math.floor(ke/T.width),Ie=qe,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,it,W,Ie,de,j,K,T.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function _e(F,T,j){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);let te=rt(F,T),ge=T.source;t.bindTexture(K,F.__webglTexture,i.TEXTURE0+j);let we=n.get(ge);if(ge.version!==we.__version||te===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let de=ft.getPrimaries(ft.workingColorSpace),ve=T.colorSpace===xi?null:ft.getPrimaries(T.colorSpace),le=T.colorSpace===xi||de===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let fe=m(T.image,!1,s.maxTextureSize);fe=ht(T,fe);let Ee=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type),Ae=b(T.internalFormat,Ee,Ge,T.normalized,T.colorSpace,T.isVideoTexture);Ze(K,T);let Se,ke=T.mipmaps,qe=T.isVideoTexture!==!0,it=we.__version===void 0||te===!0,W=ge.dataReady,Ie=x(T,fe);if(T.isDepthTexture)Ae=v(T.format===Ei,T.type),it&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ae,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ae,fe.width,fe.height,0,Ee,Ge,null));else if(T.isDataTexture)if(ke.length>0){qe&&it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ae,ke[0].width,ke[0].height);for(let de=0,ve=ke.length;de<ve;de++)Se=ke[de],qe?W&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Ee,Ge,Se.data):t.texImage2D(i.TEXTURE_2D,de,Ae,Se.width,Se.height,0,Ee,Ge,Se.data);T.generateMipmaps=!1}else qe?(it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ae,fe.width,fe.height),W&&q(T,fe,Ee,Ge)):t.texImage2D(i.TEXTURE_2D,0,Ae,fe.width,fe.height,0,Ee,Ge,fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ae,ke[0].width,ke[0].height,fe.depth);for(let de=0,ve=ke.length;de<ve;de++)if(Se=ke[de],T.format!==tn)if(Ee!==null)if(qe){if(W)if(T.layerUpdates.size>0){let le=Eu(Se.width,Se.height,T.format,T.type);for(let ue of T.layerUpdates){let Be=Se.data.subarray(ue*le/Se.data.BYTES_PER_ELEMENT,(ue+1)*le/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,ue,Se.width,Se.height,1,Ee,Be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,fe.depth,Ee,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ae,Se.width,Se.height,fe.depth,0,Se.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,fe.depth,Ee,Ge,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ae,Se.width,Se.height,fe.depth,0,Ee,Ge,Se.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{qe&&it&&t.texStorage2D(i.TEXTURE_2D,Ie,Ae,ke[0].width,ke[0].height);for(let de=0,ve=ke.length;de<ve;de++)Se=ke[de],T.format!==tn?Ee!==null?qe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ae,Se.width,Se.height,0,Se.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?W&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Ee,Ge,Se.data):t.texImage2D(i.TEXTURE_2D,de,Ae,Se.width,Se.height,0,Ee,Ge,Se.data)}else if(T.isDataArrayTexture)if(qe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ae,fe.width,fe.height,fe.depth),W)if(T.layerUpdates.size>0){let de=Eu(fe.width,fe.height,T.format,T.type);for(let ve of T.layerUpdates){let le=fe.data.subarray(ve*de/fe.data.BYTES_PER_ELEMENT,(ve+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,fe.width,fe.height,1,Ee,Ge,le)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Ge,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,fe.width,fe.height,fe.depth,0,Ee,Ge,fe.data);else if(T.isData3DTexture)qe?(it&&t.texStorage3D(i.TEXTURE_3D,Ie,Ae,fe.width,fe.height,fe.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Ge,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,fe.width,fe.height,fe.depth,0,Ee,Ge,fe.data);else if(T.isFramebufferTexture){if(it)if(qe)t.texStorage2D(i.TEXTURE_2D,Ie,Ae,fe.width,fe.height);else{let de=fe.width,ve=fe.height;for(let le=0;le<Ie;le++)t.texImage2D(i.TEXTURE_2D,le,Ae,de,ve,0,Ee,Ge,null),de>>=1,ve>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),fe.parentNode!==de){de.appendChild(fe),u.add(T),de.onpaint=ve=>{let le=ve.changedElements;for(let ue of u)le.includes(ue.image)&&(ue.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let le=i.RGBA,ue=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,le,ue,Be,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(qe&&it){let de=at(ke[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ae,de.width,de.height)}for(let de=0,ve=ke.length;de<ve;de++)Se=ke[de],qe?W&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee,Ge,Se):t.texImage2D(i.TEXTURE_2D,de,Ae,Ee,Ge,Se);T.generateMipmaps=!1}else if(qe){if(it){let de=at(fe);t.texStorage2D(i.TEXTURE_2D,Ie,Ae,de.width,de.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ge,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Ee,Ge,fe);p(T)&&M(K),we.__version=ge.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function pe(F,T,j){if(T.image.length!==6)return;let K=rt(F,T),te=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+j);let ge=n.get(te);if(te.version!==ge.__version||K===!0){t.activeTexture(i.TEXTURE0+j);let we=ft.getPrimaries(ft.workingColorSpace),ie=T.colorSpace===xi?null:ft.getPrimaries(T.colorSpace),fe=T.colorSpace===xi||we===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Ge=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let ue=0;ue<6;ue++)!Ee&&!Ge?Ae[ue]=m(T.image[ue],!0,s.maxCubemapSize):Ae[ue]=Ge?T.image[ue].image:T.image[ue],Ae[ue]=ht(T,Ae[ue]);let Se=Ae[0],ke=r.convert(T.format,T.colorSpace),qe=r.convert(T.type),it=b(T.internalFormat,ke,qe,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Ie=ge.__version===void 0||K===!0,de=te.dataReady,ve=x(T,Se);Ze(i.TEXTURE_CUBE_MAP,T);let le;if(Ee){W&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,it,Se.width,Se.height);for(let ue=0;ue<6;ue++){le=Ae[ue].mipmaps;for(let Be=0;Be<le.length;Be++){let Ve=le[Be];T.format!==tn?ke!==null?W?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,Ve.width,Ve.height,ke,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,it,Ve.width,Ve.height,0,Ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,Ve.width,Ve.height,ke,qe,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,it,Ve.width,Ve.height,0,ke,qe,Ve.data)}}}else{if(le=T.mipmaps,W&&Ie){le.length>0&&ve++;let ue=at(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,it,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ge){W?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ae[ue].width,Ae[ue].height,ke,qe,Ae[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,it,Ae[ue].width,Ae[ue].height,0,ke,qe,Ae[ue].data);for(let Be=0;Be<le.length;Be++){let yt=le[Be].image[ue].image;W?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,yt.width,yt.height,ke,qe,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,it,yt.width,yt.height,0,ke,qe,yt.data)}}else{W?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ke,qe,Ae[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,it,ke,qe,Ae[ue]);for(let Be=0;Be<le.length;Be++){let Ve=le[Be];W?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,ke,qe,Ve.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,it,ke,qe,Ve.image[ue])}}}p(T)&&M(i.TEXTURE_CUBE_MAP),ge.__version=te.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function De(F,T,j,K,te,ge){let we=r.convert(j.format,j.colorSpace),ie=r.convert(j.type),fe=b(j.internalFormat,we,ie,j.normalized,j.colorSpace),Ee=n.get(T),Ge=n.get(j);if(Ge.__renderTarget=T,!Ee.__hasExternalTextures){let Ae=Math.max(1,T.width>>ge),Se=Math.max(1,T.height>>ge);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ge,fe,Ae,Se,T.depth,0,we,ie,null):t.texImage2D(te,ge,fe,Ae,Se,0,we,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),ze(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,Ge.__webglTexture,0,Le(T)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,Ge.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(F,T,j){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){let K=T.depthTexture,te=K&&K.isDepthTexture?K.type:null,ge=v(T.stencilBuffer,te),we=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ze(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(T),ge,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(T),ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,F)}else{let K=T.textures;for(let te=0;te<K.length;te++){let ge=K[te],we=r.convert(ge.format,ge.colorSpace),ie=r.convert(ge.type),fe=b(ge.internalFormat,we,ie,ge.normalized,ge.colorSpace);ze(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(T),fe,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(T),fe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,fe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(F,T,j){let K=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(T.depthTexture);if(te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,T.depthTexture);let Ee=r.convert(T.depthTexture.format),Ge=r.convert(T.depthTexture.type),Ae;T.depthTexture.format===Mi?Ae=i.DEPTH_COMPONENT24:T.depthTexture.format===Ei&&(Ae=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ae,T.width,T.height,0,Ee,Ge,null)}}else he(T.depthTexture,0);let ge=te.__webglTexture,we=Le(T),ie=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,fe=T.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Mi)ze(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ie,ge,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ie,ge,0);else if(T.depthTexture.format===Ei)ze(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ie,ge,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ie,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(F){let T=n.get(F),j=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){let K=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){let te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=K}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let K=0;K<6;K++)$e(T.__webglFramebuffer[K],F,K);else{let K=F.texture.mipmaps;K&&K.length>0?$e(T.__webglFramebuffer[0],F,0):$e(T.__webglFramebuffer,F,0)}else if(j){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),Je(T.__webglDepthbuffer[K],F,!1);else{let te=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}}else{let K=F.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Je(T.__webglDepthbuffer,F,!1);else{let te=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(F,T,j){let K=n.get(F);T!==void 0&&De(K.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ce(F)}function xe(F){let T=F.texture,j=n.get(F),K=n.get(T);F.addEventListener("dispose",S);let te=F.textures,ge=F.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,a.memory.textures++),ge){j.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ie]=[];for(let fe=0;fe<T.mipmaps.length;fe++)j.__webglFramebuffer[ie][fe]=i.createFramebuffer()}else j.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ie=0;ie<T.mipmaps.length;ie++)j.__webglFramebuffer[ie]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(we)for(let ie=0,fe=te.length;ie<fe;ie++){let Ee=n.get(te[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&ze(F)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let fe=te[ie];j.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ie]);let Ee=r.convert(fe.format,fe.colorSpace),Ge=r.convert(fe.type),Ae=b(fe.internalFormat,Ee,Ge,fe.normalized,fe.colorSpace,F.isXRRenderTarget===!0),Se=Le(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Ae,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,j.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(j.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,T);for(let ie=0;ie<6;ie++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)De(j.__webglFramebuffer[ie][fe],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe);else De(j.__webglFramebuffer[ie],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(T)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ie=0,fe=te.length;ie<fe;ie++){let Ee=te[ie],Ge=n.get(Ee),Ae=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ae=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Ge.__webglTexture),Ze(Ae,Ee),De(j.__webglFramebuffer,F,Ee,i.COLOR_ATTACHMENT0+ie,Ae,0),p(Ee)&&M(Ae)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ie=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,K.__webglTexture),Ze(ie,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)De(j.__webglFramebuffer[fe],F,T,i.COLOR_ATTACHMENT0,ie,fe);else De(j.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,ie,0);p(T)&&M(ie),t.unbindTexture()}F.depthBuffer&&ce(F)}function be(F){let T=F.textures;for(let j=0,K=T.length;j<K;j++){let te=T[j];if(p(te)){let ge=w(F),we=n.get(te).__webglTexture;t.bindTexture(ge,we),M(ge),t.unbindTexture()}}}let Me=[],Fe=[];function We(F){if(F.samples>0){if(ze(F)===!1){let T=F.textures,j=F.width,K=F.height,te=i.COLOR_BUFFER_BIT,ge=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(F),ie=T.length>1;if(ie)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let fe=F.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let Ge=n.get(T[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,j,K,0,0,j,K,te,i.NEAREST),l===!0&&(Me.length=0,Fe.length=0,Me.push(i.COLOR_ATTACHMENT0+Ee),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Me.push(ge),Fe.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let Ge=n.get(T[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Le(F){return Math.min(s.maxSamples,F.samples)}function ze(F){let T=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(F){let T=a.render.frame;h.get(F)!==T&&(h.set(F,T),F.update())}function ht(F,T){let j=F.colorSpace,K=F.format,te=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||j!==rn&&j!==xi&&(ft.getTransfer(j)===_t?(K!==tn||te!==Tn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",j)),T}function at(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=he,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=me,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sy(i,e){function t(n,s=xi){let r,a=ft.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===du)return i.BYTE;if(n===fu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===kt)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===bu)return i.RGB;if(n===tn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===ps)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===lc||n===cc||n===hc||n===uc||n===fo||n===dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===lc)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hc)return r.COMPRESSED_R11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===wc||n===Tc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ac||n===Rc||n===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ac)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Ic||n===po||n===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dt({vertexShader:wy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new zu,p={},M=t.getContextAttributes(),w=null,b=null,v=[],x=[],E=new se,S=null,_=null,R=new Wt;R.viewport=new Mt;let C=new Wt;C.viewport=new Mt;let D=[R,C],N=new ql,U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=v[O];return q===void 0&&(q=new Mr,v[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=v[O];return q===void 0&&(q=new Mr,v[O]=q),q.getGripSpace()},this.getHand=function(O){let q=v[O];return q===void 0&&(q=new Mr,v[O]=q),q.getHandSpace()};function Y(O){let q=x.indexOf(O.inputSource);if(q===-1)return;let _e=v[q];_e!==void 0&&(_e.update(O.inputSource,O.frame,c||a),_e.dispatchEvent({type:O.type,data:O.inputSource}))}function Z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",he);for(let O=0;O<v.length;O++){let q=x[O];q!==null&&(x[O]=null,v[O].disconnect(q))}U=null,z=null,m.reset();for(let O in p)delete p[O];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,b=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),_!==null){let O=_.camera;O.fov=_.fov,O.zoom=_.zoom,O.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,pe=null,De=null;M.depth&&(De=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?Ei:Mi,pe=M.stencil?fs:bi);let Je={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new It(d.textureWidth,d.textureHeight,{format:tn,type:Tn,depthTexture:new wi(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new It(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(O){for(let q=0;q<O.removed.length;q++){let _e=O.removed[q],pe=x.indexOf(_e);pe>=0&&(x[pe]=null,v[pe].disconnect(_e))}for(let q=0;q<O.added.length;q++){let _e=O.added[q],pe=x.indexOf(_e);if(pe===-1){for(let Je=0;Je<v.length;Je++)if(Je>=x.length){x.push(_e),pe=Je;break}else if(x[Je]===null){x[Je]=_e,pe=Je;break}if(pe===-1)break}let De=v[pe];De&&De.connect(_e)}}let $=new L,ne=new L;function re(O,q,_e){$.setFromMatrixPosition(q.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);let pe=$.distanceTo(ne),De=q.projectionMatrix.elements,Je=_e.projectionMatrix.elements,$e=De[14]/(De[10]-1),ce=De[14]/(De[10]+1),me=(De[9]+1)/De[5],xe=(De[9]-1)/De[5],be=(De[8]-1)/De[0],Me=(Je[8]+1)/Je[0],Fe=$e*be,We=$e*Me,Le=pe/(-be+Me),ze=Le*-be;if(q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ze),O.translateZ(Le),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),De[10]===-1)O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let G=$e+Le,ht=ce+Le,at=Fe-ze,F=We+(pe-ze),T=me*ce/ht*G,j=xe*ce/ht*G;O.projectionMatrix.makePerspective(at,F,T,j,G,ht),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Pe(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let q=O.near,_e=O.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),N.near=C.near=R.near=q,N.far=C.far=R.far=_e,(U!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,z=N.far),N.layers.mask=O.layers.mask|6,R.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let pe=O.parent,De=N.cameras;Pe(N,pe);for(let Je=0;Je<De.length;Je++)Pe(De[Je],pe);De.length===2?re(N,R,C):N.projectionMatrix.copy(R.projectionMatrix),_===null&&O.isPerspectiveCamera&&(_={camera:O,fov:O.fov,zoom:O.zoom}),Re(O,N,pe)};function Re(O,q,_e){_e===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(_e.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Es*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(O){return p[O]};let je=null;function Ze(O,q){if(h=q.getViewerPose(c||a),g=q,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let pe=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,pe=!0);for(let ce=0;ce<_e.length;ce++){let me=_e[ce],xe=null;if(f!==null)xe=f.getViewport(me);else{let Me=u.getViewSubImage(d,me);xe=Me.viewport,ce===0&&(e.setRenderTargetTextures(b,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(b))}let be=D[ce];be===void 0&&(be=new Wt,be.layers.enable(ce),be.viewport=new Mt,D[ce]=be),be.matrix.fromArray(me.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(me.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(xe.x,xe.y,xe.width,xe.height),ce===0&&(N.matrix.copy(be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),pe===!0&&N.cameras.push(be)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ce=u.getDepthInformation(_e[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,s.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let ce=0;ce<_e.length;ce++){let me=_e[ce].camera;if(me){let xe=p[me];xe||(xe=new Ra,p[me]=xe);let be=u.getCameraImage(me);xe.sourceTexture=be}}}}for(let _e=0;_e<v.length;_e++){let pe=x[_e],De=v[_e];pe!==null&&De!==void 0&&De.update(pe,q,c||a)}je&&je(O,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let rt=new zp;rt.setAnimationLoop(Ze),this.setAnimationLoop=function(O){je=O},this.dispose=function(){}}},Ey=new Ue,Xp=new ot;Xp.set(-1,0,0,0,1,0,0,0,1);function Ay(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,b=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ry(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=s[b.id];x===void 0&&(m(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",M));let E=v.program;n.updateUBOMapping(b,E);let S=e.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let v=u();b.__bindingPointIndex=v;let x=i.createBuffer(),E=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=s[b.id],x=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,_=x.length;S<_;S++){let R=x[S];if(Array.isArray(R))for(let C=0,D=R.length;C<D;C++)f(R[C],S,C,E);else f(R,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,x,E){if(y(b,v,x,E)===!0){let S=b.__offset,_=b.value;if(Array.isArray(_)){let R=0;for(let C=0;C<_.length;C++){let D=_[C],N=p(D);g(D,b.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,b.__data)}}function g(b,v,x){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,x)}function y(b,v,x,E){let S=b.value,_=v+"_"+x;if(E[_]===void 0)return typeof S=="number"||typeof S=="boolean"?E[_]=S:ArrayBuffer.isView(S)?E[_]=S.slice():E[_]=S.clone(),!0;{let R=E[_];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return E[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function m(b){let v=b.uniforms,x=0,E=16;for(let _=0,R=v.length;_<R;_++){let C=Array.isArray(v[_])?v[_]:[v[_]];for(let D=0,N=C.length;D<N;D++){let U=C[D],z=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,Z=z.length;Y<Z;Y++){let he=z[Y],$=p(he),ne=x%E,re=ne%$.boundary,Pe=ne+re;x+=re,Pe!==0&&E-Pe<$.storage&&(x+=E-Pe),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}let S=x%E;return S>0&&(x+=E-S),b.__size=x,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",b),v}function M(b){let v=b.target;v.removeEventListener("dispose",M);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Py(){return Ai===null&&(Ai=new Sn(Cy,16,16,ps,kt),Ai.name="DFG_LUT",Ai.minFilter=Pt,Ai.magFilter=Pt,Ai.wrapS=Pn,Ai.wrapT=Pn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var kc=class{constructor(e={}){let{canvas:t=op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([nc,tc,ec]),p=new Set([Tn,bi,Br,fs,Zl,$l]),M=new Uint32Array(4),w=new Int32Array(4),b=new L,v=null,x=null,E=[],S=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,D=null,N=null,U=null,z=null;this._outputColorSpace=bt;let Y=0,Z=0,he=null,$=-1,ne=null,re=new Mt,Pe=new Mt,Re=null,je=new He(0),Ze=0,rt=t.width,O=t.height,q=1,_e=null,pe=null,De=new Mt(0,0,rt,O),Je=new Mt(0,0,rt,O),$e=!1,ce=new Tr,me=!1,xe=!1,be=new Ue,Me=new L,Fe=new Mt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function ze(){return he===null?q:1}let G=n;function ht(P,H){return t.getContext(P,H)}let at,F,T,j,K,te,ge,we,ie,fe,Ee,Ge,Ae,Se,ke,qe,it,W,Ie,de,ve,le,ue;try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",sn,!1),G===null){let H="webgl2";if(G=ht(H,P),G===null)throw ht(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(P){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),st("WebGLRenderer: "+P.message),P}function Be(){at=new O_(G),at.init(),ve=new Sy(G,at),F=new A_(G,at,e,ve),T=new yy(G,at),F.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),N=G.createFramebuffer(),U=G.createFramebuffer(),z=G.createFramebuffer(),j=new z_(G),K=new oy,te=new My(G,at,T,K,F,ve,j),ge=new U_(R),we=new Hg(G),le=new T_(G,we),ie=new k_(G,we,j,le),fe=new H_(G,ie,we,le,j),W=new G_(G,F,te),ke=new R_(K),Ee=new ay(R,ge,at,F,le,ke),Ge=new Ay(R,K),Ae=new cy,Se=new my(at),it=new w_(R,ge,T,fe,g,l),qe=new vy(R,fe,F),ue=new Ry(G,j,F,T),Ie=new E_(G,at,j),de=new B_(G,at,j),j.programs=Ee.programs,R.capabilities=F,R.extensions=at,R.properties=K,R.renderLists=Ae,R.shadowMap=qe,R.state=T,R.info=j}y!==Tn&&(_=new W_(y,t.width,t.height,o,s,r));let Ve=new Gu(R,G);this.xr=Ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let P=at.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=at.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(rt,O,!1))},this.getSize=function(P){return P.set(rt,O)},this.setSize=function(P,H,Q=!0){if(Ve.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=P,O=H,t.width=Math.floor(P*q),t.height=Math.floor(H*q),Q===!0&&(t.style.width=P+"px",t.style.height=H+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(rt*q,O*q).floor()},this.setDrawingBufferSize=function(P,H,Q){rt=P,O=H,q=Q,t.width=Math.floor(P*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,P,H)},this.setEffects=function(P){if(y===Tn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let H=0;H<P.length;H++)if(P[H].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(re)},this.getViewport=function(P){return P.copy(De)},this.setViewport=function(P,H,Q,A){P.isVector4?De.set(P.x,P.y,P.z,P.w):De.set(P,H,Q,A),T.viewport(re.copy(De).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(Je)},this.setScissor=function(P,H,Q,A){P.isVector4?Je.set(P.x,P.y,P.z,P.w):Je.set(P,H,Q,A),T.scissor(Pe.copy(Je).multiplyScalar(q).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(P){T.setScissorTest($e=P)},this.setOpaqueSort=function(P){_e=P},this.setTransparentSort=function(P){pe=P},this.getClearColor=function(P){return P.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,Q=!0){let A=0;if(P){let I=!1;if(he!==null){let k=he.texture.format;I=m.has(k)}if(I){let k=he.texture.type,X=p.has(k),V=it.getClearColor(),J=it.getClearAlpha(),B=V.r,ae=V.g,oe=V.b;X?(M[0]=B,M[1]=ae,M[2]=oe,M[3]=J,G.clearBufferuiv(G.COLOR,0,M)):(w[0]=B,w[1]=ae,w[2]=oe,w[3]=J,G.clearBufferiv(G.COLOR,0,w))}else A|=G.COLOR_BUFFER_BIT}H&&(A|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(A|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A!==0&&G.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),D=P},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),it.dispose(),Ae.dispose(),Se.dispose(),K.dispose(),ge.dispose(),fe.dispose(),le.dispose(),ue.dispose(),Ee.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Fo),Ve.removeEventListener("sessionend",Uo),Ii.stop()};function yt(P){P.preventDefault(),ga("WebGLRenderer: Context Lost."),C=!0}function xt(){ga("WebGLRenderer: Context Restored."),C=!1;let P=j.autoReset,H=qe.enabled,Q=qe.autoUpdate,A=qe.needsUpdate,I=qe.type;Be(),j.autoReset=P,qe.enabled=H,qe.autoUpdate=Q,qe.needsUpdate=A,qe.type=I}function sn(P){st("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Bn(P){let H=P.target;H.removeEventListener("dispose",Bn),dh(H)}function dh(P){Io(P),K.remove(P)}function Io(P){let H=K.get(P).programs;H!==void 0&&(H.forEach(function(Q){Ee.releaseProgram(Q)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,Q,A,I,k){H===null&&(H=We);let X=I.isMesh&&I.matrixWorld.determinantAffine()<0,V=ph(P,H,Q,A,I);T.setMaterial(A,X);let J=Q.index,B=1;if(A.wireframe===!0){if(J=ie.getWireframeAttribute(Q),J===void 0)return;B=2}let ae=Q.drawRange,oe=Q.attributes.position,ee=ae.start*B,ye=(ae.start+ae.count)*B;k!==null&&(ee=Math.max(ee,k.start*B),ye=Math.min(ye,(k.start+k.count)*B)),J!==null?(ee=Math.max(ee,0),ye=Math.min(ye,J.count)):oe!=null&&(ee=Math.max(ee,0),ye=Math.min(ye,oe.count));let Qe=ye-ee;if(Qe<0||Qe===1/0)return;le.setup(I,A,V,Q,J);let dt,nt=Ie;if(J!==null&&(dt=we.get(J),nt=de,nt.setIndex(dt)),I.isMesh)A.wireframe===!0?(T.setLineWidth(A.wireframeLinewidth*ze()),nt.setMode(G.LINES)):nt.setMode(G.TRIANGLES);else if(I.isLine){let pt=A.linewidth;pt===void 0&&(pt=1),T.setLineWidth(pt*ze()),I.isLineSegments?nt.setMode(G.LINES):I.isLineLoop?nt.setMode(G.LINE_LOOP):nt.setMode(G.LINE_STRIP)}else I.isPoints?nt.setMode(G.POINTS):I.isSprite&&nt.setMode(G.TRIANGLES);if(I.isBatchedMesh)if(at.get("WEBGL_multi_draw"))nt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let pt=I._multiDrawStarts,Ce=I._multiDrawCounts,vt=I._multiDrawCount,et=J?we.get(J).bytesPerElement:1,Jt=K.get(A).currentProgram.getUniforms();for(let Lt=0;Lt<vt;Lt++)Jt.setValue(G,"_gl_DrawID",Lt),nt.render(pt[Lt]/et,Ce[Lt])}else if(I.isInstancedMesh)nt.renderInstances(ee,Qe,I.count);else if(Q.isInstancedBufferGeometry){let pt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ce=Math.min(Q.instanceCount,pt);nt.renderInstances(ee,Qe,Ce)}else nt.render(ee,Qe)};function Do(P,H,Q,A){D!==null&&P.isNodeMaterial&&D.setObject(A,P),me===!0&&ke.setState(P,Q,!1),P.transparent===!0&&P.side===Ht&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,jn(P,H,A),P.side=ti,P.needsUpdate=!0,jn(P,H,A),P.side=Ht):jn(P,H,A)}this.compile=function(P,H,Q=null){Q===null&&(Q=P),D!==null&&D.renderStart(P,H,Q),x=Se.get(Q),x.init(H),S.push(x),Q.traverseVisible(function(I){I.isLight&&I.layers.test(H.layers)&&(x.pushLight(I),I.castShadow&&x.pushShadow(I))}),P!==Q&&P.traverseVisible(function(I){I.isLight&&I.layers.test(H.layers)&&(x.pushLight(I),I.castShadow&&x.pushShadow(I))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),xe=this.localClippingEnabled,me=ke.init(this.clippingPlanes,xe),me===!0&&ke.setGlobalState(this.clippingPlanes,H),D!==null&&qe.render(x.state.shadowsArray,Q,H);let A=new Set;return P.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let k=I.material;if(k)if(Array.isArray(k))for(let X=0;X<k.length;X++){let V=k[X];Do(V,Q,H,I),A.add(V)}else Do(k,Q,H,I),A.add(k)}),x=S.pop(),D!==null&&D.renderEnd(),A},this.compileAsync=function(P,H,Q=null){let A=this.compile(P,H,Q);return new Promise(I=>{function k(){if(A.forEach(function(X){let J=K.get(X).currentProgram;(J===void 0||J.isReady())&&A.delete(X)}),A.size===0){I(P);return}setTimeout(k,10)}at.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Lo=null;function No(P){Lo&&Lo(P)}function Fo(){Ii.stop()}function Uo(){Ii.start()}let Ii=new zp;Ii.setAnimationLoop(No),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(P){Lo=P,Ve.setAnimationLoop(P),P===null?Ii.stop():Ii.start()},Ve.addEventListener("sessionstart",Fo),Ve.addEventListener("sessionend",Uo),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(P,H);let Q=Ve.enabled===!0&&Ve.isPresenting===!0,A=_!==null&&(he===null||Q)&&_.begin(R,he);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,H,he),x=Se.get(P,S.length),x.init(H),x.state.textureUnits=te.getTextureUnits(),S.push(x),be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ce.setFromProjectionMatrix(be,di,H.reversedDepth),xe=this.localClippingEnabled,me=ke.init(this.clippingPlanes,xe),v=Ae.get(P,E.length),v.init(),E.push(v),Ve.enabled===!0&&Ve.isPresenting===!0){let X=R.xr.getDepthSensingMesh();X!==null&&Fn(X,H,-1/0,R.sortObjects)}Fn(P,H,0,R.sortObjects),v.finish(),D!==null&&D.updateLights(x.state.lightsArray),R.sortObjects===!0&&v.sort(_e,pe),Le=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Le&&it.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&ke.beginShadows();let I=x.state.shadowsArray;if(qe.render(I,P,H),me===!0&&ke.endShadows(),(A&&_.hasRenderPass())===!1){let X=v.opaque,V=v.transmissive;if(x.setupLights(),H.isArrayCamera){let J=H.cameras;if(V.length>0)for(let B=0,ae=J.length;B<ae;B++){let oe=J[B];js(X,V,P,oe)}Le&&it.render(P);for(let B=0,ae=J.length;B<ae;B++){let oe=J[B];Oo(v,P,oe,oe.viewport)}}else V.length>0&&js(X,V,P,H),Le&&it.render(P),Oo(v,P,H)}he!==null&&Z===0&&(te.updateMultisampleRenderTarget(he),te.updateRenderTargetMipmap(he)),A&&_.end(R),P.isScene===!0&&P.onAfterRender(R,P,H),le.resetDefaultState(),$=-1,ne=null,S.pop(),S.length>0?(x=S[S.length-1],te.setTextureUnits(x.state.textureUnits),me===!0&&ke.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,D!==null&&D.renderEnd()};function Fn(P,H,Q,A){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLightProbeGrid)x.pushLightProbeGrid(P);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ce)){A&&Fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);let X=fe.update(P),V=P.material;V.visible&&v.push(P,X,V,Q,Fe.z,null,H)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ce))){let X=fe.update(P),V=P.material;if(A&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Fe.copy(P.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Fe.copy(X.boundingSphere.center)),Fe.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray(V)){let J=X.groups;for(let B=0,ae=J.length;B<ae;B++){let oe=J[B],ee=V[oe.materialIndex];ee&&ee.visible&&v.push(P,X,ee,Q,Fe.z,oe,H)}}else V.visible&&v.push(P,X,V,Q,Fe.z,null,H)}}let k=P.children;for(let X=0,V=k.length;X<V;X++)Fn(k[X],H,Q,A)}function Oo(P,H,Q,A){let{opaque:I,transmissive:k,transparent:X}=P;x.setupLightsView(Q),me===!0&&ke.setGlobalState(R.clippingPlanes,Q),A&&T.viewport(re.copy(A)),I.length>0&&Ji(I,H,Q),k.length>0&&Ji(k,H,Q),X.length>0&&Ji(X,H,Q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function js(P,H,Q,A){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[A.id]===void 0){let ee=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[A.id]=new It(1,1,{generateMipmaps:!0,type:ee?kt:Tn,minFilter:Dn,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let k=x.state.transmissionRenderTarget[A.id],X=A.viewport||re;k.setSize(X.z*R.transmissionResolutionScale,X.w*R.transmissionResolutionScale);let V=R.getRenderTarget(),J=R.getActiveCubeFace(),B=R.getActiveMipmapLevel();R.setRenderTarget(k),R.getClearColor(je),Ze=R.getClearAlpha(),Ze<1&&R.setClearColor(16777215,.5),R.clear(),Le&&it.render(Q);let ae=R.toneMapping;R.toneMapping=gi;let oe=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),x.setupLightsView(A),me===!0&&ke.setGlobalState(R.clippingPlanes,A),Ji(P,Q,A),te.updateMultisampleRenderTarget(k),te.updateRenderTargetMipmap(k),at.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let ye=0,Qe=H.length;ye<Qe;ye++){let dt=H[ye],{object:nt,geometry:pt,material:Ce,group:vt}=dt;if(Ce.side===Ht&&nt.layers.test(A.layers)){let et=Ce.side;Ce.side=xn,Ce.needsUpdate=!0,_i(nt,Q,A,pt,Ce,vt),Ce.side=et,Ce.needsUpdate=!0,ee=!0}}ee===!0&&(te.updateMultisampleRenderTarget(k),te.updateRenderTargetMipmap(k))}R.setRenderTarget(V,J,B),R.setClearColor(je,Ze),oe!==void 0&&(A.viewport=oe),R.toneMapping=ae}function Ji(P,H,Q){let A=H.isScene===!0?H.overrideMaterial:null;for(let I=0,k=P.length;I<k;I++){let X=P[I],{object:V,geometry:J,group:B}=X,ae=X.material;ae.allowOverride===!0&&A!==null&&(ae=A),V.layers.test(Q.layers)&&_i(V,H,Q,J,ae,B)}}function _i(P,H,Q,A,I,k){D!==null&&I.isNodeMaterial&&D.setObject(P,I),P.onBeforeRender(R,H,Q,A,I,k),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),I.onBeforeRender(R,H,Q,A,P,k),I.transparent===!0&&I.side===Ht&&I.forceSinglePass===!1?(I.side=xn,I.needsUpdate=!0,R.renderBufferDirect(Q,H,A,I,P,k),I.side=ti,I.needsUpdate=!0,R.renderBufferDirect(Q,H,A,I,P,k),I.side=Ht):R.renderBufferDirect(Q,H,A,I,P,k),P.onAfterRender(R,H,Q,A,I,k)}function jn(P,H,Q){H.isScene!==!0&&(H=We);let A=K.get(P),I=x.state.lights,k=x.state.shadowsArray,X=I.state.version,V=Ee.getParameters(P,I.state,k,H,Q,x.state.lightProbeGridArray),J=Ee.getProgramCacheKey(V),B=A.programs;A.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?H.environment:null,A.fog=H.fog;let ae=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;A.envMap=ge.get(P.envMap||A.environment,ae),A.envMapRotation=A.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,B===void 0&&(P.addEventListener("dispose",Bn),B=new Map,A.programs=B);let oe=B.get(J);if(oe!==void 0){if(A.currentProgram===oe&&A.lightsStateVersion===X)return fh(P,V),oe}else V.uniforms=Ee.getUniforms(P),D!==null&&P.isNodeMaterial&&D.build(P,Q,V),P.onBeforeCompile(V,R),oe=Ee.acquireProgram(V,J),B.set(J,oe),A.uniforms=V.uniforms;let ee=A.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ee.clippingPlanes=ke.uniform),fh(P,V),A.needsLights=Bo(P),A.lightsStateVersion=X,A.needsLights&&(ee.ambientLightColor.value=I.state.ambient,ee.lightProbe.value=I.state.probe,ee.sunLights.value=I.state.sun,ee.sunLightShadows.value=I.state.sunShadow,ee.directionalLights.value=I.state.directional,ee.directionalLightShadows.value=I.state.directionalShadow,ee.spotLights.value=I.state.spot,ee.spotLightShadows.value=I.state.spotShadow,ee.rectAreaLights.value=I.state.rectArea,ee.ltc_1.value=I.state.rectAreaLTC1,ee.ltc_2.value=I.state.rectAreaLTC2,ee.pointLights.value=I.state.point,ee.pointLightShadows.value=I.state.pointShadow,ee.hemisphereLights.value=I.state.hemi,ee.sunShadowMatrix.value=I.state.sunShadowMatrix,ee.sunShadowCascade.value=I.state.sunShadowCascade,ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ee.spotLightMatrix.value=I.state.spotLightMatrix,ee.spotLightMap.value=I.state.spotLightMap,ee.pointShadowMatrix.value=I.state.pointShadowMatrix),A.lightProbeGrid=x.state.lightProbeGridArray.length>0,A.currentProgram=oe,A.uniformsList=null,oe}function ai(P){if(P.uniformsList===null){let H=P.currentProgram.getUniforms();P.uniformsList=Wr.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function fh(P,H){let Q=K.get(P);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function ko(P,H){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let Q=0,A=P.length;Q<A;Q++){let I=P[Q];if(I.texture!==null&&I.boundingBox.containsPoint(b))return I}return null}function ph(P,H,Q,A,I){H.isScene!==!0&&(H=We),te.resetTextureUnits();let k=H.fog,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,V=he===null?R.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ft.workingColorSpace,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,B=ge.get(A.envMap||X,J),ae=A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,oe=!!Q.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),ee=!!Q.morphAttributes.position,ye=!!Q.morphAttributes.normal,Qe=!!Q.morphAttributes.color,dt=gi;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(dt=R.toneMapping);let nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pt=nt!==void 0?nt.length:0,Ce=K.get(A),vt=x.state.lights;if(me===!0&&(xe===!0||P!==ne)){let Ct=P===ne&&A.id===$;ke.setState(A,P,Ct)}let et=!1;A.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==vt.state.version||Ce.outputColorSpace!==V||I.isBatchedMesh&&Ce.batching===!1||!I.isBatchedMesh&&Ce.batching===!0||I.isBatchedMesh&&Ce.batchingColor===!0&&I._colorsTexture===null||I.isBatchedMesh&&Ce.batchingColor===!1&&I._colorsTexture!==null||I.isInstancedMesh&&Ce.instancing===!1||!I.isInstancedMesh&&Ce.instancing===!0||I.isSkinnedMesh&&Ce.skinning===!1||!I.isSkinnedMesh&&Ce.skinning===!0||I.isInstancedMesh&&Ce.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ce.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ce.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ce.instancingMorph===!1&&I.morphTexture!==null||Ce.envMap!==B||A.fog===!0&&Ce.fog!==k||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ke.numPlanes||Ce.numIntersection!==ke.numIntersection)||Ce.vertexAlphas!==ae||Ce.vertexTangents!==oe||Ce.morphTargets!==ee||Ce.morphNormals!==ye||Ce.morphColors!==Qe||Ce.toneMapping!==dt||Ce.morphTargetsCount!==pt||!!Ce.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Ce.__version=A.version);let Jt=Ce.currentProgram;et===!0&&(Jt=jn(A,H,I),D&&A.isNodeMaterial&&D.onUpdateProgram(A,Jt,Ce));let Lt=!1,oi=!1,Ys=!1,At=Jt.getUniforms(),Vt=Ce.uniforms;if(T.useProgram(Jt.program)&&(Lt=!0,oi=!0,Ys=!0),A.id!==$&&($=A.id,oi=!0),Ce.needsLights){let Ct=ko(x.state.lightProbeGridArray,I);Ce.lightProbeGrid!==Ct&&(Ce.lightProbeGrid=Ct,oi=!0)}if(Lt||ne!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",P.projectionMatrix),At.setValue(G,"viewMatrix",P.matrixWorldInverse);let $i=At.map.cameraPosition;$i!==void 0&&$i.setValue(G,Me.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&At.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),ne!==P&&(ne=P,oi=!0,Ys=!0)}if(Ce.needsLights&&(vt.state.sunShadowMap.length>0&&At.setValue(G,"sunShadowMap",vt.state.sunShadowMap,te),vt.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",vt.state.directionalShadowMap,te),vt.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",vt.state.spotShadowMap,te),vt.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",vt.state.pointShadowMap,te)),I.isSkinnedMesh){At.setOptional(G,I,"bindMatrix"),At.setOptional(G,I,"bindMatrixInverse");let Ct=I.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),At.setValue(G,"boneTexture",Ct.boneTexture,te))}I.isBatchedMesh&&(At.setOptional(G,I,"batchingTexture"),At.setValue(G,"batchingTexture",I._matricesTexture,te),At.setOptional(G,I,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",I._indirectTexture,te),At.setOptional(G,I,"batchingColorTexture"),I._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",I._colorsTexture,te));let Zi=Q.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&W.update(I,Q,Jt),(oi||Ce.receiveShadow!==I.receiveShadow)&&(Ce.receiveShadow=I.receiveShadow,At.setValue(G,"receiveShadow",I.receiveShadow)),(A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial)&&A.envMap===null&&H.environment!==null&&(Vt.envMapIntensity.value=H.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Py()),oi){if(At.setValue(G,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&mh(Vt,Ys),k&&A.fog===!0&&Ge.refreshFogUniforms(Vt,k),Ge.refreshMaterialUniforms(Vt,A,q,O,x.state.transmissionRenderTarget[P.id]),Ce.needsLights&&Ce.lightProbeGrid){let Ct=Ce.lightProbeGrid;Vt.probesSH.value=Ct.texture,Vt.probesMin.value.copy(Ct.boundingBox.min),Vt.probesMax.value.copy(Ct.boundingBox.max),Vt.probesResolution.value.copy(Ct.resolution)}Wr.upload(G,ai(Ce),Vt,te)}if(A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Wr.upload(G,ai(Ce),Vt,te),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&At.setValue(G,"center",I.center),At.setValue(G,"modelViewMatrix",I.modelViewMatrix),At.setValue(G,"normalMatrix",I.normalMatrix),At.setValue(G,"modelMatrix",I.matrixWorld),A.uniformsGroups!==void 0){let Ct=A.uniformsGroups;for(let $i=0,Ks=Ct.length;$i<Ks;$i++){let Ud=Ct[$i];ue.update(Ud,Jt),ue.bind(Ud,Jt)}}return Jt}function mh(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.sunLights.needsUpdate=H,P.sunLightShadows.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function Bo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(P,H,Q){let A=K.get(P);A.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,A.__autoAllocateDepthBuffer===!1&&(A.__useRenderToTexture=!1),K.get(P.texture).__webglTexture=H,K.get(P.depthTexture).__webglTexture=A.__autoAllocateDepthBuffer?void 0:Q,A.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){let Q=K.get(P);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,Q=0){he=P,Y=H,Z=Q;let A=null,I=!1,k=!1;if(P){let V=K.get(P);if(V.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(G.FRAMEBUFFER,V.__webglFramebuffer),re.copy(P.viewport),Pe.copy(P.scissor),Re=P.scissorTest,T.viewport(re),T.scissor(Pe),T.setScissorTest(Re),$=-1;return}else if(V.__webglFramebuffer===void 0)te.setupRenderTarget(P);else if(V.__hasExternalTextures)te.rebindTextures(P,K.get(P.texture).__webglTexture,K.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ae=P.depthTexture;if(V.__boundDepthTexture!==ae){if(ae!==null&&K.has(ae)&&(P.width!==ae.image.width||P.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(P)}}let J=P.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(k=!0);let B=K.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(B[H])?A=B[H][Q]:A=B[H],I=!0):P.samples>0&&te.useMultisampledRTT(P)===!1?A=K.get(P).__webglMultisampledFramebuffer:Array.isArray(B)?A=B[Q]:A=B,re.copy(P.viewport),Pe.copy(P.scissor),Re=P.scissorTest}else re.copy(De).multiplyScalar(q).floor(),Pe.copy(Je).multiplyScalar(q).floor(),Re=$e;if(Q!==0&&(A=N),T.bindFramebuffer(G.FRAMEBUFFER,A)&&T.drawBuffers(P,A),T.viewport(re),T.scissor(Pe),T.setScissorTest(Re),I){let V=K.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,V.__webglTexture,Q)}else if(k){let V=H;for(let J=0;J<P.textures.length;J++){let B=K.get(P.textures[J]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+J,B.__webglTexture,Q,V)}}else if(P!==null&&Q!==0){let V=K.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,V.__webglTexture,Q)}$=-1};function zo(P){let H=K.get(P);return(H.__readFormat!==P.format||H.__readType!==P.type)&&(H.__readFormat=P.format,H.__readType=P.type,H.__formatReadable=F.textureFormatReadable(P.format),H.__typeReadable=F.textureTypeReadable(P.type)),H}this.readRenderTargetPixels=function(P,H,Q,A,I,k,X,V=0){if(!(P&&P.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&X!==void 0&&(J=J[X]),J){T.bindFramebuffer(G.FRAMEBUFFER,J);try{let B=P.textures[V],ae=B.format,oe=B.type;P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+V);let ee=zo(B);if(ee.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-A&&Q>=0&&Q<=P.height-I&&G.readPixels(H,Q,A,I,ve.convert(ae),ve.convert(oe),k)}finally{let B=he!==null?K.get(he).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,B)}}},this.readRenderTargetPixelsAsync=async function(P,H,Q,A,I,k,X,V=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&X!==void 0&&(J=J[X]),J)if(H>=0&&H<=P.width-A&&Q>=0&&Q<=P.height-I){T.bindFramebuffer(G.FRAMEBUFFER,J);let B=P.textures[V],ae=B.format,oe=B.type;P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+V);let ee=zo(B);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ye),G.bufferData(G.PIXEL_PACK_BUFFER,k.byteLength,G.STREAM_READ),G.readPixels(H,Q,A,I,ve.convert(ae),ve.convert(oe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Qe=he!==null?K.get(he).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,Qe);let dt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cp(G,dt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,k),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ye),G.deleteSync(dt),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,Q=0){let A=Math.pow(2,-Q),I=Math.floor(P.image.width*A),k=Math.floor(P.image.height*A),X=H!==null?H.x:0,V=H!==null?H.y:0;te.setTexture2D(P,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,X,V,I,k),T.unbindTexture()},this.copyTextureToTexture=function(P,H,Q=null,A=null,I=0,k=0){let X,V,J,B,ae,oe,ee,ye,Qe,dt=P.isCompressedTexture?P.mipmaps[k]:P.image;if(Q!==null)X=Q.max.x-Q.min.x,V=Q.max.y-Q.min.y,J=Q.isBox3?Q.max.z-Q.min.z:1,B=Q.min.x,ae=Q.min.y,oe=Q.isBox3?Q.min.z:0;else{let Vt=Math.pow(2,-I);X=Math.floor(dt.width*Vt),V=Math.floor(dt.height*Vt),P.isDataArrayTexture?J=dt.depth:P.isData3DTexture?J=Math.floor(dt.depth*Vt):J=1,B=0,ae=0,oe=0}A!==null?(ee=A.x,ye=A.y,Qe=A.z):(ee=0,ye=0,Qe=0);let nt=ve.convert(H.format),pt=ve.convert(H.type),Ce;H.isData3DTexture?(te.setTexture3D(H,0),Ce=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(te.setTexture2DArray(H,0),Ce=G.TEXTURE_2D_ARRAY):(te.setTexture2D(H,0),Ce=G.TEXTURE_2D),T.activeTexture(G.TEXTURE0),T.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);let vt=T.getParameter(G.UNPACK_ROW_LENGTH),et=T.getParameter(G.UNPACK_IMAGE_HEIGHT),Jt=T.getParameter(G.UNPACK_SKIP_PIXELS),Lt=T.getParameter(G.UNPACK_SKIP_ROWS),oi=T.getParameter(G.UNPACK_SKIP_IMAGES);T.pixelStorei(G.UNPACK_ROW_LENGTH,dt.width),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt.height),T.pixelStorei(G.UNPACK_SKIP_PIXELS,B),T.pixelStorei(G.UNPACK_SKIP_ROWS,ae),T.pixelStorei(G.UNPACK_SKIP_IMAGES,oe);let Ys=P.isDataArrayTexture||P.isData3DTexture,At=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){let Vt=K.get(P),Zi=K.get(H),Ct=K.get(Vt.__renderTarget),$i=K.get(Zi.__renderTarget);T.bindFramebuffer(G.READ_FRAMEBUFFER,Ct.__webglFramebuffer),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ks=0;Ks<J;Ks++)Ys&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(P).__webglTexture,I,oe+Ks),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(H).__webglTexture,k,Qe+Ks)),G.blitFramebuffer(B,ae,X,V,ee,ye,X,V,G.DEPTH_BUFFER_BIT,G.NEAREST);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(I!==0||P.isRenderTargetTexture||K.has(P)){let Vt=K.get(P),Zi=K.get(H);T.bindFramebuffer(G.READ_FRAMEBUFFER,U),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,z);for(let Ct=0;Ct<J;Ct++)Ys?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.__webglTexture,I,oe+Ct):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vt.__webglTexture,I),At?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zi.__webglTexture,k,Qe+Ct):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Zi.__webglTexture,k),I!==0?G.blitFramebuffer(B,ae,X,V,ee,ye,X,V,G.COLOR_BUFFER_BIT,G.NEAREST):At?G.copyTexSubImage3D(Ce,k,ee,ye,Qe+Ct,B,ae,X,V):G.copyTexSubImage2D(Ce,k,ee,ye,B,ae,X,V);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else At?P.isDataTexture||P.isData3DTexture?G.texSubImage3D(Ce,k,ee,ye,Qe,X,V,J,nt,pt,dt.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Ce,k,ee,ye,Qe,X,V,J,nt,dt.data):G.texSubImage3D(Ce,k,ee,ye,Qe,X,V,J,nt,pt,dt):P.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,k,ee,ye,X,V,nt,pt,dt.data):P.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,k,ee,ye,dt.width,dt.height,nt,dt.data):G.texSubImage2D(G.TEXTURE_2D,k,ee,ye,X,V,nt,pt,dt);T.pixelStorei(G.UNPACK_ROW_LENGTH,vt),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,et),T.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),T.pixelStorei(G.UNPACK_SKIP_ROWS,Lt),T.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),k===0&&H.generateMipmaps&&G.generateMipmap(Ce),T.unbindTexture()},this.initRenderTarget=function(P){K.get(P).__webglFramebuffer===void 0&&te.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?te.setTextureCube(P,0):P.isData3DTexture?te.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?te.setTexture2DArray(P,0):te.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){Y=0,Z=0,he=null,T.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var _o=new L;function si(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;_o.copy(e),_o[n]=0,_o.normalize();let c=.5*a/(a+o),h=1-_o.angleTo(i)/l;return Math.sign(_o[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Bt=class i extends on{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,y=new L,m=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[M+0]=si(y,c,"z","y",r,n),f[M+1]=1-si(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[M+0]=1-si(y,c,"z","y",r,n),f[M+1]=1-si(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[M+0]=1-si(y,c,"x","z",r,e),f[M+1]=si(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-si(y,c,"x","z",r,e),f[M+1]=1-si(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-si(y,c,"x","y",r,e),f[M+1]=1-si(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[M+0]=si(y,c,"x","y",r,e),f[M+1]=1-si(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Iy=Object.freeze({width:1.345,length:1.964,height:.05,legs:8});function jp(i,e=new Ue){let t=[],n=new L;i.updateWorldMatrix(!0,!0);let s=-1/0;i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry.attributes.position,l=new Ue().multiplyMatrices(e,a.matrixWorld);for(let c=0;c<o.count;c++)n.fromBufferAttribute(o,c).applyMatrix4(l),s=Math.max(s,n.z)}),i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Ue().multiplyMatrices(e,a.matrixWorld);for(let u=0;u<(c?.count||l.count);u+=3){let d=[];for(let f=0;f<3;f++)n.fromBufferAttribute(l,c?c.getX(u+f):u+f).applyMatrix4(h),d.push(n.clone());if(d.every(f=>f.z>s-.014&&Math.abs(f.x)<.09))for(let f of d)t.push(f.x,f.y,f.z)}});let r=new lt;return r.setAttribute("position",new Oe(t,3)),r.computeVertexNormals(),r}function Ci(i,e,t,n,s=.002){let r=new Te(new Bt(...e,2,Math.min(s,...e.map(a=>a/3))),n);return r.position.set(...t),r.castShadow=r.receiveShadow=!0,i.add(r),r}function Yp(i,e=!1){let t=new Xe;t.name=e?"Slimline II tall reference":"Slimline II reference";let{width:n,length:s}=Iy,r=e?1.88:1.83,a=-.62;for(let l of[-n/2+.016,n/2-.016])Ci(t,[.032,.05,s],[l,r,a],i.darkmetal),Ci(t,[.006,.003,s-.04],[l,r+.026,a],i.trim,5e-4);for(let l of[-1,1])Ci(t,[n-.032,.05,.032],[0,r,a+l*(s/2-.016)],i.darkmetal);for(let l=0;l<10;l++){let c=a-s/2+.1+l*(s-.2)/9;Ci(t,[n-.064,.024,.09],[0,r-.006,c],i.darkmetal),Ci(t,[n-.08,.003,.006],[0,r+.007,c],i.trim,5e-4)}for(let l of[-1,1])for(let c of[-1.47,-.87,-.27,.27]){let h=r-.025-1.695,u=Ci(t,[.026,h,.1],[l*.675,1.695+h/2,c],i.darkmetal);u.name="Gutter mounting leg",u.rotation.z=l*.29,Ci(t,[.09,.018,.115],[l*.712,1.69,c],i.rubber),Ci(t,[.018,.052,.103],[l*.751,1.672,c],i.darkmetal);for(let d of[-.015,.015]){let f=new Te(new zt(.006,.006,.02,6),i.metal);f.rotation.z=Math.PI/2,f.position.set(l*.765,1.691+d,c),t.add(f)}}let o=Ci(t,[n-.08,.092,.009],[0,r-.075,a+s/2-.015],i.darkmetal);return o.rotation.x=-.48,t}function Kp(i){let e=new Xe;e.name="Contoured four-door rain visors";let t=[[[.35,1.641],[-.316,1.641],[-.316,1.598],[.326,1.598],[.458,1.362],[.492,1.382]],[[-.435,1.641],[-1.184,1.641],[-1.184,1.595],[-.435,1.595]]];for(let n of[-1,1])for(let s of t){let r=[],a=[],o=s.length;for(let u of[0,.004])for(let[d,f]of s)r.push(n*(.746-(f-1.14)*.105+.018+u),f,d);let l=s.map(([u,d])=>new se(u,d));for(let[u,d,f]of Kn.triangulateShape(l,[]))a.push(u,d,f,f+o,d+o,u+o);for(let u=0;u<o;u++){let d=(u+1)%o;a.push(u,d,d+o,u,d+o,u+o)}let c=new lt;c.setAttribute("position",new Oe(r,3)),c.setIndex(a),c.computeVertexNormals();let h=new Te(c,i);h.castShadow=!1,e.add(h)}return e}function Jp(i,e){let t=new Xe;t.name="Moulded spare-wheel centre cover",t.position.z=.1;let n=[[0,.035],[.18,.035],[.215,.031],[.232,.02],[.239,.008],[.239,-.017],[.23,-.022]],s=new Te(new mi(n.toReversed().map(a=>new se(...a)),96),i.trim);s.name="Spare cover shell",s.rotation.x=-Math.PI/2,s.position.set(0,.995,-2.045),s.castShadow=!0,t.add(s);let r=Ci(t,[.36,.02,.005],[0,.922,-2.083],i.darkmetal,.002);if(r.rotation.z=-.04,e?.attributes.position.count){let a=e.clone();a.computeBoundingBox();let o=a.boundingBox.getCenter(new L);a.translate(-o.x,-o.y,-o.z),a.scale(.63,.63,.63),a.rotateY(Math.PI),a.translate(0,1.075,-2.086);let l=new Te(a,i.chrome);l.name="Spare cover Suzuki emblem",t.add(l)}return t}function Gc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new lt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let g=Zp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Zp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new $t(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function $p(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,w=o.length;M<w;M++){let b=o[M],v=i.attributes[b];l[b]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let x=i.morphAttributes[b];x&&(c[b]||(c[b]=[]),x.forEach((E,S)=>{let _=new E.array.constructor(E.count*E.itemSize);c[b][S]=new E.constructor(_,E.itemSize,E.normalized)}))}let f=e*.5,g=Math.log10(1/e),y=Math.pow(10,g),m=f*y;for(let M=0;M<r;M++){let w=n?n.getX(M):M,b="";for(let v=0,x=o.length;v<x;v++){let E=o[v],S=i.getAttribute(E),_=S.itemSize;for(let R=0;R<_;R++)b+=`${Math.trunc(S[u[R]](w)*y+m)},`}if(b in t)h.push(t[b]);else{for(let v=0,x=o.length;v<x;v++){let E=o[v],S=i.getAttribute(E),_=i.morphAttributes[E],R=S.itemSize,C=l[E],D=c[E];for(let N=0;N<R;N++){let U=u[N],z=d[N];if(C[z](a,S[U](w)),_)for(let Y=0,Z=_.length;Y<Z;Y++)D[Y][z](a,_[Y][U](w))}}t[b]=a,h.push(a),a++}}let p=i.clone();for(let M in i.attributes){let w=l[M];if(p.setAttribute(M,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),M in c)for(let b=0;b<c[M].length;b++){let v=c[M][b];p.morphAttributes[M][b]=new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)}}return p.setIndex(h),p}function Hu(i,e){if(e===xu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zr||e===mo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===zr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Qp="https://www.skinny-jim.com/shop/p/",em="https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html",Dy=Object.freeze({skinnyjim_backbone:{sourceURL:Qp+"backbone-rear-door-cargo-mount",bodyStyles:["3door","5door"],width:.315,height:.585,doorClearance:.112},skinnyjim_jerry_tray:{sourceURL:Qp+"jerry-can-gas-cargo-carrier",bodyStyles:["3door","5door"],internalWidth:.37,internalDepth:.205,upstand:.075,requires:["skinnyjim_backbone"]},suzuki_nomade_flatrack:{sourceURL:em,bodyStyles:["5door"],width:1.43,length:1.509,height:.177},suzuki_nomade_steelwheel:{sourceURL:em,bodyStyles:["5door"],diameter:.381,beadWidth:.1397,offset:null}});function Bs(i,e,t,n,s=[0,0,0]){let r=new Te(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function An(i,e,t,n,s,r=.002){return Bs(i,new Bt(...e,2,Math.min(r,...e.map(a=>a/3))),n,s,t)}function Xr(i,e,t,n,s=.006){let r=new en,a=i-t/2,o=e-n/2;return s=Math.min(s,t/2,n/2),r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function Hc(i,e,t,n,s=[0,0,0],r=.004){return Bs(i,new wn(e,{depth:r,bevelEnabled:!0,bevelSize:7e-4,bevelThickness:7e-4,bevelSegments:1,curveSegments:6}),t,n,s)}function vo(i,e,t,n,s){let r=Bs(i,new zt(.0055,.0055,.006,6),s,"Stainless mounting bolt",[e,t,n]);return r.rotation.x=Math.PI/2,r}function Wu(i,e){return i.name=e,i.userData.cataloguePart={...Dy[e],id:e,previewKind:"representative",disclosure:"Locally authored from public product photos and dimensions; not exact CAD or certified fitment."},i}function tm(i){let e=Wu(new Xe,"skinnyjim_backbone");e.position.z=.078;let t=[[-.1575,-.2925],[.095,-.2925],[.1575,-.2475],[.1,-.17],[.08,-.07],[.08,.07],[.105,.18],[.1575,.215],[.035,.2925],[-.1575,.2925]],n=new Ot(t.map(a=>new se(...a)));for(let a of[-.19,-.04,.12,.22])n.holes.push(Xr(-.045,a,.031,a===-.04?.072:.031));for(let a of[-.24,.15])for(let o of[-.115,-.077,-.039]){let l=new en;l.absarc(o,a,.0035,0,Math.PI*2,!1),n.holes.push(l)}let s=Hc(e,n,i.darkmetal,"Backbone perforated main plate",[-.5275,1.035,-1.928]);s.userData.publishedDimensions={width:.315,height:.585},An(e,[.004,.585,.018],[-.687,1.035,-1.918],i.darkmetal,"Backbone folded hinge edge");for(let a of[.76,1.24])An(e,[.055,.045,.112],[-.665,a,-1.868],i.darkmetal,"Door hinge standoff"),vo(e,-.665,a,-1.935,i.metal);let r=new Ot([[-.41,-.15],[-.08,-.15],[-.08,.15],[-.41,.15]].map(a=>new se(...a)));for(let a of[-.085,0,.085])r.holes.push(Xr(-.27,a,.027,.033));Hc(e,r,i.darkmetal,"Spare mount attachment bridge",[0,1.005,-1.841]),An(e,[.04,.3,.086],[-.4,1.005,-1.882],i.darkmetal,"Bridge folded offset");for(let a of[.9,1.11])vo(e,-.12,a,-1.848,i.metal);for(let a of[.8,1.28])vo(e,-.49,a,-1.935,i.metal);return e}function nm(i){let e=Wu(new Xe,"skinnyjim_jerry_tray"),t=.37,n=.205,s=.075,r=An(e,[t,.004,n],[0,0,0],i.darkmetal,"Jerry tray floor"),a=An(e,[t-.014,.003,n-.014],[0,.0035,0],i.rubber,"Neoprene tray pad");for(let o of[-1,1]){let l=new Ot(Xr(0,s/2,t,s,.012).getPoints(8));for(let u of[-.135,0,.135])l.holes.push(Xr(u,.039,u===0?.09:.035,.024));Hc(e,l,i.darkmetal,"Slotted tray upstand",[0,.002,o*(n/2+.002)]);let c=new Ot(Xr(0,s/2,n,s,.012).getPoints(8));c.holes.push(Xr(0,.04,.072,.025));let h=Hc(e,c,i.darkmetal,"Slotted tray end",[o*(t/2+.002),.002,0]);h.rotation.y=Math.PI/2}for(let o of[-.12,.12])An(e,[.025,.0025,n-.01],[o,.006,0],i.canvas,"Webbing strap"),An(e,[.034,.009,.029],[o,.011,-.032],i.trim,"Cam buckle"),An(e,[.019,.003,.015],[o,.016,-.032],i.metal,"Buckle lever");for(let o of[-.1,.1])An(e,[.035,.066,.004],[o,.036,n/2+.009],i.darkmetal,"Tray mounting flange"),vo(e,o,.049,n/2+.014,i.metal);return e.position.set(-.52,.843,-1.961),r.userData.internalFootprint=[t,n],a.userData.notIncluded="Fuel container",e}function im(i){let e=Wu(new Xe,"suzuki_nomade_flatrack"),t=1.43,n=1.509,s=1.8,r=-.52;for(let a of[-t/2+.019,t/2-.019])An(e,[.038,.035,n],[a,s,r],i.darkmetal,"OEM rack perimeter",.008);for(let a of[-1,1])An(e,[t-.038,.035,.038],[0,s,r+a*(n/2-.019)],i.darkmetal,"OEM rack perimeter",.008);for(let a=0;a<5;a++){let o=r-n/2+.16+a*(n-.32)/4;An(e,[t-.075,.024,.12],[0,s-.004,o],i.darkmetal,"OEM rack slat");for(let l of[-.037,0,.037])An(e,[t-.086,.002,.005],[0,s+.009,o+l],i.trim,"Slat anti-slip channel",5e-4)}for(let a of[-1,1])for(let o of[r-n/2+.1,r,r+n/2-.1]){let l=An(e,[.028,.142,.084],[a*.681,s-.088,o],i.darkmetal,"OEM gutter mounting leg");l.rotation.z=a*.22,An(e,[.065,.013,.09],[a*.714,s-.153,o],i.rubber,"Gutter pad"),An(e,[.012,.046,.08],[a*.752,s-.136,o],i.darkmetal,"Gutter clamp");let c=vo(e,0,0,0,i.metal);c.rotation.set(0,0,Math.PI/2),c.position.set(a*.763,s-.136,o)}return e}function Ly(i){let e=new Xe;e.name="Nomade pressed steel wheel";let t=new Ot;t.absarc(0,0,.179,0,Math.PI*2,!1);let n=new en;n.absarc(0,0,.042,0,Math.PI*2,!1),t.holes.push(n);for(let b=0;b<10;b++){let v=b*Math.PI/5,x=new en;x.absellipse(Math.cos(v)*.127,Math.sin(v)*.127,.024,.027,v,v+Math.PI*2,!1),t.holes.push(x)}for(let b=0;b<5;b++){let v=b*Math.PI*2/5,x=new en;x.absarc(Math.cos(v)*.06985,Math.sin(v)*.06985,.008,0,Math.PI*2,!1),t.holes.push(x)}let s=new wn(t,{depth:.003,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:12}),r=[],a=[],o=[],l=s.attributes.position,c=s.attributes.normal,h=s.attributes.uv,u=(b,v)=>b.map((x,E)=>(x+v[E])/2),d=(b,v,x,E=0)=>{let S=(_,R)=>Math.hypot(_[0]-R[0],_[1]-R[1],_[2]-R[2]);if(E<4&&Math.max(S(b,v),S(v,x),S(x,b))>.028){let _=u(b,v),R=u(v,x),C=u(x,b);d(b,_,C,E+1),d(_,v,R,E+1),d(C,R,x,E+1),d(_,R,C,E+1);return}for(let _ of[b,v,x])r.push(..._.slice(0,3)),a.push(..._.slice(3,6)),o.push(..._.slice(6))};for(let b=0;b<l.count;b+=3)d(...[0,1,2].map(v=>[l.getX(b+v),l.getY(b+v),l.getZ(b+v),c.getX(b+v),c.getY(b+v),c.getZ(b+v),h.getX(b+v),h.getY(b+v)]));let f=new lt;f.setAttribute("position",new Oe(r,3)),f.setAttribute("normal",new Oe(a,3)),f.setAttribute("uv",new Oe(o,2));let g=$p(f,1e-6);s.dispose(),f.dispose();let y=g.attributes.position,m=g.attributes.normal;for(let b=0;b<y.count;b++){let v=y.getX(b),x=y.getY(b),E=Math.hypot(v,x),S=Math.min(1,Math.max(0,(E-.067)/.112));y.setZ(b,y.getZ(b)-.023*Math.sin(S*Math.PI)**2);let _=E>.067&&E<.179?-.023*Math.PI/.112*Math.sin(2*Math.PI*S):0,R=m.getX(b)-_*v/(E||1)*m.getZ(b),C=m.getY(b)-_*x/(E||1)*m.getZ(b),D=m.getZ(b),N=Math.hypot(R,C,D)||1;m.setXYZ(b,R/N,C/N,D/N)}Bs(e,g,i,"Ten-hole pressed steel disc");let p=[[.177,-.014],[.181,-.007],[.187,.005],[.1905,.007],[.1905,.002],[.187,-.003],[.18,-.015],[.173,-.045],[.169,-.083],[.181,-.132],[.1905,-.133]],M=Bs(e,new mi(p.map(b=>new se(...b)),96),i,"Rolled steel lip and barrel");M.rotation.x=Math.PI/2;for(let b=0;b<5;b++){let v=b*Math.PI*2/5,x=Bs(e,new zt(.0068,.0068,.01,6),i,"Steel wheel lug",[Math.cos(v)*.06985,Math.sin(v)*.06985,.006]);x.rotation.x=Math.PI/2}let w=Bs(e,new zt(.035,.035,.029,48),i,"Exposed centre hub",[0,0,-.004]);return w.rotation.x=Math.PI/2,e}var Vu=new WeakMap;function qu(i,e=!1){if(!i?.traverse)return 0;let t=Vu.get(i);if(!e){if(!t)return 0;for(let[s,r]of t.hidden)s.visible=r;for(let s of t.added)s.removeFromParent(),s.traverse(r=>r.geometry?.dispose());return t.material.dispose(),Vu.delete(i),t.added.length}if(t)return t.added.length;t={hidden:[],added:[],material:new Ke({name:"CatalogueSteelWheel",color:"#303438",roughness:.58,metalness:.3})};let n=[];i.traverse(s=>{(["StockWheels","AllTerrainWheels"].includes(s.name)||!s.name&&s.children.some(r=>r.isMesh&&r.material?.name==="TyreRubber"))&&n.push(s)});for(let s of n){let r=!!s.name;s.updateWorldMatrix(!0,!0);let a=new qt,o=new Map,l=new L,c=s.matrixWorld.clone().invert();if(s.traverse(d=>{if(!d.isMesh||(["MachinedAlloy","WheelGunmetal"].includes(d.material?.name)&&(t.hidden.push([d,d.visible]),d.visible=!1),d.material?.name!=="TyreRubber"))return;let f=d.geometry.attributes.position,g=c.clone().multiply(d.matrixWorld);for(let y=0;y<f.count;y++)if(l.fromBufferAttribute(f,y).applyMatrix4(g),a.expandByPoint(l),r){let m=`${Math.sign(l.x)},${Math.sign(l.z)}`;o.has(m)||o.set(m,new qt),o.get(m).expandByPoint(l)}}),a.isEmpty())continue;let h=a.getCenter(new L),u=r?[...o.values()].map(d=>{let f=d.getCenter(new L);return{side:Math.sign(f.x),x:f.x,y:f.y,z:f.z}}):[{side:Math.sign(s.parent?.position.x||1),x:h.x,y:h.y,z:h.z}];for(let d of u){let f=Ly(t.material);f.position.set(d.x+d.side*.086,d.y,d.z),f.rotation.y=d.side*Math.PI/2,s.add(f),t.added.push(f)}}return t.added.length?(Vu.set(i,t),t.added.length):(t.material.dispose(),0)}function sm(i){return qu(i,!1)}var Ny=Object.freeze(["canvas","tweed","houndstooth","leather"]),zs=i=>Ny.includes(i)?i:"canvas";function Gs(i){return i.traverse(e=>{if(!e.isMesh||!e.material?.userData.ownsTextures)return;let t=e.geometry.attributes.position,n=e.geometry.attributes.normal,s=e.geometry.attributes.uv;if(!(!s||!n)){for(let r=0;r<t.count;r++){let a=Math.abs(n.getX(r)),o=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r));s.setXY(r,a>o&&a>l?t.getZ(r):t.getX(r),o>a&&o>l?t.getZ(r):t.getY(r))}s.needsUpdate=!0}}),i}function Fy(i="canvas"){i=zs(i);let e=256,t=new Uint8Array(e*e*4),n=new Uint8Array(e*e*4),s=741;for(let a=0;a<e;a++)for(let o=0;o<e;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=s/4294967296-.5,c=Math.sin(o*Math.PI/2),h=Math.cos(a*Math.PI/2),u=Math.floor(o/8),d=Math.floor(a/8),f=222+l*16+c*8+h*6,g=238,y=128+c*19+h*16+l*22;if(i==="houndstooth"&&(f=(((u+d)%4<2?u%8<4:d%8<4)?64:238)+c*7+h*5+l*12),i==="tweed"&&(f=174+((u+d)%3===0?37:0)+c*16+h*14+l*28),i==="leather"){let p=l>.44?-36:0;f=231+l*9+p*.25,y=141+l*40+p,g=157+l*28}let m=(a*e+o)*4;for(let p=0;p<3;p++)t[m+p]=nn.clamp(f,0,255),n[m+p]=nn.clamp(p===1?g:y,0,255);t[m+3]=n[m+3]=255}function r(a,o){let l=new Sn(a,e,e);return l.colorSpace=o,l.wrapS=l.wrapT=Qt,l.repeat.set(i==="leather"?10:i==="houndstooth"?5:14,i==="leather"?10:i==="houndstooth"?5:14),l.generateMipmaps=!0,l.minFilter=Dn,l.anisotropy=4,l.needsUpdate=!0,l}return{map:r(t,bt),bump:r(n,xi)}}function qn(i="canvas",e="#a38b69"){i=zs(i);let t=Fy(i),n=new Gt({name:"UpgradeFabric_"+i,color:e,map:t.map,bumpMap:t.bump,bumpScale:i==="leather"?18e-5:45e-5,roughnessMap:t.bump,roughness:i==="leather"?.85:1,metalness:0,sheen:i==="leather"?0:.25,sheenRoughness:.85,sheenColor:"#aaa69c",clearcoat:i==="leather"?.08:0,envMapIntensity:.25});return n.userData.ownsTextures=!0,n.addEventListener("dispose",()=>{t.map.dispose(),t.bump.dispose()}),n}var Uy=Object.freeze({mod_reardoor_molle:{sourceURL:"https://www.mod.equipment/products/molly",bodyStyles:["3door","5door"],panelWidth:.3,panelHeight:.2675,cutout:.025,requires:"Screws into rear-door plastic trim; check vehicle-specific installation."},mod_halfmolly_5door:{sourceURL:"https://www.mod.equipment/products/half-molly-set-jimny-4-xl",bodyStyles:["5door"],panelWidth:.235,panelHeight:.2,requires:"Existing lower M6 points plus upper screws into plastic window trim."},exploresetups_drawer_5door:{sourceURL:"https://exploresetups.com/products/jimny-xl-5-door-drawer-system",bodyStyles:["5door"],width:1.11,depth:.46,height:.25,requires:"Matching Jimny XL false floor, sold separately; no sleeping platform shown."}});function ms(i,e,t,n,s=[0,0,0]){let r=new Te(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function gn(i,e,t,n,s,r,a,o,l,c=.002){return ms(i,new Bt(e,t,n,2,Math.min(c,e/3,t/3,n/3)),o,l,[s,r,a])}function Xu(i,e,t,n,s=.003){let r=new en,a=i-t/2,o=e-n/2;return r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function rm(i,e,t,n){let s=new Ot(Xu(0,0,i,e,.008).getPoints(8));for(let r=0;r<t;r++)for(let a=0;a<n;a++)s.holes.push(Xu((r-(t-1)/2)*.038,(a-(n-1)/2)*.037,.025,.025));return new wn(s,{depth:.002,bevelEnabled:!0,bevelSize:45e-5,bevelThickness:45e-5,bevelSegments:1,curveSegments:3})}function am(i,e,t,n,s){let r=ms(i,new zt(.0045,.0045,.003,6),s,"Panel screw",[e,t,n]);return r.rotation.x=Math.PI/2,r}function ju(i){let e=new Xe;return e.name=i,e.userData.cataloguePart={id:i,...Uy[i],previewKind:"representative",disclosure:"Original photo/dimension-guided approximation, not manufacturer CAD or certified fitment."},e}function Vc(i,e="5door"){let t=ju("mod_reardoor_molle"),n=-1.669+(e==="3door"?.17:0);for(let s of[-.172,.172]){let r=ms(t,rm(.3,.2675,7,6),i.darkmetal,"Rear-door perforated panel",[s,.955,n+.012]);r.userData.publishedSize=[.3,.2675];for(let a of[-.1375,.1375])for(let o of[-.114,.114])gn(t,.014,.014,.012,s+a,.955+o,n+.005,i.rubber,"Rear-door panel spacer"),am(t,s+a,.955+o,n+.017,i.metal)}return t}function Wc(i){let e=ju("mod_halfmolly_5door");for(let t of[-1,1]){let n=new Xe;n.position.set(t*.651,1.24,-1.36),n.rotation.y=t*Math.PI/2,e.add(n);let s=ms(n,rm(.235,.2,5,4),i.darkmetal,"Rear-window pocket panel");s.userData.publishedSize=[.235,.2],gn(n,.235,.003,.042,0,-.098,.02,i.darkmetal,"Folded pocket base");for(let r of[-.112,.112]){gn(n,.012,.2,.042,r,0,.02,i.darkmetal,"Pocket side return"),am(n,r,.085,.006,i.metal);let a=ms(n,new Xt(.009,.002,6,18),i.metal,"Lower M6 lashing eye",[r,-.087,.012]);a.rotation.x=.3}}return e}function qc(i,{open:e=!1}={}){let t=ju("exploresetups_drawer_5door"),n=qn("tweed","#373b3d");n.name="DrawerCharcoalCarpet",n.roughness=1,n.metalness=0,n.envMapIntensity=.15;let s=-1.445,r=.699,a=r+.25;gn(t,1.11,.018,.46,0,r-.013,s,i.trim,"Required false-floor mounting surface");let o=gn(t,.83,.015,.46,0,a-.0075,s,n,"Carpeted drawer top");o.userData.disposableMaterial=!0;for(let l of[-.4075,0,.4075])gn(t,.015,.235,.46,l,r+.1175,s,n,"Drawer carcass partition");gn(t,.83,.015,.46,0,r+.0075,s,n,"Drawer carcass base"),gn(t,.83,.235,.015,0,r+.1175,s+.2225,n,"Drawer rear carcass");for(let l of[-.2075,.2075]){gn(t,.389,.214,.016,l,r+.122,s-.228-(e?.3:0),n,"Flush drawer front");let c=new Xe;c.name="DrawerLatchAssembly",c.position.z=e?-.3:0,t.add(c),gn(c,.071,.052,.004,l,r+.12,s-.239,i.metal,"Recessed stainless latch surround",.006),gn(c,.054,.036,.005,l,r+.12,s-.242,i.trim,"Latch recess",.004),gn(c,.035,.011,.006,l,r+.12,s-.247,i.metal,"Folding latch pull",.003);let h=ms(c,new zt(.005,.005,.003,16),i.metal,"Drawer key cylinder",[l+.022,r+.12,s-.245]);if(h.rotation.x=Math.PI/2,e){gn(t,.37,.012,.43,l,r+.025,s-.3,n,"Open drawer tray");for(let u of[-.182,.182])gn(t,.012,.18,.43,l+u,r+.115,s-.3,n,"Open drawer side"),gn(t,.008,.024,.35,l+u,r+.08,s-.24,i.metal,"Telescopic drawer slide");gn(t,.37,.18,.012,l,r+.115,s-.09,n,"Open drawer rear")}}for(let l of[-1,1]){let c=new Ot(Xu(l*.485,0,.14,.46,.012).getPoints(6)),h=new en;h.absarc(l*.485,-.09,.008,0,Math.PI*2),c.holes.push(h);let u=ms(t,new wn(c,{depth:.015,bevelEnabled:!1}),n,"Removable carpeted wing",[0,a-.015,s]);u.rotation.x=-Math.PI/2,gn(t,.14,.235,.015,l*.485,r+.1175,s-.2225,n,"Side wing fixed face");for(let d of[s-.17,s+.17]){let f=ms(t,new Xt(.014,.003,8,24),i.metal,"Cargo tie-down ring",[l*.36,a+.008,d]);f.rotation.x=Math.PI/2}}return gn(t,.828,.018,.012,0,a-.006,s-.231,i.metal,"Aluminium protective front edge"),t.userData.publishedEnvelope=[1.11,.25,.46],Gs(t)}var Oy=Object.freeze({body:"5door",rearDeckWidth:1.11,rearDeckLength:1.165,extensionLength:.685,bedLength:1.83,bedWidth:.65,bedThickness:.075});function Yt(i,e,t,n,s,r,a,o,l,c=.005){let h=new Te(new Bt(t,n,s,2,Math.min(c,t/3,n/3,s/3)),l);return h.name=e,h.position.set(r,a,o),h.castShadow=h.receiveShadow=!0,i.add(h),h}function jr(i,e){return i.userData.ownedMaterials??=[],i.userData.ownedMaterials.push(e),e}function om(i,e,t,n=.0012){let s=new $n,r=e.map(o=>new L(...o));for(let o=1;o<r.length;o++)s.add(new Zn(r[o-1],r[o]));let a=new Te(new Vn(s,e.length*4,n,5,!1),t);return a.name="Stitched piping",i.add(a),a}function lm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new Xe;s.name="UpholsteredDoorInserts";let r=jr(s,qn(zs(t),n)),a=jr(s,new Ke({color:"#d5c6aa",roughness:.9}));for(let o of[-1,1])for(let[l,c]of e==="3door"?[[0,1.04]]:[[.1,.74],[-.84,.6]]){let h=o*.676,u=Yt(s,"Padded door insert",.012,.185,c,h,.875,l,r,.012);Yt(s,"Upholstered upper door strip",.012,.028,c,h,1.088,l,r,.006),Yt(s,"Wrapped door armrest",.077,.047,.15,o*.66,1.005,l-.06,r,.013);let d=u.geometry.attributes.uv,f=u.geometry.attributes.position;for(let w=0;w<d.count;w++)d.setXY(w,f.getZ(w),f.getY(w));d.needsUpdate=!0;let g=o*.668,y=.796,m=.954,p=l-c/2+.018,M=l+c/2-.018;om(s,[[g,y,p],[g,m,p],[g,m,M],[g,y,M],[g,y,p]],a,.0012);for(let w=p+.02;w<M-.01;w+=.011)Yt(s,"Door top stitch",8e-4,.0012,.0045,o*.6675,m-.006,w,a,3e-4)}return Gs(s)}function cm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new Xe;s.name="RearSeatUpholstery";let r=jr(s,qn(t,n)),a=e==="3door"?.17:0;for(let o of[-.29,.29]){let l=Yt(s,"Rear seat patterned back insert",.45,.285,.008,o,1.035,-.995+a,r,.003),c=Yt(s,"Rear seat patterned cushion insert",.45,.008,.29,o,.879,-.83+a,r,.003);for(let h of[l,c]){let u=h.geometry.attributes.position,d=h.geometry.attributes.uv;for(let f=0;f<u.count;f++)d.setXY(f,u.getX(f),h===l?u.getY(f):u.getZ(f));d.needsUpdate=!0}}return s}function hm(i,{camp:e=!1,drawers:t=!1}={}){let n=new Xe;n.name="TouringInterior",n.userData.layout=Oy;let s=jr(n,qn("tweed","#45484a")),r=jr(n,qn("canvas","#466278")),a=jr(n,new Ke({color:"#b9c1b3",roughness:1}));n.add(qc(i,{open:t}),Wc(i),Vc(i));for(let l of[-.279,.279]){let c=Yt(n,"Split carpeted rear platform",.552,.015,.705,l,.9415,-.8625,s,.004);c.userData.publishedDimensions=[.555,.705,.015];for(let h of[-1.12,-.61])Yt(n,"Bolted platform support",.025,.235,.03,l,.817,h,i.darkmetal,.003);Yt(n,"Platform aluminium edge",.545,.018,.009,l,.942,-.5075,i.metal,.002)}for(let l of[-.29,.29])Yt(n,"Folded rear seat back",.56,.09,.41,l,.87,-.87,i.seat,.025);let o=Yt(n,"Strapped touring storage case",.37,.22,.42,-.3,1.067,-.86,i.trim,.024);Yt(n,"Storage case lid",.38,.024,.43,-.3,1.185,-.86,i.darkmetal,.008);for(let l of[-.43,-.17])Yt(n,"Case restraint webbing",.022,.003,.46,l,1.2,-.86,i.seat,.001),Yt(n,"Case restraint side",.022,.24,.003,l,1.075,-1.083,i.seat,.001),Yt(n,"Case buckle",.032,.026,.008,l,1.12,-1.089,i.metal,.002);if(e){Yt(n,"Custom passenger bed extension",.68,.018,.685,.279,.94,-.1675,s,.005);for(let c of[-.03,.58])Yt(n,"Extension support leg",.022,.245,.022,c,.808,.13,i.metal,.003),Yt(n,"Support rubber foot",.045,.012,.05,c,.68,.13,i.rubber,.004);Yt(n,"Single sleeping mat 183 x 65 x 7.5 cm",.65,.075,1.83,.28,.9865,-.745,r,.029),om(n,[[-.04,.976,-1.63],[.6,.976,-1.63],[.6,.976,.14],[-.04,.976,.14],[-.04,.976,-1.63]],a,.0018),Yt(n,"Soft camp pillow",.4,.075,.25,.28,1.055,.005,r,.035);let l=new Te(new zt(.014,.014,.005,24),i.trim);l.name="Sleeping mat valve",l.position.set(.56,.99,-1.65),l.rotation.x=Math.PI/2,n.add(l)}else{let l=new Te(new Rr(.095,.48,6,24),r);l.name="Packed sleeping mat",l.rotation.z=Math.PI/2,l.position.set(.18,1.06,-1.4),l.castShadow=l.receiveShadow=!0,n.add(l),Yt(n,"Stowed passenger bed extension",.68,.018,.685,.279,.966,-.855,s,.005);for(let c of[-.04,.4]){let h=new Te(new Xt(.097,.009,5,32),i.seat);h.name="Packed mattress strap",h.rotation.y=Math.PI/2,h.position.set(c,1.06,-1.4),n.add(h)}}return Gs(n)}(function(i){let e="#171b1d",t={body:"Body paint",roof:"Roof",trim:"Exterior trim & badges",wheels:"Wheels & spare rim",grille:"Grille & logo",bumpers:"Factory bumpers",cabin:"Cabin hard trim"};function n(r={}){let a={};if(r?.partFinishes&&typeof r.partFinishes=="object"&&!Array.isArray(r.partFinishes))for(let[l,c]of Object.entries(r.partFinishes).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&["matte","gloss"].includes(c)&&(a[l]=c);let o={};if(r?.partColours&&typeof r.partColours=="object"&&!Array.isArray(r.partColours))for(let[l,c]of Object.entries(r.partColours).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&/^#[0-9a-f]{6}$/i.test(c)&&(o[l]=c.toLowerCase());return{allBlack:r?.allBlack===!0,partFinishes:a,partColours:o}}function s(r){return r==="tires"||r==="suzuki_nomade_steelwheel"?"wheels":/^autostylenn_.*grille$/.test(r)?"grille":r}i.JimnySurfaceStyles=Object.freeze({BLACK:e,BASE:Object.freeze(t),clean:n,target:s})})(globalThis);function um(i,e="5door"){i.updateWorldMatrix(!0,!0);let t=i.matrixWorld.clone().invert(),n=e==="3door"?-.17:0,s=[{id:"right",x:-.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"left",x:.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"centre",x:0,y:1.522,z:.536+n,w:.18,h:.055}].map(a=>({...a,vertices:[]})),r=[new L,new L,new L];return i.traverse(a=>{if(!a.isMesh||a.material?.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Ue().multiplyMatrices(t,a.matrixWorld);for(let u=0;u<(c?.count??l.count);u+=3){for(let d=0;d<3;d++)r[d].fromBufferAttribute(l,c?c.getX(u+d):u+d).applyMatrix4(h);for(let d of s)if(r.every(f=>Math.abs(f.x-d.x)<d.w/2+.001&&Math.abs(f.y-d.y)<d.h/2+.001&&Math.abs(f.z-d.z)<.0035)){for(let f of r)d.vertices.push(f.x,f.y,f.z-6e-4);break}}}),s.filter(a=>a.vertices.length).map(a=>{let o=new lt;o.setAttribute("position",new Oe(a.vertices,3));let l=[];for(let u=0;u<a.vertices.length;u+=3)l.push((a.vertices[u]-a.x)/a.w+.5,(a.vertices[u+1]-a.y)/a.h+.5);o.setAttribute("uv",new Oe(l,2)),o.computeVertexNormals();let{vertices:c,...h}=a;return{...h,geometry:o}})}var{BLACK:ky,clean:By}=globalThis.JimnySurfaceStyles,zy=new Set(["OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille"]),Gy=/Glass|Lens|Lamp|Emitter|Reflector|Indicator|RearLamp|Instrument|LCD|Display|Needle|Mirror/i,Hy=/Fabric|SeatInsert|SeatCover|Carpet|Woven|Upholstery/i;function Xc(i,e={}){for(let[t,n]of Object.entries(i))n?.userData&&(n.userData.surfaceKind=t);for(let t of Object.values(e))t.userData.surfaceKind="optic"}function Yu(i){if(i.userData.grilleBadge)return"grille";for(let e=i;e;e=e.parent){if(e.userData.finishTarget)return e.userData.finishTarget;if(zy.has(e.name))return"grille";if(["StockWheels","AllTerrainWheels","SpareWheel"].includes(e.name))return"wheels";if(e.name==="RoofShell")return"roof";if(e.name==="StockBumper")return"bumpers";if(e.name==="StockHeadlamps")return"headlamps";if(e.name==="Cabin")return"cabin";if(e.name==="BodyShell")return i.material?.userData.vehiclePaint||i.material?.name==="BodyPaint"?"body":"trim"}return null}function dm(i,e){for(let t of um(i,e)){let n=new Ke({name:"MirrorGlass",color:"#c4cccf",metalness:1,roughness:.12,side:Ht}),s=new Te(t.geometry,n);s.name="ProtectedMirror-"+t.id,s.userData.disposableMaterial=!0,i.add(s),(i.getObjectByName(t.id==="centre"?"Cabin":"BodyShell")||i).attach(s)}}function Ku(i){let e=i.userData.surfaceKind||"",t=Hy.test(i.name)||["seat","canvas","upholstery"].includes(e)||i.userData.ownsTextures,n=Gy.test(i.name)||["glass","lens","smoked","reflector","white","red","orange","ambient","optic","rubber"].includes(e)||/TyreRubber|IntakeShadow|Brake/.test(i.name)||i.emissiveIntensity>0&&i.emissive?.getHex()>0||i.isMeshBasicMaterial||!t&&i.map;return{fabric:t,protectedSurface:n}}function fm(){let i=new Map,e=new Set,t={materials:0,targets:[]};function n(){for(let[r,a]of i)r.material=a;i.clear();for(let r of e)r.dispose();e.clear(),t={materials:0,targets:[]}}function s(r,a={}){n();let o=By(a),l=new Map,c=new Set;for(let h of r)h?.traverse(u=>{if(!u.isMesh||Array.isArray(u.material))return;let d=u.material,f=Yu(u),g=o.partFinishes[f],{fabric:y,protectedSurface:m}=Ku(d),p=f==="wheels"&&d.name==="CatalogueSteelWheel",M=!y&&(f!=="wheels"||p)?o.partColours[f]:null;if(!f||m||d.name==="BrightChrome"&&["headlamps","bumpers"].includes(f)||!o.allBlack&&!M&&(!g||y))return;let w=o.allBlack&&(f!=="wheels"||p)&&!(y&&a.cabin&&a.cabin!=="black")&&!d.userData.explicitSurfaceColour&&!d.userData.vehiclePaint&&!["BodyPaint","RoofPaint"].includes(d.name),b=y?null:g;if(!w&&!b&&!M)return;let v=d.uuid+":"+f+":"+w+":"+b+":"+M,x=l.get(v);x||(x=d.clone(),x.userData={...x.userData,surfaceStyle:{target:f,black:w,finish:b}},w&&(x.color.set(ky),x.vertexColors=!1,x.metalness=Math.min(x.metalness||0,.12)),M&&(x.color.set(M),x.vertexColors=!1),b&&(x.roughness=b==="matte"?.85:.14,x.roughnessMap=null,"clearcoat"in x&&(x.clearcoat=b==="matte"?.02:.95,x.clearcoatRoughness=b==="matte"?.7:.09)),x.needsUpdate=!0,l.set(v,x),e.add(x)),i.set(u,d),u.material=x,c.add(f)});return t={materials:e.size,targets:[...c]},t}return{apply:s,clear:n,snapshot:()=>({...t,targets:[...t.targets]})}}(function(i){"use strict";let e=["3door","5door"],t="2026-10-23",n={exea_cupholder:{name:"EXEA drink & phone holder \xB7 passenger side",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"interior",size:null,fitment:"SelectPlus F9NG / 9Z0BB-77R20, sold individually. Specify driver or passenger fitting position; this representative preview uses the passenger side. Maker specifies bottles up to 600 ml. Verify your chassis, airbag clearance and grip-cover installation order.",note:"Hollow cradle, bottle retaining fingers, phone slot and bolt-on mounting arm. Bottle and phone are not included; original inferred-scale geometry."},exea_phone_mount:{name:"EXEA EE-213 dedicated phone holder",category:"Interior",region:"Japan",countryCode:"JP",seller:"EXEA",url:"https://www.seikosangyo.co.jp/exea/english/sp/special1.html",bodyStyles:["3door"],camera:"interior",size:null,fitment:"Maker lists EE-213 in its Jimny range. This preview is restricted to the three-door pending five-door mounting confirmation. Confirm handset dimensions, mounting revision and local driving laws; keep instruments, sightlines and airbag deployment clear.",note:"Adjustable clamp jaws, padded cradle, ball joint and compact dash mounting base. No phone or charging electronics implied."},armoro_console_organizer:{name:"ARMORO canvas console organiser \xB7 AT only",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/jimny-center-console-organizer",bodyStyles:e,camera:"console",size:null,transmission:"AT",fitment:"Maker specifies automatic-transmission Jimny models from 2018, RHD or LHD. NOT a manual-transmission fitment claim. Confirm exact body/trim, full transfer-lever travel, seat travel and handbrake clearance before fitting; inferred-scale preview is not a clearance test.",note:"Two open canvas main pockets, side mesh sleeves, binding and straps; no bulky box across the transfer lever."},exea_utility_bars:{name:"EXEA utility side bars \xB7 pair",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:[.045,.045,.61],fitment:"F9NP / 9Z0BB-77R70. Replaces rear assist grips with bolted side bars. Published limit is 1.5 kg PER SIDE, not a combined roof-net load rating. Suzuki says Nomade installation appearance differs. Confirm fasteners, trim, airbags and attachment instructions.",note:"610 mm rails with offset mounting feet, end caps and visible screws. Separate mounting kit required for the roof net."},exea_roof_net:{name:"EXEA overhead soft-storage net",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:null,requires:["exea_utility_bars"],fitment:"F9NQ / 9Z0BB-77R80 requires the separately sold compatible utility side bars. Use only light, soft items, retain headroom and visibility, and follow the maker load limit and incompatible-accessory list. Never place hard, heavy or slippery items overhead.",note:"Open woven mesh with sag, bound perimeter, adjustable corner straps and buckles. It is not a cargo barrier or occupant restraint."},exea_switch_extensions:{name:"EXEA window-switch extensions \xB7 black",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"console",size:null,fitment:"F9NL / 9Z0BB-77R10 supplied for four switches with double-sided adhesive. Preview shows the two front central window rockers, not an additional electric-window conversion. Check switch shape, clearance and reliable release after installation.",note:"Small sculpted raised paddles with tactile ridges and visible switch-direction marks; no electrical modifications."},maruti_at_mats:{name:"Maruti all-weather floor mats \xB7 AT",category:"Interior",region:"India",countryCode:"IN",seller:"Maruti Suzuki Genuine Accessories",url:"https://www.marutisuzuki.com/genuine-accessories/jimny-accessories",bodyStyles:["5door"],camera:"footwell",size:null,transmission:"AT",incompatible:["mats"],fitment:"India five-door AT reference 75901M80TK0. MT uses a different reference, 75901M80TH0; do not substitute. Original representative tray geometry is not a pedal-clearance or anti-slip certification. Confirm clips and secure mats; never stack them.",note:"Front footwell trays with raised edges, drainage channels, heel pad and retaining clips. Model is not a scan of the genuine set."},armoro_seat_organizer:{name:"ARMORO seat-back organiser",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/universal-car-seat-organizer",bodyStyles:e,camera:"seatbacks",size:null,fitment:"Universal canvas organiser. Confirm straps fit your seat and remain clear of airbags, seat tracks, belts and rear passengers. Preview shows one front-seat back; not exact ARMORO CAD.",note:"Bottle pockets, a large pocket and tissue storage address the small-item storage repeatedly discussed by Jimny owners."},jimsa_door_pockets:{name:"JimSA front door-grip pockets \xB7 pair",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-door-grip-storage-pockets-jimny-year-2018",bodyStyles:e,camera:"doors",size:null,fitment:"Seller lists Gen 4 three-door and five-door FRONT doors only. Uses existing door-card screws; verify door handle, window-control and emergency-exit access.",note:"Textured plastic pockets with padded base. Representative hollow pockets; dimensions inferred from product photos."},jimsa_dash_tray:{name:"JimSA instrument-top storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-dashboard-storage-tray-jimny-year-2018",bodyStyles:e,camera:"interior",existingId:"market_jimsa_7123723878571",size:null,fitment:"Seller lists both bodies. Adhesive tray above the instrument binnacle. Keep objects low and secured; do not obstruct instruments, windscreen view, vents or airbags.",note:"Anti-slip-lined shallow tray. Original inferred-scale model, not a safe loose-object restraint."},jimsa_console_tray:{name:"JimSA centre-console storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-centre-console-storage-tray-jimny-year-2018",bodyStyles:e,camera:"console",existingId:"market_jimsa_7123719946411",size:null,fitment:"Seller offers DIFFERENT MT and AT versions for both bodies. Choose your transmission. Preview is a shallow small-item tray and is not a measured clearance check for levers or handbrake.",note:"Keeps small items organised without installing a large armrest. No promise that one insert fits both transmissions."},jimsa_cargo_pouch_5door:{name:"JimSA rear luggage storage pouch \xB7 XL",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/rear-luggage-storage-pouch-5-door-jimny-year-2023",bodyStyles:["5door"],camera:"storage",size:null,fitment:"Seller explicitly lists five-door GL/GLX. Confirm mounting hardware and maximum load. Keep visibility and seatbelts clear; do not treat the fabric cover as a crash barrier.",note:"Soft cargo-area pouch/cover for smaller items. Representative zip pocket and securing tabs, inferred dimensions."},jimsa_tiedowns:{name:"JimSA rear luggage attachment rings",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-rear-luggage-area-attachment-rings-jimny-year-2018",bodyStyles:["3door"],camera:"storage",size:null,fitment:"Current seller page lists THREE-door only. Pair mounts in existing holes below rear windows. No published crash/load rating; use appropriate rated restraints and vehicle guidance.",note:"A light, useful preparation item before adding large storage systems. Preview dimensions inferred; not recovery points."},fr_wolfpack:{name:"Front Runner Wolf Pack Pro storage box",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-za/product/wolf-pack-pro",bodyStyles:e,camera:"storage",size:[.51,.23,.4],dimensionSource:"https://monsterfishing.co.nz/collections/dometic/products/dometic-wolf-pack-pro",fitment:"Universal removable storage box, not a Jimny-specific mount. Preview shows strapped cargo placement; source suitable vehicle-rated anchorage separately. Upright-seat cargo fit varies by body.",note:"Published box envelope 510 \xD7 400 \xD7 230 mm, 3.65 kg empty. Original model with lid, latches and restraint straps; not manufacturer CAD."},fr_jerry_holder:{name:"Front Runner single external jerry-can holder",category:"Roof & carrying",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-us/product/single-jerry-can-holder",bodyStyles:["5door"],camera:"roof",size:[.165,.37,.513],requires:["fr_slimline2"],incompatible:["rtt","boards"],fitment:"JCHO013 is for a Front Runner slatted rack and 20 L NATO/Wedco cans; NOT Scepter. Preview adds a compatible rack. Confirm actual rack kit, dynamic roof load, mounting instructions and local fuel-transport rules.",note:"Holder is separate from can. Published 513 \xD7 165 \xD7 370 mm and 2.4 kg. Fuel stays outside the cabin; loaded roof weight and handling matter."},fr_fuelcan20:{name:"Front Runner 20 L steel fuel can \xB7 external",category:"Camping & storage",region:"United Kingdom",countryCode:"GB",seller:"Tuff-Trek",url:"https://tuff-trek.com/products/jcfu001-20l-jerry-can-matte-black-steel-finish",bodyStyles:["5door"],camera:"roof",size:[.165,.35,.46],requires:["fr_slimline2","fr_jerry_holder"],incompatible:["fr_watercan20","rtt","boards"],fitment:"JCFU001 fuel-only can with compatible holder and rack. NEVER store fuel in the passenger cabin. Confirm local container approval/transport law, filled weight, roof-load limits and safe refuelling. Not suitable for drinking water.",note:"Published 350 \xD7 165 \xD7 460 mm overall, 3.82 kg empty. Can is shown externally in a restrained carrier, not loose or bolted directly to the door."},fr_watercan20:{name:"Front Runner 20 L water can with tap",category:"Camping & storage",region:"United States",countryCode:"US",seller:"Off Road Tents",url:"https://offroadtents.com/products/front-runner-plastic-water-jerry-can-with-tap",bodyStyles:e,camera:"storage",size:[.36,.475,.18],incompatible:["fr_fuelcan20","fr_wolfpack","jimsa_cargo_pouch_5door","drawer","exploresetups_drawer_5door","touring"],fitment:"Food-grade BPA-free water container; WATER ONLY, never substitute for a fuel can. Preview is low cargo placement with straps, not a certified restraint. 20 L of water adds about 20 kg before container weight.",note:"Published 360 \xD7 180 \xD7 475 mm, 2.38 kg empty. External fuel-holder compatibility is NOT assumed; water model uses separate cargo placement."},arb_airkit:{name:"ARB CKMP12 portable compressor kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/air-systems",bodyStyles:e,camera:"storage",size:[.44,.208,.238],dimensionSource:"https://store.arbusa.com/content/CKMP12_Operation%20Guide.pdf",fitment:"Universal 12 V portable kit, not an installed onboard compressor. Secure when travelling; use outdoors with correct battery connection and manufacturer instructions. Never connect this load to an ordinary cabin accessory socket.",note:"Published case envelope 440 \xD7 238 \xD7 208 mm. Preview is the closed carry case; no implied under-seat installation, wiring or automatic inflation simulation."},arb_repairkit:{name:"ARB Speedy Seal II tyre repair kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/product/10000011-speedy-seal-series-ii-repair-kit",bodyStyles:e,camera:"storage",size:null,fitment:"Universal tubeless-tyre emergency kit. Not for sidewall damage or every puncture. Follow tyre maker instructions and obtain professional inspection/repair; carry an inflated serviceable spare and correct tools.",note:"Closed high-visibility carry-case preview with latches and handle. Inferred scale, not exact product CAD or a guarantee a damaged tyre is repairable."},kap_fire:{name:"KAP passenger-seat extinguisher bracket",category:"Interior",region:"Australia",countryCode:"AU",seller:"OZ Jimny / KAP",url:"https://ozjimny.com/products/kap-industires-fire-extinguisher-bracket",bodyStyles:e,camera:"footwell",existingId:"market_4454478184585",size:null,fitment:"Seller lists both bodies; maker page specifies JB74. Confirm the exact XL/body version with seller. Bracket only unless extinguisher option bought. May restrict seat travel; retain pedal/seat/airbag clearance and correct metal cage.",note:"Original passenger-side bracket plus optional representative 1 kg extinguisher. No certification claimed for our model or installation; use professional fitting and extinguisher maintenance."}};for(let[s,r]of Object.entries(n))Object.assign(r,{id:s,visual:s,checked:t,stockAtCheck:"unknown",previewKind:"reference-guided",disclosure:"Original representative geometry, not manufacturer CAD, verified stock or certified fitment."});i.JimnyPracticalParts=Object.freeze(n)})(globalThis);var pm=globalThis.JimnyPracticalParts;function Hs(i,e,t,n,s=0,r=0,a=0){let o=new Te(e,t);return o.name=n,o.position.set(s,r,a),o.castShadow=o.receiveShadow=!0,i.add(o),o}function tt(i,e,t,n,s,r,a,o,l,c=.003){return Hs(i,new Bt(e,t,n,2,Math.min(c,e/4,t/4,n/4)),o,l,s,r,a)}function un(i,e,t,n,s){let r=e.map(o=>new L(...o)),a=new $n;for(let o=1;o<r.length;o++)a.add(new Zn(r[o-1],r[o]));return Hs(i,new Vn(a,e.length*3,t,6,!1),n,s)}function Nn(i,e,t,n,s,r,a,o,l="y"){let c=Hs(i,new zt(e,e,t,24),a,o,n,s,r);return l==="x"&&(c.rotation.z=Math.PI/2),l==="z"&&(c.rotation.x=Math.PI/2),c}function gs(i,e){return(i.userData.ownedMaterials??=[]).push(e),e}function Vy(i,e,t,n,s,r){let a=new ln(.23,.115,10,6),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l)/.23+.5,h=o.getY(l)/.115+.5;o.setXYZ(l,e+s*(.004*Math.sin(c*Math.PI)*Math.sin(h*Math.PI)+.0015*Math.sin(c*19)*h),t+(h-.5)*.115-.004*Math.sin(c*Math.PI)*h,n+(c-.5)*.23)}return a.computeVertexNormals(),Hs(i,a,r,"Soft canvas pocket front")}function Ju(i,e,t,n,s,r,a){return Hs(i,new Xt(e,.0025,6,20),r,a,t,n,s)}function Yr(i,e,t,n,s,r,a,o,l){tt(i,e,.005,t,s,r,a,o.trim,l+" base"),tt(i,e-.012,.002,t-.012,s,r+.0035,a,o.rubber,l+" anti-slip liner");for(let c of[-1,1])tt(i,.005,n,t,s+c*(e/2-.0025),r+n/2,a,o.trim,l+" side lip"),tt(i,e,n,.005,s,r+n/2,a+c*(t/2-.0025),o.trim,l+" end lip")}function jc(i,e,t,n,s,r,a,o){for(let l of[-s*.3,s*.3]){tt(i,.02,.004,a+.018,e+l,t+r/2+.004,n,o.seat,"Restraint webbing");for(let c of[-1,1])tt(i,.02,r+.01,.003,e+l,t,n+c*(a/2+.008),o.seat,"Restraint vertical webbing"),tt(i,.03,.025,.008,e+l,t+.025,n+c*(a/2+.011),o.metal,"Restraint cam buckle")}}function Zu(i,e,t,n,s,r,a,o,{colour:l=null,name:c="Carry case"}={}){let h=l?gs(i,new Ke({name:"CarryCaseShell",color:l,roughness:.65})):o.trim;tt(i,s,r,a,e,t,n,h,c,.012),tt(i,s+.004,.018,a+.004,e,t+r/2-.014,n,o.darkmetal,c+" lid perimeter",.004);for(let u of[-1,1])tt(i,.033,.035,.012,e+u*s*.34,t+r*.28,n-a/2-.006,o.darkmetal,c+" latch");un(i,[[e-.055,t+r/2,n],[e-.05,t+r/2+.025,n],[e+.05,t+r/2+.025,n],[e+.055,t+r/2,n]],.008,o.trim,c+" handle")}function Wy(i,e,{body:t="5door",cargoTop:n=.7,cargoLeft:s=!1}={}){let r=pm[i];if(!r||!r.bodyStyles.includes(t))return null;let a=new Xe;a.name=i,a.userData.finishTarget=i,a.userData.cataloguePart={...r};let o=t==="3door"?.17:0,l=-1.445+o;if(i==="exea_cupholder"){let u=.25-o;tt(a,.075,.018,.035,.57,1.165+.065,u+.07,e.trim,"Cupholder dash bracket"),tt(a,.018,.085,.035,.57,1.165+.025,u+.07,e.trim,"Cupholder offset arm"),Nn(a,.047,.006,.57,1.165-.045,u,e.trim,"Cup cradle floor");let d=Hs(a,new Xt(.049,.006,8,40),e.trim,"Open bottle retaining ring",.57,1.165+.01,u);d.rotation.x=Math.PI/2;for(let f of[0,2.1,4.2])tt(a,.012,.058,.012,.57+Math.cos(f)*.042,1.165-.017,u+Math.sin(f)*.042,e.trim,"Bottle retaining finger");Yr(a,.085,.022,.026,.57,1.165-.015,u-.064,e,"Phone slot");for(let f of[-1,1])Nn(a,.003,.005,.57+f*.025,1.165+.076,u+.07,e.metal,"Holder fixing screw")}else if(i==="exea_phone_mount"){Yr(a,.075,.035,.008,-.18,1.275,.44-o,e,"Phone mount foot"),un(a,[[-.18,1.28,.44-o],[-.18,1.34,.37-o]],.008,e.darkmetal,"Phone ball-joint arm"),Hs(a,new In(.014,12,8),e.trim,"Adjustable ball joint",-.18,1.34,.37-o),tt(a,.061,.101,.012,-.18,1.36,.345-o,e.trim,"Phone cradle back",.007);for(let c of[-1,1])tt(a,.009,.035,.026,-.18+c*.034,1.36,.333-o,e.trim,"Adjustable clamp jaw"),tt(a,.003,.025,.02,-.18+c*.029,1.36,.333-o,e.rubber,"Soft jaw pad");tt(a,.05,.009,.03,-.18,1.306,.335-o,e.trim,"Phone support foot")}else if(i==="armoro_console_organizer"){let c=gs(a,qn("canvas","#535747")),h=gs(a,new Ke({name:"WovenStitch",color:"#989a7e",roughness:1}));c.side=Ht;for(let u of[-1,1]){let d=u*.104,f=.21-o;tt(a,.009,.13,.23,d,.846,f,c,"Console pocket backing"),tt(a,.058,.005,.23,d+u*.023,.785,f,c,"Console pocket floor"),Vy(a,d+u*.049,.843,f,u,c);for(let g of[-.112,.112])tt(a,.05,.12,.006,d+u*.022,.846,f+g,c,"Canvas pocket gusset");un(a,[[d+u*.05,.905,f-.115],[d+u*.05,.9,f],[d+u*.05,.905,f+.115]],.002,h,"Bound pocket opening");for(let g=0;g<9;g++)un(a,[[d+u*.054,.797,f-.09+g*.022],[d+u*.054,.866,f-.09+g*.022]],.0013,e.seat,"Mesh sleeve vertical");for(let g=0;g<5;g++)un(a,[[d+u*.055,.801+g*.014,f-.09],[d+u*.055,.801+g*.014,f+.09]],.0013,e.seat,"Mesh sleeve horizontal")}}else if(i==="exea_utility_bars")for(let c of[-1,1]){let h=c*.566,u=-.78+o;un(a,[[h,1.59,u-.305],[h,1.59,u+.305]],.009,e.darkmetal,"Utility bar rail");for(let d of[-.285,.285])tt(a,.035,.024,.035,h+c*.022,1.615,u+d,e.trim,"Offset rail foot"),Nn(a,.004,.006,h+c*.022,1.63,u+d,e.metal,"Bar mounting screw")}else if(i==="exea_roof_net"){let c=-.78+o,h=.99,u=.51,d=1.575,f=(g,y)=>d-.04*(1-(g/(h/2))**2)*(1-(y/(u/2))**2);for(let g=0;g<=20;g++){let y=-h/2+g*h/20,m=[];for(let p=0;p<=8;p++){let M=-u/2+p*u/8;m.push([y,f(y,M),c+M])}un(a,m,.0017,e.seat,"Overhead net warp")}for(let g=0;g<=11;g++){let y=-u/2+g*u/11,m=[];for(let p=0;p<=10;p++){let M=-h/2+p*h/10;m.push([M,f(M,y),c+y])}un(a,m,.0017,e.seat,"Overhead net weft")}un(a,[[-h/2,d,c-u/2],[h/2,d,c-u/2],[h/2,d,c+u/2],[-h/2,d,c+u/2],[-h/2,d,c-u/2]],.006,e.seat,"Bound net perimeter");for(let g of[-1,1])for(let y of[-u/2,u/2])un(a,[[g*h/2,d,c+y],[g*.566,1.59,c+y]],.004,e.seat,"Adjustable corner strap"),tt(a,.022,.01,.018,g*.53,1.583,c+y,e.trim,"Net strap buckle")}else if(i==="exea_switch_extensions")for(let c of[-.095,.095]){let h=.282-o;tt(a,.029,.032,.019,c,.965,h,e.trim,"Raised window rocker",.004);for(let u of[-.008,0,.008])tt(a,.02,.0015,.002,c,.965+u,h-.01,e.darkmetal,"Tactile switch ridge")}else if(i==="maruti_at_mats")for(let c of[-1,1]){let h=c*.365,u=.47;Yr(a,.42,.36,.022,h,.696,u,e,"All-weather footwell tray");for(let d=0;d<8;d++)tt(a,.36,.003,.007,h,.703,u-.14+d*.038,e.rubber,"Drainage channel");tt(a,.15,.007,.12,h,.707,u-.06,e.rubber,"Heel wear pad",.009);for(let d of[-.15,.15])Nn(a,.01,.004,h+d,.704,u-.15,e.trim,"Mat retaining clip")}else if(i==="armoro_seat_organizer"){let c=gs(a,qn("canvas","#70705b")),h=gs(a,new Ke({name:"WovenStitch",color:"#ada98e",roughness:1})),u=.365,d=-.225-o,f=tt(a,.365,.4,.012,u,1.09,d,c,"Canvas seat-back organiser",.01);f.rotation.x=-.12;for(let g of[-.14,.14])tt(a,.025,.19,.008,u+g,1.35,d+.008,e.seat,"Headrest securing strap"),tt(a,.035,.025,.012,u+g,1.37,d-.003,e.trim,"Strap buckle");for(let g of[-.122,.122]){tt(a,.102,.006,.065,u+g,.973,d-.038,c,"Bottle pocket floor"),tt(a,.102,.16,.006,u+g,1.05,d-.071,c,"Bottle pocket front");for(let y of[-1,1])tt(a,.006,.16,.065,u+g+y*.048,1.05,d-.038,c,"Bottle pocket gusset");un(a,[[u+g-.05,1.13,d-.006],[u+g-.05,1.13,d-.074],[u+g+.05,1.13,d-.074],[u+g+.05,1.13,d-.006]],.0022,h,"Bound open pocket lip")}tt(a,.125,.13,.05,u,1.04,d-.05,c,"Central utility pouch"),tt(a,.12,.025,.006,u,1.108,d-.08,c,"Pouch flap"),tt(a,.3,.06,.045,u,.935,d-.035,c,"Tissue holder"),tt(a,.12,.008,.002,u,.944,d-.06,e.trim,"Tissue slot");for(let g of[-.175,.175])un(a,[[u+g,.9,d-.01],[u+g,1.27,d-.01]],.0011,h,"Canvas side seam")}else if(i==="jimsa_door_pockets")for(let c of[-1,1]){let h=c*.641,u=t==="3door"?-.12:.06;Yr(a,.082,.245,.052,h,.951,u,e,"Door grip pocket"),tt(a,.01,.08,.014,c*.68,.99,u-.095,e.darkmetal,"Door screw attachment"),Nn(a,.004,.004,c*.672,1.02,u-.095,e.metal,"Door attachment screw","x")}else if(i==="jimsa_dash_tray")Yr(a,.355,.145,.02,-.365,1.299,.415-o,e,"Instrument tray");else if(i==="jimsa_console_tray")Yr(a,.135,.12,.023,0,.835,-.15-o,e,"Console insert"),tt(a,.004,.018,.105,-.025,.847,-.15-o,e.trim,"Console tray divider");else if(i==="jimsa_cargo_pouch_5door"){let c=gs(a,qn("canvas","#3c4140")),h=gs(a,new Ke({name:"WovenStitch",color:"#797c74",roughness:1}));tt(a,1.1,.012,.37,0,1.075,-1.43,c,"Soft cargo cover",.006),tt(a,.79,.065,.235,0,1.112,-1.46,c,"Cargo zipped pouch",.018),un(a,[[-.365,1.147,-1.55],[.365,1.147,-1.55],[.365,1.147,-1.37],[-.365,1.147,-1.37]],.0018,h,"Cargo pocket zip"),tt(a,.015,.004,.025,.35,1.15,-1.52,e.metal,"Zip slider");for(let u of[-.57,.57])for(let d of[-1.6,-1.26])tt(a,.045,.004,.03,u,1.075,d,e.seat,"Cargo securing tab"),Ju(a,.009,u,1.075,d,e.metal,"Cargo attachment eye")}else if(i==="jimsa_tiedowns")for(let c of[-1,1]){let h=Ju(a,.014,c*.647,1.16,-1.21,e.metal,"Luggage attachment ring");h.rotation.y=Math.PI/2,Nn(a,.005,.018,c*.666,1.16,-1.21,e.metal,"Attachment threaded stem","x")}else if(i==="fr_wolfpack"){let c=n+.115;Zu(a,-.2,c,l,.51,.23,.4,e,{name:"Wolf Pack representative box"});for(let h of[-1,1])for(let u of[l-.18,l+.18])tt(a,.025,.155,.013,-.2+h*.23,c,u,e.darkmetal,"Moulded box stiffener");for(let h of[l-.09,l+.09])tt(a,.44,.006,.018,-.2,c+.119,h,e.trim,"Nesting lid rib");jc(a,-.2,c,l,.51,.23,.4,e)}else if(i==="fr_jerry_holder"){tt(a,.165,.005,.513,.35,1.865,-.45,e.darkmetal,"Jerry carrier base");for(let d of[-1,1])tt(a,.005,.055,.513,.35+d*.08,1.865+.027,-.45,e.darkmetal,"Carrier folded side");un(a,[[.35-.085,1.865,-.45+.22],[.35-.085,1.865+.37,-.45+.22],[.35+.085,1.865+.37,-.45+.22],[.35+.085,1.865,-.45+.22]],.007,e.darkmetal,"Jerry carrier hold-down strap"),tt(a,.028,.028,.018,.35+.093,1.865+.326,-.45+.22,e.metal,"Stainless safety catch");for(let d of[-.45-.2,-.45+.2])for(let f of[-1,1])Nn(a,.005,.008,.35+f*.059,1.865+.007,d,e.metal,"Carrier mounting bolt")}else if(i==="fr_fuelcan20"){let c=new Xe;a.add(c),c.position.set(.37,2.047,-.68),c.rotation.set(Math.PI/2,Math.PI/2,0),tt(c,.35,.405,.165,0,.2025,-.02,e.darkmetal,"Fuel can steel shell",.018),tt(c,.354,.004,.169,0,.05,-.02,e.darkmetal,"Fuel can base seam",.002);for(let h of[-1,1])un(c,[[-.125,.09,h*.08-.02],[.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal"),un(c,[[.125,.09,h*.08-.02],[-.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal");for(let h of[-.071,-.02,.031])un(c,[[-.05,.398,h],[-.03,.45,h],[.11,.45,h],[.13,.398,h]],.01,e.darkmetal,"Triple carry handle");Nn(c,.034,.022,-.115,.419,-.02,e.trim,"Fuel bayonet cap"),un(c,[[-.15,.43,-.02],[-.15,.441,.005],[-.12,.441,.005]],.002,e.metal,"Cap locking pin")}else if(i==="fr_watercan20"){let h=n+.2375,u=l+.08,d=gs(a,new Ke({name:"WaterContainerPlastic",color:"#b9c0b3",roughness:.61}));tt(a,.36,.415,.18,.29,h-.03,u,d,"Water-only HDPE tank",.022);for(let f of[-.14,.14])tt(a,.012,.27,.012,.29+f,h-.02,u-.095,d,"Water tank reinforcing rib");un(a,[[.29-.07,h+.17,u],[.29-.055,h+.22,u],[.29+.075,h+.22,u],[.29+.09,h+.17,u]],.014,d,"Water can carry handle"),Nn(a,.039,.026,.29-.105,h+.19,u,e.trim,"Water fill cap"),Nn(a,.017,.03,.29,h-.15,u-.105,e.trim,"Water tap body","z"),tt(a,.048,.01,.014,.29,h-.127,u-.115,e.trim,"Water tap lever"),Nn(a,.009,.025,.29,h-.18,u-.115,e.trim,"Water spout"),jc(a,.29,h-.03,u,.36,.415,.18,e)}else if(i==="arb_airkit"){let c=s?-.27:.28,h=n+.104,u=l+.04;Zu(a,c,h,u,.44,.208,.238,e,{name:"Portable compressor case"}),jc(a,c,h,u,.44,.208,.238,e)}else if(i==="arb_repairkit"){let c=s?-.18:.37,h=n+.035,u=l-.13;Zu(a,c,h,u,.245,.07,.135,e,{colour:"#b48135",name:"Tyre repair tool case"}),jc(a,c,h,u,.245,.07,.135,e)}else if(i==="kap_fire"){let u=.37-o;tt(a,.33,.004,.065,.365,.758-.035,u,e.darkmetal,"Passenger seat-rail bracket");for(let d of[-.145,.145])Nn(a,.008,.009,.365+d,.758-.03,u,e.metal,"Seat-rail bracket fixing");Nn(a,.042,.225,.365,.758+.007,u,e.red,"Optional 1 kg extinguisher","x");for(let d of[-.065,.065]){let f=Ju(a,.044,.365+d,.765,u,e.metal,"Metal retaining cage");f.rotation.y=Math.PI/2}Nn(a,.013,.035,.365-.13,.758+.007,u,e.metal,"Extinguisher valve","x"),tt(a,.045,.01,.024,.365-.125,.758+.035,u,e.trim,"Release handle"),Nn(a,.011,.006,.365-.124,.758+.015,u-.021,e.white,"Pressure indicator","z")}return Gs(a)}function mm({parts:i,body:e,mats:t,rig:n,show:s}){let r=i.has("touring")?.96:i.has("exploresetups_drawer_5door")?.955:i.has("drawer")?.922:.7,a=e==="5door"&&i.has("fr_slimline2");for(let[o,l]of Object.entries(pm)){if(!l.bodyStyles.includes(e)||l.requires?.some(h=>!i.has(h))||l.incompatible?.some(h=>i.has(h))||["fr_jerry_holder","fr_fuelcan20"].includes(o)&&(!a||i.has("rtt")||i.has("boards"))||o==="fr_fuelcan20"&&(!i.has("fr_jerry_holder")||i.has("fr_watercan20"))||o==="jimsa_cargo_pouch_5door"&&["touring","shelf","mod_halfmolly_5door","molle","fr_watercan20"].some(h=>i.has(h))||o==="fr_watercan20"&&["touring","drawer","exploresetups_drawer_5door","fr_wolfpack"].some(h=>i.has(h)))continue;let c=o==="arb_repairkit"&&i.has("arb_airkit")?r+.208:r;s([o],()=>{let h=Wy(o,t,{body:e,cargoTop:c,cargoLeft:i.has("fr_watercan20")});h&&n.add(h)})}}function gm({accessoryRig:i,mats:e,detailed:t,modelBody:n,colour:s,effectiveDesign:r,lampEmitters:a,buildGrille:o=()=>{},addDecals:l=()=>{},arch:c=null}){Xc(e,a);let h=(w,b,v,x=0,E=0,S=0)=>{let _=new Te(w,b);return _.position.set(x,E,S),_.castShadow=!0,_.receiveShadow=!0,v.add(_),_},u=(w,b,v,x,E,S,_,R=e.trim)=>h(Math.min(b,v,x)>.065?new Bt(b,v,x,2,Math.min(b,v,x)*.14):new on(b,v,x),R,w,E,S,_),d=(w,b,v,x,E,S,_,R=e.trim,C="y",D=24)=>{let N=h(new zt(b,v,x,D),R,w,E,S,_);return C==="x"&&(N.rotation.z=Math.PI/2),C==="z"&&(N.rotation.x=Math.PI/2),N},f=(w,b,v=.025,x=e.darkmetal)=>h(new Vn(new pi(b.map(E=>new L(...E)),!1,"centripetal",.1),Math.max(12,b.length*3),v,8,!1),x,w),g=(w,b,v=.01,x=e.trim)=>{let E=b.map(_=>new L(..._)),S=new $n;for(let _=1;_<E.length;_++)S.add(new Zn(E[_-1],E[_]));return h(new Vn(S,b.length*2,v,6,!1),x,w)};function y(w){for(;w.children.length;){let b=w.children[0];b.traverse(v=>{v.geometry?.dispose(),v.isInstancedMesh&&v.dispose(),v.userData.ownedMaterials?.forEach(x=>x.dispose()),v.userData.disposableMaterial&&(v.material.userData.ownsTextures||v.material.map?.dispose(),v.material.dispose())}),w.remove(b)}}c||(c=(w,b,v)=>{let x=b<0?-1:1,_=[[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]]].map(U=>new pi(U.map(([z,Y])=>new L(0,Y,z)))),R=[],C=[],D=64;for(let[U,z]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let Y=0;Y<=D;Y++){let Z=_[0].getPoint(Y/D).lerp(_[1].getPoint(Y/D),U);R.push(x*z,Z.y,v+Z.z)}for(let U=0;U<5;U++)for(let z=0;z<D;z++){let Y=U*(D+1)+z;C.push(Y,Y+1,Y+D+2,Y,Y+D+2,Y+D+1)}if(x<0)for(let U=0;U<C.length;U+=3)[C[U+1],C[U+2]]=[C[U+2],C[U+1]];let N=new lt;N.setAttribute("position",new Oe(R,3)),N.setIndex(C),N.computeVertexNormals(),h(N,e.trim,w)});function m(w,b=!1){let v=new Xe;w.add(v);let x=.61,E=-1.62;[-.72,.72].forEach(_=>u(v,.035,.055,2.25,_,1.82,-.5,e.darkmetal)),[x,E].forEach(_=>u(v,1.46,.055,.035,0,1.82,_,e.darkmetal));for(let _=-1.56;_<.62;_+=.14)u(v,1.43,.022,.072,0,1.825,_,e.trim);[-.68,.68].forEach(_=>[-1.38,.38].forEach(R=>{u(v,.055,.095,.11,_,1.755,R,e.darkmetal),u(v,.1,.02,.15,_,1.715,R,e.rubber),d(v,.012,.012,.06,_,1.77,R,e.metal,"x",8)}));let S=u(v,1.38,.13,.018,0,1.77,.64,e.trim);if(S.rotation.x=-.5,b){[-.72,.72].forEach(_=>g(v,[[_,1.83,x],[_,1.96,x-.12],[_,1.96,E+.06],[_,1.83,E]],.018));for(let _ of[-1.55,.49])u(v,1.44,.025,.025,0,1.955,_,e.darkmetal)}else for(let _ of[-.72,.72])for(let R of[-1.5,-.8,-.1,.5])u(v,.018,.014,.045,_,1.86,R,e.metal)}function p(w,b){y(i);let v=[];if(t&&w.has("headunit")){let R;{let D=document.createElement("canvas");D.width=384,D.height=224;let N=D.getContext("2d");N.fillStyle="#162a31",N.fillRect(0,0,384,224),N.fillStyle="#dce8d5",N.font="18px sans-serif",N.fillText("12:30",18,28),N.fillText("HOME",292,28);for(let[z,Y]of["Music","Phone","Maps"].entries())N.fillStyle=["#305d68","#42694b","#615f47"][z],N.fillRect(16+z*122,55,108,128),N.fillStyle="#eef3df",N.font="20px sans-serif",N.fillText(Y,26+z*122,145),N.beginPath(),N.arc(70+z*122,96,16,0,Math.PI*2),N.strokeStyle="#dbe6d9",N.lineWidth=3,N.stroke();let U=new bn(D);U.colorSpace=bt,R=new Ft({map:U})}let C=h(new ln(.232,.137),R,i,0,1.224,.312);C.rotation.y=Math.PI,C.userData.disposableMaterial=!0,n==="3door"&&(C.position.z-=.17)}let x=(_,R)=>{let C=_.filter(D=>w.has(D));if(C.length){let D=new Set(i.children);R();for(let N of i.children)D.has(N)||(N.userData.finishTarget=C[0]);v.push(...C)}};o(i,b.grille||"oem"),l(i,b.decal||"none"),b.finish==="raptor"&&[-1,1].forEach(_=>u(i,.018,.16,n==="3door"?1.43:1.77,_*(t?.751:.777),.65,-.08,e.textured));let E=["rack","msga_roofbasket","prad_roofrack","fr_slimline2","fr_slimline2_tall",...n==="3door"?[]:["suzuki_nomade_flatrack"]].some(_=>w.has(_));if(!E&&["rtt","awning","boards"].some(_=>w.has(_)))for(let _ of[-1.2,.25]){u(i,1.5,.045,.07,0,1.79,_,e.darkmetal);for(let R of[-1,1])u(i,.06,.1,.1,R*.7,1.73,_,e.trim),u(i,.09,.018,.13,R*.7,1.69,_,e.rubber)}if(n!=="3door"&&w.has("suzuki_nomade_flatrack")?x(["suzuki_nomade_flatrack"],()=>i.add(im(e))):w.has("fr_slimline2")||w.has("fr_slimline2_tall")?x(["fr_slimline2","fr_slimline2_tall"],()=>i.add(Yp(e,w.has("fr_slimline2_tall")))):x(["rack","msga_roofbasket","prad_roofrack"],()=>m(i,w.has("msga_roofbasket"))),w.has("skinnyjim_backbone")||w.has("skinnyjim_jerry_tray")){let _=tm(e);_.userData.finishTarget="skinnyjim_backbone",n==="3door"&&(_.position.z+=.17),i.add(_),v.push("skinnyjim_backbone"),x(["skinnyjim_jerry_tray"],()=>{let R=nm(e);n==="3door"&&(R.position.z+=.17),i.add(R)})}x(["snorkel","bimbra_snorkel"],()=>{let _=i.children.length;f(i,[[-.79,1.04,1.24],[-.84,1.08,.82],[-.84,1.25,.66],[-.79,1.67,.59]],.041,e.trim);let R=u(i,.13,.095,.16,-.79,1.705,.62,e.trim);R.rotation.x=.15;for(let C=-.832;C<-.74;C+=.025)u(i,.008,.058,.008,C,1.71,.706,e.darkmetal);if(u(i,.018,.045,.07,-.78,1.5,.61,e.darkmetal),n==="3door")for(let C of i.children.slice(_))C.position.z-=.17}),x(["bull","autostylenn_bumper_v1"],()=>{u(i,1.38,.23,.025,0,.73,1.79,e.trim);let _=w.has("bull"),R=_?[[-.85,.76],[-.72,.72],[.72,.72],[.85,.76],[.82,.57],[.47,.48],[-.47,.48],[-.82,.57]]:[[-.85,.72],[-.76,.76],[-.63,.7],[.63,.7],[.76,.76],[.85,.72],[.8,.57],[.56,.5],[-.56,.5],[-.8,.57]],C=new Ot(R.map(([D,N])=>new se(D,N)));if(_){let D=new en;D.absellipse(0,.594,.185,.031,0,Math.PI*2,!1),C.holes.push(D)}for(let D of[-1,1]){let N=new en;N.absellipse(D*.61,.637,_?.049:.044,.044,0,Math.PI*2,!1),C.holes.push(N)}h(new wn(C,{depth:.19,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:2}),e.darkmetal,i,0,0,1.86);for(let D of[-.61,.61])d(i,.038,.038,.008,D,.637,1.98,e.reflector,"z"),d(i,.034,.034,.009,D,.637,1.989,e.lens,"z");if(_){f(i,[[-.79,.72,1.99],[-.79,.96,1.99],[-.72,1.075,1.99],[-.6,1.083,1.99],[.6,1.083,1.99],[.72,1.075,1.99],[.79,.96,1.99],[.79,.72,1.99]],.026);for(let D of[-.43,.43]){f(i,[[D,.69,2.07],[D,.79,2.04],[D,1.083,1.99]],.018),u(i,.035,.17,.12,D,.66,2.04,e.darkmetal);let N=h(new Xt(.041,.01,8,24,Math.PI*1.65),e.accent,i,D,.52,2.08);N.rotation.z=.55,d(i,.013,.013,.09,D,.55,2.08,e.accent,"x")}for(let D of[-.74,.74]){u(i,.12,.043,.018,D,.65,2.058,e.trim);for(let N=-2;N<=2;N++)d(i,.01,.01,.01,D+N*.021,.65,2.071,e.reflector,"z",12)}}else{let D=new Ot([[-.37,.72],[-.33,.91],[.33,.91],[.37,.72]].map(([N,U])=>new se(N,U)));for(let N of[-.24,-.08,.08,.24]){let U=new en;U.absellipse(N,.81,.046,.021,0,Math.PI*2,!1),D.holes.push(U)}h(new wn(D,{depth:.008,bevelEnabled:!1}),e.darkmetal,i,0,0,1.86),u(i,1.26,.026,.2,0,.701,1.96,e.darkmetal)}for(let D of[-.77,-.42,0,.42,.77])d(i,.005,.005,.01,D,.574,2.061,e.metal,"z",8)}),x(["winch"],()=>{u(i,.45,.12,.19,0,.72,2.13,e.trim),d(i,.055,.055,.27,0,.74,2.21,e.metal,"x"),u(i,.07,.09,.03,0,.69,2.25,e.accent)}),x(["sliders"],()=>[-1,1].forEach(_=>{f(i,[[_*.91,.45,-.95],[_*.97,.45,-.85],[_*.97,.45,.85],[_*.91,.45,.95]],.035),u(i,.18,.035,1.8,_*.86,.46,0,e.darkmetal)})),x(["flares"],()=>[-1,1].forEach(_=>[-1.295,1.295].forEach(R=>c(i,_===1?.82:-.97,R,!0)))),x(["ladder"],()=>{let _=i.children.length;[-.65,-.35].forEach(R=>{f(i,[[R,.6,-1.99],[R,1.66,-1.99],[R,1.75,-1.8],[R,1.73,-1.66]],.02),u(i,.065,.02,.1,R,1.72,-1.68,e.rubber),u(i,.065,.04,.16,R,.64,-1.91,e.trim)});for(let R=.68;R<1.7;R+=.19)u(i,.32,.025,.035,-.5,R,-1.99,e.darkmetal);for(let R of i.children.slice(_))R.position.z+=.078}),x(["led","lamp_bar20"],()=>{let _=E?1.91:1.77,R=w.has("lamp_bar20")?.51:1.02;u(i,R,.065,.085,0,_,.68,e.trim);for(let C=-R/2+.035;C<=R/2-.03;C+=.06)d(i,.023,.023,.008,C,_,.726,e.reflector,"z",16),d(i,.009,.009,.01,C,_,.734,a.bar,"z",12);for(let C of[-R*.46,R*.46])u(i,.014,.065,.06,C,_-.05,.68,e.darkmetal);for(let C=.65;C<.7;C+=.012)u(i,R-.03,.075,.004,0,_,C,e.darkmetal)}),x(["pods","lamp_cube"],()=>[-1,1].forEach(_=>M(_*.78,1.22,.92,w.has("pods")?.062:.043,"combo",w.has("pods")))),x(["lamp_round_spot","lamp_round_flood"],()=>[-1,1].forEach(_=>M(_*.28,.87,2.08,.089,w.has("lamp_round_flood")?"flood":"spot",!0))),x(["lamp_fog","lamp_dual"],()=>[-1,1].forEach(_=>M(_*.62,.62,2.01,.043,w.has("lamp_dual")?"dual":"fog"))),x(["lamp_compact_bar"],()=>{u(i,.23,.073,.105,0,.76,2.07,e.trim);for(let _ of[-.081,-.027,.027,.081])d(i,.023,.023,.012,_,.76,2.13,e.reflector,"z"),d(i,.009,.009,.015,_,.76,2.14,a.driving,"z");u(i,.06,.05,.055,0,.7,2.07,e.darkmetal)}),x(["lamp_work"],()=>[-1,1].forEach(_=>{M(_*.58,1.79,-1.77,.026,"work",!1,!0),u(i,.055,.065,.065,_*.58,1.725,-1.75,e.darkmetal)})),x(["rtt"],()=>{let _=E?1.95:1.91;u(i,1.34,.18,2.1,0,_,-.42,e.canvas),u(i,1.39,.055,2.13,0,_+.105,-.42,e.trim),u(i,1.35,.028,2.1,0,_-.1,-.42,e.darkmetal);for(let R of[-1,1])for(let C of[-1.1,.3])u(i,.018,.1,.045,R*.68,_,C,e.trim)}),x(["awning"],()=>{let _=E?1.92:1.78;d(i,.061,.061,2.25,.82,_,-.5,e.canvas,"z");for(let R of[-1.35,.35])u(i,.11,.03,.055,.78,_-.05,R,e.darkmetal)}),x(["boards"],()=>{let _=w.has("rtt")?E?2.1:2.06:E?1.88:1.83;[-.32,.32].forEach(R=>{u(i,.24,.035,1,R,_,-.4,e.accent);for(let C of[-.75,-.05])u(i,.11,.035,.04,R,_-.03,C,e.trim),d(i,.012,.012,.04,R,_+.025,C,e.metal,"y",8);for(let C=-.8;C<0;C+=.1)for(let D of[-.075,0,.075])d(i,.012,.014,.022,R+D,_+.027,C,e.accent,"y",6)})}),x(["mudflaps"],()=>[-1,1].forEach(_=>[-1.295,1.295].forEach(R=>{let C=new Ot;C.moveTo(-.145,.51),C.lineTo(.145,.51),C.lineTo(.126,.19),C.quadraticCurveTo(.12,.175,.105,.175),C.lineTo(-.105,.175),C.quadraticCurveTo(-.12,.175,-.126,.19),C.closePath();let D=new wn(C,{depth:.007,bevelEnabled:!1,curveSegments:4}),N=D.attributes.position;for(let z=0;z<N.count;z++)N.setZ(z,N.getZ(z)-Math.max(0,.51-N.getY(z))*.11);D.computeVertexNormals();let U=h(D,e.rubber,i,_*.75,0,R-.405);U.name="Mudflap rubber",u(i,.25,.025,.012,_*.75,.5,R-.402,e.darkmetal);for(let z of[-.095,.095])d(i,.007,.007,.012,_*.75+z,.499,R-.392,e.metal,"z",8)}))),x(["sparecover"],()=>i.add(Jp(e,t?.sBadgeGeometry))),x(["bonnetguard"],()=>{let _=[];for(let D=0;D<=24;D++){let N=-.69+D*1.38/24;_.push(new L(N,1.17-.03*(Math.abs(N)/.69)**4,1.78-.035*(Math.abs(N)/.69)**4))}let R=new pi(_),C=new Ot;C.moveTo(-.008,-.027),C.lineTo(.008,-.027),C.quadraticCurveTo(.016,.025,.01,.048),C.lineTo(-.003,.048),C.quadraticCurveTo(.003,.015,-.008,-.027),h(new wn(C,{steps:48,bevelEnabled:!1,extrudePath:R}),e.trim,i,0,0,0)}),x(["spoiler"],()=>{let _=i.children.length,R=u(i,1.4,.045,.22,0,1.744,-1.76,e.trim);R.rotation.x=.08;for(let C of[-.6,.6])u(i,.12,.065,.14,C,1.7,-1.72,e.trim);for(let C of i.children.slice(_))C.position.z+=.078}),x(["visors"],()=>i.add(Kp(e.smoked))),x(["hingecovers"],()=>[-1,1].forEach(_=>[.63,-.32].forEach(R=>[.72,1.04].forEach(C=>u(i,.035,.065,.1,_*(t?.78:.807),C,R,e.metal))))),x(["cladding"],()=>[-1,1].forEach(_=>u(i,.035,.15,1.77,_*(t?.759:.787),.65,-.08,e.textured))),x(["skid"],()=>u(i,1.22,.045,1.22,0,.38,.85,e.metal)),x(["headlamps"],()=>(t?[-.55,.55]:[-.6,.6]).forEach(_=>{let R=i.children.length,C=t?.977:.95,D=1.889;d(i,.117,.117,.05,_,C,D-.035,e.trim,"z",64),h(new Xt(.11,.005,12,64),e.chrome,i,_,C,D),h(new Xt(.099,.005,12,64),e.white,i,_,C,D+.008);for(let U of[-.045,.036]){d(i,U>0?.043:.03,U>0?.043:.03,.014,_,C+U,D+.005,e.reflector,"z",40);let z=h(new In(U>0?.035:.023,32,20),e.lens,i,_,C+U,D+.016);z.scale.z=.38}for(let U of[-1,1])for(let z of[-.025,0,.025])u(i,.022,.012,.008,_+U*.069,C+z,D+.012,e.reflector);let N=new Xe;N.position.set(_,C,0),i.add(N);for(let U of i.children.slice(R,-1))U.position.x-=_,U.position.y-=C,N.add(U);N.scale.set(.9,.9,1)})),x(["dashcam"],()=>{u(i,.1,.055,.055,-.25,1.55,.62,e.trim),d(i,.017,.017,.012,-.25,1.55,.654,e.lens,"z"),u(i,.03,.04,.018,-.25,1.594,.62,e.trim)}),x(["headunit"],()=>{u(i,.26,.165,.028,0,1.225,.334,e.trim),u(i,.232,.137,.004,0,1.225,.318,e.glass);for(let _ of[-.1,.1])d(i,.008,.008,.007,_,1.152,.315,e.chrome,"z")}),x(["doortrim"],()=>i.add(lm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()})));let S=n!=="3door"&&w.has("touring");S&&x(["touring"],()=>i.add(hm(e,{camp:b.touringMode==="camp"&&!b.drivingPreview,drawers:!!b.touringDrawers&&!b.drivingPreview}))),S||x(["mod_reardoor_molle"],()=>i.add(Vc(e,n))),n!=="3door"&&(S||x(["mod_halfmolly_5door"],()=>i.add(Wc(e))),S||x(["exploresetups_drawer_5door"],()=>i.add(qc(e)))),!S&&!w.has("mod_halfmolly_5door")&&x(["molle"],()=>[-1,1].forEach(_=>{u(i,.012,.3,.42,_*.71,1.4,-1.37,e.trim);for(let R=-1.52;R<-1.2;R+=.08)for(let C=1.3;C<1.53;C+=.08)u(i,.015,.025,.045,_*.722,C,R,e.metal)})),!S&&!w.has("exploresetups_drawer_5door")&&x(["drawer"],()=>{let _=t?.8:.98;u(i,1.2,.22,.58,0,_,-1.34,e.darkmetal);for(let R of[-.3,.3])u(i,.565,.17,.018,R,_,-1.638,e.trim),u(i,.12,.032,.025,R,_+.035,-1.655,e.metal);u(i,1.19,.012,.57,0,_+.116,-1.34,e.seat)}),S||x(["shelf"],()=>{u(i,1.3,.025,.58,0,1.18,-1.3,e.trim);for(let _ of[-.6,.6])u(i,.025,.08,.56,_,1.21,-1.3,e.trim)}),x(["armrest"],()=>{u(i,.2,.14,.35,0,.98,-.2,e.seat),t&&u(i,.13,.12,.22,0,.88,-.2,e.trim)}),x(["mats"],()=>[-.36,.36].forEach(_=>{let R=t?.685:.71;u(i,.36,.018,.48,_,R,.42,e.trim);for(let C=.22;C<.64;C+=.04)u(i,.31,.006,.012,_,R+.011,C,e.darkmetal)})),x(["seats"],()=>{S||i.add(cm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()}))}),x(["steering"],()=>{h(new Xt(.123,.016,12,64),e.upholstery,i,-.38,1.16,.26);for(let _ of[-1,1])u(i,.065,.025,.032,-.38+_*.075,1.16,.25,e.upholstery)}),x(["ambient"],()=>{u(i,1.22,.004,.008,0,1.13,.355,e.ambient);for(let _ of[-.37,.37])u(i,.28,.004,.008,_,.82,.41,e.ambient)}),mm({parts:w,body:n,mats:e,rig:i,show:x}),v.push(...["tires","lift","autostylenn_big_suzuki_grille","autostylenn_cursive_grille","autostylenn_s_grille"].filter(_=>w.has(_)));for(let _ of i.children)!_.userData.finishTarget&&!_.userData.grilleBadge&&(_.userData.finishTarget="hardware");return v}function M(w,b,v,x,E,S=!1,_=!1){let R=new Xe;R.position.set(w,b,v),_&&(R.rotation.y=Math.PI),i.add(R),S?d(R,x,x*.96,.072,0,0,0,e.trim,"z",48):u(R,x*2,x*2,.075,0,0,0,e.trim);for(let C=-.03;C<.025;C+=.012)u(R,x*1.7,x*1.8,.004,0,0,C,e.darkmetal);for(let C of[-1,1])u(R,.009,x*.85,.04,C*(x+.007),-x*.6,-.005,e.darkmetal),d(R,.007,.007,.012,C*(x+.013),0,0,e.chrome,"x",8);u(R,x*2+.025,.008,.045,0,-x*1.04,0,e.darkmetal);for(let C of[-1,1])for(let D of[-1,1]){d(R,x*.36,x*.28,.012,C*x*.4,D*x*.4,.042,e.reflector,"z",24);let N=h(new In(x*.24,16,10),a[E],R,C*x*.4,D*x*.4,.052);N.scale.z=.23}if(S){let C=h(new Xt(x*.91,.004,8,48),e.darkmetal,R,0,0,.047);d(R,x*.87,x*.87,.003,0,0,.059,e.lens,"z",48)}else u(R,x*1.78,x*1.78,.003,0,0,.06,e.lens)}return p}var qy={CabinDashboard:{color:"#34393c",roughness:.83,scale:38,strength:24e-5,type:"grain"},WovenCabinFabric:{color:"#353b40",roughness:.96,scale:17,strength:45e-5,type:"weave"},CabinSeatInsert:{color:"#535c62",roughness:.98,scale:20,strength:5e-4,type:"weave"},CabinCarpet:{color:"#252a2e",roughness:1,scale:24,strength:7e-4,type:"grain"},BrightChrome:{color:"#b1b8bd",roughness:.31,metalness:.78,scale:45,strength:6e-5,type:"grain"},WindowGlass:{color:"#10171b",roughness:.23,metalness:.12,scale:45,strength:0,type:"grain",opaque:!0}};function Xy(i,e){let n=new Uint8Array(65536),s=617;for(let a=0;a<128;a++)for(let o=0;o<128;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=i==="weave"?(((o>>2)+(a>>2))%2?21:-21)+Math.sin(o*Math.PI/2)*12+Math.cos(a*Math.PI/2)*7:0,c=Math.max(0,Math.min(255,128+l+(s/4294967296-.5)*42)),h=(a*128+o)*4;n[h]=n[h+1]=n[h+2]=c,n[h+3]=255}let r=new Sn(n,128,128,tn);return r.wrapS=r.wrapT=Qt,r.repeat.set(e,e),r.magFilter=Pt,r.minFilter=Dn,r.generateMipmaps=!0,r.needsUpdate=!0,r}function bm(i){let e=new Map,t=new Map;return i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=qy[n.material.name];if(!s)return;let r=t.get(n.material);if(!r){r=n.material.clone(),r.color.set(s.color),r.roughness=s.roughness,r.metalness=s.metalness||0,s.opaque&&(r.transparent=!1,r.opacity=1,r.depthWrite=!0);let a=s.type+s.scale,o=e.get(a);o||(o=Xy(s.type,s.scale),e.set(a,o)),r.bumpMap=o,r.bumpScale=s.strength,s.type==="weave"&&(r.map=o),r.envMapIntensity=.45,r.needsUpdate=!0,t.set(n.material,r),r.addEventListener("dispose",()=>o.dispose())}n.material=r,n.userData.disposableMaterial=!0}),{dispose(){for(let n of e.values())n.dispose();for(let n of t.values())n.dispose()},count:t.size}}var xm=new WeakMap,jy=new Set(["GrilleAnthracite","MouldedPlastic","GlossBlackGrille","WheelGunmetal","BrightChrome","GrilleLettering"]),Yy=i=>typeof i=="string"&&(i==="body"||/^#[0-9a-f]{6}$/i.test(i))?i:"original";function Vs(i,e){let t=new lt;for(let[n,s]of Object.entries(i.attributes)){let r=[];for(let a of e)for(let o=0;o<s.itemSize;o++)r.push(s.getComponent(a,o));t.setAttribute(n,new Oe(r,s.itemSize))}return t}function Ky(i,e){if(i.name!=="OEMGrille"||i.userData.badgeSeparated)return;i.userData.badgeSeparated=!0,i.updateWorldMatrix(!0,!0);let t=[];i.traverse(n=>{n.isMesh&&n.material.name==="BrightChrome"&&t.push(n)});for(let n of t){let s=n.geometry,r=s.attributes.position,a=s.index,o=[],l=[],c=new L,h=new Ue().copy(i.matrixWorld).invert().multiply(n.matrixWorld),u=e==="3door"?-.17:0;for(let f=0;f<(a?.count||r.count);f+=3){let g=[0,1,2].map(m=>a?a.getX(f+m):f+m);(g.every(m=>(c.fromBufferAttribute(r,m).applyMatrix4(h),Math.abs(c.x)<.09&&c.z>1.898+u))?l:o).push(...g)}if(!l.length)continue;let d=new Te(Vs(s,l),n.material);d.name="FactoryGrilleEmblem",d.userData.grilleBadge=!0,d.position.copy(n.position),d.quaternion.copy(n.quaternion),d.scale.copy(n.scale),d.castShadow=n.castShadow,d.receiveShadow=n.receiveShadow,n.parent.add(d),n.geometry=Vs(s,o),s.dispose()}}function $u(i,e={},t="#d9b744",n="5door"){i&&(Ky(i,n),i.traverse(s=>{if(!s.isMesh||!jy.has(s.material?.name)&&!s.userData.grilleBadge)return;let r=xm.get(s);if(!r){let l=s.material;s.material=l.clone(),s.userData.disposableMaterial=!0,r={original:l.clone(),badge:!!s.userData.grilleBadge||l.name==="GrilleLettering"},xm.set(s,r),s.material.addEventListener("dispose",()=>r.original.dispose())}let a=s.material;a.copy(r.original);let o=Yy(e[r.badge?"badgeColour":"grilleColour"]);a.userData.explicitSurfaceColour=Object.hasOwn(e,r.badge?"badgeColour":"grilleColour"),o!=="original"?(a.color.set(o==="body"?t:o),a.vertexColors=!1,a.metalness=.12,a.roughness=.34):e.finish==="blackout"&&["BrightChrome","GrilleLettering"].includes(r.original.name)&&(a.color.set("#151b1e"),a.vertexColors=!1,a.metalness=.05,a.roughness=.78),a.needsUpdate=!0}))}var Qu=new WeakMap;function Jy(i,e="5door"){if(!i||Qu.has(i))return Qu.get(i);i.updateWorldMatrix(!0,!0);let t=i.parent?.matrixWorld.clone().invert()||new Ue,n=new Xe;n.name="ConfigurableSeating",n.applyMatrix4(i.matrix.clone().invert()),i.add(n);let s={groups:{},materials:[],fabricKey:"",body:e},r=[];i.traverse(h=>{h.isMesh&&!h.userData.cabinUpgrade&&["WovenCabinFabric","CabinSeatInsert","BrightChrome"].includes(h.material?.name)&&r.push(h)});let a=e==="3door"?-.17:0,o=new L;for(let h of r){let u=h.geometry,d=u.attributes.position,f=u.index,g=t.clone().multiply(h.matrixWorld),y={keep:[],rear:[],passengerBack:[],passengerHead:[],front:[]};for(let m=0;m<(f?.count||d.count);m+=3){let p=[0,1,2].map(x=>f?f.getX(m+x):m+x),M=0,w=0,b=0;for(let x of p)o.fromBufferAttribute(d,x).applyMatrix4(g),M+=o.x/3,w+=o.y/3,b+=o.z/3;let v="keep";h.material.name==="BrightChrome"?M>.22&&M<.53&&w>1.2&&w<1.3&&Math.abs(b-(-.18+a))<.035&&(v="passengerHead"):w>.73&&w<1.46&&b<(e==="3door"?-.44:-.55)?v="rear":Math.abs(M)<.64&&Math.abs(M)>.1&&w>.74&&w<1.44&&b>-.32+a&&b<.42+a&&(v=M>0&&w>1.263?"passengerHead":M>0&&w>.88&&b<-.012+a?"passengerBack":"front"),y[v].push(...p)}h.geometry=Vs(u,y.keep);for(let m of["rear","passengerBack","passengerHead","front"])if(y[m].length){let p=s.groups[m];p||(p=new Xe,p.name="Seating_"+m,n.add(p),s.groups[m]=p);let M=Vs(u,y[m]);if(M.applyMatrix4(g),g.determinant()<0){let b=[];for(let v=0;v<M.attributes.position.count;v+=3)b.push(v,v+2,v+1);M.setIndex(b)}let w=new Te(M,h.material.clone());w.name=h.material.name==="CabinSeatInsert"?"SeatWovenCentre":h.material.name==="BrightChrome"?"PassengerHeadrestPost":"SeatOuterBolster",w.userData.cabinUpgrade=!0,w.userData.seatInsert=h.material.name==="CabinSeatInsert",w.userData.disposableMaterial=!0,w.userData.originalMaterial=h.material,w.castShadow=w.receiveShadow=!0,p.add(w),h.material.name!=="BrightChrome"&&s.materials.push(w)}u.dispose()}let l=s.groups.passengerBack;if(l){let h=new L(.37,.84,-.11+a);l.position.copy(h),l.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}let c=s.groups.rear;if(c){let h=new L(0,.82,e==="3door"?-.88:-1.055);c.position.copy(h),c.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}return Qu.set(i,s),s}function _m(i,{body:e="5door",seats:t=!1,fabric:n="canvas",colour:s="#a38b69",touring:r=!1,camp:a=!1}={}){let o=Jy(i,e);if(!o)return;let l=[t,zs(n),s].join(":");if(o.fabricKey!==l){for(let c of o.materials){let h=c.material;c.material=t?qn(c.userData.seatInsert?n:n==="leather"?"leather":"canvas",c.userData.seatInsert||["canvas","leather"].includes(n)?s:"#303536"):c.userData.originalMaterial.clone(),c.material.name=c.userData.seatInsert?"CabinSeatInsert":"SeatCoverBolster",c.material.vertexColors=!!c.geometry.attributes.color,h.dispose()}o.fabricKey=l}return o.groups.rear&&(o.groups.rear.visible=!r),o.groups.passengerBack&&(o.groups.passengerBack.rotation.x=r&&a?-Math.PI/2:0),o.groups.passengerHead&&(o.groups.passengerHead.visible=!(r&&a)),i.userData.interiorLayout={touring:!!r,camp:!!(r&&a),fabric:zs(n),seats:!!t},o}var Yc=Object.freeze({P:.35,R:.31,N:.27,D:.23,2:.19,L:.15}),Kc=Object.freeze({"2H":.13,"4H":.085,"4L":.025});function ed(i,e){return(-40+Math.min(1,Math.max(0,i/e))*260)*Math.PI/180}function Zy(i){return{wheel:-(i.steer||0)*14,gearZ:Yc[i.gear]??Yc.N,rangeZ:Kc[i.range]??Kc["2H"],parking:i.parking?-.52:0,hdc:i.hdcActive?"ACTIVE":i.hdc?"READY":"OFF",tachometer:ed(i.rpm||0,7e3),speedometer:ed(Math.abs(i.speed||0)*3.6,180)}}function vm(i,e,t){let n=t==="3door"?-.17:0,s=new Xe;return s.name="AnimatedSteeringWheel",s.position.set(-.38,1.16,.26+n),e.add(s),i.updateWorldMatrix(!0,!0),i.traverse(r=>{if(!r.isMesh)return;let a=r.geometry,o=a.index?a.toNonIndexed():a.clone(),l=new lt;for(let[f,g]of Object.entries(o.attributes)){let y=[];for(let m=0;m<g.count;m++)for(let p=0;p<g.itemSize;p++)y.push(g.getComponent(m,p));l.setAttribute(f,new Oe(y,g.itemSize))}o.dispose(),l.applyMatrix4(r.matrixWorld);let c=l.attributes.position,h=[],u=[];for(let f=0;f<c.count;f+=3){let g=(c.getX(f)+c.getX(f+1)+c.getX(f+2))/3,y=(c.getY(f)+c.getY(f+1)+c.getY(f+2))/3,m=(c.getZ(f)+c.getZ(f+1)+c.getZ(f+2))/3-n,p=Math.hypot(g+.38,y-1.16)<.182&&m>.218&&m<.282,M=y>.865&&y<1.055&&(Math.abs(g)<.032&&Math.abs(m-.26)<.045||Math.abs(g+.07)<.032&&Math.abs(m-.15)<.045),w=r.material.name==="RearLampRed"&&y>1.18&&y<1.27&&m>.29&&m<.32;(p?u:M||w?[]:h).push(f,f+1,f+2)}function d(f){let g=new lt;for(let[y,m]of Object.entries(l.attributes)){let p=[];for(let M of f)for(let w=0;w<m.itemSize;w++)p.push(m.getComponent(M,w));g.setAttribute(y,new Oe(p,m.itemSize))}return g}if(u.length){if(r.matrixWorld.determinant()<0)for(let y=0;y<u.length;y+=3)[u[y+1],u[y+2]]=[u[y+2],u[y+1]];let f=d(u);f.translate(.38,-1.16,-.26-n);let g=new Te(f,r.material);g.castShadow=!0,s.add(g)}r.geometry=d(h).applyMatrix4(r.matrixWorld.clone().invert()),a.dispose(),l.dispose()}),s.rotation.x=.27,s}function ym(i,e,t){let n=new Xe;n.name="LiveCabinControls",n.position.z=t==="3door"?-.17:0,i.add(n);let s=new Ke({color:"#222a2b",roughness:.62}),r=new Ke({color:"#7b8383",roughness:.28,metalness:.7});function a(v,x,E,S,_,R,C=s){let D=new Te(new Bt(v,x,E,2,.008),C);return D.position.set(S,_,R),D.castShadow=!0,n.add(D),D}function o(v,x,E,S){let _=new Xe;_.position.set(v,x,E),n.add(_);let R=new Te(new zt(.006,.008,S,20),r);R.position.y=S/2,_.add(R);let C=new Te(new Bt(.051,.043,.051,5,.015),s);return C.position.y=S,C.rotation.x=.12,_.add(C),_}let l=new Ke({color:"#0a1012",roughness:.94});a(.14,.012,.29,.015,.863,.25),a(.018,.002,.235,.028,.871,.25,l),a(.07,.012,.18,-.095,.865,.085),a(.012,.002,.14,-.095,.873,.085,l);let c=o(.028,.874,Yc.N,.105),h=o(-.095,.874,Kc["2H"],.073),u=[-.3,-.46].map(v=>{let x=new Xe;x.position.set(v,1.223,.304),n.add(x);let E=new Te(new on(.044,.0025,.0015),new Ft({color:"#e87856"}));return E.position.x=.021,x.add(E),x}),d=new Xe;d.position.set(.105,.8,-.075),n.add(d);let f=new Te(new Bt(.027,.032,.16,2,.008),s);f.position.z=.065,d.add(f);let g=[];function y(v,x,E,S,_,R,C=!1){let D=document.createElement("canvas");D.width=512,D.height=256;let N=D.getContext("2d");N.fillStyle="#20292a",N.fillRect(0,0,512,256),N.fillStyle="#f1eee0",N.textAlign="center",N.textBaseline="middle",N.font=`600 ${v.length>1?160:210}px sans-serif`,N.fillText(v,256,128,480);let U=new bn(D);U.colorSpace=bt,U.anisotropy=4,g.push(U);let z=new Te(new ln(x,E),new Ft({map:U}));return z.position.set(S,_,R),z.rotation.set(C?-Math.PI/2:0,C?0:Math.PI,C?Math.PI:0),n.add(z),{canvas:D,ctx:N,texture:U}}for(let[v,x]of Object.entries(Yc))y(v,.014,.012,-.017,.873,x,!0);for(let[v,x]of Object.entries(Kc))y(v,.024,.012,-.127,.875,x,!0);function m(v,x,E,S,_,R){let C=document.createElement("canvas");C.width=1024,C.height=576;let D=C.getContext("2d");R(D,1024,576);let N=new bn(C);N.colorSpace=bt,N.anisotropy=8,g.push(N);let U=new Ft({map:N,toneMapped:!1}),z=new Te(new ln(v,x),U);z.position.set(E,S,_),z.rotation.y=Math.PI,n.add(z)}m(.198,.1115,0,1.232,.34,(v,x,E)=>{v.fillStyle="#0c1115",v.fillRect(0,0,x,E),v.fillStyle="#d7dcd9",v.font="24px sans-serif",v.fillText("FM  \u2022  09:41",34,43),v.textAlign="right",v.fillText("CONNECTED",x-34,43),v.textAlign="left",[["Audio","FM  91.1","#a86e36"],["Phone","Connect device","#447268"],["Navigation","Explore a new route","#405d75"],["Settings","Vehicle & display","#6c6252"]].forEach(([_,R,C],D)=>{let N=26+D%2*498,U=78+Math.floor(D/2)*235;v.strokeStyle=C,v.lineWidth=3,v.strokeRect(N,U,474,211),v.fillStyle=C,v.fillRect(N,U,8,211),v.fillStyle="#d9ddd9",v.font="34px sans-serif",v.fillText(_,N+28,U+64),v.fillStyle="#a5b0b1",v.font="25px sans-serif",v.fillText(R,N+28,U+117),v.beginPath(),v.arc(N+420,U+163,16,0,Math.PI*2),v.stroke()})});for(let[v,x]of[[-.083,"AUTO"],[0,"22.0"],[.083,"A/C"]])m(.031,.024,v,1.039,.275,(E,S,_)=>{E.fillStyle="#101315",E.fillRect(0,0,S,_),E.fillStyle="#bd7551",E.textAlign="center",E.textBaseline="middle",E.font=`500 ${x==="22.0"?235:180}px sans-serif`,E.fillText(x,S/2,_/2,S*.85)});for(let[v,x]of[[-.095,"12V"],[-.047,"USB"],[0,"\u2198"],[.047,"ESP"],[.095,"OFF"]])m(.021,.013,v,.965,.299,(E,S,_)=>{E.fillStyle="#171c1e",E.fillRect(0,0,S,_),E.fillStyle="#aeb6b3",E.font="190px sans-serif",E.textAlign="center",E.textBaseline="middle",E.fillText(x,S/2,_/2,S*.88)});let p=y("",.044,.047,-.38,1.216,.299),M=new Te(new In(.0035,8,6),new Ft({color:"#dc6041"}));M.position.set(-.48,1.255,.305),n.add(M);let w=[[-.4,.073],[-.26,.045]].map(([v,x])=>{let E=new Xe;E.name=v<-.3?"BrakePedal":"AcceleratorPedal",E.position.set(v,.8,.64),n.add(E);let S=new Te(new Bt(x,.09,.018,2,.004),s);S.position.set(0,-.052,-.018),E.add(S);for(let _=0;_<4;_++){let R=new Te(new on(x*.82,.003,.003),r);R.position.set(0,-.08+_*.018,-.029),E.add(R)}return E});for(let[v,x,E]of[[-.3,7,"x1000"],[-.46,180,"km/h"]]){let S=document.createElement("canvas");S.width=S.height=512;let _=S.getContext("2d");_.fillStyle="#151a1c",_.beginPath(),_.arc(256,256,256,0,Math.PI*2),_.fill();let R=x===7?7:9,C=(U,z)=>{let Y=ed(U,1);return[256-Math.cos(Y)*z,256-Math.sin(Y)*z]};for(let U=0;U<=R*5;U++){let z=U%5===0,Y=U/(R*5),Z=C(Y,z?207:219),he=C(Y,235);_.strokeStyle=x===7&&Y>5.8/7?"#b85c39":"#c8c4b8",_.lineWidth=z?4:2,_.beginPath(),_.moveTo(...Z),_.lineTo(...he),_.stroke(),z&&(_.fillStyle="#cda37c",_.font="500 31px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText(String(Math.round(Y*x)),...C(Y,170)))}_.fillStyle="#a7aca7",_.font="20px sans-serif",_.textAlign="center",_.fillText(E,256,356);let D=new bn(S);D.colorSpace=bt,D.anisotropy=4,g.push(D);let N=new Te(new Ca(.053,64),new Ft({map:D}));N.position.set(v,1.223,.306),N.rotation.y=Math.PI,n.add(N)}let b="";return{setVisible(v){n.visible=!!v},update(v){let x=Zy(v);e.rotation.z=x.wheel,c.position.z=x.gearZ,h.position.z=x.rangeZ,d.rotation.x=x.parking,M.visible=!!v.parking,u[0].rotation.z=x.tachometer,u[1].rotation.z=x.speedometer,w[0].rotation.x=-(v.braking||v.brakeInput||0)*.24,w[1].rotation.x=-(v.throttle||0)*.22;let E=`${v.gear} ${v.range}`,S=`${((v.distance||0)/1e3).toFixed(1)} km`;if(E+S!==b){b=E+S;let{ctx:_,texture:R}=p;_.fillStyle="#a6b4a2",_.fillRect(0,0,512,256),_.fillStyle="#27312b",_.font="600 78px monospace",_.fillText(E,256,87,480),_.font="52px monospace",_.fillText(S,256,180,480),R.needsUpdate=!0}return x},dispose(){n.removeFromParent();let v=new Set,x=new Set;n.traverse(E=>{E.geometry&&v.add(E.geometry),E.material&&x.add(E.material)}),v.forEach(E=>E.dispose()),x.forEach(E=>E.dispose()),g.forEach(E=>E.dispose())},snapshot(){return{steeringWheel:e.rotation.z,gearZ:c.position.z,rangeZ:h.position.z,parking:d.rotation.x,brakePedal:w[0].rotation.x,acceleratorPedal:w[1].rotation.x}}}}var td=Object.freeze([{id:"oem",name:"Factory finish",colour:null},{id:"graphite",name:"Satin graphite",colour:"#454b50"},{id:"bronze",name:"Satin bronze",colour:"#987345"},{id:"silver",name:"Machined silver",colour:"#b5b9bc"},{id:"black",name:"Black",colour:"#171b1d"}].map(i=>Object.freeze({...i,description:"Representative cosmetic wheel finish, not a specific product or fitment claim."}))),nd=new WeakMap,Mm=new Set(["StockWheels","AllTerrainWheels","SpareWheel"]);function $y(i,e){for(let t=i;t;t=t.parent){if(Mm.has(t.name))return t;if(/Cabin|Grille|BodyShell|Bumper/.test(t.name))return null;if(t===e)break}return!i.name&&!i.parent?.name?i.parent:null}function Qy(i,e){let t=i.geometry,n=i.material,s=t.attributes.position;if(!s)return null;i.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!0,!1);let r=new Ue().copy(e.matrixWorld).invert().multiply(i.matrixWorld),a=[],o=new L,l=1/0,c=-1/0,h=1/0,u=-1/0,d=1/0,f=-1/0;for(let ne=0;ne<s.count;ne++)o.fromBufferAttribute(s,ne).applyMatrix4(r),a.push(o.clone()),l=Math.min(l,o.x),c=Math.max(c,o.x),h=Math.min(h,o.y),u=Math.max(u,o.y),d=Math.min(d,o.z),f=Math.max(f,o.z);let g=Mm.has(e.name),y=e.name==="SpareWheel",m=1/0,p=-1/0,M=1/0,w=-1/0,b=1/0,v=-1/0;if(g){let ne=e.matrixWorld.clone().invert();e.traverse(re=>{let Pe=re.geometry?.attributes.position;if(!Pe)return;re.updateWorldMatrix(!0,!1);let Re=ne.clone().multiply(re.matrixWorld);for(let je=0;je<Pe.count;je++)o.fromBufferAttribute(Pe,je).applyMatrix4(Re),m=Math.min(m,o.y),p=Math.max(p,o.y),M=Math.min(M,o.z),w=Math.max(w,o.z),b=Math.min(b,o.x),v=Math.max(v,o.x)})}let x=g&&!y,E=g?(m+p)/2:0,S=g?(M+w)/2:0,_=g?(b+v)/2:0,R=x?(w-M-p+m)/2:0,C=new Uint8Array(s.count),D=new Float32Array(s.count*3),N=t.attributes.color,U=Math.sign(e.parent?.position.x||1);for(let ne=0;ne<a.length;ne++){let re=a[ne],Pe=x?S+(re.z>=S?R:-R):S,Re=Math.hypot(re.y-E,re.z-Pe),Ze=(x?Math.sign(re.x):U)>0?c-re.x:re.x-l;C[ne]=+(Re>.165||Re>.082&&Ze<.055);for(let rt=0;rt<3;rt++)D[ne*3+rt]=n.color[["r","g","b"][rt]]*(n.vertexColors&&N?N.getComponent(ne,rt):1)}if(!C.some(Boolean))return null;let z=t.clone(),Y=n.clone();z.setAttribute("color",new Oe(D,3));let Z=z.attributes.color.array;Y.color.set("#ffffff"),Y.vertexColors=!0,Y.userData.wheelFinishOriginal={name:n.name,color:n.color.getHexString(),vertexColors:n.vertexColors};let he={originalGeometry:t,originalMaterial:n,geometry:z,material:Y,mask:C,base:D,colours:Z,restoring:!1,released:!1},$=()=>{he.restoring||he.released||(he.released=!0,t.dispose(),n.dispose())};return z.addEventListener("dispose",$),Y.addEventListener("dispose",$),i.geometry=z,i.material=Y,nd.set(i,he),he}function e1(i,e){e.restoring=!0,i.geometry=e.originalGeometry,i.material=e.originalMaterial,e.geometry.dispose(),e.material.dispose(),nd.delete(i)}function Sm(i,e){let t=0;return i?.traverse&&(i.updateWorldMatrix?.(!0,!0),i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=nd.get(n);if(e.id==="oem"){s&&(e1(n,s),t++);return}if(!s){if(!["MachinedAlloy","WheelGunmetal"].includes(n.material?.name))return;let a=$y(n,i);if(!a||(s=Qy(n,a),!s))return}let r=new He(e.colour);for(let a=0;a<s.mask.length;a++)for(let o=0;o<3;o++)s.colours[a*3+o]=s.mask[a]?r[["r","g","b"][o]]:s.base[a*3+o];s.geometry.attributes.color.needsUpdate=!0,s.material.userData.wheelFinish=e.id,t++})),t}function wm(i,e="oem"){return Sm(i,td.find(t=>t.id===e)||td[0])}function Tm(i,e){return Sm(i,/^#[0-9a-f]{6}$/i.test(e||"")?{id:"custom",colour:e}:td[0])}function Em(i,e,t="5door"){if(!i||!e?.attributes.position.count||i.userData.steeringBadgeFitted)return null;i.userData.steeringBadgeFitted=!0,i.updateWorldMatrix(!0,!0);let n=t==="3door"?-.17:0,s=[];i.traverse(h=>{h.isMesh&&h.material.name==="BrightChrome"&&s.push(h)});for(let h of s){let u=h.geometry,d=u.attributes.position,f=u.index,g=[],y=new L,m=new Ue().copy(i.parent?.matrixWorld||new Ue).invert().multiply(h.matrixWorld);for(let p=0;p<(f?.count||d.count);p+=3){let M=[0,1,2].map(b=>f?f.getX(p+b):p+b);M.every(b=>(y.fromBufferAttribute(d,b).applyMatrix4(m),Math.abs(y.x+.38)<.04&&Math.abs(y.y-1.16)<.04&&y.z>.218+n&&y.z<.232+n))||g.push(...M)}g.length<(f?.count||d.count)&&(h.geometry=Vs(u,g),u.dispose())}let r=e.clone();r.computeBoundingBox();let a=r.boundingBox.getCenter(new L),o=r.boundingBox.max.x-r.boundingBox.min.x;r.translate(-a.x,-a.y,-a.z),r.scale(.044/o,.044/o,.044/o),r.rotateY(Math.PI),r.translate(-.38,1.16,.222+n);let l=new Ke({name:"SteeringEmblem",color:"#c7cbcc",metalness:.65,roughness:.27}),c=new Te(r,l);return c.name="SteeringSuzukiEmblem",c.userData.disposableMaterial=!0,c.castShadow=!1,c.applyMatrix4(i.matrix.clone().invert()),i.add(c),c}var Am=new Set(["interior","passenger","doors","driver-door","passenger-door","seats","seatbacks","storage","console","footwell","headliner"]),Rm=new Set(["cabin","cutaway","cargo","doors-cutaway","headliner-cutaway","touring"]);function Cm(i,e="5door"){let t=e==="3door"?-.17:0,n={interior:{eye:[-.38,1.48,-.08],yaw:0,pitch:-.45},passenger:{eye:[.38,1.48,-.08],yaw:0,pitch:-.38},doors:{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"driver-door":{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"passenger-door":{eye:[-.24,1.4,.2],yaw:Math.PI/2,pitch:-.3},seats:{eye:[.04,1.43,.14],yaw:Math.PI,pitch:-.48},seatbacks:{eye:[.02,1.43,-.64],yaw:0,pitch:-.6},storage:{eye:[.01,1.41,-.38],yaw:Math.PI,pitch:-.43},console:{eye:[.02,1.37,-.15],yaw:0,pitch:-.94},footwell:{eye:[-.39,1.13,.16],yaw:0,pitch:-.93},headliner:{eye:[.02,1.25,-.4],yaw:Math.PI,pitch:.72}},s=n[i]||n.interior;return{...s,eye:[s.eye[0],s.eye[1],s.eye[2]+t]}}var Kr=class extends lt{constructor(e=new Te,t=new L,n=new Mn,s=new L(1,1,1)){super();let r=[],a=[],o=[],l=new L,c=new ot().getNormalMatrix(e.matrixWorld),h=new Ue;h.makeRotationFromEuler(n),h.setPosition(t);let u=new Ue;u.copy(h).invert(),d(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("uv",new Oe(o,2)),a.length>0&&this.setAttribute("normal",new Oe(a,3));function d(){let m=[],p=new L,M=new L,w=e.geometry,b=w.attributes.position,v=w.attributes.normal;if(w.index!==null){let x=w.index;for(let E=0;E<x.count;E++)p.fromBufferAttribute(b,x.getX(E)),v?(M.fromBufferAttribute(v,x.getX(E)),f(m,p,M)):f(m,p)}else{if(b===void 0)return;for(let x=0;x<b.count;x++)p.fromBufferAttribute(b,x),v?(M.fromBufferAttribute(v,x),f(m,p,M)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let x=0;x<m.length;x++){let E=m[x];o.push(.5+E.position.x/s.x,.5+E.position.y/s.y),E.position.applyMatrix4(h),r.push(E.position.x,E.position.y,E.position.z),E.normal!==null&&a.push(E.normal.x,E.normal.y,E.normal.z)}}function f(m,p,M=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(u),M?(M.applyNormalMatrix(c),m.push(new yo(p.clone(),M.clone()))):m.push(new yo(p.clone()))}function g(m,p){let M=[],w=.5*Math.abs(s.dot(p));for(let b=0;b<m.length;b+=3){let v=0,x,E,S,_,R=m[b+0].position.dot(p)-w,C=m[b+1].position.dot(p)-w,D=m[b+2].position.dot(p)-w,N=R>0,U=C>0,z=D>0;switch(v=(N?1:0)+(U?1:0)+(z?1:0),v){case 0:{M.push(m[b]),M.push(m[b+1]),M.push(m[b+2]);break}case 1:{if(N&&(x=m[b+1],E=m[b+2],S=y(m[b],x,p,w),_=y(m[b],E,p,w)),U){x=m[b],E=m[b+2],S=y(m[b+1],x,p,w),_=y(m[b+1],E,p,w),M.push(S),M.push(E.clone()),M.push(x.clone()),M.push(E.clone()),M.push(S.clone()),M.push(_);break}z&&(x=m[b],E=m[b+1],S=y(m[b+2],x,p,w),_=y(m[b+2],E,p,w)),M.push(x.clone()),M.push(E.clone()),M.push(S),M.push(_),M.push(S.clone()),M.push(E.clone());break}case 2:{N||(x=m[b].clone(),E=y(x,m[b+1],p,w),S=y(x,m[b+2],p,w),M.push(x),M.push(E),M.push(S)),U||(x=m[b+1].clone(),E=y(x,m[b+2],p,w),S=y(x,m[b],p,w),M.push(x),M.push(E),M.push(S)),z||(x=m[b+2].clone(),E=y(x,m[b],p,w),S=y(x,m[b+1],p,w),M.push(x),M.push(E),M.push(S));break}case 3:break}}return M}function y(m,p,M,w){let b=m.position.dot(M)-w,v=p.position.dot(M)-w,x=b/(b-v),E=new L(m.position.x+x*(p.position.x-m.position.x),m.position.y+x*(p.position.y-m.position.y),m.position.z+x*(p.position.z-m.position.z)),S=null;return m.normal!==null&&p.normal!==null&&(S=new L(m.normal.x+x*(p.normal.x-m.normal.x),m.normal.y+x*(p.normal.y-m.normal.y),m.normal.z+x*(p.normal.z-m.normal.z))),new yo(E,S)}}},yo=class{constructor(e,t=null){this.position=e,this.normal=t}clone(){let e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}};function Pm(i){let e=new Map,t=new Map,n=i.clone();return Im(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Im(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Im(i.children[n],e.children[n],t)}var Jc=class extends Qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Zc(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zc(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ki.extractUrlBase(e);a=Ki.resolveURL(c,this.path)}else a=Ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new os(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Um){try{a[gt.KHR_BINARY_GLTF]=new Sd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case gt.KHR_MATERIALS_UNLIT:a[u]=new od;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new wd(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[u]=new Td;break;case gt.KHR_MESH_QUANTIZATION:a[u]=new Ed;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function t1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ad=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new He(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Is(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yi(h),c.distance=u;break;case"spot":c=new ls(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},od=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(r,r)}return Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],rn),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bt)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},vd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},yd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Zc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Md=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ri.TRIANGLES&&c.mode!==ri.TRIANGLE_STRIP&&c.mode!==ri.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let y=new Ue,m=new L,p=new pn,M=new L(1,1,1),w=new Vi(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),w.setMatrixAt(v,y.compose(m,p,M));let b=null;for(let v in l)if(v==="_COLOR_0"){let x=l[v];w.instanceColor=new Hi(x.array,x.itemSize,x.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let E=w.geometry;b=new lt,b.name=E.name;for(let S in E.attributes)b.setAttribute(S,E.attributes[S]);for(let S in E.morphAttributes)b.morphAttributes[S]=E.morphAttributes[S];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(let S of E.groups)b.addGroup(S.start,S.count,S.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),w.geometry=b}let x=l[v];b.setAttribute(v,new Hi(x.array,x.itemSize,x.normalized))}St.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Um="glTF",Mo=12,Dm={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Mo,r=new DataView(e,Mo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Dm.JSON){let c=new Uint8Array(e,Mo+a,o);this.content=n.decode(c)}else if(l===Dm.BIN){let c=Mo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Rd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Rd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}u(f)},o,c,rn,d)})})}},Td=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ed=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},$c=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,y=g-c,m=-2*f+3*d,p=f-d,M=1-m,w=p-d+u;for(let b=0;b!==o;b++){let v=a[y+b+o],x=a[y+b+l]*h,E=a[g+b+o],S=a[g+b]*h;r[b]=M*v+w*x+m*E+p*S}return r}},n1=new pn,Ad=class extends $c{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return n1.fromArray(r).normalize().toArray(r),r}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lm={9728:Nt,9729:Pt,9984:Kl,9985:kr,9986:Fs,9987:Dn},Nm={33071:Pn,33648:gr,10497:Qt},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i1={CUBICSPLINE:void 0,LINEAR:Ts,STEP:ws},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function Ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function r1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function a1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o1(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rd(t.attributes):e=i.indices+":"+rd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rd(i.targets[n]);return e}function rd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function l1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var c1=new Ue,Pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Va(this.options.manager):this.textureLoader=new Xa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new os(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ws(r,o,s),Pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ki.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=id[s.type],o=Jr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new $t(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=id[s.type],c=Jr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,w=t.cache.get(M);w||(y=new c(o,p*f,s.count*f/h),w=new As(y,f/h),t.cache.add(M,w)),m=new rs(w,l,d%f/h,g)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),m=new $t(y,l,g);if(s.sparse!==void 0){let p=id.SCALAR,M=Jr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new M(a[1],w,s.sparse.count*p),x=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new $t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,S=v.length;E<S;E++){let _=v[E];if(m.setX(_,x[E*l]),l>=2&&m.setY(_,x[E*l+1]),l>=3&&m.setZ(_,x[E*l+2]),l>=4&&m.setW(_,x[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Lm[d.magFilter]||Pt,h.minFilter=Lm[d.minFilter]||Dn,h.wrapS=Nm[d.wrapS]||Qt,h.wrapT=Nm[d.wrapT]||Qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Pt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new an(y);m.needsUpdate=!0,d(m)}),t.load(Ki.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Pi(u,a),u.userData.mimeType=a.mimeType||l1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ar,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Er,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ke}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let u=s[gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],rn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);let h=r.alphaMode||sd.OPAQUE;if(h===sd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===sd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let u=r.emissiveFactor;o.emissive=new He().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ws(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=o1(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Fm(new lt,c,t),c.mode===ri.TRIANGLE_STRIP?d=d.then(f=>Hu(f,mo)):c.mode===ri.TRIANGLE_FAN&&(d=d.then(f=>Hu(f,zr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?s1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=a[f],p,M=c[f];if(m.mode===ri.TRIANGLES||m.mode===ri.TRIANGLE_STRIP||m.mode===ri.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,b=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&b?new Ma(y,M):new Te(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ri.LINES)p=new wa(y,M);else if(m.mode===ri.LINE_STRIP)p=new Rs(y,M);else if(m.mode===ri.LINE_LOOP)p=new Ta(y,M);else if(m.mode===ri.POINTS)p=new Ea(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&a1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),m.extensions&&Ws(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ws(s,u[0],r),u[0];let d=new Xe;r.extensions&&Ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(nn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ei(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ue;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sa(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let w=0,b=d.length;w<b;w++){let v=d[w],x=f[w],E=g[w],S=y[w],_=m[w];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,x,E,S,_);if(R)for(let C=0;C<R.length;C++)p.push(R[C])}let M=new Ha(r,void 0,p);return Pi(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,c1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new wr:c.length>1?h=new Xe:c.length===1?h=c[0]:h=new St,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Pi(h,r),r.extensions&&Ws(n,h,r),r.matrix!==void 0){let u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xe;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&Ws(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Pm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof mn||d instanceof an)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}bs[r.path]===bs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(bs[r.path]){case bs.weights:h=qi;break;case bs.rotation:h=Xi;break;case bs.translation:case bs.scale:h=as;break;default:n.itemSize===1?h=qi:h=as;break}let u=s.interpolation!==void 0?i1[s.interpolation]:Ts,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let y=new h(l[f]+"."+bs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Xi?Ad:$c;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function h1(i,e,t){let n=e.attributes,s=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=Cd(Jr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=Cd(Jr[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Fm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Rd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ft.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Pi(i,e),h1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?r1(i,e.targets,t):i})}var Om=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),w=0;w<p.length;++w){var b=p.charCodeAt(w);M[w]=b>96?b-97:b>64?b-39:b+4}for(var v=0,w=0;w<p.length;++w)M[v++]=M[w]<60?n[M[w]]:(M[w]-60)*64+M[++w];return M.buffer.slice(0,v)}function l(p,M,w,b,v,x,E){var S=p.exports.sbrk,_=b+3&-4,R=S(_*v),C=S(x.length),D=new Uint8Array(p.exports.memory.buffer);D.set(x,C);var N=M(R,b,v,C,x.length);if(N==0&&E&&E(R,_,v),w.set(D.subarray(R,R+b*v)),S(R-S(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(w){var b=w.data;M.pending-=b.count,M.requests[b.id][b.action](b.value),delete M.requests[b.id]},M}function g(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),w=new Blob([M],{type:"text/javascript"}),b=URL.createObjectURL(w),v=u.length;v<p;++v)u[v]=f(b);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function y(p,M,w,b,v){for(var x=u[0],E=1;E<u.length;++E)u[E].pending<x.pending&&(x=u[E]);return new Promise(function(S,_){var R=new Uint8Array(w),C=++d;x.pending+=p,x.requests[C]={resolve:S,reject:_},x.object.postMessage({id:C,count:p,size:M,source:R,mode:b,filter:v},[R.buffer])})}function m(p){var M=p.data;self.ready.then(function(w){if(!M.id)return self.close();try{var b=new Uint8Array(M.count*M.size);l(w,w.exports[M.mode],b,M.count,M.size,M.source,w.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,M,w,b,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,M,w,b,r.exports[c[v]])},decodeIndexBuffer:function(p,M,w,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,M,w,b)},decodeIndexSequence:function(p,M,w,b){l(r,r.exports.meshopt_decodeIndexSequence,p,M,w,b)},decodeGltfBuffer:function(p,M,w,b,v,x){l(r,r.exports[h[v]],p,M,w,b,r.exports[c[x]])},decodeGltfBufferAsync:function(p,M,w,b,v){return u.length>0?y(p,M,w,h[b],c[v]):a.then(function(){var x=new Uint8Array(p*M);return l(r,r.exports[h[b]],x,p,M,w,r.exports[c[v]]),x})}}})();function km(i,e,t,n){let s=new Xe;if(s.name="PlayerNameDecals",!i)return s;let r=document.createElement("canvas");r.width=1024,r.height=192;let a=r.getContext("2d");a.textAlign="center",a.textBaseline="middle",a.font="700 100px sans-serif",a.lineJoin="round",a.strokeStyle="#182622",a.lineWidth=9,a.strokeText(i,512,96,960),a.fillStyle="#fffdf2",a.fillText(i,512,96,960);let o=new bn(r);o.colorSpace=bt;let l=new Ke({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,roughness:.65});n.updateMatrixWorld(!0),l.userData.disposableMaterial=!0;for(let c of[-1,1])for(let h of t){let u=n.localToWorld(new L(c*.748,.99,e==="3door"?-.07:.13)),d=new Mn(0,c*Math.PI/2,0),f=new Kr(h,u,d,new L(.69,.13,.13));if(f.applyMatrix4(n.matrixWorld.clone().invert()),f.attributes.position.count){let g=new Te(f,l);g.renderOrder=5,s.add(g)}else f.dispose()}return s}function Bm(i){return Array.from(String(i||"").normalize("NFC").replace(/[^\p{L}\p{M}\p{N} ._'’-]/gu,"").trim()).slice(0,20).join("")}function u1(i,e=[]){for(let t=i.object;t;t=t.parent)if(!t.visible)return!1;return!e.some(t=>t.distanceToPoint(i.point)<0)}function d1(i){let e=i.object,t=Array.isArray(e.material)?e.material[i.face?.materialIndex||0]:e.material;if(!t||t.opacity<.2)return null;let n=Yu(e);if(!n)return null;let{fabric:s,protectedSurface:r}=Ku(t),a=/TyreRubber|Tread|Sidewall/i.test(t.name)||t.userData.surfaceKind==="rubber"&&n==="wheels",o=n==="grille"&&t.name==="IntakeShadow";return{target:n,material:t.name,colour:o||!s&&!r,finish:o||!s&&!r,fabric:s,tyre:a,point:i.point.toArray()}}function f1(i=7){let e=null,t=new Set;return{down(n){if(t.add(n.pointerId),t.size>1){e=null;return}e=n.button===0?{id:n.pointerId,x:n.clientX,y:n.clientY,time:n.timeStamp,moved:!1}:null},move(n){e?.id===n.pointerId&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(e.moved=!0)},cancel(n){t.delete(n.pointerId),e=null},up(n){t.delete(n.pointerId);let s=e?.id===n.pointerId&&!e.moved&&n.timeStamp-e.time<700&&Math.hypot(n.clientX-e.x,n.clientY-e.y)<=i;return e=null,!!s}}}function zm({canvas:i,camera:e,root:t,planes:n=()=>[],enabled:s=()=>!0,onPick:r}){let a=f1(),o=new Ya,l=new se;i.addEventListener("pointerdown",c=>a.down(c)),i.addEventListener("pointermove",c=>a.move(c)),i.addEventListener("pointercancel",c=>a.cancel(c)),i.addEventListener("pointerup",c=>{if(!a.up(c)||!s())return;let h=i.getBoundingClientRect();l.set((c.clientX-h.left)/h.width*2-1,-(c.clientY-h.top)/h.height*2+1),t.updateMatrixWorld(!0),e.updateMatrixWorld(!0),o.setFromCamera(l,e);for(let u of o.intersectObject(t,!0)){if(!u1(u,n()))continue;let d=d1(u);if(!((Array.isArray(u.object.material)?u.object.material[u.face?.materialIndex||0]:u.object.material)?.opacity<.2)){d&&r(d);break}}})}var p1=Object.freeze(["highway","allterrain","mudterrain"]);function Gm(i={},e=new Set){return p1.includes(i.tyreType)?i.tyreType:e.has("tires")?"allterrain":"highway"}function m1(i=.368,e=.235){let t=e/2,n=i-.016,s=[[.193,-t*.72],[.235,-t*.93],[i*.83,-t],[n*.97,-t*.96],[n,-t*.77],[n,t*.77],[n*.97,t*.96],[i*.83,t],[.235,t*.93],[.193,t*.72]],r=new mi(s.map(([c,h])=>new se(c,h)),96);r.rotateZ(-Math.PI/2);let a=[r.toNonIndexed()];r.dispose();for(let c=0;c<32;c++)for(let h of[-1,1]){let u=(c+(h>0?.5:0))*Math.PI*2/32;for(let[d,f,g,y]of[[h*e*.32,e*.36,.047,h*.38],[h*e*.105,e*.3,.058,-h*.48]]){let m=new Bt(f,.019,g,1,.003);m.rotateY(y),m.translate(d,i-.0095,0),m.rotateX(u),a.push(m.index?m.toNonIndexed():m),m.index&&m.dispose()}}let o=Gc(a);a.forEach(c=>c.dispose());let l=o.attributes.position;for(let c=0;c<l.count;c++){let h=l.getY(c),u=l.getZ(c),d=Math.hypot(h,u);d>i&&(l.setY(c,h*i/d),l.setZ(c,u*i/d))}return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o.userData.tyreType="mudterrain",o}var So=new WeakMap,g1=new Set(["StockWheels","AllTerrainWheels"]);function b1(i,e){for(let t=i.parent;t;t=t.parent){if(g1.has(t.name))return t;if(t===e)break}return i.parent}function x1(i){let e=So.get(i);e&&(e.originals.forEach(t=>t.visible=e.visibility.get(t)),i.remove(e.group),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),So.delete(i))}function _1(i){let e=[];i?.traverse(t=>{So.has(t)&&e.push(t)}),e.forEach(x1)}function Hm(i,e="highway"){if(!i?.traverse)return 0;if(e!=="mudterrain")return _1(i),0;let t=new Map;i.updateWorldMatrix(!0,!0),i.traverse(s=>{if(s.isMesh&&s.material?.name==="TyreRubber"){let r=b1(s,i);if(So.has(r))return;t.has(r)||t.set(r,[]),t.get(r).push(s)}});let n=0;for(let[s,r]of t){let a=[],o=new L,l=new qt;for(let y of r){let m=new Ue().copy(s.matrixWorld).invert().multiply(y.matrixWorld),p=y.geometry.attributes.position;for(let M=0;M<p.count;M++)o.fromBufferAttribute(p,M).applyMatrix4(m),a.push(o.clone()),l.expandByPoint(o)}let c=l.getSize(new L),h=c.z>c.y*2,u=l.getCenter(new L),d=new Map;for(let y of a){let m=h?`${y.x>u.x?1:-1},${y.z>u.z?1:-1}`:"single";d.has(m)||d.set(m,new qt),d.get(m).expandByPoint(y)}let f=new Xe;f.name="MudTerrainTyres";for(let y of d.values()){let m=y.getSize(new L),p=y.getCenter(new L),M=r[0].material.clone();M.name="MudTerrainRubber",M.vertexColors=!1,M.roughness=.97,M.metalness=0;let w=new Te(m1(m.y/2,m.x),M);w.position.copy(p),w.castShadow=!0,w.receiveShadow=!0,f.add(w),n++}let g=new Map(r.map(y=>[y,y.visible]));r.forEach(y=>y.visible=!1),s.add(f),So.set(s,{group:f,originals:r,visibility:g})}return n}var Vm={type:"change"},Dd={type:"start"},qm={type:"end"},Qc=new Si,Wm=new Cn,v1=Math.cos(70*nn.DEG2RAD),dn=new L,kn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6,eh=class extends Ka{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new pn,this._lastTargetPosition=new L,this._quat=new pn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fr,this._sphericalDelta=new Fr,this._scale=1,this._panOffset=new L,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new L,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=M1.bind(this),this._onPointerDown=y1.bind(this),this._onPointerUp=S1.bind(this),this._onContextMenu=P1.bind(this),this._onMouseWheel=E1.bind(this),this._onKeyDown=A1.bind(this),this._onTouchStart=R1.bind(this),this._onTouchMove=C1.bind(this),this._onMouseDown=w1.bind(this),this._onMouseMove=T1.bind(this),this._interceptControlDown=I1.bind(this),this._interceptControlUp=D1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vm),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=kn:n>Math.PI&&(n-=kn),s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=dn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<v1?this.object.lookAt(this.target):(Wm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(Wm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(Vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;dn.copy(s).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function y1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function M1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function S1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qm),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function w1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Dd)}function T1(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function E1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qm))}function A1(i){this.enabled!==!1&&this._handleKeyDown(i)}function R1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Dd)}function C1(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function P1(i){this.enabled!==!1&&i.preventDefault()}function I1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var th=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new on;e.deleteAttribute("uv");let t=new Ke({side:xn}),n=new Ke,s=new Yi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Te(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Vi(e,n,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Te(e,Zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Te(e,Zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Te(e,Zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Te(e,Zr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Te(e,Zr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Te(e,Zr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zr(i){return new za({color:0,emissive:16777215,emissiveIntensity:i})}var nh=class extends Te{constructor(e,t,n,s=128){if(t<=0||n<=0||s<=0)throw new Error("THREE.GroundedSkybox: height, radius, and resolution must be positive.");let r=new In(n,2*s,s);r.scale(1,1,-1);let a=r.getAttribute("position"),o=new L;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){let c=-t*3/2,h=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(h),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(r,new Ft({map:e,depthWrite:!1}))}};var Xm=new Float64Array(1024);for(let i=0;i<1024;i++)Xm[i]=Math.pow(i*.003717127+.0521327014,2.4);var ih=class extends Qn{constructor(e){super(e),this.type=kt}setDataType(e){return this.type=e,this}parse(e,t){let n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},s=new TextDecoder,r=new Uint8Array(e),a=[],o=0;for(;o<r.length-1;){if(r[o]!==255){o++;continue}let h=r[o+1];if(h===216){a.push({sectionType:h,section:r.subarray(o,o+2),sectionOffset:o+2}),o+=2;continue}if(h===224||h===225||h===226){let u=r[o+2]<<8|r[o+3],d=o+2+u;a.push({sectionType:h,section:r.subarray(o,d),sectionOffset:o+2}),o=d;continue}if(h>=192&&h<=254&&h!==217&&(h<208||h>215)){let u=r[o+2]<<8|r[o+3];o+=2+u;continue}o+=2}let l,c;for(let h=0;h<a.length;h++){let{sectionType:u,section:d,sectionOffset:f}=a[h];if(u!==224){if(u===225)this._parseXMPMetadata(s.decode(new Uint8Array(d)),n);else if(u===226){let g=new DataView(d.buffer,d.byteOffset+2,d.byteLength-2),y="urn:iso:std:iso:ts:21496:-1\0";if(d.byteLength>=y.length+2){let p=!0;for(let M=0;M<y.length;M++)if(d[2+M]!==y.charCodeAt(M)){p=!1;break}if(p){let M=d.subarray(2+y.length);this._parseISOMetadata(M,n);continue}}if(g.getUint32(2,!1)===1297106432){let p=g.getUint32(6)===1229531648,M=60,w=g.getUint32(M,p),b=g.getUint32(M+4,p),v=g.getUint32(M+16,p),x=g.getUint32(M+20,p)+f+6;l=new Uint8Array(e,b,w),c=new Uint8Array(e,x,v)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(n,l,c,(h,u,d)=>{t({width:u,height:d,data:h,format:tn,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}_parseISOMetadata(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=4,r=n.getUint8(s);s+=1;let a=(r&4)!==0,o=(r&8)!==0,l,c,h,u,d,f,g;if(o){let y=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(m/y);let p=n.getUint32(s,!1);s+=4,g=Math.log2(p/y);let M=n.getInt32(s,!1);s+=4,l=M/y;let w=n.getInt32(s,!1);s+=4,c=w/y;let b=n.getUint32(s,!1);s+=4,h=b/y;let v=n.getInt32(s,!1);s+=4,u=v/y*255,d=n.getInt32(s,!1)/y*255}else{let y=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(y/m);let p=n.getUint32(s,!1);s+=4;let M=n.getUint32(s,!1);s+=4,g=Math.log2(p/M);let w=n.getInt32(s,!1);s+=4;let b=n.getUint32(s,!1);s+=4,l=w/b;let v=n.getInt32(s,!1);s+=4;let x=n.getUint32(s,!1);s+=4,c=v/x;let E=n.getUint32(s,!1);s+=4;let S=n.getUint32(s,!1);s+=4,h=E/S;let _=n.getInt32(s,!1);s+=4;let R=n.getUint32(s,!1);s+=4,u=_/R*255;let C=n.getInt32(s,!1);s+=4;let D=n.getUint32(s,!1);d=C/D*255}t.version="1.0",t.baseRenditionIsHDR=a,t.gainMapMin=l,t.gainMapMax=c,t.gamma=h,t.offsetSDR=u,t.offsetHDR=d,t.hdrCapacityMin=f,t.hdrCapacityMax=g}load(e,t,n,s){let r=new Sn(this.type===kt?new Uint16Array:new Float32Array,0,0,tn,this.type,ao,Pn,Pn,Pt,uu,1,rn);r.generateMipmaps=!0,r.flipY=!0;let a=new os(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{try{this.parse(o,l=>{r.image={data:l.data,width:l.width,height:l.height},r.needsUpdate=!0,t&&t(r,l)})}catch(l){s&&s(l),console.error(l)}},n,s),r}_parseXMPMetadata(e,t){let s=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[r]=s.getElementsByTagName("Container:Directory");if(!r){let[a]=s.getElementsByTagName("rdf:Description");t.version=a.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=a.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(a.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(a.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(a.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(a.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(a.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(a.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(a.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e<10.31475?e*303527e-9:e<1024?Xm[e|0]:Math.pow(e*.003717127+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,s,r){let a=o=>createImageBitmap(new Blob([o],{type:"image/jpeg"}));Promise.all([a(t),a(n)]).then(([o,l])=>{let c=o.width,h=o.height,u=c/h,d=l.width/l.height;if(u!==d){r("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let f=document.createElement("canvas"),g=f.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});f.width=c,f.height=h,g.drawImage(l,0,0,l.width,l.height,0,0,c,h);let y=g.getImageData(0,0,c,h,{colorSpace:"srgb"});g.drawImage(o,0,0);let m=g.getImageData(0,0,c,h,{colorSpace:"srgb"}),p=1.8**(e.hdrCapacityMax*.5),M=(Math.log2(p)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),w=Math.min(Math.max(M,0),1),b=m.data,v=y.data,x=b.length,E=e.gainMapMin,S=e.gainMapMax,_=e.offsetSDR,R=e.offsetHDR,C=1/e.gamma,D=e.gamma===1,N=this.type===kt,U=xa.toHalfFloat,z=this._srgbToLinear,Y=N?new Uint16Array(x).fill(15360):new Float32Array(x).fill(1);for(let Z=0;Z<x;Z+=4)for(let he=0;he<3;he++){let $=Z+he,ne=b[$],re=v[$]*.00392156862745098,Pe=D?re:Math.pow(re,C),Re=E+(S-E)*Pe,je=(ne+_)*(Re*w===0?1:Math.pow(2,Re*w))-R,Ze=Math.min(Math.max(z(je),0),65504);Y[$]=N?U(Ze):Ze}s(Y,c,h)}).catch(o=>{r(o)})}};async function L1(i){let e=new Uint8Array(await i.arrayBuffer());if(e[0]!==31||e[1]!==139)return e.buffer;let t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).arrayBuffer()}async function jm(i){let e=new Jc().setMeshoptDecoder(Om);if(typeof DecompressionStream=="function")try{let t=await fetch(i.replace(".glb?",".glb.gz?"));if(t.ok)return await e.parseAsync(await L1(t),"")}catch{}return e.loadAsync(i)}var sh=Object.freeze({spot:{label:"Focused driving spot",colour:"#f0f5ff",angle:.12,reach:40,intensity:190,aim:22},flood:{label:"Wide driving flood",colour:"#f0f5ff",angle:.48,reach:26,intensity:85,aim:10},fog:{label:"Low, wide yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},dual:{label:"Switchable white / yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},bar:{label:"Wide light-bar spread",colour:"#eff6ff",angle:.48,reach:36,intensity:140,aim:14},driving:{label:"Compact driving beam",colour:"#f7f4e9",angle:.24,reach:36,intensity:150,aim:18},combo:{label:"Pod driving / spread mix",colour:"#f2f5ff",angle:.38,reach:28,intensity:100,aim:12},work:{label:"Rear work flood",colour:"#fff0d4",angle:.8,reach:14,intensity:35,aim:-6}});function Ym(i,e=[]){let t=new Map((Array.isArray(e)?e:[]).filter(n=>n&&typeof n.id=="string").map(n=>[n.id,n]));return[...new Set((Array.isArray(i)?i:[]).filter(n=>typeof n=="string").flatMap(n=>t.has(n)?t.get(n).visual?[t.get(n).visual]:[]:[n]))]}function Km(i){let e=new Set(i),t=[];return e.has("lamp_round_spot")&&t.push("spot"),e.has("lamp_round_flood")&&t.push("flood"),e.has("lamp_fog")&&t.push("fog"),e.has("lamp_dual")&&t.push("dual"),(e.has("led")||e.has("lamp_bar20"))&&t.push("bar"),e.has("lamp_compact_bar")&&t.push("driving"),(e.has("pods")||e.has("lamp_cube"))&&t.push("combo"),e.has("lamp_work")&&t.push("work"),t}var qs=Object.freeze({studio:{label:"Garage",description:"Photographed workshop \xB7 Poly Haven HDRI",file:"autoshop-01",rotation:0,height:1.6,radius:22,exposure:.88,shadow:.5,key:[-.3,.94,.19]},mountains:{label:"Mountains",description:"Photographed mountain valley \xB7 Poly Haven HDRI",file:"kiara-5-noon",rotation:0,height:1.7,radius:70,exposure:1.1,shadow:.78,sunScale:.3,sun:{direction:[.466,.779,.419],irradiance:[15.54,15.59,16.72]}},urban:{label:"Urban",description:"Photographed city square \xB7 Poly Haven HDRI",file:"palermo-square",rotation:0,height:1.7,radius:45,exposure:.95,shadow:.5,key:[0,1,0]},desert:{label:"Desert",description:"Photographed sand quarry \xB7 Poly Haven HDRI",file:"quarry-02",rotation:0,height:1.7,radius:70,exposure:1.1,shadow:.74,sunScale:.3,sun:{direction:[.55,.734,.4],irradiance:[9.55,7.99,5.21]}}});function wo(i){return Object.hasOwn(qs,i)?i:"studio"}function Jm(i,e="4k"){return`assets/environments/${qs[wo(i)].file}-${e}.jpg`}function Zm(i,{loading:e=!1,failed:t=!1,night:n=!1}={}){return e?`Loading ${qs[wo(i)].label.toLowerCase()} scenery\u2026`:t?"Scenery could not load. A plain backdrop is shown; choose a scene to retry.":n?"Night uses a neutral test ground. Scenery returns in daylight.":qs[wo(i)].description}var N1=Object.freeze({BrightChrome:{metalness:1,roughness:.07},GrilleLettering:{metalness:.9,roughness:.18},MachinedAlloy:{metalness:.9,roughness:.3},WheelGunmetal:{metalness:.8,roughness:.38},WheelBarrelDark:{metalness:.55,roughness:.55},BrakeSteel:{metalness:.9,roughness:.42},CaliperMetal:{metalness:.6,roughness:.45},MouldedPlastic:{metalness:0,roughness:.62},GrilleAnthracite:{metalness:.2,roughness:.4},GlossBlackGrille:{metalness:0,roughness:.12,clearcoat:1,clearcoatRoughness:.04},TyreRubber:{metalness:0,roughness:.9}}),$m=Object.freeze({gloss:{roughness:.32,clearcoat:1,clearcoatRoughness:.035},satin:{roughness:.46,clearcoat:.35,clearcoatRoughness:.3},matte:{roughness:.72,clearcoat:0,clearcoatRoughness:.6}});function Qm(i){return $m[i]||$m.gloss}function e0(i){let e=N1[i?.name];if(!e)return!1;for(let[t,n]of Object.entries(e))t in i&&(i[t]=n);return i.envMapIntensity=1,!0}var t0={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125}},vertexShader:`

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

		}`};var n0={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125}},vertexShader:`

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

		}`};function i0(i,{width:e=3.1,depth:t=5.4,height:n=.62,resolution:s=512,blur:r=2.6,darkness:a=1.25,opacity:o=.9}={}){let l=new It(s,s),c=new It(s,s);l.texture.generateMipmaps=c.texture.generateMipmaps=!1;let h=new Ft({map:l.texture,transparent:!0,depthWrite:!1,opacity:o}),u=new Te(new ln(e,t).rotateX(Math.PI/2),h);u.name="ContactShadow",u.scale.y=-1,u.position.y=.0015,u.renderOrder=1;let d=new ei(-e/2,e/2,t/2,-t/2,0,n);d.rotation.x=Math.PI/2;let f=new Lr({depthTest:!1,depthWrite:!1});f.userData.darkness={value:a},f.onBeforeCompile=b=>{b.uniforms.darkness=f.userData.darkness,b.fragmentShader=`uniform float darkness;
${b.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}`};let g=new Te(new ln(e,t).rotateX(Math.PI/2)),y=new Dt(t0),m=new Dt(n0);y.depthTest=m.depthTest=!1;function p(b){g.visible=!0,g.material=y,y.uniforms.tDiffuse.value=l.texture,y.uniforms.h.value=b/256,i.setRenderTarget(c),i.render(g,d),g.material=m,m.uniforms.tDiffuse.value=c.texture,m.uniforms.v.value=b/256,i.setRenderTarget(l),i.render(g,d),g.visible=!1}function M(b){u.getWorldPosition(d.position),d.position.y=0,d.updateMatrixWorld();let v={target:i.getRenderTarget(),clear:i.getClearAlpha(),shadow:i.shadowMap.autoUpdate},x=new Gi;x.overrideMaterial=f,x.matrixWorldAutoUpdate=!1,b.updateMatrixWorld(!0),x.children.push(b),i.setClearAlpha(0),i.shadowMap.autoUpdate=!1,i.setRenderTarget(l),i.clear(),i.render(x,d),x.children.length=0,p(r),p(r*.4),i.setRenderTarget(v.target),i.setClearAlpha(v.clear),i.shadowMap.autoUpdate=v.shadow}function w(){l.dispose(),c.dispose(),h.dispose(),u.geometry.dispose(),g.geometry.dispose(),y.dispose(),m.dispose(),f.dispose()}return{plane:u,update:M,dispose:w,material:h}}var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},F1=new ei(-1,1,1,-1,0,1),Ld=class extends lt{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}},U1=new Ld,xs=class{constructor(e){this._mesh=new Te(U1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,F1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var rh=class extends Xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ii.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var To=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ah=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rh($r),this.copyPass.material.blending=jt,this.timer=new ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}To!==void 0&&(a instanceof To?n=!0:a instanceof ah&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var lh=class extends Xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new He}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Eo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ue},cameraProjectionMatrixInverse:{value:new Ue},cameraWorldMatrix:{value:new Ue},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Ao={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ch={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function s0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=O1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Sn(s,e,e);return r.wrapS=Qt,r.wrapT=Qt,r.needsUpdate=!0,r}function O1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Ro={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Nd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new se},cameraProjectionMatrixInverse:{value:new Ue},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Nd(i,e,t){let n=k1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function k1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var hh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,y=t-f,m,p;g>y?(m=1,p=0):(m=0,p=1);let M=g-m+h,w=y-p+h,b=g-1+2*h,v=y-1+2*h,x=l&255,E=c&255,S=this.perm[x+this.perm[E]]%12,_=this.perm[x+m+this.perm[E+p]]%12,R=this.perm[x+1+this.perm[E+1]]%12,C=.5-g*g-y*y;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[S],g,y));let D=.5-M*M-w*w;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[_],M,w));let N=.5-b*b-v*v;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[R],b,v)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,y=h-g,m=u-g,p=d-g,M=e-y,w=t-m,b=n-p,v,x,E,S,_,R;M>=w?w>=b?(v=1,x=0,E=0,S=1,_=1,R=0):M>=b?(v=1,x=0,E=0,S=1,_=0,R=1):(v=0,x=0,E=1,S=1,_=0,R=1):w<b?(v=0,x=0,E=1,S=0,_=1,R=1):M<b?(v=0,x=1,E=0,S=0,_=1,R=1):(v=0,x=1,E=0,S=1,_=1,R=0);let C=M-v+f,D=w-x+f,N=b-E+f,U=M-S+2*f,z=w-_+2*f,Y=b-R+2*f,Z=M-1+3*f,he=w-1+3*f,$=b-1+3*f,ne=h&255,re=u&255,Pe=d&255,Re=this.perm[ne+this.perm[re+this.perm[Pe]]]%12,je=this.perm[ne+v+this.perm[re+x+this.perm[Pe+E]]]%12,Ze=this.perm[ne+S+this.perm[re+_+this.perm[Pe+R]]]%12,rt=this.perm[ne+1+this.perm[re+1+this.perm[Pe+1]]]%12,O=.6-M*M-w*w-b*b;O<0?s=0:(O*=O,s=O*O*this._dot3(this.grad3[Re],M,w,b));let q=.6-C*C-D*D-N*N;q<0?r=0:(q*=q,r=q*q*this._dot3(this.grad3[je],C,D,N));let _e=.6-U*U-z*z-Y*Y;_e<0?a=0:(_e*=_e,a=_e*_e*this._dot3(this.grad3[Ze],U,z,Y));let pe=.6-Z*Z-he*he-$*$;return pe<0?o=0:(pe*=pe,o=pe*pe*this._dot3(this.grad3[rt],Z,he,$)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,y=(e+t+n+s)*l,m=Math.floor(e+y),p=Math.floor(t+y),M=Math.floor(n+y),w=Math.floor(s+y),b=(m+p+M+w)*c,v=m-b,x=p-b,E=M-b,S=w-b,_=e-v,R=t-x,C=n-E,D=s-S,N=_>R?32:0,U=_>C?16:0,z=R>C?8:0,Y=_>D?4:0,Z=R>D?2:0,he=C>D?1:0,$=N+U+z+Y+Z+he,ne=a[$][0]>=3?1:0,re=a[$][1]>=3?1:0,Pe=a[$][2]>=3?1:0,Re=a[$][3]>=3?1:0,je=a[$][0]>=2?1:0,Ze=a[$][1]>=2?1:0,rt=a[$][2]>=2?1:0,O=a[$][3]>=2?1:0,q=a[$][0]>=1?1:0,_e=a[$][1]>=1?1:0,pe=a[$][2]>=1?1:0,De=a[$][3]>=1?1:0,Je=_-ne+c,$e=R-re+c,ce=C-Pe+c,me=D-Re+c,xe=_-je+2*c,be=R-Ze+2*c,Me=C-rt+2*c,Fe=D-O+2*c,We=_-q+3*c,Le=R-_e+3*c,ze=C-pe+3*c,G=D-De+3*c,ht=_-1+4*c,at=R-1+4*c,F=C-1+4*c,T=D-1+4*c,j=m&255,K=p&255,te=M&255,ge=w&255,we=o[j+o[K+o[te+o[ge]]]]%32,ie=o[j+ne+o[K+re+o[te+Pe+o[ge+Re]]]]%32,fe=o[j+je+o[K+Ze+o[te+rt+o[ge+O]]]]%32,Ee=o[j+q+o[K+_e+o[te+pe+o[ge+De]]]]%32,Ge=o[j+1+o[K+1+o[te+1+o[ge+1]]]]%32,Ae=.6-_*_-R*R-C*C-D*D;Ae<0?h=0:(Ae*=Ae,h=Ae*Ae*this._dot4(r[we],_,R,C,D));let Se=.6-Je*Je-$e*$e-ce*ce-me*me;Se<0?u=0:(Se*=Se,u=Se*Se*this._dot4(r[ie],Je,$e,ce,me));let ke=.6-xe*xe-be*be-Me*Me-Fe*Fe;ke<0?d=0:(ke*=ke,d=ke*ke*this._dot4(r[fe],xe,be,Me,Fe));let qe=.6-We*We-Le*Le-ze*ze-G*G;qe<0?f=0:(qe*=qe,f=qe*qe*this._dot4(r[Ee],We,Le,ze,G));let it=.6-ht*ht-at*at-F*F-T*T;return it<0?g=0:(it*=it,g=it*it*this._dot4(r[Ge],ht,at,F,T)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Co=class i extends Xn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=s0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new It(this.width,this.height,{type:kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},Eo.defines),uniforms:ii.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ba,this.normalMaterial.blending=jt,this.pdMaterial=new Dt({defines:Object.assign({},Ro.defines),uniforms:ii.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},Ao.defines),uniforms:ii.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:ii.clone($r.uniforms),vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qa,blendDst:Ds,blendEquation:ni,blendSrcAlpha:$a,blendDstAlpha:Ds,blendEquationAlpha:ni}),this.blendMaterial=new Dt({uniforms:ii.clone(ch.uniforms),vertexShader:ch.vertexShader,fragmentShader:ch.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xl,blendSrc:Qa,blendDst:Ds,blendEquation:ni,blendSrcAlpha:$a,blendDstAlpha:Ds,blendEquationAlpha:ni}),this._fsQuad=new xs(null),this._originalClearColor=new He,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new wi,this.depthTexture.format=Ei,this.depthTexture.type=fs,this.normalRenderTarget=new It(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new hh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Sn(s,e,e,tn,Tn);return r.wrapS=Qt,r.wrapT=Qt,r.needsUpdate=!0,r}};Co.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var uh=class extends Xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ii.clone(Po.uniforms),this.material=new Dr({name:Po.name,uniforms:this.uniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this._fsQuad=new xs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===to?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===no?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===so?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xs=new Map,B1=Object.freeze(["heritage","safari","mountain","geo","topo","pinstripe","rally","checker","compass","pixel","contour","sunset"]),z1=new Set(B1);function G1(i,e,t){let n=new He(e),s=n.r*.2126+n.g*.7152+n.b*.0722<.18,r=/^#[0-9a-f]{6}$/i.test(t||"")?t:null,a=i+":"+s+":"+r;if(Xs.has(a))return Xs.get(a);let o=document.createElement("canvas");o.width=2048,o.height=512;let l=o.getContext("2d"),c=r||(s?"#d8d1bb":"#26332f");if(i==="heritage"||i==="safari")(r?[r,r,r]:i==="heritage"?["#bd542b","#df994c","#f0d29a"]:["#c8b786","#766b50","#394634"]).forEach((f,g)=>{l.fillStyle=f,l.fillRect(0,100+g*45,2048,38)});else if(i==="mountain")l.fillStyle=c,l.beginPath(),l.moveTo(0,430),[[0,350],[250,190],[420,300],[700,60],[950,280],[1190,140],[1490,330],[1720,210],[2048,350],[2048,430]].forEach(([d,f])=>l.lineTo(d,f)),l.closePath(),l.fill(),l.fillStyle=s?"#26332f":"#d8d1bb",l.beginPath(),l.moveTo(700,60),l.lineTo(628,174),l.lineTo(700,145),l.lineTo(758,182),l.closePath(),l.fill();else if(i==="geo"){l.fillStyle=c;for(let d=0;d<5;d++){let f=80+d*180;l.beginPath(),l.moveTo(f,420),l.lineTo(f+210,80),l.lineTo(f+315,80),l.lineTo(f+105,420),l.closePath(),l.fill()}l.fillRect(1050,350,998,70)}else if(i==="pinstripe"||i==="rally"){if(l.fillStyle=c,l.fillRect(0,i==="rally"?180:230,2048,i==="rally"?100:12),l.fillRect(0,i==="rally"?295:260,2048,8),i==="rally"){l.beginPath(),l.arc(1260,245,165,0,Math.PI*2),l.fill();let d=new He(c);l.fillStyle=d.r*.2126+d.g*.7152+d.b*.0722<.18?"#e7e7dc":"#242a29",l.font="italic 900 238px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("19",1255,257)}}else if(i==="checker"){l.fillStyle=c;for(let d=0;d<3;d++)for(let f=0;f<32;f++)(f+d)%2===0&&l.fillRect(f*64,180+d*64,64,64)}else if(i==="compass"){l.strokeStyle=c,l.lineWidth=8,l.beginPath(),l.arc(650,256,165,0,Math.PI*2),l.stroke(),l.fillStyle=c;for(let d=0;d<8;d++){let f=d*Math.PI/4;l.beginPath(),l.moveTo(650+Math.cos(f)*180,256+Math.sin(f)*180),l.lineTo(650+Math.cos(f+.24)*55,256+Math.sin(f+.24)*55),l.lineTo(650,256),l.closePath(),l.fill()}l.fillRect(900,250,1148,10)}else if(i==="pixel"){l.fillStyle=c;for(let d=0;d<7;d++)for(let f=0;f<36;f++)(f*17+d*13)%11<4&&l.fillRect(f*57,70+d*55,55,53)}else if(i==="sunset")(r?[c,c,c,c]:["#b44b38","#d6793d","#e4ac55","#ead0a0"]).forEach((f,g)=>{l.fillStyle=f,l.beginPath(),l.moveTo(0,150+g*45),l.lineTo(1150,150+g*45),l.lineTo(1500,60+g*45),l.lineTo(2048,60+g*45),l.lineTo(2048,91+g*45),l.lineTo(1500,91+g*45),l.lineTo(1150,181+g*45),l.lineTo(0,181+g*45),l.fill()});else if(i==="contour"){l.strokeStyle=c,l.lineWidth=9;for(let d=0;d<3;d++)l.beginPath(),l.moveTo(0,350+d*30),l.lineTo(430,350+d*30),l.lineTo(670,130+d*30),l.lineTo(870,310+d*30),l.lineTo(1150,70+d*30),l.lineTo(1550,350+d*30),l.lineTo(2048,350+d*30),l.stroke()}else{l.strokeStyle=c,l.lineWidth=4;for(let d=-3;d<15;d++){l.beginPath();for(let f=0;f<=2048;f+=8){let g=80+d*29+Math.sin(f/180+d*.28)*46+Math.sin(f/78+d*.13)*12;f?l.lineTo(f,g):l.moveTo(f,g)}l.stroke()}}let h=new bn(o);h.colorSpace=bt;let u=new Ke({name:"Vinyl "+i,map:h,transparent:!0,alphaTest:.04,depthWrite:!1,roughness:.48,metalness:0,polygonOffset:!0,polygonOffsetFactor:-4});if(Xs.size>=32){let d=Xs.keys().next().value,f=Xs.get(d);f.map.dispose(),f.dispose(),Xs.delete(d)}return Xs.set(a,u),u}function r0(i,e,t,n,s){if(!z1.has(t))return 0;e.updateWorldMatrix(!0,!1);let r=e.matrixWorld.clone().invert(),a=G1(t,n,s),o=0;for(let l of[-1,1])for(let c of i){c.updateWorldMatrix(!0,!1);let h=e.localToWorld(new L(l*.748,.91,-.27)),u=new Kr(c,h,new Mn(0,l*Math.PI/2,0),new L(2.95,.62,.1));if(!u.attributes.position.count){u.dispose();continue}u.applyMatrix4(r);let d=new Te(u,a);d.name="Body vinyl "+t,d.renderOrder=2,e.add(d),o++}return o}var wt=document.getElementById("viewer3d"),_n=document.getElementById("viewerStatus"),a0=8.1,Fd="Interactive Jimny modification preview. Click a part to edit; drag to orbit, scroll or pinch to zoom.",ct;try{ct=new kc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"})}catch{wt.classList.add("unavailable"),_n.textContent="3D is unavailable in this browser. Your parts list and estimates still work."}if(ct){let h=function(A,I,k=ct.getPixelRatio()){ct.setPixelRatio(k),ct.setSize(A,I,!1),o.setPixelRatio(k),o.setSize(A,I)},u=function(){C&&(R.update(D),C=!1),o.render()},p=function(){return g.has(d)},M=function(){let A=p();e.near=A?.018:.1,e.updateProjectionMatrix(),f.enableZoom=!A,f.enableRotate=!A,f.enablePan=!1,f.minDistance=["doors-cutaway","touring"].includes(d)?1.2:2,f.maxDistance=a0,f.minPolarAngle=.15,f.maxPolarAngle=d==="underside"?Math.PI*.75:Math.PI*.49,S()},w=function(){e.position.copy(m.eye),f.target.copy(e.position).add(new L(Math.sin(m.yaw)*Math.cos(m.pitch),Math.sin(m.pitch),Math.cos(m.yaw)*Math.cos(m.pitch))),e.lookAt(f.target),Fe=!0},b=function(){p()||f.update()},v=function(){return{eye:m.eye.clone(),yaw:m.yaw,pitch:m.pitch}},x=function(A){m.eye.copy(A.eye),m.yaw=A.yaw,m.pitch=A.pitch},E=function(){let A=Cm(d,$e);m.eye.set(...A.eye),m.yaw=A.yaw,m.pitch=A.pitch,w()},S=function(){let A=window.matchMedia("(max-width:899px)").matches&&!wt.parentElement.classList.contains("expanded");f.enabled=!A&&!p(),ct.domElement.style.touchAction=A?"pan-y":"none",wt.dataset.touchMode=A?"scroll":p()?"look-around":"orbit",ct.domElement.setAttribute("aria-label",(p()?"Enclosed 3D Jimny cabin. Drag to look around, Shift-drag to move within the cabin, scroll to zoom.":Fd)+(A?" Expand the preview for touch rotation.":"")),_n.textContent.startsWith("Live 3D")&&(_n.textContent=A?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate")},xe=function(A){let I=document.createElement("canvas");I.width=I.height=256;let k=I.getContext("2d");k.fillStyle="#888",k.fillRect(0,0,256,256);let X=73;for(let J=0;J<12e3;J++){X=X*16807%2147483647;let B=X%256;X=X*16807%2147483647;let ae=X%256;k.fillStyle=`rgba(${A==="paint"?"220,220,220":"40,40,40"},${A==="paint"?.12:.15})`,k.fillRect(B,ae,1,1)}if(A==="tyre"){k.strokeStyle="#252525",k.lineWidth=3;for(let J=-256;J<512;J+=24)k.beginPath(),k.moveTo(J,0),k.lineTo(J+40,90),k.lineTo(J+22,168),k.lineTo(J+62,256),k.stroke()}let V=new bn(I);return V.wrapS=V.wrapT=Qt,V.repeat.set(A==="paint"?8:12,A==="paint"?8:1),V.anisotropy=Math.min(4,ct.capabilities.getMaxAnisotropy()),V},fe=function(){document.querySelectorAll("[data-scenery-select]").forEach(A=>{A.value=K}),document.querySelectorAll("[data-scenery-status]").forEach(A=>{A.textContent=Zm(K,{loading:te,failed:ge,night:Le})}),wt.dataset.scenery=K,wt.dataset.sceneryLoading=String(te)},Ge=function(){let A=ie.get(K),I=!!A&&!te&&!ge&&!Le,k=qs[K];for(let[X,V]of ie)V.skybox&&(V.skybox.visible=I&&X===K);if(i.environment=I?A.environment.texture:s.texture,i.environmentRotation.set(0,I?k.rotation:0,0),ct.toneMappingExposure=I?k.exposure:.95,i.background.set(Le?"#10191f":"#20272b"),_.material=Le?re:ne,Pe.visible=!1,ne.opacity=I?k.shadow:.19,r.groundColor.set("#747572"),r.intensity=Le?.12:I?0:1.35,I&&k.sun?Ee.fromArray(k.sun.direction):I?Ee.fromArray(k.key):Ee.set(3,7,5).normalize(),Ee.applyAxisAngle(St.DEFAULT_UP,I?k.rotation:0),a.position.copy(Ee).multiplyScalar(9),I&&k.sun){let[X,V,J]=k.sun.irradiance,B=Math.max(X,V,J);a.color.setRGB(X/B,V/B,J/B,rn),a.intensity=B*k.sunScale}else a.color.set("#fffdf8"),a.intensity=Le?.06:I?1e-4:2.2;a.shadow.radius=I&&k.sun?5:16,a.shadow.normalBias=.004,a.shadow.bias=-15e-5,i.environmentIntensity=Le?.12:I?1:.7,fe(),Fe=!0},yt=function(A){for(;A.children.length;){let I=A.children[0];I.traverse(k=>{k.geometry?.dispose(),k.isInstancedMesh&&k.dispose(),k.userData.disposableMaterial&&(k.material.map?.dispose(),k.material.dispose())}),A.remove(I)}},xt=function(A,I,k,X,V,J,B,ae=0,oe="#e9e9df",ee="#222827",ye=!1){let Qe=document.createElement("canvas");Qe.width=512,Qe.height=128;let dt=Qe.getContext("2d");dt.fillStyle=ee,dt.fillRect(0,0,512,128),dt.fillStyle=oe,dt.font=`${ye?"italic ":""}700 ${I.length>8?"52":"72"}px Arial`,dt.textAlign="center",dt.textBaseline="middle",dt.fillText(I,256,68,490);let nt=new bn(Qe);nt.colorSpace=bt;let pt=new Ke({map:nt,roughness:.6,transparent:!1}),Ce=ve(new ln(k,X),pt,A,V,J,B);return Ce.rotation.y=ae,Ce.userData.disposableMaterial=!0,Ce},sn=function(A,I,k,X=O.paint,V=[],J=0){let B=new Ot(I.map(([ee,ye])=>new se(-ee,ye)));V.forEach(ee=>B.holes.push(new en(ee.map(([ye,Qe])=>new se(-ye,Qe)))));let ae=new Ir(B,24),oe=ae.attributes.position;for(let ee=0;ee<oe.count;ee++){let ye=-oe.getX(ee),Qe=oe.getY(ee);oe.setXYZ(ee,k*(.768-Math.max(0,Qe-1.14)*.115+J),Qe,ye)}if(ae.computeVertexNormals(),k<0){let ee=ae.index;for(let ye=0;ye<ee.count;ye+=3){let Qe=ee.getX(ye);ee.setX(ye,ee.getX(ye+2)),ee.setX(ye+2,Qe)}ae.computeVertexNormals()}return ve(ae,X,A)},Bn=function(A,I,k,X=!1){if(pe&&X){let ee=I<0?-1:1,ye=[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],Qe=[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]],dt=[],nt=[],pt=64,Ce=[ye,Qe].map(et=>new pi(et.map(([Jt,Lt])=>new L(0,Lt,Jt))));for(let[et,Jt]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let Lt=0;Lt<=pt;Lt++){let oi=Ce[0].getPoint(Lt/pt).lerp(Ce[1].getPoint(Lt/pt),et);dt.push(ee*Jt,oi.y,k+oi.z)}for(let et=0;et<5;et++)for(let Jt=0;Jt<pt;Jt++){let Lt=et*(pt+1)+Jt;nt.push(Lt,Lt+1,Lt+pt+2,Lt,Lt+pt+2,Lt+pt+1)}if(ee<0)for(let et=0;et<nt.length;et+=3)[nt[et+1],nt[et+2]]=[nt[et+2],nt[et+1]];let vt=new lt;vt.setAttribute("position",new Oe(dt,3)),vt.setIndex(nt),vt.computeVertexNormals(),ve(vt,O.trim,A);return}let V=I<0?-1:1,J=.385,B=X?.462:.432,ae=[];for(let ee=0;ee<=32;ee++){let ye=Math.PI*ee/32;ae.push([k-Math.cos(ye)*B,.335+Math.sin(ye)*B])}for(let ee=32;ee>=0;ee--){let ye=Math.PI*ee/32;ae.push([k-Math.cos(ye)*J,.335+Math.sin(ye)*J])}sn(A,ae,V,O.trim,[],X?.137:.075);let oe=[];for(let ee=0;ee<=32;ee++){let ye=ee*Math.PI/32;oe.push([V*(X?.91:.843),.335+Math.sin(ye)*B,k-Math.cos(ye)*B])}Be(A,oe,.014,O.trim);for(let ee of[-1,1])le(A,X?.15:.09,.18,.055,V*(X?.84:.8),.42,k+ee*.404,O.trim)},dh=function(){if(pe)return;let A=[[-1.78,.54],[-1.78,1.13],[.69,1.15],[1.79,1.1],[1.84,.88],[1.84,.52],[1.69,.52]];for(let B=0;B<=30;B++){let ae=B*Math.PI/30;A.push([1.295+Math.cos(ae)*.392,.335+Math.sin(ae)*.392])}A.push([.903,.535],[-.903,.535]);for(let B=0;B<=30;B++){let ae=B*Math.PI/30;A.push([-1.295+Math.cos(ae)*.392,.335+Math.sin(ae)*.392])}A.push([-1.687,.54]),le(q,1.43,.075,2.3,0,1.125,-.53,O.paint);let I=le(q,1.48,.075,1.11,0,1.13,1.235,O.paint);I.rotation.x=.026,le(q,1.46,.035,.15,0,1.163,.635,O.paint),le(q,1.46,.085,2.43,0,1.665,-.505,O.roof);for(let B of[-.746,.746])Be(q,[[B,1.647,.7],[B,1.684,.53],[B,1.684,-1.63],[B,1.65,-1.75]],.012,O.roof);for(let B of[-.48,-.24,0,.24,.48])le(q,.018,.009,1.93,B,1.709,-.55,O.roof);le(q,1.48,.53,.045,0,1.355,-1.75,O.paint),le(q,1.3,.375,.015,0,1.412,-1.778,O.trim),le(q,1.25,.33,.017,0,1.422,-1.79,O.glass),Be(q,[[.52,1.28,-1.805],[.11,1.29,-1.805]],.009,O.trim),[-1,1].forEach(B=>{sn(q,A,B);let ae=[[[.57,1.2],[.51,1.59],[-.24,1.59],[-.24,1.2]],[[-.34,1.2],[-.34,1.59],[-1.06,1.59],[-1.06,1.2]],[[-1.15,1.2],[-1.15,1.59],[-1.65,1.59],[-1.65,1.2]]];sn(q,[[.69,1.12],[.59,1.65],[-1.74,1.65],[-1.76,1.12]],B,O.paint,ae),ae.forEach(oe=>{sn(q,oe,B,O.glass,[],-.008);let ee=oe.concat([oe[0]]).map(([ye,Qe])=>[B*(.768-Math.max(0,Qe-1.14)*.115+.002),Qe,ye]);Ve(q,ee,.011,O.trim)});for(let oe of[.665,-.285,-1.105])Be(q,[[B*.772,.56,oe],[B*.773,1.15,oe],[B*.716,1.63,oe-.035]],.0035,O.trim);Be(q,[[B*.773,.58,.67],[B*.773,.57,-1.07]],.003,O.trim),Be(q,[[B*.774,1.104,.64],[B*.774,1.104,-1.72]],.005,O.paint),[-.13,-.93].forEach(oe=>{le(q,.025,.045,.16,B*.785,1.085,oe,O.trim),le(q,.028,.017,.115,B*.799,1.092,oe,O.darkmetal)}),[.63,-.32].forEach(oe=>[.72,1.04].forEach(ee=>{le(q,.025,.048,.065,B*.785,ee,oe,O.paint),ue(q,.009,.009,.065,B*.806,ee,oe,O.darkmetal,"y",8)})),Be(q,[[B*.77,1.22,.54],[B*.89,1.24,.55]],.018,O.trim),le(q,.17,.15,.24,B*.91,1.285,.56,O.trim),le(q,.012,.105,.18,B*.999,1.29,.54,O.glass),le(q,.05,.065,1.83,B*.78,.55,-.08,O.trim),[-1.295,1.295].forEach(oe=>Bn(q,B===1?.8:-.875,oe));for(let oe of[-1.295,1.295]){let ee=[];for(let ye=0;ye<=24;ye++){let Qe=Math.PI*ye/24;ee.push([oe-Math.cos(Qe)*.395,.335+Math.sin(Qe)*.395])}for(let ye=24;ye>=0;ye--){let Qe=Math.PI*ye/24;ee.push([oe-Math.cos(Qe)*.333,.335+Math.sin(Qe)*.333])}sn(q,ee,B,O.rubber,[],-.06)}le(q,.055,.035,.12,B*.791,1.035,1.07,O.orange),B===-1&&(sn(q,[[-1.48,1.01],[-1.48,1.12],[-1.66,1.12],[-1.66,1.01]],B,O.trim,[],.003),sn(q,[[-1.49,1.02],[-1.49,1.11],[-1.65,1.11],[-1.65,1.02]],B,O.paint,[],.004))});let k=le(q,1.395,.465,.026,0,1.397,.644,O.trim);k.rotation.x=-.17;let X=le(q,1.315,.393,.028,0,1.405,.661,O.glass);X.rotation.x=-.17,[-.726,.726].forEach(B=>{let ae=le(q,.06,.515,.06,B,1.392,.634,O.paint);ae.rotation.x=-.17});for(let B of[-.43,.21])Be(q,[[B,1.2,.703],[B+.08,1.24,.704]],.007,O.trim),Be(q,[[B-.14,1.245,.705],[B+.22,1.26,.704]],.009,O.trim);le(q,1.5,.23,.1,0,.975,1.811,O.paint),le(q,1.62,.19,.22,0,.645,1.825,O.trim),le(q,1.62,.17,.18,0,.64,-1.795,O.trim),le(q,1.57,.08,.085,0,.775,1.83,O.trim),[-.602,.602].forEach(B=>{ue(q,.153,.153,.035,B,.976,1.868,O.trim,"z",48),ue(q,.128,.12,.027,B,.976,1.889,O.chrome,"z",48);let ae=ve(new In(.116,32,16,0,Math.PI*2,0,Math.PI/2),O.reflector,q,B,.976,1.895);ae.rotation.x=Math.PI/2,ae.scale.y=.3,ue(q,.032,.032,.018,B,.976,1.908,O.white,"z"),ue(q,.118,.118,.012,B,.976,1.927,O.lens,"z",48);for(let oe=-3;oe<=3;oe++)Be(q,[[B+oe*.025,.89,1.934],[B+oe*.025,1.06,1.934]],.0015,O.lens);le(q,.128,.049,.025,B,1.146,1.813,O.trim),le(q,.11,.032,.029,B,1.146,1.83,O.orange),ue(q,.065,.065,.014,B,.64,1.945,O.trim,"z"),ue(q,.045,.045,.018,B,.64,1.956,O.lens,"z"),le(q,.23,.12,.025,B,.65,-1.901,O.red),le(q,.08,.057,.028,B+.052,.652,-1.918,O.lens)}),le(q,.46,.11,.018,0,.65,1.949,O.trim);for(let B=-.28;B<=.28;B+=.055)le(q,.032,.055,.015,B,.766,1.884,O.trim);le(q,1.13,.075,2.94,0,.43,-.1,O.darkmetal),[-1.295,1.295].forEach(B=>ue(q,.055,.055,1.65,0,.35,B,O.darkmetal,"x"));for(let B of[-1.295,1.295])ue(q,.105,.11,.15,0,.35,B,O.darkmetal,"z");xt(q,"Jimny",.19,.055,-.49,1.075,-1.783,Math.PI,"#c8cfcb","#36443c",!0);let V=new Xe;V.position.set(.12,1,-1.94),V.rotation.y=Math.PI/2,Io(V,0,0,0,.335,!1),q.add(V),[-.38,.38].forEach(B=>{le(q,.46,.12,.48,B,.85,.33,O.seat);let ae=le(q,.46,.48,.12,B,1.08,.09,O.seat);ae.rotation.x=-.1,le(q,.25,.14,.12,B,1.37,.08,O.seat)}),le(q,1.25,.12,.46,0,.85,-.7,O.seat),le(q,1.25,.4,.1,0,1.05,-.98,O.seat),le(q,1.36,.12,.26,0,1.12,.5,O.trim),ue(q,.075,.075,.012,.39,1.19,.355,O.trim,"z"),ue(q,.065,.065,.014,.24,1.19,.355,O.trim,"z");let J=ve(new Xt(.127,.014,8,32),O.trim,q,.38,1.16,.3);J.rotation.x=-.32},Io=function(A,I,k,X,V=.335,J=!1){let B=I<0?-1:1,ae=J?.115:.098,oe=.191,ee=I+B*(ae+.003),ye=[[oe,-ae*.92],[V*.82,-ae],[V*.93,-ae*.88],[V*.99,-ae*.63],[V,-ae*.32],[V,ae*.32],[V*.99,ae*.63],[V*.93,ae*.88],[V*.82,ae],[oe,ae*.92]].map(([nt,pt])=>new se(nt,pt)),Qe=ve(new mi(ye,64),O.rubber,A,I,k,X);Qe.rotation.z=Math.PI/2;for(let nt of[-1,1]){let pt=ve(new Xt(V*.81,.002,4,64),O.trim,A,I+nt*ae,k,X);pt.rotation.y=Math.PI/2}if(J){let nt=new Vi(new on(.062,.009,.036),O.rubber,180),pt=new St;for(let Ce=0;Ce<60;Ce++)for(let vt=0;vt<3;vt++){let et=(Ce+(vt===1?.4:0))/60*Math.PI*2;pt.position.set(I+(vt-1)*.071,k+Math.cos(et)*(V-.002),X+Math.sin(et)*(V-.002)),pt.rotation.set(et,0,(vt-1)*.18),pt.updateMatrix(),nt.setMatrixAt(Ce*3+vt,pt.matrix)}nt.castShadow=!0,A.add(nt)}ue(A,oe,oe,.15,I,k,X,O.darkmetal,"x",48),ue(A,.157,.157,.012,I+B*.076,k,X,O.brake,"x",48);let dt=ve(new Xt(oe-.005,.009,8,48),J?O.darkmetal:O.chrome,A,ee,k,X);dt.rotation.y=Math.PI/2;for(let nt=0;nt<5;nt++){let pt=nt*Math.PI*2/5;for(let Ce of[-1,1]){let vt=pt+Ce*.105,et=le(A,.018,.11,.022,ee,k+Math.cos(vt)*.119,X+Math.sin(vt)*.119,J?O.darkmetal:O.metal);et.rotation.x=vt}ue(A,.009,.009,.016,ee+B*.014,k+Math.cos(pt)*.044,X+Math.sin(pt)*.044,O.chrome,"x",6)}ue(A,.056,.056,.027,ee,k,X,J?O.darkmetal:O.metal,"x",32),ue(A,.025,.025,.031,ee,k,X,O.trim,"x",24)},Do=function(A){yt(U);let I=A.has("tires")?.368:pe?.3465:.335;if(pe)return pe.stockWheels.visible=!A.has("tires"),pe.atWheels.visible=A.has("tires"),I;let k=A.has("tires")?.765:.715;for(let X of[-k,k])for(let V of[-1.295,1.295])Io(U,X,I,V,I,A.has("tires"));return I},Lo=function(A,I=!1){let k=new Xe;A.add(k);let X=.61,V=-1.62;[-.72,.72].forEach(B=>le(k,.035,.055,2.25,B,1.82,-.5,O.darkmetal)),[X,V].forEach(B=>le(k,1.46,.055,.035,0,1.82,B,O.darkmetal));for(let B=-1.56;B<.62;B+=.14)le(k,1.43,.022,.072,0,1.825,B,O.trim);[-.68,.68].forEach(B=>[-1.38,.38].forEach(ae=>{le(k,.055,.095,.11,B,1.755,ae,O.darkmetal),le(k,.1,.02,.15,B,1.715,ae,O.rubber),ue(k,.012,.012,.06,B,1.77,ae,O.metal,"x",8)}));let J=le(k,1.38,.13,.018,0,1.77,.64,O.trim);if(J.rotation.x=-.5,I){[-.72,.72].forEach(B=>Ve(k,[[B,1.83,X],[B,1.96,X-.12],[B,1.96,V+.06],[B,1.83,V]],.018));for(let B of[-1.55,.49])le(k,1.44,.025,.025,0,1.955,B,O.darkmetal)}else for(let B of[-.72,.72])for(let ae of[-1.5,-.8,-.1,.5])le(k,.018,.014,.045,B,1.86,ae,O.metal)},No=function(A,I,k,X,V=.115){let J=[[[.48,.44],[.14,.64],[-.48,.2],[-.16,-.03],[.19,.23],[.34,.14],[.48,.25]],[[.16,.03],[-.19,-.23],[-.34,-.14],[-.48,-.25],[-.48,-.44],[-.14,-.64],[.48,-.2]]];for(let B of J){let ae=new Ot(B.map(([oe,ee])=>new se(oe*V,ee*V)));ve(new wn(ae,{depth:.008,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.001,bevelThickness:.001}),O.chrome,A,I,k,X)}},Fo=function(A,I){if(pe){if(Object.entries(pe.grilles).forEach(([k,X])=>X.visible=k===(I==="smesh"?"mesh":I)),I==="smesh"&&pe.sBadgeGeometry){let k=ve(pe.sBadgeGeometry.clone(),O.chrome,A);k.userData.grilleBadge=!0,$u(k,F,G,$e)}return}if(le(A,1.49,.286,.038,0,.977,1.855,O.trim),I==="mesh"||I==="delete"||I==="rhino"){for(let k=.866;k<1.09;k+=.028)le(A,.88,.009,.012,0,k,1.882,O.darkmetal);for(let k=-.43;k<.45;k+=.035)le(A,.008,.22,.012,k,.977,1.885,O.darkmetal);I==="rhino"&&No(A,0,.98,1.907,.13)}else if(I==="oem"||I==="chrome"){for(let k of[-.35,-.175,0,.175,.35]){le(A,.11,.2,.018,k,.977,1.88,O.darkmetal),le(A,.075,.162,.021,k,.977,1.893,O.trim);for(let X of[-1,1])le(A,.008,.18,.015,k+X*.048,.977,1.901,I==="chrome"?O.chrome:O.darkmetal)}No(A,0,.98,1.92,.125)}else{for(let k=.89;k<1.08;k+=.047)le(A,.88,.014,.012,0,k,1.887,O.darkmetal);xt(A,I==="script"?"Suzuki":"SUZUKI",.68,.12,0,.98,1.908,0,"#e2e5dd","#252e2d",I==="script")}},Uo=function(A,I){if(y.has(d)||I==="none")return;if(pe){r0(pe.paintMeshes,A,I,G,F.decalColour);return}let k=pe?.756:.773;[-1,1].forEach(X=>{if(I==="heritage"||I==="safari")(I==="heritage"?["#b24d25","#d58d43","#e6c58f"]:["#d7c18f","#655e47","#3d4836"]).forEach((J,B)=>{let ae=new Ke({color:J,roughness:.7}),oe=le(A,.006,.045,2.7,X*k,.87+B*.052,-.36,ae);oe.userData.disposableMaterial=!0});else if(I==="geo"||I==="mountain"){let V=new Ot;V.moveTo(-1.45,0),V.lineTo(-.85,.2),V.lineTo(-.45,.06),V.lineTo(.05,.24),V.lineTo(.65,0),V.closePath();let J=ve(new Ir(V),O.darkmetal,A,X*(k+.001),.67,-.25);J.rotation.y=X*Math.PI/2;for(let B=-1.4;B<.4;B+=.19){let ae=le(A,.007,.05,.11,X*(k+.003),.77,B,O.trim);ae.rotation.x=-.45}}else if(I==="topo")for(let V=0;V<6;V++){let J=[];for(let B=-1.52;B<.8;B+=.13)J.push([X*(k+.002),.72+V*.035+Math.sin(B*4+V)*.017,B]);Be(A,J,.003,O.darkmetal)}})},Ii=function(A,I){at=gm({accessoryRig:z,mats:O,detailed:pe,modelBody:$e,colour:G,effectiveDesign:F,lampEmitters:Se,buildGrille:Fo,addDecals:Uo,arch:Bn})(A,I),pe&&I.nameDecal&&z.add(km(Bm(I.nameDecal),$e,pe.paintMeshes,N))},Fn=function(A=ht){C=!0,rt.clear(),wt.dataset.cameraMode=p()?"inside":y.has(d)?"cutaway":"exterior",wt.dataset.cameraView=d,ht={...ht,...A},A.colour&&(G=A.colour);for(let[oe,ee]of[["viewStock",ze],["viewBuild",!ze]]){let ye=document.getElementById(oe);ye?.classList.toggle("active",ee),ye?.setAttribute("aria-pressed",String(ee))}let I=Ym(ze?[]:ht.parts||[],window.JIMNY_MARKET_PRODUCTS||[]),k=new Set(["tires","snorkel","skinnyjim_backbone","skinnyjim_jerry_tray","mod_reardoor_molle","seats","doortrim"]);for(let oe of window.JIMNY_MARKET_PRODUCTS||[])oe.visual&&oe.bodyStyles?.includes("3door")&&k.add(oe.visual);let X=new Set($e==="3door"?I.filter(oe=>k.has(oe)):I),V=ze?{finish:"oem",decal:"none",grille:"oem"}:{...ht.design};V.tyreType=ze?"highway":Gm(V,X),V.tyreType==="highway"?X.delete("tires"):X.add("tires"),pe&&(pe.headlamps.visible=!X.has("headlamps"),pe.bumper.visible=!["bull","autostylenn_bumper_v1"].some(oe=>X.has(oe)),Object.values(pe.grilles).forEach(oe=>$u(oe,V,G,$e))),ze||(X.has("autostylenn_big_suzuki_grille")?V.grille="block":X.has("autostylenn_cursive_grille")?V.grille="script":X.has("autostylenn_s_grille")&&(V.grille="smesh")),F={...V},O.upholstery.color.set({tan:"#a38b69",saddle:"#854d31",olive:"#59624d",stone:"#b3b1a5",black:"#303332"}[V.cabin]||"#a38b69");let J=Qm(V.finish);je.color.set(G),je.roughness=J.roughness,je.metalness=["#727973","#8a9099"].includes(G.toLowerCase())?.35:["#364b72","#5a6fd6","#8d1c25"].includes(G.toLowerCase())?.1:0,je.clearcoat=J.clearcoat,je.clearcoatRoughness=J.clearcoatRoughness,je.bumpScale=V.finish==="matte"?55e-5:8e-5,Ze.copy(je),V.finish==="twotone"&&Ze.color.set(/^#[0-9a-f]{6}$/i.test(V.roofColour||"")?V.roofColour:"#141b22"),[je,Ze].forEach(oe=>{let ee=y.has(d);oe.transparent!==ee&&(oe.needsUpdate=!0),oe.transparent=ee,oe.opacity=ee?.12:1,oe.depthWrite=!ee}),O.glass.opacity=y.has(d)||p()?.12:.6,O.glass.envMapIntensity=p()?.12:1,ct.clippingPlanes=y.has(d)?[new Cn(new L(0,-1,0),d==="headliner-cutaway"?1.631:1.48)]:[];for(let oe of["BodyShell","RoofShell","SpareWheel"]){let ee=_e.getObjectByName(oe);ee&&(ee.visible=!["cargo","doors-cutaway","headliner-cutaway","touring"].includes(d))}Me.position.set(0,1.48,d==="cargo"?-1.28:-.15),d==="footwell"&&Me.position.set(.39,1.08,.25-($e==="3door"?.17:0)),De?.setVisible(p()||y.has(d)),Me.intensity=p()?.85:["cargo","doors-cutaway","touring"].includes(d)?.95:y.has(d)?.35:0,yt(q),dh();let B=Do(X);if(N.position.y=(X.has("lift")?.055:0)+(B-(pe?.3465:.335)),pe)for(let oe of[pe.stockWheels,pe.atWheels,_e.getObjectByName("SpareWheel")])V.partColours?.wheels?Tm(oe,V.partColours.wheels):wm(oe,V.wheelFinish),qu(oe,$e==="5door"&&X.has("suzuki_nomade_steelwheel")),Hm(oe,V.tyreType);if(_m(_e.getObjectByName("Cabin"),{body:$e,seats:X.has("seats"),fabric:V.seatFabric,colour:"#"+O.upholstery.color.getHexString(),touring:X.has("touring"),camp:V.touringMode==="camp"}),Ii(X,V),Oo(),y.has(d)){let oe=new Set(["doortrim","seats","touring","armrest","mats","steering","ambient","molle","drawer","shelf","mod_reardoor_molle","mod_halfmolly_5door","exploresetups_drawer_5door","armoro_seat_organizer","jimsa_door_pockets","jimsa_dash_tray","jimsa_console_tray","jimsa_cargo_pouch_5door","jimsa_tiedowns","fr_wolfpack","fr_watercan20","arb_airkit","arb_repairkit","kap_fire"]);for(let[ee,ye]of Object.entries(globalThis.JimnyPracticalParts||{}))ye.category==="Interior"&&oe.add(ee);z.traverse(ee=>{let ye=ee.userData.finishTarget;ye&&!oe.has(ye)&&(ee.visible=!1)})}Xc(O,Se),rt.apply([D],V),T=Km(X),js(),Fe=!0,pe&&$e==="5door"&&X.has("suzuki_nomade_steelwheel")&&at.push("suzuki_nomade_steelwheel");let ae=at.length;_n.textContent=Je?"Simplified preview \xB7 detailed model unavailable":pe?ze?"Stock preview":ae?`${ae} fitted \xB7 click a part to edit`:wt.dataset.touchMode==="scroll"?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate":"Loading detailed Jimny\u2026",p()&&(_n.textContent="Click an accessory \xB7 drag to look around"),ct.domElement.setAttribute("aria-label",(p()?"Rotatable enclosed Jimny cabin. Drag to look around, Shift-drag to move, scroll to zoom.":Fd)+` ${ae} visible modifications.`),wt.dataset.parts=at.join(","),wt.dataset.finish=V.finish||"oem",wt.dataset.grille=V.grille||"oem",wt.dataset.decal=V.decal||"none",S()},Oo=function(){z.updateWorldMatrix(!0,!0);let A=z.matrixWorld.clone().invert(),I=new Map;z.traverse(k=>{if(!k.isMesh||k.userData.disposableMaterial||Array.isArray(k.material))return;let X="";for(let J=k;J&&J!==z;J=J.parent)if(J.userData.finishTarget){X=J.userData.finishTarget;break}let V=X+":"+k.material.uuid+":"+k.castShadow+":"+k.receiveShadow+":"+Object.keys(k.geometry.attributes).sort().join(",");I.has(V)||I.set(V,{material:k.material,objects:[],target:X}),I.get(V).objects.push(k)});for(let{material:k,objects:X,target:V}of I.values()){if(X.length<2)continue;let J=X.map(oe=>{let ee=oe.geometry.index?oe.geometry.toNonIndexed():oe.geometry.clone();return ee.applyMatrix4(new Ue().multiplyMatrices(A,oe.matrixWorld)),ee}),B=Gc(J,!1);if(J.forEach(oe=>oe.dispose()),!B)continue;X.forEach(oe=>{oe.geometry.dispose(),oe.removeFromParent()});let ae=ve(B,k,z);ae.userData.finishTarget=V,ae.castShadow=X[0].castShadow,ae.receiveShadow=X[0].receiveShadow}},js=function(){ke.visible=Le&&Z.headlights,Y.forEach(I=>{I.intensity=0}),O.white.emissiveIntensity=Le&&Z.headlights?2.8:0,O.ambient.emissiveIntensity=Le?2:.35,Object.values(Se).forEach(I=>I.emissiveIntensity=0),$.forEach(I=>I.intensity=0),T.forEach((I,k)=>{let X=sh[I],V=$[k];if(!V)return;let J=I==="dual"&&!Z.dualAmber?"#f1f6ff":X.colour,B=I==="bar"?1.85:I==="work"?1.79:["fog","dual"].includes(I)?.62:I==="combo"?1.22:.87;V.intensity=0,Se[I].color.set(J),Se[I].emissive.set(J),Se[I].emissiveIntensity=Le&&Z.auxiliary?3:0}),document.querySelectorAll("[data-light-toggle]").forEach(I=>{let k=Z[I.dataset.lightToggle];I.setAttribute("aria-pressed",String(k)),I.classList.toggle("active",k)});let A=document.getElementById("lightSelectionStatus");A&&(A.textContent=T.length?T.map(I=>sh[I].label).join(" \xB7 "):"Factory headlamps only. Add a lamp below to compare."),Le&&(_n.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),Fe=!0},Ji=function(A){Le=!!A,wt.parentElement.classList.toggle("lighting-night",Le),document.getElementById("viewNight").classList.toggle("active",Le),document.getElementById("viewNight").setAttribute("aria-pressed",String(Le)),Ge(),js(),Le||(d==="beam"?jn("orbit"):_n.textContent=ze?"Stock preview":at.length?`${at.length} representative parts in 3D`:"Click a part \xB7 drag to rotate"),Fe=!0},_i=function(){if(p())return w(),f.target.clone();let A=new qt,I=[];if(D.updateMatrixWorld(!0),D.traverse(ye=>{if(ye.isMesh){for(let Qe=ye;Qe&&Qe!==D;Qe=Qe.parent)if(!Qe.visible)return;A.expandByObject(ye,!0),I.push(ye)}}),A.isEmpty())return f.target.clone();let k=A.getCenter(new L),X=e.position.clone().sub(f.target).normalize(),V=new L().crossVectors(e.up,X).normalize(),J=new L().crossVectors(X,V),B=Math.tan(nn.degToRad(e.fov/2)),ae=B*e.aspect,oe=0,ee=new L;for(let ye of I){let Qe=ye.geometry.attributes.position;for(let dt=0;dt<Qe.count;dt++){ee.fromBufferAttribute(Qe,dt).applyMatrix4(ye.matrixWorld).sub(k);let nt=ee.dot(X);oe=Math.max(oe,Math.abs(ee.dot(V))/ae+nt,Math.abs(ee.dot(J))/B+nt)}}return e.position.copy(k).addScaledVector(X,Math.max(f.minDistance,oe*1.06)),e.lookAt(k),k},jn=function(A){A==="beam"&&(A="orbit"),d=A,wt.dataset.cameraMode=p()?"inside":y.has(A)?"cutaway":"exterior",wt.dataset.cameraView=A,M(),ai(e.aspect);let I={front:[0,1.25,6.7],side:[6.6,1.3,0],rear:[-4,1.62,-5.5],orbit:[4.25,1.62,5.35],roof:[3.9,4.2,-4.5],cabin:[3.9,3.4,-3.3],cargo:[0,2.8,-5.5],underside:[3.8,-1.5,4.5],beam:[8,9,-6],"reference-front":[.7,1.45,8],"reference-rear":[-.7,1.45,-8],"reference-side":[-8,1.3,0]};e.position.set(...I[A]||I.orbit),f.target.set(0,.9,0),b(),Fn(),p()?E():(f.target.copy(_i()),b()),A==="cargo"&&(e.position.set(1.65,2.25,-3.4),f.target.set(0,1.01,$e==="3door"?-1.23:-1.4),b()),A==="touring"&&(e.position.set(2.55,3.15,-3.1),f.target.set(0,.93,-.6),b(),_n.textContent="Touring interior \xB7 cutaway inspection"),A==="doors-cutaway"&&(e.position.set(-2.3,2.5,-1.5),f.target.set(0,.91,$e==="3door"?-.17:-.32),b(),_n.textContent="Door cutaway \xB7 optional inspection"),A==="headliner-cutaway"&&(e.position.set(2.3,2.6,-2.8),f.target.set(0,1.46,$e==="3door"?-.64:-.81),b(),_n.textContent="Roof removed \xB7 overhead storage inspection"),(A==="cabin"||A==="cutaway")&&(_n.textContent="Cabin cutaway \xB7 optional inspection, not the normal interior view"),A==="cargo"&&(_n.textContent="Cargo cutaway \xB7 body and spare hidden for inspection, not an open-door simulation"),p()&&(_n.textContent="Click an accessory \xB7 drag to look around"),Le&&(_n.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),document.querySelectorAll("[data-camera]").forEach(k=>k.classList.toggle("active",k.dataset.camera===A)),Fe=!0},ai=function(A){e.aspect=A;let I=p()?68:K==="studio"?28:42;e.fov=nn.radToDeg(2*Math.atan(Math.tan(nn.degToRad(I/2))*Math.max(1,1.25/A))),p()&&(e.fov=Math.min(92,e.fov)),e.updateProjectionMatrix()},ko=function(A){m.drag?.id===A.pointerId&&(m.drag=null)},ph=function(){let A=ct.getSize(new se),I=ct.getPixelRatio(),k=e.aspect,X=e.fov,V=e.position.clone(),J=e.quaternion.clone();h(1600,1200,1),ai(4/3),_i(),u();let B=ct.domElement.toDataURL("image/png");return h(A.x,A.y,I),e.position.copy(V),e.quaternion.copy(J),ai(k),e.fov=X,e.updateProjectionMatrix(),u(),B},mh=function(A){j||(j={payload:structuredClone(ht),stock:ze,night:Le,view:d,position:e.position.clone(),target:f.target.clone(),fov:e.fov,inside:v()}),ze=!1,Ji(!1),Fn(A),jn("orbit")},Bo=function(){if(!j)return;let A=j;j=null,ze=A.stock,Fn(A.payload),jn(A.view),Ji(A.night),x(A.inside),e.position.copy(A.position),f.target.copy(A.target),e.fov=A.fov,e.updateProjectionMatrix(),b(),Fe=!0},zo=function(A,I="orbit"){let k={payload:structuredClone(ht),stock:ze,night:Le,scenery:K,view:d,position:e.position.clone(),target:f.target.clone(),fov:e.fov,inside:v(),size:ct.getSize(new se),ratio:ct.getPixelRatio(),near:e.near,far:e.far,bodyVisible:N.visible};try{if(ze=!1,Le=!1,K="studio",Ge(),Fn(A),jn(I==="seat-detail"?"cabin":I==="grille-detail"?"front":I),h(1600,1200,1),ai(4/3),f.target.copy(_i()),b(),I==="wheel-detail"){let J=$e==="3door"?1.125:1.295;ct.toneMappingExposure=1.3,N.visible=!1,e.position.set(2.4,.6,J+1.3),e.lookAt(.705,.36,J),e.near=.1,e.far=2.7,e.updateProjectionMatrix()}if(I==="grille-detail"){let J=$e==="3door"?1.79:1.96;e.position.set(.32,1.16,J+3.15),e.lookAt(0,1.04,J-.1)}if(I==="seat-detail"&&(e.position.set(1.35,1.9,1),e.lookAt(.26,1.01,-.1)),I==="touring"&&(e.position.set(2.55,3.15,-3.1),e.lookAt(0,.94,-.6)),I==="doors"&&(jn("doors-cutaway"),e.position.set(-2.3,2.5,-1.5),e.lookAt(0,.91,-.32)),A.detail){let J=A.parts?.[0],B=window.JIMNY_MARKET_PRODUCTS?.find(ye=>ye.id===J),ae=B?.visual||J,oe={exea_cupholder:[[.12,1.35,-.09],[.57,1.17,.25]],exea_phone_mount:[[.02,1.43,-.11],[-.18,1.36,.345]],armoro_console_organizer:[[.02,1.3,-.11],[0,.84,.22]],exea_switch_extensions:[[.015,1.15,.01],[0,.965,.282]],maruti_at_mats:[[.39,1.13,.16],[.4,.698,.49]],skinnyjim_backbone:[[-1.85,1.38,-3.4],[-.49,1.04,-1.88]],skinnyjim_jerry_tray:[[-1.7,1.3,-3.4],[-.5,.91,-1.98]],suzuki_nomade_flatrack:[[2.5,3,-3.1],[0,1.82,-.52]],mod_reardoor_molle:[[0,1.78,-.9],[0,.96,-1.73]],mod_halfmolly_5door:[[1.7,1.85,-2.5],[0,1.23,-1.36]],exploresetups_drawer_5door:[[1.55,2.1,-3.05],[0,.83,-1.43]],rack:[[2.8,3.4,-3.4],[0,1.85,-.3]],msga_roofbasket:[[2.8,3.4,-3.4],[0,1.85,-.3]],prad_roofrack:[[2.8,3.4,-3.4],[0,1.85,-.3]],bull:[[1.65,1.38,4.65],[0,.8,1.9]],autostylenn_bumper_v1:[[1.65,1.32,4.65],[0,.7,1.9]],winch:[[1.4,1.15,4.1],[0,.64,1.97]],snorkel:[[-2.6,1.8,2.05],[-.76,1.36,.8]],led:[[1.4,2.6,3.8],[0,1.95,.55]],pods:[[1.65,1.65,4.2],[0,1.03,1.98]],headlamps:[[.35,1.2,4.85],[0,1.02,1.91]],sparecover:[[-1.65,1.5,-4.3],[0,1.08,-1.98]],ladder:[[-2.4,2,-4.5],[-.5,1.2,-1.94]],spoiler:[[-2,2.5,-4],[0,1.65,-1.68]],seats:[[2.45,2.65,1.45],[0,.96,-.18]],molle:[[2.65,2.28,-1.45],[0,.93,-.3]],armrest:[[1.6,2,-1.35],[0,.85,-.18]],lift:[[2.7,.75,2.9],[.45,.52,1.18]],mudflaps:[[2.7,.8,-2.8],[.65,.38,-1.25]],flares:[[3,1.15,2.8],[.7,.79,1.1]]},ee=oe[ae];ee&&$e==="3door"&&["exea_cupholder","exea_phone_mount","armoro_console_organizer","exea_switch_extensions"].includes(ae)&&(ee=ee.map(ye=>[ye[0],ye[1],ye[2]-.17])),B?.lightProfile&&(ee=B.lightProfile==="work"?[[1.8,2.7,-4],[0,1.9,-1.45]]:B.lightProfile==="bar"?oe.led:B.lightProfile==="headlamps"?oe.headlamps:oe.pods),ee&&(e.position.set(...ee[0]),e.lookAt(...ee[1]))}u();let X=document.createElement("canvas");X.width=800,X.height=600;let V=X.getContext("2d");return V.imageSmoothingQuality="high",V.drawImage(ct.domElement,0,0,800,600),X.toDataURL("image/webp",.9)}finally{N.visible=k.bodyVisible,e.near=k.near,e.far=k.far,e.updateProjectionMatrix(),ze=k.stock,Le=k.night,K=k.scenery,d=k.view,M(),Fn(k.payload),Ge(),x(k.inside),h(k.size.x,k.size.y,k.ratio),ai(k.size.x/k.size.y),e.fov=k.fov,e.updateProjectionMatrix(),e.position.copy(k.position),f.target.copy(k.target),b(),u(),Fe=!0,document.querySelectorAll("[data-camera]").forEach(X=>X.classList.toggle("active",X.dataset.camera===k.view))}},i=new Gi;i.background=new He("#efefed");let e=new Wt(28,1,.1,250);e.position.set(4.25,1.62,5.35),ct.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),ct.shadowMap.enabled=!0,ct.shadowMap.type=us,ct.toneMapping=Ls,ct.toneMappingExposure=.95,ct.domElement.setAttribute("aria-label",Fd),ct.domElement.setAttribute("role","img"),ct.domElement.tabIndex=0,wt.appendChild(ct.domElement);let t=new ks(ct),n=new th,s=t.fromScene(n,.04);i.environment=s.texture,i.environmentIntensity=.7,n.dispose(),t.dispose();let r=new Wa("#f6f8fa","#747572",1.35);i.add(r);let a=new Is("#fffdf8",2.2);a.position.set(3,7,5),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.radius=12,a.shadow.blurSamples=16,Object.assign(a.shadow.camera,{left:-2.8,right:2.8,top:2.8,bottom:-2.8,near:.1,far:20}),a.shadow.bias=-15e-5,a.shadow.normalBias=.004,i.add(a);let o=new oh(ct,new It(1,1,{type:kt,samples:4}));o.addPass(new lh(i,e));let l=new Co(i,e,1,1);l.blendIntensity=.9,l.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,distanceFallOff:1,scale:1.6,samples:16}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});let c=l.render.bind(l);l.render=(...A)=>{let I=[...ie.values()].map(k=>k.skybox).filter(k=>k?.visible);I.forEach(k=>{k.visible=!1}),c(...A),I.forEach(k=>{k.visible=!0})},o.addPass(l),o.addPass(new uh);let d="orbit",f=new eh(e,ct.domElement);f.target.set(0,.9,0),f.enableDamping=!0,f.dampingFactor=.09,f.enablePan=!1,f.minDistance=3.3,f.maxDistance=a0,f.maxPolarAngle=Math.PI*.49,f.minPolarAngle=.15;let g=Am,y=Rm,m={yaw:0,pitch:-.18,eye:new L,drag:null};new MutationObserver(S).observe(wt.parentElement,{attributes:!0,attributeFilter:["class"]}),window.matchMedia("(max-width:899px)").addEventListener("change",S),S();let _=new Te(new ln(200,200),new ka({color:"#303536",opacity:.19}));_.rotation.x=-Math.PI/2,_.position.y=-.003,_.receiveShadow=!0,i.add(_);let R=i0(ct);i.add(R.plane);let C=!0,D=new Xe;i.add(D);let N=new Xe;D.add(N);let U=new Xe;D.add(U);let z=new Xe;N.add(z);let Y=[-.55,.55].map(A=>{let I=new ls("#fff2cd",0,35,.3,.7,1.3);return I.position.set(A,.977,1.96),I.target.position.set(A,.05,13),N.add(I,I.target),I}),Z={headlights:!0,auxiliary:!0,dualAmber:!0},he=new Xe;N.add(he);let $=Array.from({length:8},()=>{let A=new ls("#fff",0,35,.3,.72,1.3);return he.add(A,A.target),A}),ne=_.material,re=new Ke({color:"#303431",roughness:.96}),Pe=new Xe;i.add(Pe),Pe.visible=!1;let Re=new Te(new ln(5.4,45),new Ke({color:"#424747",roughness:.94}));Re.rotation.x=-Math.PI/2,Re.position.set(0,.002,16),Pe.add(Re);for(let A=3;A<36;A+=3)for(let I of[-2.5,2.5]){let k=new Te(new on(.035,.32,.05),new Ke({color:"#e6e3cd",roughness:.5}));k.position.set(I,.16,A),Pe.add(k)}let je=new Gt({color:"#d9b744",roughness:.32,metalness:.025,clearcoat:1,clearcoatRoughness:.035}),Ze=je.clone();je.userData.vehiclePaint=!0,Ze.userData.vehiclePaint=!0;let rt=fm(),O={paint:je,roof:Ze,trim:new Ke({color:"#232a2a",roughness:.7}),rubber:new Ke({color:"#1b2020",roughness:.98}),glass:new Ke({color:"#213c45",roughness:.12,metalness:.55,transparent:!0,opacity:.91}),metal:new Ke({color:"#adb4b0",metalness:.8,roughness:.3}),darkmetal:new Ke({color:"#39403b",metalness:.6,roughness:.5}),white:new Ke({color:"#fff7de",emissive:"#fff3c4",emissiveIntensity:.25,roughness:.2}),red:new Ke({color:"#b72d27",emissive:"#951d19",emissiveIntensity:.2}),orange:new Ke({color:"#d88132",roughness:.5}),seat:new Ke({color:"#343a36",roughness:.94}),accent:new Ke({color:"#cb593a",roughness:.7}),canvas:new Ke({color:"#a39a79",roughness:1})},q=new Xe;N.add(q);let _e=new Xe;N.add(_e);let pe=null,De=null,Je=!1,$e="5door",ce=!1,me=0,be=xe("paint");je.bumpMap=be,je.bumpScale=35e-5,O.rubber.name="TyreRubber",O.rubber.bumpMap=be,O.rubber.bumpScale=2e-4,O.rubber.color.set("#171919"),O.rubber.roughness=.9,O.glass=new Gt({color:"#101b1d",roughness:.02,metalness:0,ior:1.52,specularIntensity:1,transparent:!0,opacity:.6,depthWrite:!1,side:Ht}),O.lens=new Gt({color:"#e0e7e7",metalness:.05,roughness:.08,clearcoat:1,transparent:!0,opacity:.4,depthWrite:!1}),O.chrome=new Ke({color:"#e8eeed",metalness:1,roughness:.17}),O.reflector=new Ke({color:"#d4d9d7",metalness:1,roughness:.24}),O.brake=new Ke({color:"#737976",metalness:.85,roughness:.46}),O.textured=new Ke({color:"#30362f",roughness:.96,bumpMap:be,bumpScale:.008}),O.upholstery=new Ke({color:"#a38b69",roughness:.86,bumpMap:be,bumpScale:6e-4}),O.darkmetal.color.set("#25292b"),O.darkmetal.metalness=.4,O.darkmetal.roughness=.55,O.ambient=new Ke({color:"#386588",emissive:"#2f90d0",emissiveIntensity:.35,roughness:.5}),O.smoked=new Gt({color:"#11191b",roughness:.18,clearcoat:.7,transparent:!0,opacity:.85,depthWrite:!1,side:Ht});let Me=new Yi("#f2f3ee",0,2.3,2);Me.position.set(0,1.48,-.15),N.add(Me);let Fe=!0,We=!0,Le=!1,ze=!1,G="#d9b744",ht={parts:[],design:{finish:"oem",decal:"none",grille:"oem"},colour:"#d9b744"},at=[],F={finish:"oem",decal:"none",grille:"oem"},T=[],j=null,K="studio",te=!1,ge=!1,we=0,ie=new Map,Ee=new L;new MutationObserver(Ge).observe(document.documentElement,{attributes:!0,attributeFilter:["data-ui-theme"]});async function Ae(A){let I=wo(A),k=++we;K=I,ge=!1,te=!ie.has(I),Ge();try{if(te){let J=await new ih().setDataType(kt).loadAsync(Jm(I,"4k"));if(J.mapping=Or,J.needsUpdate=!0,k!==we){J.dispose();return}let B=new ks(ct),ae=B.fromEquirectangular(J);B.dispose(),ie.set(I,{texture:J,environment:ae})}if(k!==we)return;let X=qs[I],V=ie.get(I);if(!V.skybox){let J=new nh(V.texture,X.height,X.radius,96);J.position.y=X.height-.004,J.material.envMapRotation.set(0,X.rotation,0),J.renderOrder=-1,i.add(J),V.skybox=J}te=!1;try{localStorage.setItem("thatsuvmod-scenery",I)}catch{}}catch{if(k!==we)return;te=!1,ge=!0}Ge(),ai(e.aspect),f.target.copy(_i()),b()}document.querySelectorAll("[data-scenery-select]").forEach(A=>A.addEventListener("change",()=>Ae(A.value)));let Se=Object.fromEntries(Object.entries(sh).map(([A,I])=>[A,new Ke({color:I.colour,emissive:I.colour,emissiveIntensity:0,roughness:.12,metalness:.1})])),ke=new Xe;N.add(ke);let qe=document.createElement("canvas");qe.width=qe.height=64;let it=qe.getContext("2d"),W=it.createRadialGradient(32,32,0,32,32,32);W.addColorStop(0,"rgba(255,251,222,1)"),W.addColorStop(.18,"rgba(255,251,222,.6)"),W.addColorStop(1,"rgba(255,251,222,0)"),it.fillStyle=W,it.fillRect(0,0,64,64);let Ie=new bn(qe);Ie.colorSpace=bt;let de=new Sr({map:Ie,transparent:!0,opacity:.65,depthWrite:!1,blending:Za});for(let A of[-.55,.55]){let I=new ya(de);I.position.set(A,.977,1.94),I.scale.set(.19,.19,1),ke.add(I)}ke.visible=!1;let ve=(A,I,k,X=0,V=0,J=0)=>{let B=new Te(A,I);return B.position.set(X,V,J),B.castShadow=!0,B.receiveShadow=!0,k.add(B),B},le=(A,I,k,X,V,J,B,ae=O.trim)=>ve(Math.min(I,k,X)>.065?new Bt(I,k,X,2,Math.min(I,k,X)*.14):new on(I,k,X),ae,A,V,J,B),ue=(A,I,k,X,V,J,B,ae=O.trim,oe="y",ee=24)=>{let ye=ve(new zt(I,k,X,ee),ae,A,V,J,B);return oe==="x"&&(ye.rotation.z=Math.PI/2),oe==="z"&&(ye.rotation.x=Math.PI/2),ye},Be=(A,I,k=.025,X=O.darkmetal)=>ve(new Vn(new pi(I.map(V=>new L(...V)),!1,"centripetal",.1),Math.max(12,I.length*3),k,8,!1),X,A),Ve=(A,I,k=.01,X=O.trim)=>{let V=I.map(B=>new L(...B)),J=new $n;for(let B=1;B<V.length;B++)J.add(new Zn(V[B-1],V[B]));return ve(new Vn(J,I.length*2,k,6,!1),X,A)};document.addEventListener("click",A=>{let I=A.target.closest("[data-light-toggle]");I&&(Z[I.dataset.lightToggle]=!Z[I.dataset.lightToggle],js())}),new ResizeObserver(()=>{let{width:A,height:I}=wt.getBoundingClientRect();!A||!I||(h(A,I),ai(A/I),f.target.copy(_i()),b(),Fe=!0)}).observe(wt),new IntersectionObserver(A=>{We=A[0].isIntersecting,We&&(Fe=!0)},{rootMargin:"100px"}).observe(wt),f.addEventListener("change",()=>{Fe=!0}),ct.domElement.addEventListener("pointerdown",A=>{!p()||wt.dataset.touchMode==="scroll"||(m.drag={id:A.pointerId,x:A.clientX,y:A.clientY,pan:A.shiftKey||A.button===2},ct.domElement.setPointerCapture(A.pointerId),A.preventDefault())}),ct.domElement.addEventListener("pointermove",A=>{let I=m.drag;if(!p()||!I||I.id!==A.pointerId)return;let k=A.clientX-I.x,X=A.clientY-I.y;if(I.x=A.clientX,I.y=A.clientY,I.pan){let V=$e==="3door"?-.17:0;m.eye.x=nn.clamp(m.eye.x-k*.0012,-.52,.52),m.eye.z=nn.clamp(m.eye.z+X*.0012,-.78+V,.16+V)}else m.yaw-=k*.004,m.pitch=nn.clamp(m.pitch+X*.003,-1.15,.8);w(),A.preventDefault()}),zm({canvas:ct.domElement,camera:e,root:D,planes:()=>ct.clippingPlanes,enabled:()=>!!pe&&!ce&&!j&&!ze,onPick:A=>window.dispatchEvent(new CustomEvent("jimny-part-pick",{detail:A}))}),ct.domElement.addEventListener("pointerup",ko),ct.domElement.addEventListener("pointercancel",ko),ct.domElement.addEventListener("contextmenu",A=>{p()&&A.preventDefault()}),ct.domElement.addEventListener("wheel",A=>{!p()||wt.dataset.touchMode==="scroll"||(A.preventDefault(),e.fov=nn.clamp(e.fov+A.deltaY*.025,38,94),e.updateProjectionMatrix(),Fe=!0)},{passive:!1}),ct.domElement.addEventListener("keydown",A=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(A.key)){if(A.preventDefault(),p()){m.yaw+=A.key==="ArrowLeft"?.12:A.key==="ArrowRight"?-.12:0,m.pitch=nn.clamp(m.pitch+(A.key==="ArrowUp"?.08:A.key==="ArrowDown"?-.08:0),-1.15,.8),w();return}let I=A.key==="ArrowLeft"?.16:A.key==="ArrowRight"?-.16:0,k=e.position.clone().sub(f.target);I?k.applyAxisAngle(new L(0,1,0),I):k.multiplyScalar(A.key==="ArrowUp"?.92:1.08),e.position.copy(f.target).add(k),b(),Fe=!0}}),ct.domElement.addEventListener("webglcontextlost",()=>{_n.textContent="3D paused. Reload to restore the preview. Your build is saved."}),window.addEventListener("jimny-build-change",A=>{ze=!1,Fn(A.detail)}),window.addEventListener("jimny-preview-mode",A=>{ze=A.detail==="stock",Fn()}),window.addEventListener("jimny-preview-night",A=>Ji(A.detail)),window.addEventListener("jimny-preview-colour",A=>Fn({colour:A.detail})),document.addEventListener("click",A=>{let I=A.target.closest("[data-camera]");I&&jn(I.dataset.camera)}),document.querySelectorAll("[data-viewer-zoom]").forEach(A=>A.addEventListener("click",()=>{let I=A.dataset.viewerZoom;if(p()){I==="fit"?(ai(e.aspect),E()):(e.fov=nn.clamp(e.fov*(I==="in"?.85:1.17),38,94),e.updateProjectionMatrix()),Fe=!0;return}if(I==="fit")f.target.copy(_i());else{let k=e.position.clone().sub(f.target),X=nn.clamp(k.length()*(I==="in"?.8:1.25),f.minDistance,f.maxDistance);e.position.copy(f.target).add(k.setLength(X))}b(),Fe=!0})),window.jimny3D={ready:!0,snapshot:ph,getState:()=>({modelVersion:pe?"blender-lwb-3":"procedural-fallback",detailedReady:!!pe,assetError:Je,studioEnvironmentReady:ie.has("studio")||ge,assemblies:pe?{grilles:Object.entries(pe.grilles).filter(([,A])=>A.visible).map(([A])=>A),wheels:pe.atWheels.visible?"all-terrain":"stock",stockBumper:pe.bumper.visible}:null,parts:[...at],colour:G,stock:ze,night:Le,lighting:{...Z,profiles:[...T],activeBeams:[...Y,...$].filter(A=>A.intensity>0).length},view:d,design:{...F},touchMode:wt.dataset.touchMode,renderCalls:ct.info.render.calls,triangles:ct.info.render.triangles,meshCount:D.children.reduce((A,I)=>{let k=0;return I.traverse(X=>{X.isMesh&&k++}),A+k},0)}),view:jn};let P=window.jimny3D.getState;Object.assign(window.jimny3D,{beginPreview:mh,endPreview:Bo,renderPreset:zo}),window.jimny3D.getState=()=>({...P(),body:$e,modelLoading:ce,surfaceStyles:rt.snapshot(),modelVersion:pe?$e==="3door"?"blender-swb-5":"blender-lwb-10":"procedural-fallback",previewing:!!j,scenery:K,sceneryLoading:te,sceneryFailed:ge,sceneryVisible:!!ie.get(K)?.skybox?.visible,camera:{position:e.position.toArray(),target:f.target.toArray(),fov:e.fov,mode:p()?"enclosed-look-around":y.has(d)?"cutaway":"exterior-orbit",rotate:!0,pan:p(),zoom:!0}}),Fn(window.getJimnyBuildState?.()||ht);let H="studio";try{H=localStorage.getItem("thatsuvmod-scenery")}catch{}Ae(H),wt.classList.add("ready");async function Q(A="5door"){let I=++me;ce=!0,Je=!1,wt.setAttribute("aria-busy","true"),D.visible=!1,_n.textContent=`Loading ${A==="3door"?"three":"five"}-door Jimny\u2026`;let k=A==="3door"?"assets/models/jimny-swb-blender.glb?v=48f13c24ef06":"assets/models/jimny-lwb-blender.glb?v=0b7863dbf153";try{let X=await jm(k);if(I!==me){X.scene.traverse(B=>{B.geometry?.dispose(),B.material&&B.material.dispose()});return}let V=["BodyShell","RoofShell","OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille","StockBumper","StockHeadlamps","StockWheels","AllTerrainWheels","Cabin","SpareWheel"],J=Object.fromEntries(V.map(B=>[B,X.scene.getObjectByName(B)]));if(V.some(B=>!J[B]))throw new Error("Incomplete Jimny model");if(rt.clear(),pe){D.remove(pe.stockWheels,pe.atWheels);for(let B of[pe.stockWheels,pe.atWheels])sm(B),B.traverse(ae=>ae.geometry?.dispose());pe.sBadgeGeometry?.dispose()}De?.dispose(),De=null,yt(_e),pe=null,$e=A,X.scene.traverse(B=>{if(!B.isMesh)return;B.castShadow=!0,B.receiveShadow=!0;let ae=B.material;e0(ae),ae.name==="IntakeShadow"&&(B.castShadow=!1),ae.name==="BodyPaint"?(je.vertexColors=!1,B.material=je):ae.name==="RoofPaint"?(Ze.vertexColors=!1,B.material=Ze):ae.name==="WindowGlass"?(B.material=O.glass,B.castShadow=!1):ae.name==="TyreRubber"?(O.rubber.vertexColors=!!B.geometry.attributes.color,O.rubber.name="TyreRubber",B.material=O.rubber):ae.name==="LampEmitter"?B.material=O.white:ae.transparent&&(ae.depthWrite=!1,ae.side=ti,B.castShadow=!1),["BrightChrome","MachinedAlloy","GrilleLettering","OpticalGlass"].includes(ae.name)&&(ae.vertexColors=!1)}),bm(J.Cabin);for(let B of V)(["StockWheels","AllTerrainWheels"].includes(B)?D:_e).add(J[B]);pe={grilles:{oem:J.OEMGrille,block:J.BlockGrille,rhino:J.RhinoGrille,script:J.ScriptGrille,chrome:J.GlossGrille,delete:J.DeleteGrille,classic:J.ClassicGrille,mesh:J.MeshGrille},bumper:J.StockBumper,stockWheels:J.StockWheels,atWheels:J.AllTerrainWheels},pe.headlamps=J.StockHeadlamps,pe.sBadgeGeometry=jp(J.OEMGrille,_e.matrixWorld.clone().invert()),Em(J.Cabin,pe.sBadgeGeometry,A),De=ym(_e,vm(J.Cabin,_e,A),A),De.update({gear:"P",range:"2H",parking:!0,rpm:0,speed:0}),dm(_e,A),pe.paintMeshes=[],J.BodyShell.traverse(B=>{B.isMesh&&B.material===je&&pe.paintMeshes.push(B)}),Object.values(pe.grilles).forEach(B=>B.traverse(ae=>{ae.isMesh&&["BrightChrome","GrilleLettering"].includes(ae.material.name)&&(ae.userData.brightGrilleMaterial=ae.material)})),wt.dataset.model="blender",wt.dataset.body=A,D.visible=!0,ce=!1,wt.setAttribute("aria-busy","false"),Y.forEach(B=>B.position.z=A==="3door"?1.79:1.96),Fn(),p()?E():(f.target.copy(_i()),b()),window.dispatchEvent(new CustomEvent("jimny-model-ready",{detail:{body:A}}))}catch{if(I!==me)return;ce=!1,Je=!0,wt.setAttribute("aria-busy","false"),D.visible=!1,Fe=!0,_n.textContent="This model could not load. Switch model or reload to retry; your build is saved."}}window.jimny3D.setBody=Q,window.addEventListener("jimny-model-change",A=>{Bo(),Q(A.detail)}),Q(window.getJimnyBuildState?.().body||"5door"),ct.setAnimationLoop(()=>{!We||document.hidden||(b(),Fe&&(u(),Fe=!1,wt.dataset.rendered="true"))})}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
