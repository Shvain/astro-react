import { 
  useEffect, 
  useState,
} from 'react';

interface Props {
  title?: string;
}

export default function Header({ title = "My Site" }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初期実行
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'backdrop-blur-sm bg-white rounded-xl mx-10 mt-2' 
          : 'bg-white'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex justify-between transition-all duration-300 ease-in-out
          ${isScrolled ? 'h-12' : 'h-16'}
        `}>
          <div className="flex items-center">
            <a 
              href="/" 
              className={`
                font-bold text-gray-900 transition-all duration-300 ease-in-out
                ${isScrolled ? 'text-lg' : 'text-2xl'}
              `}
            >
              {title}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="/" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="/count" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Counter
            </a>
            <a 
              href="/markdown-page" 
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Markdown
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}