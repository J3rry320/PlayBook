$(document).ready(() => {
  $("#videoPlayer").trigger("pause")

  var config = {
    apiKey: "AIzaSyCVwlufUTFJ93ptOc-MCElh94CB-9G9w9c",
    authDomain: "playbook-41a3a.firebaseapp.com",
    databaseURL: "https://playbook-41a3a.firebaseio.com",
    projectId: "playbook-41a3a",
    storageBucket: "",
    messagingSenderId: "788381501788"
  };
  firebase.initializeApp(config);

  var Modalinstances = M.Modal.init(document.querySelectorAll('.modal'), {

  });
  /* var video = document.querySelector("#videoPlayer");

video.onended = function(e) {
  alert('video ended');
}*/
  var instance = M.Modal.getInstance(document.querySelector('.artist-modal'));
  $(".artist-identy").bind("click", () => {
    instance.open()
  })
  $("#Loader").show();
  $("#LandingPage").hide()

  setTimeout(() => {
    $('#Loader').hide();
    $("#LandingPage").addClass("animated fadeInUp");
    $("#LandingPage").show();
  }, 4000);
 $(document).scroll(() => {
    if ($(window).scrollTop() > 150) {
      $("#navigation").removeClass("hidden");

    } else {
      $("#navigation").addClass("hidden"); 
    }
    if($(window).scrollTop()>=$("footer").offset().top+$("footer").outerHeight()-window.innerHeight){
      $("#navigation").addClass("hidden"); 
    }
  
  }) 

  const carousel = () => {
    var carousels = $(".my-carousel")
    for (var i = 0; i <= carousels.length; i++) {
      $(carousels[i]).addClass("hide")
    }
    slideIndex++;
    if (slideIndex > carousels.length) {
      slideIndex = 1
    }

    $(carousels[slideIndex - 1]).removeClass("hide")
    setTimeout(carousel, 8000)
  }
  var slideIndex = 0;
  carousel()

  $(".LoadingPageButton").bind("click", () => {
  
    $("#LandingPage").removeClass();
    $("#LandingPage").addClass("animated fadeOutLeft");

    $("#Header,#Main,#footer").removeClass("hide");
    $("#LandingPage").hide();
  })

    $(".artist-identy").bind("click", () => {
      $("#artistModal").removeClass("hide");
    })
    $(".closeBtnModal").bind("click", () => {
      $("#artistModal").addClass("hide");
    })
    $(".share-icon").bind("click", () => {
      $("#socialIcons").removeClass("hide");

    })
    $("#closeSocialIcons").bind("click", () => {
      $("#socialIcons").addClass("hide");
    })

    $("#openNav").bind("click", () => {
      $("#myNav").removeClass("hide");

    })

    $(".closeBtnNav,.nav-overlay-content>a").bind("click", () => {
      $("#myNav").addClass("hide");

    })

    $(".NewVideo").click((e) => {
        e.preventDefault()
        console.log();
        $("#videoPlayer").trigger("pause")

        var id = e.target.id;
        $("#videoSource").attr("src", id);
        $("#videoPlayer")[0].load()

        //$(this).attr("href") did not work and i Wasted time on it but worked on this workaround
      }


    )


    $(".scrollSome").on("click", () => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#videoPlayer").offset().top
      }, 250);

    })

    $(".like-counter").click((e) => {
      e.preventDefault();
      var id = (e.target.id);

      console.log(likeCounter)
      var stringValue = (e.target.id).substr(12, 1);
      if ($(`#${id} `).text() === "favorite") {
        var likeCounter = $(`#counter-${stringValue}`).text();
        $(`#${id} `).text("favorite_border")
        console.log(likeCounter--)
        $(`#counter-${stringValue}`).text(likeCounter--)
      } else {
        $(`#${id} `).text("favorite")
        var likeCounter = $(`#counter-${stringValue}`).text();


        console.log(likeCounter++)
        $(`#counter-${stringValue}`).text(likeCounter++)
      }

    })
    $("#Subscribe_button").click((e) => {
      if ($("#icon_prefix").val() === " ") {
        $("#alertMessage").removeClass("hide");

      }
      e.preventDefault();
      var email = $("#icon_prefix").val();
      $("#icon_prefix,#Subscribe_button").hide();
      $("#Intro-Text").text(`Hey ${email}`)
      $("#Success-Message").removeClass("hidden");
      $("#Success-Message").addClass("animated fadeInLeftBig");

    })
    $("#Category-Open-Btn").bind("click", () => {
      $("#header-video,#Main,#footer").addClass(" hidden");
      $("#SectionLearnMore").removeClass("hidden");
      $("#SectionLearnMore").addClass("animated fadeInLeftBig")

    })

    $("#closeContainer").bind("click", () => {
      $("#SectionLearnMore").addClass("hidden");
      $("#header-video,#Main,#footer").removeClass("hidden");
      $("#header-video,#Main,#footer").addClass("animated fadeInRightBig ");

    })
 
})