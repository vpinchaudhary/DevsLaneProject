export interface User {
  id: number
  first_name: string
  middle_name: string
  last_name: string
  role: string
  status: string
  profile_pic_url: string
  email: string
  legal_name?: string
  nick_name?: string
  job_type?: string
  phone_number: string
  alternate_phone_number: string
  gender?: string
  birth_year: string
  birth_month: string
  birth_date: string
  urls: string[]
  last_invited_to_platform_at?: string
  education: string
  hometown: string
  state_code: string
  home_state_code?: string
  is_2fa_enabled: boolean
  default_2fa_type: string
  created_at: Date
  updated_at: Date
  is_zoom_connected: boolean
  educations: Education[]
  occupations: Occupation[]
  blockedUsers: any[]
  memberToAdvocatePages: any[]
  ownerToAdvocatePages: any[]
}

export interface Occupation {
  id: number
  user_id: number
  title: string
  company: string
  start_year: string
  end_year: string
  created_at: Date
  updated_at: Date
}

export interface Education {
  id: number
  user_id: number
  course_name_short: string
  course_name: string
  school_name: string
  majors?: string[]
  minors?: string[]
  start_year: string
  end_year: string
  source: string
  created_at: Date
  updated_at: Date
}
