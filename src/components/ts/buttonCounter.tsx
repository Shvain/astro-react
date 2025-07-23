import { useState, useCallback } from "react";

interface buttonProps {
  initialCount?: number;
  test?: string;
}

const getCount2 = () => {
  return getCount4();
};

const getCount3 = () => {
  return 1;
};

const getCount4 = () => {
  return 2;
};

// 関数宣言
function ButtonCounter({initialCount}: buttonProps) {
  const [count, setCount] = useState(initialCount ?? 1);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const getCount = useCallback(() => {
    return count;
  }, [count]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        クリック
      </button>
      <p className="mt-2 text-lg">あなたは {count} 回クリックしました</p>
    </div>
  );
}

//　アロー関数
const ButtonCounter1: React.FC<buttonProps> = ({initialCount}) => {
  const [count, setCount] = useState(initialCount || 0);

  const handleClick = () => {
    setCount(count + 1);1
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        クリック
      </button>
      <p className="mt-2 text-lg">あなたは {count} 回クリックしました</p>
    </div>
  );
};

export { ButtonCounter, ButtonCounter1 };