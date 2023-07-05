import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1? 1 : questionNumberInt -1
    const nextQuestionNumber = questionNumberInt + 1

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber} </h2>
            <Link to={`/survey/${prevQuestionNumber}`} > { questionNumberInt <= 1  ? '' : 'Précédent' } </Link>
            <Link to={questionNumber < 10 ? `/survey/${nextQuestionNumber}` : '/results'}> { questionNumberInt < 10  ? 'Suivant' : 'Results' }</Link>
        </div>
    )
}

export default Survey