
$(document).ready(function(){
    $("#off").click(function(){
        $(this).toggleClass("fa-toggle-on");


        if($("body").hasClass("dark")){
            $("body").removeClass("dark");
            $("#off").css("color", "red");

        }
        else{
            $("body").addClass("dark");
            $("#off").css("color", "#00FF00");

        }


        if($(".container").hasClass("dark")){
            $(".container").removeClass("dark");
            $(".container").css("background", "#141d26");
        }
        else{
            $(".container").addClass("dark");
            $(".container").css("background", "rgb(8, 12, 68)");
        }


        if($(".top-section").hasClass("dark")){
            $(".top-section").removeClass("dark");
            $(".top-section").css("background", "#243447");
        }
        else{
            $(".top-section").addClass("dark");
            $(".top-section").css("background", "#546CCE");
        }


        if($(".top-section .main").hasClass("dark")){
            $(".top-section .main").removeClass("dark");
            $(".top-section .main").css("background", "#141d26");
        }
        else{
            $(".top-section .main").addClass("dark");
            $(".top-section .main").css("background", "rgb(8, 12, 68)");
        }


        if($(".main-top").hasClass("dark")){
            $(".main-top").removeClass("dark");
            $(".main-top").css("background", "#243447");
        }
        else{
            $(".main-top").addClass("dark");
            $(".main-top").css("background", "#588CE4");
        }


        if($(".main-bottom-left").hasClass("dark")){
            $(".main-bottom-left").removeClass("dark");
            $(".main-bottom-left").css("background", "#243447");
        }
        else{
            $(".main-bottom-left").addClass("dark");
            $(".main-bottom-left").css("background", "#588CE4");
        }


        // THE SECTION OF THE DOWN SECTION
        if($(".down-section").hasClass("dark")){
            $(".down-section").removeClass("dark");
            $(".down-section").css("background", "#243447");
        }
        else{
            $(".down-section").addClass("dark");
            $(".down-section").css("background", "#546CCE");
        }



        // THE CHAT SECTION
        if($(".chat-section").hasClass("dark")){
            $(".chat-section").removeClass("dark");
            $(".chat-section").css("background", "#141d26");
        }
        else{
            $(".chat-section").addClass("dark");
            $(".chat-section").css("background", "rgb(111, 158, 240)");
        }





        // THE SEND SECTION

        if($(".send-section").hasClass("dark")){
            $(".send-section").removeClass("dark");
            $(".send-section").css("background", "#141d26");
        }
        else{
            $(".send-section").addClass("dark");
            $(".send-section").css("background", "#c51f5d");
        }


        if($(".text").hasClass("dark")){
            $(".text").removeClass("dark");
            $(".text").css("background", "#243447");
        }
        else{
            $(".text").addClass("dark");
            $(".text").css("background", "rgb(8, 12, 68)");
        }


        if($(".send").hasClass("dark")){
            $(".send").removeClass("dark");
            $(".send").css("background", "#243447");
        }
        else{
            $(".send").addClass("dark");
            $(".send").css("background", "rgb(8, 12, 68)");
        }


        if($(".text input").hasClass("dark")){
            $(".text input").removeClass("dark");
            $(".text input").css("background", "#141d26");
        }
        else{
            $(".text input").addClass("dark");
            $(".text input").css("background", "rgb(111, 158, 240)");
        }


        if($(".send-icon").hasClass("dark")){
            $(".send-icon").removeClass("dark");
            $(".send-icon").css("background", "#141d26");
            $(".send-icon").css("border-radius", "none");
        }
        else{
            $(".send-icon").addClass("dark");
            $(".send-icon").css("background", "rgb(111, 158, 240)");
            $(".send-icon").css("border-radius", "150px");
        }

        if($(".side-main").hasClass("dark")){
            $(".side-main").removeClass("dark");
            $(".side-main").css("background", "#243447");
        }
        else{
            $(".side-main").addClass("dark");
            $(".side-main").css("background", "#588CE4");
        }



        // THE SECTION OF THE USERS
        if($(".users").hasClass("dark")){
            $(".users").removeClass("dark");
            $(".users").css("background", "#141d26");
        }
        else{
            $(".users").addClass("dark");
            $(".users").css("background", "rgb(8, 12, 68)");
        }


        if($(".user-container").hasClass("dark")){
            $(".user-container").removeClass("dark");
            $(".user-container").css("background", "#243447");
        }
        else{
            $(".user-container").addClass("dark");
            $(".user-container").css("background", "#546CCE");
        }


        if($(".user-list").hasClass("dark")){
            $(".user-list").removeClass("dark");
            $(".user-list").css("background", "#141d26");
        }
        else{
            $(".user-list").addClass("dark");
            $(".user-list").css("background", "rgb(8, 12, 68)");
        }


        if($(".user-box").hasClass("dark")){
            $(".user-box").removeClass("dark");
            $(".user-box").css("background", "#243447");
        }
        else{
            $(".user-box").addClass("dark");
            $(".user-box").css("background", "#546CCE");
        }


        if($(".left-box").hasClass("dark")){
            $(".left-box").removeClass("dark");
            $(".left-box").css("background", "#141d26");
            $(".left-box").css("border", "none");
        }
        else{
            $(".left-box").addClass("dark");
            $(".left-box").css("background", "rgb(8, 12, 68)");
            $(".left-box").css("border", "2px solid #c51f5d");
        }


        if($(".right-box").hasClass("dark")){
            $(".right-box").removeClass("dark");
            $(".right-box").css("background", "#141d26");
            $(".right-box").css("border", "none");
        }
        else{
            $(".right-box").addClass("dark");
            $(".right-box").css("background", "rgb(8, 12, 68)");
            $(".right-box").css("border", "2px solid #c51f5d");
        }


        // THE SECTION OF THE PROFILE

        if($(".profile").hasClass("dark")){
            $(".profile").removeClass("dark");
            $(".profile").css("background", "#141d26");
        }
        else{
            $(".profile").addClass("dark");
            $(".profile").css("background", "rgb(8, 12, 68)");
        }


        if($(".profile-box").hasClass("dark")){
            $(".profile-box").removeClass("dark");
            $(".profile-box").css("background", "#243447");
        }
        else{
            $(".profile-box").addClass("dark");
            $(".profile-box").css("background", "#546CCE");
        }


        if($(".profile-bottom").hasClass("dark")){
            $(".profile-bottom").removeClass("dark");
            $(".profile-bottom").css("background", "#141d26");
        }
        else{
            $(".profile-bottom").addClass("dark");
            $(".profile-bottom").css("background", "rgb(8, 12, 68)");
        }



        // THE SECTION OF THE SEARCH

        if($(".search").hasClass("dark")){
            $(".search").removeClass("dark");
            $(".search").css("background", "#141d26");
        }
        else{
            $(".search").addClass("dark");
            $(".search").css("background", "rgb(8, 12, 68)");
        }


        if($(".search-div").hasClass("dark")){
            $(".search-div").removeClass("dark");
            $(".search-div").css("background", "#243447");
        }
        else{
            $(".search-div").addClass("dark");
            $(".search-div").css("background", "#546CCE");
        }


        if($(".search-top").hasClass("dark")){
            $(".search-top").removeClass("dark");
            $(".search-top").css("background", "#141d26");
        }
        else{
            $(".search-top").addClass("dark");
            $(".search-top").css("background", "rgb(8, 12, 68)");
        }


        if($(".search-left").hasClass("dark")){
            $(".search-left").removeClass("dark");
            $(".search-left").css("background", "#243447");
        }
        else{
            $(".search-left").addClass("dark");
            $(".search-left").css("background", "#546CCE");
        }


        if($(".search-right").hasClass("dark")){
            $(".search-right").removeClass("dark");
            $(".search-right").css("background", "#243447");
        }
        else{
            $(".search-right").addClass("dark");
            $(".search-right").css("background", "#546CCE");
        }


        if($(".search-icon").hasClass("dark")){
            $(".search-icon").removeClass("dark");
            $(".search-icon").css("background", "#141d26");
        }
        else{
            $(".search-icon").addClass("dark");
            $(".search-icon").css("background", "rgb(8, 12, 68)");
        }


        if($(".search input").hasClass("dark")){
            $(".search input").removeClass("dark");
            $(".search input").css("background", "#141d26");
        }
        else{
            $(".search input").addClass("dark");
            $(".search input").css("background", "rgb(8, 12, 68)");
        }


        if($(".search-bottom").hasClass("dark")){
            $(".search-bottom").removeClass("dark");
            $(".search-bottom").css("background", "#141d26");
        }
        else{
            $(".search-bottom").addClass("dark");
            $(".search-bottom").css("background", "rgb(8, 12, 68)");
        }
    });
});



// THE SECTION OF THE USERS
$(document).ready(function(){
    $("#chat").click(function(){
        $(".users").fadeToggle("slower");
    });
});

$(document).ready(function(){
    $("#side").click(function(){
        $(".side-main").slideToggle("slower");
    });
});

$(document).ready(function(){
    $("#profile").click(function(){
        $(".profile").slideToggle("slower");
    });
});

