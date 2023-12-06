import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './course/course.controller';
import { PrismaService } from './database/prisma.service';
import { GlossaryController } from './glossary/glossary.controller';
import { DisciplineController } from './discipline/discipline.controller';
import { TermController } from './term/term.controller';
import { DefinitionController } from './definition/definition.controller';
import { TermDisciplineDefController } from './term-discipline-def/term-discipline-def.controller';
import { TranslationTermController } from './translation-term/translation-term.controller';
import { SourceDefTradController } from './source-def-trad/source-def-trad.controller';
import { AuthorController } from './author/author.controller';
import { SourceAuthorshipController } from './source-authotship/source-authotship.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CourseController,
    GlossaryController,
    DisciplineController,
    TermController,
    DefinitionController,
    TermDisciplineDefController,
    TranslationTermController,
    SourceDefTradController,
    AuthorController,
    SourceAuthorshipController,
    UsersController,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
