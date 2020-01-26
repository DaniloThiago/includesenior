(() => {
    const startBtn = document.querySelector('#start');
    const output = document.querySelector('#output span');
    
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-br";
      recognition.continuous = true;
      recognition.start();
      // This event happens when you talk in the microphone
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            // console.log(event.results);
            const content = event.results[i][0].transcript.trim().toUpperCase();
            output.textContent = content;
            recognition.stop();
          }
        }
      };
    };
    
    startBtn.addEventListener('click', () => start());
  })();