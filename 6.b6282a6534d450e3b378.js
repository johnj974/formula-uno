(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return M});var o=n("ofXK"),r=n("tyNb"),a=n("fXoL"),i=n("mqDS");let c=(()=>{class e{constructor(e,t){this.router=e,this.teamService=t,this.receivedTeamArray=[]}ngOnInit(){this.receivedTeamArray=this.teamService.getTeamArray(),this.selectTeam()}toTeams(){this.router.navigate(["/teams"])}selectTeam(){let e=Math.floor(Math.random()*this.receivedTeamArray.length);this.team=this.receivedTeamArray[e]}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(r.c),a.Lb(i.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-team"]],decls:15,vars:2,consts:[[1,"container","py-5"],[1,"row"],[1,"col-lg-6"],[1,"button-container"],[1,"btn","btn-altGold",3,"click"],[1,"text-center"],[1,"img-fluid",3,"src","alt"]],template:function(e,t){1&e&&(a.Ob(0,"section"),a.Ob(1,"div",0),a.Ob(2,"div",1),a.Ob(3,"div",2),a.Ob(4,"div"),a.Ob(5,"h3"),a.mc(6,"10 Teams"),a.Nb(),a.Ob(7,"p"),a.mc(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta sit cum maxime aspernatur voluptatum, labore consectetur! Odio omnis laboriosam rerum quidem suscipit, fugiat sequi! Corporis natus, voluptates officiis beatae cupiditate, numquam iure quisquam asperiores doloremque commodi esse eius nisi! Voluptatem ipsam voluptate numquam in aliquid, soluta vitae facilis quaerat! "),a.Nb(),a.Nb(),a.Ob(9,"div",3),a.Ob(10,"button",4),a.Vb("click",function(){return t.toTeams()}),a.mc(11,"Teams"),a.Nb(),a.Nb(),a.Nb(),a.Ob(12,"div",2),a.Ob(13,"div",5),a.Mb(14,"img",6),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.Ab(14),a.ec("src",t.team.image,a.jc),a.ec("alt",t.team.name))},styles:[".btn-gold[_ngcontent-%COMP%]{background-color:#ff9e00;border-color:#ff9e00;font-size:1.6rem;color:#212529;width:20%}.btn-gold[_ngcontent-%COMP%]:hover{background-color:initial;color:#f8f9fa}.btn-altGold[_ngcontent-%COMP%]{background-color:#212529;border-color:#ff9e00;font-size:1.6rem;color:#ff9e00;width:20%}.btn-altGold[_ngcontent-%COMP%]:hover{background-color:#ff9e00;color:#212529}@media only screen and (max-width:768px){.button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.btn-altGold[_ngcontent-%COMP%], .btn-gold[_ngcontent-%COMP%]{width:50%}}.team-colours[_ngcontent-%COMP%]{background-image:linear-gradient(to top right,red 0 10%,#00f 10% 20%,#ff7b00 20% 30%,#030 30% 40%,#0000be 40% 50%,red 50% 60%,navy 60% 70%,#000 70% 80%,#f8f9fa 80% 90%,#00002e 90% 100%)}.Ferrari[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,red,70%,#640000)}.Williams[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#00f,70%,#f8f9fa)}.McLaren[_ngcontent-%COMP%]{color:#00f;background-image:linear-gradient(90deg,#ff7b00,70%,#00f)}.Aston[_ngcontent-%COMP%]{color:#ff1e7c;background-image:linear-gradient(90deg,#030,90%,#ff1e7c)}.Mercedes[_ngcontent-%COMP%]{color:#13e4af;background-image:linear-gradient(90deg,#000,90%,#d6d6d6)}.Alfa[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,red,70%,#f8f9fa)}.Alpine[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#0000be,70%,#f8f9fa,85%,red)}.Bull[_ngcontent-%COMP%]{color:#fe0;background-image:linear-gradient(90deg,navy,90%,red)}.Haas[_ngcontent-%COMP%]{color:red;background-image:linear-gradient(90deg,#f8f9fa,80%,#00f)}.Alpha[_ngcontent-%COMP%], .AlphaTauri[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#00002e,70%,#f8f9fa)}img[_ngcontent-%COMP%]{max-height:25rem}.row[_ngcontent-%COMP%]{padding:2rem 0}@media only screen and (max-width:992px){.row[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse;padding:0}h3[_ngcontent-%COMP%]{padding-top:2rem}}"]}),e})(),s=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}toTracks(){this.router.navigate(["/tracks"])}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(r.c))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-track"]],decls:14,vars:0,consts:[[1,"race-section"],[1,"container","py-5"],[1,"row"],[1,"col-lg-6"],[1,"team-colours","race"],[1,"button-container"],[1,"btn","btn-gold",3,"click"]],template:function(e,t){1&e&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Mb(4,"div",4),a.Nb(),a.Ob(5,"div",3),a.Ob(6,"div"),a.Ob(7,"h3"),a.mc(8,"F1 Tracks"),a.Nb(),a.Ob(9,"p"),a.mc(10," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta sit cum maxime aspernatur voluptatum, labore consectetur! Odio omnis laboriosam rerum quidem suscipit, fugiat sequi! Corporis natus, voluptates officiis beatae cupiditate, numquam iure quisquam asperiores doloremque commodi esse eius nisi! Voluptatem ipsam voluptate numquam in aliquid, soluta vitae facilis quaerat! "),a.Nb(),a.Nb(),a.Ob(11,"div",5),a.Ob(12,"button",6),a.Vb("click",function(){return t.toTracks()}),a.mc(13,"Tracks"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb())},styles:[".btn-gold[_ngcontent-%COMP%]{background-color:#ff9e00;border-color:#ff9e00;font-size:1.6rem;color:#212529;width:20%}.btn-gold[_ngcontent-%COMP%]:hover{background-color:initial;color:#f8f9fa}.btn-altGold[_ngcontent-%COMP%]{background-color:#212529;border-color:#ff9e00;font-size:1.6rem;color:#ff9e00;width:20%}.btn-altGold[_ngcontent-%COMP%]:hover{background-color:#ff9e00;color:#212529}@media only screen and (max-width:768px){.button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.btn-altGold[_ngcontent-%COMP%], .btn-gold[_ngcontent-%COMP%]{width:50%}}.team-colours[_ngcontent-%COMP%]{background-image:linear-gradient(to top right,red 0 10%,#00f 10% 20%,#ff7b00 20% 30%,#030 30% 40%,#0000be 40% 50%,red 50% 60%,navy 60% 70%,#000 70% 80%,#f8f9fa 80% 90%,#00002e 90% 100%)}.Ferrari[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,red,70%,#640000)}.Williams[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#00f,70%,#f8f9fa)}.McLaren[_ngcontent-%COMP%]{color:#00f;background-image:linear-gradient(90deg,#ff7b00,70%,#00f)}.Aston[_ngcontent-%COMP%]{color:#ff1e7c;background-image:linear-gradient(90deg,#030,90%,#ff1e7c)}.Mercedes[_ngcontent-%COMP%]{color:#13e4af;background-image:linear-gradient(90deg,#000,90%,#d6d6d6)}.Alfa[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,red,70%,#f8f9fa)}.Alpine[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#0000be,70%,#f8f9fa,85%,red)}.Bull[_ngcontent-%COMP%]{color:#fe0;background-image:linear-gradient(90deg,navy,90%,red)}.Haas[_ngcontent-%COMP%]{color:red;background-image:linear-gradient(90deg,#f8f9fa,80%,#00f)}.Alpha[_ngcontent-%COMP%], .AlphaTauri[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#00002e,70%,#f8f9fa)}.race[_ngcontent-%COMP%]{height:25rem}.row[_ngcontent-%COMP%]{padding:2rem 0}.race-section[_ngcontent-%COMP%]{background-color:#212529;color:#f8f9fa}@media only screen and (max-width:992px){.row[_ngcontent-%COMP%]{padding:0}h3[_ngcontent-%COMP%]{padding-top:2rem}}"]}),e})();var l=n("BkwK");function d(e,t){if(1&e&&(a.Ob(0,"tr"),a.Ob(1,"th",10),a.mc(2),a.Nb(),a.Ob(3,"td"),a.mc(4),a.Nb(),a.Ob(5,"td"),a.mc(6),a.Nb(),a.Ob(7,"td"),a.mc(8),a.Nb(),a.Nb()),2&e){const e=a.Xb(),t=e.index,n=e.$implicit;a.Ab(2),a.nc(t+1),a.Ab(2),a.pc(" ",n.Driver.givenName," ",n.Driver.familyName," "),a.Ab(2),a.nc(n.number),a.Ab(2),a.nc(n.points)}}function b(e,t){if(1&e&&(a.Ob(0,"tbody"),a.lc(1,d,9,5,"tr",9),a.Nb()),2&e){const e=t.index;a.Ab(1),a.dc("ngIf",e<3)}}let u=(()=>{class e{constructor(e,t){this.router=e,this.resultsService=t,this.raceName="",this.round="",this.resultsArray=[]}ngOnInit(){this.resultsService.getResult().subscribe(e=>{this.results=e,this.raceName=this.results.MRData.RaceTable.Races[0].raceName,this.round=this.results.MRData.RaceTable.Races[0].round,this.resultsArray=this.results.MRData.RaceTable.Races[0].Results})}toResults(){this.router.navigate(["/results"])}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(r.c),a.Lb(l.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-result"]],decls:30,vars:3,consts:[[1,"container","py-5"],[1,"row"],[1,"col-lg-6"],[1,"winner"],[1,"button-container"],[1,"btn","btn-altGold",3,"click"],[1,"table","table-dark","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"]],template:function(e,t){1&e&&(a.Ob(0,"section"),a.Ob(1,"div",0),a.Ob(2,"div",1),a.Ob(3,"div",2),a.Ob(4,"div"),a.Ob(5,"h3",3),a.mc(6,"Only One Winner"),a.Nb(),a.Ob(7,"p"),a.mc(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta sit cum maxime aspernatur voluptatum, labore consectetur! Odio omnis laboriosam rerum quidem suscipit, fugiat sequi! Corporis natus, voluptates officiis beatae cupiditate, numquam iure quisquam asperiores doloremque commodi esse eius nisi! Voluptatem ipsam voluptate numquam in aliquid, soluta vitae facilis quaerat! "),a.Nb(),a.Nb(),a.Ob(9,"div",4),a.Ob(10,"button",5),a.Vb("click",function(){return t.toResults()}),a.mc(11,"Results"),a.Nb(),a.Nb(),a.Nb(),a.Ob(12,"div",2),a.Ob(13,"h3"),a.mc(14),a.Nb(),a.Ob(15,"h5"),a.mc(16),a.Nb(),a.Ob(17,"div"),a.Ob(18,"table",6),a.Ob(19,"thead"),a.Ob(20,"tr"),a.Ob(21,"th",7),a.mc(22,"Position"),a.Nb(),a.Ob(23,"th",7),a.mc(24,"Driver"),a.Nb(),a.Ob(25,"th",7),a.mc(26,"Number"),a.Nb(),a.Ob(27,"th",7),a.mc(28,"Points"),a.Nb(),a.Nb(),a.Nb(),a.lc(29,b,2,1,"tbody",8),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.Ab(14),a.oc("",t.raceName," Podium"),a.Ab(2),a.oc("",t.round,"nd Race Of The Season"),a.Ab(13),a.dc("ngForOf",t.resultsArray))},directives:[o.i,o.j],styles:[".btn-gold[_ngcontent-%COMP%]{background-color:#ff9e00;border-color:#ff9e00;font-size:1.6rem;color:#212529;width:20%}.btn-gold[_ngcontent-%COMP%]:hover{background-color:initial;color:#f8f9fa}.btn-altGold[_ngcontent-%COMP%]{background-color:#212529;border-color:#ff9e00;font-size:1.6rem;color:#ff9e00;width:20%}.btn-altGold[_ngcontent-%COMP%]:hover{background-color:#ff9e00;color:#212529}@media only screen and (max-width:768px){.button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.btn-altGold[_ngcontent-%COMP%], .btn-gold[_ngcontent-%COMP%]{width:50%}}button[_ngcontent-%COMP%]{font-size:1.6rem}.row[_ngcontent-%COMP%]{padding:2rem 0}@media only screen and (max-width:992px){.row[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse;padding:0}.winner[_ngcontent-%COMP%]{padding-top:2rem}}"]}),e})();function m(e,t){if(1&e&&(a.Ob(0,"div",11),a.Mb(1,"img",12),a.Nb()),2&e){const e=t.$implicit;a.Ab(1),a.ec("src",e.image,a.jc),a.ec("alt",e.name)}}let g=(()=>{class e{constructor(e,t){this.router=e,this.teamService=t,this.receivedArray=[]}ngOnInit(){this.receivedArray=this.teamService.getTeamArray()}toShop(){this.router.navigate(["/shop"])}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(r.c),a.Lb(i.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-shop"]],decls:19,vars:1,consts:[[1,"shop-section"],[1,"container","py-5"],[1,"row"],[1,"col-lg-6"],["id","carousel","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/images/ferrari-team.jpg","alt","ferrari-team",1,"d-block","w-100","img-fluid"],["class","carousel-item",4,"ngFor","ngForOf"],[1,"button-container"],[1,"btn","btn-gold",3,"click"],[1,"carousel-item"],[1,"d-block","w-100","img-fluid",3,"src","alt"]],template:function(e,t){1&e&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Ob(4,"div"),a.Ob(5,"div",4),a.Ob(6,"div",5),a.Ob(7,"div",6),a.Mb(8,"img",7),a.Nb(),a.lc(9,m,2,2,"div",8),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(10,"div",3),a.Ob(11,"div"),a.Ob(12,"h3"),a.mc(13,"Team Merchandice"),a.Nb(),a.Ob(14,"p"),a.mc(15," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta sit cum maxime aspernatur voluptatum, labore consectetur! Odio omnis laboriosam rerum quidem suscipit, fugiat sequi! Corporis natus, voluptates officiis beatae cupiditate, numquam iure quisquam asperiores doloremque commodi esse eius nisi! Voluptatem ipsam voluptate numquam in aliquid, soluta vitae facilis quaerat!Corporis natus, voluptates officiis beatae cupiditate, numquam iure quisquam asperiores doloremque commodi esse eius nisi! Voluptatem ipsam voluptate numquam in aliquid "),a.Nb(),a.Nb(),a.Ob(16,"div",9),a.Ob(17,"button",10),a.Vb("click",function(){return t.toShop()}),a.mc(18,"Shop"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.Ab(9),a.dc("ngForOf",t.receivedArray))},directives:[o.i],styles:[".btn-gold[_ngcontent-%COMP%]{background-color:#ff9e00;border-color:#ff9e00;font-size:1.6rem;color:#212529;width:20%}.btn-gold[_ngcontent-%COMP%]:hover{background-color:initial;color:#f8f9fa}.btn-altGold[_ngcontent-%COMP%]{background-color:#212529;border-color:#ff9e00;font-size:1.6rem;color:#ff9e00;width:20%}.btn-altGold[_ngcontent-%COMP%]:hover{background-color:#ff9e00;color:#212529}@media only screen and (max-width:768px){.button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.btn-altGold[_ngcontent-%COMP%], .btn-gold[_ngcontent-%COMP%]{width:50%}}.shop-section[_ngcontent-%COMP%]{background-color:#212529;color:#f8f9fa}.row[_ngcontent-%COMP%]{padding:2rem 0}img[_ngcontent-%COMP%]{max-height:30rem}@media (-webkit-transform-3d),(transform-3d){.active.carousel-item-left[_ngcontent-%COMP%], .carousel-item-prev[_ngcontent-%COMP%]:not(.carousel-item-right){transform:translateX(100%)}.active.carousel-item-right[_ngcontent-%COMP%], .carousel-item-next[_ngcontent-%COMP%]:not(.carousel-item-left){transform:translateX(-100%)}}@media only screen and (max-width:992px){.row[_ngcontent-%COMP%]{padding:0}h3[_ngcontent-%COMP%]{padding-top:2rem}}"]}),e})();var f=n("W/DX");let p=(()=>{class e{constructor(e,t){this.resultsService=e,this.router=t,this.calenderArray=[],this.receivedRace={raceName:"brazil",Circuit:{circuitName:"bra"},round:"4",date:"44444",time:"2222"}}randomRace(e){let t=Math.floor(Math.random()*e.length);this.receivedRace=e[t]}ngOnInit(){this.resultsService.getRaceCalender().subscribe(e=>{this.calender=e,this.calenderArray=this.calender.MRData.RaceTable.Races,this.randomRace(this.calenderArray)})}toRaces(){this.router.navigate(["races"])}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(l.a),a.Lb(r.c))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-calender"]],decls:29,vars:10,consts:[[1,"contact-section"],[1,"container","py-5"],[1,"row"],[1,"col-lg-6"],[1,"season"],[1,"button-container"],[1,"btn","btn-altGold",3,"click"],[1,"race-info"],[1,"py-5"]],template:function(e,t){1&e&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Ob(4,"div"),a.Ob(5,"h3",4),a.mc(6,"2021 Season"),a.Nb(),a.Ob(7,"p"),a.mc(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta sit cum maxime aspernatur voluptatum, labore consectetur! Odio omnis laboriosam rerum quidem suscipit, fugiat sequi! Corporis natus, voluptates officiis beatae cupiditate, numquam iure quisquam asperiores doloremque commodi esse eius nisi! Voluptatem ipsam voluptate numquam in aliquid, soluta vitae facilis quaerat!fugiat sequi! "),a.Nb(),a.Nb(),a.Ob(9,"div",5),a.Ob(10,"button",6),a.Vb("click",function(){return t.toRaces()}),a.mc(11,"Races"),a.Nb(),a.Nb(),a.Nb(),a.Ob(12,"div",3),a.Ob(13,"h3"),a.mc(14,"Feature Races"),a.Nb(),a.Ob(15,"div",7),a.Ob(16,"div",8),a.Ob(17,"h3"),a.mc(18),a.Nb(),a.Ob(19,"h4"),a.mc(20),a.Nb(),a.Ob(21,"h4"),a.mc(22),a.Nb(),a.Ob(23,"h4"),a.mc(24),a.Yb(25,"date"),a.Nb(),a.Ob(26,"h4"),a.mc(27),a.Yb(28,"time"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.Ab(18),a.nc(t.receivedRace.raceName),a.Ab(2),a.nc(t.receivedRace.Circuit.circuitName),a.Ab(2),a.oc("Round ",t.receivedRace.round,""),a.Ab(2),a.nc(a.ac(25,5,t.receivedRace.date,"longDate")),a.Ab(3),a.oc("",a.Zb(28,8,t.receivedRace.time)," GMT"))},pipes:[o.d,f.a],styles:[".btn-gold[_ngcontent-%COMP%]{background-color:#ff9e00;border-color:#ff9e00;font-size:1.6rem;color:#212529;width:20%}.btn-gold[_ngcontent-%COMP%]:hover{background-color:initial;color:#f8f9fa}.btn-altGold[_ngcontent-%COMP%]{background-color:#212529;border-color:#ff9e00;font-size:1.6rem;color:#ff9e00;width:20%}.btn-altGold[_ngcontent-%COMP%]:hover{background-color:#ff9e00;color:#212529}@media only screen and (max-width:768px){.button-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.btn-altGold[_ngcontent-%COMP%], .btn-gold[_ngcontent-%COMP%]{width:50%}}.race-info[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#212529;color:#f8f9fa}.row[_ngcontent-%COMP%]{padding:2rem 0}@media only screen and (max-width:992px){.row[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse;padding:0}.season[_ngcontent-%COMP%]{padding-top:2rem}}"]}),e})();const O=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-main-home"]],decls:5,vars:0,template:function(e,t){1&e&&(a.Mb(0,"app-team"),a.Mb(1,"app-track"),a.Mb(2,"app-result"),a.Mb(3,"app-shop"),a.Mb(4,"app-calender"))},directives:[c,s,u,g,p],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[r.f.forChild(O)],r.f]}),e})();var v=n("PCNd");let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[o.b,h,v.a]]}),e})()}}]);