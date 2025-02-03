import*as u from"@angular/cdk/scrolling";import{CdkScrollable as m,CdkScrollableModule as x}from"@angular/cdk/scrolling";import*as e from"@angular/core";import{InjectionToken as O,forwardRef as P,EventEmitter as b,inject as C,Injector as V,ChangeDetectorRef as L,afterNextRender as z,QueryList as U,AfterRenderPhase as q,ANIMATION_MODULE_TYPE as Y}from"@angular/core";import{MatCommonModule as M}from"@angular/material/core";import*as p from"@angular/cdk/a11y";import*as Q from"@angular/cdk/bidi";import{coerceBooleanProperty as l,coerceNumberProperty as S}from"@angular/cdk/coercion";import{ESCAPE as K,hasModifierKey as $}from"@angular/cdk/keycodes";import*as W from"@angular/cdk/platform";import{DOCUMENT as J}from"@angular/common";import{Subject as c,fromEvent as X,merge as ee}from"rxjs";import{filter as h,map as F,mapTo as E,takeUntil as d,take as te,startWith as I,debounceTime as re}from"rxjs/operators";import{trigger as ie,state as B,style as j,transition as T,animate as A}from"@angular/animations";var _=["*"],ne=["content"],ae=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],oe=["mat-drawer","mat-drawer-content","*"];function se(n,g){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",1),e.ɵɵlistener("click",function(){e.ɵɵrestoreView(t);let i=e.ɵɵnextContext();return e.ɵɵresetView(i._onBackdropClicked())}),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext();e.ɵɵclassProp("mat-drawer-shown",t._isShowingBackdrop())}}function de(n,g){n&1&&(e.ɵɵelementStart(0,"mat-drawer-content"),e.ɵɵprojection(1,2),e.ɵɵelementEnd())}var ce=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],he=["mat-sidenav","mat-sidenav-content","*"];function le(n,g){if(n&1){let t=e.ɵɵgetCurrentView();e.ɵɵelementStart(0,"div",1),e.ɵɵlistener("click",function(){e.ɵɵrestoreView(t);let i=e.ɵɵnextContext();return e.ɵɵresetView(i._onBackdropClicked())}),e.ɵɵelementEnd()}if(n&2){let t=e.ɵɵnextContext();e.ɵɵclassProp("mat-drawer-shown",t._isShowingBackdrop())}}function pe(n,g){n&1&&(e.ɵɵelementStart(0,"mat-sidenav-content"),e.ɵɵprojection(1,2),e.ɵɵelementEnd())}var me=".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}",N={transformDrawer:ie("transform",[B("open, open-instant",j({transform:"none",visibility:"visible"})),B("void",j({"box-shadow":"none",visibility:"hidden"})),T("void => open-instant",A("0ms")),T("void <=> open, open-instant => void",A("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};function Ve(n){throw Error(`A drawer was already declared for 'position="${n}"'`)}var ue=new O("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:fe}),k=new O("MAT_DRAWER_CONTAINER");function fe(){return!1}var f=(()=>{class n extends m{constructor(t,r,i,a,o){super(i,a,o),this._changeDetectorRef=t,this._container=r}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}static{this.ɵfac=function(r){return new(r||n)(e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(P(()=>G)),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(u.ScrollDispatcher),e.ɵɵdirectiveInject(e.NgZone))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(r,i){r&2&&e.ɵɵstyleProp("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},standalone:!0,features:[e.ɵɵProvidersFeature([{provide:m,useExisting:n}]),e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],ngContentSelectors:_,decls:1,vars:0,template:function(r,i){r&1&&(e.ɵɵprojectionDef(),e.ɵɵprojection(0))},encapsulation:2,changeDetection:0})}}return n})(),H=(()=>{class n{get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=l(t)}get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=l(t)),this._autoFocus=t}get opened(){return this._opened}set opened(t){this.toggle(l(t))}constructor(t,r,i,a,o,v,w,Z){this._elementRef=t,this._focusTrapFactory=r,this._focusMonitor=i,this._platform=a,this._ngZone=o,this._interactivityChecker=v,this._doc=w,this._container=Z,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new c,this._animationEnd=new c,this._animationState="void",this.openedChange=new b(!0),this._openedStream=this.openedChange.pipe(h(s=>s),F(()=>{})),this.openedStart=this._animationStarted.pipe(h(s=>s.fromState!==s.toState&&s.toState.indexOf("open")===0),E(void 0)),this._closedStream=this.openedChange.pipe(h(s=>!s),F(()=>{})),this.closedStart=this._animationStarted.pipe(h(s=>s.fromState!==s.toState&&s.toState==="void"),E(void 0)),this._destroyed=new c,this.onPositionChanged=new b,this._modeChanged=new c,this._injector=C(V),this._changeDetectorRef=C(L),this.openedChange.pipe(d(this._destroyed)).subscribe(s=>{s?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{X(this._elementRef.nativeElement,"keydown").pipe(h(s=>s.keyCode===K&&!this.disableClose&&!$(s)),d(this._destroyed)).subscribe(s=>this._ngZone.run(()=>{this.close(),s.stopPropagation(),s.preventDefault()}))}),this._animationEnd.subscribe(s=>{let{fromState:y,toState:D}=s;(D.indexOf("open")===0&&y==="void"||D==="void"&&y.indexOf("open")===0)&&this.openedChange.emit(this._opened)})}_forceFocus(t,r){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(r)}_focusByCssSelector(t,r){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,r)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":z(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector("h1, h2, h3, h4, h5, h6, [role=\"heading\"]");break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,r){t&&r&&(this._openedVia=r);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,r,i){return this._opened=t,t?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",r&&this._restoreFocus(i)),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(te(1)).subscribe(o=>a(o?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let r=this._elementRef.nativeElement,i=r.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,r)),i.appendChild(r)):this._anchor&&this._anchor.parentNode.insertBefore(r,this._anchor)}static{this.ɵfac=function(r){return new(r||n)(e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(p.FocusTrapFactory),e.ɵɵdirectiveInject(p.FocusMonitor),e.ɵɵdirectiveInject(W.Platform),e.ɵɵdirectiveInject(e.NgZone),e.ɵɵdirectiveInject(p.InteractivityChecker),e.ɵɵdirectiveInject(J,8),e.ɵɵdirectiveInject(k,8))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["mat-drawer"]],viewQuery:function(r,i){if(r&1&&e.ɵɵviewQuery(ne,5),r&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(i._content=a.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(r,i){r&1&&e.ɵɵsyntheticHostListener("@transform.start",function(o){return i._animationStarted.next(o)})("@transform.done",function(o){return i._animationEnd.next(o)}),r&2&&(e.ɵɵsyntheticHostProperty("@transform",i._animationState),e.ɵɵattribute("align",null),e.ɵɵclassProp("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[e.ɵɵStandaloneFeature],ngContentSelectors:_,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"div",1,0),e.ɵɵprojection(2),e.ɵɵelementEnd())},dependencies:[m],encapsulation:2,data:{animation:[N.transformDrawer]},changeDetection:0})}}return n})(),G=(()=>{class n{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=l(t)}get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:l(t)}get scrollable(){return this._userContent||this._content}constructor(t,r,i,a,o,v=!1,w){this._dir=t,this._element=r,this._ngZone=i,this._changeDetectorRef=a,this._animationMode=w,this._drawers=new U,this.backdropClick=new b,this._destroyed=new c,this._doCheckSubject=new c,this._contentMargins={left:null,right:null},this._contentMarginChanges=new c,this._injector=C(V),t&&t.change.pipe(d(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),o.change().pipe(d(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=v}ngAfterContentInit(){this._allDrawers.changes.pipe(I(this._allDrawers),d(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(r=>!r._container||r._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(I(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(re(10),d(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,r=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,r-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")r+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();r+=i,t-=i}}t=t||null,r=r||null,(t!==this._contentMargins.left||r!==this._contentMargins.right)&&(this._contentMargins={left:t,right:r},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(h(r=>r.fromState!==r.toState),d(this._drawers.changes)).subscribe(r=>{r.toState!=="open-instant"&&this._animationMode!=="NoopAnimations"&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(d(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t&&t.onPositionChanged.pipe(d(this._drawers.changes)).subscribe(()=>{z(()=>{this._validateDrawers()},{injector:this._injector,phase:q.Read})})}_watchDrawerMode(t){t&&t._modeChanged.pipe(d(ee(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let r=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?r.add(i):r.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static{this.ɵfac=function(r){return new(r||n)(e.ɵɵdirectiveInject(Q.Directionality,8),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(e.NgZone),e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(u.ViewportRuler),e.ɵɵdirectiveInject(ue),e.ɵɵdirectiveInject(Y,8))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(r,i,a){if(r&1&&(e.ɵɵcontentQuery(a,f,5),e.ɵɵcontentQuery(a,H,5)),r&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(i._content=o.first),e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(i._allDrawers=o)}},viewQuery:function(r,i){if(r&1&&e.ɵɵviewQuery(f,5),r&2){let a;e.ɵɵqueryRefresh(a=e.ɵɵloadQuery())&&(i._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(r,i){r&2&&e.ɵɵclassProp("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:k,useExisting:n}]),e.ɵɵStandaloneFeature],ngContentSelectors:oe,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(e.ɵɵprojectionDef(ae),e.ɵɵtemplate(0,se,1,2,"div",0),e.ɵɵprojection(1),e.ɵɵprojection(2,1),e.ɵɵtemplate(3,de,2,0,"mat-drawer-content")),r&2&&(e.ɵɵconditional(i.hasBackdrop?0:-1),e.ɵɵadvance(3),e.ɵɵconditional(i._content?-1:3))},dependencies:[f],styles:[".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],encapsulation:2,changeDetection:0})}}return n})(),R=(()=>{class n extends f{constructor(t,r,i,a,o){super(t,r,i,a,o)}static{this.ɵfac=function(r){return new(r||n)(e.ɵɵdirectiveInject(e.ChangeDetectorRef),e.ɵɵdirectiveInject(P(()=>ge)),e.ɵɵdirectiveInject(e.ElementRef),e.ɵɵdirectiveInject(u.ScrollDispatcher),e.ɵɵdirectiveInject(e.NgZone))}}static{this.ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],hostVars:4,hostBindings:function(r,i){r&2&&e.ɵɵstyleProp("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},standalone:!0,features:[e.ɵɵProvidersFeature([{provide:m,useExisting:n}]),e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],ngContentSelectors:_,decls:1,vars:0,template:function(r,i){r&1&&(e.ɵɵprojectionDef(),e.ɵɵprojection(0))},encapsulation:2,changeDetection:0})}}return n})(),_e=(()=>{class n extends H{constructor(){super(...arguments),this._fixedInViewport=!1,this._fixedTopGap=0,this._fixedBottomGap=0}get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=l(t)}get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=S(t)}get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=S(t)}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=e.ɵɵgetInheritedFactory(n)))(i||n)}})()}static{this.ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(r,i){r&2&&(e.ɵɵattribute("align",null),e.ɵɵstyleProp("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),e.ɵɵclassProp("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened)("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],standalone:!0,features:[e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],ngContentSelectors:_,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(e.ɵɵprojectionDef(),e.ɵɵelementStart(0,"div",1,0),e.ɵɵprojection(2),e.ɵɵelementEnd())},dependencies:[m],encapsulation:2,data:{animation:[N.transformDrawer]},changeDetection:0})}}return n})(),ge=(()=>{class n extends G{constructor(){super(...arguments),this._allDrawers=void 0,this._content=void 0}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=e.ɵɵgetInheritedFactory(n)))(i||n)}})()}static{this.ɵcmp=e.ɵɵdefineComponent({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(r,i,a){if(r&1&&(e.ɵɵcontentQuery(a,R,5),e.ɵɵcontentQuery(a,_e,5)),r&2){let o;e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(i._content=o.first),e.ɵɵqueryRefresh(o=e.ɵɵloadQuery())&&(i._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(r,i){r&2&&e.ɵɵclassProp("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],standalone:!0,features:[e.ɵɵProvidersFeature([{provide:k,useExisting:n}]),e.ɵɵInheritDefinitionFeature,e.ɵɵStandaloneFeature],ngContentSelectors:he,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(e.ɵɵprojectionDef(ce),e.ɵɵtemplate(0,le,1,2,"div",0),e.ɵɵprojection(1),e.ɵɵprojection(2,1),e.ɵɵtemplate(3,pe,2,0,"mat-sidenav-content")),r&2&&(e.ɵɵconditional(i.hasBackdrop?0:-1),e.ɵɵadvance(3),e.ɵɵconditional(i._content?-1:3))},dependencies:[R],styles:[me],encapsulation:2,changeDetection:0})}}return n})(),ze=(()=>{class n{static{this.ɵfac=function(r){return new(r||n)}}static{this.ɵmod=e.ɵɵdefineNgModule({type:n})}static{this.ɵinj=e.ɵɵdefineInjector({imports:[M,x,x,M]})}}return n})();export{ue as MAT_DRAWER_DEFAULT_AUTOSIZE,fe as MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY,H as MatDrawer,G as MatDrawerContainer,f as MatDrawerContent,_e as MatSidenav,ge as MatSidenavContainer,R as MatSidenavContent,ze as MatSidenavModule,N as matDrawerAnimations,Ve as throwMatDuplicatedDrawerError};