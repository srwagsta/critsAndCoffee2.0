export interface InstagramPostModel {
  id: string | null;
  image_thumbnail_url: string | null;
  image_low_resolution_url: string | null;
  image_standard_resolution_url: string | null;
  created_time: string | null;
  likes: string | null;
  tags: string | null;
  link: string | null;
  caption: string|null
  location_name: string | null;
  location: any;
}
