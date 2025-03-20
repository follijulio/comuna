import { GetIntellectualService } from "../services/intellectuals/getIntellectualsService";

async function verifyIntellectuals(thinkers: string[]) {
  const getIntellectualService = new GetIntellectualService();

  const thinkersResults = [];

  for (let i = 0; i < thinkers.length; i++) {
    const thinkerId = thinkers[i];
    const result = await getIntellectualService.getService(thinkerId);
    thinkersResults.push(result);
  }

  let notFound = false;

  for (let i = 0; i < thinkersResults.length; i++) {
    if (thinkersResults[i] === null) {
      notFound = true;
      break;
    }
  }

  return notFound;
}

export { verifyIntellectuals };
