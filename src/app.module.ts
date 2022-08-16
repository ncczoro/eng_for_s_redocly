import { VocabularyController } from './controller/vocabulary';
import { GrammarController } from './controller/grammar';
import { EnglishAnyOneController } from './controller/english-anyone';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    VocabularyController,
    GrammarController,
    EnglishAnyOneController,
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
