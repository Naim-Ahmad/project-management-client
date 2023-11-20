import { Sidebar } from "./sidebar/Sidebar";

const DashbordLayout = () => {
  return (
    <section className="flex">
      <div className="max-w-xs">
        <Sidebar />
      </div>
      <div className="bg-[#EEF1F3]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sapiente
        consectetur quas! Nostrum mollitia nesciunt architecto, quos enim
        ducimus consequatur nihil atque dolorem nam! Non explicabo suscipit vel!
        Laboriosam, adipisci.
      </div>
    </section>
  );
};

export default DashbordLayout;
