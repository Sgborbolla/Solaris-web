import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL || 'https://djyysffxpbvbfkcmrhta.supabase.co';
const key = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqeXlzZmZ4cGJ2YmZrY21yaHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwMjc5MTYsImV4cCI6MjEwMzYwMzkxNn0.Vrtk4z0CW3t7XQEAl3jtLshPNrqXQU53-mWbjZv-eIo';

console.log('🔗 URL:', url);
console.log('🔑 KEY (primeros 20 chars):', key.substring(0, 20) + '...');

const supabase = createClient(url, key);

const { data, error } = await supabase
  .from('products')
  .select('id, name, price')
  .limit(3);

if (error) {
  console.error('❌ ERROR DE SUPABASE:', error.message);
} else {
  console.log('✅ ÉXITO! Productos encontrados:', data.length);
  console.log(data);
}
