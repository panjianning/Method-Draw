MD.Darkmode = function(){

  const button = document.querySelector("#darkmode-button");
  const body = document.body;
  if (!button) return false;

  function set(isDark) {

    button.setAttribute("title", isDark ? "日间模式" : "夜间模式")
    body.classList.toggle("inverted", !isDark);
    body.classList.add("cancel-transitions");
    setTimeout(function(){
      body.classList.remove("cancel-transitions");
    }, 0)
    editor.rulers.update();
  }

  button.addEventListener("click", ()=>{
    state.set("darkmode", !state.get("darkmode"));
  });

  let isDark = state.get("darkmode");
  set(isDark);

  this.set = set

}