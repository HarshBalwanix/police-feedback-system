import { useRouter } from "next/navigation";
import { LANG_DROPDOWN } from "../utils/constant";

export default function LangDropDown() {
  const route = useRouter();

  //   const handleChange = (e) => {
  //     route.push("/", undefined, {
  //       locale: e.target.value,
  //     });
  //   };

  return (
    <select
      //   className="h-fit outline-0 bg-transparent focus:bg-[#e8eaed] focus:text-black focus:outline-[10px] focus:outline-[#e8eaed] focus:outline"
      onChange={(e) => {
        route.push("/", undefined, {
          locale: e.target.value,
        });
      }}
      //   value={route.locale}
    >
      {/* {LANG_DROPDOWN.map((lang) => (
        <option value={lang.value} key={lang.id}>
          {lang.label}
        </option>
        
      ))} */}
      {LANG_DROPDOWN.map((op) => (
        <option value={op.value} key={op.id}>
          {op.label}
        </option>
      ))}
    </select>
  );
}
