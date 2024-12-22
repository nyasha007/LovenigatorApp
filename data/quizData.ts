export const firstBaseQuiz: StageQuiz = {
  title: "The Getting to Know You Stage",
  questions: [
    {
      question: "Your date has food stuck in their teeth. You:",
      options: [
        "Quietly let them know with a subtle gesture",
        "Stare at it intensely hoping they notice",
        "Take a sneaky photo to show them later",
        "Start picking your own teeth as a hint"
      ],
      correctAnswer: 0,
      weight: 1.2,
      explanation: {
        positive: "You handle awkward moments with grace and consideration",
        needsWork: "Direct, kind communication helps avoid embarrassment"
      },
      humorNote: "If you picked 'take a photo', we need to talk about your documentation habits 📸"
    },
    {
      question: "When they text 'wyd?', you typically:",
      options: [
        "Tell them honestly, even if it's 'reorganizing my sock drawer'",
        "Say 'nothing much' while binge-watching your ex's Instagram",
        "Type and delete 17 different responses",
        "Wait 3 hours to seem busy, then reply 'nm u?'"
      ],
      correctAnswer: 0,
      weight: 1.3,
      explanation: {
        positive: "Authenticity builds trust, even about sock drawers",
        needsWork: "Being genuine > playing it cool"
      },
      humorNote: "The typing indicator bubble is the modern-day Shakespeare soliloquy 💭"
    }
  ],
  stageWeight: 0.2
};

export const secondBaseQuiz: StageQuiz = {
  title: "The Real Talk Stage",
  questions: [
    {
      question: "You find your partner's secret playlist. It's all Nickelback. You:",
      options: [
        "Accept that love means embracing their questionable music taste",
        "Start a subtle musical re-education program",
        "Pretend you never saw it",
        "Update your dating profile, just in case"
      ],
      correctAnswer: 0,
      weight: 1.5,
      explanation: {
        positive: "Accepting quirks is crucial for long-term happiness",
        needsWork: "Love means loving the whole person, even their playlist"
      },
      humorNote: "Look at this photograph... of your relationship tolerance 🎸"
    },
    {
      question: "They've just spent their entire paycheck on a collection of rubber ducks. You:",
      options: [
        "Have a serious discussion about financial goals while acknowledging their interests",
        "Start hiding your credit cards",
        "Name each duck and hope this phase passes",
        "Wonder if you can float away on all these ducks"
      ],
      correctAnswer: 0,
      weight: 2.0,
      explanation: {
        positive: "You can address serious issues while respecting their passions",
        needsWork: "Financial compatibility needs open discussion"
      }
    }
  ],
  stageWeight: 0.3
};

export const thirdBaseQuiz: StageQuiz = {
  title: "The Deep Connection Stage",
  questions: [
    {
      question: "You discover they've never seen your favorite movie. You:",
      options: [
        "Plan a special movie night and share why it means so much to you",
        "Quote it constantly until they get annoyed enough to watch it",
        "Stage a dramatic reenactment in the living room",
        "Question all their life choices up to this point"
      ],
      correctAnswer: 0,
      weight: 1.4,
      explanation: {
        positive: "You share passions without forcing them",
        needsWork: "Sharing interests should bring joy, not obligation"
      }
    }
  ],
  stageWeight: 0.2
};

export const popTheQuestionQuiz: StageQuiz = {
  title: "The Big Decision",
  questions: [
    {
      question: "Their family's holiday traditions involve competitive karaoke and interpretive dance. You:",
      options: [
        "Embrace the chaos and practice your moves",
        "Mysteriously develop laryngitis every holiday",
        "Start researching witness protection programs",
        "Film everything for future blackmail"
      ],
      correctAnswer: 0,
      weight: 2.0,
      explanation: {
        positive: "You're ready to embrace their whole world, quirks and all",
        needsWork: "Marriage means joining families, dance moves and all"
      }
    }
  ],
  stageWeight: 0.3,
  incompatibilityFlags: {
    financialMismatch: false,
    valuesMismatch: false,
    communicationIssues: false,
    trustIssues: false
  }
};

export const getCompatibilityAdvice = (scores, answers) => {
  let flags = {
    financialMismatch: false,
    communicationIssues: false,
    trustIssues: false,
    valuesMismatch: false
  };

  // Analyze answers for red flags
  answers.forEach(answer => {
    // Check for specific patterns in answers
    if (answer.includes('financial') && answer.score < 50) flags.financialMismatch = true;
    if (answer.includes('communication') && answer.score < 40) flags.communicationIssues = true;
    // etc...
  });

  if (scores.total < 50) {
    if (flags.financialMismatch && flags.valuesMismatch) {
      return {
        type: 'incompatible',
        title: "Let's Be Real...",
        message: "It seems like you and your partner have fundamentally different approaches to important life aspects like finances and core values. While love is important, these differences can lead to significant challenges. Consider having serious discussions about these topics before moving forward.",
        actionItems: [
          "Have an honest conversation about financial goals and habits",
          "Discuss your core values and life vision",
          "Consider relationship counseling to address these differences",
          "Take time to evaluate if these differences are deal-breakers"
        ]
      };
    }
  }

  // Return appropriate advice based on scores and flags
};