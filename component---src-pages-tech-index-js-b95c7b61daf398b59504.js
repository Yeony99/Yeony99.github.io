(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[50],{6966:function(t,e,n){"use strict";var a=n(7294),r=n(366),l=n(1404),i=r.ZP.header.withConfig({displayName:"page-header__PH",componentId:"sc-15kywng-0"})(["padding:1rem;"]);e.Z=function(t){return(0,l.tZ)(a.Fragment,null,(0,l.tZ)(i,null,(0,l.tZ)("h1",null,t.title),(0,l.tZ)("h6",null,t.subtitle)))}},1621:function(t,e,n){"use strict";var a=n(366).ZP.div.withConfig({displayName:"tag__Tag",componentId:"g53uox-0"})(["padding:0.1rem 0.5rem;margin:0.5rem;margin-left:0;font-size:0.85rem;border-radius:0.25rem;"]);e.Z=a},1570:function(t,e,n){"use strict";n.r(e);var a=n(7294),r=n(2481),l=n(5444),i=n(6966),s=n(1621),o=n(5610),u=n(1404);e.default=function(t){var e=t.data,n=(0,a.useState)(""),c=n[0],d=n[1],m=function(t){console.log("test!!!!",t),d(t)};return(0,u.tZ)(a.Fragment,null,(0,u.tZ)(r.Z,{path:"/tech",title:"테크"}),(0,u.tZ)("div",{className:"wrap min-h-76"},(0,u.tZ)(i.Z,{title:"Tech ☘",subtitle:"기술 사용, 프로그래밍, 기술서에 관한 글"}),(0,u.tZ)("div",{className:"padding-bottom-1 wrap flex overflow-x-scroll"},(0,u.tZ)(s.Z,{className:"tag pointer bg-orange "+(""==c?"selected-tag":""),onClick:function(){return m("")}},"All"),e.allMarkdownRemark.distinct.map((function(t){return(0,u.tZ)(s.Z,{key:t,className:"tag pointer bg-orange "+(c==t?"selected-tag":""),onClick:function(){return m(t)}},t)}))),e.allMarkdownRemark.edges.map((function(t){var e=t.node;return(0,u.tZ)("div",{key:e.id,className:"row flex-column",style:{display:c?e.frontmatter.tags.map((function(t){return t})).includes(c)?"block":"none":"block"}},(0,u.tZ)(l.Link,{to:e.frontmatter.slug},(0,u.tZ)("div",{className:"padding-1 h-100"},(0,u.tZ)("h3",null,e.frontmatter.title),(0,u.tZ)("p",null,e.excerpt),(0,u.tZ)("div",{className:"flex justify-content-between align-center"},(0,u.tZ)("div",{className:"flex"},e.frontmatter.tags.map((function(t){return(0,u.tZ)(s.Z,{key:t,className:"tag"},t)}))),(0,u.tZ)("div",{style:{fontSize:"0.7rem"}},e.frontmatter.date)),(0,u.tZ)("hr",null))))}))),(0,u.tZ)(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-tech-index-js-b95c7b61daf398b59504.js.map