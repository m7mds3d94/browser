

// var url = document.getElementById("url");
// var searchs = document.getElementById("search");
// // var x = document.baseURI;
// var framex = document.getElementById("frame-url");
// var loading = document.getElementById("load");




// function DoAction(event) {
//     var s = event.which;
//     if (s === 13) {
//     framex.setAttribute("src", searchs.value);
//     framex.classList.add("put");
//     loading.classList.add("frame");
    
    
//     }
// }


// function loadPage() {
//     srcFrame = framex.getAttribute("src");
//     window.frames[0].location.href = srcFrame;
// }
// searchs.onfocus= function () {
//     framex.setAttribute('pr',framex.getAttribute('src'));
// }

// function prevPage() {

//         window.history.back();
//         searchs.value = framex.getAttribute("pr");
//         framex.setAttribute("nx", framex.getAttribute("src"));
// }

// function nxtPage() {
//     window.history.forward();
//     searchs.value = framex.getAttribute("nx");
// }




var resultSearch = $(".frame");
var search = $("#search")
var savdata = [];
var previos = $(".right-arrow:eq(0)");
var next = $(".right-arrow:eq(1)");
var reload = $(".reload");

previos.click(back)
next.click(forward);
reload.click(pageReload)
search.on("keyup", go)

                function go() {
                var url = $(this).val();
                var go = event.which;
                var load = $(".contain")
                if (go === 13) 
                {
                resultSearch.addClass("put")
                load.addClass("frame")
                if(previos.attr("disabled") !== "disabled" && next.attr("disabled") !== "disabled")
                {
                        next.attr("disabled",true)
                        $(".forward").css({"color":"#ddd"});
                }
                if (url.search("https://") == 0)  
                {
                resultSearch.attr("src", url)
                var edit_title_page = url.substr(8,url.length)
                document.title = edit_title_page;
                } 
                else
                {
                resultSearch.attr("src","https://" + url)
                document.title = url;
                }
                savdata.push(url) 
                reload.removeAttr("disabled")
                if(savdata.indexOf(url) === 1)
                {
                        $(".previos").css({"color":"#000"});
                        $(".forward").css({"color":"#ddd"});
                          previos.removeAttr("disabled")
                }
                if(previos.attr("on") === "0")
                {
                        next.attr("disabled",true)
                        $(".forward").css({"color":"#ddd"});
                        previos.removeAttr("disabled",true)
                        $(".previos").css({"color":"#000"});
                }
                }
                }

                // start reload page function
                function pageReload() {
                window.frames[0].location.href = resultSearch.attr("src");
                if($(this).attr("off") == "0")
                {
                        $(this).css("transform","rotate(360deg)")
                        $(this).attr("off","1")
                } 
                else
                {
                        $(this).css("transform","rotate(0deg)")
                        $(this).attr("off","0")
                }
                }


                // start pervios function
var x = 0;

                function back() {
                next.removeAttr("disabled")
                $(".forward").css({"color":"#000"}); 
                var findindex = savdata.indexOf(search.val());
                var lastindex = savdata[savdata.length - 1]
                if (search.val() === lastindex)
                {
                x = findindex - 1;
                search.val(savdata[x]); 
                resultSearch.attr("src",savdata[x])
                if(search.val() === savdata[0])
                {
                $(".previos").css({"color":"#ddd"});
                 $(this).attr("disabled",true)  
                }
                if(savdata[x].substring(0,8) === "https://")
                {
                resultSearch.attr("src", savdata[x])
                 var edit_title_page = savdata[x].substr(8,savdata[x].length)
                 document.title = edit_title_page;
                }
                else
                {
                resultSearch.attr("src", "https://" + savdata[x])
                document.title = savdata[x];
                }
                } 
                else
                {
                if (x != search.val()) 
                {
                x = findindex - 1;
                search.val(savdata[x])
                if(savdata[x].substring(0,8) === "https://")
                {
                resultSearch.attr("src", savdata[x])
                var edit_title_page = savdata[x].substr(8,savdata[x].length)
                 document.title = edit_title_page;
                }
                else
                {
                resultSearch.attr("src", "https://" + savdata[x])
                document.title = savdata[x];
                }
                }
                if(search.val() === savdata[0])
                {
                $(".previos").css({"color":"#ddd"});
                x = savdata[0];
                if (x.substring(0,8) === "https://")
                {
                 resultSearch.attr("src",x)
                }
                else
                {
                resultSearch.attr("src","https://" + x)
                }
                $(this).attr("disabled",true)
                $(this).attr("on","0")
                }
                }
                }
                // end previos function



                // start forward function
var i = -1;
        function forward() {
        previos.removeAttr("disabled")
        $(".previos").css({"color":"#000"});
        var nextindex = savdata.indexOf(search.val())
        if(search.val() != i)
        {
        i = nextindex;
        i++;
        search.val(savdata[i]);
        if(savdata[i].substring(0,8) === "https://")
        {
        resultSearch.attr("src", savdata[i])
        var edit_title_page = savdata[i].substr(8,savdata[i].length)
        document.title = edit_title_page;
        }
        else
        {
        resultSearch.attr("src", "https://" + savdata[i])
        document.title = savdata[i];
        }
        if(savdata[i] == savdata[savdata.length - 1]) 
        {
        $(".forward").css({"color":"#ddd"});    
        i = savdata[savdata.length - 1]
        if(i.substr(0,8) === "https://")
        {
        resultSearch.attr("src",i)
        var edit_title_page = i.substring(8,i.length)
        document.title = edit_title_page;
        }
        else
        {
        resultSearch.attr("src","https://" + i)
        document.title = i;
        }
        $(this).attr("disabled",true)
        }
        } 
        }

        // end forward function




