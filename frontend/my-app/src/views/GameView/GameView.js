import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"
import mri from "../../assets/mri.png"
import blood from "../../assets/blood.png"
import previous from "../../assets/previous.png"
import antibiotics from "../../assets/antibiotics.png"
import genetictesting from "../../assets/genetictesting.png"
import heart from "../../assets/heart.png"
import endoscopy from "../../assets/endoscopy.png"
import ctscan from "../../assets/ctscan.png"
import trials from "../../assets/trials.png"
import { useState } from "react"
import Weeks from "../../components/Weeks";

function GameView({ changeView }) {

    function update(dialogue, newOptions, weeksTaken) {
        setMsg(dialogue)
        setChoices(newOptions.map(option => story[option]))
        setWeeks(weeks => weeksTaken + weeks)
    }

    const getCurrentWeeks = () => weeks;

    const story = {
        "BloodTest": {
            "title": "Blood test",
            "src": blood,
            onClick: () => update(
                "There is nothing conclusive but indicates that scans might lead to something.", 
                ["MRIScan", "CTScan", "Back1"], 
                2
            )
        },
        "MRIScan": {
            "title": "MRI scan",
            "src": mri,
            onClick: () => update(
                "It didn’t show anything abnormal.", 
                ["Back2"], 
                1
            ),
        },
        "CTScan": {
            "title": "CT scan",
            "src": ctscan,
            onClick: () => update(
                "No conclusions could be drawn.", 
                ["Back2"], 
                1
            ),
        },
        "Antibiotics": {
            "title": "Antibiotics",
            "src": antibiotics,
            onClick: () => update(
                "I tried them for a few months, but there were no improvements in my condition.", 
                ["Back1"], 
                12
            ),
        },
        "Neurologist": {
            "title": "Neurologist",
            "src": doctor,
            onClick: () => update(
                "\"Sorry, I couldn’t pinpoint the issue. You should give a rheumatologist or a genetic testing a try.\"", 
                ["GeneticTesting", "Rheumatologist", "Back1"],
                3
            ),
        },
        "GeneticTesting": {
            "title": "Genetic testing",
            "src": genetictesting,
            onClick: () => update(
                "The test showed that my genetics are susceptible to cancer, I might learn more with an oncologist.",
                ["Oncologist", "Back22"],
                2
            ),
        },
        "Oncologist": {
            "title": "Oncologist",
            "src": doctor,
            onClick: () => update(
                "“I don’t know what you have. There is no sign of cancer. I’m sorry I can’t help you more.”",
                ["Back22"],
                4
            ),
        },
        "Rheumatologist": {
            "title": "Rheumatologist",
            "src": doctor,
            onClick: () => update(
                "“This is out of my specialty. I can refer you to a trial treatment. Also, I suggest an endoscopy.”",
                ["TrialTreatment", "Endoscopy", "Back22"],
                3
            ),
        },
        "TrialTreatment": {
            "title": "Trial treatment",
            "src": trials,
            onClick: () => update(
                "I tried the treatment for a year, but it didn't help my condition whatsoever.",
                ["Back22"],
                52
            ),
        },
        "Endoscopy": {
            "title": "Endoscopy",
            "src": endoscopy,
            onClick: () => update(
                "It shows that my lungs might have an issue, so I could check a pulmonologist.",
                ["Pulmonologist"],
                2
            )
        },
        "Pulmonologist": {
            "title": "Pulmonologist",
            "src": doctor,
            onClick: () => update(
                "“Your lungs aren’t functioning properly. I believe you have a condition where each lung acts independently from the other during sleep. This would explain the symptoms that you have. We found the crux of the issue.”",
                ["Success"],
                6
            )
        },
        "Back1": {
            "title": "",
            "src": previous,
            onClick: () => update(
                "”",
                ["BloodTest", "Antibiotics", "Neurologist"],
                0
            ),
        },
        "Back2": {
            "title": "",
            "src": previous,
            onClick: () => update(
                "”",
                ["MRIScan", "CTScan", "Back1"],
                0
            ),
        },
        "Back22": {
            "title": "",
            "src": previous,
            onClick: () => update(
                "",
                ["Rheumatologist", "GeneticTesting", "Back1"],
                0
            ),
        },
        "Success": {
            "title": "Congratulations, you have been diagnosed.",
            "src": heart,
            onClick: () => changeView("result40")
        }
    }

    // Available options
    const [choices, setChoices] = useState([story["BloodTest"], story["Antibiotics"], story["Neurologist"]]);
    const [weeks, setWeeks] = useState(0);
    const [message, setMsg] = useState("I need to choose between these options.")


    return (
        <div>
            <Weeks months = {weeks}></Weeks>
            <ButtonContainer>
                {choices.map((choice, index) => (
                    <ButtonChoice key={index} src={choice.src} onClick={choice.onClick}>
                        {choice.title}
                    </ButtonChoice>
                ))}
            </ButtonContainer>
           <TextBox message={message}/>
        </div>
    );
}

export default GameView;