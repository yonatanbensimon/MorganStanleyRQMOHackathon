import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"
import mri from "../../assets/mri.png"
import blood from "../../assets/blood.png"
import antibiotics from "../../assets/antibiotics.png"

function GameView({ changeView }) {
    return (
        <div>
            <ButtonContainer>
                <ButtonChoice src={mri} onClick={() => changeView("home")}/>
                <ButtonChoice src={blood} onClick={NaN}/>
                <ButtonChoice src={antibiotics} onClick={NaN}/>
            </ButtonContainer>
           <TextBox message={"This is a test"}/>
        </div>
    );
}

export default GameView;