/**
	Widget Name
	========================

	@file      : CssSelectorHelperWidget.js
	@version   : 2.0
	@author    : Marcel Groeneweg
	@date      : 08-10-2014
	@copyright : Synobsys
	@license   : Apache License, Version 2.0, January 2004

	Documentation
	=============
	CSS selector helper. This widget finds its previous sibling in the DOM tree and puts attribute cssselectorhelper on it with the specified value.

*/
(function () {
    'use strict';

    require([

        'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_Widget', 'dojo/query',

    ], function (declare, _WidgetBase, _Widget, dojoQuery) {
		

        // Declare widget.
        return declare('CssSelectorHelperWidget.widget.CssSelectorHelperWidgetContext', [ _WidgetBase, _Widget ], {

			_mxobj              : null,
		
            setupAttribute : function () {
				
				
				var attributeValue = '',
					node,
					refNodeList;
				
				if( this._mxobj != null ) {
					if( this._mxobj.has(this.attributeContainingValue) ) {
						attributeValue = this._mxobj.get(this.attributeContainingValue);

						if (this.cssSelector) {
							refNodeList = dojoQuery(this.cssSelector);
							if (refNodeList && refNodeList.length) {
								node = refNodeList[0];
								if (this.applyTo == 'Parent' ) {
									if (node.parentNode) {
										node.parentNode.setAttribute('cssSelectorHelper', attributeValue);
									} else {
										console.warn('CssSelectorHelperWidget: No parent node found for CSS selector ' + this.cssSelector);
									}
								}
								else {
									if (node.previousSibling) {
										node.previousSibling.setAttribute('cssSelectorHelper', attributeValue);
									} else {
										console.warn('CssSelectorHelperWidget: No previous sibling found for CSS selector ' + this.cssSelector);
									}
								}
							} else {
								console.warn('CssSelectorHelperWidget: Nothing found for CSS selector ' + this.cssSelector);
							}
							
						} else {
				
							if (this.applyTo == 'Parent' ) {
								if (this.domNode.parentNode) {
									this.domNode.parentNode.setAttribute('cssSelectorHelper', attributeValue);
								} else {
									console.warn('CssSelectorHelperWidget: No parent node found');
								}
							}
							else {
								if (this.domNode.previousSibling) {
									this.domNode.previousSibling.setAttribute('cssSelectorHelper', attributeValue);
								} else {
									console.warn('CssSelectorHelperWidget: No previous sibling found');
								}
							}
						}
					}
					else 
						console.error( "CssSelectorHelperWidget: No attribute found: " + this.attributeContainingValue );
				}
				else 
					console.error( "CssSelectorHelperWidget: No MxObject initialized" );
            },
			
			update : function(obj, callback){
				dojo.empty(this.domNode);
				
				if (!obj){
					callback && callback();
					return;
				}
				
				this._mxobj = obj;

				this.subscribe({
					guid : obj.getGuid(),
					callback : this.setupAttribute
				});

				
				this.setupAttribute();

				callback && callback();
			}
        });
    });

}());
