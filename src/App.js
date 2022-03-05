import './App.css';

function App() {
    document.title = "Eiseldel Games";
    return (
        <div className=''>
            <div className="w-full bg-[#ff0000]">
                <div className="flex justify-between">
                    <div>
                        <EiseldelLogo width="3rem" height="3rem" className='align-middle inline' />
                        <h1 className='header-text inline align-middle'>
                            Eiseldel Games
                        </h1>
                    </div>
                    <div>
                        <a href="https://reactjs.org/">
                            <ReactLogo width="3rem" height="3rem" fill="white" className='align-middle inline'/>
                            <h4 className='inline align-middle p-2'>Developed with React</h4>
                        </a>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex-row items-center justify-center mx-4">
                <div className='p-2'>
                    <h2>About</h2>
                    <h3>One-man-army game development</h3>
                    <p>
                        I have a few game projects in the works. Check them out below.<br></br>

                        I got hooked on game development in high school and never lost the ambition since.
                        I completed my Bachelor's in Computer Science in December of 2020, with the goal
                        to use the knowledge to do gameplay programming.
                    </p>
                </div>
                <hr className='m-2' />
                <h2 className='block p-2'>Solo projects</h2>
                <h3 className='px-2'>In-progress:</h3>
                <div className='grid col-auto'>
                    <InfoCard title="Project Night Sky" 
                        body="A game about building and upgrading a spaceship">
                        <p>
                            <a href="https://eiseldel.itch.io/night-sky">Link to this game on Itch.io</a>
                        </p>
                    </InfoCard>
                </div>
                <hr className="m-2" />
                <h2 className='block p-2'>Team projects</h2>
                <h3 className='px-2'>Completed:</h3>
                <div className="grid col-auto">
                    <InfoCard
                        title="Maybe I Don't Want to be the Bad Guy"
                        body="Leading a kingdom means making the tough choices.">
                        <p>
                            <a href="https://globalgamejam.org/2022/games/maybe-i-dont-want-be-bad-guy-3">Link to this game on Global Game Jam</a><br></br>
                            Like deciding whether your servants should be put to death because they choose not to follow you, or giving into the
                            demands of the townsfolk. Decide what kind of person you want to be in the *afterstory* of defeating the hero.<br></br>
                            &mdash;<i>Developed alongside three other teammates; I worked on the code</i>&mdash;
                        </p>
                    </InfoCard>
                </div>
            </div>

            <div className="text-center align-middle">
                <p>
                    <span className='border-2 p-1 rounded-lg'>
                        &copy; Eiseldel Games 2021-{new Date().getFullYear().toString()}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default App;
