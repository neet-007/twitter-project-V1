function formatTwitterTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const now = new Date();
    const timeDifference = Math.floor((now - date) / 1000); // in seconds

    if (timeDifference < 60) {
      return 'just now';
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes}m`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours}h`;
    } else if (timeDifference < 2592000) {
      const days = Math.floor(timeDifference / 86400);
      return `${days}d`;
    } else {
      const months = Math.floor(timeDifference / 2592000);
      return `${months}mo`;
    }
  }

  const dateTimeString = "2023-12-06T22:43:45.034010Z";
  const formattedTime = formatTwitterTime(dateTimeString);
  console.log(formattedTime); // Output will be something like '2mo' or '5d' depending on the difference

export default formatTwitterTime