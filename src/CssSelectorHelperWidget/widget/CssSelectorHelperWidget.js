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
dojo.provide("CssSelectorHelperWidget.widget.CssSelectorHelperWidget");

dojo.declare("CssSelectorHelperWidget.widget.CssSelectorHelperWidget", [ mxui.widget._WidgetBase ], {
    postCreate : function () {
        'use strict';

        if (this.domNode.previousSibling) {
            this.domNode.previousSibling.setAttribute('cssSelectorHelper', this.attributeValue);
        } else {
            console.warn('CssSelectorHelperWidget: No previous sibling found');
        }

    },
    uninitialize : function () {
        'use strict';
    }
});