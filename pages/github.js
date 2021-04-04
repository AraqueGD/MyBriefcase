import Layout from "../components/Layout";

export default function github(props) {
  const { user } = props;
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="avatar" />
            <p>{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/users/AraqueGD");
  const data = await res.json();

  console.log(data);
  return {
    props: {
      user: data,
    },
  };
};
