const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersColorScheme.matches) {
    document
    .querySelector("meta[name='theme-color']")
    .setAttribute("content", "#6933FF");
}else{
    document
    .querySelector("meta[name='theme-color'][media='(prefers-color-scheme: dark)']")
    .setAttribute("content", "#5429CC")  
}