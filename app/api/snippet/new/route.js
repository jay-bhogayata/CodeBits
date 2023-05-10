import Snippet from "@models/snippets.js";
import { connectToDB } from "@utils/db";

export const POST = async (req, res) => {
  const { userId, name, desc, code } = await req.json();
  console.log(userId, name, desc, code);
  try {
    await connectToDB();
    const newSnippet = new Snippet({
      author: userId,
      name: name,
      description: desc,
      code: code,
    });
    await newSnippet.save();
    console.log(newSnippet);
    return new Response(JSON.stringify(newSnippet), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("failed to create snippet", { status: 500 });
  }
};
