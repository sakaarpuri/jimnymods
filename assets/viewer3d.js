var os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,au=1,Df=2;var $a=1,Lf=2,cs=3,ni=0,bn=1,Ht=2,jt=0,Ur=1,Qa=2,ou=3,lu=4,Vl=5;var ii=100,Nf=101,Ff=102,Uf=103,Of=104,Ps=200,kf=201,Bf=202,zf=203,cu=204,hu=205,eo=206,Gf=207,to=208,Hf=209,Vf=210,Wf=211,qf=212,Xf=213,jf=214,bl=0,xl=1,_l=2,mr=3,vl=4,yl=5,Ml=6,Sl=7,Wl=0,Yf=1,Kf=2,mi=0,no=1,io=2,so=3,Is=4,ro=5,ao=6,oo=7,Wh="attached",Jf="detached",lo=300,hs=301,Ds=302,Or=303,ql=304,co=306,$t=1e3,Cn=1001,gr=1002,Nt=1003,Xl=1004;var Ls=1005;var It=1006,kr=1007;var In=1008,uu=1008,wn=1009,du=1010,fu=1011,Br=1012,jl=1013,gi=1014,Wn=1015,kt=1016,Yl=1017,Kl=1018,us=1020,pu=35902,mu=35899,gu=1021,bu=1022,en=1023,yi=1026,Ti=1027,Jl=1028,Zl=1029,ds=1030,$l=1031;var Ql=1033,ho=33776,uo=33777,fo=33778,po=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,ac=37496,oc=37488,lc=37489,mo=37490,cc=37491,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,bc=37815,xc=37816,_c=37817,vc=37818,yc=37819,Mc=37820,Sc=37821,wc=36492,Tc=36494,Ec=36495,Ac=36283,Rc=36284,go=36285,Cc=36286;var Ms=2300,Ss=2301,pl=2302,qh=2303,Xh=2400,jh=2401,Yh=2402,Zf=2500;var xu=0,bo=1,zr=2,$f=3200;var Gr=0,Qf=1,bi="",xt="srgb",nn="srgb-linear",ba="linear",_t="srgb";var ml=7680;var ep=519,tp=512,np=513,ip=514,Pc=515,sp=516,rp=517,Ic=518,ap=519,_u=35044;var vu="300 es",ui=2e3,br=2001;function o0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function l0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){let i=xr("canvas");return i.style.display="block",i}var Od={},_r=null;function xa(...i){let e="THREE."+i.shift();_r?_r("log",e,...i):console.log(e,...i)}function lp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=lp(i);let e="THREE."+i.shift();if(_r)_r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=lp(i);let e="THREE."+i.shift();if(_r)_r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ys(...i){let e=i.join(" ");e in Od||(Od[e]=!0,je(...i))}function cp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hp={[bl]:xl,[_l]:Ml,[vl]:Sl,[mr]:yl,[xl]:bl,[Ml]:_l,[Sl]:vl,[yl]:mr},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,fa=Math.PI/180,ws=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function yu(i,e){return(i%e+e)%e}function c0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function h0(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function u0(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function d0(i,e=1){return e-Math.abs(yu(i,e*2)-e)}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function m0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function g0(i,e){return i+Math.random()*(e-i)}function b0(i){return i*(.5-Math.random())}function x0(i){i!==void 0&&(kd=i);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(i){return i*fa}function v0(i){return i*ws}function y0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function M0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function S0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tn={DEG2RAD:fa,RAD2DEG:ws,generateUUID:Zn,clamp:ht,euclideanModulo:yu,mapLinear:c0,inverseLerp:h0,lerp:pa,damp:u0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:b0,seededRandom:x0,degToRad:_0,radToDeg:v0,isPowerOfTwo:y0,ceilPowerOfTwo:M0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:w0,normalize:Tt,denormalize:hi},ie=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gh=new N,Bd=new fn,at=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],w=s[4],b=s[7],v=s[2],x=s[5],E=s[8];return r[0]=a*y+o*M+l*v,r[3]=a*m+o*w+l*x,r[6]=a*p+o*b+l*E,r[1]=c*y+h*M+u*v,r[4]=c*m+h*w+u*x,r[7]=c*p+h*b+u*E,r[2]=d*y+f*M+g*v,r[5]=d*m+f*w+g*x,r[8]=d*p+f*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bh=new at,zd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){let i={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nn]:{primaries:e,whitePoint:n,transfer:ba,toXYZ:zd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:zd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var dt=T0();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=xr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},E0=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xh(s[a].image)):r.push(xh(s[a]))}else r=xh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var A0=0,_h=new N,sn=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=It,a=In,o=en,l=wn,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Zn(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=lo;sn.DEFAULT_ANISOTROPY=1;var yt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,v=(p+1)/2,x=(h+d)/4,E=(u+y)/4,S=(g+m)/4;return w>b&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=x/n,r=E/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=x/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=E/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Zi.crossVectors(n,zn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Zi.crossVectors(n,zn)),Zi.normalize(),ko.crossVectors(zn,Zi),s[0]=Zi.x,s[4]=ko.x,s[8]=zn.x,s[1]=Zi.y,s[5]=ko.y,s[9]=zn.y,s[2]=Zi.z,s[6]=ko.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],w=n[7],b=n[11],v=n[15],x=s[0],E=s[4],S=s[8],_=s[12],A=s[1],C=s[5],L=s[9],F=s[13],O=s[2],z=s[6],K=s[10],Z=s[14],he=s[3],$=s[7],te=s[11],se=s[15];return r[0]=a*x+o*A+l*O+c*he,r[4]=a*E+o*C+l*z+c*$,r[8]=a*S+o*L+l*K+c*te,r[12]=a*_+o*F+l*Z+c*se,r[1]=h*x+u*A+d*O+f*he,r[5]=h*E+u*C+d*z+f*$,r[9]=h*S+u*L+d*K+f*te,r[13]=h*_+u*F+d*Z+f*se,r[2]=g*x+y*A+m*O+p*he,r[6]=g*E+y*C+m*z+p*$,r[10]=g*S+y*L+m*K+p*te,r[14]=g*_+y*F+m*Z+p*se,r[3]=M*x+w*A+b*O+v*he,r[7]=M*E+w*C+b*z+v*$,r[11]=M*S+w*L+b*K+v*te,r[15]=M*_+w*F+b*Z+v*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*d,w=o*f-c*u,b=o*d-l*u,v=a*f-c*h,x=a*d-l*h,E=a*u-o*h;return t*(y*M-m*w+p*b)-n*(g*M-m*v+p*x)+s*(g*w-y*v+p*E)-r*(g*b-y*x+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,w=t*l-s*a,b=t*c-r*a,v=n*l-s*o,x=n*c-r*o,E=s*c-r*l,S=h*y-u*g,_=h*m-d*g,A=h*p-f*g,C=u*m-d*y,L=u*p-f*y,F=d*p-f*m,O=M*F-w*L+b*C+v*A-x*_+E*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/O;return e[0]=(o*F-l*L+c*C)*z,e[1]=(s*L-n*F-r*C)*z,e[2]=(y*E-m*x+p*v)*z,e[3]=(d*x-u*E-f*v)*z,e[4]=(l*A-a*F-c*_)*z,e[5]=(t*F-s*A+r*_)*z,e[6]=(m*b-g*E-p*w)*z,e[7]=(h*E-d*b+f*w)*z,e[8]=(a*L-o*A+c*S)*z,e[9]=(n*A-t*L-r*S)*z,e[10]=(g*x-y*b+p*M)*z,e[11]=(u*b-h*x-f*M)*z,e[12]=(o*_-a*C-l*S)*z,e[13]=(t*C-n*_+s*S)*z,e[14]=(y*w-g*v-m*M)*z,e[15]=(h*v-u*w+d*M)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,M=l*c,w=l*h,b=l*u,v=n.x,x=n.y,E=n.z;return s[0]=(1-(y+p))*v,s[1]=(f+b)*v,s[2]=(g-w)*v,s[3]=0,s[4]=(f-b)*x,s[5]=(1-(d+p))*x,s[6]=(m+M)*x,s[7]=0,s[8]=(g+w)*E,s[9]=(m-M)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,u=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ui,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===ui)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ui,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===ui)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new N,oi=new Fe,R0=new N(0,0,0),C0=new N(1,1,1),Zi=new N,ko=new N,zn=new N,Hd=new Fe,Vd=new fn,yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},P0=0,Wd=new N,$s=new fn,Pi=new Fe,Bo=new N,ta=new N,I0=new N,D0=new fn,qd=new N(1,0,0),Xd=new N(0,1,0),jd=new N(0,0,1),Yd={type:"added"},L0={type:"removed"},Qs={type:"childadded",child:null},vh={type:"childremoved",child:null},Mt=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new yn,n=new fn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new at}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ta,Bo,this.up):Pi.lookAt(Bo,ta,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Pi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mt.DEFAULT_UP=new N(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qe=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},N0={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},zo={h:0,s:0,l:0};function yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=yu(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yh(a,r,e+1/3),this.g=yh(a,r,e),this.b=yh(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return dt.workingToColorSpace(vn.copy(this),e),Math.round(ht(vn.r*255,0,255))*65536+Math.round(ht(vn.g*255,0,255))*256+Math.round(ht(vn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=xt){dt.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(zo);let n=pa($i.h,zo.h,t),s=pa($i.s,zo.s,t),r=pa($i.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new ze;ze.NAMES=up;var Bi=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new N,Ii=new N,Mh=new N,Di=new N,er=new N,tr=new N,Kd=new N,Sh=new N,wh=new N,Th=new N,Eh=new yt,Ah=new yt,Rh=new yt,Ui=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),Ii.subVectors(n,t),Mh.subVectors(e,t);let a=li.dot(li),o=li.dot(Ii),l=li.dot(Mh),c=Ii.dot(Ii),h=Ii.dot(Mh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Eh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Eh.fromBufferAttribute(e,t),Ah.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eh,r.x),a.addScaledVector(Ah,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Ii.subVectors(e,t),li.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;er.subVectors(s,n),tr.subVectors(r,n),Sh.subVectors(e,n);let l=er.dot(Sh),c=tr.dot(Sh);if(l<=0&&c<=0)return t.copy(n);wh.subVectors(e,s);let h=er.dot(wh),u=tr.dot(wh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(er,a);Th.subVectors(e,r);let f=er.dot(Th),g=tr.dot(Th);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(tr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Kd,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ho.subVectors(this.max,na),nr.subVectors(e.a,na),ir.subVectors(e.b,na),sr.subVectors(e.c,na),Qi.subVectors(ir,nr),es.subVectors(sr,ir),bs.subVectors(nr,sr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-bs.z,bs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,bs.z,0,-bs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-bs.y,bs.x,0];return!Ch(t,nr,ir,sr,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,nr,ir,sr,Ho))?!1:(Vo.crossVectors(Qi,es),t=[Vo.x,Vo.y,Vo.z],Ch(t,nr,ir,sr,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new N,new N,new N,new N,new N,new N,new N,new N],ci=new N,Go=new qt,nr=new N,ir=new N,sr=new N,Qi=new N,es=new N,bs=new N,na=new N,Ho=new N,Vo=new N,xs=new N;function Ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xs.fromArray(i,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Oi=F0();function F0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function U0(i){Math.abs(i)>65504&&je("DataUtils.toHalfFloat(): Value out of range."),i=ht(i,-65504,65504),Oi.floatView[0]=i;let e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((e&8388607)>>Oi.shiftTable[t])}function O0(i){let e=i>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(i&1023)]+Oi.exponentTable[e],Oi.floatView[0]}var va=class{static toHalfFloat(e){return U0(e)}static fromHalfFloat(e){return O0(e)}},Jt=new N,Wo=new ie,k0=0,Zt=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},B0=new qt,ia=new N,Ph=new N,Fn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Ph)),this.expandByPoint(ia.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},z0=0,Kn=new Fe,Ih=new Mt,rr=new N,Gn=new qt,sa=new qt,dn=new N,ot=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o0(e)?Ma:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Gn.min,sa.min),Gn.expandByPoint(dn),dn.addVectors(Gn.max,sa.max),Gn.expandByPoint(dn)):(Gn.expandByPoint(sa.min),Gn.expandByPoint(sa.max))}Gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),dn.add(rr)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new N,l[S]=new N;let c=new N,h=new N,u=new N,d=new ie,f=new ie,g=new ie,y=new N,m=new N;function p(S,_,A){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,A),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[S].add(y),o[_].add(y),o[A].add(y),l[S].add(m),l[_].add(m),l[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let S=0,_=M.length;S<_;++S){let A=M[S],C=A.start,L=A.count;for(let F=C,O=C+L;F<O;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new N,b=new N,v=new N,x=new N;function E(S){v.fromBufferAttribute(s,S),x.copy(v);let _=o[S];w.copy(_),w.sub(v.multiplyScalar(v.dot(_))).normalize(),b.crossVectors(x,_);let C=b.dot(l[S])<0?-1:1;a.setXYZW(S,w.x,w.y,w.z,C)}for(let S=0,_=M.length;S<_;++S){let A=M[S],C=A.start,L=A.count;for(let F=C,O=C+L;F<O;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Zt(d,h,u)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},An=new N,is=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dh=new N,G0=new N,H0=new at,Rn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dh.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||H0.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},V0=0,pn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ur,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=hu,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sr=class extends pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,ra=new N,or=new N,lr=new N,cr=new ie,aa=new ie,dp=new Fe,qo=new N,oa=new N,Xo=new N,Jd=new ie,Lh=new ie,Zd=new ie,Sa=class extends Mt{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ts(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new is(n,3,0,!1)),ar.setAttribute("uv",new is(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;jo(qo.set(-.5,-.5,0),lr,a,or,s,r),jo(oa.set(.5,-.5,0),lr,a,or,s,r),jo(Xo.set(.5,.5,0),lr,a,or,s,r),Jd.set(0,0),Lh.set(1,0),Zd.set(1,1);let o=e.ray.intersectTriangle(qo,oa,Xo,!1,ra);if(o===null&&(jo(oa.set(-.5,.5,0),lr,a,or,s,r),Lh.set(0,1),o=e.ray.intersectTriangle(qo,Xo,oa,!1,ra),o===null))return;let l=e.ray.origin.distanceTo(ra);l<e.near||l>e.far||t.push({distance:l,point:ra.clone(),uv:Ui.getInterpolation(ra,qo,oa,Xo,Jd,Lh,Zd,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jo(i,e,t,n,s,r){cr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(aa.x=r*cr.x-s*cr.y,aa.y=s*cr.x+r*cr.y):aa.copy(cr),i.copy(e),i.x+=aa.x,i.y+=aa.y,i.applyMatrix4(dp)}var Ni=new N,Nh=new N,Yo=new N,Ko=new N,Mi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nh.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),Ko.copy(this.origin).sub(Nh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yo),o=Ko.dot(this.direction),l=-Ko.dot(Yo),c=Ko.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nh).addScaledVector(Yo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,b=Math.abs(l),v=Math.abs(c),x=Math.abs(h),E,S,_,A,C,L,F,O,z,K,Z,he;if(b>=v&&b>=x?(_=l,L=u,z=g,he=p,l>=0?(E=c,S=h,A=d,C=f,F=y,O=m,K=M,Z=w):(E=h,S=c,A=f,C=d,F=m,O=y,K=w,Z=M)):v>=x?(_=c,L=d,z=y,he=M,c>=0?(E=h,S=l,A=f,C=u,F=m,O=g,K=w,Z=p):(E=l,S=h,A=u,C=f,F=g,O=m,K=p,Z=w)):(_=h,L=f,z=m,he=w,h>=0?(E=l,S=c,A=u,C=d,F=g,O=y,K=p,Z=M):(E=c,S=l,A=d,C=u,F=y,O=g,K=M,Z=p)),_===0)return null;let $=E/_,te=S/_,se=1/_,Ce=A-$*L,Re=C-te*L,Xe=F-$*z,Ze=O-te*z,st=K-$*he,k=Z-te*he,q=st*Ze-k*Xe,_e=Ce*k-Re*st,pe=Xe*Re-Ze*Ce;if(s){if(q<0||_e<0||pe<0)return null}else if((q<0||_e<0||pe<0)&&(q>0||_e>0||pe>0))return null;let Ie=q+_e+pe;if(Ie===0)return null;let Je=se*(q*L+_e*z+pe*he);return(Ie>0?Je<0:Je>0)?null:this.at(Je/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$d=new Fe,_s=new Mi,Jo=new Fn,Qd=new N,Zo=new N,$o=new N,Qo=new N,Fh=new N,el=new N,ef=new N,tl=new N,we=class extends Mt{constructor(e=new ot,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){el.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Fh.fromBufferAttribute(u,e),a?el.addScaledVector(Fh,h):el.addScaledVector(Fh.sub(t),h))}t.add(el)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Jo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Jo,Qd)===null||_s.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&($d.copy(r).invert(),_s.copy(e.ray).applyMatrix4($d),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,v=w;b<v;b+=3){let x=o.getX(b),E=o.getX(b+1),S=o.getX(b+2);s=nl(this,p,e,n,c,h,u,x,E,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=nl(this,a,e,n,c,h,u,M,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,v=w;b<v;b+=3){let x=b,E=b+1,S=b+2;s=nl(this,p,e,n,c,h,u,x,E,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,w=m+1,b=m+2;s=nl(this,a,e,n,c,h,u,M,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function W0(i,e,t,n,s,r,a,o){let l;if(e.side===bn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;tl.copy(o),tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tl);return c<t.near||c>t.far?null:{distance:c,point:tl.clone(),object:i}}function nl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Zo),i.getVertexPosition(l,$o),i.getVertexPosition(c,Qo);let h=W0(i,e,t,n,Zo,$o,Qo,ef);if(h){let u=new N;Ui.getBarycoord(ef,Zo,$o,Qo,u),s&&(h.uv=Ui.getInterpolatedAttribute(s,o,l,c,u,new ie)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,o,l,c,u,new ie)),a&&(h.normal=Ui.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Ui.getNormal(Zo,$o,Qo,d.normal),h.face=d,h.barycoord=u}return h}var la=new yt,tf=new yt,nf=new yt,q0=new yt,sf=new Fe,il=new N,Uh=new Fn,rf=new Fe,Oh=new Mi,wa=class extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,il),this.boundingBox.expandByPoint(il)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,il),this.boundingSphere.expandByPoint(il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(s),e.ray.intersectsSphere(Uh)!==!1&&(rf.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(rf),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;tf.fromBufferAttribute(s.attributes.skinIndex,e),nf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(la.copy(t),t.set(0,0,0,0)):(la.set(...t,1),t.set(0,0,0)),la.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=nf.getComponent(r);if(a!==0){let o=tf.getComponent(r);sf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(q0.copy(la).applyMatrix4(sf),a)}}return t.isVector4&&(t.w=la.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mn=class extends sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,h=Nt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},af=new Fe,X0=new Fe,Ta=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:X0;af.multiplyMatrices(o,t[r]),af.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mn(t,e,e,en,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(je("Skeleton: No bone found with UUID:",r),a=new wr),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},zi=class extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Fe,of=new Fe,sl=[],lf=new qt,j0=new Fe,ca=new we,ha=new Fn,Gi=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,j0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),lf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),ha.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),of.multiplyMatrices(n,hr),ca.matrixWorld=of,ca.raycast(e,sl);for(let a=0,o=sl.length;a<o;a++){let l=sl[a];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mn(new Float32Array(s*this.count),s,this.count,Jl,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new Fn,Y0=new ie(.5,.5),rl=new N,Tr=class{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-a,f-h,p-g,v-M).normalize(),s[1].setComponents(c+a,f+h,p+g,v+M).normalize(),s[2].setComponents(c+o,f+u,p+y,v+w).normalize(),s[3].setComponents(c-o,f-u,p-y,v-w).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,v-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,v-b).normalize(),t===ui)s[5].setComponents(c+l,f+d,p+m,v+b).normalize();else if(t===br)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=Y0.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(rl.x=s.normal.x>0?e.max.x:e.min.x,rl.y=s.normal.y>0?e.max.y:e.min.y,rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Al=new N,Rl=new N,cf=new Fe,ua=new Mi,al=new Fn,kh=new N,hf=new N,Es=class extends Mt{constructor(e=new ot,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Al.fromBufferAttribute(t,s-1),Rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Al.distanceTo(Rl);e.setAttribute("lineDistance",new Ue(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;cf.copy(s).invert(),ua.copy(e.ray).applyMatrix4(cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),w=ol(this,e,ua,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=ol(this,e,ua,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=ol(this,e,ua,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=ol(this,e,ua,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ol(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Al.fromBufferAttribute(o,s),Rl.fromBufferAttribute(o,r),t.distanceSqToSegment(Al,Rl,kh,hf)>n)return;kh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(kh);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var uf=new N,df=new N,Ea=class extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uf.fromBufferAttribute(t,s),df.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uf.distanceTo(df);e.setAttribute("lineDistance",new Ue(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Aa=class extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ar=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ff=new Fe,Kh=new Mi,ll=new Fn,cl=new N,Ra=class extends Mt{constructor(e=new ot,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;ff.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);cl.fromBufferAttribute(u,m),pf(cl,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)cl.fromBufferAttribute(u,g),pf(cl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pf(i,e,t,n,s,r,a){let o=Kh.distanceSqToPoint(i);if(o<t){let l=new N;Kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ca=class extends sn{constructor(e=[],t=hs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gn=class extends sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends sn{constructor(e,t,n=gi,s,r,a,o=Nt,l=Nt,c,h=yi,u=1){if(h!==yi&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cl=class extends Si{constructor(e,t=gi,n=hs,s,r,a=Nt,o=Nt,l,c=yi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pa=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class i extends ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(y,m,p,M,w,b,v,x,E,S,_){let A=b/E,C=v/S,L=b/2,F=v/2,O=x/2,z=E+1,K=S+1,Z=0,he=0,$=new N;for(let te=0;te<K;te++){let se=te*C-F;for(let Ce=0;Ce<z;Ce++){let Re=Ce*A-L;$[y]=Re*M,$[m]=se*w,$[p]=O,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[p]=x>0?1:-1,h.push($.x,$.y,$.z),u.push(Ce/E),u.push(1-te/S),Z+=1}}for(let te=0;te<S;te++)for(let se=0;se<E;se++){let Ce=d+se+z*te,Re=d+se+z*(te+1),Xe=d+(se+1)+z*(te+1),Ze=d+(se+1)+z*te;l.push(Ce,Re,Ze),l.push(Re,Xe,Ze),he+=6}o.addGroup(f,he,_),f+=he,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Rr=class i extends ot{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,y=s+1,m=new N,p=new N;for(let M=0;M<=g;M++){let w=0,b=0,v=0,x=0;if(M<=n){let _=M/n,A=_*Math.PI/2;b=-h-e*Math.cos(A),v=e*Math.sin(A),x=-e*Math.cos(A),w=_*u}else if(M<=n+r){let _=(M-n)/r;b=-h+_*t,v=e,x=0,w=u+_*d}else{let _=(M-n-r)/n,A=_*Math.PI/2;b=h+e*Math.sin(A),v=e*Math.cos(A),x=e*Math.sin(A),w=u+d+_*u}let E=Math.max(0,Math.min(1,w/f)),S=0;M===0?S=.5/s:M===g&&(S=-.5/s);for(let _=0;_<=s;_++){let A=_/s,C=A*Math.PI*2,L=Math.sin(C),F=Math.cos(C);p.x=-v*F,p.y=b,p.z=v*L,o.push(p.x,p.y,p.z),m.set(-v*F,x,v*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,E)}if(M>0){let _=(M-1)*y;for(let A=0;A<s;A++){let C=_+A,L=_+A+1,F=M*y+A,O=M*y+A+1;a.push(C,L,F),a.push(L,O,F)}}}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ia=class i extends ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new N,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class i extends ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function M(){let b=new N,v=new N,x=0,E=(t-e)/n;for(let S=0;S<=r;S++){let _=[],A=S/r,C=A*(t-e)+e;for(let L=0;L<=s;L++){let F=L/s,O=F*l+o,z=Math.sin(O),K=Math.cos(O);v.x=C*z,v.y=-A*n+m,v.z=C*K,u.push(v.x,v.y,v.z),b.set(z,E,K).normalize(),d.push(b.x,b.y,b.z),f.push(F,1-A),_.push(g++)}y.push(_)}for(let S=0;S<s;S++)for(let _=0;_<r;_++){let A=y[_][S],C=y[_+1][S],L=y[_+1][S+1],F=y[_][S+1];(e>0||_!==0)&&(h.push(A,C,F),x+=3),(t>0||_!==r-1)&&(h.push(C,L,F),x+=3)}c.addGroup(p,x,0),p+=x}function w(b){let v=g,x=new ie,E=new N,S=0,_=b===!0?e:t,A=b===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;let C=g;for(let L=0;L<=s;L++){let O=L/s*l+o,z=Math.cos(O),K=Math.sin(O);E.x=_*K,E.y=m*A,E.z=_*z,u.push(E.x,E.y,E.z),d.push(0,A,0),x.x=z*.5+.5,x.y=K*.5*A+.5,f.push(x.x,x.y),g++}for(let L=0;L<s;L++){let F=v+L,O=C+L;b===!0?h.push(O,O+1,F):h.push(O+1,O,F),S+=3}c.addGroup(p,S,b===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new Fe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pl=class extends Cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Mu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var mf=new N,gf=new N,Bh=new Mu,zh=new Mu,Gh=new Mu,fi=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gf.subVectors(s[0],s[1]).add(s[0]),c=gf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),zh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Gh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Gh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Bh.calc(l),zh.calc(l),Gh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function K0(i,e){let t=1-i;return t*t*e}function J0(i,e){return 2*(1-i)*i*e}function Z0(i,e){return i*i*e}function ma(i,e,t,n){return K0(i,e)+J0(i,t)+Z0(i,n)}function $0(i,e){let t=1-i;return t*t*t*e}function Q0(i,e){let t=1-i;return 3*t*t*i*e}function eg(i,e){return 3*(1-i)*i*i*e}function tg(i,e){return i*i*i*e}function ga(i,e,t,n,s){return $0(i,e)+Q0(i,t)+eg(i,n)+tg(i,s)}var Da=class extends Hn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends Hn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,s.x,r.x,a.x,o.x),ga(e,s.y,r.y,a.y,o.y),ga(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},La=class extends Hn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$n=class extends Hn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends Hn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Hn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,s.x,r.x,a.x),ma(e,s.y,r.y,a.y),ma(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(bf(o,l.x,c.x,h.x,u.x),bf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:fi,CubicBezierCurve:Da,CubicBezierCurve3:Il,EllipseCurve:Cr,LineCurve:La,LineCurve3:$n,QuadraticBezierCurve:Na,QuadraticBezierCurve3:Fa,SplineCurve:Ua}),Qn=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},Qt=class extends Qn{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new La(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Na(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Da(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ot=class extends Qt{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Qt().fromJSON(s))}return this}};function ng(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=fp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=og(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Oa(r,a,t,o,l,c,0),a}function fp(i,e,t,n,s){let r;if(s===xg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=xf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=xf(a/n|0,i[a],i[a+1],r);return r&&Pr(r,r.next)&&(Ba(r),r=r.next),r}function As(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Pr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Ba(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sg(i,n,s,r):ig(i)){e.push(l.i,i.i,c.i),Ba(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rg(As(i),e),Oa(i,e,t,n,s,r,2)):a===2&&ag(i,e,t,n,s,r):Oa(As(i),e,t,n,s,r,1);break}}}function ig(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&da(s,o,r,l,a,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),p=Jh(f,g,e,t,n),M=Jh(y,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=p&&b&&b.z<=M;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&da(o,h,l,u,c,d,w.x,w.y)&&Ut(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&da(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&da(o,h,l,u,c,d,w.x,w.y)&&Ut(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&da(o,h,l,u,c,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function rg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Pr(n,s)&&mp(n,t,t.next,s)&&ka(n,s)&&ka(s,n)&&(e.push(n.i,t.i,s.i),Ba(t),Ba(t.next),t=i=s),t=t.next}while(t!==i);return As(t)}function ag(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mg(a,o)){let l=gp(a,o);a=As(a,a.next),l=As(l,l.next),Oa(a,e,t,n,s,r,0),Oa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function og(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=fp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pg(c))}s.sort(lg);for(let r=0;r<s.length;r++)t=cg(s[r],t);return t}function lg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cg(i,e){let t=hg(i,e);if(!t)return e;let n=gp(t,i);return As(n,n.next),As(t,t.next)}function hg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Pr(i,t))return t;do{if(Pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ka(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ug(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ug(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function dg(i,e,t,n){let s=i;do s.z===0&&(s.z=Jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fg(s)}function fg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function da(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&pp(i,e,t,n,s,r,a,o)}function mg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gg(i,e)&&(ka(i,e)&&ka(e,i)&&bg(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Pr(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Pr(i,e){return i.x===e.x&&i.y===e.y}function mp(i,e,t,n){let s=ul(Ut(i,e,t)),r=ul(Ut(i,e,n)),a=ul(Ut(t,n,i)),o=ul(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&hl(i,t,e)||r===0&&hl(i,n,e)||a===0&&hl(t,i,n)||o===0&&hl(t,e,n))}function hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ul(i){return i>0?1:i<0?-1:0}function gg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ka(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function bg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gp(i,e){let t=Zh(i.i,i.x,i.y),n=Zh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xf(i,e,t,n){let s=Zh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ba(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var $h=class{static triangulate(e,t,n=2){return ng(e,t,n)}},Jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];_f(e),vf(n,e);let a=e.length;t.forEach(_f);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,vf(n,t[l]);let o=$h.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _f(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sn=class i extends ot{constructor(e=new Ot([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:_g,w,b=!1,v,x,E,S;if(p){w=p.getSpacedPoints(h),b=!0,d=!1;let ce=p.isCatmullRomCurve3?p.closed:!1;v=p.computeFrenetFrames(h,ce),x=new N,E=new N,S=new N}d||(m=0,f=0,g=0,y=0);let _=o.extractPoints(c),A=_.shape,C=_.holes;if(!Jn.isClockWise(A)){A=A.reverse();for(let ce=0,me=C.length;ce<me;ce++){let xe=C[ce];Jn.isClockWise(xe)&&(C[ce]=xe.reverse())}}function F(ce){let xe=10000000000000001e-36,be=ce[0];for(let ve=1;ve<=ce.length;ve++){let Ne=ve%ce.length,Ve=ce[Ne],De=Ve.x-be.x,ke=Ve.y-be.y,G=De*De+ke*ke,ct=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(be.x),Math.abs(be.y)),rt=xe*ct*ct;if(G<=rt){ce.splice(Ne,1),ve--;continue}be=Ve}}F(A),C.forEach(F);let O=C.length,z=A;for(let ce=0;ce<O;ce++){let me=C[ce];A=A.concat(me)}function K(ce,me,xe){return me||it("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(me,xe)}let Z=A.length;function he(ce,me,xe){let be,ve,Ne,Ve=ce.x-me.x,De=ce.y-me.y,ke=xe.x-ce.x,G=xe.y-ce.y,ct=Ve*Ve+De*De,rt=Ve*G-De*ke;if(Math.abs(rt)>Number.EPSILON){let U=Math.sqrt(ct),T=Math.sqrt(ke*ke+G*G),j=me.x-De/U,J=me.y+Ve/U,ee=xe.x-G/T,ge=xe.y+ke/T,Se=((ee-j)*G-(ge-J)*ke)/(Ve*G-De*ke);be=j+Ve*Se-ce.x,ve=J+De*Se-ce.y;let ne=be*be+ve*ve;if(ne<=2)return new ie(be,ve);Ne=Math.sqrt(ne/2)}else{let U=!1;Ve>Number.EPSILON?ke>Number.EPSILON&&(U=!0):Ve<-Number.EPSILON?ke<-Number.EPSILON&&(U=!0):Math.sign(De)===Math.sign(G)&&(U=!0),U?(be=-De,ve=Ve,Ne=Math.sqrt(ct)):(be=Ve,ve=De,Ne=Math.sqrt(ct/2))}return new ie(be/Ne,ve/Ne)}let $=[];for(let ce=0,me=z.length,xe=me-1,be=ce+1;ce<me;ce++,xe++,be++)xe===me&&(xe=0),be===me&&(be=0),$[ce]=he(z[ce],z[xe],z[be]);let te=[],se,Ce=$.concat();for(let ce=0,me=O;ce<me;ce++){let xe=C[ce];se=[];for(let be=0,ve=xe.length,Ne=ve-1,Ve=be+1;be<ve;be++,Ne++,Ve++)Ne===ve&&(Ne=0),Ve===ve&&(Ve=0),se[be]=he(xe[be],xe[Ne],xe[Ve]);te.push(se),Ce=Ce.concat(se)}let Re;if(m===0)Re=Jn.triangulateShape(z,C);else{let ce=[],me=[];for(let xe=0;xe<m;xe++){let be=xe/m,ve=f*Math.cos(be*Math.PI/2),Ne=g*Math.sin(be*Math.PI/2)+y;for(let Ve=0,De=z.length;Ve<De;Ve++){let ke=K(z[Ve],$[Ve],Ne);_e(ke.x,ke.y,-ve),be===0&&ce.push(ke)}for(let Ve=0,De=O;Ve<De;Ve++){let ke=C[Ve];se=te[Ve];let G=[];for(let ct=0,rt=ke.length;ct<rt;ct++){let U=K(ke[ct],se[ct],Ne);_e(U.x,U.y,-ve),be===0&&G.push(U)}be===0&&me.push(G)}}Re=Jn.triangulateShape(ce,me)}let Xe=Re.length,Ze=g+y;for(let ce=0;ce<Z;ce++){let me=d?K(A[ce],Ce[ce],Ze):A[ce];b?(E.copy(v.normals[0]).multiplyScalar(me.x),x.copy(v.binormals[0]).multiplyScalar(me.y),S.copy(w[0]).add(E).add(x),_e(S.x,S.y,S.z)):_e(me.x,me.y,0)}for(let ce=1;ce<=h;ce++)for(let me=0;me<Z;me++){let xe=d?K(A[me],Ce[me],Ze):A[me];b?(E.copy(v.normals[ce]).multiplyScalar(xe.x),x.copy(v.binormals[ce]).multiplyScalar(xe.y),S.copy(w[ce]).add(E).add(x),_e(S.x,S.y,S.z)):_e(xe.x,xe.y,u/h*ce)}for(let ce=m-1;ce>=0;ce--){let me=ce/m,xe=f*Math.cos(me*Math.PI/2),be=g*Math.sin(me*Math.PI/2)+y;for(let ve=0,Ne=z.length;ve<Ne;ve++){let Ve=K(z[ve],$[ve],be);_e(Ve.x,Ve.y,u+xe)}for(let ve=0,Ne=C.length;ve<Ne;ve++){let Ve=C[ve];se=te[ve];for(let De=0,ke=Ve.length;De<ke;De++){let G=K(Ve[De],se[De],be);b?_e(G.x,G.y+w[h-1].y,w[h-1].x+xe):_e(G.x,G.y,u+xe)}}}st(),k();function st(){let ce=s.length/3;if(d){let me=0,xe=Z*me;for(let be=0;be<Xe;be++){let ve=Re[be];pe(ve[2]+xe,ve[1]+xe,ve[0]+xe)}me=h+m*2,xe=Z*me;for(let be=0;be<Xe;be++){let ve=Re[be];pe(ve[0]+xe,ve[1]+xe,ve[2]+xe)}}else{for(let me=0;me<Xe;me++){let xe=Re[me];pe(xe[2],xe[1],xe[0])}for(let me=0;me<Xe;me++){let xe=Re[me];pe(xe[0]+Z*h,xe[1]+Z*h,xe[2]+Z*h)}}n.addGroup(ce,s.length/3-ce,0)}function k(){let ce=s.length/3,me=0;q(z,me),me+=z.length;for(let xe=0,be=C.length;xe<be;xe++){let ve=C[xe];q(ve,me),me+=ve.length}n.addGroup(ce,s.length/3-ce,1)}function q(ce,me){let xe=ce.length;for(;--xe>=0;){let be=xe,ve=xe-1;ve<0&&(ve=ce.length-1);for(let Ne=0,Ve=h+m*2;Ne<Ve;Ne++){let De=Z*Ne,ke=Z*(Ne+1),G=me+be+De,ct=me+ve+De,rt=me+ve+ke,U=me+be+ke;Ie(G,ct,rt,U)}}}function _e(ce,me,xe){l.push(ce),l.push(me),l.push(xe)}function pe(ce,me,xe){Je(ce),Je(me),Je(xe);let be=s.length/3,ve=M.generateTopUV(n,s,be-3,be-2,be-1);$e(ve[0]),$e(ve[1]),$e(ve[2])}function Ie(ce,me,xe,be){Je(ce),Je(me),Je(be),Je(me),Je(xe),Je(be);let ve=s.length/3,Ne=M.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);$e(Ne[0]),$e(Ne[1]),$e(Ne[3]),$e(Ne[1]),$e(Ne[2]),$e(Ne[3])}function Je(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function $e(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dl[s.type]().fromJSON(s)),new i(n,e.options)}},_g={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(d,1-g),new ie(y,1-p)]:[new ie(o,1-l),new ie(h,1-u),new ie(f,1-g),new ie(m,1-p)]}};function vg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var pi=class i extends ot{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new N,d=new ie,f=new N,g=new N,y=new N,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=t;M++){let w=n+M*h*s,b=Math.sin(w),v=Math.cos(w);for(let x=0;x<=e.length-1;x++){u.x=e[x].x*b,u.y=e[x].y,u.z=e[x].x*v,a.push(u.x,u.y,u.z),d.x=M/t,d.y=x/(e.length-1),o.push(d.x,d.y);let E=l[3*x+0]*b,S=l[3*x+1],_=l[3*x+0]*v;c.push(E,S,_)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let b=w+M*e.length,v=b,x=b+e.length,E=b+e.length+1,S=b+1;r.push(v,x,S),r.push(E,S,x)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var an=class i extends ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let w=0;w<c;w++){let b=w*u-r;g.push(b,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let w=M+c*p,b=M+c*(p+1),v=M+1+c*(p+1),x=M+1+c*p;f.push(w,b,x),f.push(b,v,x)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ir=class i extends ot{constructor(e=new Ot([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Jn.isClockWise(M)===!0&&(g[m]=M.reverse())}let y=Jn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=y.length;m<p;m++){let M=y[m],w=M[0]+u,b=M[1]+u,v=M[2]+u;n.push(w,b,v),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return yg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function yg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Pn=class i extends ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,b=a+w*o,v=e*Math.cos(b),x=Math.sqrt(e*e-v*v),E=0;p===0&&a===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){let _=S/t,A=s+_*r;u.x=-x*Math.cos(A),u.y=v,u.z=x*Math.sin(A),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(_+E,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let w=h[p][M+1],b=h[p][M],v=h[p+1][M],x=h[p+1][M+1];(p!==0||a>0)&&f.push(w,b,x),(p!==n-1||l<Math.PI)&&f.push(b,v,x)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xt=class i extends ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,g=new N;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,b=(s+1)*y+m;l.push(p,M,b),l.push(M,w,b)}this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Vn=class i extends ot{constructor(e=new Fa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new ie,h=new N,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function y(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),p()}function m(w){h=e.getPointAt(w/t,h);let b=a.normals[w],v=a.binormals[w];for(let x=0;x<=s;x++){let E=x/s*Math.PI*2,S=Math.sin(E),_=-Math.cos(E);l.x=_*b.x+S*v.x,l.y=_*b.y+S*v.y,l.z=_*b.z+S*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let v=(s+1)*(w-1)+(b-1),x=(s+1)*w+(b-1),E=(s+1)*w+b,S=(s+1)*(w-1)+b;g.push(v,x,S),g.push(x,E,S)}}function M(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Dl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var za=class extends pn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(yf(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function yf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Su(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var si={clone:Ns,merge:Tn},Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gt=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ga=class extends pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ha=class extends pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lr=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ll=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ns(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Tg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Eg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nl=class extends wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jh:r=e,o=2*t-n;break;case Yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:a=e,l=2*n-t;break;case Yh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+M*a[c+v]+w*a[l+v]+b*a[u+v];return r}},Fl=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ul=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ol=class extends wi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],w=u[p+1],b=e*d+g*2,v=h[b],x=h[b+1],E=Rg(n,t,M,v,s);r[g]=bp(E,y,w,x,m)}return r}};function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ag(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ag(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),gl(e.settings)&&(n.settings={inTangents:ns(e.settings.inTangents,Array),outTangents:ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case qh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;gl(this.settings)&&(Sf(this.settings.inTangents,e),Sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){it("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&l0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){it("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,gl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ss;var Hi=class extends Un{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Ms;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Va.prototype.ValueTypeName="color";var Vi=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Vi.prototype.ValueTypeName="number";var kl=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wi=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Un{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Ms;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};ss.prototype.ValueTypeName="vector";var Wa=class{constructor(e="",t=-1,n=[],s=Zf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Tg(l);l=Mf(l,1,h),c=Mf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Cg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Va;case"quaternion":return Wi;case"bool":case"boolean":return Hi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Pg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cg(i.type);if(i.times===void 0){let n=[],s=[];Eg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),gl(i.settings)&&(t.settings={inTangents:ns(i.settings.inTangents,Float32Array),outTangents:ns(i.settings.outTangents,Float32Array)}),t}var vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Bl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new Bl,ei=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Qh=class extends Error{constructor(e,t){super(e),this.response=t}},rs=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:w,value:b})=>{if(w)p.close();else{y+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let x=0,E=h.length;x<E;x++){let S=h[x];S.onProgress&&S.onProgress(v)}p.enqueue(b),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Qh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{vi.add(`file:${e}`,c);let h=Fi[e];delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,zl=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ur.get(a);u===void 0&&(u=[],ur.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=xr("img");function l(){h(),t&&t(this);let u=ur.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),vi.remove(`image:${e}`);let d=ur.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var qa=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new sn,a=new zl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Rs=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xa=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hh=new Fe,Tf=new N,Ef=new N,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new N,fl=new fn,_i=new N,ja=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,fl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new N,Af=new ie,Rf=new ie,Wt=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,Af,Rf),t.subVectors(Rf,Af)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},eu=class extends Nr{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},as=class extends Rs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},tu=class extends Nr{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},Xi=class extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ti=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nu=class extends Nr{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ji=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Vh=new WeakMap,Ya=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Vh.has(a)===!0?(s&&s(Vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Vh.set(l,c),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=-90,fr=1,Gl=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new Wt(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new Wt(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new Wt(dr,fr,e,t);o.layers=this.layers,this.add(o);let l=new Wt(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Wt(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hl=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ig.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ig(){this._document.hidden===!1&&this.reset()}var wu="\\[\\]\\.:\\/",Dg=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",Lg="[^"+wu.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Fg=/(WCOD+)?/.source.replace("WCOD",Lg),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),kg=new RegExp("^"+Ng+Fg+Ug+Og+"$"),Bg=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(e){let t=kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;it("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=iu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H1=new Float32Array(1);var Cf=new Fe,Ja=class{constructor(e,t,n=0,s=1/0){this.ray=new Mi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(e,t=!0,n=[]){return su(e,this,n,t),n.sort(Pf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)su(e[s],this,n,t);return n.sort(Pf),n}};function Pf(i,e){return i.distance-e.distance}function su(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)su(r[a],e,t,!0)}}var Fr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ru=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Za=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Eu(i,e,t,n){let s=zg(n);switch(t){case gu:return i*e;case Jl:return i*e/s.components*s.byteLength;case Zl:return i*e/s.components*s.byteLength;case ds:return i*e*2/s.components*s.byteLength;case $l:return i*e*2/s.components*s.byteLength;case bu:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Ql:return i*e*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:case oc:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ac:case mo:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Tc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case go:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case wn:case du:return{byteLength:1,components:1};case Br:case fu:case kt:return{byteLength:2,components:1};case Yl:case Kl:return{byteLength:2,components:4};case gi:case jl:case Wn:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Vg=`#ifdef USE_ALPHAHASH
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
}`,ft={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:qg,alphamap_pars_fragment:Xg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:Jg,batching_pars_vertex:Zg,batching_vertex:$g,begin_vertex:Qg,beginnormal_vertex:eb,bsdfs:tb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:sb,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:ab,clipping_planes_vertex:ob,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:hb,color_vertex:ub,common:db,cube_uv_reflection_fragment:fb,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:bb,emissivemap_pars_fragment:xb,colorspace_fragment:_b,colorspace_pars_fragment:vb,envmap_fragment:yb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:Sb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Fb,envmap_vertex:Tb,fog_vertex:Eb,fog_pars_vertex:Ab,fog_fragment:Rb,fog_pars_fragment:Cb,gradientmap_pars_fragment:Pb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Lb,lights_pars_begin:Nb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Ob,lights_phong_fragment:kb,lights_phong_pars_fragment:Bb,lights_physical_fragment:zb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Hb,lights_fragment_maps:Vb,lights_fragment_end:Wb,lightprobes_pars_fragment:qb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Yb,logdepthbuf_vertex:Kb,map_fragment:Jb,map_pars_fragment:Zb,map_particle_fragment:$b,map_particle_pars_fragment:Qb,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ax,normal_fragment_begin:ox,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:bx,packing:xx,premultiplied_alpha_fragment:_x,project_vertex:vx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Dx,specularmap_fragment:Lx,specularmap_pars_fragment:Nx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ux,transmission_fragment:Ox,transmission_pars_fragment:kx,uv_pars_fragment:Bx,uv_pars_vertex:zx,uv_vertex:Gx,worldpos_vertex:Hx,background_vert:Vx,background_frag:Wx,backgroundCube_vert:qx,backgroundCube_frag:Xx,cube_vert:jx,cube_frag:Yx,depth_vert:Kx,depth_frag:Jx,distance_vert:Zx,distance_frag:$x,equirect_vert:Qx,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:b_,points_frag:x_,shadow_vert:__,shadow_frag:v_,sprite_vert:y_,sprite_frag:M_},Le={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ze(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Dc={r:0,b:0,g:0},S_=new Fe,Gp=new at;Gp.set(-1,0,0,0,1,0,0,0,1);function w_(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let b=M.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(M){let w=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,w){let b=f(w);b&&(b.isCubeTexture||b.mapping===co)?(c===void 0&&(c=new we(new rn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Ns(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gp),c.material.toneMapped=dt.getTransfer(b.colorSpace)!==_t,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new we(new an(2,2),new Lt({name:"BackgroundMaterial",uniforms:Ns(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==_t,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Dc,Su(i)),t.buffers.color.setClear(Dc.r,Dc.g,Dc.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function T_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(C,L,F,O,z){let K=!1,Z=u(C,O,F,L);r!==Z&&(r=Z,c(r.object)),K=f(C,O,F,z),K&&g(C,O,F,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(C,L,F,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,L,F,O){let z=O.wireframe===!0,K=n[L.id];K===void 0&&(K={},n[L.id]=K);let Z=C.isInstancedMesh===!0?C.id:0,he=K[Z];he===void 0&&(he={},K[Z]=he);let $=he[F.id];$===void 0&&($={},he[F.id]=$);let te=$[z];return te===void 0&&(te=d(l()),$[z]=te),te}function d(C){let L=[],F=[],O=[];for(let z=0;z<t;z++)L[z]=0,F[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:O,object:C,attributes:{},index:null}}function f(C,L,F,O){let z=r.attributes,K=L.attributes,Z=0,he=F.getAttributes();for(let $ in he)if(he[$].location>=0){let se=z[$],Ce=K[$];if(Ce===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor)),se===void 0||se.attribute!==Ce||Ce&&se.data!==Ce.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function g(C,L,F,O){let z={},K=L.attributes,Z=0,he=F.getAttributes();for(let $ in he)if(he[$].location>=0){let se=K[$];se===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));let Ce={};Ce.attribute=se,se&&se.data&&(Ce.data=se.data),z[$]=Ce,Z++}r.attributes=z,r.attributesNum=Z,r.index=O}function y(){let C=r.newAttributes;for(let L=0,F=C.length;L<F;L++)C[L]=0}function m(C){p(C,0)}function p(C,L){let F=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;F[C]=1,O[C]===0&&(i.enableVertexAttribArray(C),O[C]=1),z[C]!==L&&(i.vertexAttribDivisor(C,L),z[C]=L)}function M(){let C=r.newAttributes,L=r.enabledAttributes;for(let F=0,O=L.length;F<O;F++)L[F]!==C[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function w(C,L,F,O,z,K,Z){Z===!0?i.vertexAttribIPointer(C,L,F,z,K):i.vertexAttribPointer(C,L,F,O,z,K)}function b(C,L,F,O){y();let z=O.attributes,K=F.getAttributes(),Z=L.defaultAttributeValues;for(let he in K){let $=K[he];if($.location>=0){let te=z[he];if(te===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){let se=te.normalized,Ce=te.itemSize,Re=e.get(te);if(Re===void 0)continue;let Xe=Re.buffer,Ze=Re.type,st=Re.bytesPerElement,k=Ze===i.INT||Ze===i.UNSIGNED_INT||te.gpuType===jl;if(te.isInterleavedBufferAttribute){let q=te.data,_e=q.stride,pe=te.offset;if(q.isInstancedInterleavedBuffer){for(let Ie=0;Ie<$.locationSize;Ie++)p($.location+Ie,q.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ie=0;Ie<$.locationSize;Ie++)m($.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ie=0;Ie<$.locationSize;Ie++)w($.location+Ie,Ce/$.locationSize,Ze,se,_e*st,(pe+Ce/$.locationSize*Ie)*st,k)}else{if(te.isInstancedBufferAttribute){for(let q=0;q<$.locationSize;q++)p($.location+q,te.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let q=0;q<$.locationSize;q++)m($.location+q);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let q=0;q<$.locationSize;q++)w($.location+q,Ce/$.locationSize,Ze,se,Ce*st,Ce/$.locationSize*q*st,k)}}else if(Z!==void 0){let se=Z[he];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv($.location,se);break;case 3:i.vertexAttrib3fv($.location,se);break;case 4:i.vertexAttrib4fv($.location,se);break;default:i.vertexAttrib1fv($.location,se)}}}}M()}function v(){_();for(let C in n){let L=n[C];for(let F in L){let O=L[F];for(let z in O){let K=O[z];for(let Z in K)h(K[Z].object),delete K[Z];delete O[z]}}delete n[C]}}function x(C){if(n[C.id]===void 0)return;let L=n[C.id];for(let F in L){let O=L[F];for(let z in O){let K=O[z];for(let Z in K)h(K[Z].object),delete K[Z];delete O[z]}}delete n[C.id]}function E(C){for(let L in n){let F=n[L];for(let O in F){let z=F[O];if(z[C.id]===void 0)continue;let K=z[C.id];for(let Z in K)h(K[Z].object),delete K[Z];delete z[C.id]}}}function S(C){for(let L in n){let F=n[L],O=C.isInstancedMesh===!0?C.id:0,z=F[O];if(z!==void 0){for(let K in z){let Z=z[K];for(let he in Z)h(Z[he].object),delete Z[he];delete z[K]}delete F[O],Object.keys(F).length===0&&delete n[L]}}}function _(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:_,resetDefaultState:A,dispose:v,releaseStatesOfGeometry:x,releaseStatesOfObject:S,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function E_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function A_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==en&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let S=E===kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wn&&E!==Wn&&!S&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:v,samples:x}}function R_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Rn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,b=p.clippingState||null;l.value=b,b=h(g,d,w,f);for(let v=0;v!==w;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==y;++w,b+=4)a.copy(u[w]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Vr=4,C_=6,P_=20,I_=256,xo=new ti,_p=new ze,Au=null,Ru=0,Cu=0,Pu=!1,D_=new N,Fs=new N,Us=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=D_}=r;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Cu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:kt,format:en,colorSpace:nn,depthBuffer:!1},s=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L_(r)),this._blurMaterial=F_(r,e,t),this._ggxMaterial=N_(r,e,t)}return s}_compileMaterial(e){let t=new we(new ot,e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,s,r){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_p),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new rn,new Ft({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(_p),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Hr(s,b*v,w>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===hs||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Vr?n-g+Vr:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Hr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,xo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Hr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,xo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Vr?s-this._lodMax+Vr:0),d=4*(this._cubeSize-h);Hr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,xo)}};function L_(i){let e=[],t=[],n=i,s=i-Vr+1+C_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,w=p>2?0:-1,b=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(b,f*d*p);for(let v=0;v<d;v++){let x=h[v*2]*2-1,E=h[v*2+1]*2-1;p===0?Fs.set(1,E,x):p===1?Fs.set(-x,1,-E):p===2?Fs.set(-x,E,1):p===3?Fs.set(-1,E,-x):p===4?Fs.set(-x,-1,E):Fs.set(x,E,-1),Fs.toArray(y,(p*d+v)*f)}}let m=new ot;m.setAttribute("position",new Zt(g,f)),m.setAttribute("outputDirection",new Zt(y,f)),t.push(new we(m,null)),n>Vr&&n--}return{lodMeshes:t,sizeLods:e}}function vp(i,e,t){let n=new Dt(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function N_(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function F_(i,e,t){return new Lt({name:"SphericalGaussianBlur",defines:{SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function yp(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Mp(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nc=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ca(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:jt});r.uniforms.tEquirect.value=t;let a=new we(s,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=It),new Gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function U_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Or||f===ql)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Nc(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Or||f===ql,y=f===hs||f===Ds;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Us(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Us(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Or?d.mapping=hs:f===ql&&(d.mapping=Ds),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function O_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function k_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let w=0,b=M.length;w<b;w+=3){let v=M[w+0],x=M[w+1],E=M[w+2];d.push(v,x,x,E,E,v)}}else{let M=g.array;y=g.version;for(let w=0,b=M.length/3-1;w<b;w+=3){let v=w+0,x=w+1,E=w+2;d.push(v,x,x,E,E,v)}}let m=new(g.count>=65535?Ma:ya)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function B_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function z_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function G_(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let b=o.attributes.position.count*w,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let x=new Float32Array(b*v*4*u),E=new _a(x,b,v,u);E.type=Wn,E.needsUpdate=!0;let S=w*4;for(let A=0;A<u;A++){let C=m[A],L=p[A],F=M[A],O=b*v*4*A;for(let z=0;z<C.count;z++){let K=z*S;f===!0&&(s.fromBufferAttribute(C,z),x[O+K+0]=s.x,x[O+K+1]=s.y,x[O+K+2]=s.z,x[O+K+3]=0),g===!0&&(s.fromBufferAttribute(L,z),x[O+K+4]=s.x,x[O+K+5]=s.y,x[O+K+6]=s.z,x[O+K+7]=0),y===!0&&(s.fromBufferAttribute(F,z),x[O+K+8]=s.x,x[O+K+9]=s.y,x[O+K+10]=s.z,x[O+K+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ie(b,v)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var V_={[no]:"LINEAR_TONE_MAPPING",[io]:"REINHARD_TONE_MAPPING",[so]:"CINEON_TONE_MAPPING",[Is]:"ACES_FILMIC_TONE_MAPPING",[ao]:"AGX_TONE_MAPPING",[oo]:"NEUTRAL_TONE_MAPPING",[ro]:"CUSTOM_TONE_MAPPING"};function W_(i,e,t,n,s,r){let a=new Dt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ot;c.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new we(c,h),d=new ti(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(b,v){a.setSize(b,v),o!==null&&o.setSize(b,v),l!==null&&l.setSize(b,v);for(let x=0;x<M.length;x++){let E=M[x];E.setSize&&E.setSize(b,v)}},this.setEffects=function(b){M=b,w=M.length>0&&M[0].isRenderPass===!0;let v=a.width,x=a.height;M.length>0&&o===null&&(o=new Dt(v,x,{type:kt,depthBuffer:!1,stencilBuffer:!1}),l=new Dt(v,x,{type:kt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let S=M[E];S.setSize&&S.setSize(v,x)}},this.begin=function(b,v){if(y||b.toneMapping===mi&&M.length===0)return!1;if(p=v,v!==null){let x=v.width,E=v.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return w===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=mi,!0},this.hasRenderPass=function(){return w},this.end=function(b,v){b.toneMapping=m,y=!0;let x=a,E=o;for(let S=0;S<M.length;S++){let _=M[S];_.enabled!==!1&&(_.render(b,E,x,v),_.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},dt.getTransfer(f)===_t&&(h.defines.SRGB_TRANSFER="");let S=V_[g];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(p),b.render(u,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Hp=new sn,Lu=new Si(1,1),Vp=new _a,Wp=new El,qp=new Ca,Sp=[],wp=[],Tp=new Float32Array(16),Ep=new Float32Array(9),Ap=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oc(i,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function K_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Ap.set(n),i.uniformMatrix2fv(this.addr,!1,Ap),ln(t,n)}}function J_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Ep.set(n),i.uniformMatrix3fv(this.addr,!1,Ep),ln(t,n)}}function Z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Tp.set(n),i.uniformMatrix4fv(this.addr,!1,Tp),ln(t,n)}}function $_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lu.compareFunction=t.isReversedDepthBuffer()?Ic:Pc,r=Lu):r=Hp,t.setTexture2D(e||r,s)}function ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wp,s)}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qp,s)}function cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vp,s)}function hv(i){switch(i){case 5126:return q_;case 35664:return X_;case 35665:return j_;case 35666:return Y_;case 35674:return K_;case 35675:return J_;case 35676:return Z_;case 5124:case 35670:return $_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(i,e){i.uniform1fv(this.addr,e)}function dv(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function fv(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function pv(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function mv(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gv(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bv(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function vv(i,e){i.uniform3iv(this.addr,e)}function yv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function Sv(i,e){i.uniform2uiv(this.addr,e)}function wv(i,e){i.uniform3uiv(this.addr,e)}function Tv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lu:a=Hp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Av(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wp,r[a])}function Rv(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qp,r[a])}function Cv(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vp,r[a])}function Pv(i){switch(i){case 5126:return uv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return bv;case 5124:case 35670:return xv;case 35667:case 35671:return _v;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return wv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}var Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hv(t.type)}},Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}},Uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function Rp(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){let n=i.name,s=n.length;for(Iu.lastIndex=0;;){let r=Iu.exec(n),a=Iu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rp(t,c===void 0?new Nu(o,i,e):new Fu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Uu(o),Rp(t,u)),t=u}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Iv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Cp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Dv=37297,Lv=0;function Nv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pp=new at;function Fv(i){dt._getMatrix(Pp,dt.workingColorSpace,i);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case ba:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ip(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nv(i.getShaderSource(e),o)}else return r}function Uv(i,e){let t=Fv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ov={[no]:"Linear",[io]:"Reinhard",[so]:"Cineon",[Is]:"ACESFilmic",[ao]:"AgX",[oo]:"Neutral",[ro]:"Custom"};function kv(i,e){let t=Ov[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new N;function Bv(){dt.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Gv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vo(i){return i!==""}function Dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(i){return i.replace(Vv,qv)}var Wv=new Map;function qv(i,e){let t=ft[e];if(t===void 0){let n=Wv.get(e);if(n!==void 0)t=ft[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ou(t)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(i){return i.replace(Xv,jv)}function jv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Yv={[$a]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function Kv(i){return Yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[hs]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Zv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $v={[Ds]:"ENVMAP_MODE_REFRACTION"};function Qv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$v[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ey={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[Yf]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ey[i.combine]||"ENVMAP_BLENDING_NONE"}function ny(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Kv(t),c=Zv(t),h=Qv(t),u=ty(t),d=ny(t),f=zv(t),g=Gv(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ft.tonemapping_pars_fragment:"",t.toneMapping!==mi?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),a=Ou(a),a=Dp(a,t),a=Lp(a,t),o=Ou(o),o=Dp(o,t),o=Lp(o,t),a=Np(a),o=Np(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+a,b=M+p+o,v=Cp(s,s.VERTEX_SHADER,w),x=Cp(s,s.FRAGMENT_SHADER,b);s.attachShader(y,v),s.attachShader(y,x),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",F=s.getShaderInfoLog(v)||"",O=s.getShaderInfoLog(x)||"",z=L.trim(),K=F.trim(),Z=O.trim(),he=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,x);else{let te=Ip(s,v,"vertex"),se=Ip(s,x,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+te+`
`+se)}else z!==""?je("WebGLProgram: Program Info Log:",z):(K===""||Z==="")&&($=!1);$&&(C.diagnostics={runnable:he,programLog:z,vertexShader:{log:K,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(v),s.deleteShader(x),S=new Wr(s,y),_=Hv(s,y)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(y,Dv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=x,this}var sy=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}};function ry(i){return i===ds||i===mo||i===go}function ay(i,e,t,n,s,r){let a=new yr,o=new ku,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,_,A,C,L,F){let O=C.fog,z=L.geometry,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,Z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,he=e.get(S.envMap||K,Z),$=he&&he.mapping===co?he.image.height:null,te=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&je("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ce=se!==void 0?se.length:0,Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let Xe,Ze,st,k;if(te){let wt=Ai[te];Xe=wt.vertexShader,Ze=wt.fragmentShader}else{Xe=S.vertexShader,Ze=S.fragmentShader;let wt=o.getVertexShaderStage(S),pt=o.getFragmentShaderStage(S);o.update(S,wt,pt),st=wt.id,k=pt.id}let q=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),pe=L.isInstancedMesh===!0,Ie=L.isBatchedMesh===!0,Je=!!S.map,$e=!!S.matcap,ce=!!he,me=!!S.aoMap,xe=!!S.lightMap,be=!!S.bumpMap&&S.wireframe===!1,ve=!!S.normalMap,Ne=!!S.displacementMap,Ve=!!S.emissiveMap,De=!!S.metalnessMap,ke=!!S.roughnessMap,G=S.anisotropy>0,ct=S.clearcoat>0,rt=S.dispersion>0,U=S.retroreflectivity>0,T=S.iridescence>0,j=S.sheen>0,J=S.transmission>0,ee=G&&!!S.anisotropyMap,ge=ct&&!!S.clearcoatMap,Se=ct&&!!S.clearcoatNormalMap,ne=ct&&!!S.clearcoatRoughnessMap,de=T&&!!S.iridescenceMap,Te=T&&!!S.iridescenceThicknessMap,Be=j&&!!S.sheenColorMap,Ee=j&&!!S.sheenRoughnessMap,ye=!!S.specularMap,Oe=!!S.specularColorMap,We=!!S.specularIntensityMap,et=J&&!!S.transmissionMap,W=J&&!!S.thicknessMap,Pe=!!S.gradientMap,re=!!S.alphaMap,oe=S.alphaTest>0,Me=!!S.alphaHash,fe=!!S.extensions,Ye=mi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let Ge={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Ze,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&L._colorsTexture!==null,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:$e,envMap:ce,envMapMode:ce&&he.mapping,envMapCubeUVHeight:$,aoMap:me,lightMap:xe,bumpMap:be,normalMap:ve,displacementMap:Ne,emissiveMap:Ve,normalMapObjectSpace:ve&&S.normalMapType===Qf,normalMapTangentSpace:ve&&S.normalMapType===Gr,packedNormalMap:ve&&S.normalMapType===Gr&&ry(S.normalMap.format),metalnessMap:De,roughnessMap:ke,anisotropy:G,anisotropyMap:ee,clearcoat:ct,clearcoatMap:ge,clearcoatNormalMap:Se,clearcoatRoughnessMap:ne,dispersion:rt,retroreflection:U,iridescence:T,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:j,sheenColorMap:Be,sheenRoughnessMap:Ee,specularMap:ye,specularColorMap:Oe,specularIntensityMap:We,transmission:J,transmissionMap:et,thicknessMap:W,gradientMap:Pe,opaque:S.transparent===!1&&S.blending===Ur&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:Me,combine:S.combine,mapUv:Je&&g(S.map.channel),aoMapUv:me&&g(S.aoMap.channel),lightMapUv:xe&&g(S.lightMap.channel),bumpMapUv:be&&g(S.bumpMap.channel),normalMapUv:ve&&g(S.normalMap.channel),displacementMapUv:Ne&&g(S.displacementMap.channel),emissiveMapUv:Ve&&g(S.emissiveMap.channel),metalnessMapUv:De&&g(S.metalnessMap.channel),roughnessMapUv:ke&&g(S.roughnessMap.channel),anisotropyMapUv:ee&&g(S.anisotropyMap.channel),clearcoatMapUv:ge&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(S.sheenRoughnessMap.channel),specularMapUv:ye&&g(S.specularMap.channel),specularColorMapUv:Oe&&g(S.specularColorMap.channel),specularIntensityMapUv:We&&g(S.specularIntensityMap.channel),transmissionMapUv:et&&g(S.transmissionMap.channel),thicknessMapUv:W&&g(S.thicknessMap.channel),alphaMapUv:re&&g(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||G),vertexNormals:!!z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Je||re),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||z.attributes.normal===void 0&&ve===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Re,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:Ve&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&S.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)_.push(A),_.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(p(_,S),M(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function p(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numSunLights),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numSunLightShadows),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function M(S,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function w(S){let _=f[S.type],A;if(_){let C=Ai[_];A=si.clone(C.uniforms)}else A=S.uniforms;return A}function b(S,_){let A=h.get(_);return A!==void 0?++A.usedTimes:(A=new iy(i,_,S,s),c.push(A),h.set(_,A)),A}function v(S){if(--S.usedTimes===0){let _=c.indexOf(S);c[_]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function x(S){o.remove(S)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:v,releaseShaderCache:x,programs:c,dispose:E}}function oy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Op(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let w=o(d,f,g,y,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(d,f,g,y,m,p){let M=o(d,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||ly),n.length>1&&n.sort(f||Up),s.length>1&&s.sort(f||Up)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Op,i.set(n,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dy=0;function fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function py(i){let e=new hy,t=uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Fe,a=new Fe;function o(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,w=0,b=0,v=0,x=0,E=0,S=0,_=0,A=0;c.sort(fy);for(let L=0,F=c.length;L<F;L++){let O=c[L],z=O.color,K=O.intensity,Z=O.distance,he=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ds?he=O.shadow.map.texture:he=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=z.r*K,u+=z.g*K,d+=z.b*K;else if(O.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(O.sh.coefficients[$],K);A++}else if(O.isSunLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let te=O.shadow,se=t.get(O);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=he;let Ce=te.getViewportCount();for(let Re=0;Re<Ce;Re++)n.sunShadowMatrix[y+Re]=te.getMatrix(Re),n.sunShadowCascade[y+Re]=te._cascadeData[Re];y+=Ce,g++}n.sun[f]=$,f++}else if(O.isDirectionalLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let te=O.shadow,se=t.get(O);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=he,n.directionalShadowMatrix[m]=O.shadow.matrix,v++}n.directional[m]=$,m++}else if(O.isSpotLight){let $=e.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(z).multiplyScalar(K),$.distance=Z,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,n.spot[M]=$;let te=O.shadow;if(O.map&&(n.spotLightMap[S]=O.map,S++,te.updateMatrices(O),O.castShadow&&_++),n.spotLightMatrix[M]=te.matrix,O.castShadow){let se=t.get(O);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=he,E++}M++}else if(O.isRectAreaLight){let $=e.get(O);$.color.copy(z).multiplyScalar(K),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),n.rectArea[w]=$,w++}else if(O.isPointLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){let te=O.shadow,se=t.get(O);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=he,n.pointShadowMatrix[p]=O.shadow.matrix,x++}n.point[p]=$,p++}else if(O.isHemisphereLight){let $=e.get(O);$.skyColor.copy(O.color).multiplyScalar(K),$.groundColor.copy(O.groundColor).multiplyScalar(K),n.hemi[b]=$,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==w||C.hemiLength!==b||C.numSunShadows!==g||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==E||C.numSpotMaps!==S||C.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+S-_,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=A,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=M,C.rectAreaLength=w,C.hemiLength=b,C.numSunShadows=g,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=E,C.numSpotMaps=S,C.numLightProbes=A,n.version=dy++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let b=c[M];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(b.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function kp(i){let e=new py(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function my(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kp(i),e.set(s,[o])):r>=a.length?(o=new kp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var gy=`void main() {
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
}`,xy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],_y=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Bp=new Fe,_o=new N,Du=new N;function vy(i,e,t){let n=new Tr,s=new ie,r=new ie,a=new yt,o=new Lr,l=new Ll,c={},h=t.maxTextureSize,u={[ni]:bn,[bn]:ni,[Ht]:Ht},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:gy,fragmentShader:by}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ot;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new we(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let p=this.type;this.render=function(x,E,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Lf&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$a);let _=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(jt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==this.type;F&&E.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(z=>z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,z=x.length;O<z;O++){let K=x[O],Z=K.shadow;if(Z===void 0){je("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let he=Z.getFrameExtents();s.multiply(he),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,Z.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||F===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===cs){if(K.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Dt(s.x,s.y,{format:ds,type:kt,minFilter:It,magFilter:It,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Si(s.x,s.y,Wn),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=yi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Nt,Z.map.depthTexture.magFilter=Nt}else K.isPointLight?(Z.map=new Nc(s.x),Z.map.depthTexture=new Cl(s.x,gi)):(Z.map=new Dt(s.x,s.y),Z.map.depthTexture=new Si(s.x,s.y,gi)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=yi,this.type===$a?(Z.map.depthTexture.compareFunction=$?Ic:Pc,Z.map.depthTexture.minFilter=It,Z.map.depthTexture.magFilter=It):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Nt,Z.map.depthTexture.magFilter=Nt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let te=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,S);for(let se=0;se<te;se++){let Ce=Z.getCamera(se);if(K.isPointLight){let Re=Z.camera,Xe=Z.matrix,Ze=K.distance||Re.far;Ze!==Re.far&&(Re.far=Ze,Re.updateProjectionMatrix()),_o.setFromMatrixPosition(K.matrixWorld),Re.position.copy(_o),Du.copy(Re.position),Du.add(xy[se]),Re.up.copy(_y[se]),Re.lookAt(Du),Re.updateMatrixWorld(),Xe.makeTranslation(-_o.x,-_o.y,-_o.z),Bp.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Bp,Re.coordinateSystem,Re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,se),i.clear();else{se===0&&(i.setRenderTarget(Z.map),i.clear());let Re=Z.getViewport(se);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),L.viewport(a)}n=Z.getFrustum(se),b(E,S,Ce,K,this.type)}Z.isPointLightShadow!==!0&&this.type===cs&&M(Z,S),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,A,C)};function M(x,E){let S=e.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new Dt(s.x,s.y,{format:ds,type:kt}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(E,null,S,d,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(E,null,S,f,y,null)}function w(x,E,S,_){let A=null,C=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(C!==void 0)A=C;else if(A=S.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=A.uuid,F=E.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let z=O[F];z===void 0&&(z=A.clone(),O[F]=z,E.addEventListener("dispose",v)),A=z}if(A.visible=E.visible,A.wireframe=E.wireframe,_===cs?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=S}return A}function b(x,E,S,_,A){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===cs)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);let F=e.update(x),O=x.material;if(Array.isArray(O)){let z=F.groups;for(let K=0,Z=z.length;K<Z;K++){let he=z[K],$=O[he.materialIndex];if($&&$.visible){let te=w(x,$,_,A);x.onBeforeShadow(i,x,E,S,F,te,he),i.renderBufferDirect(S,null,F,te,x,he),x.onAfterShadow(i,x,E,S,F,te,he)}}}else if(O.visible){let z=w(x,O,_,A);x.onBeforeShadow(i,x,E,S,F,z,null),i.renderBufferDirect(S,null,F,z,x,null),x.onAfterShadow(i,x,E,S,F,z,null)}}let L=x.children;for(let F=0,O=L.length;F<O;F++)b(L[F],E,S,_,A)}function v(x){x.target.removeEventListener("dispose",v);for(let S in c){let _=c[S],A=x.target.uuid;A in _&&(_[A].dispose(),delete _[A])}}}function yy(i,e){function t(){let W=!1,Pe=new yt,re=null,oe=new yt(0,0,0,0);return{setMask:function(Me){re!==Me&&!W&&(i.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){W=Me},setClear:function(Me,fe,Ye,Ge,wt){wt===!0&&(Me*=Ge,fe*=Ge,Ye*=Ge),Pe.set(Me,fe,Ye,Ge),oe.equals(Pe)===!1&&(i.clearColor(Me,fe,Ye,Ge),oe.copy(Pe))},reset:function(){W=!1,re=null,oe.set(-1,0,0,0)}}}function n(){let W=!1,Pe=!1,re=null,oe=null,Me=null;return{setReversed:function(fe){if(Pe!==fe){let Ye=e.get("EXT_clip_control");fe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Pe=fe;let Ge=Me;Me=null,this.setClear(Ge)}},getReversed:function(){return Pe},setTest:function(fe){fe?q(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(fe){re!==fe&&!W&&(i.depthMask(fe),re=fe)},setFunc:function(fe){if(Pe&&(fe=hp[fe]),oe!==fe){switch(fe){case bl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case vl:i.depthFunc(i.EQUAL);break;case yl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=fe}},setLocked:function(fe){W=fe},setClear:function(fe){Me!==fe&&(Me=fe,Pe&&(fe=1-fe),i.clearDepth(fe))},reset:function(){W=!1,re=null,oe=null,Me=null,Pe=!1}}}function s(){let W=!1,Pe=null,re=null,oe=null,Me=null,fe=null,Ye=null,Ge=null,wt=null;return{setTest:function(pt){W||(pt?q(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(pt){Pe!==pt&&!W&&(i.stencilMask(pt),Pe=pt)},setFunc:function(pt,Nn,jn){(re!==pt||oe!==Nn||Me!==jn)&&(i.stencilFunc(pt,Nn,jn),re=pt,oe=Nn,Me=jn)},setOp:function(pt,Nn,jn){(fe!==pt||Ye!==Nn||Ge!==jn)&&(i.stencilOp(pt,Nn,jn),fe=pt,Ye=Nn,Ge=jn)},setLocked:function(pt){W=pt},setClear:function(pt){wt!==pt&&(i.clearStencil(pt),wt=pt)},reset:function(){W=!1,Pe=null,re=null,oe=null,Me=null,fe=null,Ye=null,Ge=null,wt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,b=null,v=null,x=null,E=null,S=new ze(0,0,0),_=0,A=!1,C=null,L=null,F=null,O=null,z=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,he=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=he>=1):$.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=he>=2);let te=null,se={},Ce=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Xe=new yt().fromArray(Ce),Ze=new yt().fromArray(Re);function st(W,Pe,re,oe){let Me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(W,fe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<re;Ye++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Pe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return fe}let k={};k[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(mr),be(!1),ve(au),q(i.CULL_FACE),me(jt);function q(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function _e(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function pe(W,Pe){return d[W]!==Pe?(i.bindFramebuffer(W,Pe),d[W]=Pe,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pe),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ie(W,Pe){let re=g,oe=!1;if(W){re=f.get(Pe),re===void 0&&(re=[],f.set(Pe,re));let Me=W.textures;if(re.length!==Me.length||re[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ye=Me.length;fe<Ye;fe++)re[fe]=i.COLOR_ATTACHMENT0+fe;re.length=Me.length,oe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,oe=!0);oe&&i.drawBuffers(re)}function Je(W){return y!==W?(i.useProgram(W),y=W,!0):!1}let $e={[ii]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Ff]:i.FUNC_REVERSE_SUBTRACT};$e[Uf]=i.MIN,$e[Of]=i.MAX;let ce={[Ps]:i.ZERO,[kf]:i.ONE,[Bf]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[to]:i.DST_COLOR,[eo]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[hu]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Xf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function me(W,Pe,re,oe,Me,fe,Ye,Ge,wt,pt){if(W===jt){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),W!==Vl){if(W!==p||pt!==A){if((M!==ii||v!==ii)&&(i.blendEquation(i.FUNC_ADD),M=ii,v=ii),pt)switch(W){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",W);break}w=null,b=null,x=null,E=null,S.set(0,0,0),_=0,p=W,A=pt}return}Me=Me||Pe,fe=fe||re,Ye=Ye||oe,(Pe!==M||Me!==v)&&(i.blendEquationSeparate($e[Pe],$e[Me]),M=Pe,v=Me),(re!==w||oe!==b||fe!==x||Ye!==E)&&(i.blendFuncSeparate(ce[re],ce[oe],ce[fe],ce[Ye]),w=re,b=oe,x=fe,E=Ye),(Ge.equals(S)===!1||wt!==_)&&(i.blendColor(Ge.r,Ge.g,Ge.b,wt),S.copy(Ge),_=wt),p=W,A=!1}function xe(W,Pe){W.side===Ht?_e(i.CULL_FACE):q(i.CULL_FACE);let re=W.side===bn;Pe&&(re=!re),be(re),W.blending===Ur&&W.transparent===!1?me(jt):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let oe=W.stencilWrite;o.setTest(oe),oe&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function ve(W){W!==If?(q(i.CULL_FACE),W!==L&&(W===au?i.cullFace(i.BACK):W===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=W}function Ne(W){W!==F&&(Z&&i.lineWidth(W),F=W)}function Ve(W,Pe,re){W?(q(i.POLYGON_OFFSET_FILL),(O!==Pe||z!==re)&&(O=Pe,z=re,a.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,re))):_e(i.POLYGON_OFFSET_FILL)}function De(W){W?q(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ke(W){W===void 0&&(W=i.TEXTURE0+K-1),te!==W&&(i.activeTexture(W),te=W)}function G(W,Pe,re){re===void 0&&(te===null?re=i.TEXTURE0+K-1:re=te);let oe=se[re];oe===void 0&&(oe={type:void 0,texture:void 0},se[re]=oe),(oe.type!==W||oe.texture!==Pe)&&(te!==re&&(i.activeTexture(re),te=re),i.bindTexture(W,Pe||k[W]),oe.type=W,oe.texture=Pe)}function ct(){let W=se[te];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function j(){try{i.texSubImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function ge(){try{i.texStorage2D(...arguments)}catch(W){it("WebGLState:",W)}}function Se(){try{i.texStorage3D(...arguments)}catch(W){it("WebGLState:",W)}}function ne(){try{i.texImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function de(){try{i.texImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function Te(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function Be(W,Pe){u[W]!==Pe&&(i.pixelStorei(W,Pe),u[W]=Pe)}function Ee(W){Xe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Xe.copy(W))}function ye(W){Ze.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ze.copy(W))}function Oe(W,Pe){let re=c.get(Pe);re===void 0&&(re=new WeakMap,c.set(Pe,re));let oe=re.get(W);oe===void 0&&(oe=i.getUniformBlockIndex(Pe,W.name),re.set(W,oe))}function We(W,Pe){let oe=c.get(Pe).get(W);l.get(Pe)!==oe&&(i.uniformBlockBinding(Pe,oe,W.__bindingPointIndex),l.set(Pe,oe))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,se={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,b=null,v=null,x=null,E=null,S=new ze(0,0,0),_=0,A=!1,C=null,L=null,F=null,O=null,z=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:_e,bindFramebuffer:pe,drawBuffers:Ie,useProgram:Je,setBlending:me,setMaterial:xe,setFlipSided:be,setCullFace:ve,setLineWidth:Ne,setPolygonOffset:Ve,setScissorTest:De,activeTexture:ke,bindTexture:G,unbindTexture:ct,compressedTexImage2D:rt,compressedTexImage3D:U,texImage2D:ne,texImage3D:de,pixelStorei:Be,getParameter:Te,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:ge,texStorage3D:Se,texSubImage2D:T,texSubImage3D:j,compressedTexSubImage2D:J,compressedTexSubImage3D:ee,scissor:Ee,viewport:ye,reset:et}}function My(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,T){return g?new OffscreenCanvas(U,T):xr("canvas")}function m(U,T,j){let J=1,ee=rt(U);if((ee.width>j||ee.height>j)&&(J=j/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ge=Math.floor(J*ee.width),Se=Math.floor(J*ee.height);d===void 0&&(d=y(ge,Se));let ne=T?y(ge,Se):d;return ne.width=ge,ne.height=Se,ne.getContext("2d").drawImage(U,0,0,ge,Se),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+Se+")."),ne}else return"data"in U&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),U;return U}function p(U){return U.generateMipmaps}function M(U){i.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(U,T,j,J,ee,ge=!1){if(U!==null){if(i[U]!==void 0)return i[U];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Se;J&&(Se=e.get("EXT_texture_norm16"),Se||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=T;if(T===i.RED&&(j===i.FLOAT&&(ne=i.R32F),j===i.HALF_FLOAT&&(ne=i.R16F),j===i.UNSIGNED_BYTE&&(ne=i.R8),j===i.UNSIGNED_SHORT&&Se&&(ne=Se.R16_EXT),j===i.SHORT&&Se&&(ne=Se.R16_SNORM_EXT)),T===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.R8UI),j===i.UNSIGNED_SHORT&&(ne=i.R16UI),j===i.UNSIGNED_INT&&(ne=i.R32UI),j===i.BYTE&&(ne=i.R8I),j===i.SHORT&&(ne=i.R16I),j===i.INT&&(ne=i.R32I)),T===i.RG&&(j===i.FLOAT&&(ne=i.RG32F),j===i.HALF_FLOAT&&(ne=i.RG16F),j===i.UNSIGNED_BYTE&&(ne=i.RG8),j===i.UNSIGNED_SHORT&&Se&&(ne=Se.RG16_EXT),j===i.SHORT&&Se&&(ne=Se.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RG8UI),j===i.UNSIGNED_SHORT&&(ne=i.RG16UI),j===i.UNSIGNED_INT&&(ne=i.RG32UI),j===i.BYTE&&(ne=i.RG8I),j===i.SHORT&&(ne=i.RG16I),j===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),j===i.UNSIGNED_INT&&(ne=i.RGB32UI),j===i.BYTE&&(ne=i.RGB8I),j===i.SHORT&&(ne=i.RGB16I),j===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),j===i.UNSIGNED_INT&&(ne=i.RGBA32UI),j===i.BYTE&&(ne=i.RGBA8I),j===i.SHORT&&(ne=i.RGBA16I),j===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&(j===i.UNSIGNED_SHORT&&Se&&(ne=Se.RGB16_EXT),j===i.SHORT&&Se&&(ne=Se.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),T===i.RGBA){let de=ge?ba:dt.getTransfer(ee);j===i.FLOAT&&(ne=i.RGBA32F),j===i.HALF_FLOAT&&(ne=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ne=de===_t?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&Se&&(ne=Se.RGBA16_EXT),j===i.SHORT&&Se&&(ne=Se.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(U,T){let j;return U?T===null||T===gi||T===us?j=i.DEPTH24_STENCIL8:T===Wn?j=i.DEPTH32F_STENCIL8:T===Br&&(j=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===us?j=i.DEPTH_COMPONENT24:T===Wn?j=i.DEPTH_COMPONENT32F:T===Br&&(j=i.DEPTH_COMPONENT16),j}function x(U,T){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Nt&&U.minFilter!==It?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function E(U){let T=U.target;T.removeEventListener("dispose",E),_(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function S(U){let T=U.target;T.removeEventListener("dispose",S),C(T)}function _(U){let T=n.get(U);if(T.__webglInit===void 0)return;let j=U.source,J=f.get(j);if(J){let ee=J[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(U),Object.keys(J).length===0&&f.delete(j)}n.remove(U)}function A(U){let T=n.get(U);i.deleteTexture(T.__webglTexture);let j=U.source,J=f.get(j);delete J[T.__cacheKey],a.memory.textures--}function C(U){let T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ee=0;ee<T.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(T.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)i.deleteFramebuffer(T.__webglFramebuffer[J]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=U.textures;for(let J=0,ee=j.length;J<ee;J++){let ge=n.get(j[J]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(j[J])}n.remove(U)}let L=0;function F(){L=0}function O(){return L}function z(U){L=U}function K(){let U=L;return U>=s.maxTextures&&je("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function Z(U){let T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function he(U,T){let j=n.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){let J=U.image;if(J===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(j,U,T);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+T)}function $(U,T){let j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){_e(j,U,T);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+T)}function te(U,T){let j=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){_e(j,U,T);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+T)}function se(U,T){let j=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){pe(j,U,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+T)}let Ce={[$t]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},Re={[Nt]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},Xe={[tp]:i.NEVER,[ap]:i.ALWAYS,[np]:i.LESS,[Pc]:i.LEQUAL,[ip]:i.EQUAL,[Ic]:i.GEQUAL,[sp]:i.GREATER,[rp]:i.NOTEQUAL};function Ze(U,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===It||T.magFilter===kr||T.magFilter===Ls||T.magFilter===In||T.minFilter===It||T.minFilter===kr||T.minFilter===Ls||T.minFilter===In)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ce[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ce[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ce[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Re[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Re[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==Ls&&T.minFilter!==In||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function st(U,T){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",E));let J=T.source,ee=f.get(J);ee===void 0&&(ee={},f.set(J,ee));let ge=Z(T);if(ge!==U.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ee[ge].usedTimes++;let Se=ee[U.__cacheKey];Se!==void 0&&(ee[U.__cacheKey].usedTimes--,Se.usedTimes===0&&A(T)),U.__cacheKey=ge,U.__webglTexture=ee[ge].texture}return j}function k(U,T,j){return Math.floor(Math.floor(U/j)/T)}function q(U,T,j,J){let ge=U.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,j,J,T.data);else{ge.sort((Be,Ee)=>Be.start-Ee.start);let Se=0;for(let Be=1;Be<ge.length;Be++){let Ee=ge[Se],ye=ge[Be],Oe=Ee.start+Ee.count,We=k(ye.start,T.width,4),et=k(Ee.start,T.width,4);ye.start<=Oe+1&&We===et&&k(ye.start+ye.count-1,T.width,4)===We?Ee.count=Math.max(Ee.count,ye.start+ye.count-Ee.start):(++Se,ge[Se]=ye)}ge.length=Se+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Be=0,Ee=ge.length;Be<Ee;Be++){let ye=ge[Be],Oe=Math.floor(ye.start/4),We=Math.ceil(ye.count/4),et=Oe%T.width,W=Math.floor(Oe/T.width),Pe=We,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,et,W,Pe,re,j,J,T.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function _e(U,T,j){let J=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=i.TEXTURE_3D);let ee=st(U,T),ge=T.source;t.bindTexture(J,U.__webglTexture,i.TEXTURE0+j);let Se=n.get(ge);if(ge.version!==Se.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let re=dt.getPrimaries(dt.workingColorSpace),oe=T.colorSpace===bi?null:dt.getPrimaries(T.colorSpace),Me=T.colorSpace===bi||re===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let de=m(T.image,!1,s.maxTextureSize);de=ct(T,de);let Te=r.convert(T.format,T.colorSpace),Be=r.convert(T.type),Ee=b(T.internalFormat,Te,Be,T.normalized,T.colorSpace,T.isVideoTexture);Ze(J,T);let ye,Oe=T.mipmaps,We=T.isVideoTexture!==!0,et=Se.__version===void 0||ee===!0,W=ge.dataReady,Pe=x(T,de);if(T.isDepthTexture)Ee=v(T.format===Ti,T.type),et&&(We?t.texStorage2D(i.TEXTURE_2D,1,Ee,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ee,de.width,de.height,0,Te,Be,null));else if(T.isDataTexture)if(Oe.length>0){We&&et&&t.texStorage2D(i.TEXTURE_2D,Pe,Ee,Oe[0].width,Oe[0].height);for(let re=0,oe=Oe.length;re<oe;re++)ye=Oe[re],We?W&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,Te,Be,ye.data):t.texImage2D(i.TEXTURE_2D,re,Ee,ye.width,ye.height,0,Te,Be,ye.data);T.generateMipmaps=!1}else We?(et&&t.texStorage2D(i.TEXTURE_2D,Pe,Ee,de.width,de.height),W&&q(T,de,Te,Be)):t.texImage2D(i.TEXTURE_2D,0,Ee,de.width,de.height,0,Te,Be,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){We&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ee,Oe[0].width,Oe[0].height,de.depth);for(let re=0,oe=Oe.length;re<oe;re++)if(ye=Oe[re],T.format!==en)if(Te!==null)if(We){if(W)if(T.layerUpdates.size>0){let Me=Eu(ye.width,ye.height,T.format,T.type);for(let fe of T.layerUpdates){let Ye=ye.data.subarray(fe*Me/ye.data.BYTES_PER_ELEMENT,(fe+1)*Me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,fe,ye.width,ye.height,1,Te,Ye)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,de.depth,Te,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,de.depth,0,ye.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,de.depth,Te,Be,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,de.depth,0,Te,Be,ye.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{We&&et&&t.texStorage2D(i.TEXTURE_2D,Pe,Ee,Oe[0].width,Oe[0].height);for(let re=0,oe=Oe.length;re<oe;re++)ye=Oe[re],T.format!==en?Te!==null?We?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ee,ye.width,ye.height,0,ye.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?W&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,Te,Be,ye.data):t.texImage2D(i.TEXTURE_2D,re,Ee,ye.width,ye.height,0,Te,Be,ye.data)}else if(T.isDataArrayTexture)if(We){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ee,de.width,de.height,de.depth),W)if(T.layerUpdates.size>0){let re=Eu(de.width,de.height,T.format,T.type);for(let oe of T.layerUpdates){let Me=de.data.subarray(oe*re/de.data.BYTES_PER_ELEMENT,(oe+1)*re/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,Te,Be,Me)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Te,Be,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,de.width,de.height,de.depth,0,Te,Be,de.data);else if(T.isData3DTexture)We?(et&&t.texStorage3D(i.TEXTURE_3D,Pe,Ee,de.width,de.height,de.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Te,Be,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,de.width,de.height,de.depth,0,Te,Be,de.data);else if(T.isFramebufferTexture){if(et)if(We)t.texStorage2D(i.TEXTURE_2D,Pe,Ee,de.width,de.height);else{let re=de.width,oe=de.height;for(let Me=0;Me<Pe;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ee,re,oe,0,Te,Be,null),re>>=1,oe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),de.parentNode!==re){re.appendChild(de),u.add(T),re.onpaint=oe=>{let Me=oe.changedElements;for(let fe of u)Me.includes(fe.image)&&(fe.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let Me=i.RGBA,fe=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,fe,Ye,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(We&&et){let re=rt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Ee,re.width,re.height)}for(let re=0,oe=Oe.length;re<oe;re++)ye=Oe[re],We?W&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Te,Be,ye):t.texImage2D(i.TEXTURE_2D,re,Ee,Te,Be,ye);T.generateMipmaps=!1}else if(We){if(et){let re=rt(de);t.texStorage2D(i.TEXTURE_2D,Pe,Ee,re.width,re.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Be,de)}else t.texImage2D(i.TEXTURE_2D,0,Ee,Te,Be,de);p(T)&&M(J),Se.__version=ge.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function pe(U,T,j){if(T.image.length!==6)return;let J=st(U,T),ee=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);let ge=n.get(ee);if(ee.version!==ge.__version||J===!0){t.activeTexture(i.TEXTURE0+j);let Se=dt.getPrimaries(dt.workingColorSpace),ne=T.colorSpace===bi?null:dt.getPrimaries(T.colorSpace),de=T.colorSpace===bi||Se===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Te=T.isCompressedTexture||T.image[0].isCompressedTexture,Be=T.image[0]&&T.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!Te&&!Be?Ee[fe]=m(T.image[fe],!0,s.maxCubemapSize):Ee[fe]=Be?T.image[fe].image:T.image[fe],Ee[fe]=ct(T,Ee[fe]);let ye=Ee[0],Oe=r.convert(T.format,T.colorSpace),We=r.convert(T.type),et=b(T.internalFormat,Oe,We,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Pe=ge.__version===void 0||J===!0,re=ee.dataReady,oe=x(T,ye);Ze(i.TEXTURE_CUBE_MAP,T);let Me;if(Te){W&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,et,ye.width,ye.height);for(let fe=0;fe<6;fe++){Me=Ee[fe].mipmaps;for(let Ye=0;Ye<Me.length;Ye++){let Ge=Me[Ye];T.format!==en?Oe!==null?W?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,et,Ge.width,Ge.height,0,Ge.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,0,0,Ge.width,Ge.height,Oe,We,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye,et,Ge.width,Ge.height,0,Oe,We,Ge.data)}}}else{if(Me=T.mipmaps,W&&Pe){Me.length>0&&oe++;let fe=rt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,et,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Be){W?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,Oe,We,Ee[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,et,Ee[fe].width,Ee[fe].height,0,Oe,We,Ee[fe].data);for(let Ye=0;Ye<Me.length;Ye++){let wt=Me[Ye].image[fe].image;W?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,0,0,wt.width,wt.height,Oe,We,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,et,wt.width,wt.height,0,Oe,We,wt.data)}}else{W?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe,We,Ee[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,et,Oe,We,Ee[fe]);for(let Ye=0;Ye<Me.length;Ye++){let Ge=Me[Ye];W?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,0,0,Oe,We,Ge.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ye+1,et,Oe,We,Ge.image[fe])}}}p(T)&&M(i.TEXTURE_CUBE_MAP),ge.__version=ee.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ie(U,T,j,J,ee,ge){let Se=r.convert(j.format,j.colorSpace),ne=r.convert(j.type),de=b(j.internalFormat,Se,ne,j.normalized,j.colorSpace),Te=n.get(T),Be=n.get(j);if(Be.__renderTarget=T,!Te.__hasExternalTextures){let Ee=Math.max(1,T.width>>ge),ye=Math.max(1,T.height>>ge);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ge,de,Ee,ye,T.depth,0,Se,ne,null):t.texImage2D(ee,ge,de,Ee,ye,0,Se,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ke(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ee,Be.__webglTexture,0,De(T)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ee,Be.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(U,T,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){let J=T.depthTexture,ee=J&&J.isDepthTexture?J.type:null,ge=v(T.stencilBuffer,ee),Se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ke(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(T),ge,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(T),ge,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,U)}else{let J=T.textures;for(let ee=0;ee<J.length;ee++){let ge=J[ee],Se=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),de=b(ge.internalFormat,Se,ne,ge.normalized,ge.colorSpace);ke(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De(T),de,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,De(T),de,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,de,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(U,T,j){let J=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(T.depthTexture);if(ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,T.depthTexture);let Te=r.convert(T.depthTexture.format),Be=r.convert(T.depthTexture.type),Ee;T.depthTexture.format===yi?Ee=i.DEPTH_COMPONENT24:T.depthTexture.format===Ti&&(Ee=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ee,T.width,T.height,0,Te,Be,null)}}else he(T.depthTexture,0);let ge=ee.__webglTexture,Se=De(T),ne=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,de=T.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===yi)ke(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ne,ge,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,de,ne,ge,0);else if(T.depthTexture.format===Ti)ke(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ne,ge,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,de,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(U){let T=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){let J=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){let ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=J}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let J=0;J<6;J++)$e(T.__webglFramebuffer[J],U,J);else{let J=U.texture.mipmaps;J&&J.length>0?$e(T.__webglFramebuffer[0],U,0):$e(T.__webglFramebuffer,U,0)}else if(j){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=i.createRenderbuffer(),Je(T.__webglDepthbuffer[J],U,!1);else{let ee=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ge)}}else{let J=U.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Je(T.__webglDepthbuffer,U,!1);else{let ee=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(U,T,j){let J=n.get(U);T!==void 0&&Ie(J.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ce(U)}function xe(U){let T=U.texture,j=n.get(U),J=n.get(T);U.addEventListener("dispose",S);let ee=U.textures,ge=U.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=T.version,a.memory.textures++),ge){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ne]=[];for(let de=0;de<T.mipmaps.length;de++)j.__webglFramebuffer[ne][de]=i.createFramebuffer()}else j.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ne=0;ne<T.mipmaps.length;ne++)j.__webglFramebuffer[ne]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ne=0,de=ee.length;ne<de;ne++){let Te=n.get(ee[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&ke(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){let de=ee[ne];j.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ne]);let Te=r.convert(de.format,de.colorSpace),Be=r.convert(de.type),Ee=b(de.internalFormat,Te,Be,de.normalized,de.colorSpace,U.isXRRenderTarget===!0),ye=De(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Ee,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,j.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,T);for(let ne=0;ne<6;ne++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ie(j.__webglFramebuffer[ne][de],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else Ie(j.__webglFramebuffer[ne],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(T)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,de=ee.length;ne<de;ne++){let Te=ee[ne],Be=n.get(Te),Ee=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ee=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Be.__webglTexture),Ze(Ee,Te),Ie(j.__webglFramebuffer,U,Te,i.COLOR_ATTACHMENT0+ne,Ee,0),p(Te)&&M(Ee)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ne=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,J.__webglTexture),Ze(ne,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ie(j.__webglFramebuffer[de],U,T,i.COLOR_ATTACHMENT0,ne,de);else Ie(j.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,ne,0);p(T)&&M(ne),t.unbindTexture()}U.depthBuffer&&ce(U)}function be(U){let T=U.textures;for(let j=0,J=T.length;j<J;j++){let ee=T[j];if(p(ee)){let ge=w(U),Se=n.get(ee).__webglTexture;t.bindTexture(ge,Se),M(ge),t.unbindTexture()}}}let ve=[],Ne=[];function Ve(U){if(U.samples>0){if(ke(U)===!1){let T=U.textures,j=U.width,J=U.height,ee=i.COLOR_BUFFER_BIT,ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(U),ne=T.length>1;if(ne)for(let Te=0;Te<T.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let de=U.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Te=0;Te<T.length;Te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let Be=n.get(T[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,j,J,0,0,j,J,ee,i.NEAREST),l===!0&&(ve.length=0,Ne.length=0,ve.push(i.COLOR_ATTACHMENT0+Te),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(ve.push(ge),Ne.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Te=0;Te<T.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let Be=n.get(T[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function De(U){return Math.min(s.maxSamples,U.samples)}function ke(U){let T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(U){let T=a.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function ct(U,T){let j=U.colorSpace,J=U.format,ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==nn&&j!==bi&&(dt.getTransfer(j)===_t?(J!==en||ee!==wn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",j)),T}function rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=F,this.getTextureUnits=O,this.setTextureUnits=z,this.setTexture2D=he,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=se,this.rebindTextures=me,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sy(i,e){function t(n,s=bi){let r,a=dt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===du)return i.BYTE;if(n===fu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===kt)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===bu)return i.RGB;if(n===en)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===ds)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===ac||n===oc||n===lc||n===mo||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Tc||n===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===go||n===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wy=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:wy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends di{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new zu,p={},M=t.getContextAttributes(),w=null,b=null,v=[],x=[],E=new ie,S=null,_=null,A=new Wt;A.viewport=new yt;let C=new Wt;C.viewport=new yt;let L=[A,C],F=new Hl,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=v[k];return q===void 0&&(q=new Mr,v[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=v[k];return q===void 0&&(q=new Mr,v[k]=q),q.getGripSpace()},this.getHand=function(k){let q=v[k];return q===void 0&&(q=new Mr,v[k]=q),q.getHandSpace()};function K(k){let q=x.indexOf(k.inputSource);if(q===-1)return;let _e=v[q];_e!==void 0&&(_e.update(k.inputSource,k.frame,c||a),_e.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",he);for(let k=0;k<v.length;k++){let q=x[k];q!==null&&(x[k]=null,v[k].disconnect(q))}O=null,z=null,m.reset();for(let k in p)delete p[k];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,b=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),_!==null){let k=_.camera;k.fov=_.fov,k.zoom=_.zoom,k.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,pe=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?Ti:yi,pe=M.stencil?us:gi);let Je={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Dt(d.textureWidth,d.textureHeight,{format:en,type:wn,depthTexture:new Si(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Dt(f.framebufferWidth,f.framebufferHeight,{format:en,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(k){for(let q=0;q<k.removed.length;q++){let _e=k.removed[q],pe=x.indexOf(_e);pe>=0&&(x[pe]=null,v[pe].disconnect(_e))}for(let q=0;q<k.added.length;q++){let _e=k.added[q],pe=x.indexOf(_e);if(pe===-1){for(let Je=0;Je<v.length;Je++)if(Je>=x.length){x.push(_e),pe=Je;break}else if(x[Je]===null){x[Je]=_e,pe=Je;break}if(pe===-1)break}let Ie=v[pe];Ie&&Ie.connect(_e)}}let $=new N,te=new N;function se(k,q,_e){$.setFromMatrixPosition(q.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);let pe=$.distanceTo(te),Ie=q.projectionMatrix.elements,Je=_e.projectionMatrix.elements,$e=Ie[14]/(Ie[10]-1),ce=Ie[14]/(Ie[10]+1),me=(Ie[9]+1)/Ie[5],xe=(Ie[9]-1)/Ie[5],be=(Ie[8]-1)/Ie[0],ve=(Je[8]+1)/Je[0],Ne=$e*be,Ve=$e*ve,De=pe/(-be+ve),ke=De*-be;if(q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ke),k.translateZ(De),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ie[10]===-1)k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let G=$e+De,ct=ce+De,rt=Ne-ke,U=Ve+(pe-ke),T=me*ce/ct*G,j=xe*ce/ct*G;k.projectionMatrix.makePerspective(rt,U,T,j,G,ct),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ce(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let q=k.near,_e=k.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),F.near=C.near=A.near=q,F.far=C.far=A.far=_e,(O!==F.near||z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,z=F.far),F.layers.mask=k.layers.mask|6,A.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;let pe=k.parent,Ie=F.cameras;Ce(F,pe);for(let Je=0;Je<Ie.length;Je++)Ce(Ie[Je],pe);Ie.length===2?se(F,A,C):F.projectionMatrix.copy(A.projectionMatrix),_===null&&k.isPerspectiveCamera&&(_={camera:k,fov:k.fov,zoom:k.zoom}),Re(k,F,pe)};function Re(k,q,_e){_e===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(_e.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ws*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(k){return p[k]};let Xe=null;function Ze(k,q){if(h=q.getViewerPose(c||a),g=q,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let pe=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,pe=!0);for(let ce=0;ce<_e.length;ce++){let me=_e[ce],xe=null;if(f!==null)xe=f.getViewport(me);else{let ve=u.getViewSubImage(d,me);xe=ve.viewport,ce===0&&(e.setRenderTargetTextures(b,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(b))}let be=L[ce];be===void 0&&(be=new Wt,be.layers.enable(ce),be.viewport=new yt,L[ce]=be),be.matrix.fromArray(me.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(me.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(xe.x,xe.y,xe.width,xe.height),ce===0&&(F.matrix.copy(be.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),pe===!0&&F.cameras.push(be)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ce=u.getDepthInformation(_e[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,s.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let ce=0;ce<_e.length;ce++){let me=_e[ce].camera;if(me){let xe=p[me];xe||(xe=new Pa,p[me]=xe);let be=u.getCameraImage(me);xe.sourceTexture=be}}}}for(let _e=0;_e<v.length;_e++){let pe=x[_e],Ie=v[_e];pe!==null&&Ie!==void 0&&Ie.update(pe,q,c||a)}Xe&&Xe(k,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let st=new zp;st.setAnimationLoop(Ze),this.setAnimationLoop=function(k){Xe=k},this.dispose=function(){}}},Ey=new Fe,Xp=new at;Xp.set(-1,0,0,0,1,0,0,0,1);function Ay(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,b=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ry(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=s[b.id];x===void 0&&(m(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",M));let E=v.program;n.updateUBOMapping(b,E);let S=e.render.frame;r[b.id]!==S&&(d(b),r[b.id]=S)}function h(b){let v=u();b.__bindingPointIndex=v;let x=i.createBuffer(),E=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let v=s[b.id],x=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,_=x.length;S<_;S++){let A=x[S];if(Array.isArray(A))for(let C=0,L=A.length;C<L;C++)f(A[C],S,C,E);else f(A,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,x,E){if(y(b,v,x,E)===!0){let S=b.__offset,_=b.value;if(Array.isArray(_)){let A=0;for(let C=0;C<_.length;C++){let L=_[C],F=p(L);g(L,b.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,b.__data)}}function g(b,v,x){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,x)}function y(b,v,x,E){let S=b.value,_=v+"_"+x;if(E[_]===void 0)return typeof S=="number"||typeof S=="boolean"?E[_]=S:ArrayBuffer.isView(S)?E[_]=S.slice():E[_]=S.clone(),!0;{let A=E[_];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return E[_]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function m(b){let v=b.uniforms,x=0,E=16;for(let _=0,A=v.length;_<A;_++){let C=Array.isArray(v[_])?v[_]:[v[_]];for(let L=0,F=C.length;L<F;L++){let O=C[L],z=Array.isArray(O.value)?O.value:[O.value];for(let K=0,Z=z.length;K<Z;K++){let he=z[K],$=p(he),te=x%E,se=te%$.boundary,Ce=te+se;x+=se,Ce!==0&&E-Ce<$.storage&&(x+=E-Ce),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=$.storage}}}let S=x%E;return S>0&&(x+=E-S),b.__size=x,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):je("WebGLRenderer: Unsupported uniform value type.",b),v}function M(b){let v=b.target;v.removeEventListener("dispose",M);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Py(){return Ei===null&&(Ei=new Mn(Cy,16,16,ds,kt),Ei.name="DFG_LUT",Ei.minFilter=It,Ei.magFilter=It,Ei.wrapS=Cn,Ei.wrapT=Cn,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Fc=class{constructor(e={}){let{canvas:t=op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Ql,$l,Zl]),p=new Set([wn,gi,Br,us,Yl,Kl]),M=new Uint32Array(4),w=new Int32Array(4),b=new N,v=null,x=null,E=[],S=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,L=null,F=null,O=null,z=null;this._outputColorSpace=xt;let K=0,Z=0,he=null,$=-1,te=null,se=new yt,Ce=new yt,Re=null,Xe=new ze(0),Ze=0,st=t.width,k=t.height,q=1,_e=null,pe=null,Ie=new yt(0,0,st,k),Je=new yt(0,0,st,k),$e=!1,ce=new Tr,me=!1,xe=!1,be=new Fe,ve=new N,Ne=new yt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function ke(){return he===null?q:1}let G=n;function ct(P,H){return t.getContext(P,H)}let rt,U,T,j,J,ee,ge,Se,ne,de,Te,Be,Ee,ye,Oe,We,et,W,Pe,re,oe,Me,fe;try{let P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),G===null){let H="webgl2";if(G=ct(H,P),G===null)throw ct(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(P){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),it("WebGLRenderer: "+P.message),P}function Ye(){rt=new O_(G),rt.init(),oe=new Sy(G,rt),U=new A_(G,rt,e,oe),T=new yy(G,rt),U.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),F=G.createFramebuffer(),O=G.createFramebuffer(),z=G.createFramebuffer(),j=new z_(G),J=new oy,ee=new My(G,rt,T,J,U,oe,j),ge=new U_(A),Se=new Hg(G),Me=new T_(G,Se),ne=new k_(G,Se,j,Me),de=new H_(G,ne,Se,Me,j),W=new G_(G,U,ee),Oe=new R_(J),Te=new ay(A,ge,rt,U,Me,Oe),Be=new Ay(A,J),Ee=new cy,ye=new my(rt),et=new w_(A,ge,T,de,g,l),We=new vy(A,de,U),fe=new Ry(G,j,U,T),Pe=new E_(G,rt,j),re=new B_(G,rt,j),j.programs=Te.programs,A.capabilities=U,A.extensions=rt,A.properties=J,A.renderLists=Ee,A.shadowMap=We,A.state=T,A.info=j}y!==wn&&(_=new W_(y,t.width,t.height,o,s,r));let Ge=new Gu(A,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let P=rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(st,k,!1))},this.getSize=function(P){return P.set(st,k)},this.setSize=function(P,H,R=!0){if(Ge.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}st=P,k=H,t.width=Math.floor(P*q),t.height=Math.floor(H*q),R===!0&&(t.style.width=P+"px",t.style.height=H+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(st*q,k*q).floor()},this.setDrawingBufferSize=function(P,H,R){st=P,k=H,q=R,t.width=Math.floor(P*R),t.height=Math.floor(H*R),this.setViewport(0,0,P,H)},this.setEffects=function(P){if(y===wn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let H=0;H<P.length;H++)if(P[H].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(se)},this.getViewport=function(P){return P.copy(Ie)},this.setViewport=function(P,H,R,I){P.isVector4?Ie.set(P.x,P.y,P.z,P.w):Ie.set(P,H,R,I),T.viewport(se.copy(Ie).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(Je)},this.setScissor=function(P,H,R,I){P.isVector4?Je.set(P.x,P.y,P.z,P.w):Je.set(P,H,R,I),T.scissor(Ce.copy(Je).multiplyScalar(q).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(P){T.setScissorTest($e=P)},this.setOpaqueSort=function(P){_e=P},this.setTransparentSort=function(P){pe=P},this.getClearColor=function(P){return P.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,R=!0){let I=0;if(P){let D=!1;if(he!==null){let V=he.texture.format;D=m.has(V)}if(D){let V=he.texture.type,X=p.has(V),Y=et.getClearColor(),B=et.getClearAlpha(),Q=Y.r,ae=Y.g,ue=Y.b;X?(M[0]=Q,M[1]=ae,M[2]=ue,M[3]=B,G.clearBufferuiv(G.COLOR,0,M)):(w[0]=Q,w[1]=ae,w[2]=ue,w[3]=B,G.clearBufferiv(G.COLOR,0,w))}else I|=G.COLOR_BUFFER_BIT}H&&(I|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),R&&(I|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&G.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),L=P},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),et.dispose(),Ee.dispose(),ye.dispose(),J.dispose(),ge.dispose(),de.dispose(),Me.dispose(),fe.dispose(),Te.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",No),Ge.removeEventListener("sessionend",Fo),un.stop()};function wt(P){P.preventDefault(),xa("WebGLRenderer: Context Lost."),C=!0}function pt(){xa("WebGLRenderer: Context Restored."),C=!1;let P=j.autoReset,H=We.enabled,R=We.autoUpdate,I=We.needsUpdate,D=We.type;Ye(),j.autoReset=P,We.enabled=H,We.autoUpdate=R,We.needsUpdate=I,We.type=D}function Nn(P){it("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function jn(P){let H=P.target;H.removeEventListener("dispose",jn),Lo(H)}function Lo(P){ch(P),J.remove(P)}function ch(P){let H=J.get(P).programs;H!==void 0&&(H.forEach(function(R){Te.releaseProgram(R)}),P.isShaderMaterial&&Te.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,R,I,D,V){H===null&&(H=Ve);let X=D.isMesh&&D.matrixWorld.determinantAffine()<0,Y=ph(P,H,R,I,D);T.setMaterial(I,X);let B=R.index,Q=1;if(I.wireframe===!0){if(B=ne.getWireframeAttribute(R),B===void 0)return;Q=2}let ae=R.drawRange,ue=R.attributes.position,le=ae.start*Q,He=(ae.start+ae.count)*Q;V!==null&&(le=Math.max(le,V.start*Q),He=Math.min(He,(V.start+V.count)*Q)),B!==null?(le=Math.max(le,0),He=Math.min(He,B.count)):ue!=null&&(le=Math.max(le,0),He=Math.min(He,ue.count));let gt=He-le;if(gt<0||gt===1/0)return;Me.setup(D,I,Y,R,B);let tt,nt=Pe;if(B!==null&&(tt=Se.get(B),nt=re,nt.setIndex(tt)),D.isMesh)I.wireframe===!0?(T.setLineWidth(I.wireframeLinewidth*ke()),nt.setMode(G.LINES)):nt.setMode(G.TRIANGLES);else if(D.isLine){let vt=I.linewidth;vt===void 0&&(vt=1),T.setLineWidth(vt*ke()),D.isLineSegments?nt.setMode(G.LINES):D.isLineLoop?nt.setMode(G.LINE_LOOP):nt.setMode(G.LINE_STRIP)}else D.isPoints?nt.setMode(G.POINTS):D.isSprite&&nt.setMode(G.TRIANGLES);if(D.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))nt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let vt=D._multiDrawStarts,Ae=D._multiDrawCounts,bt=D._multiDrawCount,ut=B?Se.get(B).bytesPerElement:1,Ct=J.get(I).currentProgram.getUniforms();for(let Bn=0;Bn<bt;Bn++)Ct.setValue(G,"_gl_DrawID",Bn),nt.render(vt[Bn]/ut,Ae[Bn])}else if(D.isInstancedMesh)nt.renderInstances(le,gt,D.count);else if(R.isInstancedBufferGeometry){let vt=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Ae=Math.min(R.instanceCount,vt);nt.renderInstances(le,gt,Ae)}else nt.render(le,gt)};function hh(P,H,R,I){L!==null&&P.isNodeMaterial&&L.setObject(I,P),me===!0&&Oe.setState(P,R,!1),P.transparent===!0&&P.side===Ht&&P.forceSinglePass===!1?(P.side=bn,P.needsUpdate=!0,kn(P,H,I),P.side=ni,P.needsUpdate=!0,kn(P,H,I),P.side=Ht):kn(P,H,I)}this.compile=function(P,H,R=null){R===null&&(R=P),L!==null&&L.renderStart(P,H,R),x=ye.get(R),x.init(H),S.push(x),R.traverseVisible(function(D){D.isLight&&D.layers.test(H.layers)&&(x.pushLight(D),D.castShadow&&x.pushShadow(D))}),P!==R&&P.traverseVisible(function(D){D.isLight&&D.layers.test(H.layers)&&(x.pushLight(D),D.castShadow&&x.pushShadow(D))}),x.setupLights(),L!==null&&L.updateLights(x.state.lightsArray),xe=this.localClippingEnabled,me=Oe.init(this.clippingPlanes,xe),me===!0&&Oe.setGlobalState(this.clippingPlanes,H),L!==null&&We.render(x.state.shadowsArray,R,H);let I=new Set;return P.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let V=D.material;if(V)if(Array.isArray(V))for(let X=0;X<V.length;X++){let Y=V[X];hh(Y,R,H,D),I.add(Y)}else hh(V,R,H,D),I.add(V)}),x=S.pop(),L!==null&&L.renderEnd(),I},this.compileAsync=function(P,H,R=null){let I=this.compile(P,H,R);return new Promise(D=>{function V(){if(I.forEach(function(X){let B=J.get(X).currentProgram;(B===void 0||B.isReady())&&I.delete(X)}),I.size===0){D(P);return}setTimeout(V,10)}rt.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let qs=null;function uh(P){qs&&qs(P)}function No(){un.stop()}function Fo(){un.start()}let un=new zp;un.setAnimationLoop(uh),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(P){qs=P,Ge.setAnimationLoop(P),P===null?un.stop():un.start()},Ge.addEventListener("sessionstart",No),Ge.addEventListener("sessionend",Fo),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(P,H);let R=Ge.enabled===!0&&Ge.isPresenting===!0,I=_!==null&&(he===null||R)&&_.begin(A,he);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(H),H=Ge.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,H,he),x=ye.get(P,S.length),x.init(H),x.state.textureUnits=ee.getTextureUnits(),S.push(x),be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ce.setFromProjectionMatrix(be,ui,H.reversedDepth),xe=this.localClippingEnabled,me=Oe.init(this.clippingPlanes,xe),v=Ee.get(P,E.length),v.init(),E.push(v),Ge.enabled===!0&&Ge.isPresenting===!0){let X=A.xr.getDepthSensingMesh();X!==null&&Qr(X,H,-1/0,A.sortObjects)}Qr(P,H,0,A.sortObjects),v.finish(),L!==null&&L.updateLights(x.state.lightsArray),A.sortObjects===!0&&v.sort(_e,pe),De=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,De&&et.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&Oe.beginShadows();let D=x.state.shadowsArray;if(We.render(D,P,H),me===!0&&Oe.endShadows(),(I&&_.hasRenderPass())===!1){let X=v.opaque,Y=v.transmissive;if(x.setupLights(),H.isArrayCamera){let B=H.cameras;if(Y.length>0)for(let Q=0,ae=B.length;Q<ae;Q++){let ue=B[Q];js(X,Y,P,ue)}De&&et.render(P);for(let Q=0,ae=B.length;Q<ae;Q++){let ue=B[Q];Xs(v,P,ue,ue.viewport)}}else Y.length>0&&js(X,Y,P,H),De&&et.render(P),Xs(v,P,H)}he!==null&&Z===0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he)),I&&_.end(A),P.isScene===!0&&P.onAfterRender(A,P,H),Me.resetDefaultState(),$=-1,te=null,S.pop(),S.length>0?(x=S[S.length-1],ee.setTextureUnits(x.state.textureUnits),me===!0&&Oe.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,L!==null&&L.renderEnd()};function Qr(P,H,R,I){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)R=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLightProbeGrid)x.pushLightProbeGrid(P);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ce)){I&&Ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);let X=de.update(P),Y=P.material;Y.visible&&v.push(P,X,Y,R,Ne.z,null,H)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ce))){let X=de.update(P),Y=P.material;if(I&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ne.copy(P.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Ne.copy(X.boundingSphere.center)),Ne.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray(Y)){let B=X.groups;for(let Q=0,ae=B.length;Q<ae;Q++){let ue=B[Q],le=Y[ue.materialIndex];le&&le.visible&&v.push(P,X,le,R,Ne.z,ue,H)}}else Y.visible&&v.push(P,X,Y,R,Ne.z,null,H)}}let V=P.children;for(let X=0,Y=V.length;X<Y;X++)Qr(V[X],H,R,I)}function Xs(P,H,R,I){let{opaque:D,transmissive:V,transparent:X}=P;x.setupLightsView(R),me===!0&&Oe.setGlobalState(A.clippingPlanes,R),I&&T.viewport(se.copy(I)),D.length>0&&Yn(D,H,R),V.length>0&&Yn(V,H,R),X.length>0&&Yn(X,H,R),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function js(P,H,R,I){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[I.id]===void 0){let le=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[I.id]=new Dt(1,1,{generateMipmaps:!0,type:le?kt:wn,minFilter:In,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let V=x.state.transmissionRenderTarget[I.id],X=I.viewport||se;V.setSize(X.z*A.transmissionResolutionScale,X.w*A.transmissionResolutionScale);let Y=A.getRenderTarget(),B=A.getActiveCubeFace(),Q=A.getActiveMipmapLevel();A.setRenderTarget(V),A.getClearColor(Xe),Ze=A.getClearAlpha(),Ze<1&&A.setClearColor(16777215,.5),A.clear(),De&&et.render(R);let ae=A.toneMapping;A.toneMapping=mi;let ue=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),x.setupLightsView(I),me===!0&&Oe.setGlobalState(A.clippingPlanes,I),Yn(P,R,I),ee.updateMultisampleRenderTarget(V),ee.updateRenderTargetMipmap(V),rt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let He=0,gt=H.length;He<gt;He++){let tt=H[He],{object:nt,geometry:vt,material:Ae,group:bt}=tt;if(Ae.side===Ht&&nt.layers.test(I.layers)){let ut=Ae.side;Ae.side=bn,Ae.needsUpdate=!0,xi(nt,R,I,vt,Ae,bt),Ae.side=ut,Ae.needsUpdate=!0,le=!0}}le===!0&&(ee.updateMultisampleRenderTarget(V),ee.updateRenderTargetMipmap(V))}A.setRenderTarget(Y,B,Q),A.setClearColor(Xe,Ze),ue!==void 0&&(I.viewport=ue),A.toneMapping=ae}function Yn(P,H,R){let I=H.isScene===!0?H.overrideMaterial:null;for(let D=0,V=P.length;D<V;D++){let X=P[D],{object:Y,geometry:B,group:Q}=X,ae=X.material;ae.allowOverride===!0&&I!==null&&(ae=I),Y.layers.test(R.layers)&&xi(Y,H,R,B,ae,Q)}}function xi(P,H,R,I,D,V){L!==null&&D.isNodeMaterial&&L.setObject(P,D),P.onBeforeRender(A,H,R,I,D,V),P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),D.onBeforeRender(A,H,R,I,P,V),D.transparent===!0&&D.side===Ht&&D.forceSinglePass===!1?(D.side=bn,D.needsUpdate=!0,A.renderBufferDirect(R,H,I,D,P,V),D.side=ni,D.needsUpdate=!0,A.renderBufferDirect(R,H,I,D,P,V),D.side=Ht):A.renderBufferDirect(R,H,I,D,P,V),P.onAfterRender(A,H,R,I,D,V)}function kn(P,H,R){H.isScene!==!0&&(H=Ve);let I=J.get(P),D=x.state.lights,V=x.state.shadowsArray,X=D.state.version,Y=Te.getParameters(P,D.state,V,H,R,x.state.lightProbeGridArray),B=Te.getProgramCacheKey(Y),Q=I.programs;I.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?H.environment:null,I.fog=H.fog;let ae=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;I.envMap=ge.get(P.envMap||I.environment,ae),I.envMapRotation=I.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,Q===void 0&&(P.addEventListener("dispose",jn),Q=new Map,I.programs=Q);let ue=Q.get(B);if(ue!==void 0){if(I.currentProgram===ue&&I.lightsStateVersion===X)return ea(P,Y),ue}else Y.uniforms=Te.getUniforms(P),L!==null&&P.isNodeMaterial&&L.build(P,R,Y),P.onBeforeCompile(Y,A),ue=Te.acquireProgram(Y,B),Q.set(B,ue),I.uniforms=Y.uniforms;let le=I.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(le.clippingPlanes=Oe.uniform),ea(P,Y),I.needsLights=mh(P),I.lightsStateVersion=X,I.needsLights&&(le.ambientLightColor.value=D.state.ambient,le.lightProbe.value=D.state.probe,le.sunLights.value=D.state.sun,le.sunLightShadows.value=D.state.sunShadow,le.directionalLights.value=D.state.directional,le.directionalLightShadows.value=D.state.directionalShadow,le.spotLights.value=D.state.spot,le.spotLightShadows.value=D.state.spotShadow,le.rectAreaLights.value=D.state.rectArea,le.ltc_1.value=D.state.rectAreaLTC1,le.ltc_2.value=D.state.rectAreaLTC2,le.pointLights.value=D.state.point,le.pointLightShadows.value=D.state.pointShadow,le.hemisphereLights.value=D.state.hemi,le.sunShadowMatrix.value=D.state.sunShadowMatrix,le.sunShadowCascade.value=D.state.sunShadowCascade,le.directionalShadowMatrix.value=D.state.directionalShadowMatrix,le.spotLightMatrix.value=D.state.spotLightMatrix,le.spotLightMap.value=D.state.spotLightMap,le.pointShadowMatrix.value=D.state.pointShadowMatrix),I.lightProbeGrid=x.state.lightProbeGridArray.length>0,I.currentProgram=ue,I.uniformsList=null,ue}function dh(P){if(P.uniformsList===null){let H=P.currentProgram.getUniforms();P.uniformsList=Wr.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function ea(P,H){let R=J.get(P);R.outputColorSpace=H.outputColorSpace,R.batching=H.batching,R.batchingColor=H.batchingColor,R.instancing=H.instancing,R.instancingColor=H.instancingColor,R.instancingMorph=H.instancingMorph,R.skinning=H.skinning,R.morphTargets=H.morphTargets,R.morphNormals=H.morphNormals,R.morphColors=H.morphColors,R.morphTargetsCount=H.morphTargetsCount,R.numClippingPlanes=H.numClippingPlanes,R.numIntersection=H.numClipIntersection,R.vertexAlphas=H.vertexAlphas,R.vertexTangents=H.vertexTangents,R.toneMapping=H.toneMapping}function fh(P,H){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let R=0,I=P.length;R<I;R++){let D=P[R];if(D.texture!==null&&D.boundingBox.containsPoint(b))return D}return null}function ph(P,H,R,I,D){H.isScene!==!0&&(H=Ve),ee.resetTextureUnits();let V=H.fog,X=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?H.environment:null,Y=he===null?A.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:dt.workingColorSpace,B=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,Q=ge.get(I.envMap||X,B),ae=I.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ue=!!R.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),le=!!R.morphAttributes.position,He=!!R.morphAttributes.normal,gt=!!R.morphAttributes.color,tt=mi;I.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(tt=A.toneMapping);let nt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,vt=nt!==void 0?nt.length:0,Ae=J.get(I),bt=x.state.lights;if(me===!0&&(xe===!0||P!==te)){let Pt=P===te&&I.id===$;Oe.setState(I,P,Pt)}let ut=!1;I.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==bt.state.version||Ae.outputColorSpace!==Y||D.isBatchedMesh&&Ae.batching===!1||!D.isBatchedMesh&&Ae.batching===!0||D.isBatchedMesh&&Ae.batchingColor===!0&&D._colorsTexture===null||D.isBatchedMesh&&Ae.batchingColor===!1&&D._colorsTexture!==null||D.isInstancedMesh&&Ae.instancing===!1||!D.isInstancedMesh&&Ae.instancing===!0||D.isSkinnedMesh&&Ae.skinning===!1||!D.isSkinnedMesh&&Ae.skinning===!0||D.isInstancedMesh&&Ae.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ae.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ae.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ae.instancingMorph===!1&&D.morphTexture!==null||Ae.envMap!==Q||I.fog===!0&&Ae.fog!==V||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Oe.numPlanes||Ae.numIntersection!==Oe.numIntersection)||Ae.vertexAlphas!==ae||Ae.vertexTangents!==ue||Ae.morphTargets!==le||Ae.morphNormals!==He||Ae.morphColors!==gt||Ae.toneMapping!==tt||Ae.morphTargetsCount!==vt||!!Ae.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Ae.__version=I.version);let Ct=Ae.currentProgram;ut===!0&&(Ct=kn(I,H,D),L&&I.isNodeMaterial&&L.onUpdateProgram(I,Ct,Ae));let Bn=!1,Yi=!1,Ys=!1,At=Ct.getUniforms(),Vt=Ae.uniforms;if(T.useProgram(Ct.program)&&(Bn=!0,Yi=!0,Ys=!0),I.id!==$&&($=I.id,Yi=!0),Ae.needsLights){let Pt=fh(x.state.lightProbeGridArray,D);Ae.lightProbeGrid!==Pt&&(Ae.lightProbeGrid=Pt,Yi=!0)}if(Bn||te!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",P.projectionMatrix),At.setValue(G,"viewMatrix",P.matrixWorldInverse);let Ji=At.map.cameraPosition;Ji!==void 0&&Ji.setValue(G,ve.setFromMatrixPosition(P.matrixWorld)),U.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&At.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),te!==P&&(te=P,Yi=!0,Ys=!0)}if(Ae.needsLights&&(bt.state.sunShadowMap.length>0&&At.setValue(G,"sunShadowMap",bt.state.sunShadowMap,ee),bt.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",bt.state.directionalShadowMap,ee),bt.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",bt.state.spotShadowMap,ee),bt.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",bt.state.pointShadowMap,ee)),D.isSkinnedMesh){At.setOptional(G,D,"bindMatrix"),At.setOptional(G,D,"bindMatrixInverse");let Pt=D.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),At.setValue(G,"boneTexture",Pt.boneTexture,ee))}D.isBatchedMesh&&(At.setOptional(G,D,"batchingTexture"),At.setValue(G,"batchingTexture",D._matricesTexture,ee),At.setOptional(G,D,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",D._indirectTexture,ee),At.setOptional(G,D,"batchingColorTexture"),D._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",D._colorsTexture,ee));let Ki=R.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&W.update(D,R,Ct),(Yi||Ae.receiveShadow!==D.receiveShadow)&&(Ae.receiveShadow=D.receiveShadow,At.setValue(G,"receiveShadow",D.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&H.environment!==null&&(Vt.envMapIntensity.value=H.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Py()),Yi){if(At.setValue(G,"toneMappingExposure",A.toneMappingExposure),Ae.needsLights&&Uo(Vt,Ys),V&&I.fog===!0&&Be.refreshFogUniforms(Vt,V),Be.refreshMaterialUniforms(Vt,I,q,k,x.state.transmissionRenderTarget[P.id]),Ae.needsLights&&Ae.lightProbeGrid){let Pt=Ae.lightProbeGrid;Vt.probesSH.value=Pt.texture,Vt.probesMin.value.copy(Pt.boundingBox.min),Vt.probesMax.value.copy(Pt.boundingBox.max),Vt.probesResolution.value.copy(Pt.resolution)}Wr.upload(G,dh(Ae),Vt,ee)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Wr.upload(G,dh(Ae),Vt,ee),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&At.setValue(G,"center",D.center),At.setValue(G,"modelViewMatrix",D.modelViewMatrix),At.setValue(G,"normalMatrix",D.normalMatrix),At.setValue(G,"modelMatrix",D.matrixWorld),I.uniformsGroups!==void 0){let Pt=I.uniformsGroups;for(let Ji=0,Ks=Pt.length;Ji<Ks;Ji++){let Ud=Pt[Ji];fe.update(Ud,Ct),fe.bind(Ud,Ct)}}return Ct}function Uo(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.sunLights.needsUpdate=H,P.sunLightShadows.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function mh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(P,H,R){let I=J.get(P);I.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),J.get(P.texture).__webglTexture=H,J.get(P.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:R,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){let R=J.get(P);R.__webglFramebuffer=H,R.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,R=0){he=P,K=H,Z=R;let I=null,D=!1,V=!1;if(P){let Y=J.get(P);if(Y.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(G.FRAMEBUFFER,Y.__webglFramebuffer),se.copy(P.viewport),Ce.copy(P.scissor),Re=P.scissorTest,T.viewport(se),T.scissor(Ce),T.setScissorTest(Re),$=-1;return}else if(Y.__webglFramebuffer===void 0)ee.setupRenderTarget(P);else if(Y.__hasExternalTextures)ee.rebindTextures(P,J.get(P.texture).__webglTexture,J.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ae=P.depthTexture;if(Y.__boundDepthTexture!==ae){if(ae!==null&&J.has(ae)&&(P.width!==ae.image.width||P.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(P)}}let B=P.texture;(B.isData3DTexture||B.isDataArrayTexture||B.isCompressedArrayTexture)&&(V=!0);let Q=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Q[H])?I=Q[H][R]:I=Q[H],D=!0):P.samples>0&&ee.useMultisampledRTT(P)===!1?I=J.get(P).__webglMultisampledFramebuffer:Array.isArray(Q)?I=Q[R]:I=Q,se.copy(P.viewport),Ce.copy(P.scissor),Re=P.scissorTest}else se.copy(Ie).multiplyScalar(q).floor(),Ce.copy(Je).multiplyScalar(q).floor(),Re=$e;if(R!==0&&(I=F),T.bindFramebuffer(G.FRAMEBUFFER,I)&&T.drawBuffers(P,I),T.viewport(se),T.scissor(Ce),T.setScissorTest(Re),D){let Y=J.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Y.__webglTexture,R)}else if(V){let Y=H;for(let B=0;B<P.textures.length;B++){let Q=J.get(P.textures[B]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+B,Q.__webglTexture,R,Y)}}else if(P!==null&&R!==0){let Y=J.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Y.__webglTexture,R)}$=-1};function Oo(P){let H=J.get(P);return(H.__readFormat!==P.format||H.__readType!==P.type)&&(H.__readFormat=P.format,H.__readType=P.type,H.__formatReadable=U.textureFormatReadable(P.format),H.__typeReadable=U.textureTypeReadable(P.type)),H}this.readRenderTargetPixels=function(P,H,R,I,D,V,X,Y=0){if(!(P&&P.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&X!==void 0&&(B=B[X]),B){T.bindFramebuffer(G.FRAMEBUFFER,B);try{let Q=P.textures[Y],ae=Q.format,ue=Q.type;P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Y);let le=Oo(Q);if(le.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(le.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-I&&R>=0&&R<=P.height-D&&G.readPixels(H,R,I,D,oe.convert(ae),oe.convert(ue),V)}finally{let Q=he!==null?J.get(he).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(P,H,R,I,D,V,X,Y=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&X!==void 0&&(B=B[X]),B)if(H>=0&&H<=P.width-I&&R>=0&&R<=P.height-D){T.bindFramebuffer(G.FRAMEBUFFER,B);let Q=P.textures[Y],ae=Q.format,ue=Q.type;P.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Y);let le=Oo(Q);if(le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.bufferData(G.PIXEL_PACK_BUFFER,V.byteLength,G.STREAM_READ),G.readPixels(H,R,I,D,oe.convert(ae),oe.convert(ue),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let gt=he!==null?J.get(he).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,gt);let tt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cp(G,tt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,V),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(He),G.deleteSync(tt),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,R=0){let I=Math.pow(2,-R),D=Math.floor(P.image.width*I),V=Math.floor(P.image.height*I),X=H!==null?H.x:0,Y=H!==null?H.y:0;ee.setTexture2D(P,0),G.copyTexSubImage2D(G.TEXTURE_2D,R,0,0,X,Y,D,V),T.unbindTexture()},this.copyTextureToTexture=function(P,H,R=null,I=null,D=0,V=0){let X,Y,B,Q,ae,ue,le,He,gt,tt=P.isCompressedTexture?P.mipmaps[V]:P.image;if(R!==null)X=R.max.x-R.min.x,Y=R.max.y-R.min.y,B=R.isBox3?R.max.z-R.min.z:1,Q=R.min.x,ae=R.min.y,ue=R.isBox3?R.min.z:0;else{let Vt=Math.pow(2,-D);X=Math.floor(tt.width*Vt),Y=Math.floor(tt.height*Vt),P.isDataArrayTexture?B=tt.depth:P.isData3DTexture?B=Math.floor(tt.depth*Vt):B=1,Q=0,ae=0,ue=0}I!==null?(le=I.x,He=I.y,gt=I.z):(le=0,He=0,gt=0);let nt=oe.convert(H.format),vt=oe.convert(H.type),Ae;H.isData3DTexture?(ee.setTexture3D(H,0),Ae=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ee.setTexture2DArray(H,0),Ae=G.TEXTURE_2D_ARRAY):(ee.setTexture2D(H,0),Ae=G.TEXTURE_2D),T.activeTexture(G.TEXTURE0),T.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);let bt=T.getParameter(G.UNPACK_ROW_LENGTH),ut=T.getParameter(G.UNPACK_IMAGE_HEIGHT),Ct=T.getParameter(G.UNPACK_SKIP_PIXELS),Bn=T.getParameter(G.UNPACK_SKIP_ROWS),Yi=T.getParameter(G.UNPACK_SKIP_IMAGES);T.pixelStorei(G.UNPACK_ROW_LENGTH,tt.width),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tt.height),T.pixelStorei(G.UNPACK_SKIP_PIXELS,Q),T.pixelStorei(G.UNPACK_SKIP_ROWS,ae),T.pixelStorei(G.UNPACK_SKIP_IMAGES,ue);let Ys=P.isDataArrayTexture||P.isData3DTexture,At=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){let Vt=J.get(P),Ki=J.get(H),Pt=J.get(Vt.__renderTarget),Ji=J.get(Ki.__renderTarget);T.bindFramebuffer(G.READ_FRAMEBUFFER,Pt.__webglFramebuffer),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Ks=0;Ks<B;Ks++)Ys&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(P).__webglTexture,D,ue+Ks),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(H).__webglTexture,V,gt+Ks)),G.blitFramebuffer(Q,ae,X,Y,le,He,X,Y,G.DEPTH_BUFFER_BIT,G.NEAREST);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(D!==0||P.isRenderTargetTexture||J.has(P)){let Vt=J.get(P),Ki=J.get(H);T.bindFramebuffer(G.READ_FRAMEBUFFER,O),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,z);for(let Pt=0;Pt<B;Pt++)Ys?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.__webglTexture,D,ue+Pt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vt.__webglTexture,D),At?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ki.__webglTexture,V,gt+Pt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ki.__webglTexture,V),D!==0?G.blitFramebuffer(Q,ae,X,Y,le,He,X,Y,G.COLOR_BUFFER_BIT,G.NEAREST):At?G.copyTexSubImage3D(Ae,V,le,He,gt+Pt,Q,ae,X,Y):G.copyTexSubImage2D(Ae,V,le,He,Q,ae,X,Y);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else At?P.isDataTexture||P.isData3DTexture?G.texSubImage3D(Ae,V,le,He,gt,X,Y,B,nt,vt,tt.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Ae,V,le,He,gt,X,Y,B,nt,tt.data):G.texSubImage3D(Ae,V,le,He,gt,X,Y,B,nt,vt,tt):P.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,V,le,He,X,Y,nt,vt,tt.data):P.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,V,le,He,tt.width,tt.height,nt,tt.data):G.texSubImage2D(G.TEXTURE_2D,V,le,He,X,Y,nt,vt,tt);T.pixelStorei(G.UNPACK_ROW_LENGTH,bt),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),T.pixelStorei(G.UNPACK_SKIP_PIXELS,Ct),T.pixelStorei(G.UNPACK_SKIP_ROWS,Bn),T.pixelStorei(G.UNPACK_SKIP_IMAGES,Yi),V===0&&H.generateMipmaps&&G.generateMipmap(Ae),T.unbindTexture()},this.initRenderTarget=function(P){J.get(P).__webglFramebuffer===void 0&&ee.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ee.setTextureCube(P,0):P.isData3DTexture?ee.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ee.setTexture2DArray(P,0):ee.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){K=0,Z=0,he=null,T.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var yo=new N;function ri(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;yo.copy(e),yo[n]=0,yo.normalize();let c=.5*a/(a+o),h=1-yo.angleTo(i)/l;return Math.sign(yo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Bt=class i extends rn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new N,c=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,y=new N,m=.5/a;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[M+0]=ri(y,c,"z","y",r,n),f[M+1]=1-ri(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),f[M+0]=1-ri(y,c,"z","y",r,n),f[M+1]=1-ri(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),f[M+0]=1-ri(y,c,"x","z",r,e),f[M+1]=ri(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),f[M+0]=1-ri(y,c,"x","z",r,e),f[M+1]=1-ri(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),f[M+0]=1-ri(y,c,"x","y",r,e),f[M+1]=1-ri(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),f[M+0]=ri(y,c,"x","y",r,e),f[M+1]=1-ri(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Iy=Object.freeze({width:1.345,length:1.964,height:.05,legs:8});function jp(i,e=new Fe){let t=[],n=new N;i.updateWorldMatrix(!0,!0);let s=-1/0;i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry.attributes.position,l=new Fe().multiplyMatrices(e,a.matrixWorld);for(let c=0;c<o.count;c++)n.fromBufferAttribute(o,c).applyMatrix4(l),s=Math.max(s,n.z)}),i.traverse(a=>{if(!a.isMesh||a.material.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Fe().multiplyMatrices(e,a.matrixWorld);for(let u=0;u<(c?.count||l.count);u+=3){let d=[];for(let f=0;f<3;f++)n.fromBufferAttribute(l,c?c.getX(u+f):u+f).applyMatrix4(h),d.push(n.clone());if(d.every(f=>f.z>s-.014&&Math.abs(f.x)<.09))for(let f of d)t.push(f.x,f.y,f.z)}});let r=new ot;return r.setAttribute("position",new Ue(t,3)),r.computeVertexNormals(),r}function Ri(i,e,t,n,s=.002){let r=new we(new Bt(...e,2,Math.min(s,...e.map(a=>a/3))),n);return r.position.set(...t),r.castShadow=r.receiveShadow=!0,i.add(r),r}function Yp(i,e=!1){let t=new qe;t.name=e?"Slimline II tall reference":"Slimline II reference";let{width:n,length:s}=Iy,r=e?1.88:1.83,a=-.62;for(let l of[-n/2+.016,n/2-.016])Ri(t,[.032,.05,s],[l,r,a],i.darkmetal),Ri(t,[.006,.003,s-.04],[l,r+.026,a],i.trim,5e-4);for(let l of[-1,1])Ri(t,[n-.032,.05,.032],[0,r,a+l*(s/2-.016)],i.darkmetal);for(let l=0;l<10;l++){let c=a-s/2+.1+l*(s-.2)/9;Ri(t,[n-.064,.024,.09],[0,r-.006,c],i.darkmetal),Ri(t,[n-.08,.003,.006],[0,r+.007,c],i.trim,5e-4)}for(let l of[-1,1])for(let c of[-1.47,-.87,-.27,.27]){let h=r-.025-1.695,u=Ri(t,[.026,h,.1],[l*.675,1.695+h/2,c],i.darkmetal);u.name="Gutter mounting leg",u.rotation.z=l*.29,Ri(t,[.09,.018,.115],[l*.712,1.69,c],i.rubber),Ri(t,[.018,.052,.103],[l*.751,1.672,c],i.darkmetal);for(let d of[-.015,.015]){let f=new we(new zt(.006,.006,.02,6),i.metal);f.rotation.z=Math.PI/2,f.position.set(l*.765,1.691+d,c),t.add(f)}}let o=Ri(t,[n-.08,.092,.009],[0,r-.075,a+s/2-.015],i.darkmetal);return o.rotation.x=-.48,t}function Kp(i){let e=new qe;e.name="Contoured four-door rain visors";let t=[[[.35,1.641],[-.316,1.641],[-.316,1.598],[.326,1.598],[.458,1.362],[.492,1.382]],[[-.435,1.641],[-1.184,1.641],[-1.184,1.595],[-.435,1.595]]];for(let n of[-1,1])for(let s of t){let r=[],a=[],o=s.length;for(let u of[0,.004])for(let[d,f]of s)r.push(n*(.746-(f-1.14)*.105+.018+u),f,d);let l=s.map(([u,d])=>new ie(u,d));for(let[u,d,f]of Jn.triangulateShape(l,[]))a.push(u,d,f,f+o,d+o,u+o);for(let u=0;u<o;u++){let d=(u+1)%o;a.push(u,d,d+o,u,d+o,u+o)}let c=new ot;c.setAttribute("position",new Ue(r,3)),c.setIndex(a),c.computeVertexNormals();let h=new we(c,i);h.castShadow=!1,e.add(h)}return e}function Jp(i,e){let t=new qe;t.name="Moulded spare-wheel centre cover",t.position.z=.1;let n=[[0,.035],[.18,.035],[.215,.031],[.232,.02],[.239,.008],[.239,-.017],[.23,-.022]],s=new we(new pi(n.toReversed().map(a=>new ie(...a)),96),i.trim);s.name="Spare cover shell",s.rotation.x=-Math.PI/2,s.position.set(0,.995,-2.045),s.castShadow=!0,t.add(s);let r=Ri(t,[.36,.02,.005],[0,.922,-2.083],i.darkmetal,.002);if(r.rotation.z=-.04,e?.attributes.position.count){let a=e.clone();a.computeBoundingBox();let o=a.boundingBox.getCenter(new N);a.translate(-o.x,-o.y,-o.z),a.scale(.63,.63,.63),a.rotateY(Math.PI),a.translate(0,1.075,-2.086);let l=new we(a,i.chrome);l.name="Spare cover Suzuki emblem",t.add(l)}return t}function kc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ot,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let g=Zp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Zp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Zt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function $p(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,w=o.length;M<w;M++){let b=o[M],v=i.attributes[b];l[b]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let x=i.morphAttributes[b];x&&(c[b]||(c[b]=[]),x.forEach((E,S)=>{let _=new E.array.constructor(E.count*E.itemSize);c[b][S]=new E.constructor(_,E.itemSize,E.normalized)}))}let f=e*.5,g=Math.log10(1/e),y=Math.pow(10,g),m=f*y;for(let M=0;M<r;M++){let w=n?n.getX(M):M,b="";for(let v=0,x=o.length;v<x;v++){let E=o[v],S=i.getAttribute(E),_=S.itemSize;for(let A=0;A<_;A++)b+=`${Math.trunc(S[u[A]](w)*y+m)},`}if(b in t)h.push(t[b]);else{for(let v=0,x=o.length;v<x;v++){let E=o[v],S=i.getAttribute(E),_=i.morphAttributes[E],A=S.itemSize,C=l[E],L=c[E];for(let F=0;F<A;F++){let O=u[F],z=d[F];if(C[z](a,S[O](w)),_)for(let K=0,Z=_.length;K<Z;K++)L[K][z](a,_[K][O](w))}}t[b]=a,h.push(a),a++}}let p=i.clone();for(let M in i.attributes){let w=l[M];if(p.setAttribute(M,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),M in c)for(let b=0;b<c[M].length;b++){let v=c[M][b];p.morphAttributes[M][b]=new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)}}return p.setIndex(h),p}function Hu(i,e){if(e===xu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zr||e===bo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===zr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Qp="https://www.skinny-jim.com/shop/p/",em="https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html",Dy=Object.freeze({skinnyjim_backbone:{sourceURL:Qp+"backbone-rear-door-cargo-mount",bodyStyles:["3door","5door"],width:.315,height:.585,doorClearance:.112},skinnyjim_jerry_tray:{sourceURL:Qp+"jerry-can-gas-cargo-carrier",bodyStyles:["3door","5door"],internalWidth:.37,internalDepth:.205,upstand:.075,requires:["skinnyjim_backbone"]},suzuki_nomade_flatrack:{sourceURL:em,bodyStyles:["5door"],width:1.43,length:1.509,height:.177},suzuki_nomade_steelwheel:{sourceURL:em,bodyStyles:["5door"],diameter:.381,beadWidth:.1397,offset:null}});function Os(i,e,t,n,s=[0,0,0]){let r=new we(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function En(i,e,t,n,s,r=.002){return Os(i,new Bt(...e,2,Math.min(r,...e.map(a=>a/3))),n,s,t)}function Xr(i,e,t,n,s=.006){let r=new Qt,a=i-t/2,o=e-n/2;return s=Math.min(s,t/2,n/2),r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function Bc(i,e,t,n,s=[0,0,0],r=.004){return Os(i,new Sn(e,{depth:r,bevelEnabled:!0,bevelSize:7e-4,bevelThickness:7e-4,bevelSegments:1,curveSegments:6}),t,n,s)}function Mo(i,e,t,n,s){let r=Os(i,new zt(.0055,.0055,.006,6),s,"Stainless mounting bolt",[e,t,n]);return r.rotation.x=Math.PI/2,r}function Wu(i,e){return i.name=e,i.userData.cataloguePart={...Dy[e],id:e,previewKind:"representative",disclosure:"Locally authored from public product photos and dimensions; not exact CAD or certified fitment."},i}function tm(i){let e=Wu(new qe,"skinnyjim_backbone");e.position.z=.078;let t=[[-.1575,-.2925],[.095,-.2925],[.1575,-.2475],[.1,-.17],[.08,-.07],[.08,.07],[.105,.18],[.1575,.215],[.035,.2925],[-.1575,.2925]],n=new Ot(t.map(a=>new ie(...a)));for(let a of[-.19,-.04,.12,.22])n.holes.push(Xr(-.045,a,.031,a===-.04?.072:.031));for(let a of[-.24,.15])for(let o of[-.115,-.077,-.039]){let l=new Qt;l.absarc(o,a,.0035,0,Math.PI*2,!1),n.holes.push(l)}let s=Bc(e,n,i.darkmetal,"Backbone perforated main plate",[-.5275,1.035,-1.928]);s.userData.publishedDimensions={width:.315,height:.585},En(e,[.004,.585,.018],[-.687,1.035,-1.918],i.darkmetal,"Backbone folded hinge edge");for(let a of[.76,1.24])En(e,[.055,.045,.112],[-.665,a,-1.868],i.darkmetal,"Door hinge standoff"),Mo(e,-.665,a,-1.935,i.metal);let r=new Ot([[-.41,-.15],[-.08,-.15],[-.08,.15],[-.41,.15]].map(a=>new ie(...a)));for(let a of[-.085,0,.085])r.holes.push(Xr(-.27,a,.027,.033));Bc(e,r,i.darkmetal,"Spare mount attachment bridge",[0,1.005,-1.841]),En(e,[.04,.3,.086],[-.4,1.005,-1.882],i.darkmetal,"Bridge folded offset");for(let a of[.9,1.11])Mo(e,-.12,a,-1.848,i.metal);for(let a of[.8,1.28])Mo(e,-.49,a,-1.935,i.metal);return e}function nm(i){let e=Wu(new qe,"skinnyjim_jerry_tray"),t=.37,n=.205,s=.075,r=En(e,[t,.004,n],[0,0,0],i.darkmetal,"Jerry tray floor"),a=En(e,[t-.014,.003,n-.014],[0,.0035,0],i.rubber,"Neoprene tray pad");for(let o of[-1,1]){let l=new Ot(Xr(0,s/2,t,s,.012).getPoints(8));for(let u of[-.135,0,.135])l.holes.push(Xr(u,.039,u===0?.09:.035,.024));Bc(e,l,i.darkmetal,"Slotted tray upstand",[0,.002,o*(n/2+.002)]);let c=new Ot(Xr(0,s/2,n,s,.012).getPoints(8));c.holes.push(Xr(0,.04,.072,.025));let h=Bc(e,c,i.darkmetal,"Slotted tray end",[o*(t/2+.002),.002,0]);h.rotation.y=Math.PI/2}for(let o of[-.12,.12])En(e,[.025,.0025,n-.01],[o,.006,0],i.canvas,"Webbing strap"),En(e,[.034,.009,.029],[o,.011,-.032],i.trim,"Cam buckle"),En(e,[.019,.003,.015],[o,.016,-.032],i.metal,"Buckle lever");for(let o of[-.1,.1])En(e,[.035,.066,.004],[o,.036,n/2+.009],i.darkmetal,"Tray mounting flange"),Mo(e,o,.049,n/2+.014,i.metal);return e.position.set(-.52,.843,-1.961),r.userData.internalFootprint=[t,n],a.userData.notIncluded="Fuel container",e}function im(i){let e=Wu(new qe,"suzuki_nomade_flatrack"),t=1.43,n=1.509,s=1.8,r=-.52;for(let a of[-t/2+.019,t/2-.019])En(e,[.038,.035,n],[a,s,r],i.darkmetal,"OEM rack perimeter",.008);for(let a of[-1,1])En(e,[t-.038,.035,.038],[0,s,r+a*(n/2-.019)],i.darkmetal,"OEM rack perimeter",.008);for(let a=0;a<5;a++){let o=r-n/2+.16+a*(n-.32)/4;En(e,[t-.075,.024,.12],[0,s-.004,o],i.darkmetal,"OEM rack slat");for(let l of[-.037,0,.037])En(e,[t-.086,.002,.005],[0,s+.009,o+l],i.trim,"Slat anti-slip channel",5e-4)}for(let a of[-1,1])for(let o of[r-n/2+.1,r,r+n/2-.1]){let l=En(e,[.028,.142,.084],[a*.681,s-.088,o],i.darkmetal,"OEM gutter mounting leg");l.rotation.z=a*.22,En(e,[.065,.013,.09],[a*.714,s-.153,o],i.rubber,"Gutter pad"),En(e,[.012,.046,.08],[a*.752,s-.136,o],i.darkmetal,"Gutter clamp");let c=Mo(e,0,0,0,i.metal);c.rotation.set(0,0,Math.PI/2),c.position.set(a*.763,s-.136,o)}return e}function Ly(i){let e=new qe;e.name="Nomade pressed steel wheel";let t=new Ot;t.absarc(0,0,.179,0,Math.PI*2,!1);let n=new Qt;n.absarc(0,0,.042,0,Math.PI*2,!1),t.holes.push(n);for(let b=0;b<10;b++){let v=b*Math.PI/5,x=new Qt;x.absellipse(Math.cos(v)*.127,Math.sin(v)*.127,.024,.027,v,v+Math.PI*2,!1),t.holes.push(x)}for(let b=0;b<5;b++){let v=b*Math.PI*2/5,x=new Qt;x.absarc(Math.cos(v)*.06985,Math.sin(v)*.06985,.008,0,Math.PI*2,!1),t.holes.push(x)}let s=new Sn(t,{depth:.003,bevelEnabled:!0,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:12}),r=[],a=[],o=[],l=s.attributes.position,c=s.attributes.normal,h=s.attributes.uv,u=(b,v)=>b.map((x,E)=>(x+v[E])/2),d=(b,v,x,E=0)=>{let S=(_,A)=>Math.hypot(_[0]-A[0],_[1]-A[1],_[2]-A[2]);if(E<4&&Math.max(S(b,v),S(v,x),S(x,b))>.028){let _=u(b,v),A=u(v,x),C=u(x,b);d(b,_,C,E+1),d(_,v,A,E+1),d(C,A,x,E+1),d(_,A,C,E+1);return}for(let _ of[b,v,x])r.push(..._.slice(0,3)),a.push(..._.slice(3,6)),o.push(..._.slice(6))};for(let b=0;b<l.count;b+=3)d(...[0,1,2].map(v=>[l.getX(b+v),l.getY(b+v),l.getZ(b+v),c.getX(b+v),c.getY(b+v),c.getZ(b+v),h.getX(b+v),h.getY(b+v)]));let f=new ot;f.setAttribute("position",new Ue(r,3)),f.setAttribute("normal",new Ue(a,3)),f.setAttribute("uv",new Ue(o,2));let g=$p(f,1e-6);s.dispose(),f.dispose();let y=g.attributes.position,m=g.attributes.normal;for(let b=0;b<y.count;b++){let v=y.getX(b),x=y.getY(b),E=Math.hypot(v,x),S=Math.min(1,Math.max(0,(E-.067)/.112));y.setZ(b,y.getZ(b)-.023*Math.sin(S*Math.PI)**2);let _=E>.067&&E<.179?-.023*Math.PI/.112*Math.sin(2*Math.PI*S):0,A=m.getX(b)-_*v/(E||1)*m.getZ(b),C=m.getY(b)-_*x/(E||1)*m.getZ(b),L=m.getZ(b),F=Math.hypot(A,C,L)||1;m.setXYZ(b,A/F,C/F,L/F)}Os(e,g,i,"Ten-hole pressed steel disc");let p=[[.177,-.014],[.181,-.007],[.187,.005],[.1905,.007],[.1905,.002],[.187,-.003],[.18,-.015],[.173,-.045],[.169,-.083],[.181,-.132],[.1905,-.133]],M=Os(e,new pi(p.map(b=>new ie(...b)),96),i,"Rolled steel lip and barrel");M.rotation.x=Math.PI/2;for(let b=0;b<5;b++){let v=b*Math.PI*2/5,x=Os(e,new zt(.0068,.0068,.01,6),i,"Steel wheel lug",[Math.cos(v)*.06985,Math.sin(v)*.06985,.006]);x.rotation.x=Math.PI/2}let w=Os(e,new zt(.035,.035,.029,48),i,"Exposed centre hub",[0,0,-.004]);return w.rotation.x=Math.PI/2,e}var Vu=new WeakMap;function qu(i,e=!1){if(!i?.traverse)return 0;let t=Vu.get(i);if(!e){if(!t)return 0;for(let[s,r]of t.hidden)s.visible=r;for(let s of t.added)s.removeFromParent(),s.traverse(r=>r.geometry?.dispose());return t.material.dispose(),Vu.delete(i),t.added.length}if(t)return t.added.length;t={hidden:[],added:[],material:new Ke({name:"CatalogueSteelWheel",color:"#303438",roughness:.58,metalness:.3})};let n=[];i.traverse(s=>{(["StockWheels","AllTerrainWheels"].includes(s.name)||!s.name&&s.children.some(r=>r.isMesh&&r.material?.name==="TyreRubber"))&&n.push(s)});for(let s of n){let r=!!s.name;s.updateWorldMatrix(!0,!0);let a=new qt,o=new Map,l=new N,c=s.matrixWorld.clone().invert();if(s.traverse(d=>{if(!d.isMesh||(["MachinedAlloy","WheelGunmetal"].includes(d.material?.name)&&(t.hidden.push([d,d.visible]),d.visible=!1),d.material?.name!=="TyreRubber"))return;let f=d.geometry.attributes.position,g=c.clone().multiply(d.matrixWorld);for(let y=0;y<f.count;y++)if(l.fromBufferAttribute(f,y).applyMatrix4(g),a.expandByPoint(l),r){let m=`${Math.sign(l.x)},${Math.sign(l.z)}`;o.has(m)||o.set(m,new qt),o.get(m).expandByPoint(l)}}),a.isEmpty())continue;let h=a.getCenter(new N),u=r?[...o.values()].map(d=>{let f=d.getCenter(new N);return{side:Math.sign(f.x),x:f.x,y:f.y,z:f.z}}):[{side:Math.sign(s.parent?.position.x||1),x:h.x,y:h.y,z:h.z}];for(let d of u){let f=Ly(t.material);f.position.set(d.x+d.side*.086,d.y,d.z),f.rotation.y=d.side*Math.PI/2,s.add(f),t.added.push(f)}}return t.added.length?(Vu.set(i,t),t.added.length):(t.material.dispose(),0)}function sm(i){return qu(i,!1)}var Ny=Object.freeze(["canvas","tweed","houndstooth","leather"]),ks=i=>Ny.includes(i)?i:"canvas";function Bs(i){return i.traverse(e=>{if(!e.isMesh||!e.material?.userData.ownsTextures)return;let t=e.geometry.attributes.position,n=e.geometry.attributes.normal,s=e.geometry.attributes.uv;if(!(!s||!n)){for(let r=0;r<t.count;r++){let a=Math.abs(n.getX(r)),o=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r));s.setXY(r,a>o&&a>l?t.getZ(r):t.getX(r),o>a&&o>l?t.getZ(r):t.getY(r))}s.needsUpdate=!0}}),i}function Fy(i="canvas"){i=ks(i);let e=256,t=new Uint8Array(e*e*4),n=new Uint8Array(e*e*4),s=741;for(let a=0;a<e;a++)for(let o=0;o<e;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=s/4294967296-.5,c=Math.sin(o*Math.PI/2),h=Math.cos(a*Math.PI/2),u=Math.floor(o/8),d=Math.floor(a/8),f=222+l*16+c*8+h*6,g=238,y=128+c*19+h*16+l*22;if(i==="houndstooth"&&(f=(((u+d)%4<2?u%8<4:d%8<4)?64:238)+c*7+h*5+l*12),i==="tweed"&&(f=174+((u+d)%3===0?37:0)+c*16+h*14+l*28),i==="leather"){let p=l>.44?-36:0;f=231+l*9+p*.25,y=141+l*40+p,g=157+l*28}let m=(a*e+o)*4;for(let p=0;p<3;p++)t[m+p]=tn.clamp(f,0,255),n[m+p]=tn.clamp(p===1?g:y,0,255);t[m+3]=n[m+3]=255}function r(a,o){let l=new Mn(a,e,e);return l.colorSpace=o,l.wrapS=l.wrapT=$t,l.repeat.set(i==="leather"?10:i==="houndstooth"?5:14,i==="leather"?10:i==="houndstooth"?5:14),l.generateMipmaps=!0,l.minFilter=In,l.anisotropy=4,l.needsUpdate=!0,l}return{map:r(t,xt),bump:r(n,bi)}}function qn(i="canvas",e="#a38b69"){i=ks(i);let t=Fy(i),n=new Gt({name:"UpgradeFabric_"+i,color:e,map:t.map,bumpMap:t.bump,bumpScale:i==="leather"?18e-5:45e-5,roughnessMap:t.bump,roughness:i==="leather"?.85:1,metalness:0,sheen:i==="leather"?0:.25,sheenRoughness:.85,sheenColor:"#aaa69c",clearcoat:i==="leather"?.08:0,envMapIntensity:.25});return n.userData.ownsTextures=!0,n.addEventListener("dispose",()=>{t.map.dispose(),t.bump.dispose()}),n}var Uy=Object.freeze({mod_reardoor_molle:{sourceURL:"https://www.mod.equipment/products/molly",bodyStyles:["3door","5door"],panelWidth:.3,panelHeight:.2675,cutout:.025,requires:"Screws into rear-door plastic trim; check vehicle-specific installation."},mod_halfmolly_5door:{sourceURL:"https://www.mod.equipment/products/half-molly-set-jimny-4-xl",bodyStyles:["5door"],panelWidth:.235,panelHeight:.2,requires:"Existing lower M6 points plus upper screws into plastic window trim."},exploresetups_drawer_5door:{sourceURL:"https://exploresetups.com/products/jimny-xl-5-door-drawer-system",bodyStyles:["5door"],width:1.11,depth:.46,height:.25,requires:"Matching Jimny XL false floor, sold separately; no sleeping platform shown."}});function fs(i,e,t,n,s=[0,0,0]){let r=new we(e,t);return r.name=n,r.position.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function mn(i,e,t,n,s,r,a,o,l,c=.002){return fs(i,new Bt(e,t,n,2,Math.min(c,e/3,t/3,n/3)),o,l,[s,r,a])}function Xu(i,e,t,n,s=.003){let r=new Qt,a=i-t/2,o=e-n/2;return r.moveTo(a+s,o),r.lineTo(a+t-s,o),r.quadraticCurveTo(a+t,o,a+t,o+s),r.lineTo(a+t,o+n-s),r.quadraticCurveTo(a+t,o+n,a+t-s,o+n),r.lineTo(a+s,o+n),r.quadraticCurveTo(a,o+n,a,o+n-s),r.lineTo(a,o+s),r.quadraticCurveTo(a,o,a+s,o),r}function rm(i,e,t,n){let s=new Ot(Xu(0,0,i,e,.008).getPoints(8));for(let r=0;r<t;r++)for(let a=0;a<n;a++)s.holes.push(Xu((r-(t-1)/2)*.038,(a-(n-1)/2)*.037,.025,.025));return new Sn(s,{depth:.002,bevelEnabled:!0,bevelSize:45e-5,bevelThickness:45e-5,bevelSegments:1,curveSegments:3})}function am(i,e,t,n,s){let r=fs(i,new zt(.0045,.0045,.003,6),s,"Panel screw",[e,t,n]);return r.rotation.x=Math.PI/2,r}function ju(i){let e=new qe;return e.name=i,e.userData.cataloguePart={id:i,...Uy[i],previewKind:"representative",disclosure:"Original photo/dimension-guided approximation, not manufacturer CAD or certified fitment."},e}function zc(i,e="5door"){let t=ju("mod_reardoor_molle"),n=-1.669+(e==="3door"?.17:0);for(let s of[-.172,.172]){let r=fs(t,rm(.3,.2675,7,6),i.darkmetal,"Rear-door perforated panel",[s,.955,n+.012]);r.userData.publishedSize=[.3,.2675];for(let a of[-.1375,.1375])for(let o of[-.114,.114])mn(t,.014,.014,.012,s+a,.955+o,n+.005,i.rubber,"Rear-door panel spacer"),am(t,s+a,.955+o,n+.017,i.metal)}return t}function Gc(i){let e=ju("mod_halfmolly_5door");for(let t of[-1,1]){let n=new qe;n.position.set(t*.651,1.24,-1.36),n.rotation.y=t*Math.PI/2,e.add(n);let s=fs(n,rm(.235,.2,5,4),i.darkmetal,"Rear-window pocket panel");s.userData.publishedSize=[.235,.2],mn(n,.235,.003,.042,0,-.098,.02,i.darkmetal,"Folded pocket base");for(let r of[-.112,.112]){mn(n,.012,.2,.042,r,0,.02,i.darkmetal,"Pocket side return"),am(n,r,.085,.006,i.metal);let a=fs(n,new Xt(.009,.002,6,18),i.metal,"Lower M6 lashing eye",[r,-.087,.012]);a.rotation.x=.3}}return e}function Hc(i,{open:e=!1}={}){let t=ju("exploresetups_drawer_5door"),n=qn("tweed","#373b3d");n.name="DrawerCharcoalCarpet",n.roughness=1,n.metalness=0,n.envMapIntensity=.15;let s=-1.445,r=.699,a=r+.25;mn(t,1.11,.018,.46,0,r-.013,s,i.trim,"Required false-floor mounting surface");let o=mn(t,.83,.015,.46,0,a-.0075,s,n,"Carpeted drawer top");o.userData.disposableMaterial=!0;for(let l of[-.4075,0,.4075])mn(t,.015,.235,.46,l,r+.1175,s,n,"Drawer carcass partition");mn(t,.83,.015,.46,0,r+.0075,s,n,"Drawer carcass base"),mn(t,.83,.235,.015,0,r+.1175,s+.2225,n,"Drawer rear carcass");for(let l of[-.2075,.2075]){mn(t,.389,.214,.016,l,r+.122,s-.228-(e?.3:0),n,"Flush drawer front");let c=new qe;c.name="DrawerLatchAssembly",c.position.z=e?-.3:0,t.add(c),mn(c,.071,.052,.004,l,r+.12,s-.239,i.metal,"Recessed stainless latch surround",.006),mn(c,.054,.036,.005,l,r+.12,s-.242,i.trim,"Latch recess",.004),mn(c,.035,.011,.006,l,r+.12,s-.247,i.metal,"Folding latch pull",.003);let h=fs(c,new zt(.005,.005,.003,16),i.metal,"Drawer key cylinder",[l+.022,r+.12,s-.245]);if(h.rotation.x=Math.PI/2,e){mn(t,.37,.012,.43,l,r+.025,s-.3,n,"Open drawer tray");for(let u of[-.182,.182])mn(t,.012,.18,.43,l+u,r+.115,s-.3,n,"Open drawer side"),mn(t,.008,.024,.35,l+u,r+.08,s-.24,i.metal,"Telescopic drawer slide");mn(t,.37,.18,.012,l,r+.115,s-.09,n,"Open drawer rear")}}for(let l of[-1,1]){let c=new Ot(Xu(l*.485,0,.14,.46,.012).getPoints(6)),h=new Qt;h.absarc(l*.485,-.09,.008,0,Math.PI*2),c.holes.push(h);let u=fs(t,new Sn(c,{depth:.015,bevelEnabled:!1}),n,"Removable carpeted wing",[0,a-.015,s]);u.rotation.x=-Math.PI/2,mn(t,.14,.235,.015,l*.485,r+.1175,s-.2225,n,"Side wing fixed face");for(let d of[s-.17,s+.17]){let f=fs(t,new Xt(.014,.003,8,24),i.metal,"Cargo tie-down ring",[l*.36,a+.008,d]);f.rotation.x=Math.PI/2}}return mn(t,.828,.018,.012,0,a-.006,s-.231,i.metal,"Aluminium protective front edge"),t.userData.publishedEnvelope=[1.11,.25,.46],Bs(t)}var Oy=Object.freeze({body:"5door",rearDeckWidth:1.11,rearDeckLength:1.165,extensionLength:.685,bedLength:1.83,bedWidth:.65,bedThickness:.075});function Yt(i,e,t,n,s,r,a,o,l,c=.005){let h=new we(new Bt(t,n,s,2,Math.min(c,t/3,n/3,s/3)),l);return h.name=e,h.position.set(r,a,o),h.castShadow=h.receiveShadow=!0,i.add(h),h}function jr(i,e){return i.userData.ownedMaterials??=[],i.userData.ownedMaterials.push(e),e}function om(i,e,t,n=.0012){let s=new Qn,r=e.map(o=>new N(...o));for(let o=1;o<r.length;o++)s.add(new $n(r[o-1],r[o]));let a=new we(new Vn(s,e.length*4,n,5,!1),t);return a.name="Stitched piping",i.add(a),a}function lm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new qe;s.name="UpholsteredDoorInserts";let r=jr(s,qn(ks(t),n)),a=jr(s,new Ke({color:"#d5c6aa",roughness:.9}));for(let o of[-1,1])for(let[l,c]of e==="3door"?[[0,1.04]]:[[.1,.74],[-.84,.6]]){let h=o*.676,u=Yt(s,"Padded door insert",.012,.185,c,h,.875,l,r,.012);Yt(s,"Upholstered upper door strip",.012,.028,c,h,1.088,l,r,.006),Yt(s,"Wrapped door armrest",.077,.047,.15,o*.66,1.005,l-.06,r,.013);let d=u.geometry.attributes.uv,f=u.geometry.attributes.position;for(let w=0;w<d.count;w++)d.setXY(w,f.getZ(w),f.getY(w));d.needsUpdate=!0;let g=o*.668,y=.796,m=.954,p=l-c/2+.018,M=l+c/2-.018;om(s,[[g,y,p],[g,m,p],[g,m,M],[g,y,M],[g,y,p]],a,.0012);for(let w=p+.02;w<M-.01;w+=.011)Yt(s,"Door top stitch",8e-4,.0012,.0045,o*.6675,m-.006,w,a,3e-4)}return Bs(s)}function cm(i,{body:e="5door",fabric:t="canvas",colour:n="#a38b69"}={}){let s=new qe;s.name="RearSeatUpholstery";let r=jr(s,qn(t,n)),a=e==="3door"?.17:0;for(let o of[-.29,.29]){let l=Yt(s,"Rear seat patterned back insert",.45,.285,.008,o,1.035,-.995+a,r,.003),c=Yt(s,"Rear seat patterned cushion insert",.45,.008,.29,o,.879,-.83+a,r,.003);for(let h of[l,c]){let u=h.geometry.attributes.position,d=h.geometry.attributes.uv;for(let f=0;f<u.count;f++)d.setXY(f,u.getX(f),h===l?u.getY(f):u.getZ(f));d.needsUpdate=!0}}return s}function hm(i,{camp:e=!1,drawers:t=!1}={}){let n=new qe;n.name="TouringInterior",n.userData.layout=Oy;let s=jr(n,qn("tweed","#45484a")),r=jr(n,qn("canvas","#466278")),a=jr(n,new Ke({color:"#b9c1b3",roughness:1}));n.add(Hc(i,{open:t}),Gc(i),zc(i));for(let l of[-.279,.279]){let c=Yt(n,"Split carpeted rear platform",.552,.015,.705,l,.9415,-.8625,s,.004);c.userData.publishedDimensions=[.555,.705,.015];for(let h of[-1.12,-.61])Yt(n,"Bolted platform support",.025,.235,.03,l,.817,h,i.darkmetal,.003);Yt(n,"Platform aluminium edge",.545,.018,.009,l,.942,-.5075,i.metal,.002)}for(let l of[-.29,.29])Yt(n,"Folded rear seat back",.56,.09,.41,l,.87,-.87,i.seat,.025);let o=Yt(n,"Strapped touring storage case",.37,.22,.42,-.3,1.067,-.86,i.trim,.024);Yt(n,"Storage case lid",.38,.024,.43,-.3,1.185,-.86,i.darkmetal,.008);for(let l of[-.43,-.17])Yt(n,"Case restraint webbing",.022,.003,.46,l,1.2,-.86,i.seat,.001),Yt(n,"Case restraint side",.022,.24,.003,l,1.075,-1.083,i.seat,.001),Yt(n,"Case buckle",.032,.026,.008,l,1.12,-1.089,i.metal,.002);if(e){Yt(n,"Custom passenger bed extension",.68,.018,.685,.279,.94,-.1675,s,.005);for(let c of[-.03,.58])Yt(n,"Extension support leg",.022,.245,.022,c,.808,.13,i.metal,.003),Yt(n,"Support rubber foot",.045,.012,.05,c,.68,.13,i.rubber,.004);Yt(n,"Single sleeping mat 183 x 65 x 7.5 cm",.65,.075,1.83,.28,.9865,-.745,r,.029),om(n,[[-.04,.976,-1.63],[.6,.976,-1.63],[.6,.976,.14],[-.04,.976,.14],[-.04,.976,-1.63]],a,.0018),Yt(n,"Soft camp pillow",.4,.075,.25,.28,1.055,.005,r,.035);let l=new we(new zt(.014,.014,.005,24),i.trim);l.name="Sleeping mat valve",l.position.set(.56,.99,-1.65),l.rotation.x=Math.PI/2,n.add(l)}else{let l=new we(new Rr(.095,.48,6,24),r);l.name="Packed sleeping mat",l.rotation.z=Math.PI/2,l.position.set(.18,1.06,-1.4),l.castShadow=l.receiveShadow=!0,n.add(l),Yt(n,"Stowed passenger bed extension",.68,.018,.685,.279,.966,-.855,s,.005);for(let c of[-.04,.4]){let h=new we(new Xt(.097,.009,5,32),i.seat);h.name="Packed mattress strap",h.rotation.y=Math.PI/2,h.position.set(c,1.06,-1.4),n.add(h)}}return Bs(n)}(function(i){let e="#171b1d",t={body:"Body paint",roof:"Roof",trim:"Exterior trim & badges",wheels:"Wheels & spare rim",grille:"Grille & logo",bumpers:"Factory bumpers",cabin:"Cabin hard trim"};function n(r={}){let a={};if(r?.partFinishes&&typeof r.partFinishes=="object"&&!Array.isArray(r.partFinishes))for(let[l,c]of Object.entries(r.partFinishes).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&["matte","gloss"].includes(c)&&(a[l]=c);let o={};if(r?.partColours&&typeof r.partColours=="object"&&!Array.isArray(r.partColours))for(let[l,c]of Object.entries(r.partColours).slice(0,96))/^[a-z][a-z0-9_]{0,63}$/.test(l)&&!["constructor","prototype"].includes(l)&&/^#[0-9a-f]{6}$/i.test(c)&&(o[l]=c.toLowerCase());return{allBlack:r?.allBlack===!0,partFinishes:a,partColours:o}}function s(r){return r==="tires"||r==="suzuki_nomade_steelwheel"?"wheels":/^autostylenn_.*grille$/.test(r)?"grille":r}i.JimnySurfaceStyles=Object.freeze({BLACK:e,BASE:Object.freeze(t),clean:n,target:s})})(globalThis);function um(i,e="5door"){i.updateWorldMatrix(!0,!0);let t=i.matrixWorld.clone().invert(),n=e==="3door"?-.17:0,s=[{id:"right",x:-.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"left",x:.863,y:1.285,z:.542+n,w:.175,h:.117},{id:"centre",x:0,y:1.522,z:.536+n,w:.18,h:.055}].map(a=>({...a,vertices:[]})),r=[new N,new N,new N];return i.traverse(a=>{if(!a.isMesh||a.material?.name!=="BrightChrome")return;let o=a.geometry,l=o.attributes.position,c=o.index,h=new Fe().multiplyMatrices(t,a.matrixWorld);for(let u=0;u<(c?.count??l.count);u+=3){for(let d=0;d<3;d++)r[d].fromBufferAttribute(l,c?c.getX(u+d):u+d).applyMatrix4(h);for(let d of s)if(r.every(f=>Math.abs(f.x-d.x)<d.w/2+.001&&Math.abs(f.y-d.y)<d.h/2+.001&&Math.abs(f.z-d.z)<.0035)){for(let f of r)d.vertices.push(f.x,f.y,f.z-6e-4);break}}}),s.filter(a=>a.vertices.length).map(a=>{let o=new ot;o.setAttribute("position",new Ue(a.vertices,3));let l=[];for(let u=0;u<a.vertices.length;u+=3)l.push((a.vertices[u]-a.x)/a.w+.5,(a.vertices[u+1]-a.y)/a.h+.5);o.setAttribute("uv",new Ue(l,2)),o.computeVertexNormals();let{vertices:c,...h}=a;return{...h,geometry:o}})}var{BLACK:ky,clean:By}=globalThis.JimnySurfaceStyles,zy=new Set(["OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille"]),Gy=/Glass|Lens|Lamp|Emitter|Reflector|Indicator|RearLamp|Instrument|LCD|Display|Needle|Mirror/i,Hy=/Fabric|SeatInsert|SeatCover|Carpet|Woven|Upholstery/i;function Vc(i,e={}){for(let[t,n]of Object.entries(i))n?.userData&&(n.userData.surfaceKind=t);for(let t of Object.values(e))t.userData.surfaceKind="optic"}function Yu(i){if(i.userData.grilleBadge)return"grille";for(let e=i;e;e=e.parent){if(e.userData.finishTarget)return e.userData.finishTarget;if(zy.has(e.name))return"grille";if(["StockWheels","AllTerrainWheels","SpareWheel"].includes(e.name))return"wheels";if(e.name==="RoofShell")return"roof";if(e.name==="StockBumper")return"bumpers";if(e.name==="StockHeadlamps")return"headlamps";if(e.name==="Cabin")return"cabin";if(e.name==="BodyShell")return i.material?.userData.vehiclePaint||i.material?.name==="BodyPaint"?"body":"trim"}return null}function dm(i,e){for(let t of um(i,e)){let n=new Ke({name:"MirrorGlass",color:"#c4cccf",metalness:1,roughness:.12,side:Ht}),s=new we(t.geometry,n);s.name="ProtectedMirror-"+t.id,s.userData.disposableMaterial=!0,i.add(s),(i.getObjectByName(t.id==="centre"?"Cabin":"BodyShell")||i).attach(s)}}function Ku(i){let e=i.userData.surfaceKind||"",t=Hy.test(i.name)||["seat","canvas","upholstery"].includes(e)||i.userData.ownsTextures,n=Gy.test(i.name)||["glass","lens","smoked","reflector","white","red","orange","ambient","optic","rubber"].includes(e)||/TyreRubber|IntakeShadow|Brake/.test(i.name)||i.emissiveIntensity>0&&i.emissive?.getHex()>0||i.isMeshBasicMaterial||!t&&i.map;return{fabric:t,protectedSurface:n}}function fm(){let i=new Map,e=new Set,t={materials:0,targets:[]};function n(){for(let[r,a]of i)r.material=a;i.clear();for(let r of e)r.dispose();e.clear(),t={materials:0,targets:[]}}function s(r,a={}){n();let o=By(a),l=new Map,c=new Set;for(let h of r)h?.traverse(u=>{if(!u.isMesh||Array.isArray(u.material))return;let d=u.material,f=Yu(u),g=o.partFinishes[f],{fabric:y,protectedSurface:m}=Ku(d),p=f==="wheels"&&d.name==="CatalogueSteelWheel",M=!y&&(f!=="wheels"||p)?o.partColours[f]:null;if(!f||m||d.name==="BrightChrome"&&["headlamps","bumpers"].includes(f)||!o.allBlack&&!M&&(!g||y))return;let w=o.allBlack&&(f!=="wheels"||p)&&!(y&&a.cabin&&a.cabin!=="black")&&!d.userData.explicitSurfaceColour&&!d.userData.vehiclePaint&&!["BodyPaint","RoofPaint"].includes(d.name),b=y?null:g;if(!w&&!b&&!M)return;let v=d.uuid+":"+f+":"+w+":"+b+":"+M,x=l.get(v);x||(x=d.clone(),x.userData={...x.userData,surfaceStyle:{target:f,black:w,finish:b}},w&&(x.color.set(ky),x.vertexColors=!1,x.metalness=Math.min(x.metalness||0,.12)),M&&(x.color.set(M),x.vertexColors=!1),b&&(x.roughness=b==="matte"?.85:.14,x.roughnessMap=null,"clearcoat"in x&&(x.clearcoat=b==="matte"?.02:.95,x.clearcoatRoughness=b==="matte"?.7:.09)),x.needsUpdate=!0,l.set(v,x),e.add(x)),i.set(u,d),u.material=x,c.add(f)});return t={materials:e.size,targets:[...c]},t}return{apply:s,clear:n,snapshot:()=>({...t,targets:[...t.targets]})}}(function(i){"use strict";let e=["3door","5door"],t="2026-10-23",n={exea_cupholder:{name:"EXEA drink & phone holder \xB7 passenger side",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"interior",size:null,fitment:"SelectPlus F9NG / 9Z0BB-77R20, sold individually. Specify driver or passenger fitting position; this representative preview uses the passenger side. Maker specifies bottles up to 600 ml. Verify your chassis, airbag clearance and grip-cover installation order.",note:"Hollow cradle, bottle retaining fingers, phone slot and bolt-on mounting arm. Bottle and phone are not included; original inferred-scale geometry."},exea_phone_mount:{name:"EXEA EE-213 dedicated phone holder",category:"Interior",region:"Japan",countryCode:"JP",seller:"EXEA",url:"https://www.seikosangyo.co.jp/exea/english/sp/special1.html",bodyStyles:["3door"],camera:"interior",size:null,fitment:"Maker lists EE-213 in its Jimny range. This preview is restricted to the three-door pending five-door mounting confirmation. Confirm handset dimensions, mounting revision and local driving laws; keep instruments, sightlines and airbag deployment clear.",note:"Adjustable clamp jaws, padded cradle, ball joint and compact dash mounting base. No phone or charging electronics implied."},armoro_console_organizer:{name:"ARMORO canvas console organiser \xB7 AT only",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/jimny-center-console-organizer",bodyStyles:e,camera:"console",size:null,transmission:"AT",fitment:"Maker specifies automatic-transmission Jimny models from 2018, RHD or LHD. NOT a manual-transmission fitment claim. Confirm exact body/trim, full transfer-lever travel, seat travel and handbrake clearance before fitting; inferred-scale preview is not a clearance test.",note:"Two open canvas main pockets, side mesh sleeves, binding and straps; no bulky box across the transfer lever."},exea_utility_bars:{name:"EXEA utility side bars \xB7 pair",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:[.045,.045,.61],fitment:"F9NP / 9Z0BB-77R70. Replaces rear assist grips with bolted side bars. Published limit is 1.5 kg PER SIDE, not a combined roof-net load rating. Suzuki says Nomade installation appearance differs. Confirm fasteners, trim, airbags and attachment instructions.",note:"610 mm rails with offset mounting feet, end caps and visible screws. Separate mounting kit required for the roof net."},exea_roof_net:{name:"EXEA overhead soft-storage net",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"headliner",size:null,requires:["exea_utility_bars"],fitment:"F9NQ / 9Z0BB-77R80 requires the separately sold compatible utility side bars. Use only light, soft items, retain headroom and visibility, and follow the maker load limit and incompatible-accessory list. Never place hard, heavy or slippery items overhead.",note:"Open woven mesh with sag, bound perimeter, adjustable corner straps and buckles. It is not a cargo barrier or occupant restraint."},exea_switch_extensions:{name:"EXEA window-switch extensions \xB7 black",category:"Interior",region:"Japan",countryCode:"JP",seller:"Suzuki SelectPlus / EXEA",url:"https://www.suzuki.co.jp/accessory_car/selectplus/jimny_accessory.html",bodyStyles:e,camera:"console",size:null,fitment:"F9NL / 9Z0BB-77R10 supplied for four switches with double-sided adhesive. Preview shows the two front central window rockers, not an additional electric-window conversion. Check switch shape, clearance and reliable release after installation.",note:"Small sculpted raised paddles with tactile ridges and visible switch-direction marks; no electrical modifications."},maruti_at_mats:{name:"Maruti all-weather floor mats \xB7 AT",category:"Interior",region:"India",countryCode:"IN",seller:"Maruti Suzuki Genuine Accessories",url:"https://www.marutisuzuki.com/genuine-accessories/jimny-accessories",bodyStyles:["5door"],camera:"footwell",size:null,transmission:"AT",incompatible:["mats"],fitment:"India five-door AT reference 75901M80TK0. MT uses a different reference, 75901M80TH0; do not substitute. Original representative tray geometry is not a pedal-clearance or anti-slip certification. Confirm clips and secure mats; never stack them.",note:"Front footwell trays with raised edges, drainage channels, heel pad and retaining clips. Model is not a scan of the genuine set."},armoro_seat_organizer:{name:"ARMORO seat-back organiser",category:"Interior",region:"India",countryCode:"IN",seller:"ARMORO",url:"https://armoro.com/products/universal-car-seat-organizer",bodyStyles:e,camera:"seatbacks",size:null,fitment:"Universal canvas organiser. Confirm straps fit your seat and remain clear of airbags, seat tracks, belts and rear passengers. Preview shows one front-seat back; not exact ARMORO CAD.",note:"Bottle pockets, a large pocket and tissue storage address the small-item storage repeatedly discussed by Jimny owners."},jimsa_door_pockets:{name:"JimSA front door-grip pockets \xB7 pair",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-door-grip-storage-pockets-jimny-year-2018",bodyStyles:e,camera:"doors",size:null,fitment:"Seller lists Gen 4 three-door and five-door FRONT doors only. Uses existing door-card screws; verify door handle, window-control and emergency-exit access.",note:"Textured plastic pockets with padded base. Representative hollow pockets; dimensions inferred from product photos."},jimsa_dash_tray:{name:"JimSA instrument-top storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-dashboard-storage-tray-jimny-year-2018",bodyStyles:e,camera:"interior",existingId:"market_jimsa_7123723878571",size:null,fitment:"Seller lists both bodies. Adhesive tray above the instrument binnacle. Keep objects low and secured; do not obstruct instruments, windscreen view, vents or airbags.",note:"Anti-slip-lined shallow tray. Original inferred-scale model, not a safe loose-object restraint."},jimsa_console_tray:{name:"JimSA centre-console storage tray",category:"Interior",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-centre-console-storage-tray-jimny-year-2018",bodyStyles:e,camera:"console",existingId:"market_jimsa_7123719946411",size:null,fitment:"Seller offers DIFFERENT MT and AT versions for both bodies. Choose your transmission. Preview is a shallow small-item tray and is not a measured clearance check for levers or handbrake.",note:"Keeps small items organised without installing a large armrest. No promise that one insert fits both transmissions."},jimsa_cargo_pouch_5door:{name:"JimSA rear luggage storage pouch \xB7 XL",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/rear-luggage-storage-pouch-5-door-jimny-year-2023",bodyStyles:["5door"],camera:"storage",size:null,fitment:"Seller explicitly lists five-door GL/GLX. Confirm mounting hardware and maximum load. Keep visibility and seatbelts clear; do not treat the fabric cover as a crash barrier.",note:"Soft cargo-area pouch/cover for smaller items. Representative zip pocket and securing tabs, inferred dimensions."},jimsa_tiedowns:{name:"JimSA rear luggage attachment rings",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"JimSA",url:"https://www.jimsa.co.za/products/jimsa-rear-luggage-area-attachment-rings-jimny-year-2018",bodyStyles:["3door"],camera:"storage",size:null,fitment:"Current seller page lists THREE-door only. Pair mounts in existing holes below rear windows. No published crash/load rating; use appropriate rated restraints and vehicle guidance.",note:"A light, useful preparation item before adding large storage systems. Preview dimensions inferred; not recovery points."},fr_wolfpack:{name:"Front Runner Wolf Pack Pro storage box",category:"Camping & storage",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-za/product/wolf-pack-pro",bodyStyles:e,camera:"storage",size:[.51,.23,.4],dimensionSource:"https://monsterfishing.co.nz/collections/dometic/products/dometic-wolf-pack-pro",fitment:"Universal removable storage box, not a Jimny-specific mount. Preview shows strapped cargo placement; source suitable vehicle-rated anchorage separately. Upright-seat cargo fit varies by body.",note:"Published box envelope 510 \xD7 400 \xD7 230 mm, 3.65 kg empty. Original model with lid, latches and restraint straps; not manufacturer CAD."},fr_jerry_holder:{name:"Front Runner single external jerry-can holder",category:"Roof & carrying",region:"South Africa",countryCode:"ZA",seller:"Dometic / Front Runner",url:"https://www.dometic.com/en-us/product/single-jerry-can-holder",bodyStyles:["5door"],camera:"roof",size:[.165,.37,.513],requires:["fr_slimline2"],incompatible:["rtt","boards"],fitment:"JCHO013 is for a Front Runner slatted rack and 20 L NATO/Wedco cans; NOT Scepter. Preview adds a compatible rack. Confirm actual rack kit, dynamic roof load, mounting instructions and local fuel-transport rules.",note:"Holder is separate from can. Published 513 \xD7 165 \xD7 370 mm and 2.4 kg. Fuel stays outside the cabin; loaded roof weight and handling matter."},fr_fuelcan20:{name:"Front Runner 20 L steel fuel can \xB7 external",category:"Camping & storage",region:"United Kingdom",countryCode:"GB",seller:"Tuff-Trek",url:"https://tuff-trek.com/products/jcfu001-20l-jerry-can-matte-black-steel-finish",bodyStyles:["5door"],camera:"roof",size:[.165,.35,.46],requires:["fr_slimline2","fr_jerry_holder"],incompatible:["fr_watercan20","rtt","boards"],fitment:"JCFU001 fuel-only can with compatible holder and rack. NEVER store fuel in the passenger cabin. Confirm local container approval/transport law, filled weight, roof-load limits and safe refuelling. Not suitable for drinking water.",note:"Published 350 \xD7 165 \xD7 460 mm overall, 3.82 kg empty. Can is shown externally in a restrained carrier, not loose or bolted directly to the door."},fr_watercan20:{name:"Front Runner 20 L water can with tap",category:"Camping & storage",region:"United States",countryCode:"US",seller:"Off Road Tents",url:"https://offroadtents.com/products/front-runner-plastic-water-jerry-can-with-tap",bodyStyles:e,camera:"storage",size:[.36,.475,.18],incompatible:["fr_fuelcan20","fr_wolfpack","jimsa_cargo_pouch_5door","drawer","exploresetups_drawer_5door","touring"],fitment:"Food-grade BPA-free water container; WATER ONLY, never substitute for a fuel can. Preview is low cargo placement with straps, not a certified restraint. 20 L of water adds about 20 kg before container weight.",note:"Published 360 \xD7 180 \xD7 475 mm, 2.38 kg empty. External fuel-holder compatibility is NOT assumed; water model uses separate cargo placement."},arb_airkit:{name:"ARB CKMP12 portable compressor kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/air-systems",bodyStyles:e,camera:"storage",size:[.44,.208,.238],dimensionSource:"https://store.arbusa.com/content/CKMP12_Operation%20Guide.pdf",fitment:"Universal 12 V portable kit, not an installed onboard compressor. Secure when travelling; use outdoors with correct battery connection and manufacturer instructions. Never connect this load to an ordinary cabin accessory socket.",note:"Published case envelope 440 \xD7 238 \xD7 208 mm. Preview is the closed carry case; no implied under-seat installation, wiring or automatic inflation simulation."},arb_repairkit:{name:"ARB Speedy Seal II tyre repair kit",category:"Recovery",region:"Australia",countryCode:"AU",seller:"ARB",url:"https://www.arb.com.au/product/10000011-speedy-seal-series-ii-repair-kit",bodyStyles:e,camera:"storage",size:null,fitment:"Universal tubeless-tyre emergency kit. Not for sidewall damage or every puncture. Follow tyre maker instructions and obtain professional inspection/repair; carry an inflated serviceable spare and correct tools.",note:"Closed high-visibility carry-case preview with latches and handle. Inferred scale, not exact product CAD or a guarantee a damaged tyre is repairable."},kap_fire:{name:"KAP passenger-seat extinguisher bracket",category:"Interior",region:"Australia",countryCode:"AU",seller:"OZ Jimny / KAP",url:"https://ozjimny.com/products/kap-industires-fire-extinguisher-bracket",bodyStyles:e,camera:"footwell",existingId:"market_4454478184585",size:null,fitment:"Seller lists both bodies; maker page specifies JB74. Confirm the exact XL/body version with seller. Bracket only unless extinguisher option bought. May restrict seat travel; retain pedal/seat/airbag clearance and correct metal cage.",note:"Original passenger-side bracket plus optional representative 1 kg extinguisher. No certification claimed for our model or installation; use professional fitting and extinguisher maintenance."}};for(let[s,r]of Object.entries(n))Object.assign(r,{id:s,visual:s,checked:t,stockAtCheck:"unknown",previewKind:"reference-guided",disclosure:"Original representative geometry, not manufacturer CAD, verified stock or certified fitment."});i.JimnyPracticalParts=Object.freeze(n)})(globalThis);var pm=globalThis.JimnyPracticalParts;function zs(i,e,t,n,s=0,r=0,a=0){let o=new we(e,t);return o.name=n,o.position.set(s,r,a),o.castShadow=o.receiveShadow=!0,i.add(o),o}function Qe(i,e,t,n,s,r,a,o,l,c=.003){return zs(i,new Bt(e,t,n,2,Math.min(c,e/4,t/4,n/4)),o,l,s,r,a)}function cn(i,e,t,n,s){let r=e.map(o=>new N(...o)),a=new Qn;for(let o=1;o<r.length;o++)a.add(new $n(r[o-1],r[o]));return zs(i,new Vn(a,e.length*3,t,6,!1),n,s)}function Ln(i,e,t,n,s,r,a,o,l="y"){let c=zs(i,new zt(e,e,t,24),a,o,n,s,r);return l==="x"&&(c.rotation.z=Math.PI/2),l==="z"&&(c.rotation.x=Math.PI/2),c}function ps(i,e){return(i.userData.ownedMaterials??=[]).push(e),e}function Vy(i,e,t,n,s,r){let a=new an(.23,.115,10,6),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l)/.23+.5,h=o.getY(l)/.115+.5;o.setXYZ(l,e+s*(.004*Math.sin(c*Math.PI)*Math.sin(h*Math.PI)+.0015*Math.sin(c*19)*h),t+(h-.5)*.115-.004*Math.sin(c*Math.PI)*h,n+(c-.5)*.23)}return a.computeVertexNormals(),zs(i,a,r,"Soft canvas pocket front")}function Ju(i,e,t,n,s,r,a){return zs(i,new Xt(e,.0025,6,20),r,a,t,n,s)}function Yr(i,e,t,n,s,r,a,o,l){Qe(i,e,.005,t,s,r,a,o.trim,l+" base"),Qe(i,e-.012,.002,t-.012,s,r+.0035,a,o.rubber,l+" anti-slip liner");for(let c of[-1,1])Qe(i,.005,n,t,s+c*(e/2-.0025),r+n/2,a,o.trim,l+" side lip"),Qe(i,e,n,.005,s,r+n/2,a+c*(t/2-.0025),o.trim,l+" end lip")}function Wc(i,e,t,n,s,r,a,o){for(let l of[-s*.3,s*.3]){Qe(i,.02,.004,a+.018,e+l,t+r/2+.004,n,o.seat,"Restraint webbing");for(let c of[-1,1])Qe(i,.02,r+.01,.003,e+l,t,n+c*(a/2+.008),o.seat,"Restraint vertical webbing"),Qe(i,.03,.025,.008,e+l,t+.025,n+c*(a/2+.011),o.metal,"Restraint cam buckle")}}function Zu(i,e,t,n,s,r,a,o,{colour:l=null,name:c="Carry case"}={}){let h=l?ps(i,new Ke({name:"CarryCaseShell",color:l,roughness:.65})):o.trim;Qe(i,s,r,a,e,t,n,h,c,.012),Qe(i,s+.004,.018,a+.004,e,t+r/2-.014,n,o.darkmetal,c+" lid perimeter",.004);for(let u of[-1,1])Qe(i,.033,.035,.012,e+u*s*.34,t+r*.28,n-a/2-.006,o.darkmetal,c+" latch");cn(i,[[e-.055,t+r/2,n],[e-.05,t+r/2+.025,n],[e+.05,t+r/2+.025,n],[e+.055,t+r/2,n]],.008,o.trim,c+" handle")}function Wy(i,e,{body:t="5door",cargoTop:n=.7,cargoLeft:s=!1}={}){let r=pm[i];if(!r||!r.bodyStyles.includes(t))return null;let a=new qe;a.name=i,a.userData.finishTarget=i,a.userData.cataloguePart={...r};let o=t==="3door"?.17:0,l=-1.445+o;if(i==="exea_cupholder"){let u=.25-o;Qe(a,.075,.018,.035,.57,1.165+.065,u+.07,e.trim,"Cupholder dash bracket"),Qe(a,.018,.085,.035,.57,1.165+.025,u+.07,e.trim,"Cupholder offset arm"),Ln(a,.047,.006,.57,1.165-.045,u,e.trim,"Cup cradle floor");let d=zs(a,new Xt(.049,.006,8,40),e.trim,"Open bottle retaining ring",.57,1.165+.01,u);d.rotation.x=Math.PI/2;for(let f of[0,2.1,4.2])Qe(a,.012,.058,.012,.57+Math.cos(f)*.042,1.165-.017,u+Math.sin(f)*.042,e.trim,"Bottle retaining finger");Yr(a,.085,.022,.026,.57,1.165-.015,u-.064,e,"Phone slot");for(let f of[-1,1])Ln(a,.003,.005,.57+f*.025,1.165+.076,u+.07,e.metal,"Holder fixing screw")}else if(i==="exea_phone_mount"){Yr(a,.075,.035,.008,-.18,1.275,.44-o,e,"Phone mount foot"),cn(a,[[-.18,1.28,.44-o],[-.18,1.34,.37-o]],.008,e.darkmetal,"Phone ball-joint arm"),zs(a,new Pn(.014,12,8),e.trim,"Adjustable ball joint",-.18,1.34,.37-o),Qe(a,.061,.101,.012,-.18,1.36,.345-o,e.trim,"Phone cradle back",.007);for(let c of[-1,1])Qe(a,.009,.035,.026,-.18+c*.034,1.36,.333-o,e.trim,"Adjustable clamp jaw"),Qe(a,.003,.025,.02,-.18+c*.029,1.36,.333-o,e.rubber,"Soft jaw pad");Qe(a,.05,.009,.03,-.18,1.306,.335-o,e.trim,"Phone support foot")}else if(i==="armoro_console_organizer"){let c=ps(a,qn("canvas","#535747")),h=ps(a,new Ke({name:"WovenStitch",color:"#989a7e",roughness:1}));c.side=Ht;for(let u of[-1,1]){let d=u*.104,f=.21-o;Qe(a,.009,.13,.23,d,.846,f,c,"Console pocket backing"),Qe(a,.058,.005,.23,d+u*.023,.785,f,c,"Console pocket floor"),Vy(a,d+u*.049,.843,f,u,c);for(let g of[-.112,.112])Qe(a,.05,.12,.006,d+u*.022,.846,f+g,c,"Canvas pocket gusset");cn(a,[[d+u*.05,.905,f-.115],[d+u*.05,.9,f],[d+u*.05,.905,f+.115]],.002,h,"Bound pocket opening");for(let g=0;g<9;g++)cn(a,[[d+u*.054,.797,f-.09+g*.022],[d+u*.054,.866,f-.09+g*.022]],.0013,e.seat,"Mesh sleeve vertical");for(let g=0;g<5;g++)cn(a,[[d+u*.055,.801+g*.014,f-.09],[d+u*.055,.801+g*.014,f+.09]],.0013,e.seat,"Mesh sleeve horizontal")}}else if(i==="exea_utility_bars")for(let c of[-1,1]){let h=c*.566,u=-.78+o;cn(a,[[h,1.59,u-.305],[h,1.59,u+.305]],.009,e.darkmetal,"Utility bar rail");for(let d of[-.285,.285])Qe(a,.035,.024,.035,h+c*.022,1.615,u+d,e.trim,"Offset rail foot"),Ln(a,.004,.006,h+c*.022,1.63,u+d,e.metal,"Bar mounting screw")}else if(i==="exea_roof_net"){let c=-.78+o,h=.99,u=.51,d=1.575,f=(g,y)=>d-.04*(1-(g/(h/2))**2)*(1-(y/(u/2))**2);for(let g=0;g<=20;g++){let y=-h/2+g*h/20,m=[];for(let p=0;p<=8;p++){let M=-u/2+p*u/8;m.push([y,f(y,M),c+M])}cn(a,m,.0017,e.seat,"Overhead net warp")}for(let g=0;g<=11;g++){let y=-u/2+g*u/11,m=[];for(let p=0;p<=10;p++){let M=-h/2+p*h/10;m.push([M,f(M,y),c+y])}cn(a,m,.0017,e.seat,"Overhead net weft")}cn(a,[[-h/2,d,c-u/2],[h/2,d,c-u/2],[h/2,d,c+u/2],[-h/2,d,c+u/2],[-h/2,d,c-u/2]],.006,e.seat,"Bound net perimeter");for(let g of[-1,1])for(let y of[-u/2,u/2])cn(a,[[g*h/2,d,c+y],[g*.566,1.59,c+y]],.004,e.seat,"Adjustable corner strap"),Qe(a,.022,.01,.018,g*.53,1.583,c+y,e.trim,"Net strap buckle")}else if(i==="exea_switch_extensions")for(let c of[-.095,.095]){let h=.282-o;Qe(a,.029,.032,.019,c,.965,h,e.trim,"Raised window rocker",.004);for(let u of[-.008,0,.008])Qe(a,.02,.0015,.002,c,.965+u,h-.01,e.darkmetal,"Tactile switch ridge")}else if(i==="maruti_at_mats")for(let c of[-1,1]){let h=c*.365,u=.47;Yr(a,.42,.36,.022,h,.696,u,e,"All-weather footwell tray");for(let d=0;d<8;d++)Qe(a,.36,.003,.007,h,.703,u-.14+d*.038,e.rubber,"Drainage channel");Qe(a,.15,.007,.12,h,.707,u-.06,e.rubber,"Heel wear pad",.009);for(let d of[-.15,.15])Ln(a,.01,.004,h+d,.704,u-.15,e.trim,"Mat retaining clip")}else if(i==="armoro_seat_organizer"){let c=ps(a,qn("canvas","#70705b")),h=ps(a,new Ke({name:"WovenStitch",color:"#ada98e",roughness:1})),u=.365,d=-.225-o,f=Qe(a,.365,.4,.012,u,1.09,d,c,"Canvas seat-back organiser",.01);f.rotation.x=-.12;for(let g of[-.14,.14])Qe(a,.025,.19,.008,u+g,1.35,d+.008,e.seat,"Headrest securing strap"),Qe(a,.035,.025,.012,u+g,1.37,d-.003,e.trim,"Strap buckle");for(let g of[-.122,.122]){Qe(a,.102,.006,.065,u+g,.973,d-.038,c,"Bottle pocket floor"),Qe(a,.102,.16,.006,u+g,1.05,d-.071,c,"Bottle pocket front");for(let y of[-1,1])Qe(a,.006,.16,.065,u+g+y*.048,1.05,d-.038,c,"Bottle pocket gusset");cn(a,[[u+g-.05,1.13,d-.006],[u+g-.05,1.13,d-.074],[u+g+.05,1.13,d-.074],[u+g+.05,1.13,d-.006]],.0022,h,"Bound open pocket lip")}Qe(a,.125,.13,.05,u,1.04,d-.05,c,"Central utility pouch"),Qe(a,.12,.025,.006,u,1.108,d-.08,c,"Pouch flap"),Qe(a,.3,.06,.045,u,.935,d-.035,c,"Tissue holder"),Qe(a,.12,.008,.002,u,.944,d-.06,e.trim,"Tissue slot");for(let g of[-.175,.175])cn(a,[[u+g,.9,d-.01],[u+g,1.27,d-.01]],.0011,h,"Canvas side seam")}else if(i==="jimsa_door_pockets")for(let c of[-1,1]){let h=c*.641,u=t==="3door"?-.12:.06;Yr(a,.082,.245,.052,h,.951,u,e,"Door grip pocket"),Qe(a,.01,.08,.014,c*.68,.99,u-.095,e.darkmetal,"Door screw attachment"),Ln(a,.004,.004,c*.672,1.02,u-.095,e.metal,"Door attachment screw","x")}else if(i==="jimsa_dash_tray")Yr(a,.355,.145,.02,-.365,1.299,.415-o,e,"Instrument tray");else if(i==="jimsa_console_tray")Yr(a,.135,.12,.023,0,.835,-.15-o,e,"Console insert"),Qe(a,.004,.018,.105,-.025,.847,-.15-o,e.trim,"Console tray divider");else if(i==="jimsa_cargo_pouch_5door"){let c=ps(a,qn("canvas","#3c4140")),h=ps(a,new Ke({name:"WovenStitch",color:"#797c74",roughness:1}));Qe(a,1.1,.012,.37,0,1.075,-1.43,c,"Soft cargo cover",.006),Qe(a,.79,.065,.235,0,1.112,-1.46,c,"Cargo zipped pouch",.018),cn(a,[[-.365,1.147,-1.55],[.365,1.147,-1.55],[.365,1.147,-1.37],[-.365,1.147,-1.37]],.0018,h,"Cargo pocket zip"),Qe(a,.015,.004,.025,.35,1.15,-1.52,e.metal,"Zip slider");for(let u of[-.57,.57])for(let d of[-1.6,-1.26])Qe(a,.045,.004,.03,u,1.075,d,e.seat,"Cargo securing tab"),Ju(a,.009,u,1.075,d,e.metal,"Cargo attachment eye")}else if(i==="jimsa_tiedowns")for(let c of[-1,1]){let h=Ju(a,.014,c*.647,1.16,-1.21,e.metal,"Luggage attachment ring");h.rotation.y=Math.PI/2,Ln(a,.005,.018,c*.666,1.16,-1.21,e.metal,"Attachment threaded stem","x")}else if(i==="fr_wolfpack"){let c=n+.115;Zu(a,-.2,c,l,.51,.23,.4,e,{name:"Wolf Pack representative box"});for(let h of[-1,1])for(let u of[l-.18,l+.18])Qe(a,.025,.155,.013,-.2+h*.23,c,u,e.darkmetal,"Moulded box stiffener");for(let h of[l-.09,l+.09])Qe(a,.44,.006,.018,-.2,c+.119,h,e.trim,"Nesting lid rib");Wc(a,-.2,c,l,.51,.23,.4,e)}else if(i==="fr_jerry_holder"){Qe(a,.165,.005,.513,.35,1.865,-.45,e.darkmetal,"Jerry carrier base");for(let d of[-1,1])Qe(a,.005,.055,.513,.35+d*.08,1.865+.027,-.45,e.darkmetal,"Carrier folded side");cn(a,[[.35-.085,1.865,-.45+.22],[.35-.085,1.865+.37,-.45+.22],[.35+.085,1.865+.37,-.45+.22],[.35+.085,1.865,-.45+.22]],.007,e.darkmetal,"Jerry carrier hold-down strap"),Qe(a,.028,.028,.018,.35+.093,1.865+.326,-.45+.22,e.metal,"Stainless safety catch");for(let d of[-.45-.2,-.45+.2])for(let f of[-1,1])Ln(a,.005,.008,.35+f*.059,1.865+.007,d,e.metal,"Carrier mounting bolt")}else if(i==="fr_fuelcan20"){let c=new qe;a.add(c),c.position.set(.37,2.047,-.68),c.rotation.set(Math.PI/2,Math.PI/2,0),Qe(c,.35,.405,.165,0,.2025,-.02,e.darkmetal,"Fuel can steel shell",.018),Qe(c,.354,.004,.169,0,.05,-.02,e.darkmetal,"Fuel can base seam",.002);for(let h of[-1,1])cn(c,[[-.125,.09,h*.08-.02],[.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal"),cn(c,[[.125,.09,h*.08-.02],[-.125,.33,h*.08-.02]],.003,e.darkmetal,"Stamped reinforcement diagonal");for(let h of[-.071,-.02,.031])cn(c,[[-.05,.398,h],[-.03,.45,h],[.11,.45,h],[.13,.398,h]],.01,e.darkmetal,"Triple carry handle");Ln(c,.034,.022,-.115,.419,-.02,e.trim,"Fuel bayonet cap"),cn(c,[[-.15,.43,-.02],[-.15,.441,.005],[-.12,.441,.005]],.002,e.metal,"Cap locking pin")}else if(i==="fr_watercan20"){let h=n+.2375,u=l+.08,d=ps(a,new Ke({name:"WaterContainerPlastic",color:"#b9c0b3",roughness:.61}));Qe(a,.36,.415,.18,.29,h-.03,u,d,"Water-only HDPE tank",.022);for(let f of[-.14,.14])Qe(a,.012,.27,.012,.29+f,h-.02,u-.095,d,"Water tank reinforcing rib");cn(a,[[.29-.07,h+.17,u],[.29-.055,h+.22,u],[.29+.075,h+.22,u],[.29+.09,h+.17,u]],.014,d,"Water can carry handle"),Ln(a,.039,.026,.29-.105,h+.19,u,e.trim,"Water fill cap"),Ln(a,.017,.03,.29,h-.15,u-.105,e.trim,"Water tap body","z"),Qe(a,.048,.01,.014,.29,h-.127,u-.115,e.trim,"Water tap lever"),Ln(a,.009,.025,.29,h-.18,u-.115,e.trim,"Water spout"),Wc(a,.29,h-.03,u,.36,.415,.18,e)}else if(i==="arb_airkit"){let c=s?-.27:.28,h=n+.104,u=l+.04;Zu(a,c,h,u,.44,.208,.238,e,{name:"Portable compressor case"}),Wc(a,c,h,u,.44,.208,.238,e)}else if(i==="arb_repairkit"){let c=s?-.18:.37,h=n+.035,u=l-.13;Zu(a,c,h,u,.245,.07,.135,e,{colour:"#b48135",name:"Tyre repair tool case"}),Wc(a,c,h,u,.245,.07,.135,e)}else if(i==="kap_fire"){let u=.37-o;Qe(a,.33,.004,.065,.365,.758-.035,u,e.darkmetal,"Passenger seat-rail bracket");for(let d of[-.145,.145])Ln(a,.008,.009,.365+d,.758-.03,u,e.metal,"Seat-rail bracket fixing");Ln(a,.042,.225,.365,.758+.007,u,e.red,"Optional 1 kg extinguisher","x");for(let d of[-.065,.065]){let f=Ju(a,.044,.365+d,.765,u,e.metal,"Metal retaining cage");f.rotation.y=Math.PI/2}Ln(a,.013,.035,.365-.13,.758+.007,u,e.metal,"Extinguisher valve","x"),Qe(a,.045,.01,.024,.365-.125,.758+.035,u,e.trim,"Release handle"),Ln(a,.011,.006,.365-.124,.758+.015,u-.021,e.white,"Pressure indicator","z")}return Bs(a)}function mm({parts:i,body:e,mats:t,rig:n,show:s}){let r=i.has("touring")?.96:i.has("exploresetups_drawer_5door")?.955:i.has("drawer")?.922:.7,a=e==="5door"&&i.has("fr_slimline2");for(let[o,l]of Object.entries(pm)){if(!l.bodyStyles.includes(e)||l.requires?.some(h=>!i.has(h))||l.incompatible?.some(h=>i.has(h))||["fr_jerry_holder","fr_fuelcan20"].includes(o)&&(!a||i.has("rtt")||i.has("boards"))||o==="fr_fuelcan20"&&(!i.has("fr_jerry_holder")||i.has("fr_watercan20"))||o==="jimsa_cargo_pouch_5door"&&["touring","shelf","mod_halfmolly_5door","molle","fr_watercan20"].some(h=>i.has(h))||o==="fr_watercan20"&&["touring","drawer","exploresetups_drawer_5door","fr_wolfpack"].some(h=>i.has(h)))continue;let c=o==="arb_repairkit"&&i.has("arb_airkit")?r+.208:r;s([o],()=>{let h=Wy(o,t,{body:e,cargoTop:c,cargoLeft:i.has("fr_watercan20")});h&&n.add(h)})}}function gm({accessoryRig:i,mats:e,detailed:t,modelBody:n,colour:s,effectiveDesign:r,lampEmitters:a,buildGrille:o=()=>{},addDecals:l=()=>{},arch:c=null}){Vc(e,a);let h=(w,b,v,x=0,E=0,S=0)=>{let _=new we(w,b);return _.position.set(x,E,S),_.castShadow=!0,_.receiveShadow=!0,v.add(_),_},u=(w,b,v,x,E,S,_,A=e.trim)=>h(Math.min(b,v,x)>.065?new Bt(b,v,x,2,Math.min(b,v,x)*.14):new rn(b,v,x),A,w,E,S,_),d=(w,b,v,x,E,S,_,A=e.trim,C="y",L=24)=>{let F=h(new zt(b,v,x,L),A,w,E,S,_);return C==="x"&&(F.rotation.z=Math.PI/2),C==="z"&&(F.rotation.x=Math.PI/2),F},f=(w,b,v=.025,x=e.darkmetal)=>h(new Vn(new fi(b.map(E=>new N(...E)),!1,"centripetal",.1),Math.max(12,b.length*3),v,8,!1),x,w),g=(w,b,v=.01,x=e.trim)=>{let E=b.map(_=>new N(..._)),S=new Qn;for(let _=1;_<E.length;_++)S.add(new $n(E[_-1],E[_]));return h(new Vn(S,b.length*2,v,6,!1),x,w)};function y(w){for(;w.children.length;){let b=w.children[0];b.traverse(v=>{v.geometry?.dispose(),v.isInstancedMesh&&v.dispose(),v.userData.ownedMaterials?.forEach(x=>x.dispose()),v.userData.disposableMaterial&&(v.material.userData.ownsTextures||v.material.map?.dispose(),v.material.dispose())}),w.remove(b)}}c||(c=(w,b,v)=>{let x=b<0?-1:1,_=[[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]]].map(O=>new fi(O.map(([z,K])=>new N(0,K,z)))),A=[],C=[],L=64;for(let[O,z]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let K=0;K<=L;K++){let Z=_[0].getPoint(K/L).lerp(_[1].getPoint(K/L),O);A.push(x*z,Z.y,v+Z.z)}for(let O=0;O<5;O++)for(let z=0;z<L;z++){let K=O*(L+1)+z;C.push(K,K+1,K+L+2,K,K+L+2,K+L+1)}if(x<0)for(let O=0;O<C.length;O+=3)[C[O+1],C[O+2]]=[C[O+2],C[O+1]];let F=new ot;F.setAttribute("position",new Ue(A,3)),F.setIndex(C),F.computeVertexNormals(),h(F,e.trim,w)});function m(w,b=!1){let v=new qe;w.add(v);let x=.61,E=-1.62;[-.72,.72].forEach(_=>u(v,.035,.055,2.25,_,1.82,-.5,e.darkmetal)),[x,E].forEach(_=>u(v,1.46,.055,.035,0,1.82,_,e.darkmetal));for(let _=-1.56;_<.62;_+=.14)u(v,1.43,.022,.072,0,1.825,_,e.trim);[-.68,.68].forEach(_=>[-1.38,.38].forEach(A=>{u(v,.055,.095,.11,_,1.755,A,e.darkmetal),u(v,.1,.02,.15,_,1.715,A,e.rubber),d(v,.012,.012,.06,_,1.77,A,e.metal,"x",8)}));let S=u(v,1.38,.13,.018,0,1.77,.64,e.trim);if(S.rotation.x=-.5,b){[-.72,.72].forEach(_=>g(v,[[_,1.83,x],[_,1.96,x-.12],[_,1.96,E+.06],[_,1.83,E]],.018));for(let _ of[-1.55,.49])u(v,1.44,.025,.025,0,1.955,_,e.darkmetal)}else for(let _ of[-.72,.72])for(let A of[-1.5,-.8,-.1,.5])u(v,.018,.014,.045,_,1.86,A,e.metal)}function p(w,b){y(i);let v=[];if(t&&w.has("headunit")){let A;{let L=document.createElement("canvas");L.width=384,L.height=224;let F=L.getContext("2d");F.fillStyle="#162a31",F.fillRect(0,0,384,224),F.fillStyle="#dce8d5",F.font="18px sans-serif",F.fillText("12:30",18,28),F.fillText("HOME",292,28);for(let[z,K]of["Music","Phone","Maps"].entries())F.fillStyle=["#305d68","#42694b","#615f47"][z],F.fillRect(16+z*122,55,108,128),F.fillStyle="#eef3df",F.font="20px sans-serif",F.fillText(K,26+z*122,145),F.beginPath(),F.arc(70+z*122,96,16,0,Math.PI*2),F.strokeStyle="#dbe6d9",F.lineWidth=3,F.stroke();let O=new gn(L);O.colorSpace=xt,A=new Ft({map:O})}let C=h(new an(.232,.137),A,i,0,1.224,.312);C.rotation.y=Math.PI,C.userData.disposableMaterial=!0,n==="3door"&&(C.position.z-=.17)}let x=(_,A)=>{let C=_.filter(L=>w.has(L));if(C.length){let L=new Set(i.children);A();for(let F of i.children)L.has(F)||(F.userData.finishTarget=C[0]);v.push(...C)}};o(i,b.grille||"oem"),l(i,b.decal||"none"),b.finish==="raptor"&&[-1,1].forEach(_=>u(i,.018,.16,n==="3door"?1.43:1.77,_*(t?.751:.777),.65,-.08,e.textured));let E=["rack","msga_roofbasket","prad_roofrack","fr_slimline2","fr_slimline2_tall",...n==="3door"?[]:["suzuki_nomade_flatrack"]].some(_=>w.has(_));if(!E&&["rtt","awning","boards"].some(_=>w.has(_)))for(let _ of[-1.2,.25]){u(i,1.5,.045,.07,0,1.79,_,e.darkmetal);for(let A of[-1,1])u(i,.06,.1,.1,A*.7,1.73,_,e.trim),u(i,.09,.018,.13,A*.7,1.69,_,e.rubber)}if(n!=="3door"&&w.has("suzuki_nomade_flatrack")?x(["suzuki_nomade_flatrack"],()=>i.add(im(e))):w.has("fr_slimline2")||w.has("fr_slimline2_tall")?x(["fr_slimline2","fr_slimline2_tall"],()=>i.add(Yp(e,w.has("fr_slimline2_tall")))):x(["rack","msga_roofbasket","prad_roofrack"],()=>m(i,w.has("msga_roofbasket"))),w.has("skinnyjim_backbone")||w.has("skinnyjim_jerry_tray")){let _=tm(e);_.userData.finishTarget="skinnyjim_backbone",n==="3door"&&(_.position.z+=.17),i.add(_),v.push("skinnyjim_backbone"),x(["skinnyjim_jerry_tray"],()=>{let A=nm(e);n==="3door"&&(A.position.z+=.17),i.add(A)})}x(["snorkel","bimbra_snorkel"],()=>{let _=i.children.length;f(i,[[-.79,1.04,1.24],[-.84,1.08,.82],[-.84,1.25,.66],[-.79,1.67,.59]],.041,e.trim);let A=u(i,.13,.095,.16,-.79,1.705,.62,e.trim);A.rotation.x=.15;for(let C=-.832;C<-.74;C+=.025)u(i,.008,.058,.008,C,1.71,.706,e.darkmetal);if(u(i,.018,.045,.07,-.78,1.5,.61,e.darkmetal),n==="3door")for(let C of i.children.slice(_))C.position.z-=.17}),x(["bull","autostylenn_bumper_v1"],()=>{u(i,1.38,.23,.025,0,.73,1.79,e.trim);let _=w.has("bull"),A=_?[[-.85,.76],[-.72,.72],[.72,.72],[.85,.76],[.82,.57],[.47,.48],[-.47,.48],[-.82,.57]]:[[-.85,.72],[-.76,.76],[-.63,.7],[.63,.7],[.76,.76],[.85,.72],[.8,.57],[.56,.5],[-.56,.5],[-.8,.57]],C=new Ot(A.map(([L,F])=>new ie(L,F)));if(_){let L=new Qt;L.absellipse(0,.594,.185,.031,0,Math.PI*2,!1),C.holes.push(L)}for(let L of[-1,1]){let F=new Qt;F.absellipse(L*.61,.637,_?.049:.044,.044,0,Math.PI*2,!1),C.holes.push(F)}h(new Sn(C,{depth:.19,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:2}),e.darkmetal,i,0,0,1.86);for(let L of[-.61,.61])d(i,.038,.038,.008,L,.637,1.98,e.reflector,"z"),d(i,.034,.034,.009,L,.637,1.989,e.lens,"z");if(_){f(i,[[-.79,.72,1.99],[-.79,.96,1.99],[-.72,1.075,1.99],[-.6,1.083,1.99],[.6,1.083,1.99],[.72,1.075,1.99],[.79,.96,1.99],[.79,.72,1.99]],.026);for(let L of[-.43,.43]){f(i,[[L,.69,2.07],[L,.79,2.04],[L,1.083,1.99]],.018),u(i,.035,.17,.12,L,.66,2.04,e.darkmetal);let F=h(new Xt(.041,.01,8,24,Math.PI*1.65),e.accent,i,L,.52,2.08);F.rotation.z=.55,d(i,.013,.013,.09,L,.55,2.08,e.accent,"x")}for(let L of[-.74,.74]){u(i,.12,.043,.018,L,.65,2.058,e.trim);for(let F=-2;F<=2;F++)d(i,.01,.01,.01,L+F*.021,.65,2.071,e.reflector,"z",12)}}else{let L=new Ot([[-.37,.72],[-.33,.91],[.33,.91],[.37,.72]].map(([F,O])=>new ie(F,O)));for(let F of[-.24,-.08,.08,.24]){let O=new Qt;O.absellipse(F,.81,.046,.021,0,Math.PI*2,!1),L.holes.push(O)}h(new Sn(L,{depth:.008,bevelEnabled:!1}),e.darkmetal,i,0,0,1.86),u(i,1.26,.026,.2,0,.701,1.96,e.darkmetal)}for(let L of[-.77,-.42,0,.42,.77])d(i,.005,.005,.01,L,.574,2.061,e.metal,"z",8)}),x(["winch"],()=>{u(i,.45,.12,.19,0,.72,2.13,e.trim),d(i,.055,.055,.27,0,.74,2.21,e.metal,"x"),u(i,.07,.09,.03,0,.69,2.25,e.accent)}),x(["sliders"],()=>[-1,1].forEach(_=>{f(i,[[_*.91,.45,-.95],[_*.97,.45,-.85],[_*.97,.45,.85],[_*.91,.45,.95]],.035),u(i,.18,.035,1.8,_*.86,.46,0,e.darkmetal)})),x(["flares"],()=>[-1,1].forEach(_=>[-1.295,1.295].forEach(A=>c(i,_===1?.82:-.97,A,!0)))),x(["ladder"],()=>{let _=i.children.length;[-.65,-.35].forEach(A=>{f(i,[[A,.6,-1.99],[A,1.66,-1.99],[A,1.75,-1.8],[A,1.73,-1.66]],.02),u(i,.065,.02,.1,A,1.72,-1.68,e.rubber),u(i,.065,.04,.16,A,.64,-1.91,e.trim)});for(let A=.68;A<1.7;A+=.19)u(i,.32,.025,.035,-.5,A,-1.99,e.darkmetal);for(let A of i.children.slice(_))A.position.z+=.078}),x(["led","lamp_bar20"],()=>{let _=E?1.91:1.77,A=w.has("lamp_bar20")?.51:1.02;u(i,A,.065,.085,0,_,.68,e.trim);for(let C=-A/2+.035;C<=A/2-.03;C+=.06)d(i,.023,.023,.008,C,_,.726,e.reflector,"z",16),d(i,.009,.009,.01,C,_,.734,a.bar,"z",12);for(let C of[-A*.46,A*.46])u(i,.014,.065,.06,C,_-.05,.68,e.darkmetal);for(let C=.65;C<.7;C+=.012)u(i,A-.03,.075,.004,0,_,C,e.darkmetal)}),x(["pods","lamp_cube"],()=>[-1,1].forEach(_=>M(_*.78,1.22,.92,w.has("pods")?.062:.043,"combo",w.has("pods")))),x(["lamp_round_spot","lamp_round_flood"],()=>[-1,1].forEach(_=>M(_*.28,.87,2.08,.089,w.has("lamp_round_flood")?"flood":"spot",!0))),x(["lamp_fog","lamp_dual"],()=>[-1,1].forEach(_=>M(_*.62,.62,2.01,.043,w.has("lamp_dual")?"dual":"fog"))),x(["lamp_compact_bar"],()=>{u(i,.23,.073,.105,0,.76,2.07,e.trim);for(let _ of[-.081,-.027,.027,.081])d(i,.023,.023,.012,_,.76,2.13,e.reflector,"z"),d(i,.009,.009,.015,_,.76,2.14,a.driving,"z");u(i,.06,.05,.055,0,.7,2.07,e.darkmetal)}),x(["lamp_work"],()=>[-1,1].forEach(_=>{M(_*.58,1.79,-1.77,.026,"work",!1,!0),u(i,.055,.065,.065,_*.58,1.725,-1.75,e.darkmetal)})),x(["rtt"],()=>{let _=E?1.95:1.91;u(i,1.34,.18,2.1,0,_,-.42,e.canvas),u(i,1.39,.055,2.13,0,_+.105,-.42,e.trim),u(i,1.35,.028,2.1,0,_-.1,-.42,e.darkmetal);for(let A of[-1,1])for(let C of[-1.1,.3])u(i,.018,.1,.045,A*.68,_,C,e.trim)}),x(["awning"],()=>{let _=E?1.92:1.78;d(i,.061,.061,2.25,.82,_,-.5,e.canvas,"z");for(let A of[-1.35,.35])u(i,.11,.03,.055,.78,_-.05,A,e.darkmetal)}),x(["boards"],()=>{let _=w.has("rtt")?E?2.1:2.06:E?1.88:1.83;[-.32,.32].forEach(A=>{u(i,.24,.035,1,A,_,-.4,e.accent);for(let C of[-.75,-.05])u(i,.11,.035,.04,A,_-.03,C,e.trim),d(i,.012,.012,.04,A,_+.025,C,e.metal,"y",8);for(let C=-.8;C<0;C+=.1)for(let L of[-.075,0,.075])d(i,.012,.014,.022,A+L,_+.027,C,e.accent,"y",6)})}),x(["mudflaps"],()=>[-1,1].forEach(_=>[-1.295,1.295].forEach(A=>{let C=new Ot;C.moveTo(-.145,.51),C.lineTo(.145,.51),C.lineTo(.126,.19),C.quadraticCurveTo(.12,.175,.105,.175),C.lineTo(-.105,.175),C.quadraticCurveTo(-.12,.175,-.126,.19),C.closePath();let L=new Sn(C,{depth:.007,bevelEnabled:!1,curveSegments:4}),F=L.attributes.position;for(let z=0;z<F.count;z++)F.setZ(z,F.getZ(z)-Math.max(0,.51-F.getY(z))*.11);L.computeVertexNormals();let O=h(L,e.rubber,i,_*.75,0,A-.405);O.name="Mudflap rubber",u(i,.25,.025,.012,_*.75,.5,A-.402,e.darkmetal);for(let z of[-.095,.095])d(i,.007,.007,.012,_*.75+z,.499,A-.392,e.metal,"z",8)}))),x(["sparecover"],()=>i.add(Jp(e,t?.sBadgeGeometry))),x(["bonnetguard"],()=>{let _=[];for(let L=0;L<=24;L++){let F=-.69+L*1.38/24;_.push(new N(F,1.17-.03*(Math.abs(F)/.69)**4,1.78-.035*(Math.abs(F)/.69)**4))}let A=new fi(_),C=new Ot;C.moveTo(-.008,-.027),C.lineTo(.008,-.027),C.quadraticCurveTo(.016,.025,.01,.048),C.lineTo(-.003,.048),C.quadraticCurveTo(.003,.015,-.008,-.027),h(new Sn(C,{steps:48,bevelEnabled:!1,extrudePath:A}),e.trim,i,0,0,0)}),x(["spoiler"],()=>{let _=i.children.length,A=u(i,1.4,.045,.22,0,1.744,-1.76,e.trim);A.rotation.x=.08;for(let C of[-.6,.6])u(i,.12,.065,.14,C,1.7,-1.72,e.trim);for(let C of i.children.slice(_))C.position.z+=.078}),x(["visors"],()=>i.add(Kp(e.smoked))),x(["hingecovers"],()=>[-1,1].forEach(_=>[.63,-.32].forEach(A=>[.72,1.04].forEach(C=>u(i,.035,.065,.1,_*(t?.78:.807),C,A,e.metal))))),x(["cladding"],()=>[-1,1].forEach(_=>u(i,.035,.15,1.77,_*(t?.759:.787),.65,-.08,e.textured))),x(["skid"],()=>u(i,1.22,.045,1.22,0,.38,.85,e.metal)),x(["headlamps"],()=>(t?[-.55,.55]:[-.6,.6]).forEach(_=>{let A=i.children.length,C=t?.977:.95,L=1.889;d(i,.117,.117,.05,_,C,L-.035,e.trim,"z",64),h(new Xt(.11,.005,12,64),e.chrome,i,_,C,L),h(new Xt(.099,.005,12,64),e.white,i,_,C,L+.008);for(let O of[-.045,.036]){d(i,O>0?.043:.03,O>0?.043:.03,.014,_,C+O,L+.005,e.reflector,"z",40);let z=h(new Pn(O>0?.035:.023,32,20),e.lens,i,_,C+O,L+.016);z.scale.z=.38}for(let O of[-1,1])for(let z of[-.025,0,.025])u(i,.022,.012,.008,_+O*.069,C+z,L+.012,e.reflector);let F=new qe;F.position.set(_,C,0),i.add(F);for(let O of i.children.slice(A,-1))O.position.x-=_,O.position.y-=C,F.add(O);F.scale.set(.9,.9,1)})),x(["dashcam"],()=>{u(i,.1,.055,.055,-.25,1.55,.62,e.trim),d(i,.017,.017,.012,-.25,1.55,.654,e.lens,"z"),u(i,.03,.04,.018,-.25,1.594,.62,e.trim)}),x(["headunit"],()=>{u(i,.26,.165,.028,0,1.225,.334,e.trim),u(i,.232,.137,.004,0,1.225,.318,e.glass);for(let _ of[-.1,.1])d(i,.008,.008,.007,_,1.152,.315,e.chrome,"z")}),x(["doortrim"],()=>i.add(lm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()})));let S=n!=="3door"&&w.has("touring");S&&x(["touring"],()=>i.add(hm(e,{camp:b.touringMode==="camp"&&!b.drivingPreview,drawers:!!b.touringDrawers&&!b.drivingPreview}))),S||x(["mod_reardoor_molle"],()=>i.add(zc(e,n))),n!=="3door"&&(S||x(["mod_halfmolly_5door"],()=>i.add(Gc(e))),S||x(["exploresetups_drawer_5door"],()=>i.add(Hc(e)))),!S&&!w.has("mod_halfmolly_5door")&&x(["molle"],()=>[-1,1].forEach(_=>{u(i,.012,.3,.42,_*.71,1.4,-1.37,e.trim);for(let A=-1.52;A<-1.2;A+=.08)for(let C=1.3;C<1.53;C+=.08)u(i,.015,.025,.045,_*.722,C,A,e.metal)})),!S&&!w.has("exploresetups_drawer_5door")&&x(["drawer"],()=>{let _=t?.8:.98;u(i,1.2,.22,.58,0,_,-1.34,e.darkmetal);for(let A of[-.3,.3])u(i,.565,.17,.018,A,_,-1.638,e.trim),u(i,.12,.032,.025,A,_+.035,-1.655,e.metal);u(i,1.19,.012,.57,0,_+.116,-1.34,e.seat)}),S||x(["shelf"],()=>{u(i,1.3,.025,.58,0,1.18,-1.3,e.trim);for(let _ of[-.6,.6])u(i,.025,.08,.56,_,1.21,-1.3,e.trim)}),x(["armrest"],()=>{u(i,.2,.14,.35,0,.98,-.2,e.seat),t&&u(i,.13,.12,.22,0,.88,-.2,e.trim)}),x(["mats"],()=>[-.36,.36].forEach(_=>{let A=t?.685:.71;u(i,.36,.018,.48,_,A,.42,e.trim);for(let C=.22;C<.64;C+=.04)u(i,.31,.006,.012,_,A+.011,C,e.darkmetal)})),x(["seats"],()=>{S||i.add(cm(e,{body:n,fabric:b.seatFabric||"canvas",colour:"#"+e.upholstery.color.getHexString()}))}),x(["steering"],()=>{h(new Xt(.123,.016,12,64),e.upholstery,i,-.38,1.16,.26);for(let _ of[-1,1])u(i,.065,.025,.032,-.38+_*.075,1.16,.25,e.upholstery)}),x(["ambient"],()=>{u(i,1.22,.004,.008,0,1.13,.355,e.ambient);for(let _ of[-.37,.37])u(i,.28,.004,.008,_,.82,.41,e.ambient)}),mm({parts:w,body:n,mats:e,rig:i,show:x}),v.push(...["tires","lift","autostylenn_big_suzuki_grille","autostylenn_cursive_grille","autostylenn_s_grille"].filter(_=>w.has(_)));for(let _ of i.children)!_.userData.finishTarget&&!_.userData.grilleBadge&&(_.userData.finishTarget="hardware");return v}function M(w,b,v,x,E,S=!1,_=!1){let A=new qe;A.position.set(w,b,v),_&&(A.rotation.y=Math.PI),i.add(A),S?d(A,x,x*.96,.072,0,0,0,e.trim,"z",48):u(A,x*2,x*2,.075,0,0,0,e.trim);for(let C=-.03;C<.025;C+=.012)u(A,x*1.7,x*1.8,.004,0,0,C,e.darkmetal);for(let C of[-1,1])u(A,.009,x*.85,.04,C*(x+.007),-x*.6,-.005,e.darkmetal),d(A,.007,.007,.012,C*(x+.013),0,0,e.chrome,"x",8);u(A,x*2+.025,.008,.045,0,-x*1.04,0,e.darkmetal);for(let C of[-1,1])for(let L of[-1,1]){d(A,x*.36,x*.28,.012,C*x*.4,L*x*.4,.042,e.reflector,"z",24);let F=h(new Pn(x*.24,16,10),a[E],A,C*x*.4,L*x*.4,.052);F.scale.z=.23}if(S){let C=h(new Xt(x*.91,.004,8,48),e.darkmetal,A,0,0,.047);d(A,x*.87,x*.87,.003,0,0,.059,e.lens,"z",48)}else u(A,x*1.78,x*1.78,.003,0,0,.06,e.lens)}return p}var qy={CabinDashboard:{color:"#34393c",roughness:.83,scale:38,strength:24e-5,type:"grain"},WovenCabinFabric:{color:"#353b40",roughness:.96,scale:17,strength:45e-5,type:"weave"},CabinSeatInsert:{color:"#535c62",roughness:.98,scale:20,strength:5e-4,type:"weave"},CabinCarpet:{color:"#252a2e",roughness:1,scale:24,strength:7e-4,type:"grain"},BrightChrome:{color:"#b1b8bd",roughness:.31,metalness:.78,scale:45,strength:6e-5,type:"grain"},WindowGlass:{color:"#10171b",roughness:.23,metalness:.12,scale:45,strength:0,type:"grain",opaque:!0}};function Xy(i,e){let n=new Uint8Array(65536),s=617;for(let a=0;a<128;a++)for(let o=0;o<128;o++){s=Math.imul(s,1664525)+1013904223>>>0;let l=i==="weave"?(((o>>2)+(a>>2))%2?21:-21)+Math.sin(o*Math.PI/2)*12+Math.cos(a*Math.PI/2)*7:0,c=Math.max(0,Math.min(255,128+l+(s/4294967296-.5)*42)),h=(a*128+o)*4;n[h]=n[h+1]=n[h+2]=c,n[h+3]=255}let r=new Mn(n,128,128,en);return r.wrapS=r.wrapT=$t,r.repeat.set(e,e),r.magFilter=It,r.minFilter=In,r.generateMipmaps=!0,r.needsUpdate=!0,r}function bm(i){let e=new Map,t=new Map;return i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=qy[n.material.name];if(!s)return;let r=t.get(n.material);if(!r){r=n.material.clone(),r.color.set(s.color),r.roughness=s.roughness,r.metalness=s.metalness||0,s.opaque&&(r.transparent=!1,r.opacity=1,r.depthWrite=!0);let a=s.type+s.scale,o=e.get(a);o||(o=Xy(s.type,s.scale),e.set(a,o)),r.bumpMap=o,r.bumpScale=s.strength,s.type==="weave"&&(r.map=o),r.envMapIntensity=.45,r.needsUpdate=!0,t.set(n.material,r),r.addEventListener("dispose",()=>o.dispose())}n.material=r,n.userData.disposableMaterial=!0}),{dispose(){for(let n of e.values())n.dispose();for(let n of t.values())n.dispose()},count:t.size}}var xm=new WeakMap,jy=new Set(["GrilleAnthracite","MouldedPlastic","GlossBlackGrille","WheelGunmetal","BrightChrome","GrilleLettering"]),Yy=i=>typeof i=="string"&&(i==="body"||/^#[0-9a-f]{6}$/i.test(i))?i:"original";function Gs(i,e){let t=new ot;for(let[n,s]of Object.entries(i.attributes)){let r=[];for(let a of e)for(let o=0;o<s.itemSize;o++)r.push(s.getComponent(a,o));t.setAttribute(n,new Ue(r,s.itemSize))}return t}function Ky(i,e){if(i.name!=="OEMGrille"||i.userData.badgeSeparated)return;i.userData.badgeSeparated=!0,i.updateWorldMatrix(!0,!0);let t=[];i.traverse(n=>{n.isMesh&&n.material.name==="BrightChrome"&&t.push(n)});for(let n of t){let s=n.geometry,r=s.attributes.position,a=s.index,o=[],l=[],c=new N,h=new Fe().copy(i.matrixWorld).invert().multiply(n.matrixWorld),u=e==="3door"?-.17:0;for(let f=0;f<(a?.count||r.count);f+=3){let g=[0,1,2].map(m=>a?a.getX(f+m):f+m);(g.every(m=>(c.fromBufferAttribute(r,m).applyMatrix4(h),Math.abs(c.x)<.09&&c.z>1.898+u))?l:o).push(...g)}if(!l.length)continue;let d=new we(Gs(s,l),n.material);d.name="FactoryGrilleEmblem",d.userData.grilleBadge=!0,d.position.copy(n.position),d.quaternion.copy(n.quaternion),d.scale.copy(n.scale),d.castShadow=n.castShadow,d.receiveShadow=n.receiveShadow,n.parent.add(d),n.geometry=Gs(s,o),s.dispose()}}function $u(i,e={},t="#d9b744",n="5door"){i&&(Ky(i,n),i.traverse(s=>{if(!s.isMesh||!jy.has(s.material?.name)&&!s.userData.grilleBadge)return;let r=xm.get(s);if(!r){let l=s.material;s.material=l.clone(),s.userData.disposableMaterial=!0,r={original:l.clone(),badge:!!s.userData.grilleBadge||l.name==="GrilleLettering"},xm.set(s,r),s.material.addEventListener("dispose",()=>r.original.dispose())}let a=s.material;a.copy(r.original);let o=Yy(e[r.badge?"badgeColour":"grilleColour"]);a.userData.explicitSurfaceColour=Object.hasOwn(e,r.badge?"badgeColour":"grilleColour"),o!=="original"?(a.color.set(o==="body"?t:o),a.vertexColors=!1,a.metalness=.12,a.roughness=.34):e.finish==="blackout"&&["BrightChrome","GrilleLettering"].includes(r.original.name)&&(a.color.set("#151b1e"),a.vertexColors=!1,a.metalness=.05,a.roughness=.78),a.needsUpdate=!0}))}var Qu=new WeakMap;function Jy(i,e="5door"){if(!i||Qu.has(i))return Qu.get(i);i.updateWorldMatrix(!0,!0);let t=i.parent?.matrixWorld.clone().invert()||new Fe,n=new qe;n.name="ConfigurableSeating",n.applyMatrix4(i.matrix.clone().invert()),i.add(n);let s={groups:{},materials:[],fabricKey:"",body:e},r=[];i.traverse(h=>{h.isMesh&&!h.userData.cabinUpgrade&&["WovenCabinFabric","CabinSeatInsert","BrightChrome"].includes(h.material?.name)&&r.push(h)});let a=e==="3door"?-.17:0,o=new N;for(let h of r){let u=h.geometry,d=u.attributes.position,f=u.index,g=t.clone().multiply(h.matrixWorld),y={keep:[],rear:[],passengerBack:[],passengerHead:[],front:[]};for(let m=0;m<(f?.count||d.count);m+=3){let p=[0,1,2].map(x=>f?f.getX(m+x):m+x),M=0,w=0,b=0;for(let x of p)o.fromBufferAttribute(d,x).applyMatrix4(g),M+=o.x/3,w+=o.y/3,b+=o.z/3;let v="keep";h.material.name==="BrightChrome"?M>.22&&M<.53&&w>1.2&&w<1.3&&Math.abs(b-(-.18+a))<.035&&(v="passengerHead"):w>.73&&w<1.46&&b<(e==="3door"?-.44:-.55)?v="rear":Math.abs(M)<.64&&Math.abs(M)>.1&&w>.74&&w<1.44&&b>-.32+a&&b<.42+a&&(v=M>0&&w>1.263?"passengerHead":M>0&&w>.88&&b<-.012+a?"passengerBack":"front"),y[v].push(...p)}h.geometry=Gs(u,y.keep);for(let m of["rear","passengerBack","passengerHead","front"])if(y[m].length){let p=s.groups[m];p||(p=new qe,p.name="Seating_"+m,n.add(p),s.groups[m]=p);let M=Gs(u,y[m]);if(M.applyMatrix4(g),g.determinant()<0){let b=[];for(let v=0;v<M.attributes.position.count;v+=3)b.push(v,v+2,v+1);M.setIndex(b)}let w=new we(M,h.material.clone());w.name=h.material.name==="CabinSeatInsert"?"SeatWovenCentre":h.material.name==="BrightChrome"?"PassengerHeadrestPost":"SeatOuterBolster",w.userData.cabinUpgrade=!0,w.userData.seatInsert=h.material.name==="CabinSeatInsert",w.userData.disposableMaterial=!0,w.userData.originalMaterial=h.material,w.castShadow=w.receiveShadow=!0,p.add(w),h.material.name!=="BrightChrome"&&s.materials.push(w)}u.dispose()}let l=s.groups.passengerBack;if(l){let h=new N(.37,.84,-.11+a);l.position.copy(h),l.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}let c=s.groups.rear;if(c){let h=new N(0,.82,e==="3door"?-.88:-1.055);c.position.copy(h),c.children.forEach(u=>u.geometry.translate(-h.x,-h.y,-h.z))}return Qu.set(i,s),s}function _m(i,{body:e="5door",seats:t=!1,fabric:n="canvas",colour:s="#a38b69",touring:r=!1,camp:a=!1}={}){let o=Jy(i,e);if(!o)return;let l=[t,ks(n),s].join(":");if(o.fabricKey!==l){for(let c of o.materials){let h=c.material;c.material=t?qn(c.userData.seatInsert?n:n==="leather"?"leather":"canvas",c.userData.seatInsert||["canvas","leather"].includes(n)?s:"#303536"):c.userData.originalMaterial.clone(),c.material.name=c.userData.seatInsert?"CabinSeatInsert":"SeatCoverBolster",c.material.vertexColors=!!c.geometry.attributes.color,h.dispose()}o.fabricKey=l}return o.groups.rear&&(o.groups.rear.visible=!r),o.groups.passengerBack&&(o.groups.passengerBack.rotation.x=r&&a?-Math.PI/2:0),o.groups.passengerHead&&(o.groups.passengerHead.visible=!(r&&a)),i.userData.interiorLayout={touring:!!r,camp:!!(r&&a),fabric:ks(n),seats:!!t},o}var qc=Object.freeze({P:.35,R:.31,N:.27,D:.23,2:.19,L:.15}),Xc=Object.freeze({"2H":.13,"4H":.085,"4L":.025});function ed(i,e){return(-40+Math.min(1,Math.max(0,i/e))*260)*Math.PI/180}function Zy(i){return{wheel:-(i.steer||0)*14,gearZ:qc[i.gear]??qc.N,rangeZ:Xc[i.range]??Xc["2H"],parking:i.parking?-.52:0,hdc:i.hdcActive?"ACTIVE":i.hdc?"READY":"OFF",tachometer:ed(i.rpm||0,7e3),speedometer:ed(Math.abs(i.speed||0)*3.6,180)}}function vm(i,e,t){let n=t==="3door"?-.17:0,s=new qe;return s.name="AnimatedSteeringWheel",s.position.set(-.38,1.16,.26+n),e.add(s),i.updateWorldMatrix(!0,!0),i.traverse(r=>{if(!r.isMesh)return;let a=r.geometry,o=a.index?a.toNonIndexed():a.clone(),l=new ot;for(let[f,g]of Object.entries(o.attributes)){let y=[];for(let m=0;m<g.count;m++)for(let p=0;p<g.itemSize;p++)y.push(g.getComponent(m,p));l.setAttribute(f,new Ue(y,g.itemSize))}o.dispose(),l.applyMatrix4(r.matrixWorld);let c=l.attributes.position,h=[],u=[];for(let f=0;f<c.count;f+=3){let g=(c.getX(f)+c.getX(f+1)+c.getX(f+2))/3,y=(c.getY(f)+c.getY(f+1)+c.getY(f+2))/3,m=(c.getZ(f)+c.getZ(f+1)+c.getZ(f+2))/3-n,p=Math.hypot(g+.38,y-1.16)<.182&&m>.218&&m<.282,M=y>.865&&y<1.055&&(Math.abs(g)<.032&&Math.abs(m-.26)<.045||Math.abs(g+.07)<.032&&Math.abs(m-.15)<.045),w=r.material.name==="RearLampRed"&&y>1.18&&y<1.27&&m>.29&&m<.32;(p?u:M||w?[]:h).push(f,f+1,f+2)}function d(f){let g=new ot;for(let[y,m]of Object.entries(l.attributes)){let p=[];for(let M of f)for(let w=0;w<m.itemSize;w++)p.push(m.getComponent(M,w));g.setAttribute(y,new Ue(p,m.itemSize))}return g}if(u.length){if(r.matrixWorld.determinant()<0)for(let y=0;y<u.length;y+=3)[u[y+1],u[y+2]]=[u[y+2],u[y+1]];let f=d(u);f.translate(.38,-1.16,-.26-n);let g=new we(f,r.material);g.castShadow=!0,s.add(g)}r.geometry=d(h).applyMatrix4(r.matrixWorld.clone().invert()),a.dispose(),l.dispose()}),s.rotation.x=.27,s}function ym(i,e,t){let n=new qe;n.name="LiveCabinControls",n.position.z=t==="3door"?-.17:0,i.add(n);let s=new Ke({color:"#222a2b",roughness:.62}),r=new Ke({color:"#7b8383",roughness:.28,metalness:.7});function a(v,x,E,S,_,A,C=s){let L=new we(new Bt(v,x,E,2,.008),C);return L.position.set(S,_,A),L.castShadow=!0,n.add(L),L}function o(v,x,E,S){let _=new qe;_.position.set(v,x,E),n.add(_);let A=new we(new zt(.006,.008,S,20),r);A.position.y=S/2,_.add(A);let C=new we(new Bt(.051,.043,.051,5,.015),s);return C.position.y=S,C.rotation.x=.12,_.add(C),_}let l=new Ke({color:"#0a1012",roughness:.94});a(.14,.012,.29,.015,.863,.25),a(.018,.002,.235,.028,.871,.25,l),a(.07,.012,.18,-.095,.865,.085),a(.012,.002,.14,-.095,.873,.085,l);let c=o(.028,.874,qc.N,.105),h=o(-.095,.874,Xc["2H"],.073),u=[-.3,-.46].map(v=>{let x=new qe;x.position.set(v,1.223,.304),n.add(x);let E=new we(new rn(.044,.0025,.0015),new Ft({color:"#e87856"}));return E.position.x=.021,x.add(E),x}),d=new qe;d.position.set(.105,.8,-.075),n.add(d);let f=new we(new Bt(.027,.032,.16,2,.008),s);f.position.z=.065,d.add(f);let g=[];function y(v,x,E,S,_,A,C=!1){let L=document.createElement("canvas");L.width=512,L.height=256;let F=L.getContext("2d");F.fillStyle="#20292a",F.fillRect(0,0,512,256),F.fillStyle="#f1eee0",F.textAlign="center",F.textBaseline="middle",F.font=`600 ${v.length>1?160:210}px sans-serif`,F.fillText(v,256,128,480);let O=new gn(L);O.colorSpace=xt,O.anisotropy=4,g.push(O);let z=new we(new an(x,E),new Ft({map:O}));return z.position.set(S,_,A),z.rotation.set(C?-Math.PI/2:0,C?0:Math.PI,C?Math.PI:0),n.add(z),{canvas:L,ctx:F,texture:O}}for(let[v,x]of Object.entries(qc))y(v,.014,.012,-.017,.873,x,!0);for(let[v,x]of Object.entries(Xc))y(v,.024,.012,-.127,.875,x,!0);function m(v,x,E,S,_,A){let C=document.createElement("canvas");C.width=1024,C.height=576;let L=C.getContext("2d");A(L,1024,576);let F=new gn(C);F.colorSpace=xt,F.anisotropy=8,g.push(F);let O=new Ft({map:F,toneMapped:!1}),z=new we(new an(v,x),O);z.position.set(E,S,_),z.rotation.y=Math.PI,n.add(z)}m(.198,.1115,0,1.232,.34,(v,x,E)=>{v.fillStyle="#0c1115",v.fillRect(0,0,x,E),v.fillStyle="#d7dcd9",v.font="24px sans-serif",v.fillText("FM  \u2022  09:41",34,43),v.textAlign="right",v.fillText("CONNECTED",x-34,43),v.textAlign="left",[["Audio","FM  91.1","#a86e36"],["Phone","Connect device","#447268"],["Navigation","Explore a new route","#405d75"],["Settings","Vehicle & display","#6c6252"]].forEach(([_,A,C],L)=>{let F=26+L%2*498,O=78+Math.floor(L/2)*235;v.strokeStyle=C,v.lineWidth=3,v.strokeRect(F,O,474,211),v.fillStyle=C,v.fillRect(F,O,8,211),v.fillStyle="#d9ddd9",v.font="34px sans-serif",v.fillText(_,F+28,O+64),v.fillStyle="#a5b0b1",v.font="25px sans-serif",v.fillText(A,F+28,O+117),v.beginPath(),v.arc(F+420,O+163,16,0,Math.PI*2),v.stroke()})});for(let[v,x]of[[-.083,"AUTO"],[0,"22.0"],[.083,"A/C"]])m(.031,.024,v,1.039,.275,(E,S,_)=>{E.fillStyle="#101315",E.fillRect(0,0,S,_),E.fillStyle="#bd7551",E.textAlign="center",E.textBaseline="middle",E.font=`500 ${x==="22.0"?235:180}px sans-serif`,E.fillText(x,S/2,_/2,S*.85)});for(let[v,x]of[[-.095,"12V"],[-.047,"USB"],[0,"\u2198"],[.047,"ESP"],[.095,"OFF"]])m(.021,.013,v,.965,.299,(E,S,_)=>{E.fillStyle="#171c1e",E.fillRect(0,0,S,_),E.fillStyle="#aeb6b3",E.font="190px sans-serif",E.textAlign="center",E.textBaseline="middle",E.fillText(x,S/2,_/2,S*.88)});let p=y("",.044,.047,-.38,1.216,.299),M=new we(new Pn(.0035,8,6),new Ft({color:"#dc6041"}));M.position.set(-.48,1.255,.305),n.add(M);let w=[[-.4,.073],[-.26,.045]].map(([v,x])=>{let E=new qe;E.name=v<-.3?"BrakePedal":"AcceleratorPedal",E.position.set(v,.8,.64),n.add(E);let S=new we(new Bt(x,.09,.018,2,.004),s);S.position.set(0,-.052,-.018),E.add(S);for(let _=0;_<4;_++){let A=new we(new rn(x*.82,.003,.003),r);A.position.set(0,-.08+_*.018,-.029),E.add(A)}return E});for(let[v,x,E]of[[-.3,7,"x1000"],[-.46,180,"km/h"]]){let S=document.createElement("canvas");S.width=S.height=512;let _=S.getContext("2d");_.fillStyle="#151a1c",_.beginPath(),_.arc(256,256,256,0,Math.PI*2),_.fill();let A=x===7?7:9,C=(O,z)=>{let K=ed(O,1);return[256-Math.cos(K)*z,256-Math.sin(K)*z]};for(let O=0;O<=A*5;O++){let z=O%5===0,K=O/(A*5),Z=C(K,z?207:219),he=C(K,235);_.strokeStyle=x===7&&K>5.8/7?"#b85c39":"#c8c4b8",_.lineWidth=z?4:2,_.beginPath(),_.moveTo(...Z),_.lineTo(...he),_.stroke(),z&&(_.fillStyle="#cda37c",_.font="500 31px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText(String(Math.round(K*x)),...C(K,170)))}_.fillStyle="#a7aca7",_.font="20px sans-serif",_.textAlign="center",_.fillText(E,256,356);let L=new gn(S);L.colorSpace=xt,L.anisotropy=4,g.push(L);let F=new we(new Ia(.053,64),new Ft({map:L}));F.position.set(v,1.223,.306),F.rotation.y=Math.PI,n.add(F)}let b="";return{setVisible(v){n.visible=!!v},update(v){let x=Zy(v);e.rotation.z=x.wheel,c.position.z=x.gearZ,h.position.z=x.rangeZ,d.rotation.x=x.parking,M.visible=!!v.parking,u[0].rotation.z=x.tachometer,u[1].rotation.z=x.speedometer,w[0].rotation.x=-(v.braking||v.brakeInput||0)*.24,w[1].rotation.x=-(v.throttle||0)*.22;let E=`${v.gear} ${v.range}`,S=`${((v.distance||0)/1e3).toFixed(1)} km`;if(E+S!==b){b=E+S;let{ctx:_,texture:A}=p;_.fillStyle="#a6b4a2",_.fillRect(0,0,512,256),_.fillStyle="#27312b",_.font="600 78px monospace",_.fillText(E,256,87,480),_.font="52px monospace",_.fillText(S,256,180,480),A.needsUpdate=!0}return x},dispose(){n.removeFromParent();let v=new Set,x=new Set;n.traverse(E=>{E.geometry&&v.add(E.geometry),E.material&&x.add(E.material)}),v.forEach(E=>E.dispose()),x.forEach(E=>E.dispose()),g.forEach(E=>E.dispose())},snapshot(){return{steeringWheel:e.rotation.z,gearZ:c.position.z,rangeZ:h.position.z,parking:d.rotation.x,brakePedal:w[0].rotation.x,acceleratorPedal:w[1].rotation.x}}}}var td=Object.freeze([{id:"oem",name:"Factory finish",colour:null},{id:"graphite",name:"Satin graphite",colour:"#454b50"},{id:"bronze",name:"Satin bronze",colour:"#987345"},{id:"silver",name:"Machined silver",colour:"#b5b9bc"},{id:"black",name:"Black",colour:"#171b1d"}].map(i=>Object.freeze({...i,description:"Representative cosmetic wheel finish, not a specific product or fitment claim."}))),nd=new WeakMap,Mm=new Set(["StockWheels","AllTerrainWheels","SpareWheel"]);function $y(i,e){for(let t=i;t;t=t.parent){if(Mm.has(t.name))return t;if(/Cabin|Grille|BodyShell|Bumper/.test(t.name))return null;if(t===e)break}return!i.name&&!i.parent?.name?i.parent:null}function Qy(i,e){let t=i.geometry,n=i.material,s=t.attributes.position;if(!s)return null;i.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!0,!1);let r=new Fe().copy(e.matrixWorld).invert().multiply(i.matrixWorld),a=[],o=new N,l=1/0,c=-1/0,h=1/0,u=-1/0,d=1/0,f=-1/0;for(let te=0;te<s.count;te++)o.fromBufferAttribute(s,te).applyMatrix4(r),a.push(o.clone()),l=Math.min(l,o.x),c=Math.max(c,o.x),h=Math.min(h,o.y),u=Math.max(u,o.y),d=Math.min(d,o.z),f=Math.max(f,o.z);let g=Mm.has(e.name),y=e.name==="SpareWheel",m=1/0,p=-1/0,M=1/0,w=-1/0,b=1/0,v=-1/0;if(g){let te=e.matrixWorld.clone().invert();e.traverse(se=>{let Ce=se.geometry?.attributes.position;if(!Ce)return;se.updateWorldMatrix(!0,!1);let Re=te.clone().multiply(se.matrixWorld);for(let Xe=0;Xe<Ce.count;Xe++)o.fromBufferAttribute(Ce,Xe).applyMatrix4(Re),m=Math.min(m,o.y),p=Math.max(p,o.y),M=Math.min(M,o.z),w=Math.max(w,o.z),b=Math.min(b,o.x),v=Math.max(v,o.x)})}let x=g&&!y,E=g?(m+p)/2:0,S=g?(M+w)/2:0,_=g?(b+v)/2:0,A=x?(w-M-p+m)/2:0,C=new Uint8Array(s.count),L=new Float32Array(s.count*3),F=t.attributes.color,O=Math.sign(e.parent?.position.x||1);for(let te=0;te<a.length;te++){let se=a[te],Ce=x?S+(se.z>=S?A:-A):S,Re=Math.hypot(se.y-E,se.z-Ce),Ze=(x?Math.sign(se.x):O)>0?c-se.x:se.x-l;C[te]=+(Re>.165||Re>.082&&Ze<.055);for(let st=0;st<3;st++)L[te*3+st]=n.color[["r","g","b"][st]]*(n.vertexColors&&F?F.getComponent(te,st):1)}if(!C.some(Boolean))return null;let z=t.clone(),K=n.clone();z.setAttribute("color",new Ue(L,3));let Z=z.attributes.color.array;K.color.set("#ffffff"),K.vertexColors=!0,K.userData.wheelFinishOriginal={name:n.name,color:n.color.getHexString(),vertexColors:n.vertexColors};let he={originalGeometry:t,originalMaterial:n,geometry:z,material:K,mask:C,base:L,colours:Z,restoring:!1,released:!1},$=()=>{he.restoring||he.released||(he.released=!0,t.dispose(),n.dispose())};return z.addEventListener("dispose",$),K.addEventListener("dispose",$),i.geometry=z,i.material=K,nd.set(i,he),he}function e1(i,e){e.restoring=!0,i.geometry=e.originalGeometry,i.material=e.originalMaterial,e.geometry.dispose(),e.material.dispose(),nd.delete(i)}function Sm(i,e){let t=0;return i?.traverse&&(i.updateWorldMatrix?.(!0,!0),i.traverse(n=>{if(!n.isMesh||Array.isArray(n.material))return;let s=nd.get(n);if(e.id==="oem"){s&&(e1(n,s),t++);return}if(!s){if(!["MachinedAlloy","WheelGunmetal"].includes(n.material?.name))return;let a=$y(n,i);if(!a||(s=Qy(n,a),!s))return}let r=new ze(e.colour);for(let a=0;a<s.mask.length;a++)for(let o=0;o<3;o++)s.colours[a*3+o]=s.mask[a]?r[["r","g","b"][o]]:s.base[a*3+o];s.geometry.attributes.color.needsUpdate=!0,s.material.userData.wheelFinish=e.id,t++})),t}function wm(i,e="oem"){return Sm(i,td.find(t=>t.id===e)||td[0])}function Tm(i,e){return Sm(i,/^#[0-9a-f]{6}$/i.test(e||"")?{id:"custom",colour:e}:td[0])}function Em(i,e,t="5door"){if(!i||!e?.attributes.position.count||i.userData.steeringBadgeFitted)return null;i.userData.steeringBadgeFitted=!0,i.updateWorldMatrix(!0,!0);let n=t==="3door"?-.17:0,s=[];i.traverse(h=>{h.isMesh&&h.material.name==="BrightChrome"&&s.push(h)});for(let h of s){let u=h.geometry,d=u.attributes.position,f=u.index,g=[],y=new N,m=new Fe().copy(i.parent?.matrixWorld||new Fe).invert().multiply(h.matrixWorld);for(let p=0;p<(f?.count||d.count);p+=3){let M=[0,1,2].map(b=>f?f.getX(p+b):p+b);M.every(b=>(y.fromBufferAttribute(d,b).applyMatrix4(m),Math.abs(y.x+.38)<.04&&Math.abs(y.y-1.16)<.04&&y.z>.218+n&&y.z<.232+n))||g.push(...M)}g.length<(f?.count||d.count)&&(h.geometry=Gs(u,g),u.dispose())}let r=e.clone();r.computeBoundingBox();let a=r.boundingBox.getCenter(new N),o=r.boundingBox.max.x-r.boundingBox.min.x;r.translate(-a.x,-a.y,-a.z),r.scale(.044/o,.044/o,.044/o),r.rotateY(Math.PI),r.translate(-.38,1.16,.222+n);let l=new Ke({name:"SteeringEmblem",color:"#c7cbcc",metalness:.65,roughness:.27}),c=new we(r,l);return c.name="SteeringSuzukiEmblem",c.userData.disposableMaterial=!0,c.castShadow=!1,c.applyMatrix4(i.matrix.clone().invert()),i.add(c),c}var Am=new Set(["interior","passenger","doors","driver-door","passenger-door","seats","seatbacks","storage","console","footwell","headliner"]),Rm=new Set(["cabin","cutaway","cargo","doors-cutaway","headliner-cutaway","touring"]);function Cm(i,e="5door"){let t=e==="3door"?-.17:0,n={interior:{eye:[-.38,1.48,-.08],yaw:0,pitch:-.45},passenger:{eye:[.38,1.48,-.08],yaw:0,pitch:-.38},doors:{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"driver-door":{eye:[.24,1.4,.2],yaw:-Math.PI/2,pitch:-.3},"passenger-door":{eye:[-.24,1.4,.2],yaw:Math.PI/2,pitch:-.3},seats:{eye:[.04,1.43,.14],yaw:Math.PI,pitch:-.48},seatbacks:{eye:[.02,1.43,-.64],yaw:0,pitch:-.6},storage:{eye:[.01,1.41,-.38],yaw:Math.PI,pitch:-.43},console:{eye:[.02,1.37,-.15],yaw:0,pitch:-.94},footwell:{eye:[-.39,1.13,.16],yaw:0,pitch:-.93},headliner:{eye:[.02,1.25,-.4],yaw:Math.PI,pitch:.72}},s=n[i]||n.interior;return{...s,eye:[s.eye[0],s.eye[1],s.eye[2]+t]}}var Kr=class extends ot{constructor(e=new we,t=new N,n=new yn,s=new N(1,1,1)){super();let r=[],a=[],o=[],l=new N,c=new at().getNormalMatrix(e.matrixWorld),h=new Fe;h.makeRotationFromEuler(n),h.setPosition(t);let u=new Fe;u.copy(h).invert(),d(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("uv",new Ue(o,2)),a.length>0&&this.setAttribute("normal",new Ue(a,3));function d(){let m=[],p=new N,M=new N,w=e.geometry,b=w.attributes.position,v=w.attributes.normal;if(w.index!==null){let x=w.index;for(let E=0;E<x.count;E++)p.fromBufferAttribute(b,x.getX(E)),v?(M.fromBufferAttribute(v,x.getX(E)),f(m,p,M)):f(m,p)}else{if(b===void 0)return;for(let x=0;x<b.count;x++)p.fromBufferAttribute(b,x),v?(M.fromBufferAttribute(v,x),f(m,p,M)):f(m,p)}m=g(m,l.set(1,0,0)),m=g(m,l.set(-1,0,0)),m=g(m,l.set(0,1,0)),m=g(m,l.set(0,-1,0)),m=g(m,l.set(0,0,1)),m=g(m,l.set(0,0,-1));for(let x=0;x<m.length;x++){let E=m[x];o.push(.5+E.position.x/s.x,.5+E.position.y/s.y),E.position.applyMatrix4(h),r.push(E.position.x,E.position.y,E.position.z),E.normal!==null&&a.push(E.normal.x,E.normal.y,E.normal.z)}}function f(m,p,M=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(u),M?(M.applyNormalMatrix(c),m.push(new So(p.clone(),M.clone()))):m.push(new So(p.clone()))}function g(m,p){let M=[],w=.5*Math.abs(s.dot(p));for(let b=0;b<m.length;b+=3){let v=0,x,E,S,_,A=m[b+0].position.dot(p)-w,C=m[b+1].position.dot(p)-w,L=m[b+2].position.dot(p)-w,F=A>0,O=C>0,z=L>0;switch(v=(F?1:0)+(O?1:0)+(z?1:0),v){case 0:{M.push(m[b]),M.push(m[b+1]),M.push(m[b+2]);break}case 1:{if(F&&(x=m[b+1],E=m[b+2],S=y(m[b],x,p,w),_=y(m[b],E,p,w)),O){x=m[b],E=m[b+2],S=y(m[b+1],x,p,w),_=y(m[b+1],E,p,w),M.push(S),M.push(E.clone()),M.push(x.clone()),M.push(E.clone()),M.push(S.clone()),M.push(_);break}z&&(x=m[b],E=m[b+1],S=y(m[b+2],x,p,w),_=y(m[b+2],E,p,w)),M.push(x.clone()),M.push(E.clone()),M.push(S),M.push(_),M.push(S.clone()),M.push(E.clone());break}case 2:{F||(x=m[b].clone(),E=y(x,m[b+1],p,w),S=y(x,m[b+2],p,w),M.push(x),M.push(E),M.push(S)),O||(x=m[b+1].clone(),E=y(x,m[b+2],p,w),S=y(x,m[b],p,w),M.push(x),M.push(E),M.push(S)),z||(x=m[b+2].clone(),E=y(x,m[b],p,w),S=y(x,m[b+1],p,w),M.push(x),M.push(E),M.push(S));break}case 3:break}}return M}function y(m,p,M,w){let b=m.position.dot(M)-w,v=p.position.dot(M)-w,x=b/(b-v),E=new N(m.position.x+x*(p.position.x-m.position.x),m.position.y+x*(p.position.y-m.position.y),m.position.z+x*(p.position.z-m.position.z)),S=null;return m.normal!==null&&p.normal!==null&&(S=new N(m.normal.x+x*(p.normal.x-m.normal.x),m.normal.y+x*(p.normal.y-m.normal.y),m.normal.z+x*(p.normal.z-m.normal.z))),new So(E,S)}}},So=class{constructor(e,t=null){this.position=e,this.normal=t}clone(){let e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}};function Pm(i){let e=new Map,t=new Map,n=i.clone();return Im(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Im(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Im(i.children[n],e.children[n],t)}var jc=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Yc(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yc(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ji.extractUrlBase(e);a=ji.resolveURL(c,this.path)}else a=ji.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new rs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Um){try{a[mt.KHR_BINARY_GLTF]=new Sd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:a[u]=new od;break;case mt.KHR_DRACO_MESH_COMPRESSION:a[u]=new wd(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:a[u]=new Td;break;case mt.KHR_MESH_QUANTIZATION:a[u]=new Ed;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function t1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ad=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ze(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xi(h),c.distance=u;break;case"spot":c=new as(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},od=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(r,r)}return Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],nn),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],nn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xt)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},vd=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},yd=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Yc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Md=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let y=new Fe,m=new N,p=new fn,M=new N(1,1,1),w=new Gi(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),w.setMatrixAt(v,y.compose(m,p,M));let b=null;for(let v in l)if(v==="_COLOR_0"){let x=l[v];w.instanceColor=new zi(x.array,x.itemSize,x.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let E=w.geometry;b=new ot,b.name=E.name;for(let S in E.attributes)b.setAttribute(S,E.attributes[S]);for(let S in E.morphAttributes)b.morphAttributes[S]=E.morphAttributes[S];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(let S of E.groups)b.addGroup(S.start,S.count,S.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),w.geometry=b}let x=l[v];b.setAttribute(v,new zi(x.array,x.itemSize,x.normalized))}Mt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Um="glTF",wo=12,Dm={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-wo,r=new DataView(e,wo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Dm.JSON){let c=new Uint8Array(e,wo+a,o);this.content=n.decode(c)}else if(l===Dm.BIN){let c=wo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Rd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Rd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}u(f)},o,c,nn,d)})})}},Td=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ed=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},Kc=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,y=g-c,m=-2*f+3*d,p=f-d,M=1-m,w=p-d+u;for(let b=0;b!==o;b++){let v=a[y+b+o],x=a[y+b+l]*h,E=a[g+b+o],S=a[g+b]*h;r[b]=M*v+w*x+m*E+p*S}return r}},n1=new fn,Ad=class extends Kc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return n1.fromArray(r).normalize().toArray(r),r}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lm={9728:Nt,9729:It,9984:Xl,9985:kr,9986:Ls,9987:In},Nm={33071:Cn,33648:gr,10497:$t},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i1={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function Hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function r1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function a1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o1(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rd(t.attributes):e=i.indices+":"+rd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rd(i.targets[n]);return e}function rd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function l1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var c1=new Fe,Pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new qa(this.options.manager):this.textureLoader=new Ya(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Hs(r,o,s),Ci(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=id[s.type],o=Jr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Zt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=id[s.type],c=Jr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,w=t.cache.get(M);w||(y=new c(o,p*f,s.count*f/h),w=new Ts(y,f/h),t.cache.add(M,w)),m=new is(w,l,d%f/h,g)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),m=new Zt(y,l,g);if(s.sparse!==void 0){let p=id.SCALAR,M=Jr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new M(a[1],w,s.sparse.count*p),x=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,S=v.length;E<S;E++){let _=v[E];if(m.setX(_,x[E*l]),l>=2&&m.setY(_,x[E*l+1]),l>=3&&m.setZ(_,x[E*l+2]),l>=4&&m.setW(_,x[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Lm[d.magFilter]||It,h.minFilter=Lm[d.minFilter]||In,h.wrapS=Nm[d.wrapS]||$t,h.wrapT=Nm[d.wrapT]||$t,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==It,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new sn(y);m.needsUpdate=!0,d(m)}),t.load(ji.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ci(u,a),u.userData.mimeType=a.mimeType||l1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ar,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Er,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ke}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let u=s[mt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],nn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);let h=r.alphaMode||sd.OPAQUE;if(h===sd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===sd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hs(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=o1(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Fm(new ot,c,t),c.mode===ai.TRIANGLE_STRIP?d=d.then(f=>Hu(f,bo)):c.mode===ai.TRIANGLE_FAN&&(d=d.then(f=>Hu(f,zr))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?s1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=a[f],p,M=c[f];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,b=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&b?new wa(y,M):new we(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ai.LINES)p=new Ea(y,M);else if(m.mode===ai.LINE_STRIP)p=new Es(y,M);else if(m.mode===ai.LINE_LOOP)p=new Aa(y,M);else if(m.mode===ai.POINTS)p=new Ra(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&a1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ci(p,r),m.extensions&&Hs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Hs(s,u[0],r),u[0];let d=new qe;r.extensions&&Hs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(tn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ta(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let w=0,b=d.length;w<b;w++){let v=d[w],x=f[w],E=g[w],S=y[w],_=m[w];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let A=n._createAnimationTracks(v,x,E,S,_);if(A)for(let C=0;C<A.length;C++)p.push(A[C])}let M=new Wa(r,void 0,p);return Ci(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,c1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new wr:c.length>1?h=new qe:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ci(h,r),r.extensions&&Hs(n,h,r),r.matrix!==void 0){let u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new qe;n.name&&(r.name=s.createUniqueName(n.name)),Ci(r,n),n.extensions&&Hs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Pm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof pn||d instanceof sn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ms[r.path]===ms.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ms[r.path]){case ms.weights:h=Vi;break;case ms.rotation:h=Wi;break;case ms.translation:case ms.scale:h=ss;break;default:n.itemSize===1?h=Vi:h=ss;break}let u=s.interpolation!==void 0?i1[s.interpolation]:Ss,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let y=new h(l[f]+"."+ms[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Wi?Ad:Kc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function h1(i,e,t){let n=e.attributes,s=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){let h=Cd(Jr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new N,l=new N;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=Cd(Jr[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Fm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Rd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return dt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Ci(i,e),h1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?r1(i,e.targets,t):i})}var Om=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),w=0;w<p.length;++w){var b=p.charCodeAt(w);M[w]=b>96?b-97:b>64?b-39:b+4}for(var v=0,w=0;w<p.length;++w)M[v++]=M[w]<60?n[M[w]]:(M[w]-60)*64+M[++w];return M.buffer.slice(0,v)}function l(p,M,w,b,v,x,E){var S=p.exports.sbrk,_=b+3&-4,A=S(_*v),C=S(x.length),L=new Uint8Array(p.exports.memory.buffer);L.set(x,C);var F=M(A,b,v,C,x.length);if(F==0&&E&&E(A,_,v),w.set(L.subarray(A,A+b*v)),S(A-S(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(w){var b=w.data;M.pending-=b.count,M.requests[b.id][b.action](b.value),delete M.requests[b.id]},M}function g(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),w=new Blob([M],{type:"text/javascript"}),b=URL.createObjectURL(w),v=u.length;v<p;++v)u[v]=f(b);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function y(p,M,w,b,v){for(var x=u[0],E=1;E<u.length;++E)u[E].pending<x.pending&&(x=u[E]);return new Promise(function(S,_){var A=new Uint8Array(w),C=++d;x.pending+=p,x.requests[C]={resolve:S,reject:_},x.object.postMessage({id:C,count:p,size:M,source:A,mode:b,filter:v},[A.buffer])})}function m(p){var M=p.data;self.ready.then(function(w){if(!M.id)return self.close();try{var b=new Uint8Array(M.count*M.size);l(w,w.exports[M.mode],b,M.count,M.size,M.source,w.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,M,w,b,v){l(r,r.exports.meshopt_decodeVertexBuffer,p,M,w,b,r.exports[c[v]])},decodeIndexBuffer:function(p,M,w,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,M,w,b)},decodeIndexSequence:function(p,M,w,b){l(r,r.exports.meshopt_decodeIndexSequence,p,M,w,b)},decodeGltfBuffer:function(p,M,w,b,v,x){l(r,r.exports[h[v]],p,M,w,b,r.exports[c[x]])},decodeGltfBufferAsync:function(p,M,w,b,v){return u.length>0?y(p,M,w,h[b],c[v]):a.then(function(){var x=new Uint8Array(p*M);return l(r,r.exports[h[b]],x,p,M,w,r.exports[c[v]]),x})}}})();function km(i,e,t,n){let s=new qe;if(s.name="PlayerNameDecals",!i)return s;let r=document.createElement("canvas");r.width=1024,r.height=192;let a=r.getContext("2d");a.textAlign="center",a.textBaseline="middle",a.font="700 100px sans-serif",a.lineJoin="round",a.strokeStyle="#182622",a.lineWidth=9,a.strokeText(i,512,96,960),a.fillStyle="#fffdf2",a.fillText(i,512,96,960);let o=new gn(r);o.colorSpace=xt;let l=new Ke({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-5,roughness:.65});n.updateMatrixWorld(!0),l.userData.disposableMaterial=!0;for(let c of[-1,1])for(let h of t){let u=n.localToWorld(new N(c*.748,.99,e==="3door"?-.07:.13)),d=new yn(0,c*Math.PI/2,0),f=new Kr(h,u,d,new N(.69,.13,.13));if(f.applyMatrix4(n.matrixWorld.clone().invert()),f.attributes.position.count){let g=new we(f,l);g.renderOrder=5,s.add(g)}else f.dispose()}return s}function Bm(i){return Array.from(String(i||"").normalize("NFC").replace(/[^\p{L}\p{M}\p{N} ._'’-]/gu,"").trim()).slice(0,20).join("")}function u1(i,e=[]){for(let t=i.object;t;t=t.parent)if(!t.visible)return!1;return!e.some(t=>t.distanceToPoint(i.point)<0)}function d1(i){let e=i.object,t=Array.isArray(e.material)?e.material[i.face?.materialIndex||0]:e.material;if(!t||t.opacity<.2)return null;let n=Yu(e);if(!n)return null;let{fabric:s,protectedSurface:r}=Ku(t),a=/TyreRubber|Tread|Sidewall/i.test(t.name)||t.userData.surfaceKind==="rubber"&&n==="wheels",o=n==="grille"&&t.name==="IntakeShadow";return{target:n,material:t.name,colour:o||!s&&!r,finish:o||!s&&!r,fabric:s,tyre:a,point:i.point.toArray()}}function f1(i=7){let e=null,t=new Set;return{down(n){if(t.add(n.pointerId),t.size>1){e=null;return}e=n.button===0?{id:n.pointerId,x:n.clientX,y:n.clientY,time:n.timeStamp,moved:!1}:null},move(n){e?.id===n.pointerId&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(e.moved=!0)},cancel(n){t.delete(n.pointerId),e=null},up(n){t.delete(n.pointerId);let s=e?.id===n.pointerId&&!e.moved&&n.timeStamp-e.time<700&&Math.hypot(n.clientX-e.x,n.clientY-e.y)<=i;return e=null,!!s}}}function zm({canvas:i,camera:e,root:t,planes:n=()=>[],enabled:s=()=>!0,onPick:r}){let a=f1(),o=new Ja,l=new ie;i.addEventListener("pointerdown",c=>a.down(c)),i.addEventListener("pointermove",c=>a.move(c)),i.addEventListener("pointercancel",c=>a.cancel(c)),i.addEventListener("pointerup",c=>{if(!a.up(c)||!s())return;let h=i.getBoundingClientRect();l.set((c.clientX-h.left)/h.width*2-1,-(c.clientY-h.top)/h.height*2+1),t.updateMatrixWorld(!0),e.updateMatrixWorld(!0),o.setFromCamera(l,e);for(let u of o.intersectObject(t,!0)){if(!u1(u,n()))continue;let d=d1(u);if(!((Array.isArray(u.object.material)?u.object.material[u.face?.materialIndex||0]:u.object.material)?.opacity<.2)){d&&r(d);break}}})}var p1=Object.freeze(["highway","allterrain","mudterrain"]);function Gm(i={},e=new Set){return p1.includes(i.tyreType)?i.tyreType:e.has("tires")?"allterrain":"highway"}function m1(i=.368,e=.235){let t=e/2,n=i-.016,s=[[.193,-t*.72],[.235,-t*.93],[i*.83,-t],[n*.97,-t*.96],[n,-t*.77],[n,t*.77],[n*.97,t*.96],[i*.83,t],[.235,t*.93],[.193,t*.72]],r=new pi(s.map(([c,h])=>new ie(c,h)),96);r.rotateZ(-Math.PI/2);let a=[r.toNonIndexed()];r.dispose();for(let c=0;c<32;c++)for(let h of[-1,1]){let u=(c+(h>0?.5:0))*Math.PI*2/32;for(let[d,f,g,y]of[[h*e*.32,e*.36,.047,h*.38],[h*e*.105,e*.3,.058,-h*.48]]){let m=new Bt(f,.019,g,1,.003);m.rotateY(y),m.translate(d,i-.0095,0),m.rotateX(u),a.push(m.index?m.toNonIndexed():m),m.index&&m.dispose()}}let o=kc(a);a.forEach(c=>c.dispose());let l=o.attributes.position;for(let c=0;c<l.count;c++){let h=l.getY(c),u=l.getZ(c),d=Math.hypot(h,u);d>i&&(l.setY(c,h*i/d),l.setZ(c,u*i/d))}return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o.userData.tyreType="mudterrain",o}var To=new WeakMap,g1=new Set(["StockWheels","AllTerrainWheels"]);function b1(i,e){for(let t=i.parent;t;t=t.parent){if(g1.has(t.name))return t;if(t===e)break}return i.parent}function x1(i){let e=To.get(i);e&&(e.originals.forEach(t=>t.visible=e.visibility.get(t)),i.remove(e.group),e.group.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),To.delete(i))}function _1(i){let e=[];i?.traverse(t=>{To.has(t)&&e.push(t)}),e.forEach(x1)}function Hm(i,e="highway"){if(!i?.traverse)return 0;if(e!=="mudterrain")return _1(i),0;let t=new Map;i.updateWorldMatrix(!0,!0),i.traverse(s=>{if(s.isMesh&&s.material?.name==="TyreRubber"){let r=b1(s,i);if(To.has(r))return;t.has(r)||t.set(r,[]),t.get(r).push(s)}});let n=0;for(let[s,r]of t){let a=[],o=new N,l=new qt;for(let y of r){let m=new Fe().copy(s.matrixWorld).invert().multiply(y.matrixWorld),p=y.geometry.attributes.position;for(let M=0;M<p.count;M++)o.fromBufferAttribute(p,M).applyMatrix4(m),a.push(o.clone()),l.expandByPoint(o)}let c=l.getSize(new N),h=c.z>c.y*2,u=l.getCenter(new N),d=new Map;for(let y of a){let m=h?`${y.x>u.x?1:-1},${y.z>u.z?1:-1}`:"single";d.has(m)||d.set(m,new qt),d.get(m).expandByPoint(y)}let f=new qe;f.name="MudTerrainTyres";for(let y of d.values()){let m=y.getSize(new N),p=y.getCenter(new N),M=r[0].material.clone();M.name="MudTerrainRubber",M.vertexColors=!1,M.roughness=.97,M.metalness=0;let w=new we(m1(m.y/2,m.x),M);w.position.copy(p),w.castShadow=!0,w.receiveShadow=!0,f.add(w),n++}let g=new Map(r.map(y=>[y,y.visible]));r.forEach(y=>y.visible=!1),s.add(f),To.set(s,{group:f,originals:r,visibility:g})}return n}var Vm={type:"change"},Dd={type:"start"},qm={type:"end"},Jc=new Mi,Wm=new Rn,v1=Math.cos(70*tn.DEG2RAD),hn=new N,On=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6,Zc=class extends Za{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new fn,this._lastTargetPosition=new N,this._quat=new fn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fr,this._sphericalDelta=new Fr,this._scale=1,this._panOffset=new N,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new N,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=M1.bind(this),this._onPointerDown=y1.bind(this),this._onPointerUp=S1.bind(this),this._onContextMenu=P1.bind(this),this._onMouseWheel=E1.bind(this),this._onKeyDown=A1.bind(this),this._onTouchStart=R1.bind(this),this._onTouchMove=C1.bind(this),this._onMouseDown=w1.bind(this),this._onMouseMove=T1.bind(this),this._interceptControlDown=I1.bind(this),this._interceptControlUp=D1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vm),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=hn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jc.origin.copy(this.object.position),Jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jc.direction))<v1?this.object.lookAt(this.target):(Wm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jc.intersectPlane(Wm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(Vm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function y1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function M1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function S1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qm),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function w1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Dd)}function T1(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function E1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qm))}function A1(i){this.enabled!==!1&&this._handleKeyDown(i)}function R1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Dd)}function C1(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function P1(i){this.enabled!==!1&&i.preventDefault()}function I1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var $c=class extends Bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new rn;e.deleteAttribute("uv");let t=new Ke({side:bn}),n=new Ke,s=new Xi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new we(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Gi(e,n,6),o=new Mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new we(e,Zr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new we(e,Zr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new we(e,Zr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new we(e,Zr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new we(e,Zr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new we(e,Zr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Zr(i){return new Ha({color:0,emissive:16777215,emissiveIntensity:i})}var Qc=class extends we{constructor(e,t,n,s=128){if(t<=0||n<=0||s<=0)throw new Error("THREE.GroundedSkybox: height, radius, and resolution must be positive.");let r=new Pn(n,2*s,s);r.scale(1,1,-1);let a=r.getAttribute("position"),o=new N;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){let c=-t*3/2,h=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(h),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(r,new Ft({map:e,depthWrite:!1}))}};var Xm=new Float64Array(1024);for(let i=0;i<1024;i++)Xm[i]=Math.pow(i*.003717127+.0521327014,2.4);var eh=class extends ei{constructor(e){super(e),this.type=kt}setDataType(e){return this.type=e,this}parse(e,t){let n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},s=new TextDecoder,r=new Uint8Array(e),a=[],o=0;for(;o<r.length-1;){if(r[o]!==255){o++;continue}let h=r[o+1];if(h===216){a.push({sectionType:h,section:r.subarray(o,o+2),sectionOffset:o+2}),o+=2;continue}if(h===224||h===225||h===226){let u=r[o+2]<<8|r[o+3],d=o+2+u;a.push({sectionType:h,section:r.subarray(o,d),sectionOffset:o+2}),o=d;continue}if(h>=192&&h<=254&&h!==217&&(h<208||h>215)){let u=r[o+2]<<8|r[o+3];o+=2+u;continue}o+=2}let l,c;for(let h=0;h<a.length;h++){let{sectionType:u,section:d,sectionOffset:f}=a[h];if(u!==224){if(u===225)this._parseXMPMetadata(s.decode(new Uint8Array(d)),n);else if(u===226){let g=new DataView(d.buffer,d.byteOffset+2,d.byteLength-2),y="urn:iso:std:iso:ts:21496:-1\0";if(d.byteLength>=y.length+2){let p=!0;for(let M=0;M<y.length;M++)if(d[2+M]!==y.charCodeAt(M)){p=!1;break}if(p){let M=d.subarray(2+y.length);this._parseISOMetadata(M,n);continue}}if(g.getUint32(2,!1)===1297106432){let p=g.getUint32(6)===1229531648,M=60,w=g.getUint32(M,p),b=g.getUint32(M+4,p),v=g.getUint32(M+16,p),x=g.getUint32(M+20,p)+f+6;l=new Uint8Array(e,b,w),c=new Uint8Array(e,x,v)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(n,l,c,(h,u,d)=>{t({width:u,height:d,data:h,format:en,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}_parseISOMetadata(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=4,r=n.getUint8(s);s+=1;let a=(r&4)!==0,o=(r&8)!==0,l,c,h,u,d,f,g;if(o){let y=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(m/y);let p=n.getUint32(s,!1);s+=4,g=Math.log2(p/y);let M=n.getInt32(s,!1);s+=4,l=M/y;let w=n.getInt32(s,!1);s+=4,c=w/y;let b=n.getUint32(s,!1);s+=4,h=b/y;let v=n.getInt32(s,!1);s+=4,u=v/y*255,d=n.getInt32(s,!1)/y*255}else{let y=n.getUint32(s,!1);s+=4;let m=n.getUint32(s,!1);s+=4,f=Math.log2(y/m);let p=n.getUint32(s,!1);s+=4;let M=n.getUint32(s,!1);s+=4,g=Math.log2(p/M);let w=n.getInt32(s,!1);s+=4;let b=n.getUint32(s,!1);s+=4,l=w/b;let v=n.getInt32(s,!1);s+=4;let x=n.getUint32(s,!1);s+=4,c=v/x;let E=n.getUint32(s,!1);s+=4;let S=n.getUint32(s,!1);s+=4,h=E/S;let _=n.getInt32(s,!1);s+=4;let A=n.getUint32(s,!1);s+=4,u=_/A*255;let C=n.getInt32(s,!1);s+=4;let L=n.getUint32(s,!1);d=C/L*255}t.version="1.0",t.baseRenditionIsHDR=a,t.gainMapMin=l,t.gainMapMax=c,t.gamma=h,t.offsetSDR=u,t.offsetHDR=d,t.hdrCapacityMin=f,t.hdrCapacityMax=g}load(e,t,n,s){let r=new Mn(this.type===kt?new Uint16Array:new Float32Array,0,0,en,this.type,lo,Cn,Cn,It,uu,1,nn);r.generateMipmaps=!0,r.flipY=!0;let a=new rs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{try{this.parse(o,l=>{r.image={data:l.data,width:l.width,height:l.height},r.needsUpdate=!0,t&&t(r,l)})}catch(l){s&&s(l),console.error(l)}},n,s),r}_parseXMPMetadata(e,t){let s=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[r]=s.getElementsByTagName("Container:Directory");if(!r){let[a]=s.getElementsByTagName("rdf:Description");t.version=a.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=a.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(a.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(a.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(a.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(a.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(a.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(a.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(a.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e<10.31475?e*303527e-9:e<1024?Xm[e|0]:Math.pow(e*.003717127+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,s,r){let a=o=>createImageBitmap(new Blob([o],{type:"image/jpeg"}));Promise.all([a(t),a(n)]).then(([o,l])=>{let c=o.width,h=o.height,u=c/h,d=l.width/l.height;if(u!==d){r("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let f=document.createElement("canvas"),g=f.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});f.width=c,f.height=h,g.drawImage(l,0,0,l.width,l.height,0,0,c,h);let y=g.getImageData(0,0,c,h,{colorSpace:"srgb"});g.drawImage(o,0,0);let m=g.getImageData(0,0,c,h,{colorSpace:"srgb"}),p=1.8**(e.hdrCapacityMax*.5),M=(Math.log2(p)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),w=Math.min(Math.max(M,0),1),b=m.data,v=y.data,x=b.length,E=e.gainMapMin,S=e.gainMapMax,_=e.offsetSDR,A=e.offsetHDR,C=1/e.gamma,L=e.gamma===1,F=this.type===kt,O=va.toHalfFloat,z=this._srgbToLinear,K=F?new Uint16Array(x).fill(15360):new Float32Array(x).fill(1);for(let Z=0;Z<x;Z+=4)for(let he=0;he<3;he++){let $=Z+he,te=b[$],se=v[$]*.00392156862745098,Ce=L?se:Math.pow(se,C),Re=E+(S-E)*Ce,Xe=(te+_)*(Re*w===0?1:Math.pow(2,Re*w))-A,Ze=Math.min(Math.max(z(Xe),0),65504);K[$]=F?O(Ze):Ze}s(K,c,h)}).catch(o=>{r(o)})}};async function L1(i){let e=new Uint8Array(await i.arrayBuffer());if(e[0]!==31||e[1]!==139)return e.buffer;let t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).arrayBuffer()}async function jm(i){let e=new jc().setMeshoptDecoder(Om);if(typeof DecompressionStream=="function")try{let t=await fetch(i.replace(".glb?",".glb.gz?"));if(t.ok)return await e.parseAsync(await L1(t),"")}catch{}return e.loadAsync(i)}var th=Object.freeze({spot:{label:"Focused driving spot",colour:"#f0f5ff",angle:.12,reach:40,intensity:190,aim:22},flood:{label:"Wide driving flood",colour:"#f0f5ff",angle:.48,reach:26,intensity:85,aim:10},fog:{label:"Low, wide yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},dual:{label:"Switchable white / yellow fog",colour:"#ffcb49",angle:.75,reach:16,intensity:45,aim:5},bar:{label:"Wide light-bar spread",colour:"#eff6ff",angle:.48,reach:36,intensity:140,aim:14},driving:{label:"Compact driving beam",colour:"#f7f4e9",angle:.24,reach:36,intensity:150,aim:18},combo:{label:"Pod driving / spread mix",colour:"#f2f5ff",angle:.38,reach:28,intensity:100,aim:12},work:{label:"Rear work flood",colour:"#fff0d4",angle:.8,reach:14,intensity:35,aim:-6}});function Ym(i,e=[]){let t=new Map((Array.isArray(e)?e:[]).filter(n=>n&&typeof n.id=="string").map(n=>[n.id,n]));return[...new Set((Array.isArray(i)?i:[]).filter(n=>typeof n=="string").flatMap(n=>t.has(n)?t.get(n).visual?[t.get(n).visual]:[]:[n]))]}function Km(i){let e=new Set(i),t=[];return e.has("lamp_round_spot")&&t.push("spot"),e.has("lamp_round_flood")&&t.push("flood"),e.has("lamp_fog")&&t.push("fog"),e.has("lamp_dual")&&t.push("dual"),(e.has("led")||e.has("lamp_bar20"))&&t.push("bar"),e.has("lamp_compact_bar")&&t.push("driving"),(e.has("pods")||e.has("lamp_cube"))&&t.push("combo"),e.has("lamp_work")&&t.push("work"),t}var Vs=Object.freeze({studio:{label:"Garage",description:"Photographed workshop \xB7 Poly Haven HDRI",file:"autoshop-01",rotation:0,height:1.6,radius:22,exposure:.62,shadow:.5,key:[-.3,.94,.19]},mountains:{label:"Mountains",description:"Photographed mountain valley \xB7 Poly Haven HDRI",file:"kiara-5-noon",rotation:0,height:1.7,radius:70,exposure:.95,shadow:.78,sunScale:.3,sun:{direction:[.466,.779,.419],irradiance:[15.54,15.59,16.72]}},urban:{label:"Urban",description:"Photographed city square \xB7 Poly Haven HDRI",file:"palermo-square",rotation:0,height:1.7,radius:45,exposure:.72,shadow:.5,key:[0,1,0]},desert:{label:"Desert",description:"Photographed sand quarry \xB7 Poly Haven HDRI",file:"quarry-02",rotation:0,height:1.7,radius:70,exposure:.95,shadow:.74,sunScale:.3,sun:{direction:[.55,.734,.4],irradiance:[9.55,7.99,5.21]}}});function Eo(i){return Object.hasOwn(Vs,i)?i:"studio"}function Jm(i,e="4k"){return`assets/environments/${Vs[Eo(i)].file}-${e}.jpg`}function Zm(i,{loading:e=!1,failed:t=!1,night:n=!1}={}){return e?`Loading ${Vs[Eo(i)].label.toLowerCase()} scenery\u2026`:t?"Scenery could not load. A plain backdrop is shown; choose a scene to retry.":n?"Night uses a neutral test ground. Scenery returns in daylight.":Vs[Eo(i)].description}var N1=Object.freeze({BrightChrome:{metalness:1,roughness:.07},GrilleLettering:{metalness:.9,roughness:.18},MachinedAlloy:{metalness:.9,roughness:.3},WheelGunmetal:{metalness:.8,roughness:.38},WheelBarrelDark:{metalness:.55,roughness:.55},BrakeSteel:{metalness:.9,roughness:.42},CaliperMetal:{metalness:.6,roughness:.45},MouldedPlastic:{metalness:0,roughness:.62},GrilleAnthracite:{metalness:.2,roughness:.4},GlossBlackGrille:{metalness:0,roughness:.12,clearcoat:1,clearcoatRoughness:.04},TyreRubber:{metalness:0,roughness:.9}}),$m=Object.freeze({gloss:{roughness:.32,clearcoat:1,clearcoatRoughness:.035},satin:{roughness:.46,clearcoat:.35,clearcoatRoughness:.3},matte:{roughness:.72,clearcoat:0,clearcoatRoughness:.6}});function Qm(i){return $m[i]||$m.gloss}function e0(i){let e=N1[i?.name];if(!e)return!1;for(let[t,n]of Object.entries(e))t in i&&(i[t]=n);return i.envMapIntensity=1,!0}var t0={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125}},vertexShader:`

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

		}`};function i0(i,{width:e=3.1,depth:t=5.4,height:n=.62,resolution:s=512,blur:r=2.6,darkness:a=1.25,opacity:o=.9}={}){let l=new Dt(s,s),c=new Dt(s,s);l.texture.generateMipmaps=c.texture.generateMipmaps=!1;let h=new Ft({map:l.texture,transparent:!0,depthWrite:!1,opacity:o}),u=new we(new an(e,t).rotateX(Math.PI/2),h);u.name="ContactShadow",u.scale.y=-1,u.position.y=.0015,u.renderOrder=1;let d=new ti(-e/2,e/2,t/2,-t/2,0,n);d.rotation.x=Math.PI/2;let f=new Lr({depthTest:!1,depthWrite:!1});f.userData.darkness={value:a},f.onBeforeCompile=b=>{b.uniforms.darkness=f.userData.darkness,b.fragmentShader=`uniform float darkness;
${b.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}`};let g=new we(new an(e,t).rotateX(Math.PI/2)),y=new Lt(t0),m=new Lt(n0);y.depthTest=m.depthTest=!1;function p(b){g.visible=!0,g.material=y,y.uniforms.tDiffuse.value=l.texture,y.uniforms.h.value=b/256,i.setRenderTarget(c),i.render(g,d),g.material=m,m.uniforms.tDiffuse.value=c.texture,m.uniforms.v.value=b/256,i.setRenderTarget(l),i.render(g,d),g.visible=!1}function M(b){u.getWorldPosition(d.position),d.position.y=0,d.updateMatrixWorld();let v={target:i.getRenderTarget(),clear:i.getClearAlpha(),shadow:i.shadowMap.autoUpdate},x=new Bi;x.overrideMaterial=f,x.matrixWorldAutoUpdate=!1,b.updateMatrixWorld(!0),x.children.push(b),i.setClearAlpha(0),i.shadowMap.autoUpdate=!1,i.setRenderTarget(l),i.clear(),i.render(x,d),x.children.length=0,p(r),p(r*.4),i.setRenderTarget(v.target),i.setClearAlpha(v.clear),i.shadowMap.autoUpdate=v.shadow}function w(){l.dispose(),c.dispose(),h.dispose(),u.geometry.dispose(),g.geometry.dispose(),y.dispose(),m.dispose(),f.dispose()}return{plane:u,update:M,dispose:w,material:h}}var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},F1=new ti(-1,1,1,-1,0,1),Ld=class extends ot{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}},U1=new Ld,gs=class{constructor(e){this._mesh=new we(U1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,F1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var nh=class extends Xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ao=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ih=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nh($r),this.copyPass.material.blending=jt,this.timer=new Ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ao!==void 0&&(a instanceof Ao?n=!0:a instanceof ih&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rh=class extends Xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Ro={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Fe},cameraProjectionMatrixInverse:{value:new Fe},cameraWorldMatrix:{value:new Fe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

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
		}`},Co={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ah={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function s0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=O1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new N(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Mn(s,e,e);return r.wrapS=$t,r.wrapT=$t,r.needsUpdate=!0,r}function O1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Po={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Nd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraProjectionMatrixInverse:{value:new Fe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Nd(i,e,t){let n=k1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function k1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var oh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,y=t-f,m,p;g>y?(m=1,p=0):(m=0,p=1);let M=g-m+h,w=y-p+h,b=g-1+2*h,v=y-1+2*h,x=l&255,E=c&255,S=this.perm[x+this.perm[E]]%12,_=this.perm[x+m+this.perm[E+p]]%12,A=this.perm[x+1+this.perm[E+1]]%12,C=.5-g*g-y*y;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[S],g,y));let L=.5-M*M-w*w;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[_],M,w));let F=.5-b*b-v*v;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[A],b,v)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,y=h-g,m=u-g,p=d-g,M=e-y,w=t-m,b=n-p,v,x,E,S,_,A;M>=w?w>=b?(v=1,x=0,E=0,S=1,_=1,A=0):M>=b?(v=1,x=0,E=0,S=1,_=0,A=1):(v=0,x=0,E=1,S=1,_=0,A=1):w<b?(v=0,x=0,E=1,S=0,_=1,A=1):M<b?(v=0,x=1,E=0,S=0,_=1,A=1):(v=0,x=1,E=0,S=1,_=1,A=0);let C=M-v+f,L=w-x+f,F=b-E+f,O=M-S+2*f,z=w-_+2*f,K=b-A+2*f,Z=M-1+3*f,he=w-1+3*f,$=b-1+3*f,te=h&255,se=u&255,Ce=d&255,Re=this.perm[te+this.perm[se+this.perm[Ce]]]%12,Xe=this.perm[te+v+this.perm[se+x+this.perm[Ce+E]]]%12,Ze=this.perm[te+S+this.perm[se+_+this.perm[Ce+A]]]%12,st=this.perm[te+1+this.perm[se+1+this.perm[Ce+1]]]%12,k=.6-M*M-w*w-b*b;k<0?s=0:(k*=k,s=k*k*this._dot3(this.grad3[Re],M,w,b));let q=.6-C*C-L*L-F*F;q<0?r=0:(q*=q,r=q*q*this._dot3(this.grad3[Xe],C,L,F));let _e=.6-O*O-z*z-K*K;_e<0?a=0:(_e*=_e,a=_e*_e*this._dot3(this.grad3[Ze],O,z,K));let pe=.6-Z*Z-he*he-$*$;return pe<0?o=0:(pe*=pe,o=pe*pe*this._dot3(this.grad3[st],Z,he,$)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,y=(e+t+n+s)*l,m=Math.floor(e+y),p=Math.floor(t+y),M=Math.floor(n+y),w=Math.floor(s+y),b=(m+p+M+w)*c,v=m-b,x=p-b,E=M-b,S=w-b,_=e-v,A=t-x,C=n-E,L=s-S,F=_>A?32:0,O=_>C?16:0,z=A>C?8:0,K=_>L?4:0,Z=A>L?2:0,he=C>L?1:0,$=F+O+z+K+Z+he,te=a[$][0]>=3?1:0,se=a[$][1]>=3?1:0,Ce=a[$][2]>=3?1:0,Re=a[$][3]>=3?1:0,Xe=a[$][0]>=2?1:0,Ze=a[$][1]>=2?1:0,st=a[$][2]>=2?1:0,k=a[$][3]>=2?1:0,q=a[$][0]>=1?1:0,_e=a[$][1]>=1?1:0,pe=a[$][2]>=1?1:0,Ie=a[$][3]>=1?1:0,Je=_-te+c,$e=A-se+c,ce=C-Ce+c,me=L-Re+c,xe=_-Xe+2*c,be=A-Ze+2*c,ve=C-st+2*c,Ne=L-k+2*c,Ve=_-q+3*c,De=A-_e+3*c,ke=C-pe+3*c,G=L-Ie+3*c,ct=_-1+4*c,rt=A-1+4*c,U=C-1+4*c,T=L-1+4*c,j=m&255,J=p&255,ee=M&255,ge=w&255,Se=o[j+o[J+o[ee+o[ge]]]]%32,ne=o[j+te+o[J+se+o[ee+Ce+o[ge+Re]]]]%32,de=o[j+Xe+o[J+Ze+o[ee+st+o[ge+k]]]]%32,Te=o[j+q+o[J+_e+o[ee+pe+o[ge+Ie]]]]%32,Be=o[j+1+o[J+1+o[ee+1+o[ge+1]]]]%32,Ee=.6-_*_-A*A-C*C-L*L;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this._dot4(r[Se],_,A,C,L));let ye=.6-Je*Je-$e*$e-ce*ce-me*me;ye<0?u=0:(ye*=ye,u=ye*ye*this._dot4(r[ne],Je,$e,ce,me));let Oe=.6-xe*xe-be*be-ve*ve-Ne*Ne;Oe<0?d=0:(Oe*=Oe,d=Oe*Oe*this._dot4(r[de],xe,be,ve,Ne));let We=.6-Ve*Ve-De*De-ke*ke-G*G;We<0?f=0:(We*=We,f=We*We*this._dot4(r[Te],Ve,De,ke,G));let et=.6-ct*ct-rt*rt-U*U-T*T;return et<0?g=0:(et*=et,g=et*et*this._dot4(r[Be],ct,rt,U,T)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Io=class i extends Xn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=s0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Dt(this.width,this.height,{type:kt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Lt({defines:Object.assign({},Ro.defines),uniforms:si.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ga,this.normalMaterial.blending=jt,this.pdMaterial=new Lt({defines:Object.assign({},Po.defines),uniforms:si.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Lt({defines:Object.assign({},Co.defines),uniforms:si.clone(Co.uniforms),vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader,blending:jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Lt({uniforms:si.clone($r.uniforms),vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:to,blendDst:Ps,blendEquation:ii,blendSrcAlpha:eo,blendDstAlpha:Ps,blendEquationAlpha:ii}),this.blendMaterial=new Lt({uniforms:si.clone(ah.uniforms),vertexShader:ah.vertexShader,fragmentShader:ah.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Vl,blendSrc:to,blendDst:Ps,blendEquation:ii,blendSrcAlpha:eo,blendDstAlpha:Ps,blendEquationAlpha:ii}),this._fsQuad=new gs(null),this._originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=Ti,this.depthTexture.type=us,this.normalRenderTarget=new Dt(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:kt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new oh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Mn(s,e,e,en,wn);return r.wrapS=$t,r.wrapT=$t,r.needsUpdate=!0,r}};Io.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Do={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var lh=class extends Xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=si.clone(Do.uniforms),this.material=new Dr({name:Do.name,uniforms:this.uniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this._fsQuad=new gs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===no?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===io?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===so?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ro&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ws=new Map,B1=Object.freeze(["heritage","safari","mountain","geo","topo","pinstripe","rally","checker","compass","pixel","contour","sunset"]),z1=new Set(B1);function G1(i,e,t){let n=new ze(e),s=n.r*.2126+n.g*.7152+n.b*.0722<.18,r=/^#[0-9a-f]{6}$/i.test(t||"")?t:null,a=i+":"+s+":"+r;if(Ws.has(a))return Ws.get(a);let o=document.createElement("canvas");o.width=2048,o.height=512;let l=o.getContext("2d"),c=r||(s?"#d8d1bb":"#26332f");if(i==="heritage"||i==="safari")(r?[r,r,r]:i==="heritage"?["#bd542b","#df994c","#f0d29a"]:["#c8b786","#766b50","#394634"]).forEach((f,g)=>{l.fillStyle=f,l.fillRect(0,100+g*45,2048,38)});else if(i==="mountain")l.fillStyle=c,l.beginPath(),l.moveTo(0,430),[[0,350],[250,190],[420,300],[700,60],[950,280],[1190,140],[1490,330],[1720,210],[2048,350],[2048,430]].forEach(([d,f])=>l.lineTo(d,f)),l.closePath(),l.fill(),l.fillStyle=s?"#26332f":"#d8d1bb",l.beginPath(),l.moveTo(700,60),l.lineTo(628,174),l.lineTo(700,145),l.lineTo(758,182),l.closePath(),l.fill();else if(i==="geo"){l.fillStyle=c;for(let d=0;d<5;d++){let f=80+d*180;l.beginPath(),l.moveTo(f,420),l.lineTo(f+210,80),l.lineTo(f+315,80),l.lineTo(f+105,420),l.closePath(),l.fill()}l.fillRect(1050,350,998,70)}else if(i==="pinstripe"||i==="rally"){if(l.fillStyle=c,l.fillRect(0,i==="rally"?180:230,2048,i==="rally"?100:12),l.fillRect(0,i==="rally"?295:260,2048,8),i==="rally"){l.beginPath(),l.arc(1260,245,165,0,Math.PI*2),l.fill();let d=new ze(c);l.fillStyle=d.r*.2126+d.g*.7152+d.b*.0722<.18?"#e7e7dc":"#242a29",l.font="italic 900 238px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("19",1255,257)}}else if(i==="checker"){l.fillStyle=c;for(let d=0;d<3;d++)for(let f=0;f<32;f++)(f+d)%2===0&&l.fillRect(f*64,180+d*64,64,64)}else if(i==="compass"){l.strokeStyle=c,l.lineWidth=8,l.beginPath(),l.arc(650,256,165,0,Math.PI*2),l.stroke(),l.fillStyle=c;for(let d=0;d<8;d++){let f=d*Math.PI/4;l.beginPath(),l.moveTo(650+Math.cos(f)*180,256+Math.sin(f)*180),l.lineTo(650+Math.cos(f+.24)*55,256+Math.sin(f+.24)*55),l.lineTo(650,256),l.closePath(),l.fill()}l.fillRect(900,250,1148,10)}else if(i==="pixel"){l.fillStyle=c;for(let d=0;d<7;d++)for(let f=0;f<36;f++)(f*17+d*13)%11<4&&l.fillRect(f*57,70+d*55,55,53)}else if(i==="sunset")(r?[c,c,c,c]:["#b44b38","#d6793d","#e4ac55","#ead0a0"]).forEach((f,g)=>{l.fillStyle=f,l.beginPath(),l.moveTo(0,150+g*45),l.lineTo(1150,150+g*45),l.lineTo(1500,60+g*45),l.lineTo(2048,60+g*45),l.lineTo(2048,91+g*45),l.lineTo(1500,91+g*45),l.lineTo(1150,181+g*45),l.lineTo(0,181+g*45),l.fill()});else if(i==="contour"){l.strokeStyle=c,l.lineWidth=9;for(let d=0;d<3;d++)l.beginPath(),l.moveTo(0,350+d*30),l.lineTo(430,350+d*30),l.lineTo(670,130+d*30),l.lineTo(870,310+d*30),l.lineTo(1150,70+d*30),l.lineTo(1550,350+d*30),l.lineTo(2048,350+d*30),l.stroke()}else{l.strokeStyle=c,l.lineWidth=4;for(let d=-3;d<15;d++){l.beginPath();for(let f=0;f<=2048;f+=8){let g=80+d*29+Math.sin(f/180+d*.28)*46+Math.sin(f/78+d*.13)*12;f?l.lineTo(f,g):l.moveTo(f,g)}l.stroke()}}let h=new gn(o);h.colorSpace=xt;let u=new Ke({name:"Vinyl "+i,map:h,transparent:!0,alphaTest:.04,depthWrite:!1,roughness:.48,metalness:0,polygonOffset:!0,polygonOffsetFactor:-4});if(Ws.size>=32){let d=Ws.keys().next().value,f=Ws.get(d);f.map.dispose(),f.dispose(),Ws.delete(d)}return Ws.set(a,u),u}function r0(i,e,t,n,s){if(!z1.has(t))return 0;e.updateWorldMatrix(!0,!1);let r=e.matrixWorld.clone().invert(),a=G1(t,n,s),o=0;for(let l of[-1,1])for(let c of i){c.updateWorldMatrix(!0,!1);let h=e.localToWorld(new N(l*.748,.91,-.27)),u=new Kr(c,h,new yn(0,l*Math.PI/2,0),new N(2.95,.62,.1));if(!u.attributes.position.count){u.dispose();continue}u.applyMatrix4(r);let d=new we(u,a);d.name="Body vinyl "+t,d.renderOrder=2,e.add(d),o++}return o}var St=document.getElementById("viewer3d"),xn=document.getElementById("viewerStatus"),a0=8.1,Fd="Interactive Jimny modification preview. Click a part to edit; drag to orbit, scroll or pinch to zoom.",lt;try{lt=new Fc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"})}catch{St.classList.add("unavailable"),xn.textContent="3D is unavailable in this browser. Your parts list and estimates still work."}if(lt){let h=function(R,I,D=lt.getPixelRatio()){lt.setPixelRatio(D),lt.setSize(R,I,!1),o.setPixelRatio(D),o.setSize(R,I)},u=function(){C&&(A.update(L),C=!1),o.render()},p=function(){return g.has(d)},M=function(){let R=p();e.near=R?.018:.1,e.updateProjectionMatrix(),f.enableZoom=!R,f.enableRotate=!R,f.enablePan=!1,f.minDistance=["doors-cutaway","touring"].includes(d)?1.2:2,f.maxDistance=a0,f.minPolarAngle=.15,f.maxPolarAngle=d==="underside"?Math.PI*.75:Math.PI*.49,S()},w=function(){e.position.copy(m.eye),f.target.copy(e.position).add(new N(Math.sin(m.yaw)*Math.cos(m.pitch),Math.sin(m.pitch),Math.cos(m.yaw)*Math.cos(m.pitch))),e.lookAt(f.target),Ne=!0},b=function(){p()||f.update()},v=function(){return{eye:m.eye.clone(),yaw:m.yaw,pitch:m.pitch}},x=function(R){m.eye.copy(R.eye),m.yaw=R.yaw,m.pitch=R.pitch},E=function(){let R=Cm(d,$e);m.eye.set(...R.eye),m.yaw=R.yaw,m.pitch=R.pitch,w()},S=function(){let R=window.matchMedia("(max-width:899px)").matches&&!St.parentElement.classList.contains("expanded");f.enabled=!R&&!p(),lt.domElement.style.touchAction=R?"pan-y":"none",St.dataset.touchMode=R?"scroll":p()?"look-around":"orbit",lt.domElement.setAttribute("aria-label",(p()?"Enclosed 3D Jimny cabin. Drag to look around, Shift-drag to move within the cabin, scroll to zoom.":Fd)+(R?" Expand the preview for touch rotation.":"")),xn.textContent.startsWith("Live 3D")&&(xn.textContent=R?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate")},xe=function(R){let I=document.createElement("canvas");I.width=I.height=256;let D=I.getContext("2d");D.fillStyle="#888",D.fillRect(0,0,256,256);let V=73;for(let Y=0;Y<12e3;Y++){V=V*16807%2147483647;let B=V%256;V=V*16807%2147483647;let Q=V%256;D.fillStyle=`rgba(${R==="paint"?"220,220,220":"40,40,40"},${R==="paint"?.12:.15})`,D.fillRect(B,Q,1,1)}if(R==="tyre"){D.strokeStyle="#252525",D.lineWidth=3;for(let Y=-256;Y<512;Y+=24)D.beginPath(),D.moveTo(Y,0),D.lineTo(Y+40,90),D.lineTo(Y+22,168),D.lineTo(Y+62,256),D.stroke()}let X=new gn(I);return X.wrapS=X.wrapT=$t,X.repeat.set(R==="paint"?8:12,R==="paint"?8:1),X.anisotropy=Math.min(4,lt.capabilities.getMaxAnisotropy()),X},de=function(){document.querySelectorAll("[data-scenery-select]").forEach(R=>{R.value=J}),document.querySelectorAll("[data-scenery-status]").forEach(R=>{R.textContent=Zm(J,{loading:ee,failed:ge,night:De})}),St.dataset.scenery=J,St.dataset.sceneryLoading=String(ee)},Be=function(){let R=ne.get(J),I=!!R&&!ee&&!ge&&!De,D=Vs[J];for(let[V,X]of ne)X.skybox&&(X.skybox.visible=I&&V===J);if(i.environment=I?R.environment.texture:s.texture,i.environmentRotation.set(0,I?D.rotation:0,0),lt.toneMappingExposure=I?D.exposure:.95,i.background.set(De?"#10191f":"#20272b"),_.material=De?se:te,Ce.visible=!1,te.opacity=I?D.shadow:.19,r.groundColor.set("#747572"),r.intensity=De?.12:I?0:1.35,I&&D.sun?Te.fromArray(D.sun.direction):I?Te.fromArray(D.key):Te.set(3,7,5).normalize(),Te.applyAxisAngle(Mt.DEFAULT_UP,I?D.rotation:0),a.position.copy(Te).multiplyScalar(9),I&&D.sun){let[V,X,Y]=D.sun.irradiance,B=Math.max(V,X,Y);a.color.setRGB(V/B,X/B,Y/B,nn),a.intensity=B*D.sunScale}else a.color.set("#fffdf8"),a.intensity=De?.06:I?1e-4:2.2;a.shadow.radius=I&&D.sun?5:16,a.shadow.normalBias=.004,a.shadow.bias=-15e-5,i.environmentIntensity=De?.12:I?1:.7,de(),Ne=!0},Ge=function(R){for(;R.children.length;){let I=R.children[0];I.traverse(D=>{D.geometry?.dispose(),D.isInstancedMesh&&D.dispose(),D.userData.disposableMaterial&&(D.material.map?.dispose(),D.material.dispose())}),R.remove(I)}},wt=function(R,I,D,V,X,Y,B,Q=0,ae="#e9e9df",ue="#222827",le=!1){let He=document.createElement("canvas");He.width=512,He.height=128;let gt=He.getContext("2d");gt.fillStyle=ue,gt.fillRect(0,0,512,128),gt.fillStyle=ae,gt.font=`${le?"italic ":""}700 ${I.length>8?"52":"72"}px Arial`,gt.textAlign="center",gt.textBaseline="middle",gt.fillText(I,256,68,490);let tt=new gn(He);tt.colorSpace=xt;let nt=new Ke({map:tt,roughness:.6,transparent:!1}),vt=re(new an(D,V),nt,R,X,Y,B);return vt.rotation.y=Q,vt.userData.disposableMaterial=!0,vt},pt=function(R,I,D,V=k.paint,X=[],Y=0){let B=new Ot(I.map(([ue,le])=>new ie(-ue,le)));X.forEach(ue=>B.holes.push(new Qt(ue.map(([le,He])=>new ie(-le,He)))));let Q=new Ir(B,24),ae=Q.attributes.position;for(let ue=0;ue<ae.count;ue++){let le=-ae.getX(ue),He=ae.getY(ue);ae.setXYZ(ue,D*(.768-Math.max(0,He-1.14)*.115+Y),He,le)}if(Q.computeVertexNormals(),D<0){let ue=Q.index;for(let le=0;le<ue.count;le+=3){let He=ue.getX(le);ue.setX(le,ue.getX(le+2)),ue.setX(le+2,He)}Q.computeVertexNormals()}return re(Q,V,R)},Nn=function(R,I,D,V=!1){if(pe&&V){let ue=I<0?-1:1,le=[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.9],[-.22,.95],[0,.96],[.22,.95],[.36,.9],[.45,.77],[.49,.58],[.49,.38]],He=[[-.4,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.4,.38]],gt=[],tt=[],nt=64,vt=[le,He].map(bt=>new fi(bt.map(([ut,Ct])=>new N(0,Ct,ut))));for(let[bt,ut]of[[0,.75],[.14,.815],[.3,.866],[.55,.896],[.8,.902],[1,.89]])for(let Ct=0;Ct<=nt;Ct++){let Bn=vt[0].getPoint(Ct/nt).lerp(vt[1].getPoint(Ct/nt),bt);gt.push(ue*ut,Bn.y,D+Bn.z)}for(let bt=0;bt<5;bt++)for(let ut=0;ut<nt;ut++){let Ct=bt*(nt+1)+ut;tt.push(Ct,Ct+1,Ct+nt+2,Ct,Ct+nt+2,Ct+nt+1)}if(ue<0)for(let bt=0;bt<tt.length;bt+=3)[tt[bt+1],tt[bt+2]]=[tt[bt+2],tt[bt+1]];let Ae=new ot;Ae.setAttribute("position",new Ue(gt,3)),Ae.setIndex(tt),Ae.computeVertexNormals(),re(Ae,k.trim,R);return}let X=I<0?-1:1,Y=.385,B=V?.462:.432,Q=[];for(let ue=0;ue<=32;ue++){let le=Math.PI*ue/32;Q.push([D-Math.cos(le)*B,.335+Math.sin(le)*B])}for(let ue=32;ue>=0;ue--){let le=Math.PI*ue/32;Q.push([D-Math.cos(le)*Y,.335+Math.sin(le)*Y])}pt(R,Q,X,k.trim,[],V?.137:.075);let ae=[];for(let ue=0;ue<=32;ue++){let le=ue*Math.PI/32;ae.push([X*(V?.91:.843),.335+Math.sin(le)*B,D-Math.cos(le)*B])}fe(R,ae,.014,k.trim);for(let ue of[-1,1])oe(R,V?.15:.09,.18,.055,X*(V?.84:.8),.42,D+ue*.404,k.trim)},jn=function(){if(pe)return;let R=[[-1.78,.54],[-1.78,1.13],[.69,1.15],[1.79,1.1],[1.84,.88],[1.84,.52],[1.69,.52]];for(let B=0;B<=30;B++){let Q=B*Math.PI/30;R.push([1.295+Math.cos(Q)*.392,.335+Math.sin(Q)*.392])}R.push([.903,.535],[-.903,.535]);for(let B=0;B<=30;B++){let Q=B*Math.PI/30;R.push([-1.295+Math.cos(Q)*.392,.335+Math.sin(Q)*.392])}R.push([-1.687,.54]),oe(q,1.43,.075,2.3,0,1.125,-.53,k.paint);let I=oe(q,1.48,.075,1.11,0,1.13,1.235,k.paint);I.rotation.x=.026,oe(q,1.46,.035,.15,0,1.163,.635,k.paint),oe(q,1.46,.085,2.43,0,1.665,-.505,k.roof);for(let B of[-.746,.746])fe(q,[[B,1.647,.7],[B,1.684,.53],[B,1.684,-1.63],[B,1.65,-1.75]],.012,k.roof);for(let B of[-.48,-.24,0,.24,.48])oe(q,.018,.009,1.93,B,1.709,-.55,k.roof);oe(q,1.48,.53,.045,0,1.355,-1.75,k.paint),oe(q,1.3,.375,.015,0,1.412,-1.778,k.trim),oe(q,1.25,.33,.017,0,1.422,-1.79,k.glass),fe(q,[[.52,1.28,-1.805],[.11,1.29,-1.805]],.009,k.trim),[-1,1].forEach(B=>{pt(q,R,B);let Q=[[[.57,1.2],[.51,1.59],[-.24,1.59],[-.24,1.2]],[[-.34,1.2],[-.34,1.59],[-1.06,1.59],[-1.06,1.2]],[[-1.15,1.2],[-1.15,1.59],[-1.65,1.59],[-1.65,1.2]]];pt(q,[[.69,1.12],[.59,1.65],[-1.74,1.65],[-1.76,1.12]],B,k.paint,Q),Q.forEach(ae=>{pt(q,ae,B,k.glass,[],-.008);let ue=ae.concat([ae[0]]).map(([le,He])=>[B*(.768-Math.max(0,He-1.14)*.115+.002),He,le]);Ye(q,ue,.011,k.trim)});for(let ae of[.665,-.285,-1.105])fe(q,[[B*.772,.56,ae],[B*.773,1.15,ae],[B*.716,1.63,ae-.035]],.0035,k.trim);fe(q,[[B*.773,.58,.67],[B*.773,.57,-1.07]],.003,k.trim),fe(q,[[B*.774,1.104,.64],[B*.774,1.104,-1.72]],.005,k.paint),[-.13,-.93].forEach(ae=>{oe(q,.025,.045,.16,B*.785,1.085,ae,k.trim),oe(q,.028,.017,.115,B*.799,1.092,ae,k.darkmetal)}),[.63,-.32].forEach(ae=>[.72,1.04].forEach(ue=>{oe(q,.025,.048,.065,B*.785,ue,ae,k.paint),Me(q,.009,.009,.065,B*.806,ue,ae,k.darkmetal,"y",8)})),fe(q,[[B*.77,1.22,.54],[B*.89,1.24,.55]],.018,k.trim),oe(q,.17,.15,.24,B*.91,1.285,.56,k.trim),oe(q,.012,.105,.18,B*.999,1.29,.54,k.glass),oe(q,.05,.065,1.83,B*.78,.55,-.08,k.trim),[-1.295,1.295].forEach(ae=>Nn(q,B===1?.8:-.875,ae));for(let ae of[-1.295,1.295]){let ue=[];for(let le=0;le<=24;le++){let He=Math.PI*le/24;ue.push([ae-Math.cos(He)*.395,.335+Math.sin(He)*.395])}for(let le=24;le>=0;le--){let He=Math.PI*le/24;ue.push([ae-Math.cos(He)*.333,.335+Math.sin(He)*.333])}pt(q,ue,B,k.rubber,[],-.06)}oe(q,.055,.035,.12,B*.791,1.035,1.07,k.orange),B===-1&&(pt(q,[[-1.48,1.01],[-1.48,1.12],[-1.66,1.12],[-1.66,1.01]],B,k.trim,[],.003),pt(q,[[-1.49,1.02],[-1.49,1.11],[-1.65,1.11],[-1.65,1.02]],B,k.paint,[],.004))});let D=oe(q,1.395,.465,.026,0,1.397,.644,k.trim);D.rotation.x=-.17;let V=oe(q,1.315,.393,.028,0,1.405,.661,k.glass);V.rotation.x=-.17,[-.726,.726].forEach(B=>{let Q=oe(q,.06,.515,.06,B,1.392,.634,k.paint);Q.rotation.x=-.17});for(let B of[-.43,.21])fe(q,[[B,1.2,.703],[B+.08,1.24,.704]],.007,k.trim),fe(q,[[B-.14,1.245,.705],[B+.22,1.26,.704]],.009,k.trim);oe(q,1.5,.23,.1,0,.975,1.811,k.paint),oe(q,1.62,.19,.22,0,.645,1.825,k.trim),oe(q,1.62,.17,.18,0,.64,-1.795,k.trim),oe(q,1.57,.08,.085,0,.775,1.83,k.trim),[-.602,.602].forEach(B=>{Me(q,.153,.153,.035,B,.976,1.868,k.trim,"z",48),Me(q,.128,.12,.027,B,.976,1.889,k.chrome,"z",48);let Q=re(new Pn(.116,32,16,0,Math.PI*2,0,Math.PI/2),k.reflector,q,B,.976,1.895);Q.rotation.x=Math.PI/2,Q.scale.y=.3,Me(q,.032,.032,.018,B,.976,1.908,k.white,"z"),Me(q,.118,.118,.012,B,.976,1.927,k.lens,"z",48);for(let ae=-3;ae<=3;ae++)fe(q,[[B+ae*.025,.89,1.934],[B+ae*.025,1.06,1.934]],.0015,k.lens);oe(q,.128,.049,.025,B,1.146,1.813,k.trim),oe(q,.11,.032,.029,B,1.146,1.83,k.orange),Me(q,.065,.065,.014,B,.64,1.945,k.trim,"z"),Me(q,.045,.045,.018,B,.64,1.956,k.lens,"z"),oe(q,.23,.12,.025,B,.65,-1.901,k.red),oe(q,.08,.057,.028,B+.052,.652,-1.918,k.lens)}),oe(q,.46,.11,.018,0,.65,1.949,k.trim);for(let B=-.28;B<=.28;B+=.055)oe(q,.032,.055,.015,B,.766,1.884,k.trim);oe(q,1.13,.075,2.94,0,.43,-.1,k.darkmetal),[-1.295,1.295].forEach(B=>Me(q,.055,.055,1.65,0,.35,B,k.darkmetal,"x"));for(let B of[-1.295,1.295])Me(q,.105,.11,.15,0,.35,B,k.darkmetal,"z");wt(q,"Jimny",.19,.055,-.49,1.075,-1.783,Math.PI,"#c8cfcb","#36443c",!0);let X=new qe;X.position.set(.12,1,-1.94),X.rotation.y=Math.PI/2,Lo(X,0,0,0,.335,!1),q.add(X),[-.38,.38].forEach(B=>{oe(q,.46,.12,.48,B,.85,.33,k.seat);let Q=oe(q,.46,.48,.12,B,1.08,.09,k.seat);Q.rotation.x=-.1,oe(q,.25,.14,.12,B,1.37,.08,k.seat)}),oe(q,1.25,.12,.46,0,.85,-.7,k.seat),oe(q,1.25,.4,.1,0,1.05,-.98,k.seat),oe(q,1.36,.12,.26,0,1.12,.5,k.trim),Me(q,.075,.075,.012,.39,1.19,.355,k.trim,"z"),Me(q,.065,.065,.014,.24,1.19,.355,k.trim,"z");let Y=re(new Xt(.127,.014,8,32),k.trim,q,.38,1.16,.3);Y.rotation.x=-.32},Lo=function(R,I,D,V,X=.335,Y=!1){let B=I<0?-1:1,Q=Y?.115:.098,ae=.191,ue=I+B*(Q+.003),le=[[ae,-Q*.92],[X*.82,-Q],[X*.93,-Q*.88],[X*.99,-Q*.63],[X,-Q*.32],[X,Q*.32],[X*.99,Q*.63],[X*.93,Q*.88],[X*.82,Q],[ae,Q*.92]].map(([tt,nt])=>new ie(tt,nt)),He=re(new pi(le,64),k.rubber,R,I,D,V);He.rotation.z=Math.PI/2;for(let tt of[-1,1]){let nt=re(new Xt(X*.81,.002,4,64),k.trim,R,I+tt*Q,D,V);nt.rotation.y=Math.PI/2}if(Y){let tt=new Gi(new rn(.062,.009,.036),k.rubber,180),nt=new Mt;for(let vt=0;vt<60;vt++)for(let Ae=0;Ae<3;Ae++){let bt=(vt+(Ae===1?.4:0))/60*Math.PI*2;nt.position.set(I+(Ae-1)*.071,D+Math.cos(bt)*(X-.002),V+Math.sin(bt)*(X-.002)),nt.rotation.set(bt,0,(Ae-1)*.18),nt.updateMatrix(),tt.setMatrixAt(vt*3+Ae,nt.matrix)}tt.castShadow=!0,R.add(tt)}Me(R,ae,ae,.15,I,D,V,k.darkmetal,"x",48),Me(R,.157,.157,.012,I+B*.076,D,V,k.brake,"x",48);let gt=re(new Xt(ae-.005,.009,8,48),Y?k.darkmetal:k.chrome,R,ue,D,V);gt.rotation.y=Math.PI/2;for(let tt=0;tt<5;tt++){let nt=tt*Math.PI*2/5;for(let vt of[-1,1]){let Ae=nt+vt*.105,bt=oe(R,.018,.11,.022,ue,D+Math.cos(Ae)*.119,V+Math.sin(Ae)*.119,Y?k.darkmetal:k.metal);bt.rotation.x=Ae}Me(R,.009,.009,.016,ue+B*.014,D+Math.cos(nt)*.044,V+Math.sin(nt)*.044,k.chrome,"x",6)}Me(R,.056,.056,.027,ue,D,V,Y?k.darkmetal:k.metal,"x",32),Me(R,.025,.025,.031,ue,D,V,k.trim,"x",24)},ch=function(R){Ge(O);let I=R.has("tires")?.368:pe?.3465:.335;if(pe)return pe.stockWheels.visible=!R.has("tires"),pe.atWheels.visible=R.has("tires"),I;let D=R.has("tires")?.765:.715;for(let V of[-D,D])for(let X of[-1.295,1.295])Lo(O,V,I,X,I,R.has("tires"));return I},hh=function(R,I=!1){let D=new qe;R.add(D);let V=.61,X=-1.62;[-.72,.72].forEach(B=>oe(D,.035,.055,2.25,B,1.82,-.5,k.darkmetal)),[V,X].forEach(B=>oe(D,1.46,.055,.035,0,1.82,B,k.darkmetal));for(let B=-1.56;B<.62;B+=.14)oe(D,1.43,.022,.072,0,1.825,B,k.trim);[-.68,.68].forEach(B=>[-1.38,.38].forEach(Q=>{oe(D,.055,.095,.11,B,1.755,Q,k.darkmetal),oe(D,.1,.02,.15,B,1.715,Q,k.rubber),Me(D,.012,.012,.06,B,1.77,Q,k.metal,"x",8)}));let Y=oe(D,1.38,.13,.018,0,1.77,.64,k.trim);if(Y.rotation.x=-.5,I){[-.72,.72].forEach(B=>Ye(D,[[B,1.83,V],[B,1.96,V-.12],[B,1.96,X+.06],[B,1.83,X]],.018));for(let B of[-1.55,.49])oe(D,1.44,.025,.025,0,1.955,B,k.darkmetal)}else for(let B of[-.72,.72])for(let Q of[-1.5,-.8,-.1,.5])oe(D,.018,.014,.045,B,1.86,Q,k.metal)},qs=function(R,I,D,V,X=.115){let Y=[[[.48,.44],[.14,.64],[-.48,.2],[-.16,-.03],[.19,.23],[.34,.14],[.48,.25]],[[.16,.03],[-.19,-.23],[-.34,-.14],[-.48,-.25],[-.48,-.44],[-.14,-.64],[.48,-.2]]];for(let B of Y){let Q=new Ot(B.map(([ae,ue])=>new ie(ae*X,ue*X)));re(new Sn(Q,{depth:.008,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.001,bevelThickness:.001}),k.chrome,R,I,D,V)}},uh=function(R,I){if(pe){if(Object.entries(pe.grilles).forEach(([D,V])=>V.visible=D===(I==="smesh"?"mesh":I)),I==="smesh"&&pe.sBadgeGeometry){let D=re(pe.sBadgeGeometry.clone(),k.chrome,R);D.userData.grilleBadge=!0,$u(D,U,G,$e)}return}if(oe(R,1.49,.286,.038,0,.977,1.855,k.trim),I==="mesh"||I==="delete"||I==="rhino"){for(let D=.866;D<1.09;D+=.028)oe(R,.88,.009,.012,0,D,1.882,k.darkmetal);for(let D=-.43;D<.45;D+=.035)oe(R,.008,.22,.012,D,.977,1.885,k.darkmetal);I==="rhino"&&qs(R,0,.98,1.907,.13)}else if(I==="oem"||I==="chrome"){for(let D of[-.35,-.175,0,.175,.35]){oe(R,.11,.2,.018,D,.977,1.88,k.darkmetal),oe(R,.075,.162,.021,D,.977,1.893,k.trim);for(let V of[-1,1])oe(R,.008,.18,.015,D+V*.048,.977,1.901,I==="chrome"?k.chrome:k.darkmetal)}qs(R,0,.98,1.92,.125)}else{for(let D=.89;D<1.08;D+=.047)oe(R,.88,.014,.012,0,D,1.887,k.darkmetal);wt(R,I==="script"?"Suzuki":"SUZUKI",.68,.12,0,.98,1.908,0,"#e2e5dd","#252e2d",I==="script")}},No=function(R,I){if(y.has(d)||I==="none")return;if(pe){r0(pe.paintMeshes,R,I,G,U.decalColour);return}let D=pe?.756:.773;[-1,1].forEach(V=>{if(I==="heritage"||I==="safari")(I==="heritage"?["#b24d25","#d58d43","#e6c58f"]:["#d7c18f","#655e47","#3d4836"]).forEach((Y,B)=>{let Q=new Ke({color:Y,roughness:.7}),ae=oe(R,.006,.045,2.7,V*D,.87+B*.052,-.36,Q);ae.userData.disposableMaterial=!0});else if(I==="geo"||I==="mountain"){let X=new Ot;X.moveTo(-1.45,0),X.lineTo(-.85,.2),X.lineTo(-.45,.06),X.lineTo(.05,.24),X.lineTo(.65,0),X.closePath();let Y=re(new Ir(X),k.darkmetal,R,V*(D+.001),.67,-.25);Y.rotation.y=V*Math.PI/2;for(let B=-1.4;B<.4;B+=.19){let Q=oe(R,.007,.05,.11,V*(D+.003),.77,B,k.trim);Q.rotation.x=-.45}}else if(I==="topo")for(let X=0;X<6;X++){let Y=[];for(let B=-1.52;B<.8;B+=.13)Y.push([V*(D+.002),.72+X*.035+Math.sin(B*4+X)*.017,B]);fe(R,Y,.003,k.darkmetal)}})},Fo=function(R,I){rt=gm({accessoryRig:z,mats:k,detailed:pe,modelBody:$e,colour:G,effectiveDesign:U,lampEmitters:ye,buildGrille:uh,addDecals:No,arch:Nn})(R,I),pe&&I.nameDecal&&z.add(km(Bm(I.nameDecal),$e,pe.paintMeshes,F))},un=function(R=ct){C=!0,st.clear(),St.dataset.cameraMode=p()?"inside":y.has(d)?"cutaway":"exterior",St.dataset.cameraView=d,ct={...ct,...R},R.colour&&(G=R.colour);for(let[ae,ue]of[["viewStock",ke],["viewBuild",!ke]]){let le=document.getElementById(ae);le?.classList.toggle("active",ue),le?.setAttribute("aria-pressed",String(ue))}let I=Ym(ke?[]:ct.parts||[],window.JIMNY_MARKET_PRODUCTS||[]),D=new Set(["tires","snorkel","skinnyjim_backbone","skinnyjim_jerry_tray","mod_reardoor_molle","seats","doortrim"]);for(let ae of window.JIMNY_MARKET_PRODUCTS||[])ae.visual&&ae.bodyStyles?.includes("3door")&&D.add(ae.visual);let V=new Set($e==="3door"?I.filter(ae=>D.has(ae)):I),X=ke?{finish:"oem",decal:"none",grille:"oem"}:{...ct.design};X.tyreType=ke?"highway":Gm(X,V),X.tyreType==="highway"?V.delete("tires"):V.add("tires"),pe&&(pe.headlamps.visible=!V.has("headlamps"),pe.bumper.visible=!["bull","autostylenn_bumper_v1"].some(ae=>V.has(ae)),Object.values(pe.grilles).forEach(ae=>$u(ae,X,G,$e))),ke||(V.has("autostylenn_big_suzuki_grille")?X.grille="block":V.has("autostylenn_cursive_grille")?X.grille="script":V.has("autostylenn_s_grille")&&(X.grille="smesh")),U={...X},k.upholstery.color.set({tan:"#a38b69",saddle:"#854d31",olive:"#59624d",stone:"#b3b1a5",black:"#303332"}[X.cabin]||"#a38b69");let Y=Qm(X.finish);Xe.color.set(G),Xe.roughness=Y.roughness,Xe.metalness=["#727973","#8a9099"].includes(G.toLowerCase())?.35:["#364b72","#5a6fd6","#8d1c25"].includes(G.toLowerCase())?.1:0,Xe.clearcoat=Y.clearcoat,Xe.clearcoatRoughness=Y.clearcoatRoughness,Xe.bumpScale=X.finish==="matte"?55e-5:8e-5,Ze.copy(Xe),X.finish==="twotone"&&Ze.color.set(/^#[0-9a-f]{6}$/i.test(X.roofColour||"")?X.roofColour:"#141b22"),[Xe,Ze].forEach(ae=>{let ue=y.has(d);ae.transparent!==ue&&(ae.needsUpdate=!0),ae.transparent=ue,ae.opacity=ue?.12:1,ae.depthWrite=!ue}),k.glass.opacity=y.has(d)||p()?.12:.6,k.glass.envMapIntensity=p()?.12:1,lt.clippingPlanes=y.has(d)?[new Rn(new N(0,-1,0),d==="headliner-cutaway"?1.631:1.48)]:[];for(let ae of["BodyShell","RoofShell","SpareWheel"]){let ue=_e.getObjectByName(ae);ue&&(ue.visible=!["cargo","doors-cutaway","headliner-cutaway","touring"].includes(d))}ve.position.set(0,1.48,d==="cargo"?-1.28:-.15),d==="footwell"&&ve.position.set(.39,1.08,.25-($e==="3door"?.17:0)),Ie?.setVisible(p()||y.has(d)),ve.intensity=p()?.85:["cargo","doors-cutaway","touring"].includes(d)?.95:y.has(d)?.35:0,Ge(q),jn();let B=ch(V);if(F.position.y=(V.has("lift")?.055:0)+(B-(pe?.3465:.335)),pe)for(let ae of[pe.stockWheels,pe.atWheels,_e.getObjectByName("SpareWheel")])X.partColours?.wheels?Tm(ae,X.partColours.wheels):wm(ae,X.wheelFinish),qu(ae,$e==="5door"&&V.has("suzuki_nomade_steelwheel")),Hm(ae,X.tyreType);if(_m(_e.getObjectByName("Cabin"),{body:$e,seats:V.has("seats"),fabric:X.seatFabric,colour:"#"+k.upholstery.color.getHexString(),touring:V.has("touring"),camp:X.touringMode==="camp"}),Fo(V,X),Qr(),y.has(d)){let ae=new Set(["doortrim","seats","touring","armrest","mats","steering","ambient","molle","drawer","shelf","mod_reardoor_molle","mod_halfmolly_5door","exploresetups_drawer_5door","armoro_seat_organizer","jimsa_door_pockets","jimsa_dash_tray","jimsa_console_tray","jimsa_cargo_pouch_5door","jimsa_tiedowns","fr_wolfpack","fr_watercan20","arb_airkit","arb_repairkit","kap_fire"]);for(let[ue,le]of Object.entries(globalThis.JimnyPracticalParts||{}))le.category==="Interior"&&ae.add(ue);z.traverse(ue=>{let le=ue.userData.finishTarget;le&&!ae.has(le)&&(ue.visible=!1)})}Vc(k,ye),st.apply([L],X),T=Km(V),Xs(),Ne=!0,pe&&$e==="5door"&&V.has("suzuki_nomade_steelwheel")&&rt.push("suzuki_nomade_steelwheel");let Q=rt.length;xn.textContent=Je?"Simplified preview \xB7 detailed model unavailable":pe?ke?"Stock preview":Q?`${Q} fitted \xB7 click a part to edit`:St.dataset.touchMode==="scroll"?"Live 3D \xB7 expand to rotate":"Click a part \xB7 drag to rotate":"Loading detailed Jimny\u2026",p()&&(xn.textContent="Click an accessory \xB7 drag to look around"),lt.domElement.setAttribute("aria-label",(p()?"Rotatable enclosed Jimny cabin. Drag to look around, Shift-drag to move, scroll to zoom.":Fd)+` ${Q} visible modifications.`),St.dataset.parts=rt.join(","),St.dataset.finish=X.finish||"oem",St.dataset.grille=X.grille||"oem",St.dataset.decal=X.decal||"none",S()},Qr=function(){z.updateWorldMatrix(!0,!0);let R=z.matrixWorld.clone().invert(),I=new Map;z.traverse(D=>{if(!D.isMesh||D.userData.disposableMaterial||Array.isArray(D.material))return;let V="";for(let Y=D;Y&&Y!==z;Y=Y.parent)if(Y.userData.finishTarget){V=Y.userData.finishTarget;break}let X=V+":"+D.material.uuid+":"+D.castShadow+":"+D.receiveShadow+":"+Object.keys(D.geometry.attributes).sort().join(",");I.has(X)||I.set(X,{material:D.material,objects:[],target:V}),I.get(X).objects.push(D)});for(let{material:D,objects:V,target:X}of I.values()){if(V.length<2)continue;let Y=V.map(ae=>{let ue=ae.geometry.index?ae.geometry.toNonIndexed():ae.geometry.clone();return ue.applyMatrix4(new Fe().multiplyMatrices(R,ae.matrixWorld)),ue}),B=kc(Y,!1);if(Y.forEach(ae=>ae.dispose()),!B)continue;V.forEach(ae=>{ae.geometry.dispose(),ae.removeFromParent()});let Q=re(B,D,z);Q.userData.finishTarget=X,Q.castShadow=V[0].castShadow,Q.receiveShadow=V[0].receiveShadow}},Xs=function(){Oe.visible=De&&Z.headlights,K.forEach(I=>{I.intensity=0}),k.white.emissiveIntensity=De&&Z.headlights?2.8:0,k.ambient.emissiveIntensity=De?2:.35,Object.values(ye).forEach(I=>I.emissiveIntensity=0),$.forEach(I=>I.intensity=0),T.forEach((I,D)=>{let V=th[I],X=$[D];if(!X)return;let Y=I==="dual"&&!Z.dualAmber?"#f1f6ff":V.colour,B=I==="bar"?1.85:I==="work"?1.79:["fog","dual"].includes(I)?.62:I==="combo"?1.22:.87;X.intensity=0,ye[I].color.set(Y),ye[I].emissive.set(Y),ye[I].emissiveIntensity=De&&Z.auxiliary?3:0}),document.querySelectorAll("[data-light-toggle]").forEach(I=>{let D=Z[I.dataset.lightToggle];I.setAttribute("aria-pressed",String(D)),I.classList.toggle("active",D)});let R=document.getElementById("lightSelectionStatus");R&&(R.textContent=T.length?T.map(I=>th[I].label).join(" \xB7 "):"Factory headlamps only. Add a lamp below to compare."),De&&(xn.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),Ne=!0},js=function(R){De=!!R,St.parentElement.classList.toggle("lighting-night",De),document.getElementById("viewNight").classList.toggle("active",De),document.getElementById("viewNight").setAttribute("aria-pressed",String(De)),Be(),Xs(),De||(d==="beam"?xi("orbit"):xn.textContent=ke?"Stock preview":rt.length?`${rt.length} representative parts in 3D`:"Click a part \xB7 drag to rotate"),Ne=!0},Yn=function(){if(p())return w(),f.target.clone();let R=new qt,I=[];if(L.updateMatrixWorld(!0),L.traverse(le=>{if(le.isMesh){for(let He=le;He&&He!==L;He=He.parent)if(!He.visible)return;R.expandByObject(le,!0),I.push(le)}}),R.isEmpty())return f.target.clone();let D=R.getCenter(new N),V=e.position.clone().sub(f.target).normalize(),X=new N().crossVectors(e.up,V).normalize(),Y=new N().crossVectors(V,X),B=Math.tan(tn.degToRad(e.fov/2)),Q=B*e.aspect,ae=0,ue=new N;for(let le of I){let He=le.geometry.attributes.position;for(let gt=0;gt<He.count;gt++){ue.fromBufferAttribute(He,gt).applyMatrix4(le.matrixWorld).sub(D);let tt=ue.dot(V);ae=Math.max(ae,Math.abs(ue.dot(X))/Q+tt,Math.abs(ue.dot(Y))/B+tt)}}return e.position.copy(D).addScaledVector(V,Math.max(f.minDistance,ae*1.06)),e.lookAt(D),D},xi=function(R){R==="beam"&&(R="orbit"),d=R,St.dataset.cameraMode=p()?"inside":y.has(R)?"cutaway":"exterior",St.dataset.cameraView=R,M(),kn(e.aspect);let I={front:[0,1.25,6.7],side:[6.6,1.3,0],rear:[-4,1.62,-5.5],orbit:[4.25,1.62,5.35],roof:[3.9,4.2,-4.5],cabin:[3.9,3.4,-3.3],cargo:[0,2.8,-5.5],underside:[3.8,-1.5,4.5],beam:[8,9,-6],"reference-front":[.7,1.45,8],"reference-rear":[-.7,1.45,-8],"reference-side":[-8,1.3,0]};e.position.set(...I[R]||I.orbit),f.target.set(0,.9,0),b(),un(),p()?E():(f.target.copy(Yn()),b()),R==="cargo"&&(e.position.set(1.65,2.25,-3.4),f.target.set(0,1.01,$e==="3door"?-1.23:-1.4),b()),R==="touring"&&(e.position.set(2.55,3.15,-3.1),f.target.set(0,.93,-.6),b(),xn.textContent="Touring interior \xB7 cutaway inspection"),R==="doors-cutaway"&&(e.position.set(-2.3,2.5,-1.5),f.target.set(0,.91,$e==="3door"?-.17:-.32),b(),xn.textContent="Door cutaway \xB7 optional inspection"),R==="headliner-cutaway"&&(e.position.set(2.3,2.6,-2.8),f.target.set(0,1.46,$e==="3door"?-.64:-.81),b(),xn.textContent="Roof removed \xB7 overhead storage inspection"),(R==="cabin"||R==="cutaway")&&(xn.textContent="Cabin cutaway \xB7 optional inspection, not the normal interior view"),R==="cargo"&&(xn.textContent="Cargo cutaway \xB7 body and spare hidden for inspection, not an open-door simulation"),p()&&(xn.textContent="Click an accessory \xB7 drag to look around"),De&&(xn.textContent="Night appearance \xB7 lens glow only, no light-throw simulation"),document.querySelectorAll("[data-camera]").forEach(D=>D.classList.toggle("active",D.dataset.camera===R)),Ne=!0},kn=function(R){e.aspect=R;let I=p()?68:J==="studio"?28:42;e.fov=tn.radToDeg(2*Math.atan(Math.tan(tn.degToRad(I/2))*Math.max(1,1.25/R))),p()&&(e.fov=Math.min(92,e.fov)),e.updateProjectionMatrix()},ea=function(R){m.drag?.id===R.pointerId&&(m.drag=null)},fh=function(){let R=lt.getSize(new ie),I=lt.getPixelRatio(),D=e.aspect,V=e.fov,X=e.position.clone(),Y=e.quaternion.clone();h(1600,1200,1),kn(4/3),Yn(),u();let B=lt.domElement.toDataURL("image/png");return h(R.x,R.y,I),e.position.copy(X),e.quaternion.copy(Y),kn(D),e.fov=V,e.updateProjectionMatrix(),u(),B},ph=function(R){j||(j={payload:structuredClone(ct),stock:ke,night:De,view:d,position:e.position.clone(),target:f.target.clone(),fov:e.fov,inside:v()}),ke=!1,js(!1),un(R),xi("orbit")},Uo=function(){if(!j)return;let R=j;j=null,ke=R.stock,un(R.payload),xi(R.view),js(R.night),x(R.inside),e.position.copy(R.position),f.target.copy(R.target),e.fov=R.fov,e.updateProjectionMatrix(),b(),Ne=!0},mh=function(R,I="orbit"){let D={payload:structuredClone(ct),stock:ke,night:De,scenery:J,view:d,position:e.position.clone(),target:f.target.clone(),fov:e.fov,inside:v(),size:lt.getSize(new ie),ratio:lt.getPixelRatio(),near:e.near,far:e.far,bodyVisible:F.visible};try{if(ke=!1,De=!1,J="studio",Be(),un(R),xi(I==="seat-detail"?"cabin":I==="grille-detail"?"front":I),h(1600,1200,1),kn(4/3),f.target.copy(Yn()),b(),I==="wheel-detail"){let Y=$e==="3door"?1.125:1.295;lt.toneMappingExposure=1.3,F.visible=!1,e.position.set(2.4,.6,Y+1.3),e.lookAt(.705,.36,Y),e.near=.1,e.far=2.7,e.updateProjectionMatrix()}if(I==="grille-detail"){let Y=$e==="3door"?1.79:1.96;e.position.set(.32,1.16,Y+3.15),e.lookAt(0,1.04,Y-.1)}if(I==="seat-detail"&&(e.position.set(1.35,1.9,1),e.lookAt(.26,1.01,-.1)),I==="touring"&&(e.position.set(2.55,3.15,-3.1),e.lookAt(0,.94,-.6)),I==="doors"&&(xi("doors-cutaway"),e.position.set(-2.3,2.5,-1.5),e.lookAt(0,.91,-.32)),R.detail){let Y=R.parts?.[0],B=window.JIMNY_MARKET_PRODUCTS?.find(le=>le.id===Y),Q=B?.visual||Y,ae={exea_cupholder:[[.12,1.35,-.09],[.57,1.17,.25]],exea_phone_mount:[[.02,1.43,-.11],[-.18,1.36,.345]],armoro_console_organizer:[[.02,1.3,-.11],[0,.84,.22]],exea_switch_extensions:[[.015,1.15,.01],[0,.965,.282]],maruti_at_mats:[[.39,1.13,.16],[.4,.698,.49]],skinnyjim_backbone:[[-1.85,1.38,-3.4],[-.49,1.04,-1.88]],skinnyjim_jerry_tray:[[-1.7,1.3,-3.4],[-.5,.91,-1.98]],suzuki_nomade_flatrack:[[2.5,3,-3.1],[0,1.82,-.52]],mod_reardoor_molle:[[0,1.78,-.9],[0,.96,-1.73]],mod_halfmolly_5door:[[1.7,1.85,-2.5],[0,1.23,-1.36]],exploresetups_drawer_5door:[[1.55,2.1,-3.05],[0,.83,-1.43]],rack:[[2.8,3.4,-3.4],[0,1.85,-.3]],msga_roofbasket:[[2.8,3.4,-3.4],[0,1.85,-.3]],prad_roofrack:[[2.8,3.4,-3.4],[0,1.85,-.3]],bull:[[1.65,1.38,4.65],[0,.8,1.9]],autostylenn_bumper_v1:[[1.65,1.32,4.65],[0,.7,1.9]],winch:[[1.4,1.15,4.1],[0,.64,1.97]],snorkel:[[-2.6,1.8,2.05],[-.76,1.36,.8]],led:[[1.4,2.6,3.8],[0,1.95,.55]],pods:[[1.65,1.65,4.2],[0,1.03,1.98]],headlamps:[[.35,1.2,4.85],[0,1.02,1.91]],sparecover:[[-1.65,1.5,-4.3],[0,1.08,-1.98]],ladder:[[-2.4,2,-4.5],[-.5,1.2,-1.94]],spoiler:[[-2,2.5,-4],[0,1.65,-1.68]],seats:[[2.45,2.65,1.45],[0,.96,-.18]],molle:[[2.65,2.28,-1.45],[0,.93,-.3]],armrest:[[1.6,2,-1.35],[0,.85,-.18]],lift:[[2.7,.75,2.9],[.45,.52,1.18]],mudflaps:[[2.7,.8,-2.8],[.65,.38,-1.25]],flares:[[3,1.15,2.8],[.7,.79,1.1]]},ue=ae[Q];ue&&$e==="3door"&&["exea_cupholder","exea_phone_mount","armoro_console_organizer","exea_switch_extensions"].includes(Q)&&(ue=ue.map(le=>[le[0],le[1],le[2]-.17])),B?.lightProfile&&(ue=B.lightProfile==="work"?[[1.8,2.7,-4],[0,1.9,-1.45]]:B.lightProfile==="bar"?ae.led:B.lightProfile==="headlamps"?ae.headlamps:ae.pods),ue&&(e.position.set(...ue[0]),e.lookAt(...ue[1]))}u();let V=document.createElement("canvas");V.width=800,V.height=600;let X=V.getContext("2d");return X.imageSmoothingQuality="high",X.drawImage(lt.domElement,0,0,800,600),V.toDataURL("image/webp",.9)}finally{F.visible=D.bodyVisible,e.near=D.near,e.far=D.far,e.updateProjectionMatrix(),ke=D.stock,De=D.night,J=D.scenery,d=D.view,M(),un(D.payload),Be(),x(D.inside),h(D.size.x,D.size.y,D.ratio),kn(D.size.x/D.size.y),e.fov=D.fov,e.updateProjectionMatrix(),e.position.copy(D.position),f.target.copy(D.target),b(),u(),Ne=!0,document.querySelectorAll("[data-camera]").forEach(V=>V.classList.toggle("active",V.dataset.camera===D.view))}},i=new Bi;i.background=new ze("#efefed");let e=new Wt(28,1,.1,250);e.position.set(4.25,1.62,5.35),lt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),lt.shadowMap.enabled=!0,lt.shadowMap.type=cs,lt.toneMapping=Is,lt.toneMappingExposure=.95,lt.domElement.setAttribute("aria-label",Fd),lt.domElement.setAttribute("role","img"),lt.domElement.tabIndex=0,St.appendChild(lt.domElement);let t=new Us(lt),n=new $c,s=t.fromScene(n,.04);i.environment=s.texture,i.environmentIntensity=.7,n.dispose(),t.dispose();let r=new Xa("#f6f8fa","#747572",1.35);i.add(r);let a=new Cs("#fffdf8",2.2);a.position.set(3,7,5),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.radius=12,a.shadow.blurSamples=16,Object.assign(a.shadow.camera,{left:-2.8,right:2.8,top:2.8,bottom:-2.8,near:.1,far:20}),a.shadow.bias=-15e-5,a.shadow.normalBias=.004,i.add(a);let o=new sh(lt,new Dt(1,1,{type:kt,samples:4}));o.addPass(new rh(i,e));let l=new Io(i,e,1,1);l.blendIntensity=.9,l.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,distanceFallOff:1,scale:1.6,samples:16}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});let c=l.render.bind(l);l.render=(...R)=>{let I=[...ne.values()].map(D=>D.skybox).filter(D=>D?.visible);I.forEach(D=>{D.visible=!1}),c(...R),I.forEach(D=>{D.visible=!0})},o.addPass(l),o.addPass(new lh);let d="orbit",f=new Zc(e,lt.domElement);f.target.set(0,.9,0),f.enableDamping=!0,f.dampingFactor=.09,f.enablePan=!1,f.minDistance=3.3,f.maxDistance=a0,f.maxPolarAngle=Math.PI*.49,f.minPolarAngle=.15;let g=Am,y=Rm,m={yaw:0,pitch:-.18,eye:new N,drag:null};new MutationObserver(S).observe(St.parentElement,{attributes:!0,attributeFilter:["class"]}),window.matchMedia("(max-width:899px)").addEventListener("change",S),S();let _=new we(new an(200,200),new za({color:"#303536",opacity:.19}));_.rotation.x=-Math.PI/2,_.position.y=-.003,_.receiveShadow=!0,i.add(_);let A=i0(lt);i.add(A.plane);let C=!0,L=new qe;i.add(L);let F=new qe;L.add(F);let O=new qe;L.add(O);let z=new qe;F.add(z);let K=[-.55,.55].map(R=>{let I=new as("#fff2cd",0,35,.3,.7,1.3);return I.position.set(R,.977,1.96),I.target.position.set(R,.05,13),F.add(I,I.target),I}),Z={headlights:!0,auxiliary:!0,dualAmber:!0},he=new qe;F.add(he);let $=Array.from({length:8},()=>{let R=new as("#fff",0,35,.3,.72,1.3);return he.add(R,R.target),R}),te=_.material,se=new Ke({color:"#303431",roughness:.96}),Ce=new qe;i.add(Ce),Ce.visible=!1;let Re=new we(new an(5.4,45),new Ke({color:"#424747",roughness:.94}));Re.rotation.x=-Math.PI/2,Re.position.set(0,.002,16),Ce.add(Re);for(let R=3;R<36;R+=3)for(let I of[-2.5,2.5]){let D=new we(new rn(.035,.32,.05),new Ke({color:"#e6e3cd",roughness:.5}));D.position.set(I,.16,R),Ce.add(D)}let Xe=new Gt({color:"#d9b744",roughness:.32,metalness:.025,clearcoat:1,clearcoatRoughness:.035}),Ze=Xe.clone();Xe.userData.vehiclePaint=!0,Ze.userData.vehiclePaint=!0;let st=fm(),k={paint:Xe,roof:Ze,trim:new Ke({color:"#232a2a",roughness:.7}),rubber:new Ke({color:"#1b2020",roughness:.98}),glass:new Ke({color:"#213c45",roughness:.12,metalness:.55,transparent:!0,opacity:.91}),metal:new Ke({color:"#adb4b0",metalness:.8,roughness:.3}),darkmetal:new Ke({color:"#39403b",metalness:.6,roughness:.5}),white:new Ke({color:"#fff7de",emissive:"#fff3c4",emissiveIntensity:.25,roughness:.2}),red:new Ke({color:"#b72d27",emissive:"#951d19",emissiveIntensity:.2}),orange:new Ke({color:"#d88132",roughness:.5}),seat:new Ke({color:"#343a36",roughness:.94}),accent:new Ke({color:"#cb593a",roughness:.7}),canvas:new Ke({color:"#a39a79",roughness:1})},q=new qe;F.add(q);let _e=new qe;F.add(_e);let pe=null,Ie=null,Je=!1,$e="5door",ce=!1,me=0,be=xe("paint");Xe.bumpMap=be,Xe.bumpScale=35e-5,k.rubber.name="TyreRubber",k.rubber.bumpMap=be,k.rubber.bumpScale=2e-4,k.rubber.color.set("#171919"),k.rubber.roughness=.9,k.glass=new Gt({color:"#101b1d",roughness:.02,metalness:0,ior:1.52,specularIntensity:1,transparent:!0,opacity:.6,depthWrite:!1,side:Ht}),k.lens=new Gt({color:"#e0e7e7",metalness:.05,roughness:.08,clearcoat:1,transparent:!0,opacity:.4,depthWrite:!1}),k.chrome=new Ke({color:"#e8eeed",metalness:1,roughness:.17}),k.reflector=new Ke({color:"#d4d9d7",metalness:1,roughness:.24}),k.brake=new Ke({color:"#737976",metalness:.85,roughness:.46}),k.textured=new Ke({color:"#30362f",roughness:.96,bumpMap:be,bumpScale:.008}),k.upholstery=new Ke({color:"#a38b69",roughness:.86,bumpMap:be,bumpScale:6e-4}),k.darkmetal.color.set("#25292b"),k.darkmetal.metalness=.4,k.darkmetal.roughness=.55,k.ambient=new Ke({color:"#386588",emissive:"#2f90d0",emissiveIntensity:.35,roughness:.5}),k.smoked=new Gt({color:"#11191b",roughness:.18,clearcoat:.7,transparent:!0,opacity:.85,depthWrite:!1,side:Ht});let ve=new Xi("#f2f3ee",0,2.3,2);ve.position.set(0,1.48,-.15),F.add(ve);let Ne=!0,Ve=!0,De=!1,ke=!1,G="#d9b744",ct={parts:[],design:{finish:"oem",decal:"none",grille:"oem"},colour:"#d9b744"},rt=[],U={finish:"oem",decal:"none",grille:"oem"},T=[],j=null,J="studio",ee=!1,ge=!1,Se=0,ne=new Map,Te=new N;new MutationObserver(Be).observe(document.documentElement,{attributes:!0,attributeFilter:["data-ui-theme"]});async function Ee(R){let I=Eo(R),D=++Se;J=I,ge=!1,ee=!ne.has(I),Be();try{if(ee){let Y=await new eh().setDataType(kt).loadAsync(Jm(I,"4k"));if(Y.mapping=Or,Y.needsUpdate=!0,D!==Se){Y.dispose();return}let B=new Us(lt),Q=B.fromEquirectangular(Y);B.dispose(),ne.set(I,{texture:Y,environment:Q})}if(D!==Se)return;let V=Vs[I],X=ne.get(I);if(!X.skybox){let Y=new Qc(X.texture,V.height,V.radius,96);Y.position.y=V.height-.004,Y.material.envMapRotation.set(0,V.rotation,0),Y.renderOrder=-1,i.add(Y),X.skybox=Y}ee=!1;try{localStorage.setItem("thatsuvmod-scenery",I)}catch{}}catch{if(D!==Se)return;ee=!1,ge=!0}Be(),kn(e.aspect),f.target.copy(Yn()),b()}document.querySelectorAll("[data-scenery-select]").forEach(R=>R.addEventListener("change",()=>Ee(R.value)));let ye=Object.fromEntries(Object.entries(th).map(([R,I])=>[R,new Ke({color:I.colour,emissive:I.colour,emissiveIntensity:0,roughness:.12,metalness:.1})])),Oe=new qe;F.add(Oe);let We=document.createElement("canvas");We.width=We.height=64;let et=We.getContext("2d"),W=et.createRadialGradient(32,32,0,32,32,32);W.addColorStop(0,"rgba(255,251,222,1)"),W.addColorStop(.18,"rgba(255,251,222,.6)"),W.addColorStop(1,"rgba(255,251,222,0)"),et.fillStyle=W,et.fillRect(0,0,64,64);let Pe=new Sr({map:new gn(We),transparent:!0,opacity:.65,depthWrite:!1,blending:Qa});for(let R of[-.55,.55]){let I=new Sa(Pe);I.position.set(R,.977,1.94),I.scale.set(.19,.19,1),Oe.add(I)}Oe.visible=!1;let re=(R,I,D,V=0,X=0,Y=0)=>{let B=new we(R,I);return B.position.set(V,X,Y),B.castShadow=!0,B.receiveShadow=!0,D.add(B),B},oe=(R,I,D,V,X,Y,B,Q=k.trim)=>re(Math.min(I,D,V)>.065?new Bt(I,D,V,2,Math.min(I,D,V)*.14):new rn(I,D,V),Q,R,X,Y,B),Me=(R,I,D,V,X,Y,B,Q=k.trim,ae="y",ue=24)=>{let le=re(new zt(I,D,V,ue),Q,R,X,Y,B);return ae==="x"&&(le.rotation.z=Math.PI/2),ae==="z"&&(le.rotation.x=Math.PI/2),le},fe=(R,I,D=.025,V=k.darkmetal)=>re(new Vn(new fi(I.map(X=>new N(...X)),!1,"centripetal",.1),Math.max(12,I.length*3),D,8,!1),V,R),Ye=(R,I,D=.01,V=k.trim)=>{let X=I.map(B=>new N(...B)),Y=new Qn;for(let B=1;B<X.length;B++)Y.add(new $n(X[B-1],X[B]));return re(new Vn(Y,I.length*2,D,6,!1),V,R)};document.addEventListener("click",R=>{let I=R.target.closest("[data-light-toggle]");I&&(Z[I.dataset.lightToggle]=!Z[I.dataset.lightToggle],Xs())}),new ResizeObserver(()=>{let{width:R,height:I}=St.getBoundingClientRect();!R||!I||(h(R,I),kn(R/I),f.target.copy(Yn()),b(),Ne=!0)}).observe(St),new IntersectionObserver(R=>{Ve=R[0].isIntersecting,Ve&&(Ne=!0)},{rootMargin:"100px"}).observe(St),f.addEventListener("change",()=>{Ne=!0}),lt.domElement.addEventListener("pointerdown",R=>{!p()||St.dataset.touchMode==="scroll"||(m.drag={id:R.pointerId,x:R.clientX,y:R.clientY,pan:R.shiftKey||R.button===2},lt.domElement.setPointerCapture(R.pointerId),R.preventDefault())}),lt.domElement.addEventListener("pointermove",R=>{let I=m.drag;if(!p()||!I||I.id!==R.pointerId)return;let D=R.clientX-I.x,V=R.clientY-I.y;if(I.x=R.clientX,I.y=R.clientY,I.pan){let X=$e==="3door"?-.17:0;m.eye.x=tn.clamp(m.eye.x-D*.0012,-.52,.52),m.eye.z=tn.clamp(m.eye.z+V*.0012,-.78+X,.16+X)}else m.yaw-=D*.004,m.pitch=tn.clamp(m.pitch+V*.003,-1.15,.8);w(),R.preventDefault()}),zm({canvas:lt.domElement,camera:e,root:L,planes:()=>lt.clippingPlanes,enabled:()=>!!pe&&!ce&&!j&&!ke,onPick:R=>window.dispatchEvent(new CustomEvent("jimny-part-pick",{detail:R}))}),lt.domElement.addEventListener("pointerup",ea),lt.domElement.addEventListener("pointercancel",ea),lt.domElement.addEventListener("contextmenu",R=>{p()&&R.preventDefault()}),lt.domElement.addEventListener("wheel",R=>{!p()||St.dataset.touchMode==="scroll"||(R.preventDefault(),e.fov=tn.clamp(e.fov+R.deltaY*.025,38,94),e.updateProjectionMatrix(),Ne=!0)},{passive:!1}),lt.domElement.addEventListener("keydown",R=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)){if(R.preventDefault(),p()){m.yaw+=R.key==="ArrowLeft"?.12:R.key==="ArrowRight"?-.12:0,m.pitch=tn.clamp(m.pitch+(R.key==="ArrowUp"?.08:R.key==="ArrowDown"?-.08:0),-1.15,.8),w();return}let I=R.key==="ArrowLeft"?.16:R.key==="ArrowRight"?-.16:0,D=e.position.clone().sub(f.target);I?D.applyAxisAngle(new N(0,1,0),I):D.multiplyScalar(R.key==="ArrowUp"?.92:1.08),e.position.copy(f.target).add(D),b(),Ne=!0}}),lt.domElement.addEventListener("webglcontextlost",()=>{xn.textContent="3D paused. Reload to restore the preview. Your build is saved."}),window.addEventListener("jimny-build-change",R=>{ke=!1,un(R.detail)}),window.addEventListener("jimny-preview-mode",R=>{ke=R.detail==="stock",un()}),window.addEventListener("jimny-preview-night",R=>js(R.detail)),window.addEventListener("jimny-preview-colour",R=>un({colour:R.detail})),document.addEventListener("click",R=>{let I=R.target.closest("[data-camera]");I&&xi(I.dataset.camera)}),document.querySelectorAll("[data-viewer-zoom]").forEach(R=>R.addEventListener("click",()=>{let I=R.dataset.viewerZoom;if(p()){I==="fit"?(kn(e.aspect),E()):(e.fov=tn.clamp(e.fov*(I==="in"?.85:1.17),38,94),e.updateProjectionMatrix()),Ne=!0;return}if(I==="fit")f.target.copy(Yn());else{let D=e.position.clone().sub(f.target),V=tn.clamp(D.length()*(I==="in"?.8:1.25),f.minDistance,f.maxDistance);e.position.copy(f.target).add(D.setLength(V))}b(),Ne=!0})),window.jimny3D={ready:!0,snapshot:fh,getState:()=>({modelVersion:pe?"blender-lwb-3":"procedural-fallback",detailedReady:!!pe,assetError:Je,studioEnvironmentReady:ne.has("studio")||ge,assemblies:pe?{grilles:Object.entries(pe.grilles).filter(([,R])=>R.visible).map(([R])=>R),wheels:pe.atWheels.visible?"all-terrain":"stock",stockBumper:pe.bumper.visible}:null,parts:[...rt],colour:G,stock:ke,night:De,lighting:{...Z,profiles:[...T],activeBeams:[...K,...$].filter(R=>R.intensity>0).length},view:d,design:{...U},touchMode:St.dataset.touchMode,renderCalls:lt.info.render.calls,triangles:lt.info.render.triangles,meshCount:L.children.reduce((R,I)=>{let D=0;return I.traverse(V=>{V.isMesh&&D++}),R+D},0)}),view:xi};let Oo=window.jimny3D.getState;Object.assign(window.jimny3D,{beginPreview:ph,endPreview:Uo,renderPreset:mh}),window.jimny3D.getState=()=>({...Oo(),body:$e,modelLoading:ce,surfaceStyles:st.snapshot(),modelVersion:pe?$e==="3door"?"blender-swb-5":"blender-lwb-10":"procedural-fallback",previewing:!!j,scenery:J,sceneryLoading:ee,sceneryFailed:ge,sceneryVisible:!!ne.get(J)?.skybox?.visible,camera:{position:e.position.toArray(),target:f.target.toArray(),fov:e.fov,mode:p()?"enclosed-look-around":y.has(d)?"cutaway":"exterior-orbit",rotate:!0,pan:p(),zoom:!0}}),un(window.getJimnyBuildState?.()||ct);let P="studio";try{P=localStorage.getItem("thatsuvmod-scenery")}catch{}Ee(P),St.classList.add("ready");async function H(R="5door"){let I=++me;ce=!0,Je=!1,St.setAttribute("aria-busy","true"),L.visible=!1,xn.textContent=`Loading ${R==="3door"?"three":"five"}-door Jimny\u2026`;let D=R==="3door"?"assets/models/jimny-swb-blender.glb?v=48f13c24ef06":"assets/models/jimny-lwb-blender.glb?v=0b7863dbf153";try{let V=await jm(D);if(I!==me){V.scene.traverse(B=>{B.geometry?.dispose(),B.material&&B.material.dispose()});return}let X=["BodyShell","RoofShell","OEMGrille","BlockGrille","RhinoGrille","ScriptGrille","GlossGrille","DeleteGrille","ClassicGrille","MeshGrille","StockBumper","StockHeadlamps","StockWheels","AllTerrainWheels","Cabin","SpareWheel"],Y=Object.fromEntries(X.map(B=>[B,V.scene.getObjectByName(B)]));if(X.some(B=>!Y[B]))throw new Error("Incomplete Jimny model");if(st.clear(),pe){L.remove(pe.stockWheels,pe.atWheels);for(let B of[pe.stockWheels,pe.atWheels])sm(B),B.traverse(Q=>Q.geometry?.dispose());pe.sBadgeGeometry?.dispose()}Ie?.dispose(),Ie=null,Ge(_e),pe=null,$e=R,V.scene.traverse(B=>{if(!B.isMesh)return;B.castShadow=!0,B.receiveShadow=!0;let Q=B.material;e0(Q),Q.name==="IntakeShadow"&&(B.castShadow=!1),Q.name==="BodyPaint"?(Xe.vertexColors=!1,B.material=Xe):Q.name==="RoofPaint"?(Ze.vertexColors=!1,B.material=Ze):Q.name==="WindowGlass"?(B.material=k.glass,B.castShadow=!1):Q.name==="TyreRubber"?(k.rubber.vertexColors=!!B.geometry.attributes.color,k.rubber.name="TyreRubber",B.material=k.rubber):Q.name==="LampEmitter"?B.material=k.white:Q.transparent&&(Q.depthWrite=!1,Q.side=ni,B.castShadow=!1),["BrightChrome","MachinedAlloy","GrilleLettering","OpticalGlass"].includes(Q.name)&&(Q.vertexColors=!1)}),bm(Y.Cabin);for(let B of X)(["StockWheels","AllTerrainWheels"].includes(B)?L:_e).add(Y[B]);pe={grilles:{oem:Y.OEMGrille,block:Y.BlockGrille,rhino:Y.RhinoGrille,script:Y.ScriptGrille,chrome:Y.GlossGrille,delete:Y.DeleteGrille,classic:Y.ClassicGrille,mesh:Y.MeshGrille},bumper:Y.StockBumper,stockWheels:Y.StockWheels,atWheels:Y.AllTerrainWheels},pe.headlamps=Y.StockHeadlamps,pe.sBadgeGeometry=jp(Y.OEMGrille,_e.matrixWorld.clone().invert()),Em(Y.Cabin,pe.sBadgeGeometry,R),Ie=ym(_e,vm(Y.Cabin,_e,R),R),Ie.update({gear:"P",range:"2H",parking:!0,rpm:0,speed:0}),dm(_e,R),pe.paintMeshes=[],Y.BodyShell.traverse(B=>{B.isMesh&&B.material===Xe&&pe.paintMeshes.push(B)}),Object.values(pe.grilles).forEach(B=>B.traverse(Q=>{Q.isMesh&&["BrightChrome","GrilleLettering"].includes(Q.material.name)&&(Q.userData.brightGrilleMaterial=Q.material)})),St.dataset.model="blender",St.dataset.body=R,L.visible=!0,ce=!1,St.setAttribute("aria-busy","false"),K.forEach(B=>B.position.z=R==="3door"?1.79:1.96),un(),p()?E():(f.target.copy(Yn()),b()),window.dispatchEvent(new CustomEvent("jimny-model-ready",{detail:{body:R}}))}catch{if(I!==me)return;ce=!1,Je=!0,St.setAttribute("aria-busy","false"),L.visible=!1,Ne=!0,xn.textContent="This model could not load. Switch model or reload to retry; your build is saved."}}window.jimny3D.setBody=H,window.addEventListener("jimny-model-change",R=>{Uo(),H(R.detail)}),H(window.getJimnyBuildState?.().body||"5door"),lt.setAnimationLoop(()=>{!Ve||document.hidden||(b(),Ne&&(u(),Ne=!1,St.dataset.rendered="true"))})}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
