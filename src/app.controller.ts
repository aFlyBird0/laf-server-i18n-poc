import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext, I18nLang, I18nService } from 'nestjs-i18n';
import { time } from 'console';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/i18n')
  async i18nExample(@I18n() i18n: I18nContext) {
    const limit = 1;
    return i18n.t('application.CREATE.TrailMaxLimit', {
      args: { limit: limit },
    });
  }
}
