import { Controller, Get, Param } from '@nestjs/common';
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

  /*
  测试同时使用 param 路径参数，并且把国际化的文字放在复杂的返回体中
  */
  @Get('/i18n-complex/:param')
  async i18nExampleComplex(
    @Param('param') param: string,
    @I18n() i18n: I18nContext,
  ) {
    const limit = 1;
    console.log('param', param);
    return {
      code: 200,
      msg:
        param +
        ' ' +
        i18n.t('application.CREATE.TrailMaxLimit', {
          args: { limit: limit },
        }),
    };
  }
}
