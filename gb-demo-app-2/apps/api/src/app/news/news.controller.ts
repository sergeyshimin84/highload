import { Body, Controller, Get, Header, Post } from '@nestjs/common';

import { IsNotEmpty } from '@nestjs/class-validator';
import { LocalStorage } from "ts-localstorage";

export class CreateNewsDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

@Controller('news')
export class NewsController {
  @Get()
  async getNews() {
    return new Promise(resolve => {
      const news = Object.keys([...Array(20)])
        news[0]
        localStorage.setItem("news", JSON.stringify(news))
        let storedNews = JSON.parse(localStorage.getItem("news"))
        storedNews(key => Number(key) + 1)
        storedNews(n => ({
          id: n,
          title: `Важная новость ${n}`,
          description: (rand => ([...Array(rand(1000))].map(() => rand(10**16).toString(36).substring(rand(10))).join(' ')))(max => Math.ceil(Math.random() * max)),
          createdAt: Date.now()
        }))

      setTimeout(() => {
        resolve(news);
      }, 100)
    });
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() peaceOfNews: CreateNewsDto) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Новость успешно создана', peaceOfNews);
        resolve({ id: Math.ceil(Math.random() * 1000), ...peaceOfNews });
      }, 100)
    });
  }
}
