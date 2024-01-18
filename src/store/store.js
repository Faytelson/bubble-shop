import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    galleryCardsAbout: [
      {
        imgSrc: "img_about_1.webp",
        title: "Our call-center at work",
      },
      {
        imgSrc: "img_about_2.webp",
        title: "Team of designers",
      },
      {
        imgSrc: "img_about_3.webp",
        title: "Analyzing new project",
      },
      {
        imgSrc: "img_about_4.webp",
        title: "Our happy clients",
      },
      {
        imgSrc: "img_about_5.webp",
        title: "Head of management department and top-manager",
      },
      {
        imgSrc: "img_about_6.webp",
        title: "Our CEO Nick Polansky",
      },
    ],
    previewCardsIntro: [
      {
        src: "company.jpg",
        title: "Our strategy",
      },
      {
        src: "business.avif",
        title: "Our office",
      },
      {
        src: "team_happy.jpeg",
        title: "Designers",
      },
    ],
    previewCardsTeam: [
      {
        src: "meet_team.jpg",
        title: "Our team",
      },
      {
        src: "img_about_2.webp",
        title: "Designers",
      },
      {
        src: "img_about_3.webp",
        title: "Study",
      },
    ],
    previewCardsLeisure: [
      {
        src: "skiing.jpg",
        title: "Skiing",
      },
      {
        src: "airsoft.jpg",
        title: "Airsoft",
      },
      {
        src: "cinema.webp",
        title: "Cinema",
      },
    ],
  },
});
