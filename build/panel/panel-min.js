YUI.add("panel",function(b){var a=b.ClassNameManager.getClassName;b.Panel=b.Base.create("panel",b.Widget,[b.WidgetPosition,b.WidgetStdMod,b.WidgetAutohide,b.WidgetButtons,b.WidgetModality,b.WidgetPositionAlign,b.WidgetPositionConstrain,b.WidgetStack],{BUTTONS:{close:{label:"Close",action:"hide",section:"header",classNames:a("button","close")}}},{ATTRS:{buttons:{value:["close"]}}});},"@VERSION@",{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:true});