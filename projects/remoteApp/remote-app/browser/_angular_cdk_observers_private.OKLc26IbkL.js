import*as b from"@angular/core";import{inject as d,NgZone as c}from"@angular/core";import{Subject as n,Observable as v}from"rxjs";import{filter as l,shareReplay as a,takeUntil as h}from"rxjs/operators";var i=class{constructor(r){this._box=r,this._destroyed=new n,this._resizeSubject=new n,this._elementObservables=new Map,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new v(e=>{let s=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),s.unsubscribe(),this._elementObservables.delete(r)}}).pipe(l(e=>e.some(s=>s.target===r)),a({bufferSize:1,refCount:!0}),h(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},_=(()=>{class t{constructor(){this._observers=new Map,this._ngZone=d(c),typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),typeof ResizeObserver<"u"}observe(e,s){let o=s?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new i(o)),this._observers.get(o).observe(e)}static{this.ɵfac=function(s){return new(s||t)}}static{this.ɵprov=b.ɵɵdefineInjectable({token:t,factory:t.ɵfac,providedIn:"root"})}}return t})();export{_ as SharedResizeObserver};