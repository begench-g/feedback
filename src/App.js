import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import {useState} from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from "./context/FeedbackContext";


function App(){
    const [feedback,setFeedback]=useState(FeedbackData)


    return (
        <FeedbackProvider>
        <Header text='Hello Begench!'/>
        <div className="container">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
        </FeedbackProvider>
    )
}
export default App;