mendix-CssSelectorHelperWidget
==============================

Widget IDs of a Mendix application change everytime a page is displayed, so CSS selection using IDs is not possible.

With this widget you can style specific elements (containers) of a page by putting this widget next to the element.

This widget places an attribute on the previous sibling in the DOM tree.

##Typical Usage Scenario
Style a specific table or group box or elements within a container

##Features And Limitations
Set an attribute on the previous sibling node in the DOM to allow CSS selection styling on it.

##Installation
Normal installation using the App Store.

##Dependencies
Mendix 6.10.2 Environment
 
##Configuration
In the designer, place this widget directly underneath the element (from here on called the reference element) you want to style and set a value for the attribute. 

In the css, styling can be created specific for the attribute value so it gets applied to the referenced element

At runtime, the widget will put attribute cssselectorhelper on the referenced element with the value you specified. This allows the CSS to style the referenced element or any sub elements. 

##Examples
The result of the examples can be seen in the screenshots. 

###Example 1, CssSelectorHelperWidget placed directly underneath a table
Value group1 was used as attribute value on the CssSelectorHelperWidget.

Put a background color on the entire table.

    table[cssselectorhelper=group1] {
    	background-color: #DFFFE7;   
    }

Select all labels in a table cell with render mode = header and change the text to appear in blue italic.

    table[cssselectorhelper=group1] th>label {
    	color: blue;  
    	font-style: italic;
    }
     
###Example 2, CssSelectorHelperWidget placed directly underneath a group box
Value group2 was used as attribute value on the CssSelectorHelperWidget.

Put a background color on the body of the group box.

    div[cssselectorhelper=group2]>div {
    	background-color: paleturquoise; 
    }
     

Select all labels in a table cell with render mode = header and change the text to appear in red.
    
    div[cssselectorhelper=group2]>div th>label {
    	color: red;   
    }
     
Select all output elements in the groupbox and make them appear as bold green.

    div[cssselectorhelper=group2]>div div[id^=mxui_widget_TextInput]>label,
    div[cssselectorhelper=group2]>div div[id^=mxui_widget_NumberInput]>label,
    div[cssselectorhelper=group2]>div div[id^=mxui_widget_DateInput]>label,
    div[cssselectorhelper=group2]>div div[id^=mxui_widget_EnumSelect]>label,
    div[cssselectorhelper=group2]>div div.mx-referenceselector-input-wrapper>label{
	    color: forestgreen;
	    font-weight: bold;
    }
    
 

For more information about CSS selectors, please check [http://www.w3schools.com/cssref/css_selectors.asp](http://www.w3schools.com/cssref/css_selectors.asp)

##Properties
Attribute value. This value is used for attribute cssselectorhelper.
