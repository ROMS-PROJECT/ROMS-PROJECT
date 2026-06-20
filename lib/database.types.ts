export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      tb_cm_code: {
        Row: {
          code: string
          code_name: string | null
          create_date: string
          created_by: string | null
          group_code: string
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          code: string
          code_name?: string | null
          create_date?: string
          created_by?: string | null
          group_code: string
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string
          code_name?: string | null
          create_date?: string
          created_by?: string | null
          group_code?: string
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_cmcode_cmcodegroup"
            columns: ["group_code"]
            isOneToOne: false
            referencedRelation: "tb_cm_code_group"
            referencedColumns: ["group_code"]
          },
        ]
      }
      tb_cm_code_group: {
        Row: {
          create_date: string | null
          created_by: string | null
          group_code: string
          group_name: string | null
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string | null
          created_by?: string | null
          group_code: string
          group_name?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string | null
          created_by?: string | null
          group_code?: string
          group_name?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_common: {
        Row: {
          create_date: string
          created_by: string
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_detail_results: {
        Row: {
          create_date: string
          created_by: string
          detail_results_num: number
          remark: string | null
          results_code: string
          score: number | null
          team_code: string
          update_date: string | null
          updated_by: string | null
          win_lose: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          detail_results_num?: number
          remark?: string | null
          results_code: string
          score?: number | null
          team_code: string
          update_date?: string | null
          updated_by?: string | null
          win_lose?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          detail_results_num?: number
          remark?: string | null
          results_code?: string
          score?: number | null
          team_code?: string
          update_date?: string | null
          updated_by?: string | null
          win_lose?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_detail_parent_result"
            columns: ["results_code"]
            isOneToOne: false
            referencedRelation: "tb_results"
            referencedColumns: ["results_code"]
          },
          {
            foreignKeyName: "fk_detailresults_team"
            columns: ["team_code"]
            isOneToOne: false
            referencedRelation: "tb_team"
            referencedColumns: ["team_code"]
          },
        ]
      }
      tb_game_schedule: {
        Row: {
          create_date: string
          created_by: string
          game_schedule: string
          game_sequence: number | null
          remark: string | null
          schedule_code: string
          tournament_stage: number | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          game_schedule?: string
          game_sequence?: number | null
          remark?: string | null
          schedule_code?: string
          tournament_stage?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          game_schedule?: string
          game_sequence?: number | null
          remark?: string | null
          schedule_code?: string
          tournament_stage?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_head_coach: {
        Row: {
          create_date: string
          created_by: string
          head_coach_code: string
          head_coach_name: string | null
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          head_coach_code: string
          head_coach_name?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          head_coach_code?: string
          head_coach_name?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_hero: {
        Row: {
          create_date: string
          created_by: string
          hero_code: string
          hero_name: string | null
          hero_role: string | null
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          hero_code: string
          hero_name?: string | null
          hero_role?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          hero_code?: string
          hero_name?: string | null
          hero_role?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_hero_ban: {
        Row: {
          ban_sequence: number | null
          create_date: string
          created_by: string
          detail_results_num: number
          hero_ban_code: string
          hero_code: string
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          ban_sequence?: number | null
          create_date?: string
          created_by?: string
          detail_results_num: number
          hero_ban_code: string
          hero_code: string
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          ban_sequence?: number | null
          create_date?: string
          created_by?: string
          detail_results_num?: number
          hero_ban_code?: string
          hero_code?: string
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_heroban_detailresults"
            columns: ["detail_results_num"]
            isOneToOne: false
            referencedRelation: "tb_detail_results"
            referencedColumns: ["detail_results_num"]
          },
          {
            foreignKeyName: "fk_heroban_hero"
            columns: ["hero_code"]
            isOneToOne: false
            referencedRelation: "tb_hero"
            referencedColumns: ["hero_code"]
          },
        ]
      }
      tb_join_players: {
        Row: {
          create_date: string
          created_by: string
          join_player_code: string
          player_code: string | null
          remark: string | null
          team_code: string | null
          team_leader: number | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          join_player_code: string
          player_code?: string | null
          remark?: string | null
          team_code?: string | null
          team_leader?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          join_player_code?: string
          player_code?: string | null
          remark?: string | null
          team_code?: string | null
          team_leader?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_join_players_player_code_fkey"
            columns: ["player_code"]
            isOneToOne: false
            referencedRelation: "tb_player"
            referencedColumns: ["player_code"]
          },
          {
            foreignKeyName: "tb_join_players_team_code_fkey"
            columns: ["team_code"]
            isOneToOne: false
            referencedRelation: "tb_team"
            referencedColumns: ["team_code"]
          },
        ]
      }
      tb_map: {
        Row: {
          create_date: string
          created_by: string
          map_code: string
          map_name: string | null
          mode: string | null
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          map_code: string
          map_name?: string | null
          mode?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          map_code?: string
          map_name?: string | null
          mode?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_map_pool: {
        Row: {
          create_date: string
          created_by: string
          map_code: string
          map_pool_number: number
          remark: string | null
          season_number: number | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          map_code: string
          map_pool_number: number
          remark?: string | null
          season_number?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          map_code?: string
          map_pool_number?: number
          remark?: string | null
          season_number?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_mappool_map"
            columns: ["map_code"]
            isOneToOne: false
            referencedRelation: "tb_map"
            referencedColumns: ["map_code"]
          },
          {
            foreignKeyName: "fk_mappool_season"
            columns: ["season_number"]
            isOneToOne: false
            referencedRelation: "tb_season"
            referencedColumns: ["season_number"]
          },
        ]
      }
      tb_player: {
        Row: {
          create_date: string
          created_by: string
          player_code: string
          player_name: string | null
          player_role: string | null
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          player_code: string
          player_name?: string | null
          player_role?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          player_code?: string
          player_name?: string | null
          player_role?: string | null
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_player_data: {
        Row: {
          assist: number | null
          create_date: string
          created_by: string
          damage: number | null
          death: number | null
          detail_results_num: number
          heal: number | null
          join_player_code: string
          kill: number | null
          mitigation: number | null
          player_data_num: number
          remark: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          assist?: number | null
          create_date?: string
          created_by?: string
          damage?: number | null
          death?: number | null
          detail_results_num: number
          heal?: number | null
          join_player_code: string
          kill?: number | null
          mitigation?: number | null
          player_data_num?: number
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          assist?: number | null
          create_date?: string
          created_by?: string
          damage?: number | null
          death?: number | null
          detail_results_num?: number
          heal?: number | null
          join_player_code?: string
          kill?: number | null
          mitigation?: number | null
          player_data_num?: number
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_playerdata_detailresults"
            columns: ["detail_results_num"]
            isOneToOne: false
            referencedRelation: "tb_detail_results"
            referencedColumns: ["detail_results_num"]
          },
          {
            foreignKeyName: "tb_player_data_join_player_code_fkey"
            columns: ["join_player_code"]
            isOneToOne: false
            referencedRelation: "tb_join_players"
            referencedColumns: ["join_player_code"]
          },
        ]
      }
      tb_results: {
        Row: {
          create_date: string
          created_by: string
          game_set: number | null
          game_time: number | null
          map_pool_number: number
          remark: string | null
          results_code: string
          results_date: string | null
          schedule_code: string | null
          season_number: number | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          game_set?: number | null
          game_time?: number | null
          map_pool_number: number
          remark?: string | null
          results_code: string
          results_date?: string | null
          schedule_code?: string | null
          season_number?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          game_set?: number | null
          game_time?: number | null
          map_pool_number?: number
          remark?: string | null
          results_code?: string
          results_date?: string | null
          schedule_code?: string | null
          season_number?: number | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_results_map"
            columns: ["map_pool_number"]
            isOneToOne: false
            referencedRelation: "tb_map_pool"
            referencedColumns: ["map_pool_number"]
          },
          {
            foreignKeyName: "fk_results_schedule"
            columns: ["schedule_code"]
            isOneToOne: false
            referencedRelation: "tb_game_schedule"
            referencedColumns: ["schedule_code"]
          },
          {
            foreignKeyName: "fk_results_season"
            columns: ["season_number"]
            isOneToOne: false
            referencedRelation: "tb_season"
            referencedColumns: ["season_number"]
          },
          {
            foreignKeyName: "tb_results_map_pool_number_fkey"
            columns: ["map_pool_number"]
            isOneToOne: false
            referencedRelation: "tb_map_pool"
            referencedColumns: ["map_pool_number"]
          },
          {
            foreignKeyName: "tb_results_schedule_code_fkey"
            columns: ["schedule_code"]
            isOneToOne: false
            referencedRelation: "tb_game_schedule"
            referencedColumns: ["schedule_code"]
          },
        ]
      }
      tb_season: {
        Row: {
          create_date: string
          created_by: string
          remark: string | null
          season_name: string | null
          season_number: number
          season_start_date: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          remark?: string | null
          season_name?: string | null
          season_number?: number
          season_start_date?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          remark?: string | null
          season_name?: string | null
          season_number?: number
          season_start_date?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      tb_team: {
        Row: {
          create_date: string
          created_by: string
          head_coach_code: string | null
          ranking: number | null
          remark: string | null
          season_number: number | null
          team_code: string
          team_name: string | null
          update_date: string | null
          updated_by: string | null
        }
        Insert: {
          create_date?: string
          created_by?: string
          head_coach_code?: string | null
          ranking?: number | null
          remark?: string | null
          season_number?: number | null
          team_code: string
          team_name?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Update: {
          create_date?: string
          created_by?: string
          head_coach_code?: string | null
          ranking?: number | null
          remark?: string | null
          season_number?: number | null
          team_code?: string
          team_name?: string | null
          update_date?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_team_season"
            columns: ["season_number"]
            isOneToOne: false
            referencedRelation: "tb_season"
            referencedColumns: ["season_number"]
          },
          {
            foreignKeyName: "tb_team_head_coach_code_fkey"
            columns: ["head_coach_code"]
            isOneToOne: false
            referencedRelation: "tb_head_coach"
            referencedColumns: ["head_coach_code"]
          },
        ]
      }
      tb_use_hero: {
        Row: {
          create_date: string
          created_by: string
          hero_code: string
          player_data_num: number
          remark: string | null
          update_date: string | null
          updated_by: string | null
          use_hero_num: number
        }
        Insert: {
          create_date?: string
          created_by?: string
          hero_code: string
          player_data_num: number
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
          use_hero_num: number
        }
        Update: {
          create_date?: string
          created_by?: string
          hero_code?: string
          player_data_num?: number
          remark?: string | null
          update_date?: string | null
          updated_by?: string | null
          use_hero_num?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_usehero_hero"
            columns: ["hero_code"]
            isOneToOne: false
            referencedRelation: "tb_hero"
            referencedColumns: ["hero_code"]
          },
          {
            foreignKeyName: "fk_usehero_playerdata"
            columns: ["player_data_num"]
            isOneToOne: false
            referencedRelation: "tb_player_data"
            referencedColumns: ["player_data_num"]
          },
        ]
      }
      tb_video_tracking: {
        Row: {
          ban_start_link: string | null
          game_result_link: string | null
          game_sequence: number | null
          game_set: number | null
          game_start_link: string | null
          link_no: number
          map_name: string | null
          season_name: string | null
          tournament_stage: string | null
        }
        Insert: {
          ban_start_link?: string | null
          game_result_link?: string | null
          game_sequence?: number | null
          game_set?: number | null
          game_start_link?: string | null
          link_no?: number
          map_name?: string | null
          season_name?: string | null
          tournament_stage?: string | null
        }
        Update: {
          ban_start_link?: string | null
          game_result_link?: string | null
          game_sequence?: number | null
          game_set?: number | null
          game_start_link?: string | null
          link_no?: number
          map_name?: string | null
          season_name?: string | null
          tournament_stage?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_hero_name: { Args: { p_hero_code: string }; Returns: string }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
