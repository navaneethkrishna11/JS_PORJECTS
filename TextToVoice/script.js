let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select"); 

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.value = i;
        voiceSelect.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

populateVoiceList();
