import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChatContext } from "../context/ChatContext";
import { fetchApi } from "../api/ApiFetch";
const mPost = import.meta.env.VITE_URL_API_POST;
const mGet = import.meta.env.VITE_URL_API_GET;

const PromptForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { state, dispatch } = useContext(ChatContext);

  useEffect(() => {
    // console.log("Estado actualizado");
    console.log(state);
  }, [state]);

  const handleMyfuntion = async (data) => {
    try {
      
      await fetchApi(mPost,{msg:data.msg},"POST");

      const history = await fetchApi(mGet, null, "GET");

      dispatch({
        type: "LOAD_HISTORY",
        payload: history,
      });

    
    } catch (err) {
      //    throw new Error(err.message);
      console.error(err);
    } finally {
      reset();
    }
  };

  return (
    <footer className="w-full h-10  flex justify-center  bg-violet-900">
      <form
        onSubmit={handleSubmit(handleMyfuntion)}
        method="post"
        className=" flex w-3/5 rounded-4xl bg-yellow-300 "
      >
        <input
          type="text"
          name="msg"
          id=""
          {...register("msg", { required: true })}
          className="outline-none w-full p-3 text-amber-950"
        />
        <br></br>

        <input
         
          type="submit"
          value="Enviar"
          className="
                            bg-amber-950
                            text-amber-200
                            p-2
                            rounded-lg
                            cursor-pointer
                            transition-all
                            duration-200
                            hover:bg-amber-200
                            hover:text-amber-950
                            hover:scale-105
                            hover:shadow-lg
                            active:scale-95
                    "
        />
      </form>
    </footer>
  );
};

export default PromptForm;
