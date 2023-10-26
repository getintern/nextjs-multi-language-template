import Image from "next/image";
import iranFlag from "../../../../public/images/iranFlag.png";
import usaFlag from "../../../../public/images/usaFlag.png";
const ChangeLang = () => {
  return (
    <div className="flagContainer">
      <button className="flagItem">
        <Image src={iranFlag} alt="Persian" width={48} height={48} />
      </button>
    </div>
  );
};

export default ChangeLang;
