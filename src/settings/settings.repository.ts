import { EntityRepository, Repository } from 'typeorm';
import { Settings } from './entities/setting.entity';

@EntityRepository(Settings)
export class SettingsRepository extends Repository<Settings> {}
