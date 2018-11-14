import { PLAYER2_PLAYABLE_HOLE_NUMBERS } from "../logic/congklakLogicUtils";

export function getEasyAiChoice(congklakState) {
  const playableHoles = PLAYER2_PLAYABLE_HOLE_NUMBERS.filter(
    val => congklakState[val] > 0
  );
  return playableHoles[Math.floor(Math.random() * playableHoles.length)];
}
