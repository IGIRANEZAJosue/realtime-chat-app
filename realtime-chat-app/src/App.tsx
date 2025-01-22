import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <ScrollArea>
        <div className="space-y-4">
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
            Hi, how can I help you today?
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            Hey, I'm having trouble with my account.
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
            What seems to be the problem?
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            I can't log in.
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            Hwllo
          </div>
        </div>
      </ScrollArea>
    </main>
  );
}

export default App;
