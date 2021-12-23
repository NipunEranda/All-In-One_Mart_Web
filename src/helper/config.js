export function showLoader(text) {
    document.getElementById("loader").classList.remove("hidden");
}

export function hideLoader() {
    document.getElementById("loader").classList.add("hidden");
}