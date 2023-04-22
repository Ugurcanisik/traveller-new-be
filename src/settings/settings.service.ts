import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingsRepository } from './settings.repository';

@Injectable()
export class SettingsService {
  constructor(private SettingsRepository: SettingsRepository) {}
  create(createSettingDto: CreateSettingDto) {
    return this.SettingsRepository.create(createSettingDto);
  }

  findAll() {
    return this.SettingsRepository.find({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.SettingsRepository.findOne(id);
  }

  update(id: string, updateSettingDto: UpdateSettingDto) {
    return this.SettingsRepository.update(id, updateSettingDto);
  }

  remove(id: number) {
    return this.SettingsRepository.update(id, { deletedAt: new Date() });
  }
}
