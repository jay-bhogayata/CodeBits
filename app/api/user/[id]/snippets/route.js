import { connectToDB } from "@utils/db";
import Snippet from "@models/snippets";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const snippets = await Snippet.find({
      author: params.id,
    }).populate("author");
    return new Response(JSON.stringify(snippets), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("failed to fetch post", { status: 500 });
  }
};
