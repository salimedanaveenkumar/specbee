
type CheckBoxType = {
    isChecked  : boolean,
    sortHandler : () => void,
    label : string
}
export default function CheckBox ({isChecked, sortHandler, label} : CheckBoxType) {
    return (
          <>
             <input
              type="checkbox"
              id={label}
              checked={isChecked}
              onChange={sortHandler}
            />
           <label htmlFor={label} > {label}</label>
          </>
      );
}