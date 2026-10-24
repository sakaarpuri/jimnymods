var hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,su=1,Lf=2;var to=1,Nf=2,ds=3,ni=0,_n=1,Vt=2,Yt=0,Ur=1,no=2,ru=3,au=4,ql=5;var ii=100,Ff=101,Uf=102,Of=103,kf=104,Ls=200,Bf=201,zf=202,Gf=203,ou=204,lu=205,io=206,Hf=207,so=208,Vf=209,Wf=210,qf=211,Xf=212,jf=213,Yf=214,_l=0,yl=1,vl=2,mr=3,Ml=4,Sl=5,wl=6,Tl=7,Xl=0,Kf=1,Jf=2,gi=0,ro=1,ao=2,oo=3,Ns=4,lo=5,co=6,ho=7,Hh="attached",Zf="detached",uo=300,fs=301,Fs=302,Or=303,jl=304,fo=306,Qt=1e3,In=1001,gr=1002,Nt=1003,Yl=1004;var Us=1005;var It=1006,kr=1007;var Ln=1008,cu=1008,En=1009,hu=1010,uu=1011,Br=1012,Kl=1013,bi=1014,qn=1015,kt=1016,Jl=1017,Zl=1018,ps=1020,du=35902,fu=35899,pu=1021,mu=1022,tn=1023,Mi=1026,Ei=1027,$l=1028,Ql=1029,ms=1030,ec=1031;var tc=1033,po=33776,mo=33777,go=33778,bo=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37488,hc=37489,xo=37490,uc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,bc=37813,xc=37814,_c=37815,yc=37816,vc=37817,Mc=37818,Sc=37819,wc=37820,Tc=37821,Ec=36492,Ac=36494,Rc=36495,Cc=36283,Pc=36284,_o=36285,Ic=36286;var Ts=2300,Es=2301,gl=2302,Vh=2303,Wh=2400,qh=2401,Xh=2402,$f=2500;var gu=0,yo=1,zr=2,Qf=3200;var Gr=0,ep=1,xi="",bt="srgb",sn="srgb-linear",ya="linear",yt="srgb";var bl=7680;var tp=519,np=512,ip=513,sp=514,Dc=515,rp=516,ap=517,Lc=518,op=519,bu=35044;var xu="300 es",di=2e3,br=2001;function c0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=xr("canvas");return i.style.display="block",i}var kd={},_r=null;function va(...i){let e="THREE."+i.shift();_r?_r("log",e,...i):console.log(e,...i)}function cp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=cp(i);let e="THREE."+i.shift();if(_r)_r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=cp(i);let e="THREE."+i.shift();if(_r)_r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ws(...i){let e=i.join(" ");e in kd||(kd[e]=!0,Ye(...i))}function hp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var up={[_l]:yl,[vl]:wl,[Ml]:Tl,[mr]:Sl,[yl]:_l,[wl]:vl,[Tl]:Ml,[Sl]:mr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,ga=Math.PI/180,As=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function _u(i,e){return(i%e+e)%e}function u0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function d0(i,e,t){return i!==e?(t-i)/(e-i):0}function ba(i,e,t){return(1-t)*i+t*e}function f0(i,e,t,n){return ba(i,e,1-Math.exp(-t*n))}function p0(i,e=1){return e-Math.abs(_u(i,e*2)-e)}function m0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function g0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function x0(i,e){return i+Math.random()*(e-i)}function _0(i){return i*(.5-Math.random())}function y0(i){i!==void 0&&(Bd=i);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(i){return i*ga}function M0(i){return i*As}function S0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function w0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function T0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function E0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nn={DEG2RAD:ga,RAD2DEG:As,generateUUID:Zn,clamp:ut,euclideanModulo:_u,mapLinear:u0,inverseLerp:d0,lerp:ba,damp:f0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:b0,randFloat:x0,randFloatSpread:_0,seededRandom:y0,degToRad:v0,radToDeg:M0,isPowerOfTwo:S0,ceilPowerOfTwo:w0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:E0,normalize:Et,denormalize:ui},oe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*M;m<0&&(d=-d,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+M*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+M*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ph=new I,zd=new mn,at=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],y=s[1],w=s[4],b=s[7],_=s[2],x=s[5],E=s[8];return r[0]=a*M+o*y+l*_,r[3]=a*m+o*w+l*x,r[6]=a*p+o*b+l*E,r[1]=c*M+h*y+u*_,r[4]=c*m+h*w+u*x,r[7]=c*p+h*b+u*E,r[2]=d*M+f*y+g*_,r[5]=d*m+f*w+g*x,r[8]=d*p+f*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mh=new at,Gd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let i={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sn]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:Gd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Gd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var ft=A0();function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,El=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=xr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R0=0,yr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gh(s[a].image)):r.push(gh(s[a]))}else r=gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var C0=0,bh=new I,rn=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=It,a=Ln,o=tn,l=En,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Zn(),this.name="",this.source=new yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qt:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qt:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=uo;rn.DEFAULT_ANISOTROPY=1;var Mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,_=(p+1)/2,x=(h+d)/4,E=(u+M)/4,S=(g+m)/4;return w>b&&w>_?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=x/n,r=E/n):b>_?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=x/s,r=S/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=E/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-M)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new yr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ue=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,M,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,M,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,M=c*u;t[0]=d+M*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,M=c*u;t[0]=d-M*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,M=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-M*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,I0)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),es.crossVectors(n,Gn),es.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),es.crossVectors(n,Gn)),es.normalize(),zo.crossVectors(Gn,es),s[0]=es.x,s[4]=zo.x,s[8]=Gn.x,s[1]=es.y,s[5]=zo.y,s[9]=Gn.y,s[2]=es.z,s[6]=zo.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],y=n[3],w=n[7],b=n[11],_=n[15],x=s[0],E=s[4],S=s[8],v=s[12],R=s[1],C=s[5],D=s[9],L=s[13],F=s[2],G=s[6],q=s[10],Q=s[14],ue=s[3],Z=s[7],re=s[11],le=s[15];return r[0]=a*x+o*R+l*F+c*ue,r[4]=a*E+o*C+l*G+c*Z,r[8]=a*S+o*D+l*q+c*re,r[12]=a*v+o*L+l*Q+c*le,r[1]=h*x+u*R+d*F+f*ue,r[5]=h*E+u*C+d*G+f*Z,r[9]=h*S+u*D+d*q+f*re,r[13]=h*v+u*L+d*Q+f*le,r[2]=g*x+M*R+m*F+p*ue,r[6]=g*E+M*C+m*G+p*Z,r[10]=g*S+M*D+m*q+p*re,r[14]=g*v+M*L+m*Q+p*le,r[3]=y*x+w*R+b*F+_*ue,r[7]=y*E+w*C+b*G+_*Z,r[11]=y*S+w*D+b*q+_*re,r[15]=y*v+w*L+b*Q+_*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],M=e[7],m=e[11],p=e[15],y=l*f-c*d,w=o*f-c*u,b=o*d-l*u,_=a*f-c*h,x=a*d-l*h,E=a*u-o*h;return t*(M*y-m*w+p*b)-n*(g*y-m*_+p*x)+s*(g*w-M*_+p*E)-r*(g*b-M*x+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],M=e[13],m=e[14],p=e[15],y=t*o-n*a,w=t*l-s*a,b=t*c-r*a,_=n*l-s*o,x=n*c-r*o,E=s*c-r*l,S=h*M-u*g,v=h*m-d*g,R=h*p-f*g,C=u*m-d*M,D=u*p-f*M,L=d*p-f*m,F=y*L-w*D+b*C+_*R-x*v+E*S;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/F;return e[0]=(o*L-l*D+c*C)*G,e[1]=(s*D-n*L-r*C)*G,e[2]=(M*E-m*x+p*_)*G,e[3]=(d*x-u*E-f*_)*G,e[4]=(l*R-a*L-c*v)*G,e[5]=(t*L-s*R+r*v)*G,e[6]=(m*b-g*E-p*w)*G,e[7]=(h*E-d*b+f*w)*G,e[8]=(a*D-o*R+c*S)*G,e[9]=(n*R-t*D-r*S)*G,e[10]=(g*x-M*b+p*y)*G,e[11]=(u*b-h*x-f*y)*G,e[12]=(o*v-a*C-l*S)*G,e[13]=(t*C-n*v+s*S)*G,e[14]=(M*w-g*_-m*y)*G,e[15]=(h*_-u*w+d*y)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,M=a*h,m=a*u,p=o*u,y=l*c,w=l*h,b=l*u,_=n.x,x=n.y,E=n.z;return s[0]=(1-(M+p))*_,s[1]=(f+b)*_,s[2]=(g-w)*_,s[3]=0,s[4]=(f-b)*x,s[5]=(1-(d+p))*x,s[6]=(m+y)*x,s[7]=0,s[8]=(g+w)*E,s[9]=(m-y)*E,s[10]=(1-(d+M))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,u=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=di,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===di)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=di,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===di)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new I,li=new Ue,P0=new I(0,0,0),I0=new I(1,1,1),es=new I,zo=new I,Gn=new I,Vd=new Ue,Wd=new mn,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D0=0,qd=new I,$s=new mn,Li=new Ue,Go=new I,sa=new I,L0=new I,N0=new mn,Xd=new I(1,0,0),jd=new I(0,1,0),Yd=new I(0,0,1),Kd={type:"added"},F0={type:"removed"},Qs={type:"childadded",child:null},xh={type:"childremoved",child:null},St=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Sn,n=new mn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new at}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(sa,Go,this.up):Li.lookAt(Go,sa,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Li),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F0),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new I(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},U0={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function _h(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=_u(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_h(a,r,e+1/3),this.g=_h(a,r,e),this.b=_h(a,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ft.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=bt){ft.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Ho);let n=ba(ts.h,Ho.h,t),s=ba(ts.s,Ho.s,t),r=ba(ts.l,Ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Ve;Ve.NAMES=dp;var Hi=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new I,Ni=new I,yh=new I,Fi=new I,er=new I,tr=new I,Jd=new I,vh=new I,Mh=new I,Sh=new I,wh=new Mt,Th=new Mt,Eh=new Mt,Bi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Ni.subVectors(n,t),yh.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Ni),l=ci.dot(yh),c=Ni.dot(Ni),h=Ni.dot(yh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return wh.setScalar(0),Th.setScalar(0),Eh.setScalar(0),wh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,n),Eh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wh,r.x),a.addScaledVector(Th,r.y),a.addScaledVector(Eh,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Ni.subVectors(e,t),ci.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ci.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;er.subVectors(s,n),tr.subVectors(r,n),vh.subVectors(e,n);let l=er.dot(vh),c=tr.dot(vh);if(l<=0&&c<=0)return t.copy(n);Mh.subVectors(e,s);let h=er.dot(Mh),u=tr.dot(Mh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(er,a);Sh.subVectors(e,r);let f=er.dot(Sh),g=tr.dot(Sh);if(g>=0&&f<=g)return t.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(tr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Jd,o);let p=1/(m+M+d);return a=M*p,o=d*p,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Wo.subVectors(this.max,ra),nr.subVectors(e.a,ra),ir.subVectors(e.b,ra),sr.subVectors(e.c,ra),ns.subVectors(ir,nr),is.subVectors(sr,ir),ys.subVectors(nr,sr);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ys.z,ys.y,ns.z,0,-ns.x,is.z,0,-is.x,ys.z,0,-ys.x,-ns.y,ns.x,0,-is.y,is.x,0,-ys.y,ys.x,0];return!Ah(t,nr,ir,sr,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,nr,ir,sr,Wo))?!1:(qo.crossVectors(ns,is),t=[qo.x,qo.y,qo.z],Ah(t,nr,ir,sr,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new I,new I,new I,new I,new I,new I,new I,new I],hi=new I,Vo=new Xt,nr=new I,ir=new I,sr=new I,ns=new I,is=new I,ys=new I,ra=new I,Wo=new I,qo=new I,vs=new I;function Ah(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vs.fromArray(i,r);let o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zi=O0();function O0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function k0(i){Math.abs(i)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),i=ut(i,-65504,65504),zi.floatView[0]=i;let e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}function B0(i){let e=i>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(i&1023)]+zi.exponentTable[e],zi.floatView[0]}var Sa=class{static toHalfFloat(e){return k0(e)}static fromHalfFloat(e){return B0(e)}},Zt=new I,Xo=new oe,z0=0,$t=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var wa=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ta=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},G0=new Xt,aa=new I,Rh=new I,On=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):G0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Rh)),this.expandByPoint(aa.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},H0=0,Kn=new Ue,Ch=new St,rr=new I,Hn=new Xt,oa=new Xt,pn=new I,ot=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?Ta:wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Hn.min,oa.min),Hn.expandByPoint(pn),pn.addVectors(Hn.max,oa.max),Hn.expandByPoint(pn)):(Hn.expandByPoint(oa.min),Hn.expandByPoint(oa.max))}Hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),pn.add(rr)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new I,l[S]=new I;let c=new I,h=new I,u=new I,d=new oe,f=new oe,g=new oe,M=new I,m=new I;function p(S,v,R){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[S].add(M),o[v].add(M),o[R].add(M),l[S].add(m),l[v].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let S=0,v=y.length;S<v;++S){let R=y[S],C=R.start,D=R.count;for(let L=C,F=C+D;L<F;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let w=new I,b=new I,_=new I,x=new I;function E(S){_.fromBufferAttribute(s,S),x.copy(_);let v=o[S];w.copy(v),w.sub(_.multiplyScalar(_.dot(v))).normalize(),b.crossVectors(x,v);let C=b.dot(l[S])<0?-1:1;a.setXYZW(S,w.x,w.y,w.z,C)}for(let S=0,v=y.length;S<v;++S){let R=y[S],C=R.start,D=R.count;for(let L=C,F=C+D;L<F;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new $t(d,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new I,as=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ph=new I,V0=new I,W0=new at,Pn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ph.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||W0.getNormalMatrix(e),s=this.coplanarPoint(Ph).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},q0=0,gn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ur,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=lu,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bl,this.stencilZFail=bl,this.stencilZPass=bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sr=class extends gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,la=new I,or=new I,lr=new I,cr=new oe,ca=new oe,fp=new Ue,jo=new I,ha=new I,Yo=new I,Zd=new oe,Ih=new oe,$d=new oe,Ea=class extends St{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rs(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new as(n,3,0,!1)),ar.setAttribute("uv",new as(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ko(jo.set(-.5,-.5,0),lr,a,or,s,r),Ko(ha.set(.5,-.5,0),lr,a,or,s,r),Ko(Yo.set(.5,.5,0),lr,a,or,s,r),Zd.set(0,0),Ih.set(1,0),$d.set(1,1);let o=e.ray.intersectTriangle(jo,ha,Yo,!1,la);if(o===null&&(Ko(ha.set(-.5,.5,0),lr,a,or,s,r),Ih.set(0,1),o=e.ray.intersectTriangle(jo,Yo,ha,!1,la),o===null))return;let l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||t.push({distance:l,point:la.clone(),uv:Bi.getInterpolation(la,jo,ha,Yo,Zd,Ih,$d,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ko(i,e,t,n,s,r){cr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ca.x=r*cr.x-s*cr.y,ca.y=s*cr.x+r*cr.y):ca.copy(cr),i.copy(e),i.x+=ca.x,i.y+=ca.y,i.applyMatrix4(fp)}var Oi=new I,Dh=new I,Jo=new I,Zo=new I,Si=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dh.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),Zo.copy(this.origin).sub(Dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Jo),o=Zo.dot(this.direction),l=-Zo.dot(Jo),c=Zo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dh).addScaledVector(Jo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,w=n.z-a.z,b=Math.abs(l),_=Math.abs(c),x=Math.abs(h),E,S,v,R,C,D,L,F,G,q,Q,ue;if(b>=_&&b>=x?(v=l,D=u,G=g,ue=p,l>=0?(E=c,S=h,R=d,C=f,L=M,F=m,q=y,Q=w):(E=h,S=c,R=f,C=d,L=m,F=M,q=w,Q=y)):_>=x?(v=c,D=d,G=M,ue=y,c>=0?(E=h,S=l,R=f,C=u,L=m,F=g,q=w,Q=p):(E=l,S=h,R=u,C=f,L=g,F=m,q=p,Q=w)):(v=h,D=f,G=m,ue=w,h>=0?(E=l,S=c,R=u,C=d,L=g,F=M,q=p,Q=y):(E=c,S=l,R=d,C=u,L=M,F=g,q=y,Q=p)),v===0)return null;let Z=E/v,re=S/v,le=1/v,Le=R-Z*D,Re=C-re*D,rt=L-Z*G,We=F-re*G,tt=q-Z*ue,se=Q-re*ue,O=tt*We-se*rt,te=Le*se-Re*tt,ze=rt*Re-We*Le;if(s){if(O<0||te<0||ze<0)return null}else if((O<0||te<0||ze<0)&&(O>0||te>0||ze>0))return null;let pe=O+te+ze;if(pe===0)return null;let Je=le*(O*D+te*G+ze*ue);return(pe>0?Je<0:Je>0)?null:this.at(Je/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qd=new Ue,Ms=new Si,$o=new On,ef=new I,Qo=new I,el=new I,tl=new I,Lh=new I,nl=new I,tf=new I,il=new I,Te=class extends St{constructor(e=new ot,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lh.fromBufferAttribute(u,e),a?nl.addScaledVector(Lh,h):nl.addScaledVector(Lh.sub(t),h))}t.add(nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!($o.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere($o,ef)===null||Ms.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qd.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,_=w;b<_;b+=3){let x=o.getX(b),E=o.getX(b+1),S=o.getX(b+2);s=sl(this,p,e,n,c,h,u,x,E,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let y=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=sl(this,a,e,n,c,h,u,y,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,_=w;b<_;b+=3){let x=b,E=b+1,S=b+2;s=sl(this,p,e,n,c,h,u,x,E,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let y=m,w=m+1,b=m+2;s=sl(this,a,e,n,c,h,u,y,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function X0(i,e,t,n,s,r,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;il.copy(o),il.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:i}}function sl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Qo),i.getVertexPosition(l,el),i.getVertexPosition(c,tl);let h=X0(i,e,t,n,Qo,el,tl,tf);if(h){let u=new I;Bi.getBarycoord(tf,Qo,el,tl,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Bi.getNormal(Qo,el,tl,d.normal),h.face=d,h.barycoord=u}return h}var ua=new Mt,nf=new Mt,sf=new Mt,j0=new Mt,rf=new Ue,rl=new I,Nh=new On,af=new Ue,Fh=new Si,Aa=class extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nh.copy(this.boundingSphere),Nh.applyMatrix4(s),e.ray.intersectsSphere(Nh)!==!1&&(af.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(af),!(this.boundingBox!==null&&Fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;nf.fromBufferAttribute(s.attributes.skinIndex,e),sf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ua.copy(t),t.set(0,0,0,0)):(ua.set(...t,1),t.set(0,0,0)),ua.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=sf.getComponent(r);if(a!==0){let o=nf.getComponent(r);rf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(j0.copy(ua).applyMatrix4(rf),a)}}return t.isVector4&&(t.w=ua.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},wn=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,h=Nt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},of=new Ue,Y0=new Ue,Ra=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Y0;of.multiplyMatrices(o,t[r]),of.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wn(t,e,e,tn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ye("Skeleton: No bone found with UUID:",r),a=new wr),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Vi=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Ue,lf=new Ue,al=[],cf=new Xt,K0=new Ue,da=new Te,fa=new On,Wi=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,K0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),cf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(cf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),fa.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),lf.multiplyMatrices(n,hr),da.matrixWorld=lf,da.raycast(e,al);for(let a=0,o=al.length;a<o;a++){let l=al[a];l.instanceId=r,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wn(new Float32Array(s*this.count),s,this.count,$l,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new On,J0=new oe(.5,.5),ol=new I,Tr=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],y=r[12],w=r[13],b=r[14],_=r[15];if(s[0].setComponents(c-a,f-h,p-g,_-y).normalize(),s[1].setComponents(c+a,f+h,p+g,_+y).normalize(),s[2].setComponents(c+o,f+u,p+M,_+w).normalize(),s[3].setComponents(c-o,f-u,p-M,_-w).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,_-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,_-b).normalize(),t===di)s[5].setComponents(c+l,f+d,p+m,_+b).normalize();else if(t===br)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=J0.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new I,Pl=new I,hf=new Ue,pa=new Si,ll=new On,Uh=new I,uf=new I,Cs=class extends St{constructor(e=new ot,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cl.fromBufferAttribute(t,s-1),Pl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new Ge(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;hf.copy(s).invert(),pa.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=h.getX(M),y=h.getX(M+1),w=cl(this,e,pa,l,p,y,M);w&&t.push(w)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(f),p=cl(this,e,pa,l,M,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=cl(this,e,pa,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){let M=cl(this,e,pa,l,g-1,f,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Cl.fromBufferAttribute(o,s),Pl.fromBufferAttribute(o,r),t.distanceSqToSegment(Cl,Pl,Uh,uf)>n)return;Uh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Uh);if(!(c<e.near||c>e.far))return{distance:c,point:uf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var df=new I,ff=new I,Ca=class extends Cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)df.fromBufferAttribute(t,s),ff.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+df.distanceTo(ff);e.setAttribute("lineDistance",new Ge(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Pa=class extends Cs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ar=class extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pf=new Ue,jh=new Si,hl=new On,ul=new I,Ia=class extends St{constructor(e=new ot,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;pf.copy(s).invert(),jh.copy(e.ray).applyMatrix4(pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,M=f;g<M;g++){let m=c.getX(g);ul.fromBufferAttribute(u,m),mf(ul,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,M=f;g<M;g++)ul.fromBufferAttribute(u,g),mf(ul,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mf(i,e,t,n,s,r,a){let o=jh.distanceSqToPoint(i);if(o<t){let l=new I;jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Da=class extends rn{constructor(e=[],t=fs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xn=class extends rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends rn{constructor(e,t,n=bi,s,r,a,o=Nt,l=Nt,c,h=Mi,u=1){if(h!==Mi&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Il=class extends wi{constructor(e,t=bi,n=fs,s,r,a=Nt,o=Nt,l,c=Mi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class i extends ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(M,m,p,y,w,b,_,x,E,S,v){let R=b/E,C=_/S,D=b/2,L=_/2,F=x/2,G=E+1,q=S+1,Q=0,ue=0,Z=new I;for(let re=0;re<q;re++){let le=re*C-L;for(let Le=0;Le<G;Le++){let Re=Le*R-D;Z[M]=Re*y,Z[m]=le*w,Z[p]=F,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[m]=0,Z[p]=x>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Le/E),u.push(1-re/S),Q+=1}}for(let re=0;re<S;re++)for(let le=0;le<E;le++){let Le=d+le+G*re,Re=d+le+G*(re+1),rt=d+(le+1)+G*(re+1),We=d+(le+1)+G*re;l.push(Le,Re,We),l.push(Re,rt,We),ue+=6}o.addGroup(f,ue,v),f+=ue,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Rr=class i extends ot{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,M=s+1,m=new I,p=new I;for(let y=0;y<=g;y++){let w=0,b=0,_=0,x=0;if(y<=n){let v=y/n,R=v*Math.PI/2;b=-h-e*Math.cos(R),_=e*Math.sin(R),x=-e*Math.cos(R),w=v*u}else if(y<=n+r){let v=(y-n)/r;b=-h+v*t,_=e,x=0,w=u+v*d}else{let v=(y-n-r)/n,R=v*Math.PI/2;b=h+e*Math.sin(R),_=e*Math.cos(R),x=e*Math.sin(R),w=u+d+v*u}let E=Math.max(0,Math.min(1,w/f)),S=0;y===0?S=.5/s:y===g&&(S=-.5/s);for(let v=0;v<=s;v++){let R=v/s,C=R*Math.PI*2,D=Math.sin(C),L=Math.cos(C);p.x=-_*L,p.y=b,p.z=_*D,o.push(p.x,p.y,p.z),m.set(-_*L,x,_*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,E)}if(y>0){let v=(y-1)*M;for(let R=0;R<s;R++){let C=v+R,D=v+R+1,L=y*M+R,F=y*M+R+1;a.push(C,D,L),a.push(D,F,L)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Na=class i extends ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,M=[],m=n/2,p=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function y(){let b=new I,_=new I,x=0,E=(t-e)/n;for(let S=0;S<=r;S++){let v=[],R=S/r,C=R*(t-e)+e;for(let D=0;D<=s;D++){let L=D/s,F=L*l+o,G=Math.sin(F),q=Math.cos(F);_.x=C*G,_.y=-R*n+m,_.z=C*q,u.push(_.x,_.y,_.z),b.set(G,E,q).normalize(),d.push(b.x,b.y,b.z),f.push(L,1-R),v.push(g++)}M.push(v)}for(let S=0;S<s;S++)for(let v=0;v<r;v++){let R=M[v][S],C=M[v+1][S],D=M[v+1][S+1],L=M[v][S+1];(e>0||v!==0)&&(h.push(R,C,L),x+=3),(t>0||v!==r-1)&&(h.push(C,D,L),x+=3)}c.addGroup(p,x,0),p+=x}function w(b){let _=g,x=new oe,E=new I,S=0,v=b===!0?e:t,R=b===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let C=g;for(let D=0;D<=s;D++){let F=D/s*l+o,G=Math.cos(F),q=Math.sin(F);E.x=v*q,E.y=m*R,E.z=v*G,u.push(E.x,E.y,E.z),d.push(0,R,0),x.x=G*.5+.5,x.y=q*.5*R+.5,f.push(x.x,x.y),g++}for(let D=0;D<s;D++){let L=_+D,F=C+D;b===!0?h.push(F,F+1,L):h.push(F+1,F,L),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Ue;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dl=class extends Cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var gf=new I,bf=new I,Oh=new yu,kh=new yu,Bh=new yu,pi=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(bf.subVectors(s[0],s[1]).add(s[0]),c=bf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Oh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,m),kh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,m),Bh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Oh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),kh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Oh.calc(l),kh.calc(l),Bh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Z0(i,e){let t=1-i;return t*t*e}function $0(i,e){return 2*(1-i)*i*e}function Q0(i,e){return i*i*e}function xa(i,e,t,n){return Z0(i,e)+$0(i,t)+Q0(i,n)}function eg(i,e){let t=1-i;return t*t*t*e}function tg(i,e){let t=1-i;return 3*t*t*i*e}function ng(i,e){return 3*(1-i)*i*i*e}function ig(i,e){return i*i*i*e}function _a(i,e,t,n,s){return eg(i,e)+tg(i,t)+ng(i,n)+ig(i,s)}var Fa=class extends Vn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,s.x,r.x,a.x,o.x),_a(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ll=class extends Vn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,s.x,r.x,a.x,o.x),_a(e,s.y,r.y,a.y,o.y),_a(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends Vn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$n=class extends Vn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Vn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xa(e,s.x,r.x,a.x),xa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Vn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xa(e,s.x,r.x,a.x),xa(e,s.y,r.y,a.y),xa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(xf(o,l.x,c.x,h.x,u.x),xf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Nl=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:pi,CubicBezierCurve:Fa,CubicBezierCurve3:Ll,EllipseCurve:Cr,LineCurve:Ua,LineCurve3:$n,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:ka,SplineCurve:Ba}),Qn=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Nl[s.type]().fromJSON(s))}return this}},en=class extends Qn{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ua(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oa(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Fa(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ot=class extends en{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new en().fromJSON(s))}return this}};function sg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=pp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return za(r,a,t,o,l,c,0),a}function pp(i,e,t,n,s){let r;if(s===yg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=_f(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=_f(a/n|0,i[a],i[a+1],r);return r&&Pr(r,r.next)&&(Ha(r),r=r.next),r}function Ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Pr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function za(i,e,t,n,s,r,a){if(!i)return;!a&&r&&pg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ag(i,n,s,r):rg(i)){e.push(l.i,i.i,c.i),Ha(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=og(Ps(i),e),za(i,e,t,n,s,r,2)):a===2&&lg(i,e,t,n,s,r):za(Ps(i),e,t,n,s,r,1);break}}}function rg(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ma(s,o,r,l,a,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ag(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),m=Math.max(h,u,d),p=Yh(f,g,e,t,n),y=Yh(M,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=p&&b&&b.z<=y;){if(w.x>=f&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ma(o,h,l,u,c,d,w.x,w.y)&&Ut(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ma(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ma(o,h,l,u,c,d,w.x,w.y)&&Ut(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=M&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&ma(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function og(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Pr(n,s)&&gp(n,t,t.next,s)&&Ga(n,s)&&Ga(s,n)&&(e.push(n.i,t.i,s.i),Ha(t),Ha(t.next),t=i=s),t=t.next}while(t!==i);return Ps(t)}function lg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bg(a,o)){let l=bp(a,o);a=Ps(a,a.next),l=Ps(l,l.next),za(a,e,t,n,s,r,0),za(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=pp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gg(c))}s.sort(hg);for(let r=0;r<s.length;r++)t=ug(s[r],t);return t}function hg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ug(i,e){let t=dg(i,e);if(!t)return e;let n=bp(t,i);return Ps(n,n.next),Ps(t,t.next)}function dg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Pr(i,t))return t;do{if(Pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&mp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ga(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&fg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function fg(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function pg(i,e,t,n){let s=i;do s.z===0&&(s.z=Yh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mg(s)}function mg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Yh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ma(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&mp(i,e,t,n,s,r,a,o)}function bg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xg(i,e)&&(Ga(i,e)&&Ga(e,i)&&_g(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Pr(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Pr(i,e){return i.x===e.x&&i.y===e.y}function gp(i,e,t,n){let s=fl(Ut(i,e,t)),r=fl(Ut(i,e,n)),a=fl(Ut(t,n,i)),o=fl(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&dl(i,t,e)||r===0&&dl(i,n,e)||a===0&&dl(t,i,n)||o===0&&dl(t,e,n))}function dl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fl(i){return i>0?1:i<0?-1:0}function xg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ga(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function _g(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bp(i,e){let t=Kh(i.i,i.x,i.y),n=Kh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _f(i,e,t,n){let s=Kh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jh=class{static triangulate(e,t,n=2){return sg(e,t,n)}},Jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];yf(e),vf(n,e);let a=e.length;t.forEach(yf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,vf(n,t[l]);let o=Jh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Tn=class i extends ot{constructor(e=new Ot([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:vg,w,b=!1,_,x,E,S;if(p){w=p.getSpacedPoints(h),b=!0,d=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;_=p.computeFrenetFrames(h,ae),x=new I,E=new I,S=new I}d||(m=0,f=0,g=0,M=0);let v=o.extractPoints(c),R=v.shape,C=v.holes;if(!Jn.isClockWise(R)){R=R.reverse();for(let ae=0,ge=C.length;ae<ge;ae++){let xe=C[ae];Jn.isClockWise(xe)&&(C[ae]=xe.reverse())}}function L(ae){let xe=10000000000000001e-36,_e=ae[0];for(let Me=1;Me<=ae.length;Me++){let Xe=Me%ae.length,De=ae[Xe],$e=De.x-_e.x,Oe=De.y-_e.y,z=$e*$e+Oe*Oe,ct=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(_e.x),Math.abs(_e.y)),it=xe*ct*ct;if(z<=it){ae.splice(Xe,1),Me--;continue}_e=De}}L(R),C.forEach(L);let F=C.length,G=R;for(let ae=0;ae<F;ae++){let ge=C[ae];R=R.concat(ge)}function q(ae,ge,xe){return ge||nt("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ge,xe)}let Q=R.length;function ue(ae,ge,xe){let _e,Me,Xe,De=ae.x-ge.x,$e=ae.y-ge.y,Oe=xe.x-ae.x,z=xe.y-ae.y,ct=De*De+$e*$e,it=De*z-$e*Oe;if(Math.abs(it)>Number.EPSILON){let N=Math.sqrt(ct),T=Math.sqrt(Oe*Oe+z*z),j=ge.x-$e/N,Y=ge.y+De/N,ne=xe.x-z/T,be=xe.y+Oe/T,ve=((ne-j)*z-(be-Y)*Oe)/(De*z-$e*Oe);_e=j+De*ve-ae.x,Me=Y+$e*ve-ae.y;let ce=_e*_e+Me*Me;if(ce<=2)return new oe(_e,Me);Xe=Math.sqrt(ce/2)}else{let N=!1;De>Number.EPSILON?Oe>Number.EPSILON&&(N=!0):De<-Number.EPSILON?Oe<-Number.EPSILON&&(N=!0):Math.sign($e)===Math.sign(z)&&(N=!0),N?(_e=-$e,Me=De,Xe=Math.sqrt(ct)):(_e=De,Me=$e,Xe=Math.sqrt(ct/2))}return new oe(_e/Xe,Me/Xe)}let Z=[];for(let ae=0,ge=G.length,xe=ge-1,_e=ae+1;ae<ge;ae++,xe++,_e++)xe===ge&&(xe=0),_e===ge&&(_e=0),Z[ae]=ue(G[ae],G[xe],G[_e]);let re=[],le,Le=Z.concat();for(let ae=0,ge=F;ae<ge;ae++){let xe=C[ae];le=[];for(let _e=0,Me=xe.length,Xe=Me-1,De=_e+1;_e<Me;_e++,Xe++,De++)Xe===Me&&(Xe=0),De===Me&&(De=0),le[_e]=ue(xe[_e],xe[Xe],xe[De]);re.push(le),Le=Le.concat(le)}let Re;if(m===0)Re=Jn.triangulateShape(G,C);else{let ae=[],ge=[];for(let xe=0;xe<m;xe++){let _e=xe/m,Me=f*Math.cos(_e*Math.PI/2),Xe=g*Math.sin(_e*Math.PI/2)+M;for(let De=0,$e=G.length;De<$e;De++){let Oe=q(G[De],Z[De],Xe);te(Oe.x,Oe.y,-Me),_e===0&&ae.push(Oe)}for(let De=0,$e=F;De<$e;De++){let Oe=C[De];le=re[De];let z=[];for(let ct=0,it=Oe.length;ct<it;ct++){let N=q(Oe[ct],le[ct],Xe);te(N.x,N.y,-Me),_e===0&&z.push(N)}_e===0&&ge.push(z)}}Re=Jn.triangulateShape(ae,ge)}let rt=Re.length,We=g+M;for(let ae=0;ae<Q;ae++){let ge=d?q(R[ae],Le[ae],We):R[ae];b?(E.copy(_.normals[0]).multiplyScalar(ge.x),x.copy(_.binormals[0]).multiplyScalar(ge.y),S.copy(w[0]).add(E).add(x),te(S.x,S.y,S.z)):te(ge.x,ge.y,0)}for(let ae=1;ae<=h;ae++)for(let ge=0;ge<Q;ge++){let xe=d?q(R[ge],Le[ge],We):R[ge];b?(E.copy(_.normals[ae]).multiplyScalar(xe.x),x.copy(_.binormals[ae]).multiplyScalar(xe.y),S.copy(w[ae]).add(E).add(x),te(S.x,S.y,S.z)):te(xe.x,xe.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){let ge=ae/m,xe=f*Math.cos(ge*Math.PI/2),_e=g*Math.sin(ge*Math.PI/2)+M;for(let Me=0,Xe=G.length;Me<Xe;Me++){let De=q(G[Me],Z[Me],_e);te(De.x,De.y,u+xe)}for(let Me=0,Xe=C.length;Me<Xe;Me++){let De=C[Me];le=re[Me];for(let $e=0,Oe=De.length;$e<Oe;$e++){let z=q(De[$e],le[$e],_e);b?te(z.x,z.y+w[h-1].y,w[h-1].x+xe):te(z.x,z.y,u+xe)}}}tt(),se();function tt(){let ae=s.length/3;if(d){let ge=0,xe=Q*ge;for(let _e=0;_e<rt;_e++){let Me=Re[_e];ze(Me[2]+xe,Me[1]+xe,Me[0]+xe)}ge=h+m*2,xe=Q*ge;for(let _e=0;_e<rt;_e++){let Me=Re[_e];ze(Me[0]+xe,Me[1]+xe,Me[2]+xe)}}else{for(let ge=0;ge<rt;ge++){let xe=Re[ge];ze(xe[2],xe[1],xe[0])}for(let ge=0;ge<rt;ge++){let xe=Re[ge];ze(xe[0]+Q*h,xe[1]+Q*h,xe[2]+Q*h)}}n.addGroup(ae,s.length/3-ae,0)}function se(){let ae=s.length/3,ge=0;O(G,ge),ge+=G.length;for(let xe=0,_e=C.length;xe<_e;xe++){let Me=C[xe];O(Me,ge),ge+=Me.length}n.addGroup(ae,s.length/3-ae,1)}function O(ae,ge){let xe=ae.length;for(;--xe>=0;){let _e=xe,Me=xe-1;Me<0&&(Me=ae.length-1);for(let Xe=0,De=h+m*2;Xe<De;Xe++){let $e=Q*Xe,Oe=Q*(Xe+1),z=ge+_e+$e,ct=ge+Me+$e,it=ge+Me+Oe,N=ge+_e+Oe;pe(z,ct,it,N)}}}function te(ae,ge,xe){l.push(ae),l.push(ge),l.push(xe)}function ze(ae,ge,xe){Je(ae),Je(ge),Je(xe);let _e=s.length/3,Me=y.generateTopUV(n,s,_e-3,_e-2,_e-1);mt(Me[0]),mt(Me[1]),mt(Me[2])}function pe(ae,ge,xe,_e){Je(ae),Je(ge),Je(_e),Je(ge),Je(xe),Je(_e);let Me=s.length/3,Xe=y.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);mt(Xe[0]),mt(Xe[1]),mt(Xe[3]),mt(Xe[1]),mt(Xe[2]),mt(Xe[3])}function Je(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function mt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Mg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Nl[s.type]().fromJSON(s)),new i(n,e.options)}},vg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(d,1-g),new oe(M,1-p)]:[new oe(o,1-l),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};function Mg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var mi=class i extends ot{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new oe,f=new I,g=new I,M=new I,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let y=0;y<=t;y++){let w=n+y*h*s,b=Math.sin(w),_=Math.cos(w);for(let x=0;x<=e.length-1;x++){u.x=e[x].x*b,u.y=e[x].y,u.z=e[x].x*_,a.push(u.x,u.y,u.z),d.x=y/t,d.y=x/(e.length-1),o.push(d.x,d.y);let E=l[3*x+0]*b,S=l[3*x+1],v=l[3*x+0]*_;c.push(E,S,v)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let b=w+y*e.length,_=b,x=b+e.length,E=b+e.length+1,S=b+1;r.push(_,x,S),r.push(E,S,x)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var on=class i extends ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let w=0;w<c;w++){let b=w*u-r;g.push(b,-y,0),M.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let w=y+c*p,b=y+c*(p+1),_=y+1+c*(p+1),x=y+1+c*p;f.push(w,b,x),f.push(b,_,x)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(M,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ir=class i extends ot{constructor(e=new Ot([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Jn.isClockWise(y)===!0&&(g[m]=y.reverse())}let M=Jn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=M.length;m<p;m++){let y=M[m],w=y[0]+u,b=y[1]+u,_=y[2]+u;n.push(w,b,_),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Sg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Sg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Dn=class i extends ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let y=[],w=p/n,b=a+w*o,_=e*Math.cos(b),x=Math.sqrt(e*e-_*_),E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){let v=S/t,R=s+v*r;u.x=-x*Math.cos(R),u.y=_,u.z=x*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(v+E,1-w),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let w=h[p][y+1],b=h[p][y],_=h[p+1][y],x=h[p+1][y+1];(p!==0||a>0)&&f.push(w,b,x),(p!==n-1||l<Math.PI)&&f.push(b,_,x)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(M,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class i extends ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new I,f=new I,g=new I;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,w=(s+1)*(M-1)+m,b=(s+1)*M+m;l.push(p,y,b),l.push(y,w,b)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Wn=class i extends ot{constructor(e=new ka(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new oe,h=new I,u=[],d=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function M(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),y(),p()}function m(w){h=e.getPointAt(w/t,h);let b=a.normals[w],_=a.binormals[w];for(let x=0;x<=s;x++){let E=x/s*Math.PI*2,S=Math.sin(E),v=-Math.cos(E);l.x=v*b.x+S*_.x,l.y=v*b.y+S*_.y,l.z=v*b.z+S*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let _=(s+1)*(w-1)+(b-1),x=(s+1)*w+(b-1),E=(s+1)*w+b,S=(s+1)*(w-1)+b;g.push(_,x,S),g.push(x,E,S)}}function y(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Nl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Va=class extends gn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Mf(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function An(i){let e={};for(let t=0;t<i.length;t++){let n=Os(i[t]);for(let s in n)e[s]=n[s]}return e}function Mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var si={clone:Os,merge:An},Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ze=class extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends Ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wa=class extends gn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},qa=class extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lr=class extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ag(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Sf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Rg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ul=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=e,o=2*t-n;break;case Xh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qh:a=e,l=2*n-t;break;case Xh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),M=g*g,m=M*g,p=-d*m+2*d*M-d*g,y=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*M+.5*g,b=f*m-f*M;for(let _=0;_!==o;++_)r[_]=p*a[h+_]+y*a[c+_]+w*a[l+_]+b*a[u+_];return r}},Ol=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},kl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bl=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*d+g*2,y=u[p],w=u[p+1],b=e*d+g*2,_=h[b],x=h[b+1],E=Pg(n,t,y,_,s);r[g]=xp(E,M,w,x,m)}return r}};function xp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Cg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Pg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=xp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Cg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rs(t,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rs(e.times,Array),values:rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xl(e.settings)&&(n.settings={inTangents:rs(e.settings.inTangents,Array),outTangents:rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case Es:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case Vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xl(this.settings)&&(wf(this.settings.inTangents,e),wf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){nt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&h0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let M=t[u+g];if(M!==t[d+g]||M!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Es;var qi=class extends kn{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Ts;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Xa.prototype.ValueTypeName="color";var Xi=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Xi.prototype.ValueTypeName="number";var zl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ji=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends kn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ts;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};os.prototype.ValueTypeName="vector";var ja=class{constructor(e="",t=-1,n=[],s=$f){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Dg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Ag(l);l=Sf(l,1,h),c=Sf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ig(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return Xa;case"quaternion":return ji;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ig(i.type);if(i.times===void 0){let n=[],s=[];Rg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),xl(i.settings)&&(t.settings={inTangents:rs(i.settings.inTangents,Float32Array),outTangents:rs(i.settings.outTangents,Float32Array)}),t}var vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Tf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Tf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Tf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Gl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_p=new Gl,ei=class{constructor(e){this.manager=e!==void 0?e:_p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},Zh=class extends Error{constructor(e,t){super(e),this.response=t}},ls=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ki[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,M=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:w,value:b})=>{if(w)p.close();else{M+=b.byteLength;let _=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:f});for(let x=0,E=h.length;x<E;x++){let S=h[x];S.onProgress&&S.onProgress(_)}p.enqueue(b),y()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{vi.add(`file:${e}`,c);let h=ki[e];delete ki[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,Hl=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ur.get(a);u===void 0&&(u=[],ur.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=xr("img");function l(){h(),t&&t(this);let u=ur.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),vi.remove(`image:${e}`);let d=ur.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ya=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new rn,a=new Hl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Is=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ka=class extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zh=new Ue,Ef=new I,Af=new I,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new I,ml=new mn,yi=new I,Ja=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new I,Rf=new oe,Cf=new oe,qt=class extends Ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$h=class extends Nr{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},cs=class extends Is{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Qh=class extends Nr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Ki=class extends Is{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ti=class extends Ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eu=class extends Nr{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ji=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Gh=new WeakMap,Za=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Gh.has(a)===!0?(s&&s(Gh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Gh.set(l,c),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=-90,fr=1,Vl=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new qt(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new qt(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new qt(dr,fr,e,t);o.layers=this.layers,this.add(o);let l=new qt(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new qt(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wl=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$a=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Lg(){this._document.hidden===!1&&this.reset()}var Mu="\\[\\]\\.:\\/",Ng=new RegExp("["+Mu+"]","g"),Su="[^"+Mu+"]",Fg="[^"+Mu.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",Su),Og=/(WCOD+)?/.source.replace("WCOD",Fg),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),zg=new RegExp("^"+Ug+Og+kg+Bg+"$"),Gg=["material","materials","bones","map"],tu=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ng,"")}static parseTrackName(e){let t=zg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=tu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q1=new Float32Array(1);var Pf=new Ue,Qa=class{constructor(e,t,n=0,s=1/0){this.ray=new Si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(e,t=!0,n=[]){return nu(e,this,n,t),n.sort(If),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nu(e[s],this,n,t);return n.sort(If),n}};function If(i,e){return i.distance-e.distance}function nu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)nu(r[a],e,t,!0)}}var Fr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var iu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var eo=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function wu(i,e,t,n){let s=Hg(n);switch(t){case pu:return i*e;case $l:return i*e/s.components*s.byteLength;case Ql:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case mu:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case tc:return i*e*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case oc:case cc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case xo:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _o:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(i){switch(i){case En:case hu:return{byteLength:1,components:1};case Br:case uu:case kt:return{byteLength:2,components:1};case Jl:case Zl:return{byteLength:2,components:4};case bi:case Kl:case qn:return{byteLength:4,components:1};case du:case fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sb=`#ifdef USE_IRIDESCENCE
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
#endif`,rb=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ob=`#ifdef USE_ENVMAP
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
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hb=`PhysicalMaterial material;
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
#endif`,Vb=`uniform sampler2D dfgLUT;
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
}`,Wb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,$x=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,e_=`#define DISTANCE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,u_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,f_=`#define PHONG
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
}`,p_=`#define PHONG
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
}`,m_=`#define STANDARD
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
}`,g_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,x_=`#define TOON
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
}`,__=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,S_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:qg,alphahash_pars_fragment:Xg,alphamap_fragment:jg,alphamap_pars_fragment:Yg,alphatest_fragment:Kg,alphatest_pars_fragment:Jg,aomap_fragment:Zg,aomap_pars_fragment:$g,batching_pars_vertex:Qg,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:sb,bumpmap_pars_fragment:rb,clipping_planes_fragment:ab,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:hb,color_pars_fragment:ub,color_pars_vertex:db,color_vertex:fb,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:bb,displacementmap_vertex:xb,emissivemap_fragment:_b,emissivemap_pars_fragment:yb,colorspace_fragment:vb,colorspace_pars_fragment:Mb,envmap_fragment:Sb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Tb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Ob,envmap_vertex:Ab,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:Pb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Lb,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Fb,lights_pars_begin:Ub,lights_toon_fragment:kb,lights_toon_pars_fragment:Bb,lights_phong_fragment:zb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Hb,lights_physical_pars_fragment:Vb,lights_fragment_begin:Wb,lights_fragment_maps:qb,lights_fragment_end:Xb,lightprobes_pars_fragment:jb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:Zb,map_fragment:$b,map_pars_fragment:Qb,map_particle_fragment:ex,map_particle_pars_fragment:tx,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:rx,morphnormal_vertex:ax,morphtarget_pars_vertex:ox,morphtarget_vertex:lx,normal_fragment_begin:cx,normal_fragment_maps:hx,normal_pars_fragment:ux,normal_pars_vertex:dx,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:xx,opaque_fragment:_x,packing:yx,premultiplied_alpha_fragment:vx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:wx,roughnessmap_fragment:Tx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Px,skinbase_vertex:Ix,skinning_pars_vertex:Dx,skinning_vertex:Lx,skinnormal_vertex:Nx,specularmap_fragment:Fx,specularmap_pars_fragment:Ux,tonemapping_fragment:Ox,tonemapping_pars_fragment:kx,transmission_fragment:Bx,transmission_pars_fragment:zx,uv_pars_fragment:Gx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Wx,background_vert:qx,background_frag:Xx,backgroundCube_vert:jx,backgroundCube_frag:Yx,cube_vert:Kx,cube_frag:Jx,depth_vert:Zx,depth_frag:$x,distance_vert:Qx,distance_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:a_,meshlambert_vert:o_,meshlambert_frag:l_,meshmatcap_vert:c_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:f_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:b_,meshtoon_frag:x_,points_vert:__,points_frag:y_,shadow_vert:v_,shadow_frag:M_,sprite_vert:S_,sprite_frag:w_},Ne={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ri={basic:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:An([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:An([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ve(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:An([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:An([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:An([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:An([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:An([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:An([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:An([Ne.common,Ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:An([Ne.lights,Ne.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ri.physical={uniforms:An([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Nc={r:0,b:0,g:0},T_=new Ue,Hp=new at;Hp.set(-1,0,0,0,1,0,0,0,1);function E_(i,e,t,n,s,r){let a=new Ve(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(y){let w=!1,b=f(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,w){let b=f(w);b&&(b.isCubeTexture||b.mapping===fo)?(c===void 0&&(c=new Te(new an(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Os(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hp),c.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Te(new on(2,2),new Lt({name:"BackgroundMaterial",uniforms:Os(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ft.getTransfer(b.colorSpace)!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Nc,vu(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:M,dispose:p}}function A_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,D,L,F,G){let q=!1,Q=u(C,F,L,D);r!==Q&&(r=Q,c(r.object)),q=f(C,F,L,G),q&&g(C,F,L,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(C,D,L,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,L,F){let G=F.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let Q=C.isInstancedMesh===!0?C.id:0,ue=q[Q];ue===void 0&&(ue={},q[Q]=ue);let Z=ue[L.id];Z===void 0&&(Z={},ue[L.id]=Z);let re=Z[G];return re===void 0&&(re=d(l()),Z[G]=re),re}function d(C){let D=[],L=[],F=[];for(let G=0;G<t;G++)D[G]=0,L[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:F,object:C,attributes:{},index:null}}function f(C,D,L,F){let G=r.attributes,q=D.attributes,Q=0,ue=L.getAttributes();for(let Z in ue)if(ue[Z].location>=0){let le=G[Z],Le=q[Z];if(Le===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Le=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Le=C.instanceColor)),le===void 0||le.attribute!==Le||Le&&le.data!==Le.data)return!0;Q++}return r.attributesNum!==Q||r.index!==F}function g(C,D,L,F){let G={},q=D.attributes,Q=0,ue=L.getAttributes();for(let Z in ue)if(ue[Z].location>=0){let le=q[Z];le===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));let Le={};Le.attribute=le,le&&le.data&&(Le.data=le.data),G[Z]=Le,Q++}r.attributes=G,r.attributesNum=Q,r.index=F}function M(){let C=r.newAttributes;for(let D=0,L=C.length;D<L;D++)C[D]=0}function m(C){p(C,0)}function p(C,D){let L=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;L[C]=1,F[C]===0&&(i.enableVertexAttribArray(C),F[C]=1),G[C]!==D&&(i.vertexAttribDivisor(C,D),G[C]=D)}function y(){let C=r.newAttributes,D=r.enabledAttributes;for(let L=0,F=D.length;L<F;L++)D[L]!==C[L]&&(i.disableVertexAttribArray(L),D[L]=0)}function w(C,D,L,F,G,q,Q){Q===!0?i.vertexAttribIPointer(C,D,L,G,q):i.vertexAttribPointer(C,D,L,F,G,q)}function b(C,D,L,F){M();let G=F.attributes,q=L.getAttributes(),Q=D.defaultAttributeValues;for(let ue in q){let Z=q[ue];if(Z.location>=0){let re=G[ue];if(re===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){let le=re.normalized,Le=re.itemSize,Re=e.get(re);if(Re===void 0)continue;let rt=Re.buffer,We=Re.type,tt=Re.bytesPerElement,se=We===i.INT||We===i.UNSIGNED_INT||re.gpuType===Kl;if(re.isInterleavedBufferAttribute){let O=re.data,te=O.stride,ze=re.offset;if(O.isInstancedInterleavedBuffer){for(let pe=0;pe<Z.locationSize;pe++)p(Z.location+pe,O.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let pe=0;pe<Z.locationSize;pe++)m(Z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let pe=0;pe<Z.locationSize;pe++)w(Z.location+pe,Le/Z.locationSize,We,le,te*tt,(ze+Le/Z.locationSize*pe)*tt,se)}else{if(re.isInstancedBufferAttribute){for(let O=0;O<Z.locationSize;O++)p(Z.location+O,re.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let O=0;O<Z.locationSize;O++)m(Z.location+O);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let O=0;O<Z.locationSize;O++)w(Z.location+O,Le/Z.locationSize,We,le,Le*tt,Le/Z.locationSize*O*tt,se)}}else if(Q!==void 0){let le=Q[ue];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Z.location,le);break;case 3:i.vertexAttrib3fv(Z.location,le);break;case 4:i.vertexAttrib4fv(Z.location,le);break;default:i.vertexAttrib1fv(Z.location,le)}}}}y()}function _(){v();for(let C in n){let D=n[C];for(let L in D){let F=D[L];for(let G in F){let q=F[G];for(let Q in q)h(q[Q].object),delete q[Q];delete F[G]}}delete n[C]}}function x(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let L in D){let F=D[L];for(let G in F){let q=F[G];for(let Q in q)h(q[Q].object),delete q[Q];delete F[G]}}delete n[C.id]}function E(C){for(let D in n){let L=n[D];for(let F in L){let G=L[F];if(G[C.id]===void 0)continue;let q=G[C.id];for(let Q in q)h(q[Q].object),delete q[Q];delete G[C.id]}}}function S(C){for(let D in n){let L=n[D],F=C.isInstancedMesh===!0?C.id:0,G=L[F];if(G!==void 0){for(let q in G){let Q=G[q];for(let ue in Q)h(Q[ue].object),delete Q[ue];delete G[q]}delete L[F],Object.keys(L).length===0&&delete n[D]}}}function v(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:v,resetDefaultState:R,dispose:_,releaseStatesOfGeometry:x,releaseStatesOfObject:S,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function R_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function C_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let S=E===kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==En&&E!==qn&&!S&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:_,samples:x}}function P_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,b=p.clippingState||null;l.value=b,b=h(g,d,w,f);for(let _=0;_!==w;++_)b[_]=t[_];p.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==M;++w,b+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var Vr=4,I_=6,D_=20,L_=256,vo=new ti,yp=new Ve,Tu=null,Eu=0,Au=0,Ru=!1,N_=new I,ks=new I,Bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=N_}=r;Tu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Eu,Au),this._renderer.xr.enabled=Ru,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:kt,format:tn,colorSpace:sn,depthBuffer:!1},s=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=F_(r)),this._blurMaterial=O_(r,e,t),this._ggxMaterial=U_(r,e,t)}return s}_compileMaterial(e){let t=new Te(new ot,e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,s,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(yp),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new an,new Ft({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(yp),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let _=this._cubeSize;Hr(s,b*_,w>2?_:0,_,_),u.setRenderTarget(s),p&&u.render(M,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fs||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Vr?n-g+Vr:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Hr(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,vo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Hr(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(o,vo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Vr?s-this._lodMax+Vr:0),d=4*(this._cubeSize-h);Hr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,vo)}};function F_(i){let e=[],t=[],n=i,s=i-Vr+1+I_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),M=new Float32Array(f*d*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,w=p>2?0:-1,b=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(b,f*d*p);for(let _=0;_<d;_++){let x=h[_*2]*2-1,E=h[_*2+1]*2-1;p===0?ks.set(1,E,x):p===1?ks.set(-x,1,-E):p===2?ks.set(-x,E,1):p===3?ks.set(-1,E,-x):p===4?ks.set(-x,-1,E):ks.set(x,E,-1),ks.toArray(M,(p*d+_)*f)}}let m=new ot;m.setAttribute("position",new $t(g,f)),m.setAttribute("outputDirection",new $t(M,f)),t.push(new Te(m,null)),n>Vr&&n--}return{lodMeshes:t,sizeLods:e}}function vp(i,e,t){let n=new Dt(i,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function U_(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function O_(i,e,t){return new Lt({name:"SphericalGaussianBlur",defines:{SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Mp(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Sp(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uc=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Yt});r.uniforms.tEquirect.value=t;let a=new Te(s,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=It),new Vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function k_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Or||f===jl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new Uc(g.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Or||f===jl,M=f===fs||f===Fs;if(g||M){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Bs(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new Bs(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Or?d.mapping=fs:f===jl&&(d.mapping=Fs),d}function l(d){let f=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function B_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function z_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,M=0;if(g===void 0)return;if(f!==null){let y=f.array;M=f.version;for(let w=0,b=y.length;w<b;w+=3){let _=y[w+0],x=y[w+1],E=y[w+2];d.push(_,x,x,E,E,_)}}else{let y=g.array;M=g.version;for(let w=0,b=y.length/3-1;w<b;w+=3){let _=w+0,x=w+1,E=w+2;d.push(_,x,x,E,E,_)}}let m=new(g.count>=65535?Ta:wa)(d,1);m.version=M;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function G_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let M=0;for(let m=0;m<f;m++)M+=d[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function H_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function V_(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let b=o.attributes.position.count*w,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let x=new Float32Array(b*_*4*u),E=new Ma(x,b,_,u);E.type=qn,E.needsUpdate=!0;let S=w*4;for(let R=0;R<u;R++){let C=m[R],D=p[R],L=y[R],F=b*_*4*R;for(let G=0;G<C.count;G++){let q=G*S;f===!0&&(s.fromBufferAttribute(C,G),x[F+q+0]=s.x,x[F+q+1]=s.y,x[F+q+2]=s.z,x[F+q+3]=0),g===!0&&(s.fromBufferAttribute(D,G),x[F+q+4]=s.x,x[F+q+5]=s.y,x[F+q+6]=s.z,x[F+q+7]=0),M===!0&&(s.fromBufferAttribute(L,G),x[F+q+8]=s.x,x[F+q+9]=s.y,x[F+q+10]=s.z,x[F+q+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new oe(b,_)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function W_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var q_={[ro]:"LINEAR_TONE_MAPPING",[ao]:"REINHARD_TONE_MAPPING",[oo]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[co]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[lo]:"CUSTOM_TONE_MAPPING"};function X_(i,e,t,n,s,r){let a=new Dt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ot;c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Te(c,h),d=new ti(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,y=[],w=!1;this.setSize=function(b,_){a.setSize(b,_),o!==null&&o.setSize(b,_),l!==null&&l.setSize(b,_);for(let x=0;x<y.length;x++){let E=y[x];E.setSize&&E.setSize(b,_)}},this.setEffects=function(b){y=b,w=y.length>0&&y[0].isRenderPass===!0;let _=a.width,x=a.height;y.length>0&&o===null&&(o=new Dt(_,x,{type:kt,depthBuffer:!1,stencilBuffer:!1}),l=new Dt(_,x,{type:kt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let S=y[E];S.setSize&&S.setSize(_,x)}},this.begin=function(b,_){if(M||b.toneMapping===gi&&y.length===0)return!1;if(p=_,_!==null){let x=_.width,E=_.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return w===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return w},this.end=function(b,_){b.toneMapping=m,M=!0;let x=a,E=o;for(let S=0;S<y.length;S++){let v=y[S];v.enabled!==!1&&(v.render(b,E,x,_),v.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},ft.getTransfer(f)===yt&&(h.defines.SRGB_TRANSFER="");let S=q_[g];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(p),b.render(u,d),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Vp=new rn,Iu=new wi(1,1),Wp=new Ma,qp=new Rl,Xp=new Da,wp=[],Tp=[],Ep=new Float32Array(16),Ap=new Float32Array(9),Rp=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wp[s];if(r===void 0&&(r=new Float32Array(s),wp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bc(i,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function Z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Rp.set(n),i.uniformMatrix2fv(this.addr,!1,Rp),cn(t,n)}}function $_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Ap.set(n),i.uniformMatrix3fv(this.addr,!1,Ap),cn(t,n)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Ep.set(n),i.uniformMatrix4fv(this.addr,!1,Ep),cn(t,n)}}function ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=t.isReversedDepthBuffer()?Lc:Dc,r=Iu):r=Vp,t.setTexture2D(e||r,s)}function cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qp,s)}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xp,s)}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wp,s)}function dy(i){switch(i){case 5126:return j_;case 35664:return Y_;case 35665:return K_;case 35666:return J_;case 35674:return Z_;case 35675:return $_;case 35676:return Q_;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return ay;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return uy}}function fy(i,e){i.uniform1fv(this.addr,e)}function py(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function my(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function gy(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function by(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xy(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _y(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yy(i,e){i.uniform1iv(this.addr,e)}function vy(i,e){i.uniform2iv(this.addr,e)}function My(i,e){i.uniform3iv(this.addr,e)}function Sy(i,e){i.uniform4iv(this.addr,e)}function wy(i,e){i.uniform1uiv(this.addr,e)}function Ty(i,e){i.uniform2uiv(this.addr,e)}function Ey(i,e){i.uniform3uiv(this.addr,e)}function Ay(i,e){i.uniform4uiv(this.addr,e)}function Ry(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Iu:a=Vp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cy(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qp,r[a])}function Py(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xp,r[a])}function Iy(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wp,r[a])}function Dy(i){switch(i){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return by;case 35675:return xy;case 35676:return _y;case 5124:case 35670:return yy;case 35667:case 35671:return vy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return wy;case 36294:return Ty;case 36295:return Ey;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Iy}}var Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dy(t.type)}},Lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dy(t.type)}},Nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function Cp(i,e){i.seq.push(e),i.map[e.id]=e}function Ly(i,e,t){let n=i.name,s=n.length;for(Cu.lastIndex=0;;){let r=Cu.exec(n),a=Cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cp(t,c===void 0?new Du(o,i,e):new Lu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Nu(o),Cp(t,u)),t=u}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ly(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Pp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ny=37297,Fy=0;function Uy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ip=new at;function Oy(i){ft._getMatrix(Ip,ft.workingColorSpace,i);let e=`mat3( ${Ip.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Uy(i.getShaderSource(e),o)}else return r}function ky(i,e){let t=Oy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var By={[ro]:"Linear",[ao]:"Reinhard",[oo]:"Cineon",[Ns]:"ACESFilmic",[co]:"AgX",[ho]:"Neutral",[lo]:"Custom"};function zy(i,e){let t=By[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fc=new I;function Gy(){ft.getLuminanceCoefficients(Fc);let i=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function Vy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function So(i){return i!==""}function Lp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(i){return i.replace(qy,jy)}var Xy=new Map;function jy(i,e){let t=pt[e];if(t===void 0){let n=Xy.get(e);if(n!==void 0)t=pt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fu(t)}var Yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(i){return i.replace(Yy,Ky)}function Ky(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Up(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Jy={[to]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Zy(i){return Jy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $y={[fs]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function Qy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$y[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ev={[Fs]:"ENVMAP_MODE_REFRACTION"};function tv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nv={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[Kf]:"ENVMAP_BLENDING_MIX",[Jf]:"ENVMAP_BLENDING_ADD"};function iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nv[i.combine]||"ENVMAP_BLENDING_NONE"}function sv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Zy(t),c=Qy(t),h=tv(t),u=iv(t),d=sv(t),f=Hy(t),g=Vy(r),M=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?pt.tonemapping_pars_fragment:"",t.toneMapping!==gi?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Gy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),a=Fu(a),a=Lp(a,t),a=Np(a,t),o=Fu(o),o=Lp(o,t),o=Np(o,t),a=Fp(a),o=Fp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=y+m+a,b=y+p+o,_=Pp(s,s.VERTEX_SHADER,w),x=Pp(s,s.FRAGMENT_SHADER,b);s.attachShader(M,_),s.attachShader(M,x),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(M)||"",L=s.getShaderInfoLog(_)||"",F=s.getShaderInfoLog(x)||"",G=D.trim(),q=L.trim(),Q=F.trim(),ue=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,_,x);else{let re=Dp(s,_,"vertex"),le=Dp(s,x,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+re+`
`+le)}else G!==""?Ye("WebGLProgram: Program Info Log:",G):(q===""||Q==="")&&(Z=!1);Z&&(C.diagnostics={runnable:ue,programLog:G,vertexShader:{log:q,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(_),s.deleteShader(x),S=new Wr(s,M),v=Wy(s,M)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,Ny)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fy++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=_,this.fragmentShader=x,this}var av=0,Uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ou(e),t.set(e,n)),n}},Ou=class{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}};function ov(i){return i===ms||i===xo||i===_o}function lv(i,e,t,n,s,r){let a=new vr,o=new Uu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,v,R,C,D,L){let F=C.fog,G=D.geometry,q=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ue=e.get(S.envMap||q,Q),Z=ue&&ue.mapping===fo?ue.image.height:null,re=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Le=le!==void 0?le.length:0,Re=0;G.morphAttributes.position!==void 0&&(Re=1),G.morphAttributes.normal!==void 0&&(Re=2),G.morphAttributes.color!==void 0&&(Re=3);let rt,We,tt,se;if(re){let wt=Ri[re];rt=wt.vertexShader,We=wt.fragmentShader}else{rt=S.vertexShader,We=S.fragmentShader;let wt=o.getVertexShaderStage(S),xt=o.getFragmentShaderStage(S);o.update(S,wt,xt),tt=wt.id,se=xt.id}let O=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,Je=!!S.map,mt=!!S.matcap,ae=!!ue,ge=!!S.aoMap,xe=!!S.lightMap,_e=!!S.bumpMap&&S.wireframe===!1,Me=!!S.normalMap,Xe=!!S.displacementMap,De=!!S.emissiveMap,$e=!!S.metalnessMap,Oe=!!S.roughnessMap,z=S.anisotropy>0,ct=S.clearcoat>0,it=S.dispersion>0,N=S.retroreflectivity>0,T=S.iridescence>0,j=S.sheen>0,Y=S.transmission>0,ne=z&&!!S.anisotropyMap,be=ct&&!!S.clearcoatMap,ve=ct&&!!S.clearcoatNormalMap,ce=ct&&!!S.clearcoatRoughnessMap,de=T&&!!S.iridescenceMap,Pe=T&&!!S.iridescenceThicknessMap,He=j&&!!S.sheenColorMap,Se=j&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,Be=!!S.specularColorMap,qe=!!S.specularIntensityMap,et=Y&&!!S.transmissionMap,W=Y&&!!S.thicknessMap,Ce=!!S.gradientMap,fe=!!S.alphaMap,Ie=S.alphaTest>0,we=!!S.alphaHash,$=!!S.extensions,Fe=gi;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let ke={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:We,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:mt,envMap:ae,envMapMode:ae&&ue.mapping,envMapCubeUVHeight:Z,aoMap:ge,lightMap:xe,bumpMap:_e,normalMap:Me,displacementMap:Xe,emissiveMap:De,normalMapObjectSpace:Me&&S.normalMapType===ep,normalMapTangentSpace:Me&&S.normalMapType===Gr,packedNormalMap:Me&&S.normalMapType===Gr&&ov(S.normalMap.format),metalnessMap:$e,roughnessMap:Oe,anisotropy:z,anisotropyMap:ne,clearcoat:ct,clearcoatMap:be,clearcoatNormalMap:ve,clearcoatRoughnessMap:ce,dispersion:it,retroreflection:N,iridescence:T,iridescenceMap:de,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:He,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:Be,specularIntensityMap:qe,transmission:Y,transmissionMap:et,thicknessMap:W,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===Ur&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ie,alphaHash:we,combine:S.combine,mapUv:Je&&g(S.map.channel),aoMapUv:ge&&g(S.aoMap.channel),lightMapUv:xe&&g(S.lightMap.channel),bumpMapUv:_e&&g(S.bumpMap.channel),normalMapUv:Me&&g(S.normalMap.channel),displacementMapUv:Xe&&g(S.displacementMap.channel),emissiveMapUv:De&&g(S.emissiveMap.channel),metalnessMapUv:$e&&g(S.metalnessMap.channel),roughnessMapUv:Oe&&g(S.roughnessMap.channel),anisotropyMapUv:ne&&g(S.anisotropyMap.channel),clearcoatMapUv:be&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(S.sheenRoughnessMap.channel),specularMapUv:Ee&&g(S.specularMap.channel),specularColorMapUv:Be&&g(S.specularColorMap.channel),specularIntensityMapUv:qe&&g(S.specularIntensityMap.channel),transmissionMapUv:et&&g(S.transmissionMap.channel),thicknessMapUv:W&&g(S.thicknessMap.channel),alphaMapUv:fe&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||z),vertexNormals:!!G.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Je||fe),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||G.attributes.normal===void 0&&Me===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:te,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Re,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===yt,decodeVideoTextureEmissive:De&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&S.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(p(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function p(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numSunLights),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numSunLightShadows),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function w(S){let v=f[S.type],R;if(v){let C=Ri[v];R=si.clone(C.uniforms)}else R=S.uniforms;return R}function b(S,v){let R=h.get(v);return R!==void 0?++R.usedTimes:(R=new rv(i,v,S,s),c.push(R),h.set(v,R)),R}function _(S){if(--S.usedTimes===0){let v=c.indexOf(S);c[v]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function x(S){o.remove(S)}function E(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:_,releaseShaderCache:x,programs:c,dispose:E}}function cv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,M,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=M,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,g,M,m,p,y){y.reversedDepth===!0&&(m=-m);let w=o(d,f,g,M,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(d,f,g,M,m,p){let y=o(d,f,g,M,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||hv),n.length>1&&n.sort(f||Op),s.length>1&&s.sort(f||Op)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function uv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new kp,i.set(n,[a])):s>=r.length?(a=new kp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function fv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var pv=0;function mv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gv(i){let e=new dv,t=fv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ue,a=new Ue;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,y=0,w=0,b=0,_=0,x=0,E=0,S=0,v=0,R=0;c.sort(mv);for(let D=0,L=c.length;D<L;D++){let F=c[D],G=F.color,q=F.intensity,Q=F.distance,ue=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ms?ue=F.shadow.map.texture:ue=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],q);R++}else if(F.isSunLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,le=t.get(F);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[g]=le,n.sunShadowMap[g]=ue;let Le=re.getViewportCount();for(let Re=0;Re<Le;Re++)n.sunShadowMatrix[M+Re]=re.getMatrix(Re),n.sunShadowCascade[M+Re]=re._cascadeData[Re];M+=Le,g++}n.sun[f]=Z,f++}else if(F.isDirectionalLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,le=t.get(F);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.directionalShadow[m]=le,n.directionalShadowMap[m]=ue,n.directionalShadowMatrix[m]=F.shadow.matrix,_++}n.directional[m]=Z,m++}else if(F.isSpotLight){let Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(G).multiplyScalar(q),Z.distance=Q,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[y]=Z;let re=F.shadow;if(F.map&&(n.spotLightMap[S]=F.map,S++,re.updateMatrices(F),F.castShadow&&v++),n.spotLightMatrix[y]=re.matrix,F.castShadow){let le=t.get(F);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,n.spotShadow[y]=le,n.spotShadowMap[y]=ue,E++}y++}else if(F.isRectAreaLight){let Z=e.get(F);Z.color.copy(G).multiplyScalar(q),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=Z,w++}else if(F.isPointLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let re=F.shadow,le=t.get(F);le.shadowIntensity=re.intensity,le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,le.shadowCameraNear=re.camera.near,le.shadowCameraFar=re.camera.far,n.pointShadow[p]=le,n.pointShadowMap[p]=ue,n.pointShadowMatrix[p]=F.shadow.matrix,x++}n.point[p]=Z,p++}else if(F.isHemisphereLight){let Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(q),Z.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[b]=Z,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==y||C.rectAreaLength!==w||C.hemiLength!==b||C.numSunShadows!==g||C.numDirectionalShadows!==_||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==S||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+S-v,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=y,C.rectAreaLength=w,C.hemiLength=b,C.numSunShadows=g,C.numDirectionalShadows=_,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=S,C.numLightProbes=R,n.version=pv++)}function l(c,h){let u=0,d=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let b=c[y];if(b.isSunLight){let _=n.sun[u];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(b.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let _=n.rectArea[M];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Bp(i){let e=new gv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function bv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Bp(i),e.set(s,[o])):r>=a.length?(o=new Bp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`,yv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],vv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],zp=new Ue,Mo=new I,Pu=new I;function Mv(i,e,t){let n=new Tr,s=new oe,r=new oe,a=new Mt,o=new Lr,l=new Fl,c={},h=t.maxTextureSize,u={[ni]:_n,[_n]:ni,[Vt]:Vt},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ot;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let p=this.type;this.render=function(x,E,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Nf&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let v=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Yt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=p!==this.type;L&&E.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(G=>G.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,G=x.length;F<G;F++){let q=x[F],Q=q.shadow;if(Q===void 0){Ye("WebGLShadowMap:",q,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let ue=Q.getFrameExtents();s.multiply(ue),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,Q.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=Z,Q.map===null||L===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ds){if(q.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Dt(s.x,s.y,{format:ms,type:kt,minFilter:It,magFilter:It,generateMipmaps:!1}),Q.map.texture.name=q.name+".shadowMap",Q.map.depthTexture=new wi(s.x,s.y,qn),Q.map.depthTexture.name=q.name+".shadowMapDepth",Q.map.depthTexture.format=Mi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Nt,Q.map.depthTexture.magFilter=Nt}else q.isPointLight?(Q.map=new Uc(s.x),Q.map.depthTexture=new Il(s.x,bi)):(Q.map=new Dt(s.x,s.y),Q.map.depthTexture=new wi(s.x,s.y,bi)),Q.map.depthTexture.name=q.name+".shadowMap",Q.map.depthTexture.format=Mi,this.type===to?(Q.map.depthTexture.compareFunction=Z?Lc:Dc,Q.map.depthTexture.minFilter=It,Q.map.depthTexture.magFilter=It):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Nt,Q.map.depthTexture.magFilter=Nt);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let re=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();q.isPointLight!==!0&&Q.updateMatrices(q,S);for(let le=0;le<re;le++){let Le=Q.getCamera(le);if(q.isPointLight){let Re=Q.camera,rt=Q.matrix,We=q.distance||Re.far;We!==Re.far&&(Re.far=We,Re.updateProjectionMatrix()),Mo.setFromMatrixPosition(q.matrixWorld),Re.position.copy(Mo),Pu.copy(Re.position),Pu.add(yv[le]),Re.up.copy(vv[le]),Re.lookAt(Pu),Re.updateMatrixWorld(),rt.makeTranslation(-Mo.x,-Mo.y,-Mo.z),zp.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(zp,Re.coordinateSystem,Re.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,le),i.clear();else{le===0&&(i.setRenderTarget(Q.map),i.clear());let Re=Q.getViewport(le);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),D.viewport(a)}n=Q.getFrustum(le),b(E,S,Le,q,this.type)}Q.isPointLightShadow!==!0&&this.type===ds&&y(Q,S),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,R,C)};function y(x,E){let S=e.update(M);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new Dt(s.x,s.y,{format:ms,type:kt}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(E,null,S,d,M,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(E,null,S,f,M,null)}function w(x,E,S,v){let R=null,C=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(C!==void 0)R=C;else if(R=S.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=R.uuid,L=E.uuid,F=c[D];F===void 0&&(F={},c[D]=F);let G=F[L];G===void 0&&(G=R.clone(),F[L]=G,E.addEventListener("dispose",_)),R=G}if(R.visible=E.visible,R.wireframe=E.wireframe,v===ds?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=S}return R}function b(x,E,S,v,R){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&R===ds)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);let L=e.update(x),F=x.material;if(Array.isArray(F)){let G=L.groups;for(let q=0,Q=G.length;q<Q;q++){let ue=G[q],Z=F[ue.materialIndex];if(Z&&Z.visible){let re=w(x,Z,v,R);x.onBeforeShadow(i,x,E,S,L,re,ue),i.renderBufferDirect(S,null,L,re,x,ue),x.onAfterShadow(i,x,E,S,L,re,ue)}}}else if(F.visible){let G=w(x,F,v,R);x.onBeforeShadow(i,x,E,S,L,G,null),i.renderBufferDirect(S,null,L,G,x,null),x.onAfterShadow(i,x,E,S,L,G,null)}}let D=x.children;for(let L=0,F=D.length;L<F;L++)b(D[L],E,S,v,R)}function _(x){x.target.removeEventListener("dispose",_);for(let S in c){let v=c[S],R=x.target.uuid;R in v&&(v[R].dispose(),delete v[R])}}}function Sv(i,e){function t(){let W=!1,Ce=new Mt,fe=null,Ie=new Mt(0,0,0,0);return{setMask:function(we){fe!==we&&!W&&(i.colorMask(we,we,we,we),fe=we)},setLocked:function(we){W=we},setClear:function(we,$,Fe,ke,wt){wt===!0&&(we*=ke,$*=ke,Fe*=ke),Ce.set(we,$,Fe,ke),Ie.equals(Ce)===!1&&(i.clearColor(we,$,Fe,ke),Ie.copy(Ce))},reset:function(){W=!1,fe=null,Ie.set(-1,0,0,0)}}}function n(){let W=!1,Ce=!1,fe=null,Ie=null,we=null;return{setReversed:function($){if(Ce!==$){let Fe=e.get("EXT_clip_control");$?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ce=$;let ke=we;we=null,this.setClear(ke)}},getReversed:function(){return Ce},setTest:function($){$?O(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function($){fe!==$&&!W&&(i.depthMask($),fe=$)},setFunc:function($){if(Ce&&($=up[$]),Ie!==$){switch($){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=$}},setLocked:function($){W=$},setClear:function($){we!==$&&(we=$,Ce&&($=1-$),i.clearDepth($))},reset:function(){W=!1,fe=null,Ie=null,we=null,Ce=!1}}}function s(){let W=!1,Ce=null,fe=null,Ie=null,we=null,$=null,Fe=null,ke=null,wt=null;return{setTest:function(xt){W||(xt?O(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!W&&(i.stencilMask(xt),Ce=xt)},setFunc:function(xt,Un,dn){(fe!==xt||Ie!==Un||we!==dn)&&(i.stencilFunc(xt,Un,dn),fe=xt,Ie=Un,we=dn)},setOp:function(xt,Un,dn){($!==xt||Fe!==Un||ke!==dn)&&(i.stencilOp(xt,Un,dn),$=xt,Fe=Un,ke=dn)},setLocked:function(xt){W=xt},setClear:function(xt){wt!==xt&&(i.clearStencil(xt),wt=xt)},reset:function(){W=!1,Ce=null,fe=null,Ie=null,we=null,$=null,Fe=null,ke=null,wt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,w=null,b=null,_=null,x=null,E=null,S=new Ve(0,0,0),v=0,R=!1,C=null,D=null,L=null,F=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,ue=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=ue>=1):Z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=ue>=2);let re=null,le={},Le=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),rt=new Mt().fromArray(Le),We=new Mt().fromArray(Re);function tt(W,Ce,fe,Ie){let we=new Uint8Array(4),$=i.createTexture();i.bindTexture(W,$),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<fe;Fe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Ce+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return $}let se={};se[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(i.DEPTH_TEST),a.setFunc(mr),_e(!1),Me(su),O(i.CULL_FACE),ge(Yt);function O(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function te(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function ze(W,Ce){return d[W]!==Ce?(i.bindFramebuffer(W,Ce),d[W]=Ce,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ce),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function pe(W,Ce){let fe=g,Ie=!1;if(W){fe=f.get(Ce),fe===void 0&&(fe=[],f.set(Ce,fe));let we=W.textures;if(fe.length!==we.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Fe=we.length;$<Fe;$++)fe[$]=i.COLOR_ATTACHMENT0+$;fe.length=we.length,Ie=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(fe)}function Je(W){return M!==W?(i.useProgram(W),M=W,!0):!1}let mt={[ii]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};mt[Of]=i.MIN,mt[kf]=i.MAX;let ae={[Ls]:i.ZERO,[Bf]:i.ONE,[zf]:i.SRC_COLOR,[ou]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[so]:i.DST_COLOR,[io]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[lu]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[qf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[Yf]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(W,Ce,fe,Ie,we,$,Fe,ke,wt,xt){if(W===Yt){m===!0&&(te(i.BLEND),m=!1);return}if(m===!1&&(O(i.BLEND),m=!0),W!==ql){if(W!==p||xt!==R){if((y!==ii||_!==ii)&&(i.blendEquation(i.FUNC_ADD),y=ii,_=ii),xt)switch(W){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ru:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",W);break}w=null,b=null,x=null,E=null,S.set(0,0,0),v=0,p=W,R=xt}return}we=we||Ce,$=$||fe,Fe=Fe||Ie,(Ce!==y||we!==_)&&(i.blendEquationSeparate(mt[Ce],mt[we]),y=Ce,_=we),(fe!==w||Ie!==b||$!==x||Fe!==E)&&(i.blendFuncSeparate(ae[fe],ae[Ie],ae[$],ae[Fe]),w=fe,b=Ie,x=$,E=Fe),(ke.equals(S)===!1||wt!==v)&&(i.blendColor(ke.r,ke.g,ke.b,wt),S.copy(ke),v=wt),p=W,R=!1}function xe(W,Ce){W.side===Vt?te(i.CULL_FACE):O(i.CULL_FACE);let fe=W.side===_n;Ce&&(fe=!fe),_e(fe),W.blending===Ur&&W.transparent===!1?ge(Yt):ge(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ie=W.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),De(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function Me(W){W!==Df?(O(i.CULL_FACE),W!==D&&(W===su?i.cullFace(i.BACK):W===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),D=W}function Xe(W){W!==L&&(Q&&i.lineWidth(W),L=W)}function De(W,Ce,fe){W?(O(i.POLYGON_OFFSET_FILL),(F!==Ce||G!==fe)&&(F=Ce,G=fe,a.getReversed()&&(Ce=-Ce),i.polygonOffset(Ce,fe))):te(i.POLYGON_OFFSET_FILL)}function $e(W){W?O(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=i.TEXTURE0+q-1),re!==W&&(i.activeTexture(W),re=W)}function z(W,Ce,fe){fe===void 0&&(re===null?fe=i.TEXTURE0+q-1:fe=re);let Ie=le[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[fe]=Ie),(Ie.type!==W||Ie.texture!==Ce)&&(re!==fe&&(i.activeTexture(fe),re=fe),i.bindTexture(W,Ce||se[W]),Ie.type=W,Ie.texture=Ce)}function ct(){let W=le[re];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function j(){try{i.texSubImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function be(){try{i.texStorage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function ve(){try{i.texStorage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function ce(){try{i.texImage2D(...arguments)}catch(W){nt("WebGLState:",W)}}function de(){try{i.texImage3D(...arguments)}catch(W){nt("WebGLState:",W)}}function Pe(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function He(W,Ce){u[W]!==Ce&&(i.pixelStorei(W,Ce),u[W]=Ce)}function Se(W){rt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),rt.copy(W))}function Ee(W){We.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),We.copy(W))}function Be(W,Ce){let fe=c.get(Ce);fe===void 0&&(fe=new WeakMap,c.set(Ce,fe));let Ie=fe.get(W);Ie===void 0&&(Ie=i.getUniformBlockIndex(Ce,W.name),fe.set(W,Ie))}function qe(W,Ce){let Ie=c.get(Ce).get(W);l.get(Ce)!==Ie&&(i.uniformBlockBinding(Ce,Ie,W.__bindingPointIndex),l.set(Ce,Ie))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},re=null,le={},d={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,w=null,b=null,_=null,x=null,E=null,S=new Ve(0,0,0),v=0,R=!1,C=null,D=null,L=null,F=null,G=null,rt.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:te,bindFramebuffer:ze,drawBuffers:pe,useProgram:Je,setBlending:ge,setMaterial:xe,setFlipSided:_e,setCullFace:Me,setLineWidth:Xe,setPolygonOffset:De,setScissorTest:$e,activeTexture:Oe,bindTexture:z,unbindTexture:ct,compressedTexImage2D:it,compressedTexImage3D:N,texImage2D:ce,texImage3D:de,pixelStorei:He,getParameter:Pe,updateUBOMapping:Be,uniformBlockBinding:qe,texStorage2D:be,texStorage3D:ve,texSubImage2D:T,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:ne,scissor:Se,viewport:Ee,reset:et}}function wv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,T){return g?new OffscreenCanvas(N,T):xr("canvas")}function m(N,T,j){let Y=1,ne=it(N);if((ne.width>j||ne.height>j)&&(Y=j/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let be=Math.floor(Y*ne.width),ve=Math.floor(Y*ne.height);d===void 0&&(d=M(be,ve));let ce=T?M(be,ve):d;return ce.width=be,ce.height=ve,ce.getContext("2d").drawImage(N,0,0,be,ve),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+be+"x"+ve+")."),ce}else return"data"in N&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function p(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,T,j,Y,ne,be=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ve;Y&&(ve=e.get("EXT_texture_norm16"),ve||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=T;if(T===i.RED&&(j===i.FLOAT&&(ce=i.R32F),j===i.HALF_FLOAT&&(ce=i.R16F),j===i.UNSIGNED_BYTE&&(ce=i.R8),j===i.UNSIGNED_SHORT&&ve&&(ce=ve.R16_EXT),j===i.SHORT&&ve&&(ce=ve.R16_SNORM_EXT)),T===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.R8UI),j===i.UNSIGNED_SHORT&&(ce=i.R16UI),j===i.UNSIGNED_INT&&(ce=i.R32UI),j===i.BYTE&&(ce=i.R8I),j===i.SHORT&&(ce=i.R16I),j===i.INT&&(ce=i.R32I)),T===i.RG&&(j===i.FLOAT&&(ce=i.RG32F),j===i.HALF_FLOAT&&(ce=i.RG16F),j===i.UNSIGNED_BYTE&&(ce=i.RG8),j===i.UNSIGNED_SHORT&&ve&&(ce=ve.RG16_EXT),j===i.SHORT&&ve&&(ce=ve.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RG8UI),j===i.UNSIGNED_SHORT&&(ce=i.RG16UI),j===i.UNSIGNED_INT&&(ce=i.RG32UI),j===i.BYTE&&(ce=i.RG8I),j===i.SHORT&&(ce=i.RG16I),j===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),j===i.UNSIGNED_INT&&(ce=i.RGB32UI),j===i.BYTE&&(ce=i.RGB8I),j===i.SHORT&&(ce=i.RGB16I),j===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),j===i.UNSIGNED_INT&&(ce=i.RGBA32UI),j===i.BYTE&&(ce=i.RGBA8I),j===i.SHORT&&(ce=i.RGBA16I),j===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&(j===i.UNSIGNED_SHORT&&ve&&(ce=ve.RGB16_EXT),j===i.SHORT&&ve&&(ce=ve.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),T===i.RGBA){let de=be?ya:ft.getTransfer(ne);j===i.FLOAT&&(ce=i.RGBA32F),j===i.HALF_FLOAT&&(ce=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ce=de===yt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&ve&&(ce=ve.RGBA16_EXT),j===i.SHORT&&ve&&(ce=ve.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function _(N,T){let j;return N?T===null||T===bi||T===ps?j=i.DEPTH24_STENCIL8:T===qn?j=i.DEPTH32F_STENCIL8:T===Br&&(j=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bi||T===ps?j=i.DEPTH_COMPONENT24:T===qn?j=i.DEPTH_COMPONENT32F:T===Br&&(j=i.DEPTH_COMPONENT16),j}function x(N,T){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Nt&&N.minFilter!==It?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function E(N){let T=N.target;T.removeEventListener("dispose",E),v(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function S(N){let T=N.target;T.removeEventListener("dispose",S),C(T)}function v(N){let T=n.get(N);if(T.__webglInit===void 0)return;let j=N.source,Y=f.get(j);if(Y){let ne=Y[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(N),Object.keys(Y).length===0&&f.delete(j)}n.remove(N)}function R(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let j=N.source,Y=f.get(j);delete Y[T.__cacheKey],a.memory.textures--}function C(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let ne=0;ne<T.__webglFramebuffer[Y].length;ne++)i.deleteFramebuffer(T.__webglFramebuffer[Y][ne]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=N.textures;for(let Y=0,ne=j.length;Y<ne;Y++){let be=n.get(j[Y]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(j[Y])}n.remove(N)}let D=0;function L(){D=0}function F(){return D}function G(N){D=N}function q(){let N=D;return N>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,N}function Q(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ue(N,T){let j=n.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){let Y=N.image;if(Y===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,N,T);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+T)}function Z(N,T){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){te(j,N,T);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+T)}function re(N,T){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){te(j,N,T);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+T)}function le(N,T){let j=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){ze(j,N,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+T)}let Le={[Qt]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},Re={[Nt]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},rt={[np]:i.NEVER,[op]:i.ALWAYS,[ip]:i.LESS,[Dc]:i.LEQUAL,[sp]:i.EQUAL,[Lc]:i.GEQUAL,[rp]:i.GREATER,[ap]:i.NOTEQUAL};function We(N,T){if(T.type===qn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===It||T.magFilter===kr||T.magFilter===Us||T.magFilter===Ln||T.minFilter===It||T.minFilter===kr||T.minFilter===Us||T.minFilter===Ln)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Le[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Le[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Le[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Re[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Re[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,rt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==Us&&T.minFilter!==Ln||T.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function tt(N,T){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",E));let Y=T.source,ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));let be=Q(T);if(be!==N.__cacheKey){ne[be]===void 0&&(ne[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[be].usedTimes++;let ve=ne[N.__cacheKey];ve!==void 0&&(ne[N.__cacheKey].usedTimes--,ve.usedTimes===0&&R(T)),N.__cacheKey=be,N.__webglTexture=ne[be].texture}return j}function se(N,T,j){return Math.floor(Math.floor(N/j)/T)}function O(N,T,j,Y){let be=N.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,j,Y,T.data);else{be.sort((He,Se)=>He.start-Se.start);let ve=0;for(let He=1;He<be.length;He++){let Se=be[ve],Ee=be[He],Be=Se.start+Se.count,qe=se(Ee.start,T.width,4),et=se(Se.start,T.width,4);Ee.start<=Be+1&&qe===et&&se(Ee.start+Ee.count-1,T.width,4)===qe?Se.count=Math.max(Se.count,Ee.start+Ee.count-Se.start):(++ve,be[ve]=Ee)}be.length=ve+1;let ce=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let He=0,Se=be.length;He<Se;He++){let Ee=be[He],Be=Math.floor(Ee.start/4),qe=Math.ceil(Ee.count/4),et=Be%T.width,W=Math.floor(Be/T.width),Ce=qe,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,et,W,Ce,fe,j,Y,T.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function te(N,T,j){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);let ne=tt(N,T),be=T.source;t.bindTexture(Y,N.__webglTexture,i.TEXTURE0+j);let ve=n.get(be);if(be.version!==ve.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let fe=ft.getPrimaries(ft.workingColorSpace),Ie=T.colorSpace===xi?null:ft.getPrimaries(T.colorSpace),we=T.colorSpace===xi||fe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let de=m(T.image,!1,s.maxTextureSize);de=ct(T,de);let Pe=r.convert(T.format,T.colorSpace),He=r.convert(T.type),Se=b(T.internalFormat,Pe,He,T.normalized,T.colorSpace,T.isVideoTexture);We(Y,T);let Ee,Be=T.mipmaps,qe=T.isVideoTexture!==!0,et=ve.__version===void 0||ne===!0,W=be.dataReady,Ce=x(T,de);if(T.isDepthTexture)Se=_(T.format===Ei,T.type),et&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Se,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Se,de.width,de.height,0,Pe,He,null));else if(T.isDataTexture)if(Be.length>0){qe&&et&&t.texStorage2D(i.TEXTURE_2D,Ce,Se,Be[0].width,Be[0].height);for(let fe=0,Ie=Be.length;fe<Ie;fe++)Ee=Be[fe],qe?W&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Pe,He,Ee.data):t.texImage2D(i.TEXTURE_2D,fe,Se,Ee.width,Ee.height,0,Pe,He,Ee.data);T.generateMipmaps=!1}else qe?(et&&t.texStorage2D(i.TEXTURE_2D,Ce,Se,de.width,de.height),W&&O(T,de,Pe,He)):t.texImage2D(i.TEXTURE_2D,0,Se,de.width,de.height,0,Pe,He,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Se,Be[0].width,Be[0].height,de.depth);for(let fe=0,Ie=Be.length;fe<Ie;fe++)if(Ee=Be[fe],T.format!==tn)if(Pe!==null)if(qe){if(W)if(T.layerUpdates.size>0){let we=wu(Ee.width,Ee.height,T.format,T.type);for(let $ of T.layerUpdates){let Fe=Ee.data.subarray($*we/Ee.data.BYTES_PER_ELEMENT,($+1)*we/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,$,Ee.width,Ee.height,1,Pe,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,de.depth,Pe,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Se,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,de.depth,Pe,He,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Se,Ee.width,Ee.height,de.depth,0,Pe,He,Ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{qe&&et&&t.texStorage2D(i.TEXTURE_2D,Ce,Se,Be[0].width,Be[0].height);for(let fe=0,Ie=Be.length;fe<Ie;fe++)Ee=Be[fe],T.format!==tn?Pe!==null?qe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Se,Ee.width,Ee.height,0,Ee.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?W&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,Pe,He,Ee.data):t.texImage2D(i.TEXTURE_2D,fe,Se,Ee.width,Ee.height,0,Pe,He,Ee.data)}else if(T.isDataArrayTexture)if(qe){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Se,de.width,de.height,de.depth),W)if(T.layerUpdates.size>0){let fe=wu(de.width,de.height,T.format,T.type);for(let Ie of T.layerUpdates){let we=de.data.subarray(Ie*fe/de.data.BYTES_PER_ELEMENT,(Ie+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,de.width,de.height,1,Pe,He,we)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,He,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,de.width,de.height,de.depth,0,Pe,He,de.data);else if(T.isData3DTexture)qe?(et&&t.texStorage3D(i.TEXTURE_3D,Ce,Se,de.width,de.height,de.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,He,de.data)):t.texImage3D(i.TEXTURE_3D,0,Se,de.width,de.height,de.depth,0,Pe,He,de.data);else if(T.isFramebufferTexture){if(et)if(qe)t.texStorage2D(i.TEXTURE_2D,Ce,Se,de.width,de.height);else{let fe=de.width,Ie=de.height;for(let we=0;we<Ce;we++)t.texImage2D(i.TEXTURE_2D,we,Se,fe,Ie,0,Pe,He,null),fe>>=1,Ie>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),de.parentNode!==fe){fe.appendChild(de),u.add(T),fe.onpaint=Ie=>{let we=Ie.changedElements;for(let $ of u)we.includes($.image)&&($.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let we=i.RGBA,$=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,$,Fe,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(qe&&et){let fe=it(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Se,fe.width,fe.height)}for(let fe=0,Ie=Be.length;fe<Ie;fe++)Ee=Be[fe],qe?W&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Pe,He,Ee):t.texImage2D(i.TEXTURE_2D,fe,Se,Pe,He,Ee);T.generateMipmaps=!1}else if(qe){if(et){let fe=it(de);t.texStorage2D(i.TEXTURE_2D,Ce,Se,fe.width,fe.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,He,de)}else t.texImage2D(i.TEXTURE_2D,0,Se,Pe,He,de);p(T)&&y(Y),ve.__version=be.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ze(N,T,j){if(T.image.length!==6)return;let Y=tt(N,T),ne=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);let be=n.get(ne);if(ne.version!==be.__version||Y===!0){t.activeTexture(i.TEXTURE0+j);let ve=ft.getPrimaries(ft.workingColorSpace),ce=T.colorSpace===xi?null:ft.getPrimaries(T.colorSpace),de=T.colorSpace===xi||ve===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,He=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let $=0;$<6;$++)!Pe&&!He?Se[$]=m(T.image[$],!0,s.maxCubemapSize):Se[$]=He?T.image[$].image:T.image[$],Se[$]=ct(T,Se[$]);let Ee=Se[0],Be=r.convert(T.format,T.colorSpace),qe=r.convert(T.type),et=b(T.internalFormat,Be,qe,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Ce=be.__version===void 0||Y===!0,fe=ne.dataReady,Ie=x(T,Ee);We(i.TEXTURE_CUBE_MAP,T);let we;if(Pe){W&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,et,Ee.width,Ee.height);for(let $=0;$<6;$++){we=Se[$].mipmaps;for(let Fe=0;Fe<we.length;Fe++){let ke=we[Fe];T.format!==tn?Be!==null?W?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe,0,0,ke.width,ke.height,Be,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe,et,ke.width,ke.height,0,ke.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe,0,0,ke.width,ke.height,Be,qe,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe,et,ke.width,ke.height,0,Be,qe,ke.data)}}}else{if(we=T.mipmaps,W&&Ce){we.length>0&&Ie++;let $=it(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,et,$.width,$.height)}for(let $=0;$<6;$++)if(He){W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se[$].width,Se[$].height,Be,qe,Se[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,Se[$].width,Se[$].height,0,Be,qe,Se[$].data);for(let Fe=0;Fe<we.length;Fe++){let wt=we[Fe].image[$].image;W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe+1,0,0,wt.width,wt.height,Be,qe,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe+1,et,wt.width,wt.height,0,Be,qe,wt.data)}}else{W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Be,qe,Se[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,et,Be,qe,Se[$]);for(let Fe=0;Fe<we.length;Fe++){let ke=we[Fe];W?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe+1,0,0,Be,qe,ke.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe+1,et,Be,qe,ke.image[$])}}}p(T)&&y(i.TEXTURE_CUBE_MAP),be.__version=ne.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function pe(N,T,j,Y,ne,be){let ve=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),de=b(j.internalFormat,ve,ce,j.normalized,j.colorSpace),Pe=n.get(T),He=n.get(j);if(He.__renderTarget=T,!Pe.__hasExternalTextures){let Se=Math.max(1,T.width>>be),Ee=Math.max(1,T.height>>be);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,be,de,Se,Ee,T.depth,0,ve,ce,null):t.texImage2D(ne,be,de,Se,Ee,0,ve,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Oe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ne,He.__webglTexture,0,$e(T)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ne,He.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(N,T,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let Y=T.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,be=_(T.stencilBuffer,ne),ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(T),be,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(T),be,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,be,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,N)}else{let Y=T.textures;for(let ne=0;ne<Y.length;ne++){let be=Y[ne],ve=r.convert(be.format,be.colorSpace),ce=r.convert(be.type),de=b(be.internalFormat,ve,ce,be.normalized,be.colorSpace);Oe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(T),de,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(T),de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(N,T,j){let Y=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(T.depthTexture);if(ne.__renderTarget=T,(!ne.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),We(i.TEXTURE_CUBE_MAP,T.depthTexture);let Pe=r.convert(T.depthTexture.format),He=r.convert(T.depthTexture.type),Se;T.depthTexture.format===Mi?Se=i.DEPTH_COMPONENT24:T.depthTexture.format===Ei&&(Se=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,T.width,T.height,0,Pe,He,null)}}else ue(T.depthTexture,0);let be=ne.__webglTexture,ve=$e(T),ce=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,de=T.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Mi)Oe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,be,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,be,0);else if(T.depthTexture.format===Ei)Oe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,be,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(N){let T=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){let ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=Y}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let Y=0;Y<6;Y++)mt(T.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?mt(T.__webglFramebuffer[0],N,0):mt(T.__webglFramebuffer,N,0)}else if(j){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),Je(T.__webglDepthbuffer[Y],N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,be)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Je(T.__webglDepthbuffer,N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(N,T,j){let Y=n.get(N);T!==void 0&&pe(Y.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ae(N)}function xe(N){let T=N.texture,j=n.get(N),Y=n.get(T);N.addEventListener("dispose",S);let ne=N.textures,be=N.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,a.memory.textures++),be){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let de=0;de<T.mipmaps.length;de++)j.__webglFramebuffer[ce][de]=i.createFramebuffer()}else j.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)j.__webglFramebuffer[ce]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ce=0,de=ne.length;ce<de;ce++){let Pe=n.get(ne[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Oe(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){let de=ne[ce];j.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);let Pe=r.convert(de.format,de.colorSpace),He=r.convert(de.type),Se=b(de.internalFormat,Pe,He,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),Ee=$e(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),We(i.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)pe(j.__webglFramebuffer[ce][de],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else pe(j.__webglFramebuffer[ce],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(T)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,de=ne.length;ce<de;ce++){let Pe=ne[ce],He=n.get(Pe),Se=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Se=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,He.__webglTexture),We(Se,Pe),pe(j.__webglFramebuffer,N,Pe,i.COLOR_ATTACHMENT0+ce,Se,0),p(Pe)&&y(Se)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),We(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)pe(j.__webglFramebuffer[de],N,T,i.COLOR_ATTACHMENT0,ce,de);else pe(j.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,ce,0);p(T)&&y(ce),t.unbindTexture()}N.depthBuffer&&ae(N)}function _e(N){let T=N.textures;for(let j=0,Y=T.length;j<Y;j++){let ne=T[j];if(p(ne)){let be=w(N),ve=n.get(ne).__webglTexture;t.bindTexture(be,ve),y(be),t.unbindTexture()}}}let Me=[],Xe=[];function De(N){if(N.samples>0){if(Oe(N)===!1){let T=N.textures,j=N.width,Y=N.height,ne=i.COLOR_BUFFER_BIT,be=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(N),ce=T.length>1;if(ce)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let de=N.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);let He=n.get(T[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,j,Y,0,0,j,Y,ne,i.NEAREST),l===!0&&(Me.length=0,Xe.length=0,Me.push(i.COLOR_ATTACHMENT0+Pe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Me.push(be),Xe.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);let He=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function $e(N){return Math.min(s.maxSamples,N.samples)}function Oe(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function z(N){let T=a.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function ct(N,T){let j=N.colorSpace,Y=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==sn&&j!==xi&&(ft.getTransfer(j)===yt?(Y!==tn||ne!==En)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",j)),T}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=L,this.getTextureUnits=F,this.setTextureUnits=G,this.setTexture2D=ue,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=le,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tv(i,e){function t(n,s=xi){let r,a=ft.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===uu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Kl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===kt)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===tn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===bo)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc||n===cc||n===hc||n===xo||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===Sc||n===wc||n===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Ac||n===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Pc||n===_o||n===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`,ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Ev,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new ku,p={},y=t.getContextAttributes(),w=null,b=null,_=[],x=[],E=new oe,S=null,v=null,R=new qt;R.viewport=new Mt;let C=new qt;C.viewport=new Mt;let D=[R,C],L=new Wl,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let O=_[se];return O===void 0&&(O=new Mr,_[se]=O),O.getTargetRaySpace()},this.getControllerGrip=function(se){let O=_[se];return O===void 0&&(O=new Mr,_[se]=O),O.getGripSpace()},this.getHand=function(se){let O=_[se];return O===void 0&&(O=new Mr,_[se]=O),O.getHandSpace()};function q(se){let O=x.indexOf(se.inputSource);if(O===-1)return;let te=_[O];te!==void 0&&(te.update(se.inputSource,se.frame,c||a),te.dispatchEvent({type:se.type,data:se.inputSource}))}function Q(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ue);for(let se=0;se<_.length;se++){let O=x[se];O!==null&&(x[se]=null,_[se].disconnect(O))}F=null,G=null,m.reset();for(let se in p)delete p[se];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),v!==null){let se=v.camera;se.fov=v.fov,se.zoom=v.zoom,se.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ze=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=y.stencil?Ei:Mi,ze=y.stencil?ps:bi);let Je={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Dt(d.textureWidth,d.textureHeight,{format:tn,type:En,depthTexture:new wi(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Dt(f.framebufferWidth,f.framebufferHeight,{format:tn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(se){for(let O=0;O<se.removed.length;O++){let te=se.removed[O],ze=x.indexOf(te);ze>=0&&(x[ze]=null,_[ze].disconnect(te))}for(let O=0;O<se.added.length;O++){let te=se.added[O],ze=x.indexOf(te);if(ze===-1){for(let Je=0;Je<_.length;Je++)if(Je>=x.length){x.push(te),ze=Je;break}else if(x[Je]===null){x[Je]=te,ze=Je;break}if(ze===-1)break}let pe=_[ze];pe&&pe.connect(te)}}let Z=new I,re=new I;function le(se,O,te){Z.setFromMatrixPosition(O.matrixWorld),re.setFromMatrixPosition(te.matrixWorld);let ze=Z.distanceTo(re),pe=O.projectionMatrix.elements,Je=te.projectionMatrix.elements,mt=pe[14]/(pe[10]-1),ae=pe[14]/(pe[10]+1),ge=(pe[9]+1)/pe[5],xe=(pe[9]-1)/pe[5],_e=(pe[8]-1)/pe[0],Me=(Je[8]+1)/Je[0],Xe=mt*_e,De=mt*Me,$e=ze/(-_e+Me),Oe=$e*-_e;if(O.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Oe),se.translateZ($e),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),pe[10]===-1)se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let z=mt+$e,ct=ae+$e,it=Xe-Oe,N=De+(ze-Oe),T=ge*ae/ct*z,j=xe*ae/ct*z;se.projectionMatrix.makePerspective(it,N,T,j,z,ct),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Le(se,O){O===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(O.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let O=se.near,te=se.far;m.texture!==null&&(m.depthNear>0&&(O=m.depthNear),m.depthFar>0&&(te=m.depthFar)),L.near=C.near=R.near=O,L.far=C.far=R.far=te,(F!==L.near||G!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,G=L.far),L.layers.mask=se.layers.mask|6,R.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let ze=se.parent,pe=L.cameras;Le(L,ze);for(let Je=0;Je<pe.length;Je++)Le(pe[Je],ze);pe.length===2?le(L,R,C):L.projectionMatrix.copy(R.projectionMatrix),v===null&&se.isPerspectiveCamera&&(v={camera:se,fov:se.fov,zoom:se.zoom}),Re(se,L,ze)};function Re(se,O,te){te===null?se.matrix.copy(O.matrixWorld):(se.matrix.copy(te.matrixWorld),se.matrix.invert(),se.matrix.multiply(O.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=As*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(se){return p[se]};let rt=null;function We(se,O){if(h=O.getViewerPose(c||a),g=O,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;te.length!==L.cameras.length&&(L.cameras.length=0,ze=!0);for(let ae=0;ae<te.length;ae++){let ge=te[ae],xe=null;if(f!==null)xe=f.getViewport(ge);else{let Me=u.getViewSubImage(d,ge);xe=Me.viewport,ae===0&&(e.setRenderTargetTextures(b,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(b))}let _e=D[ae];_e===void 0&&(_e=new qt,_e.layers.enable(ae),_e.viewport=new Mt,D[ae]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(xe.x,xe.y,xe.width,xe.height),ae===0&&(L.matrix.copy(_e.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ze===!0&&L.cameras.push(_e)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let ae=u.getDepthInformation(te[0]);ae&&ae.isValid&&ae.texture&&m.init(ae,s.renderState)}if(pe&&pe.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let ae=0;ae<te.length;ae++){let ge=te[ae].camera;if(ge){let xe=p[ge];xe||(xe=new La,p[ge]=xe);let _e=u.getCameraImage(ge);xe.sourceTexture=_e}}}}for(let te=0;te<_.length;te++){let ze=x[te],pe=_[te];ze!==null&&pe!==void 0&&pe.update(ze,O,c||a)}rt&&rt(se,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),g=null}let tt=new Gp;tt.setAnimationLoop(We),this.setAnimationLoop=function(se){rt=se},this.dispose=function(){}}},Rv=new Ue,jp=new at;jp.set(-1,0,0,0,1,0,0,0,1);function Cv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let x=_.program;n.uniformBlockBinding(b,x)}function c(b,_){let x=s[b.id];x===void 0&&(m(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",y));let E=_.program;n.updateUBOMapping(b,E);let S=e.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let _=u();b.__bindingPointIndex=_;let x=i.createBuffer(),E=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],x=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,v=x.length;S<v;S++){let R=x[S];if(Array.isArray(R))for(let C=0,D=R.length;C<D;C++)f(R[C],S,C,E);else f(R,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,x,E){if(M(b,_,x,E)===!0){let S=b.__offset,v=b.value;if(Array.isArray(v)){let R=0;for(let C=0;C<v.length;C++){let D=v[C],L=p(D);g(D,b.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(v,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,b.__data)}}function g(b,_,x){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,x)}function M(b,_,x,E){let S=b.value,v=_+"_"+x;if(E[v]===void 0)return typeof S=="number"||typeof S=="boolean"?E[v]=S:ArrayBuffer.isView(S)?E[v]=S.slice():E[v]=S.clone(),!0;{let R=E[v];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return E[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function m(b){let _=b.uniforms,x=0,E=16;for(let v=0,R=_.length;v<R;v++){let C=Array.isArray(_[v])?_[v]:[_[v]];for(let D=0,L=C.length;D<L;D++){let F=C[D],G=Array.isArray(F.value)?F.value:[F.value];for(let q=0,Q=G.length;q<Q;q++){let ue=G[q],Z=p(ue),re=x%E,le=re%Z.boundary,Le=re+le;x+=le,Le!==0&&E-Le<Z.storage&&(x+=E-Le),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}let S=x%E;return S>0&&(x+=E-S),b.__size=x,b.__cache={},this}function p(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",b),_}function y(b){let _=b.target;_.removeEventListener("dispose",y);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function w(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Dv(){return Ai===null&&(Ai=new wn(Iv,16,16,ms,kt),Ai.name="DFG_LUT",Ai.minFilter=It,Ai.magFilter=It,Ai.wrapS=In,Ai.wrapT=In,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Oc=class{constructor(e={}){let{canvas:t=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([tc,ec,Ql]),p=new Set([En,bi,Br,ps,Jl,Zl]),y=new Uint32Array(4),w=new Int32Array(4),b=new I,_=null,x=null,E=[],S=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,D=null,L=null,F=null,G=null;this._outputColorSpace=bt;let q=0,Q=0,ue=null,Z=-1,re=null,le=new Mt,Le=new Mt,Re=null,rt=new Ve(0),We=0,tt=t.width,se=t.height,O=1,te=null,ze=null,pe=new Mt(0,0,tt,se),Je=new Mt(0,0,tt,se),mt=!1,ae=new Tr,ge=!1,xe=!1,_e=new Ue,Me=new I,Xe=new Mt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Oe(){return ue===null?O:1}let z=n;function ct(P,V){return t.getContext(P,V)}let it,N,T,j,Y,ne,be,ve,ce,de,Pe,He,Se,Ee,Be,qe,et,W,Ce,fe,Ie,we,$;try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),z===null){let V="webgl2";if(z=ct(V,P),z===null)throw ct(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(P){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),nt("WebGLRenderer: "+P.message),P}function Fe(){it=new B_(z),it.init(),Ie=new Tv(z,it),N=new C_(z,it,e,Ie),T=new Sv(z,it),N.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),L=z.createFramebuffer(),F=z.createFramebuffer(),G=z.createFramebuffer(),j=new H_(z),Y=new cv,ne=new wv(z,it,T,Y,N,Ie,j),be=new k_(R),ve=new Wg(z),we=new A_(z,ve),ce=new z_(z,ve,j,we),de=new W_(z,ce,ve,we,j),W=new V_(z,N,ne),Be=new P_(Y),Pe=new lv(R,be,it,N,we,Be),He=new Cv(R,Y),Se=new uv,Ee=new bv(it),et=new E_(R,be,T,de,g,l),qe=new Mv(R,de,N),$=new Pv(z,j,N,T),Ce=new R_(z,it,j),fe=new G_(z,it,j),j.programs=Pe.programs,R.capabilities=N,R.extensions=it,R.properties=Y,R.renderLists=Se,R.shadowMap=qe,R.state=T,R.info=j}M!==En&&(v=new X_(M,t.width,t.height,o,s,r));let ke=new Bu(R,z);this.xr=ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let P=it.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=it.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(P){P!==void 0&&(O=P,this.setSize(tt,se,!1))},this.getSize=function(P){return P.set(tt,se)},this.setSize=function(P,V,ie=!0){if(ke.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=P,se=V,t.width=Math.floor(P*O),t.height=Math.floor(V*O),ie===!0&&(t.style.width=P+"px",t.style.height=V+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(tt*O,se*O).floor()},this.setDrawingBufferSize=function(P,V,ie){tt=P,se=V,O=ie,t.width=Math.floor(P*ie),t.height=Math.floor(V*ie),this.setViewport(0,0,P,V)},this.setEffects=function(P){if(M===En){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let V=0;V<P.length;V++)if(P[V].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(le)},this.getViewport=function(P){return P.copy(pe)},this.setViewport=function(P,V,ie,J){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,V,ie,J),T.viewport(le.copy(pe).multiplyScalar(O).round())},this.getScissor=function(P){return P.copy(Je)},this.setScissor=function(P,V,ie,J){P.isVector4?Je.set(P.x,P.y,P.z,P.w):Je.set(P,V,ie,J),T.scissor(Le.copy(Je).multiplyScalar(O).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(P){T.setScissorTest(mt=P)},this.setOpaqueSort=function(P){te=P},this.setTransparentSort=function(P){ze=P},this.getClearColor=function(P){return P.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,ie=!0){let J=0;if(P){let A=!1;if(ue!==null){let U=ue.texture.format;A=m.has(U)}if(A){let U=ue.texture.type,k=p.has(U),H=et.getClearColor(),X=et.getClearAlpha(),K=H.r,B=H.g,he=H.b;k?(y[0]=K,y[1]=B,y[2]=he,y[3]=X,z.clearBufferuiv(z.COLOR,0,y)):(w[0]=K,w[1]=B,w[2]=he,w[3]=X,z.clearBufferiv(z.COLOR,0,w))}else J|=z.COLOR_BUFFER_BIT}V&&(J|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),D=P},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),et.dispose(),Se.dispose(),Ee.dispose(),Y.dispose(),be.dispose(),de.dispose(),we.dispose(),$.dispose(),Pe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ta),ke.removeEventListener("sessionend",Oo),Ii.stop()};function wt(P){P.preventDefault(),va("WebGLRenderer: Context Lost."),C=!0}function xt(){va("WebGLRenderer: Context Restored."),C=!1;let P=j.autoReset,V=qe.enabled,ie=qe.autoUpdate,J=qe.needsUpdate,A=qe.type;Fe(),j.autoReset=P,qe.enabled=V,qe.autoUpdate=ie,qe.needsUpdate=J,qe.type=A}function Un(P){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dn(P){let V=P.target;V.removeEventListener("dispose",dn),Uo(V)}function Uo(P){uh(P),Y.remove(P)}function uh(P){let V=Y.get(P).programs;V!==void 0&&(V.forEach(function(ie){Pe.releaseProgram(ie)}),P.isShaderMaterial&&Pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,ie,J,A,U){V===null&&(V=De);let k=A.isMesh&&A.matrixWorld.determinantAffine()<0,H=Bo(P,V,ie,J,A);T.setMaterial(J,k);let X=ie.index,K=1;if(J.wireframe===!0){if(X=ce.getWireframeAttribute(ie),X===void 0)return;K=2}let B=ie.drawRange,he=ie.attributes.position,ee=B.start*K,me=(B.start+B.count)*K;U!==null&&(ee=Math.max(ee,U.start*K),me=Math.min(me,(U.start+U.count)*K)),X!==null?(ee=Math.max(ee,0),me=Math.min(me,X.count)):he!=null&&(ee=Math.max(ee,0),me=Math.min(me,he.count));let Ae=me-ee;if(Ae<0||Ae===1/0)return;we.setup(A,J,H,ie,X);let Ke,ht=Ce;if(X!==null&&(Ke=ve.get(X),ht=fe,ht.setIndex(Ke)),A.isMesh)J.wireframe===!0?(T.setLineWidth(J.wireframeLinewidth*Oe()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(A.isLine){let dt=J.linewidth;dt===void 0&&(dt=1),T.setLineWidth(dt*Oe()),A.isLineSegments?ht.setMode(z.LINES):A.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else A.isPoints?ht.setMode(z.POINTS):A.isSprite&&ht.setMode(z.TRIANGLES);if(A.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ht.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{let dt=A._multiDrawStarts,ye=A._multiDrawCounts,Tt=A._multiDrawCount,st=X?ve.get(X).bytesPerElement:1,_t=Y.get(J).currentProgram.getUniforms();for(let fn=0;fn<Tt;fn++)_t.setValue(z,"_gl_DrawID",fn),ht.render(dt[fn]/st,ye[fn])}else if(A.isInstancedMesh)ht.renderInstances(ee,Ae,A.count);else if(ie.isInstancedBufferGeometry){let dt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ye=Math.min(ie.instanceCount,dt);ht.renderInstances(ee,Ae,ye)}else ht.render(ee,Ae)};function Qr(P,V,ie,J){D!==null&&P.isNodeMaterial&&D.setObject(J,P),ge===!0&&Be.setState(P,ie,!1),P.transparent===!0&&P.side===Vt&&P.forceSinglePass===!1?(P.side=_n,P.needsUpdate=!0,Yn(P,V,J),P.side=ni,P.needsUpdate=!0,Yn(P,V,J),P.side=Vt):Yn(P,V,J)}this.compile=function(P,V,ie=null){ie===null&&(ie=P),D!==null&&D.renderStart(P,V,ie),x=Ee.get(ie),x.init(V),S.push(x),ie.traverseVisible(function(A){A.isLight&&A.layers.test(V.layers)&&(x.pushLight(A),A.castShadow&&x.pushShadow(A))}),P!==ie&&P.traverseVisible(function(A){A.isLight&&A.layers.test(V.layers)&&(x.pushLight(A),A.castShadow&&x.pushShadow(A))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),xe=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,xe),ge===!0&&Be.setGlobalState(this.clippingPlanes,V),D!==null&&qe.render(x.state.shadowsArray,ie,V);let J=new Set;return P.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;let U=A.material;if(U)if(Array.isArray(U))for(let k=0;k<U.length;k++){let H=U[k];Qr(H,ie,V,A),J.add(H)}else Qr(U,ie,V,A),J.add(U)}),x=S.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(P,V,ie=null){let J=this.compile(P,V,ie);return new Promise(A=>{function U(){if(J.forEach(function(k){let X=Y.get(k).currentProgram;(X===void 0||X.isReady())&&J.delete(k)}),J.size===0){A(P);return}setTimeout(U,10)}it.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let ea=null;function Fd(P){ea&&ea(P)}function ta(){Ii.stop()}function Oo(){Ii.start()}let Ii=new Gp;Ii.setAnimationLoop(Fd),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(P){ea=P,ke.setAnimationLoop(P),P===null?Ii.stop():Ii.start()},ke.addEventListener("sessionstart",ta),ke.addEventListener("sessionend",Oo),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(P,V);let ie=ke.enabled===!0&&ke.isPresenting===!0,J=v!==null&&(ue===null||ie)&&v.begin(R,ue);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(V),V=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,V,ue),x=Ee.get(P,S.length),x.init(V),x.state.textureUnits=ne.getTextureUnits(),S.push(x),_e.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ae.setFromProjectionMatrix(_e,di,V.reversedDepth),xe=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,xe),_=Se.get(P,E.length),_.init(),E.push(_),ke.enabled===!0&&ke.isPresenting===!0){let k=R.xr.getDepthSensingMesh();k!==null&&na(k,V,-1/0,R.sortObjects)}na(P,V,0,R.sortObjects),_.finish(),D!==null&&D.updateLights(x.state.lightsArray),R.sortObjects===!0&&_.sort(te,ze),$e=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,$e&&et.addToRenderList(_,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Be.beginShadows();let A=x.state.shadowsArray;if(qe.render(A,P,V),ge===!0&&Be.endShadows(),(J&&v.hasRenderPass())===!1){let k=_.opaque,H=_.transmissive;if(x.setupLights(),V.isArrayCamera){let X=V.cameras;if(H.length>0)for(let K=0,B=X.length;K<B;K++){let he=X[K];ko(k,H,P,he)}$e&&et.render(P);for(let K=0,B=X.length;K<B;K++){let he=X[K];zn(_,P,he,he.viewport)}}else H.length>0&&ko(k,H,P,V),$e&&et.render(P),zn(_,P,V)}ue!==null&&Q===0&&(ne.updateMultisampleRenderTarget(ue),ne.updateRenderTargetMipmap(ue)),J&&v.end(R),P.isScene===!0&&P.onAfterRender(R,P,V),we.resetDefaultState(),Z=-1,re=null,S.pop(),S.length>0?(x=S[S.length-1],ne.setTextureUnits(x.state.textureUnits),ge===!0&&Be.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?_=E[E.length-1]:_=null,D!==null&&D.renderEnd()};function na(P,V,ie,J){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLightProbeGrid)x.pushLightProbeGrid(P);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ae)){J&&Xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(_e);let k=de.update(P),H=P.material;H.visible&&_.push(P,k,H,ie,Xe.z,null,V)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ae))){let k=de.update(P),H=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Xe.copy(P.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Xe.copy(k.boundingSphere.center)),Xe.applyMatrix4(P.matrixWorld).applyMatrix4(_e)),Array.isArray(H)){let X=k.groups;for(let K=0,B=X.length;K<B;K++){let he=X[K],ee=H[he.materialIndex];ee&&ee.visible&&_.push(P,k,ee,ie,Xe.z,he,V)}}else H.visible&&_.push(P,k,H,ie,Xe.z,null,V)}}let U=P.children;for(let k=0,H=U.length;k<H;k++)na(U[k],V,ie,J)}function zn(P,V,ie,J){let{opaque:A,transmissive:U,transparent:k}=P;x.setupLightsView(ie),ge===!0&&Be.setGlobalState(R.clippingPlanes,ie),J&&T.viewport(le.copy(J)),A.length>0&&Zi(A,V,ie),U.length>0&&Zi(U,V,ie),k.length>0&&Zi(k,V,ie),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function ko(P,V,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[J.id]===void 0){let ee=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[J.id]=new Dt(1,1,{generateMipmaps:!0,type:ee?kt:En,minFilter:Ln,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let U=x.state.transmissionRenderTarget[J.id],k=J.viewport||le;U.setSize(k.z*R.transmissionResolutionScale,k.w*R.transmissionResolutionScale);let H=R.getRenderTarget(),X=R.getActiveCubeFace(),K=R.getActiveMipmapLevel();R.setRenderTarget(U),R.getClearColor(rt),We=R.getClearAlpha(),We<1&&R.setClearColor(16777215,.5),R.clear(),$e&&et.render(ie);let B=R.toneMapping;R.toneMapping=gi;let he=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),ge===!0&&Be.setGlobalState(R.clippingPlanes,J),Zi(P,ie,J),ne.updateMultisampleRenderTarget(U),ne.updateRenderTargetMipmap(U),it.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let me=0,Ae=V.length;me<Ae;me++){let Ke=V[me],{object:ht,geometry:dt,material:ye,group:Tt}=Ke;if(ye.side===Vt&&ht.layers.test(J.layers)){let st=ye.side;ye.side=_n,ye.needsUpdate=!0,Ys(ht,ie,J,dt,ye,Tt),ye.side=st,ye.needsUpdate=!0,ee=!0}}ee===!0&&(ne.updateMultisampleRenderTarget(U),ne.updateRenderTargetMipmap(U))}R.setRenderTarget(H,X,K),R.setClearColor(rt,We),he!==void 0&&(J.viewport=he),R.toneMapping=B}function Zi(P,V,ie){let J=V.isScene===!0?V.overrideMaterial:null;for(let A=0,U=P.length;A<U;A++){let k=P[A],{object:H,geometry:X,group:K}=k,B=k.material;B.allowOverride===!0&&J!==null&&(B=J),H.layers.test(ie.layers)&&Ys(H,V,ie,X,B,K)}}function Ys(P,V,ie,J,A,U){D!==null&&A.isNodeMaterial&&D.setObject(P,A),P.onBeforeRender(R,V,ie,J,A,U),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),A.onBeforeRender(R,V,ie,J,P,U),A.transparent===!0&&A.side===Vt&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,R.renderBufferDirect(ie,V,J,A,P,U),A.side=ni,A.needsUpdate=!0,R.renderBufferDirect(ie,V,J,A,P,U),A.side=Vt):R.renderBufferDirect(ie,V,J,A,P,U),P.onAfterRender(R,V,ie,J,A,U)}function Yn(P,V,ie){V.isScene!==!0&&(V=De);let J=Y.get(P),A=x.state.lights,U=x.state.shadowsArray,k=A.state.version,H=Pe.getParameters(P,A.state,U,V,ie,x.state.lightProbeGridArray),X=Pe.getProgramCacheKey(H),K=J.programs;J.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let B=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;J.envMap=be.get(P.envMap||J.environment,B),J.envMapRotation=J.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,K===void 0&&(P.addEventListener("dispose",dn),K=new Map,J.programs=K);let he=K.get(X);if(he!==void 0){if(J.currentProgram===he&&J.lightsStateVersion===k)return oi(P,H),he}else H.uniforms=Pe.getUniforms(P),D!==null&&P.isNodeMaterial&&D.build(P,ie,H),P.onBeforeCompile(H,R),he=Pe.acquireProgram(H,X),K.set(X,he),J.uniforms=H.uniforms;let ee=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ee.clippingPlanes=Be.uniform),oi(P,H),J.needsLights=fh(P),J.lightsStateVersion=k,J.needsLights&&(ee.ambientLightColor.value=A.state.ambient,ee.lightProbe.value=A.state.probe,ee.sunLights.value=A.state.sun,ee.sunLightShadows.value=A.state.sunShadow,ee.directionalLights.value=A.state.directional,ee.directionalLightShadows.value=A.state.directionalShadow,ee.spotLights.value=A.state.spot,ee.spotLightShadows.value=A.state.spotShadow,ee.rectAreaLights.value=A.state.rectArea,ee.ltc_1.value=A.state.rectAreaLTC1,ee.ltc_2.value=A.state.rectAreaLTC2,ee.pointLights.value=A.state.point,ee.pointLightShadows.value=A.state.pointShadow,ee.hemisphereLights.value=A.state.hemi,ee.sunShadowMatrix.value=A.state.sunShadowMatrix,ee.sunShadowCascade.value=A.state.sunShadowCascade,ee.directionalShadowMatrix.value=A.state.directionalShadowMatrix,ee.spotLightMatrix.value=A.state.spotLightMatrix,ee.spotLightMap.value=A.state.spotLightMap,ee.pointShadowMatrix.value=A.state.pointShadowMatrix),J.lightProbeGrid=x.state.lightProbeGridArray.length>0,J.currentProgram=he,J.uniformsList=null,he}function _i(P){if(P.uniformsList===null){let V=P.currentProgram.getUniforms();P.uniformsList=Wr.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function oi(P,V){let ie=Y.get(P);ie.outputColorSpace=V.outputColorSpace,ie.batching=V.batching,ie.batchingColor=V.batchingColor,ie.instancing=V.instancing,ie.instancingColor=V.instancingColor,ie.instancingMorph=V.instancingMorph,ie.skinning=V.skinning,ie.morphTargets=V.morphTargets,ie.morphNormals=V.morphNormals,ie.morphColors=V.morphColors,ie.morphTargetsCount=V.morphTargetsCount,ie.numClippingPlanes=V.numClippingPlanes,ie.numIntersection=V.numClipIntersection,ie.vertexAlphas=V.vertexAlphas,ie.vertexTangents=V.vertexTangents,ie.toneMapping=V.toneMapping}function Ud(P,V){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let ie=0,J=P.length;ie<J;ie++){let A=P[ie];if(A.texture!==null&&A.boundingBox.containsPoint(b))return A}return null}function Bo(P,V,ie,J,A){V.isScene!==!0&&(V=De),ne.resetTextureUnits();let U=V.fog,k=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,H=ue===null?R.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ft.workingColorSpace,X=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,K=be.get(J.envMap||k,X),B=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,he=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ee=!!ie.morphAttributes.position,me=!!ie.morphAttributes.normal,Ae=!!ie.morphAttributes.color,Ke=gi;J.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=R.toneMapping);let ht=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,dt=ht!==void 0?ht.length:0,ye=Y.get(J),Tt=x.state.lights;if(ge===!0&&(xe===!0||P!==re)){let Pt=P===re&&J.id===Z;Be.setState(J,P,Pt)}let st=!1;J.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Tt.state.version||ye.outputColorSpace!==H||A.isBatchedMesh&&ye.batching===!1||!A.isBatchedMesh&&ye.batching===!0||A.isBatchedMesh&&ye.batchingColor===!0&&A._colorsTexture===null||A.isBatchedMesh&&ye.batchingColor===!1&&A._colorsTexture!==null||A.isInstancedMesh&&ye.instancing===!1||!A.isInstancedMesh&&ye.instancing===!0||A.isSkinnedMesh&&ye.skinning===!1||!A.isSkinnedMesh&&ye.skinning===!0||A.isInstancedMesh&&ye.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&ye.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&ye.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&ye.instancingMorph===!1&&A.morphTexture!==null||ye.envMap!==K||J.fog===!0&&ye.fog!==U||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Be.numPlanes||ye.numIntersection!==Be.numIntersection)||ye.vertexAlphas!==B||ye.vertexTangents!==he||ye.morphTargets!==ee||ye.morphNormals!==me||ye.morphColors!==Ae||ye.toneMapping!==Ke||ye.morphTargetsCount!==dt||!!ye.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,ye.__version=J.version);let _t=ye.currentProgram;st===!0&&(_t=Yn(J,V,A),D&&J.isNodeMaterial&&D.onUpdateProgram(J,_t,ye));let fn=!1,zt=!1,Di=!1,Rt=_t.getUniforms(),Wt=ye.uniforms;if(T.useProgram(_t.program)&&(fn=!0,zt=!0,Di=!0),J.id!==Z&&(Z=J.id,zt=!0),ye.needsLights){let Pt=Ud(x.state.lightProbeGridArray,A);ye.lightProbeGrid!==Pt&&(ye.lightProbeGrid=Pt,zt=!0)}if(fn||re!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Rt.setValue(z,"projectionMatrix",P.projectionMatrix),Rt.setValue(z,"viewMatrix",P.matrixWorldInverse);let Qi=Rt.map.cameraPosition;Qi!==void 0&&Qi.setValue(z,Me.setFromMatrixPosition(P.matrixWorld)),N.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),re!==P&&(re=P,zt=!0,Di=!0)}if(ye.needsLights&&(Tt.state.sunShadowMap.length>0&&Rt.setValue(z,"sunShadowMap",Tt.state.sunShadowMap,ne),Tt.state.directionalShadowMap.length>0&&Rt.setValue(z,"directionalShadowMap",Tt.state.directionalShadowMap,ne),Tt.state.spotShadowMap.length>0&&Rt.setValue(z,"spotShadowMap",Tt.state.spotShadowMap,ne),Tt.state.pointShadowMap.length>0&&Rt.setValue(z,"pointShadowMap",Tt.state.pointShadowMap,ne)),A.isSkinnedMesh){Rt.setOptional(z,A,"bindMatrix"),Rt.setOptional(z,A,"bindMatrixInverse");let Pt=A.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Rt.setValue(z,"boneTexture",Pt.boneTexture,ne))}A.isBatchedMesh&&(Rt.setOptional(z,A,"batchingTexture"),Rt.setValue(z,"batchingTexture",A._matricesTexture,ne),Rt.setOptional(z,A,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",A._indirectTexture,ne),Rt.setOptional(z,A,"batchingColorTexture"),A._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",A._colorsTexture,ne));let $i=ie.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&W.update(A,ie,_t),(zt||ye.receiveShadow!==A.receiveShadow)&&(ye.receiveShadow=A.receiveShadow,Rt.setValue(z,"receiveShadow",A.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(Wt.envMapIntensity.value=V.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Dv()),zt){if(Rt.setValue(z,"toneMappingExposure",R.toneMappingExposure),ye.needsLights&&dh(Wt,Di),U&&J.fog===!0&&He.refreshFogUniforms(Wt,U),He.refreshMaterialUniforms(Wt,J,O,se,x.state.transmissionRenderTarget[P.id]),ye.needsLights&&ye.lightProbeGrid){let Pt=ye.lightProbeGrid;Wt.probesSH.value=Pt.texture,Wt.probesMin.value.copy(Pt.boundingBox.min),Wt.probesMax.value.copy(Pt.boundingBox.max),Wt.probesResolution.value.copy(Pt.resolution)}Wr.upload(z,_i(ye),Wt,ne)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Wr.upload(z,_i(ye),Wt,ne),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Rt.setValue(z,"center",A.center),Rt.setValue(z,"modelViewMatrix",A.modelViewMatrix),Rt.setValue(z,"normalMatrix",A.normalMatrix),Rt.setValue(z,"modelMatrix",A.matrixWorld),J.uniformsGroups!==void 0){let Pt=J.uniformsGroups;for(let Qi=0,Ks=Pt.length;Qi<Ks;Qi++){let Od=Pt[Qi];$.update(Od,_t),$.bind(Od,_t)}}return _t}function dh(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.sunLights.needsUpdate=V,P.sunLightShadows.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function fh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(P,V,ie){let J=Y.get(P);J.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Y.get(P.texture).__webglTexture=V,Y.get(P.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){let ie=Y.get(P);ie.__webglFramebuffer=V,ie.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,ie=0){ue=P,q=V,Q=ie;let J=null,A=!1,U=!1;if(P){let H=Y.get(P);if(H.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(z.FRAMEBUFFER,H.__webglFramebuffer),le.copy(P.viewport),Le.copy(P.scissor),Re=P.scissorTest,T.viewport(le),T.scissor(Le),T.setScissorTest(Re),Z=-1;return}else if(H.__webglFramebuffer===void 0)ne.setupRenderTarget(P);else if(H.__hasExternalTextures)ne.rebindTextures(P,Y.get(P.texture).__webglTexture,Y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let B=P.depthTexture;if(H.__boundDepthTexture!==B){if(B!==null&&Y.has(B)&&(P.width!==B.image.width||P.height!==B.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(P)}}let X=P.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(U=!0);let K=Y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(K[V])?J=K[V][ie]:J=K[V],A=!0):P.samples>0&&ne.useMultisampledRTT(P)===!1?J=Y.get(P).__webglMultisampledFramebuffer:Array.isArray(K)?J=K[ie]:J=K,le.copy(P.viewport),Le.copy(P.scissor),Re=P.scissorTest}else le.copy(pe).multiplyScalar(O).floor(),Le.copy(Je).multiplyScalar(O).floor(),Re=mt;if(ie!==0&&(J=L),T.bindFramebuffer(z.FRAMEBUFFER,J)&&T.drawBuffers(P,J),T.viewport(le),T.scissor(Le),T.setScissorTest(Re),A){let H=Y.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,H.__webglTexture,ie)}else if(U){let H=V;for(let X=0;X<P.textures.length;X++){let K=Y.get(P.textures[X]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+X,K.__webglTexture,ie,H)}}else if(P!==null&&ie!==0){let H=Y.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,H.__webglTexture,ie)}Z=-1};function ia(P){let V=Y.get(P);return(V.__readFormat!==P.format||V.__readType!==P.type)&&(V.__readFormat=P.format,V.__readType=P.type,V.__formatReadable=N.textureFormatReadable(P.format),V.__typeReadable=N.textureTypeReadable(P.type)),V}this.readRenderTargetPixels=function(P,V,ie,J,A,U,k,H=0){if(!(P&&P.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let X=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&k!==void 0&&(X=X[k]),X){T.bindFramebuffer(z.FRAMEBUFFER,X);try{let K=P.textures[H],B=K.format,he=K.type;P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+H);let ee=ia(K);if(ee.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-J&&ie>=0&&ie<=P.height-A&&z.readPixels(V,ie,J,A,Ie.convert(B),Ie.convert(he),U)}finally{let K=ue!==null?Y.get(ue).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(P,V,ie,J,A,U,k,H=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let X=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&k!==void 0&&(X=X[k]),X)if(V>=0&&V<=P.width-J&&ie>=0&&ie<=P.height-A){T.bindFramebuffer(z.FRAMEBUFFER,X);let K=P.textures[H],B=K.format,he=K.type;P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+H);let ee=ia(K);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,me),z.bufferData(z.PIXEL_PACK_BUFFER,U.byteLength,z.STREAM_READ),z.readPixels(V,ie,J,A,Ie.convert(B),Ie.convert(he),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ae=ue!==null?Y.get(ue).__webglFramebuffer:null;T.bindFramebuffer(z.FRAMEBUFFER,Ae);let Ke=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await hp(z,Ke,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,me),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,U),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(me),z.deleteSync(Ke),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,ie=0){let J=Math.pow(2,-ie),A=Math.floor(P.image.width*J),U=Math.floor(P.image.height*J),k=V!==null?V.x:0,H=V!==null?V.y:0;ne.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,k,H,A,U),T.unbindTexture()},this.copyTextureToTexture=function(P,V,ie=null,J=null,A=0,U=0){let k,H,X,K,B,he,ee,me,Ae,Ke=P.isCompressedTexture?P.mipmaps[U]:P.image;if(ie!==null)k=ie.max.x-ie.min.x,H=ie.max.y-ie.min.y,X=ie.isBox3?ie.max.z-ie.min.z:1,K=ie.min.x,B=ie.min.y,he=ie.isBox3?ie.min.z:0;else{let Wt=Math.pow(2,-A);k=Math.floor(Ke.width*Wt),H=Math.floor(Ke.height*Wt),P.isDataArrayTexture?X=Ke.depth:P.isData3DTexture?X=Math.floor(Ke.depth*Wt):X=1,K=0,B=0,he=0}J!==null?(ee=J.x,me=J.y,Ae=J.z):(ee=0,me=0,Ae=0);let ht=Ie.convert(V.format),dt=Ie.convert(V.type),ye;V.isData3DTexture?(ne.setTexture3D(V,0),ye=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ne.setTexture2DArray(V,0),ye=z.TEXTURE_2D_ARRAY):(ne.setTexture2D(V,0),ye=z.TEXTURE_2D),T.activeTexture(z.TEXTURE0),T.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let Tt=T.getParameter(z.UNPACK_ROW_LENGTH),st=T.getParameter(z.UNPACK_IMAGE_HEIGHT),_t=T.getParameter(z.UNPACK_SKIP_PIXELS),fn=T.getParameter(z.UNPACK_SKIP_ROWS),zt=T.getParameter(z.UNPACK_SKIP_IMAGES);T.pixelStorei(z.UNPACK_ROW_LENGTH,Ke.width),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ke.height),T.pixelStorei(z.UNPACK_SKIP_PIXELS,K),T.pixelStorei(z.UNPACK_SKIP_ROWS,B),T.pixelStorei(z.UNPACK_SKIP_IMAGES,he);let Di=P.isDataArrayTexture||P.isData3DTexture,Rt=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){let Wt=Y.get(P),$i=Y.get(V),Pt=Y.get(Wt.__renderTarget),Qi=Y.get($i.__renderTarget);T.bindFramebuffer(z.READ_FRAMEBUFFER,Pt.__webglFramebuffer),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let Ks=0;Ks<X;Ks++)Di&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(P).__webglTexture,A,he+Ks),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(V).__webglTexture,U,Ae+Ks)),z.blitFramebuffer(K,B,k,H,ee,me,k,H,z.DEPTH_BUFFER_BIT,z.NEAREST);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(A!==0||P.isRenderTargetTexture||Y.has(P)){let Wt=Y.get(P),$i=Y.get(V);T.bindFramebuffer(z.READ_FRAMEBUFFER,F),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let Pt=0;Pt<X;Pt++)Di?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.__webglTexture,A,he+Pt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Wt.__webglTexture,A),Rt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$i.__webglTexture,U,Ae+Pt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$i.__webglTexture,U),A!==0?z.blitFramebuffer(K,B,k,H,ee,me,k,H,z.COLOR_BUFFER_BIT,z.NEAREST):Rt?z.copyTexSubImage3D(ye,U,ee,me,Ae+Pt,K,B,k,H):z.copyTexSubImage2D(ye,U,ee,me,K,B,k,H);T.bindFramebuffer(z.READ_FRAMEBUFFER,null),T.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rt?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(ye,U,ee,me,Ae,k,H,X,ht,dt,Ke.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(ye,U,ee,me,Ae,k,H,X,ht,Ke.data):z.texSubImage3D(ye,U,ee,me,Ae,k,H,X,ht,dt,Ke):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,U,ee,me,k,H,ht,dt,Ke.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,U,ee,me,Ke.width,Ke.height,ht,Ke.data):z.texSubImage2D(z.TEXTURE_2D,U,ee,me,k,H,ht,dt,Ke);T.pixelStorei(z.UNPACK_ROW_LENGTH,Tt),T.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),T.pixelStorei(z.UNPACK_SKIP_PIXELS,_t),T.pixelStorei(z.UNPACK_SKIP_ROWS,fn),T.pixelStorei(z.UNPACK_SKIP_IMAGES,zt),U===0&&V.generateMipmaps&&z.generateMipmap(ye),T.unbindTexture()},this.initRenderTarget=function(P){Y.get(P).__webglFramebuffer===void 0&&ne.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ne.setTextureCube(P,0):P.isData3DTexture?ne.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ne.setTexture2DArray(P,0):ne.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){q=0,Q=0,ue=null,T.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var wo=new I;function ri(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;wo.copy(e),wo[n]=0,wo.normalize();let c=.5*a/(a+o),h=1-wo.angleTo(i)/l;return Math.sign(wo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Bt=class i extends an{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,M=new I,m=.5/a;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:M.set(1,0,0),f[y+0]=ri(M,c,"z","y",r,n),f[y+1]=1-ri(M,c,"y","z",r,t);break;case 1:M.set(-1,0,0),f[y+0]=1-ri(M,c,"z","y",r,n),f[y+1]=1-ri(M,c,"y","z",r,t);break;case 2:M.set(0,1,0),f[y+0]=1-ri(M,c,"x","z",r,e),f[y+1]=ri(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),f[y+0]=1-ri(M,c,"x","z",r,e),f[y+1]=1-ri(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),f[y+0]=1-ri(M,c,"x","y",r,e),f[y+1]=1-ri(M,c,"y","x",r,t);break;case 5:M.set(0,0,-1),f[y+0]=ri(M,c,"x","y",r,e),f[y+1]=1-ri(M,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Lv=Object.freeze({width:1.345,length:1.964,height:.05,legs:8});function Yp(i,e=new Ue){let t=[],n=new I;i.updateWorldMatrix(!0,!0);let s=-1/0;i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry.attributes.position,l=new Ue().multiplyMatrices(e,a.matrixWorld);for(let c=0;c<o.count;c++)n.fromBufferAttribute(o,c).applyMatrix4(l),s=Math.max(s,n.z)}),i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Ue().multiplyMatrices(e,a.matrixWorld);for(let u=0;u<(c?.count||l.count);u+=3){let d=[];for(let f=0;f<3;f++)n.fromBufferAttribute(l,c?c.getX(u+f):u+f).applyMatrix4(h),d.push(n.clone());if(d.every(f=>f.z>s-.014&&Math.abs(f.x)<.09))for(let f of d)t.push(f.x,f.y,f.z)}});let r=new ot;return r.setAttribute("position",new Ge(t,3)),r.computeVertexNormals(),r}function Ci(i,e,t,n,s=.002){let r=new Te(new Bt(...e,2,Math.min(s,...e.map(a=>a/3))),n);return r.position.set(...t),r.castShadow=r.receiveShadow=!0,i.add(r),r}function Kp(i,e=!1){let t=new je;t.name=e?"Slimline II tall reference":"Slimline II reference";let{width:n,length:s}=Lv,r=e?1.88:1.83,a=-.62;for(let l of[-n/2+.016,n/2-.016])Ci(t,[.032,.05,s],[l,r,a],i.darkmetal),Ci(t,[.006,.003,s-.04],[l,r+.026,a],i.trim,5e-4);for(let l of[-1,1])Ci(t,[n-.032,.05,.032],[0,r,a+l*(s/2-.016)],i.darkmetal);for(let l=0;l<10;l++){let c=a-s/2+.1+l*(s-.2)/9;Ci(t,[n-.064,.024,.09],[0,r-.006,c],i.darkmetal),Ci(t,[n-.08,.003,.006],[0,r+.007,c],i.trim,5e-4)}for(let l of[-1,1])for(let c of[-1.47,-.87,-.27,.27]){let h=r-.025-1.695,u=Ci(t,[.026,h,.1],[l*.675,1.695+h/2,c],i.darkmetal);u.name="Gutter mounting leg",u.rotation.z=l*.29,Ci(t,[.09,.018,.115],[l*.712,1.69,c],i.rubber),Ci(t,[.018,.052,.103],[l*.751,1.672,c],i.darkmetal);for(let d of[-.015,.015]){let f=new Te(new Gt(.006,.006,.02,6),i.metal);f.rotation.z=Math.PI/2,f.position.set(l*.765,1.691+d,c),t.add(f)}}let o=Ci(t,[n-.08,.092,.009],[0,r-.075,a+s/2-.015],i.darkmetal);return o.rotation.x=-.48,t}function Jp(i){let e=new je;e.name="Contoured four-door rain visors";let t=[[[.35,1.641],[-.316,1.641],[-.316,1.598],[.326,1.598],[.458,1.362],[.492,1.382]],[[-.435,1.641],[-1.184,1.641],[-1.184,1.595],[-.435,1.595]]];for(let n of[-1,1])for(let s of t){let r=[],a=[],o=s.length;for(let u of[0,.004])for(let[d,f]of s)r.push(n*(.746-(f-1.14)*.105+.018+u),f,d);let l=s.map(([u,d])=>new oe(u,d));for(let[u,d,f]of Jn.triangulateShape(l,[]))a.push(u,d,f,f+o,d+o,u+o);for(let u=0;u<o;u++){let d=(u+1)%o;a.push(u,d,d+o,u,d+o,u+o)}let c=new ot;c.setAttribute("position",new Ge(r,3)),c.setIndex(a),c.computeVertexNormals();let h=new Te(c,i);h.castShadow=!1,e.add(h)}return e}function Zp(i,e){let t=new je;t.name="Moulded spare-wheel centre cover",t.position.z=.1;let n=[[0,.035],[.18,.035],[.215,.031],[.232,.02],[.239,.008],[.239,-.017],[.23,-.022]],s=new Te(new mi(n.toReversed().map(a=>new oe(...a)),96),i.trim);s.name="Spare cover shell",s.rotation.x=-Math.PI/2,s.position.set(0,.995,-2.045),s.castShadow=!0,t.add(s);let r=Ci(t,[.36,.02,.005],[0,.922,-2.083],i.darkmetal,.002);if(r.rotation.z=-.04,e?.attributes.position.count){let a=e.clone();a.computeBoundingBox();let o=a.boundingBox.getCenter(new I);a.translate(-o.x,-o.y,-o.z),a.scale(.63,.63,.63),a.rotateY(Math.PI),a.translate(0,1.075,-2.086);let l=new Te(a,i.chrome);l.name="Spare cover Suzuki emblem",t.add(l)}return t}function zc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ot,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$p(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][d]);let g=$p(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function $p(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new $t(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let M=h.getComponent(d,g);o.setComponent(d+u,g,M)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Qp(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,w=o.length;y<w;y++){let b=o[y],_=i.attributes[b];l[b]=new _.constructor(new _.array.constructor(_.count*_.itemSize),_.itemSize,_.normalized);let x=i.morphAttributes[b];x&&(c[b]||(c[b]=[]),x.forEach((E,S)=>{let v=new E.array.constructor(E.count*E.itemSize);c[b][S]=new E.constructor(v,E.itemSize,E.normalized)}))}let f=e*.5,g=Math.log10(1/e),M=Math.pow(10,g),m=f*M;for(let y=0;y<r;y++){let w=n?n.getX(y):y,b="";for(let _=0,x=o.length;_<x;_++){let E=o[_],S=i.getAttribute(E),v=S.itemSize;for(let R=0;R<v;R++)b+=`${Math.trunc(S[u[R]](w)*M+m)},`}if(b in t)h.push(t[b]);else{for(let _=0,x=o.length;_<x;_++){let E=o[_],S=i.getAttribute(E),v=i.morphAttributes[E],R=S.itemSize,C=l[E],D=c[E];for(let L=0;L<R;L++){let F=u[L],G=d[L];if(C[G](a,S[F](w)),v)for(let q=0,Q=v.length;q<Q;q++)D[q][G](a,v[q][F](w))}}t[b]=a,h.push(a),a++}}let p=i.clone();for(let y in i.attributes){let w=l[y];if(p.setAttribute(y,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),y in c)for(let b=0;b<c[y].length;b++){let _=c[y][b];p.morphAttributes[y][b]=new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)}}return p.setIndex(h),p}function zu(i,e){if(e===gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zr||e===yo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===zr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var em="https://www.skinny-jim.com/shop/p/",tm="https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html",Nv=Object.freeze({skinnyjim_backbone:{sourceURL:em+"backbone-rear-door-cargo-mount",bodyStyles:["3door","5door"],width:.315,height:.585,doorClearance:.112},skinnyjim_jerry_tray:{sourceURL:em+"jerry-can-gas-cargo-carrier",bodyStyles:["3door","5door"],internalWidth:.37,internalDepth:.205,upstand:.075,requires:["skinnyjim_backbone"]},suzuki_nomade_flatrack:{sourceURL:tm,bodyStyles:["5door"],width:1.43,length:1.509,height:.177},suzuki_nomade_steelwheel:{sourceURL:tm,bodyStyles:["5door"],diameter:.381,beadWidth:.1397,offset:null}});function zs(i,e,t,n,s=[0,0,0]){let r=new Te(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function Rn(i,e,t,n,s,r=.002){return zs(i,new Bt(...e,2,Math.min(r,...e.map(a=>a/3))),n,s,t)}function Xr(i,e,t,n,s=.006){let r=new en,a=i-t/2,o=e-n/2;return s=Math.min(s,t/2,n/2),r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function Gc(i,e,t,n,s=[0,0,0],r=.004){return zs(i,new Tn(e,{depth:r,bevelEnabled:!0,bevelSize:7e-4,bevelThickness:7e-4,bevelSegments:1,curveSegments:6}),t,n,s)}function To(i,e,t,n,s){let r=zs(i,new Gt(.0055,.0055,.006,6),s,"Stainless mounting bolt",[e,t,n]);return r.rotation.x=Math.PI/2,r}function Hu(i,e){return i.name=e,i.userData.cataloguePart={...Nv[e],id:e,previewKind:"representative",disclosure:"Locally authored from public product photos and dimensions; not exact CAD or certified fitment."},i}function nm(i){let e=Hu(new je,"skinnyjim_backbone");e.position.z=.078;let t=[[-.1575,-.2925],[.095,-.2925],[.1575,-.2475],[.1,-.17],[.08,-.07],[.08,.07],[.105,.18],[.1575,.215],[.035,.2925],[-.1575,.2925]],n=new Ot(t.map(a=>new oe(...a)));for(let a of[-.19,-.04,.12,.22])n.holes.push(Xr(-.045,a,.031,a===-.04?.072:.031));for(let a of[-.24,.15])for(let o of[-.115,-.077,-.039]){let l=new en;l.absarc(o,a,.0035,0,Math.PI*2,!1),n.holes.push(l)}let s=Gc(e,n,i.darkmetal,"Backbone perforated main plate",[-.5275,1.035,-1.928]);s.userData.publishedDimensions={width:.315,height:.585},Rn(e,[.004,.585,.018],[-.687,1.035,-1.918],i.darkmetal,"Backbone folded hinge edge");for(let a of[.76,1.24])Rn(e,[.055,.045,.112],[-.665,a,-1.868],i.darkmetal,"Door hinge standoff"),To(e,-.665,a,-1.935,i.metal);let r=new Ot([[-.41,-.15],[-.08,-.15],[-.08,.15],[-.41,.15]].map(a=>new oe(...a)));for(let a of[-.085,0,.085])r.holes.push(Xr(-.27,a,.027,.033));Gc(e,r,i.darkmetal,"Spare mount attachment bridge",[0,1.005,-1.841]),Rn(e,[.04,.3,.086],[-.4,1.005,-1.882],i.darkmetal,"Bridge folded offset");for(let a of[.9,1.11])To(e,-.12,a,-1.848,i.metal);for(let a of[.8,1.28])To(e,-.49,a,-1.935,i.metal);return e}function im(i){let e=Hu(new je,"skinnyjim_jerry_tray"),t=.37,n=.205,s=.075,r=Rn(e,[t,.004,n],[0,0,0],i.darkmetal,"Jerry tray floor"),a=Rn(e,[t-.014,.003,n-.014],[0,.0035,0],i.rubber,"Neoprene tray pad");for(let o of[-1,1]){let l=new Ot(Xr(0,s/2,t,s,.012).getPoints(8));for(let u of[-.135,0,.135])l.holes.push(Xr(u,.039,u===0?.09:.035,.024));Gc(e,l,i.darkmetal,"Slotted tray upstand",[0,.002,o*(n/2+.002)]);let c=new Ot(Xr(0,s/2,n,s,.012).getPoints(8));c.holes.push(Xr(0,.04,.072,.025));let h=Gc(e,c,i.darkmetal,"Slotted tray end",[o*(t/2+.002),.002,0]);h.rotation.y=Math.PI/2}for(let o of[-.12,.12])Rn(e,[.025,.0025,n-.01],[o,.006,0],i.canvas,"Webbing strap"),Rn(e,[.034,.009,.029],[o,.011,-.032],i.trim,"Cam buckle"),Rn(e,[.019,.003,.015],[o,.016,-.032],i.metal,"Buckle lever");for(let o of[-.1,.1])Rn(e,[.035,.066,.004],[o,.036,n/2+.009],i.darkmetal,"Tray mounting flange"),To(e,o,.049,n/2+.014,i.metal);return e.position.set(-.52,.843,-1.961),r.userData.internalFootprint=[t,n],a.userData.notIncluded="Fuel container",e}function sm(i){let e=Hu(new je,"suzuki_nomade_flatrack"),t=1.43,n=1.509,s=1.8,r=-.52;for(let a of[-t/2+.019,t/2-.019])Rn(e,[.038,.035,n],[a,s,r],i.darkmetal,"OEM rack perimeter",.008);for(let a of[-1,1])Rn(e,[t-.038,.035,.038],[0,s,r+a*(n/2-.019)],i.darkmetal,"OEM rack perimeter",.008);for(let a=0;a<5;a++){let o=r-n/2+.16+a*(n-.32)/4;Rn(e,[t-.075,.024,.12],[0,s-.004,o],i.darkmetal,"OEM rack slat");for(let l of[-.037,0,.037])Rn(e,[t-.086,.002,.005],[0,s+.009,o+l],i.trim,"Slat anti-slip channel",5e-4)}for(let a of[-1,1])for(let o of[r-n/2+.1,r,r+n/2-.1]){let l=Rn(e,[.028,.142,.084],[a*.681,s-.088,o],i.darkmetal,"OEM gutter mounting leg");l.rotation.z=a*.22,Rn(e,[.065,.013,.09],[a*.714,s-.153,o],i.rubber,"Gutter pad"),Rn(e,[.012,.046,.08],[a*.752,s-.136,o],i.darkmetal,"Gutter clamp");let c=To(e,0,0,0,i.metal);c.rotation.set(0,0,Math.PI/2),c.position.set(a*.763,s-.136,o)}return e}function Fv(i){let e=new je;e.name="Nomade pressed steel wheel";let t=new Ot;t.absarc(0,0,.179,0,Math.PI*2,!1);let n=new en;n.absarc(0,0,.042,0,Math.PI*2,!1),t.holes.push(n);for(let b=0;b<10;b++){let _=b*Math.PI/5,x=new en;x.absellipse(Math.cos(_)*.127,Math.sin(_)*.127,.024,.027,_,_+Math.PI*2,!1),t.holes.push(x)}for(let b=0;b<5;b++){let _=b*Math.PI*2/5,x=new en;x.absarc(Math.cos(_)*.06985,Math.sin(_)*.06985,.008,0,Math.PI*2,!1),t.holes.push(x)}let s=new Tn(t,{depth:.003,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:12}),r=[],a=[],o=[],l=s.attributes.position,c=s.attributes.normal,h=s.attributes.uv,u=(b,_)=>b.map((x,E)=>(x+_[E])/2),d=(b,_,x,E=0)=>{let S=(v,R)=>Math.hypot(v[0]-R[0],v[1]-R[1],v[2]-R[2]);if(E<4&&Math.max(S(b,_),S(_,x),S(x,b))>.028){let v=u(b,_),R=u(_,x),C=u(x,b);d(b,v,C,E+1),d(v,_,R,E+1),d(C,R,x,E+1),d(v,R,C,E+1);return}for(let v of[b,_,x])r.push(...v.slice(0,3)),a.push(...v.slice(3,6)),o.push(...v.slice(6))};for(let b=0;b<l.count;b+=3)d(...[0,1,2].map(_=>[l.getX(b+_),l.getY(b+_),l.getZ(b+_),c.getX(b+_),c.getY(b+_),c.getZ(b+_),h.getX(b+_),h.getY(b+_)]));let f=new ot;f.setAttribute("position",new Ge(r,3)),f.setAttribute("normal",new Ge(a,3)),f.setAttribute("uv",new Ge(o,2));let g=Qp(f,1e-6);s.dispose(),f.dispose();let M=g.attributes.position,m=g.attributes.normal;for(let b=0;b<M.count;b++){let _=M.getX(b),x=M.getY(b),E=Math.hypot(_,x),S=Math.min(1,Math.max(0,(E-.067)/.112));M.setZ(b,M.getZ(b)-.023*Math.sin(S*Math.PI)**2);let v=E>.067&&E<.179?-.023*Math.PI/.112*Math.sin(2*Math.PI*S):0,R=m.getX(b)-v*_/(E||1)*m.getZ(b),C=m.getY(b)-v*x/(E||1)*m.getZ(b),D=m.getZ(b),L=Math.hypot(R,C,D)||1;m.setXYZ(b,R/L,C/L,D/L)}zs(e,g,i,"Ten-hole pressed steel disc");let p=[[.177,-.014],[.181,-.007],[.187,.005],[.1905,.007],[.1905,.002],[.187,-.003],[.18,-.015],[.173,-.045],[.169,-.083],[.181,-.132],[.1905,-.133]],y=zs(e,new mi(p.map(b=>new oe(...b)),96),i,"Rolled steel lip and barrel");y.rotation.x=Math.PI/2;for(let b=0;b<5;b++){let _=b*Math.PI*2/5,x=zs(e,new Gt(.0068,.0068,.01,6),i,"Steel wheel lug",[Math.cos(_)*.06985,Math.sin(_)*.06985,.006]);x.rotation.x=Math.PI/2}let w=zs(e,new Gt(.035,.035,.029,48),i,"Exposed centre hub",[0,0,-.004]);return w.rotation.x=Math.PI/2,e}var Gu=new WeakMap;function Vu(i,e=!1){if(!i?.traverse)return 0;let t=Gu.get(i);if(!e){if(!t)return 0;for(let[s,r]of t.hidden)s.visible=r;for(let s of t.added)s.removeFromParent(),s.traverse(r=>r.geometry?.dispose());return t.material.dispose(),Gu.delete(i),t.added.length}if(t)return t.added.length;t={hidden:[],added:[],material:new Ze({name:"CatalogueSteelWheel",color:"#303438",roughness:.58,metalness:.3})};let n=[];i.traverse(s=>{(["StockWheels","AllTerrainWheels"].includes(s.name)||!s.name&&s.children.some(r=>r.isMesh&&r.material?.name==="TyreRubber"))&&n.push(s)});for(let s of n){let r=!!s.name;s.updateWorldMatrix(!0,!0);let a=new Xt,o=new Map,l=new I,c=s.matrixWorld.clone().invert();if(s.traverse(d=>{if(!d.isMesh||(["MachinedAlloy","WheelGunmetal"].includes(d.material?.name)&&(t.hidden.push([d,d.visible]),d.visible=!1),d.material?.name!=="TyreRubber"))return;let f=d.geometry.attributes.position,g=c.clone().multiply(d.matrixWorld);for(let M=0;M<f.count;M++)if(l.fromBufferAttribute(f,M).applyMatrix4(g),a.expandByPoint(l),r){let m=`${Math.sign(l.x)},${Math.sign(l.z)}`;o.has(m)||o.set(m,new Xt),o.get(m).expandByPoint(l)}}),a.isEmpty())continue;let h=a.getCenter(new I),u=r?[...o.values()].map(d=>{let f=d.getCenter(new I);return{side:Math.sign(f.x),x:f.x,y:f.y,z:f.z}}):[{side:Math.sign(s.parent?.position.x||1),x:h.x,y:h.y,z:h.z}];for(let d of u){let f=Fv(t.material);f.position.set(d.x+d.side*.086,d.y,d.z),f.rotation.y=d.side*Math.PI/2,s.add(f),t.added.push(f)}}return t.added.length?(Gu.set(i,t),t.added.length):(t.material.dispose(),0)}function rm(i){return Vu(i,!1)}var Uv=Object.freeze(["canvas","tweed","houndstooth","leather"]),Gs=i=>Uv.includes(i)?i:"canvas";function Hs(i){return i.traverse(e=>{if(!e.isMesh||!e.material?.userData.ownsTextures)return;let t=e.geometry.attributes.position,n=e.geometry.attributes.normal,s=e.geometry.attributes.uv;if(!(!s||!n)){for(let r=0;r<t.count;r++){let a=Math.abs(n.getX(r)),o=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r));s.setXY(r,a>o&&a>l?t.getZ(r):t.getX(r),o>a&&o>l?t.getZ(r):t.getY(r))}s.needsUpdate=!0}}),i}function Ov(i="canvas"){i=Gs(i);let e=256,t=new Uint8Array(e*e*4),n=new Uint8Array(e*e*4),s=741;for(let a=0;a<e;a++)for(let o=0;o<e;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=s/4294967296-.5,c=Math.sin(o*Math.PI/2),h=Math.cos(a*Math.PI/2),u=Math.floor(o/8),d=Math.floor(a/8),f=222+l*16+c*8+h*6,g=238,M=128+c*19+h*16+l*22;if(i==="houndstooth"&&(f=(((u+d)%4<2?u%8<4:d%8<4)?64:238)+c*7+h*5+l*12),i==="tweed"&&(f=174+((u+d)%3===0?37:0)+c*16+h*14+l*28),i==="leather"){let p=l>.44?-36:0;f=231+l*9+p*.25,M=141+l*40+p,g=157+l*28}let m=(a*e+o)*4;for(let p=0;p<3;p++)t[m+p]=nn.clamp(f,0,255),n[m+p]=nn.clamp(p===1?g:M,0,255);t[m+3]=n[m+3]=255}function r(a,o){let l=new wn(a,e,e);return l.colorSpace=o,l.wrapS=l.wrapT=Qt,l.repeat.set(i==="leather"?10:i==="houndstooth"?5:14,i==="leather"?10:i==="houndstooth"?5:14),l.generateMipmaps=!0,l.minFilter=Ln,l.anisotropy=4,l.needsUpdate=!0,l}return{map:r(t,bt),bump:r(n,xi)}}function Xn(i="canvas",e="#a38b69"){i=Gs(i);let t=Ov(i),n=new Ht({name:"UpgradeFabric_"+i,color:e,map:t.map,bumpMap:t.bump,bumpScale:i==="leather"?18e-5:45e-5,roughnessMap:t.bump,roughness:i==="leather"?.85:1,metalness:0,sheen:i==="leather"?0:.25,sheenRoughness:.85,sheenColor:"#aaa69c",clearcoat:i==="leather"?.08:0,envMapIntensity:.25});return n.userData.ownsTextures=!0,n.addEventListener("dispose",()=>{t.map.dispose(),t.bump.dispose()}),n}var kv=Object.freeze({mod_reardoor_molle:{sourceURL:"https://www.mod.equipment/products/molly",bodyStyles:["3door","5door"],panelWidth:.3,panelHeight:.2675,cutout:.025,requires:"Screws into rear-door plastic trim; check vehicle-specific installation."},mod_halfmolly_5door:{sourceURL:"https://www.mod.equipment/products/half-molly-set-jimny-4-xl",bodyStyles:["5door"],panelWidth:.235,panelHeight:.2,requires:"Existing lower M6 points plus upper screws into plastic window trim."},exploresetups_drawer_5door:{sourceURL:"https://exploresetups.com/products/jimny-xl-5-door-drawer-system",bodyStyles:["5door"],width:1.11,depth:.46,height:.25,requires:"Matching Jimny XL false floor, sold separately; no sleeping platform shown."}});function gs(i,e,t,n,s=[0,0,0]){let r=new Te(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function bn(i,e,t,n,s,r,a,o,l,c=.002){return gs(i,new Bt(e,t,n,2,Math.min(c,e/3,t/3,n/3)),o,l,[s,r,a])}function Wu(i,e,t,n,s=.003){let r=new en,a=i-t/2,o=e-n/2;return r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function am(i,e,t,n){let s=new Ot(Wu(0,0,i,e,.008).getPoints(8));for(let r=0;r<t;r++)for(let a=0;a<n;a++)s.holes.push(Wu((r-(t-1)/2)*.038,(a-(n-1)/2)*.037,.025,.025));return new Tn(s,{depth:.002,bevelEnabled:!0,bevelSize:45e-5,bevelThickness:45e-5,bevelSegments:1,curveSegments:3})}function om(i,e,t,n,s){let r=gs(i,new Gt(.0045,.0045,.003,6),s,"Panel screw",[e,t,n]);return r.rotation.x=Math.PI/2,r}function qu(i){let e=new je;return e.name=i,e.userData.cataloguePart={id:i,...kv[i],previewKind:"representative",disclosure:"Original photo/dimension-guided approximation, not manufacturer CAD or certified fitment."},e}function Hc(i,e="5door"){let t=qu("mod_reardoor_molle"),n=-1.669+(e==="3door"?.17:0);for(let s of[-.172,.172]){let r=gs(t,am(.3,.2675,7,6),i.darkmetal,"Rear-door perforated panel",[s,.955,n+.012]);r.userData.publishedSize=[.3,.2675];for(let a of[-.1375,.1375])for(let o of[-.114,.114])bn(t,.014,.014,.012,s+a,.955+o,n+.005,i.rubber,"Rear-door panel spacer"),om(t,s+a,.955+o,n+.017,i.metal)}return t}function Vc(i){let e=qu("mod_halfmolly_5door");for(let t of[-1,1]){let n=new je;n.position.set(t*.651,1.24,-1.36),n.rotation.y=t*Math.PI/2,e.add(n);let s=gs(n,am(.235,.2,5,4),i.darkmetal,"Rear-window pocket panel");s.userData.publishedSize=[.235,.2],bn(n,.235,.003,.042,0,-.098,.02,i.darkmetal,"Folded pocket base");for(let r of[-.112,.112]){bn(n,.012,.2,.042,r,0,.02,i.darkmetal,"Pocket side return"),om(n,r,.085,.006,i.metal);let a=gs(n,new jt(.009,.002,6,18),i.metal,"Lower M6 lashing eye",[r,-.087,.012]);a.rotation.x=.3}}return e}function Wc(i,{open:e=!1}={}){let t=qu("exploresetups_drawer_5door"),n=Xn("tweed","#373b3d");n.name="DrawerCharcoalCarpet",n.roughness=1,n.metalness=0,n.envMapIntensity=.15;let s=-1.445,r=.699,a=r+.25;bn(t,1.11,.018,.46,0,r-.013,s,i.trim,"Required false-floor mounting surface");let o=bn(t,.83,.015,.46,0,a-.0075,s,n,"Carpeted drawer top");o.userData.disposableMaterial=!0;for(let l of[-.4075,0,.4075])bn(t,.015,.235,.46,l,r+.1175,s,n,"Drawer carcass partition");bn(t,.83,.015,.46,0,r+.0075,s,n,"Drawer carcass base"),bn(t,.83,.235,.015,0,r+.1175,s+.2225,n,"Drawer rear carcass");for(let l of[-.2075,.2075]){bn(t,.389,.214,.016,l,r+.122,s-.228-(e?.3:0),n,"Flush drawer front");let c=new je;c.name="DrawerLatchAssembly",c.position.z=e?-.3:0,t.add(c),bn(c,.071,.052,.004,l,r+.12,s-.239,i.metal,"Recessed stainless latch surround",.006),bn(c,.054,.036,.005,l,r+.12,s-.242,i.trim,"Latch recess",.004),bn(c,.035,.011,.006,l,r+.12,s-.247,i.metal,"Folding latch pull",.003);let h=gs(c,new Gt(.005,.005,.003,16),i.metal,"Drawer key cylinder",[l+.022,r+.12,s-.245]);if(h.rotation.x=Math.PI/2,e){bn(t,.37,.012,.43,l,r+.025,s-.3,n,"Open drawer tray");for(let u of[-.182,.182])bn(t,.012,.18,.43,l+u,r+.115,s-.3,n,"Open drawer side"),bn(t,.008,.024,.35,l+u,r+.08,s-.24,i.metal,"Telescopic drawer slide");bn(t,.37,.18,.012,l,r+.115,s-.09,n,"Open drawer rear")}}for(let l of[-1,1]){let c=new Ot(Wu(l*.485,0,.14,.46,.012).getPoints(6)),h=new en;h.absarc(l*.485,-.09,.008,0,Math.PI*2),c.holes.push(h);let u=gs(t,new Tn(c,{depth:.015,bevelEnabled:!1}),n,"Removable carpeted wing",[0,a-.015,s]);u.rotation.x=-Math.PI/2,bn(t,.14,.235,.015,l*.485,r+.1175,s-.2225,n,"Side wing fixed face");for(let d of[s-.17,s+.17]){let f=gs(t,new jt(.014,.003,8,24),i.metal,"Cargo tie-down ring",[l*.36,a+.008,d]);f.rotation.x=Math.PI/2}}return bn(t,.828,.018,.012,0,a-.006,s-.231,i.metal,"Aluminium protective front edge"),t.userData.publishedEnvelope=[1.11,.25,.46],Hs(t)}var Bv=Object.freeze({body:"5door",rearDeckWidth:1.11,rearDeckLength:1.165,extensionLength:.685,bedLength:1.83,bedWidth:.65,bedThickness:.075});function Kt(i,e,t,n,s,r,a,o,l,c=.005){let h=new Te(new Bt(t,n,s,2,Math.min(c,t/3,n/3,s/3)),l);return h.name=e,h.position.set(r,a,o),h.castShadow=h.receiveShadow=!0,i.add(h),h}function jr(i,e){return i.userData.ownedMaterials??=[],i.userData.ownedMaterials.push(e),e}function lm(i,e,t,n=.0012){let s=new Qn,r=e.map(o=>new I(...o));for(let o=1;o<r.length;o++)s.add(new $n(r[o-1],r[o]));let a=new Te(new Wn(s,e.length*4,n,5,!1),t);return a.name="Stitched piping",i.add(a),a}function cm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new je;s.name="UpholsteredDoorInserts";let r=jr(s,Xn(Gs(t),n)),a=jr(s,new Ze({color:"#d5c6aa",roughness:.9}));for(let o of[-1,1])for(let[l,c]of e==="3door"?[[0,1.04]]:[[.1,.74],[-.84,.6]]){let h=o*.676,u=Kt(s,"Padded door insert",.012,.185,c,h,.875,l,r,.012);Kt(s,"Upholstered upper door strip",.012,.028,c,h,1.088,l,r,.006),Kt(s,"Wrapped door armrest",.077,.047,.15,o*.66,1.005,l-.06,r,.013);let d=u.geometry.attributes.uv,f=u.geometry.attributes.position;for(let w=0;w<d.count;w++)d.setXY(w,f.getZ(w),f.getY(w));d.needsUpdate=!0;let g=o*.668,M=.796,m=.954,p=l-c/2+.018,y=l+c/2-.018;lm(s,[[g,M,p],[g,m,p],[g,m,y],[g,M,y],[g,M,p]],a,.0012);for(let w=p+.02;w<y-.01;w+=.011)Kt(s,"Door top stitch",8e-4,.0012,.0045,o*.6675,m-.006,w,a,3e-4)}return Hs(s)}function hm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new je;s.name="RearSeatUpholstery";let r=jr(s,Xn(t,n)),a=e==="3door"?.17:0;for(let o of[-.29,.29]){let l=Kt(s,"Rear seat patterned back insert",.45,.285,.008,o,1.035,-.995+a,r,.003),c=Kt(s,"Rear seat patterned cushion insert",.45,.008,.29,o,.879,-.83+a,r,.003);for(let h of[l,c]){let u=h.geometry.attributes.position,d=h.geometry.attributes.uv;for(let f=0;f<u.count;f++)d.setXY(f,u.getX(f),h===l?u.getY(f):u.getZ(f));d.needsUpdate=!0}}return s}function um(i,{camp:e=!1,drawers:t=!1}={}){let n=new je;n.name="TouringInterior",n.userData.layout=Bv;let s=jr(n,Xn("tweed","#45484a")),r=jr(n,Xn("canvas","#466278")),a=jr(n,new Ze({color:"#b9c1b3",roughness:1}));n.add(Wc(i,{open:t}),Vc(i),Hc(i));for(let l of[-.279,.279]){let c=Kt(n,"Split carpeted rear platform",.552,.015,.705,l,.9415,-.8625,s,.004);c.userData.publishedDimensions=[.555,.705,.015];for(let h of[-1.12,-.61])Kt(n,"Bolted platform support",.025,.235,.03,l,.817,h,i.darkmetal,.003);Kt(n,"Platform aluminium edge",.545,.018,.009,l,.942,-.5075,i.metal,.002)}for(let l of[-.29,.29])Kt(n,"Folded rear seat back",.56,.09,.41,l,.87,-.87,i.seat,.025);let o=Kt(n,"Strapped touring storage case",.37,.22,.42,-.3,1.067,-.86,i.trim,.024);Kt(n,"Storage case lid",.38,.024,.43,-.3,1.185,-.86,i.darkmetal,.008);for(let l of[-.43,-.17])Kt(n,"Case restraint webbing",.022,.003,.46,l,1.2,-.86,i.seat,.001),Kt(n,"Case restraint side",.022,.24,.003,l,1.075,-1.083,i.seat,.001),Kt(n,"Case buckle",.032,.026,.008,l,1.12,-1.089,i.metal,.002);if(e){Kt(n,"Custom passenger bed extension",.68,.018,.685,.279,.94,-.1675,s,.005);for(let c of[-.03,.58])Kt(n,"Extension support leg",.022,.245,.022,c,.808,.13,i.metal,.003),Kt(n,"Support rubber foot",.045,.012,.05,c,.68,.13,i.rubber,.004);Kt(n,"Single sleeping mat 183 x 65 x 7.5 cm",.65,.075,1.83,.28,.9865,-.745,r,.029),lm(n,[[-.04,.976,-1.63],[.6,.976,-1.63],[.6,.976,.14],[-.04,.976,.14],[-.04,.976,-1.63]],a,.0018),Kt(n,"Soft camp pillow",.4,.075,.25,.28,1.055,.005,r,.035);let l=new Te(new Gt(.014,.014,.005,24),i.trim);l.name="Sleeping mat valve",l.position.set(.56,.99,-1.65),l.rotation.x=Math.PI/2,n.add(l)}else{let l=new Te(new Rr(.095,.48,6,24),r);l.name="Packed sleeping mat",l.rotation.z=Math.PI/2,l.position.set(.18,1.06,-1.4),l.castShadow=l.receiveShadow=!0,n.add(l),Kt(n,"Stowed passenger bed extension",.68,.018,.685,.279,.966,-.855,s,.005);for(let c of[-.04,.4]){let h=new Te(new jt(.097,.009,5,32),i.seat);h.name="Packed mattress strap",h.rotation.y=Math.PI/2,h.position.set(c,1.06,-1.4),n.add(h)}}return Hs(n)}(function(i){let e="#171b1d",t={body:"Body paint",roof:"Roof",trim:"Exterior trim & badges",wheels:"Wheels & spare rim",grille:"Grille & logo",bumpers:"Factory bumpers",cabin:"Cabin hard trim"};function n(r={}){let a={};if(r?.partFinishes&&typeof r.partFinishes=="object"&&!Array.isArray(r.partFinishes))for(let[l,c]of Object.entries(r.partFinishes).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&["matte","gloss"].includes(c)&&(a[l]=c);let o={};if(r?.partColours&&typeof r.partColours=="object"&&!Array.isArray(r.partColours))for(let[l,c]of Object.entries(r.partColours).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&/^#[0-9a-f]{6}$/i.test(c)&&(o[l]=c.toLowerCase());return{allBlack:r?.allBlack===!0,partFinishes:a,partColours:o}}function s(r){return r==="tires"||r==="suzuki_nomade_steelwheel"?"wheels":/^autostylenn_.*grille$/.test(r)?"grille":r}i.JimnySurfaceStyles=Object.freeze({BLACK:e,BASE:Object.freeze(t),clean:n,target:s})})(globalThis);function dm(i,e="5door"){i.updateWorldMatrix(!0,!0);let t=i.matrixWorld.clone().invert(),n=e==="3door"?-.17:0,s=[{id:"right",x:-.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"left",x:.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"centre",x:0,y:1.522,z:.536+n,w:.18,h:.055}].map(a=>({...a,vertices:[]})),r=[new I,new I,new I];return i.traverse(a=>{if(!a.isMesh||a.material?.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Ue().multiplyMatrices(t,a.matrixWorld);for(let u=0;u<(c?.count??l.count);u+=3){for(let d=0;d<3;d++)r[d].fromBufferAttribute(l,c?c.getX(u+d):u+d).applyMatrix4(h);for(let d of s)if(r.every(f=>Math.abs(f.x-d.x)<d.w/2+.001&&Math.abs(f.y-d.y)<d.h/2+.001&&Math.abs(f.z-d.z)<.0035)){for(let f of r)d.vertices.push(f.x,f.y,f.z-6e-4);break}}}),s.filter(a=>a.vertices.length).map(a=>{let o=new ot;o.setAttribute("position",new Ge(a.vertices,3));let l=[];for(let u=0;u<a.vertices.length;u+=3)l.push((a.vertices[u]-a.x)/a.w+.5,(a.vertices[u+1]-a.y)/a.h+.5);o.setAttribute("uv",new Ge(l,2)),o.computeVertexNormals();let{vertices:c,...h}=a;return{...h,geometry:o}})}var{BLACK:zv,clean:Gv}=globalThis.JimnySurfaceStyles,Hv=new Set(["OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille"]),Vv=/Glass|Lens|Lamp|Emitter|Reflector|Indicator|RearLamp|Instrument|LCD|Display|Needle|Mirror/i,Wv=/Fabric|SeatInsert|SeatCover|Carpet|Woven|Upholstery/i;function qc(i,e={}){for(let[t,n]of Object.entries(i))n?.userData&&(n.userData.surfaceKind=t);for(let t of Object.values(e))t.userData.surfaceKind="optic"}function Xu(i){if(i.userData.grilleBadge)return"grille";for(let e=i;e;e=e.parent){if(e.userData.finishTarget)return e.userData.finishTarget;if(Hv.has(e.name))return"grille";if(["StockWheels","AllTerrainWheels","SpareWheel"].includes(e.name))return"wheels";if(e.name==="RoofShell")return"roof";if(e.name==="StockBumper")return"bumpers";if(e.name==="StockHeadlamps")return"headlamps";if(e.name==="Cabin")return"cabin";if(e.name==="BodyShell")return i.material?.userData.vehiclePaint||i.material?.name==="BodyPaint"?"body":"trim"}return null}function fm(i,e){for(let t of dm(i,e)){let n=new Ze({name:"MirrorGlass",color:"#c4cccf",metalness:1,roughness:.12,side:Vt}),s=new Te(t.geometry,n);s.name="ProtectedMirror-"+t.id,s.userData.disposableMaterial=!0,i.add(s),(i.getObjectByName(t.id==="centre"?"Cabin":"BodyShell")||i).attach(s)}}function ju(i){let e=i.userData.surfaceKind||"",t=Wv.test(i.name)||["seat","canvas","upholstery"].includes(e)||i.userData.ownsTextures,n=Vv.test(i.name)||["glass","lens","smoked","reflector","white","red","orange","ambient","optic","rubber"].includes(e)||/TyreRubber|IntakeShadow|Brake/.test(i.name)||i.emissiveIntensity>0&&i.emissive?.getHex()>0||i.isMeshBasicMaterial||!t&&i.map;return{fabric:t,protectedSurface:n}}function pm(){let i=new Map,e=new Set,t={materials:0,targets:[]};function n(){for(let[r,a]of i)r.material=a;i.clear();for(let r of e)r.dispose();e.clear(),t={materials:0,targets:[]}}function s(r,a={}){n();let o=Gv(a),l=new Map,c=new Set;for(let h of r)h?.traverse(u=>{if(!u.isMesh||Array.isArray(u.material))return;let d=u.material,f=Xu(u),g=o.partFinishes[f],{fabric:M,protectedSurface:m}=ju(d),p=f==="wheels"&&d.name==="CatalogueSteelWheel",y=!M&&(f!=="wheels"||p)?o.partColours[f]:null;if(!f||m||d.name==="BrightChrome"&&["headlamps","bumpers"].includes(f)||!o.allBlack&&!y&&(!g||M))return;let w=o.allBlack&&(f!=="wheels"||p)&&!(M&&a.cabin&&a.cabin!=="black")&&!d.userData.explicitSurfaceColour&&!d.userData.vehiclePaint&&!["BodyPaint","RoofPaint"].includes(d.name),b=M?null:g;if(!w&&!b&&!y)return;let _=d.uuid+":"+f+":"+w+":"+b+":"+y,x=l.get(_);x||(x=d.clone(),x.userData={...x.userData,surfaceStyle:{target:f,black:w,finish:b}},w&&(x.color.set(zv),x.vertexColors=!1,x.metalness=Math.min(x.metalness||0,.12)),y&&(x.color.set(y),x.vertexColors=!1),b&&(x.roughness=b==="matte"?.85:.14,x.roughnessMap=null,"clearcoat"in x&&(x.clearcoat=b==="matte"?.02:.95,x.clearcoatRoughness=b==="matte"?.7:.09)),x.needsUpdate=!0,l.set(_,x),e.add(x)),i.set(u,d),u.material=x,c.add(f)});return t={materials:e.size,targets:[...c]},t}return{apply:s,clear:n,snapshot:()=>({...t,targets:[...t.targets]})}}(function(i){"use strict";let e=["3door","5door"],t="2026-10-23",n={exea_cupholder:{name:"EXEA drink & phone holder \xB7 passenger side",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"interior",size:null,fitment:"SelectPlus F9NG / 9Z0BB-77R20, sold individually. Specify driver or passenger fitting position; this representative preview uses the passenger side. Maker specifies bottles up to 600 ml. Verify your chassis, airbag clearance and grip-cover installation order.",note:"Hollow cradle, bottle retaining fingers, phone slot and bolt-on mounting arm. Bottle and phone are not included; original inferred-scale geometry."},exea_phone_mount:{name:"EXEA EE-213 dedicated phone holder",category:"Interior",region:"Japan",countryCode:"JP",seller:"EXEA",url:"https://www.seikosangyo.co.jp/exea/english/sp/special1.html",bodyStyles:["3door"],camera:"interior",size:null,fitment:"Maker lists EE-213 in its Jimny range. This preview is restricted to the three-door pending five-door mounting confirmation. Confirm handset dimensions, mounting revision and local driving laws; keep instruments, sightlines and airbag deployment clear.",note:"Adjustable clamp jaws, padded cradle, ball joint and compact dash mounting base. No phone or charging electronics implied."},armoro_console_organizer:{name:"ARMORO canvas console organiser \xB7 AT only",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/jimny-center-console-organizer",bodyStyles:e,camera:"console",size:null,transmission:"AT",fitment:"Maker specifies automatic-transmission Jimny models from 2018, RHD or LHD. NOT a manual-transmission fitment claim. Confirm exact body/trim, full transfer-lever travel, seat travel and handbrake clearance before fitting; inferred-scale preview is not a clearance test.",note:"Two open canvas main pockets, side mesh sleeves, binding and straps; no bulky box across the transfer lever."},exea_utility_bars:{name:"EXEA utility side bars \xB7 pair",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:[.045,.045,.61],fitment:"F9NP / 9Z0BB-77R70. Replaces rear assist grips with bolted side bars. Published limit is 1.5 kg PER SIDE, not a combined roof-net load rating. Suzuki says Nomade installation appearance differs. Confirm fasteners, trim, airbags and attachment instructions.",note:"610 mm rails with offset mounting feet, end caps and visible screws. Separate mounting kit required for the roof net."},exea_roof_net:{name:"EXEA overhead soft-storage net",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:null,requires:["exea_utility_bars"],fitment:"F9NQ / 9Z0BB-77R80 requires the separately sold compatible utility side bars. Use only light, soft items, retain headroom and visibility, and follow the maker load limit and incompatible-accessory list. Never place hard, heavy or slippery items overhead.",note:"Open woven mesh with sag, bound perimeter, adjustable corner straps and buckles. It is not a cargo barrier or occupant restraint."},exea_switch_extensions:{name:"EXEA window-switch extensions \xB7 black",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"console",size:null,fitment:"F9NL / 9Z0BB-77R10 supplied for four switches with double-sided adhesive. Preview shows the two front central window rockers, not an additional electric-window conversion. Check switch shape, clearance and reliable release after installation.",note:"Small sculpted raised paddles with tactile ridges and visible switch-direction marks; no electrical modifications."},maruti_at_mats:{name:"Maruti all-weather floor mats \xB7 AT",category:"Interior",region:"India",countryCode:"IN",seller:"Maruti Suzuki Genuine Accessories",url:"https://www.marutisuzuki.com/genuine-accessories/jimny-accessories",bodyStyles:["5door"],camera:"footwell",size:null,transmission:"AT",incompatible:["mats"],fitment:"India five-door AT reference 75901M80TK0. MT uses a different reference, 75901M80TH0; do not substitute. Original representative tray geometry is not a pedal-clearance or anti-slip certification. Confirm clips and secure mats; never stack them.",note:"Front footwell trays with raised edges, drainage channels, heel pad and retaining clips. Model is not a scan of the genuine set."},armoro_seat_organizer:{name:"ARMORO seat-back organiser",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/universal-car-seat-organizer",bodyStyles:e,camera:"seatbacks",size:null,fitment:"Universal canvas organiser. Confirm straps fit your seat and remain clear of airbags, seat tracks, belts and rear passengers. Preview shows one front-seat back; not exact ARMORO CAD.",note:"Bottle pockets, a large pocket and tissue storage address the small-item storage repeatedly discussed by Jimny owners."},jimsa_door_pockets:{name:"JimSA front door-grip pockets \xB7 pair",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-door-grip-storage-pockets-jimny-year-2018",bodyStyles:e,camera:"doors",size:null,fitment:"Seller lists Gen 4 three-door and five-door FRONT doors only. Uses existing door-card screws; verify door handle, window-control and emergency-exit access.",note:"Textured plastic pockets with padded base. Representative hollow pockets; dimensions inferred from product photos."},jimsa_dash_tray:{name:"JimSA instrument-top storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-dashboard-storage-tray-jimny-year-2018",bodyStyles:e,camera:"interior",existingId:"market_jimsa_7123723878571",size:null,fitment:"Seller lists both bodies. Adhesive tray above the instrument binnacle. Keep objects low and secured; do not obstruct instruments, windscreen view, vents or airbags.",note:"Anti-slip-lined shallow tray. Original inferred-scale model, not a safe loose-object restraint."},jimsa_console_tray:{name:"JimSA centre-console storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-centre-console-storage-tray-jimny-year-2018",bodyStyles:e,camera:"console",existingId:"market_jimsa_7123719946411",size:null,fitment:"Seller offers DIFFERENT MT and AT versions for both bodies. Choose your transmission. Preview is a shallow small-item tray and is not a measured clearance check for levers or handbrake.",note:"Keeps small items organised without installing a large armrest. No promise that one insert fits both transmissions."},jimsa_cargo_pouch_5door:{name:"JimSA rear luggage storage pouch \xB7 XL",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/rear-luggage-storage-pouch-5-door-jimny-year-2023",bodyStyles:["5door"],camera:"storage",size:null,fitment:"Seller explicitly lists five-door GL/GLX. Confirm mounting hardware and maximum load. Keep visibility and seatbelts clear; do not treat the fabric cover as a crash barrier.",note:"Soft cargo-area pouch/cover for smaller items. Representative zip pocket and securing tabs, inferred dimensions."},jimsa_tiedowns:{name:"JimSA rear luggage attachment rings",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-rear-luggage-area-attachment-rings-jimny-year-2018",bodyStyles:["3door"],camera:"storage",size:null,fitment:"Current seller page lists THREE-door only. Pair mounts in existing holes below rear windows. No published crash/load rating; use appropriate rated restraints and vehicle guidance.",note:"A light, useful preparation item before adding large storage systems. Preview dimensions inferred; not recovery points."},fr_wolfpack:{name:"Front Runner Wolf Pack Pro storage box",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-za/product/wolf-pack-pro",bodyStyles:e,camera:"storage",size:[.51,.23,.4],dimensionSource:"https://monsterfishing.co.nz/collections/dometic/products/dometic-wolf-pack-pro",fitment:"Universal removable storage box, not a Jimny-specific mount. Preview shows strapped cargo placement; source suitable vehicle-rated anchorage separately. Upright-seat cargo fit varies by body.",note:"Published box envelope 510 \xD7 400 \xD7 230 mm, 3.65 kg empty. Original model with lid, latches and restraint straps; not manufacturer CAD."},fr_jerry_holder:{name:"Front Runner single external jerry-can holder",category:"Roof & carrying",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-us/product/single-jerry-can-holder",bodyStyles:["5door"],camera:"roof",size:[.165,.37,.513],requires:["fr_slimline2"],incompatible:["rtt","boards"],fitment:"JCHO013 is for a Front Runner slatted rack and 20 L NATO/Wedco cans; NOT Scepter. Preview adds a compatible rack. Confirm actual rack kit, dynamic roof load, mounting instructions and local fuel-transport rules.",note:"Holder is separate from can. Published 513 \xD7 165 \xD7 370 mm and 2.4 kg. Fuel stays outside the cabin; loaded roof weight and handling matter."},fr_fuelcan20:{name:"Front Runner 20 L steel fuel can \xB7 external",category:"Camping & storage",region:"United Kingdom",countryCode:"GB",seller:"Tuff-Trek",url:"https://tuff-trek.com/products/jcfu001-20l-jerry-can-matte-black-steel-finish",bodyStyles:["5door"],camera:"roof",size:[.165,.35,.46],requires:["fr_slimline2","fr_jerry_holder"],incompatible:["fr_watercan20","rtt","boards"],fitment:"JCFU001 fuel-only can with compatible holder and rack. NEVER store fuel in the passenger cabin. Confirm local container approval/transport law, filled weight, roof-load limits and safe refuelling. Not suitable for drinking water.",note:"Published 350 \xD7 165 \xD7 460 mm overall, 3.82 kg empty. Can is shown externally in a restrained carrier, not loose or bolted directly to the door."},fr_watercan20:{name:"Front Runner 20 L water can with tap",category:"Camping & storage",region:"United States",countryCode:"US",seller:"Off Road Tents",url:"https://offroadtents.com/products/front-runner-plastic-water-jerry-can-with-tap",bodyStyles:e,camera:"storage",size:[.36,.475,.18],incompatible:["fr_fuelcan20","fr_wolfpack","jimsa_cargo_pouch_5door","drawer","exploresetups_drawer_5door","touring"],fitment:"Food-grade BPA-free water container; WATER ONLY, never substitute for a fuel can. Preview is low cargo placement with straps, not a certified restraint. 20 L of water adds about 20 kg before container weight.",note:"Published 360 \xD7 180 \xD7 475 mm, 2.38 kg empty. External fuel-holder compatibility is NOT assumed; water model uses separate cargo placement."},arb_airkit:{name:"ARB CKMP12 portable compressor kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/air-systems",bodyStyles:e,camera:"storage",size:[.44,.208,.238],dimensionSource:"https://store.arbusa.com/content/CKMP12_Operation%20Guide.pdf",fitment:"Universal 12 V portable kit, not an installed onboard compressor. Secure when travelling; use outdoors with correct battery connection and manufacturer instructions. Never connect this load to an ordinary cabin accessory socket.",note:"Published case envelope 440 \xD7 238 \xD7 208 mm. Preview is the closed carry case; no implied under-seat installation, wiring or automatic inflation simulation."},arb_repairkit:{name:"ARB Speedy Seal II tyre repair kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/product/10000011-speedy-seal-series-ii-repair-kit",bodyStyles:e,camera:"storage",size:null,fitment:"Universal tubeless-tyre emergency kit. Not for sidewall damage or every puncture. Follow tyre maker instructions and obtain professional inspection/repair; carry an inflated serviceable spare and correct tools.",note:"Closed high-visibility carry-case preview with latches and handle. Inferred scale, not exact product CAD or a guarantee a damaged tyre is repairable."},kap_fire:{name:"KAP passenger-seat extinguisher bracket",category:"Interior",region:"Australia",countryCode:"AU",seller:"OZ Jimny / KAP",url:"https://ozjimny.com/products/kap-industires-fire-extinguisher-bracket",bodyStyles:e,camera:"footwell",existingId:"market_4454478184585",size:null,fitment:"Seller lists both bodies; maker page specifies JB74. Confirm the exact XL/body version with seller. Bracket only unless extinguisher option bought. May restrict seat travel; retain pedal/seat/airbag clearance and correct metal cage.",note:"Original passenger-side bracket plus optional representative 1 kg extinguisher. No certification claimed for our model or installation; use professional fitting and extinguisher maintenance."}};for(let[s,r]of Object.entries(n))Object.assign(r,{id:s,visual:s,checked:t,stockAtCheck:"unknown",previewKind:"reference-guided",disclosure:"Original representative geometry, not manufacturer CAD, verified stock or certified fitment."});i.JimnyPracticalParts=Object.freeze(n)})(globalThis);var mm=globalThis.JimnyPracticalParts;function Vs(i,e,t,n,s=0,r=0,a=0){let o=new Te(e,t);return o.name=n,o.position.set(s,r,a),o.castShadow=o.receiveShadow=!0,i.add(o),o}function Qe(i,e,t,n,s,r,a,o,l,c=.003){return Vs(i,new Bt(e,t,n,2,Math.min(c,e/4,t/4,n/4)),o,l,s,r,a)}function hn(i,e,t,n,s){let r=e.map(o=>new I(...o)),a=new Qn;for(let o=1;o<r.length;o++)a.add(new $n(r[o-1],r[o]));return Vs(i,new Wn(a,e.length*3,t,6,!1),n,s)}function Fn(i,e,t,n,s,r,a,o,l="y"){let c=Vs(i,new Gt(e,e,t,24),a,o,n,s,r);return l==="x"&&(c.rotation.z=Math.PI/2),l==="z"&&(c.rotation.x=Math.PI/2),c}function bs(i,e){return(i.userData.ownedMaterials??=[]).push(e),e}function qv(i,e,t,n,s,r){let a=new on(.23,.115,10,6),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l)/.23+.5,h=o.getY(l)/.115+.5;o.setXYZ(l,e+s*(.004*Math.sin(c*Math.PI)*Math.sin(h*Math.PI)+.0015*Math.sin(c*19)*h),t+(h-.5)*.115-.004*Math.sin(c*Math.PI)*h,n+(c-.5)*.23)}return a.computeVertexNormals(),Vs(i,a,r,"Soft canvas pocket front")}function Yu(i,e,t,n,s,r,a){return Vs(i,new jt(e,.0025,6,20),r,a,t,n,s)}function Yr(i,e,t,n,s,r,a,o,l){Qe(i,e,.005,t,s,r,a,o.trim,l+" base"),Qe(i,e-.012,.002,t-.012,s,r+.0035,a,o.rubber,l+" anti-slip liner");for(let c of[-1,1])Qe(i,.005,n,t,s+c*(e/2-.0025),r+n/2,a,o.trim,l+" side lip"),Qe(i,e,n,.005,s,r+n/2,a+c*(t/2-.0025),o.trim,l+" end lip")}function Xc(i,e,t,n,s,r,a,o){for(let l of[-s*.3,s*.3]){Qe(i,.02,.004,a+.018,e+l,t+r/2+.004,n,o.seat,"Restraint webbing");for(let c of[-1,1])Qe(i,.02,r+.01,.003,e+l,t,n+c*(a/2+.008),o.seat,"Restraint vertical webbing"),Qe(i,.03,.025,.008,e+l,t+.025,n+c*(a/2+.011),o.metal,"Restraint cam buckle")}}function Ku(i,e,t,n,s,r,a,o,{colour:l=null,name:c="Carry case"}={}){let h=l?bs(i,new Ze({name:"CarryCaseShell",color:l,roughness:.65})):o.trim;Qe(i,s,r,a,e,t,n,h,c,.012),Qe(i,s+.004,.018,a+.004,e,t+r/2-.014,n,o.darkmetal,c+" lid perimeter",.004);for(let u of[-1,1])Qe(i,.033,.035,.012,e+u*s*.34,t+r*.28,n-a/2-.006,o.darkmetal,c+" latch");hn(i,[[e-.055,t+r/2,n],[e-.05,t+r/2+.025,n],[e+.05,t+r/2+.025,n],[e+.055,t+r/2,n]],.008,o.trim,c+" handle")}function Xv(i,e,{body:t="5door",cargoTop:n=.7,cargoLeft:s=!1}={}){let r=mm[i];if(!r||!r.bodyStyles.includes(t))return null;let a=new je;a.name=i,a.userData.finishTarget=i,a.userData.cataloguePart={...r};let o=t==="3door"?.17:0,l=-1.445+o;if(i==="exea_cupholder"){let u=.25-o;Qe(a,.075,.018,.035,.57,1.165+.065,u+.07,e.trim,"Cupholder dash bracket"),Qe(a,.018,.085,.035,.57,1.165+.025,u+.07,e.trim,"Cupholder offset arm"),Fn(a,.047,.006,.57,1.165-.045,u,e.trim,"Cup cradle floor");let d=Vs(a,new jt(.049,.006,8,40),e.trim,"Open bottle retaining ring",.57,1.165+.01,u);d.rotation.x=Math.PI/2;for(let f of[0,2.1,4.2])Qe(a,.012,.058,.012,.57+Math.cos(f)*.042,1.165-.017,u+Math.sin(f)*.042,e.trim,"Bottle retaining finger");Yr(a,.085,.022,.026,.57,1.165-.015,u-.064,e,"Phone slot");for(let f of[-1,1])Fn(a,.003,.005,.57+f*.025,1.165+.076,u+.07,e.metal,"Holder fixing screw")}else if(i==="exea_phone_mount"){Yr(a,.075,.035,.008,-.18,1.275,.44-o,e,"Phone mount foot"),hn(a,[[-.18,1.28,.44-o],[-.18,1.34,.37-o]],.008,e.darkmetal,"Phone ball-joint arm"),Vs(a,new Dn(.014,12,8),e.trim,"Adjustable ball joint",-.18,1.34,.37-o),Qe(a,.061,.101,.012,-.18,1.36,.345-o,e.trim,"Phone cradle back",.007);for(let c of[-1,1])Qe(a,.009,.035,.026,-.18+c*.034,1.36,.333-o,e.trim,"Adjustable clamp jaw"),Qe(a,.003,.025,.02,-.18+c*.029,1.36,.333-o,e.rubber,"Soft jaw pad");Qe(a,.05,.009,.03,-.18,1.306,.335-o,e.trim,"Phone support foot")}else if(i==="armoro_console_organizer"){let c=bs(a,Xn("canvas","#535747")),h=bs(a,new Ze({name:"WovenStitch",color:"#989a7e",roughness:1}));c.side=Vt;for(let u of[-1,1]){let d=u*.104,f=.21-o;Qe(a,.009,.13,.23,d,.846,f,c,"Console pocket backing"),Qe(a,.058,.005,.23,d+u*.023,.785,f,c,"Console pocket floor"),qv(a,d+u*.049,.843,f,u,c);for(let g of[-.112,.112])Qe(a,.05,.12,.006,d+u*.022,.846,f+g,c,"Canvas pocket gusset");hn(a,[[d+u*.05,.905,f-.115],[d+u*.05,.9,f],[d+u*.05,.905,f+.115]],.002,h,"Bound pocket opening");for(let g=0;g<9;g++)hn(a,[[d+u*.054,.797,f-.09+g*.022],[d+u*.054,.866,f-.09+g*.022]],.0013,e.seat,"Mesh sleeve vertical");for(let g=0;g<5;g++)hn(a,[[d+u*.055,.801+g*.014,f-.09],[d+u*.055,.801+g*.014,f+.09]],.0013,e.seat,"Mesh sleeve horizontal")}}else if(i==="exea_utility_bars")for(let c of[-1,1]){let h=c*.566,u=-.78+o;hn(a,[[h,1.59,u-.305],[h,1.59,u+.305]],.009,e.darkmetal,"Utility bar rail");for(let d of[-.285,.285])Qe(a,.035,.024,.035,h+c*.022,1.615,u+d,e.trim,"Offset rail foot"),Fn(a,.004,.006,h+c*.022,1.63,u+d,e.metal,"Bar mounting screw")}else if(i==="exea_roof_net"){let c=-.78+o,h=.99,u=.51,d=1.575,f=(g,M)=>d-.04*(1-(g/(h/2))**2)*(1-(M/(u/2))**2);for(let g=0;g<=20;g++){let M=-h/2+g*h/20,m=[];for(let p=0;p<=8;p++){let y=-u/2+p*u/8;m.push([M,f(M,y),c+y])}hn(a,m,.0017,e.seat,"Overhead net warp")}for(let g=0;g<=11;g++){let M=-u/2+g*u/11,m=[];for(let p=0;p<=10;p++){let y=-h/2+p*h/10;m.push([y,f(y,M),c+M])}hn(a,m,.0017,e.seat,"Overhead net weft")}hn(a,[[-h/2,d,c-u/2],[h/2,d,c-u/2],[h/2,d,c+u/2],[-h/2,d,c+u/2],[-h/2,d,c-u/2]],.006,e.seat,"Bound net perimeter");for(let g of[-1,1])for(let M of[-u/2,u/2])hn(a,[[g*h/2,d,c+M],[g*.566,1.59,c+M]],.004,e.seat,"Adjustable corner strap"),Qe(a,.022,.01,.018,g*.53,1.583,c+M,e.trim,"Net strap buckle")}else if(i==="exea_switch_extensions")for(let c of[-.095,.095]){let h=.282-o;Qe(a,.029,.032,.019,c,.965,h,e.trim,"Raised window rocker",.004);for(let u of[-.008,0,.008])Qe(a,.02,.0015,.002,c,.965+u,h-.01,e.darkmetal,"Tactile switch ridge")}else if(i==="maruti_at_mats")for(let c of[-1,1]){let h=c*.365,u=.47;Yr(a,.42,.36,.022,h,.696,u,e,"All-weather footwell tray");for(let d=0;d<8;d++)Qe(a,.36,.003,.007,h,.703,u-.14+d*.038,e.rubber,"Drainage channel");Qe(a,.15,.007,.12,h,.707,u-.06,e.rubber,"Heel wear pad",.009);for(let d of[-.15,.15])Fn(a,.01,.004,h+d,.704,u-.15,e.trim,"Mat retaining clip")}else if(i==="armoro_seat_organizer"){let c=bs(a,Xn("canvas","#70705b")),h=bs(a,new Ze({name:"WovenStitch",color:"#ada98e",roughness:1})),u=.365,d=-.225-o,f=Qe(a,.365,.4,.012,u,1.09,d,c,"Canvas seat-back organiser",.01);f.rotation.x=-.12;for(let g of[-.14,.14])Qe(a,.025,.19,.008,u+g,1.35,d+.008,e.seat,"Headrest securing strap"),Qe(a,.035,.025,.012,u+g,1.37,d-.003,e.trim,"Strap buckle");for(let g of[-.122,.122]){Qe(a,.102,.006,.065,u+g,.973,d-.038,c,"Bottle pocket floor"),Qe(a,.102,.16,.006,u+g,1.05,d-.071,c,"Bottle pocket front");for(let M of[-1,1])Qe(a,.006,.16,.065,u+g+M*.048,1.05,d-.038,c,"Bottle pocket gusset");hn(a,[[u+g-.05,1.13,d-.006],[u+g-.05,1.13,d-.074],[u+g+.05,1.13,d-.074],[u+g+.05,1.13,d-.006]],.0022,h,"Bound open pocket lip")}Qe(a,.125,.13,.05,u,1.04,d-.05,c,"Central utility pouch"),Qe(a,.12,.025,.006,u,1.108,d-.08,c,"Pouch flap"),Qe(a,.3,.06,.045,u,.935,d-.035,c,"Tissue holder"),Qe(a,.12,.008,.002,u,.944,d-.06,e.trim,"Tissue slot");for(let g of[-.175,.175])hn(a,[[u+g,.9,d-.01],[u+g,1.27,d-.01]],.0011,h,"Canvas side seam")}else if(i==="jimsa_door_pockets")for(let c of[-1,1]){let h=c*.641,u=t==="3door"?-.12:.06;Yr(a,.082,.245,.052,h,.951,u,e,"Door grip pocket"),Qe(a,.01,.08,.014,c*.68,.99,u-.095,e.darkmetal,"Door screw attachment"),Fn(a,.004,.004,c*.672,1.02,u-.095,e.metal,"Door attachment screw","x")}else if(i==="jimsa_dash_tray")Yr(a,.355,.145,.02,-.365,1.299,.415-o,e,"Instrument tray");else if(i==="jimsa_console_tray")Yr(a,.135,.12,.023,0,.835,-.15-o,e,"Console insert"),Qe(a,.004,.018,.105,-.025,.847,-.15-o,e.trim,"Console tray divider");else if(i==="jimsa_cargo_pouch_5door"){let c=bs(a,Xn("canvas","#3c4140")),h=bs(a,new Ze({name:"WovenStitch",color:"#797c74",roughness:1}));Qe(a,1.1,.012,.37,0,1.075,-1.43,c,"Soft cargo cover",.006),Qe(a,.79,.065,.235,0,1.112,-1.46,c,"Cargo zipped pouch",.018),hn(a,[[-.365,1.147,-1.55],[.365,1.147,-1.55],[.365,1.147,-1.37],[-.365,1.147,-1.37]],.0018,h,"Cargo pocket zip"),Qe(a,.015,.004,.025,.35,1.15,-1.52,e.metal,"Zip slider");for(let u of[-.57,.57])for(let d of[-1.6,-1.26])Qe(a,.045,.004,.03,u,1.075,d,e.seat,"Cargo securing tab"),Yu(a,.009,u,1.075,d,e.metal,"Cargo attachment eye")}else if(i==="jimsa_tiedowns")for(let c of[-1,1]){let h=Yu(a,.014,c*.647,1.16,-1.21,e.metal,"Luggage attachment ring");h.rotation.y=Math.PI/2,Fn(a,.005,.018,c*.666,1.16,-1.21,e.metal,"Attachment threaded stem","x")}else if(i==="fr_wolfpack"){let c=n+.115;Ku(a,-.2,c,l,.51,.23,.4,e,{name:"Wolf Pack representative box"});for(let h of[-1,1])for(let u of[l-.18,l+.18])Qe(a,.025,.155,.013,-.2+h*.23,c,u,e.darkmetal,"Moulded box stiffener");for(let h of[l-.09,l+.09])Qe(a,.44,.006,.018,-.2,c+.119,h,e.trim,"Nesting lid rib");Xc(a,-.2,c,l,.51,.23,.4,e)}else if(i==="fr_jerry_holder"){Qe(a,.165,.005,.513,.35,1.865,-.45,e.darkmetal,"Jerry carrier base");for(let d of[-1,1])Qe(a,.005,.055,.513,.35+d*.08,1.865+.027,-.45,e.darkmetal,"Carrier folded side");hn(a,[[.35-.085,1.865,-.45+.22],[.35-.085,1.865+.37,-.45+.22],[.35+.085,1.865+.37,-.45+.22],[.35+.085,1.865,-.45+.22]],.007,e.darkmetal,"Jerry carrier hold-down strap"),Qe(a,.028,.028,.018,.35+.093,1.865+.326,-.45+.22,e.metal,"Stainless safety catch");for(let d of[-.45-.2,-.45+.2])for(let f of[-1,1])Fn(a,.005,.008,.35+f*.059,1.865+.007,d,e.metal,"Carrier mounting bolt")}else if(i==="fr_fuelcan20"){let c=new je;a.add(c),c.position.set(.37,2.047,-.68),c.rotation.set(Math.PI/2,Math.PI/2,0),Qe(c,.35,.405,.165,0,.2025,-.02,e.darkmetal,"Fuel can steel shell",.018),Qe(c,.354,.004,.169,0,.05,-.02,e.darkmetal,"Fuel can base seam",.002);for(let h of[-1,1])hn(c,[[-.125,.09,h*.08-.02],[.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal"),hn(c,[[.125,.09,h*.08-.02],[-.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal");for(let h of[-.071,-.02,.031])hn(c,[[-.05,.398,h],[-.03,.45,h],[.11,.45,h],[.13,.398,h]],.01,e.darkmetal,"Triple carry handle");Fn(c,.034,.022,-.115,.419,-.02,e.trim,"Fuel bayonet cap"),hn(c,[[-.15,.43,-.02],[-.15,.441,.005],[-.12,.441,.005]],.002,e.metal,"Cap locking pin")}else if(i==="fr_watercan20"){let h=n+.2375,u=l+.08,d=bs(a,new Ze({name:"WaterContainerPlastic",color:"#b9c0b3",roughness:.61}));Qe(a,.36,.415,.18,.29,h-.03,u,d,"Water-only HDPE tank",.022);for(let f of[-.14,.14])Qe(a,.012,.27,.012,.29+f,h-.02,u-.095,d,"Water tank reinforcing rib");hn(a,[[.29-.07,h+.17,u],[.29-.055,h+.22,u],[.29+.075,h+.22,u],[.29+.09,h+.17,u]],.014,d,"Water can carry handle"),Fn(a,.039,.026,.29-.105,h+.19,u,e.trim,"Water fill cap"),Fn(a,.017,.03,.29,h-.15,u-.105,e.trim,"Water tap body","z"),Qe(a,.048,.01,.014,.29,h-.127,u-.115,e.trim,"Water tap lever"),Fn(a,.009,.025,.29,h-.18,u-.115,e.trim,"Water spout"),Xc(a,.29,h-.03,u,.36,.415,.18,e)}else if(i==="arb_airkit"){let c=s?-.27:.28,h=n+.104,u=l+.04;Ku(a,c,h,u,.44,.208,.238,e,{name:"Portable compressor case"}),Xc(a,c,h,u,.44,.208,.238,e)}else if(i==="arb_repairkit"){let c=s?-.18:.37,h=n+.035,u=l-.13;Ku(a,c,h,u,.245,.07,.135,e,{colour:"#b48135",name:"Tyre repair tool case"}),Xc(a,c,h,u,.245,.07,.135,e)}else if(i==="kap_fire"){let u=.37-o;Qe(a,.33,.004,.065,.365,.758-.035,u,e.darkmetal,"Passenger seat-rail bracket");for(let d of[-.145,.145])Fn(a,.008,.009,.365+d,.758-.03,u,e.metal,"Seat-rail bracket fixing");Fn(a,.042,.225,.365,.758+.007,u,e.red,"Optional 1 kg extinguisher","x");for(let d of[-.065,.065]){let f=Yu(a,.044,.365+d,.765,u,e.metal,"Metal retaining cage");f.rotation.y=Math.PI/2}Fn(a,.013,.035,.365-.13,.758+.007,u,e.metal,"Extinguisher valve","x"),Qe(a,.045,.01,.024,.365-.125,.758+.035,u,e.trim,"Release handle"),Fn(a,.011,.006,.365-.124,.758+.015,u-.021,e.white,"Pressure indicator","z")}return Hs(a)}function gm({parts:i,body:e,mats:t,rig:n,show:s}){let r=i.has("touring")?.96:i.has("exploresetups_drawer_5door")?.955:i.has("drawer")?.922:.7,a=e==="5door"&&i.has("fr_slimline2");for(let[o,l]of Object.entries(mm)){if(!l.bodyStyles.includes(e)||l.requires?.some(h=>!i.has(h))||l.incompatible?.some(h=>i.has(h))||["fr_jerry_holder","fr_fuelcan20"].includes(o)&&(!a||i.has("rtt")||i.has("boards"))||o==="fr_fuelcan20"&&(!i.has("fr_jerry_holder")||i.has("fr_watercan20"))||o==="jimsa_cargo_pouch_5door"&&["touring","shelf","mod_halfmolly_5door","molle","fr_watercan20"].some(h=>i.has(h))||o==="fr_watercan20"&&["touring","drawer","exploresetups_drawer_5door","fr_wolfpack"].some(h=>i.has(h)))continue;let c=o==="arb_repairkit"&&i.has("arb_airkit")?r+.208:r;s([o],()=>{let h=Xv(o,t,{body:e,cargoTop:c,cargoLeft:i.has("fr_watercan20")});h&&n.add(h)})}}function bm({accessoryRig:i,mats:e,detailed:t,modelBody:n,colour:s,effectiveDesign:r,lampEmitters:a,buildGrille:o=()=>{},addDecals:l=()=>{},arch:c=null}){qc(e,a);let h=(w,b,_,x=0,E=0,S=0)=>{let v=new Te(w,b);return v.position.set(x,E,S),v.castShadow=!0,v.receiveShadow=!0,_.add(v),v},u=(w,b,_,x,E,S,v,R=e.trim)=>h(Math.min(b,_,x)>.065?new Bt(b,_,x,2,Math.min(b,_,x)*.14):new an(b,_,x),R,w,E,S,v),d=(w,b,_,x,E,S,v,R=e.trim,C="y",D=24)=>{let L=h(new Gt(b,_,x,D),R,w,E,S,v);return C==="x"&&(L.rotation.z=Math.PI/2),C==="z"&&(L.rotation.x=Math.PI/2),L},f=(w,b,_=.025,x=e.darkmetal)=>h(new Wn(new pi(b.map(E=>new I(...E)),!1,"centripetal",.1),Math.max(12,b.length*3),_,8,!1),x,w),g=(w,b,_=.01,x=e.trim)=>{let E=b.map(v=>new I(...v)),S=new Qn;for(let v=1;v<E.length;v++)S.add(new $n(E[v-1],E[v]));return h(new Wn(S,b.length*2,_,6,!1),x,w)};function M(w){for(;w.children.length;){let b=w.children[0];b.traverse(_=>{_.geometry?.dispose(),_.isInstancedMesh&&_.dispose(),_.userData.ownedMaterials?.forEach(x=>x.dispose()),_.userData.disposableMaterial&&(_.material.userData.ownsTextures||_.material.map?.dispose(),_.material.dispose())}),w.remove(b)}}c||(c=(w,b,_)=>{let x=b<0?-1:1,v=[[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]]].map(F=>new pi(F.map(([G,q])=>new I(0,q,G)))),R=[],C=[],D=64;for(let[F,G]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let q=0;q<=D;q++){let Q=v[0].getPoint(q/D).lerp(v[1].getPoint(q/D),F);R.push(x*G,Q.y,_+Q.z)}for(let F=0;F<5;F++)for(let G=0;G<D;G++){let q=F*(D+1)+G;C.push(q,q+1,q+D+2,q,q+D+2,q+D+1)}if(x<0)for(let F=0;F<C.length;F+=3)[C[F+1],C[F+2]]=[C[F+2],C[F+1]];let L=new ot;L.setAttribute("position",new Ge(R,3)),L.setIndex(C),L.computeVertexNormals(),h(L,e.trim,w)});function m(w,b=!1){let _=new je;w.add(_);let x=.61,E=-1.62;[-.72,.72].forEach(v=>u(_,.035,.055,2.25,v,1.82,-.5,e.darkmetal)),[x,E].forEach(v=>u(_,1.46,.055,.035,0,1.82,v,e.darkmetal));for(let v=-1.56;v<.62;v+=.14)u(_,1.43,.022,.072,0,1.825,v,e.trim);[-.68,.68].forEach(v=>[-1.38,.38].forEach(R=>{u(_,.055,.095,.11,v,1.755,R,e.darkmetal),u(_,.1,.02,.15,v,1.715,R,e.rubber),d(_,.012,.012,.06,v,1.77,R,e.metal,"x",8)}));let S=u(_,1.38,.13,.018,0,1.77,.64,e.trim);if(S.rotation.x=-.5,b){[-.72,.72].forEach(v=>g(_,[[v,1.83,x],[v,1.96,x-.12],[v,1.96,E+.06],[v,1.83,E]],.018));for(let v of[-1.55,.49])u(_,1.44,.025,.025,0,1.955,v,e.darkmetal)}else for(let v of[-.72,.72])for(let R of[-1.5,-.8,-.1,.5])u(_,.018,.014,.045,v,1.86,R,e.metal)}function p(w,b){M(i);let _=[];if(t&&w.has("headunit")){let R;{let D=document.createElement("canvas");D.width=384,D.height=224;let L=D.getContext("2d");L.fillStyle="#162a31",L.fillRect(0,0,384,224),L.fillStyle="#dce8d5",L.font="18px sans-serif",L.fillText("12:30",18,28),L.fillText("HOME",292,28);for(let[G,q]of["Music","Phone","Maps"].entries())L.fillStyle=["#305d68","#42694b","#615f47"][G],L.fillRect(16+G*122,55,108,128),L.fillStyle="#eef3df",L.font="20px sans-serif",L.fillText(q,26+G*122,145),L.beginPath(),L.arc(70+G*122,96,16,0,Math.PI*2),L.strokeStyle="#dbe6d9",L.lineWidth=3,L.stroke();let F=new xn(D);F.colorSpace=bt,R=new Ft({map:F})}let C=h(new on(.232,.137),R,i,0,1.224,.312);C.rotation.y=Math.PI,C.userData.disposableMaterial=!0,n==="3door"&&(C.position.z-=.17)}let x=(v,R)=>{let C=v.filter(D=>w.has(D));if(C.length){let D=new Set(i.children);R();for(let L of i.children)D.has(L)||(L.userData.finishTarget=C[0]);_.push(...C)}};o(i,b.grille||"oem"),l(i,b.decal||"none"),b.finish==="raptor"&&[-1,1].forEach(v=>u(i,.018,.16,n==="3door"?1.43:1.77,v*(t?.751:.777),.65,-.08,e.textured));let E=["rack","msga_roofbasket","prad_roofrack","fr_slimline2","fr_slimline2_tall",...n==="3door"?[]:["suzuki_nomade_flatrack"]].some(v=>w.has(v));if(!E&&["rtt","awning","boards"].some(v=>w.has(v)))for(let v of[-1.2,.25]){u(i,1.5,.045,.07,0,1.79,v,e.darkmetal);for(let R of[-1,1])u(i,.06,.1,.1,R*.7,1.73,v,e.trim),u(i,.09,.018,.13,R*.7,1.69,v,e.rubber)}if(n!=="3door"&&w.has("suzuki_nomade_flatrack")?x(["suzuki_nomade_flatrack"],()=>i.add(sm(e))):w.has("fr_slimline2")||w.has("fr_slimline2_tall")?x(["fr_slimline2","fr_slimline2_tall"],()=>i.add(Kp(e,w.has("fr_slimline2_tall")))):x(["rack","msga_roofbasket","prad_roofrack"],()=>m(i,w.has("msga_roofbasket"))),w.has("skinnyjim_backbone")||w.has("skinnyjim_jerry_tray")){let v=nm(e);v.userData.finishTarget="skinnyjim_backbone",n==="3door"&&(v.position.z+=.17),i.add(v),_.push("skinnyjim_backbone"),x(["skinnyjim_jerry_tray"],()=>{let R=im(e);n==="3door"&&(R.position.z+=.17),i.add(R)})}x(["snorkel","bimbra_snorkel"],()=>{let v=i.children.length;f(i,[[-.79,1.04,1.24],[-.84,1.08,.82],[-.84,1.25,.66],[-.79,1.67,.59]],.041,e.trim);let R=u(i,.13,.095,.16,-.79,1.705,.62,e.trim);R.rotation.x=.15;for(let C=-.832;C<-.74;C+=.025)u(i,.008,.058,.008,C,1.71,.706,e.darkmetal);if(u(i,.018,.045,.07,-.78,1.5,.61,e.darkmetal),n==="3door")for(let C of i.children.slice(v))C.position.z-=.17}),x(["bull","autostylenn_bumper_v1"],()=>{u(i,1.38,.23,.025,0,.73,1.79,e.trim);let v=w.has("bull"),R=v?[[-.85,.76],[-.72,.72],[.72,.72],[.85,.76],[.82,.57],[.47,.48],[-.47,.48],[-.82,.57]]:[[-.85,.72],[-.76,.76],[-.63,.7],[.63,.7],[.76,.76],[.85,.72],[.8,.57],[.56,.5],[-.56,.5],[-.8,.57]],C=new Ot(R.map(([D,L])=>new oe(D,L)));if(v){let D=new en;D.absellipse(0,.594,.185,.031,0,Math.PI*2,!1),C.holes.push(D)}for(let D of[-1,1]){let L=new en;L.absellipse(D*.61,.637,v?.049:.044,.044,0,Math.PI*2,!1),C.holes.push(L)}h(new Tn(C,{depth:.19,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:2}),e.darkmetal,i,0,0,1.86);for(let D of[-.61,.61])d(i,.038,.038,.008,D,.637,1.98,e.reflector,"z"),d(i,.034,.034,.009,D,.637,1.989,e.lens,"z");if(v){f(i,[[-.79,.72,1.99],[-.79,.96,1.99],[-.72,1.075,1.99],[-.6,1.083,1.99],[.6,1.083,1.99],[.72,1.075,1.99],[.79,.96,1.99],[.79,.72,1.99]],.026);for(let D of[-.43,.43]){f(i,[[D,.69,2.07],[D,.79,2.04],[D,1.083,1.99]],.018),u(i,.035,.17,.12,D,.66,2.04,e.darkmetal);let L=h(new jt(.041,.01,8,24,Math.PI*1.65),e.accent,i,D,.52,2.08);L.rotation.z=.55,d(i,.013,.013,.09,D,.55,2.08,e.accent,"x")}for(let D of[-.74,.74]){u(i,.12,.043,.018,D,.65,2.058,e.trim);for(let L=-2;L<=2;L++)d(i,.01,.01,.01,D+L*.021,.65,2.071,e.reflector,"z",12)}}else{let D=new Ot([[-.37,.72],[-.33,.91],[.33,.91],[.37,.72]].map(([L,F])=>new oe(L,F)));for(let L of[-.24,-.08,.08,.24]){let F=new en;F.absellipse(L,.81,.046,.021,0,Math.PI*2,!1),D.holes.push(F)}h(new Tn(D,{depth:.008,bevelEnabled:!1}),e.darkmetal,i,0,0,1.86),u(i,1.26,.026,.2,0,.701,1.96,e.darkmetal)}for(let D of[-.77,-.42,0,.42,.77])d(i,.005,.005,.01,D,.574,2.061,e.metal,"z",8)}),x(["winch"],()=>{u(i,.45,.12,.19,0,.72,2.13,e.trim),d(i,.055,.055,.27,0,.74,2.21,e.metal,"x"),u(i,.07,.09,.03,0,.69,2.25,e.accent)}),x(["sliders"],()=>[-1,1].forEach(v=>{f(i,[[v*.91,.45,-.95],[v*.97,.45,-.85],[v*.97,.45,.85],[v*.91,.45,.95]],.035),u(i,.18,.035,1.8,v*.86,.46,0,e.darkmetal)})),x(["flares"],()=>[-1,1].forEach(v=>[-1.295,1.295].forEach(R=>c(i,v===1?.82:-.97,R,!0)))),x(["ladder"],()=>{let v=i.children.length;[-.65,-.35].forEach(R=>{f(i,[[R,.6,-1.99],[R,1.66,-1.99],[R,1.75,-1.8],[R,1.73,-1.66]],.02),u(i,.065,.02,.1,R,1.72,-1.68,e.rubber),u(i,.065,.04,.16,R,.64,-1.91,e.trim)});for(let R=.68;R<1.7;R+=.19)u(i,.32,.025,.035,-.5,R,-1.99,e.darkmetal);for(let R of i.children.slice(v))R.position.z+=.078}),x(["led","lamp_bar20"],()=>{let v=E?1.91:1.77,R=w.has("lamp_bar20")?.51:1.02;u(i,R,.065,.085,0,v,.68,e.trim);for(let C=-R/2+.035;C<=R/2-.03;C+=.06)d(i,.023,.023,.008,C,v,.726,e.reflector,"z",16),d(i,.009,.009,.01,C,v,.734,a.bar,"z",12);for(let C of[-R*.46,R*.46])u(i,.014,.065,.06,C,v-.05,.68,e.darkmetal);for(let C=.65;C<.7;C+=.012)u(i,R-.03,.075,.004,0,v,C,e.darkmetal)}),x(["pods","lamp_cube"],()=>[-1,1].forEach(v=>y(v*.78,1.22,.92,w.has("pods")?.062:.043,"combo",w.has("pods")))),x(["lamp_round_spot","lamp_round_flood"],()=>[-1,1].forEach(v=>y(v*.28,.87,2.08,.089,w.has("lamp_round_flood")?"flood":"spot",!0))),x(["lamp_fog","lamp_dual"],()=>[-1,1].forEach(v=>y(v*.62,.62,2.01,.043,w.has("lamp_dual")?"dual":"fog"))),x(["lamp_compact_bar"],()=>{u(i,.23,.073,.105,0,.76,2.07,e.trim);for(let v of[-.081,-.027,.027,.081])d(i,.023,.023,.012,v,.76,2.13,e.reflector,"z"),d(i,.009,.009,.015,v,.76,2.14,a.driving,"z");u(i,.06,.05,.055,0,.7,2.07,e.darkmetal)}),x(["lamp_work"],()=>[-1,1].forEach(v=>{y(v*.58,1.79,-1.77,.026,"work",!1,!0),u(i,.055,.065,.065,v*.58,1.725,-1.75,e.darkmetal)})),x(["rtt"],()=>{let v=E?1.95:1.91;u(i,1.34,.18,2.1,0,v,-.42,e.canvas),u(i,1.39,.055,2.13,0,v+.105,-.42,e.trim),u(i,1.35,.028,2.1,0,v-.1,-.42,e.darkmetal);for(let R of[-1,1])for(let C of[-1.1,.3])u(i,.018,.1,.045,R*.68,v,C,e.trim)}),x(["awning"],()=>{let v=E?1.92:1.78;d(i,.061,.061,2.25,.82,v,-.5,e.canvas,"z");for(let R of[-1.35,.35])u(i,.11,.03,.055,.78,v-.05,R,e.darkmetal)}),x(["boards"],()=>{let v=w.has("rtt")?E?2.1:2.06:E?1.88:1.83;[-.32,.32].forEach(R=>{u(i,.24,.035,1,R,v,-.4,e.accent);for(let C of[-.75,-.05])u(i,.11,.035,.04,R,v-.03,C,e.trim),d(i,.012,.012,.04,R,v+.025,C,e.metal,"y",8);for(let C=-.8;C<0;C+=.1)for(let D of[-.075,0,.075])d(i,.012,.014,.022,R+D,v+.027,C,e.accent,"y",6)})}),x(["mudflaps"],()=>[-1,1].forEach(v=>[-1.295,1.295].forEach(R=>{let C=new Ot;C.moveTo(-.145,.51),C.lineTo(.145,.51),C.lineTo(.126,.19),C.quadraticCurveTo(.12,.175,.105,.175),C.lineTo(-.105,.175),C.quadraticCurveTo(-.12,.175,-.126,.19),C.closePath();let D=new Tn(C,{depth:.007,bevelEnabled:!1,curveSegments:4}),L=D.attributes.position;for(let G=0;G<L.count;G++)L.setZ(G,L.getZ(G)-Math.max(0,.51-L.getY(G))*.11);D.computeVertexNormals();let F=h(D,e.rubber,i,v*.75,0,R-.405);F.name="Mudflap rubber",u(i,.25,.025,.012,v*.75,.5,R-.402,e.darkmetal);for(let G of[-.095,.095])d(i,.007,.007,.012,v*.75+G,.499,R-.392,e.metal,"z",8)}))),x(["sparecover"],()=>i.add(Zp(e,t?.sBadgeGeometry))),x(["bonnetguard"],()=>{let v=[];for(let D=0;D<=24;D++){let L=-.69+D*1.38/24;v.push(new I(L,1.17-.03*(Math.abs(L)/.69)**4,1.78-.035*(Math.abs(L)/.69)**4))}let R=new pi(v),C=new Ot;C.moveTo(-.008,-.027),C.lineTo(.008,-.027),C.quadraticCurveTo(.016,.025,.01,.048),C.lineTo(-.003,.048),C.quadraticCurveTo(.003,.015,-.008,-.027),h(new Tn(C,{steps:48,bevelEnabled:!1,extrudePath:R}),e.trim,i,0,0,0)}),x(["spoiler"],()=>{let v=i.children.length,R=u(i,1.4,.045,.22,0,1.744,-1.76,e.trim);R.rotation.x=.08;for(let C of[-.6,.6])u(i,.12,.065,.14,C,1.7,-1.72,e.trim);for(let C of i.children.slice(v))C.position.z+=.078}),x(["visors"],()=>i.add(Jp(e.smoked))),x(["hingecovers"],()=>[-1,1].forEach(v=>[.63,-.32].forEach(R=>[.72,1.04].forEach(C=>u(i,.035,.065,.1,v*(t?.78:.807),C,R,e.metal))))),x(["cladding"],()=>[-1,1].forEach(v=>u(i,.035,.15,1.77,v*(t?.759:.787),.65,-.08,e.textured))),x(["skid"],()=>u(i,1.22,.045,1.22,0,.38,.85,e.metal)),x(["headlamps"],()=>(t?[-.55,.55]:[-.6,.6]).forEach(v=>{let R=i.children.length,C=t?.977:.95,D=1.889;d(i,.117,.117,.05,v,C,D-.035,e.trim,"z",64),h(new jt(.11,.005,12,64),e.chrome,i,v,C,D),h(new jt(.099,.005,12,64),e.white,i,v,C,D+.008);for(let F of[-.045,.036]){d(i,F>0?.043:.03,F>0?.043:.03,.014,v,C+F,D+.005,e.reflector,"z",40);let G=h(new Dn(F>0?.035:.023,32,20),e.lens,i,v,C+F,D+.016);G.scale.z=.38}for(let F of[-1,1])for(let G of[-.025,0,.025])u(i,.022,.012,.008,v+F*.069,C+G,D+.012,e.reflector);let L=new je;L.position.set(v,C,0),i.add(L);for(let F of i.children.slice(R,-1))F.position.x-=v,F.position.y-=C,L.add(F);L.scale.set(.9,.9,1)})),x(["dashcam"],()=>{u(i,.1,.055,.055,-.25,1.55,.62,e.trim),d(i,.017,.017,.012,-.25,1.55,.654,e.lens,"z"),u(i,.03,.04,.018,-.25,1.594,.62,e.trim)}),x(["headunit"],()=>{u(i,.26,.165,.028,0,1.225,.334,e.trim),u(i,.232,.137,.004,0,1.225,.318,e.glass);for(let v of[-.1,.1])d(i,.008,.008,.007,v,1.152,.315,e.chrome,"z")}),x(["doortrim"],()=>i.add(cm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()})));let S=n!=="3door"&&w.has("touring");S&&x(["touring"],()=>i.add(um(e,{camp:b.touringMode==="camp"&&!b.drivingPreview,drawers:!!b.touringDrawers&&!b.drivingPreview}))),S||x(["mod_reardoor_molle"],()=>i.add(Hc(e,n))),n!=="3door"&&(S||x(["mod_halfmolly_5door"],()=>i.add(Vc(e))),S||x(["exploresetups_drawer_5door"],()=>i.add(Wc(e)))),!S&&!w.has("mod_halfmolly_5door")&&x(["molle"],()=>[-1,1].forEach(v=>{u(i,.012,.3,.42,v*.71,1.4,-1.37,e.trim);for(let R=-1.52;R<-1.2;R+=.08)for(let C=1.3;C<1.53;C+=.08)u(i,.015,.025,.045,v*.722,C,R,e.metal)})),!S&&!w.has("exploresetups_drawer_5door")&&x(["drawer"],()=>{let v=t?.8:.98;u(i,1.2,.22,.58,0,v,-1.34,e.darkmetal);for(let R of[-.3,.3])u(i,.565,.17,.018,R,v,-1.638,e.trim),u(i,.12,.032,.025,R,v+.035,-1.655,e.metal);u(i,1.19,.012,.57,0,v+.116,-1.34,e.seat)}),S||x(["shelf"],()=>{u(i,1.3,.025,.58,0,1.18,-1.3,e.trim);for(let v of[-.6,.6])u(i,.025,.08,.56,v,1.21,-1.3,e.trim)}),x(["armrest"],()=>{u(i,.2,.14,.35,0,.98,-.2,e.seat),t&&u(i,.13,.12,.22,0,.88,-.2,e.trim)}),x(["mats"],()=>[-.36,.36].forEach(v=>{let R=t?.685:.71;u(i,.36,.018,.48,v,R,.42,e.trim);for(let C=.22;C<.64;C+=.04)u(i,.31,.006,.012,v,R+.011,C,e.darkmetal)})),x(["seats"],()=>{S||i.add(hm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()}))}),x(["steering"],()=>{h(new jt(.123,.016,12,64),e.upholstery,i,-.38,1.16,.26);for(let v of[-1,1])u(i,.065,.025,.032,-.38+v*.075,1.16,.25,e.upholstery)}),x(["ambient"],()=>{u(i,1.22,.004,.008,0,1.13,.355,e.ambient);for(let v of[-.37,.37])u(i,.28,.004,.008,v,.82,.41,e.ambient)}),gm({parts:w,body:n,mats:e,rig:i,show:x}),_.push(...["tires","lift","autostylenn_big_suzuki_grille","autostylenn_cursive_grille","autostylenn_s_grille"].filter(v=>w.has(v)));for(let v of i.children)!v.userData.finishTarget&&!v.userData.grilleBadge&&(v.userData.finishTarget="hardware");return _}function y(w,b,_,x,E,S=!1,v=!1){let R=new je;R.position.set(w,b,_),v&&(R.rotation.y=Math.PI),i.add(R),S?d(R,x,x*.96,.072,0,0,0,e.trim,"z",48):u(R,x*2,x*2,.075,0,0,0,e.trim);for(let C=-.03;C<.025;C+=.012)u(R,x*1.7,x*1.8,.004,0,0,C,e.darkmetal);for(let C of[-1,1])u(R,.009,x*.85,.04,C*(x+.007),-x*.6,-.005,e.darkmetal),d(R,.007,.007,.012,C*(x+.013),0,0,e.chrome,"x",8);u(R,x*2+.025,.008,.045,0,-x*1.04,0,e.darkmetal);for(let C of[-1,1])for(let D of[-1,1]){d(R,x*.36,x*.28,.012,C*x*.4,D*x*.4,.042,e.reflector,"z",24);let L=h(new Dn(x*.24,16,10),a[E],R,C*x*.4,D*x*.4,.052);L.scale.z=.23}if(S){let C=h(new jt(x*.91,.004,8,48),e.darkmetal,R,0,0,.047);d(R,x*.87,x*.87,.003,0,0,.059,e.lens,"z",48)}else u(R,x*1.78,x*1.78,.003,0,0,.06,e.lens)}return p}var jv={CabinDashboard:{color:"#34393c",roughness:.83,scale:38,strength:24e-5,type:"grain"},WovenCabinFabric:{color:"#353b40",roughness:.96,scale:17,strength:45e-5,type:"weave"},CabinSeatInsert:{color:"#535c62",roughness:.98,scale:20,strength:5e-4,type:"weave"},CabinCarpet:{color:"#252a2e",roughness:1,scale:24,strength:7e-4,type:"grain"},BrightChrome:{color:"#b1b8bd",roughness:.31,metalness:.78,scale:45,strength:6e-5,type:"grain"},WindowGlass:{color:"#10171b",roughness:.23,metalness:.12,scale:45,strength:0,type:"grain",opaque:!0}};function Yv(i,e){let n=new Uint8Array(65536),s=617;for(let a=0;a<128;a++)for(let o=0;o<128;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=i==="weave"?(((o>>2)+(a>>2))%2?21:-21)+Math.sin(o*Math.PI/2)*12+Math.cos(a*Math.PI/2)*7:0,c=Math.max(0,Math.min(255,128+l+(s/4294967296-.5)*42)),h=(a*128+o)*4;n[h]=n[h+1]=n[h+2]=c,n[h+3]=255}let r=new wn(n,128,128,tn);return r.wrapS=r.wrapT=Qt,r.repeat.set(e,e),r.magFilter=It,r.minFilter=Ln,r.generateMipmaps=!0,r.needsUpdate=!0,r}function xm(i){let e=new Map,t=new Map;return i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=jv[n.material.name];if(!s)return;let r=t.get(n.material);if(!r){r=n.material.clone(),r.color.set(s.color),r.roughness=s.roughness,r.metalness=s.metalness||0,s.opaque&&(r.transparent=!1,r.opacity=1,r.depthWrite=!0);let a=s.type+s.scale,o=e.get(a);o||(o=Yv(s.type,s.scale),e.set(a,o)),r.bumpMap=o,r.bumpScale=s.strength,s.type==="weave"&&(r.map=o),r.envMapIntensity=.45,r.needsUpdate=!0,t.set(n.material,r),r.addEventListener("dispose",()=>o.dispose())}n.material=r,n.userData.disposableMaterial=!0}),{dispose(){for(let n of e.values())n.dispose();for(let n of t.values())n.dispose()},count:t.size}}var _m=new WeakMap,Kv=new Set(["GrilleAnthracite","MouldedPlastic","GlossBlackGrille","WheelGunmetal","BrightChrome","GrilleLettering"]),Jv=i=>typeof i=="string"&&(i==="body"||/^#[0-9a-f]{6}$/i.test(i))?i:"original";function Ws(i,e){let t=new ot;for(let[n,s]of Object.entries(i.attributes)){let r=[];for(let a of e)for(let o=0;o<s.itemSize;o++)r.push(s.getComponent(a,o));t.setAttribute(n,new Ge(r,s.itemSize))}return t}function Zv(i,e){if(i.name!=="OEMGrille"||i.userData.badgeSeparated)return;i.userData.badgeSeparated=!0,i.updateWorldMatrix(!0,!0);let t=[];i.traverse(n=>{n.isMesh&&n.material.name==="BrightChrome"&&t.push(n)});for(let n of t){let s=n.geometry,r=s.attributes.position,a=s.index,o=[],l=[],c=new I,h=new Ue().copy(i.matrixWorld).invert().multiply(n.matrixWorld),u=e==="3door"?-.17:0;for(let f=0;f<(a?.count||r.count);f+=3){let g=[0,1,2].map(m=>a?a.getX(f+m):f+m);(g.every(m=>(c.fromBufferAttribute(r,m).applyMatrix4(h),Math.abs(c.x)<.09&&c.z>1.898+u))?l:o).push(...g)}if(!l.length)continue;let d=new Te(Ws(s,l),n.material);d.name="FactoryGrilleEmblem",d.userData.grilleBadge=!0,d.position.copy(n.position),d.quaternion.copy(n.quaternion),d.scale.copy(n.scale),d.castShadow=n.castShadow,d.receiveShadow=n.receiveShadow,n.parent.add(d),n.geometry=Ws(s,o),s.dispose()}}function Ju(i,e={},t="#d9b744",n="5door"){i&&(Zv(i,n),i.traverse(s=>{if(!s.isMesh||!Kv.has(s.material?.name)&&!s.userData.grilleBadge)return;let r=_m.get(s);if(!r){let l=s.material;s.material=l.clone(),s.userData.disposableMaterial=!0,r={original:l.clone(),badge:!!s.userData.grilleBadge||l.name==="GrilleLettering"},_m.set(s,r),s.material.addEventListener("dispose",()=>r.original.dispose())}let a=s.material;a.copy(r.original);let o=Jv(e[r.badge?"badgeColour":"grilleColour"]);a.userData.explicitSurfaceColour=Object.hasOwn(e,r.badge?"badgeColour":"grilleColour"),o!=="original"?(a.color.set(o==="body"?t:o),a.vertexColors=!1,a.metalness=.12,a.roughness=.34):e.finish==="blackout"&&["BrightChrome","GrilleLettering"].includes(r.original.name)&&(a.color.set("#151b1e"),a.vertexColors=!1,a.metalness=.05,a.roughness=.78),a.needsUpdate=!0}))}var Zu=new WeakMap;function $v(i,e="5door"){if(!i||Zu.has(i))return Zu.get(i);i.updateWorldMatrix(!0,!0);let t=i.parent?.matrixWorld.clone().invert()||new Ue,n=new je;n.name="ConfigurableSeating",n.applyMatrix4(i.matrix.clone().invert()),i.add(n);let s={groups:{},materials:[],fabricKey:"",body:e},r=[];i.traverse(h=>{h.isMesh&&!h.userData.cabinUpgrade&&["WovenCabinFabric","CabinSeatInsert","BrightChrome"].includes(h.material?.name)&&r.push(h)});let a=e==="3door"?-.17:0,o=new I;for(let h of r){let u=h.geometry,d=u.attributes.position,f=u.index,g=t.clone().multiply(h.matrixWorld),M={keep:[],rear:[],passengerBack:[],passengerHead:[],front:[]};for(let m=0;m<(f?.count||d.count);m+=3){let p=[0,1,2].map(x=>f?f.getX(m+x):m+x),y=0,w=0,b=0;for(let x of p)o.fromBufferAttribute(d,x).applyMatrix4(g),y+=o.x/3,w+=o.y/3,b+=o.z/3;let _="keep";h.material.name==="BrightChrome"?y>.22&&y<.53&&w>1.2&&w<1.3&&Math.abs(b-(-.18+a))<.035&&(_="passengerHead"):w>.73&&w<1.46&&b<(e==="3door"?-.44:-.55)?_="rear":Math.abs(y)<.64&&Math.abs(y)>.1&&w>.74&&w<1.44&&b>-.32+a&&b<.42+a&&(_=y>0&&w>1.263?"passengerHead":y>0&&w>.88&&b<-.012+a?"passengerBack":"front"),M[_].push(...p)}h.geometry=Ws(u,M.keep);for(let m of["rear","passengerBack","passengerHead","front"])if(M[m].length){let p=s.groups[m];p||(p=new je,p.name="Seating_"+m,n.add(p),s.groups[m]=p);let y=Ws(u,M[m]);if(y.applyMatrix4(g),g.determinant()<0){let b=[];for(let _=0;_<y.attributes.position.count;_+=3)b.push(_,_+2,_+1);y.setIndex(b)}let w=new Te(y,h.material.clone());w.name=h.material.name==="CabinSeatInsert"?"SeatWovenCentre":h.material.name==="BrightChrome"?"PassengerHeadrestPost":"SeatOuterBolster",w.userData.cabinUpgrade=!0,w.userData.seatInsert=h.material.name==="CabinSeatInsert",w.userData.disposableMaterial=!0,w.userData.originalMaterial=h.material,w.castShadow=w.receiveShadow=!0,p.add(w),h.material.name!=="BrightChrome"&&s.materials.push(w)}u.dispose()}let l=s.groups.passengerBack;if(l){let h=new I(.37,.84,-.11+a);l.position.copy(h),l.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}let c=s.groups.rear;if(c){let h=new I(0,.82,e==="3door"?-.88:-1.055);c.position.copy(h),c.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}return Zu.set(i,s),s}function ym(i,{body:e="5door",seats:t=!1,fabric:n="canvas",colour:s="#a38b69",touring:r=!1,camp:a=!1}={}){let o=$v(i,e);if(!o)return;let l=[t,Gs(n),s].join(":");if(o.fabricKey!==l){for(let c of o.materials){let h=c.material;c.material=t?Xn(c.userData.seatInsert?n:n==="leather"?"leather":"canvas",c.userData.seatInsert||["canvas","leather"].includes(n)?s:"#303536"):c.userData.originalMaterial.clone(),c.material.name=c.userData.seatInsert?"CabinSeatInsert":"SeatCoverBolster",c.material.vertexColors=!!c.geometry.attributes.color,h.dispose()}o.fabricKey=l}return o.groups.rear&&(o.groups.rear.visible=!r),o.groups.passengerBack&&(o.groups.passengerBack.rotation.x=r&&a?-Math.PI/2:0),o.groups.passengerHead&&(o.groups.passengerHead.visible=!(r&&a)),i.userData.interiorLayout={touring:!!r,camp:!!(r&&a),fabric:Gs(n),seats:!!t},o}var jc=Object.freeze({P:.35,R:.31,N:.27,D:.23,2:.19,L:.15}),Yc=Object.freeze({"2H":.13,"4H":.085,"4L":.025});function $u(i,e){return(-40+Math.min(1,Math.max(0,i/e))*260)*Math.PI/180}function Qv(i){return{wheel:-(i.steer||0)*14,gearZ:jc[i.gear]??jc.N,rangeZ:Yc[i.range]??Yc["2H"],parking:i.parking?-.52:0,hdc:i.hdcActive?"ACTIVE":i.hdc?"READY":"OFF",tachometer:$u(i.rpm||0,7e3),speedometer:$u(Math.abs(i.speed||0)*3.6,180)}}function vm(i,e,t){let n=t==="3door"?-.17:0,s=new je;return s.name="AnimatedSteeringWheel",s.position.set(-.38,1.16,.26+n),e.add(s),i.updateWorldMatrix(!0,!0),i.traverse(r=>{if(!r.isMesh)return;let a=r.geometry,o=a.index?a.toNonIndexed():a.clone(),l=new ot;for(let[f,g]of Object.entries(o.attributes)){let M=[];for(let m=0;m<g.count;m++)for(let p=0;p<g.itemSize;p++)M.push(g.getComponent(m,p));l.setAttribute(f,new Ge(M,g.itemSize))}o.dispose(),l.applyMatrix4(r.matrixWorld);let c=l.attributes.position,h=[],u=[];for(let f=0;f<c.count;f+=3){let g=(c.getX(f)+c.getX(f+1)+c.getX(f+2))/3,M=(c.getY(f)+c.getY(f+1)+c.getY(f+2))/3,m=(c.getZ(f)+c.getZ(f+1)+c.getZ(f+2))/3-n,p=Math.hypot(g+.38,M-1.16)<.182&&m>.218&&m<.282,y=M>.865&&M<1.055&&(Math.abs(g)<.032&&Math.abs(m-.26)<.045||Math.abs(g+.07)<.032&&Math.abs(m-.15)<.045),w=r.material.name==="RearLampRed"&&M>1.18&&M<1.27&&m>.29&&m<.32;(p?u:y||w?[]:h).push(f,f+1,f+2)}function d(f){let g=new ot;for(let[M,m]of Object.entries(l.attributes)){let p=[];for(let y of f)for(let w=0;w<m.itemSize;w++)p.push(m.getComponent(y,w));g.setAttribute(M,new Ge(p,m.itemSize))}return g}if(u.length){if(r.matrixWorld.determinant()<0)for(let M=0;M<u.length;M+=3)[u[M+1],u[M+2]]=[u[M+2],u[M+1]];let f=d(u);f.translate(.38,-1.16,-.26-n);let g=new Te(f,r.material);g.castShadow=!0,s.add(g)}r.geometry=d(h).applyMatrix4(r.matrixWorld.clone().invert()),a.dispose(),l.dispose()}),s.rotation.x=.27,s}function Mm(i,e,t){let n=new je;n.name="LiveCabinControls",n.position.z=t==="3door"?-.17:0,i.add(n);let s=new Ze({color:"#222a2b",roughness:.62}),r=new Ze({color:"#7b8383",roughness:.28,metalness:.7});function a(_,x,E,S,v,R,C=s){let D=new Te(new Bt(_,x,E,2,.008),C);return D.position.set(S,v,R),D.castShadow=!0,n.add(D),D}function o(_,x,E,S){let v=new je;v.position.set(_,x,E),n.add(v);let R=new Te(new Gt(.006,.008,S,20),r);R.position.y=S/2,v.add(R);let C=new Te(new Bt(.051,.043,.051,5,.015),s);return C.position.y=S,C.rotation.x=.12,v.add(C),v}let l=new Ze({color:"#0a1012",roughness:.94});a(.14,.012,.29,.015,.863,.25),a(.018,.002,.235,.028,.871,.25,l),a(.07,.012,.18,-.095,.865,.085),a(.012,.002,.14,-.095,.873,.085,l);let c=o(.028,.874,jc.N,.105),h=o(-.095,.874,Yc["2H"],.073),u=[-.3,-.46].map(_=>{let x=new je;x.position.set(_,1.223,.304),n.add(x);let E=new Te(new an(.044,.0025,.0015),new Ft({color:"#e87856"}));return E.position.x=.021,x.add(E),x}),d=new je;d.position.set(.105,.8,-.075),n.add(d);let f=new Te(new Bt(.027,.032,.16,2,.008),s);f.position.z=.065,d.add(f);let g=[];function M(_,x,E,S,v,R,C=!1){let D=document.createElement("canvas");D.width=512,D.height=256;let L=D.getContext("2d");L.fillStyle="#20292a",L.fillRect(0,0,512,256),L.fillStyle="#f1eee0",L.textAlign="center",L.textBaseline="middle",L.font=`600 ${_.length>1?160:210}px sans-serif`,L.fillText(_,256,128,480);let F=new xn(D);F.colorSpace=bt,F.anisotropy=4,g.push(F);let G=new Te(new on(x,E),new Ft({map:F}));return G.position.set(S,v,R),G.rotation.set(C?-Math.PI/2:0,C?0:Math.PI,C?Math.PI:0),n.add(G),{canvas:D,ctx:L,texture:F}}for(let[_,x]of Object.entries(jc))M(_,.014,.012,-.017,.873,x,!0);for(let[_,x]of Object.entries(Yc))M(_,.024,.012,-.127,.875,x,!0);function m(_,x,E,S,v,R){let C=document.createElement("canvas");C.width=1024,C.height=576;let D=C.getContext("2d");R(D,1024,576);let L=new xn(C);L.colorSpace=bt,L.anisotropy=8,g.push(L);let F=new Ft({map:L,toneMapped:!1}),G=new Te(new on(_,x),F);G.position.set(E,S,v),G.rotation.y=Math.PI,n.add(G)}m(.198,.1115,0,1.232,.34,(_,x,E)=>{_.fillStyle="#0c1115",_.fillRect(0,0,x,E),_.fillStyle="#d7dcd9",_.font="24px sans-serif",_.fillText("FM  \u2022  09:41",34,43),_.textAlign="right",_.fillText("CONNECTED",x-34,43),_.textAlign="left",[["Audio","FM  91.1","#a86e36"],["Phone","Connect device","#447268"],["Navigation","Explore a new route","#405d75"],["Settings","Vehicle & display","#6c6252"]].forEach(([v,R,C],D)=>{let L=26+D%2*498,F=78+Math.floor(D/2)*235;_.strokeStyle=C,_.lineWidth=3,_.strokeRect(L,F,474,211),_.fillStyle=C,_.fillRect(L,F,8,211),_.fillStyle="#d9ddd9",_.font="34px sans-serif",_.fillText(v,L+28,F+64),_.fillStyle="#a5b0b1",_.font="25px sans-serif",_.fillText(R,L+28,F+117),_.beginPath(),_.arc(L+420,F+163,16,0,Math.PI*2),_.stroke()})});for(let[_,x]of[[-.083,"AUTO"],[0,"22.0"],[.083,"A/C"]])m(.031,.024,_,1.039,.275,(E,S,v)=>{E.fillStyle="#101315",E.fillRect(0,0,S,v),E.fillStyle="#bd7551",E.textAlign="center",E.textBaseline="middle",E.font=`500 ${x==="22.0"?235:180}px sans-serif`,E.fillText(x,S/2,v/2,S*.85)});for(let[_,x]of[[-.095,"12V"],[-.047,"USB"],[0,"\u2198"],[.047,"ESP"],[.095,"OFF"]])m(.021,.013,_,.965,.299,(E,S,v)=>{E.fillStyle="#171c1e",E.fillRect(0,0,S,v),E.fillStyle="#aeb6b3",E.font="190px sans-serif",E.textAlign="center",E.textBaseline="middle",E.fillText(x,S/2,v/2,S*.88)});let p=M("",.044,.047,-.38,1.216,.299),y=new Te(new Dn(.0035,8,6),new Ft({color:"#dc6041"}));y.position.set(-.48,1.255,.305),n.add(y);let w=[[-.4,.073],[-.26,.045]].map(([_,x])=>{let E=new je;E.name=_<-.3?"BrakePedal":"AcceleratorPedal",E.position.set(_,.8,.64),n.add(E);let S=new Te(new Bt(x,.09,.018,2,.004),s);S.position.set(0,-.052,-.018),E.add(S);for(let v=0;v<4;v++){let R=new Te(new an(x*.82,.003,.003),r);R.position.set(0,-.08+v*.018,-.029),E.add(R)}return E});for(let[_,x,E]of[[-.3,7,"x1000"],[-.46,180,"km/h"]]){let S=document.createElement("canvas");S.width=S.height=512;let v=S.getContext("2d");v.fillStyle="#151a1c",v.beginPath(),v.arc(256,256,256,0,Math.PI*2),v.fill();let R=x===7?7:9,C=(F,G)=>{let q=$u(F,1);return[256-Math.cos(q)*G,256-Math.sin(q)*G]};for(let F=0;F<=R*5;F++){let G=F%5===0,q=F/(R*5),Q=C(q,G?207:219),ue=C(q,235);v.strokeStyle=x===7&&q>5.8/7?"#b85c39":"#c8c4b8",v.lineWidth=G?4:2,v.beginPath(),v.moveTo(...Q),v.lineTo(...ue),v.stroke(),G&&(v.fillStyle="#cda37c",v.font="500 31px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText(String(Math.round(q*x)),...C(q,170)))}v.fillStyle="#a7aca7",v.font="20px sans-serif",v.textAlign="center",v.fillText(E,256,356);let D=new xn(S);D.colorSpace=bt,D.anisotropy=4,g.push(D);let L=new Te(new Na(.053,64),new Ft({map:D}));L.position.set(_,1.223,.306),L.rotation.y=Math.PI,n.add(L)}let b="";return{setVisible(_){n.visible=!!_},update(_){let x=Qv(_);e.rotation.z=x.wheel,c.position.z=x.gearZ,h.position.z=x.rangeZ,d.rotation.x=x.parking,y.visible=!!_.parking,u[0].rotation.z=x.tachometer,u[1].rotation.z=x.speedometer,w[0].rotation.x=-(_.braking||_.brakeInput||0)*.24,w[1].rotation.x=-(_.throttle||0)*.22;let E=`${_.gear} ${_.range}`,S=`${((_.distance||0)/1e3).toFixed(1)} km`;if(E+S!==b){b=E+S;let{ctx:v,texture:R}=p;v.fillStyle="#a6b4a2",v.fillRect(0,0,512,256),v.fillStyle="#27312b",v.font="600 78px monospace",v.fillText(E,256,87,480),v.font="52px monospace",v.fillText(S,256,180,480),R.needsUpdate=!0}return x},dispose(){n.removeFromParent();let _=new Set,x=new Set;n.traverse(E=>{E.geometry&&_.add(E.geometry),E.material&&x.add(E.material)}),_.forEach(E=>E.dispose()),x.forEach(E=>E.dispose()),g.forEach(E=>E.dispose())},snapshot(){return{steeringWheel:e.rotation.z,gearZ:c.position.z,rangeZ:h.position.z,parking:d.rotation.x,brakePedal:w[0].rotation.x,acceleratorPedal:w[1].rotation.x}}}}var Qu=Object.freeze([{id:"oem",name:"Factory finish",colour:null},{id:"graphite",name:"Satin graphite",colour:"#454b50"},{id:"bronze",name:"Satin bronze",colour:"#987345"},{id:"silver",name:"Machined silver",colour:"#b5b9bc"},{id:"black",name:"Black",colour:"#171b1d"}].map(i=>Object.freeze({...i,description:"Representative cosmetic wheel finish, not a specific product or fitment claim."}))),ed=new WeakMap,Sm=new Set(["StockWheels","AllTerrainWheels","SpareWheel"]);function e1(i,e){for(let t=i;t;t=t.parent){if(Sm.has(t.name))return t;if(/Cabin|Grille|BodyShell|Bumper/.test(t.name))return null;if(t===e)break}return!i.name&&!i.parent?.name?i.parent:null}function t1(i,e){let t=i.geometry,n=i.material,s=t.attributes.position;if(!s)return null;i.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!0,!1);let r=new Ue().copy(e.matrixWorld).invert().multiply(i.matrixWorld),a=[],o=new I,l=1/0,c=-1/0,h=1/0,u=-1/0,d=1/0,f=-1/0;for(let re=0;re<s.count;re++)o.fromBufferAttribute(s,re).applyMatrix4(r),a.push(o.clone()),l=Math.min(l,o.x),c=Math.max(c,o.x),h=Math.min(h,o.y),u=Math.max(u,o.y),d=Math.min(d,o.z),f=Math.max(f,o.z);let g=Sm.has(e.name),M=e.name==="SpareWheel",m=1/0,p=-1/0,y=1/0,w=-1/0,b=1/0,_=-1/0;if(g){let re=e.matrixWorld.clone().invert();e.traverse(le=>{let Le=le.geometry?.attributes.position;if(!Le)return;le.updateWorldMatrix(!0,!1);let Re=re.clone().multiply(le.matrixWorld);for(let rt=0;rt<Le.count;rt++)o.fromBufferAttribute(Le,rt).applyMatrix4(Re),m=Math.min(m,o.y),p=Math.max(p,o.y),y=Math.min(y,o.z),w=Math.max(w,o.z),b=Math.min(b,o.x),_=Math.max(_,o.x)})}let x=g&&!M,E=g?(m+p)/2:0,S=g?(y+w)/2:0,v=g?(b+_)/2:0,R=x?(w-y-p+m)/2:0,C=new Uint8Array(s.count),D=new Float32Array(s.count*3),L=t.attributes.color,F=Math.sign(e.parent?.position.x||1);for(let re=0;re<a.length;re++){let le=a[re],Le=x?S+(le.z>=S?R:-R):S,Re=Math.hypot(le.y-E,le.z-Le),We=(x?Math.sign(le.x):F)>0?c-le.x:le.x-l;C[re]=+(Re>.165||Re>.082&&We<.055);for(let tt=0;tt<3;tt++)D[re*3+tt]=n.color[["r","g","b"][tt]]*(n.vertexColors&&L?L.getComponent(re,tt):1)}if(!C.some(Boolean))return null;let G=t.clone(),q=n.clone();G.setAttribute("color",new Ge(D,3));let Q=G.attributes.color.array;q.color.set("#ffffff"),q.vertexColors=!0,q.userData.wheelFinishOriginal={name:n.name,color:n.color.getHexString(),vertexColors:n.vertexColors};let ue={originalGeometry:t,originalMaterial:n,geometry:G,material:q,mask:C,base:D,colours:Q,restoring:!1,released:!1},Z=()=>{ue.restoring||ue.released||(ue.released=!0,t.dispose(),n.dispose())};return G.addEventListener("dispose",Z),q.addEventListener("dispose",Z),i.geometry=G,i.material=q,ed.set(i,ue),ue}function n1(i,e){e.restoring=!0,i.geometry=e.originalGeometry,i.material=e.originalMaterial,e.geometry.dispose(),e.material.dispose(),ed.delete(i)}function wm(i,e){let t=0;return i?.traverse&&(i.updateWorldMatrix?.(!0,!0),i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=ed.get(n);if(e.id==="oem"){s&&(n1(n,s),t++);return}if(!s){if(!["MachinedAlloy","WheelGunmetal"].includes(n.material?.name))return;let a=e1(n,i);if(!a||(s=t1(n,a),!s))return}let r=new Ve(e.colour);for(let a=0;a<s.mask.length;a++)for(let o=0;o<3;o++)s.colours[a*3+o]=s.mask[a]?r[["r","g","b"][o]]:s.base[a*3+o];s.geometry.attributes.color.needsUpdate=!0,s.material.userData.wheelFinish=e.id,t++})),t}function Tm(i,e="oem"){return wm(i,Qu.find(t=>t.id===e)||Qu[0])}function Em(i,e){return wm(i,/^#[0-9a-f]{6}$/i.test(e||"")?{id:"custom",colour:e}:Qu[0])}function Am(i,e,t="5door"){if(!i||!e?.attributes.position.count||i.userData.steeringBadgeFitted)return null;i.userData.steeringBadgeFitted=!0,i.updateWorldMatrix(!0,!0);let n=t==="3door"?-.17:0,s=[];i.traverse(h=>{h.isMesh&&h.material.name==="BrightChrome"&&s.push(h)});for(let h of s){let u=h.geometry,d=u.attributes.position,f=u.index,g=[],M=new I,m=new Ue().copy(i.parent?.matrixWorld||new Ue).invert().multiply(h.matrixWorld);for(let p=0;p<(f?.count||d.count);p+=3){let y=[0,1,2].map(b=>f?f.getX(p+b):p+b);y.every(b=>(M.fromBufferAttribute(d,b).applyMatrix4(m),Math.abs(M.x+.38)<.04&&Math.abs(M.y-1.16)<.04&&M.z>.218+n&&M.z<.232+n))||g.push(...y)}g.length<(f?.count||d.count)&&(h.geometry=Ws(u,g),u.dispose())}let r=e.clone();r.computeBoundingBox();let a=r.boundingBox.getCenter(new I),o=r.boundingBox.max.x-r.boundingBox.min.x;r.translate(-a.x,-a.y,-a.z),r.scale(.044/o,.044/o,.044/o),r.rotateY(Math.PI),r.translate(-.38,1.16,.222+n);let l=new Ze({name:"SteeringEmblem",color:"#c7cbcc",metalness:.65,roughness:.27}),c=new Te(r,l);return c.name="SteeringSuzukiEmblem",c.userData.disposableMaterial=!0,c.castShadow=!1,c.applyMatrix4(i.matrix.clone().invert()),i.add(c),c}var Rm=new Set(["interior","passenger","doors","driver-door","passenger-door","seats","seatbacks","storage","console","footwell","headliner"]),Cm=new Set(["cabin","cutaway","cargo","doors-cutaway","headliner-cutaway","touring"]);function Pm(i,e="5door"){let t=e==="3door"?-.17:0,n={interior:{eye:[-.38,1.48,-.08],yaw:0,pitch:-.45},passenger:{eye:[.38,1.48,-.08],yaw:0,pitch:-.38},doors:{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"driver-door":{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"passenger-door":{eye:[-.24,1.4,.2],yaw:Math.PI/2,pitch:-.3},seats:{eye:[.04,1.43,.14],yaw:Math.PI,pitch:-.48},seatbacks:{eye:[.02,1.43,-.64],yaw:0,pitch:-.6},storage:{eye:[.01,1.41,-.38],yaw:Math.PI,pitch:-.43},console:{eye:[.02,1.37,-.15],yaw:0,pitch:-.94},footwell:{eye:[-.39,1.13,.16],yaw:0,pitch:-.93},headliner:{eye:[.02,1.25,-.4],yaw:Math.PI,pitch:.72}},s=n[i]||n.interior;return{...s,eye:[s.eye[0],s.eye[1],s.eye[2]+t]}}var Kr=class extends ot{constructor(e=new Te,t=new I,n=new Sn,s=new I(1,1,1)){super();let r=[],a=[],o=[],l=new I,c=new at().getNormalMatrix(e.matrixWorld),h=new Ue;h.makeRotationFromEuler(n),h.setPosition(t);let u=new Ue;u.copy(h).invert(),d(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2)),a.length>0&&this.setAttribute("normal",new Ge(a,3));function d(){let m=[],p=new I,y=new I,w=e.geometry,b=w.attributes.position,_=w.attributes.normal;if(w.index!==null){let x=w.index;for(let E=0;E<x.count;E++)p.fromBufferAttribute(b,x.getX(E)),_?(y.fromBufferAttribute(_,x.getX(E)),f(m,p,y)):f(m,p)}else{if(b===void 0)return;for(let x=0;x<b.count;x++)p.fromBufferAttribute(b,x),_?(y.fromBufferAttribute(_,x),f(m,p,y)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let x=0;x<m.length;x++){let E=m[x];o.push(.5+E.position.x/s.x,.5+E.position.y/s.y),E.position.applyMatrix4(h),r.push(E.position.x,E.position.y,E.position.z),E.normal!==null&&a.push(E.normal.x,E.normal.y,E.normal.z)}}function f(m,p,y=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(u),y?(y.applyNormalMatrix(c),m.push(new Eo(p.clone(),y.clone()))):m.push(new Eo(p.clone()))}function g(m,p){let y=[],w=.5*Math.abs(s.dot(p));for(let b=0;b<m.length;b+=3){let _=0,x,E,S,v,R=m[b+0].position.dot(p)-w,C=m[b+1].position.dot(p)-w,D=m[b+2].position.dot(p)-w,L=R>0,F=C>0,G=D>0;switch(_=(L?1:0)+(F?1:0)+(G?1:0),_){case 0:{y.push(m[b]),y.push(m[b+1]),y.push(m[b+2]);break}case 1:{if(L&&(x=m[b+1],E=m[b+2],S=M(m[b],x,p,w),v=M(m[b],E,p,w)),F){x=m[b],E=m[b+2],S=M(m[b+1],x,p,w),v=M(m[b+1],E,p,w),y.push(S),y.push(E.clone()),y.push(x.clone()),y.push(E.clone()),y.push(S.clone()),y.push(v);break}G&&(x=m[b],E=m[b+1],S=M(m[b+2],x,p,w),v=M(m[b+2],E,p,w)),y.push(x.clone()),y.push(E.clone()),y.push(S),y.push(v),y.push(S.clone()),y.push(E.clone());break}case 2:{L||(x=m[b].clone(),E=M(x,m[b+1],p,w),S=M(x,m[b+2],p,w),y.push(x),y.push(E),y.push(S)),F||(x=m[b+1].clone(),E=M(x,m[b+2],p,w),S=M(x,m[b],p,w),y.push(x),y.push(E),y.push(S)),G||(x=m[b+2].clone(),E=M(x,m[b],p,w),S=M(x,m[b+1],p,w),y.push(x),y.push(E),y.push(S));break}case 3:break}}return y}function M(m,p,y,w){let b=m.position.dot(y)-w,_=p.position.dot(y)-w,x=b/(b-_),E=new I(m.position.x+x*(p.position.x-m.position.x),m.position.y+x*(p.position.y-m.position.y),m.position.z+x*(p.position.z-m.position.z)),S=null;return m.normal!==null&&p.normal!==null&&(S=new I(m.normal.x+x*(p.normal.x-m.normal.x),m.normal.y+x*(p.normal.y-m.normal.y),m.normal.z+x*(p.normal.z-m.normal.z))),new Eo(E,S)}}},Eo=class{constructor(e,t=null){this.position=e,this.normal=t}clone(){let e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}};function Im(i){let e=new Map,t=new Map,n=i.clone();return Dm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Dm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Dm(i.children[n],e.children[n],t)}var Kc=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new od(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Jc(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jc(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ji.extractUrlBase(e);a=Ji.resolveURL(c,this.path)}else a=Ji.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ls(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Om){try{a[gt.KHR_BINARY_GLTF]=new vd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Rd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case gt.KHR_MATERIALS_UNLIT:a[u]=new rd;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Md(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[u]=new Sd;break;case gt.KHR_MESH_QUANTIZATION:a[u]=new wd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function i1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sd=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ds(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ki(h),c.distance=u;break;case"spot":c=new cs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},rd=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new Ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},od=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],sn),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},pd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],sn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,bt)),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jt(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},xd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},_d=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Jc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},yd=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let M=new Ue,m=new I,p=new mn,y=new I(1,1,1),w=new Wi(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),w.setMatrixAt(_,M.compose(m,p,y));let b=null;for(let _ in l)if(_==="_COLOR_0"){let x=l[_];w.instanceColor=new Vi(x.array,x.itemSize,x.normalized)}else if(_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"){if(b===null){let E=w.geometry;b=new ot,b.name=E.name;for(let S in E.attributes)b.setAttribute(S,E.attributes[S]);for(let S in E.morphAttributes)b.morphAttributes[S]=E.morphAttributes[S];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(let S of E.groups)b.addGroup(S.start,S.count,S.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),w.geometry=b}let x=l[_];b.setAttribute(_,new Vi(x.array,x.itemSize,x.normalized))}St.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Om="glTF",Ao=12,Lm={JSON:1313821514,BIN:5130562},vd=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ao,r=new DataView(e,Ao),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Lm.JSON){let c=new Uint8Array(e,Ao+a,o);this.content=n.decode(c)}else if(l===Lm.BIN){let c=Ao+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Md=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ed[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ed[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let M=f.attributes[g],m=l[g];m!==void 0&&(M.normalized=m)}u(f)},o,c,sn,d)})})}},Sd=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},wd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Zc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,M=g-c,m=-2*f+3*d,p=f-d,y=1-m,w=p-d+u;for(let b=0;b!==o;b++){let _=a[M+b+o],x=a[M+b+l]*h,E=a[g+b+o],S=a[g+b]*h;r[b]=y*_+w*x+m*E+p*S}return r}},s1=new mn,Td=class extends Zc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return s1.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nm={9728:Nt,9729:It,9984:Yl,9985:kr,9986:Us,9987:Ln},Fm={33071:In,33648:gr,10497:Qt},td={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},r1={CUBICSPLINE:void 0,LINEAR:Es,STEP:Ts},nd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function l1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c1(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+id(t.attributes):e=i.indices+":"+id(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+id(i.targets[n]);return e}function id(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function h1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var u1=new Ue,Rd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ya(this.options.manager):this.textureLoader=new Za(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ls(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return qs(r,o,s),Pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ji.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=td[s.type],o=Jr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new $t(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=td[s.type],c=Jr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,M,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,w=t.cache.get(y);w||(M=new c(o,p*f,s.count*f/h),w=new Rs(M,f/h),t.cache.add(y,w)),m=new as(w,l,d%f/h,g)}else o===null?M=new c(s.count*l):M=new c(o,d,s.count*l),m=new $t(M,l,g);if(s.sparse!==void 0){let p=td.SCALAR,y=Jr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,_=new y(a[1],w,s.sparse.count*p),x=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new $t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,S=_.length;E<S;E++){let v=_[E];if(m.setX(v,x[E*l]),l>=2&&m.setY(v,x[E*l+1]),l>=3&&m.setZ(v,x[E*l+2]),l>=4&&m.setW(v,x[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Nm[d.magFilter]||It,h.minFilter=Nm[d.minFilter]||Ln,h.wrapS=Fm[d.wrapS]||Qt,h.wrapT=Fm[d.wrapT]||Qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==It,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(M){let m=new rn(M);m.needsUpdate=!0,d(m)}),t.load(Ji.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Pi(u,a),u.userData.mimeType=a.mimeType||h1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ar,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Er,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ze}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let u=s[gt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let h=r.alphaMode||nd.OPAQUE;if(h===nd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===nd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let u=r.emissiveFactor;o.emissive=new Ve().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&qs(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Um(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c1(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Um(new ot,c,t),c.mode===ai.TRIANGLE_STRIP?d=d.then(f=>zu(f,yo)):c.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>zu(f,zr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?a1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let M=h[f],m=a[f],p,y=c[f];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,b=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&b?new Aa(M,y):new Te(M,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ai.LINES)p=new Ca(M,y);else if(m.mode===ai.LINE_STRIP)p=new Cs(M,y);else if(m.mode===ai.LINE_LOOP)p=new Pa(M,y);else if(m.mode===ai.POINTS)p=new Ia(M,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&l1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),m.extensions&&qs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&qs(s,u[0],r),u[0];let d=new je;r.extensions&&qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(nn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ue;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ra(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],M=f.target,m=M.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;M.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],M=u[3],m=u[4],p=[];for(let w=0,b=d.length;w<b;w++){let _=d[w],x=f[w],E=g[w],S=M[w],v=m[w];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let R=n._createAnimationTracks(_,x,E,S,v);if(R)for(let C=0;C<R.length;C++)p.push(R[C])}let y=new ja(r,void 0,p);return Pi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,u1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new wr:c.length>1?h=new je:c.length===1?h=c[0]:h=new St,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Pi(h,r),r.extensions&&qs(n,h,r),r.matrix!==void 0){let u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new je;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&qs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Im(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof gn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}xs[r.path]===xs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(xs[r.path]){case xs.weights:h=Xi;break;case xs.rotation:h=ji;break;case xs.translation:case xs.scale:h=os;break;default:n.itemSize===1?h=Xi:h=os;break}let u=s.interpolation!==void 0?r1[s.interpolation]:Es,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let M=new h(l[f]+"."+xs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ad(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ji?Td:Zc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function d1(i,e,t){let n=e.attributes,s=new Xt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Ad(Jr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let M=Ad(Jr[d.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new On;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Um(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Ed[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ft.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Pi(i,e),d1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?o1(i,e.targets,t):i})}var km=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),w=0;w<p.length;++w){var b=p.charCodeAt(w);y[w]=b>96?b-97:b>64?b-39:b+4}for(var _=0,w=0;w<p.length;++w)y[_++]=y[w]<60?n[y[w]]:(y[w]-60)*64+y[++w];return y.buffer.slice(0,_)}function l(p,y,w,b,_,x,E){var S=p.exports.sbrk,v=b+3&-4,R=S(v*_),C=S(x.length),D=new Uint8Array(p.exports.memory.buffer);D.set(x,C);var L=y(R,b,_,C,x.length);if(L==0&&E&&E(R,v,_),w.set(D.subarray(R,R+b*_)),S(R-S(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(w){var b=w.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function g(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),w=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(w),_=u.length;_<p;++_)u[_]=f(b);for(var _=p;_<u.length;++_)u[_].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function M(p,y,w,b,_){for(var x=u[0],E=1;E<u.length;++E)u[E].pending<x.pending&&(x=u[E]);return new Promise(function(S,v){var R=new Uint8Array(w),C=++d;x.pending+=p,x.requests[C]={resolve:S,reject:v},x.object.postMessage({id:C,count:p,size:y,source:R,mode:b,filter:_},[R.buffer])})}function m(p){var y=p.data;self.ready.then(function(w){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);l(w,w.exports[y.mode],b,y.count,y.size,y.source,w.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,w,b,_){l(r,r.exports.meshopt_decodeVertexBuffer,p,y,w,b,r.exports[c[_]])},decodeIndexBuffer:function(p,y,w,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,y,w,b)},decodeIndexSequence:function(p,y,w,b){l(r,r.exports.meshopt_decodeIndexSequence,p,y,w,b)},decodeGltfBuffer:function(p,y,w,b,_,x){l(r,r.exports[h[_]],p,y,w,b,r.exports[c[x]])},decodeGltfBufferAsync:function(p,y,w,b,_){return u.length>0?M(p,y,w,h[b],c[_]):a.then(function(){var x=new Uint8Array(p*y);return l(r,r.exports[h[b]],x,p,y,w,r.exports[c[_]]),x})}}})();function Bm(i,e,t,n){let s=new je;if(s.name="PlayerNameDecals",!i)return s;let r=document.createElement("canvas");r.width=1024,r.height=192;let a=r.getContext("2d");a.textAlign="center",a.textBaseline="middle",a.font="700 100px sans-serif",a.lineJoin="round",a.strokeStyle="#182622",a.lineWidth=9,a.strokeText(i,512,96,960),a.fillStyle="#fffdf2",a.fillText(i,512,96,960);let o=new xn(r);o.colorSpace=bt;let l=new Ze({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,roughness:.65});n.updateMatrixWorld(!0),l.userData.disposableMaterial=!0;for(let c of[-1,1])for(let h of t){let u=n.localToWorld(new I(c*.748,.99,e==="3door"?-.07:.13)),d=new Sn(0,c*Math.PI/2,0),f=new Kr(h,u,d,new I(.69,.13,.13));if(f.applyMatrix4(n.matrixWorld.clone().invert()),f.attributes.position.count){let g=new Te(f,l);g.renderOrder=5,s.add(g)}else f.dispose()}return s}function zm(i){return Array.from(String(i||"").normalize("NFC").replace(/[^\p{L}\p{M}\p{N} ._'’-]/gu,"").trim()).slice(0,20).join("")}function f1(i,e=[]){for(let t=i.object;t;t=t.parent)if(!t.visible)return!1;return!e.some(t=>t.distanceToPoint(i.point)<0)}function p1(i){let e=i.object,t=Array.isArray(e.material)?e.material[i.face?.materialIndex||0]:e.material;if(!t||t.opacity<.2)return null;let n=Xu(e);if(!n)return null;let{fabric:s,protectedSurface:r}=ju(t),a=/TyreRubber|Tread|Sidewall/i.test(t.name)||t.userData.surfaceKind==="rubber"&&n==="wheels",o=n==="grille"&&t.name==="IntakeShadow";return{target:n,material:t.name,colour:o||!s&&!r,finish:o||!s&&!r,fabric:s,tyre:a,point:i.point.toArray()}}function m1(i=7){let e=null,t=new Set;return{down(n){if(t.add(n.pointerId),t.size>1){e=null;return}e=n.button===0?{id:n.pointerId,x:n.clientX,y:n.clientY,time:n.timeStamp,moved:!1}:null},move(n){e?.id===n.pointerId&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(e.moved=!0)},cancel(n){t.delete(n.pointerId),e=null},up(n){t.delete(n.pointerId);let s=e?.id===n.pointerId&&!e.moved&&n.timeStamp-e.time<700&&Math.hypot(n.clientX-e.x,n.clientY-e.y)<=i;return e=null,!!s}}}function Gm({canvas:i,camera:e,root:t,planes:n=()=>[],enabled:s=()=>!0,onPick:r}){let a=m1(),o=new Qa,l=new oe;i.addEventListener("pointerdown",c=>a.down(c)),i.addEventListener("pointermove",c=>a.move(c)),i.addEventListener("pointercancel",c=>a.cancel(c)),i.addEventListener("pointerup",c=>{if(!a.up(c)||!s())return;let h=i.getBoundingClientRect();l.set((c.clientX-h.left)/h.width*2-1,-(c.clientY-h.top)/h.height*2+1),t.updateMatrixWorld(!0),e.updateMatrixWorld(!0),o.setFromCamera(l,e);for(let u of o.intersectObject(t,!0)){if(!f1(u,n()))continue;let d=p1(u);if(!((Array.isArray(u.object.material)?u.object.material[u.face?.materialIndex||0]:u.object.material)?.opacity<.2)){d&&r(d);break}}})}var g1=Object.freeze(["highway","allterrain","mudterrain"]);function Hm(i={},e=new Set){return g1.includes(i.tyreType)?i.tyreType:e.has("tires")?"allterrain":"highway"}function b1(i=.368,e=.235){let t=e/2,n=i-.016,s=[[.193,-t*.72],[.235,-t*.93],[i*.83,-t],[n*.97,-t*.96],[n,-t*.77],[n,t*.77],[n*.97,t*.96],[i*.83,t],[.235,t*.93],[.193,t*.72]],r=new mi(s.map(([c,h])=>new oe(c,h)),96);r.rotateZ(-Math.PI/2);let a=[r.toNonIndexed()];r.dispose();for(let c=0;c<32;c++)for(let h of[-1,1]){let u=(c+(h>0?.5:0))*Math.PI*2/32;for(let[d,f,g,M]of[[h*e*.32,e*.36,.047,h*.38],[h*e*.105,e*.3,.058,-h*.48]]){let m=new Bt(f,.019,g,1,.003);m.rotateY(M),m.translate(d,i-.0095,0),m.rotateX(u),a.push(m.index?m.toNonIndexed():m),m.index&&m.dispose()}}let o=zc(a);a.forEach(c=>c.dispose());let l=o.attributes.position;for(let c=0;c<l.count;c++){let h=l.getY(c),u=l.getZ(c),d=Math.hypot(h,u);d>i&&(l.setY(c,h*i/d),l.setZ(c,u*i/d))}return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o.userData.tyreType="mudterrain",o}var Ro=new WeakMap,x1=new Set(["StockWheels","AllTerrainWheels"]);function _1(i,e){for(let t=i.parent;t;t=t.parent){if(x1.has(t.name))return t;if(t===e)break}return i.parent}function y1(i){let e=Ro.get(i);e&&(e.originals.forEach(t=>t.visible=e.visibility.get(t)),i.remove(e.group),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),Ro.delete(i))}function v1(i){let e=[];i?.traverse(t=>{Ro.has(t)&&e.push(t)}),e.forEach(y1)}function Vm(i,e="highway"){if(!i?.traverse)return 0;if(e!=="mudterrain")return v1(i),0;let t=new Map;i.updateWorldMatrix(!0,!0),i.traverse(s=>{if(s.isMesh&&s.material?.name==="TyreRubber"){let r=_1(s,i);if(Ro.has(r))return;t.has(r)||t.set(r,[]),t.get(r).push(s)}});let n=0;for(let[s,r]of t){let a=[],o=new I,l=new Xt;for(let M of r){let m=new Ue().copy(s.matrixWorld).invert().multiply(M.matrixWorld),p=M.geometry.attributes.position;for(let y=0;y<p.count;y++)o.fromBufferAttribute(p,y).applyMatrix4(m),a.push(o.clone()),l.expandByPoint(o)}let c=l.getSize(new I),h=c.z>c.y*2,u=l.getCenter(new I),d=new Map;for(let M of a){let m=h?`${M.x>u.x?1:-1},${M.z>u.z?1:-1}`:"single";d.has(m)||d.set(m,new Xt),d.get(m).expandByPoint(M)}let f=new je;f.name="MudTerrainTyres";for(let M of d.values()){let m=M.getSize(new I),p=M.getCenter(new I),y=r[0].material.clone();y.name="MudTerrainRubber",y.vertexColors=!1,y.roughness=.97,y.metalness=0;let w=new Te(b1(m.y/2,m.x),y);w.position.copy(p),w.castShadow=!0,w.receiveShadow=!0,f.add(w),n++}let g=new Map(r.map(M=>[M,M.visible]));r.forEach(M=>M.visible=!1),s.add(f),Ro.set(s,{group:f,originals:r,visibility:g})}return n}var Wm={type:"change"},Pd={type:"start"},Xm={type:"end"},$c=new Si,qm=new Pn,M1=Math.cos(70*nn.DEG2RAD),un=new I,Bn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cd=1e-6,Qc=class extends eo{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new mn,this._lastTargetPosition=new I,this._quat=new mn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fr,this._sphericalDelta=new Fr,this._scale=1,this._panOffset=new I,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new I,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w1.bind(this),this._onPointerDown=S1.bind(this),this._onPointerUp=T1.bind(this),this._onContextMenu=D1.bind(this),this._onMouseWheel=R1.bind(this),this._onKeyDown=C1.bind(this),this._onTouchStart=P1.bind(this),this._onTouchMove=I1.bind(this),this._onMouseDown=E1.bind(this),this._onMouseMove=A1.bind(this),this._interceptControlDown=L1.bind(this),this._interceptControlUp=N1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wm),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=un.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<M1?this.object.lookAt(this.target):(qm.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(qm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cd||this._lastTargetPosition.distanceToSquared(this.target)>Cd?(this.dispatchEvent(Wm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;un.copy(s).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function S1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function w1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xm),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function E1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=At.DOLLY;break;case hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}break;case hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Pd)}function A1(i){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function R1(i){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(i.preventDefault(),this.dispatchEvent(Pd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xm))}function C1(i){this.enabled!==!1&&this._handleKeyDown(i)}function P1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=At.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=At.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Pd)}function I1(i){switch(this._trackPointer(i),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=At.NONE}}function D1(i){this.enabled!==!1&&i.preventDefault()}function L1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var eh=class extends Hi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new an;e.deleteAttribute("uv");let t=new Ze({side:_n}),n=new Ze,s=new Ki(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Te(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Wi(e,n,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Te(e,Zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Te(e,Zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Te(e,Zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Te(e,Zr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Te(e,Zr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Te(e,Zr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zr(i){return new qa({color:0,emissive:16777215,emissiveIntensity:i})}var th=class extends Te{constructor(e,t,n,s=128){if(t<=0||n<=0||s<=0)throw new Error("THREE.GroundedSkybox: height, radius, and resolution must be positive.");let r=new Dn(n,2*s,s);r.scale(1,1,-1);let a=r.getAttribute("position"),o=new I;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){let c=-t*3/2,h=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(h),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(r,new Ft({map:e,depthWrite:!1}))}};var jm=new Float64Array(1024);for(let i=0;i<1024;i++)jm[i]=Math.pow(i*.003717127+.0521327014,2.4);var nh=class extends ei{constructor(e){super(e),this.type=kt}setDataType(e){return this.type=e,this}parse(e,t){let n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},s=new TextDecoder,r=new Uint8Array(e),a=[],o=0;for(;o<r.length-1;){if(r[o]!==255){o++;continue}let h=r[o+1];if(h===216){a.push({sectionType:h,section:r.subarray(o,o+2),sectionOffset:o+2}),o+=2;continue}if(h===224||h===225||h===226){let u=r[o+2]<<8|r[o+3],d=o+2+u;a.push({sectionType:h,section:r.subarray(o,d),sectionOffset:o+2}),o=d;continue}if(h>=192&&h<=254&&h!==217&&(h<208||h>215)){let u=r[o+2]<<8|r[o+3];o+=2+u;continue}o+=2}let l,c;for(let h=0;h<a.length;h++){let{sectionType:u,section:d,sectionOffset:f}=a[h];if(u!==224){if(u===225)this._parseXMPMetadata(s.decode(new Uint8Array(d)),n);else if(u===226){let g=new DataView(d.buffer,d.byteOffset+2,d.byteLength-2),M="urn:iso:std:iso:ts:21496:-1\0";if(d.byteLength>=M.length+2){let p=!0;for(let y=0;y<M.length;y++)if(d[2+y]!==M.charCodeAt(y)){p=!1;break}if(p){let y=d.subarray(2+M.length);this._parseISOMetadata(y,n);continue}}if(g.getUint32(2,!1)===1297106432){let p=g.getUint32(6)===1229531648,y=60,w=g.getUint32(y,p),b=g.getUint32(y+4,p),_=g.getUint32(y+16,p),x=g.getUint32(y+20,p)+f+6;l=new Uint8Array(e,b,w),c=new Uint8Array(e,x,_)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(n,l,c,(h,u,d)=>{t({width:u,height:d,data:h,format:tn,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}_parseISOMetadata(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=4,r=n.getUint8(s);s+=1;let a=(r&4)!==0,o=(r&8)!==0,l,c,h,u,d,f,g;if(o){let M=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(m/M);let p=n.getUint32(s,!1);s+=4,g=Math.log2(p/M);let y=n.getInt32(s,!1);s+=4,l=y/M;let w=n.getInt32(s,!1);s+=4,c=w/M;let b=n.getUint32(s,!1);s+=4,h=b/M;let _=n.getInt32(s,!1);s+=4,u=_/M*255,d=n.getInt32(s,!1)/M*255}else{let M=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(M/m);let p=n.getUint32(s,!1);s+=4;let y=n.getUint32(s,!1);s+=4,g=Math.log2(p/y);let w=n.getInt32(s,!1);s+=4;let b=n.getUint32(s,!1);s+=4,l=w/b;let _=n.getInt32(s,!1);s+=4;let x=n.getUint32(s,!1);s+=4,c=_/x;let E=n.getUint32(s,!1);s+=4;let S=n.getUint32(s,!1);s+=4,h=E/S;let v=n.getInt32(s,!1);s+=4;let R=n.getUint32(s,!1);s+=4,u=v/R*255;let C=n.getInt32(s,!1);s+=4;let D=n.getUint32(s,!1);d=C/D*255}t.version="1.0",t.baseRenditionIsHDR=a,t.gainMapMin=l,t.gainMapMax=c,t.gamma=h,t.offsetSDR=u,t.offsetHDR=d,t.hdrCapacityMin=f,t.hdrCapacityMax=g}load(e,t,n,s){let r=new wn(this.type===kt?new Uint16Array:new Float32Array,0,0,tn,this.type,uo,In,In,It,cu,1,sn);r.generateMipmaps=!0,r.flipY=!0;let a=new ls(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{try{this.parse(o,l=>{r.image={data:l.data,width:l.width,height:l.height},r.needsUpdate=!0,t&&t(r,l)})}catch(l){s&&s(l),console.error(l)}},n,s),r}_parseXMPMetadata(e,t){let s=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[r]=s.getElementsByTagName("Container:Directory");if(!r){let[a]=s.getElementsByTagName("rdf:Description");t.version=a.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=a.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(a.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(a.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(a.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(a.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(a.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(a.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(a.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e<10.31475?e*303527e-9:e<1024?jm[e|0]:Math.pow(e*.003717127+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,s,r){let a=o=>createImageBitmap(new Blob([o],{type:"image/jpeg"}));Promise.all([a(t),a(n)]).then(([o,l])=>{let c=o.width,h=o.height,u=c/h,d=l.width/l.height;if(u!==d){r("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let f=document.createElement("canvas"),g=f.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});f.width=c,f.height=h,g.drawImage(l,0,0,l.width,l.height,0,0,c,h);let M=g.getImageData(0,0,c,h,{colorSpace:"srgb"});g.drawImage(o,0,0);let m=g.getImageData(0,0,c,h,{colorSpace:"srgb"}),p=1.8**(e.hdrCapacityMax*.5),y=(Math.log2(p)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),w=Math.min(Math.max(y,0),1),b=m.data,_=M.data,x=b.length,E=e.gainMapMin,S=e.gainMapMax,v=e.offsetSDR,R=e.offsetHDR,C=1/e.gamma,D=e.gamma===1,L=this.type===kt,F=Sa.toHalfFloat,G=this._srgbToLinear,q=L?new Uint16Array(x).fill(15360):new Float32Array(x).fill(1);for(let Q=0;Q<x;Q+=4)for(let ue=0;ue<3;ue++){let Z=Q+ue,re=b[Z],le=_[Z]*.00392156862745098,Le=D?le:Math.pow(le,C),Re=E+(S-E)*Le,rt=(re+v)*(Re*w===0?1:Math.pow(2,Re*w))-R,We=Math.min(Math.max(G(rt),0),65504);q[Z]=L?F(We):We}s(q,c,h)}).catch(o=>{r(o)})}};async function F1(i){let e=new Uint8Array(await i.arrayBuffer());if(e[0]!==31||e[1]!==139)return e.buffer;let t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).arrayBuffer()}async function Ym(i){let e=new Kc().setMeshoptDecoder(km);if(typeof DecompressionStream=="function")try{let t=await fetch(i.replace(".glb?",".glb.gz?"));if(t.ok)return await e.parseAsync(await F1(t),"")}catch{}return e.loadAsync(i)}var ih=Object.freeze({spot:{label:"Focused driving spot",colour:"#f0f5ff",angle:.12,reach:40,intensity:190,aim:22},flood:{label:"Wide driving flood",colour:"#f0f5ff",angle:.48,reach:26,intensity:85,aim:10},fog:{label:"Low, wide yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},dual:{label:"Switchable white / yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},bar:{label:"Wide light-bar spread",colour:"#eff6ff",angle:.48,reach:36,intensity:140,aim:14},driving:{label:"Compact driving beam",colour:"#f7f4e9",angle:.24,reach:36,intensity:150,aim:18},combo:{label:"Pod driving / spread mix",colour:"#f2f5ff",angle:.38,reach:28,intensity:100,aim:12},work:{label:"Rear work flood",colour:"#fff0d4",angle:.8,reach:14,intensity:35,aim:-6}});function Km(i,e=[]){let t=new Map((Array.isArray(e)?e:[]).filter(n=>n&&typeof n.id=="string").map(n=>[n.id,n]));return[...new Set((Array.isArray(i)?i:[]).filter(n=>typeof n=="string").flatMap(n=>t.has(n)?t.get(n).visual?[t.get(n).visual]:[]:[n]))]}function Jm(i){let e=new Set(i),t=[];return e.has("lamp_round_spot")&&t.push("spot"),e.has("lamp_round_flood")&&t.push("flood"),e.has("lamp_fog")&&t.push("fog"),e.has("lamp_dual")&&t.push("dual"),(e.has("led")||e.has("lamp_bar20"))&&t.push("bar"),e.has("lamp_compact_bar")&&t.push("driving"),(e.has("pods")||e.has("lamp_cube"))&&t.push("combo"),e.has("lamp_work")&&t.push("work"),t}var Xs=Object.freeze({studio:{label:"Garage",description:"Photographed workshop \xB7 Poly Haven HDRI",file:"autoshop-01",rotation:0,height:1.6,radius:22,exposure:.88,shadow:.5,key:[-.3,.94,.19]},mountains:{label:"Mountains",description:"Photographed mountain valley \xB7 Poly Haven HDRI",file:"kiara-5-noon",rotation:0,height:1.7,radius:70,exposure:1.1,shadow:.78,sunScale:.3,sun:{direction:[.466,.779,.419],irradiance:[15.54,15.59,16.72]}},urban:{label:"Urban",description:"Photographed city square \xB7 Poly Haven HDRI",file:"palermo-square",rotation:0,height:1.7,radius:45,exposure:.95,shadow:.5,key:[0,1,0]},desert:{label:"Desert",description:"Photographed sand quarry \xB7 Poly Haven HDRI",file:"quarry-02",rotation:0,height:1.7,radius:70,exposure:1.1,shadow:.74,sunScale:.3,sun:{direction:[.55,.734,.4],irradiance:[9.55,7.99,5.21]}}});function Co(i){return Object.hasOwn(Xs,i)?i:"studio"}function Zm(i,e="4k"){return`assets/environments/${Xs[Co(i)].file}-${e}.jpg`}function $m(i,{loading:e=!1,failed:t=!1,night:n=!1}={}){return e?`Loading ${Xs[Co(i)].label.toLowerCase()} scenery\u2026`:t?"Scenery could not load. A plain backdrop is shown; choose a scene to retry.":n?"Night uses a neutral test ground. Scenery returns in daylight.":Xs[Co(i)].description}var U1=Object.freeze({BrightChrome:{metalness:1,roughness:.07},GrilleLettering:{metalness:.9,roughness:.18},MachinedAlloy:{metalness:.9,roughness:.3},WheelGunmetal:{metalness:.8,roughness:.38},WheelBarrelDark:{metalness:.55,roughness:.55},BrakeSteel:{metalness:.9,roughness:.42},CaliperMetal:{metalness:.6,roughness:.45},MouldedPlastic:{metalness:0,roughness:.62},GrilleAnthracite:{metalness:.2,roughness:.4},GlossBlackGrille:{metalness:0,roughness:.12,clearcoat:1,clearcoatRoughness:.04},TyreRubber:{metalness:0,roughness:.9}}),Qm=Object.freeze({gloss:{roughness:.32,clearcoat:1,clearcoatRoughness:.035},satin:{roughness:.46,clearcoat:.35,clearcoatRoughness:.3},matte:{roughness:.72,clearcoat:0,clearcoatRoughness:.6}});function e0(i){return Qm[i]||Qm.gloss}function t0(i){let e=U1[i?.name];if(!e)return!1;for(let[t,n]of Object.entries(e))t in i&&(i[t]=n);return i.envMapIntensity=1,!0}var n0={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125}},vertexShader:`

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

		}`};var i0={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125}},vertexShader:`

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

		}`};function s0(i,{width:e=3.1,depth:t=5.4,height:n=.62,resolution:s=512,blur:r=2.6,darkness:a=1.25,opacity:o=.9}={}){let l=new Dt(s,s),c=new Dt(s,s);l.texture.generateMipmaps=c.texture.generateMipmaps=!1;let h=new Ft({map:l.texture,transparent:!0,depthWrite:!1,opacity:o}),u=new Te(new on(e,t).rotateX(Math.PI/2),h);u.name="ContactShadow",u.scale.y=-1,u.position.y=.0015,u.renderOrder=1;let d=new ti(-e/2,e/2,t/2,-t/2,0,n);d.rotation.x=Math.PI/2;let f=new Lr({depthTest:!1,depthWrite:!1});f.userData.darkness={value:a},f.onBeforeCompile=b=>{b.uniforms.darkness=f.userData.darkness,b.fragmentShader=`uniform float darkness;
${b.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}`};let g=new Te(new on(e,t).rotateX(Math.PI/2)),M=new Lt(n0),m=new Lt(i0);M.depthTest=m.depthTest=!1;function p(b){g.visible=!0,g.material=M,M.uniforms.tDiffuse.value=l.texture,M.uniforms.h.value=b/256,i.setRenderTarget(c),i.render(g,d),g.material=m,m.uniforms.tDiffuse.value=c.texture,m.uniforms.v.value=b/256,i.setRenderTarget(l),i.render(g,d),g.visible=!1}function y(b){u.getWorldPosition(d.position),d.position.y=0,d.updateMatrixWorld();let _={target:i.getRenderTarget(),clear:i.getClearAlpha(),shadow:i.shadowMap.autoUpdate},x=new Hi;x.overrideMaterial=f,x.matrixWorldAutoUpdate=!1,b.updateMatrixWorld(!0),x.children.push(b),i.setClearAlpha(0),i.shadowMap.autoUpdate=!1,i.setRenderTarget(l),i.clear(),i.render(x,d),x.children.length=0,p(r),p(r*.4),i.setRenderTarget(_.target),i.setClearAlpha(_.clear),i.shadowMap.autoUpdate=_.shadow}function w(){l.dispose(),c.dispose(),h.dispose(),u.geometry.dispose(),g.geometry.dispose(),M.dispose(),m.dispose(),f.dispose()}return{plane:u,update:y,dispose:w,material:h}}var Id=Object.freeze({high:Object.freeze({id:"high",hdri:"4k",ambientOcclusion:!0,shadowMapSize:2048,shadowBlurSamples:16,contactResolution:512,maxPixelRatio:1.7}),low:Object.freeze({id:"low",hdri:"2k",ambientOcclusion:!1,shadowMapSize:1024,shadowBlurSamples:8,contactResolution:256,maxPixelRatio:1.5})});function O1({override:i,width:e=1440,coarsePointer:t=!1,deviceMemory:n,cores:s}={}){if(i==="low"||i==="high")return Id[i];let r=n!==void 0&&n<=4||s!==void 0&&s<=4;return e<900||t||r?Id.low:Id.high}function r0(){let i=null;try{i=new URLSearchParams(location.search).get("quality")}catch{}return O1({override:i,width:Math.min(screen.width||innerWidth,innerWidth),coarsePointer:matchMedia("(pointer:coarse)").matches,deviceMemory:navigator.deviceMemory,cores:navigator.hardwareConcurrency})}var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},k1=new ti(-1,1,1,-1,0,1),Dd=class extends ot{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},B1=new Dd,_s=class{constructor(e){this._mesh=new Te(B1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sh=class extends jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _s(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Po=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rh=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ah=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sh($r),this.copyPass.material.blending=Yt,this.timer=new $a}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(a instanceof Po?n=!0:a instanceof rh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oh=class extends jn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ue},cameraProjectionMatrixInverse:{value:new Ue},cameraWorldMatrix:{value:new Ue},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},Do={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},lh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function a0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=z1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new wn(s,e,e);return r.wrapS=Qt,r.wrapT=Qt,r.needsUpdate=!0,r}function z1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Lo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ld(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Ue},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ld(i,e,t){let n=G1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function G1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var ch=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,M=t-f,m,p;g>M?(m=1,p=0):(m=0,p=1);let y=g-m+h,w=M-p+h,b=g-1+2*h,_=M-1+2*h,x=l&255,E=c&255,S=this.perm[x+this.perm[E]]%12,v=this.perm[x+m+this.perm[E+p]]%12,R=this.perm[x+1+this.perm[E+1]]%12,C=.5-g*g-M*M;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[S],g,M));let D=.5-y*y-w*w;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[v],y,w));let L=.5-b*b-_*_;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[R],b,_)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,M=h-g,m=u-g,p=d-g,y=e-M,w=t-m,b=n-p,_,x,E,S,v,R;y>=w?w>=b?(_=1,x=0,E=0,S=1,v=1,R=0):y>=b?(_=1,x=0,E=0,S=1,v=0,R=1):(_=0,x=0,E=1,S=1,v=0,R=1):w<b?(_=0,x=0,E=1,S=0,v=1,R=1):y<b?(_=0,x=1,E=0,S=0,v=1,R=1):(_=0,x=1,E=0,S=1,v=1,R=0);let C=y-_+f,D=w-x+f,L=b-E+f,F=y-S+2*f,G=w-v+2*f,q=b-R+2*f,Q=y-1+3*f,ue=w-1+3*f,Z=b-1+3*f,re=h&255,le=u&255,Le=d&255,Re=this.perm[re+this.perm[le+this.perm[Le]]]%12,rt=this.perm[re+_+this.perm[le+x+this.perm[Le+E]]]%12,We=this.perm[re+S+this.perm[le+v+this.perm[Le+R]]]%12,tt=this.perm[re+1+this.perm[le+1+this.perm[Le+1]]]%12,se=.6-y*y-w*w-b*b;se<0?s=0:(se*=se,s=se*se*this._dot3(this.grad3[Re],y,w,b));let O=.6-C*C-D*D-L*L;O<0?r=0:(O*=O,r=O*O*this._dot3(this.grad3[rt],C,D,L));let te=.6-F*F-G*G-q*q;te<0?a=0:(te*=te,a=te*te*this._dot3(this.grad3[We],F,G,q));let ze=.6-Q*Q-ue*ue-Z*Z;return ze<0?o=0:(ze*=ze,o=ze*ze*this._dot3(this.grad3[tt],Q,ue,Z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,M=(e+t+n+s)*l,m=Math.floor(e+M),p=Math.floor(t+M),y=Math.floor(n+M),w=Math.floor(s+M),b=(m+p+y+w)*c,_=m-b,x=p-b,E=y-b,S=w-b,v=e-_,R=t-x,C=n-E,D=s-S,L=v>R?32:0,F=v>C?16:0,G=R>C?8:0,q=v>D?4:0,Q=R>D?2:0,ue=C>D?1:0,Z=L+F+G+q+Q+ue,re=a[Z][0]>=3?1:0,le=a[Z][1]>=3?1:0,Le=a[Z][2]>=3?1:0,Re=a[Z][3]>=3?1:0,rt=a[Z][0]>=2?1:0,We=a[Z][1]>=2?1:0,tt=a[Z][2]>=2?1:0,se=a[Z][3]>=2?1:0,O=a[Z][0]>=1?1:0,te=a[Z][1]>=1?1:0,ze=a[Z][2]>=1?1:0,pe=a[Z][3]>=1?1:0,Je=v-re+c,mt=R-le+c,ae=C-Le+c,ge=D-Re+c,xe=v-rt+2*c,_e=R-We+2*c,Me=C-tt+2*c,Xe=D-se+2*c,De=v-O+3*c,$e=R-te+3*c,Oe=C-ze+3*c,z=D-pe+3*c,ct=v-1+4*c,it=R-1+4*c,N=C-1+4*c,T=D-1+4*c,j=m&255,Y=p&255,ne=y&255,be=w&255,ve=o[j+o[Y+o[ne+o[be]]]]%32,ce=o[j+re+o[Y+le+o[ne+Le+o[be+Re]]]]%32,de=o[j+rt+o[Y+We+o[ne+tt+o[be+se]]]]%32,Pe=o[j+O+o[Y+te+o[ne+ze+o[be+pe]]]]%32,He=o[j+1+o[Y+1+o[ne+1+o[be+1]]]]%32,Se=.6-v*v-R*R-C*C-D*D;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(r[ve],v,R,C,D));let Ee=.6-Je*Je-mt*mt-ae*ae-ge*ge;Ee<0?u=0:(Ee*=Ee,u=Ee*Ee*this._dot4(r[ce],Je,mt,ae,ge));let Be=.6-xe*xe-_e*_e-Me*Me-Xe*Xe;Be<0?d=0:(Be*=Be,d=Be*Be*this._dot4(r[de],xe,_e,Me,Xe));let qe=.6-De*De-$e*$e-Oe*Oe-z*z;qe<0?f=0:(qe*=qe,f=qe*qe*this._dot4(r[Pe],De,$e,Oe,z));let et=.6-ct*ct-it*it-N*N-T*T;return et<0?g=0:(et*=et,g=et*et*this._dot4(r[He],ct,it,N,T)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var No=class i extends jn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=a0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Dt(this.width,this.height,{type:kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Lt({defines:Object.assign({},Io.defines),uniforms:si.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Wa,this.normalMaterial.blending=Yt,this.pdMaterial=new Lt({defines:Object.assign({},Lo.defines),uniforms:si.clone(Lo.uniforms),vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Lt({defines:Object.assign({},Do.defines),uniforms:si.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Lt({uniforms:si.clone($r.uniforms),vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:so,blendDst:Ls,blendEquation:ii,blendSrcAlpha:io,blendDstAlpha:Ls,blendEquationAlpha:ii}),this.blendMaterial=new Lt({uniforms:si.clone(lh.uniforms),vertexShader:lh.vertexShader,fragmentShader:lh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ql,blendSrc:so,blendDst:Ls,blendEquation:ii,blendSrcAlpha:io,blendDstAlpha:Ls,blendEquationAlpha:ii}),this._fsQuad=new _s(null),this._originalClearColor=new Ve,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new wi,this.depthTexture.format=Ei,this.depthTexture.type=ps,this.normalRenderTarget=new Dt(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ld(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ch,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new wn(s,e,e,tn,En);return r.wrapS=Qt,r.wrapT=Qt,r.needsUpdate=!0,r}};No.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Fo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var hh=class extends jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=si.clone(Fo.uniforms),this.material=new Dr({name:Fo.name,uniforms:this.uniforms,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader}),this._fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===lo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var js=new Map,H1=Object.freeze(["heritage","safari","mountain","geo","topo","pinstripe","rally","checker","compass","pixel","contour","sunset"]),V1=new Set(H1);function W1(i,e,t){let n=new Ve(e),s=n.r*.2126+n.g*.7152+n.b*.0722<.18,r=/^#[0-9a-f]{6}$/i.test(t||"")?t:null,a=i+":"+s+":"+r;if(js.has(a))return js.get(a);let o=document.createElement("canvas");o.width=2048,o.height=512;let l=o.getContext("2d"),c=r||(s?"#d8d1bb":"#26332f");if(i==="heritage"||i==="safari")(r?[r,r,r]:i==="heritage"?["#bd542b","#df994c","#f0d29a"]:["#c8b786","#766b50","#394634"]).forEach((f,g)=>{l.fillStyle=f,l.fillRect(0,100+g*45,2048,38)});else if(i==="mountain")l.fillStyle=c,l.beginPath(),l.moveTo(0,430),[[0,350],[250,190],[420,300],[700,60],[950,280],[1190,140],[1490,330],[1720,210],[2048,350],[2048,430]].forEach(([d,f])=>l.lineTo(d,f)),l.closePath(),l.fill(),l.fillStyle=s?"#26332f":"#d8d1bb",l.beginPath(),l.moveTo(700,60),l.lineTo(628,174),l.lineTo(700,145),l.lineTo(758,182),l.closePath(),l.fill();else if(i==="geo"){l.fillStyle=c;for(let d=0;d<5;d++){let f=80+d*180;l.beginPath(),l.moveTo(f,420),l.lineTo(f+210,80),l.lineTo(f+315,80),l.lineTo(f+105,420),l.closePath(),l.fill()}l.fillRect(1050,350,998,70)}else if(i==="pinstripe"||i==="rally"){if(l.fillStyle=c,l.fillRect(0,i==="rally"?180:230,2048,i==="rally"?100:12),l.fillRect(0,i==="rally"?295:260,2048,8),i==="rally"){l.beginPath(),l.arc(1260,245,165,0,Math.PI*2),l.fill();let d=new Ve(c);l.fillStyle=d.r*.2126+d.g*.7152+d.b*.0722<.18?"#e7e7dc":"#242a29",l.font="italic 900 238px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("19",1255,257)}}else if(i==="checker"){l.fillStyle=c;for(let d=0;d<3;d++)for(let f=0;f<32;f++)(f+d)%2===0&&l.fillRect(f*64,180+d*64,64,64)}else if(i==="compass"){l.strokeStyle=c,l.lineWidth=8,l.beginPath(),l.arc(650,256,165,0,Math.PI*2),l.stroke(),l.fillStyle=c;for(let d=0;d<8;d++){let f=d*Math.PI/4;l.beginPath(),l.moveTo(650+Math.cos(f)*180,256+Math.sin(f)*180),l.lineTo(650+Math.cos(f+.24)*55,256+Math.sin(f+.24)*55),l.lineTo(650,256),l.closePath(),l.fill()}l.fillRect(900,250,1148,10)}else if(i==="pixel"){l.fillStyle=c;for(let d=0;d<7;d++)for(let f=0;f<36;f++)(f*17+d*13)%11<4&&l.fillRect(f*57,70+d*55,55,53)}else if(i==="sunset")(r?[c,c,c,c]:["#b44b38","#d6793d","#e4ac55","#ead0a0"]).forEach((f,g)=>{l.fillStyle=f,l.beginPath(),l.moveTo(0,150+g*45),l.lineTo(1150,150+g*45),l.lineTo(1500,60+g*45),l.lineTo(2048,60+g*45),l.lineTo(2048,91+g*45),l.lineTo(1500,91+g*45),l.lineTo(1150,181+g*45),l.lineTo(0,181+g*45),l.fill()});else if(i==="contour"){l.strokeStyle=c,l.lineWidth=9;for(let d=0;d<3;d++)l.beginPath(),l.moveTo(0,350+d*30),l.lineTo(430,350+d*30),l.lineTo(670,130+d*30),l.lineTo(870,310+d*30),l.lineTo(1150,70+d*30),l.lineTo(1550,350+d*30),l.lineTo(2048,350+d*30),l.stroke()}else{l.strokeStyle=c,l.lineWidth=4;for(let d=-3;d<15;d++){l.beginPath();for(let f=0;f<=2048;f+=8){let g=80+d*29+Math.sin(f/180+d*.28)*46+Math.sin(f/78+d*.13)*12;f?l.lineTo(f,g):l.moveTo(f,g)}l.stroke()}}let h=new xn(o);h.colorSpace=bt;let u=new Ze({name:"Vinyl "+i,map:h,transparent:!0,alphaTest:.04,depthWrite:!1,roughness:.48,metalness:0,polygonOffset:!0,polygonOffsetFactor:-4});if(js.size>=32){let d=js.keys().next().value,f=js.get(d);f.map.dispose(),f.dispose(),js.delete(d)}return js.set(a,u),u}function o0(i,e,t,n,s){if(!V1.has(t))return 0;e.updateWorldMatrix(!0,!1);let r=e.matrixWorld.clone().invert(),a=W1(t,n,s),o=0;for(let l of[-1,1])for(let c of i){c.updateWorldMatrix(!0,!1);let h=e.localToWorld(new I(l*.748,.91,-.27)),u=new Kr(c,h,new Sn(0,l*Math.PI/2,0),new I(2.95,.62,.1));if(!u.attributes.position.count){u.dispose();continue}u.applyMatrix4(r);let d=new Te(u,a);d.name="Body vinyl "+t,d.renderOrder=2,e.add(d),o++}return o}var vt=document.getElementById("viewer3d"),yn=document.getElementById("viewerStatus"),l0=8.1,Nd="Interactive Jimny modification preview. Click a part to edit; drag to orbit, scroll or pinch to zoom.",lt;try{lt=new Oc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"})}catch{vt.classList.add("unavailable"),yn.textContent="3D is unavailable in this browser. Your parts list and estimates still work."}if(lt){let u=function(A,U,k=lt.getPixelRatio()){lt.setPixelRatio(k),lt.setSize(A,U,!1),l.setPixelRatio(k),l.setSize(A,U)},d=function(){D&&(C.update(L),D=!1),t.ambientOcclusion?l.render():lt.render(i,e)},y=function(){return M.has(f)},w=function(){let A=y();e.near=A?.018:.1,e.updateProjectionMatrix(),g.enableZoom=!A,g.enableRotate=!A,g.enablePan=!1,g.minDistance=["doors-cutaway","touring"].includes(f)?1.2:2,g.maxDistance=l0,g.minPolarAngle=.15,g.maxPolarAngle=f==="underside"?Math.PI*.75:Math.PI*.49,v()},b=function(){e.position.copy(p.eye),g.target.copy(e.position).add(new I(Math.sin(p.yaw)*Math.cos(p.pitch),Math.sin(p.pitch),Math.cos(p.yaw)*Math.cos(p.pitch))),e.lookAt(g.target),De=!0},_=function(){y()||g.update()},x=function(){return{eye:p.eye.clone(),yaw:p.yaw,pitch:p.pitch}},E=function(A){p.eye.copy(A.eye),p.yaw=A.yaw,p.pitch=A.pitch},S=function(){let A=Pm(f,ae);p.eye.set(...A.eye),p.yaw=A.yaw,p.pitch=A.pitch,b()},v=function(){let A=window.matchMedia("(max-width:899px)").matches&&!vt.parentElement.classList.contains("expanded");g.enabled=!A&&!y(),lt.domElement.style.touchAction=A?"pan-y":"none",vt.dataset.touchMode=A?"scroll":y()?"look-around":"orbit",lt.domElement.setAttribute("aria-label",(y()?"Enclosed 3D Jimny cabin. Drag to look around, Shift-drag to move within the cabin, scroll to zoom.":Nd)+(A?" Expand the preview for touch rotation.":"")),yn.textContent.startsWith("Live 3D")&&(yn.textContent=A?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate")},_e=function(A){let U=document.createElement("canvas");U.width=U.height=256;let k=U.getContext("2d");k.fillStyle="#888",k.fillRect(0,0,256,256);let H=73;for(let K=0;K<12e3;K++){H=H*16807%2147483647;let B=H%256;H=H*16807%2147483647;let he=H%256;k.fillStyle=`rgba(${A==="paint"?"220,220,220":"40,40,40"},${A==="paint"?.12:.15})`,k.fillRect(B,he,1,1)}if(A==="tyre"){k.strokeStyle="#252525",k.lineWidth=3;for(let K=-256;K<512;K+=24)k.beginPath(),k.moveTo(K,0),k.lineTo(K+40,90),k.lineTo(K+22,168),k.lineTo(K+62,256),k.stroke()}let X=new xn(U);return X.wrapS=X.wrapT=Qt,X.repeat.set(A==="paint"?8:12,A==="paint"?8:1),X.anisotropy=Math.min(4,lt.capabilities.getMaxAnisotropy()),X},Pe=function(){document.querySelectorAll("[data-scenery-select]").forEach(A=>{A.value=ne}),document.querySelectorAll("[data-scenery-status]").forEach(A=>{A.textContent=$m(ne,{loading:be,failed:ve,night:Oe})}),vt.dataset.scenery=ne,vt.dataset.sceneryLoading=String(be)},Se=function(){let A=de.get(ne),U=!!A&&!be&&!ve&&!Oe,k=Xs[ne];for(let[H,X]of de)X.skybox&&(X.skybox.visible=U&&H===ne);if(i.environment=U?A.environment.texture:r.texture,i.environmentRotation.set(0,U?k.rotation:0,0),lt.toneMappingExposure=U?k.exposure:.95,i.background.set(Oe?"#10191f":"#20272b"),R.material=Oe?Le:le,Re.visible=!1,le.opacity=U?k.shadow:.19,a.groundColor.set("#747572"),a.intensity=Oe?.12:U?0:1.35,U&&k.sun?He.fromArray(k.sun.direction):U?He.fromArray(k.key):He.set(3,7,5).normalize(),He.applyAxisAngle(St.DEFAULT_UP,U?k.rotation:0),o.position.copy(He).multiplyScalar(9),U&&k.sun){let[H,X,K]=k.sun.irradiance,B=Math.max(H,X,K);o.color.setRGB(H/B,X/B,K/B,sn),o.intensity=B*k.sunScale}else o.color.set("#fffdf8"),o.intensity=Oe?.06:U?1e-4:2.2;o.shadow.radius=U&&k.sun?5:16,o.shadow.normalBias=.004,o.shadow.bias=-15e-5,i.environmentIntensity=Oe?.12:U?1:.7,Pe(),De=!0},xt=function(A){for(;A.children.length;){let U=A.children[0];U.traverse(k=>{k.geometry?.dispose(),k.isInstancedMesh&&k.dispose(),k.userData.disposableMaterial&&(k.material.map?.dispose(),k.material.dispose())}),A.remove(U)}},Un=function(A,U,k,H,X,K,B,he=0,ee="#e9e9df",me="#222827",Ae=!1){let Ke=document.createElement("canvas");Ke.width=512,Ke.height=128;let ht=Ke.getContext("2d");ht.fillStyle=me,ht.fillRect(0,0,512,128),ht.fillStyle=ee,ht.font=`${Ae?"italic ":""}700 ${U.length>8?"52":"72"}px Arial`,ht.textAlign="center",ht.textBaseline="middle",ht.fillText(U,256,68,490);let dt=new xn(Ke);dt.colorSpace=bt;let ye=new Ze({map:dt,roughness:.6,transparent:!1}),Tt=we(new on(k,H),ye,A,X,K,B);return Tt.rotation.y=he,Tt.userData.disposableMaterial=!0,Tt},dn=function(A,U,k,H=O.paint,X=[],K=0){let B=new Ot(U.map(([me,Ae])=>new oe(-me,Ae)));X.forEach(me=>B.holes.push(new en(me.map(([Ae,Ke])=>new oe(-Ae,Ke)))));let he=new Ir(B,24),ee=he.attributes.position;for(let me=0;me<ee.count;me++){let Ae=-ee.getX(me),Ke=ee.getY(me);ee.setXYZ(me,k*(.768-Math.max(0,Ke-1.14)*.115+K),Ke,Ae)}if(he.computeVertexNormals(),k<0){let me=he.index;for(let Ae=0;Ae<me.count;Ae+=3){let Ke=me.getX(Ae);me.setX(Ae,me.getX(Ae+2)),me.setX(Ae+2,Ke)}he.computeVertexNormals()}return we(he,H,A)},Uo=function(A,U,k,H=!1){if(pe&&H){let me=U<0?-1:1,Ae=[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],Ke=[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]],ht=[],dt=[],ye=64,Tt=[Ae,Ke].map(_t=>new pi(_t.map(([fn,zt])=>new I(0,zt,fn))));for(let[_t,fn]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let zt=0;zt<=ye;zt++){let Di=Tt[0].getPoint(zt/ye).lerp(Tt[1].getPoint(zt/ye),_t);ht.push(me*fn,Di.y,k+Di.z)}for(let _t=0;_t<5;_t++)for(let fn=0;fn<ye;fn++){let zt=_t*(ye+1)+fn;dt.push(zt,zt+1,zt+ye+2,zt,zt+ye+2,zt+ye+1)}if(me<0)for(let _t=0;_t<dt.length;_t+=3)[dt[_t+1],dt[_t+2]]=[dt[_t+2],dt[_t+1]];let st=new ot;st.setAttribute("position",new Ge(ht,3)),st.setIndex(dt),st.computeVertexNormals(),we(st,O.trim,A);return}let X=U<0?-1:1,K=.385,B=H?.462:.432,he=[];for(let me=0;me<=32;me++){let Ae=Math.PI*me/32;he.push([k-Math.cos(Ae)*B,.335+Math.sin(Ae)*B])}for(let me=32;me>=0;me--){let Ae=Math.PI*me/32;he.push([k-Math.cos(Ae)*K,.335+Math.sin(Ae)*K])}dn(A,he,X,O.trim,[],H?.137:.075);let ee=[];for(let me=0;me<=32;me++){let Ae=me*Math.PI/32;ee.push([X*(H?.91:.843),.335+Math.sin(Ae)*B,k-Math.cos(Ae)*B])}ke(A,ee,.014,O.trim);for(let me of[-1,1])$(A,H?.15:.09,.18,.055,X*(H?.84:.8),.42,k+me*.404,O.trim)},uh=function(){if(pe)return;let A=[[-1.78,.54],[-1.78,1.13],[.69,1.15],[1.79,1.1],[1.84,.88],[1.84,.52],[1.69,.52]];for(let B=0;B<=30;B++){let he=B*Math.PI/30;A.push([1.295+Math.cos(he)*.392,.335+Math.sin(he)*.392])}A.push([.903,.535],[-.903,.535]);for(let B=0;B<=30;B++){let he=B*Math.PI/30;A.push([-1.295+Math.cos(he)*.392,.335+Math.sin(he)*.392])}A.push([-1.687,.54]),$(te,1.43,.075,2.3,0,1.125,-.53,O.paint);let U=$(te,1.48,.075,1.11,0,1.13,1.235,O.paint);U.rotation.x=.026,$(te,1.46,.035,.15,0,1.163,.635,O.paint),$(te,1.46,.085,2.43,0,1.665,-.505,O.roof);for(let B of[-.746,.746])ke(te,[[B,1.647,.7],[B,1.684,.53],[B,1.684,-1.63],[B,1.65,-1.75]],.012,O.roof);for(let B of[-.48,-.24,0,.24,.48])$(te,.018,.009,1.93,B,1.709,-.55,O.roof);$(te,1.48,.53,.045,0,1.355,-1.75,O.paint),$(te,1.3,.375,.015,0,1.412,-1.778,O.trim),$(te,1.25,.33,.017,0,1.422,-1.79,O.glass),ke(te,[[.52,1.28,-1.805],[.11,1.29,-1.805]],.009,O.trim),[-1,1].forEach(B=>{dn(te,A,B);let he=[[[.57,1.2],[.51,1.59],[-.24,1.59],[-.24,1.2]],[[-.34,1.2],[-.34,1.59],[-1.06,1.59],[-1.06,1.2]],[[-1.15,1.2],[-1.15,1.59],[-1.65,1.59],[-1.65,1.2]]];dn(te,[[.69,1.12],[.59,1.65],[-1.74,1.65],[-1.76,1.12]],B,O.paint,he),he.forEach(ee=>{dn(te,ee,B,O.glass,[],-.008);let me=ee.concat([ee[0]]).map(([Ae,Ke])=>[B*(.768-Math.max(0,Ke-1.14)*.115+.002),Ke,Ae]);wt(te,me,.011,O.trim)});for(let ee of[.665,-.285,-1.105])ke(te,[[B*.772,.56,ee],[B*.773,1.15,ee],[B*.716,1.63,ee-.035]],.0035,O.trim);ke(te,[[B*.773,.58,.67],[B*.773,.57,-1.07]],.003,O.trim),ke(te,[[B*.774,1.104,.64],[B*.774,1.104,-1.72]],.005,O.paint),[-.13,-.93].forEach(ee=>{$(te,.025,.045,.16,B*.785,1.085,ee,O.trim),$(te,.028,.017,.115,B*.799,1.092,ee,O.darkmetal)}),[.63,-.32].forEach(ee=>[.72,1.04].forEach(me=>{$(te,.025,.048,.065,B*.785,me,ee,O.paint),Fe(te,.009,.009,.065,B*.806,me,ee,O.darkmetal,"y",8)})),ke(te,[[B*.77,1.22,.54],[B*.89,1.24,.55]],.018,O.trim),$(te,.17,.15,.24,B*.91,1.285,.56,O.trim),$(te,.012,.105,.18,B*.999,1.29,.54,O.glass),$(te,.05,.065,1.83,B*.78,.55,-.08,O.trim),[-1.295,1.295].forEach(ee=>Uo(te,B===1?.8:-.875,ee));for(let ee of[-1.295,1.295]){let me=[];for(let Ae=0;Ae<=24;Ae++){let Ke=Math.PI*Ae/24;me.push([ee-Math.cos(Ke)*.395,.335+Math.sin(Ke)*.395])}for(let Ae=24;Ae>=0;Ae--){let Ke=Math.PI*Ae/24;me.push([ee-Math.cos(Ke)*.333,.335+Math.sin(Ke)*.333])}dn(te,me,B,O.rubber,[],-.06)}$(te,.055,.035,.12,B*.791,1.035,1.07,O.orange),B===-1&&(dn(te,[[-1.48,1.01],[-1.48,1.12],[-1.66,1.12],[-1.66,1.01]],B,O.trim,[],.003),dn(te,[[-1.49,1.02],[-1.49,1.11],[-1.65,1.11],[-1.65,1.02]],B,O.paint,[],.004))});let k=$(te,1.395,.465,.026,0,1.397,.644,O.trim);k.rotation.x=-.17;let H=$(te,1.315,.393,.028,0,1.405,.661,O.glass);H.rotation.x=-.17,[-.726,.726].forEach(B=>{let he=$(te,.06,.515,.06,B,1.392,.634,O.paint);he.rotation.x=-.17});for(let B of[-.43,.21])ke(te,[[B,1.2,.703],[B+.08,1.24,.704]],.007,O.trim),ke(te,[[B-.14,1.245,.705],[B+.22,1.26,.704]],.009,O.trim);$(te,1.5,.23,.1,0,.975,1.811,O.paint),$(te,1.62,.19,.22,0,.645,1.825,O.trim),$(te,1.62,.17,.18,0,.64,-1.795,O.trim),$(te,1.57,.08,.085,0,.775,1.83,O.trim),[-.602,.602].forEach(B=>{Fe(te,.153,.153,.035,B,.976,1.868,O.trim,"z",48),Fe(te,.128,.12,.027,B,.976,1.889,O.chrome,"z",48);let he=we(new Dn(.116,32,16,0,Math.PI*2,0,Math.PI/2),O.reflector,te,B,.976,1.895);he.rotation.x=Math.PI/2,he.scale.y=.3,Fe(te,.032,.032,.018,B,.976,1.908,O.white,"z"),Fe(te,.118,.118,.012,B,.976,1.927,O.lens,"z",48);for(let ee=-3;ee<=3;ee++)ke(te,[[B+ee*.025,.89,1.934],[B+ee*.025,1.06,1.934]],.0015,O.lens);$(te,.128,.049,.025,B,1.146,1.813,O.trim),$(te,.11,.032,.029,B,1.146,1.83,O.orange),Fe(te,.065,.065,.014,B,.64,1.945,O.trim,"z"),Fe(te,.045,.045,.018,B,.64,1.956,O.lens,"z"),$(te,.23,.12,.025,B,.65,-1.901,O.red),$(te,.08,.057,.028,B+.052,.652,-1.918,O.lens)}),$(te,.46,.11,.018,0,.65,1.949,O.trim);for(let B=-.28;B<=.28;B+=.055)$(te,.032,.055,.015,B,.766,1.884,O.trim);$(te,1.13,.075,2.94,0,.43,-.1,O.darkmetal),[-1.295,1.295].forEach(B=>Fe(te,.055,.055,1.65,0,.35,B,O.darkmetal,"x"));for(let B of[-1.295,1.295])Fe(te,.105,.11,.15,0,.35,B,O.darkmetal,"z");Un(te,"Jimny",.19,.055,-.49,1.075,-1.783,Math.PI,"#c8cfcb","#36443c",!0);let X=new je;X.position.set(.12,1,-1.94),X.rotation.y=Math.PI/2,Qr(X,0,0,0,.335,!1),te.add(X),[-.38,.38].forEach(B=>{$(te,.46,.12,.48,B,.85,.33,O.seat);let he=$(te,.46,.48,.12,B,1.08,.09,O.seat);he.rotation.x=-.1,$(te,.25,.14,.12,B,1.37,.08,O.seat)}),$(te,1.25,.12,.46,0,.85,-.7,O.seat),$(te,1.25,.4,.1,0,1.05,-.98,O.seat),$(te,1.36,.12,.26,0,1.12,.5,O.trim),Fe(te,.075,.075,.012,.39,1.19,.355,O.trim,"z"),Fe(te,.065,.065,.014,.24,1.19,.355,O.trim,"z");let K=we(new jt(.127,.014,8,32),O.trim,te,.38,1.16,.3);K.rotation.x=-.32},Qr=function(A,U,k,H,X=.335,K=!1){let B=U<0?-1:1,he=K?.115:.098,ee=.191,me=U+B*(he+.003),Ae=[[ee,-he*.92],[X*.82,-he],[X*.93,-he*.88],[X*.99,-he*.63],[X,-he*.32],[X,he*.32],[X*.99,he*.63],[X*.93,he*.88],[X*.82,he],[ee,he*.92]].map(([dt,ye])=>new oe(dt,ye)),Ke=we(new mi(Ae,64),O.rubber,A,U,k,H);Ke.rotation.z=Math.PI/2;for(let dt of[-1,1]){let ye=we(new jt(X*.81,.002,4,64),O.trim,A,U+dt*he,k,H);ye.rotation.y=Math.PI/2}if(K){let dt=new Wi(new an(.062,.009,.036),O.rubber,180),ye=new St;for(let Tt=0;Tt<60;Tt++)for(let st=0;st<3;st++){let _t=(Tt+(st===1?.4:0))/60*Math.PI*2;ye.position.set(U+(st-1)*.071,k+Math.cos(_t)*(X-.002),H+Math.sin(_t)*(X-.002)),ye.rotation.set(_t,0,(st-1)*.18),ye.updateMatrix(),dt.setMatrixAt(Tt*3+st,ye.matrix)}dt.castShadow=!0,A.add(dt)}Fe(A,ee,ee,.15,U,k,H,O.darkmetal,"x",48),Fe(A,.157,.157,.012,U+B*.076,k,H,O.brake,"x",48);let ht=we(new jt(ee-.005,.009,8,48),K?O.darkmetal:O.chrome,A,me,k,H);ht.rotation.y=Math.PI/2;for(let dt=0;dt<5;dt++){let ye=dt*Math.PI*2/5;for(let Tt of[-1,1]){let st=ye+Tt*.105,_t=$(A,.018,.11,.022,me,k+Math.cos(st)*.119,H+Math.sin(st)*.119,K?O.darkmetal:O.metal);_t.rotation.x=st}Fe(A,.009,.009,.016,me+B*.014,k+Math.cos(ye)*.044,H+Math.sin(ye)*.044,O.chrome,"x",6)}Fe(A,.056,.056,.027,me,k,H,K?O.darkmetal:O.metal,"x",32),Fe(A,.025,.025,.031,me,k,H,O.trim,"x",24)},ea=function(A){xt(G);let U=A.has("tires")?.368:pe?.3465:.335;if(pe)return pe.stockWheels.visible=!A.has("tires"),pe.atWheels.visible=A.has("tires"),U;let k=A.has("tires")?.765:.715;for(let H of[-k,k])for(let X of[-1.295,1.295])Qr(G,H,U,X,U,A.has("tires"));return U},Fd=function(A,U=!1){let k=new je;A.add(k);let H=.61,X=-1.62;[-.72,.72].forEach(B=>$(k,.035,.055,2.25,B,1.82,-.5,O.darkmetal)),[H,X].forEach(B=>$(k,1.46,.055,.035,0,1.82,B,O.darkmetal));for(let B=-1.56;B<.62;B+=.14)$(k,1.43,.022,.072,0,1.825,B,O.trim);[-.68,.68].forEach(B=>[-1.38,.38].forEach(he=>{$(k,.055,.095,.11,B,1.755,he,O.darkmetal),$(k,.1,.02,.15,B,1.715,he,O.rubber),Fe(k,.012,.012,.06,B,1.77,he,O.metal,"x",8)}));let K=$(k,1.38,.13,.018,0,1.77,.64,O.trim);if(K.rotation.x=-.5,U){[-.72,.72].forEach(B=>wt(k,[[B,1.83,H],[B,1.96,H-.12],[B,1.96,X+.06],[B,1.83,X]],.018));for(let B of[-1.55,.49])$(k,1.44,.025,.025,0,1.955,B,O.darkmetal)}else for(let B of[-.72,.72])for(let he of[-1.5,-.8,-.1,.5])$(k,.018,.014,.045,B,1.86,he,O.metal)},ta=function(A,U,k,H,X=.115){let K=[[[.48,.44],[.14,.64],[-.48,.2],[-.16,-.03],[.19,.23],[.34,.14],[.48,.25]],[[.16,.03],[-.19,-.23],[-.34,-.14],[-.48,-.25],[-.48,-.44],[-.14,-.64],[.48,-.2]]];for(let B of K){let he=new Ot(B.map(([ee,me])=>new oe(ee*X,me*X)));we(new Tn(he,{depth:.008,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.001,bevelThickness:.001}),O.chrome,A,U,k,H)}},Oo=function(A,U){if(pe){if(Object.entries(pe.grilles).forEach(([k,H])=>H.visible=k===(U==="smesh"?"mesh":U)),U==="smesh"&&pe.sBadgeGeometry){let k=we(pe.sBadgeGeometry.clone(),O.chrome,A);k.userData.grilleBadge=!0,Ju(k,T,ct,ae)}return}if($(A,1.49,.286,.038,0,.977,1.855,O.trim),U==="mesh"||U==="delete"||U==="rhino"){for(let k=.866;k<1.09;k+=.028)$(A,.88,.009,.012,0,k,1.882,O.darkmetal);for(let k=-.43;k<.45;k+=.035)$(A,.008,.22,.012,k,.977,1.885,O.darkmetal);U==="rhino"&&ta(A,0,.98,1.907,.13)}else if(U==="oem"||U==="chrome"){for(let k of[-.35,-.175,0,.175,.35]){$(A,.11,.2,.018,k,.977,1.88,O.darkmetal),$(A,.075,.162,.021,k,.977,1.893,O.trim);for(let H of[-1,1])$(A,.008,.18,.015,k+H*.048,.977,1.901,U==="chrome"?O.chrome:O.darkmetal)}ta(A,0,.98,1.92,.125)}else{for(let k=.89;k<1.08;k+=.047)$(A,.88,.014,.012,0,k,1.887,O.darkmetal);Un(A,U==="script"?"Suzuki":"SUZUKI",.68,.12,0,.98,1.908,0,"#e2e5dd","#252e2d",U==="script")}},Ii=function(A,U){if(m.has(f)||U==="none")return;if(pe){o0(pe.paintMeshes,A,U,ct,T.decalColour);return}let k=pe?.756:.773;[-1,1].forEach(H=>{if(U==="heritage"||U==="safari")(U==="heritage"?["#b24d25","#d58d43","#e6c58f"]:["#d7c18f","#655e47","#3d4836"]).forEach((K,B)=>{let he=new Ze({color:K,roughness:.7}),ee=$(A,.006,.045,2.7,H*k,.87+B*.052,-.36,he);ee.userData.disposableMaterial=!0});else if(U==="geo"||U==="mountain"){let X=new Ot;X.moveTo(-1.45,0),X.lineTo(-.85,.2),X.lineTo(-.45,.06),X.lineTo(.05,.24),X.lineTo(.65,0),X.closePath();let K=we(new Ir(X),O.darkmetal,A,H*(k+.001),.67,-.25);K.rotation.y=H*Math.PI/2;for(let B=-1.4;B<.4;B+=.19){let he=$(A,.007,.05,.11,H*(k+.003),.77,B,O.trim);he.rotation.x=-.45}}else if(U==="topo")for(let X=0;X<6;X++){let K=[];for(let B=-1.52;B<.8;B+=.13)K.push([H*(k+.002),.72+X*.035+Math.sin(B*4+X)*.017,B]);ke(A,K,.003,O.darkmetal)}})},na=function(A,U){N=bm({accessoryRig:q,mats:O,detailed:pe,modelBody:ae,colour:ct,effectiveDesign:T,lampEmitters:Be,buildGrille:Oo,addDecals:Ii,arch:Uo})(A,U),pe&&U.nameDecal&&q.add(Bm(zm(U.nameDecal),ae,pe.paintMeshes,F))},zn=function(A=it){D=!0,se.clear(),vt.dataset.cameraMode=y()?"inside":m.has(f)?"cutaway":"exterior",vt.dataset.cameraView=f,it={...it,...A},A.colour&&(ct=A.colour);for(let[ee,me]of[["viewStock",z],["viewBuild",!z]]){let Ae=document.getElementById(ee);Ae?.classList.toggle("active",me),Ae?.setAttribute("aria-pressed",String(me))}let U=Km(z?[]:it.parts||[],window.JIMNY_MARKET_PRODUCTS||[]),k=new Set(["tires","snorkel","skinnyjim_backbone","skinnyjim_jerry_tray","mod_reardoor_molle","seats","doortrim"]);for(let ee of window.JIMNY_MARKET_PRODUCTS||[])ee.visual&&ee.bodyStyles?.includes("3door")&&k.add(ee.visual);let H=new Set(ae==="3door"?U.filter(ee=>k.has(ee)):U),X=z?{finish:"oem",decal:"none",grille:"oem"}:{...it.design};X.tyreType=z?"highway":Hm(X,H),X.tyreType==="highway"?H.delete("tires"):H.add("tires"),pe&&(pe.headlamps.visible=!H.has("headlamps"),pe.bumper.visible=!["bull","autostylenn_bumper_v1"].some(ee=>H.has(ee)),Object.values(pe.grilles).forEach(ee=>Ju(ee,X,ct,ae))),z||(H.has("autostylenn_big_suzuki_grille")?X.grille="block":H.has("autostylenn_cursive_grille")?X.grille="script":H.has("autostylenn_s_grille")&&(X.grille="smesh")),T={...X},O.upholstery.color.set({tan:"#a38b69",saddle:"#854d31",olive:"#59624d",stone:"#b3b1a5",black:"#303332"}[X.cabin]||"#a38b69");let K=e0(X.finish);We.color.set(ct),We.roughness=K.roughness,We.metalness=["#727973","#8a9099"].includes(ct.toLowerCase())?.35:["#364b72","#5a6fd6","#8d1c25"].includes(ct.toLowerCase())?.1:0,We.clearcoat=K.clearcoat,We.clearcoatRoughness=K.clearcoatRoughness,We.bumpScale=X.finish==="matte"?55e-5:8e-5,tt.copy(We),X.finish==="twotone"&&tt.color.set(/^#[0-9a-f]{6}$/i.test(X.roofColour||"")?X.roofColour:"#141b22"),[We,tt].forEach(ee=>{let me=m.has(f);ee.transparent!==me&&(ee.needsUpdate=!0),ee.transparent=me,ee.opacity=me?.12:1,ee.depthWrite=!me}),O.glass.opacity=m.has(f)||y()?.12:.6,O.glass.envMapIntensity=y()?.12:1,lt.clippingPlanes=m.has(f)?[new Pn(new I(0,-1,0),f==="headliner-cutaway"?1.631:1.48)]:[];for(let ee of["BodyShell","RoofShell","SpareWheel"]){let me=ze.getObjectByName(ee);me&&(me.visible=!["cargo","doors-cutaway","headliner-cutaway","touring"].includes(f))}Xe.position.set(0,1.48,f==="cargo"?-1.28:-.15),f==="footwell"&&Xe.position.set(.39,1.08,.25-(ae==="3door"?.17:0)),Je?.setVisible(y()||m.has(f)),Xe.intensity=y()?.85:["cargo","doors-cutaway","touring"].includes(f)?.95:m.has(f)?.35:0,xt(te),uh();let B=ea(H);if(F.position.y=(H.has("lift")?.055:0)+(B-(pe?.3465:.335)),pe)for(let ee of[pe.stockWheels,pe.atWheels,ze.getObjectByName("SpareWheel")])X.partColours?.wheels?Em(ee,X.partColours.wheels):Tm(ee,X.wheelFinish),Vu(ee,ae==="5door"&&H.has("suzuki_nomade_steelwheel")),Vm(ee,X.tyreType);if(ym(ze.getObjectByName("Cabin"),{body:ae,seats:H.has("seats"),fabric:X.seatFabric,colour:"#"+O.upholstery.color.getHexString(),touring:H.has("touring"),camp:X.touringMode==="camp"}),na(H,X),ko(),m.has(f)){let ee=new Set(["doortrim","seats","touring","armrest","mats","steering","ambient","molle","drawer","shelf","mod_reardoor_molle","mod_halfmolly_5door","exploresetups_drawer_5door","armoro_seat_organizer","jimsa_door_pockets","jimsa_dash_tray","jimsa_console_tray","jimsa_cargo_pouch_5door","jimsa_tiedowns","fr_wolfpack","fr_watercan20","arb_airkit","arb_repairkit","kap_fire"]);for(let[me,Ae]of Object.entries(globalThis.JimnyPracticalParts||{}))Ae.category==="Interior"&&ee.add(me);q.traverse(me=>{let Ae=me.userData.finishTarget;Ae&&!ee.has(Ae)&&(me.visible=!1)})}qc(O,Be),se.apply([L],X),j=Jm(H),Zi(),De=!0,pe&&ae==="5door"&&H.has("suzuki_nomade_steelwheel")&&N.push("suzuki_nomade_steelwheel");let he=N.length;yn.textContent=mt?"Simplified preview \xB7 detailed model unavailable":pe?z?"Stock preview":he?`${he} fitted \xB7 click a part to edit`:vt.dataset.touchMode==="scroll"?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate":"Loading detailed Jimny\u2026",y()&&(yn.textContent="Click an accessory \xB7 drag to look around"),lt.domElement.setAttribute("aria-label",(y()?"Rotatable enclosed Jimny cabin. Drag to look around, Shift-drag to move, scroll to zoom.":Nd)+` ${he} visible modifications.`),vt.dataset.parts=N.join(","),vt.dataset.finish=X.finish||"oem",vt.dataset.grille=X.grille||"oem",vt.dataset.decal=X.decal||"none",v()},ko=function(){q.updateWorldMatrix(!0,!0);let A=q.matrixWorld.clone().invert(),U=new Map;q.traverse(k=>{if(!k.isMesh||k.userData.disposableMaterial||Array.isArray(k.material))return;let H="";for(let K=k;K&&K!==q;K=K.parent)if(K.userData.finishTarget){H=K.userData.finishTarget;break}let X=H+":"+k.material.uuid+":"+k.castShadow+":"+k.receiveShadow+":"+Object.keys(k.geometry.attributes).sort().join(",");U.has(X)||U.set(X,{material:k.material,objects:[],target:H}),U.get(X).objects.push(k)});for(let{material:k,objects:H,target:X}of U.values()){if(H.length<2)continue;let K=H.map(ee=>{let me=ee.geometry.index?ee.geometry.toNonIndexed():ee.geometry.clone();return me.applyMatrix4(new Ue().multiplyMatrices(A,ee.matrixWorld)),me}),B=zc(K,!1);if(K.forEach(ee=>ee.dispose()),!B)continue;H.forEach(ee=>{ee.geometry.dispose(),ee.removeFromParent()});let he=we(B,k,q);he.userData.finishTarget=X,he.castShadow=H[0].castShadow,he.receiveShadow=H[0].receiveShadow}},Zi=function(){qe.visible=Oe&&ue.headlights,Q.forEach(U=>{U.intensity=0}),O.white.emissiveIntensity=Oe&&ue.headlights?2.8:0,O.ambient.emissiveIntensity=Oe?2:.35,Object.values(Be).forEach(U=>U.emissiveIntensity=0),re.forEach(U=>U.intensity=0),j.forEach((U,k)=>{let H=ih[U],X=re[k];if(!X)return;let K=U==="dual"&&!ue.dualAmber?"#f1f6ff":H.colour,B=U==="bar"?1.85:U==="work"?1.79:["fog","dual"].includes(U)?.62:U==="combo"?1.22:.87;X.intensity=0,Be[U].color.set(K),Be[U].emissive.set(K),Be[U].emissiveIntensity=Oe&&ue.auxiliary?3:0}),document.querySelectorAll("[data-light-toggle]").forEach(U=>{let k=ue[U.dataset.lightToggle];U.setAttribute("aria-pressed",String(k)),U.classList.toggle("active",k)});let A=document.getElementById("lightSelectionStatus");A&&(A.textContent=j.length?j.map(U=>ih[U].label).join(" \xB7 "):"Factory headlamps only. Add a lamp below to compare."),Oe&&(yn.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),De=!0},Ys=function(A){Oe=!!A,vt.parentElement.classList.toggle("lighting-night",Oe),document.getElementById("viewNight").classList.toggle("active",Oe),document.getElementById("viewNight").setAttribute("aria-pressed",String(Oe)),Se(),Zi(),Oe||(f==="beam"?_i("orbit"):yn.textContent=z?"Stock preview":N.length?`${N.length} representative parts in 3D`:"Click a part \xB7 drag to rotate"),De=!0},Yn=function(){if(y())return b(),g.target.clone();let A=new Xt,U=[];if(L.updateMatrixWorld(!0),L.traverse(Ae=>{if(Ae.isMesh){for(let Ke=Ae;Ke&&Ke!==L;Ke=Ke.parent)if(!Ke.visible)return;A.expandByObject(Ae,!0),U.push(Ae)}}),A.isEmpty())return g.target.clone();let k=A.getCenter(new I),H=e.position.clone().sub(g.target).normalize(),X=new I().crossVectors(e.up,H).normalize(),K=new I().crossVectors(H,X),B=Math.tan(nn.degToRad(e.fov/2)),he=B*e.aspect,ee=0,me=new I;for(let Ae of U){let Ke=Ae.geometry.attributes.position;for(let ht=0;ht<Ke.count;ht++){me.fromBufferAttribute(Ke,ht).applyMatrix4(Ae.matrixWorld).sub(k);let dt=me.dot(H);ee=Math.max(ee,Math.abs(me.dot(X))/he+dt,Math.abs(me.dot(K))/B+dt)}}return e.position.copy(k).addScaledVector(H,Math.max(g.minDistance,ee*1.06)),e.lookAt(k),k},_i=function(A){A==="beam"&&(A="orbit"),f=A,vt.dataset.cameraMode=y()?"inside":m.has(A)?"cutaway":"exterior",vt.dataset.cameraView=A,w(),oi(e.aspect);let U={front:[0,1.25,6.7],side:[6.6,1.3,0],rear:[-4,1.62,-5.5],orbit:[4.25,1.62,5.35],roof:[3.9,4.2,-4.5],cabin:[3.9,3.4,-3.3],cargo:[0,2.8,-5.5],underside:[3.8,-1.5,4.5],beam:[8,9,-6],"reference-front":[.7,1.45,8],"reference-rear":[-.7,1.45,-8],"reference-side":[-8,1.3,0]};e.position.set(...U[A]||U.orbit),g.target.set(0,.9,0),_(),zn(),y()?S():(g.target.copy(Yn()),_()),A==="cargo"&&(e.position.set(1.65,2.25,-3.4),g.target.set(0,1.01,ae==="3door"?-1.23:-1.4),_()),A==="touring"&&(e.position.set(2.55,3.15,-3.1),g.target.set(0,.93,-.6),_(),yn.textContent="Touring interior \xB7 cutaway inspection"),A==="doors-cutaway"&&(e.position.set(-2.3,2.5,-1.5),g.target.set(0,.91,ae==="3door"?-.17:-.32),_(),yn.textContent="Door cutaway \xB7 optional inspection"),A==="headliner-cutaway"&&(e.position.set(2.3,2.6,-2.8),g.target.set(0,1.46,ae==="3door"?-.64:-.81),_(),yn.textContent="Roof removed \xB7 overhead storage inspection"),(A==="cabin"||A==="cutaway")&&(yn.textContent="Cabin cutaway \xB7 optional inspection, not the normal interior view"),A==="cargo"&&(yn.textContent="Cargo cutaway \xB7 body and spare hidden for inspection, not an open-door simulation"),y()&&(yn.textContent="Click an accessory \xB7 drag to look around"),Oe&&(yn.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),document.querySelectorAll("[data-camera]").forEach(k=>k.classList.toggle("active",k.dataset.camera===A)),De=!0},oi=function(A){e.aspect=A;let U=y()?68:ne==="studio"?28:42;e.fov=nn.radToDeg(2*Math.atan(Math.tan(nn.degToRad(U/2))*Math.max(1,1.25/A))),y()&&(e.fov=Math.min(92,e.fov)),e.updateProjectionMatrix()},Bo=function(A){p.drag?.id===A.pointerId&&(p.drag=null)},dh=function(){let A=lt.getSize(new oe),U=lt.getPixelRatio(),k=e.aspect,H=e.fov,X=e.position.clone(),K=e.quaternion.clone();u(1600,1200,1),oi(4/3),Yn(),d();let B=lt.domElement.toDataURL("image/png");return u(A.x,A.y,U),e.position.copy(X),e.quaternion.copy(K),oi(k),e.fov=H,e.updateProjectionMatrix(),d(),B},fh=function(A){Y||(Y={payload:structuredClone(it),stock:z,night:Oe,view:f,position:e.position.clone(),target:g.target.clone(),fov:e.fov,inside:x()}),z=!1,Ys(!1),zn(A),_i("orbit")},ia=function(){if(!Y)return;let A=Y;Y=null,z=A.stock,zn(A.payload),_i(A.view),Ys(A.night),E(A.inside),e.position.copy(A.position),g.target.copy(A.target),e.fov=A.fov,e.updateProjectionMatrix(),_(),De=!0},P=function(A,U="orbit"){let k={payload:structuredClone(it),stock:z,night:Oe,scenery:ne,view:f,position:e.position.clone(),target:g.target.clone(),fov:e.fov,inside:x(),size:lt.getSize(new oe),ratio:lt.getPixelRatio(),near:e.near,far:e.far,bodyVisible:F.visible};try{if(z=!1,Oe=!1,ne="studio",Se(),zn(A),_i(U==="seat-detail"?"cabin":U==="grille-detail"?"front":U),u(1600,1200,1),oi(4/3),g.target.copy(Yn()),_(),U==="wheel-detail"){let K=ae==="3door"?1.125:1.295;lt.toneMappingExposure=1.3,F.visible=!1,e.position.set(2.4,.6,K+1.3),e.lookAt(.705,.36,K),e.near=.1,e.far=2.7,e.updateProjectionMatrix()}if(U==="grille-detail"){let K=ae==="3door"?1.79:1.96;e.position.set(.32,1.16,K+3.15),e.lookAt(0,1.04,K-.1)}if(U==="seat-detail"&&(e.position.set(1.35,1.9,1),e.lookAt(.26,1.01,-.1)),U==="touring"&&(e.position.set(2.55,3.15,-3.1),e.lookAt(0,.94,-.6)),U==="doors"&&(_i("doors-cutaway"),e.position.set(-2.3,2.5,-1.5),e.lookAt(0,.91,-.32)),A.detail){let K=A.parts?.[0],B=window.JIMNY_MARKET_PRODUCTS?.find(Ae=>Ae.id===K),he=B?.visual||K,ee={exea_cupholder:[[.12,1.35,-.09],[.57,1.17,.25]],exea_phone_mount:[[.02,1.43,-.11],[-.18,1.36,.345]],armoro_console_organizer:[[.02,1.3,-.11],[0,.84,.22]],exea_switch_extensions:[[.015,1.15,.01],[0,.965,.282]],maruti_at_mats:[[.39,1.13,.16],[.4,.698,.49]],skinnyjim_backbone:[[-1.85,1.38,-3.4],[-.49,1.04,-1.88]],skinnyjim_jerry_tray:[[-1.7,1.3,-3.4],[-.5,.91,-1.98]],suzuki_nomade_flatrack:[[2.5,3,-3.1],[0,1.82,-.52]],mod_reardoor_molle:[[0,1.78,-.9],[0,.96,-1.73]],mod_halfmolly_5door:[[1.7,1.85,-2.5],[0,1.23,-1.36]],exploresetups_drawer_5door:[[1.55,2.1,-3.05],[0,.83,-1.43]],rack:[[2.8,3.4,-3.4],[0,1.85,-.3]],msga_roofbasket:[[2.8,3.4,-3.4],[0,1.85,-.3]],prad_roofrack:[[2.8,3.4,-3.4],[0,1.85,-.3]],bull:[[1.65,1.38,4.65],[0,.8,1.9]],autostylenn_bumper_v1:[[1.65,1.32,4.65],[0,.7,1.9]],winch:[[1.4,1.15,4.1],[0,.64,1.97]],snorkel:[[-2.6,1.8,2.05],[-.76,1.36,.8]],led:[[1.4,2.6,3.8],[0,1.95,.55]],pods:[[1.65,1.65,4.2],[0,1.03,1.98]],headlamps:[[.35,1.2,4.85],[0,1.02,1.91]],sparecover:[[-1.65,1.5,-4.3],[0,1.08,-1.98]],ladder:[[-2.4,2,-4.5],[-.5,1.2,-1.94]],spoiler:[[-2,2.5,-4],[0,1.65,-1.68]],seats:[[2.45,2.65,1.45],[0,.96,-.18]],molle:[[2.65,2.28,-1.45],[0,.93,-.3]],armrest:[[1.6,2,-1.35],[0,.85,-.18]],lift:[[2.7,.75,2.9],[.45,.52,1.18]],mudflaps:[[2.7,.8,-2.8],[.65,.38,-1.25]],flares:[[3,1.15,2.8],[.7,.79,1.1]]},me=ee[he];me&&ae==="3door"&&["exea_cupholder","exea_phone_mount","armoro_console_organizer","exea_switch_extensions"].includes(he)&&(me=me.map(Ae=>[Ae[0],Ae[1],Ae[2]-.17])),B?.lightProfile&&(me=B.lightProfile==="work"?[[1.8,2.7,-4],[0,1.9,-1.45]]:B.lightProfile==="bar"?ee.led:B.lightProfile==="headlamps"?ee.headlamps:ee.pods),me&&(e.position.set(...me[0]),e.lookAt(...me[1]))}d();let H=document.createElement("canvas");H.width=800,H.height=600;let X=H.getContext("2d");return X.imageSmoothingQuality="high",X.drawImage(lt.domElement,0,0,800,600),H.toDataURL("image/webp",.9)}finally{F.visible=k.bodyVisible,e.near=k.near,e.far=k.far,e.updateProjectionMatrix(),z=k.stock,Oe=k.night,ne=k.scenery,f=k.view,w(),zn(k.payload),Se(),E(k.inside),u(k.size.x,k.size.y,k.ratio),oi(k.size.x/k.size.y),e.fov=k.fov,e.updateProjectionMatrix(),e.position.copy(k.position),g.target.copy(k.target),_(),d(),De=!0,document.querySelectorAll("[data-camera]").forEach(H=>H.classList.toggle("active",H.dataset.camera===k.view))}},i=new Hi;i.background=new Ve("#efefed");let e=new qt(28,1,.1,250);e.position.set(4.25,1.62,5.35);let t=r0();vt.dataset.quality=t.id,lt.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio)),lt.shadowMap.enabled=!0,lt.shadowMap.type=ds,lt.toneMapping=Ns,lt.toneMappingExposure=.95,lt.domElement.setAttribute("aria-label",Nd),lt.domElement.setAttribute("role","img"),lt.domElement.tabIndex=0,vt.appendChild(lt.domElement);let n=new Bs(lt),s=new eh,r=n.fromScene(s,.04);i.environment=r.texture,i.environmentIntensity=.7,s.dispose(),n.dispose();let a=new Ka("#f6f8fa","#747572",1.35);i.add(a);let o=new Ds("#fffdf8",2.2);o.position.set(3,7,5),o.castShadow=!0,o.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),o.shadow.radius=12,o.shadow.blurSamples=t.shadowBlurSamples,Object.assign(o.shadow.camera,{left:-2.8,right:2.8,top:2.8,bottom:-2.8,near:.1,far:20}),o.shadow.bias=-15e-5,o.shadow.normalBias=.004,i.add(o);let l=new ah(lt,new Dt(1,1,{type:kt,samples:4}));l.addPass(new oh(i,e));let c=new No(i,e,1,1);c.blendIntensity=.9,c.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,distanceFallOff:1,scale:1.6,samples:16}),c.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});let h=c.render.bind(c);c.render=(...A)=>{let U=[...de.values()].map(k=>k.skybox).filter(k=>k?.visible);U.forEach(k=>{k.visible=!1}),h(...A),U.forEach(k=>{k.visible=!0})},l.addPass(c),l.addPass(new hh);let f="orbit",g=new Qc(e,lt.domElement);g.target.set(0,.9,0),g.enableDamping=!0,g.dampingFactor=.09,g.enablePan=!1,g.minDistance=3.3,g.maxDistance=l0,g.maxPolarAngle=Math.PI*.49,g.minPolarAngle=.15;let M=Rm,m=Cm,p={yaw:0,pitch:-.18,eye:new I,drag:null};new MutationObserver(v).observe(vt.parentElement,{attributes:!0,attributeFilter:["class"]}),window.matchMedia("(max-width:899px)").addEventListener("change",v),v();let R=new Te(new on(200,200),new Va({color:"#303536",opacity:.19}));R.rotation.x=-Math.PI/2,R.position.y=-.003,R.receiveShadow=!0,i.add(R);let C=s0(lt,{resolution:t.contactResolution});i.add(C.plane);let D=!0,L=new je;i.add(L);let F=new je;L.add(F);let G=new je;L.add(G);let q=new je;F.add(q);let Q=[-.55,.55].map(A=>{let U=new cs("#fff2cd",0,35,.3,.7,1.3);return U.position.set(A,.977,1.96),U.target.position.set(A,.05,13),F.add(U,U.target),U}),ue={headlights:!0,auxiliary:!0,dualAmber:!0},Z=new je;F.add(Z);let re=Array.from({length:8},()=>{let A=new cs("#fff",0,35,.3,.72,1.3);return Z.add(A,A.target),A}),le=R.material,Le=new Ze({color:"#303431",roughness:.96}),Re=new je;i.add(Re),Re.visible=!1;let rt=new Te(new on(5.4,45),new Ze({color:"#424747",roughness:.94}));rt.rotation.x=-Math.PI/2,rt.position.set(0,.002,16),Re.add(rt);for(let A=3;A<36;A+=3)for(let U of[-2.5,2.5]){let k=new Te(new an(.035,.32,.05),new Ze({color:"#e6e3cd",roughness:.5}));k.position.set(U,.16,A),Re.add(k)}let We=new Ht({color:"#d9b744",roughness:.32,metalness:.025,clearcoat:1,clearcoatRoughness:.035}),tt=We.clone();We.userData.vehiclePaint=!0,tt.userData.vehiclePaint=!0;let se=pm(),O={paint:We,roof:tt,trim:new Ze({color:"#232a2a",roughness:.7}),rubber:new Ze({color:"#1b2020",roughness:.98}),glass:new Ze({color:"#213c45",roughness:.12,metalness:.55,transparent:!0,opacity:.91}),metal:new Ze({color:"#adb4b0",metalness:.8,roughness:.3}),darkmetal:new Ze({color:"#39403b",metalness:.6,roughness:.5}),white:new Ze({color:"#fff7de",emissive:"#fff3c4",emissiveIntensity:.25,roughness:.2}),red:new Ze({color:"#b72d27",emissive:"#951d19",emissiveIntensity:.2}),orange:new Ze({color:"#d88132",roughness:.5}),seat:new Ze({color:"#343a36",roughness:.94}),accent:new Ze({color:"#cb593a",roughness:.7}),canvas:new Ze({color:"#a39a79",roughness:1})},te=new je;F.add(te);let ze=new je;F.add(ze);let pe=null,Je=null,mt=!1,ae="5door",ge=!1,xe=0,Me=_e("paint");We.bumpMap=Me,We.bumpScale=35e-5,O.rubber.name="TyreRubber",O.rubber.bumpMap=Me,O.rubber.bumpScale=2e-4,O.rubber.color.set("#171919"),O.rubber.roughness=.9,O.glass=new Ht({color:"#101b1d",roughness:.02,metalness:0,ior:1.52,specularIntensity:1,transparent:!0,opacity:.6,depthWrite:!1,side:Vt}),O.lens=new Ht({color:"#e0e7e7",metalness:.05,roughness:.08,clearcoat:1,transparent:!0,opacity:.4,depthWrite:!1}),O.chrome=new Ze({color:"#e8eeed",metalness:1,roughness:.17}),O.reflector=new Ze({color:"#d4d9d7",metalness:1,roughness:.24}),O.brake=new Ze({color:"#737976",metalness:.85,roughness:.46}),O.textured=new Ze({color:"#30362f",roughness:.96,bumpMap:Me,bumpScale:.008}),O.upholstery=new Ze({color:"#a38b69",roughness:.86,bumpMap:Me,bumpScale:6e-4}),O.darkmetal.color.set("#25292b"),O.darkmetal.metalness=.4,O.darkmetal.roughness=.55,O.ambient=new Ze({color:"#386588",emissive:"#2f90d0",emissiveIntensity:.35,roughness:.5}),O.smoked=new Ht({color:"#11191b",roughness:.18,clearcoat:.7,transparent:!0,opacity:.85,depthWrite:!1,side:Vt});let Xe=new Ki("#f2f3ee",0,2.3,2);Xe.position.set(0,1.48,-.15),F.add(Xe);let De=!0,$e=!0,Oe=!1,z=!1,ct="#d9b744",it={parts:[],design:{finish:"oem",decal:"none",grille:"oem"},colour:"#d9b744"},N=[],T={finish:"oem",decal:"none",grille:"oem"},j=[],Y=null,ne="studio",be=!1,ve=!1,ce=0,de=new Map,He=new I;new MutationObserver(Se).observe(document.documentElement,{attributes:!0,attributeFilter:["data-ui-theme"]});async function Ee(A){let U=Co(A),k=++ce;ne=U,ve=!1,be=!de.has(U),Se();try{if(be){let K=await new nh().setDataType(kt).loadAsync(Zm(U,t.hdri));if(K.mapping=Or,K.needsUpdate=!0,k!==ce){K.dispose();return}let B=new Bs(lt),he=B.fromEquirectangular(K);B.dispose(),de.set(U,{texture:K,environment:he})}if(k!==ce)return;let H=Xs[U],X=de.get(U);if(!X.skybox){let K=new th(X.texture,H.height,H.radius,96);K.position.y=H.height-.004,K.material.envMapRotation.set(0,H.rotation,0),K.renderOrder=-1,i.add(K),X.skybox=K}be=!1;try{localStorage.setItem("thatsuvmod-scenery",U)}catch{}}catch{if(k!==ce)return;be=!1,ve=!0}Se(),oi(e.aspect),g.target.copy(Yn()),_()}document.querySelectorAll("[data-scenery-select]").forEach(A=>A.addEventListener("change",()=>Ee(A.value)));let Be=Object.fromEntries(Object.entries(ih).map(([A,U])=>[A,new Ze({color:U.colour,emissive:U.colour,emissiveIntensity:0,roughness:.12,metalness:.1})])),qe=new je;F.add(qe);let et=document.createElement("canvas");et.width=et.height=64;let W=et.getContext("2d"),Ce=W.createRadialGradient(32,32,0,32,32,32);Ce.addColorStop(0,"rgba(255,251,222,1)"),Ce.addColorStop(.18,"rgba(255,251,222,.6)"),Ce.addColorStop(1,"rgba(255,251,222,0)"),W.fillStyle=Ce,W.fillRect(0,0,64,64);let fe=new xn(et);fe.colorSpace=bt;let Ie=new Sr({map:fe,transparent:!0,opacity:.65,depthWrite:!1,blending:no});for(let A of[-.55,.55]){let U=new Ea(Ie);U.position.set(A,.977,1.94),U.scale.set(.19,.19,1),qe.add(U)}qe.visible=!1;let we=(A,U,k,H=0,X=0,K=0)=>{let B=new Te(A,U);return B.position.set(H,X,K),B.castShadow=!0,B.receiveShadow=!0,k.add(B),B},$=(A,U,k,H,X,K,B,he=O.trim)=>we(Math.min(U,k,H)>.065?new Bt(U,k,H,2,Math.min(U,k,H)*.14):new an(U,k,H),he,A,X,K,B),Fe=(A,U,k,H,X,K,B,he=O.trim,ee="y",me=24)=>{let Ae=we(new Gt(U,k,H,me),he,A,X,K,B);return ee==="x"&&(Ae.rotation.z=Math.PI/2),ee==="z"&&(Ae.rotation.x=Math.PI/2),Ae},ke=(A,U,k=.025,H=O.darkmetal)=>we(new Wn(new pi(U.map(X=>new I(...X)),!1,"centripetal",.1),Math.max(12,U.length*3),k,8,!1),H,A),wt=(A,U,k=.01,H=O.trim)=>{let X=U.map(B=>new I(...B)),K=new Qn;for(let B=1;B<X.length;B++)K.add(new $n(X[B-1],X[B]));return we(new Wn(K,U.length*2,k,6,!1),H,A)};document.addEventListener("click",A=>{let U=A.target.closest("[data-light-toggle]");U&&(ue[U.dataset.lightToggle]=!ue[U.dataset.lightToggle],Zi())}),new ResizeObserver(()=>{let{width:A,height:U}=vt.getBoundingClientRect();!A||!U||(u(A,U),oi(A/U),g.target.copy(Yn()),_(),De=!0)}).observe(vt),new IntersectionObserver(A=>{$e=A[0].isIntersecting,$e&&(De=!0)},{rootMargin:"100px"}).observe(vt),g.addEventListener("change",()=>{De=!0}),lt.domElement.addEventListener("pointerdown",A=>{!y()||vt.dataset.touchMode==="scroll"||(p.drag={id:A.pointerId,x:A.clientX,y:A.clientY,pan:A.shiftKey||A.button===2},lt.domElement.setPointerCapture(A.pointerId),A.preventDefault())}),lt.domElement.addEventListener("pointermove",A=>{let U=p.drag;if(!y()||!U||U.id!==A.pointerId)return;let k=A.clientX-U.x,H=A.clientY-U.y;if(U.x=A.clientX,U.y=A.clientY,U.pan){let X=ae==="3door"?-.17:0;p.eye.x=nn.clamp(p.eye.x-k*.0012,-.52,.52),p.eye.z=nn.clamp(p.eye.z+H*.0012,-.78+X,.16+X)}else p.yaw-=k*.004,p.pitch=nn.clamp(p.pitch+H*.003,-1.15,.8);b(),A.preventDefault()}),Gm({canvas:lt.domElement,camera:e,root:L,planes:()=>lt.clippingPlanes,enabled:()=>!!pe&&!ge&&!Y&&!z,onPick:A=>window.dispatchEvent(new CustomEvent("jimny-part-pick",{detail:A}))}),lt.domElement.addEventListener("pointerup",Bo),lt.domElement.addEventListener("pointercancel",Bo),lt.domElement.addEventListener("contextmenu",A=>{y()&&A.preventDefault()}),lt.domElement.addEventListener("wheel",A=>{!y()||vt.dataset.touchMode==="scroll"||(A.preventDefault(),e.fov=nn.clamp(e.fov+A.deltaY*.025,38,94),e.updateProjectionMatrix(),De=!0)},{passive:!1}),lt.domElement.addEventListener("keydown",A=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(A.key)){if(A.preventDefault(),y()){p.yaw+=A.key==="ArrowLeft"?.12:A.key==="ArrowRight"?-.12:0,p.pitch=nn.clamp(p.pitch+(A.key==="ArrowUp"?.08:A.key==="ArrowDown"?-.08:0),-1.15,.8),b();return}let U=A.key==="ArrowLeft"?.16:A.key==="ArrowRight"?-.16:0,k=e.position.clone().sub(g.target);U?k.applyAxisAngle(new I(0,1,0),U):k.multiplyScalar(A.key==="ArrowUp"?.92:1.08),e.position.copy(g.target).add(k),_(),De=!0}}),lt.domElement.addEventListener("webglcontextlost",()=>{yn.textContent="3D paused. Reload to restore the preview. Your build is saved."}),window.addEventListener("jimny-build-change",A=>{z=!1,zn(A.detail)}),window.addEventListener("jimny-preview-mode",A=>{z=A.detail==="stock",zn()}),window.addEventListener("jimny-preview-night",A=>Ys(A.detail)),window.addEventListener("jimny-preview-colour",A=>zn({colour:A.detail})),document.addEventListener("click",A=>{let U=A.target.closest("[data-camera]");U&&_i(U.dataset.camera)}),document.querySelectorAll("[data-viewer-zoom]").forEach(A=>A.addEventListener("click",()=>{let U=A.dataset.viewerZoom;if(y()){U==="fit"?(oi(e.aspect),S()):(e.fov=nn.clamp(e.fov*(U==="in"?.85:1.17),38,94),e.updateProjectionMatrix()),De=!0;return}if(U==="fit")g.target.copy(Yn());else{let k=e.position.clone().sub(g.target),H=nn.clamp(k.length()*(U==="in"?.8:1.25),g.minDistance,g.maxDistance);e.position.copy(g.target).add(k.setLength(H))}_(),De=!0})),window.jimny3D={ready:!0,snapshot:dh,getState:()=>({modelVersion:pe?"blender-lwb-3":"procedural-fallback",detailedReady:!!pe,assetError:mt,studioEnvironmentReady:de.has("studio")||ve,assemblies:pe?{grilles:Object.entries(pe.grilles).filter(([,A])=>A.visible).map(([A])=>A),wheels:pe.atWheels.visible?"all-terrain":"stock",stockBumper:pe.bumper.visible}:null,parts:[...N],colour:ct,stock:z,night:Oe,lighting:{...ue,profiles:[...j],activeBeams:[...Q,...re].filter(A=>A.intensity>0).length},view:f,design:{...T},touchMode:vt.dataset.touchMode,renderCalls:lt.info.render.calls,triangles:lt.info.render.triangles,meshCount:L.children.reduce((A,U)=>{let k=0;return U.traverse(H=>{H.isMesh&&k++}),A+k},0)}),view:_i};let V=window.jimny3D.getState;Object.assign(window.jimny3D,{beginPreview:fh,endPreview:ia,renderPreset:P}),window.jimny3D.getState=()=>({...V(),quality:t.id,body:ae,modelLoading:ge,surfaceStyles:se.snapshot(),modelVersion:pe?ae==="3door"?"blender-swb-5":"blender-lwb-10":"procedural-fallback",previewing:!!Y,scenery:ne,sceneryLoading:be,sceneryFailed:ve,sceneryVisible:!!de.get(ne)?.skybox?.visible,camera:{position:e.position.toArray(),target:g.target.toArray(),fov:e.fov,mode:y()?"enclosed-look-around":m.has(f)?"cutaway":"exterior-orbit",rotate:!0,pan:y(),zoom:!0}}),zn(window.getJimnyBuildState?.()||it);let ie="studio";try{ie=localStorage.getItem("thatsuvmod-scenery")}catch{}Ee(ie),vt.classList.add("ready");async function J(A="5door"){let U=++xe;ge=!0,mt=!1,vt.setAttribute("aria-busy","true"),L.visible=!1,yn.textContent=`Loading ${A==="3door"?"three":"five"}-door Jimny\u2026`;let k=A==="3door"?"assets/models/jimny-swb-blender.glb?v=48f13c24ef06":"assets/models/jimny-lwb-blender.glb?v=0b7863dbf153";try{let H=await Ym(k);if(U!==xe){H.scene.traverse(B=>{B.geometry?.dispose(),B.material&&B.material.dispose()});return}let X=["BodyShell","RoofShell","OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille","StockBumper","StockHeadlamps","StockWheels","AllTerrainWheels","Cabin","SpareWheel"],K=Object.fromEntries(X.map(B=>[B,H.scene.getObjectByName(B)]));if(X.some(B=>!K[B]))throw new Error("Incomplete Jimny model");if(se.clear(),pe){L.remove(pe.stockWheels,pe.atWheels);for(let B of[pe.stockWheels,pe.atWheels])rm(B),B.traverse(he=>he.geometry?.dispose());pe.sBadgeGeometry?.dispose()}Je?.dispose(),Je=null,xt(ze),pe=null,ae=A,H.scene.traverse(B=>{if(!B.isMesh)return;B.castShadow=!0,B.receiveShadow=!0;let he=B.material;t0(he),he.name==="IntakeShadow"&&(B.castShadow=!1),he.name==="BodyPaint"?(We.vertexColors=!1,B.material=We):he.name==="RoofPaint"?(tt.vertexColors=!1,B.material=tt):he.name==="WindowGlass"?(B.material=O.glass,B.castShadow=!1):he.name==="TyreRubber"?(O.rubber.vertexColors=!!B.geometry.attributes.color,O.rubber.name="TyreRubber",B.material=O.rubber):he.name==="LampEmitter"?B.material=O.white:he.transparent&&(he.depthWrite=!1,he.side=ni,B.castShadow=!1),["BrightChrome","MachinedAlloy","GrilleLettering","OpticalGlass"].includes(he.name)&&(he.vertexColors=!1)}),xm(K.Cabin);for(let B of X)(["StockWheels","AllTerrainWheels"].includes(B)?L:ze).add(K[B]);pe={grilles:{oem:K.OEMGrille,block:K.BlockGrille,rhino:K.RhinoGrille,script:K.ScriptGrille,chrome:K.GlossGrille,delete:K.DeleteGrille,classic:K.ClassicGrille,mesh:K.MeshGrille},bumper:K.StockBumper,stockWheels:K.StockWheels,atWheels:K.AllTerrainWheels},pe.headlamps=K.StockHeadlamps,pe.sBadgeGeometry=Yp(K.OEMGrille,ze.matrixWorld.clone().invert()),Am(K.Cabin,pe.sBadgeGeometry,A),Je=Mm(ze,vm(K.Cabin,ze,A),A),Je.update({gear:"P",range:"2H",parking:!0,rpm:0,speed:0}),fm(ze,A),pe.paintMeshes=[],K.BodyShell.traverse(B=>{B.isMesh&&B.material===We&&pe.paintMeshes.push(B)}),Object.values(pe.grilles).forEach(B=>B.traverse(he=>{he.isMesh&&["BrightChrome","GrilleLettering"].includes(he.material.name)&&(he.userData.brightGrilleMaterial=he.material)})),vt.dataset.model="blender",vt.dataset.body=A,L.visible=!0,ge=!1,vt.setAttribute("aria-busy","false"),Q.forEach(B=>B.position.z=A==="3door"?1.79:1.96),zn(),y()?S():(g.target.copy(Yn()),_()),window.dispatchEvent(new CustomEvent("jimny-model-ready",{detail:{body:A}}))}catch{if(U!==xe)return;ge=!1,mt=!0,vt.setAttribute("aria-busy","false"),L.visible=!1,De=!0,yn.textContent="This model could not load. Switch model or reload to retry; your build is saved."}}window.jimny3D.setBody=J,window.addEventListener("jimny-model-change",A=>{ia(),J(A.detail)}),J(window.getJimnyBuildState?.().body||"5door"),lt.setAnimationLoop(()=>{!$e||document.hidden||(_(),De&&(d(),De=!1,vt.dataset.rendered="true"))})}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
