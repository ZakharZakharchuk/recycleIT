import * as React from 'react';
import { Container } from '@mui/material';
import styles from './Support.module.css'
import { FAQ } from './../../util/data-list-mock';
import AccordionItem from './AccordionItem/AccordionItem';

export default function Accordions() {
  const [questions, setQuestions] = React.useState(FAQ);

  return (
    <div className={styles.Accordions_container}>
      {
        questions.map(question => {
          return <AccordionItem 
                    key={question.id}
                    question={question.question} 
                    answer={question.answer} 
                  />
        })
      }
    </div>
  );
}