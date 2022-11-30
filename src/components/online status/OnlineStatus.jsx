import { useEffect, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";

const OnlineStatus = () => {
  //declare useState
  const [isOnline, setOnline] = useState(false);

  useEffect(() => {
    function handleOnlineStatus() {
      setOnline(true);
    }

    function handleOfflineStatus() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "45%",
        textAlign: "center",
      }}
    >
      {isOnline === true ? (
        <>
          <AiOutlineGlobal style={{ color: "green", fontSize: "5rem" }} />
          <p
            style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "2px" }}
          >
            ONLINE
          </p>
        </>
      ) : (
        <>
          <AiOutlineGlobal style={{ color: "red", fontSize: "5rem" }} />
          <p
            style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "2px" }}
          >
            OFFLINE
          </p>
        </>
      )}
    </div>
  );
};

export default OnlineStatus;
