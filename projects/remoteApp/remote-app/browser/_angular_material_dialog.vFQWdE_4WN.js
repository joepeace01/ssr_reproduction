var Z=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var O=(i,o,t)=>o in i?Z(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,p=(i,o)=>{for(var t in o||={})X.call(o,t)&&O(i,t,o[t]);if(x)for(var t of x(o))J.call(o,t)&&O(i,t,o[t]);return i},T=(i,o)=>K(i,Q(o));import*as l from"@angular/cdk/overlay";import{Overlay as z,OverlayModule as tt}from"@angular/cdk/overlay";import*as V from"@angular/common";import{DOCUMENT as it}from"@angular/common";import*as e from"@angular/core";import{EventEmitter as et,ANIMATION_MODULE_TYPE as G,InjectionToken as D,inject as at}from"@angular/core";import*as d from"@angular/cdk/a11y";import{CdkDialogContainer as nt,Dialog as ot,DialogConfig as st,DialogModule as rt}from"@angular/cdk/dialog";import{coerceNumberProperty as I}from"@angular/cdk/coercion";import{CdkPortalOutlet as lt,PortalModule as dt}from"@angular/cdk/portal";import{Subject as v,merge as ct,defer as mt}from"rxjs";import{filter as u,take as b,startWith as ht}from"rxjs/operators";import{ESCAPE as gt,hasModifierKey as pt}from"@angular/cdk/keycodes";import*as H from"@angular/cdk/scrolling";import"@angular/cdk/scrolling";import{MatCommonModule as w}from"@angular/material/core";import{trigger as ut,state as E,style as f,transition as R,group as k,animate as S,query as L,animateChild as M}from"@angular/animations";function ft(i,o){}var h=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},y="mdc-dialog--open",F="mdc-dialog--opening",j="mdc-dialog--closing",_t=150,vt=75,bt=(()=>{class i extends nt{constructor(t,a,n,r,s,c,m,A,W){super(t,a,n,r,s,c,m,W),this._animationMode=A,this._animationStateChanged=new et,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?N(this._config.enterAnimationDuration)??_t:0,this._exitAnimationDuration=this._animationsEnabled?N(this._config.exitAnimationDuration)??vt:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(P,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(F,y)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(y),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(y),this._animationsEnabled?(this._hostElement.style.setProperty(P,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(j)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(F,j)}_waitForAnimationToComplete(t,a){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(a,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let a=super.attachComponentPortal(t);return a.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),a}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(d.FocusTrapFactory),e.ɵɵdirectiveInject(it,8),e.ɵɵdirectiveInject(h),e.ɵɵdirectiveInject(d.InteractivityChecker),e.ɵɵdirectiveInject(e.NgZone),e.ɵɵdirectiveInject(l.OverlayRef),e.ɵɵdirectiveInject(G,8),e.ɵɵdirectiveInject(d.FocusMonitor))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(a,n){a&2&&(e.ɵɵhostProperty("id",n._config.id),e.ɵɵattribute("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),e.ɵɵclassProp("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},standalone:!0,features:[e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(a,n){a&1&&(e.ɵɵelementStart(0,"div",0)(1,"div",1),e.ɵɵtemplate(2,ft,0,0,"ng-template",2),e.ɵɵelementEnd()())},dependencies:[lt],styles:[".mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}"],encapsulation:2})}}return i})(),P="--mat-dialog-transition-duration";function N(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?I(i.substring(0,i.length-2)):i.endsWith("s")?I(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var _=function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i}(_||{}),g=class{constructor(o,t,a){this._ref=o,this._containerInstance=a,this._afterOpened=new v,this._beforeClosed=new v,this._state=_.OPEN,this.disableClose=t.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),a._animationStateChanged.pipe(u(n=>n.state==="opened"),b(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe(u(n=>n.state==="closed"),b(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ct(this.backdropClick(),this.keydownEvents().pipe(u(n=>n.keyCode===gt&&!this.disableClose&&!pt(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),$(this,n.type==="keydown"?"keyboard":"mouse"))})}close(o){this._result=o,this._containerInstance._animationStateChanged.pipe(u(t=>t.state==="closing"),b(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=_.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let t=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?t.left(o.left):t.right(o.right):t.centerHorizontally(),o&&(o.top||o.bottom)?o.top?t.top(o.top):t.bottom(o.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",t=""){return this._ref.updateSize(o,t),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=_.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function $(i,o,t){return i._closeInteractionType=o,i.close(t)}var yt=new D("MatMdcDialogData"),Dt=new D("mat-mdc-dialog-default-options"),q=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=at(z);return()=>i.scrollStrategies.block()}});function Ct(i){return()=>i.scrollStrategies.block()}var Zt={provide:q,deps:[z],useFactory:Ct},At=0,C=(()=>{class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,a,n,r,s,c,m,A){this._overlay=t,this._defaultOptions=r,this._scrollStrategy=s,this._parentDialog=c,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new v,this._afterOpenedAtThisLevel=new v,this.dialogConfigClass=h,this.afterAllClosed=mt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ht(void 0))),this._dialog=a.get(ot),this._dialogRefConstructor=g,this._dialogContainerType=bt,this._dialogDataToken=yt}open(t,a){let n;a=p(p({},this._defaultOptions||new h),a),a.id=a.id||`mat-mdc-dialog-${At++}`,a.scrollStrategy=a.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,T(p({},a),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:a},{provide:st,useValue:a}]},templateContext:()=>({dialogRef:n}),providers:(s,c,m)=>(n=new this._dialogRefConstructor(s,a,m),n.updatePosition(a?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(a=>a.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let a=t.length;for(;a--;)t[a].close()}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵinject(l.Overlay),e.ɵɵinject(e.Injector),e.ɵɵinject(V.Location,8),e.ɵɵinject(Dt,8),e.ɵɵinject(q),e.ɵɵinject(i,12),e.ɵɵinject(l.OverlayContainer),e.ɵɵinject(G,8))}}static{this.ɵprov=e.ɵɵdefineInjectable({token:i,factory:i.ɵfac,providedIn:"root"})}}return i})(),xt=0,Kt=(()=>{class i{constructor(t,a,n){this.dialogRef=t,this._elementRef=a,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=Y(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let a=t._matDialogClose||t._matDialogCloseResult;a&&(this.dialogResult=a.currentValue)}_onButtonClick(t){$(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(g,8),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(C))}}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(a,n){a&1&&e.ɵɵlistener("click",function(s){return n._onButtonClick(s)}),a&2&&e.ɵɵattribute("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[e.ɵɵNgOnChangesFeature]})}}return i})(),U=(()=>{class i{constructor(t,a,n){this._dialogRef=t,this._elementRef=a,this._dialog=n}ngOnInit(){this._dialogRef||(this._dialogRef=Y(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static{this.ɵfac=function(a){return new(a||i)(e.ɵɵdirectiveInject(g,8),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(C))}}static{this.ɵdir=e.ɵɵdefineDirective({type:i,standalone:!0})}}return i})(),Qt=(()=>{class i extends U{constructor(){super(...arguments),this.id=`mat-mdc-dialog-title-${xt++}`}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=e.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(a,n){a&2&&e.ɵɵhostProperty("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[e.ɵɵInheritDefinitionFeature]})}}return i})(),Xt=(()=>{class i{static{this.ɵfac=function(a){return new(a||i)}}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0,features:[e.ɵɵHostDirectivesFeature([H.CdkScrollable])]})}}return i})(),Jt=(()=>{class i extends U{_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=e.ɵɵgetInheritedFactory(i)))(n||i)}})()}static{this.ɵdir=e.ɵɵdefineDirective({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(a,n){a&2&&e.ɵɵclassProp("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},standalone:!0,features:[e.ɵɵInheritDefinitionFeature]})}}return i})();function Y(i,o){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?o.find(a=>a.id===t.id):null}var ti=(()=>{class i{static{this.ɵfac=function(a){return new(a||i)}}static{this.ɵmod=e.ɵɵdefineNgModule({type:i})}static{this.ɵinj=e.ɵɵdefineInjector({providers:[C],imports:[rt,tt,dt,w,w]})}}return i})(),B={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},ii={dialogContainer:ut("dialogContainer",[E("void, exit",f({opacity:0,transform:"scale(0.7)"})),E("enter",f({transform:"none"})),R("* => enter",k([S("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",f({transform:"none",opacity:1})),L("@*",M(),{optional:!0})]),B),R("* => void, * => exit",k([S("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",f({opacity:0})),L("@*",M(),{optional:!0})]),B)])};export{yt as MAT_DIALOG_DATA,Dt as MAT_DIALOG_DEFAULT_OPTIONS,q as MAT_DIALOG_SCROLL_STRATEGY,Zt as MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,Ct as MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,C as MatDialog,Jt as MatDialogActions,Kt as MatDialogClose,h as MatDialogConfig,bt as MatDialogContainer,Xt as MatDialogContent,ti as MatDialogModule,g as MatDialogRef,_ as MatDialogState,Qt as MatDialogTitle,$ as _closeDialogVia,B as _defaultParams,ii as matDialogAnimations};