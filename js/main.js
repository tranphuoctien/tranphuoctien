function toggleClass(element) {
    if (document.getElementById(element).className.match(/(?:^|\s)is-active(?!\S)/)) {
        document.getElementById(element).className = document.getElementById(element).className.replace(' is-active', '');
    } else {
        document.getElementById(element).className += ' is-active';
    }
}