import vars from "../_vars";

if (document.querySelector(".free-delivery")) {
  vars.$freeDeliveryBtn.addEventListener("click", e => {
    e.currentTarget.closest(".free-delivery").style.display = "none";
  });
}
