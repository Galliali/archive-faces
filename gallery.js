const archive = [
    { src: "imagenes/0001.jpg", id: "FAC-0001", compressions: 3090 },
    { src: "imagenes/0002.jpg", id: "FAC-0002", compressions: 1974 },
    { src: "imagenes/0003.jpg", id: "FAC-0003", compressions: 2900 },
    { src: "imagenes/0004.jpg", id: "FAC-0004", compressions: 3102 },
    { src: "imagenes/0005.jpg", id: "FAC-0005", compressions: 2012 },
    { src: "imagenes/0006.jpg", id: "FAC-0006", compressions: 3400 },
    { src: "imagenes/0007.jpg", id: "FAC-0007", compressions: 2100 },
    { src: "imagenes/0008.jpg", id: "FAC-0008", compressions: 4100 },
    { src: "imagenes/0009.jpg", id: "FAC-0009", compressions: 2995 },
    { src: "imagenes/0010.jpg", id: "FAC-0010", compressions: 4518 },
    { src: "imagenes/0011.jpg", id: "FAC-0011", compressions: 2394 },
    { src: "imagenes/0012.jpg", id: "FAC-0012", compressions: 2128 },
    { src: "imagenes/0013.jpg", id: "FAC-0013", compressions: 3090 },
    { src: "imagenes/0014.jpg", id: "FAC-0014", compressions: 2454 },
    { src: "imagenes/0015.jpg", id: "FAC-0015", compressions: 4875 },
    { src: "imagenes/0016.jpg", id: "FAC-0016", compressions: 1987 },
    { src: "imagenes/0017.jpg", id: "FAC-0017", compressions: 2001 },
    { src: "imagenes/0018.jpg", id: "FAC-0018", compressions: 5001 },
    { src: "imagenes/0019.jpg", id: "FAC-0019", compressions: 1920 },];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const closeBtn = document.getElementById("close-btn");

let currentIndex = 0;

function updateLightbox(index) {
    if (index < 0) index = archive.length - 1;
    if (index >= archive.length) index = 0;

    currentIndex = index;
    const item = archive[currentIndex];

    lightboxImg.src = item.src;

    // Update Title (Serif)
    const paddedComp = String(item.compressions).padStart(4, '0');
    lightboxTitle.innerHTML = `${item.id}<br>Compression cycle no. ${paddedComp}`;

    // Update Counter (Mono) e.g. "01 — 29"
    // Pad with leading zero
    const currentStr = String(currentIndex + 1).padStart(2, '0');
    const totalStr = String(archive.length).padStart(2, '0');
    counter.textContent = `${currentStr} — ${totalStr}`;
}

if (gallery) {
    archive.forEach((item, index) => {
        // Create container
        const container = document.createElement("div");
        container.className = "gallery-item";

        // Create image
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.id;

        // Create caption
        const caption = document.createElement("div");
        caption.className = "caption";
        const paddedComp = String(item.compressions).padStart(4, '0');
        caption.innerHTML = `${item.id}<br>Compression cycle no. ${paddedComp}`;

        // Add click event for lightbox
        img.addEventListener("click", () => {
            updateLightbox(index);
            lightbox.style.display = "flex"; // Flex for centering
            document.body.classList.add("no-scroll"); // Lock scroll
        });

        container.appendChild(img);
        container.appendChild(caption);
        gallery.appendChild(container);
    });
}

// Close interactions
function closeLightbox() {
    lightbox.style.display = "none";
    document.body.classList.remove("no-scroll"); // Unlock scroll
}



// Close Button
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        closeLightbox();
    });
}

// Navigation interactions
if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        updateLightbox(currentIndex - 1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        updateLightbox(currentIndex + 1);
    });
}

// Info toggle interaction


// Keyboard controls
document.addEventListener("keydown", (e) => {
    // Check if flex or block, but better just check logic display
    if (lightbox && (lightbox.style.display === "flex" || lightbox.style.display === "block")) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") updateLightbox(currentIndex - 1);
        if (e.key === "ArrowRight") updateLightbox(currentIndex + 1);
    }
});
