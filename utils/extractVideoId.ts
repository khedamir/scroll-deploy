export function extractVideoId(url: string) {
  // Паттерн для поиска идентификатора видео в URL
  const pattern =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|embed\/videoseries\?list=|shorts\/))([^#\&\?]*).*/;
  const match = url.match(pattern);
  if (match && match[1]) {
    return match[1];
  } else {
    return null; // Идентификатор видео не найден
  }
}
