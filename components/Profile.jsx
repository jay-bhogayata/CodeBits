import SnippetCard from "./SnippetCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="">
      <div className="lg:w-1/2 w-full ">
        <SnippetCard data={data} />
      </div>
    </section>
  );
};

export default Profile;
