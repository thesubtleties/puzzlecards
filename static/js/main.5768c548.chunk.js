(this.webpackJsonppuzzlecards=this.webpackJsonppuzzlecards||[]).push([[0],{10:function(e,r,a){},11:function(e,r,a){},12:function(e,r,a){"use strict";a.r(r);var c=a(0),n=a(1),t=a.n(n),s=a(4),i=a.n(s),d=(a(10),a(2));var m=function(e){return Object(c.jsxs)("div",{className:"Topbar",children:[Object(c.jsx)("span",{children:"Memory Card Game"}),Object(c.jsxs)("div",{className:"scores",children:["Score:",e.currentScore]}),Object(c.jsxs)("div",{className:"scores",children:["High Score:",e.highScore]})]})};var l=function(e){var r="./images/"+e.imageUrl;return Object(c.jsxs)("div",{className:"Card",onClick:function(){return e.clickHandler(e)},style:{order:e.placementOrder[e.id-1]},children:[Object(c.jsx)("img",{className:"carImage",src:""+r,alt:"test"}),Object(c.jsx)("div",{className:"carName",children:e.name}),Object(c.jsx)("div",{className:"carName"})]})};var o=function(e){var r=e.carDetails.map((function(r){return Object(c.jsx)(l,{id:r.id,name:r.name,imageUrl:r.img,newPlacementOrder:e.newPlacementOrder,placementOrder:e.placementOrder,clickHandler:e.clickHandler},r.id)}));return Object(c.jsx)("div",{className:"cardArea",children:r})};a(11);var j=function(){var e=Object(n.useState)(0),r=Object(d.a)(e,2),a=r[0],t=r[1],s=Object(n.useState)(0),i=Object(d.a)(s,2),l=i[0],j=i[1],g=Object(n.useState)([]),u=Object(d.a)(g,2),p=u[0],O=u[1],b=Object(n.useState)([1,2,3,4,5,6,7,8,9,10,11,12]),h=Object(d.a)(b,2),v=h[0],x=h[1],f=function(){for(var e,r=[];r.length<12;){var a=(e=12,Math.floor(Math.random()*Math.floor(e)));r.includes(a)||r.push(a)}x(r)},S=function(e){var r=e.id;p.includes(r)?(O([]),t(0)):(p.push(r),t(a+1),a>=l&&j(l+1))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{currentScore:a,highScore:l}),Object(c.jsx)(o,{carDetails:[{name:"Audi R8",img:"r8.jpg",id:"1"},{name:"Chevrolet Corvette",img:"corvette.jpg",id:"2"},{name:"Porsche Boxster",img:"boxster.jpg",id:"3"},{name:"Porsche 911",img:"911.jpg",id:"4"},{name:"Nissan GT-R",img:"gtr.jpg",id:"5"},{name:"Jaguar F-Type",img:"jaguarftype.jpg",id:"6"},{name:"Mercedes GT",img:"mercedesgt.jpg",id:"7"},{name:"Mercedes SL Class",img:"mercedessl.jpg",id:"8"},{name:"Toyota Supra",img:"supra.jpg",id:"9"},{name:"Lexus LC",img:"lexuslc.jpg",id:"10"},{name:"Acura NSX",img:"nsx.jpg",id:"11"},{name:"Porsche Cayman",img:"cayman.jpg",id:"12"}],placementOrder:v,newPlacementOrder:f,addToPickOrder:S,clickHandler:function(e){S(e),f(),console.log(e.id),console.log(p)}})]})};i.a.render(Object(c.jsx)(t.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5768c548.chunk.js.map