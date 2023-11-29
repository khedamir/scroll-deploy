type ObjectType = {
  [key: string]: any;
};

export function toArray(obj: ObjectType) {
  const arrayOfObjects: any[] = Object.values(obj);
  return arrayOfObjects;
}
