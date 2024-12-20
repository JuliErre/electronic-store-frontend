import { FaMinus, FaPlus, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { FaCartShopping, FaChevronDown, FaRegTrashCan } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { Props } from "./types";

const Icon = ({ icon, ...iconProps }: Props<keyof typeof icons>) => {
    const icons = {
        ChevronDown: <FaChevronDown {...iconProps} />,
        Search: <FaSearch {...iconProps} />,
        Cart: <FaCartShopping {...iconProps} />,
        Person: <IoMdPerson {...iconProps} />,
        Add: <FaPlus {...iconProps} />,
        Decrease: <FaMinus {...iconProps} />,
        Trash: <FaRegTrashCan {...iconProps} />,
        SignOut: <FaSignOutAlt {...iconProps} />,
    };

    return icons[icon];
};

export default Icon;
