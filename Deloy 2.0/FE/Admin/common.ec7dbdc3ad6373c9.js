"use strict";(self.webpackChunkfarm_ui=self.webpackChunkfarm_ui||[]).push([[592],{7565:(C,c,l)=>{l.d(c,{H:()=>A});var n=l(5879),L=l(6223),a=l(95),D=l(3599),r=l(824);let A=(()=>{var i;class I{constructor(){this.TYPE="",this.PLACEHOLDER="",this.VALUE=null,this.FIELD="",this.LABEL="",this.CLASSNAME="",this.ENTITY=null,this.changeInput=new n.vpe,this.DISABLED=!1,this.REQUIRED=!1,this.MIN=null,this.MAX=null,this.MINLENGTH=null,this.MAXLENGTH=null,this.VALID=!0,this.VALID_REQUIRED=!0,this.VALID_MIN_LENGTH=!0,this.VALID_MAX_LENGTH=!0}ngOnInit(){this.ENTITY.id&&this.changeValueInput()}changeValueInput(){this.REQUIRED&&(this.VALID_REQUIRED=this.VALUE.toString().length>0),this.MINLENGTH&&(this.VALID_MIN_LENGTH=!(this.VALUE.toString().length<=this.MINLENGTH)),this.MAXLENGTH&&(this.VALID_MAX_LENGTH=!(this.VALUE.toString().length>=this.MAXLENGTH)),this.ENTITY[this.FIELD]=this.VALUE,this.VALID=this.VALID_REQUIRED&&this.VALID_MIN_LENGTH&&this.VALID_MAX_LENGTH,this.changeInput.emit(this.VALID)}}return(i=I).\u0275fac=function(u){return new(u||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-input-custom"]],inputs:{TYPE:"TYPE",PLACEHOLDER:"PLACEHOLDER",VALUE:"VALUE",FIELD:"FIELD",LABEL:"LABEL",CLASSNAME:"CLASSNAME",ENTITY:"ENTITY",DISABLED:"DISABLED",REQUIRED:"REQUIRED",MIN:"MIN",MAX:"MAX",MINLENGTH:"MINLENGTH",MAXLENGTH:"MAXLENGTH"},outputs:{changeInput:"changeInput"},decls:9,vars:13,consts:[["nz-col","",3,"nzSpan","nzRequired"],["nz-input","",3,"nzStatus","placeholder","ngModel","type","readonly","ngModelChange","keyup"],[1,"invalid-mess"]],template:function(u,E){1&u&&(n.TgZ(0,"nz-form-label",0),n._uU(1),n.qZA(),n.TgZ(2,"input",1),n.NdJ("ngModelChange",function(e){return E.VALUE=e})("keyup",function(){return E.changeValueInput()}),n.qZA(),n.TgZ(3,"div",2),n._uU(4),n.qZA(),n.TgZ(5,"div",2),n._uU(6),n.qZA(),n.TgZ(7,"div",2),n._uU(8),n.qZA()),2&u&&(n.Q6J("nzSpan",24)("nzRequired",E.REQUIRED),n.xp6(1),n.Oqu(E.LABEL),n.xp6(1),n.Tol(E.CLASSNAME),n.Q6J("nzStatus",E.VALID?"":"error")("placeholder",E.PLACEHOLDER)("ngModel",E.VALUE)("type",E.TYPE)("readonly",E.DISABLED),n.xp6(2),n.Oqu(E.VALID_REQUIRED?"":"Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng"),n.xp6(2),n.Oqu(E.VALID_MIN_LENGTH?"":"T\u1ed1i thi\u1ec3u nh\u1eadp t\u1ed1i \u0111a "+E.MINLENGTH+" k\xfd t\u1ef1"),n.xp6(2),n.Oqu(E.VALID_MAX_LENGTH?"":"T\u1ed1i \u0111a nh\u1eadp "+E.MAXLENGTH+" k\xfd t\u1ef1"))},dependencies:[L.Fj,L.JJ,L.On,a.t3,D.iK,r.Zp]}),I})()},9029:(C,c,l)=>{l.d(c,{B:()=>p});var n=l(5879),L=l(6814),a=l(6223),D=l(95),r=l(3599),A=l(9691);function i(e,_){if(1&e&&n._UZ(0,"nz-option",6),2&e){const t=_.$implicit,s=n.oxw(2);n.Q6J("nzLabel",t[s.LABEL_SELECT])("nzValue",t[s.VALUE_SELECT])}}function I(e,_){if(1&e){const t=n.EpF();n.TgZ(0,"nz-select",4),n.NdJ("ngModelChange",function(o){n.CHM(t);const T=n.oxw();return n.KtG(T.VALUE=o)})("ngModelChange",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.changeValueSelect())}),n.YNc(1,i,1,2,"nz-option",5),n.qZA()}if(2&e){const t=n.oxw();n.Tol(t.CLASSNAME),n.Q6J("nzStatus",t.VALID?"":"error")("nzPlaceHolder",t.PLACEHOLDER)("ngModel",t.VALUE)("nzDisabled",t.DISABLED),n.xp6(1),n.Q6J("ngForOf",t.LISTOPTION)}}function h(e,_){if(1&e&&n._UZ(0,"nz-option",6),2&e){const t=_.$implicit,s=n.oxw(2);n.Q6J("nzLabel",t[s.LABEL_SELECT])("nzValue",t[s.VALUE_SELECT])}}function u(e,_){if(1&e){const t=n.EpF();n.TgZ(0,"nz-select",7),n.NdJ("ngModelChange",function(o){n.CHM(t);const T=n.oxw();return n.KtG(T.VALUE=o)})("ngModelChange",function(){n.CHM(t);const o=n.oxw();return n.KtG(o.changeValueSelect())}),n.YNc(1,h,1,2,"nz-option",5),n.qZA()}if(2&e){const t=n.oxw();n.Tol(t.CLASSNAME),n.Q6J("nzStatus",t.VALID?"":"error")("nzPlaceHolder",t.PLACEHOLDER)("ngModel",t.VALUE)("nzDisabled",t.DISABLED),n.xp6(1),n.Q6J("ngForOf",t.LISTOPTION)}}function E(e,_){1&e&&(n.TgZ(0,"div",8),n._uU(1,"Kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng"),n.qZA())}let p=(()=>{var e;class _{constructor(){this.TYPE="",this.PLACEHOLDER="",this.VALUE=null,this.FIELD="",this.LABEL="",this.CLASSNAME="",this.ENTITY=null,this.LABEL_SELECT=null,this.VALUE_SELECT=null,this.LISTOPTION=null,this.changeSelect=new n.vpe,this.DISABLED=!1,this.REQUIRED=!1,this.MIN=null,this.MAX=null,this.VALID=!0,this.VALID_REQUIRED=!0}ngOnInit(){this.ENTITY.id&&this.changeValueSelect()}changeValueSelect(){this.REQUIRED&&(this.VALID_REQUIRED="NORMAL"==this.TYPE?!!this.VALUE:this.VALUE?.length>0),this.ENTITY[this.FIELD]=this.VALUE,this.VALID=this.VALID_REQUIRED,this.changeSelect.emit(this.VALID)}}return(e=_).\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-select-custom"]],inputs:{TYPE:"TYPE",PLACEHOLDER:"PLACEHOLDER",VALUE:"VALUE",FIELD:"FIELD",LABEL:"LABEL",CLASSNAME:"CLASSNAME",ENTITY:"ENTITY",LABEL_SELECT:"LABEL_SELECT",VALUE_SELECT:"VALUE_SELECT",LISTOPTION:"LISTOPTION",DISABLED:"DISABLED",REQUIRED:"REQUIRED",MIN:"MIN",MAX:"MAX"},outputs:{changeSelect:"changeSelect"},decls:6,vars:6,consts:[["nz-col","",3,"nzSpan","nzRequired"],["nzShowSearch","","nzAllowClear","","nz-input","",3,"nzStatus","nzPlaceHolder","class","ngModel","nzDisabled","ngModelChange",4,"ngIf"],["nzShowSearch","","nzAllowClear","","nz-input","","nzMode","multiple",3,"nzStatus","nzPlaceHolder","class","ngModel","nzDisabled","ngModelChange",4,"ngIf"],["class","invalid-mess",4,"ngIf"],["nzShowSearch","","nzAllowClear","","nz-input","",3,"nzStatus","nzPlaceHolder","ngModel","nzDisabled","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["nzShowSearch","","nzAllowClear","","nz-input","","nzMode","multiple",3,"nzStatus","nzPlaceHolder","ngModel","nzDisabled","ngModelChange"],[1,"invalid-mess"]],template:function(s,o){1&s&&(n.TgZ(0,"nz-form-label",0),n._uU(1),n.qZA(),n._UZ(2,"br"),n.YNc(3,I,2,7,"nz-select",1),n.YNc(4,u,2,7,"nz-select",2),n.YNc(5,E,2,0,"div",3)),2&s&&(n.Q6J("nzSpan",24)("nzRequired",o.REQUIRED),n.xp6(1),n.Oqu(o.LABEL),n.xp6(2),n.Q6J("ngIf","NORMAL"==o.TYPE),n.xp6(1),n.Q6J("ngIf","MULTIPLE"==o.TYPE),n.xp6(1),n.Q6J("ngIf",!o.VALID_REQUIRED))},dependencies:[L.sg,L.O5,a.JJ,a.On,D.t3,r.iK,A.Ip,A.Vq],styles:["nz-select[_ngcontent-%COMP%]{width:100%}"]}),_})()}}]);