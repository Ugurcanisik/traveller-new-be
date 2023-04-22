import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { LikeRepository } from './like.repository';

@Injectable()
export class LikeService {
  constructor(private LikeRepository: LikeRepository) {}

  create(createLikeDto: CreateLikeDto) {
    return this.LikeRepository.save(createLikeDto);
  }

  findAll() {
    return this.LikeRepository.find({ where: { deletedAt: null } });
  }

  findAllAndCount(travelId: string) {
    return this.LikeRepository.find({ where: { travelId } });
  }

  findOne(id: string) {
    return this.LikeRepository.find({ where: { userId: id } });
  }

  remove(id: string) {
    this.LikeRepository.delete(id);
  }
}
