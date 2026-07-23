export const Message = ({  role, msg }) => {
  return (
    <>
        <div className={`${role === "user" ? "ml-auto" : ""} w-fit max-w-[75%] rounded-xl bg-amber-500 p-4 break-words whitespace-pre-wrap`} >
          {msg}
        </div>
     
    </>
  );
};
