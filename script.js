const openButton = document.querySelector("[data-open]");
const cover = document.querySelector("[data-cover]");
const experience = document.querySelector("[data-experience]");
const invitation = document.querySelector("#invitation");

openButton?.addEventListener("click", () => {
  cover?.classList.add("is-open");

  window.setTimeout(() => {
    if (experience) {
      experience.hidden = false;
    }

    cover?.classList.add("is-hidden");
    invitation?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 260);
});
