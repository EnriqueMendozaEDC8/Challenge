import { useContext } from "react";

const { default: Context } = require("./CreditCardContext");

const useCreditCardContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('Context is not initialized');
  }

  return context;
};

export default useCreditCardContext;
