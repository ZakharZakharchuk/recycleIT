import styles from "./Support.module.css";
import { FAQ } from "../../../util/constants";
import AccordionItem from "./AccordionItem/AccordionItem";

export default function Accordions() {
    const questions = FAQ;

    return (
        <div className={styles.Accordions_container}>
            {questions.map((question) => {
                return (
                    <AccordionItem
                        key={question.id}
                        question={question.question}
                        answer={question.answer}
                    />
                );
            })}
        </div>
    );
}
