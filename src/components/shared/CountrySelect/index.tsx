import countryCodes from "@/utils/countryCodes.json";
import { Props } from "./types";

const CountrySelect = ({ onChange, value, ...rest }: Props) => {
    return (
        <select onChange={onChange} value={value} className="select" {...rest}>
            {countryCodes.map((country) => (
                <option key={country.code} value={country.dial_code}>
                    {country.emoji} {country.dial_code}
                </option>
            ))}
        </select>
    );
};

export default CountrySelect;
