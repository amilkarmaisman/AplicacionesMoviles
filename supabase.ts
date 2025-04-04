import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qnscroybhmxrwxpbjide.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuc2Nyb3liaG14cnd4cGJqaWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5Mjc3NDUsImV4cCI6MjA1ODUwMzc0NX0.MvvjukfR4MaFnQof06x0pS6I3sNE261SH5TlQjePziM';
export const supabase = createClient(supabaseUrl, supabaseKey);
