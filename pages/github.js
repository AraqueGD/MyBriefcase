import Layout from "../components/Layout";
import  Error  from "./_error";

export default function github(props) {
  const { user, statusCode } = props;

  if (statusCode) {
    return  <Error statusCode={statusCode} />
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="avatar" />
            <p className="pt-2" >{user.bio}</p>
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

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    },
  };
};
