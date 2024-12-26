const DropdownSelect = ({ data, name, defaultOption, county }) => {
  return (
    <div className="select-container">
      <select name={name}>
        <option value="" className="default-option" hidden={county}>
          {defaultOption}
        </option>
        {county && <option value="">Toate</option>}
        {data.map((item, i) => (
          <option key={i} value={item.abr ? item.abr : item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropdownSelect;
