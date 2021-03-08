import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "src/hooks/useSupabase";

export default (req: NextApiRequest, res: NextApiResponse): void => {
  supabase.auth.api.setAuthCookie(req, res);
};
