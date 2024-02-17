
        let timer;
        let isRunning = false;
        let startTime;
        let elapsedTime = 0;
        let laps = [];

        function formatTime(time) {
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = time % 60;

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        function displayTime() {
            document.querySelector('.display').innerText = formatTime(elapsedTime);
        }

        function start() {
            if (!isRunning) {
                isRunning = true;
                startTime = Date.now() - elapsedTime;
                timer = setInterval(function() {
                    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                    displayTime();
                }, 1000);
            }
        }

        function pause() {
            clearInterval(timer);
            isRunning = false;
        }

        function reset() {
            clearInterval(timer);
            isRunning = false;
            elapsedTime = 0;
            laps = [];
            displayTime();
            document.querySelector('.laps').innerHTML = '';
        }

        function lap() {
            laps.push(elapsedTime);
            let lapTime = formatTime(elapsedTime);
            let lapItem = document.createElement('li');
            lapItem.innerText = `Lap ${laps.length}: ${lapTime}`;
            document.querySelector('.laps').appendChild(lapItem);
        }
