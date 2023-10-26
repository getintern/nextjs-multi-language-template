import { useTranslation } from "react-i18next";

const HomePageTemp = () => {
  const { t } = useTranslation;
  return (
    <div className="container">
      <form>
        <h2>Register</h2>
        <input placeholder="Email" />
        <input placeholder="password" />
      </form>
    </div>
  );
};

export default HomePageTemp;
