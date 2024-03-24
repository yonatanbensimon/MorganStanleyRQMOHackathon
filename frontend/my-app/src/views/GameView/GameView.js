import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"
import mri from "../../assets/mri.png"
import blood from "../../assets/blood.png"
import antibiotics from "../../assets/antibiotics.png"

function GameView() {
    return (
        <div>
            <ButtonContainer>
                <ButtonChoice src={mri} text={"MRI"} onClick={NaN}/>
                <ButtonChoice src={blood} text={"Blood Test"} onClick={NaN}/>
                <ButtonChoice src={antibiotics} text={"Antibiotics"} onClick={NaN}/>
            </ButtonContainer>
           <TextBox message={"This is a test"}/>
        </div>
    );
}

export default GameView;