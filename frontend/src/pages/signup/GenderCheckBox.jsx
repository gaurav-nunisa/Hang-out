const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label cursor-pointer gap-2`}>
          <span className="label-text text-gray-500">Male</span>
          <input type="checkbox" className="checkbox checkbox-warning border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer gap-2`}>
          <span className="label-text  text-gray-500">Female</span>
          <input type="checkbox" className="checkbox checkbox-warning border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
