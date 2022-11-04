/* Sabemos que en el request.query.id es id porque el documentos
tiene el nombre dinamico de [id].ts si fuera otro nombre por ejemplo [avoId].ts el
id sería request.query.avoId */

import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database/db";

const getAvoById = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const db = new DB();

  const id = request.query.id;

  const avo = await db.getById(id as string);

  response.status(200).json(avo);
};
export default getAvoById;
