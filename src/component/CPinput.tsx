type propsType = {
    label: string;
    onChange?: any;
    type?: string;
    value?: any;
  };
  
  export default function CPInput(props: propsType) {
    const { label, onChange, type, value } = props;
    return (
      <input
        className="font-serif p-2 border-2 border-x-neutral-950 focus:border-y-stone-950 w-full outline-none rounded "
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
      />
    );
  }
  