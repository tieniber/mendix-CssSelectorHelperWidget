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

        'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_Widget'

    ], function (declare, _WidgetBase, _Widget) {

        // Declare widget.
        return declare('CssSelectorHelperWidget.widget.CssSelectorHelperWidget', [ _WidgetBase, _Widget ], {

            postCreate : function () {

				if( this.applyTo == 'Parent' ) {
					if (this.domNode.parentNode) {
						this.domNode.parentNode.setAttribute('cssSelectorHelper', attributeValue);
					} else {
						console.warn('CssSelectorHelperWidget: No parent node found');
					}
				}
				else {
					if (this.domNode.previousSibling) {
						this.domNode.previousSibling.setAttribute('cssSelectorHelper', this.attributeValue);
					} else {
						console.warn('CssSelectorHelperWidget: No previous sibling found');
					}
				}
            }
        });
    });

}());
