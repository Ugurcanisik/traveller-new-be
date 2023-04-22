import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingsRepository } from './settings.repository';
import { Settings } from './entities/setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Settings, SettingsRepository])],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
