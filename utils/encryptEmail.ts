export function encryptEmail(email: string) {
  // Разбиваем адрес электронной почты на имя пользователя и домен
  const [username, domain] = email.split("@");

  // Шифруем имя пользователя
  let encryptedUsername = "";
  if (username.length >= 3) {
    encryptedUsername =
      username.substring(0, 2) + "*".repeat(username.length - 2);
  } else if (username.length === 2) {
    encryptedUsername = username.substring(0, 1) + "*";
  } else if (username.length === 1) {
    encryptedUsername = username.substring(0, 1);
  }

  // Возвращаем зашифрованный адрес электронной почты
  return encryptedUsername + "@" + domain;
}
