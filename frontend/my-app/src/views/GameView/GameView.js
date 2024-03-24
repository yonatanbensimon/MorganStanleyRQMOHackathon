import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"
import mri from "../../assets/mri.png"
import blood from "../../assets/blood.png"
import antibiotics from "../../assets/antibiotics.png"

function GameView({ changeView }) {

    // Available options
    const buttonChoices = [
        {
            src: mri,
            onClick: () => changeView("home"), // Example for changeView usage
            title: "MRI Scan"
        },
        {
            src: blood,
            onClick: () => { /* Define onClick handler for this button */ },
            title: "Blood test"
        },
        {
            src: antibiotics,
            onClick: () => { /* Define onClick handler for this button */ },
            title: "Antibiotics"
        }
    ];

    return (
        <div>
            <ButtonContainer>
                {buttonChoices.map((choice, index) => (
                    <ButtonChoice key={index} src={choice.src} onClick={choice.onClick}>
                        {choice.title}
                    </ButtonChoice>
                ))}
            </ButtonContainer>
           <TextBox message={"This is a test"}/>
        </div>
    );
}

export default GameView;