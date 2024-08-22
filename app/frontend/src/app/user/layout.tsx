import UserNavbar from "@/src/components/user components/UserNavbar";
import Footer from "@/src/components/Footer";
import ContactInfo from "@/src/components/user components/ContactInfo";

interface LayoutProps {
  pageTitle: string; // Specify the type of the pageTitle property
  children: React.ReactNode; // This line allows any valid React child (string, element, etc.)
}


const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="">
      <div className="">
        <UserNavbar />
        <div className="flex flex-col justify-center items-center h-40 font-black text-">
          <h1>{pageTitle}</h1>
          <hr className="w-3/4 border-2 my-10 rounded-lg"/>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <div className="flex container gap-14">
          <div className="w-3/5">{children}</div>
          <ContactInfo />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
