/*
Simple MVC library for jQuery Mobile - Demo
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

(function (mvc) {
    var demoApp = mvc.application();

    demoApp.controller("#main", {
        userName: "",
        
        pagebeforecreate: function () {
            this.render("pagebeforecreate", {
                title: "Main Page",
                textInputLabel: "Type your name: ",
                buttonLabel: "Click me",
                footer: "just a simple demo"    
            });
        },
        
        sayHello: function (req) {
            req.event.preventDefault();
            window.alert("Hello, " + this.userName);
        }
    });
}(window.jqmMvc));
