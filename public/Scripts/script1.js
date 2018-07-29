$(document).ready(() => {
  $("#Loader").show();
  $("#Header,#Main,#footer").hide()
  setTimeout(function () {
      
     $('#Loader').hide();
     $("#Header,#Main,#footer").show()
  }, 10000);
  
  $(document).scroll((() => {
    if ($(document).scrollTop() > 140) {
      $("#navigation").removeClass("hidden");
    } else {
      $("#navigation").addClass("hidden");
    }
  }))

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
  //Work In Progress loop after a video has ended 
  /*$("#videoPlayer")[0].bind("ended",()=>{
    console.log("ended");
    var video_count=1;
    if(video_count==4) video_count=1

    $("#videoSource").attr("src",`./Media/video${video_count}.mp4`)
    video_count++
    $("#videoPlayer")[0].load()
  })*/
  $(".scrollSome").on("click",()=>{
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