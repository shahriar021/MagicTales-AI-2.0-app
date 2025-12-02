// Variant type
export interface StoryVariant {
  audio_duration_seconds: number | null;
  audio_error: string | null;
  audio_url: string | null;
  custom_prompt: string;
  id: number;
  image_url: string | null;
  status: string;
  synopsis: string;
  text: string;
  title: string;
}

// Main story info
export interface StoryInfo {
  age: number | null;
  art_style: string | null;
  audio_duration_seconds?: number | null;
  audio_error?: string | null;
  audio_url?: string | null;
  child_name: string | null;
  created_at?: string;
  custom_prompt?: string;
  difficulty?: number;
  error?: string;
  favorite_animal: string | null;
  favorite_color: string | null;
  finished_at?: string | null;
  id?: number;
  image_url?: string | null;
  is_saved?: boolean;
  language: string | null;
  length: string | null;
  likes_count?: number;
  model_used?: string;
  onboarding?: number;
  page_count?: number;
  progress?: number;
  pronouns: string | null;
  read_count?: number;
  shares_count?: number;
  started_at?: string;
  status?: string;
  synopsis?: string;
  tags?: string;
  text?: string;
  theme?: string;
  title?: string;
  user?: number;
  variants?: StoryVariant[];
  voice?: string | null;
}
