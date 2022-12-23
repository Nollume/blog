export interface Img {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: Urls;
  links: ImgLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: ImgTopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: TagsPreviewElement[];
  tags_preview: TagsPreviewElement[];
  views: number;
  downloads: number;
  topics: any[];
  related_collections: RelatedCollections;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface ImgLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: null;
  city: null;
  country: null;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Meta {
  index: boolean;
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface Result {
  id: string;
  title: string;
  description: null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: ResultTag[];
  links: ResultLinks;
  user: User;
  cover_photo: ResultCoverPhoto;
  preview_photos: PreviewPhoto[];
}

export interface ResultCoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null | string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: ImgLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  user: User;
}

export interface PurpleTopicSubmissions {
  interiors?: BusinessWork;
  "business-work"?: BusinessWork;
}

export interface BusinessWork {
  status: string;
  approved_on: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export interface ResultLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface PreviewPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: Urls;
}

export interface ResultTag {
  type: Type;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: SourceCoverPhoto;
}

export interface Ancestry {
  type: Category;
  category: Category;
  subcategory: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface SourceCoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null | string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  urls: Urls;
  links: ImgLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  premium: boolean;
  user: User;
}

export interface FluffyTopicSubmissions {
  wallpapers?: BusinessWork;
}

export enum Type {
  LandingPage = "landing_page",
  Search = "search",
}

export interface TagsPreviewElement {
  type: Type;
  title: string;
}

export interface ImgTopicSubmissions {}
