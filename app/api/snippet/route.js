import { connectToDB } from "@utils/db";
import Snippet from "@models/snippets";

export const GET = async (req) => {
  try {
    await connectToDB();
    const snippets = await Snippet.find({}).populate("author");
    console.log(`this`, snippets);
    return new Response(JSON.stringify(snippets), { status: 200 });
  } catch (error) {
    console.error(error.message);
    return new Response("failed to fetch all snippet", { status: 500 });
  }
};
