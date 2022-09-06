import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dvpzapompsgikiwnvmhm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cHphcG9tcHNnaWtpd252bWhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0MTAwNzIsImV4cCI6MTk3Nzk4NjA3Mn0.7ubD5Ig1J1ELyKneWslMJuQDnqcEGmGoXT7JUSvg_9A"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)