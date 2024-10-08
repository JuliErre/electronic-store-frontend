export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
}
