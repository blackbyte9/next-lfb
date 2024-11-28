import { ServerInfo } from "@ezgrid/grid-core";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ServerInfo | { message: string }>
) => {
    if (req.method === "POST") {
        res.status(405).json({ message: "Not yet implemented" });
    } else if(req.method === "GET") {
        res.status(405).json({ message: "Method not allowed" });
    } else if(req.method === "DELETE") {
        res.status(405).json({ message: "Method not allowed" });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

export default handler;