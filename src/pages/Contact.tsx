import { FC } from "react";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { text } from "@fortawesome/fontawesome-svg-core";
const Contact: FC = () => {
  const SubmitSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    subject: Yup.string().required("Required"),
    text: Yup.string().required("Required").max(200, "Too Long!"),
  });
  interface Message {
    name: string;
    email: string;
    subject: string;
    text: string;
  }
  const handleSubmit = async (
    values: Message,
    formikHelpers: FormikHelpers<Message>
  ) => {
    const { status } = await axios.post(
      "http://localhost:3000/messages",
      values
    );
    if (status !== 201) {
      console.error("Failed to add message");
      return;
    }
    console.log(values);
    formikHelpers.resetForm();
    alert("Message added successfully");
  };
  return (
    <>
      <NavLinks />
      <div className="grid grid-cols-2 px-[85px] pt-[215px] pb-[100px] bg-home">
        <div className="row-span-1">
          <img src="profile.png" alt="" />
          <div className="flex flex-col gap-2 mt-14 mb-10">
            <div className="text-lg text-dark-gray">Contact Details</div>
            <div className="flex flex-col gap-[6px] text-3xl">
              <div>ayush.barnwal@brightscout.com</div>
              <div>+91 8651447521</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-14 mb-10">
            <div className="text-lg text-dark-gray">Social</div>
            <div className="flex flex-col gap-[6px] text-3xl">
              <div>Linkedin</div>
              <div>Instagram</div>
              <div>Twitter</div>
              <div>Webflow</div>
              <div>Figma</div>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex gap-[37px] flex-col">
          <div className="text-6xl font-medium">
            Let’s build something cool together
          </div>
          <Formik
            initialValues={{ name: "", email: "", subject: "", text: "" }}
            validationSchema={SubmitSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form action="" className="flex flex-col gap-8">
                <div>
                  <label htmlFor="name" className="text-lg">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="James Robert"
                    className="w-full py-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500 bg-home"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-red-400">{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    placeholder="ayush.barnwal@brightscout.com"
                    className="w-full py-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500 bg-home"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-400">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="subject" className="text-lg">
                    Subject
                  </label>
                  <Field
                    name="subject"
                    type="text"
                    placeholder="For web design work Enquire"
                    className="w-full py-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500 bg-home"
                  />
                  {errors.subject && touched.subject ? (
                    <div className="text-red-400">{errors.subject}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="text" className="text-lg">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="text"
                    placeholder="Type your Message"
                    className="w-full py-3 border-b-[1px] border-gray-500 focus:outline-none focus:border-blue-500 h-[158px]  bg-home"
                  />
                  {errors.text && touched.text ? (
                    <div className="text-red-400">{errors.text}</div>
                  ) : null}
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-6 px-12 bg-black rounded-full text-white text-lg font-medium w-[193px]"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer isHome={false} />
    </>
  );
};
export default Contact;
