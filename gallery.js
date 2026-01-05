const archive = [
    { src: "imagenes/0001.jpg", id: "FAC-0001", process: "JPEG compression loop (Q=2)", year: "2024", notes: "Facial structure partially preserved. High artefact density." },
    { src: "imagenes/0002.jpg", id: "FAC-0002", process: "JPEG compression loop (Q=2)", year: "2024", notes: "Eye region collapses into noise patterns." },
    { src: "imagenes/0003.jpg", id: "FAC-0003", process: "Wavelet degradation", year: "2024", notes: "Residual symmetry detected in jaw structure." },
    { src: "imagenes/0004.jpg", id: "FAC-0004", process: "Wavelet degradation + blur", year: "2024", notes: "Mouth dissolves; forehead remains legible." },
    { src: "imagenes/0005.jpg", id: "FAC-0005", process: "AI reconstruction over corrupted input", year: "2025", notes: "Speculative facial features hallucinated." },
    { src: "imagenes/0006.jpg", id: "FAC-0006", process: "JPEG erosion cascade", year: "2025", notes: "Identity markers replaced by compression blocks." },
    { src: "imagenes/0007.jpg", id: "FAC-0007", process: "Lossy recompression", year: "2025", notes: "Skin texture replaced by abstract patterns." },
    { src: "imagenes/0008.jpg", id: "FAC-0008", process: "Algorithmic noise injection", year: "2025", notes: "Face detectable only by contour inference." },
    { src: "imagenes/0009.jpg", id: "FAC-0009", process: "Wavelet truncation", year: "2025", notes: "Eyes preserved as high-contrast anchors." },
    { src: "imagenes/0010.jpg", id: "FAC-0010", process: "JPEG compression loop", year: "2025", notes: "Complete collapse of background separation." },
    { src: "imagenes/0011.jpg", id: "FAC-0011", process: "Progressive downscaling", year: "2025", notes: "Facial proportions distorted beyond recognition." },
    { src: "imagenes/0012.jpg", id: "FAC-0012", process: "Neural upscaling + degradation", year: "2025", notes: "Synthetic sharpening creates false detail." },
    { src: "imagenes/0013.jpg", id: "FAC-0013", process: "JPEG artefact amplification", year: "2025", notes: "Block patterns dominate facial surface." },
    { src: "imagenes/0014.jpg", id: "FAC-0014", process: "Lossy color quantization", year: "2025", notes: "Skin tones collapse into flat chromatic planes." },
    { src: "imagenes/0015.jpg", id: "FAC-0015", process: "Iterative recompression", year: "2025", notes: "Identity persists only through outline." },
    { src: "imagenes/0016.jpg", id: "FAC-0016", process: "Data corruption simulation", year: "2025", notes: "Random noise disrupts facial coherence." },
    { src: "imagenes/0017.jpg", id: "FAC-0017", process: "Algorithmic erosion", year: "2025", notes: "Mouth region erased; eyes remain dominant." },
    { src: "imagenes/0018.jpg", id: "FAC-0018", process: "Compression artefact layering", year: "2025", notes: "Multiple temporal compressions visible." },
    { src: "imagenes/0019.jpg", id: "FAC-0019", process: "Neural hallucination", year: "2025", notes: "Non-existent facial traits introduced." },
    { src: "imagenes/0020.jpg", id: "FAC-0020", process: "Wavelet noise saturation", year: "2025", notes: "Facial structure reduced to noise gradients." },
    { src: "imagenes/0021.jpg", id: "FAC-0021", process: "Lossy recompression + blur", year: "2025", notes: "Face merges with background textures." },
    { src: "imagenes/0022.jpg", id: "FAC-0022", process: "AI speculative reconstruction", year: "2025", notes: "Synthetic symmetry overrides original features." },
    { src: "imagenes/0023.jpg", id: "FAC-0023", process: "Final degradation pass", year: "2025", notes: "Residual facial trace barely detectable." },
    { src: "imagenes/0024.jpg", id: "FAC-0024", process: "Final degradation pass", year: "2025", notes: "Residual facial trace barely detectable." },
    { src: "imagenes/0025.jpg", id: "FAC-0025", process: "Final degradation pass", year: "2025", notes: "Residual facial trace barely detectable." },
    { src: "imagenes/0026.jpg", id: "FAC-0026", process: "Final degradation pass", year: "2025", notes: "Residual facial trace barely detectable." },
    { src: "imagenes/0027.jpg", id: "FAC-0027", process: "Final degradation pass", year: "2025", notes: "Residual facial trace barely detectable." }
];

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
    lightboxTitle.textContent = item.id;

    // Update Counter (Mono) e.g. "01 — 29"
    // Pad with leading zero
    const currentStr = String(currentIndex + 1).padStart(2, '0');
    const totalStr = String(archive.length).padStart(2, '0');
    counter.textContent = `${currentStr} — ${totalStr}`;
}

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
    caption.textContent = item.id;

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

// Close interactions
function closeLightbox() {
    lightbox.style.display = "none";
    document.body.classList.remove("no-scroll"); // Unlock scroll
}



// Close Button
closeBtn.addEventListener("click", () => {
    closeLightbox();
});

// Navigation interactions
prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    updateLightbox(currentIndex - 1);
});

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    updateLightbox(currentIndex + 1);
});

// Info toggle interaction


// Keyboard controls
document.addEventListener("keydown", (e) => {
    // Check if flex or block, but better just check logic display
    if (lightbox.style.display === "flex" || lightbox.style.display === "block") {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") updateLightbox(currentIndex - 1);
        if (e.key === "ArrowRight") updateLightbox(currentIndex + 1);
    }
});
