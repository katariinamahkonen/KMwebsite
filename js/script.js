(function (global) {

    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
        console.log(selector)
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };


    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

        // On first load, show home view
        $ajaxUtils.sendGetRequest(
            "html/katariinaPage.html",
            function (html) {
                console.log(html)
               insertHtml("#contents", html); 
            },
            false
        ); 
    });




    aip = {};


    aip.loadPage = function (page) {
        // showLoading("#main-content");
        var htmlpage = "html/homePage.html" 
        if ( page === 'team') {
            htmlpage = "html/teamPage.html" 
        } else if ( page === 'Katariina') {
            htmlpage = "html/KatariinaPage.html"
        } else if ( page === 'Jenni') {
            htmlpage = "html/JenniPage.html"
        } else if ( page === 'solutions') {
            htmlpage = "html/solutionsPage.html"
        }         $ajaxUtils.sendGetRequest(
             htmlpage,
             function (html) {
                 console.log(html)
                insertHtml("#contents", html); 
             },
            false);
     };

    // Load  Home view
    aip.loadHomePage = function () {
       // showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            "html/katariinaPage.html",
            function (html) {
                console.log(html)
               insertHtml("#contents", html); 
            },
           false);
    };
    global.$aip = aip;

})(window);