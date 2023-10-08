import { Expose } from 'class-transformer';
import { PexelsPhoto } from './photo';

export class PexelsSearchResponse {
  @Expose({ name: 'total_results' })
  public totalResults: number;

  @Expose({ name: 'page' })
  public page: number;

  @Expose({ name: 'per_page' })
  public perPage: number;

  @Expose()
  public photos: Array<PexelsPhoto>;

  @Expose({ name: 'prev_page' })
  public prevPage?: string;

  @Expose({ name: 'next_page' })
  public nextPage?: string;
}
