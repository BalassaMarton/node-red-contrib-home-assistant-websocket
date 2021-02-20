(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{470:function(t,e,a){"use strict";a.r(e);var s=a(17),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"call-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-service"}},[t._v("#")]),t._v(" Call Service")]),t._v(" "),a("p",[t._v("Sends a request to home assistant for any domain and service available ("),a("code",[t._v("light/turn_on")]),t._v(", "),a("code",[t._v("input_select/select_option")]),t._v(", etc..)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Helpful Examples")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/call-service.html"}},[t._v("Call Service Tips and Tricks")])],1)]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" Domain "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("Service domain to call")]),t._v(" "),a("h3",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[t._v("#")]),t._v(" Service "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("Service service to call")]),t._v(" "),a("h3",{attrs:{id:"entity-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-id"}},[t._v("#")]),t._v(" Entity Id")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("A comma-delimited list of entity ids.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("entity_id")]),t._v(" exists in the data property it will have precedence over this value.")])]),t._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("JSONata | JSON")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")]),t._v(" when data type is JSON")],1)]),t._v(" "),a("p",[t._v("JSON object to pass along.")]),t._v(" "),a("h3",{attrs:{id:"merge-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge-context"}},[t._v("#")]),t._v(" Merge Context")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("If defined will attempt to merge the global and flow context variable into the config")]),t._v(" "),a("h3",{attrs:{id:"alternative-template-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-template-tags"}},[t._v("#")]),t._v(" Alternative Template Tags")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("Will change the tags used for mustache template to "),a("code",[t._v("<%")]),t._v(" and "),a("code",[t._v("%>")])]),t._v(" "),a("h3",{attrs:{id:"output-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-location"}},[t._v("#")]),t._v(" Output Location")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("None")])])]),t._v(" "),a("p",[t._v("Customizable location for the output of the node.")]),t._v(" "),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("p",[t._v("All properties need to be under "),a("code",[t._v("msg.payload")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"merging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merging"}},[t._v("#")]),t._v(" Merging")]),t._v(" "),a("p",[t._v("If the incoming message has a "),a("code",[t._v("payload")]),t._v(" property with "),a("code",[t._v("domain")]),t._v(", "),a("code",[t._v("service")]),t._v(" set it will override any config values if set.")]),t._v(" "),a("p",[t._v("If the incoming message has a "),a("code",[t._v("payload.data")]),t._v(" that is an object or parsable into an object these properties will be "),a("strong",[t._v("merged")]),t._v(" with any config values set.")]),t._v(" "),a("p",[t._v("If the node has a property value in its config for "),a("code",[t._v("Merge Context")]),t._v(" then the "),a("code",[t._v("flow")]),t._v(" and "),a("code",[t._v("global")]),t._v(" contexts will be checked for this property which should be an object that will also be merged into the data payload.")]),t._v(" "),a("h4",{attrs:{id:"merge-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge-resolution"}},[t._v("#")]),t._v(" Merge Resolution")]),t._v(" "),a("p",[t._v("As seen above the "),a("code",[t._v("data")]),t._v(" property has a lot going on in the way of data merging, in the end, all of these are optional and the rightmost will win if a property exists in multiple objects")]),t._v(" "),a("p",[t._v("Config Data, Global Data, Flow Data, Payload Data ( payload data property always\nwins if provided")]),t._v(" "),a("h3",{attrs:{id:"domain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-2"}},[t._v("#")]),t._v(" domain")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Service domain to call")]),t._v(" "),a("h3",{attrs:{id:"service-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-2"}},[t._v("#")]),t._v(" service")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Service service to call")]),t._v(" "),a("h3",{attrs:{id:"data-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-2"}},[t._v("#")]),t._v(" data")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])])]),t._v(" "),a("p",[t._v("Service data to send with API call")]),t._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("p",[t._v("All properties will be under what is defined in "),a("code",[t._v("Output Location")]),t._v(" in the config.")]),t._v(" "),a("h3",{attrs:{id:"domain-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-3"}},[t._v("#")]),t._v(" domain")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Service "),a("code",[t._v("domain")]),t._v(" service was called with")]),t._v(" "),a("h3",{attrs:{id:"service-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-3"}},[t._v("#")]),t._v(" service")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Service "),a("code",[t._v("service")]),t._v(" was called with")]),t._v(" "),a("h3",{attrs:{id:"data-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-3"}},[t._v("#")]),t._v(" data")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])])]),t._v(" "),a("p",[t._v("Service "),a("code",[t._v("data")]),t._v(" used in a call, if one was used")]),t._v(" "),a("h4",{attrs:{id:"example-of-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-output"}},[t._v("#")]),t._v(" Example of output:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"service"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"turn_on"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"entity_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"light.kitchen"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),a("h4",{attrs:{id:"version-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-1"}},[t._v("#")]),t._v(" Version 1")]),t._v(" "),a("ul",[a("li",[t._v("Entity ids are no longer merged with the data property on the front end")]),t._v(" "),a("li",[t._v("The data field does not have to be valid JSON until after templates are rendered. This change will allow you to assign numbers to properties as an actual number and not a "),a("code",[t._v("string")]),t._v(" using templates.")]),t._v(" "),a("li",[a("code",[t._v("entity_id")]),t._v(" in the data property will supersede the entity id field")]),t._v(" "),a("li",[t._v("Flows exported from version 0.14.0 will lose the entity id when imported into\na previous version")])])])}),[],!1,null,null,null);e.default=r.exports}}]);