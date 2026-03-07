const project_Url = import.meta.env.VITE_SUPABASE_URL
const project_Key = import.meta.env.VITE_SUPABASE_ANON_KEY


import { createClient } from '@supabase/supabase-js'

export const client = createClient(project_Url, project_Key)

console.log(client, createClient);
