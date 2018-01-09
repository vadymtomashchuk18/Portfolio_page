//hide panel navbar-collapse after click on link
$(".navbar-collapse a").click(function() {
	$(".navbar-collapse").collapse("hide");
});

//slow scroll to elements , include height of navbar panel
$(function(){
	$(".nav-link").click(function (){
		//scroll to element
		var scroll_to = $(this).attr("href");
		if (scroll_to != 0) {
			$("html,body").animate({scrollTop: $(scroll_to).offset().top - 70}, 1000);
			$("a").removeClass("active");
			$(this).addClass("active");
		}
	});


});

//height of welcome page
$(function(){
	$("#welcome").css({"height": $(window).height()});
	console.log($(".home").height() + " - 1");
	$(".greeting").css({"padding-top": ($(".home").height() - $(".greeting").height())/2 + "px"});

	$("#contact").css({"height": "auto"});
});

// console.log($(window).height());
// console.log($(".home").height());

$(function(){
	//create list of section"s id of page with their positions 
	var menuItems = $("#navbar-main").find("a"),
	    top_ = 0,
	    scrollItems = menuItems.map(function(){
	    	var item = $(this).attr("href");
	    	console.log($(item).height())
		    var item_obj = {
		      	id: $(this).attr("href"),
		      	top_of_item: top_,
		      	bottom_of_item: top_ + $(item).height()
		    };
		    top_ = top_ + $(item).height() + 1;
		    return item_obj;
	    });
	    console.log(scrollItems);

	//change active menu item during scrolling 
	$(window).scroll(function(){
		var currScrollPos = $(window).scrollTop() + ($("nav").height())*2;
		scrollItems.map(function(){
			var section_ = this;
			if (section_.top_of_item < currScrollPos && 
				currScrollPos < section_.bottom_of_item){
				menuItems.map(function(){
					if (section_.id == $(this).attr("href")){
						$("a").removeClass("active");
						$(this).addClass("active");
					}
				});
			}
		});
	});
});
// SkrollSpy for navigation
// $("body").scrollspy({ target: ".navbar-main" })

//dynamic height of navbar-collapse with changing window"s sizes
$(function() {
  var changeHeightNavbarCollapse = function() {
    $(".navbar-collapse").css({ 
      maxHeight: $(window).height() - $(".navbar-header").height() + "px"
    });
  };

  changeHeightNavbarCollapse();

  $(window).resize(function() {
    if (window.innerWidth <= 768) {
      changeHeightNavbarCollapse();
    }
  });

});
