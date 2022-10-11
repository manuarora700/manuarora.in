import { getSession } from "next-auth/react";
import prisma from "lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const entries = await prisma.words.findMany({
      orderBy: {
        updated_at: "desc",
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        image: entry.image,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      }))
    );
  }

  const session = await getSession({ req });
  const { email, name, image } = session.user;

  if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    const newEntry = await prisma.words.create({
      data: {
        email,
        body: (req.body.body || "").slice(0, 500),
        image,
        created_by: name,
      },
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      image: newEntry.image,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    });
  }

  return res.send("Method not allowed.");
}
