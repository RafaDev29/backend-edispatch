import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { MastersModule } from './modules/masters/masters.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { BillingModule } from './modules/billing/billing.module';


@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/nest'), MastersModule, CompaniesModule, BillingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
