import { createClient } from '@supabase/supabase-js';

// Intenta leer del .env, si falla, usa estos valores de respaldo (que ya sabemos que funcionan)
const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://djyysffxpbvbfkcmrhta.supabase.co';
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqeXlzZmZ4cGJ2YmZrY21yaHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwMjc5MTYsImV4cCI6MjEwMzYwMzkxNn0.Vrtk4z0CW3t7XQEAl3jtLshPNrqXQU53-mWbjZv-eIo';

console.log('🔌 Supabase URL:', supabaseUrl);
console.log('🔑 Supabase Key cargada:', supabaseAnonKey ? 'SÍ' : 'NO');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
