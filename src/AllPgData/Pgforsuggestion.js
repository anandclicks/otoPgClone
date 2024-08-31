import { AllPgDetails } from "./PgDetails";

const pgsuggestionData = () => {
  const suggestedPg = [];
  const totalPgs = AllPgDetails.length;

  for (let index = 0; index < 4; index++) {
    const randomIndex = Math.floor(Math.random() * totalPgs);
    suggestedPg.push(AllPgDetails[randomIndex]);
  }

  return suggestedPg;
}

export default pgsuggestionData;
