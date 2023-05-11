import SnippetCard from "./SnippetCard";

const Profile = ({ name, desc, data, id, handleEdit, handleDelete }) => {
  return (
    <section className="">
      <div className="lg:w-1/2 w-full ">
        {data.map((d) => (
          <SnippetCard
            key={d._id}
            data={d}
            id={id}
            handleDelete={() => handleDelete && handleDelete(d)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
