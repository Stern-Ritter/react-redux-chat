import { useState } from "react";
import Emoji from "../emoji/emoji";

function EmojiesList({styles, clickHandler}) {
  const [emojes] = useState(["\u{1F604}", "\u{1F602}", "\u{1F605}", "\u{1F609}",
    "\u{1F60F}", "\u{1F613}", "\u{1F624}", "\u{1F62D}", "\u{1F630}", "\u{1F601}",
    "\u{1F60A}", "\u{1F60B}", "\u{1F616}", "\u{1F61C}", "\u{1F61D}", "\u{1F620}",
    "\u{1F631}", "\u{1F648}", "\u{1F649}", "\u{1F64A}", "\u{1F637}", "\u{1F621}",
  ]);

  return (
    <div className={styles} onClick={clickHandler}>
      {emojes.map((code, idx) => (
        <Emoji code={code} key={idx} />
      ))}
    </div>
  );
}

export default EmojiesList;
