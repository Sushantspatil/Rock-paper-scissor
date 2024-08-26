const crossBtn = document.querySelector(".cross-btn");
const gameRule = document.querySelector(".game-rule");
const ruleBtn = document.querySelector(".rule-btn");

crossBtn.addEventListener("click", () => {
  gameRule.style.visibility = "hidden";
  crossBtn.style.visibility = "hidden";
});

ruleBtn.addEventListener("click", () => {
  gameRule.style.visibility = "visible";
  crossBtn.style.visibility = "visible";
});
