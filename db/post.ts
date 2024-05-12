import {supabase} from "@/db/client";

(async () => {
  const { error } = await supabase
    .from('post')
    .insert({ id: 1, title: 'Denmark' })
})()
