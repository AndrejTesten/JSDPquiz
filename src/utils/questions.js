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
            "Fudbaler sa najviše zabeleženih nastupa u crno-belom dresu je:",
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
            "Košarkaš sa najviše zabeleženih nastupa u crno-belom dresu je:",
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
          correctAnswer: "Željko Obradović",
        },
      ],
    },
    mid: {
      totalQuestions: 3,
      perQuestionScore: 7,
      questions: [
        {
          question:
            "Igrač sa najviše ubačenih poena na jednom meču u dresu KK Partizana je?",
          choices: [
            "Miloš Bojović",
            "Dražen Dalipagić",
            "Dragan Kićanović",
            "Džamar Vilson",
          ],
          type: "MCQs",
          correctAnswer: "Miloš Bojović",
        },
        {
          question:
            "Predvođen kojim trenerom je FK Partizan učestvovao u ligi šampiona 2010. godine",
          choices: [
            "Lotar Mateus",
            "Avram Grant",
            "Aleksandar Stanojević",
            "Miroslav Đukić",
          ],
          type: "MCQs",
          correctAnswer: "Aleksandar Stanojević",
        },
        {
          question:
            "Najviše golova na jednom meču u dresu FK Partizan postigao je?",
          choices: [
            "Stjepan Bobek",
            "Miloš Milutinović",
            "Lamin Dijara",
            "Aleksandar Mitrović",
          ],
          type: "MCQs",
          correctAnswer: "Stjepan Bobek",
        },
      ],
    },
    hard: {
      totalQuestions: 5,
      perQuestionScore: 10,
      questions: [
        {
          question:
            "Koje godine je KK Partizan osvojio svoju prvu titulu šampiona države?",
          choices: ["1957.", "1947.", "1976.", "1966."],
          type: "MCQs",
          correctAnswer: "1976.",
        },
        {
          question:
            "Protiv koje ekipe je u sezoni 2008/09 oboren rekord po broju gledalaca na jednom meču Evrolige?",
          choices: ["Barselona", "Olimpijakos", "CSKA", "Panatinaikos"],
          type: "MCQs",
          correctAnswer: "Panatinaikos",
        },
        {
          question: 'Kapiten "Partizanovih beba" bio je?',
          choices: [
            "Vladica Kovačević",
            "Mustafa Hasanagić",
            "Branko Rašović",
            "Milan Galić",
          ],
          type: "MCQs",
          correctAnswer: "Vladica Kovačević",
        },
        {
          question:
            "KK Partizan je prvi košarkaški klub iz Srbije koji je odigrao zvaničnu utakmicu sa NBA timovima, protiv koje NBA ekipe je bila prva utakmica na toj turneji iz 2009. godine?",
          choices: [
            "Denver Nagets",
            "Finiks Sans",
            "Čikago Buls",
            "Boston Seltiks",
          ],
          type: "MCQs",
          correctAnswer: "Denver Nagets",
        },
        {
          question: "Prvi trener FK Partizan u njegovoj istoriji, bio je?",
          choices: [
            "Ivan Ivica Osim",
            "Gojko Zec",
            "Mirko Damjanović",
            "Vladimir Vermezović",
          ],
          type: "MCQs",
          correctAnswer: "Mirko Damjanović",
        },
      ],
    },
  },
};
