import {
  Link,
  NavLink,
} from "@remix-run/react";
export default function Nav() {
  //const c = "bg-nord1 h-10 border-b border-nord9"
  const c = "bg-nord1 flex items-center justify-between"
  function nlclasshome(p) {
    return nlclassgeneric(p, true)
  }
  function nlclass(p) {
    return nlclassgeneric(p, false)
  }
  function nlclassgeneric({isActive}, isHome) {
    var d = ""
    //d += isHome ? " pl-3 pr-1 " : " px-2 ";
    d += " py-1 px-2 ";
    d += !isActive ?
    " text-nord5 hover:bg-nord5 hover:text-nord0" :
    " text-nord5 bg-nord10 ";

    // 

    return d
  }
  function NavLeft() {
    return (
      <div className="flex items-center">
      <NavLink to="/" className={nlclasshome}>Home</NavLink>
      <NavLink to="/indexold" className={nlclass}>old remix default index</NavLink>
      </div>
    )
  }
  return (
    <div className={c}>
      <NavLeft />
    </div>
  )
}

