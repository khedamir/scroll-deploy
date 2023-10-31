export function getAnchorsId(text: string) {
  const anchorRegex = /<a name="(\d+)"><\/a>/g; // Регулярное выражение для поиска якорей и извлечения чисел
  const matches = text.match(anchorRegex); // Находим все совпадения

  if (matches) {
    const numbers = matches.map((match) => {
      const numberMatch = /<a name="(\d+)"><\/a>/.exec(match); // Извлекаем число из каждого совпадения
      return numberMatch ? parseInt(numberMatch[1], 10) : null; // Преобразуем число в целое число
    });

    return numbers;
  } else {
    return [];
  }
}
