export class InstagramPostModel {
  idCode                 :string;
  uuid                   :string;
  locationName           :string;
  imageUrl               :string;
  link                  :string;
  tags                   :string;
  content                :string;

  location:string; // TODO: This may come through as an array?
  image:string; // TODO: Decode sting into image field?
  createdTime:string // TODO: Parse into Date object


  constructor(idCode: string, uuid: string, locationName: string, imageUrl: string, link: string, tags: string, content: string, location: string, image: string, createdTime: string) {
    this.idCode = idCode;
    this.uuid = uuid;
    this.locationName = locationName;
    this.imageUrl = imageUrl;
    this.link = link;
    this.tags = tags;
    this.content = content;
    this.location = location;
    this.image = image;
    this.createdTime = createdTime;
  }
}
