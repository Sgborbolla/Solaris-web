import { supabase } from './supabase.js';

export async function getTranslations(lang = 'es') {
  try {
    const { data, error } = await supabase
      .from('translations')
      .select('key, value')
      .eq('lang_code', lang);
    
    if (error) {
      console.error('Error al cargar traducciones:', error);
      return {};
    }
    
    const translations = {};
    data?.forEach(t => {
      translations[t.key] = t.value;
    });
    
    return translations;
  } catch (err) {
    console.error('Error en getTranslations:', err);
    return {};
  }
}
