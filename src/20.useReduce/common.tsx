import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bbb;
`

export const Letter = styled.p`
  color: #690000;
  font-size: 196px;
`

const StatusBlock = styled.div`
  font-size: 58px;
`

export interface StatusProps {
  level: number;
  life: number;
  points: number;
  chance: number;
}
export const Status: React.FC<StatusProps> = ({level, life, points, chance}) => {
  return(
    <StatusBlock>
      <p>等级：{level}</p>
      <p>生命：{life}</p>
      <p>机会：{chance}</p>
      <p>得分：{points}</p>
    </StatusBlock>
  )
}

export interface GameState {
  level: number;
  life: number;
  points: number;
  chance: number;
  letter: string;
}

export const LEVEL_FIRST = 1  //初始级别
export const LEVEL_FINAL = 3  //最高级别
export const LEVEL_TIME_LIMIT = [0, 1000, 2500, 2000, 1500, 1000, 500] //每个字母等待时长
export const LIFE_COUNT = 3   //血量
export const CHANCE_INIT = 2  //每滴血的机会次数（超时或错误会见）
export const POINTS_UPGRADE = 5 //升级要求
export const LETTER_SET = ['a', 'b', 'c', 'd', 'e', 'f', 'g'] //覆盖字母

export const getRandomLetter = () => {
  const id = Math.floor(Math.random() * LETTER_SET.length)
  return LETTER_SET[id]
}
