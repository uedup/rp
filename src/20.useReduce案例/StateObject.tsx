import React, { useRef, useCallback, useEffect, useState } from "react";
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

export default function Game() {
  const [gameState, setGameState] = useState<GameState>({
    level: LEVEL_FIRST,
    life: LIFE_COUNT,
    chance: CHANCE_INIT,
    points: 0,
    letter: getRandomLetter(),
  });
  const timerRef = useRef<any>(null);

  const onTimeout = useCallback(
    (letter: string) => {
      if (gameState.level >= LEVEL_FINAL || gameState.life === 0)
        setGameState({
          ...gameState,
          chance: 0,
          letter,
        });
      else {
        if (gameState.chance > 1)
          setGameState({
            ...gameState,
            letter: letter || gameState.letter,
            chance: gameState.chance - 1,
          });
        else if (gameState.life > 1) {
          setGameState({
            ...gameState,
            letter: letter || gameState.letter,
            chance: CHANCE_INIT,
            life: gameState.life - 1,
          });
        } else {
          setGameState({
            ...gameState,
            letter: letter || gameState.letter,
            chance: 0,
            life: 0,
          });
        }
      }
    },
    [gameState]
  );

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
    if (e.key === gameState.letter) {
      if (gameState.points < POINTS_UPGRADE) {
        setGameState({
          ...gameState,
          points: gameState.points + 1,
          letter: getRandomLetter(),
        });
      } else {
        setGameState({
          ...gameState,
          points: 0,
          level: gameState.level + 1,
          letter: getRandomLetter(),
        });
      }
      return;
    }
    // else
    destroyTimer();
    onTimeout(getRandomLetter());
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
