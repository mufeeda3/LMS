"use strict";(self.webpackChunkcreativealigner_angular=self.webpackChunkcreativealigner_angular||[]).push([[592],{7048:(p,h,o)=>{o.d(h,{G:()=>d});var n=o(5e3);let d=(()=>{class s{constructor(e){this.hostElement=e,this.allowDecimals=!0,this.allowSign=!0,this.decimalSeparator=".",this.previousValue="",this.integerUnsigned="^[0-9]*$",this.integerSigned="^-?[0-9]+$",this.decimalUnsigned="^[0-9]+(.[0-9]+)?$",this.decimalSigned="^-?[0-9]+(.[0-9]+)?$"}onChange(e){this.validateValue(this.hostElement.nativeElement.value)}onPaste(e){let t=e.clipboardData.getData("text/plain");this.validateValue(t),e.preventDefault()}onKeyDown(e){console.debug(e);let t=e.target.selectionStart,i=e.target.value,a=this.getName(e),r=!0===e.ctrlKey||!0===e.metaKey,u=i.includes("-"),g=i.includes(this.decimalSeparator),l=["Backspace","ArrowLeft","ArrowRight","Escape","Tab"];this.allowDecimals&&!(u&&t<=1)&&!g&&l.push("."==this.decimalSeparator?".":",");let f=i.charAt(0)!=this.decimalSeparator;this.allowSign&&!u&&f&&0==t&&l.push("-"),!(-1!=l.indexOf(a)||"a"==a&&r||"c"==a&&r||"v"==a&&r||"x"==a&&r||(this.previousValue=i,new RegExp(this.integerUnsigned).test(a)))&&e.preventDefault()}validateValue(e){let t="";!this.allowDecimals&&!this.allowSign&&(t=this.integerUnsigned),!this.allowDecimals&&this.allowSign&&(t=this.integerSigned),this.allowDecimals&&!this.allowSign&&(t=this.decimalUnsigned),this.allowDecimals&&this.allowSign&&(t=this.decimalSigned),e.charAt(0)==this.decimalSeparator&&(e=0+e),e.charAt(e.length-1)==this.decimalSeparator&&(e+=0);let r=new RegExp(t).test(e);this.hostElement.nativeElement.value=r?e:0}getName(e){if(e.key)return e.key;if(e.keyCode&&String.fromCharCode)switch(e.keyCode){case 8:return"Backspace";case 9:return"Tab";case 27:return"Escape";case 37:return"ArrowLeft";case 39:return"ArrowRight";case 188:return",";case 190:return".";case 109:case 173:case 189:return"-";default:return String.fromCharCode(e.keyCode)}return""}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq))},s.\u0275dir=n.lG2({type:s,selectors:[["","NumbersOnly",""]],hostBindings:function(e,t){1&e&&n.NdJ("change",function(a){return t.onChange(a)})("paste",function(a){return t.onPaste(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{allowDecimals:"allowDecimals",allowSign:"allowSign",decimalSeparator:"decimalSeparator"}}),s})()}}]);