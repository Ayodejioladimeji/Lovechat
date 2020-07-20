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


        if($(".section").hasClass("dark")){
            $(".section").removeClass("dark");
            $(".section").css("background", "#243447");
        }
        else{
            $(".section").addClass("dark");
            $(".section").css("background", "#546CCE");
        }


        if($(".top-section").hasClass("dark")){
            $(".top-section").removeClass("dark");
            $(".top-section").css("background", "#141d26");
        }
        else{
            $(".top-section").addClass("dark");
            $(".top-section").css("background", "rgb(8, 12, 68)");
        }



        if($(".top-left").hasClass("dark")){
            $(".top-left").removeClass("dark");
            $(".top-left").css("background", "#243447");
        }
        else{
            $(".top-left").addClass("dark");
            $(".top-left").css("background", "#588CE4");
        }



        if($(".down-section").hasClass("dark")){
            $(".down-section").removeClass("dark");
            $(".down-section").css("background", "#141d26");
        }
        else{
            $(".down-section").addClass("dark");
            $(".down-section").css("background", "rgb(8, 12, 68)");
        }


        if($(".main").hasClass("dark")){
            $(".main").removeClass("dark");
            $(".main").css("background", "#141d26");
        }
        else{
            $(".main").addClass("dark");
            $(".main").css("background", "rgb(8, 12, 68)");
        }



    });
});