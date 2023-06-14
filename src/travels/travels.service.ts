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

  create(createTravelDto: any) {
    return this.TravelRepository.save({ ...createTravelDto, isVerify: true });
  }

  createNewTravel(payload: any) {
    return this.TravelRepository.save(payload);
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
      where: { deletedAt: null, isVerify: true },
    });

    const prepareTraveller = [];

    for (const travel of traveller) {
      const likeCount = await this.LikeService.findAllAndCount(travel.id);
      prepareTraveller.push({ ...travel, likeCount: likeCount.length });
    }

    return prepareTraveller.sort((a, b) => {
      return b.likeCount - a.likeCount;
    });
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
