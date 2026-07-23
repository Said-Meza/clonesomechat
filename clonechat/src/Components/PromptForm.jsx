import { useForm } from "react-hook-form";

const PromptForm = () => {
    const { register } = useForm();

    const handleClick=(e)=>{
        e.preventDefault()
        console.log("distesclick")
    }
  return (
    <footer className="w-full h-10  flex justify-center  bg-violet-900">
      <form
        
        method="post"
        className=" flex w-3/5 rounded-4xl bg-yellow-300 "
      >
        <input
          type="text"
          name="msg"
          id=""
          {...register("msg")}
          className="outline-none w-full p-3 text-amber-950"
        />
        <br></br>

        <input onClick={ (e) => handleClick(e)}
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
