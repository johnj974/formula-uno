(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ryVg:function(t,e,n){"use strict";n.r(e),n.d(e,"TrackModule",function(){return f});var c=n("ofXK"),i=n("tyNb"),a=n("fXoL");class r{constructor(t,e,n,c,i,a,r,o,s,g,l,b,d,f,u){this.name=t,this.type=e,this.location=n,this.distance=c,this.laps=i,this.latitude=a,this.longitude=r,this.appearences=o,this.direction=s,this.turns=g,this.opened=l,this.capacity=b,this.grade=d,this.image=f,this.flag=u}}let o=(()=>{class t{constructor(){this.trackServiceArray=[new r("Albert Park","Street circuit","Melbourne, Austrailia","5.28km",58,-37.849722,144.968333,24,"Clockwise",14,"20 November 1953",8e4,1,"assets/images/Australia_Circuit.png","assets/images/australia.gif"),new r("Autodroma Nazionale di Monza","Race Circuit","Monza, Italy","5.793km",53,45.620556,9.289444,70,"Clockwise",11,"3 September 1922",118865,1,"assets/images/monza.png","assets/images/italy.gif"),new r("Circuit de Monaco","Street Circuit","Monte Carlo, Monaco","3.337km",78,43.734722,7.420556,77,"Clockwise",19," 1929",37e3,1,"assets/images/Monoco_Circuit.png","assets/images/monaco.gif"),new r("Circuit Gilles Villeneuve","Street Circuit","Montreal, Canada","4.361",70,45.500578,-73.522461,56,"Clockwise",14," 1961",1e5,1,"assets/images/Canada_Circuit.png","assets/images/canada.gif"),new r("Shanghai International Circuit","Race Circuit","Shanghai, China","5.451",56,31.338889,121.219722,16,"Clockwise",16," 2004",2e5,1,"assets/images/chinese_circuit.png","assets/images/china.gif"),new r("Sochi Autodrom","Race Circuit","Sochi, Russia","5.848",53,43.410278,39.968271,9,"Clockwise",18,"21 September 2014",55e3,1,"assets/images/Russia_Circuit.png","assets/images/russia.gif"),new r("Circuit Paul Ricard","Race Circuit","Le Castellet, France","5.842",53,43.250556,5.791667,16,"Clockwise",15,"19 April 1970",9e4,1,"assets/images/france_circuit.png","assets/images/france.gif"),new r("Yas Marina Circuit","Race Circuit","Abu Dhabi, UAE","5.554",55,24.467222,54.603056,12,"Anti-Clockwise",21,"7 October 2009",6e4,1,"assets/images/Abu_Dhabi_Circuit.png","assets/images/uae.gif")]}getTrackArray(){return this.trackServiceArray.slice()}onGetTrack(t){return this.trackServiceArray[t]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function s(t,e){if(1&t){const t=a.Pb();a.Ob(0,"div",4),a.Ob(1,"h4",5),a.Ob(2,"a",6),a.Vb("click",function(){a.ic(t);const n=e.index,c=e.$implicit;return a.Xb().toTrackBio(n,c.name)}),a.mc(3),a.Nb(),a.Ob(4,"span"),a.Mb(5,"img",7),a.Nb(),a.Nb(),a.Nb()}if(2&t){const t=e.$implicit;a.Ab(3),a.oc(" ",t.name," "),a.Ab(2),a.ec("src",t.flag,a.jc)}}let g=(()=>{class t{constructor(t,e,n){this.trackService=t,this.router=e,this.route=n}ngOnInit(){this.trackInfoArray=this.trackService.getTrackArray()}toTrackBio(t,e){let n=e.replace(/ /g,"");this.router.navigate(["/tracks",t,n])}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o),a.Lb(i.c),a.Lb(i.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-track-info"]],decls:4,vars:1,consts:[[1,"team-colours"],[1,"container"],[1,"row","py-5"],["class","col-lg-6 text-center py-4",4,"ngFor","ngForOf"],[1,"col-lg-6","text-center","py-4"],[1,"py-4","clearfix"],[3,"click"],["alt","",3,"src"]],template:function(t,e){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.lc(3,s,6,2,"div",3),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.Ab(3),a.dc("ngForOf",e.trackInfoArray))},directives:[c.i],styles:['.team-colours[_ngcontent-%COMP%]{background-image:linear-gradient(to top right,red 0 10%,#00f 10% 20%,#ff7b00 20% 30%,#030 30% 40%,#0000be 40% 50%,red 50% 60%,navy 60% 70%,#000 70% 80%,#f8f9fa 80% 90%,#00002e 90% 100%)}.Ferrari[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,red,70%,#640000)}.Williams[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#00f,70%,#f8f9fa)}.McLaren[_ngcontent-%COMP%]{color:#00f;background-image:linear-gradient(90deg,#ff7b00,70%,#00f)}.Aston[_ngcontent-%COMP%]{color:#ff1e7c;background-image:linear-gradient(90deg,#030,90%,#ff1e7c)}.Mercedes[_ngcontent-%COMP%]{color:#13e4af;background-image:linear-gradient(90deg,#000,90%,#d6d6d6)}.Alfa[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,red,70%,#f8f9fa)}.Alpine[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#0000be,70%,#f8f9fa,85%,red)}.Bull[_ngcontent-%COMP%]{color:#fe0;background-image:linear-gradient(90deg,navy,90%,red)}.Haas[_ngcontent-%COMP%]{color:red;background-image:linear-gradient(90deg,#f8f9fa,80%,#00f)}.Alpha[_ngcontent-%COMP%], .AlphaTauri[_ngcontent-%COMP%]{color:#f8f9fa;background-image:linear-gradient(90deg,#00002e,70%,#f8f9fa)}h4[_ngcontent-%COMP%]{border:1px solid #ff9e00;color:#ff9e00;background-color:#212529}h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:right;padding-right:1rem}h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:100px}h4[_ngcontent-%COMP%]   .clearfix[_ngcontent-%COMP%]:after{content:"";clear:both;display:block}@media only screen and (max-width:600px){span[_ngcontent-%COMP%]{display:none}}']}),t})();function l(t,e){if(1&t){const t=a.Pb();a.Ob(0,"ul"),a.Ob(1,"a",12),a.Vb("click",function(){a.ic(t);const n=e.index,c=e.$implicit;return a.Xb().onTrackChange(n,c.name)}),a.Ob(2,"li"),a.mc(3),a.Nb(),a.Nb(),a.Nb()}if(2&t){const t=e.$implicit;a.Ab(3),a.nc(t.name)}}const b=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-main-track"]],decls:1,vars:0,template:function(t,e){1&t&&a.Mb(0,"app-track-info")},directives:[g],styles:[""]}),t})()},{path:":id/:trackName",component:(()=>{class t{constructor(t,e,n){this.trackService=t,this.route=e,this.router=n,this.trackList=[]}ngOnInit(){this.trackSubscription=this.route.params.subscribe(t=>{this.trackId=+t.id,this.track=this.trackService.onGetTrack(this.trackId)}),this.trackList=this.trackService.getTrackArray()}onTrackChange(t,e){let n=e.replace(/ /g,"");this.router.navigate(["tracks",t,n])}ngOnDestroy(){this.trackSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o),a.Lb(i.a),a.Lb(i.c))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-track-bio"]],decls:34,vars:13,consts:[[1,"container-fluid"],[1,"row","pt-2"],[1,"col","track-link"],[4,"ngFor","ngForOf"],[1,"container","py-5"],[1,"row","track-display"],[1,"col-lg-6","track-image"],[1,"img-fluid",3,"src","alt"],[1,"col-lg-6","track-info"],[1,"row","track-header"],[1,"col"],[1,"row"],[3,"click"]],template:function(t,e){1&t&&(a.Ob(0,"section"),a.Ob(1,"div",0),a.Ob(2,"div",1),a.Ob(3,"div",2),a.lc(4,l,4,1,"ul",3),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"div",4),a.Ob(6,"div",5),a.Ob(7,"div",6),a.Mb(8,"img",7),a.Nb(),a.Ob(9,"div",8),a.Ob(10,"div",9),a.Ob(11,"div",10),a.Ob(12,"h3"),a.mc(13),a.Nb(),a.Ob(14,"h5"),a.mc(15),a.Nb(),a.Nb(),a.Nb(),a.Ob(16,"div",11),a.Ob(17,"div",10),a.Ob(18,"p"),a.mc(19),a.Nb(),a.Ob(20,"p"),a.mc(21),a.Nb(),a.Ob(22,"p"),a.mc(23),a.Nb(),a.Ob(24,"p"),a.mc(25),a.Nb(),a.Ob(26,"p"),a.mc(27),a.Nb(),a.Ob(28,"p"),a.mc(29),a.Nb(),a.Ob(30,"p"),a.mc(31),a.Nb(),a.Ob(32,"p"),a.mc(33),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.Ab(4),a.dc("ngForOf",e.trackList),a.Ab(4),a.ec("src",e.track.image,a.jc),a.ec("alt",e.track.name),a.Ab(5),a.nc(e.track.name),a.Ab(2),a.nc(e.track.location),a.Ab(4),a.oc("Track Length: ",e.track.distance,""),a.Ab(2),a.oc("Laps: ",e.track.laps,""),a.Ab(2),a.oc("Type: ",e.track.type,""),a.Ab(2),a.oc("Corners: ",e.track.turns,""),a.Ab(2),a.oc("Direction: ",e.track.direction,""),a.Ab(2),a.oc("Opened: ",e.track.opened,""),a.Ab(2),a.oc("Capacity: ",e.track.capacity,""),a.Ab(2),a.oc("FIA Grade: ",e.track.grade,""))},directives:[c.i],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#212529;border-bottom:2px solid #ff9e00}.track-display[_ngcontent-%COMP%]{padding:2rem 0}.track-image[_ngcontent-%COMP%]{border-bottom:2px solid #212529}.track-info[_ngcontent-%COMP%]{border-left:2px solid #212529}.track-header[_ngcontent-%COMP%]{border-bottom:2px solid #212529}.track-link[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly}.track-link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:2rem}.track-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 auto;list-style:none}.track-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#ff9e00}.track-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media only screen and (max-width:992px){.track-link[_ngcontent-%COMP%]{flex-direction:column}.track-info[_ngcontent-%COMP%]{border:none}}@media only screen and (max-width:600px){.track-display[_ngcontent-%COMP%]{padding:0}}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({imports:[[i.f.forChild(b)],i.f]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({imports:[[c.b,d]]}),t})()}}]);