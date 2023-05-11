import { connectToDB } from "@utils/db";
import Snippet from "@models/snippets";

export const GET = async (req) => {
  try {
    await connectToDB();
    const snippets = await Snippet.find({}).populate("author");
    return new Response(JSON.stringify(snippets), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed to fetch all snippet", { status: 500 });
  }
};
