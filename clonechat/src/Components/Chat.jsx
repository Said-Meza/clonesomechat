import { Header } from "./Header";
import { Message } from "./Message";
import PromptForm from "./PromptForm";
import { History } from "./History";

export const Chat = () => {
  return (
    <div className=" bg-violet-900">
      <Header></Header>
       <main className="min-h-[calc(100vh-91px)]">
        <section className="mx-auto flex max-w-4xl flex-col gap-4 p-4 text-white">
         
        <Message role="ia" msg=" Hola,¿cunetame algo interesante o dime en que te ayudo?"></Message>
        
        <History></History>
          
        </section>
      </main>
      <PromptForm></PromptForm>

      
    </div>
  );
};
