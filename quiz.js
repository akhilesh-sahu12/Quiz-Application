// Function to read user input for the answer
function getUserAnswer() {
    const prompt = require("prompt-sync")({ sigint: true });
    const answer = prompt("Enter the option number of your answer: ");
    return parseInt(answer) - 1;
  }
  
  // Function to introduce a delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Array of quiz questions
  const quizQuestions = [
    {
      question: "What does 'NaN' stand for in JavaScript?",
      options: [
        "Not a Name",
        "Not a Number",
        "Now and Never",
        "Null and NaN",
      ],
      answer: 1,
    },
    {
      question: "What is the output of the following code?\n\nconsole.log(3 + '3');",
      options: ["6", "33", "Error", "NaN"],
      answer: 1,
    },
    {
      question: "What is the result of the expression '10' == 10?",
      options: ["true", "false", "Error", "NaN"],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
      options: ["let", "var", "const", "int"],
      answer: 3,
    },
    {
      question: "What does the 'typeof' operator return when used on an array?",
      options: ["Array", "object", "string", "null"],
      answer: 1,
    },
  ];
  
  // Main quiz function
  async function startQuiz() {
    console.log("Welcome to the JavaScript Quiz Application!\n");
  
    let score = 0;
  
    for (let i = 0; i < quizQuestions.length; i++) {
      const currentQuestion = quizQuestions[i];
  
      console.log("📚 Question " + (i + 1) + " 📚");
      console.log(currentQuestion.question);
      await delay(1000); // Introducing a 1-second delay
  
      currentQuestion.options.forEach((option, index) => {
        console.log(`   ${index+1}. ${option}`);
      });
  
      await delay(2000); // Introducing a 2-second delay
  
      const userAnswer = getUserAnswer();
  
      if (userAnswer === currentQuestion.answer) {
        console.log("✅ Correct!\n\n");
        await delay(1000); // Introducing a 1-second delay
        score++;
      } else {
        console.log("❌ Incorrect!\n");
        await delay(1000); // Introducing a 1-second delay
      }
    }
  
    console.log("🎉 Quiz Complete! 🎉");
    console.log(`Your final score is: ${score}/${quizQuestions.length}`);
  }
  
  // Start the quiz
  startQuiz();
  