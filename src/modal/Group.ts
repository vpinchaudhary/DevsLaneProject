export interface Group {
  id: number
  name: string
  is_private: boolean
  description: string
  introductory_message?: string
  group_image_url?: string
  join_code: string
  created_at: Date
  updated_at: Date
  chatCount: number
  state?: State
  creator: Creator
  issues: Issue[]
  invitedMembers: Creator[]
  participants: Creator[]
  advocatePage: AdvocatePage | null
}

export interface AdvocatePage {
  role: 'admin' | 'advocate' | 'staff'
  id: number
  name: string
  about: string
  top_lines: string
  leadership: string
  image_url: string
  positions: Position[]
  our_team: OurTeam[]
  automated_reply: AutomatedReply | null
  status: string
  created_at: Date
  updated_at: Date
  owner: Creator
  issues: Issue[]
  followersCount: number
  members: Creator[]
}

export interface AutomatedReply {
  unit: string
  delay: number
  message: string
}

export interface Issue {
  id: number
  code: string
  title_one_word: string
  title_short: string
  title: string
  summary: null | string
  created_at: Date
  updated_at: Date
}

export interface Creator {
  type: 'advocateRole' | 'email' | 'groupMember' | 'name'
  id: number
  guid: null
  first_name: string
  middle_name: null | string
  last_name: string
  role: 'admin' | 'advocate' | 'staff'
  status: 'claimed' | 'new'
  profile_pic_url: null | string
  email?: string
  advocateMemberRole?: 'admin' | 'chat_support' | 'content_moderator'
  groupMemberStatus?:
    | 'invitation_accepted'
    | 'invited'
    | 'request_to_join_accepted'
}

export interface State {
  id: number
  title: string
  state_code: string
  created_at: Date
  updated_at: Date
}

export interface Position {
  uuid: string
  position: string
  description: string
}

export interface OurTeam {
  first_name: string
  last_name: string
  email: string
  profile_pic_url: string
  title: string
  about: string
  uuid: string
}
