import Layout from "../components/Layout";

const _error = (props) => {
    const {statusCode} = props;
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not load your: Status Code {statusCode}</p>
                ): (
                    <p>Could not get this page</p>
                )
            }
        </Layout>
    )
}

export default _error;
