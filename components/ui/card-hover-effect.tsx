import authService from "@/app/appwrite/auth";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string;
    Title: string;
    Description: string;
    Equity: string;
    Ask_Amount: string;
    image: string;
    userId: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        (<div
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>

            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          <Card>
            <UserDetails userId={item.userId} />
            <CardTitle>{item.Title}</CardTitle>
            <CardDescription>{item.Description.split(" ").slice(0, 5).join(" ")}</CardDescription>
            <Ask_Amount>{item.Ask_Amount}</Ask_Amount>
            <Equity>{item.Equity}</Equity>
          </Card>
        </div>)
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Ask_Amount = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <p
        className={cn(
          "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        Ask Amount : ₹{children} 
      </p>
    );
  };

  export const Equity = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <p
        className={cn(
          "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        <strong className="text-slate-50 ">Equity</strong> : {children}% 
      </p>
    );
  };

  export const Image = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <p
        className={cn(
          "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        Equity : {children}% 
      </p>
    );
  };


  export const UserDetails = (userId: any) => {
    console.log(userId);
    const [user, setUser] = useState({} as any);
  
    const getUser = async (userId: string) => {
      const user = await authService.getUserDatabase(userId);
      setUser(user);
    };
  
    useEffect(() => {
      getUser(userId);
    }, [userId]);
  
    return (
      <div className="text-white  ">
        <h2>{user?.name}</h2>
        <h2>User: {user?.email}</h2>
        <h2>{user?.role}</h2>
      </div>
    );
  }
  