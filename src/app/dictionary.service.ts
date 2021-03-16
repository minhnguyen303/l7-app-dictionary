import {Injectable} from '@angular/core';

export interface IWord {
  key: string | null;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'service',
      meaning: 'dịch vụ'
    }, {
      key: 'service provider',
      meaning: 'nhà cung cấp dịch vụ'
    }, {
      key: 'provide',
      meaning: 'cung cấp'
    }, {
      key: 'efficient',
      meaning: 'hiệu quả'
    }, {
      key: 'snow',
      meaning: 'tuyết'
    }, {
      key: 'dog',
      meaning: 'con chó'
    }, {
      key: 'love',
      meaning: 'tình yêu'
    }
  ];

  constructor() {
  }

  search(word: string | null): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  getAll(): IWord[] {
    return this.words;
  }
}
