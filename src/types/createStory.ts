export type createStory={
    description:string,
    id:string,
    image_url:string,
    name:string
}

export interface StoryDataResponse {
  code: number;
  data: StoryData;
  message: string;
  success: boolean;
  timestamp: number;
}

export interface StoryData {
  age: number;
  art_style: string;
  audio_duration_seconds: number | null;
  audio_error: string | null;
  audio_url: string | null;
  child_name: string;
  created_at: string;
  custom_prompt: string;
  difficulty: number;
  error: string;
  favorite_animal: string;
  favorite_color: string;
  finished_at: string | null;
  id: number;
  image_url: string | null;
  is_saved: boolean;
  language: string;
  length: string;
  likes_count: number;
  model_used: string;
  onboarding: number;
  page_count: number;
  progress: number;                // ← you wanted this one
  pronouns: string;
  read_count: number;
  shares_count: number;
  started_at: string;
  status: string;
  synopsis: string;
  tags: string;
  text: string;
  theme: string;
  title: string;
  user: number;
  variants: Variant[];
  voice: string;
}

export interface Variant {
  // You didn’t show the inside of [Object], so using any
  [key: string]: any;
}
