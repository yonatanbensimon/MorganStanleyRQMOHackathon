import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"
import mri from "../../assets/mri.png"
import blood from "../../assets/blood.png"
import antibiotics from "../../assets/antibiotics.png"
import { useState } from "react"


function GameView({ changeView }) {

    const story = {
        "BloodTest": {
            "title": "Blood test",
            "src": blood,
            onClick: () => changeView("home"),
            "dialogue": "There is nothing conclusive but indicates that scans might lead to something.",
            "newOptions": ["MRIScan", "CTScan"],
            "weeksTaken": 2
          },
        "MRIScan": {
            "title": "MRI scan",
            "src": mri,
            onClick: () => changeView("home"),
            "dialogue": "It didn’t show anything abnormal.",
            "newOptions": null,
            "weeksTaken": 1,
            "deadEnd": true
        },
        "CTScan": {
            "title": "CT scan",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "No conclusions could be drawn.",
            "newOptions": null,
            "weeksTaken": 1,
            "deadEnd": true
        },
        "Antibiotics": {
            "title": "Antibiotics",
            "src": antibiotics,
            onClick: () => changeView("home"),
            "dialogue": "I tried them for a few months, but there were no improvements in my condition.",
            "newOptions": null,
            "weeksTaken": 12,
            "deadEnd": true
        },
        "Neurologist": {
            "title": "Neurologist",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "\"Sorry, I couldn’t pinpoint the issue. You should give a rheumatologist or a genetic testing a try.\"",
            "newOptions": ["GeneticTesting", "Rheumatologist"],
            "weeksTaken": 3
        },
        "GeneticTesting": {
            "title": "Genetic testing",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "The test showed that my genetics are susceptible to cancer, I might learn more with an oncologist.",
            "newOptions": ["Oncologist"],
            "weeksTaken": 2
        },
        "Oncologist": {
            "title": "Oncologist",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "“I don’t know what you have. There is no sign of cancer. I’m sorry I can’t help you more.”",
            "newOptions": null,
            "weeksTaken": 4,
            "deadEnd": true
        },
        "Rheumatologist": {
            "title": "Rheumatologist",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "“This is out of my specialty. I can refer you to a trial treatment. Also, I suggest an endoscopy.”",
            "newOptions": ["TrialTreatment", "Endoscopy"],
            "weeksTaken": 3
        },
        "TrialTreatment": {
            "title": "Trial treatment",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "I tried the treatment for a year, but it didn't help my condition whatsoever.",
            "newOptions": null,
            "weeksTaken": 52,
            "deadEnd": true
        },
        "Endoscopy": {
            "title": "Endoscopy",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "It shows that my lungs might have an issue, so I could check a pulmonologist.",
            "newOptions": ["Pulmonologist"],
            "weeksTaken": 2
        },
        "Pulmonologist": {
            "title": "Pulmonologist",
            "src": doctor,
            onClick: () => changeView("home"),
            "dialogue": "“Your lungs aren’t functioning properly. I believe you have a condition where each lung acts independently from the other during sleep. This would explain the symptoms that you have. We found the crux of the issue.”",
            "newOptions": null,
            "weeksTaken": 6,
            "gameComplete": true
        }
    }

    // Available options
    const [choices, setChoices] = useState([story["BloodTest"], story["Antibiotics"], story["Neurologist"]]);

    return (
        <div>
            <ButtonContainer>
                {choices.map((choice, index) => (
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