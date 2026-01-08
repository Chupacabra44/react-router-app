import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="pathWrapper">
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
        inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique
        veritatis laudantium, explicabo sapiente aspernatur dolores incidunt,
        nihil debitis sit, mollitia harum omnis porro at doloribus nobis hic
        laborum fugit!
      </p>
      <div className="btnGroup">
        {/* <Link to="frontend">Frontend</Link> Look in App.jsx line 25 */}
        <Link to="">Frontend</Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
