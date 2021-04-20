import Layout from "../components/Layout";
import { FcAssistant } from "react-icons/fc";

export default function Contact() {
  return (
    <Layout footer={true}>
      <div className="container p-4">
        <h1 className="text-center">
          Contact Us <FcAssistant />{" "}
        </h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card-body">
              <form action="/api/sendEmail" method="POST">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    autoFocus
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="2"
                    type="number"
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    required
                  />
                </div>

                <button className="btn btn-primary btn-block">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
