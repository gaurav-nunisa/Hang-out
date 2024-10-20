const GenderCheckBox = ({onChangeBoxChange, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text text-gray-500">Male</span>
          <input type="checkbox" 
          checked={selectedGender === "male"} onChange={()=>onChangeBoxChange("male")} className="checkbox checkbox-warning border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer gap-2 ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text  text-gray-500">Female</span>
          <input type="checkbox" 
           checked={selectedGender === "female"} onChange={()=>onChangeBoxChange("female")}className="checkbox checkbox-warning border-slate-900" />
         
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
