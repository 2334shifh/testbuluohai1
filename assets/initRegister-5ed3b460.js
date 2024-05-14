import{r as u,W as h,C as w,T as C,S as k,a as m}from"./index-ea483eb4.js";const M=y=>{const x=h.gameplay.pixiStage.effectsContainer,l=h.gameplay.pixiStage.currentApp,e=new w;x.addChild(e);const a=C.from("./game/tex/cherryBlossoms.png");e.x=l.screen.width/2,e.y=l.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,e.scale.x=1,e.scale.y=1;const o=[];function p(d){const c=m.width,g=m.height,s=new k(a);let i=.25;s.scale.x=.15*i,s.scale.y=.15*i,s.anchor.set(.5),s.x=Math.random()*c-.5*c,s.y=0-.5*g,s.dropSpeed=Math.random()*5,s.acc=Math.random(),e.addChild(s),o.push(s);let r=0;for(const t of o){r++;const n=Math.random();t.dropSpeed=t.acc*.01+t.dropSpeed,t.y+=d*y*t.dropSpeed*.3+.7,r%2===0?(t.x+=d*n*.5,t.rotation+=d*n*.03):(t.x-=d*n*.5,t.rotation-=d*n*.03)}o.length>=200&&(o.unshift(),e.removeChild(e.children[0]))}return h.gameplay.pixiStage.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:p},"cherryBlossoms-Ticker"),{container:e,tickerKey:"cherryBlossoms-Ticker"}};u("cherryBlossoms",()=>M(3));const P=(y,S)=>{var c;const l=h.gameplay.pixiStage.effectsContainer,e=h.gameplay.pixiStage.currentApp,a=new w;l.addChild(a);const o=C.from("./game/tex/raindrop.png");a.x=e.screen.width/2,a.y=e.screen.height/2,a.pivot.x=a.width/2,a.pivot.y=a.height/2,a.scale.x=1,a.scale.y=1;const p=[];function d(g){const s=m.width,i=m.height;for(let r=0;r<S;r++){const t=new k(o);let n=Math.random();n<=.5&&(n=.5),t.scale.x=.48*n,t.scale.y=.48*n,t.anchor.set(.5),t.x=Math.random()*s-.5*s,t.y=0-.5*i,t.dropSpeed=Math.random()*2,t.acc=Math.random(),t.alpha=Math.random(),t.alpha>=.5&&(t.alpha=.5),t.alpha<=.2&&(t.alpha=.2),a.addChild(t),p.push(t)}for(const r of p)r.dropSpeed=r.acc*.01+r.dropSpeed,r.y+=g*y*r.dropSpeed*1.1+3;p.length>=2500&&(p.unshift(),a.removeChild(a.children[0]))}return(c=h.gameplay.pixiStage)==null||c.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:d},"rain-Ticker"),{container:a,tickerKey:"rain-Ticker"}};u("rain",()=>P(6,10));const T=y=>{var d;const x=h.gameplay.pixiStage.effectsContainer,l=h.gameplay.pixiStage.currentApp,e=new w;x.addChild(e);const a=C.from("./game/tex/snowFlake_min.png");e.x=l.screen.width/2,e.y=l.screen.height/2,e.pivot.x=e.width/2,e.pivot.y=e.height/2,e.scale.x=1,e.scale.y=1;const o=[];function p(c){const g=m.width,s=m.height,i=new k(a);let r=Math.random();r<=.5&&(r=.5),i.scale.x=.144*r,i.scale.y=.144*r,i.anchor.set(.5),i.x=Math.random()*g-.5*g,i.y=0-.5*s,i.dropSpeed=Math.random()*2,i.acc=Math.random(),e.addChild(i),o.push(i);let t=0;for(const n of o){t++;const f=Math.random();n.dropSpeed=n.acc*.01+n.dropSpeed,n.y+=c*y*n.dropSpeed*.3+.7,t%2===0?(n.x+=c*f*.5,n.rotation+=c*f*.03):(n.x-=c*f*.5,n.rotation-=c*f*.03)}o.length>=500&&(o.unshift(),e.removeChild(e.children[0]))}return(d=h.gameplay.pixiStage)==null||d.registerAnimation({setStartState:()=>{},setEndState:()=>{},tickerFunc:p},"snow-Ticker"),{container:e,tickerKey:"snow-Ticker"}};u("snow",()=>T(3));
