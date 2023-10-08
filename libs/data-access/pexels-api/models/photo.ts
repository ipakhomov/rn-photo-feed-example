import { Expose } from 'class-transformer';

export class PexelsPhoto {
  @Expose()
  public id: number;

  @Expose({ name: 'width' })
  public width: number;

  @Expose({ name: 'height' })
  public height: number;

  @Expose({ name: 'url' })
  public url: string;

  @Expose({ name: 'photographer' })
  public photographer: string;

  @Expose({ name: 'photographer_url' })
  public photographerUrl: string;

  @Expose({ name: 'photographer_id' })
  public photographerId: number;

  @Expose({ name: 'src' })
  public src: { medium: string; large: string; original: string; tiny: string; small: string };

  @Expose({ name: 'avg_color' })
  public placeholderColor: string;
}
