export interface WriteTypes {
  post_title: string;
  temperature: number;
  post_weather: string;
  post_content: string;
  post_category: string[];
  post_date: Date;
  post_img: string | null;
  fileInputRef: HTMLInputElement | null;
}

export interface ImageType {
  prevImage: string;
  imageFile: File | null;
}
