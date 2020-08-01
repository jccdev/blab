export class ClassHelper {
  static init<T>(obj: T, values: Partial<T>, skip: (keyof T)[] = []) {
    if (values) {
      for (const key in values) {
        if (!skip.find(x => x === key)) {
          obj[key] = values[key];
        }
      }
    }
  }
}
