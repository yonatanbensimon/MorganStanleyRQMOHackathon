import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"
import mri from "../../assets/mri.png"
import blood from "../../assets/blood.png"
import antibiotics from "../../assets/antibiotics.png"
import { useState } from "react"

function GameView({ changeView }) {

    function update(dialogue, newOptions, weeksTaken) {
        setMsg(dialogue)
        setChoices(newOptions.map(option => story[option]))
        setWeeks(weeksTaken + 1)
    }

    const story = {
        "BloodTest": {
            "title": "Blood test",
            "src": blood,
            onClick: () => update(
                "There is nothing conclusive but indicates that scans might lead to something.", 
                ["MRIScan", "CTScan"], 
                2
            )
        },
        "MRIScan": {
            "title": "MRI scan",
            "src": mri,
            onClick: () => update(
                "It didn’t show anything abnormal.", 
                [], 
                1
            ),
        },
        "CTScan": {
            "title": "CT scan",
            "src": doctor,
            onClick: () => update(
                "No conclusions could be drawn.", 
                [], 
                1
            ),
        },
        "Antibiotics": {
            "title": "Antibiotics",
            "src": antibiotics,
            onClick: () => update(
                "I tried them for a few months, but there were no improvements in my condition.", 
                [], 
                12
            ),
        },
        "Neurologist": {
            "title": "Neurologist",
            "src": doctor,
            onClick: () => update(
                "\"Sorry, I couldn’t pinpoint the issue. You should give a rheumatologist or a genetic testing a try.\"", 
                ["GeneticTesting", "Rheumatologist"],
                3
            ),
        },
        "GeneticTesting": {
            "title": "Genetic testing",
            "src": doctor,
            onClick: () => update(
                "The test showed that my genetics are susceptible to cancer, I might learn more with an oncologist.",
                ["Oncologist"],
                2
            ),
        },
        "Oncologist": {
            "title": "Oncologist",
            "src": doctor,
            onClick: () => update(
                "“I don’t know what you have. There is no sign of cancer. I’m sorry I can’t help you more.”",
                [],
                4
            ),
        },
        "Rheumatologist": {
            "title": "Rheumatologist",
            "src": doctor,
            onClick: () => update(
                "“This is out of my specialty. I can refer you to a trial treatment. Also, I suggest an endoscopy.”",
                ["TrialTreatment", "Endoscopy"],
                3
            ),
        },
        "TrialTreatment": {
            "title": "Trial treatment",
            "src": doctor,
            onClick: () => update(
                "I tried the treatment for a year, but it didn't help my condition whatsoever.",
                [],
                52
            ),
        },
        "Endoscopy": {
            "title": "Endoscopy",
            "src": doctor,
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
                [],
                6
            ),
            "gameComplete": true
        }
    }

    // Available options
    const [choices, setChoices] = useState([story["BloodTest"], story["Antibiotics"], story["Neurologist"]]);
    const [weeks, setWeeks] = useState(0);
    const [message, setMsg] = useState("this is a test")

    return (
        <div>
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