import bracket from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={` tagline flex items-center ${className || ""}`}>{bracket("left")}
    <div className="mx-3 text-n-3">{children}</div>
    {bracket("right")}
    </div>
  )
}

export default Tagline;