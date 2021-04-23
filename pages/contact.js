import Layout from "../components/Layout";
import { FcAssistant } from "react-icons/fc";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();

  const onSubmitForm = async (values) => {
    let config = {
      method: "post",
      url: `http://localhost:3000/api/sendEmail`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.status == 201) {
        reset();
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="container p-4">
        <h1 className="text-center">
          Contact Us <FcAssistant />{" "}
        </h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form-group">
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                    })}
                    className="form-control"
                    placeholder="Name"
                    autoFocus
                  />
                  <span className="text-danger text-sm py-2">
                    {errors.name && "You must enter your name"}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "You must enter your email address",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "This needs to be a valid email address",
                      },
                    })}
                    className="form-control"
                    placeholder="Email"
                  />
                  <span className="text-danger text-sm py-2">
                    {errors?.email?.message}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    {...register("phone")}
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="2"
                    type="number"
                    {...register("message", {
                      required: true,
                    })}
                    className="form-control"
                    placeholder="Message"
                  />
                  <span className="text-danger text-sm py-2">
                    {errors.message && "You need to enter your message"}
                  </span>
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
