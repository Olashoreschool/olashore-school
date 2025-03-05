import {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

export type Article = {
  writerName: string;
  title: string;
  date: string;
  image: string;
  content: string;
  _id?: string;
};

type AppContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  fetchArticles: () => Promise<void>;
  articles: Article[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchArticles = async () => {
    const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL + "article";
    const res = await fetch(endpoint);
    const data = await res.json();
    setArticles(data.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const contextValue: AppContextType = {
    isModalOpen,
    openModal,
    closeModal,
    fetchArticles,
    articles,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
