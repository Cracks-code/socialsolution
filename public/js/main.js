import chapters from "./chapterArr.js";

console.log("working...");

let chapterContainer = document.querySelector(".chapdiv");
let chapterModal = document.querySelector(".chapModal");
let closeBtn = document.querySelector(".close");

const fetchChapter = async (subject)=>{
    let subChap = ``
    await chapters.filter((el)=>{
        if (el.subject === subject) {
            subChap += `<a href="${el.downloadlink}" class="chapter">
            <span class="chapNo">${el.number}</span>
            <p class="chapName">${el.name}</p>
        </a>` 
        };

    })

    return subChap;
}

window.openModal = async (subject) => {
    let fetchedchpater = await fetchChapter(subject);
  chapterContainer.innerHTML = `<h2 class="had">${subject.toUpperCase()} Chapters</h2>
  ${fetchedchpater!=''?fetchedchpater:"Not Avilable"}`;

  chapterModal.classList.remove("hidden");
};

closeBtn.addEventListener("click", (e) => {
  chapterModal.classList.add("hidden");
});
