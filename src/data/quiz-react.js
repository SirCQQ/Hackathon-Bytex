const reactQuiz = {
  "id": 1,
  "quizTitle": "React Quiz",
  "quizPicture": {
    "src": "https://hackergeek.ro/storage/app/uploads/public/5e8/ce0/aa8/5e8ce0aa8a629440028347.jpg",
    "alt": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
  },
  "badge":"React",
  "quizSynopsis": "This quiz is exposing 20 questions that go through all the key-concepts of the framework that any React developer should be familiar with. Topics: JSX, components, props, lifecycle & state, events.",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
    },
    {
      "question": "ReactJS is developed by _____?",
      "answers": [
        "Google Engineers",
        "Facebook Engineers"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "answerSelectionType": "single",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "answers": [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above"
      ],
      "correctAnswer": "3",
    },
    {
      "question": "What is Reconciliation?",
      "answers": [
        "The process through which React deletes the DOM.",
        "The process through which React updates and deletes the component.",
        "It is a process to set the state.",
        "The process through which React updates the DOM."
      ],
      "correctAnswer": "4",
    },
    {
      "question": " Which are the correct phases of component lifecycle?",
      "answers": [
        "Mounting: getDerivedStateFromProps(); Updating: componentWillUnmount(); Unmounting: shouldComponentUpdate()",
        "Mounting: componentWillUnmount(); Updating: render(); Unmounting: setState()",
        "Mounting: componentDidMount(); Updating: componentDidUpdate(); Unmounting: componentWillUnmount()",
        "Mounting: constructor(); Updating: getDerivedStateFromProps(); Unmounting: render()"
      ],
      "correctAnswer": "3",
    },
    {
      "question": "Controlled Component vs Uncontrolled Component",
      "answers": [
        "Controlled Components: every state mutation will have an associated handler function; Uncontrolled Components: store their own states internally",
        "Controlled Components: store their own states internally; Uncontrolled Components: every state mutation will have an associated handler function",
        "Controlled Components: A component who is so good at controlling itself; Uncontrolled Components: A component who has no idea how to control itself",
        "Controlled Components: every state mutation does not have an associated handler function; Uncontrolled Components: does not store their own states internally"
      ],
      "correctAnswer": "1",
    },
    {
      "question": "State vs Props",
      "answers": [
        "Props is something that the parent doesn’t need and decide to throw around among other parents; State is the parent’s favorite child and something the component wants to nurture.",
        "Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.",
        "Props is a copy of real DOM; State is the definition of the real DOM.",
        "Prop is managed within the component and holds some information that may change over the lifetime of the component; State gets passed to the component, like a function parameter"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "What is the “key” prop?",
      "answers": [
        "“Key” prop is just there to look pretty and there is no benefit whatsoever.",
        "“Key” prop is a way for React to identify a newly added item in a list and compare during the “diffing” algorithm.",
        "It is one of the attributes in HTML.",
        "All I know is that it is NOT commonly used in array."
      ],
      "correctAnswer": "2",
    },
  ]
} 


export {reactQuiz}