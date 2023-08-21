"use strict";(self.webpackChunkcreativealigner_angular=self.webpackChunkcreativealigner_angular||[]).push([[608],{2608:(H,m,g)=>{g.r(m),g.d(m,{UserAuthModule:()=>W});var d=g(9808),o=g(2382),p=g(4576),e=g(5e3),u=g(7258),l=g(6609);function f(r,i){1&r&&(e.TgZ(0,"span"),e._uU(1," If you forgot your password click "),e.TgZ(2,"a",22),e._uU(3,"here"),e.qZA(),e.qZA())}function _(r,i){if(1&r&&(e.TgZ(0,"p"),e.TgZ(1,"span",21),e._uU(2),e.qZA(),e._UZ(3,"br"),e.YNc(4,f,4,0,"span",16),e.qZA()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.errorMessage),e.xp6(2),e.Q6J("ngIf",t.invalidPassword)}}const v=function(){return{"background-image":"url(assets/images/img6.jpg)"}};let T=(()=>{class r{constructor(t,n,s,a){this.api=t,this.router=n,this.route=s,this.builder=a,this.loading=!1,this.loginFailed=!1,this.errorMessage="",this.invalidPassword=!1}ngOnInit(){this.loginForm=this.builder.group({userName:["",[o.kI.required,o.kI.email]],userPassword:["",[o.kI.required,o.kI.minLength(6)]]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/dashboard"}loginClick(){let t=new p.Fi;t.Email=this.loginForm.value.userName,t.Password=this.loginForm.value.userPassword,this.loading=!0,this.loginFailed=!1,this.api.doLogin(t).subscribe(n=>{this.loading=!1,this.invalidPassword=!1,n.Success?(this.api.parseUserInfo(n),localStorage.setItem("isLoggedin","true"),this.api.isMemeber()?this.router.navigate(["/admin"]):this.router.navigate(["/dashboard"])):(this.loginFailed=!0,this.errorMessage=n.Message,n.Op&&1==n.Op&&(this.invalidPassword=!0))},n=>{this.loading=!1,this.loginFailed=!0,this.errorMessage="Connection to the server is not available",console.debug(n)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.O),e.Y36(l.F0),e.Y36(l.gz),e.Y36(o.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login-page"]],decls:30,vars:7,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"creativealigner-logo","d-block","mb-2"],[1,"text-muted","fw-normal","mb-4"],[1,"forms-sample",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","placeholder","Email","formControlName","userName",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","autocomplete","current-password","placeholder","Password","formControlName","userPassword",1,"form-control"],[4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[2,"white-space","nowrap"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["routerLink","/auth/register",1,"d-block","mt-3","text-muted"],[1,"text-danger","mt-1"],["routerLink","/auth/forgot",1,"mt-3","text-muted"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._uU(9,"Creative Aligner"),e.qZA(),e.TgZ(10,"h5",9),e._uU(11,"Welcome back! Log in to your account."),e.qZA(),e.TgZ(12,"form",10),e.NdJ("ngSubmit",function(){return n.loginClick()}),e.TgZ(13,"div",11),e.TgZ(14,"label",12),e._uU(15,"Email address"),e.qZA(),e._UZ(16,"input",13),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"label",14),e._uU(19,"Password"),e.qZA(),e._UZ(20,"input",15),e.qZA(),e.TgZ(21,"div",11),e.YNc(22,_,5,2,"p",16),e.qZA(),e.TgZ(23,"div"),e.TgZ(24,"button",17),e.TgZ(25,"span",18),e._UZ(26,"span",19),e._uU(27," Login "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"a",20),e._uU(29,"Not a user? Become a Provider"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(6,v)),e.xp6(7),e.Q6J("formGroup",n.loginForm),e.xp6(10),e.Q6J("ngIf",n.loginFailed),e.xp6(2),e.Q6J("disabled",n.loginForm.invalid||n.loading),e.xp6(2),e.Udp("visibility",n.loading?"visible":"hidden"))},directives:[d.PC,l.yS,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,d.O5],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),r})();var c=g(9219),b=g(7048),Z=g(7265);const A=["registerForm"];function q(r,i){1&r&&(e.TgZ(0,"p",40),e._uU(1,"Your name is required to register"),e.qZA())}function C(r,i){1&r&&(e.TgZ(0,"p",40),e._uU(1,"A valid email is required to register"),e.qZA())}function y(r,i){1&r&&(e.TgZ(0,"p",40),e._uU(1,"Speciality is required"),e.qZA())}function P(r,i){1&r&&(e.TgZ(0,"p",40),e._uU(1,"Country is required"),e.qZA())}function w(r,i){1&r&&(e.TgZ(0,"p",40),e._uU(1,"Password must be 6 character at least"),e.qZA())}function x(r,i){1&r&&(e.TgZ(0,"p",40),e._uU(1,"Confirm your password here, it must match the password"),e.qZA())}function U(r,i){1&r&&(e.TgZ(0,"span"),e.TgZ(1,"a",42),e._uU(2,"If you forgot your password click here"),e.qZA(),e.qZA())}function M(r,i){if(1&r&&(e.TgZ(0,"p",40),e._uU(1),e._UZ(2,"br"),e.YNc(3,U,3,0,"span",41),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij("",t.message,". "),e.xp6(2),e.Q6J("ngIf",t.alreadyRegistered)}}const I=function(){return{"background-image":"url(assets/images/img6.jpg)"}};let F=(()=>{class r{constructor(t,n){this.api=t,this.router=n,this.user=new c.a4,this.isLoading=!1,this.message="",this.isSubmitted=!1,this.specialities=[{value:"Orthodontist",name:"Orthodontist"},{value:"General Dental Practitioner",name:"General Dental Practitioner"},{value:"Other",name:"Other"}],this.countries=[],this.alreadyRegistered=!1,this.emailRegExp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}ngOnInit(){this.user.CountryID="",this.api.getCountries().subscribe(t=>{let n=[];t.Success&&t.Countries.forEach(s=>{let a=new p.b3;a.load(s),n.push(a)}),this.countries=n},t=>{console.debug(t)})}isValidform(){return this.user&&this.user.Password.length>5&&this.user.Password==this.user.ConfirmPassword}registerClick(){this.isSubmitted=!0,this.alreadyRegistered=!1,this.isValidform()&&this.registerForm.valid&&(this.isLoading=!0,this.message="",this.api.doRegister(this.user.toUser()).subscribe(t=>{this.isLoading=!1,t.Success?this.router.navigate(["/auth/welcome"],{queryParams:{returnUrl:"/"}}):(this.message="Registeration failed: "+t.Message,t.Op&&1==t.Op&&(this.alreadyRegistered=!0),console.debug(t))},t=>{this.isLoading=!1,this.message="Registeration failed: "+t.message,console.debug(t)}))}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.O),e.Y36(l.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-register-page"]],viewQuery:function(t,n){if(1&t&&e.Gf(A,5),2&t){let s;e.iGM(s=e.CRH())&&(n.registerForm=s.first)}},decls:70,vars:26,consts:[[1,"row","w-100","auth-page"],[1,"col-md-8","col-xl-6","mx-auto",2,"margin-top","200px"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"creativealigner-logo","d-block","mb-2"],[1,"text-muted","fw-normal","mb-4"],[1,"forms-sample",3,"ngSubmit"],["registerForm","ngForm"],[1,"mb-3"],["for","exampleInputUsername1",1,"form-label"],["type","text","id","exampleInputUsername1","name","Name","placeholder","First Name","minlength","3","required","",1,"form-control",3,"ngModel","ngModelChange"],["userName","ngModel"],["class","text-danger mt-1",4,"ngIf"],["for","userLastNameId",1,"form-label"],["type","text","id","userLastNameId","name","LastName","placeholder","Last Name",1,"form-control",3,"ngModel","ngModelChange"],["userLastNameId","ngModel"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","placeholder","Email","name","Email","email","","required","",1,"form-control",3,"ngModel","pattern","ngModelChange"],["userEmail","ngModel"],["for","userTelephoneID",1,"form-label"],["type","text","NumbersOnly","","name","Telephone","id","userTelephoneID","placeholder","Telephone number",1,"form-control",3,"ngModel","ngModelChange"],["for","userSpecialityID",1,"form-label"],["id","userSpecialityID","name","Speciality","placeholder","Speciality","bindLabel","name","bindValue","value","required","",3,"items","ngModel","searchable","clearable","ngModelChange"],["userSpecialityID","ngModel"],["for","userCountryID",1,"form-label"],["id","userCountryID","name","CountryID","placeholder","Country","bindLabel","Country","bindValue","ID","required","",3,"items","ngModel","clearable","searchable","ngModelChange"],["userCountryID","ngModel"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","autocomplete","current-password","placeholder","Password","name","Password","minlength","6","required","",1,"form-control",3,"ngModel","ngModelChange"],["userPassword","ngModel"],["type","password","id","exampleInputPassword2","placeholder","Confirm Password","name","ConfirmPassword",1,"form-control",3,"ngModel","ngModelChange"],["passwordConfirm","ngModel"],["type","submit",1,"btn","btn-primary","me-2","mb-2","mb-md-0"],[2,"white-space","nowrap"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["routerLink","/auth/login",1,"d-block","mt-3","text-muted"],[1,"text-danger","mt-1"],[4,"ngIf"],["routerLink","/auth/forgot",1,"mt-3","text-muted"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._uU(9,"Creative Aligner"),e.qZA(),e.TgZ(10,"h5",9),e._uU(11,"Join our team"),e.qZA(),e.TgZ(12,"form",10,11),e.NdJ("ngSubmit",function(){return n.registerClick()}),e.TgZ(14,"div",12),e.TgZ(15,"label",13),e._uU(16,"First Name"),e.qZA(),e.TgZ(17,"input",14,15),e.NdJ("ngModelChange",function(a){return n.user.Name=a}),e.qZA(),e.YNc(19,q,2,0,"p",16),e.qZA(),e.TgZ(20,"div",12),e.TgZ(21,"label",17),e._uU(22,"Last Name"),e.qZA(),e.TgZ(23,"input",18,19),e.NdJ("ngModelChange",function(a){return n.user.LastName=a}),e.qZA(),e.qZA(),e.TgZ(25,"div",12),e.TgZ(26,"label",20),e._uU(27,"Email address"),e.qZA(),e.TgZ(28,"input",21,22),e.NdJ("ngModelChange",function(a){return n.user.Email=a}),e.qZA(),e.YNc(30,C,2,0,"p",16),e.qZA(),e.TgZ(31,"div",12),e.TgZ(32,"label",23),e._uU(33,"Telephone"),e.qZA(),e.TgZ(34,"input",24),e.NdJ("ngModelChange",function(a){return n.user.Telephone=a}),e.qZA(),e.qZA(),e.TgZ(35,"div",12),e.TgZ(36,"label",25),e._uU(37,"Speciality"),e.qZA(),e.TgZ(38,"div",12),e.TgZ(39,"ng-select",26,27),e.NdJ("ngModelChange",function(a){return n.user.Speciality=a}),e.qZA(),e.YNc(41,y,2,0,"p",16),e.qZA(),e.qZA(),e.TgZ(42,"div",12),e.TgZ(43,"label",28),e._uU(44,"Country"),e.qZA(),e.TgZ(45,"div",12),e.TgZ(46,"ng-select",29,30),e.NdJ("ngModelChange",function(a){return n.user.CountryID=a}),e.qZA(),e.YNc(48,P,2,0,"p",16),e.qZA(),e.qZA(),e.TgZ(49,"div",12),e.TgZ(50,"label",31),e._uU(51,"Password"),e.qZA(),e.TgZ(52,"input",32,33),e.NdJ("ngModelChange",function(a){return n.user.Password=a}),e.qZA(),e.YNc(54,w,2,0,"p",16),e.qZA(),e.TgZ(55,"div",12),e.TgZ(56,"label",31),e._uU(57,"Confirm Password"),e.qZA(),e.TgZ(58,"input",34,35),e.NdJ("ngModelChange",function(a){return n.user.ConfirmPassword=a}),e.qZA(),e.YNc(60,x,2,0,"p",16),e.qZA(),e.TgZ(61,"div",12),e.YNc(62,M,4,2,"p",16),e.qZA(),e.TgZ(63,"div"),e.TgZ(64,"button",36),e.TgZ(65,"span",37),e._UZ(66,"span",38),e._uU(67," Become a Provider "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(68,"a",39),e._uU(69,"Already a user? Sign in"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const s=e.MAs(18),a=e.MAs(29),X=e.MAs(40),B=e.MAs(47),h=e.MAs(53),V=e.MAs(59);e.xp6(5),e.Q6J("ngStyle",e.DdM(25,I)),e.xp6(12),e.Q6J("ngModel",n.user.Name),e.xp6(2),e.Q6J("ngIf",s.invalid&&n.isSubmitted),e.xp6(4),e.Q6J("ngModel",n.user.LastName),e.xp6(5),e.Q6J("ngModel",n.user.Email)("pattern",n.emailRegExp),e.xp6(2),e.Q6J("ngIf",a.invalid&&n.isSubmitted),e.xp6(4),e.Q6J("ngModel",n.user.Telephone),e.xp6(5),e.Q6J("items",n.specialities)("ngModel",n.user.Speciality)("searchable",!1)("clearable",!1),e.xp6(2),e.Q6J("ngIf",X.invalid&&n.isSubmitted),e.xp6(5),e.Q6J("items",n.countries)("ngModel",n.user.CountryID)("clearable",!1)("searchable",!1),e.xp6(2),e.Q6J("ngIf",B.invalid&&n.isSubmitted),e.xp6(4),e.Q6J("ngModel",n.user.Password),e.xp6(2),e.Q6J("ngIf",h.invalid&&n.isSubmitted),e.xp6(4),e.Q6J("ngModel",n.user.ConfirmPassword),e.xp6(2),e.Q6J("ngIf",V.value!=h.value&&n.isSubmitted),e.xp6(2),e.Q6J("ngIf",n.message),e.xp6(4),e.Udp("visibility",n.isLoading?"visible":"hidden")}},directives:[d.PC,l.yS,o._Y,o.JL,o.F,o.Fj,o.wO,o.Q7,o.JJ,o.On,d.O5,o.on,o.c5,b.G,Z.w9],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),r})(),J=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-userauth"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},directives:[l.lC],encapsulation:2}),r})();var S=g(520),N=g(7038),k=g(43);function R(r,i){if(1&r&&(e.TgZ(0,"p"),e.TgZ(1,"span",18),e._uU(2),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.errorMessage)}}const L=function(){return{"background-image":"url(assets/images/img6.jpg)"}};let O=(()=>{class r{constructor(t,n,s,a){this.api=t,this.router=n,this.route=s,this.builder=a,this.loading=!1,this.loginFailed=!1,this.errorMessage="",this.current=new c.tq}ngOnInit(){this.loginForm=this.builder.group({userPassword:["",[o.kI.required,o.kI.minLength(6)]]}),this.current.ID=this.route.snapshot.queryParams.id||"error"}resetClick(){this.current.Password=this.loginForm.value.userPassword,this.loading=!0,this.loginFailed=!1,this.api.doResetPassword(this.current).subscribe(t=>{this.loading=!1,t.Success?this.router.navigate(["/auth/login"]):(this.loginFailed=!0,this.errorMessage=t.Message)},t=>{this.loading=!1,this.loginFailed=!0,this.errorMessage="Connection to the server is not available",console.debug(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.O),e.Y36(l.F0),e.Y36(l.gz),e.Y36(o.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-reset-password-page"]],decls:24,vars:7,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"creativealigner-logo","d-block","mb-2"],[1,"text-muted","fw-normal","mb-4"],[1,"forms-sample",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","autocomplete","current-password","placeholder","Password","formControlName","userPassword",1,"form-control"],[4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[2,"white-space","nowrap"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"text-danger","mt-1"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._uU(9,"Creative Aligner"),e.qZA(),e.TgZ(10,"h5",9),e._uU(11,"Reset Passowrd"),e.qZA(),e.TgZ(12,"form",10),e.NdJ("ngSubmit",function(){return n.resetClick()}),e.TgZ(13,"div",11),e.TgZ(14,"label",12),e._uU(15,"Password"),e.qZA(),e._UZ(16,"input",13),e.qZA(),e.TgZ(17,"div",11),e.YNc(18,R,3,1,"p",14),e.qZA(),e.TgZ(19,"div"),e.TgZ(20,"button",15),e.TgZ(21,"span",16),e._UZ(22,"span",17),e._uU(23," Reset "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(6,L)),e.xp6(7),e.Q6J("formGroup",n.loginForm),e.xp6(6),e.Q6J("ngIf",n.loginFailed),e.xp6(2),e.Q6J("disabled",n.loginForm.invalid||n.loading),e.xp6(2),e.Udp("visibility",n.loading?"visible":"hidden"))},directives:[d.PC,l.yS,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,d.O5],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),r})();function Q(r,i){if(1&r&&(e.TgZ(0,"p"),e.TgZ(1,"span",18),e._uU(2),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.errorMessage)}}const Y=function(){return{"background-image":"url(assets/images/img6.jpg)"}};let E=(()=>{class r{constructor(t,n,s,a){this.api=t,this.router=n,this.route=s,this.builder=a,this.loading=!1,this.loginFailed=!1,this.errorMessage="",this.loginForm=this.builder.group({userName:["",[o.kI.required,o.kI.email]]})}ngOnInit(){}resetClick(){this.loading=!0,this.loginFailed=!1,this.api.sendResetEmail(this.loginForm.value.userName).subscribe(t=>{this.loading=!1,t.Success?this.router.navigate(["/auth/emailsent"]):(this.loginFailed=!0,this.errorMessage=t.Message)},t=>{this.loading=!1,this.loginFailed=!0,this.errorMessage="Connection to the server is not available",console.debug(t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u.O),e.Y36(l.F0),e.Y36(l.gz),e.Y36(o.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-forgot-password-page"]],decls:24,vars:7,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],["routerLink",".",1,"creativealigner-logo","d-block","mb-2"],[1,"text-muted","fw-normal","mb-4"],[1,"forms-sample",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","placeholder","Email","formControlName","userName",1,"form-control"],[4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[2,"white-space","nowrap"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"text-danger","mt-1"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"a",8),e._uU(9,"Creative Aligner"),e.qZA(),e.TgZ(10,"h5",9),e._uU(11,"Reset Password"),e.qZA(),e.TgZ(12,"form",10),e.NdJ("ngSubmit",function(){return n.resetClick()}),e.TgZ(13,"div",11),e.TgZ(14,"label",12),e._uU(15,"Enter email address to send reset email"),e.qZA(),e._UZ(16,"input",13),e.qZA(),e.TgZ(17,"div",11),e.YNc(18,Q,3,1,"p",14),e.qZA(),e.TgZ(19,"div"),e.TgZ(20,"button",15),e.TgZ(21,"span",16),e._UZ(22,"span",17),e._uU(23," Send "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(6,Y)),e.xp6(7),e.Q6J("formGroup",n.loginForm),e.xp6(6),e.Q6J("ngIf",n.loginFailed),e.xp6(2),e.Q6J("disabled",n.loginForm.invalid||n.loading),e.xp6(2),e.Udp("visibility",n.loading?"visible":"hidden"))},directives:[d.PC,l.yS,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,d.O5],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),r})();const D=function(){return{"background-image":"url(assets/images/img6.jpg)"}},G=function(){return{"background-image":"url(assets/images/img6.jpg)"}},z=[{path:"",component:J,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:T},{path:"register",component:F},{path:"welcome",component:(()=>{class r{constructor(t,n){this.router=t,this.route=n}ngOnInit(){}continueClick(){this.router.navigate(["/auth/login"],{queryParams:{returnUrl:"/"}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.F0),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-welcome-page"]],decls:20,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],[1,"text-center"],["data-feather","check-circle","appFeatherIcon","",1,"text-success","mt-4","mb-2","icon-xxl"],["routerLink",".",1,"creativealigner-logo","d-block","mb-2"],[1,"d-flex","justify-content-center","mt-2"],["type","button",1,"btn","btn-success",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e._UZ(9,"i",9),e.TgZ(10,"a",10),e._uU(11,"Welcome to Creative Aligner"),e.qZA(),e.TgZ(12,"div"),e._UZ(13,"br"),e._uU(14," We have registered your account successfully. "),e._UZ(15,"br"),e._UZ(16,"br"),e.qZA(),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"button",12),e.NdJ("click",function(){return n.continueClick()}),e._uU(19,"Continue"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(1,D)))},directives:[d.PC,l.yS],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),r})()},{path:"forgot",component:E},{path:"reset",component:O},{path:"emailsent",component:(()=>{class r{constructor(t,n){this.router=t,this.route=n}ngOnInit(){}continueClick(){this.router.navigate(["/auth/login"],{queryParams:{returnUrl:"/"}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.F0),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-email-sent-page"]],decls:20,vars:2,consts:[[1,"row","w-100","mx-0","auth-page"],[1,"col-md-8","col-xl-6","mx-auto"],[1,"card"],[1,"row"],[1,"col-md-4","pe-md-0"],[1,"auth-side-wrapper",3,"ngStyle"],[1,"col-md-8","ps-md-0"],[1,"auth-form-wrapper","px-4","py-5"],[1,"text-center"],["data-feather","check-circle","appFeatherIcon","",1,"text-success","mt-4","mb-2","icon-xxl"],["routerLink",".",1,"creativealigner-logo","d-block","mb-2"],[1,"d-flex","justify-content-center","mt-2"],["type","button",1,"btn","btn-success",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e._UZ(9,"i",9),e.TgZ(10,"a",10),e._uU(11,"Reset Password"),e.qZA(),e.TgZ(12,"div"),e._UZ(13,"br"),e._uU(14," If provided email is valid, an email will be sent shortly. Please check your inbox and follow the instructions to reset your password. "),e._UZ(15,"br"),e._UZ(16,"br"),e.qZA(),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"button",12),e.NdJ("click",function(){return n.continueClick()}),e._uU(19,"Continue"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngStyle",e.DdM(1,G)))},directives:[d.PC,l.yS],styles:["[_nghost-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center}"]}),r})()}]}];let W=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[],imports:[[d.ez,o.u5,k.IJ,o.UX,S.JF,l.Bz.forChild(z),Z.A0,N._]]}),r})()}}]);