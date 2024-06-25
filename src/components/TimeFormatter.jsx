function padZero(num) {
  if (num < 10) return `0${num}`;
  return num;
}

function TimeFormatter({ time, customClass = '' }) {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  return (
    <span className={customClass}>
      {padZero(mins)}:{padZero(secs)}
    </span>
  );
}

export default TimeFormatter;
