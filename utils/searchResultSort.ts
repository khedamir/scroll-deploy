import { SearchItem } from "./search";

interface GroupedItems {
  date: string;
  items: SearchItem[];
}

export function SearchResultSort(items: SearchItem[]) {
  const sortedItems = items.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const groupedItems: { [key: string]: SearchItem[] } = sortedItems.reduce(
    (result, item) => {
      const dateKey = item.date.split(" ")[0]; // Получаем ключ даты (без времени)

      // Если ключа нет в результате, создаем новый подмассив
      // @ts-ignore
      if (!result[dateKey]) {
        // @ts-ignore
        result[dateKey] = [];
      }

      // Добавляем новость в подмассив
      // @ts-ignore

      result[dateKey].push(item);
      return result;
    },
    {}
  );
  // Преобразуем результат в массив
  const sortedAndGroupedNewsArray: GroupedItems[] = Object.entries(
    groupedItems
  ).map(([date, itemsArray]) => ({
    date,
    items: itemsArray,
  }));

  return sortedAndGroupedNewsArray;
}
