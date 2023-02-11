document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".how-item__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      console.log("path");

      document.querySelectorAll(".how__step").forEach(function (howStep) {
        howStep.classList.remove("how__step-active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("how__step-active");
    });
  });

  document.addEventListener("click", function (thenew) {
    if_id = thenew.target.id;
    the_class = thenew.target.className;
    if (the_class == "how-item__btn") {
      if_id = document.getElementById(if_id);
      if (if_id.style.color == "#E1670E") {
        if_id.style.color = "black";
      } else {
        var links = document.querySelectorAll(".how-item__btn");
        links.forEach((link) => {
          link.setAttribute("style", "color:black");
        });

        if_id.style.color = "#E1670E";
      }
    }
  });
});
