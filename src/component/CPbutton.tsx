type propsType = {
    label: string;
    onClick?: any;
  };
  
  export default function CPButton(props: propsType) {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="bg-slate-950 font-serif p-2 mb-4 text-white px-8 hover:bg-slate-200 hover:text-black"
      >
        {label}
      </button>
    );
  }
  