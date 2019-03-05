export interface InstagramPostModel {
  id_code            :string | null;
  uuid               :string | null;
  loc_name           :string | null;
  image_url          :string | null;
  link               :string | null;
  tags               :string | null;
  content            :string | null;

  loc_point          :any;

  image:string | null; // TODO: Decode sting into image field?
  created_time:string | null; // TODO: Parse into Date object

}
