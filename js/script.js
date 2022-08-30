// Proggress Bar code starts
document.addEventListener('scroll', updateProgressBar);
function updateProgressBar() {
    const progress = document.getElementsByClassName('progress-bar')[0];
   
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop/(scrollHeight - window.innerHeight) * 100 + '%';
    
    progress.style.setProperty('--progress', scrollPercent);
}
// Proggress Bar code ends