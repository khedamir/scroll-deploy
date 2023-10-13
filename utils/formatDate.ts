export function formatDateDifference(dateText: string) {
    // Разбираем дату из текста с учетом формата
    const parts: any = dateText.split(/[.\s:]+/);
    const targetDate: any = new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4], parts[5]);
  
    const currentDate: any = new Date();
  
    const timeDifferenceInSeconds = Math.floor((currentDate - targetDate) / 1000);
  
    if (timeDifferenceInSeconds < 60) {
      return "менее минуты назад";
    } else if (timeDifferenceInSeconds < 60 * 11) {
      const minutesAgo = Math.floor(timeDifferenceInSeconds / 60);
      return `${minutesAgo} минут назад`;
    } else if (timeDifferenceInSeconds < 60 * 31) {
      return "30 минут назад";
    } else if (timeDifferenceInSeconds < 60 * 60) {
      return "1 час назад";
    } else if (timeDifferenceInSeconds < 60 * 60 * 2) {
      return "2 часа назад";
    } else if (timeDifferenceInSeconds < 60 * 60 * 6) {
      const hoursAgo = Math.floor(timeDifferenceInSeconds / 3600);
      return `${hoursAgo} часа назад`;
    } else if (timeDifferenceInSeconds < 60 * 60 * 11) {
      return "5 часов назад";
    } else if (timeDifferenceInSeconds < 60 * 60 * 24) {
      return "10 часов назад";
    } else if (timeDifferenceInSeconds < 60 * 60 * 24 * 2) {
      return "1 день назад";
    } else if (timeDifferenceInSeconds < 60 * 60 * 24 * 3) {
      return "2 дня назад";
    } else {
      // Если разница больше двух дней, вернуть исходную дату
      const day = targetDate.getDate();
      const month = targetDate.getMonth() + 1;
      const year = targetDate.getFullYear();
      return `${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}.${year}`;
    }
  }