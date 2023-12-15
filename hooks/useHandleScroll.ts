import { useEffect } from "react";
import { handleScrollDisabled } from "../utils/handleScrollDisabled";

const useHandleScroll = (value: boolean) => {
  useEffect(() => {
    handleScrollDisabled(value);
  }, [value]);
};

export default useHandleScroll;
