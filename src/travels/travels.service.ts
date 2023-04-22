import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { TravelRepository } from './travels.repository';
import { LikeService } from '../like/like.service';

@Injectable()
export class TravelsService {
  constructor(
    private TravelRepository: TravelRepository,
    private LikeService: LikeService,
  ) {}

  create(createTravelDto: CreateTravelDto) {
    return this.TravelRepository.save(createTravelDto);
  }

  findAll() {
    return this.TravelRepository.find({
      relations: ['category'],
      where: { deletedAt: null },
    });
  }

  async findAllFE() {
    const traveller = await this.TravelRepository.find({
      relations: ['category'],
      where: { deletedAt: null },
    });

    const prepareTraveller = [];

    for (const travel of traveller) {
      const likeCount = await this.LikeService.findAllAndCount(travel.id);
      prepareTraveller.push({ ...travel, likeCount: likeCount.length });
    }
    return prepareTraveller;
  }

  findOne(id: string) {
    return this.TravelRepository.findOne(id);
  }

  update(id: string, updateTravelDto: UpdateTravelDto) {
    return this.TravelRepository.update(id, updateTravelDto);
  }

  remove(id: string) {
    return this.TravelRepository.update(id, { deletedAt: new Date() });
  }
}
