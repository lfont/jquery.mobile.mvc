/*
Simple MVC library for jQuery Mobile - Demo
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

jQuery(function ($) {
    var demoApp = Mvc.application({
        main: Mvc.controller({
            page: {
                title: "Main Page",
                textInputLabel: "Type your name: ",
                buttonLabel: "Click me",
                footer: "just a simple demo"
            },
            userName: "",
            pagebeforecreate: function (event, renderViewCallback) {
                renderViewCallback(this.renderView("pagebeforecreate"));
            },
            sayHello: function (event) {
                event.preventDefault();
                alert("Hello, " + this.userName);
            }
        })
    });

    demoApp.start();
});
