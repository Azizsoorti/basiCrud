import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginEntity } from './login/entities/login.entity';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ReviewModule } from './review/review.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sweet',
    password: 'aziz',
    database: 'sweet',
    entities: [LoginEntity],
    synchronize: true,
  }),
   LoginModule,
   ProductModule,
   CategoryModule,
   OrderModule,
   CustomerModule,
   ReviewModule,
   ArticleModule,
   CommentModule,
   UserModule,
   AdminModule,
   SignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
