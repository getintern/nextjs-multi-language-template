import { useState ,useEffect} from "react";

const useCheckDir = () => {
  const [checkDir, setCheckDir] = useState("ltr");

  useEffect(() => {
    const htmlDocument = document.documentElement;
    setCheckDir(htmlDocument.dir);
  }, []);

  return checkDir;
};

export default useCheckDir;
