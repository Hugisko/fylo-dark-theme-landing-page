import access from "../../assets/icon-access-anywhere.svg";
import security from "../../assets/icon-security.svg";
import real_time from "../../assets/icon-collaboration.svg";
import store from "../../assets/icon-any-file.svg";
import "./features.css";
import { Feature } from "../../components";

const Features = () => {
  return (
    <section className="features__section">
      <Feature
        title="Access your files, anywhere"
        info="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        img={access}
      />
      <Feature
        title="Security you can trust"
        info="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        img={security}
      />
      <Feature
        title="Real-time collaboration"
        info="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        img={real_time}
      />
      <Feature
        title="Store any type of file"
        info="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        img={store}
      />
    </section>
  );
};

export default Features;
