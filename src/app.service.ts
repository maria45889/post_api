import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): any {
    return {
      success: true,
      message: 'higuera-posts-api on line',
      data: 'Sistema Posts API',
      version: '1.0.0',
    }
  }
}
