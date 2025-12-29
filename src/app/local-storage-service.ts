import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  getItem<T>(key: string): T | null {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}