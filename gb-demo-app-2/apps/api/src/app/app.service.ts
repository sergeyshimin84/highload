import { Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/common/cache';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getCache() {
    return this.cacheManager.set('key', 'value');
  }
}


