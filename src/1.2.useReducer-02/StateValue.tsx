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
} from "./common";

export default function Game() {
  const [level, setLevel] = useState(LEVEL_FIRST);
  const [life, setLife] = useState(LIFE_COUNT);
  const [chance, setChance] = useState(CHANCE_INIT);
  const [points, setPoints] = useState(0);
  const [letter, setLetter] = useState(getRandomLetter());

  const timerRef = useRef<any>(null);

  const onTimeout = useCallback(() => {
    if (level >= LEVEL_FINAL || life === 0) setChance(0);
    else
      setChance((c) => {
        if (c > 1) return c - 1;
        else {
          setLife((l) => {
            if (l > 1) {
              setChance(CHANCE_INIT);
              return l - 1;
            } else {
              return 0;
            }
          });
          return 0;
        }
      });
  }, []);

  const destroyTimer = useCallback(() => {
    if (!!timerRef.current) clearTimeout(timerRef.current);
  }, [timerRef.current]);

  const initialTimer = useCallback(
    (ms: number) => {
      destroyTimer();
      if (level < LEVEL_FINAL && life > 0 && chance > 0)
        timerRef.current = setTimeout(onTimeout, ms);
    },
    [onTimeout, destroyTimer, destroyTimer, level, life, chance]
  );

  useEffect(() => {
    initialTimer(LEVEL_TIME_LIMIT[level]);
    return destroyTimer;
  }, [level, chance, initialTimer]);

  const onKeyDown = (e: any) => {
    if (e.key === letter) {
      setPoints((x) => {
        if (x < POINTS_UPGRADE) return x + 1;
        else {
          setLevel((x) => x + 1);
          return 0;
        }
      });
    } else {
      destroyTimer();
      onTimeout();
    }
    setLetter(getRandomLetter());
  };
  return life === 0 ? (
    <Wrapper>
      <Letter>GAVE</Letter>
      <Letter>OVER</Letter>
    </Wrapper>
  ) : level >= LEVEL_FINAL ? (
    <Wrapper>
      <Letter>YOU</Letter>
      <Letter>WIN</Letter>
    </Wrapper>
  ) : (
    <Wrapper tabIndex={-1} onKeyDown={onKeyDown}>
      <Status level={level} life={life} points={points} chance={chance} />
      <Letter>{letter}</Letter>
    </Wrapper>
  );
}
