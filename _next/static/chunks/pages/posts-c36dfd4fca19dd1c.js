(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5161:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(1372)}])},9469:function(t,e){"use strict";e.Z={src:"/_next/static/media/KeiMoriyama.4e644f18.png",height:640,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAvElEQVR42mPouvK48/IjINlz40XPjeddlx9BuAwg6uqTjksP6/edrtt3BigEUQqWuPY0p2+qMgODIgND4qQ5PdefgSS6Lz9qvPx47vLVexbNri/Kj0pM6QBrYugBSlx5svnCjR8XT9/ftbln+6GO68+6gDq6Lj/suv68as32J2cPH18xJ2/eyt5bLzsvPWQASnZce9qyctONF8/3nD5Ts2BVF0RH55XHQKrrxvOai4+arjztvvkCaHPnlccAq+WGcKa3UyEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},8646:function(t,e,n){"use strict";n.d(e,{Et:function(){return h},P4:function(){return x},Pg:function(){return m}});var i=n(5893),r=n(1664),s=n.n(r),l=n(5675),a=n.n(l),u=n(3100),c=n(5931),o=n(9564),d=n(917);let x=t=>{let{children:e,href:n,title:r,thumbnail:s}=t;return(0,i.jsx)(u.xu,{w:"100%",align:"center",children:(0,i.jsxs)(c.f,{cursor:"pointer",children:[(0,i.jsx)(a(),{src:s,alt:r,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,i.jsx)(c.A,{href:n,target:"_blank",children:(0,i.jsx)(o.x,{mt:2,children:r})}),(0,i.jsx)(o.x,{fontSize:14,children:e})]})})},h=t=>{let{children:e,id:n,title:r,thumbnail:l}=t;return(0,i.jsx)(u.xu,{w:"100%",align:"center",children:(0,i.jsx)(s(),{href:"/works/".concat(n),children:(0,i.jsxs)(c.f,{cursor:"pointer",children:[(0,i.jsx)(a(),{src:l,alt:r,className:"grid-item-thumbnail",placeholder:"blur"}),(0,i.jsx)(c.A,{as:"div",href:"/works/".concat(n),children:(0,i.jsx)(o.x,{mt:2,fontSize:20,children:r})}),(0,i.jsx)(o.x,{fontSize:14,children:e})]})})})},m=()=>(0,i.jsx)(d.xB,{styles:"\n	.grid-item-thumbnail{\n	border-radius:12px;\n	}\n	"})},1623:function(t,e,n){"use strict";var i=n(5893),r=n(8419),s=n(9008),l=n.n(s),a=n(8646);let u={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};e.Z=t=>{let{children:e,title:n}=t;return(0,i.jsx)(r.E.article,{init:"hidden",animate:"enter",exit:"exit",variants:u,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsxs)(l(),{children:[" ",(0,i.jsxs)("title",{children:[n," - Kei Moriyama"]})," "]}),e,(0,i.jsx)(a.Pg,{})]})})}},5649:function(t,e,n){"use strict";var i=n(5893),r=n(8419),s=n(4232),l=n(4920);let a=(0,s.m)(r.E.div,{shouldForwardProp:t=>(0,l.x)(t)||"transition"===t});e.Z=t=>{let{children:e,delay:n=0}=t;return(0,i.jsx)(a,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:n},mb:6,children:e})}},1372:function(t,e,n){"use strict";n.r(e);var i=n(5893),r=n(6979),s=n(4418),l=n(3916),a=n(1623),u=n(5649),c=n(8646),o=n(9469);e.default=()=>(0,i.jsx)(a.Z,{title:"Posts",children:(0,i.jsxs)(r.W,{children:[(0,i.jsx)(s.X,{as:"h3",fontSize:20,mb:4,children:"Posts"}),(0,i.jsx)(u.Z,{delay:.1,children:(0,i.jsx)(l.M,{columns:[1,2,2],gap:6,children:(0,i.jsx)(c.P4,{title:"This is sample posts",thumbnail:o.Z})})})]})})},3916:function(t,e,n){"use strict";n.d(e,{M:function(){return d}});var i=n(5059),r=n(4232),s=n(5893),l=(0,i.G)(function(t,e){let{templateAreas:n,gap:i,rowGap:l,columnGap:a,column:u,row:c,autoFlow:o,autoRows:d,templateRows:x,autoColumns:h,templateColumns:m,...p}=t;return(0,s.jsx)(r.m.div,{ref:e,__css:{display:"grid",gridTemplateAreas:n,gridGap:i,gridRowGap:l,gridColumnGap:a,gridAutoColumns:h,gridColumn:u,gridRow:c,gridAutoFlow:o,gridAutoRows:d,gridTemplateRows:x,gridTemplateColumns:m},...p})});l.displayName="Grid";var a=n(5119),u=n(4629),c=n(5432);function o(t,e){return Array.isArray(t)?t.map(t=>null===t?null:e(t)):(0,c.Kn)(t)?Object.keys(t).reduce((n,i)=>(n[i]=e(t[i]),n),{}):null!=t?e(t):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var d=(0,i.G)(function(t,e){let{columns:n,spacingX:i,spacingY:r,spacing:c,minChildWidth:d,...x}=t,h=(0,a.F)(),m=d?o(d,t=>{let e=(0,u.LP)("sizes",t,"number"==typeof t?`${t}px`:t)(h);return null===t?null:`repeat(auto-fit, minmax(${e}, 1fr))`}):o(n,t=>null===t?null:`repeat(${t}, minmax(0, 1fr))`);return(0,s.jsx)(l,{ref:e,gap:c,columnGap:i,rowGap:r,templateColumns:m,...x})});d.displayName="SimpleGrid"}},function(t){t.O(0,[864,774,888,179],function(){return t(t.s=5161)}),_N_E=t.O()}]);