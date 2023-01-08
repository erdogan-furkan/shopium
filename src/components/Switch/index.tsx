import s from "./styles.module.scss";

interface Props {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<Props> = (props) => {
  return (
    <label className={s.switch}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className={s.slider}></span>
    </label>
  );
};

export default Switch;
