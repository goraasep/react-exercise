import { FC, useEffect, useState } from "react";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";
import axios from "axios";
interface Message {
  name: string;
  email: string;
  subject: string;
  text: string;
}

const Messages: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/messages");
    setMessages(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavLinks />
      <div className=" px-[85px] py-[215px] bg-home">
        <table className="table-fixed text-center w-full">
          <thead>
            <tr>
              <th className="p-10">NAME</th>
              <th className="p-10">EMAIL</th>
              <th className="p-10">SUBJECT</th>
              <th className="p-10">TEXT</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-300" : ""}>
                <td className="py-5">{message.name}</td>
                <td className="py-5">{message.email}</td>
                <td className="py-5">{message.subject}</td>
                <td className="py-5">{message.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer isHome={false} />
    </>
  );
};
export default Messages;
