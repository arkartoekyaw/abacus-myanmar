import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://quokslknjnaklgwghkzl.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1b2tzbGtuam5ha2xnd2doa3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMDA2ODAsImV4cCI6MjAyMTU3NjY4MH0.iWWkQlAoQZQVMB4OhRWkpIpeXzm_VCredVHBaW2MFSg";


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})