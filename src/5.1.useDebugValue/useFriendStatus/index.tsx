import { useDebugValue, useEffect, useState } from "react";

function useFriendStatus(friendID?: string) {
  const [isOnline, setIsOnline] = useState(false);
  // ...
  // 在开发者工具中的这个 Hook 旁边显示标签
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? "Online" : "Offline");
  const changeStatus = () => {
    // setIsOnline(!isOnline);
  };

  return [isOnline, setIsOnline, changeStatus];
}

export default useFriendStatus;
