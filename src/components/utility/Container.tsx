import type { ContainerProps } from "../../types/types";

const Container = ({ children, ...props }: ContainerProps) => {

    return (
    <main className={`container mx-auto max-w-3xl px-6 min-h-dvh py-5`} {...props}>
      {children}
    </main>
  );
};

export default Container;
