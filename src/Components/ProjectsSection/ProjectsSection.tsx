import LeftCard from "../Card/LeftCard";
import RightCard from "../Card/RightCard";
import image2 from "/img/audio_filter.png";

const ProjectsSection = ({ refElement }: { refElement: any }) => {
  return (
    <div ref={refElement} className="w-5/6 m-auto lg:mt-32">
      <div className="flex flex-row items-center justify-start mb-6 lg:mb-24">
        <div className="flex flex-row w-auto">
          <div className="text-[30px] whitespace-nowrap mr-2 text-green-gray">
            Projects I've worked on
          </div>
        </div>

        <div className="border-t border-solid w-full border-text-p-gray border-opacity-40"></div>
      </div>

      <div className="w-full">
        <LeftCard
          title="Uno Game"
          description="
          The classic UNO game made with JAVA FX. This first version supports one room with up to four
        players online, you can use Discord to chat with your friends while play UNO. 
        Just login or register to play. I collaborated with other students to develop this project.
        "
          image="/img/uno-b.png"
          skills={["JAVA", "JavaFX", "MySQL", "Multi-threading", "Sockets"]}
          urls={["https://github.com/alfredzarazua/UnoGame.git", "/uno-game"]}
        />

        <RightCard
          title="Assembly Language Compiler"
          description="
        A two step compiler made with ANTLR tool. Designed for SIC/XE architecture.
        SIC uses a special assembly language with its own operation codes that hold the hex values needed to assemble 
        and execute programs.
        This compiler allows you to edit your source code, analyze it lexically and syntactically, and finally translate it into binary, it also generates data such as addressing modes, program counter, instruction format, etc.
        Also includes a Linker and Loader, it is useful to emulate the execution of your program and see the memory usage    
        "
          skills={["C#", ".NET Framework", "ANTLR", "Windows Forms", "NuGet"]}
          image="/img/compiler.png"
          urls={['', '/sicxe-compiler']}
        />
        <LeftCard
          title="Horse challenge"
          description="
          This game looks like chess, but you only have horses, the challenge is to fill
          the board before you run out of moves or your horse gets stuck in a place where it can't move
        "
          image="/img/horse-game.png"
          skills={["Kotlin", "Android Studio", "XML", "Android"]}
          urls={["", "/not-available-yet"]}
        />

        <RightCard
          title="Audio filtering tool"
          description="
          GUI tool to filter audio frequencies from a live recording. The tool includes:
          High-pass filter, Low-pass filter and Band-pass filter. Made in Python using Tkinter
          and Audio processing libraries.
        "
          image={image2}
          skills={["Python", "Tkinter", "Waveio", "MathPlot"]}
          urls={['', '/not-available-yet']}
        />

        <LeftCard
          title="Hw Laboratory Control Access System"
          description="
          A system to register in and out of students in a hardware laboratory, it also helps
          to keep tracking of laboratory equipment and laboratory access. Implemented in .NET
          Framework integrated with Microsoft SQL Server
        "
          image="/img/compiler.png"
          skills={["C#", "SQL Server", "API REST", "Windows Forms", "SQL"]}
          urls={["", "/not-available-yet"]}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
