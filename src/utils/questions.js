export const quiz = {
  topic: "Javascript",
  levels: {
    beginner: {
      totalQuestions: 4,
      perQuestionScore: 5,
      questions: [
        {
          question: "Koje godine je osnovan JSD Partizan?",
          choices: ["1941.", "1945.", "1970.", "Ništa od ponuđenog"],
          type: "MCQs",
          correctAnswer: "1945.",
        },
        {
          question:
            "Fudbaler sa najviše zabeleženih nastupa u svetom dresu je:",
          choices: [
            "Saša Ilić",
            "Momčilo Vukotić",
            "Nikica Klinčarski",
            "Milan Smiljanić",
          ],
          type: "MCQs",
          correctAnswer: "Saša Ilić",
        },
        {
          question:
            "Košarkaš sa najviše zabeleženih nastupa u svetom dresu je:",
          choices: [
            "Petar Božić",
            "Predrag Danilović",
            "Dušan Kecman",
            "Novica Veličković",
          ],
          type: "MCQs",
          correctAnswer: "Novica Veličković",
        },
        {
          question:
            "Najtrofejniji trener Evrolige, a ujedno i trener našeg kluba je:",
          choices: [
            "Duško Vujošević",
            "Aleksandar Džikić",
            "Željko Obradović",
            "Sašo Filipovski",
          ],
          type: "MCQs",
          correctAnswer: "const",
        },
      ],
    },
    mid: {
      totalQuestions: 3,
      perQuestionScore: 7,
      questions: [
        {
          question: "What does CSS stand for?",
          choices: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
          ],
          type: "MCQs",
          correctAnswer: "Cascading Style Sheets",
          imageURL: "https://d2a3o6pzho379u.cloudfront.net/5942.jpg",
        },
        {
          question: "Which HTML tag is used to define an internal style sheet?",
          choices: ["<style>", "<css>", "<script>", "<html>"],
          type: "MCQs",
          correctAnswer: "<style>",
          videoURL: "https://www.youtube.com/watch?v=fCFt0dR_Dz0",
        },
        {
          question: "Which CSS property controls the text size?",
          choices: ["font-size", "text-size", "font-style", "text-style"],
          type: "MCQs",
          correctAnswer: "font-size",
        },
      ],
    },
    hard: {
      totalQuestions: 5,
      perQuestionScore: 10,
      questions: [
        {
          question: "What does HTML stand for?",
          choices: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler",
          ],
          type: "MCQs",
          correctAnswer: "Hyper Text Markup Language",
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          choices: ["class", "styles", "style", "font"],
          type: "MCQs",
          correctAnswer: "style",
        },
        {
          question:
            "Which property is used to change the left margin of an element?",
          choices: ["margin-left", "padding-left", "indent", "text-indent"],
          type: "MCQs",
          correctAnswer: "margin-left",
        },
        {
          question:
            "In CSS, which property is used to change the background color of an element?",
          choices: ["background-color", "color", "bgcolor", "background"],
          type: "MCQs",
          correctAnswer: "background-color",
        },
        {
          question: "Which CSS property is used to make text bold?",
          choices: ["font-weight", "text-style", "font-style", "bold"],
          type: "MCQs",
          correctAnswer: "font-weight",
        },
      ],
    },
  },
};
