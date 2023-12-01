document.addEventListener('DOMContentLoaded', function () {
    const fontSwitch = document.getElementById('fontSwitch');
    const fontSwitchableText = document.querySelector('.font-switchable-text');

    fontSwitch.addEventListener('change', function () {
        if (fontSwitch.checked) {
            document.body.classList.add('font-switched-on');
        } else {
            document.body.classList.remove('font-switched-on');
        }
    });
});
