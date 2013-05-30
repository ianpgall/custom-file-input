$(document).on("change click", '.custom-file-input > input[type="file"]', function (e) {
    var $this = $(this),
        $container = $this.closest(".custom-file-input"),
        $text = $container.find(".file-text"),
        filename = $this.val();
    if (e.type === "change") {
        console.log("changed");
        $container.attr("title", filename);
        $text.text(filename);
    } else if (e.type === "click") {
        console.log("clicked");
    }
}).on("mousedown", ".custom-file-input", function () {
    $(this).addClass("pressed");
}).on("mouseup", ".custom-file-input", function () {
    $(this).removeClass("pressed");
});
