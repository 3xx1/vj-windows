function openNewWindow()
{
  window.open("./main.html", "sub-win-1", "width=100, height=100, top=100, left=100");
  window.open("./main.html", "sub-win-2", "width=100, height=100, top=200, left=100");
  window.open("./main.html", "sub-win-3", "width=100, height=100, top=300, left=100");
  window.open("./main.html", "sub-win-4", "width=100, height=100, top=100, left=200");
  window.open("./main.html", "sub-win-5", "width=100, height=100, top=200, left=200");
  window.open("./main.html", "sub-win-6", "width=100, height=100, top=300, left=200");
  window.open("./main.html", "sub-win-7", "width=100, height=100, top=100, left=300");
  window.open("./main.html", "sub-win-8", "width=100, height=100, top=200, left=300");
  window.open("./main.html", "sub-win-9", "width=100, height=100, top=300, left=300");
}

function moveWindow(hor, ver, col, row)
{
  moveBy(hor, ver);
}
