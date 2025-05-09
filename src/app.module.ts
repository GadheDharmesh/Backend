import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".local.env"
    })],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      synchronize:  configService.get<boolean>('DB_DATABASE'),
    }),
    inject: [ConfigService],
  }), ProductModule,UsersModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
