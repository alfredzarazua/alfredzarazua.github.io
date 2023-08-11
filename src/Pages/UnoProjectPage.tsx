
import Footer from "../Components/Footer/Footer";
import ProjectTitle from "../Components/ProjectTitle/ProjectTitle";
import LeftBanner from "../Components/LeftBanner/LeftBanner";
import RightBanner from "../Components/RightBanner/RightBanner";
import ToolsBar from "../Components/ToolsBar/ToolsBar";

const UnoProjectPage = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="max-w-[1366px] min-w[1365px] m-auto">
        
        <ProjectTitle
          title="UNO Game for Desktop"
          subtitle="The classic UNO game for Windows, Online"
        />
        <div className="w-5/6 m-auto lg:mt-32">
          <LeftBanner
            description="
                First you need to have an account to play, If you don't have account
                you can create a new one
                "
            image="/img/uno-a.png"
          />
          <RightBanner
            description="
                Once you are logged in, you can see the available rooms to join, in this version there
                is only one room enabled, this is a MVP, it works on one room but could be upgraded to support
                multiple rooms
                "
            image="/img/uno-f.png"
          />
          <LeftBanner
            description="
                Then you need to wait for your friends to join, at least should be two in the room to start.
                "
            image="/img/uno-e.png"
          />
          <RightBanner
            description="
                This is the game, you can click on a card to drop it or click to take a card, You can only do this if it's your turn.
                "
            image="/img/uno-b.png"
          />

          <LeftBanner
            description="
                This is the communication process, on the client side there are two threads, one to
                send requests and wait for responses and one to update the user interface when the other players
                make moves on the game.
                On the server side, each client has a Thread to listen and send updates to the client.
                Each thread interacts with the main thread which has access to the database, game state and user data
                "
            image="/img/uno-h.png"
          />
        </div> 
        <ToolsBar title="Build with" skills={['Java 8', 'Netbeans 12', 'Java FXML', 'MySQL Server Community', 'JDK', 'Scene Builder']}/>       
        <Footer />
      </div>
    </div>
  );
};
export default UnoProjectPage;
