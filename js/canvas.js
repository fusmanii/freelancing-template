// paper.install(window);
$(document).ready(function () {
  $("#canvas-1").mousemove(function (event) {
    $("#pointer").css({
      top: event.pageY - 11 + "px",
      left: event.pageX - 11 + "px",
    });
  });

  $("#clear").click(function () {
    var canvas = document.getElementById("canvas-1");
    paper.project.clear();
  });

  $("#black").click(function () {
    color = "black";
  });
  $("#red").click(function () {
    color = "red";
  });
  var canvas = document.getElementById("canvas-1");
  paper.install(window);
  paper.setup(canvas);
  var tool = new Tool();
  var path;
  var color = "black";

  function onMouseDown(event) {
    if (path) {
      path.selected = false;
    }

    path = new paper.Path({
      segments: [event.point],
      strokeColor: color,
    });
  }

  function onMouseDrag(event) {
    path.add(event.point);
  }

  tool.onMouseDown = onMouseDown;
  tool.onMouseDrag = onMouseDrag;
});
