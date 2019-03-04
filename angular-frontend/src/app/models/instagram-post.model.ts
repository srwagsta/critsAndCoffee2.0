export interface InstagramPostModel {

  id_code                 :string | null;
  uuid                  :string | null;
  loc_name           :string | null;
  image_url              :string | null;
  link                 :string | null;
  tags                :string | null;
  content             :string | null;

  image:string | null; // TODO: Decode sting into image field?
  created_time:string | null; // TODO: Parse into Date object
  loc_point; // TODO: This may come through as an array?


  //
  // constructor(id_code: string, uuid: string, loc_name: string, image_url: string, link: string, tags: string, content: string, image: string, created_time: string, loc_point) {
  //   this.id_code = id_code;
  //   this.uuid = uuid;
  //   this.loc_name = loc_name;
  //   this.image_url = image_url;
  //   this.link = link;
  //   this.tags = tags;
  //   this.content = content;
  //   this.image = image;
  //   this.created_time = created_time;
  //   this.loc_point = loc_point;
  // }

}
