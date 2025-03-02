import { useContext } from "react";
import {Context} from "@/app/context/DataContext";

const useData = () => useContext(Context);

export default useData