import classes from "./Features.module.css";
import SVGCard1 from "./../../../assets/svgs/task_complete.svg";
import SVGCard2 from "./../../../assets/svgs/add_feedback.svg";
import SVGCard3 from "./../../../assets/svgs/interview.svg";
import SVGCard4 from "./../../../assets/svgs/career_progress.svg";
import SVGCard5 from "./../../../assets/svgs/schedule.svg";
import SVGCard6 from "./../../../assets/svgs/profile.svg";
import MainPageModal from "./../../modal/MainPageModal";
import { STypography } from "./FeaturesStyle.js";

const cards = [
  {
    svg: SVGCard1,
    title: "Profile Completion",
    text: "This feature streamlines the onboarding process, eliminates manual entry, and ensures your skills and experience are properly reflected — making your job search faster and more effective from the start.",
    alt: "card 1 svg",
  },
  {
    svg: SVGCard2,
    title: "Personalized Suggestions",
    text: "Go beyond generic listings: our AI understands context and relevance, delivering tailored job suggestions that truly match your background and career goals, saving hours of scrolling through irrelevant ads.",
  },
  {
    svg: SVGCard3,
    title: "Interview Simulator",
    text: "Practice confidently in a safe environment — enhance your interview skills, reduce anxiety, and get actionable insights on how to answer better. Perfect for both entry-level and experienced candidates.",
    alt: "card 4 svg",
  },
  {
    svg: SVGCard4,
    title: "Feedback & Referrals",
    text: "Stand out from the crowd: receive guidance on how to improve your profile or CV, and unlock access to internal recommendations that can increase your chances of getting noticed.",
    alt: "card 4 svg",
  },
  {
    svg: SVGCard5,
    title: "Advanced Search Matching",
    text: "This eliminates narrow or missed matches and ensures your searches surface jobs that actually fit your expertise, even if the exact keyword isn’t used in the job title.",
    alt: "card 4 svg",
  },
  {
    svg: SVGCard6,
    title: "Flexible Work Community",
    text: "Whether you’re looking for weekend projects, side income, or quick freelance gigs like dog walking or helping at events, this community-based section helps you stay connected to flexible earning opportunities.",
  },
];

const Features = () => {
  return (
    <div id="features" className={classes.featuresContainer}>
      <STypography color="secondary" variant="h4">
        Features
      </STypography>
      <div className={classes.cardsContainer}>
        {cards.map((card, index) => (
          <MainPageModal key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Features;
