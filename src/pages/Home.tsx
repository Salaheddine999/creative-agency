import { ReactNode } from "react";

type HomeProps = {
    children: ReactNode,
    className: any
}

const Home = ({children, className}: HomeProps) => {
    return ( 
        <div className={className}>
            {children}
        </div>
     );
}
 
export default Home;