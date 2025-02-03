var F=Object.defineProperty,N=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(i,n,e)=>n in i?F(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,l=(i,n)=>{for(var e in n||={})P.call(n,e)&&y(i,e,n[e]);if(S)for(var e of S(n))V.call(n,e)&&y(i,e,n[e]);return i},C=(i,n)=>N(i,H(n));import*as E from"@angular/cdk/dialog";import{CdkDialogContainer as z,Dialog as U,DialogModule as X}from"@angular/cdk/dialog";import{CdkPortalOutlet as $,PortalModule as Y}from"@angular/cdk/portal";import*as t from"@angular/core";import{EventEmitter as q,InjectionToken as A}from"@angular/core";import{AnimationDurations as x,AnimationCurves as k,MatCommonModule as M}from"@angular/material/core";import*as h from"@angular/cdk/a11y";import*as j from"@angular/cdk/layout";import{Breakpoints as c}from"@angular/cdk/layout";import*as f from"@angular/cdk/overlay";import{DOCUMENT as G}from"@angular/common";import{trigger as K,state as B,style as w,transition as D,group as R,animate as I,query as T,animateChild as O}from"@angular/animations";import{ESCAPE as W,hasModifierKey as Z}from"@angular/cdk/keycodes";import{Subject as J,merge as Q}from"rxjs";import{filter as d,take as _}from"rxjs/operators";function tt(i,n){}var et={bottomSheetState:K("state",[B("void, hidden",w({transform:"translateY(100%)"})),B("visible",w({transform:"translateY(0%)"})),D("visible => void, visible => hidden",R([I(`${x.COMPLEX} ${k.ACCELERATION_CURVE}`),T("@*",O(),{optional:!0})])),D("void => visible",R([I(`${x.EXITING} ${k.DECELERATION_CURVE}`),T("@*",O(),{optional:!0})]))])},it=(()=>{class i extends z{constructor(e,a,o,s,r,v,u,m,L){super(e,a,o,s,r,v,u,L),this._animationState="void",this._animationStateChanged=new q,this._breakpointSubscription=m.observe([c.Medium,c.Large,c.XLarge]).subscribe(()=>{let g=this._elementRef.nativeElement.classList;g.toggle("mat-bottom-sheet-container-medium",m.isMatched(c.Medium)),g.toggle("mat-bottom-sheet-container-large",m.isMatched(c.Large)),g.toggle("mat-bottom-sheet-container-xlarge",m.isMatched(c.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges())}exit(){this._destroyed||(this._animationState="hidden",this._changeDetectorRef.markForCheck())}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_onAnimationDone(e){e.toState==="visible"&&this._trapFocus(),this._animationStateChanged.emit(e)}_onAnimationStart(e){this._animationStateChanged.emit(e)}_captureInitialFocus(){}static{this.ɵfac=function(a){return new(a||i)(t.ɵɵdirectiveInject(t.ElementRef),t.ɵɵdirectiveInject(h.FocusTrapFactory),t.ɵɵdirectiveInject(G,8),t.ɵɵdirectiveInject(E.DialogConfig),t.ɵɵdirectiveInject(h.InteractivityChecker),t.ɵɵdirectiveInject(t.NgZone),t.ɵɵdirectiveInject(f.OverlayRef),t.ɵɵdirectiveInject(j.BreakpointObserver),t.ɵɵdirectiveInject(h.FocusMonitor))}}static{this.ɵcmp=t.ɵɵdefineComponent({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:4,hostBindings:function(a,o){a&1&&t.ɵɵsyntheticHostListener("@state.start",function(r){return o._onAnimationStart(r)})("@state.done",function(r){return o._onAnimationDone(r)}),a&2&&(t.ɵɵsyntheticHostProperty("@state",o._animationState),t.ɵɵattribute("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-label",o._config.ariaLabel))},standalone:!0,features:[t.ɵɵInheritDefinitionFeature,t.ɵɵStandaloneFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(a,o){a&1&&t.ɵɵtemplate(0,tt,0,0,"ng-template",0)},dependencies:[$],styles:[".mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;background:var(--mat-bottom-sheet-container-background-color, var(--mat-app-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-app-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-app-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-app-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-app-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-app-body-large-tracking))}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape);border-top-right-radius:var(--mat-bottom-sheet-container-shape)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],encapsulation:2,data:{animation:[et.bottomSheetState]}})}}return i})(),ot=new A("MatBottomSheetData"),b=class{constructor(){this.data=null,this.hasBackdrop=!0,this.disableClose=!1,this.ariaLabel=null,this.ariaModal=!0,this.closeOnNavigation=!0,this.autoFocus="dialog",this.restoreFocus=!0}},p=class{get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}constructor(n,e,a){this._ref=n,this._afterOpened=new J,this.containerInstance=a,this.disableClose=e.disableClose,a._animationStateChanged.pipe(d(o=>o.phaseName==="done"&&o.toState==="visible"),_(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe(d(o=>o.phaseName==="done"&&o.toState==="hidden"),_(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),n.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),Q(this.backdropClick(),this.keydownEvents().pipe(d(o=>o.keyCode===W))).subscribe(o=>{!this.disableClose&&(o.type!=="keydown"||!Z(o))&&(o.preventDefault(),this.dismiss())})}dismiss(n){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(d(e=>e.phaseName==="start"),_(1)).subscribe(e=>{this._closeFallbackTimeout=setTimeout(()=>{this._ref.close(this._result)},e.totalTime+100),this._ref.overlayRef.detachBackdrop()}),this._result=n,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},at=new A("mat-bottom-sheet-default-options"),nt=(()=>{class i{get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}constructor(e,a,o,s){this._overlay=e,this._parentBottomSheet=o,this._defaultOptions=s,this._bottomSheetRefAtThisLevel=null,this._dialog=a.get(U)}open(e,a){let o=l(l({},this._defaultOptions||new b),a),s;return this._dialog.open(e,C(l({},o),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:it,scrollStrategy:o.scrollStrategy||this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().global().centerHorizontally().bottom("0"),templateContext:()=>({bottomSheetRef:s}),providers:(r,v,u)=>(s=new p(r,o,u),[{provide:p,useValue:s},{provide:ot,useValue:o.data}])})),s.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===s&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>s.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):s.containerInstance.enter(),this._openedBottomSheetRef=s,s}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static{this.ɵfac=function(a){return new(a||i)(t.ɵɵinject(f.Overlay),t.ɵɵinject(t.Injector),t.ɵɵinject(i,12),t.ɵɵinject(at,8))}}static{this.ɵprov=t.ɵɵdefineInjectable({token:i,factory:i.ɵfac,providedIn:"root"})}}return i})(),Mt=(()=>{class i{static{this.ɵfac=function(a){return new(a||i)}}static{this.ɵmod=t.ɵɵdefineNgModule({type:i})}static{this.ɵinj=t.ɵɵdefineInjector({providers:[nt],imports:[X,M,Y,M]})}}return i})();export{ot as MAT_BOTTOM_SHEET_DATA,at as MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,nt as MatBottomSheet,b as MatBottomSheetConfig,it as MatBottomSheetContainer,Mt as MatBottomSheetModule,p as MatBottomSheetRef,et as matBottomSheetAnimations};