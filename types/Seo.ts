type OpenGraphType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";

  

export interface PageMeta {
    meta_title: string;
    meta_description: string;
    meta_follow: string;
    meta_index: string;
    url: string;
    updated_at: string;
    image: string;
    language: string;
    type: OpenGraphType;
  }

export interface PageMetaProp {
    page: PageMeta
}