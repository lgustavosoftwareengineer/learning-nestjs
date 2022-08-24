import { v4 as UUID } from 'uuid';

export type DatabaseGenericElement = {
  id?: string;
};

export type DatabaseElement<T> = DatabaseGenericElement & T;

export class DatabaseService<T> {
  private database: DatabaseElement<T>[] = [];

  find(id: string): DatabaseElement<T> | null {
    const foundElement = this.database.find(
      (databaseElement) => databaseElement.id === id,
    );

    return foundElement ?? null;
  }

  delete(id: string): DatabaseElement<T> {
    const foundElement = this.find(id);

    if (foundElement) {
      this.database.filter((databaseElement) => databaseElement.id !== id);
    }

    return foundElement;
  }

  add(element: DatabaseElement<T>) {
    this.database.push({ ...element, id: UUID() });
  }

  getAll() {
    return this.database;
  }
}
