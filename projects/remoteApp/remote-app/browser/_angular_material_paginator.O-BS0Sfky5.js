import*as t from"@angular/core";import{Optional as h,SkipSelf as u,InjectionToken as _,numberAttribute as l,EventEmitter as b,booleanAttribute as d}from"@angular/core";import{Subject as f,ReplaySubject as v}from"rxjs";import{MatIconButton as x,MatButtonModule as P}from"@angular/material/button";import{MatSelect as S,MatSelectModule as z}from"@angular/material/select";import{MatTooltip as I,MatTooltipModule as T}from"@angular/material/tooltip";import{MatOption as y}from"@angular/material/core";import{MatFormField as C}from"@angular/material/form-field";function M(a,s){if(a&1&&(t.ɵɵelementStart(0,"mat-option",17),t.ɵɵtext(1),t.ɵɵelementEnd()),a&2){let e=s.$implicit;t.ɵɵproperty("value",e),t.ɵɵadvance(),t.ɵɵtextInterpolate1(" ",e," ")}}function O(a,s){if(a&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"mat-form-field",14)(1,"mat-select",16,0),t.ɵɵlistener("selectionChange",function(i){t.ɵɵrestoreView(e);let o=t.ɵɵnextContext(2);return t.ɵɵresetView(o._changePageSize(i.value))}),t.ɵɵrepeaterCreate(3,M,2,2,"mat-option",17,t.ɵɵrepeaterTrackByIdentity),t.ɵɵelementEnd(),t.ɵɵelementStart(5,"div",18),t.ɵɵlistener("click",function(){t.ɵɵrestoreView(e);let i=t.ɵɵreference(2);return t.ɵɵresetView(i.open())}),t.ɵɵelementEnd()()}if(a&2){let e=t.ɵɵnextContext(2);t.ɵɵproperty("appearance",e._formFieldAppearance)("color",e.color),t.ɵɵadvance(),t.ɵɵproperty("value",e.pageSize)("disabled",e.disabled)("aria-labelledby",e._pageSizeLabelId)("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),t.ɵɵadvance(2),t.ɵɵrepeater(e._displayedPageSizeOptions)}}function D(a,s){if(a&1&&(t.ɵɵelementStart(0,"div",15),t.ɵɵtext(1),t.ɵɵelementEnd()),a&2){let e=t.ɵɵnextContext(2);t.ɵɵadvance(),t.ɵɵtextInterpolate(e.pageSize)}}function w(a,s){if(a&1&&(t.ɵɵelementStart(0,"div",3)(1,"div",13),t.ɵɵtext(2),t.ɵɵelementEnd(),t.ɵɵtemplate(3,O,6,7,"mat-form-field",14)(4,D,2,1,"div",15),t.ɵɵelementEnd()),a&2){let e=t.ɵɵnextContext();t.ɵɵadvance(),t.ɵɵattribute("id",e._pageSizeLabelId),t.ɵɵadvance(),t.ɵɵtextInterpolate1(" ",e._intl.itemsPerPageLabel," "),t.ɵɵadvance(),t.ɵɵconditional(e._displayedPageSizeOptions.length>1?3:-1),t.ɵɵadvance(),t.ɵɵconditional(e._displayedPageSizeOptions.length<=1?4:-1)}}function L(a,s){if(a&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"button",19),t.ɵɵlistener("click",function(){t.ɵɵrestoreView(e);let i=t.ɵɵnextContext();return t.ɵɵresetView(i.firstPage())}),t.ɵɵnamespaceSVG(),t.ɵɵelementStart(1,"svg",8),t.ɵɵelement(2,"path",20),t.ɵɵelementEnd()()}if(a&2){let e=t.ɵɵnextContext();t.ɵɵproperty("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),t.ɵɵattribute("aria-label",e._intl.firstPageLabel)}}function k(a,s){if(a&1){let e=t.ɵɵgetCurrentView();t.ɵɵelementStart(0,"button",21),t.ɵɵlistener("click",function(){t.ɵɵrestoreView(e);let i=t.ɵɵnextContext();return t.ɵɵresetView(i.lastPage())}),t.ɵɵnamespaceSVG(),t.ɵɵelementStart(1,"svg",8),t.ɵɵelement(2,"path",22),t.ɵɵelementEnd()()}if(a&2){let e=t.ɵɵnextContext();t.ɵɵproperty("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),t.ɵɵattribute("aria-label",e._intl.lastPageLabel)}}var p=(()=>{class a{constructor(){this.changes=new f,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,n,i)=>{if(i==0||n==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*n,r=o<i?Math.min(o+n,i):o+n;return`${o+1} \u2013 ${r} of ${i}`}}static{this.ɵfac=function(n){return new(n||a)}}static{this.ɵprov=t.ɵɵdefineInjectable({token:a,factory:a.ɵfac,providedIn:"root"})}}return a})();function F(a){return a||new p}var E={provide:p,deps:[[new h,new u,p]],useFactory:F},A=50,m=class{},B=new _("MAT_PAGINATOR_DEFAULT_OPTIONS"),R=0,N=(()=>{class a{get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(n=>l(n,0)),this._updateDisplayedPageSizeOptions()}constructor(e,n,i){if(this._intl=e,this._changeDetectorRef=n,this._pageSizeLabelId=`mat-paginator-page-size-label-${R++}`,this._isInitialized=!1,this._initializedStream=new v(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new b,this.initialized=this._initializedStream,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:o,pageSizeOptions:r,hidePageSize:g,showFirstLastButtons:c}=i;o!=null&&(this._pageSize=o),r!=null&&(this._pageSizeOptions=r),g!=null&&(this.hidePageSize=g),c!=null&&(this.showFirstLastButtons=c)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let n=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(n/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:A),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,n)=>e-n),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}static{this.ɵfac=function(n){return new(n||a)(t.ɵɵdirectiveInject(p),t.ɵɵdirectiveInject(t.ChangeDetectorRef),t.ɵɵdirectiveInject(B,8))}}static{this.ɵcmp=t.ɵɵdefineComponent({type:a,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",l],length:[2,"length","length",l],pageSize:[2,"pageSize","pageSize",l],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",d],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",d],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",d]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[t.ɵɵInputTransformsFeature,t.ɵɵStandaloneFeature],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(n,i){n&1&&(t.ɵɵelementStart(0,"div",1)(1,"div",2),t.ɵɵtemplate(2,w,5,4,"div",3),t.ɵɵelementStart(3,"div",4)(4,"div",5),t.ɵɵtext(5),t.ɵɵelementEnd(),t.ɵɵtemplate(6,L,3,5,"button",6),t.ɵɵelementStart(7,"button",7),t.ɵɵlistener("click",function(){return i.previousPage()}),t.ɵɵnamespaceSVG(),t.ɵɵelementStart(8,"svg",8),t.ɵɵelement(9,"path",9),t.ɵɵelementEnd()(),t.ɵɵnamespaceHTML(),t.ɵɵelementStart(10,"button",10),t.ɵɵlistener("click",function(){return i.nextPage()}),t.ɵɵnamespaceSVG(),t.ɵɵelementStart(11,"svg",8),t.ɵɵelement(12,"path",11),t.ɵɵelementEnd()(),t.ɵɵtemplate(13,k,3,5,"button",12),t.ɵɵelementEnd()()()),n&2&&(t.ɵɵadvance(2),t.ɵɵconditional(i.hidePageSize?-1:2),t.ɵɵadvance(3),t.ɵɵtextInterpolate1(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),t.ɵɵadvance(),t.ɵɵconditional(i.showFirstLastButtons?6:-1),t.ɵɵadvance(),t.ɵɵproperty("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),t.ɵɵattribute("aria-label",i._intl.previousPageLabel),t.ɵɵadvance(3),t.ɵɵproperty("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),t.ɵɵattribute("aria-label",i._intl.nextPageLabel),t.ɵɵadvance(3),t.ɵɵconditional(i.showFirstLastButtons?13:-1))},dependencies:[C,S,y,x,I],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-app-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-app-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-app-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-app-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-app-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-app-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-app-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],encapsulation:2,changeDetection:0})}}return a})(),et=(()=>{class a{static{this.ɵfac=function(n){return new(n||a)}}static{this.ɵmod=t.ɵɵdefineNgModule({type:a})}static{this.ɵinj=t.ɵɵdefineInjector({providers:[E],imports:[P,z,T,N]})}}return a})();export{B as MAT_PAGINATOR_DEFAULT_OPTIONS,E as MAT_PAGINATOR_INTL_PROVIDER,F as MAT_PAGINATOR_INTL_PROVIDER_FACTORY,N as MatPaginator,p as MatPaginatorIntl,et as MatPaginatorModule,m as PageEvent};