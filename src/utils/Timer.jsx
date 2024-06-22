let timerId;

export function startTimer(setTimeElapsed) {
  timerId = setInterval(function () {
    setTimeElapsed((c) => c + 1);
  }, 1000);
}

export function stopTimer() {
  clearInterval(timerId);
}
