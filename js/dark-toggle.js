const toggleBtn = document.getElementById("dark-toggle");
const saveTheme = (checked)  => {
    let preferredTheme;
    if (checked) {
        preferredTheme = 'light';
        document.documentElement.setAttribute("data-theme", "light");
        toggleBtn.checked = true
    } else {
        preferredTheme = 'dark';
        document.documentElement.setAttribute("data-theme", "dark");
        toggleBtn.checked = false
    }
    document.documentElement.style.setProperty("color-scheme", preferredTheme);
    localStorage.setItem('theme', preferredTheme);
}

if (toggleBtn) {
    toggleBtn.addEventListener("change", function() {
        saveTheme(this.checked);
    });
    
    saveTheme(localStorage.getItem('theme') == 'light');
}