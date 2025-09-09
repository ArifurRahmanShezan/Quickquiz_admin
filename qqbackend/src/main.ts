import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 import * as session from 'express-session';


 async function bootstrap() {
 const app = await NestFactory.create(AppModule);
 
 app.enableCors({
    origin: "http://localhost:7000",   // React frontend URL (change if needed)
    credentials: true,                 // allow cookies/session sharing
  });
 app.use(
 session({
 secret: 'my-secret',
 resave: false,
 saveUninitialized: false,

 cookie:{
 maxAge: 300000,
 httpOnly: true,
 }
 }),
 );
  await app.listen(process.env.PORT ?? 3000); 
}

bootstrap();
