import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "src/hooks/useSupabase";

// Example of how to verify and get user data server-side.
const getUser = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  const token: any = req.headers.token;

  const { data: user, error } = await supabase.auth.api.getUser(token);

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(user);
};

export default getUser;
