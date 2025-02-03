import*as i from"@angular/core";import{InjectionToken as I,EventEmitter as c,booleanAttribute as r,TemplateRef as q,forwardRef as U,inject as O,Injector as z,afterNextRender as Q}from"@angular/core";import{MAT_OPTION_PARENT_COMPONENT as G,MatOption as X,MAT_OPTGROUP as $,MatOptionSelectionChange as Z,_countGroupLabelsBeforeOption as J,_getOptionScrollPosition as ee,MatOptionModule as S,MatCommonModule as w}from"@angular/material/core";import{MatOptgroup as ft,MatOption as vt}from"@angular/material/core";import{DOCUMENT as ne,CommonModule as ae}from"@angular/common";import*as k from"@angular/cdk/scrolling";import{CdkScrollableModule as se}from"@angular/cdk/scrolling";import*as D from"@angular/cdk/overlay";import{Overlay as L,OverlayConfig as le,OverlayModule as re}from"@angular/cdk/overlay";import{ActiveDescendantKeyManager as ce,removeAriaReferencedId as m,addAriaReferencedId as C}from"@angular/cdk/a11y";import*as F from"@angular/cdk/platform";import{_getEventTarget as pe}from"@angular/cdk/platform";import{trigger as he,state as ue,style as p,transition as M,group as de,animate as _}from"@angular/animations";import{Subscription as b,Subject as P,defer as me,merge as h,of as _e,fromEvent as f,Observable as fe}from"rxjs";import{ESCAPE as T,hasModifierKey as v,UP_ARROW as E,ENTER as ve,DOWN_ARROW as ge,TAB as ye}from"@angular/cdk/keycodes";import{BreakpointObserver as Oe,Breakpoints as be}from"@angular/cdk/layout";import{TemplatePortal as Ae}from"@angular/cdk/portal";import{NG_VALUE_ACCESSOR as Se}from"@angular/forms";import"@angular/material/form-field";import{MAT_FORM_FIELD as we}from"@angular/material/form-field";import{startWith as Ce,switchMap as g,filter as y,map as Me,tap as Pe,delay as Te,take as R}from"rxjs/operators";import*as V from"@angular/cdk/bidi";var te=["panel"],ie=["*"];function oe(a,u){if(a&1){let e=i.ɵɵgetCurrentView();i.ɵɵelementStart(0,"div",1,0),i.ɵɵlistener("@panelAnimation.done",function(o){i.ɵɵrestoreView(e);let n=i.ɵɵnextContext();return i.ɵɵresetView(n._animationDone.next(o))}),i.ɵɵprojection(2),i.ɵɵelementEnd()}if(a&2){let e=u.id,t=i.ɵɵnextContext();i.ɵɵclassMap(t._classList),i.ɵɵclassProp("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),i.ɵɵproperty("id",t.id)("@panelAnimation",t.isOpen?"visible":"hidden"),i.ɵɵattribute("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var Ee=he("panelAnimation",[ue("void, hidden",p({opacity:0,transform:"scaleY(0.8)"})),M(":enter, hidden => visible",[de([_("0.03s linear",p({opacity:1})),_("0.12s cubic-bezier(0, 0, 0.2, 1)",p({transform:"scaleY(1)"}))])]),M(":leave, visible => hidden",[_("0.075s linear",p({opacity:0}))])]),Re=0,A=class{constructor(u,e){this.source=u,this.option=e}},j=new I("mat-autocomplete-default-options",{providedIn:"root",factory:Ie});function Ie(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1}}var pt=(()=>{class a{get isOpen(){return this._isOpen&&this.showPanel}_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}constructor(e,t,o,n){this._changeDetectorRef=e,this._elementRef=t,this._defaults=o,this._activeOptionChanges=b.EMPTY,this._animationDone=new c,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new c,this.opened=new c,this.closed=new c,this.optionActivated=new c,this.id=`mat-autocomplete-${Re++}`,this.inertGroups=n?.SAFARI||!1,this.autoActiveFirstOption=!!o.autoActiveFirstOption,this.autoSelectActiveOption=!!o.autoSelectActiveOption,this.requireSelection=!!o.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ce(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe(),this._animationDone.complete()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new A(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static{this.ɵfac=function(t){return new(t||a)(i.ɵɵdirectiveInject(i.ChangeDetectorRef),i.ɵɵdirectiveInject(i.ElementRef),i.ɵɵdirectiveInject(j),i.ɵɵdirectiveInject(F.Platform))}}static{this.ɵcmp=i.ɵɵdefineComponent({type:a,selectors:[["mat-autocomplete"]],contentQueries:function(t,o,n){if(t&1&&(i.ɵɵcontentQuery(n,X,5),i.ɵɵcontentQuery(n,$,5)),t&2){let s;i.ɵɵqueryRefresh(s=i.ɵɵloadQuery())&&(o.options=s),i.ɵɵqueryRefresh(s=i.ɵɵloadQuery())&&(o.optionGroups=s)}},viewQuery:function(t,o){if(t&1&&(i.ɵɵviewQuery(q,7),i.ɵɵviewQuery(te,5)),t&2){let n;i.ɵɵqueryRefresh(n=i.ɵɵloadQuery())&&(o.template=n.first),i.ɵɵqueryRefresh(n=i.ɵɵloadQuery())&&(o.panel=n.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",r],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",r],requireSelection:[2,"requireSelection","requireSelection",r],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",r],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",r]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],standalone:!0,features:[i.ɵɵProvidersFeature([{provide:G,useExisting:a}]),i.ɵɵInputTransformsFeature,i.ɵɵStandaloneFeature],ngContentSelectors:ie,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,o){t&1&&(i.ɵɵprojectionDef(),i.ɵɵtemplate(0,oe,3,16,"ng-template"))},styles:["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape, var(--mat-app-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow);background-color:var(--mat-autocomplete-background-color, var(--mat-app-surface-container))}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[Ee]},changeDetection:0})}}return a})(),ht=(()=>{class a{constructor(e){this.elementRef=e}static{this.ɵfac=function(t){return new(t||a)(i.ɵɵdirectiveInject(i.ElementRef))}}static{this.ɵdir=i.ɵɵdefineDirective({type:a,selectors:[["","matAutocompleteOrigin",""]],exportAs:["matAutocompleteOrigin"],standalone:!0})}}return a})(),ke={provide:Se,useExisting:U(()=>Fe),multi:!0};function ut(){return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}var x=new I("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let a=O(L);return()=>a.scrollStrategies.reposition()}});function De(a){return()=>a.scrollStrategies.reposition()}var Le={provide:x,deps:[L],useFactory:De},Fe=(()=>{class a{constructor(e,t,o,n,s,d,H,N,W,K,Y){this._element=e,this._overlay=t,this._viewContainerRef=o,this._zone=n,this._changeDetectorRef=s,this._dir=H,this._formField=N,this._document=W,this._viewportRuler=K,this._defaults=Y,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=b.EMPTY,this._breakpointObserver=O(Oe),this._handsetLandscapeSubscription=b.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new P,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._initialized=new P,this._injector=O(z),this._aboveClass="mat-mdc-autocomplete-panel-above",this._overlayAttached=!1,this.optionSelections=me(()=>{let l=this.autocomplete?this.autocomplete.options:null;return l?l.changes.pipe(Ce(l),g(()=>h(...l.map(B=>B.onSelectionChange)))):this._initialized.pipe(g(()=>this.optionSelections))}),this._handlePanelKeydown=l=>{(l.keyCode===T&&!v(l)||l.keyCode===E&&v(l,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),l.stopPropagation(),l.preventDefault())},this._trackedModal=null,this._scrollStrategy=d}ngAfterViewInit(){this._initialized.next(),this._initialized.complete();let e=this._getWindow();typeof e<"u"&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){let e=this._getWindow();typeof e<"u"&&e.removeEventListener("blur",this._windowBlurHandler),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&m(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return h(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(y(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(y(()=>this._overlayAttached)):_e()).pipe(Me(e=>e instanceof Z?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return h(f(this._document,"click"),f(this._document,"auxclick"),f(this._document,"touchend")).pipe(y(e=>{let t=pe(e),o=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,n=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!o||!o.contains(t))&&(!n||!n.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)}))}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e.keyCode,o=v(e);if(t===T&&!o&&e.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===ve&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){let n=this.autocomplete._keyManager.activeItem,s=t===E||t===ge;t===ye||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==n)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,o=t.value;if(t.type==="number"&&(o=o==""?null:parseFloat(o)),this._previousValue!==o){if(this._previousValue=o,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(o),!o)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let n=this.autocomplete.options?.find(s=>s.selected);if(n){let s=this._getDisplayValue(n.value);o!==s&&n.deselect(!1)}}if(this._canOpen()&&this._document.activeElement===e.target){let n=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(n)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new fe(o=>{Q(()=>{o.next()},{injector:this._injector})}),t=this.autocomplete.options.changes.pipe(Pe(()=>this._positionStrategy.reapplyLastPosition()),Te(0));return h(e,t).pipe(g(()=>this._zone.run(()=>{let o=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),R(1)).subscribe(o=>this._setValueAndClose(o))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,o=e?e.source:this._pendingAutoselectedOption;o?(this._clearPreviousSelectedOption(o),this._assignOptionValue(o.value),this._onChange(o.value),t._emitSelectEvent(o),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),t._animationDone?t._animationDone.pipe(R(1)).subscribe(()=>this._onChange(null)):this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(o=>{o!==e&&o.selected&&o.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;C(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){this.autocomplete;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Ae(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(be.HandsetLandscape).subscribe(n=>{n.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let o=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&o!==this.panelOpen&&this._emitOpened()}_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new le({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){let e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,n=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}],s;this.position==="above"?s=n:this.position==="below"?s=t:s=[...t,...n],e.withPositions(s)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let o=0;o<e.options.length;o++)if(!e.options.get(o).disabled){t=o;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(e){let t=this.autocomplete,o=J(e,t.options,t.optionGroups);if(e===0&&o===1)t._setScrollTop(0);else if(t.panel){let n=t.options.toArray()[e];if(n){let s=n._getHostElement(),d=ee(s.offsetTop,s.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(d)}}}_applyModalPanelOwnership(){let e=this._element.nativeElement.closest("body > .cdk-overlay-container [aria-modal=\"true\"]");if(!e)return;let t=this.autocomplete.id;this._trackedModal&&m(this._trackedModal,"aria-owns",t),C(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;m(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static{this.ɵfac=function(t){return new(t||a)(i.ɵɵdirectiveInject(i.ElementRef),i.ɵɵdirectiveInject(D.Overlay),i.ɵɵdirectiveInject(i.ViewContainerRef),i.ɵɵdirectiveInject(i.NgZone),i.ɵɵdirectiveInject(i.ChangeDetectorRef),i.ɵɵdirectiveInject(x),i.ɵɵdirectiveInject(V.Directionality,8),i.ɵɵdirectiveInject(we,9),i.ɵɵdirectiveInject(ne,8),i.ɵɵdirectiveInject(k.ViewportRuler),i.ɵɵdirectiveInject(j,8))}}static{this.ɵdir=i.ɵɵdefineDirective({type:a,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,o){t&1&&i.ɵɵlistener("focusin",function(){return o._handleFocus()})("blur",function(){return o._onTouched()})("input",function(s){return o._handleInput(s)})("keydown",function(s){return o._handleKeydown(s)})("click",function(){return o._handleClick()}),t&2&&i.ɵɵattribute("autocomplete",o.autocompleteAttribute)("role",o.autocompleteDisabled?null:"combobox")("aria-autocomplete",o.autocompleteDisabled?null:"list")("aria-activedescendant",o.panelOpen&&o.activeOption?o.activeOption.id:null)("aria-expanded",o.autocompleteDisabled?null:o.panelOpen.toString())("aria-controls",o.autocompleteDisabled||!o.panelOpen||o.autocomplete==null?null:o.autocomplete.id)("aria-haspopup",o.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",r]},exportAs:["matAutocompleteTrigger"],standalone:!0,features:[i.ɵɵProvidersFeature([ke]),i.ɵɵInputTransformsFeature,i.ɵɵNgOnChangesFeature]})}}return a})(),dt=(()=>{class a{static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:a})}static{this.ɵinj=i.ɵɵdefineInjector({providers:[Le],imports:[re,S,w,ae,se,S,w]})}}return a})();export{j as MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,Ie as MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,x as MAT_AUTOCOMPLETE_SCROLL_STRATEGY,De as MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,Le as MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,ke as MAT_AUTOCOMPLETE_VALUE_ACCESSOR,pt as MatAutocomplete,dt as MatAutocompleteModule,ht as MatAutocompleteOrigin,A as MatAutocompleteSelectedEvent,Fe as MatAutocompleteTrigger,ft as MatOptgroup,vt as MatOption,ut as getMatAutocompleteMissingPanelError};