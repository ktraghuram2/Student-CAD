var zd=Object.defineProperty;var kd=(s,t,e)=>t in s?zd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var pt=(s,t,e)=>kd(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tr="170",Vd=0,Rl=1,Hd=2,Ch=1,Gd=2,In=3,yn=0,ke=1,Ye=2,si=0,hs=1,Pl=2,Ll=3,Dl=4,Wd=5,Mi=100,Xd=101,qd=102,$d=103,Yd=104,Zd=200,jd=201,Jd=202,Kd=203,Ga=204,Wa=205,Qd=206,tf=207,ef=208,nf=209,sf=210,rf=211,of=212,af=213,cf=214,Xa=0,qa=1,$a=2,ps=3,Ya=4,Za=5,ja=6,Ja=7,Rh=0,lf=1,uf=2,ri=0,hf=1,df=2,ff=3,pf=4,mf=5,gf=6,_f=7,Ph=300,ms=301,gs=302,Ka=303,Qa=304,To=306,tc=1e3,Ti=1001,ec=1002,mn=1003,xf=1004,sr=1005,fn=1006,Fo=1007,Ai=1008,Vn=1009,Lh=1010,Dh=1011,js=1012,Zc=1013,Pi=1014,Bn=1015,er=1016,jc=1017,Jc=1018,_s=1020,Ih=35902,Uh=1021,Nh=1022,pn=1023,Fh=1024,Bh=1025,ds=1026,xs=1027,Oh=1028,Kc=1029,zh=1030,Qc=1031,tl=1033,so=33776,ro=33777,oo=33778,ao=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,cc=37496,lc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,xc=37817,vc=37818,yc=37819,Sc=37820,Mc=37821,co=36492,Ec=36494,bc=36495,kh=36283,wc=36284,Tc=36285,Ac=36286,vf=3200,yf=3201,Vh=0,Sf=1,ti="",Qe="srgb",ys="srgb-linear",Ao="linear",se="srgb",Fi=7680,Il=519,Mf=512,Ef=513,bf=514,Hh=515,wf=516,Tf=517,Af=518,Cf=519,Cc=35044,Ul="300 es",On=2e3,xo=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lo=Math.PI/180,Rc=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function Rf(s,t){return(s%t+t)%t}function Bo(s,t,e){return(1-e)*s+e*t}function xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Y{constructor(t=0,e=0){Y.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],v=i[4],_=i[7],b=i[2],T=i[5],w=i[8];return r[0]=o*x+a*y+c*b,r[3]=o*m+a*v+c*T,r[6]=o*p+a*_+c*w,r[1]=l*x+u*y+h*b,r[4]=l*m+u*v+h*T,r[7]=l*p+u*_+h*w,r[2]=d*x+f*y+g*b,r[5]=d*m+f*v+g*T,r[8]=d*p+f*_+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(i*l-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(u*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Bt;function Gh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pf(){const s=vo("canvas");return s.style.display="block",s}const Nl={};function Gs(s){s in Nl||(Nl[s]=!0,console.warn(s))}function Lf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Df(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function If(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Ao:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Fl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],Ol=[.3127,.329],zl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ys]:{primaries:Fl,whitePoint:Ol,transfer:Ao,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Fl,whitePoint:Ol,transfer:se,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let Bi;class Uf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=vo("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nf=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zo(i[o].image)):r.push(zo(i[o]))}else r=zo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function zo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ff=0;class Ve extends Ss{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Ti,i=Ti,r=fn,o=Ai,a=pn,c=Vn,l=Ve.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=zn(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Ph;Ve.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(f+1)/2,b=(p+1)/2,T=(u+d)/4,w=(h+x)/4,C=(g+m)/4;return v>_&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=w/n):_>b?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=w/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends Ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xh extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Of extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,p*y);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const _=a*y;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ko.copy(this).projectOnVector(t),this.sub(ko)}reflect(t){return this.sub(ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new E,Vl=new Ms;class Ne{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),or.subVectors(this.max,As),Oi.subVectors(t.a,As),zi.subVectors(t.b,As),ki.subVectors(t.c,As),Xn.subVectors(zi,Oi),qn.subVectors(ki,zi),ui.subVectors(Oi,ki);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ui.z,ui.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ui.z,0,-ui.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ui.y,ui.x,0];return!Vo(e,Oi,zi,ki,or)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Oi,zi,ki,or))?!1:(ar.crossVectors(Xn,qn),e=[ar.x,ar.y,ar.z],Vo(e,Oi,zi,ki,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new E,new E,new E,new E,new E,new E,new E,new E],an=new E,rr=new Ne,Oi=new E,zi=new E,ki=new E,Xn=new E,qn=new E,ui=new E,As=new E,or=new E,ar=new E,hi=new E;function Vo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hi.fromArray(s,r);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const zf=new Ne,Cs=new E,Ho=new E;class Co{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Ho)),this.expandByPoint(Cs.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new E,Go=new E,cr=new E,$n=new E,Wo=new E,lr=new E,Xo=new E;class Es{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=$n.dot(this.direction),c=-$n.dot(cr),l=$n.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Go).addScaledVector(cr,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){Wo.subVectors(e,t),lr.subVectors(n,t),Xo.crossVectors(Wo,lr);let o=this.direction.dot(Xo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const c=a*this.direction.dot(lr.crossVectors($n,lr));if(c<0)return null;const l=a*this.direction.dot(Wo.cross($n));if(l<0||c+l>o)return null;const u=-a*$n.dot(Xo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,e,n,i,r,o,a,c,l,u,h,d,f,g,x,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,h,d,f,g,x,m)}set(t,e,n,i,r,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Vf)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Yn.crossVectors(n,qe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Yn.crossVectors(n,qe)),Yn.normalize(),ur.crossVectors(qe,Yn),i[0]=Yn.x,i[4]=ur.x,i[8]=qe.x,i[1]=Yn.y,i[5]=ur.y,i[9]=qe.y,i[2]=Yn.z,i[6]=ur.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],b=n[15],T=i[0],w=i[4],C=i[8],M=i[12],S=i[1],P=i[5],D=i[9],I=i[13],N=i[2],z=i[6],k=i[10],q=i[14],W=i[3],ot=i[7],ut=i[11],gt=i[15];return r[0]=o*T+a*S+c*N+l*W,r[4]=o*w+a*P+c*z+l*ot,r[8]=o*C+a*D+c*k+l*ut,r[12]=o*M+a*I+c*q+l*gt,r[1]=u*T+h*S+d*N+f*W,r[5]=u*w+h*P+d*z+f*ot,r[9]=u*C+h*D+d*k+f*ut,r[13]=u*M+h*I+d*q+f*gt,r[2]=g*T+x*S+m*N+p*W,r[6]=g*w+x*P+m*z+p*ot,r[10]=g*C+x*D+m*k+p*ut,r[14]=g*M+x*I+m*q+p*gt,r[3]=y*T+v*S+_*N+b*W,r[7]=y*w+v*P+_*z+b*ot,r[11]=y*C+v*D+_*k+b*ut,r[15]=y*M+v*I+_*q+b*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-e*c*h+e*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,v=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,_=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,b=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,T=e*y+n*v+i*_+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*w,t[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*w,t[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*w,t[4]=v*w,t[5]=(u*m*r-g*d*r+g*i*f-e*m*f-u*i*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*w,t[7]=(o*d*r-u*c*r+u*i*l-e*d*l-o*i*f+e*c*f)*w,t[8]=_*w,t[9]=(g*h*r-u*x*r-g*n*f+e*x*f+u*n*p-e*h*p)*w,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*w,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*w,t[12]=b*w,t[13]=(u*x*i-g*h*i+g*n*d-e*x*d-u*n*m+e*h*m)*w,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,y=c*l,v=c*u,_=c*h,b=n.x,T=n.y,w=n.z;return i[0]=(1-(x+p))*b,i[1]=(f+_)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+v)*w,i[9]=(m-y)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Vi.set(i[0],i[1],i[2]).length();const o=Vi.set(i[4],i[5],i[6]).length(),a=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);const l=1/r,u=1/o,h=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=On){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===On)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=On){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(o-r),d=(e+t)*l,f=(n+i)*u;let g,x;if(a===On)g=(o+r)*h,x=-2*h;else if(a===xo)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new E,cn=new Wt,kf=new E(0,0,0),Vf=new E(1,1,1),Yn=new E,ur=new E,qe=new E,Hl=new Wt,Gl=new Ms;class Sn{constructor(t=0,e=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hf=0;const Wl=new E,Hi=new Ms,An=new Wt,hr=new E,Rs=new E,Gf=new E,Wf=new Ms,Xl=new E(1,0,0),ql=new E(0,1,0),$l=new E(0,0,1),Yl={type:"added"},Xf={type:"removed"},Gi={type:"childadded",child:null},qo={type:"childremoved",child:null};class Re extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new E,e=new Sn,n=new Ms,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Bt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Rs,hr,this.up):An.lookAt(hr,Rs,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(An),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new E(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new E,Cn=new E,$o=new E,Rn=new E,Wi=new E,Xi=new E,Zl=new E,Yo=new E,Zo=new E,jo=new E,Jo=new ne,Ko=new ne,Qo=new ne;class oe{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Cn.subVectors(n,e),$o.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Cn),c=ln.dot($o),l=Cn.dot(Cn),u=Cn.dot($o),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Jo.setScalar(0),Ko.setScalar(0),Qo.setScalar(0),Jo.fromBufferAttribute(t,e),Ko.fromBufferAttribute(t,n),Qo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Jo,r.x),o.addScaledVector(Ko,r.y),o.addScaledVector(Qo,r.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Cn.subVectors(t,e),ln.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return oe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Wi.subVectors(i,n),Xi.subVectors(r,n),Yo.subVectors(t,n);const c=Wi.dot(Yo),l=Xi.dot(Yo);if(c<=0&&l<=0)return e.copy(n);Zo.subVectors(t,i);const u=Wi.dot(Zo),h=Xi.dot(Zo);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Wi,o);jo.subVectors(t,r);const f=Wi.dot(jo),g=Xi.dot(jo);if(g>=0&&f<=g)return e.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Zl.subVectors(r,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(Zl,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ta(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Rf(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ta(o,r,t+1/3),this.g=ta(o,r,t),this.b=ta(o,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return jt.fromWorkingColorSpace(De.copy(this),t),Math.round(ye(De.r*255,0,255))*65536+Math.round(ye(De.g*255,0,255))*256+Math.round(ye(De.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Qe){jt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(dr);const n=Bo(Zn.h,dr.h,e),i=Bo(Zn.s,dr.s,e),r=Bo(Zn.l,dr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ot;Ot.NAMES=qh;let qf=0;class Ii extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=zn(),this.name="",this.blending=hs,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nl extends Ii{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new E,fr=new Y;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cc&&(t.usage=this.usage),t}}class $h extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yh extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $f=0;const je=new Wt,ea=new Re,qi=new E,$e=new Ne,Ps=new Ne,Te=new E;class ee extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Yh:$h)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors($e.min,Ps.min),$e.expandByPoint(Te),Te.addVectors($e.max,Ps.max),$e.expandByPoint(Te)):($e.expandByPoint(Ps.min),$e.expandByPoint(Ps.max))}$e.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Te.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),Te.add(qi)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new E,c[C]=new E;const l=new E,u=new E,h=new E,d=new Y,f=new Y,g=new Y,x=new E,m=new E;function p(C,M,S){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(x),a[M].add(x),a[S].add(x),c[C].add(m),c[M].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const S=y[C],P=S.start,D=S.count;for(let I=P,N=P+D;I<N;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const v=new E,_=new E,b=new E,T=new E;function w(C){b.fromBufferAttribute(i,C),T.copy(b);const M=a[C];v.copy(M),v.sub(b.multiplyScalar(b.dot(M))).normalize(),_.crossVectors(T,M);const P=_.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,M=y.length;C<M;++C){const S=y[C],P=S.start,D=S.count;for(let I=P,N=P+D;I<N;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,o=new E,a=new E,c=new E,l=new E,u=new E,h=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new He(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Wt,di=new Es,pr=new Co,Jl=new E,mr=new E,gr=new E,_r=new E,na=new E,xr=new E,Kl=new E,vr=new E;class Ae extends Re{constructor(t=new ee,e=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(na.fromBufferAttribute(h,t),o?xr.addScaledVector(na,u):xr.addScaledVector(na.sub(e),u))}e.add(xr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(pr.containsPoint(di.origin)===!1&&(di.intersectSphere(pr,Jl)===null||di.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),di.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=v;_<b;_+=3){const T=a.getX(_),w=a.getX(_+1),C=a.getX(_+2);i=yr(this,p,t,n,l,u,h,T,w,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);i=yr(this,o,t,n,l,u,h,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=v;_<b;_+=3){const T=_,w=_+1,C=_+2;i=yr(this,p,t,n,l,u,h,T,w,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=m,v=m+1,_=m+2;i=yr(this,o,t,n,l,u,h,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Yf(s,t,e,n,i,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===yn,a),c===null)return null;vr.copy(a),vr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(vr);return l<e.near||l>e.far?null:{distance:l,point:vr.clone(),object:s}}function yr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,mr),s.getVertexPosition(c,gr),s.getVertexPosition(l,_r);const u=Yf(s,t,e,n,mr,gr,_r,Kl);if(u){const h=new E;oe.getBarycoord(Kl,mr,gr,_r,h),i&&(u.uv=oe.getInterpolatedAttribute(i,a,c,l,h,new Y)),r&&(u.uv1=oe.getInterpolatedAttribute(r,a,c,l,h,new Y)),o&&(u.normal=oe.getInterpolatedAttribute(o,a,c,l,h,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new E,materialIndex:0};oe.getNormal(mr,gr,_r,d.normal),u.face=d,u.barycoord=h}return u}class Ui extends ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(h,2));function g(x,m,p,y,v,_,b,T,w,C,M){const S=_/w,P=b/C,D=_/2,I=b/2,N=T/2,z=w+1,k=C+1;let q=0,W=0;const ot=new E;for(let ut=0;ut<k;ut++){const gt=ut*P-I;for(let It=0;It<z;It++){const Zt=It*S-D;ot[x]=Zt*y,ot[m]=gt*v,ot[p]=N,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[p]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(It/w),h.push(1-ut/C),q+=1}}for(let ut=0;ut<C;ut++)for(let gt=0;gt<w;gt++){const It=d+gt+z*ut,Zt=d+gt+z*(ut+1),j=d+(gt+1)+z*(ut+1),tt=d+(gt+1)+z*ut;c.push(It,Zt,tt),c.push(Zt,j,tt),W+=6}a.addGroup(f,W,M),f+=W,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=vs(s[e]);for(const i in n)t[i]=n[i]}return t}function Zf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const jf={clone:vs,merge:Oe};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Ii{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jh extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new E,Ql=new Y,tu=new Y;class tn extends jh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,tu),e.subVectors(tu,Ql)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Yi=1;class Qf extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn($i,Yi,t,e);i.layers=this.layers,this.add(i);const r=new tn($i,Yi,t,e);r.layers=this.layers,this.add(r);const o=new tn($i,Yi,t,e);o.layers=this.layers,this.add(o);const a=new tn($i,Yi,t,e);a.layers=this.layers,this.add(a);const c=new tn($i,Yi,t,e);c.layers=this.layers,this.add(c);const l=new tn($i,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jh extends Ve{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tp extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ui(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:si});r.uniforms.tEquirect.value=e;const o=new Ae(i,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=fn),new Qf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const ia=new E,ep=new E,np=new Bt;class hn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ia.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),i=this.coplanarPoint(ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Co,Sr=new E;class il{constructor(t=new hn,e=new hn,n=new hn,i=new hn,r=new hn,o=new hn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+u,m+g,_+y).normalize(),n[3].setComponents(c-o,d-u,m-g,_-y).normalize(),n[4].setComponents(c-a,d-h,m-x,_-v).normalize(),e===On)n[5].setComponents(c+a,d+h,m+x,_+v).normalize();else if(e===xo)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Sr.x=i.normal.x>0?t.max.x:t.min.x,Sr.y=i.normal.y>0?t.max.y:t.min.y,Sr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ip(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Ro extends ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let v=0;v<l;v++){const _=v*h-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const v=y+l*p,_=y+l*(p+1),b=y+1+l*(p+1),T=y+1+l*p;f.push(v,_,T),f.push(_,b,T)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.width,t.height,t.widthSegments,t.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hg=`#define DISTANCE
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
}`,dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Sg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ag=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Rg=`#define TOON
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
}`,Pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:up,aomap_pars_fragment:hp,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Mp,color_fragment:Ep,color_pars_fragment:bp,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Ip,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Bp,envmap_pars_fragment:Op,envmap_pars_vertex:zp,envmap_physical_pars_fragment:jp,envmap_vertex:kp,fog_vertex:Vp,fog_pars_vertex:Hp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Kp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:lm,map_fragment:um,map_pars_fragment:hm,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:vm,morphtarget_vertex:ym,normal_fragment_begin:Sm,normal_fragment_maps:Mm,normal_pars_fragment:Em,normal_pars_vertex:bm,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Dm,premultiplied_alpha_fragment:Im,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Vm,shadowmask_pars_fragment:Hm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:$m,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:jm,transmission_fragment:Jm,transmission_pars_fragment:Km,uv_pars_fragment:Qm,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:cg,depth_vert:lg,depth_frag:ug,distanceRGBA_vert:hg,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Sg,meshmatcap_frag:Mg,meshnormal_vert:Eg,meshnormal_frag:bg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Cg,meshtoon_vert:Rg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ig,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},ct={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},_n={basic:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Oe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Oe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Oe([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Oe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Oe([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Oe([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Oe([ct.common,ct.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Oe([ct.lights,ct.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};_n.physical={uniforms:Oe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Mr={r:0,b:0,g:0},pi=new Sn,Bg=new Wt;function Og(s,t,e,n,i,r,o){const a=new Ot(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1;const _=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),v=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===To)?(u===void 0&&(u=new Ae(new Ui(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:vs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pi.copy(v.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(pi)),u.material.toneMapped=jt.getTransfer(_.colorSpace)!==se,(h!==_||d!==_.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ae(new Ro(2,2),new ai({name:"BackgroundMaterial",uniforms:vs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=jt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Mr,Zh(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function zg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,P,D,I,N){let z=!1;const k=h(I,D,P);r!==k&&(r=k,l(r.object)),z=f(S,I,D,N),z&&g(S,I,D,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(S,P,D,I),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,P,D){const I=D.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let z=N[P.id];z===void 0&&(z={},N[P.id]=z);let k=z[I];return k===void 0&&(k=d(c()),z[I]=k),k}function d(S){const P=[],D=[],I=[];for(let N=0;N<e;N++)P[N]=0,D[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,P,D,I){const N=r.attributes,z=P.attributes;let k=0;const q=D.getAttributes();for(const W in q)if(q[W].location>=0){const ut=N[W];let gt=z[W];if(gt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function g(S,P,D,I){const N={},z=P.attributes;let k=0;const q=D.getAttributes();for(const W in q)if(q[W].location>=0){let ut=z[W];ut===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));const gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),N[W]=gt,k++}r.attributes=N,r.attributesNum=k,r.index=I}function x(){const S=r.newAttributes;for(let P=0,D=S.length;P<D;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const D=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;D[S]=1,I[S]===0&&(s.enableVertexAttribArray(S),I[S]=1),N[S]!==P&&(s.vertexAttribDivisor(S,P),N[S]=P)}function y(){const S=r.newAttributes,P=r.enabledAttributes;for(let D=0,I=P.length;D<I;D++)P[D]!==S[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function v(S,P,D,I,N,z,k){k===!0?s.vertexAttribIPointer(S,P,D,N,z):s.vertexAttribPointer(S,P,D,I,N,z)}function _(S,P,D,I){x();const N=I.attributes,z=D.getAttributes(),k=P.defaultAttributeValues;for(const q in z){const W=z[q];if(W.location>=0){let ot=N[q];if(ot===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const ut=ot.normalized,gt=ot.itemSize,It=t.get(ot);if(It===void 0)continue;const Zt=It.buffer,j=It.type,tt=It.bytesPerElement,Mt=j===s.INT||j===s.UNSIGNED_INT||ot.gpuType===Zc;if(ot.isInterleavedBufferAttribute){const rt=ot.data,Rt=rt.stride,Ut=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<W.locationSize;Pt++)p(W.location+Pt,rt.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)m(W.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let Pt=0;Pt<W.locationSize;Pt++)v(W.location+Pt,gt/W.locationSize,j,ut,Rt*tt,(Ut+gt/W.locationSize*Pt)*tt,Mt)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let rt=0;rt<W.locationSize;rt++)v(W.location+rt,gt/W.locationSize,j,ut,gt*tt,gt/W.locationSize*rt*tt,Mt)}}else if(k!==void 0){const ut=k[q];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(W.location,ut);break;case 3:s.vertexAttrib3fv(W.location,ut);break;case 4:s.vertexAttrib4fv(W.location,ut);break;default:s.vertexAttrib1fv(W.location,ut)}}}}y()}function b(){C();for(const S in n){const P=n[S];for(const D in P){const I=P[D];for(const N in I)u(I[N].object),delete I[N];delete P[D]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const D in P){const I=P[D];for(const N in I)u(I[N].object),delete I[N];delete P[D]}delete n[S.id]}function w(S){for(const P in n){const D=n[P];if(D[S.id]===void 0)continue;const I=D[S.id];for(const N in I)u(I[N].object),delete I[N];delete D[S.id]}}function C(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function kg(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==pn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bn&&!C)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:b,maxSamples:T}}function Hg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new hn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,v=y*4;let _=p.clippingState||null;c.value=_,_=u(g,d,v,f);for(let b=0;b!==v;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Gg(s){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=ms:a===Qa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===Qa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tp(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class sl extends jh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,eu=[.125,.215,.35,.446,.526,.582],Ei=20,sa=new sl,nu=new Ot;let ra=null,oa=0,aa=0,ca=!1;const Si=(1+Math.sqrt(5))/2,Zi=1/Si,iu=[new E(-Si,Zi,0),new E(Si,Zi,0),new E(-Zi,0,Si),new E(Zi,0,Si),new E(0,Si,-Zi),new E(0,Si,Zi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=ca,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:er,format:pn,colorSpace:ys,depthBuffer:!1},i=ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,t,e)}return i}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,i){const a=new tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(nu),u.toneMapping=ri,u.autoClear=!1;const f=new nl({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Ae(new Ui,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(nu),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;Er(i,y*v,p>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ms||t.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=iu[(i-r-1)%iu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ae(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let y=0;for(let w=0;w<Ei;++w){const C=w/x,M=Math.exp(-C*C/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const _=this._sizeLods[i],b=3*_*(i>v-cs?i-v+cs:0),T=4*(this._cubeSize-_);Er(e,b,T,3*_,2*_),c.setRenderTarget(e),c.render(h,sa)}}function Wg(s){const t=[],e=[],n=[];let i=s;const r=s-cs+1+eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-cs?c=eu[o-s+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,C=T>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(M,x*g*T),v.set(d,m*g*T);const S=[T,T,T,T,T,T];_.set(S,p*g*T)}const b=new ee;b.setAttribute("position",new He(y,x)),b.setAttribute("uv",new He(v,m)),b.setAttribute("faceIndex",new He(_,p)),t.push(b),i>cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ru(s,t,e){const n=new Li(s,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xg(s,t,e){const n=new Float32Array(Ei),i=new E(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ou(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function au(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ka||c===Qa,u=c===ms||c===gs;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new su(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new su(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $g(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yg(s,t,e,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){const b=y[v+0],T=y[v+1],w=y[v+2];d.push(b,T,T,w,w,b)}}else if(g!==void 0){const y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const b=v+0,T=v+1,w=v+2;d.push(b,T,T,w,w,b)}}else return;const m=new(Gh(d)?Yh:$h)(d,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Zg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jg(s,t,e){const n=new WeakMap,i=new ne;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*T*4*h),C=new Xh(w,b,T,h);C.type=Bn,C.needsUpdate=!0;const M=_*4;for(let P=0;P<h;P++){const D=p[P],I=y[P],N=v[P],z=b*T*4*P;for(let k=0;k<D.count;k++){const q=k*M;g===!0&&(i.fromBufferAttribute(D,k),w[z+q+0]=i.x,w[z+q+1]=i.y,w[z+q+2]=i.z,w[z+q+3]=0),x===!0&&(i.fromBufferAttribute(I,k),w[z+q+4]=i.x,w[z+q+5]=i.y,w[z+q+6]=i.z,w[z+q+7]=0),m===!0&&(i.fromBufferAttribute(N,k),w[z+q+8]=i.x,w[z+q+9]=i.y,w[z+q+10]=i.z,w[z+q+11]=N.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new Y(b,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Kg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Qh extends Ve{constructor(t,e,n,i,r,o,a,c,l,u=ds){if(u!==ds&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ds&&(n=Pi),n===void 0&&u===xs&&(n=_s),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const td=new Ve,cu=new Qh(1,1),ed=new Xh,nd=new Of,id=new Jh,lu=[],uu=[],hu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function bs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=lu[i];if(r===void 0&&(r=new Float32Array(i),lu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Po(s,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Qg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function t0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function e0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function n0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function i0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;fu.set(n),s.uniformMatrix2fv(this.addr,!1,fu),we(e,n)}}function s0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;du.set(n),s.uniformMatrix3fv(this.addr,!1,du),we(e,n)}}function r0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;hu.set(n),s.uniformMatrix4fv(this.addr,!1,hu),we(e,n)}}function o0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function a0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function c0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function u0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function d0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function f0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function p0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cu.compareFunction=Hh,r=cu):r=td,e.setTexture2D(t||r,i)}function m0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nd,i)}function g0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||id,i)}function _0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ed,i)}function x0(s){switch(s){case 5126:return Qg;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return c0;case 35669:case 35673:return l0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(s,t){s.uniform1fv(this.addr,t)}function y0(s,t){const e=bs(t,this.size,2);s.uniform2fv(this.addr,e)}function S0(s,t){const e=bs(t,this.size,3);s.uniform3fv(this.addr,e)}function M0(s,t){const e=bs(t,this.size,4);s.uniform4fv(this.addr,e)}function E0(s,t){const e=bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function b0(s,t){const e=bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function w0(s,t){const e=bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function T0(s,t){s.uniform1iv(this.addr,t)}function A0(s,t){s.uniform2iv(this.addr,t)}function C0(s,t){s.uniform3iv(this.addr,t)}function R0(s,t){s.uniform4iv(this.addr,t)}function P0(s,t){s.uniform1uiv(this.addr,t)}function L0(s,t){s.uniform2uiv(this.addr,t)}function D0(s,t){s.uniform3uiv(this.addr,t)}function I0(s,t){s.uniform4uiv(this.addr,t)}function U0(s,t,e){const n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||td,r[o])}function N0(s,t,e){const n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nd,r[o])}function F0(s,t,e){const n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||id,r[o])}function B0(s,t,e){const n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ed,r[o])}function O0(s){switch(s){case 5126:return v0;case 35664:return y0;case 35665:return S0;case 35666:return M0;case 35674:return E0;case 35675:return b0;case 35676:return w0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return C0;case 35669:case 35673:return R0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return B0}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}}class k0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}}class V0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function pu(s,t){s.seq.push(t),s.map[t.id]=t}function H0(s,t,e){const n=s.name,i=n.length;for(la.lastIndex=0;;){const r=la.exec(n),o=la.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){pu(e,l===void 0?new z0(a,s,t):new k0(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new V0(a),pu(e,h)),e=h}}}class uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);H0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function mu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const G0=37297;let W0=0;function X0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gu=new Bt;function q0(s){jt._getMatrix(gu,jt.workingColorSpace,s);const t=`mat3( ${gu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Ao:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _u(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+X0(s.getShaderSource(t),o)}else return i}function $0(s,t){const e=q0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y0(s,t){let e;switch(t){case hf:e="Linear";break;case df:e="Reinhard";break;case ff:e="Cineon";break;case pf:e="ACESFilmic";break;case gf:e="AgX";break;case _f:e="Neutral";break;case mf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new E;function Z0(){jt.getLuminanceCoefficients(br);const s=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function J0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ws(s){return s!==""}function xu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(s){return s.replace(Q0,e_)}const t_=new Map;function e_(s,t){let e=Gt[t];if(e===void 0){const n=t_.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(s){return s.replace(n_,i_)}function i_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Su(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function s_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function r_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function a_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case lf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function c_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=s_(e),l=r_(e),u=o_(e),h=a_(e),d=c_(e),f=j0(e),g=J0(r),x=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Pc(o),o=xu(o,e),o=vu(o,e),a=Pc(a),a=xu(a,e),a=vu(a,e),o=yu(o),a=yu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,_=y+p+a,b=mu(i,i.VERTEX_SHADER,v),T=mu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,b),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(T).trim();let z=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,T);else{const q=_u(i,b,"vertex"),W=_u(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+q+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||N==="")&&(k=!1);k&&(P.diagnostics={runnable:z,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(b),i.deleteShader(T),C=new uo(i,x),M=K0(i,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,G0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let u_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new d_(t),e.set(t,n)),n}}class d_{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}}function f_(s,t,e,n,i,r,o){const a=new el,c=new h_,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,P,D,I){const N=D.fog,z=I.geometry,k=M.isMeshStandardMaterial?D.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),W=q&&q.mapping===To?q.image.height:null,ot=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=ut!==void 0?ut.length:0;let It=0;z.morphAttributes.position!==void 0&&(It=1),z.morphAttributes.normal!==void 0&&(It=2),z.morphAttributes.color!==void 0&&(It=3);let Zt,j,tt,Mt;if(ot){const te=_n[ot];Zt=te.vertexShader,j=te.fragmentShader}else Zt=M.vertexShader,j=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),Mt=c.getFragmentShaderID(M);const rt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,Pt=I.isBatchedMesh===!0,qt=!!M.map,J=!!M.matcap,it=!!q,U=!!M.aoMap,At=!!M.lightMap,et=!!M.bumpMap,vt=!!M.normalMap,at=!!M.displacementMap,Lt=!!M.emissiveMap,_t=!!M.metalnessMap,L=!!M.roughnessMap,A=M.anisotropy>0,V=M.clearcoat>0,$=M.dispersion>0,Q=M.iridescence>0,Z=M.sheen>0,Et=M.transmission>0,lt=A&&!!M.anisotropyMap,xt=V&&!!M.clearcoatMap,Xt=V&&!!M.clearcoatNormalMap,nt=V&&!!M.clearcoatRoughnessMap,yt=Q&&!!M.iridescenceMap,Dt=Q&&!!M.iridescenceThicknessMap,Nt=Z&&!!M.sheenColorMap,St=Z&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Vt=!!M.specularColorMap,ae=!!M.specularIntensityMap,F=Et&&!!M.transmissionMap,ht=Et&&!!M.thicknessMap,X=!!M.gradientMap,K=!!M.alphaMap,mt=M.alphaTest>0,dt=!!M.alphaHash,zt=!!M.extensions;let pe=ri;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(pe=s.toneMapping);const Pe={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:j,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ys,alphaToCoverage:!!M.alphaToCoverage,map:qt,matcap:J,envMap:it,envMapMode:it&&q.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:At,bumpMap:et,normalMap:vt,displacementMap:d&&at,emissiveMap:Lt,normalMapObjectSpace:vt&&M.normalMapType===Sf,normalMapTangentSpace:vt&&M.normalMapType===Vh,metalnessMap:_t,roughnessMap:L,anisotropy:A,anisotropyMap:lt,clearcoat:V,clearcoatMap:xt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:nt,dispersion:$,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:St,specularMap:$t,specularColorMap:Vt,specularIntensityMap:ae,transmission:Et,transmissionMap:F,thicknessMap:ht,gradientMap:X,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:dt,combine:M.combine,mapUv:qt&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:At&&x(M.lightMap.channel),bumpMapUv:et&&x(M.bumpMap.channel),normalMapUv:vt&&x(M.normalMap.channel),displacementMapUv:at&&x(M.displacementMap.channel),emissiveMapUv:Lt&&x(M.emissiveMap.channel),metalnessMapUv:_t&&x(M.metalnessMap.channel),roughnessMapUv:L&&x(M.roughnessMap.channel),anisotropyMapUv:lt&&x(M.anisotropyMap.channel),clearcoatMapUv:xt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(M.sheenRoughnessMap.channel),specularMapUv:$t&&x(M.specularMap.channel),specularColorMapUv:Vt&&x(M.specularColorMap.channel),specularIntensityMapUv:ae&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:ht&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(vt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(qt||K),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Rt,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:It,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:qt&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:Lt&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ye,flipSided:M.side===ke,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const S=g[M.type];let P;if(S){const D=_n[S];P=jf.clone(D.uniforms)}else P=M.uniforms;return P}function b(M,S){let P;for(let D=0,I=u.length;D<I;D++){const N=u[D];if(N.cacheKey===S){P=N,++P.usedTimes;break}}return P===void 0&&(P=new l_(s,S,M,r),u.push(P)),P}function T(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:C}}function p_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function m_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Mu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Eu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||m_),n.length>1&&n.sort(d||Mu),i.length>1&&i.sort(d||Mu)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function g_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Eu,s.set(n,[o])):i>=r.length?(o=new Eu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function __(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ot};break;case"SpotLight":e={position:new E,direction:new E,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function x_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let v_=0;function y_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function S_(s){const t=new __,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,r=new Wt,o=new Wt;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,b=0,T=0,w=0;l.sort(y_);for(let M=0,S=l.length;M<S;M++){const P=l[M],D=P.color,I=P.intensity,N=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*I,h+=D.g*I,d+=D.b*I;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],I);w++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(I),k.distance=N,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;const q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=q.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=z,_++}x++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(D).multiplyScalar(I),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const q=P.shadow,W=e.get(P);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(I),k.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==b||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=b,C.numLightProbes=w,n.version=v_++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function bu(s){const t=new S_(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function M_(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new bu(s),t.set(i,[a])):r>=o.length?(a=new bu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class E_ extends Ii{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b_ extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(s,t,e){let n=new il;const i=new Y,r=new Y,o=new ne,a=new E_({depthPacking:yf}),c=new b_,l={},u=e.maxTextureSize,h={[yn]:ke,[ke]:yn,[Ye]:Ye},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:w_,fragmentShader:T_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ee;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(si),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==In&&this.type===In,N=p===In&&this.type!==In;for(let z=0,k=T.length;z<k;z++){const q=T[z],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ot=W.getFrameExtents();if(i.multiply(ot),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ot.x),i.x=r.x*ot.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ot.y),i.y=r.y*ot.y,W.mapSize.y=r.y)),W.map===null||I===!0||N===!0){const gt=this.type!==In?{minFilter:mn,magFilter:mn}:{};W.map!==null&&W.map.dispose(),W.map=new Li(i.x,i.y,gt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ut=W.getViewportCount();for(let gt=0;gt<ut;gt++){const It=W.getViewport(gt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),D.viewport(o),W.updateMatrices(q,gt),n=W.getFrustum(),_(w,C,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===In&&y(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,P)};function y(T,w){const C=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,C,f,x,null)}function v(T,w,C,M){let S=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=S.uuid,I=w.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let z=N[I];z===void 0&&(z=S.clone(),N[I]=z,w.addEventListener("dispose",b)),S=z}if(S.visible=w.visible,S.wireframe=w.wireframe,M===In?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=s.properties.get(S);D.light=C}return S}function _(T,w,C,M,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const I=t.update(T),N=T.material;if(Array.isArray(N)){const z=I.groups;for(let k=0,q=z.length;k<q;k++){const W=z[k],ot=N[W.materialIndex];if(ot&&ot.visible){const ut=v(T,ot,M,S);T.onBeforeShadow(s,T,w,C,I,ut,W),s.renderBufferDirect(C,null,I,ut,T,W),T.onAfterShadow(s,T,w,C,I,ut,W)}}}else if(N.visible){const z=v(T,N,M,S);T.onBeforeShadow(s,T,w,C,I,z,null),s.renderBufferDirect(C,null,I,z,T,null),T.onAfterShadow(s,T,w,C,I,z,null)}}const D=T.children;for(let I=0,N=D.length;I<N;I++)_(D[I],w,C,M,S)}function b(T){T.target.removeEventListener("dispose",b);for(const C in l){const M=l[C],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const C_={[Xa]:qa,[$a]:ja,[Ya]:Ja,[ps]:Za,[qa]:Xa,[ja]:$a,[Ja]:Ya,[Za]:ps};function R_(s,t){function e(){let F=!1;const ht=new ne;let X=null;const K=new ne(0,0,0,0);return{setMask:function(mt){X!==mt&&!F&&(s.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){F=mt},setClear:function(mt,dt,zt,pe,Pe){Pe===!0&&(mt*=pe,dt*=pe,zt*=pe),ht.set(mt,dt,zt,pe),K.equals(ht)===!1&&(s.clearColor(mt,dt,zt,pe),K.copy(ht))},reset:function(){F=!1,X=null,K.set(-1,0,0,0)}}}function n(){let F=!1,ht=!1,X=null,K=null,mt=null;return{setReversed:function(dt){if(ht!==dt){const zt=t.get("EXT_clip_control");ht?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const pe=mt;mt=null,this.setClear(pe)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?rt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(dt){X!==dt&&!F&&(s.depthMask(dt),X=dt)},setFunc:function(dt){if(ht&&(dt=C_[dt]),K!==dt){switch(dt){case Xa:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case Ya:s.depthFunc(s.EQUAL);break;case Za:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=dt}},setLocked:function(dt){F=dt},setClear:function(dt){mt!==dt&&(ht&&(dt=1-dt),s.clearDepth(dt),mt=dt)},reset:function(){F=!1,X=null,K=null,mt=null,ht=!1}}}function i(){let F=!1,ht=null,X=null,K=null,mt=null,dt=null,zt=null,pe=null,Pe=null;return{setTest:function(te){F||(te?rt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(te){ht!==te&&!F&&(s.stencilMask(te),ht=te)},setFunc:function(te,rn,En){(X!==te||K!==rn||mt!==En)&&(s.stencilFunc(te,rn,En),X=te,K=rn,mt=En)},setOp:function(te,rn,En){(dt!==te||zt!==rn||pe!==En)&&(s.stencilOp(te,rn,En),dt=te,zt=rn,pe=En)},setLocked:function(te){F=te},setClear:function(te){Pe!==te&&(s.clearStencil(te),Pe=te)},reset:function(){F=!1,ht=null,X=null,K=null,mt=null,dt=null,zt=null,pe=null,Pe=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,b=null,T=null,w=new Ot(0,0,0),C=0,M=!1,S=null,P=null,D=null,I=null,N=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=q>=2);let ot=null,ut={};const gt=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),Zt=new ne().fromArray(gt),j=new ne().fromArray(It);function tt(F,ht,X,K){const mt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(F,dt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<X;zt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ht+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return dt}const Mt={};Mt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(ps),et(!1),vt(Rl),rt(s.CULL_FACE),U(si);function rt(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function Rt(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function Ut(F,ht){return h[F]!==ht?(s.bindFramebuffer(F,ht),h[F]=ht,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Pt(F,ht){let X=f,K=!1;if(F){X=d.get(ht),X===void 0&&(X=[],d.set(ht,X));const mt=F.textures;if(X.length!==mt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,zt=mt.length;dt<zt;dt++)X[dt]=s.COLOR_ATTACHMENT0+dt;X.length=mt.length,K=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,K=!0);K&&s.drawBuffers(X)}function qt(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const J={[Mi]:s.FUNC_ADD,[Xd]:s.FUNC_SUBTRACT,[qd]:s.FUNC_REVERSE_SUBTRACT};J[$d]=s.MIN,J[Yd]=s.MAX;const it={[Zd]:s.ZERO,[jd]:s.ONE,[Jd]:s.SRC_COLOR,[Ga]:s.SRC_ALPHA,[sf]:s.SRC_ALPHA_SATURATE,[ef]:s.DST_COLOR,[Qd]:s.DST_ALPHA,[Kd]:s.ONE_MINUS_SRC_COLOR,[Wa]:s.ONE_MINUS_SRC_ALPHA,[nf]:s.ONE_MINUS_DST_COLOR,[tf]:s.ONE_MINUS_DST_ALPHA,[rf]:s.CONSTANT_COLOR,[of]:s.ONE_MINUS_CONSTANT_COLOR,[af]:s.CONSTANT_ALPHA,[cf]:s.ONE_MINUS_CONSTANT_ALPHA};function U(F,ht,X,K,mt,dt,zt,pe,Pe,te){if(F===si){x===!0&&(Rt(s.BLEND),x=!1);return}if(x===!1&&(rt(s.BLEND),x=!0),F!==Wd){if(F!==m||te!==M){if((p!==Mi||_!==Mi)&&(s.blendEquation(s.FUNC_ADD),p=Mi,_=Mi),te)switch(F){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.ONE,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,b=null,T=null,w.set(0,0,0),C=0,m=F,M=te}return}mt=mt||ht,dt=dt||X,zt=zt||K,(ht!==p||mt!==_)&&(s.blendEquationSeparate(J[ht],J[mt]),p=ht,_=mt),(X!==y||K!==v||dt!==b||zt!==T)&&(s.blendFuncSeparate(it[X],it[K],it[dt],it[zt]),y=X,v=K,b=dt,T=zt),(pe.equals(w)===!1||Pe!==C)&&(s.blendColor(pe.r,pe.g,pe.b,Pe),w.copy(pe),C=Pe),m=F,M=!1}function At(F,ht){F.side===Ye?Rt(s.CULL_FACE):rt(s.CULL_FACE);let X=F.side===ke;ht&&(X=!X),et(X),F.blending===hs&&F.transparent===!1?U(si):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const K=F.stencilWrite;a.setTest(K),K&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){S!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),S=F)}function vt(F){F!==Vd?(rt(s.CULL_FACE),F!==P&&(F===Rl?s.cullFace(s.BACK):F===Hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),P=F}function at(F){F!==D&&(k&&s.lineWidth(F),D=F)}function Lt(F,ht,X){F?(rt(s.POLYGON_OFFSET_FILL),(I!==ht||N!==X)&&(s.polygonOffset(ht,X),I=ht,N=X)):Rt(s.POLYGON_OFFSET_FILL)}function _t(F){F?rt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function L(F){F===void 0&&(F=s.TEXTURE0+z-1),ot!==F&&(s.activeTexture(F),ot=F)}function A(F,ht,X){X===void 0&&(ot===null?X=s.TEXTURE0+z-1:X=ot);let K=ut[X];K===void 0&&(K={type:void 0,texture:void 0},ut[X]=K),(K.type!==F||K.texture!==ht)&&(ot!==X&&(s.activeTexture(X),ot=X),s.bindTexture(F,ht||Mt[F]),K.type=F,K.texture=ht)}function V(){const F=ut[ot];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(F){Zt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Zt.copy(F))}function St(F){j.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function $t(F,ht){let X=l.get(ht);X===void 0&&(X=new WeakMap,l.set(ht,X));let K=X.get(F);K===void 0&&(K=s.getUniformBlockIndex(ht,F.name),X.set(F,K))}function Vt(F,ht){const K=l.get(ht).get(F);c.get(ht)!==K&&(s.uniformBlockBinding(ht,K,F.__bindingPointIndex),c.set(ht,K))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ot=null,ut={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,b=null,T=null,w=new Ot(0,0,0),C=0,M=!1,S=null,P=null,D=null,I=null,N=null,Zt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Rt,bindFramebuffer:Ut,drawBuffers:Pt,useProgram:qt,setBlending:U,setMaterial:At,setFlipSided:et,setCullFace:vt,setLineWidth:at,setPolygonOffset:Lt,setScissorTest:_t,activeTexture:L,bindTexture:A,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:yt,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:Nt,viewport:St,reset:ae}}function wu(s,t,e,n){const i=P_(n);switch(e){case Uh:return s*t;case Fh:return s*t;case Bh:return s*t*2;case Oh:return s*t/i.components*i.byteLength;case Kc:return s*t/i.components*i.byteLength;case zh:return s*t*2/i.components*i.byteLength;case Qc:return s*t*2/i.components*i.byteLength;case Nh:return s*t*3/i.components*i.byteLength;case pn:return s*t*4/i.components*i.byteLength;case tl:return s*t*4/i.components*i.byteLength;case so:case ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(s,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(s,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case co:case Ec:case bc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case kh:case wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tc:case Ac:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P_(s){switch(s){case Vn:case Lh:return{byteLength:1,components:1};case js:case Dh:case er:return{byteLength:2,components:1};case jc:case Jc:return{byteLength:2,components:4};case Pi:case Zc:case Bn:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function L_(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Y,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return f?new OffscreenCanvas(L,A):vo("canvas")}function x(L,A,V){let $=1;const Q=_t(L);if((Q.width>V||Q.height>V)&&($=V/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor($*Q.width),Et=Math.floor($*Q.height);h===void 0&&(h=g(Z,Et));const lt=A?g(Z,Et):h;return lt.width=Z,lt.height=Et,lt.getContext("2d").drawImage(L,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Et+")."),lt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,A,V,$,Q=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=A;if(A===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8)),A===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),A===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8)),A===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),A===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),V===s.UNSIGNED_INT&&(Z=s.RGB32UI),V===s.BYTE&&(Z=s.RGB8I),V===s.SHORT&&(Z=s.RGB16I),V===s.INT&&(Z=s.RGB32I)),A===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),V===s.UNSIGNED_INT&&(Z=s.RGBA32UI),V===s.BYTE&&(Z=s.RGBA8I),V===s.SHORT&&(Z=s.RGBA16I),V===s.INT&&(Z=s.RGBA32I)),A===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),A===s.RGBA){const Et=Q?Ao:jt.getTransfer($);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=Et===se?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(L,A){let V;return L?A===null||A===Pi||A===_s?V=s.DEPTH24_STENCIL8:A===Bn?V=s.DEPTH32F_STENCIL8:A===js&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pi||A===_s?V=s.DEPTH_COMPONENT24:A===Bn?V=s.DEPTH_COMPONENT32F:A===js&&(V=s.DEPTH_COMPONENT16),V}function b(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==mn&&L.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function T(L){const A=L.target;A.removeEventListener("dispose",T),C(A),A.isVideoTexture&&u.delete(A)}function w(L){const A=L.target;A.removeEventListener("dispose",w),S(A)}function C(L){const A=n.get(L);if(A.__webglInit===void 0)return;const V=L.source,$=d.get(V);if($){const Q=$[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(L),Object.keys($).length===0&&d.delete(V)}n.remove(L)}function M(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const V=L.source,$=d.get(V);delete $[A.__cacheKey],o.memory.textures--}function S(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let Q=0;Q<A.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(A.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)s.deleteFramebuffer(A.__webglFramebuffer[$]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const V=L.textures;for(let $=0,Q=V.length;$<Q;$++){const Z=n.get(V[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(L)}let P=0;function D(){P=0}function I(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function N(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function z(L,A){const V=n.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,L,A);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+A)}function k(L,A){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+A)}function q(L,A){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,A);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+A)}function W(L,A){const V=n.get(L);if(L.version>0&&V.__version!==L.version){tt(V,L,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+A)}const ot={[tc]:s.REPEAT,[Ti]:s.CLAMP_TO_EDGE,[ec]:s.MIRRORED_REPEAT},ut={[mn]:s.NEAREST,[xf]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Fo]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},gt={[Mf]:s.NEVER,[Cf]:s.ALWAYS,[Ef]:s.LESS,[Hh]:s.LEQUAL,[bf]:s.EQUAL,[Af]:s.GEQUAL,[wf]:s.GREATER,[Tf]:s.NOTEQUAL};function It(L,A){if(A.type===Bn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===Fo||A.magFilter===sr||A.magFilter===Ai||A.minFilter===fn||A.minFilter===Fo||A.minFilter===sr||A.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ot[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ot[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ot[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ut[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ut[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,gt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===mn||A.minFilter!==sr&&A.minFilter!==Ai||A.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Zt(L,A){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",T));const $=A.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const Z=N(A);if(Z!==L.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[Z].usedTimes++;const Et=Q[L.__cacheKey];Et!==void 0&&(Q[L.__cacheKey].usedTimes--,Et.usedTimes===0&&M(A)),L.__cacheKey=Z,L.__webglTexture=Q[Z].texture}return V}function j(L,A,V){let $=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=s.TEXTURE_3D);const Q=Zt(L,A),Z=A.source;e.bindTexture($,L.__webglTexture,s.TEXTURE0+V);const Et=n.get(Z);if(Z.version!==Et.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);const lt=jt.getPrimaries(jt.workingColorSpace),xt=A.colorSpace===ti?null:jt.getPrimaries(A.colorSpace),Xt=A.colorSpace===ti||lt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let nt=x(A.image,!1,i.maxTextureSize);nt=Lt(A,nt);const yt=r.convert(A.format,A.colorSpace),Dt=r.convert(A.type);let Nt=v(A.internalFormat,yt,Dt,A.colorSpace,A.isVideoTexture);It($,A);let St;const $t=A.mipmaps,Vt=A.isVideoTexture!==!0,ae=Et.__version===void 0||Q===!0,F=Z.dataReady,ht=b(A,nt);if(A.isDepthTexture)Nt=_(A.format===xs,A.type),ae&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,yt,Dt,null));else if(A.isDataTexture)if($t.length>0){Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,$t[0].width,$t[0].height);for(let X=0,K=$t.length;X<K;X++)St=$t[X],Vt?F&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,yt,Dt,St.data):e.texImage2D(s.TEXTURE_2D,X,Nt,St.width,St.height,0,yt,Dt,St.data);A.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,nt.width,nt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,yt,Dt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,yt,Dt,nt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,$t[0].width,$t[0].height,nt.depth);for(let X=0,K=$t.length;X<K;X++)if(St=$t[X],A.format!==pn)if(yt!==null)if(Vt){if(F)if(A.layerUpdates.size>0){const mt=wu(St.width,St.height,A.format,A.type);for(const dt of A.layerUpdates){const zt=St.data.subarray(dt*mt/St.data.BYTES_PER_ELEMENT,(dt+1)*mt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,dt,St.width,St.height,1,yt,zt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,nt.depth,yt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Nt,St.width,St.height,nt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,nt.depth,yt,Dt,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Nt,St.width,St.height,nt.depth,0,yt,Dt,St.data)}else{Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,$t[0].width,$t[0].height);for(let X=0,K=$t.length;X<K;X++)St=$t[X],A.format!==pn?yt!==null?Vt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Nt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St.width,St.height,yt,Dt,St.data):e.texImage2D(s.TEXTURE_2D,X,Nt,St.width,St.height,0,yt,Dt,St.data)}else if(A.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,nt.width,nt.height,nt.depth),F)if(A.layerUpdates.size>0){const X=wu(nt.width,nt.height,A.format,A.type);for(const K of A.layerUpdates){const mt=nt.data.subarray(K*X/nt.data.BYTES_PER_ELEMENT,(K+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,yt,Dt,mt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Dt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,yt,Dt,nt.data);else if(A.isData3DTexture)Vt?(ae&&e.texStorage3D(s.TEXTURE_3D,ht,Nt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Dt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,yt,Dt,nt.data);else if(A.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(s.TEXTURE_2D,ht,Nt,nt.width,nt.height);else{let X=nt.width,K=nt.height;for(let mt=0;mt<ht;mt++)e.texImage2D(s.TEXTURE_2D,mt,Nt,X,K,0,yt,Dt,null),X>>=1,K>>=1}}else if($t.length>0){if(Vt&&ae){const X=_t($t[0]);e.texStorage2D(s.TEXTURE_2D,ht,Nt,X.width,X.height)}for(let X=0,K=$t.length;X<K;X++)St=$t[X],Vt?F&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt,Dt,St):e.texImage2D(s.TEXTURE_2D,X,Nt,yt,Dt,St);A.generateMipmaps=!1}else if(Vt){if(ae){const X=_t(nt);e.texStorage2D(s.TEXTURE_2D,ht,Nt,X.width,X.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Dt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,yt,Dt,nt);m(A)&&p($),Et.__version=Z.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function tt(L,A,V){if(A.image.length!==6)return;const $=Zt(L,A),Q=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);const Z=n.get(Q);if(Q.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+V);const Et=jt.getPrimaries(jt.workingColorSpace),lt=A.colorSpace===ti?null:jt.getPrimaries(A.colorSpace),xt=A.colorSpace===ti||Et===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,yt=[];for(let K=0;K<6;K++)!Xt&&!nt?yt[K]=x(A.image[K],!0,i.maxCubemapSize):yt[K]=nt?A.image[K].image:A.image[K],yt[K]=Lt(A,yt[K]);const Dt=yt[0],Nt=r.convert(A.format,A.colorSpace),St=r.convert(A.type),$t=v(A.internalFormat,Nt,St,A.colorSpace),Vt=A.isVideoTexture!==!0,ae=Z.__version===void 0||$===!0,F=Q.dataReady;let ht=b(A,Dt);It(s.TEXTURE_CUBE_MAP,A);let X;if(Xt){Vt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,Dt.width,Dt.height);for(let K=0;K<6;K++){X=yt[K].mipmaps;for(let mt=0;mt<X.length;mt++){const dt=X[mt];A.format!==pn?Nt!==null?Vt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,dt.width,dt.height,Nt,St,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,$t,dt.width,dt.height,0,Nt,St,dt.data)}}}else{if(X=A.mipmaps,Vt&&ae){X.length>0&&ht++;const K=_t(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,$t,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Vt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt[K].width,yt[K].height,Nt,St,yt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,yt[K].width,yt[K].height,0,Nt,St,yt[K].data);for(let mt=0;mt<X.length;mt++){const zt=X[mt].image[K].image;Vt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,zt.width,zt.height,Nt,St,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,$t,zt.width,zt.height,0,Nt,St,zt.data)}}else{Vt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Nt,St,yt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,Nt,St,yt[K]);for(let mt=0;mt<X.length;mt++){const dt=X[mt];Vt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Nt,St,dt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,$t,Nt,St,dt.image[K])}}}m(A)&&p(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Mt(L,A,V,$,Q,Z){const Et=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),xt=v(V.internalFormat,Et,lt,V.colorSpace),Xt=n.get(A),nt=n.get(V);if(nt.__renderTarget=A,!Xt.__hasExternalTextures){const yt=Math.max(1,A.width>>Z),Dt=Math.max(1,A.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,xt,yt,Dt,A.depth,0,Et,lt,null):e.texImage2D(Q,Z,xt,yt,Dt,0,Et,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),vt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,nt.__webglTexture,0,et(A)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,nt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(L,A,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const $=A.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Z=_(A.stencilBuffer,Q),Et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=et(A);vt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Z,A.width,A.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Z,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,L)}else{const $=A.textures;for(let Q=0;Q<$.length;Q++){const Z=$[Q],Et=r.convert(Z.format,Z.colorSpace),lt=r.convert(Z.type),xt=v(Z.internalFormat,Et,lt,Z.colorSpace),Xt=et(A);V&&vt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,xt,A.width,A.height):vt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,xt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(A.depthTexture);$.__renderTarget=A,(!$.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const Q=$.__webglTexture,Z=et(A);if(A.depthTexture.format===ds)vt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(A.depthTexture.format===xs)vt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ut(L){const A=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const Q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),A.__depthDisposeCallback=Q}A.__boundDepthTexture=$}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Rt(A.__webglFramebuffer,L)}else if(V){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=s.createRenderbuffer(),rt(A.__webglDepthbuffer[$],L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=A.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),rt(A.__webglDepthbuffer,L,!1);else{const $=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(L,A,V){const $=n.get(L);A!==void 0&&Mt($.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ut(L)}function qt(L){const A=L.texture,V=n.get(L),$=n.get(A);L.addEventListener("dispose",w);const Q=L.textures,Z=L.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=A.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let xt=0;xt<A.mipmaps.length;xt++)V.__webglFramebuffer[lt][xt]=s.createFramebuffer()}else V.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)V.__webglFramebuffer[lt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Et)for(let lt=0,xt=Q.length;lt<xt;lt++){const Xt=n.get(Q[lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&vt(L)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const xt=Q[lt];V.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const Xt=r.convert(xt.format,xt.colorSpace),nt=r.convert(xt.type),yt=v(xt.internalFormat,Xt,nt,xt.colorSpace,L.isXRRenderTarget===!0),Dt=et(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,yt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),It(s.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let xt=0;xt<A.mipmaps.length;xt++)Mt(V.__webglFramebuffer[lt][xt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else Mt(V.__webglFramebuffer[lt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(A)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,xt=Q.length;lt<xt;lt++){const Xt=Q[lt],nt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),It(s.TEXTURE_2D,Xt),Mt(V.__webglFramebuffer,L,Xt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(lt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),It(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let xt=0;xt<A.mipmaps.length;xt++)Mt(V.__webglFramebuffer[xt],L,A,s.COLOR_ATTACHMENT0,lt,xt);else Mt(V.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,lt,0);m(A)&&p(lt),e.unbindTexture()}L.depthBuffer&&Ut(L)}function J(L){const A=L.textures;for(let V=0,$=A.length;V<$;V++){const Q=A[V];if(m(Q)){const Z=y(L),Et=n.get(Q).__webglTexture;e.bindTexture(Z,Et),p(Z),e.unbindTexture()}}}const it=[],U=[];function At(L){if(L.samples>0){if(vt(L)===!1){const A=L.textures,V=L.width,$=L.height;let Q=s.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(L),lt=A.length>1;if(lt)for(let xt=0;xt<A.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Xt=n.get(A[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,V,$,0,0,V,$,Q,s.NEAREST),c===!0&&(it.length=0,U.length=0,it.push(s.COLOR_ATTACHMENT0+xt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(Z),U.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<A.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Xt=n.get(A[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function et(L){return Math.min(i.maxSamples,L.samples)}function vt(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function at(L){const A=o.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function Lt(L,A){const V=L.colorSpace,$=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==ys&&V!==ti&&(jt.getTransfer(V)===se?($!==pn||Q!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}function _t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=vt}function D_(s,t){function e(n,i=ti){let r;const o=jt.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return s.BYTE;if(n===Dh)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===Zc)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===Bn)return s.FLOAT;if(n===er)return s.HALF_FLOAT;if(n===Uh)return s.ALPHA;if(n===Nh)return s.RGB;if(n===pn)return s.RGBA;if(n===Fh)return s.LUMINANCE;if(n===Bh)return s.LUMINANCE_ALPHA;if(n===ds)return s.DEPTH_COMPONENT;if(n===xs)return s.DEPTH_STENCIL;if(n===Oh)return s.RED;if(n===Kc)return s.RED_INTEGER;if(n===zh)return s.RG;if(n===Qc)return s.RG_INTEGER;if(n===tl)return s.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Sc||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===Ec||n===bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===wc||n===Tc||n===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class I_ extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ci extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U_={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ai({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Ss{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new B_,m=e.getContextAttributes();let p=null,y=null;const v=[],_=[],b=new Y;let T=null;const w=new tn;w.viewport=new ne;const C=new tn;C.viewport=new ne;const M=[w,C],S=new I_;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=v[j];return tt===void 0&&(tt=new ua,v[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=v[j];return tt===void 0&&(tt=new ua,v[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=v[j];return tt===void 0&&(tt=new ua,v[j]=tt),tt.getHandSpace()};function I(j){const tt=_.indexOf(j.inputSource);if(tt===-1)return;const Mt=v[tt];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,l||o),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",z);for(let j=0;j<v.length;j++){const tt=_[j];tt!==null&&(_[j]=null,v[j].disconnect(tt))}P=null,D=null,x.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,y=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Li(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,Mt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?xs:ds,Mt=m.stencil?_s:Pi);const Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Li(d.textureWidth,d.textureHeight,{format:pn,type:Vn,depthTexture:new Qh(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(j){for(let tt=0;tt<j.removed.length;tt++){const Mt=j.removed[tt],rt=_.indexOf(Mt);rt>=0&&(_[rt]=null,v[rt].disconnect(Mt))}for(let tt=0;tt<j.added.length;tt++){const Mt=j.added[tt];let rt=_.indexOf(Mt);if(rt===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=_.length){_.push(Mt),rt=Ut;break}else if(_[Ut]===null){_[Ut]=Mt,rt=Ut;break}if(rt===-1)break}const Rt=v[rt];Rt&&Rt.connect(Mt)}}const k=new E,q=new E;function W(j,tt,Mt){k.setFromMatrixPosition(tt.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const rt=k.distanceTo(q),Rt=tt.projectionMatrix.elements,Ut=Mt.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),qt=Rt[14]/(Rt[10]+1),J=(Rt[9]+1)/Rt[5],it=(Rt[9]-1)/Rt[5],U=(Rt[8]-1)/Rt[0],At=(Ut[8]+1)/Ut[0],et=Pt*U,vt=Pt*At,at=rt/(-U+At),Lt=at*-U;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Lt),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const _t=Pt+at,L=qt+at,A=et-Lt,V=vt+(rt-Lt),$=J*qt/L*_t,Q=it*qt/L*_t;j.projectionMatrix.makePerspective(A,V,$,Q,_t,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ot(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let tt=j.near,Mt=j.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),S.near=C.near=w.near=tt,S.far=C.far=w.far=Mt,(P!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,D=S.far),w.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const rt=j.parent,Rt=S.cameras;ot(S,rt);for(let Ut=0;Ut<Rt.length;Ut++)ot(Rt[Ut],rt);Rt.length===2?W(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),ut(j,S,rt)};function ut(j,tt,Mt){Mt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let gt=null;function It(j,tt){if(u=tt.getViewerPose(l||o),g=tt,u!==null){const Mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Ut=0;Ut<Mt.length;Ut++){const Pt=Mt[Ut];let qt=null;if(f!==null)qt=f.getViewport(Pt);else{const it=h.getViewSubImage(d,Pt);qt=it.viewport,Ut===0&&(t.setRenderTargetTextures(y,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(y))}let J=M[Ut];J===void 0&&(J=new tn,J.layers.enable(Ut),J.viewport=new ne,M[Ut]=J),J.matrix.fromArray(Pt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Pt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(qt.x,qt.y,qt.width,qt.height),Ut===0&&(S.matrix.copy(J.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(J)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Ut=h.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&x.init(t,Ut,i.renderState)}}for(let Mt=0;Mt<v.length;Mt++){const rt=_[Mt],Rt=v[Mt];rt!==null&&Rt!==void 0&&Rt.update(rt,tt,l||o)}gt&&gt(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Zt=new Kh;Zt.setAnimationLoop(It),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}}const mi=new Sn,z_=new Wt;function k_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,mi.copy(_),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(mi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function V_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=i[y.id];_===void 0&&(g(y),_=u(y),i[y.id]=_,y.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(y,b);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){const v=h();y.__bindingPointIndex=v;const _=s.createBuffer(),b=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],_=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,w=_.length;T<w;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,S=C.length;M<S;M++){const P=C[M];if(f(P,T,M,b)===!0){const D=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let z=0;z<I.length;z++){const k=I[z],q=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,D+N,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,b){const T=y.value,w=v+"_"+_;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{const C=b[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){const v=y.uniforms;let _=0;const b=16;for(let w=0,C=v.length;w<C;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,P=M.length;S<P;S++){const D=M[S],I=Array.isArray(D.value)?D.value:[D.value];for(let N=0,z=I.length;N<z;N++){const k=I[N],q=x(k),W=_%b,ot=W%q.boundary,ut=W+ot;_+=ot,ut!==0&&b-ut<q.storage&&(_+=b-ut),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=q.storage}}}const T=_%b;return T>0&&(_+=b-T),y.__size=_,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class sd{constructor(t={}){const{canvas:e=Pf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=ri,this.toneMappingExposure=1;const _=this;let b=!1,T=0,w=0,C=null,M=-1,S=null;const P=new ne,D=new ne;let I=null;const N=new Ot(0);let z=0,k=e.width,q=e.height,W=1,ot=null,ut=null;const gt=new ne(0,0,k,q),It=new ne(0,0,k,q);let Zt=!1;const j=new il;let tt=!1,Mt=!1;const rt=new Wt,Rt=new Wt,Ut=new E,Pt=new ne,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function it(){return C===null?W:1}let U=n;function At(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tr}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){const B="webgl2";if(U=At(B,R),U===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let et,vt,at,Lt,_t,L,A,V,$,Q,Z,Et,lt,xt,Xt,nt,yt,Dt,Nt,St,$t,Vt,ae,F;function ht(){et=new $g(U),et.init(),Vt=new D_(U,et),vt=new Vg(U,et,t,Vt),at=new R_(U,et),vt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Lt=new jg(U),_t=new p_,L=new L_(U,et,at,_t,vt,Vt,Lt),A=new Gg(_),V=new qg(_),$=new ip(U),ae=new zg(U,$),Q=new Yg(U,$,Lt,ae),Z=new Kg(U,Q,$,Lt),Nt=new Jg(U,vt,L),nt=new Hg(_t),Et=new f_(_,A,V,et,vt,ae,nt),lt=new k_(_,_t),xt=new g_,Xt=new M_(et),Dt=new Og(_,A,V,at,Z,f,c),yt=new A_(_,Z,vt),F=new V_(U,Lt,vt,at),St=new kg(U,et,Lt),$t=new Zg(U,et,Lt),Lt.programs=Et.programs,_.capabilities=vt,_.extensions=et,_.properties=_t,_.renderLists=xt,_.shadowMap=yt,_.state=at,_.info=Lt}ht();const X=new O_(_,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(k,q,!1))},this.getSize=function(R){return R.set(k,q)},this.setSize=function(R,B,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,q=B,e.width=Math.floor(R*W),e.height=Math.floor(B*W),H===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(k*W,q*W).floor()},this.setDrawingBufferSize=function(R,B,H){k=R,q=B,W=H,e.width=Math.floor(R*H),e.height=Math.floor(B*H),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(gt)},this.setViewport=function(R,B,H,G){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,B,H,G),at.viewport(P.copy(gt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(It)},this.setScissor=function(R,B,H,G){R.isVector4?It.set(R.x,R.y,R.z,R.w):It.set(R,B,H,G),at.scissor(D.copy(It).multiplyScalar(W).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(R){at.setScissorTest(Zt=R)},this.setOpaqueSort=function(R){ot=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,B=!0,H=!0){let G=0;if(R){let O=!1;if(C!==null){const st=C.texture.format;O=st===tl||st===Qc||st===Kc}if(O){const st=C.texture.type,ft=st===Vn||st===Pi||st===js||st===_s||st===jc||st===Jc,bt=Dt.getClearColor(),wt=Dt.getClearAlpha(),Ft=bt.r,kt=bt.g,Tt=bt.b;ft?(g[0]=Ft,g[1]=kt,g[2]=Tt,g[3]=wt,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ft,x[1]=kt,x[2]=Tt,x[3]=wt,U.clearBufferiv(U.COLOR,0,x))}else G|=U.COLOR_BUFFER_BIT}B&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),Xt.dispose(),_t.dispose(),A.dispose(),V.dispose(),Z.dispose(),ae.dispose(),F.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",Sl),X.removeEventListener("sessionend",Ml),li.stop()};function K(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Lt.autoReset,B=yt.enabled,H=yt.autoUpdate,G=yt.needsUpdate,O=yt.type;ht(),Lt.autoReset=R,yt.enabled=B,yt.autoUpdate=H,yt.needsUpdate=G,yt.type=O}function dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function zt(R){const B=R.target;B.removeEventListener("dispose",zt),pe(B)}function pe(R){Pe(R),_t.remove(R)}function Pe(R){const B=_t.get(R).programs;B!==void 0&&(B.forEach(function(H){Et.releaseProgram(H)}),R.isShaderMaterial&&Et.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,H,G,O,st){B===null&&(B=qt);const ft=O.isMesh&&O.matrixWorld.determinant()<0,bt=Fd(R,B,H,G,O);at.setMaterial(G,ft);let wt=H.index,Ft=1;if(G.wireframe===!0){if(wt=Q.getWireframeAttribute(H),wt===void 0)return;Ft=2}const kt=H.drawRange,Tt=H.attributes.position;let Jt=kt.start*Ft,ce=(kt.start+kt.count)*Ft;st!==null&&(Jt=Math.max(Jt,st.start*Ft),ce=Math.min(ce,(st.start+st.count)*Ft)),wt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,wt.count)):Tt!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Tt.count));const le=ce-Jt;if(le<0||le===1/0)return;ae.setup(O,G,bt,H,wt);let We,Kt=St;if(wt!==null&&(We=$.get(wt),Kt=$t,Kt.setIndex(We)),O.isMesh)G.wireframe===!0?(at.setLineWidth(G.wireframeLinewidth*it()),Kt.setMode(U.LINES)):Kt.setMode(U.TRIANGLES);else if(O.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),at.setLineWidth(Ct*it()),O.isLineSegments?Kt.setMode(U.LINES):O.isLineLoop?Kt.setMode(U.LINE_LOOP):Kt.setMode(U.LINE_STRIP)}else O.isPoints?Kt.setMode(U.POINTS):O.isSprite&&Kt.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ct=O._multiDrawStarts,bn=O._multiDrawCounts,Qt=O._multiDrawCount,on=wt?$.get(wt).bytesPerElement:1,Ni=_t.get(G).currentProgram.getUniforms();for(let Xe=0;Xe<Qt;Xe++)Ni.setValue(U,"_gl_DrawID",Xe),Kt.render(Ct[Xe]/on,bn[Xe])}else if(O.isInstancedMesh)Kt.renderInstances(Jt,le,O.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bn=Math.min(H.instanceCount,Ct);Kt.renderInstances(Jt,le,bn)}else Kt.render(Jt,le)};function te(R,B,H){R.transparent===!0&&R.side===Ye&&R.forceSinglePass===!1?(R.side=ke,R.needsUpdate=!0,ir(R,B,H),R.side=yn,R.needsUpdate=!0,ir(R,B,H),R.side=Ye):ir(R,B,H)}this.compile=function(R,B,H=null){H===null&&(H=R),p=Xt.get(H),p.init(B),v.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),R!==H&&R.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return R.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const bt=st[ft];te(bt,H,O),G.add(bt)}else te(st,H,O),G.add(st)}),v.pop(),p=null,G},this.compileAsync=function(R,B,H=null){const G=this.compile(R,B,H);return new Promise(O=>{function st(){if(G.forEach(function(ft){_t.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){O(R);return}setTimeout(st,10)}et.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let rn=null;function En(R){rn&&rn(R)}function Sl(){li.stop()}function Ml(){li.start()}const li=new Kh;li.setAnimationLoop(En),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(R){rn=R,X.setAnimationLoop(R),R===null?li.stop():li.start()},X.addEventListener("sessionstart",Sl),X.addEventListener("sessionend",Ml),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,B,C),p=Xt.get(R,v.length),p.init(B),v.push(p),Rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Rt),Mt=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,Mt),m=xt.get(R,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&No(st,B,-1/0,_.sortObjects)}No(R,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ot,ut),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&Dt.addToRenderList(m,R),this.info.render.frame++,tt===!0&&nt.beginShadows();const H=p.state.shadowsArray;yt.render(H,R,B),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){const st=B.cameras;if(O.length>0)for(let ft=0,bt=st.length;ft<bt;ft++){const wt=st[ft];bl(G,O,R,wt)}J&&Dt.render(R);for(let ft=0,bt=st.length;ft<bt;ft++){const wt=st[ft];El(m,R,wt,wt.viewport)}}else O.length>0&&bl(G,O,R,B),J&&Dt.render(R),El(m,R,B);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,B),ae.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],tt===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function No(R,B,H,G){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){G&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rt);const ft=Z.update(R),bt=R.material;bt.visible&&m.push(R,ft,bt,H,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const ft=Z.update(R),bt=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Pt.copy(ft.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(Rt)),Array.isArray(bt)){const wt=ft.groups;for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Tt=wt[Ft],Jt=bt[Tt.materialIndex];Jt&&Jt.visible&&m.push(R,ft,Jt,H,Pt.z,Tt)}}else bt.visible&&m.push(R,ft,bt,H,Pt.z,null)}}const st=R.children;for(let ft=0,bt=st.length;ft<bt;ft++)No(st[ft],B,H,G)}function El(R,B,H,G){const O=R.opaque,st=R.transmissive,ft=R.transparent;p.setupLightsView(H),tt===!0&&nt.setGlobalState(_.clippingPlanes,H),G&&at.viewport(P.copy(G)),O.length>0&&nr(O,B,H),st.length>0&&nr(st,B,H),ft.length>0&&nr(ft,B,H),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function bl(R,B,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Li(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?er:Vn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const st=p.state.transmissionRenderTarget[G.id],ft=G.viewport||P;st.setSize(ft.z,ft.w);const bt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(N),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),J&&Dt.render(H);const wt=_.toneMapping;_.toneMapping=ri;const Ft=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),tt===!0&&nt.setGlobalState(_.clippingPlanes,G),nr(R,H,G),L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st),et.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Tt=0,Jt=B.length;Tt<Jt;Tt++){const ce=B[Tt],le=ce.object,We=ce.geometry,Kt=ce.material,Ct=ce.group;if(Kt.side===Ye&&le.layers.test(G.layers)){const bn=Kt.side;Kt.side=ke,Kt.needsUpdate=!0,wl(le,H,G,We,Kt,Ct),Kt.side=bn,Kt.needsUpdate=!0,kt=!0}}kt===!0&&(L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st))}_.setRenderTarget(bt),_.setClearColor(N,z),Ft!==void 0&&(G.viewport=Ft),_.toneMapping=wt}function nr(R,B,H){const G=B.isScene===!0?B.overrideMaterial:null;for(let O=0,st=R.length;O<st;O++){const ft=R[O],bt=ft.object,wt=ft.geometry,Ft=G===null?ft.material:G,kt=ft.group;bt.layers.test(H.layers)&&wl(bt,B,H,wt,Ft,kt)}}function wl(R,B,H,G,O,st){R.onBeforeRender(_,B,H,G,O,st),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(_,B,H,G,R,st),O.transparent===!0&&O.side===Ye&&O.forceSinglePass===!1?(O.side=ke,O.needsUpdate=!0,_.renderBufferDirect(H,B,G,O,R,st),O.side=yn,O.needsUpdate=!0,_.renderBufferDirect(H,B,G,O,R,st),O.side=Ye):_.renderBufferDirect(H,B,G,O,R,st),R.onAfterRender(_,B,H,G,O,st)}function ir(R,B,H){B.isScene!==!0&&(B=qt);const G=_t.get(R),O=p.state.lights,st=p.state.shadowsArray,ft=O.state.version,bt=Et.getParameters(R,O.state,st,B,H),wt=Et.getProgramCacheKey(bt);let Ft=G.programs;G.environment=R.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(R.isMeshStandardMaterial?V:A).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",zt),Ft=new Map,G.programs=Ft);let kt=Ft.get(wt);if(kt!==void 0){if(G.currentProgram===kt&&G.lightsStateVersion===ft)return Al(R,bt),kt}else bt.uniforms=Et.getUniforms(R),R.onBeforeCompile(bt,_),kt=Et.acquireProgram(bt,wt),Ft.set(wt,kt),G.uniforms=bt.uniforms;const Tt=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),Al(R,bt),G.needsLights=Od(R),G.lightsStateVersion=ft,G.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=kt,G.uniformsList=null,kt}function Tl(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=uo.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Al(R,B){const H=_t.get(R);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.batchingColor=B.batchingColor,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.instancingMorph=B.instancingMorph,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Fd(R,B,H,G,O){B.isScene!==!0&&(B=qt),L.resetTextureUnits();const st=B.fog,ft=G.isMeshStandardMaterial?B.environment:null,bt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ys,wt=(G.isMeshStandardMaterial?V:A).get(G.envMap||ft),Ft=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color;let le=ri;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=_.toneMapping);const We=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=We!==void 0?We.length:0,Ct=_t.get(G),bn=p.state.lights;if(tt===!0&&(Mt===!0||R!==S)){const Ze=R===S&&G.id===M;nt.setState(G,R,Ze)}let Qt=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==bn.state.version||Ct.outputColorSpace!==bt||O.isBatchedMesh&&Ct.batching===!1||!O.isBatchedMesh&&Ct.batching===!0||O.isBatchedMesh&&Ct.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ct.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ct.instancing===!1||!O.isInstancedMesh&&Ct.instancing===!0||O.isSkinnedMesh&&Ct.skinning===!1||!O.isSkinnedMesh&&Ct.skinning===!0||O.isInstancedMesh&&Ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ct.instancingMorph===!1&&O.morphTexture!==null||Ct.envMap!==wt||G.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==kt||Ct.morphTargets!==Tt||Ct.morphNormals!==Jt||Ct.morphColors!==ce||Ct.toneMapping!==le||Ct.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,Ct.__version=G.version);let on=Ct.currentProgram;Qt===!0&&(on=ir(G,B,O));let Ni=!1,Xe=!1,ws=!1;const ue=on.getUniforms(),gn=Ct.uniforms;if(at.useProgram(on.program)&&(Ni=!0,Xe=!0,ws=!0),G.id!==M&&(M=G.id,Xe=!0),Ni||S!==R){at.buffers.depth.getReversed()?(rt.copy(R.projectionMatrix),Df(rt),If(rt),ue.setValue(U,"projectionMatrix",rt)):ue.setValue(U,"projectionMatrix",R.projectionMatrix),ue.setValue(U,"viewMatrix",R.matrixWorldInverse);const Gn=ue.map.cameraPosition;Gn!==void 0&&Gn.setValue(U,Ut.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ue.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Xe=!0,ws=!0)}if(O.isSkinnedMesh){ue.setOptional(U,O,"bindMatrix"),ue.setOptional(U,O,"bindMatrixInverse");const Ze=O.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ue.setValue(U,"boneTexture",Ze.boneTexture,L))}O.isBatchedMesh&&(ue.setOptional(U,O,"batchingTexture"),ue.setValue(U,"batchingTexture",O._matricesTexture,L),ue.setOptional(U,O,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",O._indirectTexture,L),ue.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",O._colorsTexture,L));const Ts=H.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Nt.update(O,H,on),(Xe||Ct.receiveShadow!==O.receiveShadow)&&(Ct.receiveShadow=O.receiveShadow,ue.setValue(U,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gn.envMap.value=wt,gn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),Xe&&(ue.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&Bd(gn,ws),st&&G.fog===!0&&lt.refreshFogUniforms(gn,st),lt.refreshMaterialUniforms(gn,G,W,q,p.state.transmissionRenderTarget[R.id]),uo.upload(U,Tl(Ct),gn,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(uo.upload(U,Tl(Ct),gn,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ue.setValue(U,"center",O.center),ue.setValue(U,"modelViewMatrix",O.modelViewMatrix),ue.setValue(U,"normalMatrix",O.normalMatrix),ue.setValue(U,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ze=G.uniformsGroups;for(let Gn=0,Wn=Ze.length;Gn<Wn;Gn++){const Cl=Ze[Gn];F.update(Cl,on),F.bind(Cl,on)}}return on}function Bd(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Od(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,B,H){_t.get(R.texture).__webglTexture=B,_t.get(R.depthTexture).__webglTexture=H;const G=_t.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const H=_t.get(R);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,H=0){C=R,T=B,w=H;let G=!0,O=null,st=!1,ft=!1;if(R){const wt=_t.get(R);if(wt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(wt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(wt.__hasExternalTextures)L.rebindTextures(R,_t.get(R.texture).__webglTexture,_t.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Tt=R.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&_t.has(Tt)&&(R.width!==Tt.image.width||R.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);const kt=_t.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?O=kt[B][H]:O=kt[B],st=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?O=_t.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[H]:O=kt,P.copy(R.viewport),D.copy(R.scissor),I=R.scissorTest}else P.copy(gt).multiplyScalar(W).floor(),D.copy(It).multiplyScalar(W).floor(),I=Zt;if(at.bindFramebuffer(U.FRAMEBUFFER,O)&&G&&at.drawBuffers(R,O),at.viewport(P),at.scissor(D),at.setScissorTest(I),st){const wt=_t.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,H)}else if(ft){const wt=_t.get(R.texture),Ft=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,Ft)}M=-1},this.readRenderTargetPixels=function(R,B,H,G,O,st,ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=_t.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){at.bindFramebuffer(U.FRAMEBUFFER,bt);try{const wt=R.texture,Ft=wt.format,kt=wt.type;if(!vt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-G&&H>=0&&H<=R.height-O&&U.readPixels(B,H,G,O,Vt.convert(Ft),Vt.convert(kt),st)}finally{const wt=C!==null?_t.get(C).__webglFramebuffer:null;at.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(R,B,H,G,O,st,ft){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=_t.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){const wt=R.texture,Ft=wt.format,kt=wt.type;if(!vt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-G&&H>=0&&H<=R.height-O){at.bindFramebuffer(U.FRAMEBUFFER,bt);const Tt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(B,H,G,O,Vt.convert(Ft),Vt.convert(kt),0);const Jt=C!==null?_t.get(C).__webglFramebuffer:null;at.bindFramebuffer(U.FRAMEBUFFER,Jt);const ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Lf(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(Tt),U.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,H=0){R.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(R.image.width*G),st=Math.floor(R.image.height*G),ft=B!==null?B.x:0,bt=B!==null?B.y:0;L.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ft,bt,O,st),at.unbindTexture()},this.copyTextureToTexture=function(R,B,H=null,G=null,O=0){R.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1],B=arguments[2],O=arguments[3]||0,H=null);let st,ft,bt,wt,Ft,kt,Tt,Jt,ce;const le=R.isCompressedTexture?R.mipmaps[O]:R.image;H!==null?(st=H.max.x-H.min.x,ft=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Ft=H.min.y,kt=H.isBox3?H.min.z:0):(st=le.width,ft=le.height,bt=le.depth||1,wt=0,Ft=0,kt=0),G!==null?(Tt=G.x,Jt=G.y,ce=G.z):(Tt=0,Jt=0,ce=0);const We=Vt.convert(B.format),Kt=Vt.convert(B.type);let Ct;B.isData3DTexture?(L.setTexture3D(B,0),Ct=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Ct=U.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const bn=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),on=U.getParameter(U.UNPACK_SKIP_PIXELS),Ni=U.getParameter(U.UNPACK_SKIP_ROWS),Xe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);const ws=R.isDataArrayTexture||R.isData3DTexture,ue=B.isDataArrayTexture||B.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const gn=_t.get(R),Ts=_t.get(B),Ze=_t.get(gn.__renderTarget),Gn=_t.get(Ts.__renderTarget);at.bindFramebuffer(U.READ_FRAMEBUFFER,Ze.__webglFramebuffer),at.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<bt;Wn++)ws&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.get(R).__webglTexture,O,kt+Wn),R.isDepthTexture?(ue&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.get(B).__webglTexture,O,ce+Wn),U.blitFramebuffer(wt,Ft,st,ft,Tt,Jt,st,ft,U.DEPTH_BUFFER_BIT,U.NEAREST)):ue?U.copyTexSubImage3D(Ct,O,Tt,Jt,ce+Wn,wt,Ft,st,ft):U.copyTexSubImage2D(Ct,O,Tt,Jt,ce+Wn,wt,Ft,st,ft);at.bindFramebuffer(U.READ_FRAMEBUFFER,null),at.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ue?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Ct,O,Tt,Jt,ce,st,ft,bt,We,Kt,le.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,O,Tt,Jt,ce,st,ft,bt,We,le.data):U.texSubImage3D(Ct,O,Tt,Jt,ce,st,ft,bt,We,Kt,le):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,Tt,Jt,st,ft,We,Kt,le.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,Tt,Jt,le.width,le.height,We,le.data):U.texSubImage2D(U.TEXTURE_2D,O,Tt,Jt,st,ft,We,Kt,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,bn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,on),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ni),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe),O===0&&B.generateMipmaps&&U.generateMipmap(Ct),at.unbindTexture()},this.copyTextureToTexture3D=function(R,B,H=null,G=null,O=0){return R.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,R=arguments[2],B=arguments[3],O=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,B,H,G,O)},this.initRenderTarget=function(R){_t.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),at.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,at.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class rd extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class H_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new E;class yo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ol extends Ii{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Ls=new E,Ji=new E,Ki=new E,Qi=new Y,Ds=new Y,od=new Wt,wr=new E,Is=new E,Tr=new E,Tu=new Y,ha=new Y,Au=new Y;class ad extends Re{constructor(t=new ol){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new H_(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new yo(n,3,0,!1)),ji.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new Y(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ar(wr.set(-.5,-.5,0),Ki,o,Ji,i,r),Ar(Is.set(.5,-.5,0),Ki,o,Ji,i,r),Ar(Tr.set(.5,.5,0),Ki,o,Ji,i,r),Tu.set(0,0),ha.set(1,0),Au.set(1,1);let a=t.ray.intersectTriangle(wr,Is,Tr,!1,Ls);if(a===null&&(Ar(Is.set(-.5,.5,0),Ki,o,Ji,i,r),ha.set(0,1),a=t.ray.intersectTriangle(wr,Tr,Is,!1,Ls),a===null))return;const c=t.ray.origin.distanceTo(Ls);c<t.near||c>t.far||e.push({distance:c,point:Ls.clone(),uv:oe.getInterpolation(Ls,wr,Is,Tr,Tu,ha,Au,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(s,t,e,n,i,r){Qi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ds.x=r*Qi.x-i*Qi.y,Ds.y=i*Qi.x+r*Qi.y):Ds.copy(Qi),s.copy(t),s.x+=Ds.x,s.y+=Ds.y,s.applyMatrix4(od)}class ze extends Ii{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const So=new E,Mo=new E,Cu=new Wt,Us=new Es,Cr=new Co,da=new E,Ru=new E;class Fn extends Re{constructor(t=new ee,e=new ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)So.fromBufferAttribute(e,i-1),Mo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=So.distanceTo(Mo);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;Cu.copy(i).invert(),Us.copy(t.ray).applyMatrix4(Cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),y=u.getX(x+1),v=Rr(this,t,Us,c,p,y);v&&e.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=Rr(this,t,Us,c,x,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=Rr(this,t,Us,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Rr(this,t,Us,c,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(So.fromBufferAttribute(o,i),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(So,Mo,da,Ru)>n)return;da.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(da);if(!(c<t.near||c>t.far))return{distance:c,point:Ru.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Pu=new E,Lu=new E;class oi extends Fn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Pu.fromBufferAttribute(e,i),Lu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pu.distanceTo(Lu);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lc extends Ve{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Y:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,i=[],r=[],o=[],a=new E,c=new Wt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ye(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class al extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Y){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class G_ extends al{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Pr=new E,fa=new cl,pa=new cl,ma=new cl;class W_ extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Pr.subVectors(i[0],i[1]).add(i[0]),l=Pr);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Pr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),fa.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),pa.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),ma.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),pa.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ma.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(fa.calc(c),pa.calc(c),ma.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Du(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function X_(s,t){const e=1-s;return e*e*t}function q_(s,t){return 2*(1-s)*s*t}function $_(s,t){return s*s*t}function Xs(s,t,e,n){return X_(s,t)+q_(s,e)+$_(s,n)}function Y_(s,t){const e=1-s;return e*e*e*t}function Z_(s,t){const e=1-s;return 3*e*e*s*t}function j_(s,t){return 3*(1-s)*s*s*t}function J_(s,t){return s*s*s*t}function qs(s,t,e,n,i){return Y_(s,t)+Z_(s,e)+j_(s,n)+J_(s,i)}class cd extends Mn{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,i.x,r.x,o.x,a.x),qs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class K_ extends Mn{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,i.x,r.x,o.x,a.x),qs(t,i.y,r.y,o.y,a.y),qs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ld extends Mn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends Mn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends Mn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,i.x,r.x,o.x),Xs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tx extends Mn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,i.x,r.x,o.x),Xs(t,i.y,r.y,o.y),Xs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Du(a,c.x,l.x,u.x,h.x),Du(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Y().fromArray(i))}return this}}var Dc=Object.freeze({__proto__:null,ArcCurve:G_,CatmullRomCurve3:W_,CubicBezierCurve:cd,CubicBezierCurve3:K_,EllipseCurve:al,LineCurve:ld,LineCurve3:Q_,QuadraticBezierCurve:ud,QuadraticBezierCurve3:tx,SplineCurve:hd});class ex extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Dc[i.type]().fromJSON(i))}return this}}class Iu extends ex{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ld(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new ud(this.currentPoint.clone(),new Y(t,e),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new cd(this.currentPoint.clone(),new Y(t,e),new Y(n,i),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new al(t,e,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ll extends ee{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ye(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new E,d=new Y,f=new E,g=new E,x=new E;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){const v=n+y*u*i,_=Math.sin(v),b=Math.cos(v);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*_,h.y=t[T].y,h.z=t[T].x*b,o.push(h.x,h.y,h.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);const w=c[3*T+0]*_,C=c[3*T+1],M=c[3*T+0]*b;l.push(w,C,M)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const _=v+y*t.length,b=_,T=_+t.length,w=_+t.length+1,C=_+1;r.push(b,T,C),r.push(w,C,T)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.points,t.segments,t.phiStart,t.phiLength)}}class Lo extends ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(f,2));function y(){const _=new E,b=new E;let T=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],S=C/r,P=S*(e-t)+t;for(let D=0;D<=i;D++){const I=D/i,N=I*c+a,z=Math.sin(N),k=Math.cos(N);b.x=P*z,b.y=-S*n+m,b.z=P*k,h.push(b.x,b.y,b.z),_.set(z,w,k).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-S),M.push(g++)}x.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const S=x[M][C],P=x[M+1][C],D=x[M+1][C+1],I=x[M][C+1];(t>0||M!==0)&&(u.push(S,P,I),T+=3),(e>0||M!==r-1)&&(u.push(P,D,I),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){const b=g,T=new Y,w=new E;let C=0;const M=_===!0?t:e,S=_===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=i;D++){const N=D/i*c+a,z=Math.cos(N),k=Math.sin(N);w.x=M*k,w.y=m*S,w.z=M*z,h.push(w.x,w.y,w.z),d.push(0,S,0),T.x=z*.5+.5,T.y=k*.5*S+.5,f.push(T.x,T.y),g++}for(let D=0;D<i;D++){const I=b+D,N=P+D;_===!0?u.push(N,N+1,I):u.push(N+1,N,I),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ul extends Lo{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ul(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Lr=new E,Dr=new E,ga=new E,Ir=new oe;class dd extends ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(lo*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:m,c:p}=Ir;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ir.getNormal(ga),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const v=(y+1)%3,_=h[y],b=h[v],T=Ir[u[y]],w=Ir[u[v]],C=`${_}_${b}`,M=`${b}_${_}`;M in d&&d[M]?(ga.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(w.x,w.y,w.z)),d[M]=null):C in d||(d[C]={index0:l[y],index1:l[v],normal:ga.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];Lr.fromBufferAttribute(a,x),Dr.fromBufferAttribute(a,m),f.push(Lr.x,Lr.y,Lr.z),f.push(Dr.x,Dr.y,Dr.z)}this.setAttribute("position",new he(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class fd extends Iu{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Iu().fromJSON(i))}return this}}const nx={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=pd(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=ax(s,t,r,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let g=e;g<i;g+=e)h=s[g],d=s[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Js(r,o,e,a,c,f,0),o}};function pd(s,t,e,n,i){let r,o;if(i===xx(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Uu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Uu(r,s[r],s[r+1],o);return o&&Do(o,o.next)&&(Qs(o),o=o.next),o}function Di(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Do(e,e.next)||fe(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(s,t,e,n,i,r,o){if(!s)return;!o&&r&&dx(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?sx(s,n,i,r):ix(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Qs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=rx(Di(s),t,e),Js(s,t,e,n,i,r,2)):o===2&&ox(s,t,e,n,i,r):Js(Di(s),t,e,n,i,r,1);break}}}function ix(s){const t=s.prev,e=s,n=s.next;if(fe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ls(i,a,r,c,o,l,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sx(s,t,e,n){const i=s.prev,r=s,o=s.next;if(fe(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=Ic(f,g,t,e,n),y=Ic(x,m,t,e,n);let v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&ls(a,u,c,h,l,d,v.x,v.y)&&fe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&ls(a,u,c,h,l,d,_.x,_.y)&&fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&ls(a,u,c,h,l,d,v.x,v.y)&&fe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&ls(a,u,c,h,l,d,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rx(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Do(i,r)&&md(i,n,n.next,r)&&Ks(i,r)&&Ks(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qs(n),Qs(n.next),n=s=r),n=n.next}while(n!==s);return Di(n)}function ox(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mx(o,a)){let c=gd(o,a);o=Di(o,o.next),c=Di(c,c.next),Js(o,t,e,n,i,r,0),Js(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ax(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=pd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(px(l));for(i.sort(cx),r=0;r<i.length;r++)e=lx(i[r],e);return e}function cx(s,t){return s.x-t.x}function lx(s,t){const e=ux(s,t);if(!e)return t;const n=gd(e,s);return Di(n,n.next),Di(e,e.next)}function ux(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&ls(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ks(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&hx(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function hx(s,t){return fe(s.prev,s,t.prev)<0&&fe(t.next,s,s.next)<0}function dx(s,t,e,n){let i=s;do i.z===0&&(i.z=Ic(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,fx(i)}function fx(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Ic(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function px(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ls(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function mx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!gx(s,t)&&(Ks(s,t)&&Ks(t,s)&&_x(s,t)&&(fe(s.prev,s,t.prev)||fe(s,t.prev,t))||Do(s,t)&&fe(s.prev,s,s.next)>0&&fe(t.prev,t,t.next)>0)}function fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Do(s,t){return s.x===t.x&&s.y===t.y}function md(s,t,e,n){const i=Nr(fe(s,t,e)),r=Nr(fe(s,t,n)),o=Nr(fe(e,n,s)),a=Nr(fe(e,n,t));return!!(i!==r&&o!==a||i===0&&Ur(s,e,t)||r===0&&Ur(s,n,t)||o===0&&Ur(e,s,n)||a===0&&Ur(e,t,n))}function Ur(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Nr(s){return s>0?1:s<0?-1:0}function gx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&md(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ks(s,t){return fe(s.prev,s,s.next)<0?fe(s,t,s.next)>=0&&fe(s,s.prev,t)>=0:fe(s,t,s.prev)<0||fe(s,s.next,t)<0}function _x(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function gd(s,t){const e=new Uc(s.i,s.x,s.y),n=new Uc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uu(s,t,e,n){const i=new Uc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Uc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class $s{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return $s.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Nu(t),Fu(n,t);let o=t.length;e.forEach(Nu);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Fu(n,e[c]);const a=nx.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Nu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Fu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class hl extends ee{constructor(t=new fd([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:vx;let v,_=!1,b,T,w,C;p&&(v=p.getSpacedPoints(u),_=!0,d=!1,b=p.computeFrenetFrames(u,!1),T=new E,w=new E,C=new E),d||(m=0,f=0,g=0,x=0);const M=a.extractPoints(l);let S=M.shape;const P=M.holes;if(!$s.isClockWise(S)){S=S.reverse();for(let J=0,it=P.length;J<it;J++){const U=P[J];$s.isClockWise(U)&&(P[J]=U.reverse())}}const I=$s.triangulateShape(S,P),N=S;for(let J=0,it=P.length;J<it;J++){const U=P[J];S=S.concat(U)}function z(J,it,U){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,U)}const k=S.length,q=I.length;function W(J,it,U){let At,et,vt;const at=J.x-it.x,Lt=J.y-it.y,_t=U.x-J.x,L=U.y-J.y,A=at*at+Lt*Lt,V=at*L-Lt*_t;if(Math.abs(V)>Number.EPSILON){const $=Math.sqrt(A),Q=Math.sqrt(_t*_t+L*L),Z=it.x-Lt/$,Et=it.y+at/$,lt=U.x-L/Q,xt=U.y+_t/Q,Xt=((lt-Z)*L-(xt-Et)*_t)/(at*L-Lt*_t);At=Z+at*Xt-J.x,et=Et+Lt*Xt-J.y;const nt=At*At+et*et;if(nt<=2)return new Y(At,et);vt=Math.sqrt(nt/2)}else{let $=!1;at>Number.EPSILON?_t>Number.EPSILON&&($=!0):at<-Number.EPSILON?_t<-Number.EPSILON&&($=!0):Math.sign(Lt)===Math.sign(L)&&($=!0),$?(At=-Lt,et=at,vt=Math.sqrt(A)):(At=at,et=Lt,vt=Math.sqrt(A/2))}return new Y(At/vt,et/vt)}const ot=[];for(let J=0,it=N.length,U=it-1,At=J+1;J<it;J++,U++,At++)U===it&&(U=0),At===it&&(At=0),ot[J]=W(N[J],N[U],N[At]);const ut=[];let gt,It=ot.concat();for(let J=0,it=P.length;J<it;J++){const U=P[J];gt=[];for(let At=0,et=U.length,vt=et-1,at=At+1;At<et;At++,vt++,at++)vt===et&&(vt=0),at===et&&(at=0),gt[At]=W(U[At],U[vt],U[at]);ut.push(gt),It=It.concat(gt)}for(let J=0;J<m;J++){const it=J/m,U=f*Math.cos(it*Math.PI/2),At=g*Math.sin(it*Math.PI/2)+x;for(let et=0,vt=N.length;et<vt;et++){const at=z(N[et],ot[et],At);rt(at.x,at.y,-U)}for(let et=0,vt=P.length;et<vt;et++){const at=P[et];gt=ut[et];for(let Lt=0,_t=at.length;Lt<_t;Lt++){const L=z(at[Lt],gt[Lt],At);rt(L.x,L.y,-U)}}}const Zt=g+x;for(let J=0;J<k;J++){const it=d?z(S[J],It[J],Zt):S[J];_?(w.copy(b.normals[0]).multiplyScalar(it.x),T.copy(b.binormals[0]).multiplyScalar(it.y),C.copy(v[0]).add(w).add(T),rt(C.x,C.y,C.z)):rt(it.x,it.y,0)}for(let J=1;J<=u;J++)for(let it=0;it<k;it++){const U=d?z(S[it],It[it],Zt):S[it];_?(w.copy(b.normals[J]).multiplyScalar(U.x),T.copy(b.binormals[J]).multiplyScalar(U.y),C.copy(v[J]).add(w).add(T),rt(C.x,C.y,C.z)):rt(U.x,U.y,h/u*J)}for(let J=m-1;J>=0;J--){const it=J/m,U=f*Math.cos(it*Math.PI/2),At=g*Math.sin(it*Math.PI/2)+x;for(let et=0,vt=N.length;et<vt;et++){const at=z(N[et],ot[et],At);rt(at.x,at.y,h+U)}for(let et=0,vt=P.length;et<vt;et++){const at=P[et];gt=ut[et];for(let Lt=0,_t=at.length;Lt<_t;Lt++){const L=z(at[Lt],gt[Lt],At);_?rt(L.x,L.y+v[u-1].y,v[u-1].x+U):rt(L.x,L.y,h+U)}}}j(),tt();function j(){const J=i.length/3;if(d){let it=0,U=k*it;for(let At=0;At<q;At++){const et=I[At];Rt(et[2]+U,et[1]+U,et[0]+U)}it=u+m*2,U=k*it;for(let At=0;At<q;At++){const et=I[At];Rt(et[0]+U,et[1]+U,et[2]+U)}}else{for(let it=0;it<q;it++){const U=I[it];Rt(U[2],U[1],U[0])}for(let it=0;it<q;it++){const U=I[it];Rt(U[0]+k*u,U[1]+k*u,U[2]+k*u)}}n.addGroup(J,i.length/3-J,0)}function tt(){const J=i.length/3;let it=0;Mt(N,it),it+=N.length;for(let U=0,At=P.length;U<At;U++){const et=P[U];Mt(et,it),it+=et.length}n.addGroup(J,i.length/3-J,1)}function Mt(J,it){let U=J.length;for(;--U>=0;){const At=U;let et=U-1;et<0&&(et=J.length-1);for(let vt=0,at=u+m*2;vt<at;vt++){const Lt=k*vt,_t=k*(vt+1),L=it+At+Lt,A=it+et+Lt,V=it+et+_t,$=it+At+_t;Ut(L,A,V,$)}}}function rt(J,it,U){c.push(J),c.push(it),c.push(U)}function Rt(J,it,U){Pt(J),Pt(it),Pt(U);const At=i.length/3,et=y.generateTopUV(n,i,At-3,At-2,At-1);qt(et[0]),qt(et[1]),qt(et[2])}function Ut(J,it,U,At){Pt(J),Pt(it),Pt(At),Pt(it),Pt(U),Pt(At);const et=i.length/3,vt=y.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);qt(vt[0]),qt(vt[1]),qt(vt[3]),qt(vt[1]),qt(vt[2]),qt(vt[3])}function Pt(J){i.push(c[J*3+0]),i.push(c[J*3+1]),i.push(c[J*3+2])}function qt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Dc[i.type]().fromJSON(i)),new hl(n,t.options)}}const vx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new Y(r,o),new Y(a,c),new Y(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Y(o,1-c),new Y(l,1-h),new Y(d,1-g),new Y(x,1-p)]:[new Y(a,1-c),new Y(u,1-h),new Y(f,1-g),new Y(m,1-p)]}};function yx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class dl extends ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/i,f=new E,g=new Y;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const y=p+m,v=y,_=y+n+1,b=y+n+2,T=y+1;a.push(v,_,T),a.push(_,b,T)}}this.setIndex(a),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fl extends ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new E,d=new E,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const T=b/e;h.x=-t*Math.cos(i+T*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+T*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-v),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=u[p][y+1],_=u[p][y],b=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&f.push(v,_,T),(p!==n-1||c<Math.PI)&&f.push(_,b,T)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _d extends Ii{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _a extends ze{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class xd extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xa=new Wt,Bu=new E,Ou=new E;class Sx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mx extends Sx{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nc extends xd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vd extends xd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const zu=new Wt;class yd{constructor(t,e,n=0,i=1/0){this.ray=new Es(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(t,e=!0,n=[]){return Fc(t,this,n,e),n.sort(ku),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Fc(t[i],this,n,e);return n.sort(ku),n}}function ku(s,t){return s.distance-t.distance}function Fc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],t,e,!0)}}class Ex{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vu=new E,Fr=new E;class nn{constructor(t=new E,e=new E){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vu.subVectors(t,this.start),Fr.subVectors(this.end,this.start);const n=Fr.dot(Fr);let r=Fr.dot(Vu)/n;return e&&(r=ye(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tr);class bx{constructor(t=400,e=10,n=5){pt(this,"group");pt(this,"minorGrid");pt(this,"majorGrid");pt(this,"axisLines");pt(this,"visible",!0);this.group=new Ci,this.group.renderOrder=0;const i=t/2,r=[],o=[];let a=0;for(let m=-i;m<=i;m+=e){if(Math.abs(m)<.001){a++;continue}const p=a%n===0?o:r;p.push(new E(m,-i,0)),p.push(new E(m,i,0)),a++}a=0;for(let m=-i;m<=i;m+=e){if(Math.abs(m)<.001){a++;continue}const p=a%n===0?o:r;p.push(new E(-i,m,0)),p.push(new E(i,m,0)),a++}const c=new ee().setFromPoints(r),l=new ze({color:2897216,transparent:!0,opacity:.7});this.minorGrid=new oi(c,l),this.group.add(this.minorGrid);const u=new ee().setFromPoints(o),h=new ze({color:3884886,transparent:!0,opacity:.9});this.majorGrid=new oi(u,h),this.group.add(this.majorGrid);const d=[new E(-i,0,0),new E(i,0,0),new E(0,-i,0),new E(0,i,0)],f=[.89,.22,.21,.89,.22,.21,0,.9,.46,0,.9,.46],g=new ee().setFromPoints(d);g.setAttribute("color",new he(f,3));const x=new ze({vertexColors:!0,linewidth:2});this.axisLines=new oi(g,x),this.group.add(this.axisLines)}getGroup(){return this.group}toggleVisibility(t){this.visible=t!==void 0?t:!this.visible,this.group.visible=this.visible}}class wx{constructor(t,e,n){pt(this,"domElement");pt(this,"camera");pt(this,"target",new E(0,0,0));pt(this,"isPanning",!1);pt(this,"isOrbiting",!1);pt(this,"previousMousePosition",{x:0,y:0});pt(this,"callbacks");pt(this,"spherical",new Ex(120,Math.PI/4,Math.PI/4));this.domElement=t,this.camera=e,this.callbacks=n,this.setView("top"),this.setupEvents()}setupEvents(){this.domElement.addEventListener("pointerdown",this.onPointerDown.bind(this)),window.addEventListener("pointermove",this.onPointerMove.bind(this)),window.addEventListener("pointerup",this.onPointerUp.bind(this)),this.domElement.addEventListener("wheel",this.onWheel.bind(this),{passive:!1}),this.domElement.addEventListener("dblclick",t=>{(t.button===1||t.button===0)&&this.zoomExtents()})}onPointerDown(t){this.previousMousePosition={x:t.clientX,y:t.clientY},t.button===1&&(t.shiftKey?this.isOrbiting=!0:this.isPanning=!0,t.preventDefault())}onPointerMove(t){if(!this.isPanning&&!this.isOrbiting)return;const e=t.clientX-this.previousMousePosition.x,n=t.clientY-this.previousMousePosition.y;this.isPanning?this.pan(e,n):this.isOrbiting&&this.orbit(e,n),this.previousMousePosition={x:t.clientX,y:t.clientY}}onPointerUp(t){t.button===1&&(this.isPanning=!1,this.isOrbiting=!1)}onWheel(t){t.preventDefault();const e=t.deltaY<0?.85:1.15;this.zoom(e)}pan(t,e){const i=this.camera.position.distanceTo(this.target)*.0018,r=new E(1,0,0).applyQuaternion(this.camera.quaternion),o=new E(0,1,0).applyQuaternion(this.camera.quaternion),a=r.multiplyScalar(-t*i).add(o.multiplyScalar(e*i));this.camera.position.add(a),this.target.add(a),this.notifyChange()}orbit(t,e){const i=this.camera.position.clone().sub(this.target);this.spherical.setFromVector3(i),this.spherical.theta-=t*.006,this.spherical.phi=Math.max(.01,Math.min(Math.PI-.01,this.spherical.phi-e*.006)),i.setFromSpherical(this.spherical),this.camera.position.copy(this.target).add(i),this.camera.lookAt(this.target),this.notifyChange()}zoom(t){const e=this.camera.position.clone().sub(this.target),n=Math.max(2,Math.min(5e3,e.length()*t));e.setLength(n),this.camera.position.copy(this.target).add(e),this.notifyChange()}zoomExtents(t=new Ne(new E(-60,-60,0),new E(60,60,0))){const e=new E;t.getCenter(e);const n=new E;t.getSize(n);const i=Math.max(n.x,n.y,n.z,50);this.target.copy(e);const r=i*1.5,o=this.camera.position.clone().sub(this.target).normalize();o.lengthSq()<.001&&o.set(0,0,1),this.camera.position.copy(this.target).add(o.multiplyScalar(r)),this.camera.lookAt(this.target),this.notifyChange()}setView(t){const e=Math.max(80,this.camera.position.distanceTo(this.target));switch(t){case"top":this.camera.position.set(this.target.x,this.target.y,this.target.z+e),this.camera.up.set(0,1,0);break;case"bottom":this.camera.position.set(this.target.x,this.target.y,this.target.z-e),this.camera.up.set(0,1,0);break;case"front":this.camera.position.set(this.target.x,this.target.y-e,this.target.z),this.camera.up.set(0,0,1);break;case"back":this.camera.position.set(this.target.x,this.target.y+e,this.target.z),this.camera.up.set(0,0,1);break;case"left":this.camera.position.set(this.target.x-e,this.target.y,this.target.z),this.camera.up.set(0,0,1);break;case"right":this.camera.position.set(this.target.x+e,this.target.y,this.target.z),this.camera.up.set(0,0,1);break;case"sw_iso":this.camera.position.set(this.target.x-e*.7,this.target.y-e*.7,this.target.z+e*.7),this.camera.up.set(0,0,1);break;case"se_iso":this.camera.position.set(this.target.x+e*.7,this.target.y-e*.7,this.target.z+e*.7),this.camera.up.set(0,0,1);break;case"ne_iso":this.camera.position.set(this.target.x+e*.7,this.target.y+e*.7,this.target.z+e*.7),this.camera.up.set(0,0,1);break;case"nw_iso":this.camera.position.set(this.target.x-e*.7,this.target.y+e*.7,this.target.z+e*.7),this.camera.up.set(0,0,1);break}this.camera.lookAt(this.target),this.notifyChange()}notifyChange(){this.callbacks.onCameraChange&&this.callbacks.onCameraChange(this.camera.quaternion)}}class Tx{constructor(){pt(this,"snapDistance",15);pt(this,"enabled",!0);pt(this,"gridSnapEnabled",!1);pt(this,"gridSize",10);pt(this,"orthoEnabled",!1);pt(this,"activeSnap",null)}findSnap(t,e,n,i,r,o=null){if(!this.enabled)return this.orthoEnabled&&o?{point:this.applyOrtho(o,t),type:"nearest",label:"Ortho"}:null;const a=this.worldToScreen(t,e,n,i);let c=null,l=this.snapDistance;const u=(h,d,f,g)=>{const x=this.worldToScreen(h,e,n,i),m=a.distanceTo(x);m<l&&(l=m,c={point:h.clone(),type:d,label:f,entityId:g})};for(const h of r)if(h.type==="line"&&h.data.p1&&h.data.p2){const d=h.data.p1,f=h.data.p2;u(d,"endpoint","Endpoint",h.id),u(f,"endpoint","Endpoint",h.id);const g=new E().addVectors(d,f).multiplyScalar(.5);u(g,"midpoint","Midpoint",h.id)}else if(h.type==="circle"&&h.data.center){const d=h.data.center,f=h.data.radius;u(d,"center","Center",h.id),u(new E(d.x+f,d.y,d.z),"quadrant","Quadrant",h.id),u(new E(d.x-f,d.y,d.z),"quadrant","Quadrant",h.id),u(new E(d.x,d.y+f,d.z),"quadrant","Quadrant",h.id),u(new E(d.x,d.y-f,d.z),"quadrant","Quadrant",h.id)}else if(h.type==="rectangle"&&h.data.p1&&h.data.p2){const d=h.data.p1,f=h.data.p2,g=d,x=new E(f.x,d.y,d.z),m=f,p=new E(d.x,f.y,d.z);u(g,"endpoint","Endpoint",h.id),u(x,"endpoint","Endpoint",h.id),u(m,"endpoint","Endpoint",h.id),u(p,"endpoint","Endpoint",h.id),u(new E().addVectors(g,x).multiplyScalar(.5),"midpoint","Midpoint",h.id),u(new E().addVectors(x,m).multiplyScalar(.5),"midpoint","Midpoint",h.id),u(new E().addVectors(m,p).multiplyScalar(.5),"midpoint","Midpoint",h.id),u(new E().addVectors(p,g).multiplyScalar(.5),"midpoint","Midpoint",h.id)}else if(h.type==="polyline"&&h.data.points){const d=h.data.points;for(let f=0;f<d.length;f++)if(u(d[f],"endpoint","Endpoint",h.id),f<d.length-1){const g=new E().addVectors(d[f],d[f+1]).multiplyScalar(.5);u(g,"midpoint","Midpoint",h.id)}}if(c)return this.activeSnap=c,c;if(this.orthoEnabled&&o){const h=this.applyOrtho(o,t);return this.activeSnap={point:h,type:"nearest",label:"Ortho"},this.activeSnap}if(this.gridSnapEnabled){const h=new E(Math.round(t.x/this.gridSize)*this.gridSize,Math.round(t.y/this.gridSize)*this.gridSize,0);return this.activeSnap={point:h,type:"grid",label:"Grid"},this.activeSnap}return this.activeSnap=null,null}applyOrtho(t,e){const n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return n>=i?new E(e.x,t.y,t.z):new E(t.x,e.y,t.z)}worldToScreen(t,e,n,i){const r=t.clone().project(e);return new Y((r.x*.5+.5)*n,(-r.y*.5+.5)*i)}}class Ax{constructor(t){pt(this,"canvas");pt(this,"scene");pt(this,"camera");pt(this,"renderer");pt(this,"grid");pt(this,"cameraController");pt(this,"snapManager");pt(this,"layers",[{id:"0",name:"0",color:"#ffffff",visible:!0,locked:!1,linetype:"Continuous",lineweight:.25},{id:"center",name:"Centerlines",color:"#e53935",visible:!0,locked:!1,linetype:"Center",lineweight:.18},{id:"dims",name:"Dimensions",color:"#4fc3f7",visible:!0,locked:!1,linetype:"Continuous",lineweight:.18},{id:"hidden",name:"Hidden",color:"#ffb300",visible:!0,locked:!1,linetype:"Hidden",lineweight:.18},{id:"solids",name:"3D Solids",color:"#0084ff",visible:!0,locked:!1,linetype:"Continuous",lineweight:.35}]);pt(this,"currentLayerId","0");pt(this,"entities",[]);pt(this,"selectedEntities",[]);pt(this,"previewMesh",null);pt(this,"planeZ0",new hn(new E(0,0,1),0));pt(this,"raycaster",new yd);pt(this,"currentCursorWorld",new E);pt(this,"activeSnap",null);pt(this,"visualStyle","2d_wireframe");pt(this,"undoStack",[]);pt(this,"redoStack",[]);pt(this,"onCoordsUpdate");pt(this,"onSnapUpdate");pt(this,"onCameraChange");this.canvas=t,this.scene=new rd,this.scene.background=new Ot(2172976);const e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight;this.renderer=new sd({canvas:t,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.camera=new tn(45,e/n,.5,1e4),this.camera.position.set(0,0,180),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0);const i=new vd(16777215,.7);this.scene.add(i);const r=new Nc(16777215,.8);r.position.set(100,150,200),this.scene.add(r);const o=new Nc(16777215,.4);o.position.set(-100,-100,-50),this.scene.add(o),this.grid=new bx(1e3,10,5),this.scene.add(this.grid.getGroup()),this.snapManager=new Tx,this.cameraController=new wx(t,this.camera,{onCameraChange:a=>{this.onCameraChange&&this.onCameraChange(a)}}),this.setupMouseEvents(),window.addEventListener("resize",this.onWindowResize.bind(this)),this.animate()}getCurrentLayer(){return this.layers.find(t=>t.id===this.currentLayerId)||this.layers[0]}setupMouseEvents(){this.canvas.addEventListener("pointermove",t=>{const e=this.canvas.getBoundingClientRect(),n=(t.clientX-e.left)/e.width*2-1,i=-((t.clientY-e.top)/e.height)*2+1;this.raycaster.setFromCamera(new Y(n,i),this.camera);const r=new E;if(this.raycaster.ray.intersectPlane(this.planeZ0,r),r){const o=this.snapManager.findSnap(r,this.camera,e.width,e.height,this.entities);if(this.activeSnap=o,this.currentCursorWorld.copy(o?o.point:r),this.onCoordsUpdate&&this.onCoordsUpdate(this.currentCursorWorld.x,this.currentCursorWorld.y,this.currentCursorWorld.z),this.onSnapUpdate){const a=this.worldToScreen(this.currentCursorWorld,e.width,e.height);this.onSnapUpdate(o,a)}}})}worldToScreen(t,e,n){const i=t.clone().project(this.camera);return{x:(i.x*.5+.5)*e,y:(-i.y*.5+.5)*n}}screenToWorld(t,e){const n=this.canvas.getBoundingClientRect(),i=(t-n.left)/n.width*2-1,r=-((e-n.top)/n.height)*2+1;this.raycaster.setFromCamera(new Y(i,r),this.camera);const o=new E;return this.raycaster.ray.intersectPlane(this.planeZ0,o),o||new E}addEntity(t,e=!0){e&&this.saveUndoState(),this.entities.push(t),this.scene.add(t.object3D)}removeEntity(t){const e=this.entities.findIndex(n=>n.id===t);if(e!==-1){this.saveUndoState();const n=this.entities[e];this.scene.remove(n.object3D),this.entities.splice(e,1)}}clearEntities(){this.saveUndoState();for(const t of this.entities)this.scene.remove(t.object3D);this.entities=[]}saveUndoState(){this.undoStack.push([...this.entities]),this.redoStack=[]}undo(){if(this.undoStack.length===0)return;this.redoStack.push([...this.entities]);const t=this.undoStack.pop();for(const e of this.entities)this.scene.remove(e.object3D);this.entities=t;for(const e of this.entities)this.scene.add(e.object3D)}redo(){if(this.redoStack.length===0)return;this.undoStack.push([...this.entities]);const t=this.redoStack.pop();for(const e of this.entities)this.scene.remove(e.object3D);this.entities=t;for(const e of this.entities)this.scene.add(e.object3D)}setPreviewLine(t,e){this.clearPreview();const n=new ee().setFromPoints([t,e]),i=new _a({color:34047,dashSize:3,gapSize:2,linewidth:1.5}),r=new Fn(n,i);r.computeLineDistances(),this.previewMesh=r,this.scene.add(r)}setPreviewCircle(t,e){this.clearPreview();const n=[];for(let a=0;a<=64;a++){const c=a/64*Math.PI*2;n.push(new E(t.x+Math.cos(c)*e,t.y+Math.sin(c)*e,0))}const i=new ee().setFromPoints(n),r=new _a({color:34047,dashSize:3,gapSize:2}),o=new Fn(i,r);o.computeLineDistances(),this.previewMesh=o,this.scene.add(o)}setPreviewRectangle(t,e){this.clearPreview();const n=Math.min(t.x,e.x),i=Math.max(t.x,e.x),r=Math.min(t.y,e.y),o=Math.max(t.y,e.y),a=[new E(n,r,0),new E(i,r,0),new E(i,o,0),new E(n,o,0),new E(n,r,0)],c=new ee().setFromPoints(a),l=new _a({color:34047,dashSize:3,gapSize:2}),u=new Fn(c,l);u.computeLineDistances(),this.previewMesh=u,this.scene.add(u)}clearPreview(){this.previewMesh&&(this.scene.remove(this.previewMesh),this.previewMesh=null)}setVisualStyle(t){this.visualStyle=t;for(const e of this.entities)if(e.type.startsWith("solid")||e.type==="solid_csg"){const n=e.object3D;if(n&&n.material){const i=n.material;switch(t){case"2d_wireframe":i.wireframe=!0,i.transparent=!1,i.opacity=1;break;case"shaded_edges":i.wireframe=!1,i.transparent=!1,i.opacity=1,e.edges3D&&(e.edges3D.visible=!0);break;case"conceptual":i.wireframe=!1,i.roughness=.8,i.metalness=0,i.transparent=!1,i.opacity=1;break;case"realistic":i.wireframe=!1,i.roughness=.2,i.metalness=.3,i.transparent=!1,i.opacity=1;break;case"xray":i.wireframe=!1,i.transparent=!0,i.opacity=.45,e.edges3D&&(e.edges3D.visible=!0);break}}}}onWindowResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}animate(){requestAnimationFrame(this.animate.bind(this)),this.renderer.render(this.scene,this.camera)}}class Cx{constructor(t,e){pt(this,"container");pt(this,"scene");pt(this,"camera");pt(this,"renderer");pt(this,"cubeMesh");pt(this,"compassGroup");pt(this,"raycaster",new yd);pt(this,"mouse",new Y);pt(this,"callbacks");this.container=t,this.callbacks=e;const n=t.clientWidth||120,i=t.clientHeight||120;this.renderer=new sd({alpha:!0,antialias:!0}),this.renderer.setSize(n,i),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.scene=new rd;const r=n/i,o=1.8;this.camera=new sl(-o*r,o*r,o,-o,.1,100),this.camera.position.set(2,2,2),this.camera.lookAt(0,0,0);const a=new vd(16777215,.85);this.scene.add(a);const c=new Nc(16777215,.5);c.position.set(3,4,2),this.scene.add(c);const l=[this.createFaceMaterial("RIGHT"),this.createFaceMaterial("LEFT"),this.createFaceMaterial("TOP"),this.createFaceMaterial("BOTTOM"),this.createFaceMaterial("FRONT"),this.createFaceMaterial("BACK")],u=new Ui(1.2,1.2,1.2);this.cubeMesh=new Ae(u,l),this.scene.add(this.cubeMesh);const h=new dd(u),d=new ze({color:4740197,linewidth:2});this.cubeMesh.add(new oi(h,d)),this.compassGroup=this.createCompass(),this.scene.add(this.compassGroup),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown.bind(this)),this.render()}createFaceMaterial(t){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.fillStyle="#2f3844",n.fillRect(0,0,128,128),n.strokeStyle="#4b5768",n.lineWidth=4,n.strokeRect(4,4,120,120),n.fillStyle="#e1e7ec",n.font="bold 24px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,64,64);const i=new Lc(e);return new _d({map:i,roughness:.5,metalness:.1})}createCompass(){const t=new Ci;t.position.y=-.7;const e=new dl(.85,1.05,32);e.rotateX(-Math.PI/2);const n=new nl({color:2239027,side:Ye}),i=new Ae(e,n);return t.add(i),[{text:"N",x:0,z:-.95},{text:"S",x:0,z:.95},{text:"E",x:.95,z:0},{text:"W",x:-.95,z:0}].forEach(o=>{const a=this.createCompassText(o.text);a.position.set(o.x,.05,o.z),a.scale.set(.4,.4,1),t.add(a)}),t}createCompassText(t){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");n.fillStyle="#0084ff",n.font="bold 36px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,32,32);const i=new Lc(e),r=new ol({map:i,transparent:!0});return new ad(r)}onPointerDown(t){var i;const e=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObject(this.cubeMesh);if(n.length>0){const r=(i=n[0].face)==null?void 0:i.normal;if(r){const o=r.clone().applyQuaternion(this.cubeMesh.quaternion).round();o.y>.5?this.callbacks.onViewChange("top"):o.y<-.5?this.callbacks.onViewChange("bottom"):o.z>.5?this.callbacks.onViewChange("front"):o.z<-.5?this.callbacks.onViewChange("back"):o.x>.5?this.callbacks.onViewChange("right"):o.x<-.5&&this.callbacks.onViewChange("left")}}}updateOrientation(t){this.camera.position.set(0,0,3.5).applyQuaternion(t),this.camera.quaternion.copy(t),this.render()}render(){this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose()}}class Rx{constructor(t){pt(this,"container");pt(this,"canvas");pt(this,"ctx");this.container=t,this.canvas=document.createElement("canvas"),this.canvas.width=96,this.canvas.height=96,this.canvas.style.width="48px",this.canvas.style.height="48px",this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.draw(new Ms)}draw(t){const e=this.ctx,n=96;e.clearRect(0,0,n,n);const i=24,r=n-24,o=42,a=t.clone().invert(),c=new E(1,0,0).applyQuaternion(a),l=new E(0,1,0).applyQuaternion(a),u=new E(0,0,1).applyQuaternion(a),h=(d,f,g)=>{const x=i+d.x*o,m=r-d.y*o;e.beginPath(),e.moveTo(i,r),e.lineTo(x,m),e.strokeStyle=f,e.lineWidth=2.5,e.stroke(),e.fillStyle=f,e.font="bold 12px Consolas, monospace",e.fillText(g,x+(d.x>=0?4:-10),m+(d.y>=0?-4:10))};h(u,"#0084ff","Z"),h(c,"#e53935","X"),h(l,"#00e676","Y"),e.fillStyle="#1a1d24",e.fillRect(i-5,r-5,10,10),e.strokeStyle="#ffffff",e.lineWidth=1,e.strokeRect(i-5,r-5,10,10),e.fillStyle="#ffffff",e.font="8px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("W",i,r)}}const Ht={open:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',plot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',line:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="4" y1="20" x2="20" y2="4"/><rect x="2" y="18" width="4" height="4" fill="#0084ff"/><rect x="18" y="2" width="4" height="4" fill="#0084ff"/></svg>',polyline:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polyline points="3 19 9 7 15 15 21 5"/><circle cx="3" cy="19" r="2" fill="#0084ff"/><circle cx="9" cy="7" r="2" fill="#0084ff"/><circle cx="15" cy="15" r="2" fill="#0084ff"/><circle cx="21" cy="5" r="2" fill="#0084ff"/></svg>',circle:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1.5" fill="#e53935"/><line x1="12" y1="12" x2="21" y2="12" stroke="#e53935" stroke-dasharray="2,2"/></svg>',arc:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M4 18 A 12 12 0 0 1 20 18"/><circle cx="4" cy="18" r="2" fill="#0084ff"/><circle cx="12" cy="6" r="2" fill="#0084ff"/><circle cx="20" cy="18" r="2" fill="#0084ff"/></svg>',rectangle:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="4" y="5" width="16" height="14"/><circle cx="4" cy="5" r="2" fill="#0084ff"/><circle cx="20" cy="19" r="2" fill="#0084ff"/></svg>',polygon:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polygon points="12 3 21 9 18 19 6 19 3 9"/></svg>',hatch:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="3" y="3" width="18" height="18"/><line x1="3" y1="9" x2="9" y2="3"/><line x1="3" y1="15" x2="15" y2="3"/><line x1="3" y1="21" x2="21" y2="3"/><line x1="9" y1="21" x2="21" y2="9"/><line x1="15" y1="21" x2="21" y2="15"/></svg>',move:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',copy:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="1"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',rotate:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>',trim:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',fillet:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M4 20 L 4 14 A 8 8 0 0 1 12 6 L 20 6"/></svg>',chamfer:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M4 20 L 4 12 L 12 4 L 20 4"/></svg>',erase:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>',offset:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9" stroke-dasharray="3,3"/></svg>',mirror:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22" stroke="#0084ff" stroke-dasharray="2,2"/><polygon points="8 6 3 18 8 18" fill="rgba(255,255,255,0.2)"/><polygon points="16 6 21 18 16 18" fill="rgba(255,255,255,0.4)"/></svg>',dimension:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="2" y2="17"/><line x1="22" y1="7" x2="22" y2="17"/><polygon points="5 10 2 12 5 14" fill="#e1e7ec"/><polygon points="19 10 22 12 19 14" fill="#e1e7ec"/><rect x="9" y="8" width="6" height="8" fill="#212830"/><text x="10" y="14" font-size="6" fill="#0084ff" font-family="sans-serif">50</text></svg>',text:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="9" y1="20" x2="15" y2="20"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',measure:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',box:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><path d="M12 2 L21 7 L12 12 L3 7 Z"/><path d="M3 7 L3 17 L12 22 L12 12"/><path d="M21 7 L21 17 L12 22"/></svg>',cylinder:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6 L4 18 A 8 3 0 0 0 20 18 L20 6"/><path d="M4 18 A 8 3 0 0 1 20 18" stroke-dasharray="2,2"/></svg>',cone:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><ellipse cx="12" cy="19" rx="8" ry="3"/><path d="M4 19 L12 3 L20 19"/></svg>',sphere:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3"/></svg>',extrude:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><rect x="4" y="14" width="12" height="6"/><polyline points="16 14 20 9 20 15 16 20"/><polyline points="4 14 8 9 20 9"/><line x1="8" y1="9" x2="8" y2="15"/></svg>',revolve:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><line x1="12" y1="2" x2="12" y2="22" stroke="#0084ff" stroke-dasharray="2,2"/><path d="M12 7 C 18 7, 21 10, 21 12 C 21 14, 18 17, 12 17"/><polygon points="12 15 9 17 12 19" fill="#e1e7ec"/></svg>',union:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="9" cy="12" r="6" fill="rgba(0,132,255,0.3)"/><circle cx="15" cy="12" r="6" fill="rgba(0,132,255,0.3)"/><path d="M9 6 A 6 6 0 0 0 15 6 A 6 6 0 0 1 15 18 A 6 6 0 0 1 9 18 A 6 6 0 0 1 9 6" stroke="#0084ff" stroke-width="2"/></svg>',subtract:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="9" cy="12" r="6" fill="rgba(0,132,255,0.4)" stroke="#0084ff" stroke-width="2"/><circle cx="15" cy="12" r="6" stroke="#e53935" stroke-dasharray="2,2"/></svg>',intersect:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="1.8"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/><path d="M12 7.2 A 6 6 0 0 1 12 16.8 A 6 6 0 0 1 12 7.2" fill="#0084ff"/></svg>',orbit:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="3,3"/><ellipse cx="12" cy="12" rx="9" ry="4"/><circle cx="12" cy="12" r="2" fill="#0084ff"/></svg>',pan:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',zoomExtents:'<svg viewBox="0 0 24 24" fill="none" stroke="#e1e7ec" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16" y2="16"/><polyline points="8 11 11 8 14 11"/><polyline points="8 11 11 14 14 11"/></svg>',lab:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>'};class Px{constructor(t,e){pt(this,"container");pt(this,"callbacks");pt(this,"activeTab","home");this.container=t,this.callbacks=e,this.render()}setTab(t){this.activeTab=t,this.render()}render(){this.container.innerHTML=`
      <div class="acad-ribbon-tabs">
        <div class="acad-ribbon-tab ${this.activeTab==="home"?"active":""}" data-tab="home">Home</div>
        <div class="acad-ribbon-tab ${this.activeTab==="solid"?"active":""}" data-tab="solid">Solid (3D Modeling)</div>
        <div class="acad-ribbon-tab ${this.activeTab==="annotate"?"active":""}" data-tab="annotate">Annotate</div>
        <div class="acad-ribbon-tab ${this.activeTab==="view"?"active":""}" data-tab="view">View</div>
        <div class="acad-ribbon-tab ${this.activeTab==="output"?"active":""}" data-tab="output">Output</div>
        <div class="acad-ribbon-tab ${this.activeTab==="lab"?"active":""}" data-tab="lab" style="color: #70d8ff; font-weight: 600;">
          🎓 Lab Exercises (Diploma/B.Tech)
        </div>
      </div>
      <div class="acad-ribbon-content">
        ${this.renderActiveTabContent()}
      </div>
    `,this.bindEvents()}renderActiveTabContent(){switch(this.activeTab){case"home":return`
          <!-- Draw Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="LINE" title="LINE (L): Creates straight line segments">
                ${Ht.line}
                <span>Line</span>
              </button>
              <button class="acad-big-btn" data-tool="PLINE" title="PLINE (PL): Creates 2D polyline">
                ${Ht.polyline}
                <span>Polyline</span>
              </button>
              <button class="acad-big-btn" data-tool="CIRCLE" title="CIRCLE (C): Creates circle with center & radius">
                ${Ht.circle}
                <span>Circle</span>
              </button>
              <button class="acad-big-btn" data-tool="ARC" title="ARC (A): Creates 3-point arc">
                ${Ht.arc}
                <span>Arc</span>
              </button>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="RECTANGLE" title="RECTANGLE (REC): Creates rectangular polyline">
                  ${Ht.rectangle} <span>Rectangle</span>
                </button>
                <button class="acad-small-btn" data-tool="POLYGON" title="POLYGON (POL): Creates regular polygon">
                  ${Ht.polygon} <span>Polygon</span>
                </button>
                <button class="acad-small-btn" data-tool="HATCH" title="HATCH (H): Fills enclosed region with hatching">
                  ${Ht.hatch} <span>Hatch</span>
                </button>
              </div>
            </div>
            <div class="acad-panel-title">Draw</div>
          </div>

          <!-- Modify Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="MOVE" title="MOVE (M)">${Ht.move} <span>Move</span></button>
                <button class="acad-small-btn" data-tool="COPY" title="COPY (CO)">${Ht.copy} <span>Copy</span></button>
                <button class="acad-small-btn" data-tool="ROTATE" title="ROTATE (RO)">${Ht.rotate} <span>Rotate</span></button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="TRIM" title="TRIM (TR)">${Ht.trim} <span>Trim</span></button>
                <button class="acad-small-btn" data-tool="FILLET" title="FILLET (F)">${Ht.fillet} <span>Fillet</span></button>
                <button class="acad-small-btn" data-tool="CHAMFER" title="CHAMFER (CHA)">${Ht.chamfer} <span>Chamfer</span></button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-tool="OFFSET" title="OFFSET (O)">${Ht.offset} <span>Offset</span></button>
                <button class="acad-small-btn" data-tool="MIRROR" title="MIRROR (MI)">${Ht.mirror} <span>Mirror</span></button>
                <button class="acad-small-btn" data-tool="ERASE" title="ERASE (E)">${Ht.erase} <span>Erase</span></button>
              </div>
            </div>
            <div class="acad-panel-title">Modify</div>
          </div>

          <!-- Annotation Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="DIMLINEAR" title="DIMLINEAR (DIM): Creates linear engineering dimension">
                ${Ht.dimension}
                <span>Dimension</span>
              </button>
              <button class="acad-big-btn" data-tool="TEXT" title="TEXT (T): Creates annotation text">
                ${Ht.text}
                <span>Text</span>
              </button>
            </div>
            <div class="acad-panel-title">Annotation</div>
          </div>

          <!-- Layers Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-layer-panel-control">
                <button class="acad-small-btn" id="btn-layer-props" title="Layer Properties Manager (LA)">
                  ${Ht.layers} <span>Layer Properties</span>
                </button>
                <div class="acad-layer-select-row">
                  <select class="acad-layer-select" id="ribbon-layer-select">
                    <option value="0">0 (White / Continuous)</option>
                    <option value="center">Centerlines (Red)</option>
                    <option value="dims">Dimensions (Blue)</option>
                    <option value="hidden">Hidden (Yellow / Dashed)</option>
                    <option value="solids">3D Solids (Cyan)</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="acad-panel-title">Layers</div>
          </div>

          <!-- Utilities Panel -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="DIST" title="DIST (DI): Measure distance">
                ${Ht.measure}
                <span>Measure</span>
              </button>
            </div>
            <div class="acad-panel-title">Utilities</div>
          </div>
        `;case"solid":return`
          <!-- 3D Primitives -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="BOX" title="BOX: Creates 3D solid box">
                ${Ht.box}
                <span>Box</span>
              </button>
              <button class="acad-big-btn" data-tool="CYLINDER" title="CYLINDER (CYL): Creates 3D solid cylinder">
                ${Ht.cylinder}
                <span>Cylinder</span>
              </button>
              <button class="acad-big-btn" data-tool="SPHERE" title="SPHERE (SPH): Creates 3D solid sphere">
                ${Ht.sphere}
                <span>Sphere</span>
              </button>
              <button class="acad-big-btn" data-tool="CONE" title="CONE: Creates 3D solid cone">
                ${Ht.cone}
                <span>Cone</span>
              </button>
            </div>
            <div class="acad-panel-title">Primitives</div>
          </div>

          <!-- Solid Create -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="EXTRUDE" title="EXTRUDE (EXT): Extrudes 2D shape into 3D solid">
                ${Ht.extrude}
                <span>Extrude</span>
              </button>
              <button class="acad-big-btn" data-tool="REVOLVE" title="REVOLVE (REV): Revolves 2D profile around axis">
                ${Ht.revolve}
                <span>Revolve</span>
              </button>
            </div>
            <div class="acad-panel-title">Solid Modeling</div>
          </div>

          <!-- CSG Booleans -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="UNION" title="UNION (UNI): Combines solids into one">
                ${Ht.union}
                <span>Union</span>
              </button>
              <button class="acad-big-btn" data-tool="SUBTRACT" title="SUBTRACT (SU): Cuts hole or subtracts solid">
                ${Ht.subtract}
                <span>Subtract</span>
              </button>
              <button class="acad-big-btn" data-tool="INTERSECT" title="INTERSECT (IN): Keeps overlapping volume">
                ${Ht.intersect}
                <span>Intersect</span>
              </button>
            </div>
            <div class="acad-panel-title">Boolean (CSG)</div>
          </div>
        `;case"annotate":return`
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="DIMLINEAR">${Ht.dimension}<span>Linear Dim</span></button>
              <button class="acad-big-btn" data-tool="TEXT">${Ht.text}<span>Text</span></button>
              <button class="acad-big-btn" data-tool="DIST">${Ht.measure}<span>Distance</span></button>
            </div>
            <div class="acad-panel-title">Dimensions & Text</div>
          </div>
        `;case"view":return`
          <!-- Standard Views -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-view="top">Top (2D)</button>
                <button class="acad-small-btn" data-view="front">Front</button>
                <button class="acad-small-btn" data-view="right">Right</button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-view="sw_iso">SW Isometric</button>
                <button class="acad-small-btn" data-view="se_iso">SE Isometric</button>
                <button class="acad-small-btn" data-view="ne_iso">NE Isometric</button>
              </div>
            </div>
            <div class="acad-panel-title">Standard Views</div>
          </div>

          <!-- Visual Styles -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-style="2d_wireframe">2D Wireframe</button>
                <button class="acad-small-btn" data-style="shaded_edges">Shaded with Edges</button>
                <button class="acad-small-btn" data-style="conceptual">Conceptual</button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-style="realistic">Realistic</button>
                <button class="acad-small-btn" data-style="xray">X-Ray</button>
              </div>
            </div>
            <div class="acad-panel-title">Visual Styles</div>
          </div>

          <!-- Navigation -->
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="ZOOM_EXTENTS">${Ht.zoomExtents}<span>Zoom Extents</span></button>
              <button class="acad-big-btn" data-tool="ORBIT">${Ht.orbit}<span>3D Orbit</span></button>
              <button class="acad-big-btn" data-tool="PAN">${Ht.pan}<span>Pan</span></button>
            </div>
            <div class="acad-panel-title">Navigate</div>
          </div>
        `;case"output":return`
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" data-tool="EXPORTDXF" title="Export AutoCAD DXF file">
                ${Ht.save}
                <span>Export DXF</span>
              </button>
              <button class="acad-big-btn" data-tool="EXPORTSTL" title="Export 3D STL file for 3D Printing">
                ${Ht.box}
                <span>Export STL</span>
              </button>
              <button class="acad-big-btn" data-tool="PLOT" title="Plot / Print Drawing Sheet to PDF">
                ${Ht.plot}
                <span>Plot / PDF</span>
              </button>
              <button class="acad-big-btn" data-tool="IMPORTDXF" title="Open / Import DXF file">
                ${Ht.open}
                <span>Import DXF</span>
              </button>
            </div>
            <div class="acad-panel-title">Export / Import</div>
          </div>
        `;case"lab":return`
          <div class="acad-panel">
            <div class="acad-panel-tools">
              <button class="acad-big-btn" id="btn-open-lab-guide" style="border-color: #0084ff; background: rgba(0,132,255,0.15);">
                ${Ht.lab}
                <span>Lab Manual</span>
              </button>
            </div>
            <div class="acad-panel-title">Syllabus Guide</div>
          </div>

          <div class="acad-panel">
            <div class="acad-panel-tools">
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-lab="lab-1">Lab 1: V-Block Orthographic</button>
                <button class="acad-small-btn" data-lab="lab-2">Lab 2: Shaft Support Bracket</button>
                <button class="acad-small-btn" data-lab="lab-3">Lab 3: Flanged Pipe Hatching</button>
              </div>
              <div class="acad-btn-col">
                <button class="acad-small-btn" data-lab="lab-4">Lab 4: 3D Slotted Block (CSG)</button>
                <button class="acad-small-btn" data-lab="lab-5">Lab 5: 3D Stepped Pulley (Revolve)</button>
                <button class="acad-small-btn" data-lab="lab-6">Lab 6: Flanged Coupling Hub</button>
              </div>
            </div>
            <div class="acad-panel-title">Diploma / B.Tech Lab Problems</div>
          </div>
        `;default:return""}}bindEvents(){this.container.querySelectorAll(".acad-ribbon-tab").forEach(i=>{i.addEventListener("click",r=>{const o=r.currentTarget.dataset.tab;o&&this.setTab(o)})}),this.container.querySelectorAll("[data-tool]").forEach(i=>{i.addEventListener("click",r=>{const o=r.currentTarget.dataset.tool;o&&this.callbacks.onToolSelect(o)})}),this.container.querySelectorAll("[data-view]").forEach(i=>{i.addEventListener("click",r=>{const o=r.currentTarget.dataset.view;o&&this.callbacks.onViewSelect(o)})}),this.container.querySelectorAll("[data-style]").forEach(i=>{i.addEventListener("click",r=>{const o=r.currentTarget.dataset.style;o&&this.callbacks.onVisualStyleSelect(o)})}),this.container.querySelectorAll("[data-lab]").forEach(i=>{i.addEventListener("click",r=>{const o=r.currentTarget.dataset.lab;o&&this.callbacks.onExerciseSelect(o)})});const t=this.container.querySelector("#btn-open-lab-guide");t&&t.addEventListener("click",()=>this.callbacks.onOpenLabGuide());const e=this.container.querySelector("#btn-layer-props");e&&e.addEventListener("click",()=>this.callbacks.onLayerProperties());const n=this.container.querySelector("#ribbon-layer-select");n&&n.addEventListener("change",()=>this.callbacks.onLayerSelect(n.value))}}class ho{static findCommand(t){const e=t.trim().toUpperCase();if(!e)return null;for(const n of this.COMMAND_LIST)if(n.name===e||n.aliases.includes(e))return n;return null}static getSuggestions(t){const e=t.trim().toUpperCase();return e?this.COMMAND_LIST.filter(n=>n.name.startsWith(e)||n.aliases.some(i=>i.startsWith(e))).slice(0,6):[]}static parseCoordinate(t,e){const n=t.trim();if(!n)return null;if(n.startsWith("@")&&n.includes("<")){const i=n.substring(1).split("<"),r=parseFloat(i[0]),o=parseFloat(i[1]);if(isNaN(r)||isNaN(o))return null;const a=o*Math.PI/180,c=(e==null?void 0:e.x)||0,l=(e==null?void 0:e.y)||0,u=(e==null?void 0:e.z)||0;return new E(c+Math.cos(a)*r,l+Math.sin(a)*r,u)}if(n.startsWith("@")&&n.includes(",")){const i=n.substring(1).split(","),r=parseFloat(i[0]),o=parseFloat(i[1]),a=i[2]?parseFloat(i[2]):0;if(isNaN(r)||isNaN(o))return null;const c=(e==null?void 0:e.x)||0,l=(e==null?void 0:e.y)||0,u=(e==null?void 0:e.z)||0;return new E(c+r,l+o,u+a)}if(n.includes(",")){const i=n.split(","),r=parseFloat(i[0]),o=parseFloat(i[1]),a=i[2]?parseFloat(i[2]):0;return isNaN(r)||isNaN(o)?null:new E(r,o,a)}return null}}pt(ho,"COMMAND_LIST",[{name:"LINE",aliases:["L"],description:"Creates straight line segments",category:"draw2d"},{name:"PLINE",aliases:["PL"],description:"Creates a 2D polyline",category:"draw2d"},{name:"CIRCLE",aliases:["C"],description:"Creates a circle with center and radius",category:"draw2d"},{name:"ARC",aliases:["A"],description:"Creates an arc using 3 points or center-angles",category:"draw2d"},{name:"RECTANGLE",aliases:["REC"],description:"Creates a rectangular polyline",category:"draw2d"},{name:"POLYGON",aliases:["POL"],description:"Creates an equilateral closed polyline",category:"draw2d"},{name:"ELLIPSE",aliases:["EL"],description:"Creates an ellipse",category:"draw2d"},{name:"HATCH",aliases:["H"],description:"Fills an enclosed area with cross-hatching",category:"draw2d"},{name:"MOVE",aliases:["M"],description:"Moves objects a specified distance and direction",category:"modify2d"},{name:"COPY",aliases:["CO","CP"],description:"Copies objects a specified distance and direction",category:"modify2d"},{name:"ROTATE",aliases:["RO"],description:"Rotates objects around a base point",category:"modify2d"},{name:"SCALE",aliases:["SC"],description:"Enlarges or reduces selected objects",category:"modify2d"},{name:"TRIM",aliases:["TR"],description:"Trims objects to meet edges of other objects",category:"modify2d"},{name:"EXTEND",aliases:["EX"],description:"Extends objects to meet edges of other objects",category:"modify2d"},{name:"FILLET",aliases:["F"],description:"Rounds and fillets edges of objects",category:"modify2d"},{name:"CHAMFER",aliases:["CHA"],description:"Bevels edges of objects",category:"modify2d"},{name:"OFFSET",aliases:["O"],description:"Creates concentric circles or parallel lines",category:"modify2d"},{name:"MIRROR",aliases:["MI"],description:"Creates a mirrored copy of selected objects",category:"modify2d"},{name:"ERASE",aliases:["E"],description:"Removes objects from drawing",category:"modify2d"},{name:"DIMLINEAR",aliases:["DIM","D","DLI"],description:"Creates a linear dimension",category:"annotation"},{name:"TEXT",aliases:["T","DT"],description:"Creates a single-line text object",category:"annotation"},{name:"BOX",aliases:["BOX"],description:"Creates a 3D solid box",category:"solid3d"},{name:"CYLINDER",aliases:["CYL"],description:"Creates a 3D solid cylinder",category:"solid3d"},{name:"SPHERE",aliases:["SPH"],description:"Creates a 3D solid sphere",category:"solid3d"},{name:"CONE",aliases:["CONE"],description:"Creates a 3D solid cone",category:"solid3d"},{name:"EXTRUDE",aliases:["EXT"],description:"Extrudes 2D closed entities into 3D solid",category:"solid3d"},{name:"REVOLVE",aliases:["REV"],description:"Revolves a 2D profile into a 3D solid",category:"solid3d"},{name:"UNION",aliases:["UNI"],description:"Combines selected 3D solids by union",category:"solid3d"},{name:"SUBTRACT",aliases:["SU"],description:"Subtracts selected 3D solid from base solid",category:"solid3d"},{name:"INTERSECT",aliases:["IN"],description:"Creates 3D solid from common intersection",category:"solid3d"},{name:"ZOOM",aliases:["Z"],description:"Increases or decreases drawing magnification",category:"view"},{name:"PAN",aliases:["P"],description:"Shifts the view without changing magnification",category:"view"},{name:"ORBIT",aliases:["3DO"],description:"Rotates the view in 3D space",category:"view"},{name:"LAYER",aliases:["LA"],description:"Manages layers and layer properties",category:"utility"},{name:"PROPERTIES",aliases:["PR","CH"],description:"Controls properties of existing objects",category:"utility"},{name:"DIST",aliases:["DI"],description:"Measures distance and angle between two points",category:"utility"},{name:"EXPORTDXF",aliases:["DXF"],description:"Exports drawing to AutoCAD DXF format",category:"utility"},{name:"EXPORTSTL",aliases:["STL"],description:"Exports 3D solid models to STL format",category:"utility"}]);class Yt{static createLine(t,e,n,i){const r=new ee().setFromPoints([e,n]),o=new ze({color:new Ot(i.color),linewidth:Math.max(1,Math.round(i.lineweight*4))}),a=new Fn(r,o);return a.userData={entityId:t,type:"line"},{id:t,type:"line",layerId:i.id,color:i.color,object3D:a,data:{p1:e.clone(),p2:n.clone()}}}static createPolyline(t,e,n,i){const r=[...e];n&&r.length>2&&r.push(r[0].clone());const o=new ee().setFromPoints(r),a=new ze({color:new Ot(i.color),linewidth:Math.max(1,Math.round(i.lineweight*4))}),c=new Fn(o,a);return c.userData={entityId:t,type:"polyline"},{id:t,type:"polyline",layerId:i.id,color:i.color,object3D:c,data:{points:e.map(l=>l.clone()),closed:n}}}static createCircle(t,e,n,i,r=64){const o=[];for(let u=0;u<=r;u++){const h=u/r*Math.PI*2;o.push(new E(e.x+Math.cos(h)*n,e.y+Math.sin(h)*n,e.z))}const a=new ee().setFromPoints(o),c=new ze({color:new Ot(i.color),linewidth:Math.max(1,Math.round(i.lineweight*4))}),l=new Fn(a,c);return l.userData={entityId:t,type:"circle"},{id:t,type:"circle",layerId:i.id,color:i.color,object3D:l,data:{center:e.clone(),radius:n}}}static createArc(t,e,n,i,r,o,a=48){const c=[];let l=r-i;l<0&&(l+=Math.PI*2);for(let f=0;f<=a;f++){const g=i+f/a*l;c.push(new E(e.x+Math.cos(g)*n,e.y+Math.sin(g)*n,e.z))}const u=new ee().setFromPoints(c),h=new ze({color:new Ot(o.color)}),d=new Fn(u,h);return d.userData={entityId:t,type:"arc"},{id:t,type:"arc",layerId:o.id,color:o.color,object3D:d,data:{center:e.clone(),radius:n,startAngle:i,endAngle:r}}}static createRectangle(t,e,n,i){const r=Math.min(e.x,n.x),o=Math.max(e.x,n.x),a=Math.min(e.y,n.y),c=Math.max(e.y,n.y),l=[new E(r,a,e.z),new E(o,a,e.z),new E(o,c,e.z),new E(r,c,e.z),new E(r,a,e.z)],u=new ee().setFromPoints(l),h=new ze({color:new Ot(i.color)}),d=new Fn(u,h);return d.userData={entityId:t,type:"rectangle"},{id:t,type:"rectangle",layerId:i.id,color:i.color,object3D:d,data:{p1:new E(r,a,e.z),p2:new E(o,c,e.z)}}}static createDimension(t,e,n,i=12,r){const o=new Ci;o.userData={entityId:t,type:"dimension"};const a=new E().subVectors(n,e),c=a.length();if(c<.001)return this.createLine(t,e,n,r);const l=new E(-a.y,a.x,0).normalize().multiplyScalar(i),u=e.clone(),h=e.clone().add(l.clone().multiplyScalar(1.2)),d=n.clone(),f=n.clone().add(l.clone().multiplyScalar(1.2)),g=e.clone().add(l),x=n.clone().add(l),m=[u,h,d,f,g,x],p=new ee().setFromPoints(m),y=new ze({color:new Ot("#4fc3f7")}),v=new oi(p,y);o.add(v);const _=new E().subVectors(x,g).normalize(),b=_.clone().negate(),T=Math.min(6,c*.15),w=g.clone().add(_.clone().multiplyScalar(T)),C=x.clone().add(b.clone().multiplyScalar(T)),M=new ee().setFromPoints([g,w,x,C]),S=new oi(M,new ze({color:5227511,linewidth:2}));o.add(S);const P=new E().addVectors(g,x).multiplyScalar(.5),D=Dx(c.toFixed(1)+" mm");return D.position.copy(P),D.position.y+=Math.sign(i)*3,o.add(D),{id:t,type:"dimension",layerId:r.id,color:"#4fc3f7",object3D:o,data:{p1:e.clone(),p2:n.clone(),offset:i,length:c}}}static createHatch(t,e,n,i,r,o,a=10){const c=[],l=i-e,u=r-n,h=Math.ceil((l+u)/a);for(let x=-h;x<=h;x++){const m=e+x*a,p=n,y=m+u,_=Lx(m,p,y,r,e,n,i,r);_&&(c.push(new E(_.x1,_.y1,0)),c.push(new E(_.x2,_.y2,0)))}const d=new ee().setFromPoints(c),f=new ze({color:new Ot(o.color),transparent:!0,opacity:.6}),g=new oi(d,f);return g.userData={entityId:t,type:"hatch"},{id:t,type:"line",layerId:o.id,color:o.color,object3D:g,data:{minX:e,minY:n,maxX:i,maxY:r,spacing:a}}}}function Lx(s,t,e,n,i,r,o,a){let c=0,l=1;const u=e-s,h=n-t,d=[-u,u,-h,h],f=[s-i,o-s,t-r,a-t];for(let g=0;g<4;g++)if(d[g]===0){if(f[g]<0)return null}else{const x=f[g]/d[g];if(d[g]<0){if(x>l)return null;x>c&&(c=x)}else{if(x<c)return null;x<l&&(l=x)}}return{x1:s+c*u,y1:t+c*h,x2:s+l*u,y2:t+l*h}}function Dx(s,t="#70d8ff",e=18){const n=document.createElement("canvas"),i=n.getContext("2d");n.width=256,n.height=64,i.clearRect(0,0,n.width,n.height),i.font="bold 28px Consolas, monospace",i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.fillText(s,128,32);const r=new Lc(n);r.minFilter=fn;const o=new ol({map:r,transparent:!0}),a=new ad(o);return a.scale.set(e*(n.width/n.height),e,1),a}const Sd=0,Ix=1,Ux=2,Hu=2,va=1.25,Gu=1,Ie=32,Se=Ie/4,Md=65535,fo=Math.pow(2,-24),pl=Symbol("SKIP_GENERATION"),Ed={strategy:Sd,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[pl]:!1};function me(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function Bc(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function Wu(s,t){t.set(s)}function Xu(s,t,e){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function Br(s,t,e){for(let n=0;n<3;n++){const i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Ns(s){const t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}function _e(s,t){return t[s+15]===Md}function Ce(s,t){return t[s+6]}function Ue(s,t){return t[s+14]}function Me(s){return s+Se}function Ee(s,t){const e=t[s+6];return s+e*Se}function ml(s,t){return t[s+7]}function ya(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,x=-1/0,m=-1/0;const p=s.offset||0;for(let y=(t-p)*6,v=(t+e-p)*6;y<v;y+=6){const _=s[y+0],b=s[y+1],T=_-b,w=_+b;T<r&&(r=T),w>c&&(c=w),_<h&&(h=_),_>g&&(g=_);const C=s[y+2],M=s[y+3],S=C-M,P=C+M;S<o&&(o=S),P>l&&(l=P),C<d&&(d=C),C>x&&(x=C);const D=s[y+4],I=s[y+5],N=D-I,z=D+I;N<a&&(a=N),z>u&&(u=z),D<f&&(f=D),D>m&&(m=D)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=d,i[2]=f,i[3]=g,i[4]=x,i[5]=m}const Un=32,Nx=(s,t)=>s.candidate-t.candidate,Jn=new Array(Un).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Or=new Float32Array(6);function Fx(s,t,e,n,i,r){let o=-1,a=0;if(r===Sd)o=Bc(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Ix)o=Bc(s),o!==-1&&(a=Bx(e,n,i,o));else if(r===Ux){const c=Ns(s);let l=va*i;const u=e.offset||0,h=(n-u)*6,d=(n+i-u)*6;for(let f=0;f<3;f++){const g=t[f],p=(t[f+3]-g)/Un;if(i<Un/4){const y=[...Jn];y.length=i;let v=0;for(let b=h;b<d;b+=6,v++){const T=y[v];T.candidate=e[b+2*f],T.count=0;const{bounds:w,leftCacheBounds:C,rightCacheBounds:M}=T;for(let S=0;S<3;S++)M[S]=1/0,M[S+3]=-1/0,C[S]=1/0,C[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0;Br(b,e,w)}y.sort(Nx);let _=i;for(let b=0;b<_;b++){const T=y[b];for(;b+1<_&&y[b+1].candidate===T.candidate;)y.splice(b+1,1),_--}for(let b=h;b<d;b+=6){const T=e[b+2*f];for(let w=0;w<_;w++){const C=y[w];T>=C.candidate?Br(b,e,C.rightCacheBounds):(Br(b,e,C.leftCacheBounds),C.count++)}}for(let b=0;b<_;b++){const T=y[b],w=T.count,C=i-T.count,M=T.leftCacheBounds,S=T.rightCacheBounds;let P=0;w!==0&&(P=Ns(M)/c);let D=0;C!==0&&(D=Ns(S)/c);const I=Gu+va*(P*w+D*C);I<l&&(o=f,l=I,a=T.candidate)}}else{for(let _=0;_<Un;_++){const b=Jn[_];b.count=0,b.candidate=g+p+_*p;const T=b.bounds;for(let w=0;w<3;w++)T[w]=1/0,T[w+3]=-1/0}for(let _=h;_<d;_+=6){let w=~~((e[_+2*f]-g)/p);w>=Un&&(w=Un-1);const C=Jn[w];C.count++,Br(_,e,C.bounds)}const y=Jn[Un-1];Wu(y.bounds,y.rightCacheBounds);for(let _=Un-2;_>=0;_--){const b=Jn[_],T=Jn[_+1];Xu(b.bounds,T.rightCacheBounds,b.rightCacheBounds)}let v=0;for(let _=0;_<Un-1;_++){const b=Jn[_],T=b.count,w=b.bounds,M=Jn[_+1].rightCacheBounds;T!==0&&(v===0?Wu(w,Or):Xu(w,Or,Or)),v+=T;let S=0,P=0;v!==0&&(S=Ns(Or)/c);const D=i-v;D!==0&&(P=Ns(M)/c);const I=Gu+va*(S*v+P*D);I<l&&(o=f,l=I,a=b.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Bx(s,t,e,n){let i=0;const r=s.offset;for(let o=t,a=t+e;o<a;o++)i+=s[(o-r)*6+n*2];return i/e}class Sa{constructor(){this.boundingData=new Float32Array(6)}}function Ox(s,t,e,n,i,r){let o=n,a=n+i-1;const c=r.pos,l=r.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+l]<c;)o++;for(;o<=a&&e[(a-u)*6+l]>=c;)a--;if(o<a){for(let h=0;h<t;h++){let d=s[o*t+h];s[o*t+h]=s[a*t+h],s[a*t+h]=d}for(let h=0;h<6;h++){const d=o-u,f=a-u,g=e[d*6+h];e[d*6+h]=e[f*6+h],e[f*6+h]=g}o++,a--}else return o}}let bd,po,Oc,wd;const zx=Math.pow(2,32);function zc(s){return"count"in s?1:1+zc(s.left)+zc(s.right)}function kx(s,t,e){return bd=new Float32Array(e),po=new Uint32Array(e),Oc=new Uint16Array(e),wd=new Uint8Array(e),kc(s,t)}function kc(s,t){const e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)bd[e+o]=r[o];if(i)return t.buffer?(wd.set(new Uint8Array(t.buffer),s),s+t.buffer.byteLength):(po[e+6]=t.offset,Oc[n+14]=t.count,Oc[n+15]=Md,s+Ie);{const{left:o,right:a,splitAxis:c}=t,l=s+Ie;let u=kc(l,o);const h=s/Ie,f=u/Ie-h;if(f>zx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return po[e+6]=f,po[e+7]=c,kc(u,a)}}function Vx(s,t,e,n,i,r){const{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:h}=i,d=s.primitiveBuffer,f=s.primitiveBufferStride,g=new Float32Array(6);let x=!1;const m=new Sa;return ya(t,e,n,m.boundingData,g),y(m,e,n,g),m;function p(v){h&&h((v-r.offset)/r.count)}function y(v,_,b,T=null,w=0){!x&&w>=o&&(x=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const C=b>l;if(b<=c&&!C||w>=o)return p(_+b),v.offset=_,v.count=b,v;const M=Fx(v.boundingData,T,t,_,b,u);let S=M.axis===-1?-1:Ox(d,f,t,_,b,M);if(M.axis===-1||S===_||S===_+b){if(!C)return p(_+b),v.offset=_,v.count=b,v;M.axis=Math.max(0,Bc(v.boundingData)),S=_+Math.max(1,Math.floor(b/2))}v.splitAxis=M.axis;const P=new Sa,D=_,I=S-_;v.left=P,ya(t,D,I,P.boundingData,g),y(P,D,I,g,w+1);const N=new Sa,z=S,k=b-I;return v.right=N,ya(t,z,k,N.boundingData,g),y(N,z,k,g,w+1),v}}function Hx(s,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=s.getRootRanges(t.range),i=n[0],r=n[n.length-1],o={offset:i.offset,count:r.offset+r.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,s.computePrimitiveBounds(o.offset,o.count,a),s._roots=n.map(c=>{const l=Vx(s,a,c.offset,c.count,t,o),u=zc(l),h=new e(Ie*u);return kx(0,l,h),h})}class gl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Gx{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const de=new Gx;let ni,us;const ts=[],zr=new gl(()=>new Ne);function Wx(s,t,e,n,i,r){ni=zr.getPrimitive(),us=zr.getPrimitive(),ts.push(ni,us),de.setBuffer(s._roots[t]);const o=Vc(0,s.geometry,e,n,i,r);de.clearBuffer(),zr.releasePrimitive(ni),zr.releasePrimitive(us),ts.pop(),ts.pop();const a=ts.length;return a>0&&(us=ts[a-1],ni=ts[a-2]),o}function Vc(s,t,e,n,i=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=de;let u=s*2;if(_e(u,c)){const g=Ce(s,l),x=Ue(u,c);return me(s,a,ni),n(g,x,!1,o,r+s/Se,ni)}else{let D=function(N){const{uint16Array:z,uint32Array:k}=de;let q=N*2;for(;!_e(q,z);)N=Me(N),q=N*2;return Ce(N,k)},I=function(N){const{uint16Array:z,uint32Array:k}=de;let q=N*2;for(;!_e(q,z);)N=Ee(N,k),q=N*2;return Ce(N,k)+Ue(q,z)};var d=D,f=I;const g=Me(s),x=Ee(s,l);let m=g,p=x,y,v,_,b;if(i&&(_=ni,b=us,me(m,a,_),me(p,a,b),y=i(_),v=i(b),v<y)){m=x,p=g;const N=y;y=v,v=N,_=b}_||(_=ni,me(m,a,_));const T=_e(m*2,c),w=e(_,T,y,o+1,r+m/Se);let C;if(w===Hu){const N=D(m),k=I(m)-N;C=n(N,k,!0,o+1,r+m/Se,_)}else C=w&&Vc(m,t,e,n,i,r,o+1);if(C)return!0;b=us,me(p,a,b);const M=_e(p*2,c),S=e(b,M,v,o+1,r+p/Se);let P;if(S===Hu){const N=D(p),k=I(p)-N;P=n(N,k,!0,o+1,r+p/Se,b)}else P=S&&Vc(p,t,e,n,i,r,o+1);return!!P}}const Ys=new de.constructor,Eo=new de.constructor,Qn=new gl(()=>new Ne),es=new Ne,ns=new Ne,Ma=new Ne,Ea=new Ne;let ba=!1;function Xx(s,t,e,n){if(ba)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ba=!0;const i=s._roots,r=t._roots;let o,a=0,c=0;const l=new Wt().copy(e).invert();for(let u=0,h=i.length;u<h;u++){Ys.setBuffer(i[u]),c=0;const d=Qn.getPrimitive();me(0,Ys.float32Array,d),d.applyMatrix4(l);for(let f=0,g=r.length;f<g&&(Eo.setBuffer(r[f]),o=un(0,0,e,l,n,a,c,0,0,d),Eo.clearBuffer(),c+=r[f].byteLength/Ie,!o);f++);if(Qn.releasePrimitive(d),Ys.clearBuffer(),a+=i[u].byteLength/Ie,o)break}return ba=!1,o}function un(s,t,e,n,i,r=0,o=0,a=0,c=0,l=null,u=!1){let h,d;u?(h=Eo,d=Ys):(h=Ys,d=Eo);const f=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=d.float32Array,p=d.uint32Array,y=d.uint16Array,v=s*2,_=t*2,b=_e(v,x),T=_e(_,y);let w=!1;if(T&&b)u?w=i(Ce(t,p),Ue(t*2,y),Ce(s,g),Ue(s*2,x),c,o+t/Se,a,r+s/Se):w=i(Ce(s,g),Ue(s*2,x),Ce(t,p),Ue(t*2,y),a,r+s/Se,c,o+t/Se);else if(T){const C=Qn.getPrimitive();me(t,m,C),C.applyMatrix4(e);const M=Me(s),S=Ee(s,g);me(M,f,es),me(S,f,ns);const P=C.intersectsBox(es),D=C.intersectsBox(ns);w=P&&un(t,M,n,e,i,o,r,c,a+1,C,!u)||D&&un(t,S,n,e,i,o,r,c,a+1,C,!u),Qn.releasePrimitive(C)}else{const C=Me(t),M=Ee(t,p);me(C,m,Ma),me(M,m,Ea);const S=l.intersectsBox(Ma),P=l.intersectsBox(Ea);if(S&&P)w=un(s,C,e,n,i,r,o,a,c+1,l,u)||un(s,M,e,n,i,r,o,a,c+1,l,u);else if(S)if(b)w=un(s,C,e,n,i,r,o,a,c+1,l,u);else{const D=Qn.getPrimitive();D.copy(Ma).applyMatrix4(e);const I=Me(s),N=Ee(s,g);me(I,f,es),me(N,f,ns);const z=D.intersectsBox(es),k=D.intersectsBox(ns);w=z&&un(C,I,n,e,i,o,r,c,a+1,D,!u)||k&&un(C,N,n,e,i,o,r,c,a+1,D,!u),Qn.releasePrimitive(D)}else if(P)if(b)w=un(s,M,e,n,i,r,o,a,c+1,l,u);else{const D=Qn.getPrimitive();D.copy(Ea).applyMatrix4(e);const I=Me(s),N=Ee(s,g);me(I,f,es),me(N,f,ns);const z=D.intersectsBox(es),k=D.intersectsBox(ns);w=z&&un(M,I,n,e,i,o,r,c,a+1,D,!u)||k&&un(M,N,n,e,i,o,r,c,a+1,D,!u),Qn.releasePrimitive(D)}}return w}const wa=new class{constructor(){let s=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=s=r._roots[o],this.uint16Array=e=new Uint16Array(s),this.uint32Array=t=new Uint32Array(s)},this.reset=()=>{this.root=null,this.buffer=s=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let o=r*2;for(;!_e(o,e);)r=Me(r),o=r*2;return Ce(r,t)},this.getRangeEnd=r=>{let o=r*2;for(;!_e(o,e);)r=Ee(r,t),o=r*2;return Ce(r,t)+Ue(o,e)};const i=(r,o,a)=>{const c=o*2,l=_e(c,e);if(!r(a,l,o)&&!l){const h=Me(o),d=Ee(o,t);i(r,h,a+1),i(r,d,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,c)=>{if(a){const l=c*2,u=t[c+6],h=e[l+14];return r(o,a,new Float32Array(s,c*4,6),u,h)}else{const l=ml(c,t);return r(o,a,new Float32Array(s,c*4,6),l)}})}}},qu=new Ne,is=new Float32Array(6);class qx{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Ed,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Hx(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=t,d=t+e;h<d;h++){this.writePrimitiveBounds(h,is,0);const[f,g,x,m,p,y]=is;f<r&&(r=f),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),x<a&&(a=x),y>u&&(u=y)}return n[i+0]=r,n[i+1]=o,n[i+2]=a,n[i+3]=c,n[i+4]=l,n[i+5]=u,n}computePrimitiveBounds(t,e,n){const i=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,is,0);const[a,c,l,u,h,d]=is,f=(a+u)/2,g=(c+h)/2,x=(l+d)/2,m=(u-a)/2,p=(h-c)/2,y=(d-l)/2,v=(r-i)*6;n[v+0]=f,n[v+1]=m+(Math.abs(f)+m)*fo,n[v+2]=g,n[v+3]=p+(Math.abs(g)+p)*fo,n[v+4]=x,n[v+5]=y+(Math.abs(x)+y)*fo}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{const n=this._roots;for(let i=0;i<n.length;i++){const r=n[i],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/Ie;for(let l=0;l<c;l++){const u=Se*l,h=2*u;_e(h,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){wa.setBVH(this,e),wa.traverse(t),wa.reset()}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const i=t[e],r=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/Ie;for(let l=c-1;l>=0;l--){const u=l*Se,h=u*2;if(_e(h,o)){const f=Ce(u,r),g=Ue(h,o);this.writePrimitiveRangeBounds(f,g,is,0),a.set(is,u)}else{const f=Me(u),g=Ee(u,r);for(let x=0;x<3;x++){const m=a[f+x],p=a[f+x+3],y=a[g+x],v=a[g+x+3];a[u+x]=m<y?m:y,a[u+x+3]=p>v?p:v}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),qu),t.union(qu)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(i&&r){const h=i;i=(d,f,g,x,m)=>h(d,f,g,x,m)?!0:a(d,f,this,r,g,x,o)}else i||(r?i=(h,d,f,g)=>a(h,d,this,r,f,g,o):i=(h,d,f)=>f);let c=!1,l=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const f=u[h];if(c=Wx(this,h,n,i,e,l),c)break;l+=f.byteLength/Ie}return c}bvhcast(t,e,n){let{intersectsRanges:i}=n;return Xx(this,t,e,i)}}function $x(){return typeof SharedArrayBuffer<"u"}function _l(s){return s.index?s.index.count:s.attributes.position.count}function Io(s){return _l(s)/3}function Yx(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function Zx(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Yx(e,n);s.setIndex(new He(i,1));for(let r=0;r<e;r++)i[r]=r}}function jx(s,t,e){const n=_l(s)/e,i=t||s.drawRange,r=i.start/e,o=(i.start+i.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function Jx(s,t){return s.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function $u(s,t,e){const n=jx(s,t,e),i=Jx(s,e);if(!i.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=_l(s)/e,l=[];for(const d of i){const{offset:f,count:g}=d,x=f,m=isFinite(g)?g:c-f,p=f+m;x<a&&p>o&&(l.push({pos:Math.max(o,x),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let u=0,h=null;for(const d of l){const f=d.pos;u!==0&&f!==h&&r.push({offset:h,count:f-h}),u+=d.isStart?1:-1,h=f}return r}function Kx(s,t){const e=s[s.length-1],n=e.offset+e.count>2**16,i=s.reduce((l,u)=>l+u.count,0),r=n?4:2,o=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<s.length;l++){const{offset:u,count:h}=s[l];for(let d=0;d<h;d++)a[c+d]=u+d;c+=h}return a}class Qx extends qx{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!$x())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Ed,...e},e[pl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const i=$u(e,t.range,n),r=Kx(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else Zx(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ne))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:$u(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Hn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}Hn.prototype.setFromBox=(function(){const s=new E;return function(e,n){const i=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);const h=e.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const tv=(function(){const s=new E,t=new E,e=new E;return function(i,r,o){const a=i.start,c=s,l=r.start,u=t;e.subVectors(a,l),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);const h=e.dot(u),d=u.dot(c),f=u.dot(u),g=e.dot(c),m=c.dot(c)*f-d*d;let p,y;m!==0?p=(h*d-g*f)/m:p=0,y=(h+p*d)/f,o.x=p,o.y=y}})(),xl=(function(){const s=new Y,t=new E,e=new E;return function(i,r,o,a){tv(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;const d=t,f=e;if(i.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),d.distanceToSquared(h)<=f.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(f);return}}}})(),ev=(function(){const s=new E,t=new E,e=new hn,n=new nn;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;const x=o.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=a){const p=x.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),nv=["x","y","z"],Nn=1e-15,Yu=Nn*Nn;function Je(s){return Math.abs(s)<Nn}class sn extends oe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new E),this.satBounds=new Array(4).fill().map(()=>new Hn),this.points=[this.a,this.b,this.c],this.plane=new hn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new nn,this.needsUpdate=!0}intersectsSphere(t){return ev(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,i);const h=r[2],d=o[2];h.subVectors(e,n),d.setFromPoints(h,i);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,i);const x=l.length(),m=h.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<Nn?m<Nn||p<Nn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<Nn?p<Nn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Nn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}sn.prototype.closestPointToSegment=(function(){const s=new E,t=new E,e=new nn;return function(i,r=null,o=null){const{start:a,end:c}=i,l=this.points;let u,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;e.start.copy(l[d]),e.end.copy(l[f]),xl(e,i,s,t),u=s.distanceToSquared(t),u<h&&(h=u,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}})();sn.prototype.intersectsTriangle=(function(){const s=new sn,t=new Hn,e=new Hn,n=new E,i=new E,r=new E,o=new E,a=new nn,c=new nn,l=new E,u=new Y,h=new Y;function d(v,_,b,T){const w=n;!v.isDegenerateIntoPoint&&!v.isDegenerateIntoSegment?w.copy(v.plane.normal):w.copy(_.plane.normal);const C=v.satBounds,M=v.satAxes;for(let D=1;D<4;D++){const I=C[D],N=M[D];if(t.setFromPoints(N,_.points),I.isSeparated(t)||(o.copy(w).cross(N),t.setFromPoints(o,v.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}const S=_.satBounds,P=_.satAxes;for(let D=1;D<4;D++){const I=S[D],N=P[D];if(t.setFromPoints(N,v.points),I.isSeparated(t)||(o.crossVectors(w,N),t.setFromPoints(o,v.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}return b&&(T||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function f(v,_,b,T,w,C,M,S,P,D,I){let N=M/(M-S);D.x=T+(w-T)*N,I.start.subVectors(_,v).multiplyScalar(N).add(v),N=M/(M-P),D.y=T+(C-T)*N,I.end.subVectors(b,v).multiplyScalar(N).add(v)}function g(v,_,b,T,w,C,M,S,P,D,I){if(w>0)f(v.c,v.a,v.b,T,_,b,P,M,S,D,I);else if(C>0)f(v.b,v.a,v.c,b,_,T,S,M,P,D,I);else if(S*P>0||M!=0)f(v.a,v.b,v.c,_,b,T,M,S,P,D,I);else if(S!=0)f(v.b,v.a,v.c,b,_,T,S,M,P,D,I);else if(P!=0)f(v.c,v.a,v.b,T,_,b,P,M,S,D,I);else return!0;return!1}function x(v,_,b,T){const w=_.degenerateSegment,C=v.plane.distanceToPoint(w.start),M=v.plane.distanceToPoint(w.end);return Je(C)?Je(M)?d(v,_,b,T):(b&&(b.start.copy(w.start),b.end.copy(w.start)),v.containsPoint(w.start)):Je(M)?(b&&(b.start.copy(w.end),b.end.copy(w.end)),v.containsPoint(w.end)):v.plane.intersectLine(w,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),v.containsPoint(n)):!1}function m(v,_,b){const T=_.a;return Je(v.plane.distanceToPoint(T))&&v.containsPoint(T)?(b&&(b.start.copy(T),b.end.copy(T)),!0):!1}function p(v,_,b){const T=v.degenerateSegment,w=_.a;return T.closestPointToPoint(w,!0,n),w.distanceToSquared(n)<Yu?(b&&(b.start.copy(w),b.end.copy(w)),!0):!1}function y(v,_,b,T){if(v.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const w=v.degenerateSegment,C=_.degenerateSegment,M=i,S=r;w.delta(M),C.delta(S);const P=n.subVectors(C.start,w.start),D=M.x*S.y-M.y*S.x;if(Je(D))return!1;const I=(P.x*S.y-P.y*S.x)/D,N=-(M.x*P.y-M.y*P.x)/D;if(I<0||I>1||N<0||N>1)return!1;const z=w.start.z+M.z*I,k=C.start.z+S.z*N;return Je(z-k)?(b&&(b.start.copy(w.start).addScaledVector(M,I),b.end.copy(w.start).addScaledVector(M,I)),!0):!1}else return _.isDegenerateIntoPoint?p(v,_,b):x(_,v,b,T);else{if(v.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(v.a)<Yu?(b&&(b.start.copy(v.a),b.end.copy(v.a)),!0):!1:_.isDegenerateIntoSegment?p(_,v,b):m(_,v,b);if(_.isDegenerateIntoPoint)return m(v,_,b);if(_.isDegenerateIntoSegment)return x(v,_,b,T)}}return function(_,b=null,T=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(s.copy(_),s.update(),_=s);const w=y(this,_,b,T);if(w!==void 0)return w;const C=this.plane,M=_.plane;let S=M.distanceToPoint(this.a),P=M.distanceToPoint(this.b),D=M.distanceToPoint(this.c);Je(S)&&(S=0),Je(P)&&(P=0),Je(D)&&(D=0);const I=S*P,N=S*D;if(I>0&&N>0)return!1;let z=C.distanceToPoint(_.a),k=C.distanceToPoint(_.b),q=C.distanceToPoint(_.c);Je(z)&&(z=0),Je(k)&&(k=0),Je(q)&&(q=0);const W=z*k,ot=z*q;if(W>0&&ot>0)return!1;i.copy(C.normal),r.copy(M.normal);const ut=i.cross(r);let gt=0,It=Math.abs(ut.x);const Zt=Math.abs(ut.y);Zt>It&&(It=Zt,gt=1),Math.abs(ut.z)>It&&(gt=2);const tt=nv[gt],Mt=this.a[tt],rt=this.b[tt],Rt=this.c[tt],Ut=_.a[tt],Pt=_.b[tt],qt=_.c[tt];if(g(this,Mt,rt,Rt,I,N,S,P,D,u,a))return d(this,_,b,T);if(g(_,Ut,Pt,qt,W,ot,z,k,q,h,c))return d(this,_,b,T);if(u.y<u.x){const J=u.y;u.y=u.x,u.x=J,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){const J=h.y;h.y=h.x,h.x=J,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(b&&(h.x>u.x?b.start.copy(c.start):b.start.copy(a.start),h.y<u.y?b.end.copy(c.end):b.end.copy(a.end)),!0)}})();sn.prototype.distanceToPoint=(function(){const s=new E;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();sn.prototype.distanceToTriangle=(function(){const s=new E,t=new E,e=["a","b","c"],n=new nn,i=new nn;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let d;const f=e[h],g=o[f];this.closestPointToPoint(g,s),d=g.distanceToSquared(s),d<u&&(u=d,a&&a.copy(s),c&&c.copy(g));const x=this[f];o.closestPointToPoint(x,s),d=x.distanceToSquared(s),d<u&&(u=d,a&&a.copy(x),c&&c.copy(s))}for(let h=0;h<3;h++){const d=e[h],f=e[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const x=e[g],m=e[(g+1)%3];i.set(o[x],o[m]),xl(n,i,s,t);const p=s.distanceToSquared(t);p<u&&(u=p,a&&a.copy(s),c&&c.copy(t))}}return Math.sqrt(u)}})();class Ge{constructor(t,e,n){this.isOrientedBox=!0,this.min=new E,this.max=new E,this.matrix=new Wt,this.invMatrix=new Wt,this.points=new Array(8).fill().map(()=>new E),this.satAxes=new Array(3).fill().map(()=>new E),this.satBounds=new Array(3).fill().map(()=>new Hn),this.alignedSatBounds=new Array(3).fill().map(()=>new Hn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ge.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*l|2*u|4*h,f=i[d];f.x=l?n.x:e.x,f.y=u?n.y:e.y,f.z=h?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){const u=o[l],h=r[l],d=1<<l,f=i[d];u.subVectors(a,f),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ge.prototype.intersectsBox=(function(){const s=new Hn;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(s.setFromBox(l,e),u.isSeparated(s))return!1}return!0}})();Ge.prototype.intersectsTriangle=(function(){const s=new sn,t=new Array(3),e=new Hn,n=new Hn,i=new E;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=c[d];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=l[d],g=u[d];if(e.setFromPoints(g,h),f.isSeparated(e))return!1}for(let d=0;d<3;d++){const f=c[d];for(let g=0;g<4;g++){const x=u[g];if(i.crossVectors(f,x),e.setFromPoints(i,t),n.setFromPoints(i,h),e.isSeparated(n))return!1}}return!0}})();Ge.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ge.prototype.distanceToPoint=(function(){const s=new E;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Ge.prototype.distanceToBox=(function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new nn),e=new Array(12).fill().map(()=>new nn),n=new E,i=new E;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];i.copy(p).clamp(h,d);const y=p.distanceToSquared(i);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(i),y<u))return Math.sqrt(y)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const v=(m+1)%3,_=(m+2)%3,b=p<<v|y<<_,T=1<<m|p<<v|y<<_,w=f[b],C=f[T];t[x].set(w,C);const S=s[m],P=s[v],D=s[_],I=e[x],N=I.start,z=I.end;N[S]=h[S],N[P]=p?h[P]:d[P],N[D]=y?h[D]:d[P],z[S]=d[S],z[P]=p?h[P]:d[P],z[D]=y?h[D]:d[P],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){i.x=m?d.x:h.x,i.y=p?d.y:h.y,i.z=y?d.z:h.z,this.closestPointToPoint(i,n);const v=i.distanceToSquared(n);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(i),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const p=t[m];for(let y=0;y<12;y++){const v=e[y];xl(p,v,n,i);const _=n.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();class iv extends gl{constructor(){super(()=>new sn)}}const en=new iv,Fs=new E,Ta=new E;function sv(s,t,e={},n=0,i=1/0){const r=n*n,o=i*i;let a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(Fs.copy(t).clamp(u.min,u.max),Fs.distanceToSquared(t)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Fs);const d=t.distanceToSquared(Fs);return d<a&&(Ta.copy(Fs),a=d,c=h),d<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(Ta):e.point=Ta.clone(),e.distance=l,e.faceIndex=c,e}const kr=parseInt(tr)>=169,rv=parseInt(tr)<=161,gi=new E,_i=new E,xi=new E,Vr=new Y,Hr=new Y,Gr=new Y,Zu=new E,ju=new E,Ju=new E,Bs=new E;function ov(s,t,e,n,i,r,o,a){let c;if(r===ke?c=s.intersectTriangle(n,e,t,!0,i):c=s.intersectTriangle(t,e,n,r!==Ye,i),c===null)return null;const l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function Ku(s,t,e,n,i,r,o,a,c,l,u){gi.fromBufferAttribute(t,r),_i.fromBufferAttribute(t,o),xi.fromBufferAttribute(t,a);const h=ov(s,gi,_i,xi,Bs,c,l,u);if(h){if(n){Vr.fromBufferAttribute(n,r),Hr.fromBufferAttribute(n,o),Gr.fromBufferAttribute(n,a),h.uv=new Y;const f=oe.getInterpolation(Bs,gi,_i,xi,Vr,Hr,Gr,h.uv);kr||(h.uv=f)}if(i){Vr.fromBufferAttribute(i,r),Hr.fromBufferAttribute(i,o),Gr.fromBufferAttribute(i,a),h.uv1=new Y;const f=oe.getInterpolation(Bs,gi,_i,xi,Vr,Hr,Gr,h.uv1);kr||(h.uv1=f),rv&&(h.uv2=h.uv1)}if(e){Zu.fromBufferAttribute(e,r),ju.fromBufferAttribute(e,o),Ju.fromBufferAttribute(e,a),h.normal=new E;const f=oe.getInterpolation(Bs,gi,_i,xi,Zu,ju,Ju,h.normal);h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1),kr||(h.normal=f)}const d={a:r,b:o,c:a,normal:new E,materialIndex:0};if(oe.getNormal(gi,_i,xi,d.normal),h.face=d,h.faceIndex=r,kr){const f=new E;oe.getBarycoord(Bs,gi,_i,xi,f),h.barycoord=f}}return h}function Qu(s){return s&&s.isMaterial?s.side:s}function Uo(s,t,e,n,i,r,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const{index:h,groups:d}=s;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:g,uv:x,uv1:m}=s.attributes;if(Array.isArray(t)){const p=n*3;for(let y=0,v=d.length;y<v;y++){const{start:_,count:b,materialIndex:T}=d[y];if(p>=_&&p<_+b){const w=Qu(t[T]),C=Ku(e,f,g,x,m,c,l,u,w,r,o);if(C)if(C.faceIndex=n,C.face.materialIndex=T,i)i.push(C);else return C}}}else{const p=Qu(t),y=Ku(e,f,g,x,m,c,l,u,p,r,o);if(y)if(y.faceIndex=n,y.face.materialIndex=0,i)i.push(y);else return y}return null}function ve(s,t,e,n){const i=s.a,r=s.b,o=s.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function av(s,t,e,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)Uo(c,t,e,u,r,o,a)}function cv(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,d=n+i;h<d;h++){let f;f=Uo(a,t,e,h,null,r,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function lv(s,t,e,n,i,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let d;if(d=u,ve(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,r))return!0}return!1}function uv(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(d,f,g=!1){const x=d*2;if(_e(x,a)){const m=Ce(d,o),p=Ue(x,a);let y=1/0,v=1/0,_=1/0,b=-1/0,T=-1/0,w=-1/0;for(let C=3*m,M=3*(m+p);C<M;C++){let S=n[C];const P=i.getX(S),D=i.getY(S),I=i.getZ(S);P<y&&(y=P),P>b&&(b=P),D<v&&(v=D),D>T&&(T=D),I<_&&(_=I),I>w&&(w=I)}return c[d+0]!==y||c[d+1]!==v||c[d+2]!==_||c[d+3]!==b||c[d+4]!==T||c[d+5]!==w?(c[d+0]=y,c[d+1]=v,c[d+2]=_,c[d+3]=b,c[d+4]=T,c[d+5]=w,!0):!1}else{const m=Me(d),p=Ee(d,o);let y=g,v=!1,_=!1;if(t){if(!y){const S=m/Se+f/Ie,P=p/Se+f/Ie;v=t.has(S),_=t.has(P),y=!v&&!_}}else v=!0,_=!0;const b=y||v,T=y||_;let w=!1;b&&(w=h(m,f,y));let C=!1;T&&(C=h(p,f,y));const M=w||C;if(M)for(let S=0;S<3;S++){const P=m+S,D=p+S,I=c[P],N=c[P+3],z=c[D],k=c[D+3];c[d+S]=I<z?I:z,c[d+S+3]=N>k?N:k}return M}}}function ci(s,t,e,n,i){let r,o,a,c,l,u;const h=1/e.direction.x,d=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,x=e.origin.y,m=e.origin.z;let p=t[s],y=t[s+3],v=t[s+1],_=t[s+3+1],b=t[s+2],T=t[s+3+2];return h>=0?(r=(p-g)*h,o=(y-g)*h):(r=(y-g)*h,o=(p-g)*h),d>=0?(a=(v-x)*d,c=(_-x)*d):(a=(_-x)*d,c=(v-x)*d),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),f>=0?(l=(b-m)*f,u=(T-m)*f):(l=(T-m)*f,u=(b-m)*f),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function hv(s,t,e,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let d=l?l[u]:u;Uo(c,t,e,d,r,o,a)}}function dv(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,d=n+i;h<d;h++){let f;f=Uo(a,t,e,c?c[h]:h,null,r,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function fv(s,t,e,n,i,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let d;if(d=e.resolveTriangleIndex(u),ve(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,r))return!0}return!1}function pv(s,t,e,n,i,r,o){de.setBuffer(s._roots[t]),Hc(0,s,e,n,i,r,o),de.clearBuffer()}function Hc(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=de,u=s*2;if(_e(u,c)){const d=Ce(s,l),f=Ue(u,c);av(t,e,n,d,f,i,r,o)}else{const d=Me(s);ci(d,a,n,r,o)&&Hc(d,t,e,n,i,r,o);const f=Ee(s,l);ci(f,a,n,r,o)&&Hc(f,t,e,n,i,r,o)}}const mv=["x","y","z"];function gv(s,t,e,n,i,r){de.setBuffer(s._roots[t]);const o=Gc(0,s,e,n,i,r);return de.clearBuffer(),o}function Gc(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=de;let l=s*2;if(_e(l,a)){const h=Ce(s,c),d=Ue(l,a);return cv(t,e,n,h,d,i,r)}else{const h=ml(s,c),d=mv[h],g=n.direction[d]>=0;let x,m;g?(x=Me(s),m=Ee(s,c)):(x=Ee(s,c),m=Me(s));const y=ci(x,o,n,i,r)?Gc(x,t,e,n,i,r):null;if(y){const b=y.point[d];if(g?b<=o[m+h]:b>=o[m+h+3])return y}const _=ci(m,o,n,i,r)?Gc(m,t,e,n,i,r):null;return y&&_?y.distance<=_.distance?y:_:y||_||null}}const Wr=new Ne,ss=new sn,rs=new sn,Os=new Wt,th=new Ge,Xr=new Ge;function _v(s,t,e,n){de.setBuffer(s._roots[t]);const i=Wc(0,s,e,n);return de.clearBuffer(),i}function Wc(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),th.set(e.boundingBox.min,e.boundingBox.max,n),i=th),_e(c,o)){const u=t.geometry,h=u.index,d=u.attributes.position,f=e.index,g=e.attributes.position,x=Ce(s,a),m=Ue(c,o);if(Os.copy(n).invert(),e.boundsTree)return me(s,r,Xr),Xr.matrix.copy(Os),Xr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Xr.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let v=x*3,_=(m+x)*3;v<_;v+=3)if(ve(rs,v,h,d),rs.needsUpdate=!0,y.intersectsTriangle(rs))return!0;return!1}});{const p=Io(e);for(let y=x*3,v=(m+x)*3;y<v;y+=3){ve(ss,y,h,d),ss.a.applyMatrix4(Os),ss.b.applyMatrix4(Os),ss.c.applyMatrix4(Os),ss.needsUpdate=!0;for(let _=0,b=p*3;_<b;_+=3)if(ve(rs,_,f,g),rs.needsUpdate=!0,ss.intersectsTriangle(rs))return!0}}}else{const u=Me(s),h=Ee(s,a);return me(u,r,Wr),!!(i.intersectsBox(Wr)&&Wc(u,t,e,n,i)||(me(h,r,Wr),i.intersectsBox(Wr)&&Wc(h,t,e,n,i)))}}const qr=new Wt,Aa=new Ge,zs=new Ge,xv=new E,vv=new E,yv=new E,Sv=new E;function Mv(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Aa.set(t.boundingBox.min,t.boundingBox.max,e),Aa.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,d=en.getPrimitive(),f=en.getPrimitive();let g=xv,x=vv,m=null,p=null;i&&(m=yv,p=Sv);let y=1/0,v=null,_=null;return qr.copy(e).invert(),zs.matrix.copy(qr),s.shapecast({boundsTraverseOrder:b=>Aa.distanceToBox(b),intersectsBounds:(b,T,w)=>w<y&&w<o?(T&&(zs.min.copy(b.min),zs.max.copy(b.max),zs.needsUpdate=!0),!0):!1,intersectsRange:(b,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>zs.distanceToBox(C),intersectsBounds:(C,M,S)=>S<y&&S<o,intersectsRange:(C,M)=>{for(let S=C,P=C+M;S<P;S++){ve(f,3*S,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let D=b,I=b+T;D<I;D++){ve(d,3*D,l,c),d.needsUpdate=!0;const N=d.distanceToTriangle(f,g,m);if(N<y&&(x.copy(g),p&&p.copy(m),y=N,v=D,_=S),N<r)return!0}}}});{const w=Io(t);for(let C=0,M=w;C<M;C++){ve(f,3*C,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=b,P=b+T;S<P;S++){ve(d,3*S,l,c),d.needsUpdate=!0;const D=d.distanceToTriangle(f,g,m);if(D<y&&(x.copy(g),p&&p.copy(m),y=D,v=S,_=C),D<r)return!0}}}}}),en.releasePrimitive(d),en.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(qr),x.applyMatrix4(qr),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}function Ev(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(d,f,g=!1){const x=d*2;if(_e(x,a)){const m=Ce(d,o),p=Ue(x,a);let y=1/0,v=1/0,_=1/0,b=-1/0,T=-1/0,w=-1/0;for(let C=m,M=m+p;C<M;C++){const S=3*s.resolveTriangleIndex(C);for(let P=0;P<3;P++){let D=S+P;D=n?n[D]:D;const I=i.getX(D),N=i.getY(D),z=i.getZ(D);I<y&&(y=I),I>b&&(b=I),N<v&&(v=N),N>T&&(T=N),z<_&&(_=z),z>w&&(w=z)}}return c[d+0]!==y||c[d+1]!==v||c[d+2]!==_||c[d+3]!==b||c[d+4]!==T||c[d+5]!==w?(c[d+0]=y,c[d+1]=v,c[d+2]=_,c[d+3]=b,c[d+4]=T,c[d+5]=w,!0):!1}else{const m=Me(d),p=Ee(d,o);let y=g,v=!1,_=!1;if(t){if(!y){const S=m/Se+f/Ie,P=p/Se+f/Ie;v=t.has(S),_=t.has(P),y=!v&&!_}}else v=!0,_=!0;const b=y||v,T=y||_;let w=!1;b&&(w=h(m,f,y));let C=!1;T&&(C=h(p,f,y));const M=w||C;if(M)for(let S=0;S<3;S++){const P=m+S,D=p+S,I=c[P],N=c[P+3],z=c[D],k=c[D+3];c[d+S]=I<z?I:z,c[d+S+3]=N>k?N:k}return M}}}function bv(s,t,e,n,i,r,o){de.setBuffer(s._roots[t]),Xc(0,s,e,n,i,r,o),de.clearBuffer()}function Xc(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=de,u=s*2;if(_e(u,c)){const d=Ce(s,l),f=Ue(u,c);hv(t,e,n,d,f,i,r,o)}else{const d=Me(s);ci(d,a,n,r,o)&&Xc(d,t,e,n,i,r,o);const f=Ee(s,l);ci(f,a,n,r,o)&&Xc(f,t,e,n,i,r,o)}}const wv=["x","y","z"];function Tv(s,t,e,n,i,r){de.setBuffer(s._roots[t]);const o=qc(0,s,e,n,i,r);return de.clearBuffer(),o}function qc(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=de;let l=s*2;if(_e(l,a)){const h=Ce(s,c),d=Ue(l,a);return dv(t,e,n,h,d,i,r)}else{const h=ml(s,c),d=wv[h],g=n.direction[d]>=0;let x,m;g?(x=Me(s),m=Ee(s,c)):(x=Ee(s,c),m=Me(s));const y=ci(x,o,n,i,r)?qc(x,t,e,n,i,r):null;if(y){const b=y.point[d];if(g?b<=o[m+h]:b>=o[m+h+3])return y}const _=ci(m,o,n,i,r)?qc(m,t,e,n,i,r):null;return y&&_?y.distance<=_.distance?y:_:y||_||null}}const $r=new Ne,os=new sn,as=new sn,ks=new Wt,eh=new Ge,Yr=new Ge;function Av(s,t,e,n){de.setBuffer(s._roots[t]);const i=$c(0,s,e,n);return de.clearBuffer(),i}function $c(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),eh.set(e.boundingBox.min,e.boundingBox.max,n),i=eh),_e(c,o)){const u=t.geometry,h=u.index,d=u.attributes.position,f=e.index,g=e.attributes.position,x=Ce(s,a),m=Ue(c,o);if(ks.copy(n).invert(),e.boundsTree)return me(s,r,Yr),Yr.matrix.copy(ks),Yr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Yr.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let v=x,_=m+x;v<_;v++)if(ve(as,3*t.resolveTriangleIndex(v),h,d),as.needsUpdate=!0,y.intersectsTriangle(as))return!0;return!1}});{const p=Io(e);for(let y=x,v=m+x;y<v;y++){const _=t.resolveTriangleIndex(y);ve(os,3*_,h,d),os.a.applyMatrix4(ks),os.b.applyMatrix4(ks),os.c.applyMatrix4(ks),os.needsUpdate=!0;for(let b=0,T=p*3;b<T;b+=3)if(ve(as,b,f,g),as.needsUpdate=!0,os.intersectsTriangle(as))return!0}}}else{const u=Me(s),h=Ee(s,a);return me(u,r,$r),!!(i.intersectsBox($r)&&$c(u,t,e,n,i)||(me(h,r,$r),i.intersectsBox($r)&&$c(h,t,e,n,i)))}}const Zr=new Wt,Ca=new Ge,Vs=new Ge,Cv=new E,Rv=new E,Pv=new E,Lv=new E;function Dv(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ca.set(t.boundingBox.min,t.boundingBox.max,e),Ca.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,d=en.getPrimitive(),f=en.getPrimitive();let g=Cv,x=Rv,m=null,p=null;i&&(m=Pv,p=Lv);let y=1/0,v=null,_=null;return Zr.copy(e).invert(),Vs.matrix.copy(Zr),s.shapecast({boundsTraverseOrder:b=>Ca.distanceToBox(b),intersectsBounds:(b,T,w)=>w<y&&w<o?(T&&(Vs.min.copy(b.min),Vs.max.copy(b.max),Vs.needsUpdate=!0),!0):!1,intersectsRange:(b,T)=>{if(t.boundsTree){const w=t.boundsTree;return w.shapecast({boundsTraverseOrder:C=>Vs.distanceToBox(C),intersectsBounds:(C,M,S)=>S<y&&S<o,intersectsRange:(C,M)=>{for(let S=C,P=C+M;S<P;S++){const D=w.resolveTriangleIndex(S);ve(f,3*D,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let I=b,N=b+T;I<N;I++){const z=s.resolveTriangleIndex(I);ve(d,3*z,l,c),d.needsUpdate=!0;const k=d.distanceToTriangle(f,g,m);if(k<y&&(x.copy(g),p&&p.copy(m),y=k,v=I,_=S),k<r)return!0}}}})}else{const w=Io(t);for(let C=0,M=w;C<M;C++){ve(f,3*C,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=b,P=b+T;S<P;S++){const D=s.resolveTriangleIndex(S);ve(d,3*D,l,c),d.needsUpdate=!0;const I=d.distanceToTriangle(f,g,m);if(I<y&&(x.copy(g),p&&p.copy(m),y=I,v=S,_=C),I<r)return!0}}}}}),en.releasePrimitive(d),en.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Zr),x.applyMatrix4(Zr),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}function nh(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}const jr=new Ge,Jr=new Es,ih=new E,sh=new Wt,rh=new E,Ra=["getX","getY","getZ"];class bo extends Qx{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new bo(e,{...n,[pl]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new He(t.index,1,!1);e.setIndex(u)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let u=0;u<l.length;u++){const h=l[u],d=new Uint32Array(h),f=new Uint16Array(h);for(let g=0,x=h.byteLength/Ie;g<x;g++){const m=Se*g,p=2*m;_e(p,f)||(d[m+6]=d[m+6]/Se-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=(r?r[t]:t)*3;let u=l+0,h=l+1,d=l+2;a&&(u=a[u],h=a[h],d=a[d]);for(let f=0;f<3;f++){const g=o[Ra[f]](u),x=o[Ra[f]](h),m=o[Ra[f]](d);let p=g;x<p&&(p=x),m<p&&(p=m);let y=g;x>y&&(y=x),m>y&&(y=m),e[n+f]=p,e[n+f+3]=y}return e}computePrimitiveBounds(t,e,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,u=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=t,x=t+e;g<x;g++){const p=(r?r[g]:g)*3,y=(g-f)*6;let v=p+0,_=p+1,b=p+2;a&&(v=a[v],_=a[_],b=a[b]),c||(v=v*h+u,_=_*h+u,b=b*h+u);for(let T=0;T<3;T++){let w,C,M;c?(w=o[d[T]](v),C=o[d[T]](_),M=o[d[T]](b)):(w=l[v+T],C=l[_+T],M=l[b+T]);let S=w;C<S&&(S=C),M<S&&(S=M);let P=w;C>P&&(P=C),M>P&&(P=M);const D=(P-S)/2,I=T*2;n[y+I+0]=S+D,n[y+I+1]=D+(Math.abs(S)+D)*fo}}return n}raycastObject3D(t,e,n=[]){const{material:i}=t;if(i===void 0)return;sh.copy(t.matrixWorld).invert(),Jr.copy(e.ray).applyMatrix4(sh),rh.setFromMatrixScale(t.matrixWorld),ih.copy(Jr.direction).multiply(rh);const r=ih.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(Jr,i,o,a);c=nh(c,t,e),c&&n.push(c)}else{const c=this.raycast(Jr,i,o,a);for(let l=0,u=c.length;l<u;l++){const h=nh(c[l],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?Ev:uv)(this,t)}raycast(t,e=yn,n=0,i=1/0){const r=this._roots,o=[],a=this.indirect?bv:pv;for(let c=0,l=r.length;c<l;c++)a(this,c,e,t,o,n,i);return o}raycastFirst(t,e=yn,n=0,i=1/0){const r=this._roots;let o=null;const a=this.indirect?Tv:gv;for(let c=0,l=r.length;c<l;c++){const u=a(this,c,e,t,n,i);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1;const i=this._roots,r=this.indirect?Av:_v;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=en.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?fv:lv});return en.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=en.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);ve(o,x*3,a,c)}:g=>{ve(o,g*3,a,c)},u=en.getPrimitive(),h=t.geometry.index,d=t.geometry.attributes.position,f=t.indirect?g=>{const x=t.resolveTriangleIndex(g);ve(u,x*3,h,d)}:g=>{ve(u,g*3,h,d)};if(r){if(!(t instanceof bo))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(x,m,p,y,v,_,b,T)=>{for(let w=p,C=p+y;w<C;w++){f(w),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=x,S=x+m;M<S;M++)if(l(M),o.needsUpdate=!0,r(o,u,M,w,v,_,b,T))return!0}return!1};if(i){const x=i;i=function(m,p,y,v,_,b,T,w){return x(m,p,y,v,_,b,T,w)?!0:g(m,p,y,v,_,b,T,w)}}else i=g}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return jr.set(t.min,t.max,e),jr.needsUpdate=!0,this.shapecast({intersectsBounds:n=>jr.intersectsBox(n),intersectsTriangle:n=>jr.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?Dv:Mv)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return sv(this,t,e,n,i)}}const Td=1e-6,Iv=Td*.5,Ad=Math.pow(10,-Math.log10(Td)),Uv=Iv*Ad;function vn(s){return~~(s*Ad+Uv)}function Nv(s){return`${vn(s.x)},${vn(s.y)}`}function oh(s){return`${vn(s.x)},${vn(s.y)},${vn(s.z)}`}function Fv(s){return`${vn(s.x)},${vn(s.y)},${vn(s.z)},${vn(s.w)}`}function Bv(s,t,e){e.direction.subVectors(t,s).normalize();const n=s.dot(e.direction);return e.origin.copy(s).addScaledVector(e.direction,-n),e}function Cd(){return typeof SharedArrayBuffer<"u"}function Ov(s){if(s.buffer instanceof SharedArrayBuffer)return s;const t=s.constructor,e=s.buffer,n=new SharedArrayBuffer(e.byteLength),i=new Uint8Array(e);return new Uint8Array(n).set(i,0),new t(n)}function zv(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function kv(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=zv(e,n);s.setIndex(new He(i,1));for(let r=0;r<e;r++)i[r]=r}}function Vv(s){return s.index?s.index.count:s.attributes.position.count}function vl(s){return Vv(s)/3}const Hv=1e-8,Gv=new E;function Wv(s){return~~(s/3)}function Xv(s){return s%3}function ah(s,t){return s.start-t.start}function ch(s,t){return Gv.subVectors(t,s.origin).dot(s.direction)}function qv(s,t,e,n=Hv){s.sort(ah),t.sort(ah);for(let a=0;a<s.length;a++){const c=s[a];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||s.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const h=c.end;c.end=u.start,u.start=h}else if(c.start>=u.start&&c.end>=u.end){const h=u.end;u.end=c.start,c.start=h}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),o(u)&&(t.splice(l,1),l--),o(c)){s.splice(a,1),a--;break}}}i(s),i(t);function i(a){for(let c=0;c<a.length;c++)o(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const lh=1e-5,uh=1e-4;class $v{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let i=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(o(u,t)&&o(u,n))continue;const h=a(u,t),d=a(u,n),f=Math.min(h,d);f<i&&(i=f,r=u)}return r;function o(c,l){const u=c.origin.distanceTo(l.origin)>lh;return c.direction.angleTo(l.direction)>uh||u}function a(c,l){const u=c.origin.distanceTo(l.origin),h=c.direction.angleTo(l.direction);return u/lh+h/uh}}}const Pa=new E,La=new E,Kr=new Es;function Yv(s,t,e){const n=s.attributes,i=s.index,r=n.position,o=new Map,a=new Map,c=Array.from(t),l=new $v;for(let u=0,h=c.length;u<h;u++){const d=c[u],f=Wv(d),g=Xv(d);let x=3*f+g,m=3*f+(g+1)%3;i&&(x=i.getX(x),m=i.getX(m)),Pa.fromBufferAttribute(r,x),La.fromBufferAttribute(r,m),Bv(Pa,La,Kr);let p,y=l.findClosestRay(Kr);y===null&&(y=Kr.clone(),l.addRay(y)),a.has(y)||a.set(y,{forward:[],reverse:[],ray:y}),p=a.get(y);let v=ch(y,Pa),_=ch(y,La);v>_&&([v,_]=[_,v]),Kr.direction.dot(y.direction)<0?p.reverse.push({start:v,end:_,index:d}):p.forward.push({start:v,end:_,index:d})}return a.forEach(({forward:u,reverse:h},d)=>{qv(u,h,o,e),u.length===0&&h.length===0&&a.delete(d)}),{disjointConnectivityMap:o,fragmentMap:a}}const Zv=new Y,Da=new E,jv=new ne,Ia=["","",""];class Jv{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:i,degenerateEpsilon:r}=this,o=e?v:y,a=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,h=c.position;let d=vl(t);const f=d;let g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(d=~~(t.drawRange.count/3)));let x=this.data;(!x||x.length<3*f)&&(x=new Int32Array(3*f)),x.fill(-1);let m=0,p=new Set;for(let _=g,b=d*3+g;_<b;_+=3){const T=_;for(let w=0;w<3;w++){let C=T+w;u&&(C=u.getX(C)),Ia[w]=o(C)}for(let w=0;w<3;w++){const C=(w+1)%3,M=Ia[w],S=Ia[C],P=`${S}_${M}`;if(a.has(P)){const D=T+w,I=a.get(P);x[D]=I,x[I]=D,a.delete(P),m+=2,p.delete(I)}else{const D=`${M}_${S}`,I=T+w;a.set(D,I),p.add(I)}}}if(i){const{fragmentMap:_,disjointConnectivityMap:b}=Yv(t,p,r);p.clear(),_.forEach(({forward:T,reverse:w})=>{T.forEach(({index:C})=>p.add(C)),w.forEach(({index:C})=>p.add(C))}),this.unmatchedDisjointEdges=_,this.disjointConnections=b,m=d*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=x;function y(_){return Da.fromBufferAttribute(h,_),oh(Da)}function v(_){let b="";for(let T=0,w=l.length;T<w;T++){const C=c[l[T]];let M;switch(C.itemSize){case 1:M=vn(C.getX(_));break;case 2:M=Nv(Zv.fromBufferAttribute(C,_));break;case 3:M=oh(Da.fromBufferAttribute(C,_));break;case 4:M=Fv(jv.fromBufferAttribute(C,_));break}b!==""&&(b+="|"),b+=M}return b}}}class Yc extends Ae{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Wt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Cd();if(n)for(const i in e){const r=e[i];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=Ov(r.array)}if(t.boundsTree||(kv(t,{useSharedArrayBuffer:n}),t.boundsTree=new bo(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new Jv(t)),!t.groupIndices){const i=vl(t),r=new Uint16Array(i),o=t.groups;for(let a=0,c=o.length;a<c;a++){const{start:l,count:u}=o[a];for(let h=l/3,d=(l+u)/3;h<d;h++)r[h]=a}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const Kv=1e-14,Ua=new E,hh=new E,dh=new E;function ei(s,t=Kv){Ua.subVectors(s.b,s.a),hh.subVectors(s.c,s.a),dh.subVectors(s.b,s.c);const e=Ua.angleTo(hh),n=Ua.angleTo(dh),i=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(i)<t||s.a.distanceToSquared(s.b)<t||s.a.distanceToSquared(s.c)<t||s.b.distanceToSquared(s.c)<t}const Na=1e-10,Hs=1e-10,Qv=1e-10,Pn=new nn,ge=new nn,Ln=new E,Fa=new E,fh=new E,Qr=new hn,Ba=new sn;class ty{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new oe),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class ey{constructor(){this.trianglePool=new ty,this.triangles=[],this.normal=new E,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:i}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){const a=t[r];if(r===0)a.getNormal(i);else if(Math.abs(1-a.getNormal(Ln).dot(i))>Na)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=n.getTriangle();c.copy(a),e.push(c)}else{t.getNormal(i);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(Fa).normalize(),Math.abs(1-Math.abs(Fa.dot(e)))<Qv){this.coplanarTriangleUsed=!0;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.coplanarCount=0}const i=[t.a,t.b,t.c];for(let r=0;r<3;r++){const o=(r+1)%3,a=i[r],c=i[o];Ln.subVectors(c,a).normalize(),fh.crossVectors(Fa,Ln),Qr.setFromNormalAndCoplanarPoint(fh,a),this.splitByPlane(Qr,t)}}else t.getPlane(Qr),this.splitByPlane(Qr,t)}splitByPlane(t,e){const{triangles:n,trianglePool:i}=this;Ba.copy(e),Ba.needsUpdate=!0;for(let r=0,o=n.length;r<o;r++){const a=n[r];if(!Ba.intersectsTriangle(a,Pn,!0))continue;const{a:c,b:l,c:u}=a;let h=0,d=-1,f=!1,g=[],x=[];const m=[c,l,u];for(let p=0;p<3;p++){const y=(p+1)%3;Pn.start.copy(m[p]),Pn.end.copy(m[y]);const v=t.distanceToPoint(Pn.start),_=t.distanceToPoint(Pn.end);if(Math.abs(v)<Hs&&Math.abs(_)<Hs){f=!0;break}if(v>0?g.push(p):x.push(p),Math.abs(v)<Hs)continue;let b=!!t.intersectLine(Pn,Ln);!b&&Math.abs(_)<Hs&&(Ln.copy(Pn.end),b=!0),b&&!(Ln.distanceTo(Pn.start)<Na)&&(Ln.distanceTo(Pn.end)<Na&&(d=p),h===0?ge.start.copy(Ln):ge.end.copy(Ln),h++)}if(!f&&h===2&&ge.distance()>Hs)if(d!==-1){d=(d+1)%3;let p=0;p===d&&(p=(p+1)%3);let y=p+1;y===d&&(y=(y+1)%3);const v=i.getTriangle();v.a.copy(m[y]),v.b.copy(ge.end),v.c.copy(ge.start),ei(v)||n.push(v),a.a.copy(m[p]),a.b.copy(ge.start),a.c.copy(ge.end),ei(a)&&(n.splice(r,1),r--,o--)}else{const p=g.length>=2?x[0]:g[0];if(p===0){let T=ge.start;ge.start=ge.end,ge.end=T}const y=(p+1)%3,v=(p+2)%3,_=i.getTriangle(),b=i.getTriangle();m[y].distanceToSquared(ge.start)<m[v].distanceToSquared(ge.end)?(_.a.copy(m[y]),_.b.copy(ge.start),_.c.copy(ge.end),b.a.copy(m[y]),b.b.copy(m[v]),b.c.copy(ge.start)):(_.a.copy(m[v]),_.b.copy(ge.start),_.c.copy(ge.end),b.a.copy(m[y]),b.b.copy(m[v]),b.c.copy(ge.end)),a.a.copy(m[p]),a.b.copy(ge.end),a.c.copy(ge.start),ei(_)||n.push(_),ei(b)||n.push(b),ei(a)&&(n.splice(r,1),r--,o--)}else h===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function ny(s){return s=~~s,s+4-s%4}class ph{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Cd()?SharedArrayBuffer:ArrayBuffer,i=new e(new n(ny(t*e.BYTES_PER_ELEMENT)));this.array&&i.set(this.array,0),this.array=i}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let i=0,r=t.length;i<r;i++)e[n+i]=t[i];this.length+=t.length}clear(){this.length=0}}class iy{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let i=0;for(let r=0;r<e;r++){const o=n[r];i+=o[t].length}return i}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const i={};e.push(i);for(const r in n){const o=n[r],a=new ph(o.type);a.itemSize=o.itemSize,a.normalized=o.normalized,i[r]=a}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,i){const{groupAttributes:r}=this,a=r[0][t];if(a){if(a.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=n,u.normalized=i}}else for(let c=0,l=r.length;c<l;c++){const u=new ph(e);u.itemSize=n,u.normalized=i,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class mh{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:i}=this;n[t]||(n[t]=[],i.push(t)),n[t].push(e)}}const Rd=0,Pd=1,sy=2,Ld=3,ry=4,Dd=5,Id=6,Ke=new Es,gh=new Wt,Be=new oe,Dn=new E,_h=new ne,xh=new ne,vh=new ne,Oa=new ne,to=new ne,eo=new ne,yh=new nn,za=new E,ka=1e-8,oy=1e-15,bi=-1,wi=1,mo=-2,go=2,Zs=0,vi=1,yl=2,ay=1e-14;let _o=null;function Sh(s){_o=s}function Ud(s,t){s.getMidpoint(Ke.origin),s.getNormal(Ke.direction);const e=t.raycastFirst(Ke,Ye);return!!(e&&Ke.direction.dot(e.face.normal)>0)?bi:wi}function cy(s,t){function e(){return Math.random()-.5}s.getNormal(za),Ke.direction.copy(za),s.getMidpoint(Ke.origin);const n=3;let i=0,r=1/0;for(let o=0;o<n;o++){Ke.direction.x+=e()*ka,Ke.direction.y+=e()*ka,Ke.direction.z+=e()*ka,Ke.direction.multiplyScalar(-1);const a=t.raycastFirst(Ke,Ye);if(!!(a&&Ke.direction.dot(a.face.normal)>0)&&i++,a!==null&&(r=Math.min(r,a.distance)),r<=oy)return a.face.normal.dot(za)>0?go:mo;if(i/n>.5||(o-i+1)/n>.5)break}return i/n>.5?bi:wi}function ly(s,t){const e=new mh,n=new mh;return gh.copy(s.matrixWorld).invert().multiply(t.matrixWorld),s.geometry.boundsTree.bvhcast(t.geometry.boundsTree,gh,{intersectsTriangles(i,r,o,a){if(!ei(i)&&!ei(r)){let c=i.intersectsTriangle(r,yh,!0);if(!c){const l=i.plane,u=r.plane,h=l.normal,d=u.normal;h.dot(d)===1&&Math.abs(l.constant-u.constant)<ay&&(c=!0)}if(c){let l=s.geometry.boundsTree.resolveTriangleIndex(o),u=t.geometry.boundsTree.resolveTriangleIndex(a);e.add(l,u),n.add(u,l),_o&&(_o.addEdge(yh),_o.addIntersectingTriangles(o,i,a,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function uy(s,t,e,n,i,r,o=!1){const a=e.attributes,c=e.index,l=s*3,u=c.getX(l+0),h=c.getX(l+1),d=c.getX(l+2);for(const f in r){const g=a[f],x=r[f];if(!(f in a))throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);const m=g.itemSize;f==="position"?(Be.a.fromBufferAttribute(g,u).applyMatrix4(n),Be.b.fromBufferAttribute(g,h).applyMatrix4(n),Be.c.fromBufferAttribute(g,d).applyMatrix4(n),Va(Be.a,Be.b,Be.c,t,3,x,o)):f==="normal"?(Be.a.fromBufferAttribute(g,u).applyNormalMatrix(i),Be.b.fromBufferAttribute(g,h).applyNormalMatrix(i),Be.c.fromBufferAttribute(g,d).applyNormalMatrix(i),o&&(Be.a.multiplyScalar(-1),Be.b.multiplyScalar(-1),Be.c.multiplyScalar(-1)),Va(Be.a,Be.b,Be.c,t,3,x,o,!0)):(_h.fromBufferAttribute(g,u),xh.fromBufferAttribute(g,h),vh.fromBufferAttribute(g,d),Va(_h,xh,vh,t,m,x,o))}}function hy(s,t,e,n,i,r,o,a=!1){Ha(s,n,i,r,o,a),Ha(a?e:t,n,i,r,o,a),Ha(a?t:e,n,i,r,o,a)}function Nd(s,t,e=!1){switch(s){case Rd:if(t===wi||t===go&&!e)return vi;break;case Pd:if(e){if(t===bi)return Zs}else if(t===wi||t===mo)return vi;break;case sy:if(e){if(t===wi||t===mo)return vi}else if(t===bi)return Zs;break;case ry:if(t===bi)return Zs;if(t===wi)return vi;break;case Ld:if(t===bi||t===go&&!e)return vi;break;case Dd:if(!e&&(t===wi||t===mo))return vi;break;case Id:if(!e&&(t===bi||t===go))return vi;break;default:throw new Error(`Unrecognized CSG operation enum "${s}".`)}return yl}function Va(s,t,e,n,i,r,o=!1,a=!1){const c=l=>{r.push(l.x),i>1&&r.push(l.y),i>2&&r.push(l.z),i>3&&r.push(l.w)};Oa.set(0,0,0,0).addScaledVector(s,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),to.set(0,0,0,0).addScaledVector(s,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),eo.set(0,0,0,0).addScaledVector(s,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),a&&(Oa.normalize(),to.normalize(),eo.normalize()),c(Oa),o?(c(eo),c(to)):(c(to),c(eo))}function Ha(s,t,e,n,i,r=!1){for(const o in i){const a=t[o],c=i[o];if(!(o in t))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);const l=a.itemSize;o==="position"?(Dn.fromBufferAttribute(a,s).applyMatrix4(e),c.push(Dn.x,Dn.y,Dn.z)):o==="normal"?(Dn.fromBufferAttribute(a,s).applyNormalMatrix(n),r&&Dn.multiplyScalar(-1),c.push(Dn.x,Dn.y,Dn.z)):(c.push(a.getX(s)),l>1&&c.push(a.getY(s)),l>2&&c.push(a.getZ(s)),l>3&&c.push(a.getW(s)))}}class dy{constructor(t){this.triangle=new oe().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new oe().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Mh{constructor(){this.data={}}addTriangleIntersection(t,e,n,i){const{data:r}=this;r[t]||(r[t]=new dy(e)),r[t].addTriangle(n,i)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const i in e)n.push(e[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,i=new Set,r=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&r.push(n[a].intersects[e]);else{const c=n[a].intersects;for(const l in c)i.has(l)||(i.add(l),r.push(c[l]))}};if(t!==null)o(t);else for(const a in n)o(a);return r}reset(){this.data={}}}class fy{constructor(){this.enabled=!1,this.triangleIntersectsA=new Mh,this.triangleIntersectsB=new Mh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,i){const{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,n,i),o.addTriangleIntersection(n,i,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Sh(this))}complete(){this.enabled&&Sh(null)}}const ii=new Wt,wo=new Bt,yi=new oe,no=new oe,Kn=new oe,io=new oe,dn=[],Ri=[];function py(s){for(const t of s)return t}function my(s,t,e,n,i,r={}){const{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=ly(s,t),l=[];let u=null,h;return h=o?0:-1,Eh(s,t,a,e,!1,n,i,h),bh(s,t,a,e,!1,i,h),e.findIndex(f=>f!==Id&&f!==Dd)!==-1&&(h=o?s.geometry.groups.length||1:-1,Eh(t,s,c,e,!0,n,i,h),bh(t,s,c,e,!0,i,h)),dn.length=0,Ri.length=0,{groups:l,materials:u}}function Eh(s,t,e,n,i,r,o,a=0){const c=s.matrixWorld.determinant()<0;ii.copy(t.matrixWorld).invert().multiply(s.matrixWorld),wo.getNormalMatrix(s.matrixWorld).multiplyScalar(c?-1:1);const l=s.geometry.groupIndices,u=s.geometry.index,h=s.geometry.attributes.position,d=t.geometry.boundsTree,f=t.geometry.index,g=t.geometry.attributes.position,x=e.ids,m=e.intersectionSet;for(let p=0,y=x.length;p<y;p++){const v=x[p],_=a===-1?0:l[v]+a,b=3*v,T=u.getX(b+0),w=u.getX(b+1),C=u.getX(b+2);yi.a.fromBufferAttribute(h,T).applyMatrix4(ii),yi.b.fromBufferAttribute(h,w).applyMatrix4(ii),yi.c.fromBufferAttribute(h,C).applyMatrix4(ii),r.reset(),r.initialize(yi);const M=m[v];for(let P=0,D=M.length;P<D;P++){const I=3*M[P],N=f.getX(I+0),z=f.getX(I+1),k=f.getX(I+2);no.a.fromBufferAttribute(g,N),no.b.fromBufferAttribute(g,z),no.c.fromBufferAttribute(g,k),r.splitByTriangle(no)}const S=r.triangles;for(let P=0,D=S.length;P<D;P++){const I=S[P],N=r.coplanarTriangleUsed?cy(I,d):Ud(I,d);dn.length=0,Ri.length=0;for(let z=0,k=n.length;z<k;z++){const q=Nd(n[z],N,i);q!==yl&&(Ri.push(q),dn.push(o[z].getGroupAttrSet(_)))}if(dn.length!==0){yi.getBarycoord(I.a,io.a),yi.getBarycoord(I.b,io.b),yi.getBarycoord(I.c,io.c);for(let z=0,k=dn.length;z<k;z++){const q=dn[z],ot=Ri[z]===Zs;uy(v,io,s.geometry,s.matrixWorld,wo,q,c!==ot)}}}}return x.length}function bh(s,t,e,n,i,r,o=0){const a=s.matrixWorld.determinant()<0;ii.copy(t.matrixWorld).invert().multiply(s.matrixWorld),wo.getNormalMatrix(s.matrixWorld).multiplyScalar(a?-1:1);const c=t.geometry.boundsTree,l=s.geometry.groupIndices,u=s.geometry.index,h=s.geometry.attributes,d=h.position,f=[],g=s.geometry.halfEdges,x=new Set,m=vl(s.geometry);for(let p=0,y=m;p<y;p++)p in e.intersectionSet||x.add(p);for(;x.size>0;){const p=py(x);x.delete(p),f.push(p);const y=3*p,v=u.getX(y+0),_=u.getX(y+1),b=u.getX(y+2);Kn.a.fromBufferAttribute(d,v).applyMatrix4(ii),Kn.b.fromBufferAttribute(d,_).applyMatrix4(ii),Kn.c.fromBufferAttribute(d,b).applyMatrix4(ii);const T=Ud(Kn,c);Ri.length=0,dn.length=0;for(let w=0,C=n.length;w<C;w++){const M=Nd(n[w],T,i);M!==yl&&(Ri.push(M),dn.push(r[w]))}for(;f.length>0;){const w=f.pop();for(let C=0;C<3;C++){const M=g.getSiblingTriangleIndex(w,C);M!==-1&&x.has(M)&&(f.push(M),x.delete(M))}if(dn.length!==0){const C=3*w,M=u.getX(C+0),S=u.getX(C+1),P=u.getX(C+2),D=o===-1?0:l[w]+o;if(Kn.a.fromBufferAttribute(d,M),Kn.b.fromBufferAttribute(d,S),Kn.c.fromBufferAttribute(d,P),!ei(Kn))for(let I=0,N=dn.length;I<N;I++){const z=Ri[I],k=dn[I].getGroupAttrSet(D),q=z===Zs;hy(M,S,P,h,s.matrixWorld,wo,k,q!==a)}}}}}function gy(s){for(let t=0;t<s.length-1;t++){const e=s[t],n=s[t+1];if(e.materialIndex===n.materialIndex){const i=e.start,r=n.start+n.count;n.start=i,n.count=r-i,s.splice(t,1),t--}}}function _y(s,t,e,n){e.clear();const i=s.attributes;for(let r=0,o=n.length;r<o;r++){const a=n[r],c=i[a];e.initializeArray(a,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function xy(s,t,e){let n=!1,i=-1;const r=s.attributes,o=t.groupAttributes[0];for(const c in o){const l=t.getTotalLength(c),u=t.getType(c),h=t.getItemSize(c),d=t.getNormalized(c);let f=r[c];(!f||f.array.length<l)&&(f=new He(new u(l),h,d),s.setAttribute(c,f),n=!0);let g=0;for(let x=0,m=Math.min(e.length,t.groupCount);x<m;x++){const p=e[x].index,{array:y,type:v,length:_}=t.groupAttributes[p][c],b=new v(y.buffer,0,_);f.array.set(b,g),g+=b.length}f.needsUpdate=!0,i=l/f.itemSize}if(s.index){const c=s.index.array;if(c.length<i)s.index=null,n=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let a=0;s.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:h}=e[c],d=t.getCount(u);d!==0&&(s.addGroup(a,d,h),a+=d)}s.setDrawRange(0,i),s.boundsTree=null,n&&s.dispose()}function wh(s,t){let e=t;return Array.isArray(t)||(e=[],s.forEach(n=>{e[n.materialIndex]=t})),e}class vy{constructor(){this.triangleSplitter=new ey,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new fy}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,i=new Yc){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i],r=!1),i.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,attributeData:a,attributes:c,useGroups:l,consolidateGroups:u,debug:h}=this;for(;a.length<i.length;)a.push(new iy);i.forEach((p,y)=>{_y(t.geometry,p.geometry,a[y],c)}),h.init(),my(t,e,n,o,a,{useGroups:l}),h.complete();const d=this.getGroupRanges(t.geometry),f=wh(d,t.material),g=this.getGroupRanges(e.geometry),x=wh(g,e.material);g.forEach(p=>p.materialIndex+=f.length);let m=[...d,...g].map((p,y)=>({...p,index:y}));if(l){const p=[...f,...x];u&&(m=m.map(v=>{const _=p[v.materialIndex];return v.materialIndex=p.indexOf(_),v}).sort((v,_)=>v.materialIndex-_.materialIndex));const y=[];for(let v=0,_=p.length;v<_;v++){let b=!1;for(let T=0,w=m.length;T<w;T++){const C=m[T];C.materialIndex===v&&(b=!0,C.materialIndex=y.length)}b&&y.push(p[v])}i.forEach(v=>{v.material=y})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],i.forEach(p=>{p.material=f[0]});return i.forEach((p,y)=>{const v=p.geometry;xy(v,a[y],m),u&&gy(v.groups)}),r?i:i[0]}evaluateHierarchy(t,e=new Yc){t.updateMatrixWorld(!0);const n=(r,o)=>{const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];u.isOperationGroup?n(u,o):o(u)}},i=r=>{const o=r.children;let a=!1;for(let l=0,u=o.length;l<u;l++){const h=o[l];a=i(h)||a}const c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return a||c};return i(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}class ie{static toBrush(t){const e=new Yc(t.geometry.clone(),t.material);return e.position.copy(t.position),e.quaternion.copy(t.quaternion),e.scale.copy(t.scale),e.updateMatrixWorld(!0),e}static addEdges(t,e=1118481){const n=new dd(t.geometry,25),i=new ze({color:e,linewidth:1.5}),r=new oi(n,i);return r.renderOrder=1,t.add(r),r}static createSolidMaterial(t="#0084ff"){return new _d({color:new Ot(t),roughness:.35,metalness:.15,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}static createBox(t,e,n,i,r,o){const a=new Ui(e,n,i),c=this.createSolidMaterial(o.color),l=new Ae(a,c);l.position.copy(r),l.castShadow=!0,l.receiveShadow=!0,l.userData={entityId:t,type:"solid_box"};const u=this.addEdges(l);return{id:t,type:"solid_box",layerId:o.id,color:o.color,object3D:l,edges3D:u,data:{width:e,height:n,depth:i,center:r.clone()}}}static createCylinder(t,e,n,i,r,o=36){const a=new Lo(e,e,n,o);a.rotateX(Math.PI/2);const c=this.createSolidMaterial(r.color),l=new Ae(a,c);l.position.copy(i),l.castShadow=!0,l.receiveShadow=!0,l.userData={entityId:t,type:"solid_cylinder"};const u=this.addEdges(l);return{id:t,type:"solid_cylinder",layerId:r.id,color:r.color,object3D:l,edges3D:u,data:{radius:e,height:n,center:i.clone()}}}static createSphere(t,e,n,i){const r=new fl(e,32,24),o=this.createSolidMaterial(i.color),a=new Ae(r,o);a.position.copy(n),a.castShadow=!0,a.receiveShadow=!0,a.userData={entityId:t,type:"solid_sphere"};const c=this.addEdges(a);return{id:t,type:"solid_sphere",layerId:i.id,color:i.color,object3D:a,edges3D:c,data:{radius:e,center:n.clone()}}}static createCone(t,e,n,i,r){const o=new ul(e,n,32);o.rotateX(Math.PI/2);const a=this.createSolidMaterial(r.color),c=new Ae(o,a);c.position.copy(i),c.castShadow=!0,c.receiveShadow=!0,c.userData={entityId:t,type:"solid_cone"};const l=this.addEdges(c);return{id:t,type:"solid_cone",layerId:r.id,color:r.color,object3D:c,edges3D:l,data:{radius:e,height:n,center:i.clone()}}}static createExtrude(t,e,n,i){const r=new fd(e),o={steps:1,depth:n,bevelEnabled:!1},a=new hl(r,o),c=this.createSolidMaterial(i.color),l=new Ae(a,c);l.castShadow=!0,l.receiveShadow=!0,l.userData={entityId:t,type:"solid_extrude"};const u=this.addEdges(l);return{id:t,type:"solid_extrude",layerId:i.id,color:i.color,object3D:l,edges3D:u,data:{shapePoints:e,height:n}}}static createRevolve(t,e,n=48,i){const r=new ll(e,n),o=this.createSolidMaterial(i.color),a=new Ae(r,o);a.castShadow=!0,a.receiveShadow=!0,a.userData={entityId:t,type:"solid_extrude"};const c=this.addEdges(a);return{id:t,type:"solid_extrude",layerId:i.id,color:i.color,object3D:a,edges3D:c,data:{profilePoints:e,segments:n}}}static union(t,e,n,i){const r=this.toBrush(e),o=this.toBrush(n),a=this.evaluator.evaluate(r,o,Rd);a.material=this.createSolidMaterial(i.color),a.userData={entityId:t,type:"solid_csg",op:"union"};const c=this.addEdges(a);return{id:t,type:"solid_csg",layerId:i.id,color:i.color,object3D:a,edges3D:c,data:{op:"union"}}}static subtract(t,e,n,i){const r=this.toBrush(e),o=this.toBrush(n),a=this.evaluator.evaluate(r,o,Pd);a.material=this.createSolidMaterial(i.color),a.userData={entityId:t,type:"solid_csg",op:"subtract"};const c=this.addEdges(a);return{id:t,type:"solid_csg",layerId:i.id,color:i.color,object3D:a,edges3D:c,data:{op:"subtract"}}}static intersect(t,e,n,i){const r=this.toBrush(e),o=this.toBrush(n),a=this.evaluator.evaluate(r,o,Ld);a.material=this.createSolidMaterial(i.color),a.userData={entityId:t,type:"solid_csg",op:"intersect"};const c=this.addEdges(a);return{id:t,type:"solid_csg",layerId:i.id,color:i.color,object3D:a,edges3D:c,data:{op:"intersect"}}}}pt(ie,"evaluator",new vy);class Th{static exportDXF(t,e){var i;let n="";n+=`0
SECTION
2
HEADER
`,n+=`9
$ACADVER
1
AC1009
`,n+=`0
ENDSEC
`,n+=`0
SECTION
2
TABLES
`,n+=`0
TABLE
2
LAYER
70
`+e.length+`
`;for(const r of e)n+=`0
LAYER
2
`+r.name+`
70
0
62
7
6
CONTINUOUS
`;n+=`0
ENDTAB
0
ENDSEC
`,n+=`0
SECTION
2
ENTITIES
`;for(const r of t){const o=((i=e.find(a=>a.id===r.layerId))==null?void 0:i.name)||"0";if(r.type==="line"&&r.data.p1&&r.data.p2){const a=r.data.p1,c=r.data.p2;n+=`0
LINE
8
`+o+`
`,n+=`10
`+a.x.toFixed(4)+`
20
`+a.y.toFixed(4)+`
30
`+a.z.toFixed(4)+`
`,n+=`11
`+c.x.toFixed(4)+`
21
`+c.y.toFixed(4)+`
31
`+c.z.toFixed(4)+`
`}else if(r.type==="circle"&&r.data.center){const a=r.data.center,c=r.data.radius;n+=`0
CIRCLE
8
`+o+`
`,n+=`10
`+a.x.toFixed(4)+`
20
`+a.y.toFixed(4)+`
30
`+a.z.toFixed(4)+`
`,n+=`40
`+c.toFixed(4)+`
`}else if(r.type==="arc"&&r.data.center){const a=r.data.center,c=r.data.radius,l=r.data.startAngle*180/Math.PI,u=r.data.endAngle*180/Math.PI;n+=`0
ARC
8
`+o+`
`,n+=`10
`+a.x.toFixed(4)+`
20
`+a.y.toFixed(4)+`
30
`+a.z.toFixed(4)+`
`,n+=`40
`+c.toFixed(4)+`
50
`+l.toFixed(2)+`
51
`+u.toFixed(2)+`
`}else if(r.type==="rectangle"&&r.data.p1&&r.data.p2){const a=r.data.p1,c=r.data.p2,l=[a,new E(c.x,a.y,a.z),c,new E(a.x,c.y,a.z)];n+=`0
POLYLINE
8
`+o+`
66
1
70
1
`;for(const u of l)n+=`0
VERTEX
8
`+o+`
10
`+u.x.toFixed(4)+`
20
`+u.y.toFixed(4)+`
30
`+u.z.toFixed(4)+`
`;n+=`0
SEQEND
`}}return n+=`0
ENDSEC
0
EOF
`,n}static parseDXF(t,e){var o,a,c,l,u,h,d,f;const n=[],i=t.split(/\r?\n/);let r=0;for(;r<i.length;){const g=(o=i[r])==null?void 0:o.trim(),x=(a=i[r+1])==null?void 0:a.trim();if(g==="0"&&x==="LINE"){let m=0,p=0,y=0,v=0,_=0,b=0;for(r+=2;r<i.length&&((c=i[r])==null?void 0:c.trim())!=="0";){const T=(l=i[r])==null?void 0:l.trim(),w=parseFloat(((u=i[r+1])==null?void 0:u.trim())||"0");T==="10"?m=w:T==="20"?p=w:T==="30"?y=w:T==="11"?v=w:T==="21"?_=w:T==="31"&&(b=w),r+=2}n.push(Yt.createLine("dxf_"+Math.random().toString(36).substr(2,6),new E(m,p,y),new E(v,_,b),e));continue}else if(g==="0"&&x==="CIRCLE"){let m=0,p=0,y=0,v=10;for(r+=2;r<i.length&&((h=i[r])==null?void 0:h.trim())!=="0";){const _=(d=i[r])==null?void 0:d.trim(),b=parseFloat(((f=i[r+1])==null?void 0:f.trim())||"0");_==="10"?m=b:_==="20"?p=b:_==="30"?y=b:_==="40"&&(v=b),r+=2}n.push(Yt.createCircle("dxf_"+Math.random().toString(36).substr(2,6),new E(m,p,y),v,e));continue}r++}return n}}class yy{static exportSTL(t,e="StudentCAD_Model"){let n=`solid ${e}
`;const i=new E,r=new E,o=new E,a=new E,c=new E,l=new E;for(const u of t){if(!u.type.startsWith("solid")&&u.type!=="solid_csg")continue;const h=u.object3D;if(!h||!h.geometry)continue;const f=h.geometry.clone().toNonIndexed().getAttribute("position");if(!f)continue;h.updateMatrixWorld(!0);const g=h.matrixWorld;for(let x=0;x<f.count;x+=3)i.fromBufferAttribute(f,x).applyMatrix4(g),r.fromBufferAttribute(f,x+1).applyMatrix4(g),o.fromBufferAttribute(f,x+2).applyMatrix4(g),a.subVectors(o,r),c.subVectors(i,r),a.cross(c).normalize(),l.copy(a),n+=`  facet normal ${l.x.toExponential(6)} ${l.y.toExponential(6)} ${l.z.toExponential(6)}
`,n+=`    outer loop
`,n+=`      vertex ${i.x.toExponential(6)} ${i.y.toExponential(6)} ${i.z.toExponential(6)}
`,n+=`      vertex ${r.x.toExponential(6)} ${r.y.toExponential(6)} ${r.z.toExponential(6)}
`,n+=`      vertex ${o.x.toExponential(6)} ${o.y.toExponential(6)} ${o.z.toExponential(6)}
`,n+=`    endloop
`,n+=`  endfacet
`}return n+=`endsolid ${e}
`,n}}class Ah{static getExercises(t){return[{id:"lab-1",title:"Lab 1: Orthographic Projections of V-Block",branch:"Common First Year",year:"Diploma",description:"Construct the Front View, Top View, and Side View of a standard 80x50x40 mm V-Block with 90° V-groove and base slot according to first-angle projection standard.",instructions:['1. Set layer to "0" (Continuous line) and turn on ORTHO [F8].',"2. Front View: Type L (LINE), start at (0, 0), draw outline: (80, 0) -> (80, 40) -> (50, 40) -> (40, 25) -> (30, 40) -> (0, 40) -> Close.","3. Draw the bottom rectangular slot: 20 mm wide x 10 mm high.","4. Top View: Draw projector lines downward and construct the 80x50 mm boundary.","5. Add Linear Dimensions with DIMLINEAR [DIM] to indicate major dimensions."],entities:()=>{const e=[],n=[new E(0,0,0),new E(30,0,0),new E(30,10,0),new E(50,10,0),new E(50,0,0),new E(80,0,0),new E(80,40,0),new E(55,40,0),new E(40,20,0),new E(25,40,0),new E(0,40,0),new E(0,0,0)];return e.push(Yt.createPolyline("l1_fv",n,!0,t)),e.push(Yt.createRectangle("l1_tv",new E(0,-60,0),new E(80,-10,0),t)),e.push(Yt.createLine("l1_tv_g1",new E(25,-60,0),new E(25,-10,0),t)),e.push(Yt.createLine("l1_tv_g2",new E(40,-60,0),new E(40,-10,0),t)),e.push(Yt.createLine("l1_tv_g3",new E(55,-60,0),new E(55,-10,0),t)),e.push(Yt.createDimension("l1_d1",new E(0,0,0),new E(80,0,0),-12,t)),e.push(Yt.createDimension("l1_d2",new E(0,0,0),new E(0,40,0),-12,t)),e}},{id:"lab-2",title:"Lab 2: Shaft Support Bracket (2D Machine Drawing)",branch:"Mechanical",year:"Diploma",description:"Draw a mechanical support bracket consisting of a 120x30 base plate, two Ø12 mounting holes, a vertical web, and a Ø40 central shaft housing with R15 fillet.",instructions:["1. Base Plate: Type REC, specify 0,0 and 120,25.","2. Mounting Holes: Type C (CIRCLE), center at (20, 12.5), Radius 6. Copy [CO] to (100, 12.5).","3. Central Housing: Type C, center at (60, 65), Radius 25 (outer) and Radius 15 (inner bore).","4. Tangent lines: Type L, snap Tangent to Circle and base plate.","5. Fillet: Type F, enter R -> 12, select corner between upright web and base plate."],entities:()=>{const e=[];return e.push(Yt.createRectangle("l2_base",new E(0,0,0),new E(120,25,0),t)),e.push(Yt.createCircle("l2_h1",new E(20,12.5,0),6,t)),e.push(Yt.createCircle("l2_h2",new E(100,12.5,0),6,t)),e.push(Yt.createCircle("l2_c_out",new E(60,70,0),25,t)),e.push(Yt.createCircle("l2_c_in",new E(60,70,0),15,t)),e.push(Yt.createLine("l2_w1",new E(35,25,0),new E(35,70,0),t)),e.push(Yt.createLine("l2_w2",new E(85,25,0),new E(85,70,0),t)),e.push(Yt.createDimension("l2_d1",new E(0,0,0),new E(120,0,0),-15,t)),e.push(Yt.createDimension("l2_d2",new E(60,0,0),new E(60,70,0),50,t)),e}},{id:"lab-3",title:"Lab 3: Flanged Pipe Joint (Sectional View & Hatching)",branch:"Civil / Mechanical",year:"B.Tech",description:"Construct full sectional elevation of cast iron flanged pipe joint with fluid bore Ø50, flange outer Ø140, 4 bolt holes on Ø100 PCD, and standard 45° cross-hatch.",instructions:["1. Draw pipe centerline: Type L, from (-20, 0) to (120, 0).","2. Draw pipe wall: Ø50 inner bore (Y=25) and Ø65 outer diameter (Y=32.5).","3. Draw flange profile: 140 mm height x 20 mm thickness.","4. Bolt holes: 14 mm diameter located on PCD Ø100 (Y=50).","5. Apply Hatch: Type H (HATCH), select enclosed metal area, select pattern ANSI31 (45° lines)."],entities:()=>{const e=[];return e.push(Yt.createLine("l3_cl",new E(-20,0,0),new E(120,0,0),{...t,color:"#e53935"})),e.push(Yt.createRectangle("l3_pw_up",new E(0,25,0),new E(80,32.5,0),t)),e.push(Yt.createRectangle("l3_pw_dn",new E(0,-32.5,0),new E(80,-25,0),t)),e.push(Yt.createRectangle("l3_flange",new E(80,-70,0),new E(100,70,0),t)),e.push(Yt.createRectangle("l3_bh_up",new E(80,43,0),new E(100,57,0),t)),e.push(Yt.createRectangle("l3_bh_dn",new E(80,-57,0),new E(100,-43,0),t)),e.push(Yt.createHatch("l3_hatch_up",0,25,80,32.5,t,4)),e.push(Yt.createHatch("l3_hatch_fl",80,57,100,70,t,4)),e}},{id:"lab-4",title:"Lab 4: 3D Slotted Bearing Block (CSG Solid Booleans)",branch:"Mechanical / Mechatronics",year:"Diploma",description:"Model a 3D solid bearing block of size 100x60x50 mm. Use CSG Booleans (SUBTRACT) to bore a Ø30 through-hole and cut a 20x10 mm top slot.",instructions:["1. Switch to 3D Modeling workspace or Isometric view [SW ISO].","2. Type BOX: center at (0, 0, 25), width=100, height=60, depth=50.","3. Type CYLINDER: center at (0, 0, 25), radius=15, height=80 (along Y axis).","4. Type SUBTRACT [SU]: select the Box first (press Enter), then select Cylinder (press Enter).","5. Cut top slot: Create Box (100, 20, 15) at top and SUBTRACT from base.","6. Orbit with 3DO or Shift+Middle Click to inspect the hollow bore!"],entities:()=>{const e=[],n=ie.createBox("l4_base",100,60,50,new E(0,0,25),t),i=ie.createCylinder("l4_cyl",16,80,new E(0,0,25),t),r=ie.subtract("l4_sub1",n.object3D,i.object3D,t),o=ie.createBox("l4_slot",105,22,20,new E(0,0,45),t),a=ie.subtract("l4_model",r.object3D,o.object3D,t);return e.push(a),e}},{id:"lab-5",title:"Lab 5: 3D Stepped V-Groove Pulley (Revolve Modeling)",branch:"Mechanical / Automobile",year:"B.Tech",description:"Create a 3D transmission V-belt pulley by defining half-cross section profile and applying REVOLVE [REV] 360° around the central shaft axis.",instructions:["1. In 2D view, draw the half-section profile with shaft bore (R12), rim, and 38° V-groove.","2. Close profile into a single closed polyline or region.","3. Type REVOLVE [REV]: Select the closed profile.","4. Specify axis of revolution: Pick points (0,0) and (0,100).","5. Angle of revolution: Enter 360.",'6. Change visual style to "Shaded with Edges" to inspect smooth rotational geometry.'],entities:()=>{const e=[],n=[new Y(12,-20),new Y(12,20),new Y(25,20),new Y(25,10),new Y(45,10),new Y(45,18),new Y(55,12),new Y(65,18),new Y(65,-18),new Y(55,-12),new Y(45,-18),new Y(45,-10),new Y(25,-10),new Y(25,-20),new Y(12,-20)],i=ie.createRevolve("l5_pulley",n,48,t);return i.object3D.position.set(0,0,25),e.push(i),e}},{id:"lab-6",title:"Lab 6: Flanged Shaft Coupling with Keyway (3D Assembly)",branch:"Mechanical / Production",year:"Diploma",description:"Model a complete flanged shaft coupling hub with Ø80 flange, Ø40 hub, Ø20 shaft bore, 6x6 mm keyway slot, and 4 bolt holes on Ø60 PCD.",instructions:["1. Model main flange cylinder: Ø80, thickness 15 mm.","2. Model hub cylinder: Ø40, length 35 mm. Apply UNION [UNI].","3. Cut shaft bore: Create cylinder Ø20 and keyway box (6x24x55) and SUBTRACT [SU].","4. Model bolt holes: Cylinder Ø8 at radius 30 mm. Use Polar Array [AR] count 4.","5. Subtract bolt holes from flange to complete the coupling!","6. Export to STL [EXPORTSTL] for 3D printing or lab submission."],entities:()=>{const e=[],n=ie.createCylinder("l6_f",40,15,new E(0,0,7.5),t),i=ie.createCylinder("l6_h",22,35,new E(0,0,25),t),r=ie.union("l6_u1",n.object3D,i.object3D,t),o=ie.createCylinder("l6_bore",12,60,new E(0,0,25),t),a=ie.subtract("l6_s1",r.object3D,o.object3D,t),c=ie.createCylinder("l6_b1",4,30,new E(28,0,7.5),t),l=ie.createCylinder("l6_b2",4,30,new E(-28,0,7.5),t),u=ie.createCylinder("l6_b3",4,30,new E(0,28,7.5),t),h=ie.createCylinder("l6_b4",4,30,new E(0,-28,7.5),t);let d=a.object3D;d=ie.subtract("l6_sb1",d,c.object3D,t).object3D,d=ie.subtract("l6_sb2",d,l.object3D,t).object3D,d=ie.subtract("l6_sb3",d,u.object3D,t).object3D;const f=ie.subtract("l6_final",d,h.object3D,t);return e.push(f),e}}]}}class Sy{constructor(){pt(this,"engine");pt(this,"viewcube");pt(this,"ucsIcon");pt(this,"ribbon");pt(this,"activeCommand",null);pt(this,"commandStep",0);pt(this,"commandPoints",[]);pt(this,"selectedEntitiesForCmd",[]);pt(this,"commandHistoryList",[]);pt(this,"historyIndex",-1);pt(this,"dynEnabled",!0);var a;const t=document.getElementById("cad-canvas");this.engine=new Ax(t);const e=document.getElementById("viewcube-container");this.viewcube=new Cx(e,{onViewChange:c=>this.setStandardView(c)});const n=document.getElementById("ucs-container");this.ucsIcon=new Rx(n),this.engine.onCameraChange=c=>{this.viewcube.updateOrientation(c),this.ucsIcon.draw(c)};const i=document.getElementById("coords-display");this.engine.onCoordsUpdate=(c,l,u)=>{i.textContent=`${c.toFixed(4)}, ${l.toFixed(4)}, ${u.toFixed(4)}`,this.updateDynamicInput(c,l,u)};const r=document.getElementById("snap-glyph");this.engine.onSnapUpdate=(c,l)=>{c?(r.style.display="block",r.style.left=`${l.x}px`,r.style.top=`${l.y}px`,r.className=`acad-snap-glyph snap-${c.type}`):r.style.display="none"};const o=document.getElementById("acad-ribbon");this.ribbon=new Px(o,{onToolSelect:c=>this.startCommand(c),onLayerSelect:c=>{this.engine.currentLayerId=c},onLayerProperties:()=>this.openLayerModal(),onViewSelect:c=>this.setStandardView(c),onVisualStyleSelect:c=>this.setVisualStyle(c),onExerciseSelect:c=>this.loadExercise(c),onOpenLabGuide:()=>this.openLabGuideModal()}),this.setupViewportClicks(),this.setupCommandLine(),this.setupStatusToggles(),this.setupQuickAccessToolbar(),this.setupModals(),this.setupGlobalShortcuts(),(a=document.getElementById("viewcube-home"))==null||a.addEventListener("click",()=>{this.setStandardView("sw_iso")}),this.loadExercise("lab-1")}setupViewportClicks(){const t=this.engine.canvas;t.addEventListener("pointerdown",e=>{if(e.button!==0)return;const n=this.engine.currentCursorWorld.clone();this.handleCanvasPoint(n)}),t.addEventListener("pointermove",()=>{if(!this.activeCommand)return;const e=this.engine.currentCursorWorld;if(this.activeCommand==="LINE"&&this.commandPoints.length>0)this.engine.setPreviewLine(this.commandPoints[this.commandPoints.length-1],e);else if(this.activeCommand==="RECTANGLE"&&this.commandPoints.length===1)this.engine.setPreviewRectangle(this.commandPoints[0],e);else if(this.activeCommand==="CIRCLE"&&this.commandPoints.length===1){const n=this.commandPoints[0].distanceTo(e);this.engine.setPreviewCircle(this.commandPoints[0],n)}})}handleCanvasPoint(t){if(this.activeCommand)switch(this.commandPoints.push(t),this.activeCommand){case"LINE":if(this.commandPoints.length===1)this.promptUser("Specify next point or [Undo]:");else{const e=this.commandPoints[this.commandPoints.length-2],n=this.commandPoints[this.commandPoints.length-1],i=Yt.createLine(this.generateId("line"),e,n,this.engine.getCurrentLayer());this.engine.addEntity(i),this.appendHistory(`Line added from (${e.x.toFixed(1)}, ${e.y.toFixed(1)}) to (${n.x.toFixed(1)}, ${n.y.toFixed(1)})`),this.promptUser("Specify next point or [Close/Enter]:")}break;case"PLINE":if(this.commandPoints.length===1)this.promptUser("Specify next point or [Close/Enter]:");else{const e=this.commandPoints[this.commandPoints.length-2],n=this.commandPoints[this.commandPoints.length-1],i=Yt.createLine(this.generateId("pline_seg"),e,n,this.engine.getCurrentLayer());this.engine.addEntity(i),this.promptUser("Specify next point or press Enter to finish:")}break;case"CIRCLE":if(this.commandPoints.length===1)this.promptUser("Specify radius of circle or [Diameter]:");else if(this.commandPoints.length===2){const e=this.commandPoints[0],n=e.distanceTo(this.commandPoints[1]),i=Yt.createCircle(this.generateId("circle"),e,n,this.engine.getCurrentLayer());this.engine.addEntity(i),this.appendHistory(`Circle created at (${e.x.toFixed(1)}, ${e.y.toFixed(1)}), Radius: ${n.toFixed(1)}`),this.finishCommand()}break;case"RECTANGLE":if(this.commandPoints.length===1)this.promptUser("Specify other corner point or [Dimensions]:");else if(this.commandPoints.length===2){const e=Yt.createRectangle(this.generateId("rect"),this.commandPoints[0],this.commandPoints[1],this.engine.getCurrentLayer());this.engine.addEntity(e),this.appendHistory(`Rectangle created from (${this.commandPoints[0].x.toFixed(1)}, ${this.commandPoints[0].y.toFixed(1)}) to (${this.commandPoints[1].x.toFixed(1)}, ${this.commandPoints[1].y.toFixed(1)})`),this.finishCommand()}break;case"ARC":if(this.commandPoints.length===1)this.promptUser("Specify second point of arc:");else if(this.commandPoints.length===2)this.promptUser("Specify end point of arc:");else if(this.commandPoints.length===3){const e=this.commandPoints[0];this.commandPoints[1];const n=this.commandPoints[2],i=new E().addVectors(e,n).multiplyScalar(.5),r=e.distanceTo(i),o=Math.atan2(e.y-i.y,e.x-i.x),a=Math.atan2(n.y-i.y,n.x-i.x),c=Yt.createArc(this.generateId("arc"),i,r,o,a,this.engine.getCurrentLayer());this.engine.addEntity(c),this.finishCommand()}break;case"DIMLINEAR":if(this.commandPoints.length===1)this.promptUser("Specify second extension line origin:");else if(this.commandPoints.length===2)this.promptUser("Specify dimension line location:");else if(this.commandPoints.length===3){const e=this.commandPoints[0],n=this.commandPoints[1],r=this.commandPoints[2].distanceTo(e)>5?12:-12,o=Yt.createDimension(this.generateId("dim"),e,n,r,this.engine.getCurrentLayer());this.engine.addEntity(o),this.appendHistory(`Dimension created: ${e.distanceTo(n).toFixed(1)} mm`),this.finishCommand()}break;case"BOX":if(this.commandPoints.length===1)this.promptUser("Specify other corner of box [Width, Height, Depth]:");else if(this.commandPoints.length===2){const e=this.commandPoints[0],n=this.commandPoints[1],i=Math.max(10,Math.abs(n.x-e.x)),r=Math.max(10,Math.abs(n.y-e.y)),o=40,a=new E((e.x+n.x)/2,(e.y+n.y)/2,o/2),c=ie.createBox(this.generateId("box"),i,r,o,a,this.engine.getCurrentLayer());this.engine.addEntity(c),this.appendHistory(`3D Box created: ${i.toFixed(1)} x ${r.toFixed(1)} x ${o.toFixed(1)}`),this.setStandardView("sw_iso"),this.finishCommand()}break;case"CYLINDER":if(this.commandPoints.length===1)this.promptUser("Specify base radius and height:");else if(this.commandPoints.length===2){const e=this.commandPoints[0],n=Math.max(5,e.distanceTo(this.commandPoints[1])),i=50,r=ie.createCylinder(this.generateId("cyl"),n,i,new E(e.x,e.y,i/2),this.engine.getCurrentLayer());this.engine.addEntity(r),this.appendHistory(`3D Cylinder created: Radius ${n.toFixed(1)}, Height ${i}`),this.setStandardView("sw_iso"),this.finishCommand()}break;case"SPHERE":if(this.commandPoints.length===1)this.promptUser("Specify radius of sphere:");else if(this.commandPoints.length===2){const e=this.commandPoints[0],n=Math.max(5,e.distanceTo(this.commandPoints[1])),i=ie.createSphere(this.generateId("sph"),n,e,this.engine.getCurrentLayer());this.engine.addEntity(i),this.appendHistory(`3D Sphere created: Radius ${n.toFixed(1)}`),this.setStandardView("sw_iso"),this.finishCommand()}break;case"CONE":if(this.commandPoints.length===1)this.promptUser("Specify base radius:");else if(this.commandPoints.length===2){const e=this.commandPoints[0],n=Math.max(5,e.distanceTo(this.commandPoints[1])),i=ie.createCone(this.generateId("cone"),n,60,e,this.engine.getCurrentLayer());this.engine.addEntity(i),this.appendHistory(`3D Cone created: Radius ${n.toFixed(1)}`),this.setStandardView("sw_iso"),this.finishCommand()}break;case"DIST":if(this.commandPoints.length===1)this.promptUser("Specify second point:");else if(this.commandPoints.length===2){const e=this.commandPoints[0].distanceTo(this.commandPoints[1]),n=Math.abs(this.commandPoints[1].x-this.commandPoints[0].x),i=Math.abs(this.commandPoints[1].y-this.commandPoints[0].y);this.appendHistory(`Distance = ${e.toFixed(4)} mm, Delta X = ${n.toFixed(4)}, Delta Y = ${i.toFixed(4)}`),this.finishCommand()}break;case"HATCH":if(this.commandPoints.length>=2){const e=this.commandPoints[0],n=this.commandPoints[1],i=Yt.createHatch(this.generateId("hatch"),Math.min(e.x,n.x),Math.min(e.y,n.y),Math.max(e.x,n.x),Math.max(e.y,n.y),this.engine.getCurrentLayer());this.engine.addEntity(i),this.finishCommand()}else this.promptUser("Specify opposite corner for hatch boundary:");break;case"SUBTRACT":this.handleCSGClick("subtract",t);break;case"UNION":this.handleCSGClick("union",t);break;case"EXTRUDE":this.handleExtrudeClick(t);break;case"ERASE":this.handleEraseClick(t);break}}handleCSGClick(t,e){const n=this.findNearestSolid(e);if(!n){this.appendHistory("No 3D solid found near pick point. Click directly on a solid.");return}if(this.selectedEntitiesForCmd.push(n),t==="subtract"){if(this.selectedEntitiesForCmd.length===1)this.promptUser("Select solid to subtract (cutting tool):");else if(this.selectedEntitiesForCmd.length===2){const i=this.selectedEntitiesForCmd[0],r=this.selectedEntitiesForCmd[1];try{const o=ie.subtract(this.generateId("csg_sub"),i.object3D,r.object3D,this.engine.getCurrentLayer());this.engine.removeEntity(i.id),this.engine.removeEntity(r.id),this.engine.addEntity(o),this.appendHistory("CSG Subtraction completed successfully.")}catch(o){this.appendHistory("Error performing boolean subtraction: "+String(o))}this.finishCommand()}}else if(t==="union"){if(this.selectedEntitiesForCmd.length===1)this.promptUser("Select second solid for union:");else if(this.selectedEntitiesForCmd.length===2){const i=this.selectedEntitiesForCmd[0],r=this.selectedEntitiesForCmd[1];try{const o=ie.union(this.generateId("csg_uni"),i.object3D,r.object3D,this.engine.getCurrentLayer());this.engine.removeEntity(i.id),this.engine.removeEntity(r.id),this.engine.addEntity(o),this.appendHistory("CSG Union completed successfully.")}catch(o){this.appendHistory("Error performing boolean union: "+String(o))}this.finishCommand()}}}handleExtrudeClick(t){let e=null,n=40;for(const i of this.engine.entities)if(i.type==="rectangle"||i.type==="circle"){const r=i.data.center||new E().addVectors(i.data.p1,i.data.p2).multiplyScalar(.5),o=t.distanceTo(r);o<n&&(n=o,e=i)}if(!e){this.appendHistory("Select a closed 2D entity (Rectangle or Circle) to extrude.");return}if(e.type==="rectangle"){const i=e.data.p1,r=e.data.p2,o=[new Y(i.x,i.y),new Y(r.x,i.y),new Y(r.x,r.y),new Y(i.x,r.y)],a=ie.createExtrude(this.generateId("extrude"),o,40,this.engine.getCurrentLayer());this.engine.addEntity(a),this.appendHistory("2D Rectangle extruded to 40 mm height solid.")}else if(e.type==="circle"){const i=ie.createCylinder(this.generateId("ext_cyl"),e.data.radius,50,new E(e.data.center.x,e.data.center.y,25),this.engine.getCurrentLayer());this.engine.addEntity(i),this.appendHistory("2D Circle extruded to 50 mm height solid cylinder.")}this.setStandardView("sw_iso"),this.finishCommand()}handleEraseClick(t){let e=null,n=25;for(const i of this.engine.entities){const r=i.object3D.position,o=t.distanceTo(r);o<n&&(n=o,e=i)}e&&(this.engine.removeEntity(e.id),this.appendHistory(`Entity ${e.type} (${e.id}) erased.`))}findNearestSolid(t){let e=null,n=80;for(const i of this.engine.entities)if(i.type.startsWith("solid")||i.type==="solid_csg"){const r=t.distanceTo(i.object3D.position);r<n&&(n=r,e=i)}return e}setupCommandLine(){const t=document.getElementById("cmd-input"),e=document.getElementById("cmd-autocomplete");t.addEventListener("keydown",n=>{if(n.key==="Enter"){const i=t.value.trim();t.value="",e.style.display="none",i?this.executeCommandInput(i):this.activeCommand&&this.finishCommand()}else n.key==="Escape"?this.cancelActiveCommand():n.key==="ArrowUp"?this.commandHistoryList.length>0&&(this.historyIndex=Math.min(this.commandHistoryList.length-1,this.historyIndex+1),t.value=this.commandHistoryList[this.commandHistoryList.length-1-this.historyIndex]):n.key==="ArrowDown"&&(this.historyIndex>0?(this.historyIndex--,t.value=this.commandHistoryList[this.commandHistoryList.length-1-this.historyIndex]):(this.historyIndex=-1,t.value=""))}),t.addEventListener("input",()=>{const n=t.value.trim();if(!n){e.style.display="none";return}const i=ho.getSuggestions(n);i.length>0?(e.innerHTML=i.map(r=>`
          <div class="acad-autocomplete-item" data-cmd="${r.name}">
            <span>${r.name}</span>
            <span class="acad-autocomplete-alias">${r.aliases.join(", ")}</span>
          </div>
        `).join(""),e.style.display="flex",e.querySelectorAll(".acad-autocomplete-item").forEach(r=>{r.addEventListener("click",o=>{const a=o.currentTarget.dataset.cmd;a&&(t.value="",e.style.display="none",this.startCommand(a))})})):e.style.display="none"})}executeCommandInput(t){if(this.commandHistoryList.push(t),this.historyIndex=-1,this.appendHistory(t,!1),this.activeCommand){const n=this.commandPoints.length>0?this.commandPoints[this.commandPoints.length-1]:void 0,i=ho.parseCoordinate(t,n);if(i){this.handleCanvasPoint(i);return}const r=t.toUpperCase();if(r==="C"&&this.activeCommand==="LINE"&&this.commandPoints.length>=2){const o=this.commandPoints[this.commandPoints.length-1],a=this.commandPoints[0],c=Yt.createLine(this.generateId("line"),o,a,this.engine.getCurrentLayer());this.engine.addEntity(c),this.finishCommand();return}else if(r==="U"){this.engine.undo();return}}const e=ho.findCommand(t);e?this.startCommand(e.name):(this.appendHistory(`Unknown command "${t}". Type ? or press F1 for help.`),this.finishCommand())}startCommand(t){var e;switch(this.finishCommand(!1),this.activeCommand=t.toUpperCase(),this.commandStep=0,this.commandPoints=[],this.selectedEntitiesForCmd=[],document.getElementById("cmd-prompt-label"),this.activeCommand){case"LINE":this.promptUser("Specify first point:");break;case"PLINE":this.promptUser("Specify start point:");break;case"CIRCLE":this.promptUser("Specify center point for circle or [3P/2P]:");break;case"RECTANGLE":this.promptUser("Specify first corner point:");break;case"ARC":this.promptUser("Specify start point of arc:");break;case"BOX":this.promptUser("Specify first corner point of box:");break;case"CYLINDER":this.promptUser("Specify center point of base:");break;case"SPHERE":this.promptUser("Specify center point:");break;case"CONE":this.promptUser("Specify center point of base:");break;case"EXTRUDE":this.promptUser("Select 2D closed object to extrude:");break;case"SUBTRACT":this.promptUser("Select solid to subtract from (base solid):");break;case"UNION":this.promptUser("Select first solid for union:");break;case"DIMLINEAR":this.promptUser("Specify first extension line origin:");break;case"DIST":this.promptUser("Specify first point:");break;case"HATCH":this.promptUser("Specify first corner for hatch boundary:");break;case"ERASE":this.promptUser("Select objects to erase:");break;case"ZOOM":case"ZOOM_EXTENTS":this.engine.cameraController.zoomExtents(),this.appendHistory("Regenerating model -- Zoom Extents completed."),this.finishCommand();break;case"PAN":this.promptUser("Press and drag middle mouse button to pan."),this.finishCommand();break;case"ORBIT":this.promptUser("Press Shift + middle mouse button to free orbit in 3D."),this.finishCommand();break;case"LAYER":this.openLayerModal(),this.finishCommand();break;case"EXPORTDXF":this.exportDXFFile(),this.finishCommand();break;case"EXPORTSTL":this.exportSTLFile(),this.finishCommand();break;case"IMPORTDXF":(e=document.getElementById("dxf-file-input"))==null||e.click(),this.finishCommand();break;case"PLOT":window.print(),this.finishCommand();break;default:this.promptUser(`Command ${this.activeCommand} activated.`)}}cancelActiveCommand(){this.activeCommand&&this.appendHistory("*Cancel*"),this.finishCommand()}finishCommand(t=!0){if(this.activeCommand=null,this.commandPoints=[],this.selectedEntitiesForCmd=[],this.engine.clearPreview(),t){const e=document.getElementById("cmd-prompt-label");e.textContent="Command:"}}promptUser(t){const e=document.getElementById("cmd-prompt-label");e.textContent=t,this.appendHistory(t,!0)}appendHistory(t,e=!1){const n=document.getElementById("cmd-history"),i=document.createElement("div");e?i.className="cmd-prompt":i.className="cmd-entry",i.textContent=t,n.appendChild(i),n.scrollTop=n.scrollHeight}updateDynamicInput(t,e,n){if(!this.dynEnabled)return;const i=document.getElementById("dynamic-input");if(this.activeCommand){i.style.display="block";const r=this.engine.worldToScreen(new E(t,e,n),window.innerWidth,window.innerHeight);if(i.style.left=`${r.x+18}px`,i.style.top=`${r.y-12}px`,this.commandPoints.length>0){const o=this.commandPoints[this.commandPoints.length-1],a=o.distanceTo(new E(t,e,n)),c=Math.atan2(e-o.y,t-o.x)*180/Math.PI;i.textContent=`${a.toFixed(2)} < ${c.toFixed(1)}°`}else i.textContent=`${t.toFixed(2)}, ${e.toFixed(2)}`}else i.style.display="none"}setStandardView(t){this.engine.cameraController.setView(t);const e=document.getElementById("vp-view-name");e.textContent=`[${t.toUpperCase()}]`,this.appendHistory(`View changed to ${t.toUpperCase()}`)}setVisualStyle(t){this.engine.setVisualStyle(t);const e=document.getElementById("vp-style-name");e.textContent=`[${t.replace("_"," ").toUpperCase()}]`,this.appendHistory(`Visual style set to ${t}`)}setupStatusToggles(){const t=(e,n)=>{const i=document.getElementById(e);i.addEventListener("click",()=>{i.classList.toggle("active"),n(i.classList.contains("active"))})};t("toggle-grid",e=>this.engine.grid.toggleVisibility(e)),t("toggle-snap",e=>{this.engine.snapManager.gridSnapEnabled=e}),t("toggle-ortho",e=>{this.engine.snapManager.orthoEnabled=e}),t("toggle-osnap",e=>{this.engine.snapManager.enabled=e}),t("toggle-dyn",e=>{this.dynEnabled=e})}setupQuickAccessToolbar(){var t,e,n,i,r,o,a,c,l;(t=document.getElementById("qat-new"))==null||t.addEventListener("click",()=>{this.engine.clearEntities(),this.appendHistory("New drawing created.")}),(e=document.getElementById("qat-open"))==null||e.addEventListener("click",()=>{var u;(u=document.getElementById("dxf-file-input"))==null||u.click()}),(n=document.getElementById("qat-save"))==null||n.addEventListener("click",()=>{this.exportDXFFile()}),(i=document.getElementById("qat-plot"))==null||i.addEventListener("click",()=>{window.print()}),(r=document.getElementById("qat-undo"))==null||r.addEventListener("click",()=>{this.engine.undo(),this.appendHistory("UNDO")}),(o=document.getElementById("qat-redo"))==null||o.addEventListener("click",()=>{this.engine.redo(),this.appendHistory("REDO")}),(a=document.getElementById("workspace-select"))==null||a.addEventListener("change",u=>{u.target.value==="drafting"?(this.ribbon.setTab("home"),this.setStandardView("top"),this.setVisualStyle("2d_wireframe")):(this.ribbon.setTab("solid"),this.setStandardView("sw_iso"),this.setVisualStyle("shaded_edges"))}),(c=document.getElementById("vp-view-name"))==null||c.addEventListener("click",()=>{this.ribbon.setTab("view")}),(l=document.getElementById("vp-style-name"))==null||l.addEventListener("click",()=>{this.ribbon.setTab("view")})}setupModals(){var e,n,i;(e=document.getElementById("btn-close-layers"))==null||e.addEventListener("click",()=>{document.getElementById("modal-layers").style.display="none"}),(n=document.getElementById("btn-new-layer"))==null||n.addEventListener("click",()=>{const r=this.engine.layers.length+1,o=["#00e676","#ff9100","#d500f9","#00e5ff","#ff1744"],a={id:"layer_"+r,name:"Layer "+r,color:o[r%o.length],visible:!0,locked:!1,linetype:"Continuous",lineweight:.25};this.engine.layers.push(a),this.renderLayersTable()}),(i=document.getElementById("btn-close-lab-guide"))==null||i.addEventListener("click",()=>{document.getElementById("modal-lab-guide").style.display="none"});const t=document.getElementById("dxf-file-input");t.addEventListener("change",async()=>{var c;const r=(c=t.files)==null?void 0:c[0];if(!r)return;const o=await r.text(),a=Th.parseDXF(o,this.engine.getCurrentLayer());for(const l of a)this.engine.addEntity(l,!1);this.appendHistory(`DXF File "${r.name}" imported with ${a.length} entities.`),this.engine.cameraController.zoomExtents(),t.value=""})}openLayerModal(){this.renderLayersTable(),document.getElementById("modal-layers").style.display="flex"}renderLayersTable(){const t=document.getElementById("layers-table-body");t.innerHTML=this.engine.layers.map(e=>`
      <tr>
        <td>${e.id===this.engine.currentLayerId?"&#9654; Current":""}</td>
        <td><b>${e.name}</b></td>
        <td><input type="checkbox" ${e.visible?"checked":""} data-layer-vis="${e.id}"></td>
        <td><input type="checkbox" ${e.locked?"checked":""} data-layer-lock="${e.id}"></td>
        <td><span class="acad-color-box" style="background-color: ${e.color}"></span></td>
        <td>${e.linetype}</td>
        <td>${e.lineweight} mm</td>
      </tr>
    `).join(""),t.querySelectorAll("[data-layer-vis]").forEach(e=>{e.addEventListener("change",n=>{const i=n.currentTarget.dataset.layerVis,r=this.engine.layers.find(o=>o.id===i);r&&(r.visible=n.target.checked)})})}openLabGuideModal(){const t=document.getElementById("lab-guide-content"),e=Ah.getExercises(this.engine.getCurrentLayer());t.innerHTML=e.map(n=>`
      <div class="lab-card">
        <div class="lab-card-header">
          <div class="lab-title">${n.title}</div>
          <span class="lab-badge">${n.year} &bull; ${n.branch}</span>
        </div>
        <div class="lab-desc">${n.description}</div>
        <div class="lab-steps">
          <b>AutoCAD Instructions:</b><br>
          ${n.instructions.map(i=>`<div>${i}</div>`).join("")}
        </div>
        <button class="acad-primary-btn" data-load-lab="${n.id}">Load Problem into Workspace</button>
      </div>
    `).join(""),t.querySelectorAll("[data-load-lab]").forEach(n=>{n.addEventListener("click",i=>{const r=i.currentTarget.dataset.loadLab;r&&(this.loadExercise(r),document.getElementById("modal-lab-guide").style.display="none")})}),document.getElementById("modal-lab-guide").style.display="flex"}loadExercise(t){const n=Ah.getExercises(this.engine.getCurrentLayer()).find(r=>r.id===t);if(!n)return;this.engine.clearEntities();const i=n.entities();for(const r of i)r&&this.engine.addEntity(r,!1);this.appendHistory("--------------------------------------------------"),this.appendHistory(`Loaded: ${n.title}`),this.appendHistory(n.description),this.appendHistory("--------------------------------------------------"),n.id==="lab-4"||n.id==="lab-5"||n.id==="lab-6"?(this.setStandardView("sw_iso"),this.setVisualStyle("shaded_edges"),this.ribbon.setTab("solid")):(this.setStandardView("top"),this.setVisualStyle("2d_wireframe"),this.ribbon.setTab("home")),this.engine.cameraController.zoomExtents()}exportDXFFile(){const t=Th.exportDXF(this.engine.entities,this.engine.layers),e=new Blob([t],{type:"application/dxf"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download="StudentCAD_Drawing.dxf",i.click(),URL.revokeObjectURL(n),this.appendHistory("DXF Drawing exported successfully.")}exportSTLFile(){const t=yy.exportSTL(this.engine.entities),e=new Blob([t],{type:"model/stl"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download="StudentCAD_Model.stl",i.click(),URL.revokeObjectURL(n),this.appendHistory("3D STL file exported successfully.")}setupGlobalShortcuts(){window.addEventListener("keydown",t=>{var n,i,r,o,a;const e=document.getElementById("cmd-input");document.activeElement!==e&&t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&e.focus(),t.key==="F3"?(t.preventDefault(),(n=document.getElementById("toggle-osnap"))==null||n.click()):t.key==="F7"?(t.preventDefault(),(i=document.getElementById("toggle-grid"))==null||i.click()):t.key==="F8"?(t.preventDefault(),(r=document.getElementById("toggle-ortho"))==null||r.click()):t.key==="F9"?(t.preventDefault(),(o=document.getElementById("toggle-snap"))==null||o.click()):t.key==="F12"?(t.preventDefault(),(a=document.getElementById("toggle-dyn"))==null||a.click()):t.key==="Escape"&&this.cancelActiveCommand()})}generateId(t="ent"){return`${t}_${Math.random().toString(36).substr(2,7)}`}}window.addEventListener("DOMContentLoaded",()=>{new Sy});
