const { default: Snippet } = require("@models/snippets");
const { connectToDB } = require("@utils/db");

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const snippet = await Snippet.findById(params.id).populate("author");
    if (!snippet) return new Response("Snippet not found", { status: 400 });
    return new Response(JSON.stringify(snippet), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("failed to fetch the all snippets", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Snippet.findByIdAndRemove(params.id);
    return new Response("snippet deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("failed to delete the snippet", { status: 500 });
  }
};
