export const enhance = (text) => {
  const profanityList = {
    "f***": "fuck",
    "f****": "fucks",
    "f*****": "fucker",
    "f******": "fucking",
    "s***": "shit",
    "b******": "bitches",
    "b*******": "bullshit",
    "s*******": "shitting",
    "a*******": "asshole",
    "c***": "cunt",
    "m*********": "motherfuck",
    "m************": "motherfucking",
    "m***********": "motherfucker",
    "c***": "cock",
    "c*********": "cocksucker",
    "c**********": "cocksucking",
    "d*********": "dicksucker",
    "d**********": "dicksucking",
    "b****": "bitch",
    "w****": "whore",
  };

  const words = text.split(" ");
  const filteredWords = words.map((word) => {
    if (word in profanityList) {
      return profanityList[word];
    } else {
      return word;
    }
  });
  return filteredWords.join(" ");
};
