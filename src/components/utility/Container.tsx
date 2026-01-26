import type { ContainerProps } from "../../types/types";

const Container = ({ children, ...props }: ContainerProps) => {

    return (
    <main className={`container mx-auto max-w-3xl px-6 min-h-screen py-4`} {...props}>
      {children}
    </main>
  );
};

export default Container;
