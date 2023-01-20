import { useRef, useCallback, useEffect, useReducer } from "react";
import {
  Wrapper,
  Status,
  Letter,
  LEVEL_FIRST,
  LEVEL_FINAL,
  LEVEL_TIME_LIMIT,
  LIFE_COUNT,
  CHANCE_INIT,
  POINTS_UPGRADE,
  getRandomLetter,
  GameState,
  StatusProps,
} from "./common";

interface ReducerAction {
  type: string;
  payload?: {
    key?: string;
  };
}
const handleAction: (
  currentState: GameState,
  action: ReducerAction
) => GameState = (currentState, action) => {
  switch (action.type) {
    case "check":
      const newState =
        action.payload?.key === currentState.letter
          ? currentState.points < POINTS_UPGRADE
            ? { ...currentState, points: currentState.points + 1 }
            : currentState.level < LEVEL_FINAL
            ? { ...currentState, points: 0, level: currentState.level + 1 }
            : { ...currentState, points: 0, level: LEVEL_FINAL }
          : currentState.chance > 1
          ? { ...currentState, chance: currentState.chance - 1 }
          : currentState.life > 0
          ? {
              ...currentState,
              chance: CHANCE_INIT,
              life: currentState.life - 1,
            }
          : { ...currentState, chance: 0 };
      if (!!action.payload?.key) {
        newState.letter = getRandomLetter();
      }
      return newState;
  }
  return currentState;
};

export default function Game() {
  const [gameState, dispatch] = useReducer(handleAction, {
    level: LEVEL_FIRST,
    life: LIFE_COUNT,
    chance: CHANCE_INIT,
    points: 0,
    letter: getRandomLetter(),
  });

  const timerRef = useRef<any>(null);

  const onTimeout = useCallback(() => {
    dispatch({ type: "check" });
  }, []);

  const destroyTimer = useCallback(() => {
    if (!!timerRef.current) clearTimeout(timerRef.current);
  }, [timerRef.current]);

  const initialTimer = useCallback(
    (ms: number) => {
      destroyTimer();
      if (
        gameState.level < LEVEL_FINAL &&
        gameState.life > 0 &&
        gameState.chance > 0
      )
        timerRef.current = setTimeout(onTimeout, ms);
    },
    [gameState, onTimeout, destroyTimer]
  );

  useEffect(() => {
    initialTimer(LEVEL_TIME_LIMIT[gameState.level]);
    return destroyTimer;
  }, [gameState, initialTimer, destroyTimer]);

  const onKeyDown = (e: any) => {
    dispatch({
      type: "check",
      payload: {
        key: e.key,
      },
    });
  };
  return gameState.life === 0 ? (
    <Wrapper>
      <Letter>GAVE</Letter>
      <Letter>OVER</Letter>
    </Wrapper>
  ) : gameState.level >= LEVEL_FINAL ? (
    <Wrapper>
      <Letter>YOU</Letter>
      <Letter>WIN</Letter>
    </Wrapper>
  ) : (
    <Wrapper tabIndex={-1} onKeyDown={onKeyDown}>
      <Status {...(gameState as StatusProps)} />
      <Letter>{gameState.letter}</Letter>
    </Wrapper>
  );
}
